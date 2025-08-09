import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export type Highlight = { title: string; meal: string; image: string };

export default function HighlightsCarousel({ items }: { items: Highlight[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1800, disableOnInteraction: false }}
      spaceBetween={12}
      breakpoints={{
        0: { slidesPerView: 2.2 },
        640: { slidesPerView: 3.2 },
        1024: { slidesPerView: 5 },
      }}
      className="py-2"
    >
      {items.map((it, idx) => (
        <SwiperSlide key={idx}>
          <div className="rounded-lg overflow-hidden border bg-card hover:shadow-elevated transition-shadow">
            <img src={it.image} alt={`${it.title} - ${it.meal}`} className="h-28 w-full object-cover" loading="lazy" />
            <div className="p-3">
              <div className="text-sm font-medium">{it.title}</div>
              <div className="text-xs text-muted-foreground">{it.meal}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
