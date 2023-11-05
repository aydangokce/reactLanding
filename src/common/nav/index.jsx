import NavIcon from '../../assets/icons/navIcon';
import style from './index.module.scss';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [active, setActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
  }, []);
  return (
    <div className={`${style.navbar} ${isSticky && style.sticky}`}>
      <div className={style.icon}>
        <NavIcon />
      </div>

      <div className={style.btnsWrapper}>
        <a
          className={style.navBtnPrimary}
          onClick={() => {
            const el = document.querySelector('#contact');

            el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Us
        </a>
        <div className={style.services}>
          <div className={style.servicesRow}>
            <a
              className={style.navBtn}
              onClick={() => {
                setActive(() => {
                  return !active;
                });
              }}
            >
              Services
            </a>
            <span
              className={`${style.arrowDown} ${active && style.arrowUp}`}
            ></span>
          </div>
          <div className={`${style.dropdown} ${active ? style.active : ''}`}>
            <a
              onClick={() => {
                setActive(() => {
                  return false;
                });
                const el = document.querySelector('#pmarketing');

                el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Performance Marketing
            </a>
            <a
              onClick={() => {
                setActive(() => {
                  return false;
                });
                const el = document.querySelector('#gconsulting');

                el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {' '}
              Growth Consulting
            </a>
            <a
              onClick={() => {
                setActive(() => {
                  return false;
                });
                const el = document.querySelector('#app-audit');

                el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              App Audit
            </a>
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
