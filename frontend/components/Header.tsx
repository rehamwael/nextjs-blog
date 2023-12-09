import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';


const Header = () => {
    return(
        <header className={styles.mainHeader}>
        <nav>
            <ul className={styles.navLeft}>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
        {/* <ul className={styles.infoLeft}>
            <li>UI Engineer</li>
            <li>Full Stack Engineer</li>
            <li>Software Engineer</li>
        </ul> */}
        <h1>
            <svg viewBox="0 0 134 115"  width="562" height="693">
                <defs>
                  <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
                    <stop stopColor="#ff3000" offset="0%"/>
                    <stop stopColor="#ed0200" offset="33%"/>
                    <stop stopColor="#ff096c" offset="66%"/>
                    <stop stopColor="#d50082" offset="100%"/>
                  </linearGradient>
                </defs>
                <text fill="url(#rainbow)">
                    <tspan fontSize="57" x="46" dy="60">R</tspan>
                    <tspan fontSize="38" x="85" dy="7">e</tspan>
                    <tspan fontSize="50" x="102" dy="3">h</tspan>
                    <tspan fontSize="39" x="70" dy="14">a</tspan>
                    <tspan fontSize="52" x="89" dy="18">m</tspan>
                  </text>
              </svg>
             </h1>
             <div className={styles.headerContent}>
                <span className={styles.titleTxt}>Front-End Engineer</span>
                <div className={styles.dFlex}>
                 <p>
                    Simple, Positive girl and unstopped learner.
                </p>
                 <p>
                    If you want to know more about me, my work, or work with me scroll down.
                 </p>
                </div>
             </div>
             <div id={styles.IntroLineContainer} style={{overflow: `hidden`}}><span id={styles.introLineWrap} className="oh"><span id={styles.introLine} style={{transform: `translate3d(0px, 0%, 0px)`}}></span></span></div>

    </header>
    )
}

export default Header;
