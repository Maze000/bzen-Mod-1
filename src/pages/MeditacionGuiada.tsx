import React from 'react';
import { ArrowLeft, Circle, Brain, Heart, Leaf, Moon, Sun, Wind, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MeditacionGuiada = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Claridad Mental',
      description: 'Calma la mente y mejora la concentración y el enfoque'
    },
    {
      icon: Heart,
      title: 'Equilibrio Emocional',
      description: 'Reduce el estrés y la ansiedad, promoviendo la paz interior'
    },
    {
      icon: Leaf,
      title: 'Conexión Espiritual',
      description: 'Profundiza tu relación contigo mismo y con lo sagrado'
    },
    {
      icon: Circle,
      title: 'Presencia Plena',
      description: 'Desarrolla la capacidad de vivir en el momento presente'
    }
  ];

  const meditationTypes = [
    {
      title: 'Mindfulness',
      description: 'Atención plena al momento presente, observando pensamientos y sensaciones sin juicio',
      icon: Circle,
      color: 'from-accent to-accent-light'
    },
    {
      title: 'Respiración Consciente',
      description: 'Técnicas de respiración para calmar la mente y equilibrar el sistema nervioso',
      icon: Wind,
      color: 'from-primary to-primary-light'
    },
    {
      title: 'Body Scan',
      description: 'Exploración consciente del cuerpo para liberar tensiones y conectar con las sensaciones',
      icon: Waves,
      color: 'from-secondary to-secondary-light'
    },
    {
      title: 'Meditación Caminando',
      description: 'Práctica de mindfulness en movimiento, conectando con cada paso conscientemente',
      icon: Leaf,
      color: 'from-primary-light to-secondary'
    },
    {
      title: 'Visualización Creativa',
      description: 'Uso de imágenes mentales para sanar, manifestar y transformar estados internos',
      icon: Sun,
      color: 'from-secondary to-accent'
    },
    {
      title: 'Meditación Nocturna',
      description: 'Prácticas especiales para relajación profunda y preparación para el descanso',
      icon: Moon,
      color: 'from-accent to-primary'
    }
  ];

  const applications = [
    {
      area: 'Reducción del Estrés',
      description: 'Técnicas específicas para liberar tensiones y encontrar calma en momentos difíciles',
      techniques: ['Respiración 4-7-8', 'Body Scan', 'Mindfulness', 'Relajación Progresiva']
    },
    {
      area: 'Mejora del Sueño',
      description: 'Meditaciones diseñadas para preparar la mente y el cuerpo para un descanso reparador',
      techniques: ['Meditación Nocturna', 'Visualización', 'Respiración Lunar', 'Relajación Corporal']
    },
    {
      area: 'Desarrollo Personal',
      description: 'Prácticas para el autoconocimiento, la autocompasión y el crecimiento interior',
      techniques: ['Meditación Introspectiva', 'Loving-Kindness', 'Contemplación', 'Mindfulness Emocional']
    },
    {
      area: 'Sanación Emocional',
      description: 'Meditaciones terapéuticas para procesar emociones y sanar heridas del pasado',
      techniques: ['Meditación del Perdón', 'Sanación Interior', 'Compasión', 'Liberación Emocional']
    }
  ];

  const sessionStructure = [
    {
      phase: 'Preparación',
      duration: '5-10 min',
      description: 'Creación del espacio sagrado, postura cómoda y conexión con la intención'
    },
    {
      phase: 'Centramiento',
      duration: '5-10 min',
      description: 'Técnicas de respiración y relajación para calmar la mente y el cuerpo'
    },
    {
      phase: 'Práctica Central',
      duration: '15-30 min',
      description: 'Desarrollo de la técnica específica según el objetivo de la sesión'
    },
    {
      phase: 'Integración',
      duration: '5-10 min',
      description: 'Retorno gradual a la conciencia ordinaria e integración de la experiencia'
    }
  ];

  const mindfulnessPrinciples = [
    {
      principle: 'No Juicio',
      description: 'Observar sin criticar o evaluar las experiencias que surgen'
    },
    {
      principle: 'Paciencia',
      description: 'Permitir que las cosas se desarrollen en su propio tiempo natural'
    },
    {
      principle: 'Mente de Principiante',
      description: 'Mantener la curiosidad y apertura como si fuera la primera vez'
    },
    {
      principle: 'Confianza',
      description: 'Confiar en tu propia sabiduría y experiencia interior'
    },
    {
      principle: 'No Esfuerzo',
      description: 'Permitir que la meditación fluya sin forzar resultados'
    },
    {
      principle: 'Aceptación',
      description: 'Acoger lo que surge sin resistencia ni necesidad de cambio'
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
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full text-primary hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-accent to-primary p-4 rounded-full">
                  <Circle className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Meditación Guiada
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Descubre la paz interior a través de prácticas de mindfulness y meditación 
                que te conectan con tu esencia y te ayudan a vivir con mayor presencia y serenidad.
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
                  El Camino hacia la Paz Interior
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  La meditación guiada es una práctica milenaria que te acompaña en el viaje hacia 
                  tu interior. A través de instrucciones suaves y técnicas específicas, te ayudamos 
                  a desarrollar la capacidad de observar tus pensamientos, emociones y sensaciones 
                  desde un lugar de calma y aceptación.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  En Centro BZEN, nuestras sesiones de meditación guiada están diseñadas para 
                  adaptarse a tu nivel de experiencia y necesidades específicas, creando un 
                  espacio seguro donde puedes explorar tu mundo interior y cultivar la presencia plena.
                </p>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Heart className="h-16 w-16 text-accent" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Mindfulness
                  </h3>
                  <p className="text-text-secondary">
                    La práctica de la atención plena para vivir el presente
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
                Beneficios de la Meditación
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Descubre cómo la práctica regular puede transformar tu bienestar integral
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-accent to-primary p-4 rounded-full w-fit mb-6">
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

        {/* Types Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Tipos de Meditación
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Diferentes técnicas para diferentes necesidades y momentos de tu vida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {meditationTypes.map((type, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mb-6`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {type.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Aplicaciones Terapéuticas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Meditaciones específicas para diferentes aspectos de tu bienestar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {application.area}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {application.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {application.techniques.map((technique, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gradient-healing px-3 py-1 rounded-full text-sm text-text-secondary font-medium"
                      >
                        {technique}
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
                Un viaje guiado hacia la calma y la presencia plena
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sessionStructure.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-accent to-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {phase.duration}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mindfulness Principles Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Principios del Mindfulness
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Las bases fundamentales para una práctica consciente y transformadora
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mindfulnessPrinciples.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card text-center">
                  <div className="bg-gradient-to-r from-accent to-primary p-4 rounded-full w-fit mx-auto mb-6">
                    <Circle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {item.principle}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Tips Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-healing p-8 rounded-2xl">
              <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">
                Consejos para tu Práctica
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-3">🕐 Consistencia</h4>
                  <p className="text-sm text-text-secondary">Es mejor meditar 10 minutos diarios que una hora una vez por semana</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-3">🪑 Comodidad</h4>
                  <p className="text-sm text-text-secondary">Encuentra una postura cómoda que puedas mantener sin tensión</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-3">🌱 Paciencia</h4>
                  <p className="text-sm text-text-secondary">Los beneficios se desarrollan gradualmente con la práctica regular</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-3">💝 Autocompasión</h4>
                  <p className="text-sm text-text-secondary">Sé gentil contigo mismo cuando la mente se distraiga</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              ¿Listo para Cultivar la Paz Interior?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Inicia tu viaje hacia una vida más consciente y plena a través de nuestras 
              sesiones de meditación guiada personalizadas para tus necesidades.
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

export default MeditacionGuiada;
