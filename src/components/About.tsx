import { Users, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Sobre nós
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Há 16 anos, a Padaria Pão Bão é uma empresa familiar que leva qualidade e tradição ao bairro Cabral. 
            Com dedicação e carinho, pai, mãe e filho trabalham juntos, ao lado de nossa equipe de balconistas, 
            padeiro e confeiteiro, para oferecer os melhores produtos artesanais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-3">
              Empresa familiar
            </h3>
            <p className="text-muted-foreground">
              Três gerações trabalhando juntas com paixão e dedicação
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-3">
              Feito com amor
            </h3>
            <p className="text-muted-foreground">
              Cada produto é preparado com ingredientes selecionados e muito carinho
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-3">
              16 anos de tradição
            </h3>
            <p className="text-muted-foreground">
              Fornecendo pães e café da manhã para grandes empresas da região
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
