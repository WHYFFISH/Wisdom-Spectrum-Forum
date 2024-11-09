import Image from "next/image";
import styles from "./index.module.scss";
import React from 'react';


export const PersonalPage = () => {
  return (
    <>
      <div className={styles.leftContent}>
        {/* <Image src={logo} alt="Logo" className={styles.mainLogo} />
        <Image src={childrenPage} alt="leftMainContent" className={styles.mainContent} /> */}
      </div>
      <div className={styles.rightContent}>
        <div className={styles.introduction}>
          <p>引语：</p>
          <p>智启无碍交流论坛上线啦！</p>
          <p>无论你想倾诉、求助，还是分享学困同行的故事，探讨具体问题，甚至只想感慨吐槽几句……都可以写下来发布帖子。我们都会用心倾听，并调动网站所有资源，合作机构的专业特教老师、心理咨询师……各尽其能，提供建议和帮助。
            如果你的帖子能给其他用户启发与借鉴，我们也会编辑发表在“智启”专栏。
          </p>
          <p>愿“智启论坛”可以与你同行，陪伴你走过所有的时光。</p>
        </div>
      </div>
    </>
  )
}