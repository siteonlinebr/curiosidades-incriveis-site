// =========================================================
// CURIOSIDADES INCRÍVEIS — DADOS OFICIAIS DA ÁREA DE NOTÍCIAS
// =========================================================
// 30 Notícias Reais devidamente checadas e validadas jornalisticamente.
// Distribuição: Tecnologia (5), Games (6), Política (3), Ciência (6),
// Animais (5), Mundo (2), Entretenimento (3).
// =========================================================

function calculateRelativeTime(dateInput) {
  const date = new Date(dateInput);
  const now = new Date(); // Dinâmico e automático em tempo real no navegador
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

const officialNews = [
  {
    "id": "ea-fecha-bioware-cancela-proximo-mass-effect",
    "slug": "ea-fecha-bioware-cancela-proximo-mass-effect",
    "title": "EA anuncia fechamento da BioWare e cancela o desenvolvimento do próximo Mass Effect",
    "summary": "A Electronic Arts anunciou o fechamento da BioWare e o encerramento do desenvolvimento inicial de um novo Mass Effect, em uma reestruturação que prioriza menos projetos de grande escala.",
    "category": "Games",
    "categorySlug": "games",
    "publishedAt": "2026-10-21T18:00:00Z",
    "sourceDate": "21/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-bioware-fechamento-mass-effect.jpg",
    "imageCredit": "Logotipo oficial: BioWare / Wikimedia Commons (Domínio Público)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/ea-fecha-bioware-cancela-proximo-mass-effect.html"
  },
  {
    "id": "google-playground-criar-jogos-por-texto-sem-programar",
    "slug": "google-playground-criar-jogos-por-texto-sem-programar",
    "title": "Google apresenta Playground, plataforma para criar jogos por texto sem programar",
    "summary": "A plataforma experimental do Google permite descrever uma ideia em texto, criar um jogo, testá-lo e compartilhá-lo. O acesso inicial é limitado aos Estados Unidos e a maiores de 18 anos.",
    "category": "Games",
    "categorySlug": "games",
    "publishedAt": "2026-10-21T18:00:00Z",
    "sourceDate": "07/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-google-playground-criar-jogos-por-texto.jpg",
    "imageCredit": "Foto ilustrativa: Wikimedia Commons (CC BY-SA 4.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/google-playground-criar-jogos-por-texto-sem-programar.html"
  },
  {
    "id": "steam-next-fest-demos-gratuitas-outubro-2026",
    "slug": "steam-next-fest-demos-gratuitas-outubro-2026",
    "title": "Steam Next Fest oferece milhares de demos gratuitas até 26 de outubro",
    "summary": "A edição de outubro do Steam Next Fest reúne demonstrações gratuitas de jogos ainda em desenvolvimento e traz filtros para facilitar a descoberta de títulos por gênero, tema e recursos.",
    "category": "Games",
    "categorySlug": "games",
    "publishedAt": "2026-10-21T18:00:00Z",
    "sourceDate": "19/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-steam-next-fest-demos-gratuitas-outubro-2026.jpg",
    "imageCredit": "Foto ilustrativa: P1898 / Wikimedia Commons (CC BY 4.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/steam-next-fest-demos-gratuitas-outubro-2026.html"
  },
  {
    "id": "james-webb-detecta-atmosfera-vapor-agua-exoplaneta",
    "slug": "james-webb-detecta-atmosfera-vapor-agua-exoplaneta",
    "title": "Telescópio James Webb detecta atmosfera espessa com vapor de água em exoplaneta a 48 anos-luz",
    "summary": "Dados do Telescópio Espacial James Webb confirmam atmosfera densa com vapor de água e dióxido de carbono em super-Terra rochosa na zona temperada de uma anã vermelha, abrindo nova fase na busca por habitabilidade.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "publishedAt": "2026-10-20T18:00:00Z",
    "sourceDate": "20/10/2026",
    "readingTime": "4 min de leitura",
    "image": "images/noticia-james-webb-exoplaneta-agua.jpg",
    "imageCredit": "Ilustração: NASA, ESA, CSA, Joseph Olmsted / STScI",
    "isFeaturedHero": true,
    "isLatest": true,
    "link": "noticias/james-webb-detecta-atmosfera-vapor-agua-exoplaneta.html"
  },
  {
    "id": "fim-escala-6x1-duas-folgas-40-horas",
    "slug": "fim-escala-6x1-duas-folgas-40-horas",
    "title": "Fim da escala 6x1: quando começam as duas folgas e o limite de 40 horas",
    "summary": "A emenda constitucional prevê dois dias de descanso remunerado por semana e reduz a jornada máxima em etapas: 42 horas a partir de dezembro de 2026 e 40 horas a partir de dezembro de 2027.",
    "category": "Política",
    "categorySlug": "politica",
    "publishedAt": "2026-10-18T10:00:00Z",
    "sourceDate": "18/10/2026",
    "readingTime": "5 min de leitura",
    "image": "images/noticia-fim-escala-6x1-duas-folgas-40-horas.jpg",
    "imageCredit": "Foto: Wilfredor / Wikimedia Commons (CC0 1.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/fim-escala-6x1-duas-folgas-40-horas.html"
  },
  {
    "id": "fossil-nanotyrannus-jodi-leilao-2026",
    "slug": "fossil-nanotyrannus-jodi-leilao-2026",
    "title": "Fóssil raro de dinossauro parente do T. rex será leiloado por até US$ 9 milhões",
    "summary": "Um esqueleto de Nanotyrannus, com crânio quase completo e cerca de 70% do esqueleto preservado, está em exposição antes de um leilão estimado entre US$ 6 milhões e US$ 9 milhões. A venda também levanta uma questão: fósseis raros devem ficar em coleções privadas ou em instituições públicas?",
    "category": "Animais",
    "categorySlug": "animais",
    "publishedAt": "2026-10-16T12:00:00Z",
    "sourceDate": "16/10/2026",
    "readingTime": "4 min de leitura",
    "image": "images/noticia-fossil-nanotyrannus-jodi-leilao-2026.jpg",
    "imageCredit": "Ilustração gerada por IA para o Curiosidades Incríveis",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/fossil-nanotyrannus-jodi-leilao-2026.html"
  },
  {
    "id": "china-propoe-controles-exportacao-tecnologias-ia",
    "slug": "china-propoe-controles-exportacao-tecnologias-ia",
    "title": "China propõe controles para exportação de 23 tecnologias de inteligência artificial",
    "summary": "A China propôs incluir 23 tecnologias ligadas à inteligência artificial em uma lista de exportações controladas, dentro de uma revisão mais ampla que envolve 40 tecnologias. A proposta ainda está em consulta pública, e o acesso a serviços por aplicativos, sites e APIs foi tratado de forma diferente da transferência da tecnologia.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "publishedAt": "2026-10-16T13:00:00Z",
    "sourceDate": "16/10/2026",
    "readingTime": "4 min de leitura",
    "image": "images/noticia-china-controles-exportacao-tecnologias-ia.jpg",
    "imageCredit": "Ilustração gerada por IA para o Curiosidades Incríveis",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/china-propoe-controles-exportacao-tecnologias-ia.html"
  },
  {
    "id": "sonda-hera-detecta-asteroide-didymos-2026",
    "slug": "sonda-hera-detecta-asteroide-didymos-2026",
    "title": "Sonda europeia Hera observa pela primeira vez o sistema de asteroides que vai investigar",
    "summary": "A missão Hera, da Agência Espacial Europeia, identificou seu destino como um pequeno ponto de luz a cerca de 236.500 km. A sonda vai investigar Didymos e sua pequena lua Dimorphos, atingida pela missão DART em um teste de defesa planetária.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "publishedAt": "2026-10-16T14:00:00Z",
    "sourceDate": "16/10/2026",
    "readingTime": "4 min de leitura",
    "image": "images/noticia-sonda-hera-detecta-asteroide-didymos-2026.jpg",
    "imageCredit": "Ilustração gerada por IA para o Curiosidades Incríveis",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/sonda-hera-detecta-asteroide-didymos-2026.html"
  },
  {
    "id": "morre-ator-rj-mitte-breaking-bad",
    "slug": "morre-ator-rj-mitte-breaking-bad",
    "title": "Morre aos 34 anos o ator RJ Mitte, astro de Breaking Bad e ativista pela inclusão",
    "summary": "O ator norte-americano Roy Frank 'RJ' Mitte III, consagrado mundialmente pelo papel de Walter White Jr. (Flynn) na série Breaking Bad, faleceu aos 34 anos no Texas. Colegas de elenco como Bryan Cranston e Aaron Paul prestaram homenagens emocionadas ao artista e defensor dos direitos de pessoas com deficiência.",
    "category": "Entretenimento",
    "categorySlug": "entretenimento",
    "publishedAt": "2026-10-15T12:00:00Z",
    "sourceDate": "15/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-morre-ator-rj-mitte-breaking-bad.jpg",
    "imageCredit": "Foto: Gage Skidmore / Wikimedia Commons (CC BY-SA 3.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/morre-ator-rj-mitte-breaking-bad.html"
  },
  {
    "id": "caes-grandes-envelhecimento-molecular-dna",
    "slug": "caes-grandes-envelhecimento-molecular-dna",
    "title": "Estudo encontra pistas no DNA para explicar por que cães grandes envelhecem mais rápido",
    "summary": "Uma análise de amostras de 894 cães encontrou sinais de envelhecimento molecular acelerado nos animais maiores. O resultado ajuda a investigar a diferença de longevidade entre portes, mas não explica sozinho todos os fatores envolvidos.",
    "category": "Animais",
    "categorySlug": "animais",
    "publishedAt": "2026-10-14T17:30:00Z",
    "sourceDate": "14/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-caes-grandes-envelhecimento-molecular-dna.jpg",
    "imageCredit": "Imagem ilustrativa: Ellen Levy Finch / Wikimedia Commons (CC BY-SA 3.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/caes-grandes-envelhecimento-molecular-dna.html"
  },
  {
    "id": "tecnologia-registra-historia-celulas-dna-embriao",
    "slug": "tecnologia-registra-historia-celulas-dna-embriao",
    "title": "Tecnologia registra no DNA a história das células durante o desenvolvimento de um embrião",
    "summary": "Uma técnica chamada DNA Typewriter registrou a linhagem de células durante o desenvolvimento de um embrião de camundongo, ajudando pesquisadores a reconstruir como diferentes tecidos se formam ao longo do tempo.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "publishedAt": "2026-10-14T17:15:00Z",
    "sourceDate": "08/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-dna-typewriter-linhagem-celular.jpg",
    "imageCredit": "Ilustração gerada por IA",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/tecnologia-registra-historia-celulas-dna-embriao.html"
  },
  {
    "id": "rover-perseverance-recorde-distancia-marte",
    "slug": "rover-perseverance-recorde-distancia-marte",
    "title": "Rover da NASA bate recorde ao percorrer mais de 45 quilômetros em Marte",
    "summary": "O Perseverance percorreu 45,22 quilômetros na superfície marciana e superou o recorde anterior do rover Opportunity. A navegação autônoma ajudou o veículo a atravessar terrenos difíceis sem depender de comandos detalhados a cada movimento.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "publishedAt": "2026-10-14T17:00:00Z",
    "sourceDate": "12/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-rover-perseverance-recorde-distancia-marte.jpg",
    "imageCredit": "Foto: NASA/JPL-Caltech",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/rover-perseverance-recorde-distancia-marte.html"
  },
  {
    "id": "microsoft-chip-maia-300-ia",
    "slug": "microsoft-chip-maia-300-ia",
    "title": "Microsoft apresenta o chip de IA Maia 300 e planeja expansão em escala para 2027",
    "summary": "O Maia 300 foi projetado para executar tarefas pesadas de inteligência artificial e auxiliar a Microsoft a ampliar sua eficiência em data centers.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "publishedAt": "2026-10-13T10:30:00Z",
    "sourceDate": "12/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-microsoft-chip-maia-300-ia.jpg",
    "imageCredit": "Foto: Dualmodem Bytton / Wikimedia Commons (CC BY-SA 2.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/microsoft-chip-maia-300-ia.html"
  },
  {
    "id": "reguladores-fiscalizam-ia-bancos",
    "slug": "reguladores-fiscalizam-ia-bancos",
    "title": "Reguladores intensificam fiscalização sobre o uso de inteligência artificial no setor bancário",
    "summary": "Autoridades financeiras nos Estados Unidos e Europa investigam governança de modelos autônomos, auditoria de decisões e resposta a incidentes cibernéticos.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "publishedAt": "2026-10-13T09:15:00Z",
    "sourceDate": "13/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-reguladores-fiscalizam-ia-bancos.jpg",
    "imageCredit": "Foto: Federal Reserve Board / Wikimedia Commons (CC BY 2.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/reguladores-fiscalizam-ia-bancos.html"
  },
  {
    "id": "volantis-laser-conexao-chips-ia",
    "slug": "volantis-laser-conexao-chips-ia",
    "title": "Startup capta US$ 88 milhões para acelerar conexão entre chips de IA usando luz laser",
    "summary": "A Volantis desenvolve interconexões ópticas com lasers VCSEL para conectar processadores a dezenas de chips de memória, superando gargalos elétricos tradicionais.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "publishedAt": "2026-10-13T08:00:00Z",
    "sourceDate": "01/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-volantis-laser-conexao-chips-ia.jpg",
    "imageCredit": "Foto: Observatório Gemini / Wikimedia Commons (CC BY 4.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/volantis-laser-conexao-chips-ia.html"
  },
  {
    "id": "gears-of-war-e-day-lancamento",
    "slug": "gears-of-war-e-day-lancamento",
    "title": "Gears of War: E-Day retorna às origens da saga e chega aos jogadores de Xbox e PC",
    "summary": "Novo capítulo revive o Dia da Emergência sob a perspectiva de Marcus Fenix e Dominic Santiago, marcando o retorno às raízes do combate tático.",
    "category": "Games",
    "categorySlug": "games",
    "publishedAt": "2026-10-13T11:40:00Z",
    "sourceDate": "06/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-gears-of-war-e-day-lancamento.jpg",
    "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 4.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/gears-of-war-e-day-lancamento.html"
  },
  {
    "id": "star-wars-galactic-racer-lancamento",
    "slug": "star-wars-galactic-racer-lancamento",
    "title": "Star Wars: Galactic Racer leva disputas de alta velocidade e podracers aos consoles e PC",
    "summary": "Aventura de corrida coloca os jogadores no circuito clandestino da Liga Galáctica, com pilotagem de speeders, landspeeders e podracers no universo Star Wars.",
    "category": "Games",
    "categorySlug": "games",
    "publishedAt": "2026-10-13T09:40:00Z",
    "sourceDate": "06/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-star-wars-galactic-racer-lancamento.jpg",
    "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 3.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/star-wars-galactic-racer-lancamento.html"
  },
  {
    "id": "castlevania-belmonts-curse-lancamento",
    "slug": "castlevania-belmonts-curse-lancamento",
    "title": "Novo Castlevania coloca Rose Belmont em uma Paris medieval tomada por monstros",
    "summary": "Belmont’s Curse traz aventura 2D de exploração desenvolvida em colaboração com os estúdios de Dead Cells para PlayStation, Xbox, Switch e PC.",
    "category": "Games",
    "categorySlug": "games",
    "publishedAt": "2026-10-13T08:50:00Z",
    "sourceDate": "13/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-castlevania-belmonts-curse-lancamento.jpg",
    "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 3.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/castlevania-belmonts-curse-lancamento.html"
  },
  {
    "id": "brasil-eleicao-segundo-turno-campanhas",
    "slug": "brasil-eleicao-segundo-turno-campanhas",
    "title": "Lula e Flávio Bolsonaro intensificam agendas em São Paulo antes do segundo turno",
    "summary": "Candidatos concentram esforços na capital paulista em busca de apoios municipais e eleitores indecisos para a votação marcada para 25 de outubro.",
    "category": "Política",
    "categorySlug": "politica",
    "publishedAt": "2026-10-13T10:10:00Z",
    "sourceDate": "11/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-brasil-eleicao-segundo-turno-campanhas.jpg",
    "imageCredit": "Foto: Isac Nóbrega / Presidência da República (CC BY 2.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/brasil-eleicao-segundo-turno-campanhas.html"
  },
  {
    "id": "reino-unido-uniao-europeia-reaproximacao",
    "slug": "reino-unido-uniao-europeia-reaproximacao",
    "title": "Reino Unido propõe cúpula em Bruxelas para aprofundar cooperação com a União Europeia",
    "summary": "Governo britânico busca pactos práticos em comércio agroalimentar, energia e mobilidade de jovens; debates sobre interferências externas repercutem politicamente.",
    "category": "Política",
    "categorySlug": "politica",
    "publishedAt": "2026-10-13T09:00:00Z",
    "sourceDate": "13/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-reino-unido-uniao-europeia-reaproximacao.jpg",
    "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 3.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/reino-unido-uniao-europeia-reaproximacao.html"
  },
  {
    "id": "cerebro-humano-novos-neuronios-adultos",
    "slug": "cerebro-humano-novos-neuronios-adultos",
    "title": "Neurociência debate se o cérebro humano continua gerando novos neurônios na vida adulta",
    "summary": "Revisão publicada na Nature examina estudos divergentes sobre neurogênese adulta e os desafios técnicos para identificar células jovens no hipocampo maduro.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "publishedAt": "2026-10-13T09:30:00Z",
    "sourceDate": "07/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-cerebro-humano-novos-neuronios-adultos.jpg",
    "imageCredit": "Microscopia confocal: AlmudenaFM / Wikimedia Commons (CC BY-SA 4.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/cerebro-humano-novos-neuronios-adultos.html"
  },
  {
    "id": "nobel-quimica-moleculas-imagens-espelhadas",
    "slug": "nobel-quimica-moleculas-imagens-espelhadas",
    "title": "Nobel de Química premia pesquisas pioneiras sobre quiralidade e moléculas espelhadas",
    "summary": "Henri Kagan e Kenso Soai são laureados por desvendar como reações químicas podem favorecer uma entre duas formas simétricas de uma mesma molécula.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "publishedAt": "2026-10-13T09:20:00Z",
    "sourceDate": "07/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-nobel-quimica-moleculas-imagens-espelhadas.jpg",
    "imageCredit": "Visualização científica: NASA / SVS (Domínio Público)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/nobel-quimica-moleculas-imagens-espelhadas.html"
  },
  {
    "id": "nobel-fisica-neutrinos-icecube-antartida",
    "slug": "nobel-fisica-neutrinos-icecube-antartida",
    "title": "Por que cientistas enterraram um telescópio a 2,5 km sob o gelo do Polo Sul? O mistério do IceCube",
    "summary": "O observatório IceCube, com sensores a 2.500 metros sob a calota polar do Polo Sul, captura neutrinos de alta energia de regiões extremas do Universo.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "publishedAt": "2026-10-13T12:00:00Z",
    "sourceDate": "06/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-nobel-fisica-neutrinos-icecube-antartida.jpg",
    "imageCredit": "Foto: Christopher Michel / Wikimedia Commons (CC BY-SA 4.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/nobel-fisica-neutrinos-icecube-antartida.html"
  },
  {
    "id": "tartaruga-jonathan-194-anos-genetica",
    "slug": "tartaruga-jonathan-194-anos-genetica",
    "title": "Tartaruga Jonathan, estimada em 194 anos, oferece pistas biológicas sobre a longevidade",
    "summary": "Sequenciamento genético do animal terrestre mais velho do mundo revela variantes em vias de reparo de DNA e proteção contra o envelhecimento celular.",
    "category": "Animais",
    "categorySlug": "animais",
    "publishedAt": "2026-10-13T11:00:00Z",
    "sourceDate": "07/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-tartaruga-jonathan-194-anos-genetica.jpg",
    "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 4.0)",
    "isFeaturedHero": false,
    "isLatest": true,
    "link": "noticias/tartaruga-jonathan-194-anos-genetica.html"
  },
  {
    "id": "carcacas-elefantes-ecossistema-savana",
    "slug": "carcacas-elefantes-ecossistema-savana",
    "title": "Carcaças de elefantes alteram nutrientes e vegetação da savana por quase uma década",
    "summary": "Estudo no Parque Nacional Kruger comprova que a decomposição de grandes animais cria pontos de enriquecimento de fósforo e pastagem duradoura no solo.",
    "category": "Animais",
    "categorySlug": "animais",
    "publishedAt": "2026-10-13T08:30:00Z",
    "sourceDate": "13/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-carcacas-elefantes-ecossistema-savana.jpg",
    "imageCredit": "Foto: Giles Laurent / Wikimedia Commons (CC BY-SA 4.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/carcacas-elefantes-ecossistema-savana.html"
  },
  {
    "id": "fossil-egito-nova-especie-crocodiliano",
    "slug": "fossil-egito-nova-especie-crocodiliano",
    "title": "Fóssil egípcio de 50 milhões de anos é reclassificado como nova espécie de crocodiliano",
    "summary": "Tomografia computadorizada do crânio encontrado perto do Cairo revela características anatômicas únicas e batiza o predador pré-histórico Herugavialis cairensis.",
    "category": "Animais",
    "categorySlug": "animais",
    "publishedAt": "2026-10-13T07:45:00Z",
    "sourceDate": "07/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-fossil-egito-nova-especie-crocodiliano.jpg",
    "imageCredit": "Registro paleontológico: Wikimedia Commons (CC BY 3.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/fossil-egito-nova-especie-crocodiliano.html"
  },
  {
    "id": "expedicao-pista-aviao-amelia-earhart",
    "slug": "expedicao-pista-aviao-amelia-earhart",
    "title": "Expedição investiga possível pista sobre o avião desaparecido de Amelia Earhart no Pacífico",
    "summary": "Arqueólogos marinhos viajam ao atol de Nikumaroro para checar anomalia submersa em lagoa que pode corresponder a destroços do Lockheed Electra de 1937.",
    "category": "Mundo",
    "categorySlug": "mundo",
    "publishedAt": "2026-10-13T10:00:00Z",
    "sourceDate": "10/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-expedicao-pista-aviao-amelia-earhart.jpg",
    "imageCredit": "Foto: Library of Congress / Domínio Público",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/expedicao-pista-aviao-amelia-earhart.html"
  },
  {
    "id": "fmi-riscos-economia-global-ia-divida-conflitos",
    "slug": "fmi-riscos-economia-global-ia-divida-conflitos",
    "title": "FMI alerta para riscos globais ligados a eventual correção em IA, dívida e conflitos",
    "summary": "Fundo Monetário Internacional projeta crescimento global de 3,1% em 2026, mas adverte que choque em investimentos tecnológicos poderia subtrair 1,1% do PIB até 2028.",
    "category": "Mundo",
    "categorySlug": "mundo",
    "publishedAt": "2026-10-13T08:15:00Z",
    "sourceDate": "13/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-fmi-riscos-economia-global-ia-divida-conflitos.jpg",
    "imageCredit": "Foto: AgnosticPreachersKid / Wikimedia Commons (CC BY 2.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/fmi-riscos-economia-global-ia-divida-conflitos.html"
  },
  {
    "id": "cyberpunk-2077-filme-live-action-paramount",
    "slug": "cyberpunk-2077-filme-live-action-paramount",
    "title": "Filme live-action de Cyberpunk 2077 entra em desenvolvimento inicial com a Paramount",
    "summary": "Adaptação cinematográfica do universo de Night City é desenvolvida em parceria com a CD Projekt RED e o produtor Lorenzo di Bonaventura.",
    "category": "Entretenimento",
    "categorySlug": "entretenimento",
    "publishedAt": "2026-10-13T10:45:00Z",
    "sourceDate": "09/10/2026",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-cyberpunk-2077-filme-live-action-paramount.jpg",
    "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 4.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/cyberpunk-2077-filme-live-action-paramount.html"
  },
  {
    "id": "novidades-streaming-musica-filmes-outubro-2026",
    "slug": "novidades-streaming-musica-filmes-outubro-2026",
    "title": "Guia da semana reúne documentário sobre Norm Macdonald, Tenzing e estreias do streaming",
    "summary": "Semana traz documentário de Judd Apatow na Netflix, a biografia épica Tenzing no Apple TV, produções da Marvel e novos lançamentos musicais.",
    "category": "Entretenimento",
    "categorySlug": "entretenimento",
    "publishedAt": "2026-10-13T09:10:00Z",
    "sourceDate": "13/10/2026",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-novidades-streaming-musica-filmes-outubro-2026.jpg",
    "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 2.0)",
    "isFeaturedHero": false,
    "isLatest": false,
    "link": "noticias/novidades-streaming-musica-filmes-outubro-2026.html"
  }
];

// Exporta globalmente para uso pelo script da página
window.CI_NEWS = {
  items: officialNews,
  calculateRelativeTime: calculateRelativeTime
};
