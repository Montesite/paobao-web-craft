import paesImage from "@/assets/paes-artesanais.jpg";
import salgadosImage from "@/assets/salgados.jpg";
import confeitariaImage from "@/assets/confeitaria.jpg";

const Services = () => {
  const services = [
    {
      title: "Pães artesanais",
      description: "Pães feitos diariamente com ingredientes selecionados e receitas tradicionais. Crocantes por fora, macios por dentro.",
      image: paesImage
    },
    {
      title: "Salgados assados",
      description: "Variedade de salgados assados fresquinhos todos os dias. Perfeitos para seu café da manhã ou lanche da tarde.",
      image: salgadosImage
    },
    {
      title: "Confeitaria especial",
      description: "Bolos, tortas e doces especiais preparados com técnica e dedicação para tornar seus momentos ainda mais doces.",
      image: confeitariaImage
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos produtos artesanais de alta qualidade, feitos com dedicação e ingredientes selecionados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
            Atendimento para empresas
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Fornecemos pães frescos e café da manhã completo para grandes empresas da região. 
            Entre em contato para solicitar um orçamento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
