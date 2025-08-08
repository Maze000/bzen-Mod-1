import React from 'react';
import { ArrowLeft, TreePine, Sprout, Sun, Mountain, Heart, Star, Shield, CheckCircle, Clock, Users, Compass, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const TallerCrecimiento = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full text-white hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-radius flex items-center justify-center mr-6">
              <TreePine className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
                Taller de Crecimiento
              </h1>
              <p className="text-xl text-white/90">
                Espacios de desarrollo personal y crecimiento espiritual
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
            Transformar tu Vida desde Adentro
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Nuestro Taller de Crecimiento es un espacio sagrado de transformación personal 
            donde te invitamos a explorar las profundidades de tu ser, liberar patrones 
            limitantes y despertar tu máximo potencial. A través de un enfoque integral 
            que combina sabiduría ancestral con técnicas modernas de desarrollo personal.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Este taller está diseñado para quienes sienten el llamado interior de crecer, 
            evolucionar y crear una vida más auténtica y plena. Es un viaje de autodescubrimiento 
            que te conectará con tu esencia más profunda y te dará las herramientas para 
            manifestar la vida que realmente deseas.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Los Cuatro Pilares del Crecimiento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Autoconocimiento */}
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Compass className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Autoconocimiento Profundo</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Explora las capas más profundas de tu personalidad, identifica patrones 
                inconscientes y descubre tu verdadera esencia más allá de las máscaras sociales.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Mapeo de personalidad integral
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Identificación de patrones limitantes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Conexión con valores auténticos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Descubrimiento del propósito de vida
                </li>
              </ul>
            </div>

            {/* Sanación Emocional */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Sanación Emocional</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Libera heridas emocionales del pasado, transforma creencias limitantes 
                y desarrolla una relación saludable con tus emociones y sentimientos.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Liberación de traumas emocionales
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Trabajo con el niño interior
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Transformación de creencias
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Desarrollo de inteligencia emocional
                </li>
              </ul>
            </div>

            {/* Expansión Espiritual */}
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Expansión Espiritual</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Conecta con dimensiones superiores de tu ser, desarrolla tu intuición 
                y establece una relación profunda con lo sagrado en tu vida cotidiana.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Desarrollo de la intuición
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Conexión con la sabiduría interior
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Prácticas de meditación profunda
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Integración de lo sagrado
                </li>
              </ul>
            </div>

            {/* Manifestación Consciente */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Manifestación Consciente</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Aprende a crear la realidad que deseas a través de la alineación entre 
                pensamiento, emoción y acción consciente en armonía con tu propósito superior.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Técnicas de visualización creativa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Establecimiento de metas alineadas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Creación de planes de acción
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Manifestación desde el ser
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workshop Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Estructura del Taller
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Mountain className="h-6 w-6 text-accent mr-3" />
                  Metodología Integral
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Círculos de compartir:</strong> Espacio seguro para expresión auténtica</li>
                  <li>• <strong>Meditaciones guiadas:</strong> Viajes internos de autodescubrimiento</li>
                  <li>• <strong>Ejercicios vivenciales:</strong> Experiencias transformadoras</li>
                  <li>• <strong>Trabajo corporal:</strong> Liberación a través del cuerpo</li>
                  <li>• <strong>Arte terapia:</strong> Expresión creativa del alma</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Sun className="h-6 w-6 text-secondary mr-3" />
                  Herramientas Prácticas
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Journaling consciente:</strong> Escritura terapéutica y reflexiva</li>
                  <li>• <strong>Técnicas de respiración:</strong> Regulación del sistema nervioso</li>
                  <li>• <strong>Rituales de liberación:</strong> Ceremonias de transformación</li>
                  <li>• <strong>Visualización creativa:</strong> Programación del subconsciente</li>
                  <li>• <strong>Afirmaciones poderosas:</strong> Reprogramación mental positiva</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            El Viaje de Transformación
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Despertar de la Conciencia</h4>
                <p className="text-text-secondary">
                  Iniciamos el proceso tomando conciencia de dónde estás ahora, identificando 
                  patrones automáticos y despertando a nuevas posibilidades de ser y vivir.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Liberación y Sanación</h4>
                <p className="text-text-secondary">
                  Trabajamos en liberar bloqueos emocionales, sanar heridas del pasado y 
                  transformar creencias limitantes que han estado frenando tu crecimiento.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Reconexión con la Esencia</h4>
                <p className="text-text-secondary">
                  Redescubres tu verdadera naturaleza, conectas con tu propósito de vida y 
                  estableces una relación auténtica contigo mismo y con la vida.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Integración y Manifestación</h4>
                <p className="text-text-secondary">
                  Integramos los aprendizajes en tu vida cotidiana y desarrollamos un plan 
                  concreto para manifestar la nueva versión de ti mismo en el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Transformaciones que Experimentarás
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Paz Interior</h4>
              <p className="text-text-secondary text-sm">
                Desarrolla una profunda sensación de calma y equilibrio emocional
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Crecimiento Auténtico</h4>
              <p className="text-text-secondary text-sm">
                Evoluciona hacia tu versión más auténtica y plena
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Propósito Claro</h4>
              <p className="text-text-secondary text-sm">
                Conecta con tu misión de vida y dirección espiritual
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Formats */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Modalidades del Taller
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Talleres Grupales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li>• Grupos pequeños (6-8 personas)</li>
                <li>• Ambiente de apoyo y hermandad</li>
                <li>• Aprendizaje compartido y enriquecedor</li>
                <li>• Duración: Fines de semana intensivos</li>
              </ul>
              <p className="text-sm text-text-secondary italic">
                Ideal para quienes disfrutan del crecimiento en comunidad
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Sesiones Individuales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li>• Atención personalizada y profunda</li>
                <li>• Ritmo adaptado a tus necesidades</li>
                <li>• Confidencialidad absoluta</li>
                <li>• Duración: Sesiones de 90 minutos</li>
              </ul>
              <p className="text-sm text-text-secondary italic">
                Perfecto para un trabajo más íntimo y personalizado
              </p>
            </div>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            ¿Para Quién es Este Taller?
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Este taller es para ti si:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Sientes que hay más potencial en ti por descubrir
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Deseas liberarte de patrones que te limitan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Buscas mayor claridad sobre tu propósito
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Quieres desarrollar tu espiritualidad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Estás en una transición importante de vida
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Especialmente beneficioso para:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Personas en crisis existencial o espiritual
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Quienes buscan sanación emocional profunda
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Personas con deseo de crecimiento espiritual
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Quienes sienten un llamado interior de transformación
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Buscadores conscientes de su evolución personal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Information */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Información Práctica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Talleres Grupales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>Duración:</strong> Fin de semana completo (16 horas)</li>
                <li>• <strong>Horario:</strong> Sábado y domingo 9:00-17:00</li>
                <li>• <strong>Frecuencia:</strong> Una vez al mes</li>
                <li>• <strong>Incluye:</strong> Material, refrigerios y certificado</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Sesiones Individuales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>Duración:</strong> 90 minutos por sesión</li>
                <li>• <strong>Frecuencia:</strong> Semanal o quincenal</li>
                <li>• <strong>Modalidad:</strong> Presencial u online</li>
                <li>• <strong>Incluye:</strong> Plan personalizado y seguimiento</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-primary/10 rounded-radius-lg p-12">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
            ¿Listo para Iniciar tu Viaje de Transformación?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            El momento perfecto para crecer es ahora. Tu alma ya conoce el camino, 
            solo necesita el espacio seguro y las herramientas adecuadas para florecer. 
            Te esperamos con los brazos abiertos en este hermoso viaje de autodescubrimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="btn-accent inline-flex items-center justify-center"
            >
              Reservar mi Lugar
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

export default TallerCrecimiento;
