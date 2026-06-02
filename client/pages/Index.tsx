import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Sparkles } from "lucide-react";

const services = [
  { icon: "🧸", title: "Hotelzinho Infantil", desc: "Cuidado profissional e amoroso" },
  { icon: "👶🏻", title: "Baby Sitter", desc: "Atenção personalizada" },
  { icon: "📚", title: "Alfabetização", desc: "Aprendizado divertido" },
  { icon: "🧩", title: "Educação Inclusiva", desc: "Todos são bem-vindos" },
  { icon: "📝", title: "Auxílio nas Tarefas", desc: "Apoio com deveres" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-2 bg-secondary/20 rounded-full">
                <p className="text-xs sm:text-sm font-semibold text-primary">Bem-vindo a Estrela da Manhã</p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Onde as Crianças <span className="text-primary">Brilham</span>
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
                Um espaço acolhedor, seguro e repleto de amor onde seus filhos aprendem, crescem e desenvolvem seus talentos com profissionais dedicados.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/planos"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
                >
                  Ver Planos
                </Link>
                <a
                  href="https://wa.me/553199871551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary/5 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
                >
                  Fale Conosco
                </a>
              </div>
            </div>

            {/* Decorative Images */}
            <div className="relative h-64 sm:h-80 md:h-full lg:block block md:block hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/40 rounded-3xl animate-float"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8 w-full">
                  <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 col-span-2 lg:col-span-1">
                    <div className="text-4xl sm:text-5xl text-center">🎨</div>
                    <p className="text-center font-semibold text-xs sm:text-sm mt-2">Criatividade</p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4">
                    <div className="text-4xl sm:text-5xl text-center">🎵</div>
                    <p className="text-center font-semibold text-xs sm:text-sm mt-2">Música</p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4">
                    <div className="text-4xl sm:text-5xl text-center">⚽</div>
                    <p className="text-center font-semibold text-xs sm:text-sm mt-2">Esportes</p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 col-span-2 lg:col-span-1">
                    <div className="text-4xl sm:text-5xl text-center">📖</div>
                    <p className="text-center font-semibold text-xs sm:text-sm mt-2">Leitura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
              Nossos Serviços
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto px-2">
              Oferecemos uma variedade de serviços pensados para o desenvolvimento integral de sua criança
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/60">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-10 sm:mb-16 text-center">
            Por Que Escolher a Estrela da Manhã?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { title: "Ambiente Seguro", desc: "Espaço moderno com todas as medidas de segurança" },
              { title: "Profissionais Qualificados", desc: "Equipe experiente e dedicada ao bem-estar das crianças" },
              { title: "Atividades Variadas", desc: "Programa completo de educação, esportes e artes" },
              { title: "Alimentação Saudável", desc: "Refeições balanceadas e preparadas com cuidado" },
              { title: "Comunidade Acolhedora", desc: "Famílias que compartilham dos mesmos valores" },
              { title: "Comunicação Transparente", desc: "Atualizações diárias sobre seu filho" },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-foreground/60 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary via-purple-600 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Pronto para Começar a Jornada?
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Entre em contato conosco e saiba mais sobre como podemos cuidar do desenvolvimento e felicidade de seu filho.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/553199871551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 py-2 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235c-1.413.666-2.706 1.649-3.71 2.855-1.419 1.666-2.207 3.91-2.207 6.052 0 .503.047 1.007.14 1.501C.936 23.22 0 24 0 24s.931-1.811 2.311-4.623c.636-1.464.922-2.881.922-4.406 0-1.81-.424-3.54-1.207-5.056-1.27-2.663-3.06-4.726-5.335-5.92A9.865 9.865 0 0112.05 0c5.471 0 9.95 4.479 9.95 9.95 0 5.471-4.479 9.95-9.95 9.95z" />
              </svg>
              <span className="hidden sm:inline">Conversar no WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <Link
              to="/espaco"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-2 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base"
            >
              Conheça Nosso Espaço
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
