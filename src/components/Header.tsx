import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Padaria Pão Bão" className="h-12 w-12" />
            <span className="text-xl font-serif font-bold text-primary">
              Padaria Pão Bão
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </Button>
          </nav>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => {
              const nav = document.getElementById("mobile-nav");
              nav?.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>

        <div id="mobile-nav" className="hidden md:hidden pb-4">
          <nav className="flex flex-col gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("inicio")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("sobre")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("servicos")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              Serviços
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contato")}
              className="w-full justify-start text-foreground hover:text-primary"
            >
              Contato
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
