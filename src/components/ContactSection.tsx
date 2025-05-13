
import { Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Fale Conosco</h2>
        <div className="section-subtitle">
          Estamos à disposição para ajudar você a proteger sua marca.
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="card">
            <h3 className="text-xl font-bold mb-6">Entre em contato</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-2">Telefone</h4>
                <a href="tel:+5533999189675" className="text-malves-blue hover:text-malves-green transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (33) 99918-9675
                </a>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">E-mail</h4>
                <a href="mailto:contato@malvesmarcasepatentes.com" className="text-malves-blue hover:text-malves-green transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@malvesmarcasepatentes.com
                </a>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/malvesmarcasepatentes" className="text-malves-blue hover:text-malves-green transition-colors flex items-center">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com/malvesmarcasepatentes" className="text-malves-blue hover:text-malves-green transition-colors flex items-center">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-4">Horário de Atendimento</h4>
                <p className="text-gray-600">Segunda à Sexta: 09:00 às 18:00</p>
                <p className="text-gray-600">Sábados: 09:00 às 13:00</p>
              </div>
            </div>
          </div>
          
          <div className="card bg-malves-blue text-white">
            <h3 className="text-xl font-bold mb-6 text-white">Fale direto com um consultor</h3>
            <p className="mb-8">
              Tire suas dúvidas, solicite um orçamento ou inicie o processo de registro da sua marca com um de nossos especialistas jurídicos.
            </p>
            
            <div className="space-y-6">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="font-medium text-lg mb-2 text-white">WhatsApp</h4>
                <p className="text-white/80 mb-4">
                  Resposta rápida diretamente no seu celular.
                </p>
                <a href="https://wa.me/5533999189675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20registro%20de%20marca." target="_blank" rel="noopener noreferrer">
                  <Button className="cta-button w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
              
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="font-medium text-lg mb-2 text-white">E-mail</h4>
                <p className="text-white/80 mb-4">
                  Prefere contato por e-mail? Estamos à disposição:
                </p>
                <a href="mailto:contato@malvesmarcasepatentes.com">
                  <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-malves-blue font-medium transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar e-mail
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
