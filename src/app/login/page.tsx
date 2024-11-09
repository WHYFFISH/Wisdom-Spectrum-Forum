// 'use client'

// import React from 'react';
// import styles from "./login.module.scss";
// // import "../style/global.css"
// // import '../page.css';
// import { CodeLogin } from '../components/CodeLogin'
// import { Registration } from '../components/Registration'
// import { LoginStep } from '../interface/login';
// // import axios from 'axios';
// import { message } from 'antd';
// import { usePathname, useParams, useRouter } from 'next/navigation';
// import logo from '../asset/logo.png';
// import childrenPage from '../asset/children.png';


// import Image from 'next/image';


// const Login = () => {
//   const [loginStatus, setLoginStatus] = React.useState(LoginStep.CodeLogin);
//   const [pictureIndex, setPictureIndex] = React.useState(2);
//   const itemsRef = React.useRef<HTMLImageElement[]>([]);
//   const buttonsRef = React.useRef<HTMLDivElement[]>([]);
//   const router = useRouter();



//   const [loginInformation, setLoginInformation] = React.useState<{
//     phoneNumber: string;
//     password: string;
//     smsCode: string;
//   }>({
//     phoneNumber: '',
//     password: '',
//     smsCode: '',
//   })






//   const prevPicture = () => {
//     setPictureIndex(pictureIndex - 1)
//     if (pictureIndex - 1 < 0) {
//       setPictureIndex(0)
//     }
//   }

//   const nextPicture = () => {
//     setPictureIndex(pictureIndex + 1)
//     if (pictureIndex + 1 > 4) {
//       setPictureIndex(4)
//     }
//   }

//   const jumpToPicture = (index: number) => {
//     setPictureIndex(index);
//   };

//   // const onStart = async () => {

//   //   const { data } = await axios.post("https://art-motion.tech/passport/api/debug/create-user", {
//   //     "phoneNumber": "1234567890"
//   //   });
//   //   // const cookies = cookie.parse(document.cookie);
//   //   const token = data.data.JWT;
//   //   dispatch(setToken(token));
//   //   localStorage.setItem('art-token', token)
//   //   console.log(data.data.JWT);
//   //   if (!token) {
//   //     message.error("未找到登录信息，请重新登录");
//   //     return;
//   //   }

//   //   if (await checkToken(token) == true) {
//   //     message.success("已登录成功！正在跳转首页")
//   //     router.push('/albums');
//   //   }
//   //   else {
//   //     message.error("验证失败！请重新登录")
//   //     return
//   //   }
//   // }

//   const content = React.useMemo(() => {
//     switch (loginStatus) {
//       case 0:
//         return (
//           <CodeLogin
//             loginStatus={loginStatus}
//             onLoginStatusChange={setLoginStatus}
//             loginInformation={loginInformation}
//             onLoginInformationChange={setLoginInformation}
//           />

//         )
//       default:
//         return (
//           <Registration
//             loginStatus={loginStatus}
//             onLoginStatusChange={setLoginStatus}
//             loginInformation={loginInformation}
//             onLoginInformationChange={setLoginInformation}
//           />
//         )
//     }
//   }, [loginStatus, loginInformation]);



//   return (
//     <div className={styles.page}>
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Image src={logo} alt="Logo" />
//       </div>
//       <div className={styles.menu}>
//         {/* <button
//           className={activeButton === 0 ? styles.active : ''}
//           onClick={() => setActiveButton(0)}
//         >
//           首页
//         </button>
//         <button
//           className={activeButton === 1 ? styles.active : ''}
//           onClick={() => setActiveButton(1)}
//         >
//           个人中心
//         </button>
//         <button
//           className={activeButton === 2 ? styles.active : ''}
//           onClick={() => setActiveButton(2)}
//         >
//           交流帖子
//         </button>
//         <button
//           className={activeButton === 3 ? styles.active : ''}
//           onClick={() => setActiveButton(3)}
//         >
//           经验分享
//         </button> */}
//       </div>
//     </header>
//     <div className={styles.main}>
//       <div className={styles.leftContent}>
//         <Image src={logo} alt="Logo" className={styles.mainLogo} />
//         <Image src={childrenPage} alt="leftMainContent" className={styles.mainContent} />
//       </div>
//       <div className={styles.rightContent}>
//         <div className={styles.introduction}>
//           <p>引语：</p>
//           <p>智启无碍交流论坛上线啦！</p>
//           <p>无论你想倾诉、求助，还是分享学困同行的故事，探讨具体问题，甚至只想感慨吐槽几句……都可以写下来发布帖子。我们都会用心倾听，并调动网站所有资源，合作机构的专业特教老师、心理咨询师……各尽其能，提供建议和帮助。
//             如果你的帖子能给其他用户启发与借鉴，我们也会编辑发表在“智启”专栏。
//           </p>
//           <p>愿“智启论坛”可以与你同行，陪伴你走过所有的时光。</p>
//         </div>
//       </div>


//     </div>
//   </div>
//   )
// }

// export default Login