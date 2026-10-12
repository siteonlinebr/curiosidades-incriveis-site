// =========================================================
// CURIOSIDADES INCRÍVEIS — DADOS DA ÁREA DE NOTÍCIAS
// =========================================================
// ATENÇÃO: DADOS DEMONSTRATIVOS TEMPORÁRIOS DE ESTRUTURA.
// As notícias reais serão pesquisadas, selecionadas e publicadas
// em etapa posterior conforme o plano editorial (18 notícias distribuídas
// entre Tecnologia, Games, Política, Ciência, Animais, Mundo e Entretenimento).
// =========================================================

// Função utilitária para cálculo de tempo relativo com base em datas válidas
function calculateRelativeTime(dateInput) {
  const date = new Date(dateInput);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (isNaN(diffInSeconds) || diffInSeconds < 0) {
    return 'agora há pouco';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 1) {
    return 'agora há pouco';
  }
  if (diffInMinutes < 60) {
    return `há ${diffInMinutes} min`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours === 1) {
    return 'há 1 hora';
  }
  if (diffInHours < 24) {
    return `há ${diffInHours} horas`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return 'ontem';
  }
  if (diffInDays < 7) {
    return `há ${diffInDays} dias`;
  }

  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Data base dinâmica para demonstrar o cálculo relativo sempre ativo
const nowMs = Date.now();
const h = (hours) => new Date(nowMs - hours * 3600 * 1000).toISOString();
const d = (days) => new Date(nowMs - days * 24 * 3600 * 1000).toISOString();

const demoNews = [
  {
    id: "demo-noticia-01",
    title: "[Demonstração] Telescópio espacial registra detalhes inéditos em berçário de estrelas",
    summary: "Estrutura pronta para receber a contextualização da notícia real. O modelo apresenta imagem imponente, leitura rápida e curadoria focada em descobertas impressionantes.",
    category: "Ciência",
    categorySlug: "ciencia",
    publishedAt: h(2), // há 2 horas
    readingTime: "3 min de leitura",
    image: "images/artigo-destaque.jpg",
    imageCredit: "Crédito demonstrativo / Divulgação científica",
    isFeaturedHero: true, // Destaque principal 65%
    isLatest: false,
  },
  {
    id: "demo-noticia-02",
    title: "[Demonstração] Nova arquitetura de semicondutores promete saltos de eficiência energética",
    summary: "Espaço reservado para o resumo de novidades do setor de hardware, IA e inovações do ecossistema de tecnologia.",
    category: "Tecnologia",
    categorySlug: "tecnologia",
    publishedAt: h(3), // há 3 horas
    readingTime: "2 min de leitura",
    image: "images/artigo-internet.jpg",
    imageCredit: "Exemplo demonstrativo",
    isFeaturedHero: false,
    isLatest: true, // Coluna de últimas notícias 35%
  },
  {
    id: "demo-noticia-03",
    title: "[Demonstração] Indústria de games testa novos métodos de física para mundos abertos",
    summary: "Espaço reservado para acompanhar novidades, lançamentos de peso e tecnologias visuais aplicadas a jogos.",
    category: "Games",
    categorySlug: "games",
    publishedAt: h(5), // há 5 horas
    readingTime: "3 min de leitura",
    image: "images/artigo-anticitera.jpg",
    imageCredit: "Exemplo demonstrativo",
    isFeaturedHero: false,
    isLatest: true, // Coluna de últimas notícias 35%
  },
  {
    id: "demo-noticia-04",
    title: "[Demonstração] Estudo mapeia comportamento migratório adaptativo em aves de rapina",
    summary: "Espaço reservado para pesquisas recentes sobre etologia, biologia animal e descobertas sobre a fauna.",
    category: "Animais",
    categorySlug: "animais",
    publishedAt: h(8), // há 8 horas
    readingTime: "2 min de leitura",
    image: "images/artigo-corvos.jpg",
    imageCredit: "Exemplo demonstrativo",
    isFeaturedHero: false,
    isLatest: true, // Coluna de últimas notícias 35%
  },
  {
    id: "demo-noticia-05",
    title: "[Demonstração] Conclave internacional discute marco de cooperação para segurança cibernética",
    summary: "Espaço reservado para acontecimentos políticos globais, decisões de cúpulas e legislação com impacto público.",
    category: "Política",
    categorySlug: "politica",
    publishedAt: d(1), // ontem
    readingTime: "4 min de leitura",
    image: "images/artigo-stuxnet.jpg",
    imageCredit: "Exemplo demonstrativo",
    isFeaturedHero: false,
    isLatest: false,
  },
  {
    id: "demo-noticia-06",
    title: "[Demonstração] Expedição submarina registra nova falha geológica em região inexplorada do Pacífico",
    summary: "Espaço reservado para grandes acontecimentos geográficos, expedições extremas e fenômenos naturais do planeta.",
    category: "Mundo",
    categorySlug: "mundo",
    publishedAt: d(1), // ontem
    readingTime: "3 min de leitura",
    image: "images/artigo-ponto-nemo.jpg",
    imageCredit: "Exemplo demonstrativo",
    isFeaturedHero: false,
    isLatest: false,
  },
  {
    id: "demo-noticia-07",
    title: "[Demonstração] Análise de acústica antiga em anfiteatros clássicos revela segredos de engenharia",
    summary: "Espaço reservado para novidades culturais, história viva, entretenimento e marcos da produção criativa.",
    category: "Entretenimento",
    categorySlug: "entretenimento",
    publishedAt: d(2), // há 2 dias
    readingTime: "3 min de leitura",
    image: "images/artigo-palavras.jpg",
    imageCredit: "Exemplo demonstrativo",
    isFeaturedHero: false,
    isLatest: false,
  },
  {
    id: "demo-noticia-08",
    title: "[Demonstração] Laboratório atinge nova marca de contenção de plasma em reator experimental",
    summary: "Espaço reservado para descobertas da física de ponta, energias limpas e avanços científicos contemporâneos.",
    category: "Ciência",
    categorySlug: "ciencia",
    publishedAt: d(3), // há 3 dias
    readingTime: "4 min de leitura",
    image: "images/artigo-gelo-quente.jpg",
    imageCredit: "Exemplo demonstrativo",
    isFeaturedHero: false,
    isLatest: false,
  }
];

// Exporta globalmente para uso pelo script da página
window.CI_NEWS = {
  items: demoNews,
  calculateRelativeTime: calculateRelativeTime
};
