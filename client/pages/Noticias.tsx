import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "1 Mês de Muito Amor e Cuidado",
    excerpt: "Hoje o nosso hotelzinho infantil completa 1 mês de muito amor, cuidado, aprendizado e momentos especiais! 💛\n\nQueremos agradecer de coração a todos os pais e responsáveis pela confiança, parceria e carinho com o nosso trabalho. Cada criança que passa por aqui torna nossos dias mais alegres e cheios de significado.\n\nSeguimos com o coração cheio de gratidão e felizes por fazer parte da rotina e do crescimento de cada criança. Que venham muitos outros meses de descobertas, afeto e momentos inesquecíveis! ✨",
    date: "Hoje",
    author: "Equipe Estrela da Manhã",
    image: "💛",
  },
];

export default function Noticias() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Notícias e <span className="text-primary">Informações</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Acompanhe as novidades sobre atividades, eventos e desenvolvimentos da Hotelzinho Estrela da Manhã.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <span className="text-7xl">{item.image}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={item.date}>{item.date}</time>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <div className="text-foreground/70 text-sm mb-4 whitespace-pre-wrap">
                    {item.excerpt}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 text-sm text-foreground/60 pt-4 border-t border-gray-100">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
            Informações Importantes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Horário de Funcionamento",
                content: (
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>
                      <strong>Segunda a Sexta:</strong> 6h às 18h
                    </li>
                    <li>
                      <strong>Sábado:</strong> Fechado
                    </li>
                    <li>
                      <strong>Domingo:</strong> Fechado
                    </li>
                  </ul>
                ),
              },
              {
                title: "Entre em Contato",
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-foreground/70">
                      <strong>WhatsApp:</strong>{" "}
                      <a
                        href="https://wa.me/553199871551"
                        className="text-primary hover:underline"
                      >
                        (31) 99871-1551
                      </a>
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Instagram:</strong>{" "}
                      <a
                        href="https://www.instagram.com/estreladamanhabh/"
                        className="text-primary hover:underline"
                      >
                        @estreladamanhabh
                      </a>
                    </p>
                  </div>
                ),
              },
              {
                title: "Nossa Localização",
                content: (
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Rua Nicias Continentino, 944 - Nova Gameleira, Belo Horizonte - MG
                  </p>
                ),
              },
            ].map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {info.title}
                </h3>
                {info.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
              Fique Informado
            </h2>
            <p className="text-center text-foreground/70 mb-8">
              Para receber atualizações sobre nossas atividades e notícias, entre em contato pelo WhatsApp e agende uma conversa com nossa equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/553199871551"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235c-1.413.666-2.706 1.649-3.71 2.855-1.419 1.666-2.207 3.91-2.207 6.052 0 .503.047 1.007.14 1.501C.936 23.22 0 24 0 24s.931-1.811 2.311-4.623c.636-1.464.922-2.881.922-4.406 0-1.81-.424-3.54-1.207-5.056-1.27-2.663-3.06-4.726-5.335-5.92A9.865 9.865 0 0112.05 0c5.471 0 9.95 4.479 9.95 9.95 0 5.471-4.479 9.95-9.95 9.95z" />
                </svg>
                Conversar no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/estreladamanhabh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.272.273 2.69.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.202 4.358 2.625 6.78 6.987 6.983 1.279.058 1.704.07 4.947.07 3.242 0 3.668-.012 4.947-.07 4.358-.202 6.782-2.625 6.984-6.987.057-1.279.07-1.704.07-4.947 0-3.243-.013-3.668-.07-4.947-.202-4.358-2.625-6.78-6.984-6.982C15.668.012 15.242 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11.806-2.806 1.44 1.44 0 01-.806 2.806z" />
                </svg>
                Siga-nos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
