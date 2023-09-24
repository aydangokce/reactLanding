import AppleIcon from '../../assets/icons/apple';
import style from './index.module.scss';

export default function PerformanceMarketing() {
  return (
    <div className={style.container}>
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
        </div>
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
        </div>
      </div>
    </div>
  );
}
