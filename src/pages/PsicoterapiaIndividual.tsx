import React from 'react';
import { ArrowLeft, Brain, Clock, Heart, Shield, Users, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PsicoterapiaIndividual = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-radius flex items-center justify-center mr-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
                Psicoterapia Individual
              </h1>
              <p className="text-xl text-white/90">
                Atención psicológica personalizada con enfoque integrativo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">
            Un Espacio Seguro para tu Bienestar Mental
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            En Centro BZEN ofrecemos psicoterapia individual con un enfoque integrativo que combina 
            diferentes corrientes terapéuticas para adaptarse a tus necesidades específicas. 
            Nuestro objetivo es acompañarte en tu proceso de autoconocimiento y crecimiento personal.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Disponemos de atención tanto presencial como online, con la posibilidad de reembolso 
            a través de tu Isapre, facilitando el acceso a un tratamiento psicológico de calidad.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Beneficios de la Psicoterapia Individual
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Bienestar Emocional</h4>
              </div>
              <p className="text-text-secondary">
                Desarrolla herramientas para gestionar emociones, reducir ansiedad y mejorar tu estado de ánimo general.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Autoconocimiento</h4>
              </div>
              <p className="text-text-secondary">
                Explora patrones de pensamiento y comportamiento para comprenderte mejor y tomar decisiones más conscientes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Relaciones Saludables</h4>
              </div>
              <p className="text-text-secondary">
                Mejora tus habilidades de comunicación y establece vínculos más auténticos y satisfactorios.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Resiliencia</h4>
              </div>
              <p className="text-text-secondary">
                Fortalece tu capacidad para enfrentar desafíos y adaptarte a los cambios de la vida.
              </p>
            </div>
          </div>
        </div>

        {/* Therapeutic Approach */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Nuestro Enfoque Terapéutico
          </h3>
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-radius-lg p-8">
            <h4 className="text-xl font-semibold text-text-primary mb-4">Psicoterapia Integrativa</h4>
            <p className="text-text-secondary leading-relaxed mb-6">
              Combinamos elementos de diferentes corrientes psicológicas para crear un tratamiento 
              personalizado que se adapte a tu personalidad, necesidades y objetivos específicos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-text-primary mb-3">Enfoques que integramos:</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Terapia Cognitivo-Conductual
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Terapia Humanista
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Mindfulness y Atención Plena
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Terapia Sistémica
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-text-primary mb-3">Modalidades disponibles:</h5>
                <ul className="space-y-2">
                  <li className="flex items-center text-text-secondary">
                    <Star className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Sesiones presenciales
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <Star className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Terapia online
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <Star className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Reembolso Isapre
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <Star className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Horarios flexibles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Session Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            ¿Cómo es el Proceso Terapéutico?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Primera Sesión - Evaluación</h4>
                <p className="text-text-secondary">
                  Conocemos tu historia, necesidades y objetivos. Establecemos un plan de trabajo personalizado.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Desarrollo del Proceso</h4>
                <p className="text-text-secondary">
                  Trabajamos juntos en sesiones regulares, explorando patrones y desarrollando nuevas herramientas.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Consolidación y Cierre</h4>
                <p className="text-text-secondary">
                  Integramos los aprendizajes y preparamos estrategias para mantener el bienestar a largo plazo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conditions Treated */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Áreas de Especialización
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-text-secondary">• Ansiedad y estrés</div>
              <div className="text-text-secondary">• Depresión</div>
              <div className="text-text-secondary">• Problemas de autoestima</div>
              <div className="text-text-secondary">• Duelo y pérdidas</div>
              <div className="text-text-secondary">• Relaciones interpersonales</div>
              <div className="text-text-secondary">• Crisis vitales</div>
              <div className="text-text-secondary">• Trastornos del estado de ánimo</div>
              <div className="text-text-secondary">• Desarrollo personal</div>
              <div className="text-text-secondary">• Trauma y TEPT</div>
            </div>
          </div>
        </div>

        {/* Session Info */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Información de Sesiones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Duración y Frecuencia</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Sesiones de 50 minutos</li>
                <li>• Frecuencia semanal o quincenal</li>
                <li>• Horarios flexibles</li>
                <li>• Disponibilidad de mañana y tarde</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Confidencialidad</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Absoluta confidencialidad</li>
                <li>• Ambiente seguro y acogedor</li>
                <li>• Respeto por tu ritmo</li>
                <li>• Ética profesional garantizada</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-radius-lg p-12">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
            ¿Listo para Comenzar tu Proceso de Sanación?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Da el primer paso hacia tu bienestar emocional. Nuestro equipo está aquí para acompañarte 
            en este importante camino de crecimiento personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="btn-accent inline-flex items-center justify-center"
            >
              Reservar Primera Sesión
            </a>
            <Link 
              to="/" 
              className="btn-ghost inline-flex items-center justify-center"
            >
              Ver Otros Servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsicoterapiaIndividual;
