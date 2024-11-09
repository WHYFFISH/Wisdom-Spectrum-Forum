'use client'

import { Space, Tooltip, Input, Col, Row, Button, Flex, Typography, Collapse, Modal, message, Checkbox, Upload, UploadProps, InputNumber, Form, Switch, Select, } from "antd"
// import axios from 'axios'
import React from 'react';
import { LoginInformation, LoginStep } from '../../interface/login';
import { useRouter, usePathname } from 'next/navigation';
// import cookie from 'cookie';
// import { fetchData } from "@/api";
import "./index.module.scss"
// import { checkToken } from '../../../api/login';
import backIcon from '../../../assets/back.png';
import Image from 'next/image';


export const Registration: React.FC<{
  loginStatus: number
  onLoginStatusChange: (value: number) => void
  loginInformation: LoginInformation
  onLoginInformationChange: (value: any) => void
}> = ({
  loginStatus,
  onLoginStatusChange,
  loginInformation,
  onLoginInformationChange,
}) => {
    const [form] = Form.useForm();
    const [countdown, setCountdown] = React.useState(0);
    const router = useRouter();
    const loginInformationRef = React.useRef(loginInformation);
    const [title, setTitle] = React.useState('')
    const [submitButton, setSubmitButton] = React.useState('')

    const onValuesChange = (changedValues: any, allValues: any) => {
      onLoginInformationChange((prev: any) => ({
        ...prev,
        ...changedValues.loginInformation
      }));
    };

    const onPhoneNumberBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const phoneNumber = e.target.value;

      onLoginInformationChange((prev: any) => ({
        ...prev,
        phoneNumber: phoneNumber
      }));
    };

    React.useEffect(() => {
      loginInformationRef.current = loginInformation;
    }, [loginInformation]);

    const validatePhoneNumber = (phoneNumber: string) => {
      const phoneRegex = /^1[3-9]\d{9}$/;
      return phoneRegex.test(phoneNumber);
    };

    // const onFinish = async () => {
    //   if (!validatePhoneNumber(loginInformation.phoneNumber)) {
    //     message.error('请输入正确的手机号！');
    //     return;
    //   }
    //   const response = await fetchData('https://art-motion.tech/passport/api/user/password', {
    //     method: 'post',
    //     data: loginInformation,
    //   });

    //   const { code, msg } = response as unknown as { code: number, msg: string };
    //   if (code == -1) {
    //     message.error("验证码无效或已过期！请重新获取验证码")
    //     return
    //   }

    //   const token = response.data.token;
    //   dispatch(setToken(token));
    //   localStorage.setItem('art-token', token)

    //   const responseCheck = await checkToken(token).unwrap();

    //   if (responseCheck.code == 0) {
    //     message.success("已登录成功！正在跳转首页")
    //     router.push('/albums');
    //   }
    //   else {
    //     message.error("验证失败！请重新登录")
    //     return
    //   }
    // };

    React.useEffect(() => {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [countdown]);

    const myCaptcha = React.useRef<any>(null);

    // React.useEffect(() => {
    //   (window as any).initAlicom4({
    //     captchaId: "1b799ad8ff3386a687cf039e1f22d07a",
    //     product: 'bind',
    //     protocol: 'https://'
    //   }, function (captcha: any) {
    //     myCaptcha.current = captcha
    //     captcha.onSuccess(async function () {
    //       const result = captcha.getValidate();
    //       const currentLoginInfo = loginInformationRef.current;

    //       const response = await axios.post(`https://art-motion.tech/passport/api/user/validate-captcha`, {
    //         ...currentLoginInfo,
    //         ...result
    //       })

    //       if (response.data.code == -1) {
    //         if (response.data.error_code == 1000) {
    //           message.error("验证码发送失败！请检查手机号或者其他原因")
    //           return
    //         }
    //         if (response.data.error_code == 2001) {
    //           message.error('图形验证失败！请待会再尝试')
    //           return
    //         }
    //       }

    //       if (response.data.code == 0) {
    //         message.success('验证码已经发送，请在有效时间内输入验证码')
    //         setCountdown(60);
    //       }

    //     })
    //       .onError(function () {
    //         message.error("验证出错！请稍后重试")
    //       });
    //   })
    // }, [loginInformation.phoneNumber])

    React.useEffect(() => {

      if (loginStatus == LoginStep.Registration) {
        setTitle('注册')
        setSubmitButton('注册')
      }
      else {
        setTitle('设置密码')
        setSubmitButton('确认重置')
      }
    }, [loginStatus, title])

    const onSendCaptcha = () => {
      if (myCaptcha.current) {
        myCaptcha.current.showCaptcha();
      }
    }

    const jumpCodeLogin = () => {
      onLoginStatusChange(LoginStep.CodeLogin);
    }

    return (
      <div className='password-form'>
        <div className="top">

          <div className="password-title">
            <Button type="link" htmlType="button" onClick={jumpCodeLogin} className="back">
              &lt; 密码登录
            </Button>
            {title}
          </div>
        </div>
        <div className="dataEntryPassword">

          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onValuesChange={onValuesChange}
            autoComplete="off"
          >
            <Form.Item
              label="手机号码"
              name={['loginInformation', 'phoneNumber']}
              rules={[{ required: true, message: '请输入手机号!' }]}
              labelAlign="right"
              labelCol={{ style: { fontWeight: 'bold' } }}
            >
              <Input placeholder="请输入手机号" className="custom-input" onBlur={onPhoneNumberBlur} />
            </Form.Item>
            <Form.Item
              label="新 密 码"
              name={['loginInformation', 'password']}
              rules={[{ required: true, message: '请输入密码！' }]}
              className="password-input"
              labelAlign="right"
              labelCol={{ style: { fontWeight: 'bold' } }}
            >
              <Input.Password placeholder="请输入密码" className="custom-input" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={[['loginInformation', 'password']]}
              labelAlign="right"
              labelCol={{ style: { fontWeight: 'bold' } }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue(['loginInformation', 'password']) === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('请输入相同的密码！'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="请输入密码" className="custom-input" />
            </Form.Item>
            <Form.Item label="验 证 码"
              labelAlign="right"
              labelCol={{ style: { color: 'red', fontWeight: 'bold' } }}
              rules={[{ required: true, message: '请输入验证码!' }]}
              className="code-input"
            >
              <Space >
                <Form.Item
                  name={['loginInformation', 'smsCode']}
                  rules={[{ required: true, message: '请输入验证码!' }]}
                  noStyle
                >
                  <Input allowClear placeholder="请输入验证码" className="custom-input" />
                </Form.Item>
                <Button id="btn" type="link" htmlType="button"
                  onClick={onSendCaptcha}
                >
                  {countdown > 0 ? `${countdown}秒` : "发送验证码"}
                </Button>
              </Space>
            </Form.Item>

          </Form>
          <Button type="primary" htmlType="submit"
            // onClick={onFinish}
            className='password-button'
          >
            {submitButton}
          </Button>
        </div>
      </div>
    )
  }