import React from 'react';
import { Users, TreePine, Sparkles, Heart, Brain, Shield, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import workshopCorporate from '@/assets/workshop-corporate.jpg';
import heroMeditation from '@/assets/hero-meditation.jpg';

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: 'Talleres para Empresas',
      subtitle: 'Bienestar emocional y desarrollo de conciencia organizacional',
      description: 'Programas diseñados específicamente para equipos de trabajo que buscan mejorar su bienestar emocional, comunicación efectiva y desarrollo de conciencia organizacional.',
      image: workshopCorporate,
      icon: Users,
      gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
      features: [
        'Gestión del estrés laboral',
        'Comunicación efectiva y asertiva',
        'Trabajo en equipo y liderazgo consciente',
        'Mindfulness corporativo',
        'Prevención del burnout',
        'Cultura organizacional saludable'
      ],
      duration: '4-8 sesiones',
      format: 'Presencial y online',
      participants: '8-25 personas',
      link: '/talleres-empresas',
      benefits: [
        'Reducción del estrés laboral',
        'Mejora en la comunicación interna',
        'Mayor productividad y creatividad',
        'Ambiente laboral más saludable',
        'Prevención de conflictos',
        'Desarrollo de liderazgo consciente'
      ]
    },
    {
      id: 2,
      title: 'Taller de Crecimiento',
      subtitle: 'Desarrollo personal y crecimiento espiritual',
      description: 'Espacios de desarrollo personal y crecimiento espiritual diseñados para conectar con tu esencia más profunda, liberar patrones limitantes y despertar tu potencial auténtico.',
      image: heroMeditation,
      icon: TreePine,
      gradient: 'bg-gradient-to-br from-secondary/10 to-accent/10',
      features: [
        'Autoconocimiento y autodescubrimiento',
        'Liberación de patrones limitantes',
        'Desarrollo de la intuición',
        'Conexión espiritual',
        'Meditación y mindfulness',
        'Sanación emocional'
      ],
      duration: '6-12 sesiones',
      format: 'Presencial',
      participants: '6-15 personas',
      link: '/taller-crecimiento',
      benefits: [
        'Mayor autoconocimiento',
        'Liberación de bloqueos emocionales',
        'Desarrollo de la intuición',
        'Conexión con tu propósito',
        'Paz interior y equilibrio',
        'Transformación personal profunda'
      ]
    }
  ];

  return (
    <section id="talleres" className="py-20 bg-gradient-healing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-section text-text-primary mb-6">
            Nuestros Talleres
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Espacios de transformación y crecimiento diseñados para acompañarte en tu 
            desarrollo personal y profesional. Descubre el poder del trabajo grupal 
            y la conexión humana.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="space-y-20">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className={`${workshop.gradient} rounded-radius-lg p-8 lg:p-12 slide-in-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-radius shadow-soft flex items-center justify-center">
                      <workshop.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-subsection text-text-primary">{workshop.title}</h3>
                      <p className="text-text-secondary">{workshop.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-body text-text-secondary leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-text-primary">Características principales:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {workshop.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Sparkles className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-text-primary">Beneficios:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {workshop.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Heart className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workshop Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-primary/10">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-text-secondary">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-text-secondary">{workshop.participants}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm text-text-secondary">{workshop.format}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Link 
                      to={workshop.link}
                      className="btn-primary inline-flex items-center group"
                    >
                      Conocer más sobre este taller
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-radius-lg shadow-healing">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    
                    {/* Floating card */}
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-radius shadow-card max-w-[200px]">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-soft rounded-full flex items-center justify-center">
                          <workshop.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary text-sm">{workshop.title}</p>
                          <p className="text-xs text-text-muted">Espacio de transformación</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center fade-in">
          <div className="bg-gradient-soft rounded-radius-lg p-8 lg:p-12">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
              ¿Listo para transformar tu vida?
            </h3>
            <p className="text-body text-text-secondary max-w-2xl mx-auto mb-8">
              Únete a nuestros talleres y descubre el poder del trabajo grupal. 
              Cada sesión es una oportunidad para crecer, sanar y conectar con tu verdadera esencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/talleres-empresas" className="btn-primary">
                Talleres para Empresas
              </Link>
              <Link to="/taller-crecimiento" className="btn-secondary">
                Taller de Crecimiento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
