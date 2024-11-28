import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import otherImg1 from '@/asset/otherImg1.png';


export const CheckComment = () => {



  return (
    <div className={styles.content}>
      <div className={styles.commentList}>
        <div className={styles.comment}>
          <div className={styles.userImg}>
            <Image src={otherImg1} alt="" />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              用户名称
            </div>
            <div className={styles.postTime}>
              评论了你的帖子
            </div>
            <div className={styles.postContent}>
              学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
            </div>
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.userImg}>
            <Image src={otherImg1} alt="" />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              用户名称
            </div>
            <div className={styles.postTime}>
              评论了你的帖子
            </div>
            <div className={styles.postContent}>
              学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}