import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';
import userImg from '../../../asset/userImg.png';
import { SendEmail } from '../sendEmail'
import { ShareComment } from '../shareComment'

export const ShareExperiencePage = () => {
  const [pagePart, setPagePart] = React.useState<number>(0);

  const content = React.useMemo(() => {
    switch (pagePart) {
      case 0:
        return (
          <SendEmail />
        )
      case 1:
        return (
          <ShareComment />
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
            官方邮箱
          </button>
          <button
            className={pagePart === 1 ? styles.active : ''}
            onClick={() => setPagePart(1)}
          >
            经验分享
          </button>
        </div>
      </div>
      <div className={styles.rightContent}>
        {content}
      </div>
    </>
  )
}