import style from './index.module.scss';

export default function GrowthConsulting() {
  const bulletPoints = [
    'Create the channel mix and the funnel strategy for you acc to your business goals',
    'Build your short and long term business plan',
    'Create and manage your campaigns, consult your team on app performance marketing',
    'Ensure your organic store presence and strategize your app store optimization efforts',
  ];

  return (
    <div className={style.container} id="gconsulting">
      <div className={style.header}>
        <div className={style.headerLeft}>
          <h2>Growth Consulting</h2>
          <h1>
            In a continuously evolving mobile app ecosystem, brands need a
            holistic approach to app growth.
          </h1>
          <p>
            The right levers should be moved in marketing to make the digital
            products successful.
          </p>
        </div>
        <div className={style.headerRight}>
          <img src="https://storage.googleapis.com/app-pillow.appspot.com/growth.webp"></img>
        </div>
      </div>
      <div className={style.pointsWrapper}>
        <div className={style.bulletsRow}>
          {bulletPoints.map((point, i) => {
            if (i < 2) {
              return (
                <div className={style.rowCell}>
                  <span className={style.dot}>{i + 1}</span>
                  <p>{point}</p>
                </div>
              );
            }
          })}
        </div>
        <div className={style.bulletsRow}>
          {bulletPoints.map((point, i) => {
            if (i > 1) {
              return (
                <div className={style.rowCell}>
                  <span className={style.dot}>{i + 1}</span>
                  <p>{point}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
