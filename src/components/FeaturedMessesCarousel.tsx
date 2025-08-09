import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MessCard, { Mess } from "./MessCard";

export default function FeaturedMessesCarousel({ messes }: { messes: Mess[] }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={16}
      breakpoints={{
        0: { slidesPerView: 1.05 },
        640: { slidesPerView: 1.4 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="py-2"
    >
      {messes.map((m) => (
        <SwiperSlide key={m.id} className="pb-8">
          <MessCard mess={m} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
