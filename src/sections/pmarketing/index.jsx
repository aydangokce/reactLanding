import AppleIcon from '../../assets/icons/apple';
import GoogleIcon from '../../assets/icons/googleIcon';
import MetaIcon from '../../assets/icons/metaIcon';
import TiktokIcon from '../../assets/svg/tiktok.svg';
import style from './index.module.scss';
import { motion } from 'framer-motion';

export default function PerformanceMarketing() {
  const cardVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };
  return (
    <div className={style.container} id="pmarketing">
      <div className={style.header}>
        <h2>Performance Marketing</h2>
        <h1>Create the winning campaign structure</h1>
        <p>
          ✔️ Set up your campaigns from stratch or improve the effectiveness and
          develop holistic strategies to boost your ROI.<br></br> ✔️ Execute the
          daily operations of your campaigns alongside with your business KPIs.
          <br></br>✔️ Review your ad assets. <br></br>✔️ Full account management
          and multichannel approach. <br></br>✔️ Extensive experience on
          performance marketing.
        </p>
      </div>
      <div className={style.cardsWrapper}>
        <div className={style.cardRow}>
          <div className={style.card}>
            <div className={style.iconWrapper}>
              <AppleIcon />
            </div>

            <p>
              <span className={style.orange}>●</span>Organize KW groups based on
              relevancy to fit your brand
            </p>
            <p>
              <span className={style.orange}>●</span>Develop high converting ads
            </p>
            <p>
              <span className={style.orange}>●</span>Create the granular and
              winning campaign structure
            </p>
            <p>
              <span className={style.orange}>●</span>Leverage custom product
              pages.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.iconWrapper}>
              <GoogleIcon />
            </div>

            <p>
              <span className={style.orange}>●</span>Advertise your App across
              different Google networks such as Google Search, Google Display,
              YouTube and GooglePlay
            </p>
            <p>
              <span className={style.orange}>●</span>Having brand – nonbrand
              segregation for your campaigns to ensure efficient buying.
            </p>
            <p>
              <span className={style.orange}>●</span>Find the optimum bidding
              strategy based on your business goal Fuel your KPIs with the
              perfect creative strategy
            </p>
          </div>
        </div>
        <div className={style.cardRow}>
          <div className={style.card}>
            <div className={style.iconWrapper} id={style.metaWrapper}>
              <MetaIcon />
            </div>
            <p>
              <span className={style.orange}>●</span>Create different campaigns
              for the various strategies in your buying cycle
            </p>
            <p>
              <span className={style.orange}>●</span>Maximize campaign results
              with A-B testing
            </p>
            <p>
              <span className={style.orange}>●</span>Be present in one of the
              biggest social platform with your app
            </p>

            <p>
              <span className={style.orange}>●</span>Create a test and learn
              agenda to find the winning creative and bidding
            </p>
          </div>
          <div className={style.card}>
            <div className={style.iconWrapper}>
              <img src={TiktokIcon} id={style.tiktok}></img>
            </div>

            <p>
              <span className={style.orange}>●</span>Create your full funnel
              strategy via leveraging the authenticity of the platform
            </p>
            <p>
              <span className={style.orange}>●</span>Test different campaign and
              bidding types to find the perfect fit for your business
            </p>
            <p>
              <span className={style.orange}>●</span>Drive traffic, engagement,
              sales and app installs with the power of video contents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
