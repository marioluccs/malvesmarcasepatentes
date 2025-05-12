
import { Button } from "@/components/ui/button";
import { Shield, Check } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-malves-gray to-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4zNiAwLTIuNS0xLjEzLTIuNS0yLjV2LTUuNDVjMC0xLjM3IDEuMTQtMi41IDIuNS0yLjVzMi41IDEuMTMgMi41IDIuNXY1LjQ1YzAgMS4zNy0xLjE0IDIuNS0yLjUgMi41em0tMTIgNDBjLTEuMzYgMC0yLjUtMS4xMy0yLjUtMi41di01LjQ1YzAtMS4zNyAxLjE0LTIuNSAyLjUtMi41czIuNSAxLjEzIDIuNSAyLjV2NS40NWMwIDEuMzctMS4xNCAyLjUtMi41IDIuNXptMjQuNTUtNDRjMCAyLjIxLTEuNzkgNC00IDRoLTQuMDVDNDIuMjggMjAgNDAgMTcuNzIgNDAgMTUuNWMwLTIuMjEgMS43OS00IDQtNGg0LjA1YzIuMjEgMCA0IDEuNzkgNCA0ek0xNiAzNi41YzAgMi4yMS0xLjc5IDQtNCA0SDcuOTVDNS43NCA0MC41IDMuNSAzOC4yMiAzLjUgMzZjMC0yLjIxIDEuNzktNCA0LTRoNC4wNWMyLjIxIDAgNCAxLjc5IDQgNHptMjQgMGMxLjM4IDAgMi41IDEuMTIgMi41IDIuNXM-MS4xMiAyLjUtMi41IDIuNS0yLjUtMS4xMi0yLjUtMi41IDEuMTItMi41IDIuNS0yLjV6bS0xMiAwYzEuMzggMCAyLjUgMS4xMiAyLjUgMi41cy0xLjEyIDIuNS0yLjUgMi41LTIuNS0xLjEyLTIuNS0yLjUgMS4xMi0yLjUgMi41LTIuNXptLTEyIDBjMS4zOCAwIDIuNSAxLjEyIDIuNSAyLjVzLTEuMTIgMi41LTIuNSAyLjUtMi41LTEuMTItMi41LTIuNSAxLjEyLTIuNSAyLjUtMi41eiIgZmlsbD0iIzFCMjYzQiIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-25"></div>
      
      <div className="section-container pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Proteja o que é seu.<br />
              <span className="text-malves-green">Registre sua marca</span> com especialistas jurídicos.
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Na Malves, nossa missão é proteger o patrimônio intelectual de nossos clientes com excelência, 
              segurança e agilidade através de uma equipe altamente especializada.
            </p>
            
            <div className="mb-8 space-y-3">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-malves-green mr-2" />
                <span className="text-gray-700">Atendimento personalizado e transparente</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-malves-green mr-2" />
                <span className="text-gray-700">Equipe de especialistas jurídicos</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-malves-green mr-2" />
                <span className="text-gray-700">Acompanhamento em todas as etapas do processo</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
                <Button className="cta-button w-full sm:w-auto">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2v12h12V6H6z" />
                  </svg>
                  Falar no WhatsApp
                </Button>
              </a>
              <a href="#processo">
                <Button variant="outline" className="border-2 border-malves-blue text-malves-blue hover:bg-malves-blue hover:text-white font-medium transition-colors w-full sm:w-auto">
                  Saiba mais
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-malves-green to-malves-blue opacity-30 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <div className="flex justify-center mb-6">
                  <Shield className="h-24 w-24 text-malves-blue" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Proteja sua marca</h3>
                <p className="text-gray-600 text-center mb-6">
                  A sua marca é o patrimônio mais valioso do seu negócio. Não deixe que terceiros a utilizem indevidamente.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-malves-green to-malves-blue rounded-full mb-6"></div>
                <div className="text-center">
                  <a href="#contato" className="text-malves-blue hover:text-malves-green transition-colors font-medium">
                    Entre em contato agora mesmo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
