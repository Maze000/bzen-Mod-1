import React from 'react';
import { ArrowLeft, Heart, Flower, Droplets, Sparkles, Brain, Star, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TerapiasComplementarias = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-accent text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full text-white hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-radius flex items-center justify-center mr-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
                Terapias Complementarias
              </h1>
              <p className="text-xl text-white/90">
                Un abordaje holístico para tu bienestar integral
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
            Sanación Natural y Equilibrio Energético
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            En Centro BZEN creemos en la importancia de un enfoque integral del bienestar. 
            Nuestras terapias complementarias trabajan en armonía con los tratamientos tradicionales, 
            abordando no solo los síntomas, sino las causas profundas del desequilibrio.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Combinamos sabiduría ancestral con técnicas modernas para ofrecerte un camino 
            de sanación que honra tanto tu cuerpo como tu espíritu.
          </p>
        </div>

        {/* Main Therapies Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Nuestras Terapias Complementarias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Flores de Bach */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Flower className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Flores de Bach</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Sistema de sanación natural que utiliza esencias florales para equilibrar 
                estados emocionales y mentales, promoviendo la armonía interior.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Equilibrio emocional
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Reducción de estrés y ansiedad
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Apoyo en procesos de cambio
                </li>
              </ul>
            </div>

            {/* Tarot Terapéutico */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Tarot Terapéutico</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Herramienta de autoconocimiento que facilita la reflexión profunda 
                y la toma de conciencia sobre patrones y posibilidades de crecimiento.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Autoconocimiento profundo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Claridad en decisiones
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Exploración de potenciales
                </li>
              </ul>
            </div>

            {/* Aromaterapia */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Droplets className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Aromaterapia</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Terapia natural que utiliza aceites esenciales puros para promover 
                el bienestar físico, mental y emocional a través del poder del olfato.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Relajación profunda
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Mejora del estado de ánimo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Equilibrio energético
                </li>
              </ul>
            </div>

            {/* Activación Glándula Pineal */}
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Activación Glándula Pineal</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Técnicas especializadas para despertar y activar la glándula pineal, 
                facilitando estados expandidos de conciencia y conexión espiritual.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Expansión de conciencia
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Mejora de la intuición
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Conexión espiritual
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Holistic Approach */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Enfoque Holístico Integral
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-accent mr-3" />
                  Mente-Cuerpo-Espíritu
                </h4>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Nuestras terapias complementarias reconocen la interconexión entre todos 
                  los aspectos del ser humano, trabajando de manera integral para restaurar 
                  el equilibrio natural.
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Sanación emocional profunda</li>
                  <li>• Liberación de bloqueos energéticos</li>
                  <li>• Fortalecimiento del sistema inmune</li>
                  <li>• Desarrollo de la intuición</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-secondary mr-3" />
                  Complemento Perfecto
                </h4>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Estas terapias se integran perfectamente con tratamientos psicológicos 
                  tradicionales, potenciando los resultados y acelerando el proceso de sanación.
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Reducción de efectos secundarios</li>
                  <li>• Aceleración del proceso terapéutico</li>
                  <li>• Mayor autoconciencia</li>
                  <li>• Herramientas de autocuidado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Beneficios de las Terapias Complementarias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Bienestar Emocional</h4>
              <p className="text-text-secondary text-sm">
                Equilibrio emocional natural y reducción del estrés
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Crecimiento Espiritual</h4>
              <p className="text-text-secondary text-sm">
                Conexión profunda con tu esencia y propósito de vida
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Sanación Natural</h4>
              <p className="text-text-secondary text-sm">
                Activación de los mecanismos naturales de autocuración
              </p>
            </div>
          </div>
        </div>

        {/* Session Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            ¿Cómo Trabajamos?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Evaluación Holística</h4>
                <p className="text-text-secondary">
                  Analizamos tu estado físico, emocional y energético para determinar qué terapias 
                  complementarias serán más beneficiosas para ti.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Plan Personalizado</h4>
                <p className="text-text-secondary">
                  Diseñamos un plan de tratamiento que combina diferentes terapias según tus 
                  necesidades específicas y objetivos de sanación.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Acompañamiento Integral</h4>
                <p className="text-text-secondary">
                  Te acompañamos en todo el proceso, ajustando las terapias según tu evolución 
                  y proporcionando herramientas para tu autocuidado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conditions Helped */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Condiciones que Pueden Beneficiarse
          </h3>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-text-secondary">• Ansiedad y estrés crónico</div>
              <div className="text-text-secondary">• Depresión leve a moderada</div>
              <div className="text-text-secondary">• Insomnio y trastornos del sueño</div>
              <div className="text-text-secondary">• Dolores crónicos</div>
              <div className="text-text-secondary">• Bloqueos emocionales</div>
              <div className="text-text-secondary">• Baja autoestima</div>
              <div className="text-text-secondary">• Procesos de duelo</div>
              <div className="text-text-secondary">• Crisis espirituales</div>
              <div className="text-text-secondary">• Búsqueda de propósito</div>
              <div className="text-text-secondary">• Desarrollo personal</div>
              <div className="text-text-secondary">• Mejora de la intuición</div>
              <div className="text-text-secondary">• Equilibrio energético</div>
            </div>
          </div>
        </div>

        {/* Safety and Ethics */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Seguridad y Ética Profesional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Práctica Segura</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Terapeutas certificados y experimentados</li>
                <li>• Productos naturales de alta calidad</li>
                <li>• Protocolos de seguridad establecidos</li>
                <li>• Seguimiento personalizado</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Enfoque Ético</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• Respeto por tus creencias y valores</li>
                <li>• Consentimiento informado</li>
                <li>• Confidencialidad absoluta</li>
                <li>• Complemento, no reemplazo médico</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-accent/10 rounded-radius-lg p-12">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
            ¿Listo para Explorar tu Potencial de Sanación?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Descubre el poder transformador de las terapias complementarias. 
            Nuestro equipo está aquí para guiarte en este hermoso camino de sanación integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="btn-accent inline-flex items-center justify-center"
            >
              Reservar Consulta
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

export default TerapiasComplementarias;
