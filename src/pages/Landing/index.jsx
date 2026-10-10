import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import useEnrollment from '../../hooks/useEnrollment';
import EnrollmentPanel from '../../layouts/EnrollmentPanel';
import Hero from './Hero';
import StudyPlan from './StudyPlan';
import Investment from './Investment';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import TermsModal from './TermsModal';

export default function Landing() {
  const isMobile = useMediaQuery('(max-width: 1199px)');
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const form = useEnrollment(() => setEnrollmentOpen(false));

  return (
    <>
      <div className={`landing${termsOpen ? ' landing--blurred' : ''}`}>
        <main className="landing__content">
          <Hero />
          <StudyPlan />
          <Investment />
          <Benefits />
          <Testimonials />
        </main>
        <div className="contact-cta">
          <button type="button" className="contact-cta__button" onClick={() => setEnrollmentOpen(true)}>
            <span className="contact-cta__title">Comienza aquí</span>
            <span>Para ponernos en contacto contigo</span>
          </button>
        </div>
        <EnrollmentPanel
          isMobile={isMobile}
          open={enrollmentOpen}
          onClose={() => setEnrollmentOpen(false)}
          onOpenTerms={() => setTermsOpen(true)}
          form={form}
        />
      </div>
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
