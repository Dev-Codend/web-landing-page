import SectionHeader from '../../../layouts/SectionHeader';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="o-container">
        <SectionHeader light hero />
        <div className="hero__start"><p>Inicio de clases: 7 de Junio</p></div>
        <div className="hero__intro">
          <p className="hero__category">Educación ejecutiva</p>
          <h1 className="hero__title" id="hero-title">DIPLOMADO EN MARKETING VIRTUAL</h1>
          <p className="hero__description">
            Brinda las competencias y herramientas necesarias para gestionar los procesos estratégicos de la organización
            con el fin de afrontar satisfactoriamente el entorno competitivo empresarial.
          </p>
        </div>
      </div>
    </section>
  );
}
