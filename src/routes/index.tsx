import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  Bookmark,
  ChevronDown,
  Clock3,
  Compass,
  Heart,
  Menu,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import capaCorda from "@/assets/capa-corda.jpg";
import capaMadeira from "@/assets/capa-madeira.jpg";
import capaVasos from "@/assets/capa-vasos.jpg";
import capaVidro from "@/assets/capa-vidro.jpg";
import colecaoSala from "@/assets/colecao-sala.jpg";
import colecaoVaranda from "@/assets/colecao-varanda.jpg";
import heroImage from "@/assets/casa-hero.jpg";
import ideiaDia from "@/assets/ideia-dia.jpg";
import { ContentRail, type CoverItem } from "@/components/home/ContentRail";
import { MobileNav } from "@/components/home/MobileNav";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Criativa | Sua biblioteca de projetos" },
      {
        name: "description",
        content: "Uma biblioteca visual premium de projetos para transformar a casa com decoração e reaproveitamento criativo.",
      },
      { property: "og:title", content: "Casa Criativa | Sua biblioteca de projetos" },
      {
        property: "og:description",
        content: "Descubra projetos, coleções e ideias criativas para transformar cada canto da sua casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const covers = {
  vasos: capaVasos,
  madeira: capaMadeira,
  vidro: capaVidro,
  corda: capaCorda,
};

const library: CoverItem[] = [
  { title: "Decorações que parecem caras", subtitle: "50 projetos exclusivos", image: covers.madeira, badge: "COMPRADO" },
  { title: "Plantas & vasos", subtitle: "20 projetos para transformar", image: covers.vasos },
  { title: "Sisal, juta & corda", subtitle: "40 projetos visuais", image: covers.corda, badge: "ATUALIZADO" },
  { title: "Reaproveitamento criativo", subtitle: "Ideias para a casa", image: covers.vidro },
  { title: "Acabamento efeito vitrine", subtitle: "Guia visual", image: covers.madeira },
];

const progress: CoverItem[] = [
  { title: "Cachepôs de corda", subtitle: "Plantas & vasos", image: covers.vasos, progress: 64 },
  { title: "Mesa lateral de madeira", subtitle: "Peças que parecem caras", image: covers.madeira, progress: 38 },
  { title: "Garrafas decorativas", subtitle: "Reaproveitamento criativo", image: covers.vidro, progress: 78 },
];

const materials: CoverItem[] = [
  { title: "Sisal e corda", subtitle: "18 projetos", image: covers.corda },
  { title: "Garrafas e vidro", subtitle: "14 projetos", image: covers.vidro },
  { title: "Madeira", subtitle: "12 projetos", image: covers.madeira },
  { title: "Plantas", subtitle: "20 projetos", image: covers.vasos },
];

const createIdeas: CoverItem[] = [
  { title: "Vasos & cachepôs", subtitle: "Para cantinhos verdes", image: covers.vasos },
  { title: "Prateleiras & mesas", subtitle: "Madeira reaproveitada", image: covers.madeira },
  { title: "Organizadores", subtitle: "Fibras naturais", image: covers.corda },
  { title: "Garrafas decorativas", subtitle: "Vidro com nova vida", image: covers.vidro },
];

const collections: CoverItem[] = [
  { title: "Ideias para a varanda", subtitle: "Uma pausa ao ar livre", image: colecaoVaranda, badge: "COLEÇÃO" },
  { title: "Uma sala com personalidade", subtitle: "Peças que contam histórias", image: colecaoSala },
  { title: "Projetos para plantas", subtitle: "Verde em todos os cantos", image: ideiaDia },
];

function Index() {
  return (
    <div id="inicio" className="min-h-screen overflow-hidden bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <DailyIdea />
        <ContentRail title="Continue de onde parou" eyebrow="Sua jornada" items={progress} />
        <ContentRail id="biblioteca" title="Sua biblioteca" eyebrow="Tudo o que já é seu" items={library} />
        <ContentRail title="O que você tem em casa?" eyebrow="Explore por material" items={materials} />
        <ContentRail title="O que você quer fazer?" eyebrow="Escolha seu próximo projeto" items={createIdeas} />
        <ContentRail id="colecoes" title="Coleções em destaque" eyebrow="Curadoria Casa Criativa" items={collections} wide />
        <ContentRail
          title="Seus bônus"
          eyebrow="Conteúdos liberados"
          items={[
            { title: "Guia de materiais baratos", subtitle: "Bônus exclusivo", image: covers.vidro, badge: "BÔNUS" },
            { title: "Harmonização de ambientes", subtitle: "Catálogo visual", image: covers.corda, badge: "BÔNUS" },
            { title: "Detalhes que valorizam", subtitle: "Guia rápido", image: covers.madeira, badge: "BÔNUS" },
          ]}
        />
        <ContentRail
          title="Novidades na sua biblioteca"
          eyebrow="Acabaram de chegar"
          items={[
            { title: "Novos cantinhos verdes", subtitle: "6 projetos adicionados", image: covers.vasos, badge: "NOVO" },
            { title: "Tramas naturais", subtitle: "Nova edição", image: covers.corda, badge: "ATUALIZADO" },
            { title: "Vidro com nova vida", subtitle: "4 ideias inéditas", image: covers.vidro, badge: "NOVO" },
            { title: "Madeira sem desperdício", subtitle: "Passo a passo revisado", image: covers.madeira },
          ]}
        />
        <ContentRail
          title="Recomendados para você"
          eyebrow="Porque você gosta de fibras naturais"
          items={[library[2], createIdeas[0], library[0], createIdeas[3]].filter((item): item is CoverItem => Boolean(item))}
        />
        <ExploreMore />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="Casa Criativa, início">
        <span className="brand-mark"><WandSparkles aria-hidden="true" /></span>
        <span><b>CASA</b><em>CRIATIVA</em></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <a className="active" href="#inicio">Início</a>
        <a href="#biblioteca">Minha biblioteca</a>
        <a href="#colecoes">Projetos</a>
        <a href="#colecoes">Coleções</a>
        <a href="#explore">Novidades</a>
        <a href="#explore">Loja</a>
      </nav>
      <div className="header-actions">
        <Button variant="ghost" size="icon" aria-label="Buscar"><Search aria-hidden="true" /></Button>
        <Button variant="ghost" size="icon" aria-label="Notificações" className="hidden sm:inline-flex"><Bell aria-hidden="true" /></Button>
        <button type="button" className="avatar" aria-label="Abrir perfil">KL</button>
        <Button variant="ghost" size="icon" aria-label="Abrir menu" className="md:hidden"><Menu aria-hidden="true" /></Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img src={heroImage} alt="Sala acolhedora com decoração artesanal, plantas e madeira" width={1920} height={1080} fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="hero-copy">
        <p className="eyebrow">Biblioteca visual de decoração</p>
        <h1 id="hero-title">O que vamos<br />transformar hoje?</h1>
        <p>Escolha uma ideia, abra o projeto e acompanhe o passo a passo direto pelo celular.</p>
        <div className="hero-buttons">
          <Button size="lg" onClick={() => document.getElementById("colecoes")?.scrollIntoView({ behavior: "smooth" })}>
            <Compass aria-hidden="true" /> Explorar projetos
          </Button>
          <Button variant="secondary" size="lg" onClick={() => document.getElementById("biblioteca")?.scrollIntoView({ behavior: "smooth" })}>
            <Bookmark aria-hidden="true" /> Minha biblioteca
          </Button>
        </div>
      </div>
      <a className="hero-scroll" href="#ideia-do-dia" aria-label="Ir para a ideia do dia"><ChevronDown aria-hidden="true" /></a>
    </section>
  );
}

function DailyIdea() {
  return (
    <section id="ideia-do-dia" className="daily-section content-section">
      <div className="daily-image">
        <img src={ideiaDia} alt="Luminária artesanal de corda sobre mesa de madeira" loading="lazy" width={1280} height={960} />
      </div>
      <div className="daily-copy">
        <p className="eyebrow"><Sparkles aria-hidden="true" /> Ideia do dia</p>
        <h2>Luminária de corda com luz acolhedora</h2>
        <p className="daily-intro">Uma peça marcante, feita à mão, que muda a atmosfera da sala sem pesar no orçamento.</p>
        <div className="daily-meta">
          <span><b>Material</b>Sisal e corda</span>
          <span><b>Tempo</b>2 horas</span>
          <span><b>Nível</b>Intermediário</span>
        </div>
        <div className="daily-actions">
          <Button size="lg">Ver projeto</Button>
          <Button variant="secondary" size="lg"><Heart aria-hidden="true" /> Salvar para depois</Button>
        </div>
      </div>
    </section>
  );
}

function ExploreMore() {
  return (
    <section id="explore" className="explore-section content-section">
      <img src={colecaoSala} alt="Sala sofisticada com peças de madeira reaproveitada" loading="lazy" width={1280} height={720} />
      <div className="explore-overlay" />
      <div className="explore-copy">
        <p className="eyebrow">Continue criando</p>
        <h2>Explore mais possibilidades para sua casa</h2>
        <p>Novas coleções com projetos cuidadosamente escolhidos para combinar beleza, criatividade e materiais acessíveis.</p>
        <Button size="lg">Conhecer novas coleções</Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand"><span className="brand-mark"><WandSparkles aria-hidden="true" /></span><span><b>CASA</b><em>CRIATIVA</em></span></div>
      <div className="footer-links"><a href="#inicio">Suporte</a><a href="#inicio">Termos</a><a href="#inicio">Privacidade</a><a href="#inicio">Política de uso</a></div>
      <p>Conteúdo digital de decoração e projetos criativos. Resultados podem variar conforme materiais, medidas, ferramentas e execução.</p>
      <p className="copyright">© 2026 Casa Criativa</p>
    </footer>
  );
}
