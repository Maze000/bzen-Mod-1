import React from 'react';
import { Brain, Heart, Eye, Lightbulb, Users, Target, Compass, Puzzle, Shield, Clock, CheckCircle, Star, ArrowRight, Zap, Sparkles, Moon, Sun, Leaf, Waves, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const PsychologySection = () => {
  const psychologicalDimensions = [
    {
      title: 'Dimensión Cognitiva',
      description: 'Exploración de patrones de pensamiento, creencias limitantes y procesos mentales',
      icon: Brain,
      color: 'from-blue-500/10 to-indigo-500/10',
      aspects: ['Pensamientos automáticos', 'Creencias nucleares', 'Procesos cognitivos', 'Metacognición'],
      benefits: ['Claridad mental', 'Flexibilidad cognitiva', 'Resolución de problemas', 'Pensamiento crítico']
    },
    {
      title: 'Dimensión Emocional',
      description: 'Navegación consciente del mundo emocional y regulación afectiva',
      icon: Heart,
      color: 'from-pink-500/10 to-rose-500/10',
      aspects: ['Regulación emocional', 'Inteligencia emocional', 'Procesamiento afectivo', 'Expresión saludable'],
      benefits: ['Equilibrio emocional', 'Autoconciencia', 'Empatía', 'Resiliencia emocional']
    },
    {
      title: 'Dimensión Corporal',
      description: 'Integración de la sabiduría del cuerpo y la conexión mente-cuerpo',
      icon: Shield,
      color: 'from-green-500/10 to-emerald-500/10',
      aspects: ['Conciencia corporal', 'Sensaciones somáticas', 'Tensión y relajación', 'Energía vital'],
      benefits: ['Presencia corporal', 'Relajación profunda', 'Vitalidad', 'Conciencia somática']
    },
    {
      title: 'Dimensión Espiritual',
      description: 'Conexión con el sentido de propósito y trascendencia personal',
      icon: Sparkles,
      color: 'from-purple-500/10 to-violet-500/10',
      aspects: ['Sentido de propósito', 'Conexión trascendente', 'Valores profundos', 'Desarrollo espiritual'],
      benefits: ['Propósito de vida', 'Paz interior', 'Conexión con lo sagrado', 'Crecimiento espiritual']
    }
  ];

  const therapeuticJourney = [
    {
      phase: 'Despertar',
      description: 'Toma de conciencia sobre la necesidad de cambio y transformación',
      icon: Sun,
      duration: '1-2 sesiones',
      focus: ['Autoconciencia inicial', 'Identificación de necesidades', 'Establecimiento de objetivos']
    },
    {
      phase: 'Exploración',
      description: 'Profundización en patrones, historias y recursos internos',
      icon: Compass,
      duration: '4-6 sesiones',
      focus: ['Exploración profunda', 'Descubrimiento de recursos', 'Comprensión de patrones']
    },
    {
      phase: 'Transformación',
      description: 'Proceso activo de cambio y reestructuración de experiencias',
      icon: Zap,
      duration: '6-12 sesiones',
      focus: ['Implementación de cambios', 'Integración de aprendizajes', 'Desarrollo de habilidades']
    },
    {
      phase: 'Integración',
      description: 'Consolidación de cambios y preparación para la autonomía',
      icon: Moon,
      duration: '2-4 sesiones',
      focus: ['Consolidación', 'Prevención de recaídas', 'Planificación futura']
    }
  ];

  const psychologicalTools = [
    {
      tool: 'Mindfulness Integrativo',
      description: 'Práctica de atención plena adaptada a cada dimensión psicológica',
      icon: Leaf,
      applications: ['Regulación emocional', 'Conciencia corporal', 'Claridad mental', 'Presencia espiritual'],
      color: 'from-green-400/20 to-emerald-400/20'
    },
    {
      tool: 'Psicología Narrativa',
      description: 'Reescritura de historias personales para crear nuevos significados',
      icon: BookOpen,
      applications: ['Reconstrucción de identidad', 'Integración de experiencias', 'Creación de sentido', 'Empoderamiento personal'],
      color: 'from-blue-400/20 to-indigo-400/20'
    },
    {
      tool: 'Terapia Somática',
      description: 'Trabajo con la sabiduría corporal para liberar tensiones y traumas',
      icon: Waves,
      applications: ['Liberación de tensión', 'Procesamiento de trauma', 'Conciencia corporal', 'Regulación nerviosa'],
      color: 'from-teal-400/20 to-cyan-400/20'
    },
    {
      tool: 'Psicología Transpersonal',
      description: 'Exploración de estados expandidos de conciencia y desarrollo espiritual',
      icon: Sparkles,
      applications: ['Expansión de conciencia', 'Conexión espiritual', 'Desarrollo transpersonal', 'Trascendencia del ego'],
      color: 'from-purple-400/20 to-violet-400/20'
    }
  ];

  const psychologicalBenefits = [
    {
      icon: Brain,
      title: 'Claridad Mental',
      description: 'Desarrollo de pensamientos más claros, organizados y constructivos'
    },
    {
      icon: Heart,
      title: 'Equilibrio Emocional',
      description: 'Mayor capacidad para regular emociones y mantener estabilidad afectiva'
    },
    {
      icon: Shield,
      title: 'Resiliencia',
      description: 'Fortaleza interna para enfrentar desafíos y adaptarse al cambio'
    },
    {
      icon: Sparkles,
      title: 'Autenticidad',
      description: 'Conexión profunda con tu verdadero ser y expresión genuina'
    }
  ];

  return (
    <section id="psicologia" className="py-20 bg-gradient-healing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-radius-lg shadow-soft flex items-center justify-center mr-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-section text-text-primary">
                Psicología Transformacional
              </h2>
              <p className="text-text-secondary">Un viaje hacia tu bienestar integral</p>
            </div>
          </div>
          <p className="text-body text-text-secondary max-w-4xl mx-auto">
            La psicología transformacional es un enfoque holístico que reconoce la complejidad 
            del ser humano y aborda todas sus dimensiones: mental, emocional, corporal y espiritual. 
            Es un viaje de autodescubrimiento que te lleva hacia tu versión más auténtica y plena.
          </p>
        </div>

        {/* Psychological Dimensions */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Las Cuatro Dimensiones del Ser
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {psychologicalDimensions.map((dimension, index) => (
              <div key={index} className={`${dimension.color} rounded-radius-lg p-8 slide-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-radius shadow-soft flex items-center justify-center mr-4">
                    <dimension.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary">{dimension.title}</h4>
                </div>
                <p className="text-text-secondary mb-6">{dimension.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">Aspectos que trabajamos:</h5>
                    <div className="flex flex-wrap gap-2">
                      {dimension.aspects.map((aspect, i) => (
                        <span key={i} className="bg-white/50 px-3 py-1 rounded-full text-xs text-text-secondary">
                          {aspect}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">Beneficios:</h5>
                    <ul className="space-y-1">
                      {dimension.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Therapeutic Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            El Viaje Terapéutico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapeuticJourney.map((phase, index) => (
              <div key={index} className="bg-white rounded-radius-lg p-6 shadow-card text-center hover:shadow-healing transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <phase.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{phase.phase}</h4>
                <div className="text-sm text-accent font-medium mb-3">{phase.duration}</div>
                <p className="text-sm text-text-secondary mb-4">{phase.description}</p>
                <div className="space-y-1">
                  {phase.focus.map((focus, i) => (
                    <div key={i} className="text-xs text-text-secondary">
                      • {focus}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Psychological Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Herramientas Transformacionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {psychologicalTools.map((tool, index) => (
              <div key={index} className={`${tool.color} rounded-radius-lg p-6 hover:shadow-healing transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-radius shadow-soft flex items-center justify-center mr-3">
                    <tool.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary">{tool.tool}</h4>
                </div>
                <p className="text-text-secondary mb-4">{tool.description}</p>
                <div className="space-y-2">
                  <h5 className="font-medium text-text-primary text-sm">Aplicaciones:</h5>
                  <div className="flex flex-wrap gap-2">
                    {tool.applications.map((application, i) => (
                      <span key={i} className="bg-white/30 px-2 py-1 rounded text-xs text-text-secondary">
                        {application}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Beneficios de la Psicología Transformacional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {psychologicalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-radius-lg p-6 shadow-card hover:shadow-healing transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-soft rounded-radius flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{benefit.title}</h4>
                <p className="text-sm text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-radius-lg p-8 lg:p-12 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-6">
              La Psicología como Arte de la Transformación
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              La psicología transformacional no es solo una ciencia, sino un arte que honra 
              la singularidad de cada persona. Es un proceso de co-creación donde terapeuta 
              y cliente caminan juntos hacia el descubrimiento de la verdadera esencia.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-secondary" />
                <span>Compasión profunda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-accent" />
                <span>Visión integral</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Transformación auténtica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-soft rounded-radius-lg p-8 lg:p-12">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
              ¿Listo para comenzar tu transformación?
            </h3>
            <p className="text-body text-text-secondary max-w-2xl mx-auto mb-8">
              Cada sesión es un paso hacia tu bienestar integral. Descubre el poder 
              transformador de la psicología y conéctate con tu verdadera esencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/psicologia-integrativa" className="btn-primary inline-flex items-center group">
                Conocer más sobre Psicología Integrativa
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/psicoterapia-individual" className="btn-secondary">
                Psicoterapia Individual
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologySection;
