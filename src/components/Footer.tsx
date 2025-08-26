import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Heart, Mail, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Aquí se puede agregar la lógica para enviar el email a un servicio de newsletter
      console.log('Email suscrito:', email);
      setIsSubscribed(true);
      setEmail('');
      // Resetear el estado después de 3 segundos
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const links = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Sobre Nosotros', href: '/#sobre' },
    { name: 'Psicología', href: '/#psicologia' },
    { name: 'Terapias', href: '/#terapias' },
    { name: 'Talleres', href: '/#talleres' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/bzen_cl',
      icon: Instagram,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/56912345678',
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-playfair font-bold">BZEN</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Centro de Terapias Holísticas y Psicología Integrativa. 
              Tu espacio seguro para la sanación integral.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Servicios principales</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/psicoterapia-individual" className="hover:text-white transition-colors duration-200">
                  Psicoterapia Individual
                </Link>
              </li>
              <li>
                <Link to="/terapia-floral" className="hover:text-white transition-colors duration-200">
                  Flores de Bach
                </Link>
              </li>
              <li>
                <Link to="/tarot-terapeutico" className="hover:text-white transition-colors duration-200">
                  Tarot Terapéutico
                </Link>
              </li>
              <li>
                <Link to="/mindfulness-terapia-evolutiva" className="hover:text-white transition-colors duration-200">
                  Mindfulness
                </Link>
              </li>
              <li>
                <Link to="/talleres-empresas" className="hover:text-white transition-colors duration-200">
                  Talleres Empresariales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-radius flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-white/80 space-y-1">
              <p>contacto@bzen.cl</p>
              <p>+56 9 1234 5678</p>
              <p>Providencia, Santiago</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="font-semibold">Suscríbete</h3>
            <p className="text-sm text-white/80">
              Recibe noticias, consejos de bienestar y actualizaciones de nuestros talleres.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
                             <div className="relative">
                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                 <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Tu correo electrónico"
                   className="w-full pl-10 pr-4 py-2 bg-white border border-white/20 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/30 transition-all duration-200"
                   required
                 />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span>Suscribirse</span>
              </button>
            </form>
            {isSubscribed && (
              <div className="text-sm text-green-300 bg-green-500/20 p-2 rounded-lg">
                ¡Gracias por suscribirte! Te mantendremos informado.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © {currentYear} BZEN - Centro de Terapias Holísticas y Psicología Integrativa. 
              Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-secondary-light" />
              <span>para tu bienestar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300 z-50"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </footer>
  );
};

export default Footer;