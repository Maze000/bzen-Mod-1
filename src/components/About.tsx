import React from 'react';
import { Heart, Shield, Sparkles } from 'lucide-react';
import therapistPortrait from '@/assets/therapist-portrait.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Espacio Seguro',
      description: 'Un ambiente libre de juicios donde puedes ser auténtico',
    },
    {
      icon: Heart,
      title: 'Enfoque Humano',
      description: 'Cada persona es única y merece un acompañamiento personalizado',
    },
    {
      icon: Sparkles,
      title: 'Visión Integral',
      description: 'Integramos mente, cuerpo y alma en tu proceso de sanación',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-healing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative slide-in-up">
            <div className="relative">
              <img
                src={therapistPortrait}
                alt="Fundadora de BZEN"
                className="w-full h-[600px] object-cover rounded-radius-lg shadow-healing"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-radius-lg"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
            </div>

            {/* Quote card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-radius shadow-card max-w-xs">
              <p className="text-sm text-text-secondary italic mb-3">
                "Todo comienza dentro de ti. Te acompañamos en el proceso."
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-soft rounded-full"></div>
                <span className="text-sm font-medium text-text-primary">Equipo BZEN</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="text-section text-text-primary mb-6">
                En BZEN creemos en la sanación integral
              </h2>
              <div className="space-y-6 text-body text-text-secondary">
                <p>
                  En BZEN te ofrecemos un espacio seguro, humano y libre de juicios. 
                  Creemos que todo comienza dentro de ti, y estamos aquí para acompañarte 
                  en tu proceso de autoconocimiento y transformación.
                </p>
                <p>
                  Nuestro enfoque integrativo combina la psicoterapia tradicional con 
                  terapias complementarias ancestrales, creando un puente entre la 
                  ciencia y la espiritualidad para tu bienestar total.
                </p>
                <p>
                  Trabajamos tanto de forma presencial como online, adaptándonos a tus 
                  necesidades y ritmo de vida, siempre con el compromiso de brindarte 
                  la máxima calidad en tu proceso de sanación.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-subsection text-text-primary">
                Nuestros valores fundamentales
              </h3>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-radius shadow-soft flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        {value.title}
                      </h4>
                      <p className="text-text-secondary">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a href="#contacto" className="btn-primary">
                Conoce nuestra visión
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;