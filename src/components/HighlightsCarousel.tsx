import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export type Highlight = { title: string; meal: string; image: string; price?: string };

export default function HighlightsCarousel({ items }: { items: Highlight[] }) {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      autoplay={{ 
        delay: 2000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true 
      }}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      spaceBetween={16}
      breakpoints={{
        0: { slidesPerView: 2.2 },
        640: { slidesPerView: 3.5 },
        768: { slidesPerView: 4.5 },
        1024: { slidesPerView: 6 },
      }}
      className="py-4"
    >
      {items.map((it, idx) => (
        <SwiperSlide key={idx}>
          <div className="group rounded-xl overflow-hidden border bg-card hover:shadow-elegant smooth-transition hover-scale cursor-pointer">
            <div className="relative">
              <img 
                src={it.image} 
                alt={`${it.title} - ${it.meal}`} 
                className="h-32 w-full object-cover group-hover:scale-105 smooth-transition" 
                loading="lazy" 
              />
              <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                {it.meal}
              </div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-sm mb-1 group-hover:text-primary smooth-transition">
                {it.title}
              </div>
              {it.price && (
                <div className="text-xs text-primary font-medium">₹{it.price}</div>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
