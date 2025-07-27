import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Psicoterapia', href: '#psicologia' },
    { name: 'Terapias', href: '#terapias' },
    { name: 'Contacto', href: '#contacto' },
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
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Servicios principales</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Psicoterapia Individual</li>
              <li>Flores de Bach</li>
              <li>Tarot Terapéutico</li>
              <li>Mindfulness</li>
              <li>Talleres Empresariales</li>
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
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;