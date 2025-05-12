
import { Search, FileText, Shield, Check, Briefcase } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-malves-blue" />,
      title: "Pesquisa de anterioridade",
      description: "Verificamos se sua marca já está registrada por terceiros no INPI e analisamos possíveis conflitos."
    },
    {
      icon: <FileText className="h-10 w-10 text-malves-blue" />,
      title: "Protocolo do pedido",
      description: "Fazemos o depósito junto ao INPI com todos os documentos necessários e acompanhamos o processo."
    },
    {
      icon: <Shield className="h-10 w-10 text-malves-blue" />,
      title: "Acompanhamento técnico",
      description: "Monitoramos publicações, exigências ou oposições durante todo o processo de registro."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-malves-blue" />,
      title: "Defesas jurídicas",
      description: "Quando necessário, elaboramos defesas jurídicas especializadas para garantir o registro da sua marca."
    },
    {
      icon: <Check className="h-10 w-10 text-malves-blue" />,
      title: "Concessão do registro",
      description: "Após aprovação, você recebe o certificado de titularidade da marca, garantindo seu uso exclusivo."
    }
  ];

  return (
    <section id="processo" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Como funciona o processo no INPI?</h2>
        <div className="section-subtitle">
          O registro de marcas e patentes no Brasil é feito através do INPI – Instituto Nacional da Propriedade Industrial.
        </div>
        
        <div className="mb-16 rounded-lg overflow-hidden">
          <AspectRatio ratio={21/9} className="bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&h=514" 
              alt="Processo de registro de marcas e patentes" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        
        <div className="mt-16 relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-malves-gray -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className={`w-full md:w-5/12 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`card ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-md mx-auto md:mx-0`}>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 bg-white rounded-full p-4 border-4 border-malves-gray my-4 md:my-0">
                  {step.icon}
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-malves-blue/5 p-6 md:p-8 rounded-lg border border-malves-blue/10">
          <h3 className="text-xl font-bold mb-4 text-center">Acompanhamento por Especialistas Jurídicos</h3>
          <p className="text-gray-600 text-center">
            Com a Malves, todo esse processo é acompanhado de perto por especialistas jurídicos em propriedade intelectual,
            garantindo agilidade, segurança e eficácia na obtenção do seu registro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
