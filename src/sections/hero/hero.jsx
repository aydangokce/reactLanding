import style from './index.module.scss';

export default function Hero() {
  return (
    <div className={style.container}>
      <div className={style.heroLeft}>
        <h1 className={style.heading}>
          Hi we’re <span className={style.headingOrange}>App Pillow</span>
        </h1>
        <h1 className={style.headingUnderlined}>
          Mobile Growth Consultancy & Agency
        </h1>
        <h2 className={style.subHeading}>
          We provide product and marketing teams with the necessary skills and
          knowledge to grow their apps or we manage their mobile growth for them
        </h2>
        <h2 className={style.subHeadingOrange}>
          You don’t have a marketing team or need an extension of your marketing
          team to grow?
        </h2>
        <a
          className={style.btnprimary}
          onClick={() => {
            const el = document.querySelector('#contact');

            el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Us
        </a>
      </div>
      <div className={style.heroRight}>
        <img
          style={{ width: '100%' }}
          src="https://storage.googleapis.com/app-pillow.appspot.com/main.webp"
        ></img>
      </div>
    </div>
  );
}
