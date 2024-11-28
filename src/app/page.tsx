"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import React from 'react';
// import { useRouter } from 'next/navigation';
import logo from '@/asset/logo.png';
import childrenPage from '@/asset/children.png';
import leftUnder from '@/asset/leftUnder.png';
import leftUp from '@/asset/leftUp.png';
import rightUnder from '@/asset/rightUnder.png';
import rightUp from '@/asset/rightUp.png';
import { PersonalPage } from '@/app/components/personalPage'
import { PostsCommunication } from '@/app/components/postsCommunication'
import { ShareExperiencePage } from '@/app/components/shareExperiencePage'

export default function Home() {
  const [pagePart, setPagePart] = React.useState<number>(0);


  const content = React.useMemo(() => {
    switch (pagePart) {
      case 0:
        return (
          <>
            <div className={styles.leftContent}>
              <Image src={logo} alt="Logo" className={styles.mainLogo} />
              <Image src={childrenPage} alt="leftMainContent" className={styles.mainContent} />
            </div>
            <div className={styles.rightContent}>
              <div className={styles.introduction}>
                <div className={styles.introduce}>
                  <p>引语：</p>
                  <p>智启无碍交流论坛上线啦！</p>
                  <p>无论你想倾诉、求助，还是分享学困同行的故事，探讨具体问题，甚至只想感慨吐槽几句……都可以写下来发布帖子。我们都会用心倾听，并调动网站所有资源，合作机构的专业特教老师、心理咨询师……各尽其能，提供建议和帮助。
                    如果你的帖子能给其他用户启发与借鉴，我们也会编辑发表在“智启”专栏。
                  </p>
                  <p>愿“智启论坛”可以与你同行，陪伴你走过所有的时光。</p>
                </div>
                <Image src={leftUnder} alt="" className={styles.leftUnder} />
                <Image src={leftUp} alt="" className={styles.leftUp} />
                <Image src={rightUnder} alt="" className={styles.rightUnder} />
                <Image src={rightUp} alt="" className={styles.rightUp} />
              </div>
            </div>
          </>
        )
      case 1:
        return (
          <PersonalPage />
        )
      case 2:
        return (
          <PostsCommunication />
        )
      case 3:
        return (
          <ShareExperiencePage />
        )
    }
  }, [pagePart]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </div>
        <div className={styles.menu}>
          <button
            className={pagePart === 0 ? styles.active : ''}
            onClick={() => setPagePart(0)}
          >
            首页
          </button>
          <button
            className={pagePart === 1 ? styles.active : ''}
            onClick={() => setPagePart(1)}
          >
            个人中心
          </button>
          <button
            className={pagePart === 2 ? styles.active : ''}
            onClick={() => setPagePart(2)}
          >
            交流帖子
          </button>
          <button
            className={pagePart === 3 ? styles.active : ''}
            onClick={() => setPagePart(3)}
          >
            经验分享
          </button>
        </div>
      </header>
      <div className={styles.main}>
        {content}
      </div>
    </div>
  );
}
