import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo Padaria Pão Bão" className="h-10 w-10" />
              <span className="text-xl font-serif font-bold">
                Padaria Pão Bão
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empresa familiar há 16 anos no bairro Cabral
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="tel:3130468721" className="hover:text-accent transition-colors">
                  (31) 3046-8721
                </a>
              </li>
              <li>
                <a href="mailto:padariapaobao0@gmail.com" className="hover:text-accent transition-colors break-all">
                  padariapaobao0@gmail.com
                </a>
              </li>
              <li>Alameda dos Canários 56</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Horário</h3>
            <p className="text-sm text-primary-foreground/80">
              Segunda a sábado<br />
              06:00 às 20:00
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Padaria Pão Bão Ltda. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 33.382.336/0001-15</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
