import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import searchIcon from '../../../asset/searchIcon.png';
import BackGround from '../../../asset/postsBackGround.png';
import otherImg1 from '../../../asset/otherImg1.png';
import userImg from '../../../asset/userImg.png';


export const Posts = () => {


  return (
    <div className={styles.content}>
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <Image src={searchIcon} alt="" />
        </div>
        <div className={styles.searchInput}>

        </div>
        <input placeholder="搜索">

        </input>

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
            <div className={styles.postTime}>
              2024-10-16 19:27
            </div>
            <div className={styles.postContent}>
              学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
            </div>
            <div className={styles.sendComment}>
              <Image src={userImg} alt="" />
              <input placeholder="发布你的评论">
              </input>
            </div>
          </div>
        </div>
        {/* <div className={styles.postItem}>
          <div className={styles.userImg}>
            <Image src={otherImg1} alt="" />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              用户名称
            </div>
            <div className={styles.postTime}>
              2024-10-16 19:27
            </div>
            <div className={styles.postContent}>
              学习障碍（Learning Disabilities, LD）是指在听、说、读、写、推理和数学等方面的特定困难。
              这些障碍通常是先天性的，并且可能会影响儿童在学校的表现和日常生活中的学习能力。
            </div>
            <div className={styles.sendComment}>
              <Image src={userImg} alt="" />
              <input placeholder="发布你的评论">
              </input>
            </div>
          </div>
        </div> */}
        
      </div>
      <div className={styles.backGroundImage}>
        <Image src={BackGround} alt="" />
      </div>
    </div>
  )
}