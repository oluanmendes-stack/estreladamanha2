import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Início" },
    { href: "/espaco", label: "Espaço" },
    { href: "/planos", label: "Planos" },
    { href: "/noticias", label: "Notícias" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-2xl font-bold text-primary"
          >
            <span className="text-3xl">⭐</span>
            <span className="hidden sm:inline">Estrela da Manhã</span>
            <span className="sm:hidden">Estrela</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/553199871551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235c-1.413.666-2.706 1.649-3.71 2.855-1.419 1.666-2.207 3.91-2.207 6.052 0 .503.047 1.007.14 1.501C.936 23.22 0 24 0 24s.931-1.811 2.311-4.623c.636-1.464.922-2.881.922-4.406 0-1.81-.424-3.54-1.207-5.056-1.27-2.663-3.06-4.726-5.335-5.92A9.865 9.865 0 0112.05 0c5.471 0 9.95 4.479 9.95 9.95 0 5.471-4.479 9.95-9.95 9.95z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/estreladamanhabh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-secondary text-foreground rounded-full hover:bg-secondary/80 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.272.273 2.69.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.202 4.358 2.625 6.78 6.987 6.983 1.279.058 1.704.07 4.947.07 3.242 0 3.668-.012 4.947-.07 4.358-.202 6.782-2.625 6.984-6.987.057-1.279.07-1.704.07-4.947 0-3.243-.013-3.668-.07-4.947-.202-4.358-2.625-6.78-6.984-6.982C15.668.012 15.242 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11.806-2.806 1.44 1.44 0 01-.806 2.806z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 border-t">
              <a
                href="https://wa.me/553199871551"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full font-medium text-sm transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/estreladamanhabh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-secondary text-foreground rounded-full hover:bg-secondary/80 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.272.273 2.69.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.202 4.358 2.625 6.78 6.987 6.983 1.279.058 1.704.07 4.947.07 3.242 0 3.668-.012 4.947-.07 4.358-.202 6.782-2.625 6.984-6.987.057-1.279.07-1.704.07-4.947 0-3.243-.013-3.668-.07-4.947-.202-4.358-2.625-6.78-6.984-6.982C15.668.012 15.242 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11.806-2.806 1.44 1.44 0 01-.806 2.806z" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
