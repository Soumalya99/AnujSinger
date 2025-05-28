import Swiper from 'swiper';
import { Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function swiperinit(){
    const swiper = new Swiper('.testimonial-swiper', {
        modules: [Pagination],
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }
    });
    return swiper;
}
export function swiperAbtgallery(){
    const swiper = new Swiper('.about-swiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        spaceBetween: 24,
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    return swiper;
}