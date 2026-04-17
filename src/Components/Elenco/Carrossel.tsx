import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import de estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import foto1 from '../../assets/materiais/1.png';
import foto2 from '../../assets/materiais/2.png';
import foto3 from '../../assets/materiais/3.png';
import foto4 from '../../assets/materiais/4.png';
import foto5 from '../../assets/materiais/5.png';
import foto6 from '../../assets/materiais/6.png';
import foto7 from '../../assets/materiais/7.png';
import foto8 from '../../assets/materiais/8.png';
import foto9 from '../../assets/materiais/9.png';


const castData = [
  { id: 1, name: 'Brad Pitt', role: 'Tyler Durden', imageUrl: foto1 },
  { id: 2, name: 'Edward Norton', role: 'Narrador', imageUrl: foto2 },
  { id: 3, name: 'Helena Bonham Carter', role: 'Marla Singer', imageUrl: foto3 },
  { id: 4, name: 'Meat Loaf', role: 'Robert "Bob" Paulson', imageUrl: foto4 },
  { id: 5, name: 'Jared Leto', role: 'Angel Face', imageUrl: foto5 },
  { id: 6, name: 'Zach Grenier', role: 'Richard Chesler', imageUrl: foto6 },
  { id: 7, name: 'Holt McCallany', role: 'Paddy', imageUrl: foto7 },
  { id: 8, name: 'Eion Bailey', role: 'Ricky', imageUrl: foto8 },
  { id: 9, name: 'Marla Singer', role: 'Marla Singer', imageUrl: foto9 },
];

export const Carrossel = () => {
  return (
    <section className="bg-sand p-6 md:p-8 font-sans overflow-hidden">
      <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        // Se quiser as setinhas, mude para true
        navigation={true} 
        pagination={false}
      >
        {castData.map((actor) => (
          <SwiperSlide key={actor.id}>
            <div className="flex flex-col items-center ">
              <div className="w-24 h-24 md:w-28 md:h-28 mb-3  overflow-hidden rounded-full border-2 border-transparent">
                <img 
                  src={actor.imageUrl} 
                  alt={actor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center max-w-28">
                <h3 className="font-bold text-header text-xs md:text-sm leading-tight italic">
                  {actor.name}
                </h3>
                <p className="text-[#6B5A46] text-[10px] md:text-xs">
                  {actor.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
