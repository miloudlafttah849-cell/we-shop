
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

declare const Swiper: any;

const slides = [
  {
    image: 'https://picsum.photos/seed/slide1/1200/500',
    title: 'اكتشف مجموعتنا الجديدة',
    subtitle: 'أحدث صيحات الموضة بانتظارك',
    link: '/shop/wears'
  },
  {
    image: 'https://picsum.photos/seed/slide2/1200/500',
    title: 'جمال لا يقاوم',
    subtitle: 'أفضل مستحضرات التجميل العالمية',
    link: '/shop/cosmetics'
  },
  {
    image: 'https://picsum.photos/seed/slide3/1200/500',
    title: 'راحة وأناقة',
    subtitle: 'تشكيلة واسعة من الأحذية لجميع المناسبات',
    link: '/shop/shoes'
  }
];

const ImageSlider: React.FC = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper-container h-64 md:h-96 w-full">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-md md:text-xl mb-4">{slide.subtitle}</p>
              <NavLink to={slide.link} className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors">
                تسوق الآن
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev text-white"></div>
      <div className="swiper-button-next text-white"></div>
    </div>
  );
};

export default ImageSlider;
