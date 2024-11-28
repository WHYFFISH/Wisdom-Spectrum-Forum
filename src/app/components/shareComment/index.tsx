import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import family from '@/asset/family.png';
import otherImg1 from '@/asset/otherImg1.png';


export const ShareComment = () => {



  return (
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <div className={styles.title}>
          <p>“经验分享”</p>
          <p>旨在采访关爱学习障碍领域的有经验的代表（家长、社会人士、专家教授等等），
            从他们口中了解学习障碍儿童的相关内容，撰写成经验分享稿，供需要的人参考学习。</p>
          <p>注意：优秀的出彩的经验分享会置顶于留言墙上。</p>
        </div>
        <Image src={family} alt="family" className={styles.familyImg} />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.title}>
          留言墙
        </div>
        <div className={styles.top}>
          <div className={styles.topTitle}>
            置顶
          </div>
          <div className={styles.postItem}>
            <div className={styles.userImg}>
              <Image src={otherImg1} alt="" />
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                用户名称
              </div>
              <div className={styles.postContent}>
                学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
                这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
              </div>
            </div>
          </div>
        </div>
        <div className={styles.current}>
          <div className={styles.topTitle}>
            近期发布
          </div>
          <div className={styles.postsList}>
            <div className={styles.postItem}>
              <div className={styles.userImg}>
                <Image src={otherImg1} alt="" />
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>
                  用户名称
                </div>
                <div className={styles.postContent}>
                  学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
                  这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}