
import { Shield, Check, Users, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhyRegisterSection = () => {
  return (
    <section id="por-que" className="py-20 bg-malves-gray">
      <div className="section-container">
        <h2 className="section-title">Por que registrar sua marca?</h2>
        <div className="section-subtitle">
          Registrar sua marca é um passo fundamental para garantir a proteção do seu negócio.
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-md flex">
            <div className="mr-4 flex-shrink-0">
              <div className="p-3 bg-malves-blue rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Uso exclusivo da sua marca</h3>
              <p className="text-gray-600">
                Com o registro, somente você poderá utilizar legalmente sua marca em todo o território nacional, dentro do seu segmento de atuação.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md flex">
            <div className="mr-4 flex-shrink-0">
              <div className="p-3 bg-malves-blue rounded-full">
                <Check className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Proteção legal</h3>
              <p className="text-gray-600">
                Proteja-se contra imitações e concorrência desleal, tendo o direito de impedir que terceiros utilizem marcas semelhantes.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md flex">
            <div className="mr-4 flex-shrink-0">
              <div className="p-3 bg-malves-blue rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Credibilidade no mercado</h3>
              <p className="text-gray-600">
                Uma marca registrada transmite maior confiança aos clientes e parceiros, além de valorizar seu negócio.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md flex">
            <div className="mr-4 flex-shrink-0">
              <div className="p-3 bg-malves-blue rounded-full">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Facilidade para expandir</h3>
              <p className="text-gray-600">
                O registro facilita processos de franquias, licenciamento ou venda da marca no futuro, aumentando seu valor como ativo.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-malves-blue text-white p-6 md:p-10 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-white text-center">Evite dores de cabeça futuras</h3>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Sua marca é um ativo valioso. Não espere que alguém a registre antes de você. Proteja seu patrimônio intelectual agora.
          </p>
          <div className="flex justify-center">
            <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
              <Button className="cta-button">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Consulte agora um especialista
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRegisterSection;
