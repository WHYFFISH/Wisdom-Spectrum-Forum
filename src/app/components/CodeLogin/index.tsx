'use client'

import { Input, Col, Row, Image, Button, Flex, Typography, Collapse, Modal, message, Checkbox, Upload, UploadProps, InputNumber, Form, Switch, Select, } from "antd"
import './index.module.scss';
import { LoginInformation, LoginStep } from '../../interface/login';
import { useRouter, usePathname } from 'next/navigation';
// import cookie from 'cookie';
// import { fetchData } from "@/api";
// import { checkToken } from '../../../api/login';




export const CodeLogin: React.FC<{
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
    const router = useRouter();

    const onValuesChange = (changedValues: any, allValues: any) => {
      onLoginInformationChange((prev: any) => ({
        ...prev,
        ...changedValues.loginInformation
      }));
    };

    const validatePhoneNumber = (phoneNumber: string) => {
      const phoneRegex = /^1[3-9]\d{9}$/;
      return phoneRegex.test(phoneNumber);
    };

    // const onSubmit = async () => {
    //   if (!validatePhoneNumber(loginInformation.phoneNumber)) {
    //     message.error('请输入正确的手机号！')
    //     return
    //   }

    //   const response = await fetchData('https://art-motion.tech/passport/api/user/login', {
    //     method: 'post',
    //     data: { status: 1, ...loginInformation },
    //   });
    //   const { code, msg, error_code } = response as unknown as { code: number, msg: string, error_code: number };
    //   if (code == -1) {
    //     if (error_code == 1000) {
    //       message.error("请点击下方注册按钮进行注册！")
    //       return
    //     }
    //     else if (error_code == 2000) {
    //       message.error("用户名或密码错误！请重新输入")
    //       return
    //     }
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
    // }

    const jumpRegistration = () => {
      onLoginStatusChange(LoginStep.Registration);
    }
    const jumpPassword = () => {
      onLoginStatusChange(LoginStep.SetPassword);
    }

    const [form] = Form.useForm();

    return (
      <div className='code-form'>
        <div className="top">
          <div className="Code-title">
            <h1>登录</h1>
          </div>
        </div>
        <div className="dataEntry">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
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
              <Input placeholder="请输入手机号" className="custom-input" />
            </Form.Item>
            <Form.Item
              label="输入密码"
              name={['loginInformation', 'password']}
              rules={[{ required: true, message: '请输入密码！' }]}
              className="password-input"
              labelAlign="right"
              labelCol={{ style: { fontWeight: 'bold' } }}
            >
              <Input.Password placeholder="请输入密码" className="custom-input" />
            </Form.Item>
          </Form>
        </div>
        <Button className='submit-button' type="primary" htmlType="submit" 
        // onClick={onSubmit} 
        >
          登录
        </Button>
        <div className="jump-button">
          <Button type="link" htmlType="button" onClick={jumpRegistration} className="registration-button">
            注册账号
          </Button>
          <Button type="link" htmlType="button" onClick={jumpPassword} className="setPassword-button">
            忘记密码
          </Button>
        </div>
      </div>
    )
  }