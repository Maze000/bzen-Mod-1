import React from 'react';
import { Gem, Sparkles, BookOpen, Users, Award, Clock, MapPin, ArrowRight, CheckCircle, Star, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const GemotherapyDiploma = () => {
  const learningObjectives = [
    'Conocer las propiedades energéticas y sanadoras de más de 43 cristales',
    'Limpiar, programar y activar gemas correctamente',
    'Trabajar con chakras y cuerpos sutiles a través de los cristales',
    'Realizar terapias individuales de gemoterapia',
    'Crear mandalas y redes cristalinas',
    'Integrar los cristales en otras terapias (reiki, flores de Bach, tarot, etc.)',
    'Sintonizarte con la conciencia cristalina desde la espiritualidad'
  ];

  const programFeatures = [
    {
      icon: BookOpen,
      title: 'Formación Teórico-Práctica',
      description: 'Aprendizaje integral que combina teoría sólida con práctica vivencial'
    },
    {
      icon: Users,
      title: 'Clases Presenciales/Online',
      description: 'Modalidad híbrida que se adapta a tus necesidades y ubicación'
    },
    {
      icon: Sparkles,
      title: 'Prácticas Supervisadas',
      description: 'Acompañamiento experto en cada paso de tu desarrollo'
    },
    {
      icon: Award,
      title: 'Certificación Profesional',
      description: 'Diploma reconocido al completar exitosamente el programa'
    }
  ];

  const crystalCategories = [
    {
      category: 'Cristales de Protección',
      examples: 'Cuarzo, Obsidiana, Turmalina Negra',
      color: 'from-red-500/10 to-orange-500/10'
    },
    {
      category: 'Cristales de Amor',
      examples: 'Cuarzo Rosa, Rodocrosita, Jade',
      color: 'from-pink-500/10 to-red-500/10'
    },
    {
      category: 'Cristales de Sabiduría',
      examples: 'Amatista, Sodalita, Lapislázuli',
      color: 'from-purple-500/10 to-blue-500/10'
    },
    {
      category: 'Cristales de Abundancia',
      examples: 'Citrino, Pirita, Aventurina',
      color: 'from-yellow-500/10 to-green-500/10'
    }
  ];

  return (
    <section id="diplomado-gemoterapia" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-radius-lg shadow-soft flex items-center justify-center mr-4">
              <Gem className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-section text-text-primary">
                Diplomado en Gemoterapia
              </h2>
              <p className="text-text-secondary">Centro BZEN</p>
            </div>
          </div>
          <p className="text-body text-text-secondary max-w-4xl mx-auto">
            Una formación teórico-práctica y vivencial, dirigida a terapeutas, facilitadores, 
            buscadores espirituales o cualquier persona que desee profundizar en el uso 
            terapéutico y energético de los cristales.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column - Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-soft rounded-radius-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-text-primary mb-6">
                ¿Qué aprenderás?
              </h3>
              <div className="space-y-4">
                {learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-healing rounded-radius-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-text-primary mb-6">
                Metodología Académica
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white rounded-radius shadow-soft flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Program Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-radius-lg shadow-card p-6 border border-primary/10">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Información del Programa</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-text-primary">Duración</p>
                    <p className="text-sm text-text-secondary">6 meses</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-text-primary">Modalidad</p>
                    <p className="text-sm text-text-secondary">Presencial y Online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-text-primary">Cupos</p>
                    <p className="text-sm text-text-secondary">Máximo 15 estudiantes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-text-primary">Certificación</p>
                    <p className="text-sm text-text-secondary">Diploma Profesional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-radius-lg p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Incluye</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span>Material de apoyo completo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span>Kit inicial de cristales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span>Acceso a biblioteca digital</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span>Grupo de estudio privado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span>Certificación profesional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Crystal Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8 text-center">
            Categorías de Cristales que Estudiarás
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crystalCategories.map((category, index) => (
              <div key={index} className={`${category.color} rounded-radius-lg p-6 text-center hover:shadow-healing transition-all duration-300`}>
                <div className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-4">
                  <Gem className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{category.category}</h4>
                <p className="text-sm text-text-secondary">{category.examples}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-radius-lg p-8 lg:p-12 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-6">
              Más que un curso: una iniciación
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Este diplomado es más que un curso: es una iniciación al lenguaje de los cristales 
              y a tu propia sabiduría interior. Una formación que transforma, expande y conecta con lo sagrado.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-secondary" />
                <span>Transformación personal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>Expansión de conciencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Conexión con lo sagrado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-soft rounded-radius-lg p-8 lg:p-12">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
              ¿Listo para iniciar tu camino con los cristales?
            </h3>
            <p className="text-body text-text-secondary max-w-2xl mx-auto mb-8">
              Únete a nuestro diplomado y descubre el poder transformador de la gemoterapia. 
              Una oportunidad única para desarrollar tus habilidades terapéuticas y conectar con la sabiduría ancestral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center group">
                Solicitar información
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Descargar programa completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemotherapyDiploma;
