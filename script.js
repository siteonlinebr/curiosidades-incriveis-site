// =========================================================
// CURIOSIDADES INCRÍVEIS - SCRIPT OFICIAL
// =========================================================

// 7 Artigos Oficiais existentes no portal
const articles = [
  {
    "id": "como-golfinhos-dormem-sono-uni-hemisferico",
    "title": "Como os Golfinhos Dormem Sem Se Afogar? O Mistério do Sono de Meio Cérebro",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "5 min de leitura",
    "description": "Descubra como golfinhos e baleias dormem no mar sem se afogar: o sono uni-hemisférico de ondas lentas, a respiração voluntária e os segredos da neurobiologia marinha.",
    "image": "images/artigo-golfinhos-sono.jpg",
    "link": "artigos/como-golfinhos-dormem-sono-uni-hemisferico.html",
    "featured": true,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "o-que-acontece-ao-cair-buraco-negro-espaguetificacao",
    "title": "O Que Aconteceria se Você Caísse em um Buraco Negro? A Física da Espaguetificação",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "6 min de leitura",
    "description": "O que a relatividade geral e a astrofísica revelam sobre cair em um buraco negro: horizonte de eventos, forças de maré gravitacionais, dilatação temporal e espaguetificação.",
    "image": "images/artigo-buraco-negro.jpg",
    "link": "artigos/o-que-acontece-ao-cair-buraco-negro-espaguetificacao.html",
    "featured": true,
    "recent": true,
    "popular": true,
    "quickFact": false
  },
  {
    "id": "computador-quantico-como-funciona-qubits-criptografia",
    "title": "Como Funciona um Computador Quântico? O Que São Qubits e o Fim das Senhas",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "5 min de leitura",
    "description": "Entenda como funcionam os computadores quânticos: superposição, emaranhamento, qubits, temperaturas quase no zero absoluto e o impacto na criptografia global.",
    "image": "images/artigo-computador-quantico.jpg",
    "link": "artigos/computador-quantico-como-funciona-qubits-criptografia.html",
    "featured": true,
    "recent": true,
    "popular": true,
    "quickFact": false
  },
  {
    "id": "incidente-passagem-dyatlov-misterio-resolvido",
    "title": "O Incidente da Passagem Dyatlov: A Ciência Finalmente Explicou a Tragédia?",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "6 min de leitura",
    "description": "Em 1959, 9 esquiadores soviéticos morreram misteriosamente nos Montes Urais. Entenda as pistas, os mitos e como a física moderna finalmente explicou a tragédia.",
    "image": "images/artigo-passagem-dyatlov.jpg",
    "link": "artigos/incidente-passagem-dyatlov-misterio-resolvido.html",
    "featured": true,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "ilha-das-cobras-queimada-grande-perigosa-brasil",
    "title": "Ilha da Queimada Grande: Por Que a 'Ilha das Cobras' É Proibida pela Marinha?",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "5 min de leitura",
    "description": "A 35 km do litoral de SP, a Ilha da Queimada Grande abriga milhares de jararacas-ilhoas com veneno 5x mais potente. Descubra a história e a ciência da Ilha das Cobras.",
    "image": "images/artigo-ilha-queimada-grande.jpg",
    "link": "artigos/ilha-das-cobras-queimada-grande-perigosa-brasil.html",
    "featured": true,
    "recent": true,
    "popular": true,
    "quickFact": false
  },
  {
    "id": "rodovia-36-faixas-china",
    "title": "A Verdade por Trás da “Rodovia de 36 Faixas” que Parou a China: Mito Viral vs. Realidade",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "5 min de leitura",
    "description": "Entenda o que realmente aconteceu no famoso congestionamento das 36 faixas na China: a praça de pedágio de Wuzhuang, a Golden Week e a física real do tráfego.",
    "image": "images/artigo-rodovia-36-faixas.jpg",
    "link": "artigos/rodovia-36-faixas-china.html",
    "featured": true,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "polvo-tres-coracoes",
    "title": "O Mistério dos Polvos: 3 Corações, Sangue Azul e Inteligência de Outro Mundo",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Por que o corpo de um polvo funciona de uma maneira tão diferente e dois de seus corações param quando ele nada?",
    "image": "images/artigo-polvo.jpg",
    "link": "artigos/polvo-tres-coracoes.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "abelhas-rostos",
    "title": "Abelhas Conseguem Reconhecer Rostos Humanos?",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Pesquisas comprovam que insetos com cérebros minúsculos conseguem memorizar traços faciais usando processamento holístico.",
    "image": "images/artigo-abelhas.jpg",
    "link": "artigos/abelhas-rostos.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "animais-humanos-aproximacao",
    "title": "Eles Sentem o Que Sentimos? A ciência real por trás dos animais que se aproximam de nós",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "5 min de leitura",
    "description": "Descubra o que a etologia e a biologia comportamental revelam sobre encontros com animais: entre a curiosidade natural, a busca por recursos e os limites da convivência.",
    "image": "images/artigo-animais-humanos.jpg",
    "link": "artigos/animais-humanos-aproximacao.html",
    "featured": true,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "corvos-inteligencia",
    "title": "A Inteligência dos Corvos: Eles Guardam Rancor e Planejam o Futuro",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Cientistas provaram que corvos reconhecem rostos de quem os prejudicou, passam esse rancor para filhotes e usam ferramentas complexas.",
    "image": "images/artigo-corvos.jpg",
    "link": "artigos/corvos-inteligencia.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "animal-imortal-agua-viva",
    "title": "O Único Animal Imortal da Terra: A Água-Viva Turritopsis Dohrnii",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "4 min de leitura",
    "description": "Conheça o animal que desafia a biologia: quando fica velha ou ferida, ela simplesmente rejuvenesce e volta a ser um pólipo jovem.",
    "image": "images/artigo-agua-viva.jpg",
    "link": "artigos/animal-imortal-agua-viva.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "camarao-mantis-soco",
    "title": "O Soco Supersônico do Camarão-Mantis que Ferve a Água",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Seu golpe veloz acelera mais rápido que uma bala calibre .22, gera luz por cavitação e produz calor similar à superfície solar.",
    "image": "images/artigo-mantis.jpg",
    "link": "artigos/camarao-mantis-soco.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "dinossauros-aves-evolucao",
    "title": "Os Dinossauros Não Foram Extintos: Como as aves modernas guardam o legado dos gigantes pré-históricos",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "6 min de leitura",
    "description": "A fascinante biologia evolutiva: como uma linhagem de terópodes sobreviveu ao cataclismo de 66 milhões de anos atrás e deu origem a todas as aves modernas.",
    "image": "images/artigo-dinossauros-aves.jpg",
    "link": "artigos/dinossauros-aves-evolucao.html",
    "featured": true,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "exemplo-artigo",
    "title": "O Mistério das Profundezas: Criaturas que Desafiam a Biologia",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "5 min de leitura",
    "description": "Descubra como organismos sobrevivem à pressão esmagadora e à escuridão total no fundo dos oceanos.",
    "image": "images/artigo-destaque.jpg",
    "link": "artigos/exemplo-artigo.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "por-que-ceu-azul",
    "title": "Por Que o Céu É Azul? O Fenômeno que a Física Explica",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "4 min de leitura",
    "description": "O espalhamento de Rayleigh revela por que a luz solar pinta a nossa atmosfera de azul e dourado.",
    "image": "images/artigo-ceu.jpg",
    "link": "artigos/por-que-ceu-azul.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "som-mais-alto-krakatoa",
    "title": "O Som Mais Alto Já Ouvido na Terra: A Explosão do Krakatoa",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "4 min de leitura",
    "description": "Em 1883, a erupção do vulcão Krakatoa gerou uma onda sonora que deu 4 voltas completas no planeta e rompeu tímpanos a 64 km.",
    "image": "images/artigo-krakatoa.jpg",
    "link": "artigos/som-mais-alto-krakatoa.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "gelo-quente-estados-materia",
    "title": "Gelo Quente: Por Que a Água Congela a Mais de 100°C Sob Pressão Extrema",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "4 min de leitura",
    "description": "No coração de gigantes gasosos como Netuno e Urano existe gelo superiônico incandescente. Descubra a física inacreditável da água.",
    "image": "images/artigo-gelo-quente.jpg",
    "link": "artigos/gelo-quente-estados-materia.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "tempo-topo-montanha",
    "title": "Por Que o Tempo Passa Mais Rápido no Topo de Uma Montanha?",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "A teoria da relatividade geral de Einstein na prática: a gravidade distorce o fluxo dos segundos e afeta até o GPS do seu celular.",
    "image": "images/artigo-tempo-montanha.jpg",
    "link": "artigos/tempo-topo-montanha.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "internet-funciona",
    "title": "Como a Internet Realmente Funciona Debaixo dos Oceanos?",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "5 min de leitura",
    "description": "Quase 99% de todo o tráfego de dados intercontinental atravessa cabos de fibra óptica no fundo do mar.",
    "image": "images/artigo-internet.jpg",
    "link": "artigos/internet-funciona.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "bug-guerra-nuclear-1983",
    "title": "O Homem que Salvou o Mundo de um Bug de Computador em 1983",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "4 min de leitura",
    "description": "Stanislav Petrov confiou em sua intuição quando o sistema soviético apontou ataque de mísseis americanos que na verdade eram reflexos do Sol.",
    "image": "images/artigo-stanislav-bug.jpg",
    "link": "artigos/bug-guerra-nuclear-1983.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "sete-chaves-internet",
    "title": "As 7 Pessoas que Guardam as Chaves Mestras da Internet Mundial",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "4 min de leitura",
    "description": "Um ritual secreto da ICANN reúne especialistas para garantir a autenticidade do DNS que mantém o mundo online seguro.",
    "image": "images/artigo-chaves-internet.jpg",
    "link": "artigos/sete-chaves-internet.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "mecanismo-anticitera-computador",
    "title": "Mecanismo de Anticítera: O Primeiro Computador Analógico Tem Mais de 2.000 Anos",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "4 min de leitura",
    "description": "Engrenagens de bronze esculpidas na Grécia Antiga previam posições planetárias e eclipses com precisão milimétrica séculos antes de Cristo.",
    "image": "images/artigo-anticitera.jpg",
    "link": "artigos/mecanismo-anticitera-computador.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "virus-stuxnet-arma-digital",
    "title": "Stuxnet: O Primeiro Vírus Capaz de Destruir Máquinas Físicas no Mundo Real",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Como um código invisível infectou centrífugas nucleares iranianas sem estar conectado à internet e abriu a era da ciberguerra.",
    "image": "images/artigo-stuxnet.jpg",
    "link": "artigos/virus-stuxnet-arma-digital.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "origem-palavras",
    "title": "A Fascinante Origem das Palavras que Falamos Todos os Dias",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "4 min de leitura",
    "description": "Termos comuns que guardam lendas curiosas, equívocos históricos e transformações linguísticas surpreendentes.",
    "image": "images/artigo-palavras.jpg",
    "link": "artigos/origem-palavras.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "guerra-dos-emus",
    "title": "A Grande Guerra dos Emus: Quando o Exército Australiano Perdeu Para Aves",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Em 1932, soldados armados com metralhadoras Lewis enfrentaram milhares de emus que destruíam plantações no deserto australiano.",
    "image": "images/artigo-emus.jpg",
    "link": "artigos/guerra-dos-emus.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "epidemia-danca-1518",
    "title": "A Epidemia da Dança de 1518: Quando Centenas Dançaram Até a Morte",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "4 min de leitura",
    "description": "O misterioso surto em Estrasburgo que fez homens e mulheres dançarem freneticamente nas praças sem conseguir parar durante semanas.",
    "image": "images/artigo-epidemia-danca.jpg",
    "link": "artigos/epidemia-danca-1518.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "fogo-grego-arma-secreta",
    "title": "O Fogo Grego: A Terrível Arma Secreta Bizantina que Queimava na Água",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "4 min de leitura",
    "description": "O lança-chamas naval que salvou Constantinopla por séculos e cuja fórmula química foi guardada como segredo de Estado até sumir.",
    "image": "images/artigo-fogo-grego.jpg",
    "link": "artigos/fogo-grego-arma-secreta.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "adaga-tutancamon-meteorito",
    "title": "A Adaga de Tutancâmon Forjada com Ferro Vindo do Espaço",
    "category": "História",
    "categorySlug": "historia",
    "readingTime": "⚡ 3 min de leitura",
    "description": "Análises de raios-X comprovaram que a lâmina dourada da tumba do jovem faraó foi esculpida a partir de um meteorito metálico antes da Idade do Ferro.",
    "image": "images/artigo-adaga-tutancamon.jpg",
    "link": "artigos/adaga-tutancamon-meteorito.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "lugares-incriveis",
    "title": "5 Lugares Mais Surpreendentes e Misteriosos da Terra",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "6 min de leitura",
    "description": "De cavernas de cristais gigantes a rios em ebulição natural: formações que parecem cenários de ficção científica.",
    "image": "images/artigo-mundo.jpg",
    "link": "artigos/lugares-incriveis.html",
    "featured": false,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "porta-do-inferno-darvaza",
    "title": "A Porta do Inferno: A Cratera de Darvaza que Queima Há Mais de 50 Anos",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "⚡ 3 min de leitura",
    "description": "No deserto do Turcomenistão, uma perfuração soviética falha deu origem a uma cratera em chamas perpétuas visível a quilômetros no escuro.",
    "image": "images/artigo-darvaza.jpg",
    "link": "artigos/porta-do-inferno-darvaza.html",
    "featured": false,
    "recent": true,
    "popular": true,
    "quickFact": true
  },
  {
    "id": "ponto-nemo-lugar-solitario",
    "title": "Ponto Nemo: O Ponto Mais Inacessível e Solitário do Planeta Terra",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "4 min de leitura",
    "description": "O local no oceano onde os seres humanos mais próximos são astronautas na órbita terrestre, transformado em cemitério oficial de naves espaciais.",
    "image": "images/artigo-ponto-nemo.jpg",
    "link": "artigos/ponto-nemo-lugar-solitario.html",
    "featured": true,
    "recent": false,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "lago-natron-petrificador",
    "title": "Lago Natron: As Águas Extremas que Transformam Animais em Estátuas",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "4 min de leitura",
    "description": "Com pH próximo ao da amônia e temperaturas que chegam a 60°C, este lago tanzaniano calcifica corpos com perfeição assustadora.",
    "image": "images/artigo-lago-natron.jpg",
    "link": "artigos/lago-natron-petrificador.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  },
  {
    "id": "floresta-arvores-tortas-polonia",
    "title": "A Floresta Torta de Gryfino: O Enigma dos 400 Pinheiros Curvados na Polônia",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "4 min de leitura",
    "description": "Quatrocentos pinheiros crescem com uma curva idêntica de 90 graus na base sem que a ciência ou a história tenham chegado a um consenso.",
    "image": "images/artigo-floresta-torta.jpg",
    "link": "artigos/floresta-arvores-tortas-polonia.html",
    "featured": false,
    "recent": true,
    "popular": false,
    "quickFact": false
  }
];

// Fatos rápidos para o "Você Sabia?" e "Curiosidade Aleatória" (Restritos às 5 categorias oficiais)
const curiosities = [
  {
    "category": "Animais",
    "icon": "🐬",
    "fact": "Golfinhos dormem desligando apenas um lado do cérebro por vez: enquanto um hemisfério descansa, o olho oposto vigia predadores e o corpo continua subindo à tona para respirar.",
    "articleLink": "artigos/como-golfinhos-dormem-sono-uni-hemisferico.html"
  },
  {
    "category": "Ciência",
    "icon": "🕳️",
    "fact": "Ao cair em um buraco negro, a diferença extrema de gravidade entre seus pés e sua cabeça esticaria seu corpo em um filamento contínuo de átomos no processo chamado espaguetificação.",
    "articleLink": "artigos/o-que-acontece-ao-cair-buraco-negro-espaguetificacao.html"
  },
  {
    "category": "Tecnologia",
    "icon": "⚛️",
    "fact": "O processador de um computador quântico opera a 15 millikelvin (-273,135°C), uma temperatura centenas de vezes mais fria do que o vácuo gelado do espaço interestelar.",
    "articleLink": "artigos/computador-quantico-como-funciona-qubits-criptografia.html"
  },
  {
    "category": "História",
    "icon": "🏔️",
    "fact": "Cientistas suíços resolveram o mistério de 60 anos do Incidente da Passagem Dyatlov usando modelos de física da neve adaptados do filme de animação Frozen da Disney.",
    "articleLink": "artigos/incidente-passagem-dyatlov-misterio-resolvido.html"
  },
  {
    "category": "Mundo",
    "icon": "🐍",
    "fact": "Isolada há 11 mil anos no litoral de São Paulo, a jararaca-ilhoa da Ilha da Queimada Grande desenvolveu um veneno até 5 vezes mais letal para paralisar aves no ar antes que caiam no mar.",
    "articleLink": "artigos/ilha-das-cobras-queimada-grande-perigosa-brasil.html"
  },
  {
    "category": "Animais",
    "icon": "🐙",
    "fact": "Polvos têm três corações e sangue azul à base de cobre. Quando nadam em alta velocidade, dois dos seus corações simplesmente param de bater para poupar energia.",
    "articleLink": "artigos/polvo-tres-coracoes.html"
  },
  {
    "category": "Animais",
    "icon": "🦅",
    "fact": "Corvos reconhecem rostos humanos individuais e guardam rancor por até 5 anos, ensinando seus filhotes e a colônia a atacarem quem os prejudicou.",
    "articleLink": "artigos/corvos-inteligencia.html"
  },
  {
    "category": "Animais",
    "icon": "🦐",
    "fact": "O golpe do camarão-mantis atinge a aceleração de uma bala de revólver e gera tanto calor que a água marinha ao redor ferve momentaneamente.",
    "articleLink": "artigos/camarao-mantis-soco.html"
  },
  {
    "category": "Animais",
    "icon": "🌊",
    "fact": "A água-viva Turritopsis dohrnii é biologicamente imortal: quando fica doente ou idosa, reverte suas células e volta a ser um filhote para recomeçar o ciclo da vida.",
    "articleLink": "artigos/animal-imortal-agua-viva.html"
  },
  {
    "category": "Ciência",
    "icon": "🌋",
    "fact": "A erupção do vulcão Krakatoa em 1883 gerou o som mais alto da história da humanidade: sua onda de choque percorreu o planeta Terra 4 vezes completas.",
    "articleLink": "artigos/som-mais-alto-krakatoa.html"
  },
  {
    "category": "Ciência",
    "icon": "⏱️",
    "fact": "Por causa da dilatação temporal de Einstein, o tempo passa ligeiramente mais rápido no topo de uma montanha do que na praia ao nível do mar.",
    "articleLink": "artigos/tempo-topo-montanha.html"
  },
  {
    "category": "Ciência",
    "icon": "🧊",
    "fact": "Nos núcleos de Urano e Netuno existe 'gelo quente': água superiônica comprimida a milhões de atmosferas que congela mesmo a milhares de graus Celsius.",
    "articleLink": "artigos/gelo-quente-estados-materia.html"
  },
  {
    "category": "Tecnologia",
    "icon": "🌐",
    "fact": "Quase 99% de todas as comunicações mundiais da internet viajam por mais de 1,4 milhão de km de cabos de fibra óptica depositados no fundo dos oceanos.",
    "articleLink": "artigos/internet-funciona.html"
  },
  {
    "category": "Tecnologia",
    "icon": "🚨",
    "fact": "Em 1983, o oficial soviético Stanislav Petrov salvou o mundo de uma guerra nuclear ao desconfiar de um alarme de satélite que na verdade era apenas reflexo do Sol em nuvens.",
    "articleLink": "artigos/bug-guerra-nuclear-1983.html"
  },
  {
    "category": "Tecnologia",
    "icon": "🔑",
    "fact": "A autoridade raiz do DNS mundial é protegida por 14 guardiões internacionais que guardam chaves físicas de metal em cofres biométricos subterrâneos.",
    "articleLink": "artigos/sete-chaves-internet.html"
  },
  {
    "category": "Tecnologia",
    "icon": "⚙️",
    "fact": "O Mecanismo de Anticítera, construído na Grécia Antiga há mais de 2.000 anos, usava mais de 30 engrenagens de bronze para calcular órbitas planetárias e eclipses.",
    "articleLink": "artigos/mecanismo-anticitera-computador.html"
  },
  {
    "category": "História",
    "icon": "🛡️",
    "fact": "Em 1932, a Austrália mobilizou soldados com metralhadoras contra 20 mil emus e perdeu a batalha após as aves adotarem táticas de fuga em velocidade.",
    "articleLink": "artigos/guerra-dos-emus.html"
  },
  {
    "category": "História",
    "icon": "🗡️",
    "fact": "A adaga cerimonial de Tutancâmon foi esculpida a partir de um meteorito metálico vindo do espaço séculos antes da humanidade dominar a fundição de ferro.",
    "articleLink": "artigos/adaga-tutancamon-meteorito.html"
  },
  {
    "category": "História",
    "icon": "🔥",
    "fact": "O fogo grego, arma naval secreta que salvou Bizâncio por 500 anos, queimava sobre a água do mar e sua fórmula química foi guardada tão bem que se perdeu para sempre.",
    "articleLink": "artigos/fogo-grego-arma-secreta.html"
  },
  {
    "category": "Mundo",
    "icon": "🔥",
    "fact": "A Cratera de Darvaza ('A Porta do Inferno'), no Turcomenistão, queima continuamente no deserto há mais de 50 anos alimentada por gás metano natural.",
    "articleLink": "artigos/porta-do-inferno-darvaza.html"
  },
  {
    "category": "Mundo",
    "icon": "🌊",
    "fact": "No Ponto Nemo, o local mais isolado da Terra, os humanos mais próximos não estão em terra firme, mas sim a bordo da Estação Espacial Internacional a 400 km de altura.",
    "articleLink": "artigos/ponto-nemo-lugar-solitario.html"
  },
  {
    "category": "Mundo",
    "icon": "🧂",
    "fact": "O Lago Natron na Tanzânia tem águas com pH tão alcalino que calcifica e mumifica animais que caem nele como estátuas perfeitas de sal.",
    "articleLink": "artigos/lago-natron-petrificador.html"
  },
  {
    "category": "Mundo",
    "icon": "🌲",
    "fact": "Na Floresta Torta de Gryfino, 400 pinheiros crescem com uma curva idêntica de 90 graus na base apontando para o norte desde a década de 1930.",
    "articleLink": "artigos/floresta-arvores-tortas-polonia.html"
  }
];

// Card Templates
const createFeatureCard = (article) => `
  <article class="feature-card searchable" data-category="${article.categorySlug}" style="--image: url('${article.image}')" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <div class="card-content">
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p class="card-meta"><span>●</span>${article.readingTime}</p>
    </div>
  </article>`;

const createRecentCard = (article) => `
  <article class="recent-card searchable" data-category="${article.categorySlug}" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <img src="${article.image}" alt="Imagem ilustrativa para: ${article.title}" loading="lazy" />
    <div>
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p>${article.description}</p>
    </div>
    <a class="arrow-link" href="${article.link}" aria-label="Ler ${article.title}">→</a>
  </article>`;

const createPopularCard = (article, index) => `
  <article class="popular-card searchable" data-category="${article.categorySlug}" data-search="${article.title} ${article.category} ${article.description}" onclick="location.href='${article.link}'" style="cursor:pointer">
    <span class="popular-number">0${index + 1}</span>
    <div>
      <span class="tag">${article.category}</span>
      <h3><a href="${article.link}">${article.title}</a></h3>
      <p>${article.readingTime}</p>
    </div>
  </article>`;

// Inicialização de Grids na Home
const featuredGrid = document.querySelector('#featured-grid');

function renderHomeFeatured(category = 'all') {
  if (!featuredGrid) return;
  let items;
  if (category === 'all') {
    // 8 artigos selecionados na visualização Todas
    items = articles.slice(0, 8);
  } else {
    // Limita aos 5 artigos da categoria no index mantendo a home leve e objetiva
    items = articles.filter((a) => a.categorySlug === category).slice(0, 5);
  }
  featuredGrid.innerHTML = items.map(createFeatureCard).join('');
}

if (featuredGrid) {
  renderHomeFeatured('all');
}

const recentList = document.querySelector('#recent-list');
if (recentList) {
  recentList.innerHTML = articles.filter((a) => a.recent).map(createRecentCard).join('');
}

const popularGrid = document.querySelector('#popular-grid');
if (popularGrid) {
  popularGrid.innerHTML = articles.filter((a) => a.popular).map(createPopularCard).join('');
}

// Ano do rodapé
const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// =========================================================
// ALTERNÂNCIA DE TEMA CLARO / ESCURO (SELETOR VISUAL PÍLULA)
// =========================================================
const root = document.documentElement;
const savedTheme = localStorage.getItem('ci-theme');

function applyTheme(themeName) {
  if (themeName === 'light') {
    root.dataset.theme = 'light';
    localStorage.setItem('ci-theme', 'light');
  } else {
    delete root.dataset.theme;
    localStorage.setItem('ci-theme', 'dark');
  }
  updateThemeUI();
}

function updateThemeUI() {
  const isLight = root.dataset.theme === 'light';

  // Atualiza controles no formato de pílula
  document.querySelectorAll('.theme-switch').forEach((sw) => {
    const lightBtn = sw.querySelector('[data-theme-choice="light"]');
    const darkBtn = sw.querySelector('[data-theme-choice="dark"]');
    if (lightBtn) lightBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    if (darkBtn) darkBtn.setAttribute('aria-pressed', isLight ? 'false' : 'true');
  });

  // Atualiza botões legados caso existam
  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
  });
}

// Aplica tema salvo logo na inicialização
if (savedTheme === 'light') {
  root.dataset.theme = 'light';
}
updateThemeUI();

// Eventos e delegação para cliques no seletor de tema
document.addEventListener('click', (e) => {
  const choiceBtn = e.target.closest('.theme-switch-btn');
  if (choiceBtn) {
    e.preventDefault();
    const choice = choiceBtn.dataset.themeChoice;
    applyTheme(choice);
    return;
  }

  // Se o usuário clicar na área da pílula fora dos botões, alterna entre os dois
  const switchBox = e.target.closest('.theme-switch');
  if (switchBox && !choiceBtn) {
    e.preventDefault();
    const currentIsLight = root.dataset.theme === 'light';
    applyTheme(currentIsLight ? 'dark' : 'light');
    return;
  }

  // Compatibilidade com botões legados
  const legacyToggle = e.target.closest('.theme-toggle');
  if (legacyToggle) {
    e.preventDefault();
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    return;
  }
});

// =========================================================
// TICKER DINÂMICO "VOCÊ SABIA?" (COM TOOLTIP DESKTOP E BOTTOM SHEET MOBILE)
// =========================================================
const tickerBar = document.querySelector('.ticker-bar');
const tickerContent = document.querySelector('#ticker-content');
const tickerNext = document.querySelector('#ticker-next');
let currentTickerIndex = 0;

// Elementos interativos dinâmicos (Tooltip no desktop e Bottom Sheet no mobile)
let tickerTooltipEl = null;
let tickerSheetOverlay = null;

if (tickerBar) {
  // Cria Tooltip Desktop
  tickerTooltipEl = document.createElement('div');
  tickerTooltipEl.className = 'ticker-tooltip';
  tickerTooltipEl.setAttribute('role', 'tooltip');
  tickerBar.appendChild(tickerTooltipEl);

  // Cria Bottom Sheet Mobile
  tickerSheetOverlay = document.createElement('div');
  tickerSheetOverlay.className = 'ticker-sheet-overlay';
  tickerSheetOverlay.innerHTML = `
    <div class="ticker-bottom-sheet" role="dialog" aria-modal="true">
      <div class="ticker-sheet-handle"></div>
      <div class="ticker-sheet-header">
        <span class="ticker-sheet-badge" id="sheet-category">💡 VOCÊ SABIA?</span>
        <button type="button" class="ticker-sheet-close" id="sheet-close" aria-label="Fechar">✕</button>
      </div>
      <div class="ticker-sheet-text" id="sheet-text"></div>
      <div class="ticker-sheet-action">
        <a class="button button-primary" id="sheet-link" href="#">Ler matéria completa →</a>
      </div>
    </div>
  `;
  document.body.appendChild(tickerSheetOverlay);

  // Fecha Bottom Sheet ao clicar no fundo ou no botão fechar
  tickerSheetOverlay.addEventListener('click', (e) => {
    if (e.target === tickerSheetOverlay || e.target.closest('#sheet-close')) {
      tickerSheetOverlay.classList.remove('is-open');
    }
  });
}

function updateTickerFullView(item) {
  if (tickerTooltipEl) {
    tickerTooltipEl.innerHTML = `
      <div class="ticker-tooltip-header">
        <span>${item.icon} ${item.category} • Fato Completo</span>
        <span>💡 Toque ou clique</span>
      </div>
      <div class="ticker-tooltip-body">${item.fact}</div>
      <a class="ticker-tooltip-link" href="${item.articleLink}">Ler artigo sobre ${item.category} →</a>
    `;
  }

  if (tickerSheetOverlay) {
    const sheetCat = tickerSheetOverlay.querySelector('#sheet-category');
    const sheetText = tickerSheetOverlay.querySelector('#sheet-text');
    const sheetLink = tickerSheetOverlay.querySelector('#sheet-link');
    if (sheetCat) sheetCat.innerHTML = `${item.icon} ${item.category} • Você Sabia?`;
    if (sheetText) sheetText.textContent = item.fact;
    if (sheetLink) sheetLink.href = item.articleLink;
  }
}

function showTickerFact(index) {
  if (!tickerContent) return;
  const item = curiosities[index % curiosities.length];
  tickerContent.style.opacity = '0';
  setTimeout(() => {
    tickerContent.innerHTML = `<span>${item.icon} <strong>${item.category}:</strong> ${item.fact}</span>`;
    tickerContent.setAttribute('title', 'Clique para ver o fato completo');
    tickerContent.style.opacity = '1';
    updateTickerFullView(item);
  }, 200);
}

if (tickerContent) {
  showTickerFact(0);
  setInterval(() => {
    currentTickerIndex = (currentTickerIndex + 1) % curiosities.length;
    showTickerFact(currentTickerIndex);
  }, 9000);

  // Desktop Hover: abre e fecha tooltip
  tickerContent.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768 && tickerTooltipEl) {
      tickerTooltipEl.classList.add('is-active');
    }
  });

  tickerBar?.addEventListener('mouseleave', () => {
    if (tickerTooltipEl) {
      tickerTooltipEl.classList.remove('is-active');
    }
  });

  // Mobile / Click: abre folha rápida no rodapé
  tickerContent.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      tickerSheetOverlay?.classList.add('is-open');
    } else {
      // No desktop, clique também alterna o tooltip
      tickerTooltipEl?.classList.toggle('is-active');
    }
  });
}

if (tickerNext) {
  tickerNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentTickerIndex = (currentTickerIndex + 1) % curiosities.length;
    showTickerFact(currentTickerIndex);
  });
}

// =========================================================
// CARD INTERATIVO: CURIOSIDADE ALEATÓRIA (SURPREENDA-ME)
// =========================================================
const surpriseBadge = document.querySelector('#surprise-badge');
const surpriseFact = document.querySelector('#surprise-fact');
const surpriseLink = document.querySelector('#surprise-link');
const surpriseBtn = document.querySelector('#surprise-btn');

let lastSurpriseIndex = -1;

function rollRandomFact() {
  if (!surpriseFact) return;
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * curiosities.length);
  } while (newIndex === lastSurpriseIndex && curiosities.length > 1);
  lastSurpriseIndex = newIndex;

  const item = curiosities[newIndex];
  surpriseFact.style.opacity = '0';
  surpriseFact.style.transform = 'translateY(4px)';

  setTimeout(() => {
    if (surpriseBadge) {
      surpriseBadge.innerHTML = `${item.icon} ${item.category}`;
    }
    surpriseFact.textContent = `"${item.fact}"`;
    if (surpriseLink) {
      surpriseLink.href = item.articleLink;
      surpriseLink.textContent = `Explorar artigo em ${item.category} →`;
    }
    surpriseFact.style.opacity = '1';
    surpriseFact.style.transform = 'translateY(0)';
  }, 200);
}

if (surpriseBtn) {
  surpriseBtn.addEventListener('click', rollRandomFact);
  rollRandomFact();
}

// Botões "🎲 Curiosidade" na barra de navegação levam até a caixa de surpresa
document.querySelectorAll('.nav-surprise-btn, .drawer-surprise-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const box = document.querySelector('#curiosidade-aleatoria');
    if (box) {
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      rollRandomFact();
      closeMobileDrawer();
    }
  });
});

// =========================================================
// FILTRO RÁPIDO DE CATEGORIAS NA HOME
// =========================================================
const homeFilterPills = document.querySelectorAll('.home-filters .filter-pill');
if (homeFilterPills.length > 0 && featuredGrid) {
  homeFilterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      homeFilterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const selected = pill.dataset.category || 'all';
      renderHomeFeatured(selected);
    });
  });
}

// =========================================================
// MENU MOBILE GAVETA (DRAWER)
// =========================================================
const menuToggle = document.querySelector('.menu-toggle') || document.querySelector('.menu-button');
const mobileDrawer = document.querySelector('#mobile-drawer');
const drawerOverlay = document.querySelector('#drawer-overlay');
const drawerClose = document.querySelector('#drawer-close');

function openMobileDrawer() {
  if (mobileDrawer && drawerOverlay) {
    mobileDrawer.classList.add('is-open');
    drawerOverlay.classList.add('is-open');
    document.body.classList.add('drawer-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  }
}

function closeMobileDrawer() {
  if (mobileDrawer && drawerOverlay) {
    mobileDrawer.classList.remove('is-open');
    drawerOverlay.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', openMobileDrawer);
}
if (drawerClose) {
  drawerClose.addEventListener('click', closeMobileDrawer);
}
if (drawerOverlay) {
  drawerOverlay.addEventListener('click', closeMobileDrawer);
}
if (mobileDrawer) {
  mobileDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileDrawer);
  });
}

// =========================================================
// DROPDOWN DESKTOP DE CATEGORIAS
// =========================================================
const navDropdown = document.querySelector('.nav-dropdown');
if (navDropdown) {
  const trigger = navDropdown.querySelector('.nav-dropdown-trigger');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      navDropdown.classList.toggle('is-active');
    });
  }
  document.addEventListener('click', () => {
    navDropdown.classList.remove('is-active');
  });
}

// =========================================================
// ELEMENTO DE EXPLORAÇÃO NA NAVBAR (ESTRELA & DROPDOWN - OPÇÃO 1)
// =========================================================
const navExploreTrigger = document.querySelector('#nav-explore-trigger');
const navExploreMenu = document.querySelector('#nav-explore-menu');

function closeNavExplore() {
  if (navExploreMenu) {
    navExploreMenu.classList.remove('is-open');
  }
  if (navExploreTrigger) {
    navExploreTrigger.classList.remove('is-active');
    navExploreTrigger.setAttribute('aria-expanded', 'false');
  }
}

function openNavExplore() {
  if (typeof closeSearch === 'function') closeSearch();
  if (navExploreMenu) {
    navExploreMenu.classList.add('is-open');
  }
  if (navExploreTrigger) {
    navExploreTrigger.classList.add('is-active');
    navExploreTrigger.setAttribute('aria-expanded', 'true');
  }
}

if (navExploreTrigger && navExploreMenu) {
  navExploreTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navExploreMenu.classList.contains('is-open');
    if (isOpen) {
      closeNavExplore();
    } else {
      openNavExplore();
    }
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-explore-wrapper')) {
      closeNavExplore();
    }
  });

  // Fecha com a tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNavExplore();
    }
  });

  // Rolagem suave e navegação fluida ao clicar nas opções
  navExploreMenu.querySelectorAll('.nav-explore-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href') || '';
      const hashIndex = href.indexOf('#');
      if (hashIndex !== -1) {
        const hash = href.slice(hashIndex);
        const isHomePage = window.location.pathname === '/' ||
                           window.location.pathname.endsWith('/index.html') ||
                           (!window.location.pathname.includes('/artigos') && !window.location.pathname.endsWith('.html'));
        if (isHomePage) {
          const target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            closeNavExplore();
            target.scrollIntoView({ behavior: 'smooth' });
            if (window.history && window.history.pushState) {
              window.history.pushState(null, null, hash);
            }
            return;
          }
        }
      }
      closeNavExplore();
    });
  });
}

// =========================================================
// =========================================================
// =========================================================
// PAINEL DE PESQUISA RÁPIDA UNIFICADA (ARTIGOS + NOTÍCIAS)
// =========================================================
const CI_OFFICIAL_NEWS_CATALOG = [
  {
    "id": "caes-grandes-envelhecimento-molecular-dna",
    "slug": "caes-grandes-envelhecimento-molecular-dna",
    "title": "Estudo encontra pistas no DNA para explicar por que cães grandes envelhecem mais rápido",
    "summary": "Uma análise de amostras de 894 cães encontrou sinais de envelhecimento molecular acelerado nos animais maiores. O resultado ajuda a investigar a diferença de longevidade entre portes, mas não explica sozinho todos os fatores envolvidos.",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-caes-grandes-envelhecimento-molecular-dna.jpg",
    "link": "noticias/caes-grandes-envelhecimento-molecular-dna.html"
  },
  {
    "id": "tecnologia-registra-historia-celulas-dna-embriao",
    "slug": "tecnologia-registra-historia-celulas-dna-embriao",
    "title": "Tecnologia registra no DNA a história das células durante o desenvolvimento de um embrião",
    "summary": "Uma técnica chamada DNA Typewriter registrou a linhagem de células durante o desenvolvimento de um embrião de camundongo, ajudando pesquisadores a reconstruir como diferentes tecidos se formam ao longo do tempo.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-dna-typewriter-linhagem-celular.jpg",
    "link": "noticias/tecnologia-registra-historia-celulas-dna-embriao.html"
  },
  {
    "id": "rover-perseverance-recorde-distancia-marte",
    "slug": "rover-perseverance-recorde-distancia-marte",
    "title": "Rover da NASA bate recorde ao percorrer mais de 45 quilômetros em Marte",
    "summary": "O Perseverance percorreu 45,22 quilômetros na superfície marciana e superou o recorde anterior do rover Opportunity. A navegação autônoma ajudou o veículo a atravessar terrenos difíceis sem depender de comandos detalhados a cada movimento.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-rover-perseverance-recorde-distancia-marte.jpg",
    "link": "noticias/rover-perseverance-recorde-distancia-marte.html"
  },
  {
    "id": "microsoft-chip-maia-300-ia",
    "slug": "microsoft-chip-maia-300-ia",
    "title": "Microsoft apresenta o chip de IA Maia 300 e planeja expansão em escala para 2027",
    "summary": "O Maia 300 foi projetado para executar tarefas pesadas de inteligência artificial e auxiliar a Microsoft a ampliar sua eficiência em data centers.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-microsoft-chip-maia-300-ia.jpg",
    "link": "noticias/microsoft-chip-maia-300-ia.html"
  },
  {
    "id": "reguladores-fiscalizam-ia-bancos",
    "slug": "reguladores-fiscalizam-ia-bancos",
    "title": "Reguladores intensificam fiscalização sobre o uso de inteligência artificial no setor bancário",
    "summary": "Autoridades financeiras nos Estados Unidos e Europa investigam governança de modelos autônomos, auditoria de decisões e resposta a incidentes cibernéticos.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-reguladores-fiscalizam-ia-bancos.jpg",
    "link": "noticias/reguladores-fiscalizam-ia-bancos.html"
  },
  {
    "id": "volantis-laser-conexao-chips-ia",
    "slug": "volantis-laser-conexao-chips-ia",
    "title": "Startup capta US$ 88 milhões para acelerar conexão entre chips de IA usando luz laser",
    "summary": "A Volantis desenvolve interconexões ópticas com lasers VCSEL para conectar processadores a dezenas de chips de memória, superando gargalos elétricos tradicionais.",
    "category": "Tecnologia",
    "categorySlug": "tecnologia",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-volantis-laser-conexao-chips-ia.jpg",
    "link": "noticias/volantis-laser-conexao-chips-ia.html"
  },
  {
    "id": "gears-of-war-e-day-lancamento",
    "slug": "gears-of-war-e-day-lancamento",
    "title": "Gears of War: E-Day retorna às origens da saga e chega aos jogadores de Xbox e PC",
    "summary": "Novo capítulo revive o Dia da Emergência sob a perspectiva de Marcus Fenix e Dominic Santiago, marcando o retorno às raízes do combate tático.",
    "category": "Games",
    "categorySlug": "games",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-gears-of-war-e-day-lancamento.jpg",
    "link": "noticias/gears-of-war-e-day-lancamento.html"
  },
  {
    "id": "star-wars-galactic-racer-lancamento",
    "slug": "star-wars-galactic-racer-lancamento",
    "title": "Star Wars: Galactic Racer leva disputas de alta velocidade e podracers aos consoles e PC",
    "summary": "Aventura de corrida coloca os jogadores no circuito clandestino da Liga Galáctica, com pilotagem de speeders, landspeeders e podracers no universo Star Wars.",
    "category": "Games",
    "categorySlug": "games",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-star-wars-galactic-racer-lancamento.jpg",
    "link": "noticias/star-wars-galactic-racer-lancamento.html"
  },
  {
    "id": "castlevania-belmonts-curse-lancamento",
    "slug": "castlevania-belmonts-curse-lancamento",
    "title": "Novo Castlevania coloca Rose Belmont em uma Paris medieval tomada por monstros",
    "summary": "Belmont’s Curse traz aventura 2D de exploração desenvolvida em colaboração com os estúdios de Dead Cells para PlayStation, Xbox, Switch e PC.",
    "category": "Games",
    "categorySlug": "games",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-castlevania-belmonts-curse-lancamento.jpg",
    "link": "noticias/castlevania-belmonts-curse-lancamento.html"
  },
  {
    "id": "brasil-eleicao-segundo-turno-campanhas",
    "slug": "brasil-eleicao-segundo-turno-campanhas",
    "title": "Lula e Flávio Bolsonaro intensificam agendas em São Paulo antes do segundo turno",
    "summary": "Candidatos concentram esforços na capital paulista em busca de apoios municipais e eleitores indecisos para a votação marcada para 25 de outubro.",
    "category": "Política",
    "categorySlug": "politica",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-brasil-eleicao-segundo-turno-campanhas.jpg",
    "link": "noticias/brasil-eleicao-segundo-turno-campanhas.html"
  },
  {
    "id": "reino-unido-uniao-europeia-reaproximacao",
    "slug": "reino-unido-uniao-europeia-reaproximacao",
    "title": "Reino Unido propõe cúpula em Bruxelas para aprofundar cooperação com a União Europeia",
    "summary": "Governo britânico busca pactos práticos em comércio agroalimentar, energia e mobilidade de jovens; debates sobre interferências externas repercutem politicamente.",
    "category": "Política",
    "categorySlug": "politica",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-reino-unido-uniao-europeia-reaproximacao.jpg",
    "link": "noticias/reino-unido-uniao-europeia-reaproximacao.html"
  },
  {
    "id": "cerebro-humano-novos-neuronios-adultos",
    "slug": "cerebro-humano-novos-neuronios-adultos",
    "title": "Neurociência debate se o cérebro humano continua gerando novos neurônios na vida adulta",
    "summary": "Revisão publicada na Nature examina estudos divergentes sobre neurogênese adulta e os desafios técnicos para identificar células jovens no hipocampo maduro.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-cerebro-humano-novos-neuronios-adultos.jpg",
    "link": "noticias/cerebro-humano-novos-neuronios-adultos.html"
  },
  {
    "id": "nobel-quimica-moleculas-imagens-espelhadas",
    "slug": "nobel-quimica-moleculas-imagens-espelhadas",
    "title": "Nobel de Química premia pesquisas pioneiras sobre quiralidade e moléculas espelhadas",
    "summary": "Henri Kagan e Kenso Soai são laureados por desvendar como reações químicas podem favorecer uma entre duas formas simétricas de uma mesma molécula.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-nobel-quimica-moleculas-imagens-espelhadas.jpg",
    "link": "noticias/nobel-quimica-moleculas-imagens-espelhadas.html"
  },
  {
    "id": "nobel-fisica-neutrinos-icecube-antartida",
    "slug": "nobel-fisica-neutrinos-icecube-antartida",
    "title": "Detector no gelo da Antártida revela partículas cósmicas e rende Nobel de Física a Francis Halzen",
    "summary": "O observatório IceCube, com sensores a 2.500 metros sob a calota polar do Polo Sul, captura neutrinos de alta energia de regiões extremas do Universo.",
    "category": "Ciência",
    "categorySlug": "ciencia",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-nobel-fisica-neutrinos-icecube-antartida.jpg",
    "link": "noticias/nobel-fisica-neutrinos-icecube-antartida.html"
  },
  {
    "id": "tartaruga-jonathan-194-anos-genetica",
    "slug": "tartaruga-jonathan-194-anos-genetica",
    "title": "Tartaruga Jonathan, estimada em 194 anos, oferece pistas biológicas sobre a longevidade",
    "summary": "Sequenciamento genético do animal terrestre mais velho do mundo revela variantes em vias de reparo de DNA e proteção contra o envelhecimento celular.",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-tartaruga-jonathan-194-anos-genetica.jpg",
    "link": "noticias/tartaruga-jonathan-194-anos-genetica.html"
  },
  {
    "id": "carcacas-elefantes-ecossistema-savana",
    "slug": "carcacas-elefantes-ecossistema-savana",
    "title": "Carcaças de elefantes alteram nutrientes e vegetação da savana por quase uma década",
    "summary": "Estudo no Parque Nacional Kruger comprova que a decomposição de grandes animais cria pontos de enriquecimento de fósforo e pastagem duradoura no solo.",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-carcacas-elefantes-ecossistema-savana.jpg",
    "link": "noticias/carcacas-elefantes-ecossistema-savana.html"
  },
  {
    "id": "fossil-egito-nova-especie-crocodiliano",
    "slug": "fossil-egito-nova-especie-crocodiliano",
    "title": "Fóssil egípcio de 50 milhões de anos é reclassificado como nova espécie de crocodiliano",
    "summary": "Tomografia computadorizada do crânio encontrado perto do Cairo revela características anatômicas únicas e batiza o predador pré-histórico Herugavialis cairensis.",
    "category": "Animais",
    "categorySlug": "animais",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-fossil-egito-nova-especie-crocodiliano.jpg",
    "link": "noticias/fossil-egito-nova-especie-crocodiliano.html"
  },
  {
    "id": "expedicao-pista-aviao-amelia-earhart",
    "slug": "expedicao-pista-aviao-amelia-earhart",
    "title": "Expedição investiga possível pista sobre o avião desaparecido de Amelia Earhart no Pacífico",
    "summary": "Arqueólogos marinhos viajam ao atol de Nikumaroro para checar anomalia submersa em lagoa que pode corresponder a destroços do Lockheed Electra de 1937.",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-expedicao-pista-aviao-amelia-earhart.jpg",
    "link": "noticias/expedicao-pista-aviao-amelia-earhart.html"
  },
  {
    "id": "fmi-riscos-economia-global-ia-divida-conflitos",
    "slug": "fmi-riscos-economia-global-ia-divida-conflitos",
    "title": "FMI alerta para riscos globais ligados a eventual correção em IA, dívida e conflitos",
    "summary": "Fundo Monetário Internacional projeta crescimento global de 3,1% em 2026, mas adverte que choque em investimentos tecnológicos poderia subtrair 1,1% do PIB até 2028.",
    "category": "Mundo",
    "categorySlug": "mundo",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-fmi-riscos-economia-global-ia-divida-conflitos.jpg",
    "link": "noticias/fmi-riscos-economia-global-ia-divida-conflitos.html"
  },
  {
    "id": "cyberpunk-2077-filme-live-action-paramount",
    "slug": "cyberpunk-2077-filme-live-action-paramount",
    "title": "Filme live-action de Cyberpunk 2077 entra em desenvolvimento inicial com a Paramount",
    "summary": "Adaptação cinematográfica do universo de Night City é desenvolvida em parceria com a CD Projekt RED e o produtor Lorenzo di Bonaventura.",
    "category": "Entretenimento",
    "categorySlug": "entretenimento",
    "readingTime": "2 min de leitura",
    "image": "images/noticia-cyberpunk-2077-filme-live-action-paramount.jpg",
    "link": "noticias/cyberpunk-2077-filme-live-action-paramount.html"
  },
  {
    "id": "novidades-streaming-musica-filmes-outubro-2026",
    "slug": "novidades-streaming-musica-filmes-outubro-2026",
    "title": "Guia da semana reúne documentário sobre Norm Macdonald, Tenzing e estreias do streaming",
    "summary": "Semana traz documentário de Judd Apatow na Netflix, a biografia épica Tenzing no Apple TV, produções da Marvel e novos lançamentos musicais.",
    "category": "Entretenimento",
    "categorySlug": "entretenimento",
    "readingTime": "3 min de leitura",
    "image": "images/noticia-novidades-streaming-musica-filmes-outubro-2026.jpg",
    "link": "noticias/novidades-streaming-musica-filmes-outubro-2026.html"
  }
];

function getUnifiedSearchCatalog() {
  const items = [];
  
  // 1. Artigos Oficiais
  if (typeof articles !== 'undefined' && Array.isArray(articles)) {
    articles.forEach(a => {
      items.push({
        type: 'artigo',
        typeLabel: 'Artigo',
        typeBadgeClass: 'article',
        id: a.id,
        title: a.title,
        category: a.category,
        categorySlug: a.categorySlug || 'geral',
        description: a.description || '',
        readingTime: a.readingTime || '4 min',
        image: a.image,
        link: a.link,
        slug: a.id
      });
    });
  }

  // 2. Notícias Oficiais (usa window.CI_NEWS se disponível, senão catálogo embutido)
  const sourceNews = (window.CI_NEWS && Array.isArray(window.CI_NEWS.items) && window.CI_NEWS.items.length > 0)
    ? window.CI_NEWS.items
    : CI_OFFICIAL_NEWS_CATALOG;

  sourceNews.forEach(n => {
    items.push({
      type: 'noticia',
      typeLabel: 'Notícia',
      typeBadgeClass: 'news',
      id: n.id,
      title: n.title,
      category: n.category,
      categorySlug: n.categorySlug || 'noticias',
      description: n.summary || '',
      readingTime: n.readingTime || '3 min',
      image: n.image,
      link: n.link || `noticias/${n.slug}.html`,
      slug: n.slug
    });
  });

  return items;
}

const searchTriggers = document.querySelectorAll('.search-trigger, .icon-button[aria-label="Pesquisar"], .icon-button[title*="Pesquisar"]');
const searchPanel = document.querySelector('.search-panel');
const searchInput = document.querySelector('#search-input');
const searchClose = document.querySelector('.search-close');
const searchMessage = document.querySelector('.search-message');
const searchLiveResults = document.querySelector('#search-live-results');
const searchSuggestions = document.querySelector('#search-suggestions');

function closeSearch() {
  if (!searchPanel) return;
  searchPanel.classList.remove('is-open');
  searchPanel.setAttribute('aria-hidden', 'true');
  searchTriggers.forEach(t => t.setAttribute('aria-expanded', 'false'));
  document.body.classList.remove('search-open');
  if (searchInput) searchInput.value = '';
  if (searchLiveResults) searchLiveResults.innerHTML = '';
  if (searchSuggestions) searchSuggestions.style.display = '';
  if (searchMessage) searchMessage.textContent = 'Pesquise entre artigos e notícias ou escolha um tema sugerido acima.';
  document.querySelectorAll('.searchable').forEach((item) => (item.hidden = false));
}

function executeLiveSearch(query) {
  const term = query.trim().toLowerCase();
  if (!term) {
    if (searchLiveResults) searchLiveResults.innerHTML = '';
    if (searchSuggestions) searchSuggestions.style.display = '';
    if (searchMessage) searchMessage.textContent = 'Pesquise entre artigos e notícias ou escolha um tema sugerido acima.';
    return;
  }

  if (searchSuggestions) searchSuggestions.style.display = 'none';

  const allItems = getUnifiedSearchCatalog();

  // Busca em título, categoria, descrição/resumo e tipo (ex: 'noticia' ou 'artigo')
  const matches = allItems.filter((item) =>
    `${item.title} ${item.category} ${item.description} ${item.typeLabel}`.toLowerCase().includes(term)
  );

  const isInNoticiasDir = window.location.pathname.includes('/noticias/');

  if (searchMessage) {
    searchMessage.textContent = matches.length > 0
      ? `${matches.length} resultado(s) encontrado(s) entre artigos e notícias:`
      : `Nenhum resultado encontrado para "${query}". Tente termos como 'inteligência artificial', 'polvo', 'games' ou 'ciência'.`;
  }

  if (searchLiveResults) {
    if (matches.length > 0) {
      searchLiveResults.innerHTML = matches.slice(0, 8).map((item) => {
        let finalLink = item.link;
        let finalImg = item.image;

        if (isInNoticiasDir) {
          if (item.type === 'noticia') {
            finalLink = `${item.slug}.html`;
          } else {
            finalLink = item.link.startsWith('../') ? item.link : `../${item.link}`;
          }
          finalImg = finalImg.startsWith('../') ? finalImg : `../${finalImg}`;
        }

        const badgeIcon = item.type === 'noticia' ? '📰' : '📖';

        return `
          <a class="search-result-card" href="${finalLink}">
            <img src="${finalImg}" alt="${item.title}" loading="lazy" />
            <div class="search-result-info">
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 2px;">
                <span class="search-badge ${item.typeBadgeClass}">${badgeIcon} ${item.typeLabel}</span>
                <span class="search-result-category">${item.category} • ${item.readingTime}</span>
              </div>
              <div class="search-result-title">${item.title}</div>
            </div>
            <span class="search-result-arrow">→</span>
          </a>
        `;
      }).join('');
    } else {
      searchLiveResults.innerHTML = '';
    }
  }
}

// Vincula todos os botões de pesquisa (desktop e mobile)
if (searchTriggers.length > 0 && searchPanel) {
  searchTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof closeNavExplore === 'function') closeNavExplore();
      searchPanel.classList.add('is-open');
      searchPanel.setAttribute('aria-hidden', 'false');
      trigger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('search-open');
      if (searchInput) {
        searchInput.focus();
        if (!searchInput.value.trim() && searchLiveResults) searchLiveResults.innerHTML = '';
      }
    });
  });
}

if (searchClose) {
  searchClose.addEventListener('click', closeSearch);
}

// Chips de recomendação e busca rápida
document.querySelectorAll('.search-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const q = chip.dataset.query || chip.textContent.replace(/^[^\w]+/, '').trim();
    if (searchInput) {
      searchInput.value = q;
      searchInput.focus();
      executeLiveSearch(q);
    }
  });
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    executeLiveSearch(searchInput.value);
  });
}

// Fecha ao clicar fora da caixa de busca
if (searchPanel) {
  searchPanel.addEventListener('click', (e) => {
    if (e.target === searchPanel) {
      closeSearch();
    }
  });
}

// Fecha ao apertar a tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchPanel && searchPanel.classList.contains('is-open')) {
    closeSearch();
  }
});

// Modais de Rodapé (Contato e Privacidade)
const contactBtn = document.querySelector('#footer-contact-btn');
const privacyBtn = document.querySelector('#footer-privacy-btn');
const contactModal = document.querySelector('#contact-modal');
const privacyModal = document.querySelector('#privacy-modal');

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

if (contactBtn && contactModal) {
  contactBtn.addEventListener('click', () => openModal(contactModal));
}
if (privacyBtn && privacyModal) {
  privacyBtn.addEventListener('click', () => openModal(privacyModal));
}

document.querySelectorAll('[data-close-modal]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.closeModal;
    const modal = document.getElementById(targetId);
    closeModal(modal);
  });
});

document.querySelectorAll('.modal-overlay').forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal(overlay);
    }
  });
});

// Copiar e-mail no modal de contato com 1 clique
const copyEmailBtn = document.querySelector('#copy-email-action');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('contatocuriosidadesincriveis6@gmail.com').then(() => {
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = 'Copiado! ✓';
      copyEmailBtn.style.background = '#4ade80';
      copyEmailBtn.style.color = '#0b1020';
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.style.background = '';
        copyEmailBtn.style.color = '';
      }, 2500);
    });
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeSearch();
    closeMobileDrawer();
    closeModal(contactModal);
    closeModal(privacyModal);
  }
});

// =========================================================
// BARRA DE PROGRESSO DE LEITURA (READING PROGRESS BAR)
// =========================================================
(function initReadingProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';
  progressBar.id = 'reading-progress-bar';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
})();

// =========================================================
// CÁPSULA LATERAL FLUTUANTE DE REDES SOCIAIS & BOTÃO VOLTAR AO TOPO
// =========================================================
(function initFloatingInteractions() {
  const path = window.location.pathname;
  const isHome = path === '/' || path.endsWith('/index.html') || (!path.includes('artigos') && !path.includes('.html'));

  // 1. Botão Voltar ao Topo: criado exclusivamente em páginas de catálogo e artigos (nunca no index.html)
  let scrollTopBtn = null;
  if (!isHome) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.id = 'scroll-top-btn';
    scrollTopBtn.setAttribute('type', 'button');
    scrollTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    scrollTopBtn.setAttribute('title', 'Voltar ao início da página');
    scrollTopBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>`;
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Cápsula Lateral Flutuante de Redes Sociais
  const pill = document.createElement('div');
  pill.className = 'floating-social-pill';
  pill.id = 'floating-social-pill';
  pill.setAttribute('aria-label', 'Redes sociais oficiais');

  pill.innerHTML = `
    <span class="floating-social-badge">SEGUIR</span>
    <div class="floating-social-links">
      <div class="floating-social-item">
        <a class="floating-social-btn" href="https://www.facebook.com/people/Curiosidades-Incr%C3%ADveis/61591860702460/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" aria-label="Facebook Oficial">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <span class="floating-social-tooltip">Facebook</span>
      </div>
      <div class="floating-social-item">
        <a class="floating-social-btn" href="https://www.instagram.com/curiosidades.incriveis6" target="_blank" rel="noopener noreferrer" aria-label="Instagram Oficial">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <span class="floating-social-tooltip">Instagram</span>
      </div>
    </div>
  `;
  document.body.appendChild(pill);

  // 3. Sincronização de Visibilidade ao Rolar
  let areElementsVisible = false;
  function updateFloatingVisibility() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const threshold = totalHeight > 0 ? Math.max(totalHeight * 0.3, 450) : 450;

    if (scrollPos > threshold) {
      if (!areElementsVisible) {
        pill.classList.add('is-visible');
        if (scrollTopBtn) scrollTopBtn.classList.add('is-visible');
        areElementsVisible = true;
      }
    } else {
      if (areElementsVisible) {
        pill.classList.remove('is-visible');
        if (scrollTopBtn) scrollTopBtn.classList.remove('is-visible');
        areElementsVisible = false;
      }
    }
  }

  window.addEventListener('scroll', updateFloatingVisibility, { passive: true });
  window.addEventListener('touchmove', updateFloatingVisibility, { passive: true });
  document.addEventListener('scroll', updateFloatingVisibility, { passive: true });
  updateFloatingVisibility();
})();

// =========================================================
// FILTRO DINÂMICO DE CATEGORIAS EM ARTIGOS.HTML
// =========================================================
function filterArticlesPage(catSlug) {
  const cards = document.querySelectorAll('.articles-grid .article-card, .featured-article');
  const pills = document.querySelectorAll('.category-bar .category-pill');

  pills.forEach((p) => {
    const href = p.getAttribute('href') || '';
    if ((!catSlug && (href.endsWith('artigos.html') || href === '#')) || (catSlug && href.includes(`categoria=${catSlug}`))) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  cards.forEach((card) => {
    const cat = (card.dataset.category || card.querySelector('.card-category')?.textContent || card.querySelector('.article-category')?.textContent || '').toLowerCase();
    if (!catSlug || cat.includes(catSlug.toLowerCase())) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

const categoryPills = document.querySelectorAll('.category-bar .category-pill');
if (categoryPills.length > 0) {
  categoryPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const href = pill.getAttribute('href') || '';
      const match = href.match(/categoria=([^&]+)/);
      const catSlug = match ? match[1] : '';

      const newUrl = catSlug ? `artigos.html?categoria=${catSlug}` : 'artigos.html';
      window.history.pushState({ category: catSlug }, '', newUrl);

      filterArticlesPage(catSlug);
    });
  });

  window.addEventListener('popstate', () => {
    const urlP = new URLSearchParams(window.location.search);
    filterArticlesPage(urlP.get('categoria') || '');
  });
}

const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('categoria');
if (catParam) {
  filterArticlesPage(catParam);
}

// =========================================================
// CONTADOR AO VIVO DE COMUNIDADE (INSTAGRAM @curiosidades.incriveis6)
// =========================================================
(function initFollowerCounter() {
  const counterEl = document.getElementById('live-follower-counter');
  if (!counterEl) return;

  // Número base atual de seguidores (atualizado para 61.000!)
  const BASE_FOLLOWERS = 61000;
  
  // Variação orgânica sutil baseada no tempo do dia (simulação de pulso contínuo)
  const now = new Date();
  const dayMinutes = now.getHours() * 60 + now.getMinutes();
  const organicVariation = Math.floor(dayMinutes / 5); // ritmo de crescimento ativo
  const targetCount = BASE_FOLLOWERS + organicVariation;

  let currentCount = Math.max(0, targetCount - 80); // começa ligeiramente abaixo para a animação
  const duration = 750; // animação inicial ágil
  const startTime = performance.now();

  function formatNumber(num) {
    return '+' + num.toLocaleString('pt-BR');
  }

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutExpo(progress);

    const val = Math.floor(currentCount + (targetCount - currentCount) * easedProgress);
    counterEl.textContent = formatNumber(val);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counterEl.textContent = formatNumber(targetCount);
      // Pulso orgânico mais rápido (a cada 1.5 a 3.5 segundos) com micro-incrementos
      setupOrganicTick(targetCount);
    }
  }

  function setupOrganicTick(count) {
    let runningCount = count;
    function scheduleNext() {
      // Intervalo mais dinâmico para contabilizar mais seguidores ao passar do tempo
      const delay = Math.floor(Math.random() * (3500 - 1500)) + 1500;
      setTimeout(() => {
        const increment = Math.random() > 0.65 ? 2 : 1;
        runningCount += increment;
        if (counterEl) {
          counterEl.textContent = formatNumber(runningCount);
          // Efeito de flash suave verde ao subir
          counterEl.style.color = '#4ade80';
          setTimeout(() => {
            if (counterEl) counterEl.style.color = '#ffffff';
          }, 600);
        }
        scheduleNext();
      }, delay);
    }
    scheduleNext();
  }

  requestAnimationFrame(updateCounter);
})();

// =========================================================
// SEÇÃO "🧭 CONTINUE EXPLORANDO" NOS ARTIGOS
// =========================================================
(function initContinueExplorando() {
  const bodyContainer = document.querySelector('.article-body-container');
  if (!bodyContainer) return;

  // Evita duplicidade se a seção já estiver presente
  if (document.getElementById('continue-explorando')) return;

  const shareFooter = bodyContainer.querySelector('.article-share-footer');
  if (!shareFooter) return;

  // Identifica o slug do artigo atual a partir do pathname da URL
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const rawFile = pathParts.length > 0 ? pathParts[pathParts.length - 1] : '';
  const currentSlug = rawFile.replace(/\.html$/, '');

  // Localiza o artigo atual no acervo
  const currentArticle = typeof articles !== 'undefined'
    ? articles.find((a) => a.id === currentSlug || a.link.includes(currentSlug))
    : null;

  if (typeof articles === 'undefined' || !Array.isArray(articles)) return;

  // Pool de candidatos excluindo o artigo atual
  const candidatePool = articles.filter(
    (a) => a.id !== currentSlug && !a.link.includes(currentSlug)
  );

  let selectedRecommendations = [];

  if (currentArticle) {
    const sameCat = candidatePool.filter(
      (a) => a.categorySlug === currentArticle.categorySlug
    );
    const otherCat = candidatePool.filter(
      (a) => a.categorySlug !== currentArticle.categorySlug
    );

    // Prioriza 2 da mesma categoria e 1 de outra categoria para variedade e engajamento
    if (sameCat.length >= 2) {
      selectedRecommendations.push(sameCat[0], sameCat[1]);
      if (otherCat.length > 0) {
        selectedRecommendations.push(otherCat[0]);
      } else if (sameCat.length > 2) {
        selectedRecommendations.push(sameCat[2]);
      }
    } else if (sameCat.length === 1) {
      selectedRecommendations.push(sameCat[0]);
      if (otherCat.length >= 2) {
        selectedRecommendations.push(otherCat[0], otherCat[1]);
      } else {
        selectedRecommendations.push(...otherCat);
      }
    } else {
      selectedRecommendations.push(...otherCat.slice(0, 3));
    }
  }

  // Fallback se necessário para garantir exatamente 3 artigos
  if (selectedRecommendations.length < 3) {
    for (const item of candidatePool) {
      if (selectedRecommendations.length >= 3) break;
      if (!selectedRecommendations.includes(item)) {
        selectedRecommendations.push(item);
      }
    }
  }

  if (selectedRecommendations.length === 0) return;

  // Monta os 3 cards
  const cardsHtml = selectedRecommendations
    .map((art) => {
      const linkFilename = art.link.split('/').pop();
      const articleUrl = linkFilename;
      const imageFilename = art.image.split('/').pop();
      const imageUrl = `../images/${imageFilename}`;

      return `
        <article class="continue-card">
          <a class="continue-card-image" href="${articleUrl}" title="Ler: ${art.title}">
            <img src="${imageUrl}" alt="${art.title}" loading="lazy" />
            <span class="continue-card-badge">${art.category.toUpperCase()}</span>
          </a>
          <div class="continue-card-body">
            <div class="continue-card-meta">
              <span>${art.readingTime}</span>
              <span>•</span>
              <span>${art.category}</span>
            </div>
            <h3 class="continue-card-title">
              <a href="${articleUrl}">${art.title}</a>
            </h3>
            <p class="continue-card-excerpt">${art.description}</p>
            <a class="continue-card-link" href="${articleUrl}">
              Ler artigo <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `;
    })
    .join('');

  const section = document.createElement('section');
  section.className = 'continue-explorando-section';
  section.id = 'continue-explorando';
  section.setAttribute('aria-labelledby', 'continue-explorando-heading');

  section.innerHTML = `
    <div class="continue-explorando-header">
      <div class="continue-explorando-badge">
        <span class="badge-dot" aria-hidden="true"></span> RECOMENDADOS PARA VOCÊ
      </div>
      <h2 class="continue-explorando-title" id="continue-explorando-heading">
        🧭 Continue Explorando
      </h2>
      <p class="continue-explorando-desc">
        Mais curiosidades fascinantes selecionadas para você continuar descobrindo o extraordinário.
      </p>
    </div>
    <div class="continue-explorando-grid">
      ${cardsHtml}
    </div>
  `;

  // Insere logo acima do article-share-footer
  bodyContainer.insertBefore(section, shareFooter);
})();

// =========================================================
// ANIMAÇÃO DE REVEAL NOS CARDS (AO ENTRAR NO VIEWPORT)
// =========================================================
(function initCardRevealObserver() {
  // 1. Respeita preferência por movimento reduzido (acessibilidade)
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // 2. Garante degradação graciosa: sem IntersectionObserver, cards continuam normais
  if (!('IntersectionObserver' in window)) {
    return;
  }

  // 3. Seleciona os cards-alvo
  const cards = document.querySelectorAll(
    '.feature-card, .recent-card, .popular-card, .article-card, .news-feed-card, .news-featured-card, .continue-card'
  );
  if (!cards.length) return;

  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target); // Anima apenas UMA vez por card
      }
    });
  }, {
    rootMargin: '0px 0px -20px 0px',
    threshold: 0.05
  });

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    // Cards inicialmente visíveis no topo da página aparecem imediatamente sem atraso
    if (rect.top < windowHeight * 0.92 && rect.bottom > 0) {
      return;
    }
    // Cards abaixo da dobra recebem a classe de animação suave
    card.classList.add('card-reveal');
    observer.observe(card);
  });
})();

