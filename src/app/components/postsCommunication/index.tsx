import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import userImg from '../../../asset/userImg.png';
import { Posts } from '../posts'
import { SendPost } from '../sendPost'
import { CheckComment } from '../checkComment'

export const PostsCommunication = () => {
  const [pagePart, setPagePart] = React.useState<number>(0);

  const content = React.useMemo(() => {
    switch (pagePart) {
      case 0:
        return (
          <Posts />
        )
      case 1:
        return (
          <SendPost />
        )
      case 2:
        return (
          <CheckComment />
        )
    }
  }, [pagePart]);

  return (
    <>
      <div className={styles.leftContent}>
        <div className={styles.userName}>
          用户名称
        </div>

        <div className={styles.userImg}>
          <Image src={userImg} alt="" />
        </div>
        <div className={styles.menu}>
          <button
            className={pagePart === 0 ? styles.active : ''}
            onClick={() => setPagePart(0)}
          >
            交流
          </button>
          <button
           className={pagePart === 1 ? styles.active : ''}
           onClick={() => setPagePart(1)}
          >
            发帖
          </button>
          <button
           className={pagePart === 2 ? styles.active : ''}
           onClick={() => setPagePart(2)}
          >
            查看评论
          </button>
        </div>
      </div>
      <div className={styles.rightContent}>
        {content}
      </div>
    </>
  )
}