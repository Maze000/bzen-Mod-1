import React from 'react';
import { ArrowLeft, Users, Heart, TreePine, Eye, Shield, Flower2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AncestrologiaConstelaciones = () => {
  const benefits = [
    {
      icon: TreePine,
      title: 'Sanación Transgeneracional',
      description: 'Libera patrones heredados que afectan tu vida actual'
    },
    {
      icon: Heart,
      title: 'Reconciliación Familiar',
      description: 'Sana vínculos difíciles y recupera la conexión con tus raíces'
    },
    {
      icon: Eye,
      title: 'Comprensión Profunda',
      description: 'Descubre las dinámicas ocultas de tu sistema familiar'
    },
    {
      icon: Shield,
      title: 'Liberación de Cargas',
      description: 'Suelta el peso que no es tuyo y recupera tu libertad'
    }
  ];

  const inheritedPatterns = [
    {
      pattern: 'Miedos y Fobias',
      description: 'Temores irracionales que se transmiten de generación en generación',
      examples: ['Miedo al abandono', 'Ansiedad social', 'Fobias específicas', 'Pánico inexplicable']
    },
    {
      pattern: 'Enfermedades Recurrentes',
      description: 'Patrones de salud que se repiten en el linaje familiar',
      examples: ['Enfermedades crónicas', 'Adicciones', 'Trastornos alimentarios', 'Depresión familiar']
    },
    {
      pattern: 'Bloqueos Económicos',
      description: 'Limitaciones financieras y creencias sobre el dinero heredadas',
      examples: ['Pobreza generacional', 'Miedo al éxito', 'Autosabotaje económico', 'Creencias limitantes']
    },
    {
      pattern: 'Conflictos de Pareja',
      description: 'Dinámicas relacionales disfuncionales que se repiten',
      examples: ['Patrones de abandono', 'Violencia doméstica', 'Infidelidades', 'Incapacidad de amar']
    }
  ];

  const sessionTypes = [
    {
      type: 'Sesión de Ancestrología Individual',
      description: 'Exploración profunda del árbol genealógico y patrones familiares',
      duration: '90 min',
      includes: ['Genograma terapéutico', 'Identificación de patrones', 'Trabajo con fechas', 'Plan de sanación']
    },
    {
      type: 'Constelación Familiar Individual',
      description: 'Representación del sistema familiar para identificar dinámicas ocultas',
      duration: '120 min',
      includes: ['Configuración sistémica', 'Movimientos del alma', 'Frases sanadoras', 'Integración energética']
    },
    {
      type: 'Taller Grupal Mensual',
      description: 'Espacio grupal para constelaciones familiares y aprendizaje colectivo',
      duration: '4 horas',
      includes: ['Múltiples constelaciones', 'Aprendizaje vicario', 'Energía grupal', 'Comunidad sanadora']
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
                  <TreePine className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Ancestrología y Constelaciones Familiares
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
                Herramientas sagradas de sanación transgeneracional que permiten mirar y transformar 
                los patrones heredados que inconscientemente repetimos en nuestra vida.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl max-w-4xl mx-auto">
                <p className="text-text-primary leading-relaxed">
                  🌿 <strong>Sanar tu árbol es sanar tu vida. Honrar tu historia es recuperar tu libertad.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                  Sanación Transgeneracional Profunda
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  En Centro BZEN, la Ancestrología y las Constelaciones Familiares son herramientas sagradas 
                  de sanación transgeneracional que permiten mirar y transformar los patrones heredados que 
                  inconscientemente repetimos en nuestra vida: miedos, enfermedades, bloqueos, conflictos 
                  de pareja, problemas económicos, vínculos difíciles o sensación de no pertenecer.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  La Ancestrología, basada en el enfoque de Engel y Liberman, es un viaje terapéutico al 
                  árbol genealógico que busca comprender los destinos familiares, lealtades invisibles y 
                  traumas no resueltos que habitan en nuestra memoria celular.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Las Constelaciones Familiares complementan este trabajo permitiendo representar visual y 
                  energéticamente las dinámicas ocultas del sistema familiar. A través de movimientos del 
                  alma y del espíritu, se abre un espacio de sanación, reconciliación y liberación.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                  <p className="text-text-primary font-medium">
                    ✨ En cada sesión se abre un espacio respetuoso y amoroso para mirar lo que necesita ser visto
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Sistema Familiar
                  </h3>
                  <p className="text-text-secondary">
                    Representación energética de las dinámicas ocultas
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
                Beneficios de la Sanación Ancestral
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Transformaciones profundas que liberan generaciones pasadas y futuras
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

        {/* Inherited Patterns Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Patrones Heredados Comunes
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Reconoce los patrones transgeneracionales que pueden estar afectando tu vida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {inheritedPatterns.map((pattern, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4 text-center">
                    {pattern.pattern}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6 text-center">
                    {pattern.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {pattern.examples.map((example, exampleIndex) => (
                      <span 
                        key={exampleIndex} 
                        className="bg-white px-3 py-2 rounded-lg text-sm text-text-secondary font-medium text-center"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                ¿Es Para Ti Esta Terapia?
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                🌿 Estas terapias están orientadas a quienes sienten que cargan con un peso que no es propio, 
                que repiten historias que no comprenden o desean sanar su vínculo con sus raíces y liberar a las próximas generaciones.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-playfair font-bold text-text-primary mb-6">
                Señales de que Necesitas Sanación Ancestral
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Patrones Repetitivos</h4>
                  <p className="text-text-secondary text-sm">Sientes que repites las mismas historias familiares</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Cargas Pesadas</h4>
                  <p className="text-text-secondary text-sm">Llevas un peso emocional que no comprendes</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Desconexión</h4>
                  <p className="text-text-secondary text-sm">Sientes que no perteneces o estás desconectado</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Bloqueos Inexplicables</h4>
                  <p className="text-text-secondary text-sm">Tienes limitaciones que no logras superar</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Vínculos Difíciles</h4>
                  <p className="text-text-secondary text-sm">Problemas recurrentes en relaciones familiares</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Llamado Interior</h4>
                  <p className="text-text-secondary text-sm">Deseo profundo de sanar tu linaje familiar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Session Types Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Modalidades de Trabajo
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Diferentes formatos para abordar la sanación transgeneracional
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sessionTypes.map((session, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {session.type}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {session.description}
                  </p>
                  <div className="bg-white p-3 rounded-xl mb-6 text-center">
                    <span className="text-primary font-bold">📅 {session.duration}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Incluye:</h4>
                    <div className="space-y-2">
                      {session.includes.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <Flower2 className="h-4 w-4 text-primary mr-2" />
                          <span className="text-text-secondary text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
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
              ¿Listo para Sanar tu Árbol Genealógico?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Libérate de los patrones que no te pertenecen y honra tu linaje desde la comprensión, 
              la compasión y el alma. Tu sanación trasciende generaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Iniciar Sanación Ancestral
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

export default AncestrologiaConstelaciones;
