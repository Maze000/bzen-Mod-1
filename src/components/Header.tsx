import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoNoAlpha from '@/assets/logonoalpha.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Inicio', href: '/', external: false },
    { name: 'Sobre Nosotros', href: '/#sobre', external: false },
    { name: 'Terapias', href: '/#terapias', external: false },
    { name: 'Psicología', href: '/#psicologia', external: false },
    { name: 'Talleres', href: '/#talleres', external: false },
    { name: 'Contacto', href: '/#contacto', external: false },
  ];

  // Función para hacer scroll a un elemento
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Manejar navegación con anclajes
  const handleNavigation = (href: string, external: boolean) => {
    if (external) {
      // Para rutas externas, navegar directamente
      navigate(href);
      return;
    }
    
    // Para enlaces de anclaje, manejar la navegación
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      
      if (location.pathname === '/' || location.pathname === path) {
        // Si estamos en la página principal, hacer scroll suave
        scrollToElement(anchor);
      } else {
        // Si no estamos en la página principal, navegar a la página principal con el anclaje
        navigate(href);
      }
    } else {
      // Para rutas sin anclaje, navegar normalmente
      if (href === '/') {
        if (location.pathname === '/') {
          // Si estamos navegando a la página principal y ya estamos en ella, hacer scroll hacia arriba
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Navegar a la página principal
          navigate(href);
        }
      } else {
        // Navegar a la ruta
        navigate(href);
      }
    }
  };

  // Efecto para manejar scroll a anclajes cuando se navega desde otra página
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      // Esperar un poco para que la página se cargue completamente
      setTimeout(() => {
        scrollToElement(elementId);
      }, 300);
    } else if (location.pathname === '/') {
      // Si estamos en la página principal sin hash, hacer scroll hacia arriba
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-playfair font-bold text-primary flex items-center">
              <img src={logoNoAlpha} alt="Logo" className="h-8 w-auto mr-1" />ZEN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                item.external ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href, item.external)}
                    className="text-text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigation('/#contacto', false)}
              className="btn-primary"
            >
              Reserva tu sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-light hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-card mt-2">
              {navigation.map((item) => (
                item.external ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavigation(item.href, item.external);
                      setIsMenuOpen(false);
                    }}
                    className="text-text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    handleNavigation('/#contacto', false);
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary block text-center w-full"
                >
                  Reserva tu sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;