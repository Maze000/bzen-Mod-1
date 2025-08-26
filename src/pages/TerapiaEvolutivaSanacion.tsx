import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Zap, Heart, Brain, Sparkles, 
  Circle, Users, HandHeart, Eye, Target,
  ArrowLeft, Calendar, Clock, User, 
  Flower, Droplets, CheckCircle, UserCheck
} from 'lucide-react';
import ignaciaPortrait from '@/assets/ignacia.png';
import paolaPortrait from '@/assets/paola.jpg';

const TerapiaEvolutivaSanacion = () => {
  return (
    <div className="min-h-screen bg-gradient-healing">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button positioned at top left */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full text-white hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-full shadow-2xl">
                <Star className="h-16 w-16 text-white" />
              </div>
              <div className="bg-gradient-to-r from-secondary to-accent p-4 rounded-full shadow-xl ml-4">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6 leading-tight">
              Terapia Evolutiva de 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
                Sanación
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Un programa de 11 sesiones que combina medicina convencional con terapias alternativas, 
              desarrollado por una terapeuta holística y una psicóloga para tu transformación integral.
            </p>
            
            <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-text-primary leading-relaxed italic">
                "Cada uno de nosotros es un ser completo que, en su interior, contiene toda la información 
                para ser quien quiere ser. Contamos con la posibilidad de sentirnos felices y atraer a nosotros 
                lo que nos proponemos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía y Enfoque */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
              Transformando Patrones Limitantes
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Dentro de la socialización propia del crecimiento, vamos desarrollando una personalidad y 
              esquemas que nos permiten vivir nuestra vida, dándole sentido a nuestras experiencias.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-text-primary leading-relaxed">
                Estos patrones de conducta se establecen en nuestro interior y en ocasiones, limitan el 
                alcance de nuestros objetivos y desarrollo de nuestro pleno Yo, llevándonos a un mundo 
                mental de dolores internos, sentimientos de carencia e infelicidad.
              </p>
              <p className="text-xl font-bold text-primary mt-4">
                ¿Podemos hacer algo para cambiar estos patrones? Nosotras decimos que sí.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/10">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-playfair font-bold text-text-primary">
                    Conexión con tu Ser Auténtico
                  </h3>
                </div>
                <p className="text-text-secondary">
                  Te invitamos a conectar con quien eres realmente, preparándote para aceptar 
                  la apertura de infinitas posibilidades y crear una nueva realidad, más amorosa y próspera.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-secondary/10">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-playfair font-bold text-text-primary">
                    Sanación de Memorias de la Infancia
                  </h3>
                </div>
                <p className="text-text-secondary">
                  Desarrollamos herramientas para abordar tus pensamientos y lograr comprender 
                  tus emociones desde el presente como adulto, sanando heridas del pasado.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-accent/10">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-xl font-playfair font-bold text-text-primary">
                    Identificación de Códigos Limitantes
                  </h3>
                </div>
                <p className="text-text-secondary">
                  Conocer e identificar códigos limitantes nos permite hacerles frente y 
                  movilizarnos hacia un cambio sanador, reemplazándolos por creencias más amorosas.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 rounded-3xl">
                <div className="text-center">
                  <div className="flex justify-center items-center mb-6">
                    <Clock className="h-12 w-12 text-primary mr-4" />
                    <span className="text-4xl font-bold text-primary">11</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Programa Estructurado
                  </h3>
                  <p className="text-text-secondary mb-6">
                    11 sesiones semanales de 60 minutos, combinando acompañamiento psicológico 
                    con diversas terapias holísticas.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-text-primary">Modalidad Telemática/Online</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-text-primary">Trabajo Conjunto Interdisciplinario</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-text-primary">Basado en Evidencia Científica</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Público Objetivo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
              ¿A Quién Va Dirigido Este Programa?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-12">
              La Terapia Evolutiva de Sanación está diseñada para mujeres y hombres adultos que buscan 
              un acompañamiento integral hacia el bienestar y el autoconocimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Búsqueda de Bienestar",
                description: "Personas en búsqueda de acompañamiento hacia el bienestar, autoconocimiento y sanación de la conexión con el sí mismo."
              },
              {
                icon: Brain,
                title: "Salud Mental",
                description: "Apoyo para hacer frente a situaciones de salud mental, enfrentar enfermedades crónicas y/o manejo del dolor."
              },
              {
                icon: Circle,
                title: "Regulación Emocional",
                description: "Personas que buscan manejar estrés y ansiedad, desarrollar habilidades para la regulación emocional y atención plena."
              }
            ].map((objetivo, index) => (
              <div
                key={objetivo.title}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-fit mb-4 mx-auto">
                  <objetivo.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-text-primary mb-3 text-center">
                  {objetivo.title}
                </h3>
                <p className="text-text-secondary text-center">
                  {objetivo.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
              Modalidades Terapéuticas Integradas
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Aprovechamos el potencial energético interior combinando acompañamiento psicológico 
              con diversas terapias holísticas especializadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Psicoterapia",
                description: "Acompañamiento psicológico especializado con enfoque humanista-integrativo",
                color: "from-primary to-primary-light"
              },
              {
                icon: Users,
                title: "Ancestrología",
                description: "Sanación transgeneracional y liberación de patrones heredados",
                color: "from-secondary to-secondary-light"
              },
              {
                icon: Circle,
                title: "Mindfulness MBCR",
                description: "Consciencia de la respiración y atención plena",
                color: "from-accent to-accent-light"
              },
              {
                icon: Flower,
                title: "Flores de Bach",
                description: "Terapia floral para equilibrio emocional profundo",
                color: "from-primary-light to-secondary"
              },
              {
                icon: Sparkles,
                title: "Activación Glándula Pineal",
                description: "Despertar de la intuición y conexión espiritual",
                color: "from-secondary to-accent"
              },
              {
                icon: Droplets,
                title: "Aromaterapia y Gemoterapia",
                description: "Sanación a través de aceites esenciales y cristales",
                color: "from-accent to-primary"
              }
            ].map((modalidad, index) => (
              <div
                key={modalidad.title}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
              >
                <div className={`bg-gradient-to-r ${modalidad.color} p-4 rounded-full w-fit mb-4`}>
                  <modalidad.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-text-primary mb-3">
                  {modalidad.title}
                </h3>
                <p className="text-text-secondary">
                  {modalidad.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios y Resultados */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
              Transformación en Todos los Niveles
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Los resultados de la Terapia Evolutiva de Sanación se manifiestan en múltiples dimensiones del ser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Claridad Mental y Emocional",
                description: "Mayor autoconocimiento, equilibrio emocional y claridad en la toma de decisiones."
              },
              {
                icon: Sparkles,
                title: "Despertar Espiritual",
                description: "Conexión profunda con tu esencia, intuición desarrollada y propósito de vida claro."
              },
              {
                icon: HandHeart,
                title: "Sanación Física y Energética",
                description: "Liberación de tensiones, mejor flujo energético y vitalidad renovada."
              },
              {
                icon: Users,
                title: "Relaciones Armoniosas",
                description: "Patrones relacionales más sanos y liberación de dinámicas familiares limitantes."
              }
            ].map((beneficio, index) => (
              <div
                key={beneficio.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full flex-shrink-0">
                    <beneficio.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-text-primary mb-3">
                      {beneficio.title}
                    </h3>
                    <p className="text-text-secondary">
                      {beneficio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método - Programa de 11 Sesiones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
              Método: Programa de 11 Sesiones
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Acompañamiento semanal de 60 minutos cada sesión, desarrollado por medio de 
              acompañamiento psicológico y la conexión de distintas terapias holísticas.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-text-primary font-medium">
                Al inicio de cada sesión se realizará meditación guiada de 3 a 5 minutos 
                o ejercicio de respiración consciente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                session: "1",
                title: "Sesión Inicial Conjunta",
                description: "Se realiza en conjunto con las dos profesionales donde se da a conocer el motivo de la consulta.",
                therapist: "Ambas Terapeutas",
                icon: Users,
                color: "from-primary to-primary-light"
              },
              {
                session: "2",
                title: "Flores de Bach",
                description: "Sesión con terapeuta holística. Entrega de flores y cuaderno bitácora.",
                therapist: "Paola (Terapeuta Holística)",
                icon: Flower,
                color: "from-secondary to-secondary-light"
              },
              {
                session: "3",
                title: "Psicoterapia",
                description: "Primera sesión de psicoterapia individual con enfoque humanista-integrativo.",
                therapist: "Ignacia (Psicóloga)",
                icon: Brain,
                color: "from-accent to-accent-light"
              },
              {
                session: "4",
                title: "Constelación Familiar",
                description: "Trabajo transgeneracional con terapeuta holística para sanar patrones heredados.",
                therapist: "Paola (Terapeuta Holística)",
                icon: Users,
                color: "from-primary-light to-secondary"
              },
              {
                session: "5",
                title: "Psicoterapia",
                description: "Segunda sesión de psicoterapia para profundizar en el proceso terapéutico.",
                therapist: "Ignacia (Psicóloga)",
                icon: Brain,
                color: "from-secondary to-accent"
              },
              {
                session: "6",
                title: "Mindfulness MBCR",
                description: "Consciencia de la respiración. Presentación del primer audio y hoja de registro.",
                therapist: "Paola (Terapeuta Holística)",
                icon: Circle,
                color: "from-accent to-primary"
              },
              {
                session: "7",
                title: "Psicoterapia",
                description: "Tercera sesión de psicoterapia. Presentación del segundo audio.",
                therapist: "Ignacia (Psicóloga)",
                icon: Brain,
                color: "from-primary to-secondary-light"
              },
              {
                session: "8",
                title: "Activación Glándula Pineal",
                description: "Trabajo de activación espiritual con terapeuta holística. Presentación del tercer audio.",
                therapist: "Paola (Terapeuta Holística)",
                icon: Sparkles,
                color: "from-secondary-light to-accent-light"
              },
              {
                session: "9",
                title: "Psicoterapia",
                description: "Cuarta sesión de psicoterapia. Presentación del cuarto audio.",
                therapist: "Ignacia (Psicóloga)",
                icon: Brain,
                color: "from-accent-light to-primary-light"
              },
              {
                session: "10",
                title: "Consciencia Plena y Gemoterapia",
                description: "Aromaterapia y gemoterapia para integración energética. Presentación del quinto audio.",
                therapist: "Paola (Terapeuta Holística)",
                icon: Droplets,
                color: "from-primary-light to-secondary"
              },
              {
                session: "11",
                title: "Sesión Final",
                description: "Ambas terapeutas. Retroalimentación, informe final y presentación del sexto audio.",
                therapist: "Ambas Terapeutas",
                icon: CheckCircle,
                color: "from-secondary to-accent"
              }
            ].map((sesion, index) => (
              <div
                key={sesion.session}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${sesion.color} text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                    {sesion.session}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <sesion.icon className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-lg font-playfair font-bold text-text-primary">
                        {sesion.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary mb-3 leading-relaxed">
                      {sesion.description}
                    </p>
                    <div className="bg-primary/10 rounded-lg px-3 py-1 inline-block">
                      <span className="text-sm font-medium text-primary">
                        {sesion.therapist}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Imparten el Programa */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
              ¿Quiénes Imparten Este Programa?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Nuestro equipo interdisciplinario combina la experiencia en psicología clínica 
              con la sabiduría de las terapias holísticas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Paola Molina Escobar */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-primary/10">
              <div className="text-center mb-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20">
                    <img 
                      src={paolaPortrait}
                      alt="Paola Molina Escobar - Terapeuta Holística"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-secondary p-3 rounded-full shadow-lg">
                    <UserCheck className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-text-primary mb-2">
                  Paola Molina Escobar
                </h3>
                <p className="text-lg text-primary font-medium mb-4">
                  Terapeuta Holística
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-text-secondary leading-relaxed italic">
                  "He podido entender claramente que todas las experiencias que he vivido están relacionadas 
                  con mi propósito de vida: compartir contigo la sabiduría, la conexión con el alma y este 
                  universo infinito de posibilidades, poniendo de base el amor, como la energía que nos mueve."
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Trabajadora Social",
                    "Coach Espiritual", 
                    "Terapeuta Floral",
                    "Tarotista (20+ años)",
                    "Gemoterapeuta",
                    "Ancestróloga (Engel & Liberman)",
                    "Guía Activación Glándula Pineal",
                    "Certificada en Mindfulness",
                    "Neurociencia Aplicada"
                  ].map((cert, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ignacia Santa Cruz Handwerck */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-secondary/10">
              <div className="text-center mb-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-secondary/20">
                    <img 
                      src={ignaciaPortrait}
                      alt="Ignacia Santa Cruz Handwerck - Psicóloga Clínica"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-secondary to-accent p-3 rounded-full shadow-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-text-primary mb-2">
                  Ignacia Santa Cruz Handwerck
                </h3>
                <p className="text-lg text-secondary font-medium mb-4">
                  Psicóloga Clínica
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-text-secondary leading-relaxed italic">
                  "Trabajo desde un enfoque humanista-integrativo, ofreciendo un espacio de 
                  escucha activa, contención y crecimiento personal. Mi objetivo es promover 
                  el bienestar emocional respetando el ritmo y singularidad de cada paciente."
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Universidad UNIACC",
                    "Enfoque Humanista-Integrativo",
                    "Ansiedad y Depresión",
                    "Procesos de Duelo",
                    "Relaciones Interpersonales",
                    "Autoestima",
                    "Procesos de Cambio"
                  ].map((esp, index) => (
                    <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {esp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-16 w-16 text-white mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
            ¿Listo para tu Terapia Evolutiva de Sanación?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Inicia tu programa de 11 sesiones para conectar con quien eres realmente 
            y crear una nueva realidad más amorosa y próspera.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-white mr-3" />
              <span className="text-2xl font-bold text-white">11 Sesiones • Online</span>
            </div>
            <p className="text-white/90">
              Programa telemático de acompañamiento integral con terapeuta holística y psicóloga
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Iniciar Mi Programa TES
            </a>
            <Link
              to="/#terapias"
              className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
            >
              <ArrowLeft className="mr-3 h-6 w-6" />
              Ver Todas las Terapias
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerapiaEvolutivaSanacion;
