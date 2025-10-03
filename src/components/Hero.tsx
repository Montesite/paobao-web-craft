import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            Padaria Pão Bão Ltda
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Empresa familiar há 16 anos trazendo qualidade e tradição ao bairro Cabral
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Padaria Pão Bão, a sua outra opção no Cabral
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
            >
              Nossos serviços
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contato")}
              className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
