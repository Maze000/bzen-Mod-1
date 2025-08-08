import React from 'react';
import { ArrowLeft, Brain, Heart, Eye, Lightbulb, Users, Target, Compass, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PsicologiaIntegrativa = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Enfoque Holístico',
      description: 'Integra múltiples perspectivas terapéuticas para un abordaje completo'
    },
    {
      icon: Heart,
      title: 'Sanación Profunda',
      description: 'Trabaja en todos los niveles: mental, emocional, corporal y espiritual'
    },
    {
      icon: Eye,
      title: 'Autoconocimiento',
      description: 'Desarrolla la conciencia de patrones y recursos internos'
    },
    {
      icon: Lightbulb,
      title: 'Transformación Duradera',
      description: 'Genera cambios sostenibles y crecimiento personal auténtico'
    }
  ];

  const therapeuticApproaches = [
    {
      title: 'Psicología Humanística',
      description: 'Enfoque centrado en la persona, potencial humano y crecimiento personal',
      icon: Heart,
      color: 'from-primary to-primary-light',
      techniques: ['Terapia Centrada en la Persona', 'Gestalt', 'Logoterapia', 'Psicología Positiva']
    },
    {
      title: 'Psicología Transpersonal',
      description: 'Integra la dimensión espiritual y estados expandidos de conciencia',
      icon: Eye,
      color: 'from-secondary to-secondary-light',
      techniques: ['Psicosíntesis', 'Terapia Transpersonal', 'Trabajo con Sueños', 'Meditación Terapéutica']
    },
    {
      title: 'Psicología Cognitivo-Conductual',
      description: 'Modificación de patrones de pensamiento y comportamiento disfuncionales',
      icon: Brain,
      color: 'from-accent to-accent-light',
      techniques: ['TCC', 'Mindfulness-Based CBT', 'ACT', 'Terapia Dialéctica Conductual']
    },
    {
      title: 'Psicología Sistémica',
      description: 'Comprende a la persona dentro de sus sistemas relacionales y familiares',
      icon: Users,
      color: 'from-primary-light to-secondary',
      techniques: ['Terapia Familiar', 'Constelaciones', 'Terapia de Pareja', 'Enfoque Sistémico']
    }
  ];

  const therapeuticAreas = [
    {
      area: 'Ansiedad y Trastornos del Estado de Ánimo',
      description: 'Abordaje integral de ansiedad, depresión y trastornos emocionales',
      approaches: ['Mindfulness', 'TCC', 'Terapia Humanística', 'Trabajo Corporal']
    },
    {
      area: 'Trauma y Estrés Postraumático',
      description: 'Sanación de traumas mediante enfoques somáticos y transpersonales',
      approaches: ['EMDR', 'Somatic Experiencing', 'Terapia Transpersonal', 'Trabajo Energético']
    },
    {
      area: 'Relaciones y Vínculos',
      description: 'Mejora de la capacidad de relacionarse y crear vínculos saludables',
      approaches: ['Terapia Sistémica', 'Constelaciones', 'Terapia de Pareja', 'Comunicación Consciente']
    },
    {
      area: 'Desarrollo Personal y Espiritual',
      description: 'Crecimiento personal, búsqueda de sentido y desarrollo espiritual',
      approaches: ['Psicología Transpersonal', 'Logoterapia', 'Psicosíntesis', 'Mindfulness']
    }
  ];

  const sessionStructure = [
    {
      phase: 'Evaluación Integral',
      duration: '15-20 min',
      description: 'Comprensión holística de la persona y su situación actual'
    },
    {
      phase: 'Exploración Profunda',
      duration: '20-25 min',
      description: 'Trabajo terapéutico principal utilizando enfoques integrados'
    },
    {
      phase: 'Integración',
      duration: '10-15 min',
      description: 'Consolidación de aprendizajes y planificación de acciones'
    },
    {
      phase: 'Cierre Consciente',
      duration: '5-10 min',
      description: 'Finalización centrada y preparación para la vida cotidiana'
    }
  ];

  const integrativeTools = [
    {
      tool: 'Mindfulness Terapéutico',
      description: 'Atención plena aplicada al proceso terapéutico',
      applications: ['Regulación emocional', 'Presencia consciente', 'Observación sin juicio', 'Aceptación radical']
    },
    {
      tool: 'Trabajo con Sueños',
      description: 'Exploración del inconsciente a través de los sueños',
      applications: ['Mensajes del inconsciente', 'Símbolos personales', 'Integración de aspectos', 'Guía interior']
    },
    {
      tool: 'Técnicas Somáticas',
      description: 'Integración de la sabiduría corporal en el proceso terapéutico',
      applications: ['Regulación nerviosa', 'Liberación trauma', 'Conciencia corporal', 'Emociones somáticas']
    },
    {
      tool: 'Visualización Creativa',
      description: 'Uso de la imaginación para sanación y transformación',
      applications: ['Sanación simbólica', 'Recursos internos', 'Futuros posibles', 'Integración de partes']
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
                <div className="bg-gradient-to-r from-primary to-secondary-light p-4 rounded-full">
                  <Puzzle className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Psicología Integrativa
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Un enfoque terapéutico que integra múltiples perspectivas psicológicas para 
                abordar la complejidad del ser humano de manera holística y personalizada.
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
                  La Síntesis de la Sabiduría Psicológica
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  La Psicología Integrativa reconoce que cada persona es un ser multidimensional 
                  que requiere un abordaje terapéutico personalizado. Combinamos lo mejor de 
                  diferentes escuelas psicológicas para crear un enfoque único y efectivo.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  No nos limitamos a una sola teoría o técnica, sino que integramos enfoques 
                  humanísticos, cognitivo-conductuales, transpersonales, sistémicos y corporales 
                  según las necesidades específicas de cada persona.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                  <p className="text-text-primary font-medium">
                    🧩 Cada pieza del rompecabezas humano merece ser honrada e integrada
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Brain className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Mente Integrativa
                  </h3>
                  <p className="text-text-secondary">
                    Síntesis de múltiples perspectivas terapéuticas
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
                Beneficios del Enfoque Integrativo
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Ventajas de un abordaje terapéutico multidimensional y personalizado
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

        {/* Approaches Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Enfoques Terapéuticos Integrados
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Múltiples perspectivas psicológicas unificadas en un enfoque coherente
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {therapeuticApproaches.map((approach, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${approach.color} rounded-full flex items-center justify-center mb-6`}>
                    <approach.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {approach.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {approach.techniques.map((technique, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-white px-3 py-1 rounded-full text-sm text-text-secondary font-medium"
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

        {/* Therapeutic Areas Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Áreas de Especialización
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Aplicaciones específicas del enfoque integrativo para diferentes desafíos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {therapeuticAreas.map((area, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {area.area}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.approaches.map((approach, approachIndex) => (
                      <span 
                        key={approachIndex} 
                        className="bg-gradient-healing px-3 py-1 rounded-full text-sm text-text-secondary font-medium"
                      >
                        {approach}
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
                Estructura de una Sesión Integrativa
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Proceso terapéutico diseñado para maximizar la integración y transformación
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
                  <p className="text-text-secondary leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Herramientas Terapéuticas Integradas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Técnicas específicas que combinan diferentes enfoques psicológicos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrativeTools.map((tool, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {tool.tool}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tool.applications.map((application, appIndex) => (
                      <span 
                        key={appIndex} 
                        className="bg-gradient-healing px-3 py-1 rounded-full text-sm text-text-secondary font-medium"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              ¿Listo para tu Transformación Integral?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Inicia un proceso terapéutico que honra todas las dimensiones de tu ser. 
              La integración es el camino hacia la plenitud y la autenticidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Comenzar Proceso Terapéutico
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

export default PsicologiaIntegrativa;
