import { Button } from "@/components/ui/button";
import { Shield, Check, MessageCircle } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-malves-gray to-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4zNiAwLTIuNS0xLjEzLTIuNS0yLjV2LTUuNDVjMC0xLjM3IDEuMTQtMi41IDIuNS0yLjVzMi41IDEuMTMgMi41IDIuNXY1LjQ1YzAgMS4zNy0xLjE0IDIuNS0yLjUgMi41em0tMTIgNDBjLTEuMzYgMC0yLjUtMS4xMy0yLjUtMi41di01LjQ1YzAtMS4zNyAxLjE0LTIuNSAyLjUtMi41czIuNSAxLjEzIDIuNSAyLjV2NS40NWMwIDEuMzctMS4xNCAyLjUtMi41IDIuNXptMjQuNTUtNDRjMCAyLjIxLTEuNzkgNC00IDRoLTQuMDVDNDIuMjggMjAgNDAgMTcuNzIgNDAgMTUuNWMwLTIuMjEgMS43OS00IDQtNGg0LjA1YzIuMjEgMCA0IDEuNzkgNCA0ek0xNiAzNi41YzAgMi4yMS0xLjc5IDQtNCA0SDcuOTVDNS43NCA0MC41IDMuNSAzOC4yMiAzLjUgMzZjMC0yLjIxIDEuNzktNCA0LTRoNC4wNWMyLjIxIDAgNCAxLjc5IDQgNHptMjQgMGMxLjM4IDAgMi41IDEuMTIgMi41IDIuNXMtMS4xMiAyLjUtMi41IDIuNS0yLjUtMS4xMi0yLjUtMi41IDEuMTItMi41IDIuNS0yLjV6bS0xMiAwYzEuMzggMCAyLjUgMS4xMiAyLjUgMi41cy0xLjEyIDIuNS0yLjUgMi41LTIuNS0xLjEyLTIuNS0yLjUgMS4xMi0yLjUgMi41LTIuNXptLTEyIDBjMS4zOCAwIDIuNSAxLjEyIDIuNSAyLjVzLTEuMTIgMi41LTIuNS0Mi41LTIuNSAxLjEyLTIuNSAyLjV6IiBmaWxsPSIjMUIyNjNCIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz+')] opacity-25"></div>
      
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
              <a href="https://wa.me/5533999189675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20registro%20de%20marca." target="_blank" rel="noopener noreferrer">
                <Button className="cta-button w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
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
            <div className="relative max-w-md">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-malves-green to-malves-blue opacity-30 blur-lg"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <div className="overflow-hidden rounded-lg mb-6">
                  <AspectRatio ratio={16/9} className="bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=337" 
                      alt="Equipe de especialistas jurídicos em propriedade intelectual" 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
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
