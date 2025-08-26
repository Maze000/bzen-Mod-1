import React from 'react';
import { ArrowLeft, Heart, Sparkles, Users, Award, Clock, MapPin, Star, Shield, Eye, Brain, Flower, Gem, BookOpen, Zap, Moon, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import therapistPortrait from '@/assets/therapist-portrait.jpg';
import ignaciaPortrait from '@/assets/ignacia.png';
import paolaPortrait from '@/assets/paola.jpg';

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
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
               <div className="flex flex-col justify-center">
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
               
                               <div className="flex flex-col justify-center space-y-4">
                 {/* Una Respuesta Amorosa */}
                 <div className="bg-gradient-healing p-4 rounded-2xl">
                   <div className="text-center">
                     <div className="bg-white p-3 rounded-full inline-block mb-3">
                       <Sparkles className="h-8 w-8 text-primary" />
                     </div>
                     <h3 className="text-lg font-playfair font-bold text-text-primary mb-2">
                       Una Respuesta Amorosa
                     </h3>
                     <p className="text-text-secondary text-xs">
                       Nacimos para servir, para acompañar, para transformar
                     </p>
                   </div>
                 </div>

                 {/* Sabiduría Ancestral */}
                 <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl">
                   <div className="text-center">
                     <div className="bg-white p-3 rounded-full inline-block mb-3">
                       <Moon className="h-8 w-8 text-primary" />
                     </div>
                     <h3 className="text-lg font-playfair font-bold text-text-primary mb-2">
                       Sabiduría Ancestral
                     </h3>
                     <p className="text-text-secondary text-xs">
                       Conectamos con la sabiduría de nuestros ancestros y la tierra
                     </p>
                   </div>
                 </div>

                 {/* Ciencia Moderna */}
                 <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-4 rounded-2xl">
                   <div className="text-center">
                     <div className="bg-white p-3 rounded-full inline-block mb-3">
                       <Brain className="h-8 w-8 text-primary" />
                     </div>
                     <h3 className="text-lg font-playfair font-bold text-text-primary mb-2">
                       Ciencia Moderna
                     </h3>
                     <p className="text-text-secondary text-xs">
                       Integramos los avances científicos con el conocimiento ancestral
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-gradient-healing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Profesionales comprometidos con tu bienestar integral
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Paola Molina - Left Container */}
              <div className="bg-white/90 backdrop-blur-sm rounded-radius-lg p-8 shadow-card hover:shadow-healing transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Paola Molina
                  </h3>
                  <p className="text-lg text-text-secondary mb-6">
                    Fundadora y guía espiritual de Centro BZEN
                  </p>
                  
                  {/* Founder Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                                               <img
                           src={paolaPortrait}
                           alt="Paola Molina - Fundadora de Centro BZEN"
                           className="w-48 h-48 object-cover rounded-full shadow-healing border-4 border-white"
                         />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-full"></div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/30 rounded-full blur-lg"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-healing p-6 rounded-radius-lg">
                    <p className="text-text-secondary italic text-sm">
                      "He podido entender claramente que todas las experiencias que he vivido están relacionadas 
                      con mi propósito de vida: compartir a través de BZEN la sabiduría, la conexión con el alma 
                      y este universo infinito de posibilidades, poniendo como base la energía del Amor que me 
                      mueve en cada una de las cosas que siento y hago."
                    </p>
                    <p className="text-xs text-text-secondary mt-2 text-right">— Paola Molina</p>
                  </div>
                </div>

                {/* Paola's Credentials */}
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-6 text-center">Formación Profesional</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {founderCredentials.map((credential, index) => (
                      <div key={index} className="bg-gradient-healing p-4 rounded-radius-lg shadow-card hover:shadow-healing transition-all duration-300">
                        <div className="w-10 h-10 bg-white rounded-radius flex items-center justify-center mb-3">
                          <credential.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h5 className="font-semibold text-text-primary mb-1 text-sm">{credential.title}</h5>
                        <p className="text-xs text-text-secondary">{credential.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ignacia Santa Cruz - Right Container */}
              <div className="bg-white/90 backdrop-blur-sm rounded-radius-lg p-8 shadow-card hover:shadow-healing transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Ignacia Santa Cruz Handwerck
                  </h3>
                  <p className="text-lg text-text-secondary mb-6">
                    Psicóloga Clínica
                  </p>
                  
                                     {/* Psychologist Image */}
                   <div className="flex justify-center mb-6">
                     <div className="relative">
                       <img
                         src={ignaciaPortrait}
                         alt="Ignacia Santa Cruz Handwerck - Psicóloga Clínica"
                         className="w-48 h-48 object-cover rounded-full shadow-healing border-4 border-white"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-full"></div>
                       
                       {/* Decorative elements */}
                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary/20 rounded-full blur-xl"></div>
                       <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/30 rounded-full blur-lg"></div>
                     </div>
                   </div>
                  
                  <div className="bg-gradient-healing p-6 rounded-radius-lg">
                    <p className="text-text-secondary italic text-sm">
                      "Trabajo desde un enfoque humanista-integrativo, ofreciendo un espacio de escucha activa, 
                      contención y crecimiento personal. Mi objetivo es promover el bienestar emocional 
                      respetando el ritmo y singularidad de cada paciente."
                    </p>
                    <p className="text-xs text-text-secondary mt-2 text-right">— Ignacia Santa Cruz</p>
                  </div>
                </div>

                {/* Ignacia's Credentials */}
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-6 text-center">Formación Profesional</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-healing p-4 rounded-radius-lg shadow-card hover:shadow-healing transition-all duration-300">
                      <div className="w-10 h-10 bg-white rounded-radius flex items-center justify-center mb-3">
                        <Brain className="h-5 w-5 text-primary" />
                      </div>
                      <h5 className="font-semibold text-text-primary mb-1">Psicóloga Clínica</h5>
                      <p className="text-sm text-text-secondary">Titulada de la Universidad UNIACC, con formación sólida y vocación por el acompañamiento emocional.</p>
                    </div>
                    
                    <div className="bg-gradient-healing p-4 rounded-radius-lg shadow-card hover:shadow-healing transition-all duration-300">
                      <div className="w-10 h-10 bg-white rounded-radius flex items-center justify-center mb-3">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <h5 className="font-semibold text-text-primary mb-1">Enfoque Humanista-Integrativo</h5>
                      <p className="text-sm text-text-secondary">Espacio de escucha activa, contención y crecimiento personal.</p>
                    </div>

                    <div className="bg-gradient-healing p-4 rounded-radius-lg shadow-card hover:shadow-healing transition-all duration-300">
                      <div className="w-10 h-10 bg-white rounded-radius flex items-center justify-center mb-3">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <h5 className="font-semibold text-text-primary mb-1">Especialidades</h5>
                      <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
                        <div>• Ansiedad y Depresión</div>
                        <div>• Procesos de Duelo</div>
                        <div>• Relaciones Interpersonales</div>
                        <div>• Autoestima</div>
                        <div>• Procesos de Cambio</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              
              {/* Decorative image on the right side */}
              <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center opacity-30">
                <div className="relative w-64 h-[500px]">
                  {/* Tree branches texture background */}
                  <svg className="absolute inset-0 w-full h-full opacity-80 z-10" viewBox="0 0 384 750" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Gradients for integration */}
                    <defs>
                      <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 0.3}} />
                        <stop offset="50%" style={{stopColor: '#7C3AED', stopOpacity: 0.2}} />
                        <stop offset="100%" style={{stopColor: '#4C1D95', stopOpacity: 0.1}} />
                      </linearGradient>
                    </defs>
                    
                    {/* Main trunk */}
                    <path d="M192 720 Q192 600 192 525 Q192 450 192 375 Q192 300 192 225 Q192 150 192 75" stroke="#8B5CF6" strokeWidth="4.5" fill="none" opacity="1"/>
                    
                    {/* Branch 1 - Top left */}
                    <path d="M192 120 Q150 90 120 60 Q90 30 60 15" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.8"/>
                    <path d="M192 120 Q135 105 105 75" stroke="#8B5CF6" strokeWidth="2.25" fill="none" opacity="0.7"/>
                    
                    {/* Branch 2 - Top right */}
                    <path d="M192 150 Q240 120 270 90 Q300 60 330 45" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.8"/>
                    <path d="M192 150 Q225 135 255 105" stroke="#8B5CF6" strokeWidth="2.25" fill="none" opacity="0.7"/>
                    
                    {/* Branch 3 - Middle left */}
                    <path d="M192 300 Q150 270 120 240 Q90 210 60 180" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.8"/>
                    <path d="M192 300 Q165 285 135 255" stroke="#8B5CF6" strokeWidth="2.25" fill="none" opacity="0.7"/>
                    
                    {/* Branch 4 - Middle right */}
                    <path d="M192 330 Q240 300 270 270 Q300 240 330 210" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.8"/>
                    <path d="M192 330 Q225 315 255 285" stroke="#8B5CF6" strokeWidth="2.25" fill="none" opacity="0.7"/>
                    
                    {/* Branch 5 - Lower left */}
                    <path d="M192 480 Q150 450 120 420 Q90 390 60 360" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.8"/>
                    <path d="M192 480 Q165 465 135 435" stroke="#8B5CF6" strokeWidth="2.25" fill="none" opacity="0.7"/>
                    
                    {/* Branch 6 - Lower right */}
                    <path d="M192 510 Q240 480 270 450 Q300 420 330 390" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.8"/>
                    <path d="M192 510 Q225 495 255 465" stroke="#8B5CF6" strokeWidth="2.25" fill="none" opacity="0.7"/>
                    
                    {/* Small twigs and leaves */}
                    <circle cx="90" cy="37.5" r="3" fill="#EC4899" opacity="0.8"/>
                    <circle cx="300" cy="67.5" r="2.25" fill="#EC4899" opacity="0.8"/>
                    <circle cx="105" cy="255" r="3" fill="#EC4899" opacity="0.8"/>
                    <circle cx="285" cy="285" r="2.25" fill="#EC4899" opacity="0.8"/>
                    <circle cx="97.5" cy="435" r="3" fill="#EC4899" opacity="0.8"/>
                    <circle cx="292.5" cy="465" r="2.25" fill="#EC4899" opacity="0.8"/>
                  </svg>
                  
                  {/* Vertical mandala-like design representing growth and transformation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30 rounded-full animate-pulse z-20"></div>
                  <div className="absolute inset-8 bg-gradient-to-b from-primary/40 via-secondary/40 to-accent/40 rounded-full animate-pulse z-20" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-16 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 rounded-full animate-pulse z-20" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Central elements representing BZEN's evolution - vertical layout */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-30">
                    <div className="w-28 h-28 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                      <Heart className="h-14 w-14 text-white" />
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Floating elements representing different therapies - vertical distribution */}
                  <div className="absolute top-12 left-12 w-12 h-12 bg-primary/50 rounded-full animate-bounce shadow-lg z-30" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-40 right-12 w-8 h-8 bg-secondary/60 rounded-full animate-bounce shadow-lg z-30" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute top-72 left-6 w-10 h-10 bg-accent/55 rounded-full animate-bounce shadow-lg z-30" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute top-96 right-6 w-7 h-7 bg-primary/70 rounded-full animate-bounce shadow-lg z-30" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute bottom-12 left-12 w-8 h-8 bg-secondary/65 rounded-full animate-bounce shadow-lg z-30" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
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
