import os, json

# 18 verified news data dictionary
news_list = [
    {
        "id": "microsoft-chip-maia-300-ia",
        "slug": "microsoft-chip-maia-300-ia",
        "title": "Microsoft apresenta o chip de IA Maia 300 e planeja expansão em escala para 2027",
        "category": "Tecnologia",
        "categorySlug": "tecnologia",
        "readingTime": "2 min de leitura",
        "publishedAt": "2026-10-13T10:30:00Z",
        "sourceDate": "12/10/2026",
        "summary": "O Maia 300 foi projetado para executar tarefas pesadas de inteligência artificial e auxiliar a Microsoft a ampliar sua eficiência em data centers.",
        "image": "images/noticia-microsoft-chip-maia-300-ia.jpg",
        "imageCredit": "Foto: Dualmodem Bytton / Wikimedia Commons (CC BY-SA 2.0)",
        "isFeaturedHero": False,
        "isLatest": True,
        "paragraphs": [
            "A Microsoft anunciou o Maia 300, a terceira geração de seus chips customizados voltados para o processamento de modelos avançados de inteligência artificial. Segundo apuração da agência Reuters, a companhia planeja iniciar uma implantação expressiva do hardware a partir de 2027, com metas que contemplam mais de um milhão de unidades instaladas em sua malha global de data centers ao longo dos próximos anos.",
            "Desenvolvido especificamente para cargas de trabalho de alta densidade computacional — como raciocínio lógico em múltiplas etapas, geração de código e atendimento aos serviços da plataforma Azure —, o chip adota uma arquitetura modular baseada em <em>chiplets</em>. Essa abordagem permite combinar blocos de silício fabricados em nós litográficos distintos, otimizando o equilíbrio entre consumo elétrico, custo de fabricação e taxa de transferência interna de dados.",
            "De acordo com dados divulgados pela Microsoft, o Maia 300 pode entregar até 40% mais trabalho útil por megawatt do que sistemas alimentados pelas principais GPUs comerciais de referência do mercado. Contudo, relatórios independentes salientam que esses números partem de benchmarks internos da própria empresa e que a lista completa das configurações comparadas não foi detalhada publicamente.",
            "O movimento consolida a tendência das grandes corporações de tecnologia de projetar silício proprietário para aliviar a dependência de fornecedores externos e mitigar custos astronômicos de infraestrutura. Isso não significa que a Microsoft deixará de utilizar processadores gráficos de parceiros como Nvidia e AMD, mas confere flexibilidade estratégica vital em um cenário onde a demanda por capacidade computacional segue em patamares recordes."
        ],
        "caveat": "Embora a Microsoft aponte 40% a mais de trabalho útil por megawatt, a comparação partiu de testes internos da própria companhia e ela continuará utilizando chips de outros parceiros do mercado.",
        "sources": [
            {"name": "Reuters — Microsoft Plans Huge Deployment of Its Own AI Chips", "url": "https://www.reuters.com/business/microsoft-plans-huge-deployment-its-own-ai-chips-with-an-eye-saving-costs-2026-10-12/"},
            {"name": "The Verge — Microsoft Maia 300 Chip Details and Rollout", "url": "https://www.theverge.com/news/1009465/microsoft-maia-300-chip-improvements-rollout"}
        ]
    },
    {
        "id": "reguladores-fiscalizam-ia-bancos",
        "slug": "reguladores-fiscalizam-ia-bancos",
        "title": "Reguladores intensificam fiscalização sobre o uso de inteligência artificial no setor bancário",
        "category": "Tecnologia",
        "categorySlug": "tecnologia",
        "readingTime": "2 min de leitura",
        "publishedAt": "2026-10-13T09:15:00Z",
        "sourceDate": "13/10/2026",
        "summary": "Autoridades financeiras nos Estados Unidos e Europa investigam governança de modelos autônomos, auditoria de decisões e resposta a incidentes cibernéticos.",
        "image": "images/noticia-reguladores-fiscalizam-ia-bancos.jpg",
        "imageCredit": "Foto: Federal Reserve Board / Wikimedia Commons (CC BY 2.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "Reguladores financeiros dos Estados Unidos e da União Europeia estão intensificando os questionamentos direcionados às principais instituições bancárias a respeito da integração de sistemas avançados de inteligência artificial em suas operações centrais. Segundo reportagem da Reuters, os órgãos supervisores buscam compreender com exatidão quais ferramentas estão ativas, de que maneira suas decisões são auditadas e quais salvaguardas impedem ações autônomas não autorizadas.",
            "Nos Estados Unidos, agências reguladoras como o Federal Reserve (Fed), o Office of the Comptroller of the Currency (OCC) e o Federal Deposit Insurance Corporation (FDIC) enviaram notificações solicitando detalhes sobre a adoção de modelos proprietários e de agentes autônomos em áreas sensíveis, como análise de risco de crédito e monitoramento de cibersegurança. A prioridade das autoridades é garantir rastreabilidade completa das ações e mecanismos confiáveis de interrupção imediata dos sistemas em caso de anomalias operacionais.",
            "Na Europa, os órgãos de supervisão bancária concentram sua fiscalização em planos de recuperação de desastres e testes de estresse contra vulnerabilidades digitais. A apreensão predominante é de que ferramentas autônomas de IA possam ser instrumentalizadas em ataques cibernéticos complexos ou amplificar volatilidades no mercado de capitais sem supervisão humana direta.",
            "Especialistas em regulação esclarecem que as medidas adotadas até o momento não configuram uma proibição ao avanço tecnológico nos bancos. Trata-se, na realidade, de um esforço preventivo de adequação para certificar que a velocidade de adoção da IA não ultrapasse a capacidade institucional de governança, conformidade e auditoria."
        ],
        "caveat": "O aumento da fiscalização não equivale a uma proibição do uso de IA, mas exige que bancos comprovem controle rigoroso, auditoria contínua e planos de contenção para sistemas automatizados.",
        "sources": [
            {"name": "Reuters — Banking Watchdogs Ramp Up AI Scrutiny as Stability Fears Mount", "url": "https://www.reuters.com/legal/litigation/banking-watchdogs-ramp-up-ai-scrutiny-stability-fears-mount-sources-say-2026-10-13/"}
        ]
    },
    {
        "id": "volantis-laser-conexao-chips-ia",
        "slug": "volantis-laser-conexao-chips-ia",
        "title": "Startup capta US$ 88 milhões para acelerar conexão entre chips de IA usando luz laser",
        "category": "Tecnologia",
        "categorySlug": "tecnologia",
        "readingTime": "2 min de leitura",
        "publishedAt": "2026-10-13T08:00:00Z",
        "sourceDate": "01/10/2026",
        "summary": "A Volantis desenvolve interconexões ópticas com lasers VCSEL para conectar processadores a dezenas de chips de memória, superando gargalos elétricos tradicionais.",
        "image": "images/noticia-volantis-laser-conexao-chips-ia.jpg",
        "imageCredit": "Foto: Observatório Gemini / Wikimedia Commons (CC BY 4.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "A startup de semicondutores Volantis anunciou uma rodada de captação de investimentos no valor de US$ 88 milhões com o propósito de viabilizar uma tecnologia inovadora de interconexão óptica entre aceleradores de inteligência artificial e bancos de memória. O projeto visa substituir trilhas metálicas e conexões elétricas convencionais por feixes luminosos gerados por micro-lasers.",
            "O principal obstáculo enfrentado pela computação moderna voltada a redes neurais reside na latência e no consumo térmico da transferência de dados entre o processador gráfico e as memórias de alta largura de banda (HBM). À medida que os modelos de IA crescem em parâmetros, a largura do canal de comunicação se torna o fator determinante de desempenho. A Volantis afirma que sua abordagem óptica pode permitir conectar até 220 módulos de memória em torno de uma única GPU, número muito superior aos limites físicos dos barramentos elétricos atuais.",
            "Para implementar o sistema, a empresa utiliza emissores de superfície com cavidade vertical, conhecidos tecnicamente pela sigla VCSEL. Embora componentes dessa categoria já operem rotineiramente em sensores de reconhecimento facial e telecomunicações de curta distância, sua aplicação em substratos de silício de alto desempenho para servidores ainda depende de validação em escala comercial.",
            "A meta oficial divulgada pela startup prevê a disponibilização dos primeiros chips comerciais em 2027. Até a realização de ensaios laboratoriais independentes, os patamares de desempenho declarados refletem estimativas da empresa. Caso atinja os objetivos propostos, a inovação poderá aliviar um dos maiores gargalos físicos da era da inteligência artificial."
        ],
        "caveat": "A tecnologia fotônica para IA representa um desenvolvimento promissor com meta de entrega em 2027, mas seus números de ganho dependem de comprovação em produtos finais de mercado.",
        "sources": [
            {"name": "Reuters — Volantis Raises $88 Million for Tech to Connect AI Memory Chips", "url": "https://www.reuters.com/business/volantis-raises-88-million-tech-connect-ai-memory-chips-2026-10-01/"}
        ]
    },
    {
        "id": "gears-of-war-e-day-lancamento",
        "slug": "gears-of-war-e-day-lancamento",
        "title": "Gears of War: E-Day retorna às origens da saga e chega aos jogadores de Xbox e PC",
        "category": "Games",
        "categorySlug": "games",
        "readingTime": "2 min de leitura",
        "publishedAt": "2026-10-13T11:40:00Z",
        "sourceDate": "06/10/2026",
        "summary": "Novo capítulo revive o Dia da Emergência sob a perspectiva de Marcus Fenix e Dominic Santiago, marcando o retorno às raízes do combate tático.",
        "image": "images/noticia-gears-of-war-e-day-lancamento.jpg",
        "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 4.0)",
        "isFeaturedHero": False,
        "isLatest": True,
        "paragraphs": [
            "O aguardado Gears of War: E-Day chegou ao público mundial com disponibilidade para Xbox Series X|S, Windows PC, plataforma Steam e serviço Xbox Cloud Gaming, conforme comunicado divulgado pela Xbox Wire. O lançamento marca um retorno às origens cronológicas da franquia de ficção científica da Microsoft.",
            "Em vez de dar continuidade linear aos eventos dos títulos mais recentes, a narrativa é ambientada durante o cataclísmico <em>Emergence Day</em> — o dia em que a horda subterrânea Locust rompeu as defesas do planeta Sera e desencadeou a guerra pela sobrevivência da humanidade. Os jogadores assumem o controle das versões jovens dos icônicos protagonistas Marcus Fenix e Dominic Santiago.",
            "Desenvolvido pela The Coalition, o jogo utiliza a Unreal Engine com ênfase em atmosfera de terror claustrofóbico, combate tático em cobertura e fidelidade visual refinada. O trailer de lançamento causou forte repercussão na comunidade de jogos eletrônicos ao embalar cenas de destruição com a clássica faixa 'For Whom the Bell Tolls', da banda Metallica.",
            "O retorno às raízes da saga foi recebido com entusiasmo tanto por veteranos quanto por novos jogadores, resgatando o tom visceral e sombrio que consagrou a franquia desde a década de 2000."
        ],
        "caveat": "O título já se encontra acessível em múltiplas plataformas e catálogos por assinatura, podendo apresentar variações de recursos de desempenho visual entre gerações de consoles e PCs.",
        "sources": [
            {"name": "Xbox Wire — Gears of War: E-Day Launch Trailer and Details", "url": "https://news.xbox.com/en-us/2026/10/01/gears-of-war-e-day-early-access-launch-trailer-xbox/"}
        ]
    },
    {
        "id": "star-wars-galactic-racer-lancamento",
        "slug": "star-wars-galactic-racer-lancamento",
        "title": "Star Wars: Galactic Racer leva disputas de alta velocidade e podracers aos consoles e PC",
        "category": "Games",
        "categorySlug": "games",
        "readingTime": "2 min de leitura",
        "publishedAt": "2026-10-13T09:40:00Z",
        "sourceDate": "06/10/2026",
        "summary": "Aventura de corrida coloca os jogadores no circuito clandestino da Liga Galáctica, com pilotagem de speeders, landspeeders e podracers no universo Star Wars.",
        "image": "images/noticia-star-wars-galactic-racer-lancamento.jpg",
        "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 3.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "Star Wars: Galactic Racer foi disponibilizado globalmente para PlayStation 5, Xbox Series X|S e PC, de acordo com informações confirmadas nos canais oficiais de StarWars.com e da Lucasfilm Games. A produção foca nas competições de automobilismo interestelar em alta velocidade, reunindo uma variedade de veículos tradicionais da saga, como speeders, landspeeders e os clássicos podracers.",
            "A trama acompanha a trajetória de Shade, uma piloto destemida que ingressa na chamada Liga Galáctica — um campeonato clandestino de corridas de rua marcado por rivalidades intensas, acordos sombrios do submundo e busca pessoal por redenção. A experiência equilibra uma campanha narrativa individual com modos competitivos multijogador online.",
            "Entre os cenários destacados na ambientação está o planeta desértico Jakku, onde os competidores disputam circuitos perigosos entre os escombros de naves imperiais e desfiladeiros naturais. A ênfase na física de propulsão e no controle das turbinas diferencia o título de produções anteriores focadas exclusivamente em combate de sabres de luz ou tiroteios em terceira pessoa.",
            "Atualizações contínuas com novas pistas e opções de customização mecânica estão previstas pelo estúdio ao longo das próximas semanas nos canais oficiais de suporte do jogo."
        ],
        "caveat": "A produção é focada na dinâmica de pilotagem e velocidade espacial, sem envolver a mecânica de combate tradicional de sabres de luz ou tiros em terceira pessoa.",
        "sources": [
            {"name": "StarWars.com — Star Wars: Galactic Racer Official Reveal", "url": "https://www.starwars.com/news/star-wars-galactic-racer-reveal-trailer"},
            {"name": "Site Oficial do Jogo — Galactic Racer News", "url": "https://starwarsgalacticracer.com/news/"}
        ]
    },
    {
        "id": "castlevania-belmonts-curse-lancamento",
        "slug": "castlevania-belmonts-curse-lancamento",
        "title": "Novo Castlevania coloca Rose Belmont em uma Paris medieval tomada por monstros",
        "category": "Games",
        "categorySlug": "games",
        "readingTime": "2 min de leitura",
        "publishedAt": "2026-10-13T08:50:00Z",
        "sourceDate": "13/10/2026",
        "summary": "Belmont’s Curse traz aventura 2D de exploração desenvolvida em colaboração com os estúdios de Dead Cells para PlayStation, Xbox, Switch e PC.",
        "image": "images/noticia-castlevania-belmonts-curse-lancamento.jpg",
        "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 3.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "A franquia Castlevania prepara a chegada de seu novo capítulo oficial: Castlevania: Belmont’s Curse, com lançamento agendado para 15 de outubro de 2026 para PlayStation 5, Xbox Series X|S, Nintendo Switch e PC. O anúncio foi formalizado pela Konami em colaboração direta com os estúdios Motion Twin e Evil Empire, reconhecidos mundialmente pelo desenvolvimento do aclamado jogo Dead Cells.",
            "A trama se desenrola em Paris, no ano de 1499, durante um período de trevas em que hordas demoníacas e criaturas da noite cercam a capital medieval. A história é estrelada por Rose Belmont, filha de Trevor Belmont, que empunha o lendário chicote Vampire Killer em uma jornada para erradicar as forças malignas que emanam de manifestações ligadas à maldição de Drácula.",
            "O projeto é estruturado como uma aventura de ação e exploração bidimensional (Metroidvania), combinando cenários ricamente detalhados com movimentação ágil e combate fluido. A união entre a franquia histórica da Konami e os criadores de Dead Cells gerou expressiva expectativa no ecossistema de jogos independentes e saudosistas do estilo gótico clássico.",
            "Jogadores e fãs devem acompanhar os canais oficiais da desenvolvedora para conferir os horários exatos de desbloqueio das edições digitais e eventuais atualizações de desempenho no dia do lançamento."
        ],
        "caveat": "O lançamento mundial está programado para 15 de outubro de 2026 nas lojas digitais oficiais das principais plataformas.",
        "sources": [
            {"name": "Konami — Official Announcement for Castlevania: Belmont's Curse", "url": "https://www.konami.com/games/eu/en/topics/19188/"},
            {"name": "Site Oficial do Jogo — Belmont's Curse", "url": "https://www.konami.com/games/castlevania/belmonts_curse/us/pt/"}
        ]
    },
    {
        "id": "brasil-eleicao-segundo-turno-campanhas",
        "slug": "brasil-eleicao-segundo-turno-campanhas",
        "title": "Lula e Flávio Bolsonaro intensificam agendas em São Paulo antes do segundo turno",
        "category": "Política",
        "categorySlug": "politica",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T10:10:00Z",
        "sourceDate": "11/10/2026",
        "summary": "Candidatos concentram esforços na capital paulista em busca de apoios municipais e eleitores indecisos para a votação marcada para 25 de outubro.",
        "image": "images/noticia-brasil-eleicao-segundo-turno-campanhas.jpg",
        "imageCredit": "Foto: Isac Nóbrega / Presidência da República (CC BY 2.0)",
        "isFeaturedHero": False,
        "isLatest": True,
        "paragraphs": [
            "A corrida presidencial no Brasil ingressou em sua fase decisiva com a aproximação do segundo turno eleitoral, programado para o dia 25 de outubro de 2026. No último fim de semana, as campanhas do presidente Luiz Inácio Lula da Silva e do senador Flávio Bolsonaro concentraram mobilizações de grande porte na cidade de São Paulo, o maior colégio eleitoral da federação.",
            "Segundo dados da apuração jornalística divulgados pela agência Reuters, o primeiro turno das eleições presidenciais registrou um resultado competitivo: Flávio Bolsonaro alcançou a primeira colocação com aproximadamente 47% dos votos válidos, enquanto o presidente Lula obteve cerca de 45%. Como nenhum postulante atingiu a maioria absoluta de 50% mais um voto, a definição seguiu constitucionalmente para a segunda rodada de sufrágio.",
            "Durante os atos recentes em São Paulo, o senador Flávio Bolsonaro promoveu encontros com prefeitos, vereadores e lideranças partidárias estaduais, priorizando discursos focados no endurecimento penal, apoio a polícias estaduais e desregulamentação econômica para atrair eleitores do interior paulista. Por sua vez, o presidente Lula liderou uma grande caminhada na Avenida Paulista, defendendo a ampliação do papel do governo federal em programas sociais de segurança pública, integração de inteligência policial e investimentos em infraestrutura e educação.",
            "Analistas políticos e institutos de pesquisa eleitoral destacam que o segundo turno constitui uma eleição totalmente nova: o índice de abstenção, o comparecimento nas urnas e a capilaridade dos apoios de prefeitos eleitos no primeiro turno desempenharão papel determinante sobre o resultado final até o encerramento da votação em 25 de outubro."
        ],
        "caveat": "A cobertura eleitoral é estritamente jornalística e fundamentada em dados do TSE e apurações da Reuters; o segundo turno é uma disputa aberta entre os dois candidatos.",
        "sources": [
            {"name": "Reuters — Rallying in São Paulo, Presidential Candidates Seek Political Support", "url": "https://www.reuters.com/world/americas/rallying-sao-paulo-presidential-candidates-seek-votes-political-support-2026-10-11/"},
            {"name": "Reuters — Brazil Election Reshapes Trade and Alliances", "url": "https://www.reuters.com/world/americas/brazil-election-reshape-trade-with-us-with-tariffs-minerals-stake-2026-10-09/"}
        ]
    },
    {
        "id": "reino-unido-uniao-europeia-reaproximacao",
        "slug": "reino-unido-uniao-europeia-reaproximacao",
        "title": "Reino Unido propõe cúpula em Bruxelas para aprofundar cooperação com a União Europeia",
        "category": "Política",
        "categorySlug": "politica",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T09:00:00Z",
        "sourceDate": "13/10/2026",
        "summary": "Governo britânico busca pactos práticos em comércio agroalimentar, energia e mobilidade de jovens; debates sobre interferências externas repercutem politicamente.",
        "image": "images/noticia-reino-unido-uniao-europeia-reaproximacao.jpg",
        "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 3.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "Representantes do governo do Reino Unido e da União Europeia anunciaram a realização de uma cúpula bilateral de alto nível em Bruxelas, agendada para 20 de novembro de 2026. A conferência tem como meta central negociar mecanismos pragmáticos de cooperação para mitigar barreiras erguidas após a saída do país do bloco econômico.",
            "De acordo com despacho da Associated Press (AP), a pauta prioritária de discussão abrange a facilitação do comércio de alimentos e bebidas, coordenação de políticas energéticas no Mar do Norte, intercâmbio educacional juvenil e colaboração nas regras de controle de fronteiras e migração irregular. O primeiro-ministro britânico Andy Burnham afirmou que o modelo de relacionamento pós-Brexit em vigor impõe custos logísticos excessivos para ambas as partes.",
            "Durante seus pronunciamentos preparatórios, Burnham fez menção a tentativas passadas de desestabilização da segurança europeia por potências estrangeiras, incluindo debates sobre narrativas disseminadas durante o referendo britânico de 2016. Em resposta a questionamentos no Parlamento, o gabinete de Downing Street fez questão de reiterar que considera o resultado do referendo plenamente legítimo e que eventuais tentativas de interferência russa não lograram alterar a decisão soberana dos eleitores.",
            "Diplomatas em Bruxelas e Londres ressaltam que a cúpula de novembro não representa uma intenção de reingresso do Reino Unido ao mercado comum europeu ou à união aduaneira. Trata-se, estritamente, da busca por soluções técnicas bilaterais de interesse mútuo no atual cenário geopolítico internacional."
        ],
        "caveat": "A cúpula diplomática visa aprimoramentos pontuais de cooperação e comércio prático; o governo britânico mantém que o Reino Unido não retornará ao bloco comunitário europeu.",
        "sources": [
            {"name": "Associated Press — UK and EU Prepare Summit Amid Brexit Reassessment", "url": "https://apnews.com/article/uk-eu-brexit-russia-interference-burnham-3804ec3d1fe161cce6b9870853df5ab4"}
        ]
    },
    {
        "id": "cerebro-humano-novos-neuronios-adultos",
        "slug": "cerebro-humano-novos-neuronios-adultos",
        "title": "Neurociência debate se o cérebro humano continua gerando novos neurônios na vida adulta",
        "category": "Ciência",
        "categorySlug": "ciencia",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T09:30:00Z",
        "sourceDate": "07/10/2026",
        "summary": "Revisão publicada na Nature examina estudos divergentes sobre neurogênese adulta e os desafios técnicos para identificar células jovens no hipocampo maduro.",
        "image": "images/noticia-cerebro-humano-novos-neuronios-adultos.jpg",
        "imageCredit": "Microscopia confocal: AlmudenaFM / Wikimedia Commons (CC BY-SA 4.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "A hipótese de que o cérebro humano retém a capacidade de produzir novos neurônios ao longo de toda a idade adulta permanece como uma das controvérsias mais fascinantes e complexas da neurobiologia moderna. Em artigo de revisão publicado pela prestigiada revista científica Nature, pesquisadores revisitaram uma série de experimentos recentes que chegaram a conclusões antagônicas a respeito da neurogênese no giro denteado do hipocampo.",
            "Por décadas, acreditava-se que os seres humanos nasciam com uma dotação neural estática e que a perda de células cerebrais era irreversível. Enquanto modelos animais em roedores e primatas não humanos demonstram neurogênese adulta contínua de maneira robusta, a verificação desse fenômeno em tecido cerebral humano maduro enfrenta obstáculos técnicos severos. As evidências frequentemente dependem de marcadores proteicos indiretos, como a dupla-cortina (DCX), que podem se degradar rapidamente após a morte ou ser expressos por outros tipos celulares.",
            "Estudos que utilizaram técnicas inovadoras de sequenciamento genético de núcleo único (snRNA-seq) apresentaram resultados conflitantes: alguns laboratórios identificaram populações de precursores neurais em indivíduos idosos, enquanto equipes independentes não encontraram assinaturas moleculares conclusivas de células recém-geradas.",
            "Esclarecer essa questão é crucial para o entendimento da plasticidade sináptica, consolidação da memória e potenciais terapias regenerativas contra doenças neurodegenerativas como o Alzheimer. A conclusão científica responsável no presente momento é de prudência: a neurogênese adulta humana não é uma certeza comprovada nem uma impossibilidade biológica descartada, exigindo métodos diagnósticos ainda mais precisos e padronizados."
        ],
        "caveat": "A neurogênese em humanos adultos segue em intenso debate metodológico; hipóteses promissoras continuam dependendo de novas tecnologias para comprovação inequívoca.",
        "sources": [
            {"name": "Nature — The Ongoing Debate Over Adult Human Neurogenesis", "url": "https://www.nature.com/articles/d41586-026-03132-w"}
        ]
    },
    {
        "id": "nobel-quimica-moleculas-imagens-espelhadas",
        "slug": "nobel-quimica-moleculas-imagens-espelhadas",
        "title": "Nobel de Química premia pesquisas pioneiras sobre quiralidade e moléculas espelhadas",
        "category": "Ciência",
        "categorySlug": "ciencia",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T09:20:00Z",
        "sourceDate": "07/10/2026",
        "summary": "Henri Kagan e Kenso Soai são laureados por desvendar como reações químicas podem favorecer uma entre duas formas simétricas de uma mesma molécula.",
        "image": "images/noticia-nobel-quimica-moleculas-imagens-espelhadas.jpg",
        "imageCredit": "Visualização científica: NASA / SVS (Domínio Público)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "A Academia Real Sueca de Ciências concedeu o Prêmio Nobel de Química aos pesquisadores Henri Kagan e Kenso Soai por suas contribuições fundamentais para o entendimento e controle de reações químicas assimétricas, responsáveis por sintetizar preferencialmente uma entre duas formas espelhadas de uma molécula.",
            "Na natureza, diversas substâncias químicas existem como pares quirais — moléculas que compartilham a mesma fórmula atômica e conexões, mas cuja geometria tridimensional é a imagem refletida uma da outra, semelhante às mãos direita e esquerda. Em organismos biológicos, essa assimetria é decisiva: os receptores celulares humanos frequentemente reconhecem apenas um dos enantiômeros, enquanto a versão espelhada pode ser inativa ou até mesmo tóxica.",
            "O químico francês Henri Kagan desempenhou papel histórico no desenvolvimento de catalisadores para a síntese assimétrica, permitindo que a indústria farmacêutica produzisse medicamentos seletivos em escala industrial. Já o pesquisador japonês Kenso Soai descobriu a chamada 'reação de Soai', demonstrando que processos de autocatálise assimétrica conseguem amplificar desvios minúsculos de quiralidade original até gerar produtos de pureza óptica quase absoluta.",
            "A láurea celebra avanços teóricos com impacto prático incalculável na medicina moderna, permitindo a fabricação de fármacos mais seguros, pesticidas ecológicos e novos materiais sintéticos de alta precisão molecular."
        ],
        "caveat": "O domínio da síntese quiral é indispensável na farmacologia moderna para garantir que medicamentos apresentem alta eficácia e evitem efeitos colaterais biológicos imprevistos.",
        "sources": [
            {"name": "Nature — Kagan and Soai Awarded Chemistry Nobel for Chirality Breakthroughs", "url": "https://www.nature.com/articles/d41586-026-03093-0"},
            {"name": "Reuters — Henri Kagan and Kenso Soai Win Nobel Chemistry Prize", "url": "https://www.reuters.com/world/kagan-soai-win-2026-nobel-chemistry-prize-2026-10-07/"}
        ]
    },
    {
        "id": "nobel-fisica-neutrinos-icecube-antartida",
        "slug": "nobel-fisica-neutrinos-icecube-antartida",
        "title": "Detector no gelo da Antártida revela partículas cósmicas e rende Nobel de Física a Francis Halzen",
        "category": "Ciência",
        "categorySlug": "ciencia",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T12:00:00Z",
        "sourceDate": "06/10/2026",
        "summary": "O observatório IceCube, com sensores a 2.500 metros sob a calota polar do Polo Sul, captura neutrinos de alta energia de regiões extremas do Universo.",
        "image": "images/noticia-nobel-fisica-neutrinos-icecube-antartida.jpg",
        "imageCredit": "Foto: Christopher Michel / Wikimedia Commons (CC BY-SA 4.0)",
        "isFeaturedHero": True,
        "isLatest": False,
        "paragraphs": [
            "O Prêmio Nobel de Física foi outorgado ao físico Francis Halzen por sua liderança visionária no projeto e operação do Observatório de Neutrinos IceCube, construído no coração da calota de gelo da Antártida, e pela detecção pioneira de neutrinos de alta energia originados em eventos cósmicos nos confins do Universo.",
            "Apelidados de 'partículas fantasma', os neutrinos possuem massa infinitamente diminuta, não carregam carga elétrica e quase não interagem com a matéria comum. A cada segundo, trilhões deles atravessam o planeta Terra e nossos corpos em velocidade próxima à da luz sem deixar vestígios. Para conseguir registrá-los, a astrofísica precisou conceber um dos detectores mais colossais da história da ciência.",
            "O IceCube transformou um quilômetro cúbico do gelo mais puro do planeta — localizado a profundidades entre 1.450 e 2.450 metros sob a estação Amundsen-Scott no Polo Sul — em seu volume de detecção. Milhares de sensores ópticos digitais (DOMs) congelados no manto polar capturam os breves pulsos de luz azul da radiação Cherenkov, gerados quando um neutrino de altíssima energia colide raramente com o núcleo de uma molécula de água no gelo.",
            "Diferente da luz que pode ser bloqueada por poeira estelar ou de raios cósmicos que são desviados por campos magnéticos galácticos, os neutrinos viajam em linha reta a partir de buracos negros supermassivos, blazares e explosões de supernovas. A astronomia de neutrinos inaugurou, assim, uma janela sem precedentes para perscrutar os fenômenos mais violentos e misteriosos do cosmos."
        ],
        "caveat": "O detector não fotografa corpos celestes diretamente: ele mede as cascatas de partículas secundárias e luz Cherenkov para reconstruir a rota de neutrinos vindos do espaço profundo.",
        "sources": [
            {"name": "National Science Foundation — Nobel Prize in Physics Awarded for NSF IceCube Neutrino Observatory", "url": "https://www.nsf.gov/mps/updates/2026-nobel-prize-physics-awarded-nsf-icecube-neutrino"},
            {"name": "Fermilab — Francis Halzen Honored for Groundbreaking Neutrino Research", "url": "https://news.fnal.gov/2026/10/nobel-prize-in-physics-awarded-to-francis-halzen-for-groundbreaking-neutrino-research/"}
        ]
    },
    {
        "id": "tartaruga-jonathan-194-anos-genetica",
        "slug": "tartaruga-jonathan-194-anos-genetica",
        "title": "Tartaruga Jonathan, estimada em 194 anos, oferece pistas biológicas sobre a longevidade",
        "category": "Animais",
        "categorySlug": "animais",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T11:00:00Z",
        "sourceDate": "07/10/2026",
        "summary": "Sequenciamento genético do animal terrestre mais velho do mundo revela variantes em vias de reparo de DNA e proteção contra o envelhecimento celular.",
        "image": "images/noticia-tartaruga-jonathan-194-anos-genetica.jpg",
        "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 4.0)",
        "isFeaturedHero": False,
        "isLatest": True,
        "paragraphs": [
            "Jonathan, uma tartaruga-gigante-de-seychelles reconhecida oficialmente como o animal terrestre vivo mais velho do planeta, com idade estimada em cerca de 194 anos, tornou-se objeto de um estudo genético publicado na revista científica Science Advances. A pesquisa investiga os segredos celulares que permitem ao réptil atravessar séculos mantendo vitalidade biológica.",
            "Residente na ilha remota de Santa Helena, no Atlântico Sul, desde 1882, Jonathan chegou ao arquipélago britânico já na maturidade adulta. Uma equipe internacional de geneticistas sequenciou o genoma da espécie e mapeou seus padrões de metilação de DNA, descobrindo adaptações extraordinárias em genes responsáveis pelo reparo de danos no código genético, integridade dos telômeros e imunidade celular contra neoplasias.",
            "O estudo revelou que as células das tartarugas gigantes apresentam taxas extremamente lentas de encurtamento telomérico e uma proteção molecular reforçada contra o estresse oxidativo mitocondrial. Em termos evolutivos, esses animais desenvolveram mecanismos de supressão tumoral muito superiores aos de mamíferos de porte equivalente.",
            "Os pesquisadores, entretanto, fazem uma ressalva ética e científica rigorosa: os achados decorrem do estudo de um organismo único em um ambiente de preservação veterinária privilegiada, com dieta equilibrada e ausência de predadores naturais. A descoberta não significa que a ciência descobriu um elixir da imortalidade para os seres humanos, mas oferece modelos moleculares valiosos para a pesquisa do envelhecimento saudável."
        ],
        "caveat": "O estudo baseia-se em um único indivíduo excepcional e fatores ambientais protegidos; os dados servem para pesquisa comparativa e não comprovam cura do envelhecimento humano.",
        "sources": [
            {"name": "Reuters — 194-Year-Old Tortoise May Hold Clues to Longer Life", "url": "https://www.reuters.com/science/194-year-old-tortoise-worlds-oldest-land-animal-may-hold-clues-longer-life-2026-10-07/"},
            {"name": "The Washington Post — Age 194 Jonathan Tortoise Offers Clues to Longevity", "url": "https://www.washingtonpost.com/lifestyle/2026/10/13/age-194-jonathan-tortoise-offers-clues-longevity-study-says/"}
        ]
    },
    {
        "id": "carcacas-elefantes-ecossistema-savana",
        "slug": "carcacas-elefantes-ecossistema-savana",
        "title": "Carcaças de elefantes alteram nutrientes e vegetação da savana por quase uma década",
        "category": "Animais",
        "categorySlug": "animais",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T08:30:00Z",
        "sourceDate": "13/10/2026",
        "summary": "Estudo no Parque Nacional Kruger comprova que a decomposição de grandes animais cria pontos de enriquecimento de fósforo e pastagem duradoura no solo.",
        "image": "images/noticia-carcacas-elefantes-ecossistema-savana.jpg",
        "imageCredit": "Foto: Giles Laurent / Wikimedia Commons (CC BY-SA 4.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "A morte de um mega-herbívoro como o elefante africano desempenha um papel ecológico transformador e duradouro sobre a paisagem das savanas, estendendo-se por quase uma década após o falecimento do animal. As conclusões partem de uma pesquisa de campo conduzida no Parque Nacional Kruger, na África do Sul, e publicada na conceituada revista Proceedings of the National Academy of Sciences (PNAS).",
            "Cientistas monitoraram 40 locais de deposição de carcaças de elefantes com diferentes idades cronológicas. No primeiro momento, a massa corporal de várias toneladas comprime a vegetação e bloqueia a luz solar, provocando uma clareira temporária. À medida que os tecidos moles e a estrutura óssea se decompõem, contudo, ocorre uma liberação concentrada de nutrientes críticos, em especial nitrogênio, cálcio e fósforo, no solo circundante.",
            "Essa injeção química massiva altera a flora local: em vez de diversidade indiscriminada, espécies pioneiras de gramíneas com teor nutricional e proteico muito superior passam a colonizar a área. Atraídos pelo pasto enriquecido, outros herbívoros da savana — como zebras, gnus e antílopes — passam a frequentar assiduamente os sítios das carcaças antigas, mantendo o pastoreio ativo e redistribuindo sementes.",
            "A pesquisa demonstrou que o enriquecimento mineral do solo permanecia detectável mesmo nos locais mais antigos amostrados, onde os elefantes haviam morrido quase oito anos antes. O estudo evidencia que os grandes animais moldam os ecossistemas terrestres não apenas através de seus hábitos em vida, mas como agentes fundamentais da ciclagem geoquímica após a morte."
        ],
        "caveat": "O impacto ecológico demonstra como a ciclagem de nutrientes de mega-herbívoros atua como pilar de fertilidade na savana por muitos anos além do desaparecimento físico da ossada.",
        "sources": [
            {"name": "The Washington Post — When an Elephant Dies, Its Body Marks the Landscape for a Decade", "url": "https://www.washingtonpost.com/climate-environment/2026/10/13/when-an-elephant-dies-its-body-marks-landscape-decade/"},
            {"name": "PNAS — Long-Term Biogeochemical Impacts of Elephant Carcasses in Savannas", "url": "https://doi.org/10.1073/pnas.2605332123"}
        ]
    },
    {
        "id": "fossil-egito-nova-especie-crocodiliano",
        "slug": "fossil-egito-nova-especie-crocodiliano",
        "title": "Fóssil egípcio de 50 milhões de anos é reclassificado como nova espécie de crocodiliano",
        "category": "Animais",
        "categorySlug": "animais",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T07:45:00Z",
        "sourceDate": "07/10/2026",
        "summary": "Tomografia computadorizada do crânio encontrado perto do Cairo revela características anatômicas únicas e batiza o predador pré-histórico Herugavialis cairensis.",
        "image": "images/noticia-fossil-egito-nova-especie-crocodiliano.jpg",
        "imageCredit": "Registro paleontológico: Wikimedia Commons (CC BY 3.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "Um fóssil de crocodiliano com cerca de 50 milhões de anos, resgatado nas formações rochosas das colinas de Mokattam, nas proximidades da cidade do Cairo, recebeu uma nova classificação científica oficial após minuciosa reavaliação anatômica. A descoberta, publicada na revista Royal Society Open Science, descreve o espécime como uma espécie inédita batizada de <em>Herugavialis cairensis</em>.",
            "O crânio fossilizado já constava de acervos históricos havia décadas, mas era categorizado como membro de um gênero aparentado aos falsos gaviais que habitam o Sudeste Asiático atual. Essa classificação levantava um enigma biogeográfico intrigante entre paleontólogos: como espécies de morfologia tão semelhante teriam habitado ecossistemas separados por milhares de quilômetros e barreiras continentais na época do Eoceno?",
            "Para sanar a dúvida, paleontólogos submeteram o crânio a técnicas modernas de microtomografia computadorizada em alta resolução e compararam mais de 300 traços osteológicos com fósseis de crocodilianos extintos e contemporâneos. O exame revelou um conjunto singular de suturas cranianas, canais neurovasculares e formato de mandíbula que comprovaram tratar-se de uma linhagem evolutiva independente.",
            "O nome científico homenageia Heru (a divindade egípcia ancestral associada à Grande Esfinge) e a localidade de sua descoberta no Cairo. O achado preenche um elo crucial na história da radiação evolutiva dos répteis predadores ao redor do antigo Mar de Tétis, demonstrando o poder das técnicas não destrutivas de imagem na revisão de acervos fósseis centenários."
        ],
        "caveat": "A novidade reside na identificação taxonômica correta de um fóssil pré-histórico conhecido há anos, e não na descoberta de uma criatura viva em ecossistemas contemporâneos.",
        "sources": [
            {"name": "The Washington Post — Scientists Discovered Crocodile They Never Knew Existed", "url": "https://www.washingtonpost.com/science/2026/10/07/scientists-discovered-crocodile-they-never-knew-existed/"},
            {"name": "Royal Society Open Science — Cranial Anatomy and Systematics of Herugavialis cairensis", "url": "https://royalsocietypublishing.org/journal/rsos"}
        ]
    },
    {
        "id": "expedicao-pista-aviao-amelia-earhart",
        "slug": "expedicao-pista-aviao-amelia-earhart",
        "title": "Expedição investiga possível pista sobre o avião desaparecido de Amelia Earhart no Pacífico",
        "category": "Mundo",
        "categorySlug": "mundo",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T10:00:00Z",
        "sourceDate": "10/10/2026",
        "summary": "Arqueólogos marinhos viajam ao atol de Nikumaroro para checar anomalia submersa em lagoa que pode corresponder a destroços do Lockheed Electra de 1937.",
        "image": "images/noticia-expedicao-pista-aviao-amelia-earhart.jpg",
        "imageCredit": "Foto: Library of Congress / Domínio Público",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "Uma equipe interdisciplinar de arqueólogos marinhos e pesquisadores partiu em expedição com destino ao remoto atol desabitado de Nikumaroro, na República de Kiribati, no Pacífico Central. O objetivo é examinar in loco uma anomalia submersa detectada em imagens de satélite de alta resolução e sonares que reacendeu discussões sobre o mistério do desaparecimento da aviadora norte-americana Amelia Earhart em 1937.",
            "Earhart e seu navegador Fred Noonan desapareceram sem deixar vestígios confirmados enquanto tentavam realizar uma pioneira circum-navegação aérea do globo a bordo de um Lockheed Model 10-E Electra bimotor. Uma das correntes históricas mais debatidas sustenta que, sem conseguir localizar o destino programado na Ilha Howland por falhas de radiogoniometria, a dupla teria pousado no recife de coral raso de Nikumaroro antes de ficar sem combustível.",
            "A missão de campo, apoiada por pesquisadores da Universidade Purdue (onde Earhart lecionou e manteve laços acadêmicos), busca inspecionar visualmente com mergulhadores e drones submarinos o objeto localizado no interior da lagoa do atol. Os cientistas, no entanto, mantêm uma postura de extremo ceticismo metodológico: exploradores veteranos da região, como Ric Gillespie (diretor do grupo TIGHAR), alertam que anomalias semelhantes no passado revelaram-se troncos de árvores tombados trazidos por tempestades ou formações coralinas comuns.",
            "A expedição conta com previsão de cinco dias de trabalhos intensivos de medição subaquática. Especialistas enfatizam que a identificação definitiva de qualquer destroço exige a recuperação de peças seriadas e confirmação pericial metalúrgica. Até o momento, trata-se da apuração de uma hipótese de campo, e não da descoberta comprovada da lendária aeronave."
        ],
        "caveat": "O avião NÃO foi encontrado: a expedição realiza a checagem de uma anomalia em lagoa de atol que pode ser apenas uma formação geológica ou madeira submersa.",
        "sources": [
            {"name": "Reuters — Amelia Earhart Expedition Heads to Pacific Atoll Hoping to Find Her Plane", "url": "https://www.reuters.com/business/aerospace-defense/amelia-earhart-expedition-heads-pacific-atoll-hoping-find-her-plane-2026-10-10/"}
        ]
    },
    {
        "id": "fmi-riscos-economia-global-ia-divida-conflitos",
        "slug": "fmi-riscos-economia-global-ia-divida-conflitos",
        "title": "FMI alerta para riscos globais ligados a eventual correção em IA, dívida e conflitos",
        "category": "Mundo",
        "categorySlug": "mundo",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T08:15:00Z",
        "sourceDate": "13/10/2026",
        "summary": "Fundo Monetário Internacional projeta crescimento global de 3,1% em 2026, mas adverte que choque em investimentos tecnológicos poderia subtrair 1,1% do PIB até 2028.",
        "image": "images/noticia-fmi-riscos-economia-global-ia-divida-conflitos.jpg",
        "imageCredit": "Foto: AgnosticPreachersKid / Wikimedia Commons (CC BY 2.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "O Fundo Monetário Internacional (FMI) divulgou a atualização de seu relatório World Economic Outlook (Perspectivas Econômicas Mundiais), projetando que a economia global deve avançar a um ritmo moderado de 3,1% em 2026 e 3,4% em 2027. Apesar do cenário base de estabilidade, o organismo multilateral emitiu alertas explícitos sobre vulnerabilidades ligadas aos altos níveis de endividamento público, tensões geopolíticas no Oriente Médio e possíveis correções severas no mercado de inteligência artificial.",
            "Segundo os economistas do FMI, a corrida por infraestrutura tecnológica impulsionou de maneira decisiva o comércio de semicondutores e os gastos de capital corporativo em todo o planeta. No entanto, essa expansão inflacionou as expectativas e o valuation de ativos ligados ao setor de IA. Em um modelo de simulação de estresse incluído no relatório, o FMI estimou que uma eventual retração brusca nos investimentos em tecnologia poderia provocar reajuste patrimonial nas bolsas e subtrair 1,1% do Produto Interno Bruto global até o ano de 2028.",
            "O documento também enfatiza a sensibilidade dos preços de energia frente à persistência de conflitos armados no Oriente Médio, o que pode pressionar índices inflacionários e forçar bancos centrais a manter taxas de juros elevadas por mais tempo. Esse aperto nas condições financeiras mundiais agrava os custos de refinanciamento da dívida soberana de economias emergentes e desenvolvidas.",
            "A recomendação do fundo direcionada aos formuladores de políticas públicas é de cautela fiscal e reformas estruturais: embora os ganhos potenciais de produtividade da inteligência artificial sejam reais a longo prazo, eles não anulam os fundamentos da macroeconomia nem blindam os países contra choques de liquidez."
        ],
        "caveat": "A análise do FMI inclui simulações de cenários de estresse preventivo para orientar bancos centrais, e não previsões determinísticas de recessão iminente.",
        "sources": [
            {"name": "Reuters — IMF Flags Risks to Global Economy: AI Market Correction, War, Debt", "url": "https://www.reuters.com/business/finance/imf-flags-risks-global-economy-ai-market-correction-war-debt-2026-10-13/"}
        ]
    },
    {
        "id": "cyberpunk-2077-filme-live-action-paramount",
        "slug": "cyberpunk-2077-filme-live-action-paramount",
        "title": "Filme live-action de Cyberpunk 2077 entra em desenvolvimento inicial com a Paramount",
        "category": "Entretenimento",
        "categorySlug": "entretenimento",
        "readingTime": "2 min de leitura",
        "publishedAt": "2026-10-13T10:45:00Z",
        "sourceDate": "09/10/2026",
        "summary": "Adaptação cinematográfica do universo de Night City é desenvolvida em parceria com a CD Projekt RED e o produtor Lorenzo di Bonaventura.",
        "image": "images/noticia-cyberpunk-2077-filme-live-action-paramount.jpg",
        "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 4.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "O universo futurista e distópico de Cyberpunk 2077 ganhará uma adaptação em longa-metragem live-action para as telas de cinema. A informação foi confirmada por reportagem da Reuters, apontando que o estúdio Paramount Pictures está liderando o desenvolvimento do projeto em colaboração direta com a desenvolvedora polonesa CD Projekt RED e com a produtora do renomado executivo de Hollywood Lorenzo di Bonaventura (conhecido pelas franquias Transformers e G.I. Joe).",
            "A iniciativa se encontra em estágio inicial de planejamento conceitual. Até o momento, os estúdios não divulgaram nomes para a direção, elenco de atores, equipe de roteiristas ou data prevista de lançamento nos cinemas. A CD Projekt RED confirmou que enxerga na Paramount uma parceira estratégica para a expansão de suas propriedades intelectuais audiovisuais, após o estrondoso sucesso da série animada Cyberpunk: Edgerunners na Netflix.",
            "Ambientada na metrópole corporativa de Night City, a narrativa original de Cyberpunk 2077 destaca os contrastes violentos entre megacorporações onipresentes, cibernética clandestina, desigualdade social e mercenários rebeldes. O desafio de roteiro será transpor para a linguagem cinematográfica a densidade de um mundo aberto onde as escolhas interativas do jogador costumavam moldar os desfechos.",
            "A produção deve ser compreendida pela comunidade de fãs como um projeto em gestação, e não como um filme com gravações iniciadas ou estreia iminente. Novos detalhes sobre sinopse e cronograma oficial de filmagens serão divulgados oportunamente pelas empresas responsáveis."
        ],
        "caveat": "O projeto cinematográfico encontra-se em fase preliminar de desenvolvimento conceitual; diretor, elenco e data de estreia ainda não foram formalizados.",
        "sources": [
            {"name": "Reuters — Paramount to Develop Cyberpunk 2077 Film, Lifting CD Projekt's Shares", "url": "https://www.reuters.com/business/media-telecom/paramount-develop-cyberpunk-2077-film-lifting-cd-projekt-reds-shares-2026-10-09/"}
        ]
    },
    {
        "id": "novidades-streaming-musica-filmes-outubro-2026",
        "slug": "novidades-streaming-musica-filmes-outubro-2026",
        "title": "Guia da semana reúne documentário sobre Norm Macdonald, Tenzing e estreias do streaming",
        "category": "Entretenimento",
        "categorySlug": "entretenimento",
        "readingTime": "3 min de leitura",
        "publishedAt": "2026-10-13T09:10:00Z",
        "sourceDate": "13/10/2026",
        "summary": "Semana traz documentário de Judd Apatow na Netflix, a biografia épica Tenzing no Apple TV, produções da Marvel e novos lançamentos musicais.",
        "image": "images/noticia-novidades-streaming-musica-filmes-outubro-2026.jpg",
        "imageCredit": "Foto: Wikimedia Commons (CC BY-SA 2.0)",
        "isFeaturedHero": False,
        "isLatest": False,
        "paragraphs": [
            "A semana entre 12 e 18 de outubro de 2026 apresenta um cardápio recheado de novidades nas principais plataformas de streaming, salas de cinema e serviços de música digital. Em guia de entretenimento divulgado pela agência internacional Associated Press (AP), os destaques transitam entre documentários sobre mestres da comédia, dramas históricos inspiradores e novas séries de franquias consagradas.",
            "Um dos títulos mais aguardados no catálogo da Netflix é <em>Norm: The Tale of Norm Macdonald</em>, documentário dirigido pelo cineasta Judd Apatow que revisita a trajetória singular, a sagacidade e a coragem cômica do célebre humorista e integrante histórico do Saturday Night Live, falecido em 2021. Já no serviço Apple TV, a atenção se volta para o drama biográfico <em>Tenzing</em>, que dramatiza a conquista histórica do cume do Monte Everest em 1953 pelo sherpa nepalês Tenzing Norgay e pelo montanhista neozelandês Sir Edmund Hillary.",
            "No universo das séries e produções televisivas, o radar da AP aponta a chegada de <em>VisionQuest</em> (série do Marvel Studios que segue os passos do personagem Visão Branco após os acontecimentos de WandaVision), a produção juvenil <em>Hollywood Arts</em> e novidades em torno do terror psicológico de <em>Crystal Lake</em>. Na seara musical, o período traz lançamentos de estúdio e o documentário da ascensão do grupo pop Katseye.",
            "A disponibilidade exata de títulos e datas de dublagem ou legendagem pode oscilar em virtude de acordos regionais de distribuição no Brasil. O panorama sintetiza as principais apostas da indústria cultural para quem deseja atualizar sua lista de entretenimento nos próximos dias."
        ],
        "caveat": "Datas e disponibilidades específicas de catálogo podem variar conforme a região e a plataforma de streaming em território brasileiro.",
        "sources": [
            {"name": "Associated Press — October 2026 Streaming Movies, TV and Music Guide", "url": "https://apnews.com/article/october-2026-streaming-movies-tv-music-00be8937c13825fa70dbf9fe6e212ce5"}
        ]
    }
]

print(f"Loaded {len(news_list)} verified news items.")
