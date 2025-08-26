import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logoNoAlpha from '@/assets/logonoalpha.png';

// Importar todas las imágenes de la galería
import img1 from '@/assets/galery/IMG-20250809-WA0044.jpg';
import img2 from '@/assets/galery/IMG-20250809-WA0042.jpg';
import img3 from '@/assets/galery/IMG-20250809-WA0054.jpg';
import img4 from '@/assets/galery/IMG-20250809-WA0035.jpg';
import img5 from '@/assets/galery/IMG-20250809-WA0041.jpg';
import img6 from '@/assets/galery/IMG-20250809-WA0060.jpg';
import img7 from '@/assets/galery/IMG-20250809-WA0039.jpg';
import img8 from '@/assets/galery/IMG-20250809-WA0038.jpg';
import img9 from '@/assets/galery/IMG-20250809-WA0049.jpg';
import img10 from '@/assets/galery/IMG-20250809-WA0037.jpg';
import img11 from '@/assets/galery/IMG-20250809-WA0045.jpg';
import img12 from '@/assets/galery/IMG-20250809-WA0036.jpg';
import img13 from '@/assets/galery/IMG-20250809-WA0052.jpg';
import img14 from '@/assets/galery/IMG-20250809-WA0062.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navegación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambiar imagen cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
                 {/* Logo BZEN */}
         <div className="text-center mb-8">
           <div className="text-3xl font-playfair font-bold text-primary flex items-center justify-center">
             <img src={logoNoAlpha} alt="Logo" className="h-10 w-auto mr-1" />ZEN CON <span className="text-red-500 ml-2">♥</span>
           </div>
         </div>

        <div className="relative">
          {/* Carrusel principal */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="aspect-[16/9] relative">
                    <img
                      src={image}
                      alt={`Imagen ${index + 1} del espacio de sanación`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de navegación */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
