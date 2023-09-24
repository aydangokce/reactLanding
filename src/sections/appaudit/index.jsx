import RightArrow from '../../assets/icons/rightArrow';
import style from './index.module.scss';

export default function AppAudit() {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <h1>App Audit</h1>
        <div className={style.card}>
          <img src="https://storage.googleapis.com/app-pillow.appspot.com/appaudit.webp"></img>
          <div className={style.points}>
            <div className={style.pointsRow}>
              <RightArrow />
              <p>
                Health check on your tracking tools, event and tracking set up
              </p>
            </div>
            <div className={style.pointsRow}>
              <RightArrow />
              <p>User journey and onboarding tracks </p>
            </div>
            <div className={style.pointsRow} style={{ margin: '0' }}>
              <RightArrow />
              <p>Investment mix and relevant KPIs </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <h1>App Store Optimization</h1>
        <div className={style.card}>
          <div className={style.points}>
            <div className={style.pointsRow}>
              <RightArrow />
              <p>
                Health check on your tracking tools, event and tracking set up
              </p>
            </div>
            <div className={style.pointsRow}>
              <RightArrow />
              <p>User journey and onboarding tracks </p>
            </div>
            <div className={style.pointsRow} style={{ margin: '0' }}>
              <RightArrow />
              <p>Investment mix and relevant KPIs </p>
            </div>
          </div>
          <img src="https://storage.googleapis.com/app-pillow.appspot.com/appstore.webp"></img>
        </div>
      </div>
    </div>
  );
}
