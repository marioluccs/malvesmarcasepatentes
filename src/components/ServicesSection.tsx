
import { Check } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ServicesSection = () => {
  const services = [
    {
      title: "Registro de Marcas",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=500&h=300",
      description: "Proteção da identidade visual do seu negócio, incluindo nome, logo e slogan.",
      features: [
        "Pesquisa prévia no banco de dados do INPI",
        "Elaboração e acompanhamento do pedido",
        "Defesa contra oposições",
        "Obtenção do certificado de registro"
      ]
    },
    {
      title: "Registro de Patentes",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300",
      description: "Proteção de invenções, modelos de utilidade e desenhos industriais.",
      features: [
        "Análise de patenteabilidade",
        "Redação de documento técnico",
        "Depósito e acompanhamento do pedido",
        "Defesa do pedido frente a exigências técnicas"
      ]
    },
    {
      title: "Consultoria Jurídica",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300",
      description: "Orientação especializada em propriedade intelectual.",
      features: [
        "Análise de viabilidade de registros",
        "Estratégia de proteção de ativos intelectuais",
        "Contratos de licenciamento e franquias",
        "Auditoria de propriedade intelectual"
      ]
    },
    {
      title: "Monitoramento e Defesa",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&h=300",
      description: "Proteção contínua de seus direitos de propriedade intelectual.",
      features: [
        "Vigilância de novas solicitações semelhantes",
        "Oposição a pedidos conflitantes",
        "Combate a infrações e uso indevido",
        "Recursos administrativos e judiciais"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-malves-gray">
      <div className="section-container">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="section-subtitle">
          Oferecemos soluções completas para registro e proteção da sua propriedade intelectual.
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="card h-full">
              <div className="mb-4 overflow-hidden rounded-lg">
                <AspectRatio ratio={5/3} className="bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Check className="h-5 w-5 text-malves-green" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
