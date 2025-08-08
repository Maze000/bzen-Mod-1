import React from 'react';
import { ArrowLeft, Users, Building, Target, TrendingUp, Heart, Shield, CheckCircle, Clock, Star, Lightbulb, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TalleresEmpresas = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-20">
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
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
                Talleres para Empresas
              </h1>
              <p className="text-xl text-white/90">
                Bienestar emocional y desarrollo de conciencia organizacional
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
            Transformando Organizaciones desde el Interior
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            En Centro BZEN entendemos que las empresas más exitosas son aquellas que priorizan 
            el bienestar integral de sus equipos. Nuestros talleres corporativos están diseñados 
            para crear ambientes laborales más conscientes, saludables y productivos, donde cada 
            persona puede desarrollar su máximo potencial.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Combinamos técnicas de mindfulness, inteligencia emocional y desarrollo personal 
            para generar transformaciones profundas que impactan positivamente tanto en el 
            clima laboral como en los resultados organizacionales.
          </p>
        </div>

        {/* Core Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Nuestros Programas Corporativos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mindfulness Corporativo */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Mindfulness Corporativo</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Programa integral para desarrollar la atención plena en el entorno laboral, 
                reduciendo el estrés y mejorando la concentración y productividad.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Técnicas de meditación en el trabajo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Gestión consciente del estrés
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Mejora de la concentración
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Pausas conscientes efectivas
                </li>
              </ul>
            </div>

            {/* Inteligencia Emocional */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Inteligencia Emocional</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Desarrollo de habilidades emocionales para mejorar las relaciones interpersonales, 
                la comunicación efectiva y el liderazgo consciente.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Autoconciencia emocional
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Comunicación asertiva
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Resolución de conflictos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                  Liderazgo empático
                </li>
              </ul>
            </div>

            {/* Bienestar Integral */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Bienestar Integral</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Programa holístico que aborda el bienestar físico, mental y emocional, 
                creando hábitos saludables que perduran en el tiempo.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Ergonomía y postura consciente
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Nutrición y energía vital
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Equilibrio vida-trabajo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  Prevención del burnout
                </li>
              </ul>
            </div>

            {/* Team Building Consciente */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-text-primary">Team Building Consciente</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Actividades innovadoras que fortalecen la cohesión del equipo a través 
                de experiencias transformadoras y conexión auténtica.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Dinámicas de confianza
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Comunicación efectiva
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Colaboración creativa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  Visión compartida
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits for Organizations */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Beneficios para tu Organización
          </h3>
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-secondary mr-3" />
                  Resultados Medibles
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Reducción del 40%</strong> en niveles de estrés laboral</li>
                  <li>• <strong>Aumento del 35%</strong> en productividad y concentración</li>
                  <li>• <strong>Mejora del 50%</strong> en satisfacción laboral</li>
                  <li>• <strong>Disminución del 30%</strong> en ausentismo por enfermedad</li>
                  <li>• <strong>Incremento del 45%</strong> en retención de talento</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <Building className="h-6 w-6 text-primary mr-3" />
                  Impacto Organizacional
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>• <strong>Clima laboral:</strong> Ambiente más positivo y colaborativo</li>
                  <li>• <strong>Comunicación:</strong> Diálogos más efectivos y empáticos</li>
                  <li>• <strong>Liderazgo:</strong> Líderes más conscientes y inspiradores</li>
                  <li>• <strong>Innovación:</strong> Mayor creatividad y pensamiento lateral</li>
                  <li>• <strong>Cultura:</strong> Valores de bienestar integrados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Formats */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Formatos de Talleres
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Talleres Intensivos</h4>
              <p className="text-text-secondary text-sm mb-3">
                Sesiones de medio día o día completo para inmersión profunda
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• 4-8 horas de duración</li>
                <li>• Máximo impacto</li>
                <li>• Experiencias transformadoras</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Programas Modulares</h4>
              <p className="text-text-secondary text-sm mb-3">
                Series de talleres distribuidos en el tiempo para integración gradual
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• 2-3 horas por sesión</li>
                <li>• Seguimiento continuo</li>
                <li>• Integración sostenible</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-radius-lg">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">Charlas Inspiracionales</h4>
              <p className="text-text-secondary text-sm mb-3">
                Conferencias motivacionales para sensibilizar y despertar interés
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• 1-2 horas de duración</li>
                <li>• Formato dinámico</li>
                <li>• Introducción al tema</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Proceso de Implementación
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Diagnóstico Organizacional</h4>
                <p className="text-text-secondary">
                  Evaluamos las necesidades específicas de tu empresa, cultura organizacional 
                  y objetivos para diseñar un programa completamente personalizado.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Diseño Personalizado</h4>
                <p className="text-text-secondary">
                  Creamos un programa a medida que se adapte a tu horario, presupuesto y 
                  objetivos específicos, combinando diferentes módulos según tus necesidades.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Implementación y Seguimiento</h4>
                <p className="text-text-secondary">
                  Ejecutamos el programa con facilitadores expertos y realizamos seguimiento 
                  continuo para asegurar la integración efectiva de los aprendizajes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Evaluación de Resultados</h4>
                <p className="text-text-secondary">
                  Medimos el impacto del programa a través de indicadores cuantitativos y 
                  cualitativos, proporcionando reportes detallados de los resultados obtenidos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Industries */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
            Sectores que Atendemos
          </h3>
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-radius-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-text-secondary">• Tecnología e Innovación</div>
              <div className="text-text-secondary">• Servicios Financieros</div>
              <div className="text-text-secondary">• Salud y Bienestar</div>
              <div className="text-text-secondary">• Educación</div>
              <div className="text-text-secondary">• Retail y Comercio</div>
              <div className="text-text-secondary">• Manufactura</div>
              <div className="text-text-secondary">• Consultoría</div>
              <div className="text-text-secondary">• Organizaciones sin fines de lucro</div>
              <div className="text-text-secondary">• Sector público</div>
              <div className="text-text-secondary">• Startups y emprendimientos</div>
              <div className="text-text-secondary">• Medios y comunicación</div>
              <div className="text-text-secondary">• Turismo y hospitalidad</div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Lo que Dicen Nuestros Clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-lg font-semibold text-text-primary">Empresa Tecnológica</h4>
              </div>
              <p className="text-text-secondary italic mb-4">
                "Los talleres de mindfulness transformaron completamente nuestro ambiente laboral. 
                El estrés disminuyó notablemente y la productividad aumentó de manera sorprendente."
              </p>
              <p className="text-sm text-text-secondary">- Director de RRHH</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-radius-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-lg font-semibold text-text-primary">Consultora Internacional</h4>
              </div>
              <p className="text-text-secondary italic mb-4">
                "El programa de inteligencia emocional mejoró significativamente la comunicación 
                entre equipos. Ahora tenemos líderes más empáticos y efectivos."
              </p>
              <p className="text-sm text-text-secondary">- Gerente General</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-radius-lg p-12">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
            ¿Listo para Transformar tu Organización?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Invierte en el bienestar de tu equipo y observa cómo se transforma la cultura 
            organizacional. Nuestros programas están diseñados para generar resultados 
            duraderos y medibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="btn-accent inline-flex items-center justify-center"
            >
              Solicitar Propuesta
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

export default TalleresEmpresas;
