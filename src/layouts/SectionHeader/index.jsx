export default function SectionHeader({ light = false, hero = false }) {
  return (
    <div className={`section-header${hero ? '' : ' section-header--desktop'}`}>
      <div className={`section-header__logo${light ? ' section-header__logo--light' : ''}`}>
        <span className="section-header__brand">DISEÑO WEB</span>
        <span className="section-header__tagline">PÁGINAS & LANDINGS</span>
      </div>
    </div>
  );
}
