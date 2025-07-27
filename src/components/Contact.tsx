import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
      value: 'contacto@bzen.cl',
      href: 'mailto:contacto@bzen.cl'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+56 9 1234 5678',
      href: 'https://wa.me/56912345678'
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

  return (
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
                  href="https://wa.me/56912345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Escribir por WhatsApp
                </a>
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

            {/* Map placeholder */}
            <div className="card-elevated p-8 slide-in-up">
              <h3 className="text-subsection text-text-primary mb-6">
                Nuestra ubicación
              </h3>
              
              <div className="aspect-video bg-gradient-soft rounded-radius flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                  <p className="text-text-secondary">
                    Mapa interactivo próximamente
                  </p>
                  <p className="text-sm text-text-muted mt-2">
                    Providencia, Santiago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;