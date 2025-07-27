import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-meditation.jpg';
import logoNoAlpha from '@/assets/logonoalpha.png';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 bg-gradient-healing overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 fade-in">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-hero text-text-primary mb-4 lg:mb-6 leading-tight flex items-center">
                <img src={logoNoAlpha} alt="Logo" className="h-12 sm:h-16 lg:h-20 w-auto mr-2" />ienvenido a&nbsp;<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BZEN</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-subsection text-text-secondary mb-4 lg:mb-6">
                Centro de Terapias Holísticas y Psicología Integrativa
              </h2>
              <p className="text-base lg:text-body text-text-secondary max-w-xl leading-relaxed">
                Te acompañamos en tu camino de sanación, autoconocimiento y bienestar. 
                Un espacio seguro donde combinar la psicoterapia tradicional con terapias 
                complementarias para tu crecimiento integral.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary inline-flex items-center">
                Empieza tu proceso
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#terapias" className="btn-secondary">
                Conoce nuestras terapias
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-primary/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-text-muted">Atención presencial y online</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm text-text-muted">Reembolso Isapre disponible</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-text-muted">Enfoque integrativo</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last slide-in-up overflow-hidden">
            <div className="relative mx-auto max-w-full">
              <img
                src={heroImage}
                alt="Meditación y sanación en BZEN"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-radius-lg shadow-healing"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-radius-lg"></div>
              
              {/* Floating card */}
              <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 lg:-bottom-6 lg:-left-6 bg-white p-4 lg:p-6 rounded-radius shadow-card max-w-[280px] sm:max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-soft rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">BZEN</span>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Espacio de sanación</p>
                    <p className="text-sm text-text-muted">Mente, cuerpo y alma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;