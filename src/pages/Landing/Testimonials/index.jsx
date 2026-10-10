import Carousel from '../../../components/Carousel';
import SectionHeader from '../../../layouts/SectionHeader';
import { testimonials } from '../content';

export default function Testimonials() {
  return (
    <section className="testimonials" aria-label="Testimonios de estudiantes">
      <div className="o-container"><SectionHeader light /></div>
      <Carousel
        items={testimonials}
        variant="testimonials"
        label="Testimonios"
        renderItem={(testimonial) => (
          <div className="testimonials__slide">
            <div className="o-container">
              <div className="testimonials__text"><h2>{testimonial.quote}</h2><h3>{testimonial.name}</h3><p>{testimonial.course}</p></div>
            </div>
          </div>
        )}
      />
    </section>
  );
}
