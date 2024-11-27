import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import writeChild from '../../../asset/writeChild.png';
import sun from '../../../asset/sun.png';;


export const SendEmail = () => {



  return (
    <div className={styles.content}>
      <div className={styles.introduction}>
        <p>嗨！这里是“智启无碍”的官方邮箱。</p>
        <p>我们期待在这里收集到家长或者社会人士的想法、经验</p>
        <p>在帮助学习障碍儿童的心路历程，为需要帮助的人提供一份鼓励或者参考！</p>
      </div>
      <div className={styles.emailInput}>
        <textarea placeholder="请输入您的邮件内容"></textarea>
        <Image src={writeChild} alt="" className={styles.writeChild} />
        <Image src={sun} alt="" className={styles.sun} />
      </div>
      <button className={styles.sendBtn}>发送</button>
    </div>
  )
}