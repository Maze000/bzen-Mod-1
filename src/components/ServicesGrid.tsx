import React from 'react';
import { 
  Brain, Heart, Flower, Droplets, Sparkles, 
  Circle, Phone, Users, HandHeart 
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Psicología Integrativa',
      description: 'Terapia que integra diferentes enfoques para tu bienestar total',
      icon: Brain,
      color: 'from-primary to-primary-light',
    },
    {
      title: 'Activación Glándula Pineal',
      description: 'Técnicas para despertar tu intuición y conexión espiritual',
      icon: Sparkles,
      color: 'from-secondary to-secondary-light',
    },
    {
      title: 'Terapia Floral',
      description: 'Flores de Bach para equilibrar emociones y estados de ánimo',
      icon: Flower,
      color: 'from-accent to-accent-light',
    },
    {
      title: 'Aromaterapia',
      description: 'Aceites esenciales para relajación y sanación emocional',
      icon: Droplets,
      color: 'from-primary-light to-secondary',
    },
    {
      title: 'Tarot Terapéutico',
      description: 'Herramienta de autoconocimiento y reflexión personal',
      icon: Heart,
      color: 'from-secondary to-accent',
    },
    {
      title: 'Meditación Guiada',
      description: 'Prácticas de mindfulness para la paz interior',
      icon: Circle,
      color: 'from-accent to-primary',
    },
    {
      title: 'Apoyo Emocional Online',
      description: 'Sesiones virtuales con la misma calidad que presencial',
      icon: Phone,
      color: 'from-primary to-secondary-light',
    },
    {
      title: 'Talleres de Crecimiento',
      description: 'Workshops grupales para el desarrollo personal',
      icon: Users,
      color: 'from-secondary-light to-accent-light',
    },
    {
      title: 'Terapias Corporales',
      description: 'Sanación a través del trabajo corporal consciente',
      icon: HandHeart,
      color: 'from-accent-light to-primary-light',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service p-6 hover-lift slide-in-up"
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
                  <button className="btn-ghost w-full">
                    Saber más
                  </button>
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
            <a href="#contacto" className="btn-primary">
              Conversemos sobre tu proceso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;