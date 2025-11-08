import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Shield, Heart, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import isapresImage from '@/assets/isapres.png';
import heroMeditation from '@/assets/hero-meditation.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto para agendar tu sesión.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'centrobzen@gmail.com',
      href: 'mailto:centrobzen@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+56 9 66893574',
      href: 'https://wa.me/66893574'
    },
    {
      icon: MapPin,
      label: 'Dirección',
      value: 'Providencia, Santiago',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Horarios',
      value: 'Lun - Vie: 9:00 - 20:00',
      href: '#'
    }
  ];

  const services = [
    'Psicoterapia Individual',
    'Terapias Complementarias', 
    'Flores de Bach',
    'Tarot Terapéutico',
    'Aromaterapia',
    'Activación Glándula Pineal',
    'Mindfulness',
    'Talleres Empresariales'
  ];

  const isapres = [
    { name: 'Fonasa', category: 'Sistema Público' },
    { name: 'Banmédica', category: 'ISAPRE' },
    { name: 'Colmena Golden Cross', category: 'ISAPRE' },
    { name: 'Consalud', category: 'ISAPRE' },
    { name: 'Cruz Blanca', category: 'ISAPRE' },
    { name: 'Fundación BancoEstado', category: 'ISAPRE' },
    { name: 'Fusat', category: 'ISAPRE' },
    { name: 'IST', category: 'ISAPRE' },
    { name: 'Masvida', category: 'ISAPRE' },
    { name: 'Nueva Masvida', category: 'ISAPRE' },
    { name: 'Vida Tres', category: 'ISAPRE' },
    { name: 'Chuquicamata', category: 'ISAPRE' },
  ];

  return (
    <>
      <section id="contacto" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-text-primary mb-6">
              Comienza tu proceso de sanación
            </h2>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Estamos aquí para acompañarte. Contáctanos para agendar tu primera sesión 
              o resolver cualquier duda sobre nuestras terapias.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-soft p-8 slide-in-up">
              <h3 className="text-subsection text-text-primary mb-6">
                Envíanos tu consulta
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-radius border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-radius border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-radius border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar consulta
                </button>
              </form>

              {/* WhatsApp CTA */}
              <div className="mt-6 pt-6 border-t border-primary/10">
                <div className="bg-transparent border border-primary/20 p-4 rounded-radius">
                  <p className="text-sm text-text-secondary mb-3">
                    ¿Prefieres hablar directamente?
                  </p>
                  <a 
                    href="https://wa.me/56966893574" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-accent inline-flex items-center"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>

              {/* Wellness Inspiration */}
              <div className="mt-6 pt-6 border-t border-primary/10 space-y-4">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-radius border border-primary/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">Tu bienestar es importante</h4>
                      <p className="text-xs text-text-secondary">Cada paso hacia la sanación cuenta</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary">
                    <Sparkles className="h-3 w-3 text-accent" />
                    <span>Espacio seguro y confidencial</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-4 rounded-radius border border-secondary/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">Transformación personal</h4>
                      <p className="text-xs text-text-secondary">Descubre tu potencial interior</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary">
                    <Heart className="h-3 w-3 text-primary" />
                    <span>Acompañamiento profesional</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-4 rounded-radius border border-accent/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">Sanación integral</h4>
                      <p className="text-xs text-text-secondary">Cuerpo, mente y espíritu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary">
                    <Sparkles className="h-3 w-3 text-secondary" />
                    <span>Terapias holísticas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="card-elevated p-8 slide-in-up">
                <h3 className="text-subsection text-text-primary mb-6">
                  Información de contacto
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-soft rounded-radius flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">{info.label}</div>
                        {info.href !== '#' ? (
                          <a 
                            href={info.href} 
                            className="text-text-primary hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-text-primary">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div className="card-elevated p-8 slide-in-up">
                <h3 className="text-subsection text-text-primary mb-6">
                  Nuestros servicios
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-text-secondary">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="card-elevated p-8 slide-in-up">
                <h3 className="text-subsection text-text-primary mb-6">
                  Nuestra ubicación
                </h3>
                
                <div className="aspect-video rounded-radius overflow-hidden shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5!2d-70.6333!3d-33.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c6a6e0e2c6c1%3A0x1c3b9d1c3b9d1c3b!2sProvidencia%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Centro BZEN - Providencia, Santiago"
                  ></iframe>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-text-secondary">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Providencia, Santiago de Chile
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Ubicación céntrica y de fácil acceso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISAPRES Section */}
      <section id="isapres" className="py-20 bg-gradient-healing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
             <div className="flex justify-center">
               <div className="rounded-radius-lg p-4 transition-all duration-300 slide-in-up max-w-md">
                 <img 
                   src={isapresImage} 
                   alt="Convenios con ISAPRES" 
                   className="w-full h-auto rounded-radius-lg"
                 />
               </div>
             </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-radius-lg p-8 shadow-card">
              <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                Reembolso ISAPRE Disponible
              </h3>
              <p className="text-text-secondary mb-6">
                Muchas de nuestras terapias cuentan con cobertura ISAPRE. 
                Consulta con tu aseguradora sobre los beneficios disponibles 
                para psicología y terapias complementarias.
              </p>
              <div className="flex justify-start">
                <a 
                  href="#contacto" 
                  className="btn-primary inline-flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Consultar cobertura
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Strip */}
      <section className="h-[60px] sm:h-[80px] md:h-[100px] bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16">
            {/* Heart Icon */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-primary animate-pulse">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Sanación</span>
            </div>

            {/* Brain Icon */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-secondary animate-bounce">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Psicología</span>
            </div>

            {/* Crystal/Gem Icon */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-accent animate-pulse">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Gemoterapia</span>
            </div>

            {/* Flower Icon */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-primary animate-bounce">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Flores de Bach</span>
            </div>

            {/* Mindfulness Icon */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-secondary animate-pulse">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Mindfulness</span>
            </div>

            {/* Shield Icon */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-accent animate-bounce">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Protección</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
