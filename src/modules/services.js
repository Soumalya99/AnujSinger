import Swiper from 'swiper';
import { Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function serviceInit(){
    const swiper = new Swiper('.services-swiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        spaceBetween: 16,
        centeredSlides: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        slidesPerView: 1,
        pagination: { el: '.services-swiper .swiper-pagination', clickable: true },
        breakpoints: {
            640: { slidesPerView: 1 },    // 1 card on small screens
            768: { slidesPerView: 2 },    // 2 cards on md
            1024: { slidesPerView: 3 },   // 3 cards on lg
            1280: { slidesPerView: 4 },   // 4 cards on xl
        },
  });
  return swiper
}