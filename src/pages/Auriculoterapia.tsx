import React from 'react';
import { ArrowLeft, Ear, Heart, Brain, Zap, Shield, Target, Compass, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Auriculoterapia = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Equilibrio del Sistema Nervioso',
      description: 'Regula el sistema nervioso autónomo y reduce el estrés'
    },
    {
      icon: Heart,
      title: 'Bienestar Emocional',
      description: 'Ayuda a gestionar ansiedad, depresión y estados emocionales'
    },
    {
      icon: Zap,
      title: 'Alivio del Dolor',
      description: 'Efectivo para dolores crónicos y agudos en todo el cuerpo'
    },
    {
      icon: Shield,
      title: 'Fortalecimiento Inmunológico',
      description: 'Estimula las defensas naturales del organismo'
    }
  ];

  const auriculoPoints = [
    {
      zone: 'Zona del Estrés',
      description: 'Puntos específicos para reducir tensión y ansiedad',
      applications: ['Estrés laboral', 'Ansiedad generalizada', 'Tensión muscular', 'Insomnio'],
      color: 'from-primary to-primary-light'
    },
    {
      zone: 'Zona del Dolor',
      description: 'Puntos para el manejo del dolor en diferentes partes del cuerpo',
      applications: ['Dolor de cabeza', 'Dolor lumbar', 'Artritis', 'Fibromialgia'],
      color: 'from-secondary to-secondary-light'
    },
    {
      zone: 'Zona Digestiva',
      description: 'Puntos que regulan el sistema digestivo y metabólico',
      applications: ['Problemas digestivos', 'Control de peso', 'Náuseas', 'Acidez'],
      color: 'from-accent to-accent-light'
    },
    {
      zone: 'Zona Respiratoria',
      description: 'Puntos para mejorar la función respiratoria',
      applications: ['Asma', 'Alergias', 'Sinusitis', 'Bronquitis'],
      color: 'from-primary-light to-secondary'
    },
    {
      zone: 'Zona Emocional',
      description: 'Puntos que equilibran el estado emocional y mental',
      applications: ['Depresión', 'Irritabilidad', 'Cambios de humor', 'Trauma emocional'],
      color: 'from-secondary-light to-accent'
    },
    {
      zone: 'Zona de Adicciones',
      description: 'Puntos específicos para el tratamiento de dependencias',
      applications: ['Tabaquismo', 'Alcoholismo', 'Adicción a drogas', 'Compulsiones'],
      color: 'from-accent-light to-primary'
    }
  ];

  const treatmentConditions = [
    {
      category: 'Trastornos del Sistema Nervioso',
      conditions: ['Ansiedad', 'Depresión', 'Insomnio', 'Estrés postraumático', 'Migrañas', 'Neuralgias'],
      approach: 'Estimulación de puntos neurológicos específicos para regular neurotransmisores'
    },
    {
      category: 'Dolor Crónico y Agudo',
      conditions: ['Artritis', 'Fibromialgia', 'Dolor lumbar', 'Cervicalgia', 'Dolor neuropático', 'Cefaleas'],
      approach: 'Activación de puntos analgésicos para liberar endorfinas naturales'
    },
    {
      category: 'Trastornos Digestivos',
      conditions: ['Gastritis', 'Síndrome intestino irritable', 'Estreñimiento', 'Náuseas', 'Pérdida de apetito'],
      approach: 'Regulación del sistema digestivo a través de puntos específicos'
    },
    {
      category: 'Adicciones y Dependencias',
      conditions: ['Tabaquismo', 'Alcoholismo', 'Dependencia de sustancias', 'Trastornos alimentarios'],
      approach: 'Protocolo NADA y puntos específicos para reducir ansiedad y craving'
    }
  ];

  const sessionStructure = [
    {
      phase: 'Evaluación Inicial',
      duration: '10-15 min',
      description: 'Análisis del estado general y identificación de puntos auriculares',
      activities: ['Historia clínica', 'Inspección auricular', 'Palpación de puntos', 'Selección de protocolo']
    },
    {
      phase: 'Preparación',
      duration: '5 min',
      description: 'Limpieza y preparación del área auricular',
      activities: ['Desinfección', 'Localización precisa', 'Explicación del proceso', 'Relajación inicial']
    },
    {
      phase: 'Aplicación',
      duration: '20-30 min',
      description: 'Colocación de agujas o semillas en puntos específicos',
      activities: ['Inserción de agujas', 'Estimulación manual', 'Colocación de semillas', 'Verificación de sensaciones']
    },
    {
      phase: 'Integración',
      duration: '5-10 min',
      description: 'Tiempo de reposo y recomendaciones post-tratamiento',
      activities: ['Reposo terapéutico', 'Recomendaciones', 'Cuidados posteriores', 'Próxima sesión']
    }
  ];

  const techniques = [
    {
      technique: 'Auriculoacupuntura con Agujas',
      description: 'Uso de agujas estériles muy finas en puntos específicos del oído',
      duration: '30-45 min',
      benefits: ['Efecto inmediato', 'Estimulación profunda', 'Resultados duraderos', 'Precisión terapéutica'],
      indications: ['Dolor agudo', 'Ansiedad severa', 'Adicciones', 'Trastornos neurológicos']
    },
    {
      technique: 'Auriculoterapia con Semillas',
      description: 'Colocación de semillas de mostaza o esferas metálicas con adhesivos',
      duration: '20-30 min',
      benefits: ['No invasivo', 'Efecto prolongado', 'Autoestimulación', 'Cómodo para el paciente'],
      indications: ['Estrés crónico', 'Control de peso', 'Insomnio', 'Mantenimiento terapéutico']
    },
    {
      technique: 'Electroauriculoterapia',
      description: 'Combinación de auriculoacupuntura con estimulación eléctrica suave',
      duration: '30-40 min',
      benefits: ['Estimulación controlada', 'Efecto potenciado', 'Medición de resistencia', 'Personalización'],
      indications: ['Dolor crónico', 'Depresión', 'Trastornos neurológicos', 'Rehabilitación']
    }
  ];

  const scientificBasis = [
    {
      principle: 'Microsistema Auricular',
      description: 'El oído contiene un mapa completo del cuerpo humano en miniatura',
      evidence: 'Estudios neurológicos confirman las conexiones nerviosas específicas'
    },
    {
      principle: 'Reflejo Neurológico',
      description: 'La estimulación auricular activa reflejos neurológicos hacia órganos específicos',
      evidence: 'Investigaciones muestran cambios en actividad cerebral y liberación de neurotransmisores'
    },
    {
      principle: 'Sistema Nervioso Autónomo',
      description: 'Regulación del equilibrio entre sistema simpático y parasimpático',
      evidence: 'Mediciones de variabilidad cardíaca demuestran efectos en el sistema nervioso'
    },
    {
      principle: 'Liberación de Endorfinas',
      description: 'Estimulación de la producción natural de analgésicos del cuerpo',
      evidence: 'Estudios bioquímicos confirman aumento de endorfinas y encefalinas'
    }
  ];

  const safetyProtocol = [
    {
      aspect: 'Esterilización Completa',
      description: 'Uso exclusivo de agujas desechables y protocolos de asepsia',
      measures: ['Agujas estériles', 'Desinfección auricular', 'Guantes desechables', 'Ambiente limpio']
    },
    {
      aspect: 'Evaluación Previa',
      description: 'Análisis de contraindicaciones y estado de salud general',
      measures: ['Historia clínica', 'Medicamentos actuales', 'Embarazo', 'Condiciones médicas']
    },
    {
      aspect: 'Técnica Profesional',
      description: 'Aplicación por terapeutas certificados con experiencia',
      measures: ['Formación especializada', 'Actualización continua', 'Supervisión clínica', 'Protocolos estrictos']
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="overflow-x-hidden pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-healing py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button positioned at top left */}
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full text-primary hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-primary to-secondary-light p-4 rounded-full">
                  <Ear className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Auriculoterapia
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Técnica milenaria de acupuntura auricular que utiliza el oído como microsistema 
                para tratar diversas condiciones de salud física, emocional y mental.
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
                  El Oído: Portal de Sanación
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  La Auriculoterapia es una técnica terapéutica basada en la estimulación de puntos 
                  específicos del pabellón auricular. Según la medicina tradicional china y los 
                  descubrimientos modernos, el oído contiene un microsistema que refleja todo el cuerpo.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Esta terapia combina la sabiduría ancestral con la investigación científica moderna, 
                  ofreciendo un enfoque seguro y efectivo para tratar una amplia gama de condiciones 
                  sin efectos secundarios significativos.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                  <p className="text-text-primary font-medium">
                    🎯 Cada punto auricular conecta con órganos y sistemas específicos del cuerpo
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Target className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Microsistema Auricular
                  </h3>
                  <p className="text-text-secondary">
                    Mapa completo del cuerpo en el oído
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
                Beneficios de la Auriculoterapia
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Efectos terapéuticos comprobados para el bienestar integral
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

        {/* Auricular Points Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Zonas Auriculares Terapéuticas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Puntos específicos del oído para diferentes condiciones de salud
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {auriculoPoints.map((point, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4 text-center">
                    {point.zone}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6 text-center">
                    {point.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {point.applications.map((application, appIndex) => (
                      <span 
                        key={appIndex} 
                        className="bg-white px-3 py-2 rounded-lg text-sm text-text-secondary font-medium text-center"
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

        {/* Treatment Conditions Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Condiciones Tratadas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Amplio espectro de aplicaciones terapéuticas de la auriculoterapia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatmentConditions.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {category.category}
                  </h3>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {category.conditions.map((condition, condIndex) => (
                        <span 
                          key={condIndex} 
                          className="bg-gradient-healing px-3 py-1 rounded-full text-sm text-text-secondary font-medium"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                    <p className="text-text-primary font-medium text-sm">
                      <strong>Enfoque:</strong> {category.approach}
                    </p>
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
                Proceso terapéutico profesional y personalizado
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

        {/* Techniques Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Técnicas Aplicadas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Diferentes modalidades de auriculoterapia según las necesidades
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {techniques.map((tech, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {tech.technique}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {tech.description}
                  </p>
                  <div className="bg-gradient-healing p-3 rounded-xl mb-6 text-center">
                    <span className="text-primary font-bold">⏱️ {tech.duration}</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">Beneficios:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <span 
                          key={benefitIndex} 
                          className="bg-gradient-healing px-2 py-1 rounded text-xs text-text-secondary font-medium text-center"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Indicaciones:</h4>
                    <div className="space-y-1">
                      {tech.indications.map((indication, indIndex) => (
                        <span 
                          key={indIndex} 
                          className="block bg-gradient-healing px-2 py-1 rounded text-xs text-text-secondary"
                        >
                          • {indication}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Basis Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Base Científica
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Fundamentos neurológicos y evidencia científica de la auriculoterapia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scientificBasis.map((basis, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {basis.principle}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {basis.description}
                  </p>
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-text-primary font-medium text-sm">
                      <strong>Evidencia:</strong> {basis.evidence}
                    </p>
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
              ¿Listo para Experimentar la Auriculoterapia?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Descubre el poder sanador de esta técnica milenaria respaldada por la ciencia moderna. 
              Tu bienestar está al alcance de tus oídos.
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

export default Auriculoterapia;
