import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import userImg from '@/asset/userImg.png';


export const PersonalPage = () => {
  return (
    <>
      <div className={styles.leftContent}>
        <div className={styles.userName}>
          用户名称
        </div>
        <div className={styles.userImg}>
          <Image src={userImg} alt="" />
        </div>
        <div className={styles.userId}>
          账号
        </div>
        <div className={styles.userStage}>
          儿童学段
        </div>
        <button className={styles.changeInformation}>
          点此修改个人信息
        </button>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.title}>
          我发布的帖子
        </div>
        <div className={styles.postsContent}>
          <div className={styles.posts}>
            <p>
              学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
              值得注意的是，学习障碍并不等同于智力障碍，许多学习障碍儿童在其他领域可能表现出色。
              学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
              值得注意的是，学习障碍并不等同于智力障碍，许多学习障碍儿童在其他领域可能表现出色。
              学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
              值得注意的是，学习障碍并不等同于智力障碍，许多学习障碍儿童在其他领域可能表现出色。
              并且可能会影响儿童在学校的表现和日常生活中的学习能力。
              值得注意的是，学习障碍并不等同于智力障碍，许多学习障碍儿童在其他领域可能表现出色。
            </p>
          </div>
          <div className={styles.posts}>
            学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
            这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
            值得注意的是，学习障碍并不等同于智力障碍，许多学习障碍儿童在其他领域可能表现出色。
            学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
            这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
            值得注意的是，学习障碍并不等同于智力障碍，许多学习障碍儿童在其他领域可能表现出色。
          </div>
        </div>
      </div>
    </>
  )
}