import NavIcon from '../../assets/icons/navIcon';
import style from './index.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [active, setActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  /*
   // Add a scroll event listener to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set a threshold for when the navigation becomes sticky
      const threshold = 200; // Adjust this value as needed

      if (window.scrollY > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); */
  return (
    <div className={`${style.navbar}`}>
      <div className={style.icon}>
        <NavIcon />
      </div>

      <div className={style.btnsWrapper}>
        <Link to={'/contact'}>
          <a>Contact Us</a>
        </Link>

        <div className={style.services}>
          <div
            className={style.servicesRow}
            onClick={() => {
              setActive(() => {
                return !active;
              });
            }}
          >
            <a className={style.navBtn}>Services</a>
            <span
              className={`${style.arrowDown} ${active && style.arrowUp}`}
            ></span>
          </div>
          <div className={`${style.dropdown} ${active ? style.active : ''}`}>
            <Link to={'/performance-marketing'}>
              <a>Performance Marketing</a>
            </Link>

            <Link to={'/app-audit'}>
              <a>App Audit</a>
            </Link>
            <Link to={'/growth-consulting'}>
              <a>Growth Consulting</a>
            </Link>
            <a
              onClick={() => {
                setActive(() => {
                  return false;
                });
                const el = document.querySelector('#app-optimization');

                el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              App Optimization
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
