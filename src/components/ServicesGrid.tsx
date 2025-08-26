import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Heart, Flower, Droplets, Sparkles, 
  Circle, Phone, Users, HandHeart, Ear, Star, Zap 
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Psicología Integrativa',
      description: 'Terapia que integra diferentes enfoques para tu bienestar total',
      icon: Brain,
      color: 'from-primary to-primary-light',
      link: '/psicologia-integrativa',
    },
    {
      title: 'Activación Glándula Pineal',
      description: 'Técnicas para despertar tu intuición y conexión espiritual',
      icon: Sparkles,
      color: 'from-secondary to-secondary-light',
      link: '/activacion-glandula-pineal',
    },
    {
      title: 'Terapia Floral',
      description: 'Flores de Bach para equilibrar emociones y estados de ánimo',
      icon: Flower,
      color: 'from-accent to-accent-light',
      link: '/terapia-floral',
    },
    {
      title: 'Aromaterapia',
      description: 'Aceites esenciales para relajación y sanación emocional',
      icon: Droplets,
      color: 'from-primary-light to-secondary',
      link: '/aromaterapia',
    },
    {
      title: 'Tarot Terapéutico',
      description: 'Herramienta de autoconocimiento y reflexión personal',
      icon: Heart,
      color: 'from-secondary to-accent',
      link: '/tarot-terapeutico',
    },
    {
      title: 'Meditación Guiada',
      description: 'Prácticas de mindfulness para la paz interior',
      icon: Circle,
      color: 'from-accent to-primary',
      link: '/meditacion-guiada',
    },
    {
      title: 'Apoyo Emocional Online',
      description: 'Sesiones virtuales con la misma calidad que presencial',
      icon: Phone,
      color: 'from-primary to-secondary-light',
      link: '/apoyo-emocional-online',
    },
    {
      title: 'Ancestrología y Constelaciones Familiares',
      description: 'Sanación transgeneracional y liberación de patrones heredados',
      icon: Users,
      color: 'from-secondary-light to-accent-light',
      link: '/ancestrologia-constelaciones',
    },
    {
      title: 'Terapias Corporales',
      description: 'Sanación a través del trabajo corporal consciente',
      icon: HandHeart,
      color: 'from-accent-light to-primary-light',
      link: '/terapias-corporales',
    },
    {
      title: 'Auriculoterapia',
      description: 'Técnica de acupuntura auricular para equilibrio y bienestar',
      icon: Ear,
      color: 'from-primary to-accent-light',
      link: '/auriculoterapia',
    },
  ];

  return (
    <section id="terapias" className="py-20 bg-gradient-healing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-section text-text-primary mb-6">
            Todas Nuestras Terapias
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Explora nuestra amplia gama de servicios diseñados para tu sanación integral. 
            Cada terapia está pensada para complementar tu proceso de crecimiento personal.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-playfair font-bold text-text-primary">
            Terapia Multidisciplinaria Integral
          </h3>
        </div>

                 {/* Featured Service - Terapia Evolutiva de Sanación */}
         <div className="mb-12">
           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
               <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
               <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
             </div>
             
             {/* Content */}
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
               <div className="flex-1 text-center lg:text-left">
                 <div className="flex items-center justify-center lg:justify-start mb-6">
                   <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mr-4">
                     <Star className="h-12 w-12 text-white" />
                   </div>
                   <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                     <Zap className="h-8 w-8 text-white" />
                   </div>
                 </div>
                 
                 <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
                   Terapia Evolutiva de Sanación
                 </h3>
                 
                 <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                   Nuestro enfoque integral más avanzado que combina múltiples modalidades terapéuticas 
                   para una transformación profunda y duradera del ser en todos sus niveles.
                 </p>
                 
                 <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                   <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                     Sanación Integral
                   </span>
                   <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                     Evolución Consciente
                   </span>
                   <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                     Transformación Profunda
                   </span>
                 </div>
               </div>
               
               <div className="flex-shrink-0">
                 <Link 
                   to="/terapia-evolutiva-sanacion"
                   className="group inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                 >
                   Descubrir Más
                   <div className="ml-3 bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                     <Star className="h-5 w-5 text-primary" />
                   </div>
                 </Link>
               </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
           </div>
         </div>

         <div className="text-center mb-12">
           <h3 className="text-2xl font-playfair font-bold text-text-primary">
             Terapias complementarias
           </h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center lg:place-items-start">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service p-6 hover-lift slide-in-up w-full max-w-sm ${
                services.length % 3 !== 0 && index === services.length - 1 ? 'lg:col-start-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-radius-lg flex items-center justify-center shadow-soft`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link 
                    to={service.link}
                    className="btn-ghost w-full inline-flex items-center justify-center group"
                  >
                    Saber más
                    <div className="ml-2 bg-primary/10 p-1 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Star className="h-3 w-3 text-primary" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-white rounded-radius-lg p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-subsection text-text-primary mb-4">
              ¿No sabes qué terapia elegir?
            </h3>
            <p className="text-body text-text-secondary mb-6">
              Te ayudamos a encontrar el abordaje perfecto para tu proceso de sanación.
            </p>
            <a 
              href="#contacto" 
              className="btn-primary inline-flex items-center group"
            >
              Conversemos sobre tu proceso
              <div className="ml-2 bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                <Star className="h-3 w-3 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;