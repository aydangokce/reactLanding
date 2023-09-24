import AppAuditIcon from '../../assets/icons/appAudit';
import AppStoreIcon from '../../assets/icons/appStore';
import MarketingIcon from '../../assets/icons/marketing';
import PerformanceMarketingIcon from '../../assets/icons/performanceMarketing';
import GrowthIcon from '../../assets/icons/growth';
import style from './index.module.scss';

export default function Services() {
  return (
    <div className={style.container}>
      <div className={style.headerWrapper}>
        <h1 className={style.heading}>Let's Work Together On</h1>
        <p className={style.bodyText}>
          Presenting Our Comprehensive Array of Services:Unleash Your Digital
          Potential with Us!
        </p>
      </div>
      <div className={style.cardWrapper}>
        <div className={style.cardRow}>
          <div className={style.card}>
            <div className={style.cardLeft}>
              <MarketingIcon />
            </div>
            <div className={style.cardRight}>
              <h2>Marketing Automation</h2>
              <p>
                Developing a predictive forecast modeling for your business to
                simplify your investment decisions.
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardLeft}>
              <AppStoreIcon />
            </div>
            <div className={style.cardRight}>
              <h2>App Store Optimization</h2>
              <p>
                Leveling up your app store presence via app store optimisation
              </p>
            </div>
          </div>
        </div>
        <div className={style.cardRow}>
          <div className={style.card}>
            <div className={style.cardLeft}>
              <AppAuditIcon />
            </div>
            <div className={style.cardRight}>
              <h2>App Audit</h2>
              <p>
                Making a comprehensive app audit to understand what needs to be
                prioritized
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardLeft}>
              <PerformanceMarketingIcon />
            </div>
            <div className={style.cardRight}>
              <h2>Performance Marketing</h2>
              <p>
                Scaling your performance marketing channels efficiently and
                optimizing your user acquisition campaigns.
              </p>
            </div>
          </div>
        </div>
        <div className={style.cardRow}>
          <div className={style.card}>
            <div className={style.cardLeft}>
              <GrowthIcon />
            </div>
            <div className={style.cardRight}>
              <h2>Growth Consulting</h2>
              <p>
                Strategize your user acquisition with the right investment mix
                and KPIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
