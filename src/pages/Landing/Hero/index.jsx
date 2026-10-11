import SectionHeader from '../../../layouts/SectionHeader';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="o-container">
        <SectionHeader light hero />
        <div className="hero__start"><p>Tu próximo proyecto empieza aquí</p></div>
        <div className="hero__intro">
          <p className="hero__category">Diseño y desarrollo web</p>
          <h1 className="hero__title" id="hero-title">PÁGINAS WEB Y LANDING PAGES</h1>
          <p className="hero__description">
            Creamos experiencias digitales que presentan tu negocio, conectan con tus visitantes
            y facilitan el siguiente paso: conocer tus servicios o ponerse en contacto contigo.
          </p>
        </div>
      </div>
    </section>
  );
}
