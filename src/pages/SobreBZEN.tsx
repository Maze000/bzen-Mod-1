import React from 'react';
import { ArrowLeft, Heart, Sparkles, Users, Award, Clock, MapPin, Star, Shield, Eye, Brain, Flower, Gem, BookOpen, Zap, Moon, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import therapistPortrait from '@/assets/therapist-portrait.jpg';

const SobreBZEN = () => {
  const founderCredentials = [
    {
      icon: Users,
      title: 'Trabajadora Social',
      description: 'Formación profesional en trabajo social'
    },
    {
      icon: Sparkles,
      title: 'Coach Espiritual',
      description: 'Acompañamiento en desarrollo espiritual'
    },
    {
      icon: Flower,
      title: 'Terapeuta Floral',
      description: 'Especialista en flores de Bach'
    },
    {
      icon: BookOpen,
      title: 'Tarotista',
      description: 'Lectura terapéutica del tarot'
    },
    {
      icon: Gem,
      title: 'Gemoterapeuta',
      description: 'Terapia con cristales y gemas'
    },
    {
      icon: Moon,
      title: 'Ancestrologa',
      description: 'Formada en Ancestrología Engel & Liberman (2018)'
    },
    {
      icon: Zap,
      title: 'Guía en Activación de la Glándula Pineal',
      description: 'Técnicas para despertar la intuición'
    },
    {
      icon: Brain,
      title: 'Mindfulness y Compasión',
      description: 'Certificada en Mindfulness y Compasión'
    },
    {
      icon: Eye,
      title: 'Mindfulness y Neurociencia',
      description: 'Certificada en Mindfulness y Neurociencia (Nepsi Chile)'
    }
  ];

  const centerValues = [
    {
      icon: Heart,
      title: 'Amor como Base',
      description: 'Todas nuestras acciones están fundamentadas en la energía del Amor'
    },
    {
      icon: Shield,
      title: 'Poder Interior',
      description: 'Cada persona guarda en su interior el poder para sanar y transformar'
    },
    {
      icon: Sparkles,
      title: 'Reconexión con la Esencia',
      description: 'Nuestro espacio es una invitación a reconectar con tu verdadera esencia'
    },
    {
      icon: Eye,
      title: 'Nuevas Formas de Conciencia',
      description: 'Abrirse a nuevas formas de conciencia y percepción'
    },
    {
      icon: Star,
      title: 'Equilibrio Integral',
      description: 'Caminar hacia el equilibrio integral del ser'
    },
    {
      icon: Users,
      title: 'Comunidad Sagrada',
      description: 'Crear un espacio seguro para el crecimiento colectivo'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Formación en Ancestrología',
      description: 'Paola se forma en Ancestrología Engel & Liberman'
    },
    {
      year: '2020',
      title: 'Nacimiento de Centro BZEN',
      description: 'Centro BZEN nace como respuesta amorosa a las necesidades de bienestar durante la pandemia'
    },
    {
      year: '2021',
      title: 'Expansión de Servicios',
      description: 'Se consolidan las terapias complementarias y el enfoque integral'
    },
    {
      year: '2023',
      title: 'Crecimiento y Desarrollo',
      description: 'El centro se expande con nuevos programas y talleres'
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
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Sobre Centro BZEN
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Un espacio sagrado donde la sabiduría ancestral se encuentra con la ciencia moderna, 
                creando un puente hacia la sanación integral y el despertar de la conciencia.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                  Nuestro Origen
                </h2>
                <div className="space-y-6 text-body text-text-secondary">
                  <p>
                    Centro BZEN nace en el año <strong>2020</strong>, en medio del contexto de la pandemia, 
                    como una respuesta amorosa a las crecientes necesidades de bienestar emocional y espiritual.
                  </p>
                  <p>
                    En un momento donde el mundo se enfrentaba a la incertidumbre y el aislamiento, 
                    BZEN emergió como un faro de luz, ofreciendo un espacio seguro para la sanación 
                    y el crecimiento personal.
                  </p>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
                    <p className="text-text-primary font-medium italic">
                      "En BZEN creemos que cada experiencia de vida es una oportunidad de crecimiento y transformación. 
                      Nuestro propósito es compartir la sabiduría ancestral, facilitar la conexión con el alma y 
                      abrir las puertas a un universo infinito de posibilidades, siempre guiados por la energía 
                      del Amor que mueve cada una de nuestras acciones."
                    </p>
                    <p className="text-sm text-text-secondary mt-2">— Centro BZEN</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Sparkles className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Una Respuesta Amorosa
                  </h3>
                  <p className="text-text-secondary">
                    Nacimos para servir, para acompañar, para transformar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 lg:py-24 bg-gradient-healing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Paola Molina
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Fundadora y guía espiritual de Centro BZEN
              </p>
              
              {/* Founder Image */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src={therapistPortrait}
                    alt="Paola Molina - Fundadora de Centro BZEN"
                    className="w-48 h-48 object-cover rounded-full shadow-healing border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-full"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/30 rounded-full blur-lg"></div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-radius-lg p-6 max-w-2xl mx-auto">
                <p className="text-text-secondary italic">
                  "He podido entender claramente que todas las experiencias que he vivido están relacionadas 
                  con mi propósito de vida: compartir a través de BZEN la sabiduría, la conexión con el alma 
                  y este universo infinito de posibilidades, poniendo como base la energía del Amor que me 
                  mueve en cada una de las cosas que siento y hago."
                </p>
                <p className="text-sm text-text-secondary mt-2 text-right">— Paola Molina</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {founderCredentials.map((credential, index) => (
                <div key={index} className="bg-white rounded-radius-lg p-6 shadow-card hover:shadow-healing transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-soft rounded-radius flex items-center justify-center mb-4">
                    <credential.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{credential.title}</h4>
                  <p className="text-sm text-text-secondary">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Nuestra Filosofía
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Los principios que guían nuestro trabajo y nuestra misión
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {centerValues.map((value, index) => (
                <div key={index} className="bg-gradient-healing p-6 rounded-radius-lg hover:shadow-healing transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-radius shadow-soft flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 lg:py-24 bg-gradient-healing">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-8">
              Nuestra Misión
            </h2>
            <div className="bg-white rounded-radius-lg p-8 lg:p-12 shadow-card">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                En BZEN creemos que cada persona guarda en su interior el poder para sanar, transformar 
                y vivir en plenitud. Nuestro espacio es una invitación a reconectar con la esencia, 
                abrirse a nuevas formas de conciencia y caminar hacia el equilibrio integral del ser.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-secondary" />
                  <span>Sanación integral</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span>Despertar de conciencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span>Equilibrio del ser</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Nuestra Historia
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Un viaje de crecimiento y transformación
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gradient-healing p-6 rounded-radius-lg shadow-card hover:shadow-healing transition-all duration-300">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h4 className="font-semibold text-text-primary mb-2">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-soft z-10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              ¿Listo para comenzar tu viaje de transformación?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Únete a nuestra comunidad y descubre el poder transformador de BZEN. 
              Cada sesión es un paso hacia tu bienestar integral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Comenzar mi proceso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/#terapias" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                Conocer nuestras terapias
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SobreBZEN;
