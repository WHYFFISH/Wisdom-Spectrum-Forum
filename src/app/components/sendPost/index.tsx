import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import camera from '../../../asset/camera.png';
import BackGround from '../../../asset/postsBackGround.png';
import otherImg1 from '../../../asset/otherImg1.png';
import userImg from '../../../asset/userImg.png';


export const SendPost = () => {


  return (
    <div className={styles.content}>
      <div className={styles.postWrite}>
        <div className={styles.postWriteTitle}>
          发布帖子
        </div>
        <div className={styles.input}>
          <textarea placeholder="请输入内容" />
        </div>
        <div className={styles.under}>
          <div className={styles.addPhoto}>
            <Image src={camera} alt="" />
            <div className={styles.addPhotoText}>
              添加图片
            </div>
          </div>
          <button className={styles.send}>
            发送
          </button>
        </div>
      </div>
    </div>
  )
}