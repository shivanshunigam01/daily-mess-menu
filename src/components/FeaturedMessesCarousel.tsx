import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import MessCard, { Mess } from "./MessCard";

export default function FeaturedMessesCarousel({ messes }: { messes: Mess[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        autoplay={{ 
          delay: 3000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        spaceBetween={24}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.8 },
          768: { slidesPerView: 2.4 },
          1024: { slidesPerView: 3.2 },
        }}
        className="py-4 !pb-12"
      >
        {messes.map((m) => (
          <SwiperSlide key={m.id} className="hover-lift">
            <MessCard mess={m} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
