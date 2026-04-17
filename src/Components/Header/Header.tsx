import { useState } from 'react';
import logo from '../../assets/materiais/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Filmes', href: '#' },
    { name: 'Séries', href: '#' },
  ];

  return (
    <header className="relative w-full bg-header px-6 md:px-12 py-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
    
        <div className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Logo do OPOVO" 
            className="w-28 md:w-36 lg:w-44" 
          />
        </div>

      
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sand text-base font-bold tracking-wider hover:text-gray-300 transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>


        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 focus:outline-none"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      
      <div 
        className={`
          absolute top-full left-0 w-full bg-header border-t border-white/10 transition-all duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? 'max-h-80 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-bold text-xl border-b border-white/5 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;