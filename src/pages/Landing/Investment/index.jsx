import SectionHeader from '../../../layouts/SectionHeader';

const projectStages = [
  { label: 'Estrategia', amount: 150 },
  { label: 'Diseño web', amount: 450 },
  { label: 'Contenido', amount: 200 },
  { label: 'Desarrollo', amount: 700 },
  { label: 'Pruebas', amount: 150 },
  { label: 'Publicación', amount: 150 },
];

export default function Investment() {
  return (
    <section className="o-section investment" aria-labelledby="investment-title">
      <div className="o-container">
        <SectionHeader />
        <div className="investment__content">
          <h2 className="investment__title" id="investment-title">Tu proyecto, a tu medida</h2>
          <div className="investment__pricing">
            <div className="investment__before"><p>Tu presencia digital empieza aquí</p></div>
            <div className="investment__price"><p>S/ 1,800<label>.00</label></p></div>
          </div>
          <div className="investment__cash"><p>Diseño, desarrollo y lanzamiento</p></div>
          <div className="investment__installment-caption"><p>Así se distribuye tu inversión</p></div>
          <div className="investment__installments-wrapper">
            <div className="investment__installments">
              {projectStages.map(({ label, amount }) => (
                <div className="investment__installment" key={label}>
                  <div>
                    <fieldset className="investment__border">
                      <legend className="investment__legend"><p>{label}</p></legend>
                      <p className="investment__amount">S/ {amount}</p>
                    </fieldset>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="investment__notes">
            <div className="investment__detail"><p>Una web adaptable, con identidad propia y lista para publicar.</p></div>
            <div className="investment__detail investment__detail--discount"><p>Montos referenciales: ajustamos la propuesta al alcance de tu proyecto.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
