import React from 'react';
import { ArrowLeft, Phone, Heart, Monitor, Shield, Clock, Users, Wifi, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ApoyoEmocionalOnline = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Flexibilidad Horaria',
      description: 'Sesiones adaptadas a tu horario y zona horaria, sin limitaciones geográficas'
    },
    {
      icon: Shield,
      title: 'Privacidad y Comodidad',
      description: 'Recibe apoyo desde la comodidad y seguridad de tu hogar'
    },
    {
      icon: Heart,
      title: 'Misma Calidad Terapéutica',
      description: 'Profesionalismo y calidez humana igual que en sesiones presenciales'
    },
    {
      icon: Wifi,
      title: 'Acceso Global',
      description: 'Conecta con nosotros desde cualquier lugar del mundo'
    }
  ];

  const onlineServices = [
    {
      title: 'Terapia Individual Online',
      description: 'Sesiones personalizadas uno a uno a través de videollamada segura',
      icon: Video,
      color: 'from-primary to-primary-light',
      features: ['Videollamada HD', 'Sesiones de 50-60 min', 'Seguimiento personalizado', 'Material de apoyo digital']
    },
    {
      title: 'Consultas de Emergencia',
      description: 'Apoyo inmediato en momentos de crisis emocional o situaciones urgentes',
      icon: Phone,
      color: 'from-secondary to-secondary-light',
      features: ['Disponibilidad extendida', 'Respuesta rápida', 'Contención emocional', 'Derivación si es necesario']
    },
    {
      title: 'Grupos de Apoyo Virtual',
      description: 'Espacios grupales de sanación y crecimiento personal en formato online',
      icon: Users,
      color: 'from-accent to-accent-light',
      features: ['Grupos reducidos', 'Temáticas específicas', 'Interacción grupal', 'Facilitación profesional']
    },
    {
      title: 'Seguimiento Continuo',
      description: 'Acompañamiento entre sesiones a través de mensajes y check-ins',
      icon: Monitor,
      color: 'from-primary-light to-secondary',
      features: ['Mensajes de apoyo', 'Recordatorios terapéuticos', 'Ejercicios personalizados', 'Monitoreo del progreso']
    }
  ];

  const platforms = [
    {
      name: 'Zoom',
      description: 'Videollamadas seguras con encriptación end-to-end',
      security: 'Alta seguridad'
    },
    {
      name: 'Google Meet',
      description: 'Plataforma confiable con acceso desde cualquier dispositivo',
      security: 'Protección avanzada'
    },
    {
      name: 'WhatsApp',
      description: 'Para consultas rápidas y seguimiento entre sesiones',
      security: 'Encriptación completa'
    },
    {
      name: 'Telegram',
      description: 'Comunicación segura con opciones de privacidad avanzadas',
      security: 'Máxima privacidad'
    }
  ];

  const therapeuticAreas = [
    {
      area: 'Ansiedad y Estrés',
      description: 'Manejo de crisis de ansiedad, ataques de pánico y estrés crónico',
      techniques: ['Técnicas de respiración', 'Mindfulness online', 'Reestructuración cognitiva', 'Relajación guiada']
    },
    {
      area: 'Depresión y Estado de Ánimo',
      description: 'Apoyo para episodios depresivos, tristeza profunda y desesperanza',
      techniques: ['Terapia cognitivo-conductual', 'Activación conductual', 'Terapia de aceptación', 'Apoyo emocional']
    },
    {
      area: 'Relaciones y Vínculos',
      description: 'Dificultades en relaciones de pareja, familiares o interpersonales',
      techniques: ['Terapia de pareja online', 'Comunicación asertiva', 'Resolución de conflictos', 'Terapia familiar']
    },
    {
      area: 'Transiciones Vitales',
      description: 'Apoyo en cambios importantes como duelos, separaciones o cambios laborales',
      techniques: ['Procesamiento de duelo', 'Adaptación al cambio', 'Construcción de resiliencia', 'Planificación de futuro']
    }
  ];

  const sessionProcess = [
    {
      step: '1',
      title: 'Contacto Inicial',
      description: 'Primera consulta para evaluar necesidades y establecer el encuadre terapéutico'
    },
    {
      step: '2',
      title: 'Configuración Técnica',
      description: 'Preparación de la plataforma y verificación de la conexión para sesiones óptimas'
    },
    {
      step: '3',
      title: 'Sesiones Regulares',
      description: 'Encuentros terapéuticos programados con la misma estructura que sesiones presenciales'
    },
    {
      step: '4',
      title: 'Seguimiento Continuo',
      description: 'Apoyo entre sesiones y evaluación continua del progreso terapéutico'
    }
  ];

  const advantages = [
    {
      title: 'Eliminación de Barreras Geográficas',
      description: 'Accede a terapia especializada sin importar tu ubicación'
    },
    {
      title: 'Reducción de Estigma',
      description: 'Mayor privacidad puede facilitar el inicio del proceso terapéutico'
    },
    {
      title: 'Continuidad del Tratamiento',
      description: 'Mantén tu proceso terapéutico incluso en situaciones de movilidad limitada'
    },
    {
      title: 'Ambiente Familiar',
      description: 'Recibe terapia en tu espacio seguro y conocido'
    },
    {
      title: 'Flexibilidad de Horarios',
      description: 'Horarios extendidos para adaptarse a diferentes zonas horarias'
    },
    {
      title: 'Registro Digital',
      description: 'Posibilidad de grabar sesiones (con consentimiento) para revisión posterior'
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
                  <Phone className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Apoyo Emocional Online
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Sesiones virtuales con la misma calidad que presencial. Conecta con tu bienestar 
                emocional desde la comodidad de tu hogar, sin barreras geográficas ni horarias.
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
                  Terapia Sin Fronteras
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  En Centro BZEN entendemos que el bienestar emocional no puede esperar ni limitarse 
                  por la distancia. Nuestro servicio de Apoyo Emocional Online te brinda acceso 
                  a terapia profesional de calidad desde cualquier lugar del mundo.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Utilizamos tecnología segura y plataformas confiables para crear un espacio 
                  terapéutico virtual que mantiene la misma calidez, profesionalismo y efectividad 
                  que nuestras sesiones presenciales.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                  <p className="text-text-primary font-medium">
                    💻 La misma calidad terapéutica, ahora sin límites geográficos
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Monitor className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Conexión Digital
                  </h3>
                  <p className="text-text-secondary">
                    Tecnología al servicio de tu bienestar emocional
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
                Ventajas del Apoyo Online
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Descubre los beneficios únicos de recibir terapia en formato virtual
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

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Servicios Online Disponibles
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Modalidades virtuales adaptadas a diferentes necesidades terapéuticas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {onlineServices.map((service, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className="bg-white px-3 py-1 rounded-full text-sm text-text-secondary font-medium text-center"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Plataformas Seguras
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Utilizamos las tecnologías más confiables para garantizar tu privacidad
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card text-center">
                  <div className="bg-gradient-to-r from-primary to-secondary-light p-4 rounded-full w-fit mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {platform.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {platform.description}
                  </p>
                  <span className="bg-gradient-healing px-3 py-1 rounded-full text-xs text-text-secondary font-medium">
                    {platform.security}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapeutic Areas Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Áreas de Especialización
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Apoyo profesional para diferentes desafíos emocionales y psicológicos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {therapeuticAreas.map((area, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {area.area}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.techniques.map((technique, techIndex) => (
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

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Proceso de Atención
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Pasos simples para comenzar tu proceso terapéutico online
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sessionProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-primary to-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {process.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                ¿Por Qué Elegir Terapia Online?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gradient-healing p-6 rounded-2xl text-center">
                  <h3 className="text-lg font-playfair font-bold text-text-primary mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {advantage.description}
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
              ¿Listo para Conectar con tu Bienestar?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Inicia tu proceso terapéutico online hoy mismo. La distancia no será un obstáculo 
              para tu crecimiento personal y bienestar emocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Iniciar Consulta Online
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

export default ApoyoEmocionalOnline;
