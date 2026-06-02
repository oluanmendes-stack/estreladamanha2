import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Período Matutino",
    emoji: "🌅",
    price: "R$ 380,00",
    period: "por mês",
    hours: "7h às 12h",
    features: [
      "Café da manhã",
      "Almoço",
      "Atividades pedagógicas",
      "Supervisão constante",
      "Atendimento personalizado",
    ],
    highlight: false,
  },
  {
    name: "Período Integral",
    emoji: "☀️",
    price: "R$ 500,00",
    period: "por mês",
    hours: "7h às 17h",
    features: [
      "Café da manhã",
      "Almoço",
      "Café da tarde",
      "Atividades pedagógicas",
      "Supervisão constante",
      "Atendimento personalizado",
      "Atividades variadas o dia todo",
    ],
    highlight: true,
  },
  {
    name: "Período Vespertino",
    emoji: "☀️",
    price: "R$ 380,00",
    period: "por mês",
    hours: "13h às 17h",
    features: [
      "Café da tarde",
      "Almoço (opcional)",
      "Atividades pedagógicas",
      "Supervisão constante",
      "Atendimento personalizado",
    ],
    highlight: false,
  },
];

const additionalServices = [
  { name: "Aulas de inglês", icon: "🗣️" },
  { name: "Aulas de esportes", icon: "⚽" },
  { name: "Aulas de artes", icon: "🎨" },
  { name: "Aulas de música", icon: "🎵" },
  { name: "Refeições extras", icon: "🍽️" },
  { name: "Transporte", icon: "🚌" },
];

export default function Planos() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Planos e <span className="text-primary">Preços</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 px-2">
              Escolha o plano que melhor se adequa às necessidades da sua família. Todos os planos incluem cuidado profissional, atividades pedagógicas e alimentação saudável.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  plan.highlight
                    ? "sm:col-span-2 md:col-span-1 md:scale-105 bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl"
                    : "bg-white border-2 border-gray-100 hover:border-primary/30 shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-secondary text-foreground px-4 py-1 rounded-bl-2xl font-bold text-sm">
                    Popular
                  </div>
                )}

                <div className="p-4 sm:p-6 md:p-6 lg:p-8">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{plan.emoji}</div>

                  <h3 className={`text-lg sm:text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-foreground"}`}>
                    {plan.name}
                  </h3>

                  <div className={`mb-4 sm:mb-6 ${plan.highlight ? "text-white/80" : "text-foreground/60"}`}>
                    <p className="text-xs sm:text-sm">{plan.hours}</p>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <div className={`text-3xl sm:text-4xl font-bold ${plan.highlight ? "text-white" : "text-primary"}`}>
                      {plan.price}
                    </div>
                    <p className={`text-xs sm:text-sm ${plan.highlight ? "text-white/70" : "text-foreground/60"}`}>
                      {plan.period}
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <Check
                          className={`w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 ${
                            plan.highlight ? "text-secondary" : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-sm ${
                            plan.highlight ? "text-white/90" : "text-foreground/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/553199871551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                      plan.highlight
                        ? "bg-white text-primary hover:bg-gray-100"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235c-1.413.666-2.706 1.649-3.71 2.855-1.419 1.666-2.207 3.91-2.207 6.052 0 .503.047 1.007.14 1.501C.936 23.22 0 24 0 24s.931-1.811 2.311-4.623c.636-1.464.922-2.881.922-4.406 0-1.81-.424-3.54-1.207-5.056-1.27-2.663-3.06-4.726-5.335-5.92A9.865 9.865 0 0112.05 0c5.471 0 9.95 4.479 9.95 9.95 0 5.471-4.479 9.95-9.95 9.95z" />
                    </svg>
                    <span className="hidden sm:inline">Mais Informações</span>
                    <span className="sm:hidden">Saiba Mais</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-8 sm:mb-12 text-center">
            Serviços Adicionais
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-4 md:p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{service.icon}</div>
                <p className="font-semibold text-foreground text-xs sm:text-sm">{service.name}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-foreground/60 mt-8 sm:mt-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Todos os serviços adicionais possuem custos especiais. Consulte-nos via WhatsApp para detalhes e valores atualizados.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-8 sm:mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Qual é a idade mínima para ingresso?",
                a: "Aceitamos crianças a partir de 6 meses até 5 anos de idade.",
              },
              {
                q: "Posso contratar um plano de forma flexível?",
                a: "Sim, oferecemos planos mensais e também atendemos demandas pontuais. Consulte-nos via WhatsApp.",
              },
              {
                q: "Qual é a política de refeições?",
                a: "Todas as refeições incluem alimentos saudáveis e nutritivos. Informamos sobre alergias e preferências alimentares.",
              },
              {
                q: "Como funciona a comunicação com os pais?",
                a: "Mantemos comunicação diária através de fotos, vídeos e atualizações sobre o desenvolvimento da criança.",
              },
              {
                q: "Há descontos para irmãos?",
                a: "Sim, oferecemos descontos especiais para múltiplos filhos. Fale conosco para detalhes.",
              },
              {
                q: "Como é o processo de adaptação?",
                a: "Realizamos um período de adaptação gradual para garantir que a criança se sinta confortável e segura.",
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0">
                <h3 className="font-bold text-foreground mb-2 text-base sm:text-lg">{item.q}</h3>
                <p className="text-foreground/70 text-sm sm:text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary via-purple-600 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Pronto para Matricular?
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Entre em contato conosco para agendar uma visita, conhecer nossos espaços e formalizar a matrícula.
          </p>
          <a
            href="https://wa.me/553199871551"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 py-2 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235c-1.413.666-2.706 1.649-3.71 2.855-1.419 1.666-2.207 3.91-2.207 6.052 0 .503.047 1.007.14 1.501C.936 23.22 0 24 0 24s.931-1.811 2.311-4.623c.636-1.464.922-2.881.922-4.406 0-1.81-.424-3.54-1.207-5.056-1.27-2.663-3.06-4.726-5.335-5.92A9.865 9.865 0 0112.05 0c5.471 0 9.95 4.479 9.95 9.95 0 5.471-4.479 9.95-9.95 9.95z" />
            </svg>
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
