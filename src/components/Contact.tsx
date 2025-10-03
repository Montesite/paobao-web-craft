import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Visite nossa loja ou entre em contato pelos canais abaixo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Alameda dos Canários 56<br />
                    Bairro Cabral
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Horário de funcionamento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a sábado<br />
                    06:00 às 20:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Telefone
                  </h3>
                  <a 
                    href="tel:3130468721"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (31) 3046-8721
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    E-mail
                  </h3>
                  <a 
                    href="mailto:padariapaobao0@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    padariapaobao0@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-6 text-lg"
              onClick={() => window.location.href = "mailto:padariapaobao0@gmail.com"}
            >
              Enviar e-mail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
