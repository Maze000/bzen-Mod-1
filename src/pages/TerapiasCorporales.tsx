import React from 'react';
import { ArrowLeft, Hand, Heart, Waves, Zap, Sun, Moon, Wind, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TerapiasCorporales = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Liberación de Tensiones',
      description: 'Elimina bloqueos físicos y emocionales almacenados en el cuerpo'
    },
    {
      icon: Waves,
      title: 'Mejora la Circulación',
      description: 'Estimula el flujo sanguíneo y linfático para una mejor salud'
    },
    {
      icon: Zap,
      title: 'Equilibrio Energético',
      description: 'Armoniza los centros energéticos y restaura el flujo vital'
    },
    {
      icon: Sun,
      title: 'Bienestar Integral',
      description: 'Conecta cuerpo, mente y espíritu en una experiencia holística'
    }
  ];

  const corporalTherapies = [
    {
      title: 'Masoterapia Holística',
      description: 'Técnicas de masaje terapéutico que combinan tradiciones orientales y occidentales',
      icon: Hand,
      color: 'from-primary to-primary-light',
      techniques: ['Masaje Sueco', 'Masaje Tailandés', 'Reflexología', 'Digitopuntura'],
      duration: '60-90 min',
      benefits: ['Relajación profunda', 'Alivio del dolor', 'Mejora flexibilidad', 'Reducción estrés']
    },
    {
      title: 'Reiki y Sanación Energética',
      description: 'Canalización de energía universal para equilibrar y sanar el campo energético',
      icon: Zap,
      color: 'from-secondary to-secondary-light',
      techniques: ['Reiki Usui', 'Sanación Pránica', 'Toque Terapéutico', 'Equilibrio Chakras'],
      duration: '45-60 min',
      benefits: ['Balance energético', 'Sanación emocional', 'Paz interior', 'Vitalidad renovada']
    },
    {
      title: 'Terapia Craneosacral',
      description: 'Técnica suave que trabaja con el sistema craneosacral para liberar restricciones',
      icon: Waves,
      color: 'from-accent to-accent-light',
      techniques: ['Liberación Miofascial', 'Técnicas Craneales', 'Equilibrio Sacral', 'Armonización'],
      duration: '60-75 min',
      benefits: ['Alivio migrañas', 'Mejor sueño', 'Reducción ansiedad', 'Claridad mental']
    },
    {
      title: 'Aromaterapia Corporal',
      description: 'Combinación de masaje terapéutico con aceites esenciales puros',
      icon: Flower2,
      color: 'from-primary-light to-secondary',
      techniques: ['Masaje Aromático', 'Envolturas', 'Compresas', 'Inhalaciones'],
      duration: '75-90 min',
      benefits: ['Relajación sensorial', 'Detoxificación', 'Hidratación profunda', 'Equilibrio hormonal']
    },
    {
      title: 'Terapia de Polaridad',
      description: 'Equilibrio de los campos energéticos del cuerpo a través del toque consciente',
      icon: Sun,
      color: 'from-secondary-light to-accent',
      techniques: ['Contactos Polares', 'Movimientos Energéticos', 'Respiración', 'Estiramientos'],
      duration: '60 min',
      benefits: ['Integración energética', 'Flexibilidad', 'Vitalidad', 'Autoconocimiento']
    },
    {
      title: 'Masaje con Piedras Calientes',
      description: 'Terapia que utiliza piedras volcánicas calientes para relajación profunda',
      icon: Moon,
      color: 'from-accent-light to-primary',
      techniques: ['Piedras Basálticas', 'Termoterapia', 'Masaje Profundo', 'Relajación'],
      duration: '90 min',
      benefits: ['Relajación muscular', 'Mejora circulación', 'Alivio dolor crónico', 'Paz mental']
    }
  ];

  const bodyAreas = [
    {
      area: 'Sistema Muscular',
      description: 'Tratamiento de contracturas, tensiones y dolores musculares',
      focus: ['Cuello y hombros', 'Espalda', 'Extremidades', 'Zona lumbar']
    },
    {
      area: 'Sistema Nervioso',
      description: 'Relajación del sistema nervioso y reducción del estrés',
      focus: ['Calma mental', 'Equilibrio emocional', 'Mejor sueño', 'Reducción ansiedad']
    },
    {
      area: 'Sistema Circulatorio',
      description: 'Estimulación de la circulación sanguínea y linfática',
      focus: ['Drenaje linfático', 'Oxigenación', 'Eliminación toxinas', 'Vitalidad']
    },
    {
      area: 'Sistema Energético',
      description: 'Equilibrio de chakras y meridianos energéticos',
      focus: ['Chakras principales', 'Meridianos', 'Aura', 'Campo electromagnético']
    }
  ];

  const sessionStructure = [
    {
      phase: 'Evaluación Inicial',
      duration: '10-15 min',
      description: 'Consulta sobre necesidades específicas, historial de salud y objetivos terapéuticos',
      activities: ['Entrevista personal', 'Evaluación postural', 'Identificación áreas tensas', 'Selección técnicas']
    },
    {
      phase: 'Preparación',
      duration: '5-10 min',
      description: 'Creación del ambiente terapéutico y preparación del cuerpo',
      activities: ['Ambiente relajante', 'Música terapéutica', 'Aromaterapia', 'Respiración consciente']
    },
    {
      phase: 'Tratamiento Principal',
      duration: '45-70 min',
      description: 'Aplicación de las técnicas corporales seleccionadas según las necesidades',
      activities: ['Técnicas manuales', 'Trabajo energético', 'Liberación tensiones', 'Equilibrio integral']
    },
    {
      phase: 'Integración',
      duration: '5-10 min',
      description: 'Tiempo para integrar la experiencia y recibir recomendaciones',
      activities: ['Relajación final', 'Hidratación', 'Recomendaciones', 'Próxima sesión']
    }
  ];

  const therapeuticApplications = [
    {
      condition: 'Estrés y Tensión',
      description: 'Liberación de tensiones acumuladas por estrés laboral o emocional',
      approach: 'Técnicas de relajación profunda y liberación miofascial',
      sessions: '4-6 sesiones'
    },
    {
      condition: 'Dolores Crónicos',
      description: 'Tratamiento de dolores musculares y articulares persistentes',
      approach: 'Masoterapia específica y trabajo energético dirigido',
      sessions: '6-8 sesiones'
    },
    {
      condition: 'Recuperación Deportiva',
      description: 'Apoyo en la recuperación muscular y prevención de lesiones',
      approach: 'Masaje deportivo y técnicas de recuperación activa',
      sessions: '2-4 sesiones/mes'
    },
    {
      condition: 'Bienestar Preventivo',
      description: 'Mantenimiento de la salud física y equilibrio energético',
      approach: 'Terapias holísticas regulares y cuidado integral',
      sessions: '1-2 sesiones/mes'
    }
  ];

  const holisticPrinciples = [
    {
      principle: 'Conexión Cuerpo-Mente',
      description: 'Reconocimiento de que las emociones se almacenan en el cuerpo físico'
    },
    {
      principle: 'Energía Vital',
      description: 'Trabajo con la energía vital que fluye a través de todo el organismo'
    },
    {
      principle: 'Autoregulación',
      description: 'Estimulación de los mecanismos naturales de sanación del cuerpo'
    },
    {
      principle: 'Tratamiento Integral',
      description: 'Abordaje completo que considera todos los aspectos del ser'
    },
    {
      principle: 'Respeto al Ritmo Personal',
      description: 'Adaptación a las necesidades y tiempos únicos de cada persona'
    },
    {
      principle: 'Presencia Consciente',
      description: 'Aplicación de técnicas con plena atención y conexión terapéutica'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="overflow-x-hidden pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-healing py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al inicio
              </Link>
              
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-primary to-secondary-light p-4 rounded-full">
                  <Hand className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Terapias Corporales
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Sanación a través del toque consciente. Técnicas corporales holísticas que integran 
                cuerpo, mente y espíritu para tu bienestar integral y equilibrio energético.
              </p>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                  El Arte de Sanar con las Manos
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Las terapias corporales son un conjunto de técnicas milenarias y modernas que 
                  utilizan el toque terapéutico para restaurar el equilibrio natural del cuerpo. 
                  En Centro BZEN, combinamos la sabiduría ancestral con enfoques contemporáneos.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Cada sesión es una experiencia única de conexión profunda contigo mismo, donde 
                  el cuerpo físico se convierte en el portal hacia la sanación emocional y 
                  espiritual. Trabajamos con la inteligencia innata de tu organismo.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                  <p className="text-text-primary font-medium">
                    🌟 Tu cuerpo es el templo de tu alma, honrémoslo juntos
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Waves className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Flujo Energético
                  </h3>
                  <p className="text-text-secondary">
                    Restauración del flujo natural de energía vital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Beneficios de las Terapias Corporales
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Experimenta los múltiples beneficios del trabajo corporal consciente
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary to-secondary-light p-4 rounded-full w-fit mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapies Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Modalidades Terapéuticas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Diversas técnicas corporales para diferentes necesidades de sanación
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corporalTherapies.map((therapy, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${therapy.color} rounded-full flex items-center justify-center mb-6`}>
                    <therapy.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {therapy.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {therapy.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Técnicas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {therapy.techniques.map((technique, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-white px-2 py-1 rounded-full text-xs text-text-secondary font-medium"
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Beneficios:</h4>
                      <div className="flex flex-wrap gap-1">
                        {therapy.benefits.map((benefit, benefitIndex) => (
                          <span 
                            key={benefitIndex} 
                            className="bg-white px-2 py-1 rounded-full text-xs text-text-secondary font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white px-4 py-2 rounded-full text-center">
                    <span className="text-text-primary font-medium">⏱️ Duración: {therapy.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body Systems Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Sistemas Corporales Tratados
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Abordaje integral de los diferentes sistemas del organismo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bodyAreas.map((area, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {area.area}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {area.focus.map((focus, focusIndex) => (
                      <span 
                        key={focusIndex} 
                        className="bg-gradient-healing px-3 py-2 rounded-lg text-sm text-text-secondary font-medium text-center"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Session Structure Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Estructura de una Sesión
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Proceso cuidadosamente diseñado para maximizar los beneficios terapéuticos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sessionStructure.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-primary to-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    {phase.duration}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <div className="space-y-1">
                    {phase.activities.map((activity, actIndex) => (
                      <span 
                        key={actIndex} 
                        className="block bg-gradient-healing px-2 py-1 rounded text-xs text-text-secondary"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapeutic Applications Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Aplicaciones Terapéuticas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Tratamientos específicos para diferentes condiciones y necesidades
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {therapeuticApplications.map((application, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {application.condition}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {application.description}
                  </p>
                  <div className="bg-gradient-healing p-4 rounded-xl mb-4">
                    <p className="text-text-primary font-medium text-sm">
                      <strong>Enfoque:</strong> {application.approach}
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                      📅 {application.sessions}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Holistic Principles Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Principios Holísticos
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Fundamentos que guían nuestro enfoque terapéutico corporal
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {holisticPrinciples.map((principle, index) => (
                <div key={index} className="bg-gradient-healing p-6 rounded-2xl text-center">
                  <h3 className="text-lg font-playfair font-bold text-text-primary mb-3">
                    {principle.principle}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              ¿Listo para Reconectar con tu Cuerpo?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Permítete experimentar la sanación a través del toque consciente. Tu cuerpo 
              tiene una sabiduría innata que está esperando ser despertada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Reservar Sesión
              </Link>
              <Link 
                to="/" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                Ver Más Terapias
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TerapiasCorporales;
