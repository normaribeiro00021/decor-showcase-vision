import { Compass, Home, Library, ShoppingBag, UserRound } from "lucide-react";

const items = [
  { label: "Início", icon: Home, href: "#inicio" },
  { label: "Biblioteca", icon: Library, href: "#biblioteca" },
  { label: "Explorar", icon: Compass, href: "#colecoes" },
  { label: "Loja", icon: ShoppingBag, href: "#explore" },
  { label: "Perfil", icon: UserRound, href: "#inicio" },
];

export function MobileNav() {
  return (
    <nav className="mobile-nav" aria-label="Navegação principal">
      {items.map(({ label, icon: Icon, href }, index) => (
        <a key={label} href={href} className={index === 0 ? "active" : undefined}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}