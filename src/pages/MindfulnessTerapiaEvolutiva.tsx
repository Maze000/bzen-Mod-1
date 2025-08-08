import React from 'react';
import { ArrowLeft, Sparkles, Brain, Heart, Eye, Flower, Star, Shield, CheckCircle, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const MindfulnessTerapiaEvolutiva = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full text-white hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-radius flex items-center justify-center mr-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
                Mindfulness y Terapia Evolutiva
              </h1>
              <p className="text-xl text-white/90">
                Acompañamiento consciente en tu proceso de autoconocimiento
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
            El Camino hacia la Conciencia Plena
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            En Centro BZEN integramos la práctica milenaria del Mindfulness con enfoques 
            terapéuticos evolutivos para acompañarte en un profundo proceso de transformación personal. 
            Esta combinación única te permite desarrollar una mayor conciencia de ti mismo y 
            del momento presente, mientras trabajas activamente en tu crecimiento y sanación.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Nuestro enfoque va más allá de la simple relajación: te invitamos a explorar 
            las capas más profundas de tu ser, liberando patrones limitantes y 
            despertando tu potencial auténtico.
          </p>
        </div>

        {/* Core Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Componentes de Nuestro Enfoque
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mindfulness */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Flower className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Mindfulness (Atención Plena)</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Práctica de conciencia presente que te ayuda a observar tus pensamientos, 
                emociones y sensaciones sin juicio, cultivando una relación más saludable contigo mismo.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Reducción del estrés y ansiedad
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Mayor claridad mental
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Regulación emocional
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Mejora de la concentración
                </li>
              </ul>
            </div>

            {/* Terapia Evolutiva */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Terapia Evolutiva</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Enfoque terapéutico que ve los desafíos como oportunidades de crecimiento, 
                facilitando la evolución consciente hacia versiones más auténticas de ti mismo.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Transformación de patrones limitantes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Desarrollo del potencial personal
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Integración de experiencias
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Expansión de la conciencia
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Techniques and Practices */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Técnicas y Prácticas Integradas
          </h3>
          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-secondary mr-3" />
                  Prácticas de Mindfulness
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Meditación de atención plena:</strong> Cultivo de la presencia consciente</li>
                  <li>• <strong>Escaneo corporal:</strong> Conciencia somática profunda</li>
                  <li>• <strong>Respiración consciente:</strong> Ancla al momento presente</li>
                  <li>• <strong>Mindfulness en movimiento:</strong> Conciencia en la acción</li>
                  <li>• <strong>Observación de pensamientos:</strong> Desidentificación mental</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-accent mr-3" />
                  Enfoques Evolutivos
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Trabajo con sombras:</strong> Integración de aspectos rechazados</li>
                  <li>• <strong>Diálogo interno:</strong> Comunicación con diferentes partes del ser</li>
                  <li>• <strong>Visualización creativa:</strong> Manifestación consciente</li>
                  <li>• <strong>Trabajo energético:</strong> Equilibrio de centros vitales</li>
                  <li>• <strong>Integración transpersonal:</strong> Conexión con dimensiones superiores</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Beneficios de la Práctica Integrada
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Claridad Mental</h4>
              <p className="text-text-secondary text-sm">
                Mayor capacidad de discernimiento y toma de decisiones conscientes
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Equilibrio Emocional</h4>
              <p className="text-text-secondary text-sm">
                Gestión saludable de emociones y mayor estabilidad interior
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Transformación Profunda</h4>
              <p className="text-text-secondary text-sm">
                Cambios duraderos en patrones de pensamiento y comportamiento
              </p>
            </div>
          </div>
        </div>

        {/* Session Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Estructura de las Sesiones
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Centrado y Presencia</h4>
                <p className="text-text-secondary">
                  Comenzamos con prácticas de grounding y mindfulness para establecer 
                  un estado de presencia consciente y receptividad.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Exploración Consciente</h4>
                <p className="text-text-secondary">
                  Utilizamos técnicas evolutivas para explorar patrones, creencias y 
                  aspectos que requieren atención y transformación.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Integración y Cierre</h4>
                <p className="text-text-secondary">
                  Integramos los insights y establecemos prácticas personalizadas 
                  para continuar el trabajo entre sesiones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modalities */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Modalidades de Trabajo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Sesiones Individuales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Trabajo personalizado y profundo</li>
                <li>• Ritmo adaptado a tus necesidades</li>
                <li>• Confidencialidad absoluta</li>
                <li>• Flexibilidad de horarios</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Talleres Grupales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Aprendizaje compartido y apoyo mutuo</li>
                <li>• Práctica en comunidad consciente</li>
                <li>• Dinámicas grupales enriquecedoras</li>
                <li>• Costo accesible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who Can Benefit */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            ¿Para Quién es Este Enfoque?
          </h3>
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Ideal para personas que:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Buscan crecimiento personal profundo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Desean mayor autoconciencia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Experimentan estrés crónico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Quieren transformar patrones limitantes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Buscan propósito y significado
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Especialmente beneficioso para:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Profesionales con alta demanda
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Personas en transiciones vitales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Buscadores espirituales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Quienes desean mayor presencia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Personas con ansiedad o depresión leve
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Session Info */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Información Práctica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Sesiones Individuales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Duración: 60-90 minutos</li>
                <li>• Frecuencia: Semanal o quincenal</li>
                <li>• Modalidad: Presencial u online</li>
                <li>• Seguimiento personalizado</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Talleres Grupales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Duración: 2-3 horas</li>
                <li>• Frecuencia: Mensual</li>
                <li>• Grupos pequeños (6-8 personas)</li>
                <li>• Ambiente seguro y confidencial</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-radius-lg p-12">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
            ¿Listo para Despertar tu Potencial Consciente?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Inicia tu viaje hacia una vida más consciente, plena y auténtica. 
            Te acompañamos en cada paso de tu transformación personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="btn-accent inline-flex items-center justify-center"
            >
              Comenzar mi Proceso
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

export default MindfulnessTerapiaEvolutiva;
