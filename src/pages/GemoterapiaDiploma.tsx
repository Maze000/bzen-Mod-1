import React from 'react';
import { ArrowLeft, Gem, Sparkles, BookOpen, Users, Clock, Heart, Star, CheckCircle, Award, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const GemoterapiaDiploma = () => {
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
              <Gem className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
                Diplomado en Gemoterapia
              </h1>
              <p className="text-xl text-white/90">
                Con Paola Molina Escobar
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
            El Poder Sanador de los Cristales
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            La gemoterapia es la utilización de piedras y cristales para acompañar en el
            proceso de equilibrio, sanación y/o evolución de un ser humano en su nivel
            físico, energético y espiritual.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Las piedras, cuarzos y cristales son dados por nuestra madre, la tierra,
            entregándonos una profunda sabiduría para nuestro bienestar. Desde civilizaciones 
            antiguas se utilizan las piedras tanto para su uso estético como también sanador.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Los Cuatro Pilares de la Gemoterapia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Fundamentos */}
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Fundamentos Científicos</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Conoce el origen de las piedras y cristales, su historia en civilizaciones 
                antiguas y su uso en la modernidad para comprender su poder sanador.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Origen de las piedras y cristales
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Historia en civilizaciones antiguas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Uso en la modernidad
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Diferencia entre piedras y cristales
                </li>
              </ul>
            </div>

            {/* Sistema Energético */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Sistema Energético</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Trabaja con los chakras, el Prana, el estado Alfa y aprende a utilizar 
                las piedras para abrir y energizar los centros energéticos del cuerpo.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Los chakras y sus características
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Qué es el Prana y Pranayama
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  El estado Alfa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Curación con las gemas
                </li>
              </ul>
            </div>

            {/* Aplicaciones Prácticas */}
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Aplicaciones Prácticas</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Aprende metodología para consulta con pacientes, auto curación con gemas, 
                elixir de gemas y uso de herramientas como péndulo y bola de cristal.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Metodología para consulta con pacientes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Auto curación con gemas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Elixir de gemas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Uso de péndulo y bola de cristal
                </li>
              </ul>
            </div>

            {/* Energías Cósmicas */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Energías Cósmicas</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Conecta con el poder de la Luna y el Sol, entrando al estado Alfa y 
                conectando con tu presencia divina, Dios y Ángeles.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  El poder de la Luna
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  El poder del Sol
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Entrando a estado Alfa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Conexión con presencia divina
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workshop Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Estructura del Diplomado
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-accent mr-3" />
                  Metodología Integral
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Clases teórico-prácticas:</strong> Aprendizaje vivencial</li>
                  <li>• <strong>Prácticas supervisadas:</strong> Acompañamiento experto</li>
                  <li>• <strong>Material de apoyo:</strong> Biblioteca digital completa</li>
                  <li>• <strong>Grupo de estudio:</strong> Comunidad de aprendizaje</li>
                  <li>• <strong>Certificación profesional:</strong> Diploma reconocido</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Gem className="h-6 w-6 text-secondary mr-3" />
                  Materiales Incluidos
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Set de piedras:</strong> Para trabajar 7 Chakras</li>
                  <li>• <strong>Turmalina Negra:</strong> 2 piezas de protección</li>
                  <li>• <strong>Selenita:</strong> 2 piezas para limpieza</li>
                  <li>• <strong>Péndulo:</strong> Herramienta de diagnóstico</li>
                  <li>• <strong>Bruma Áurica:</strong> Para meditaciones y activaciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            El Viaje de Aprendizaje
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Fundamentos de la Gemoterapia</h4>
                <p className="text-text-secondary">
                  Iniciamos conociendo el origen de las piedras y cristales, su historia 
                  en civilizaciones antiguas y su uso en la modernidad.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Sistema Energético y Chakras</h4>
                <p className="text-text-secondary">
                  Aprendemos sobre los chakras, el Prana, el estado Alfa y cómo utilizar 
                  las piedras para abrir y energizar los centros energéticos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Aplicaciones Prácticas</h4>
                <p className="text-text-secondary">
                  Desarrollamos habilidades para consulta con pacientes, auto curación, 
                  elixir de gemas y uso de herramientas como péndulo y bola de cristal.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Integración y Certificación</h4>
                <p className="text-text-secondary">
                  Integramos todos los aprendizajes, conectamos con energías cósmicas 
                  y obtenemos la certificación profesional como gemoterapeuta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Beneficios que Obtendrás
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Sanación Integral</h4>
              <p className="text-text-secondary text-sm">
                Aprende a sanar a nivel físico, energético y espiritual con cristales
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Desarrollo Profesional</h4>
              <p className="text-text-secondary text-sm">
                Obtén certificación profesional para ejercer como gemoterapeuta
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Conexión Espiritual</h4>
              <p className="text-text-secondary text-sm">
                Conecta con la sabiduría ancestral y energías cósmicas
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Formats */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Modalidades del Diplomado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Clases Presenciales</h4>
              </div>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li>• Grupos pequeños (máximo 15 estudiantes)</li>
                <li>• Ambiente de aprendizaje colaborativo</li>
                <li>• Prácticas supervisadas en vivo</li>
                <li>• Duración: 6 meses, 2 clases por mes</li>
              </ul>
              <p className="text-sm text-text-secondary italic">
                Ideal para aprendizaje práctico y vivencial
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Certificación Profesional</h4>
              </div>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li>• Diploma reconocido al completar</li>
                <li>• Material de apoyo completo</li>
                <li>• Acceso a biblioteca digital</li>
                <li>• Grupo de estudio privado</li>
              </ul>
              <p className="text-sm text-text-secondary italic">
                Formación integral para ejercer profesionalmente
              </p>
            </div>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            ¿Para Quién es Este Diplomado?
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Este diplomado es para ti si:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Eres terapeuta o facilitador en busca de nuevas herramientas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Te interesa el poder sanador de los cristales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Buscas profundizar en el sistema energético
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Quieres desarrollar tu espiritualidad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Deseas obtener certificación profesional
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Especialmente beneficioso para:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Terapeutas holísticos y complementarios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Facilitadores de crecimiento personal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Buscadores espirituales conscientes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Personas interesadas en energías sutiles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Quienes desean integrar cristales en su práctica
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
                <h4 className="text-xl font-semibold text-text-primary">Duración y Horarios</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>Duración:</strong> 6 meses</li>
                <li>• <strong>Frecuencia:</strong> 2 clases por mes</li>
                <li>• <strong>Duración clase:</strong> 2 horas teórico-práctico</li>
                <li>• <strong>Modalidad:</strong> Presencial</li>
              </ul>
            </div>

                         <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
               <div className="flex items-center mb-4">
                 <Award className="h-6 w-6 text-primary mr-3" />
                 <h4 className="text-xl font-semibold text-text-primary">Valor Diplomado</h4>
               </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>Pago mensual:</strong> $75.000</li>
                <li>• <strong>Pago único:</strong> $382.500 (15% descuento)</li>
                <li>• <strong>Incluye:</strong> Material completo y certificación</li>
                <li>• <strong>Horario:</strong> Por confirmar</li>
              </ul>
            </div>
          </div>
        </div>

                 {/* Personal Message */}
         <div className="mb-16">
           <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
             Mensaje
           </h3>
           <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-radius-lg p-8">
             <div className="text-center max-w-3xl mx-auto">
               <p className="text-lg text-text-secondary leading-relaxed mb-6 italic">
                 "Las gemas han sido mis mejores amigas junto a su nobleza energía e información, me
                 acompañan en el proceso de entrega a cada persona que lo necesita.
               </p>
               <p className="text-lg text-text-secondary leading-relaxed mb-6 italic">
                 Mi fiel compañera es la Amatista que me permite expandir mi percepción en pos de ayuda y
                 guía a quien lo necesita. Así mismo el Arcángel Zadquiel que junto a esta bella gema Amatista
                 me conectan a un camino profundo de creación, visualización, transmutación y expansión de
                 consciencia"
               </p>
               <p className="text-lg font-semibold text-text-primary mb-4">
                 Gracias por ser parte de este camino junto al mío.
               </p>
               <p className="text-lg text-accent font-semibold">
                 Con amor...
               </p>
               <p className="text-lg text-accent font-semibold">
                 Paola Molina Escobar
               </p>
             </div>
           </div>
         </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-primary/10 rounded-radius-lg p-12">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
            ¿Listo para Iniciar tu Camino con los Cristales?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Únete a nuestro diplomado y descubre el poder transformador de la gemoterapia. 
            Una oportunidad única para desarrollar tus habilidades terapéuticas y conectar 
            con la sabiduría ancestral de los cristales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="btn-accent inline-flex items-center justify-center"
            >
              ¡Inscríbete Ahora!
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

export default GemoterapiaDiploma;
