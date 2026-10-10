import prestige from '../../assets/razones/prestigio.png';
import quality from '../../assets/razones/calidad.png';
import methodology from '../../assets/razones/metodologia.png';
import networking from '../../assets/razones/networking.png';
import flexibility from '../../assets/razones/flexibilidad.png';
import certification from '../../assets/razones/certificacion.png';

const topics = [
  'Políticas de Gestión de Recursos Humanos',
  'Reclutamiento y Selección de Personal',
  'Gestión de Capacitación y Evaluación de Desempeño',
  'Contratación, Inducción al Personal, Valuación del Puesto y Gestión de Compensación',
  'Desarrollo, Retención, Sanción disciplinaria y Despido laboral',
];

export const modules = [{ id: 1, topics }, { id: 2, topics }];

export const benefits = [
  { title: 'Prestigio', description: '50 años superando tus expectativas', icon: prestige },
  { title: 'Calidad Educativa', description: 'Docentes y tutores altamente capacitados', icon: quality },
  { title: 'Metodología', description: 'Participativa y vivencial.', icon: methodology },
  { title: 'Networking', description: 'Amplía tu red de contactos', icon: networking },
  { title: 'Flexibilidad', description: 'Clases disponibles las 24 horas del día todos los días', icon: flexibility },
  { title: 'Certificación', description: 'Física y Digital', icon: certification },
];

const testimonial = {
  quote: '“It’s the untold story of the images that shaped Canada’s identity and it’s not just for design anywhere nerds.”',
  name: 'Juan Carlos Orellana',
  course: 'Estudiante del curso Contabilidad Para No Contadores',
};

export const testimonials = [
  { id: 1, ...testimonial },
  { id: 2, ...testimonial },
];

// Texto original de la landing; debe sustituirse por los términos definitivos.
export const terms = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis velit ligula. Mauris pretium molestie odio eget semper. Duis accumsan efficitur enim sit amet finibus. Etiam pretium, nulla ac suscipit mattis, ipsum ligula luctus mi, non vestibulum ipsum ipsum in nisl. Duis massa purus, vehicula sit amet feugiat ultrices, sodales at mauris. Maecenas mattis augue nec porttitor tincidunt. Duis malesuada pretium lectus, nec laoreet libero tempus in. Proin nec convallis turpis. Quisque congue sit amet est et venenatis. Ut interdum congue mi a venenatis.",
  "Morbi iaculis, justo sit amet feugiat porta, enim arcu fermentum metus, quis eleifend tortor ipsum non sapien. Pellentesque molestie, sapien sit amet fringilla viverra, libero enim ornare leo, non accumsan eros tortor eu arcu. Curabitur in ligula eu nibh scelerisque iaculis in ut ante. Praesent rhoncus sem sit amet mauris congue sagittis. Aliquam gravida suscipit odio, venenatis suscipit metus efficitur at. Aenean at efficitur dui. Nam finibus tellus sit amet mi finibus, a ullamcorper augue congue. Integer vel tellus mauris. Nulla vulputate, metus nec varius malesuada, erat nisl tincidunt nunc, vel lacinia felis tellus varius diam. Nunc mollis turpis sed diam porttitor, sed sagittis mi rhoncus. Nulla faucibus, quam quis ullamcorper congue, felis velit consectetur lacus, sed interdum dolor sem eu quam. Curabitur commodo urna quis lacinia blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet nunc et maximus mattis. Donec volutpat, sapien ut auctor aliquam, magna ex rutrum mi, dignissim facilisis tortor dui at nunc. Cras metus urna, pharetra nec enim vel, maximus venenatis turpis. Praesent in risus mauris. Vivamus placerat lacus ex, sit amet suscipit ante interdum in. Aliquam aliquet arcu urna, in ullamcorper mi euismod eu. Duis porttitor et lectus vitae sagittis. Maecenas eget ante erat. Donec id accumsan nisl. Suspendisse potenti. Ut ut tellus erat. Etiam sed blandit lacus. Nulla interdum imperdiet mi, nec porta orci. Mauris egestas eros sit amet euismod elementum. Donec posuere tellus vulputate, accumsan enim sed, luctus quam. Duis ac arcu libero. Nulla sed ornare felis. Duis porttitor et lectus vitae sagittis. Maecenas eget ante erat. Donec id accumsan nisl. Suspendisse potenti. Ut ut tellus erat. Etiam sed blandit lacus. Nulla interdum imperdiet mi, nec porta orci. Mauris egestas eros sit amet euismod elementum. Donec posuere tellus vulputate, accumsan enim sed, luctus quam. Duis ac arcu libero. Nulla sed ornare felis."
];
