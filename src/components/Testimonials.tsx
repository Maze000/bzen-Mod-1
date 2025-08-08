import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María Elena S.',
      role: 'Ejecutiva',
      content: 'BZEN me ayudó a encontrar equilibrio en mi vida. La combinación de psicoterapia con flores de Bach fue exactamente lo que necesitaba. Me siento más conectada conmigo misma.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Carlos M.',
      role: 'Emprendedor',
      content: 'El trabajo con tarot terapéutico y meditación me abrió una nueva perspectiva sobre mis desafíos. El enfoque holístico de BZEN marca la diferencia.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Ana Sofía R.',
      role: 'Profesora',
      content: 'Después de años de terapia tradicional, encontré en BZEN un espacio donde pude integrar mi sanación emocional con mi crecimiento espiritual. Infinitamente agradecida.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Roberto L.',
      role: 'Gerente de Recursos Humanos',
      content: 'Los talleres para empresas transformaron nuestro ambiente laboral. El equipo de BZEN logró crear un espacio seguro donde todos pudimos crecer juntos.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-section text-text-primary mb-6">
            Lo que dicen quienes nos eligen
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Cada historia de sanación es única. Conoce las experiencias de quienes 
            han encontrado en BZEN su camino hacia el bienestar integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-soft p-8 slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Quote icon */}
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-body text-text-secondary italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-primary/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 fade-in">
          <div className="bg-gradient-soft rounded-radius-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-text-secondary">Personas acompañadas</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">95%</div>
                <div className="text-text-secondary">Satisfacción reportada</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">5</div>
                <div className="text-text-secondary">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;