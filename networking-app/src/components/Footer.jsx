const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-purple-400">SKILLCONECT2</h3>
            <p className="text-gray-400 mt-2">Conectando talentos profesionales</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} SkillConect2. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;