import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, Wifi, Utensils, Dumbbell, BookOpen } from "lucide-react";

const facilities = [
  {
    icon: Users,
    title: "Salas Acolhedoras",
    description: "Ambientes climatizados e decorados para cada faixa etária",
  },
  {
    icon: Utensils,
    title: "Cozinha Moderna",
    description: "Refeições nutritivas preparadas com ingredientes selecionados",
  },
  {
    icon: Dumbbell,
    title: "Área de Recreação",
    description: "Espaço amplo para brincadeiras e atividades físicas",
  },
  {
    icon: BookOpen,
    title: "Sala de Aula",
    description: "Espaço dedicado ao aprendizado com recursos pedagógicos",
  },
  {
    icon: Wifi,
    title: "Tecnologia",
    description: "Acesso a recursos educacionais digitais e comunicação com pais",
  },
  {
    icon: MapPin,
    title: "Localização Privilegiada",
    description: "Fácil acesso e segurança em bairro residencial",
  },
];

export default function Espaco() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Conheça Nosso <span className="text-primary">Espaço</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              Um ambiente pensado em cada detalhe para proporcionar conforto, segurança e desenvolvimento das crianças.
            </p>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Localização Central
              </h2>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground text-lg mb-2">Rua Nicias Continentino, 944</p>
                    <p className="text-foreground/60 mb-1">Nova Gameleira</p>
                    <p className="text-foreground/60 mb-4">Belo Horizonte - MG</p>
                    <a
                      href="https://maps.google.com/?q=Rua+Nicias+Continentino+944+Belo+Horizonte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      Ver no Mapa
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Situado em um bairro residencial tranquilo e seguro, nosso espaço oferece fácil acesso para pais e responsáveis. O entorno propicia um ambiente acolhedor e familiar para as crianças.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl h-96 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8226769626903!2d-43.94558!3d-19.89721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695da17c0b5b5%3A0x0!2sRua%20N%C3%ADcias%20Continentino%2C%20944!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  className="rounded-2xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 text-center">
            Nossas Instalações
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-foreground/60">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
            O Que Oferecemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Segurança 24h", desc: "Monitoramento constante e protocolos de segurança rigorosos" },
              { title: "Higiene Impecável", desc: "Limpeza constante e medidas sanitárias adequadas" },
              { title: "Conforto Térmico", desc: "Climatização e iluminação apropriadas para bem-estar" },
              { title: "Áreas Verdes", desc: "Espaço outdoor para contato com a natureza" },
              { title: "Materiais Educativos", desc: "Recursos pedagógicos modernos e diversificados" },
              { title: "Salas Temáticas", desc: "Ambientes especializados para diferentes atividades" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-purple-600 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Visite-nos Pessoalmente
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Agende uma visita para conhecer de perto nossos espaços e conversar com nossa equipe sobre como podemos cuidar de seu filho.
          </p>
          <a
            href="https://wa.me/553199871551"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235c-1.413.666-2.706 1.649-3.71 2.855-1.419 1.666-2.207 3.91-2.207 6.052 0 .503.047 1.007.14 1.501C.936 23.22 0 24 0 24s.931-1.811 2.311-4.623c.636-1.464.922-2.881.922-4.406 0-1.81-.424-3.54-1.207-5.056-1.27-2.663-3.06-4.726-5.335-5.92A9.865 9.865 0 0112.05 0c5.471 0 9.95 4.479 9.95 9.95 0 5.471-4.479 9.95-9.95 9.95z" />
            </svg>
            Agendar Visita
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
