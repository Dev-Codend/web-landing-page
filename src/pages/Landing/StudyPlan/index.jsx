import Carousel from '../../../components/Carousel';
import SectionHeader from '../../../layouts/SectionHeader';
import { modules } from '../content';

function ModuleCard({ module }) {
  return (
    <div className="study-plan__slide">
      <div className="study-plan__card">
        <div className="study-plan__module">
          <span>SERVICIO {module.id}</span>
          <h2>{module.title} <br />{module.subtitle}</h2>
          <ul>{module.topics.map((topic) => <li key={topic}>· {topic}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export default function StudyPlan() {
  return (
    <section className="o-section study-plan" aria-labelledby="study-plan-title">
      <div className="o-container"><SectionHeader /></div>
      <div className="study-plan__content">
        <div className="study-plan__heading"><h2 className="study-plan__title" id="study-plan-title">Soluciones web</h2></div>
        <div className="study-plan__slider">
          <div className="study-plan__edge study-plan__edge--left" aria-hidden="true" />
          <div className="study-plan__edge study-plan__edge--right" aria-hidden="true" />
          <Carousel className="study-plan__carousel" items={modules} label="Servicios de diseño web" renderItem={(module) => <ModuleCard module={module} />} />
        </div>
      </div>
    </section>
  );
}
