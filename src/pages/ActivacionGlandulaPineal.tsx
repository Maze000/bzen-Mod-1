import React from 'react';
import { ArrowLeft, Sparkles, Eye, Brain, Heart, Star, TreePine, Users, Leaf, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ActivacionGlandulaPineal = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Despertar de la Intuición',
      description: 'Desarrolla tu capacidad intuitiva y percepción extrasensorial'
    },
    {
      icon: Brain,
      title: 'Claridad Mental',
      description: 'Mejora tu concentración y capacidad de toma de decisiones'
    },
    {
      icon: Heart,
      title: 'Conexión Espiritual',
      description: 'Fortalece tu conexión con tu ser interior y el universo'
    },
    {
      icon: Star,
      title: 'Equilibrio Energético',
      description: 'Armoniza tus centros energéticos y chakras'
    }
  ];

  const techniques = [
    {
      title: 'Meditación Pineal',
      description: 'Técnicas específicas de meditación enfocadas en la activación de la glándula pineal'
    },
    {
      title: 'Respiración Consciente',
      description: 'Ejercicios de respiración que estimulan la producción de melatonina y DMT'
    },
    {
      title: 'Visualización Guiada',
      description: 'Sesiones de visualización para despertar el tercer ojo y la percepción sutil'
    },
    {
      title: 'Terapia de Luz',
      description: 'Uso de frecuencias específicas de luz para estimular la glándula pineal'
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
                <div className="bg-gradient-to-r from-secondary to-secondary-light p-4 rounded-full">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Activación Glándula Pineal
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Despierta tu tercer ojo y conecta con tu sabiduría interior a través de técnicas 
                especializadas para activar la glándula pineal, el centro de tu intuición y percepción espiritual.
              </p>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                  ¿Qué es la Glándula Pineal?
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  La glándula pineal, conocida como el "tercer ojo", es una pequeña glándula endocrina 
                  ubicada en el centro del cerebro. Esta glándula produce melatonina y DMT, sustancias 
                  que regulan nuestros ciclos de sueño y estados de conciencia expandida.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Cuando está activada, la glándula pineal puede potenciar nuestra intuición, 
                  percepción extrasensorial y conexión espiritual, permitiéndonos acceder a 
                  niveles más profundos de conciencia y sabiduría interior.
                </p>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Eye className="h-16 w-16 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    El Tercer Ojo
                  </h3>
                  <p className="text-text-secondary">
                    Portal hacia la percepción sutil y la sabiduría interior
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
                Beneficios de la Activación
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Descubre cómo la activación de tu glándula pineal puede transformar tu vida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-secondary to-secondary-light p-4 rounded-full w-fit mb-6">
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

        {/* Techniques Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Técnicas de Activación
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Métodos especializados para despertar tu glándula pineal de forma segura y efectiva
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techniques.map((technique, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {technique.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {technique.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ancestrología y Constelaciones Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-accent to-accent-light p-4 rounded-full">
                  <TreePine className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Ancestrología y Constelaciones Familiares
              </h2>
              <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Herramientas sagradas de sanación transgeneracional que permiten mirar y transformar 
                los patrones heredados que inconscientemente repetimos en nuestra vida.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Ancestrología */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-accent to-accent-light p-3 rounded-full mr-4">
                    <Compass className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary">
                    Ancestrología
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Basada en el enfoque de Engel y Liberman, es un viaje terapéutico al árbol genealógico 
                  que busca comprender los destinos familiares, lealtades invisibles y traumas no resueltos 
                  que habitan en nuestra memoria celular.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  A través de esta mirada profunda, se honra el linaje, se resignifica el pasado y 
                  se recupera la fuerza vital del sistema.
                </p>
              </div>

              {/* Constelaciones Familiares */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-primary to-primary-light p-3 rounded-full mr-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary">
                    Constelaciones Familiares
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Complementan este trabajo permitiendo representar visual y energéticamente las 
                  dinámicas ocultas del sistema familiar.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  A través de movimientos del alma y del espíritu, se abre un espacio de sanación, 
                  reconciliación y liberación.
                </p>
              </div>
            </div>

            {/* Patrones que sanamos */}
            <div className="bg-gradient-healing p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-playfair font-bold text-text-primary mb-6 text-center">
                Patrones que Transformamos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                {[
                  'Miedos heredados',
                  'Enfermedades familiares',
                  'Bloqueos económicos',
                  'Conflictos de pareja',
                  'Vínculos difíciles',
                  'Sensación de no pertenecer',
                  'Traumas no resueltos',
                  'Lealtades invisibles',
                  'Destinos repetidos',
                  'Memorias celulares'
                ].map((pattern, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-text-secondary font-medium">{pattern}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Para quién está dirigido */}
            <div className="bg-white p-8 rounded-2xl shadow-card mb-12">
              <div className="flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-playfair font-bold text-text-primary">
                  ¿Para Quién es Esta Terapia?
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-center max-w-4xl mx-auto">
                🌿 Estas terapias están orientadas a quienes sienten que cargan con un peso que no es propio, 
                que repiten historias que no comprenden o desean sanar su vínculo con sus raíces y 
                liberar a las próximas generaciones.
              </p>
            </div>

            {/* Enfoque terapéutico */}
            <div className="text-center bg-gradient-to-r from-secondary/10 to-accent/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                Nuestro Enfoque
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto mb-6">
                ✨ En cada sesión individual o grupal, se abre un espacio respetuoso y amoroso para 
                mirar lo que necesita ser visto, desde la comprensión, la compasión y el alma.
              </p>
              <div className="bg-white p-6 rounded-xl inline-block">
                <p className="text-lg font-playfair font-semibold text-primary mb-2">
                  "Sanar tu árbol es sanar tu vida."
                </p>
                <p className="text-lg font-playfair font-semibold text-secondary">
                  "Honrar tu historia es recuperar tu libertad."
                </p>
              </div>
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
              Inicia tu viaje de sanación transgeneracional con nuestras terapias especializadas. 
              Libera patrones heredados y recupera tu libertad ancestral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Reservar Sesión
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

export default ActivacionGlandulaPineal;
