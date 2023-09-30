import NavIcon from '../../assets/icons/navIcon';
import style from './index.module.scss';

export default function Nav() {
  return (
    <div className={style.navbar}>
      <div className={style.icon}>
        <NavIcon />
      </div>
      <div className={style.btnsWrapper}>
        <a className={style.navBtn}>Company</a>
        <a className={style.navBtn}>Services</a>
        <a className={style.navBtnPrimary}>Contact Us</a>
      </div>
    </div>
  );
}
