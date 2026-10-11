import SectionHeader from '../../../layouts/SectionHeader';
import { benefits } from '../content';

export default function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="o-container">
        <SectionHeader />
        <div className="benefits__content">
          <div className="benefits__heading"><h2 id="benefits-title">¿Por qué crear tu <br />web con nosotros?</h2></div>
          <div className="benefits__items">
            {benefits.map(({ title, description, icon }) => (
              <div className="benefits__item" key={title}>
                <div className="benefits__icon">
                  <span className="benefits__glyph" style={{ '--benefit-icon': `url("${icon}")` }} aria-hidden="true">
                    <img src={icon} alt="" />
                  </span>
                </div>
                <div className="benefits__text"><h2>{title}</h2><p>{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
