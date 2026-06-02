import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <span>⭐</span> Estrela da Manhã
            </h3>
            <p className="text-foreground/70">
              Um lugar especial onde as crianças aprendem, crescem e brilham todos os dias.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-foreground/70 text-sm">
                  Rua Nicias Continentino, 944<br />
                  Nova Gameleira<br />
                  Belo Horizonte - MG
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="https://wa.me/553199871551"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  (31) 99871-1551
                </a>
              </div>
            </div>
          </div>


          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/553199871551"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-foreground/20 hover:bg-foreground/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235c-1.413.666-2.706 1.649-3.71 2.855-1.419 1.666-2.207 3.91-2.207 6.052 0 .503.047 1.007.14 1.501C.936 23.22 0 24 0 24s.931-1.811 2.311-4.623c.636-1.464.922-2.881.922-4.406 0-1.81-.424-3.54-1.207-5.056-1.27-2.663-3.06-4.726-5.335-5.92A9.865 9.865 0 0112.05 0c5.471 0 9.95 4.479 9.95 9.95 0 5.471-4.479 9.95-9.95 9.95z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/estreladamanhabh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-foreground/20 hover:bg-foreground/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.272.273 2.69.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.202 4.358 2.625 6.78 6.987 6.983 1.279.058 1.704.07 4.947.07 3.242 0 3.668-.012 4.947-.07 4.358-.202 6.782-2.625 6.984-6.987.057-1.279.07-1.704.07-4.947 0-3.243-.013-3.668-.07-4.947-.202-4.358-2.625-6.78-6.984-6.982C15.668.012 15.242 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11.806-2.806 1.44 1.44 0 01-.806 2.806z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; 2024 Hotelzinho Estrela da Manhã. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
