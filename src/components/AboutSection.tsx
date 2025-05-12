
import { Briefcase, Shield, Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Sobre Nós</h2>
        <div className="section-subtitle">
          Nossa missão é proteger o patrimônio intelectual de nossos clientes com excelência, segurança e agilidade.
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="card text-center group">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-malves-gray rounded-full group-hover:bg-malves-blue transition-colors">
                <Briefcase className="h-8 w-8 text-malves-blue group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Equipe Especializada</h3>
            <p className="text-gray-600">
              Contamos com profissionais altamente capacitados da área jurídica, com ampla experiência em propriedade intelectual.
            </p>
          </div>
          
          <div className="card text-center group">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-malves-gray rounded-full group-hover:bg-malves-blue transition-colors">
                <Shield className="h-8 w-8 text-malves-blue group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Segurança Jurídica</h3>
            <p className="text-gray-600">
              Garantimos um processo sólido, regular e dentro das normas legais brasileiras para o registro de sua marca.
            </p>
          </div>
          
          <div className="card text-center group">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-malves-gray rounded-full group-hover:bg-malves-blue transition-colors">
                <Check className="h-8 w-8 text-malves-blue group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Transparência</h3>
            <p className="text-gray-600">
              Oferecemos um atendimento personalizado e transparente, com acompanhamento completo em todas as etapas.
            </p>
          </div>
        </div>
        
        <div className="mt-16 p-6 md:p-10 bg-malves-gray rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Compromisso com sua marca</h3>
              <p className="text-gray-600 mb-4">
                Na Malves Registro de Marcas e Patentes, a proteção do seu patrimônio intelectual é nossa prioridade.
                Contamos com advogados especialistas em propriedade intelectual, garantindo maior segurança jurídica
                e rapidez na obtenção do seu registro.
              </p>
              <p className="text-gray-600">
                Atuamos em todas as etapas, desde a pesquisa inicial até a defesa de sua marca contra possíveis oposições.
              </p>
            </div>
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="h-32 w-32 bg-malves-blue rounded-full flex items-center justify-center">
                <Shield className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
