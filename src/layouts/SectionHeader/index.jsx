import whiteLogo from '../../assets/logo-white.png';
import blackLogo from '../../assets/logo-black.png';

export default function SectionHeader({ light = false, hero = false }) {
  return (
    <div className={`section-header${hero ? '' : ' section-header--desktop'}`}>
      <div className="section-header__logo">
        <img src={light ? whiteLogo : blackLogo} alt="Zegel IPAE" />
      </div>
    </div>
  );
}
