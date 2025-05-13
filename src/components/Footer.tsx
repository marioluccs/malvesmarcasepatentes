
import { Shield, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-malves-blue text-white">
      <div className="section-container pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-white mr-2" />
              <div>
                <span className="text-xl font-bold">Malves</span>
                <span className="block text-xs text-white/70">Registro de Marcas e Patentes</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Protegemos o patrimônio intelectual de nossos clientes com excelência, segurança e agilidade, através de uma equipe altamente especializada.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/malvesmarcasepatentes" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/malvesmarcasepatentes" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-white/80 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#por-que" className="text-white/80 hover:text-white transition-colors">Por que Registrar</a></li>
              <li><a href="#processo" className="text-white/80 hover:text-white transition-colors">Processo</a></li>
              <li><a href="#servicos" className="text-white/80 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-white/80 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5533999189675" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (33) 99918-9675
                </a>
              </li>
              <li>
                <a href="mailto:contato@malvesmarcasepatentes.com" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@malvesmarcasepatentes.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/malvesmarcasepatentes" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  @malvesmarcasepatentes
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20">
          <p className="text-white/60 text-center">
            © {new Date().getFullYear()} Malves Registro de Marcas e Patentes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
