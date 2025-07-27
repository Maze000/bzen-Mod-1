import React from 'react';
import { ArrowRight, Heart, Brain, Users, Sparkles } from 'lucide-react';
import therapyHands from '@/assets/therapy-hands.jpg';
import therapyOffice from '@/assets/therapy-office.jpg';
import workshopCorporate from '@/assets/workshop-corporate.jpg';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: 'Psicoterapia Individual',
      description: 'Atención psicológica personalizada con enfoque integrativo. Disponible presencial y online con reembolso Isapre.',
      image: therapyOffice,
      icon: Brain,
      gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
      reverse: false,
    },
    {
      id: 2,
      title: 'Terapias Complementarias',
      description: 'Flores de Bach, Tarot Terapéutico, aromaterapia y activación de glándula pineal para un abordaje holístico.',
      image: therapyHands,
      icon: Heart,
      gradient: 'bg-gradient-to-br from-secondary/10 to-accent/10',
      reverse: true,
    },
    {
      id: 3,
      title: 'Mindfulness y Terapia Evolutiva',
      description: 'Acompañamiento consciente en tu proceso de autoconocimiento y crecimiento personal.',
      image: therapyOffice,
      icon: Sparkles,
      gradient: 'bg-gradient-to-br from-accent/10 to-primary/10',
      reverse: false,
    },
    {
      id: 4,
      title: 'Talleres para Empresas',
      description: 'Programas de bienestar emocional y desarrollo de conciencia organizacional para equipos de trabajo.',
      image: workshopCorporate,
      icon: Users,
      gradient: 'bg-gradient-to-br from-primary/10 to-accent/10',
      reverse: true,
    },
  ];

  return (
    <section id="servicios-destacados" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-section text-text-primary mb-6">
            Nuestros Servicios Principales
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Combinamos la psicoterapia tradicional con terapias complementarias 
            para ofrecerte un abordaje integral de tu bienestar.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.gradient} rounded-radius-lg p-8 lg:p-12 slide-in-up`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                service.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${service.reverse ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-radius shadow-soft flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-subsection text-text-primary">{service.title}</h3>
                  </div>
                  
                  <p className="text-body text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contacto" className="btn-accent inline-flex items-center">
                      Reservar sesión
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <button className="btn-ghost">
                      Saber más
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${service.reverse ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-radius-lg shadow-healing group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-glow opacity-50"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;