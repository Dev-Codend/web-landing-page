import SectionHeader from '../../../layouts/SectionHeader';

export default function Investment() {
  return (
    <section className="o-section investment" aria-labelledby="investment-title">
      <div className="o-container">
        <SectionHeader />
        <div className="investment__content">
          <h2 className="investment__title" id="investment-title">Inversión</h2>
          <div className="investment__pricing">
            <div className="investment__discount"><div className="investment__badge"><p>25%</p><label>Dscto.</label></div></div>
            <div className="investment__before"><p>Antes: S/ 2,994.00</p></div>
            <div className="investment__price"><p>S/ 2,245<label>.00</label></p></div>
          </div>
          <div className="investment__cash"><p>Pagando al contado</p></div>
          <div className="investment__installment-caption"><p>O pagando en cuotas</p></div>
          <div className="investment__installments-wrapper">
            <div className="investment__installments">
              {Array.from({ length: 6 }, (_, index) => (
                <div className="investment__installment" key={index}>
                  <div>
                    <fieldset className="investment__border">
                      <legend className="investment__legend"><p>{index === 0 ? 'Matrícula' : `Cuota ${index}`}</p></legend>
                      <p className="investment__amount">S/. 499{index === 0 ? '*' : ''}</p>
                    </fieldset>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="investment__notes">
            <div className="investment__detail"><p>Precio total pagando en cuotas: S/ 2,994</p></div>
            <div className="investment__detail investment__detail--discount"><p>*Obtén el 30% de descuento en la matrícula pagando hasta el 27 de febrero</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
