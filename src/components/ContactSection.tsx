
import { Mail, Phone } from 'lucide-react';
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
                <h4 className="font-medium text-lg mb-2">Endereço</h4>
                <p className="text-gray-600">Av. Exemplo, 1234 – Centro, São Paulo – SP</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Telefone</h4>
                <a href="tel:+551198765-4321" className="text-malves-blue hover:text-malves-green transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 98765-4321
                </a>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">E-mail</h4>
                <a href="mailto:contato@malvesmarcasepatentes.com.br" className="text-malves-blue hover:text-malves-green transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@malvesmarcasepatentes.com.br
                </a>
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
                <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
                  <Button className="cta-button w-full">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
              
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="font-medium text-lg mb-2 text-white">E-mail</h4>
                <p className="text-white/80 mb-4">
                  Prefere contato por e-mail? Estamos à disposição:
                </p>
                <a href="mailto:contato@malvesmarcasepatentes.com.br">
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
