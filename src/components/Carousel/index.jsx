import useCarousel from '../../hooks/useCarousel';
import leftArrow from '../../assets/arrow-left.svg';
import rightArrow from '../../assets/arrow-right.svg';

export default function Carousel({ items, renderItem, label, className = '', variant = 'plan' }) {
  const { position, animating, activeIndex, move, finish } = useCarousel(items.length);
  const slides = [items.at(-1), ...items, items[0]];

  return (
    <div
      className={`carousel carousel--${variant} ${className}`}
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      onKeyDown={(event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      }}
    >
      <div className="carousel__viewport">
        <div
          className={`carousel__track${animating ? ' carousel__track--animated' : ''}`}
          style={{ transform: `translateX(-${position * 100}%)` }}
          onTransitionEnd={(event) => { if (event.target === event.currentTarget) finish(); }}
        >
          {slides.map((item, index) => (
            <div
              className="carousel__slide"
              key={`${item.id}-${index}`}
              aria-hidden={index !== position}
              inert={index !== position}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      {[-1, 1].map((direction) => (
        <button
          type="button"
          className={`carousel__arrow carousel__arrow--${direction === -1 ? 'previous' : 'next'}`}
          aria-label={direction === -1 ? 'Anterior' : 'Siguiente'}
          onClick={() => move(direction)}
          key={direction}
        >
          <img src={direction === -1 ? leftArrow : rightArrow} alt="" />
        </button>
      ))}
      <span className="u-sr-only" aria-live="polite" aria-atomic="true">
        {activeIndex + 1} de {items.length}
      </span>
    </div>
  );
}
