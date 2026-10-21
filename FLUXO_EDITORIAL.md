# 🌳 Árvore de Produção e Fluxo Editorial — Curiosidades Incríveis

Este documento mapeia o ciclo de vida completo de cada artigo adicionado ao portal **Curiosidades Incríveis**, garantindo consistência técnica, SEO de alta performance e experiência de usuário premium.

---

## 1. Critérios de Seleção (Triagem)
Para um tema ser aprovado e transformado em artigo, ele deve atender a **pelo menos 3 destes 4 pilares**:
1. **Fator "Uau" / Viralidade:** Desafia o senso comum, quebra expectativas ou revela um fato inacreditável.
2. **Potencial de Busca (SEO):** Responde a dúvidas reais do público ("por que...", "como funciona...", "o que é...").
3. **Embasamento & Rigor:** Fatos históricos documentados ou pesquisas científicas verificadas (sem fake news).
4. **Enquadramento nas 5 Categorias Oficiais:**
   - 🐾 **Animais**
   - 🔬 **Ciência**
   - 💻 **Tecnologia**
   - 📜 **História**
   - 🌍 **Mundo & Mistérios**

---

## 2. Tipologia e Classificação Editorial

| Tipo | Ícone | Tempo de Leitura | Critério | Destino Principal |
| :--- | :---: | :---: | :--- | :--- |
| **Fato Rápido** | ⚡ | **3 min** | Fato direto, dinâmico, chocante e conciso. | • Seção **Fatos Rápidos / Impacto Duradouro**<br>• Seção **Artigos Recentes**<br>• Ticker **Você Sabia?**<br>• Catálogo Geral |
| **Artigo Profundo** | 📖 | **4 a 5 min** | Explicação detalhada com contexto histórico ou científico. | • Seção **Em Alta** ou **Recentes**<br>• Catálogo Geral |

---

## 3. Árvore de Roteamento (Para Onde o Artigo Vai)

```
[ NOVO ARTIGO CRIADO ]
          │
          ├── 1. GERAÇÃO DO ARQUIVO HTML INDIVIDUAL (/artigos/slug.html)
          │      ├── Head com SEO Completo (Title, Description, Robots, Author, Canonical)
          │      ├── OpenGraph (Facebook, WhatsApp, LinkedIn) + Twitter Cards
          │      ├── Schema.org JSON-LD (@type: "Article")
          │      ├── Header & Navegação Padrão + Gaveta Mobile
          │      ├── Lead + Banner + 2x Seções H2 + Caixa Destaque + Fato Curioso
          │      └── Rodapé + Links de Retorno e Instagram
          │
          ├── 2. CATALOGAÇÃO NO SCRIPT CENTRAL (script.js -> articles[])
          │      ├── id, title, category, categorySlug, readingTime, description, image, link
          │      ├── featured: true  ──> Vai para "Em Alta" na Home
          │      ├── recent: true    ──> Vai para "Recentes" na Home (TODOS os Fatos Rápidos entram aqui!)
          │      └── popular: true   ──> Vai para "Fatos Rápidos / Impacto Duradouro" na Home
          │
          ├── 3. ALIMENTAÇÃO DO TICKER & SURPREENDA-ME (script.js -> curiosities[])
          │      └── Criação de pílula de curiosidade resumida para o carrossel "Você Sabia?"
          │
          ├── 4. INCLUSÃO NO CATÁLOGO GERAL (artigos.html)
          │      └── Card renderizado com tags de busca e filtro por categoria (?categoria=xxx)
          │
          └── 5. SITEMAP & GOOGLE INDEXING (sitemap.xml & robots.txt)
                 └── URL adicionada ao sitemap oficial com prioridade e frequência de rastreio
```

---

## 4. Os Dois Caminhos de Publicação Editorial

O portal **Curiosidades Incríveis** opera em dois fluxos complementares de produção de conteúdo:

### 📦 CAMINHO 1: Artigos de Volume / Acervo Inicial (25 Artigos)
- **Objetivo:** Construir uma base sólida, densa e categorizada de conteúdo para preencher o portal, ranquear em pesquisas e oferecer variedade imediata de leitura.
- **Estrutura:** 5 artigos por categoria (25 artigos no total), com introdução cativante, 2 seções de aprofundamento factual, caixa de destaque temática, fato curioso em callout e conclusão elegante, calibrados para o tempo de leitura real (3 a 5 min).

### 🎬 CAMINHO 2: Artigos Editoriais Profundos / Transcrição de Vídeos Virais (3 Artigos)
- **Objetivo:** Transformar vídeos de alto impacto e repercussão das redes sociais (Instagram/TikTok/Reels) em matérias jornalísticas de altíssimo rigor, com desmistificação de fakes e ciência profunda.
- **Fluxo Operacional:** 
  1. Transcrição e triagem do vídeo viral.
  2. Proposta estruturada em 5 tópicos (introdução, desmistificação, contextualização, física/biologia real e conclusão reflexiva).
  3. Validação e aprovação prévia de tópicos pelo editor.
  4. Redação em profundidade com rigor científico, checagem factual e arte visual de alta fidelidade cinematográfica.

---

## 5. Relação Oficial das Duas Listas

### 📋 LISTA 1: Caminho 1 (Volume & Acervo Inicial — 25 Artigos)

#### 🐾 Animais (5 artigos)
1. `polvo-tres-coracoes.html` — *O Mistério dos Polvos: 3 Corações, Sangue Azul e Inteligência de Outro Mundo* (4 min)
2. `abelhas-rostos.html` — *As abelhas conseguem reconhecer rostos humanos?* (3 min)
3. `corvos-inteligencia.html` — *A Inteligência dos Corvos: Eles Guardam Rancor e Planejam o Futuro* (4 min)
4. `animal-imortal-agua-viva.html` — *O Animal Imortal: A Água-Viva Turritopsis dohrnii* (4 min)
5. `camarao-mantis-soco.html` — *O Soco Supersônico do Camarão Mantis* (3 min)

#### 🔬 Ciência
6. `exemplo-artigo.html` — *O Que Havia Antes do Big Bang?* (5 min)
7. `por-que-ceu-azul.html` — *Por que o Céu é Azul? A Física da Dispersão de Rayleigh* (4 min)
8. `som-mais-alto-krakatoa.html` — *O Som Mais Alto Já Registrado na Terra: O Rugido do Krakatoa* (4 min)
9. `gelo-quente-estados-materia.html` — *Gelo Quente e Novos Estados da Matéria* (4 min)
10. `tempo-topo-montanha.html` — *O Tempo Passa Mais Rápido no Topo de uma Montanha?* (3 min)
11. `terra-parar-de-girar-5-segundos.html` — *O Que Aconteceria se a Terra Parasse de Girar por Apenas 5 Segundos?* (5 min)

#### 💻 Tecnologia (5 artigos)
11. `internet-funciona.html` — *Como a Internet Realmente Funciona Sob os Oceanos* (5 min)
12. `bug-guerra-nuclear-1983.html` — *O Bug que Quase Provocou a Terceira Guerra Mundial em 1983* (4 min)
13. `sete-chaves-internet.html` — *As 7 Chaves Físicas que Podem Reiniciar a Internet* (4 min)
14. `mecanismo-anticitera-computador.html` — *O Mecanismo de Anticitera: O Computador Analógico de 2.000 Anos* (4 min)
15. `virus-stuxnet-arma-digital.html` — *Stuxnet: A Primeira Arma Digital do Mundo Físico* (3 min)

#### 📜 História (5 artigos)
16. `origem-palavras.html` — *A Fascinante Origem de 7 Palavras que Usamos Todos os Dias* (4 min)
17. `guerra-dos-emus.html` — *A Grande Guerra dos Êmus: Quando a Austrália Perdeu para Pássaros* (3 min)
18. `epidemia-danca-1518.html` — *A Misteriosa Epidemia da Dança de 1518 em Estrasburgo* (4 min)
19. `fogo-grego-arma-secreta.html` — *Fogo Grego: A Fórmula Militar Mais Bem Guardada da Antiguidade* (4 min)
20. `adaga-tutancamon-meteorito.html` — *A Adaga de Tutancâmon Veio do Espaço Sideral?* (3 min)

#### 🌍 Mundo & Mistérios (5 artigos)
21. `lugares-incriveis.html` — *7 Lugares Mais Extremos e Fascinantes do Planeta Terra* (5 min)
22. `porta-do-inferno-darvaza.html` — *A Porta do Inferno: A Cratera de Darvaza que Queima Há Décadas* (3 min)
23. `ponto-nemo-lugar-solitario.html` — *Ponto Nemo: O Lugar Mais Isolado do Planeta Terra* (4 min)
24. `lago-natron-petrificador.html` — *O Lago Natron: O Espelho d'Água que Petrifica Animais* (4 min)
25. `floresta-arvores-tortas-polonia.html` — *A Misteriosa Floresta Torta da Polônia: Krzywy Las* (4 min)

---

### 🌟 LISTA 2: Caminho 2 (Vídeos Virais / Curadoria & Rigor Científico — 3 Artigos)

1. `dinossauros-aves-evolucao.html` — *Os Dinossauros Não Foram Extintos: Como as aves modernas guardam o legado dos gigantes pré-históricos* (6 min • Ciência)
   - *Origem:* Vídeo viral sobre a sobrevivência evolutiva das aves após a extinção K-Pg.
   - *Foco:* Paleontologia comparada, homologia esquelética, proto-penas e biologia evolutiva.
2. `animais-humanos-aproximacao.html` — *Eles Sentem o Que Sentimos? A ciência real por trás dos animais que se aproximam de nós* (5 min • Animais)
   - *Origem:* Vídeo viral de aproximação entre animais selvagens (leão-marinho, borboleta) e humanos.
   - *Foco:* Etologia, desmistificação de antropomorfismo, *mud-puddling*, neofilia e habituação.
3. `rodovia-36-faixas-china.html` — *A Verdade por Trás da “Rodovia de 36 Faixas” que Parou a China: Mito Viral vs. Realidade* (5 min • Mundo)
   - *Origem:* Vídeo viral sobre suposta rodovia chinesa de 36 faixas que estreita para 4.
   - *Foco:* Engenharia de tráfego, praça de pedágio de Wuzhuang, Golden Week e dinâmica de ondas de trânsito fantasma.

---

### 🚀 LISTA 3: Expansão Editorial Premium (5 Artigos • 1 de Cada Categoria — v4.0.0)

1. `tardigrados-animais-quase-indestrutiveis.html` — *Os Ursos-d'Água Podem Sobreviver ao Fim do Mundo? A Ciência dos Animais Quase Indestrutíveis* (5 min • 🐾 Animais)
   - *Foco:* Criptobiose, anidrobiose, proteína Dsup protetora de DNA, sobrevivência no vácuo espacial na missão FOTON-M3 e aplicações biotecnológicas.
2. `paradoxo-de-fermi-grande-filtro.html` — *O Paradoxo de Fermi: Onde Estão os Extraterrestres e o Que É o 'Grande Filtro'?* (6 min • 🔬 Ciência)
   - *Foco:* Equação de Drake, Escala de Kardashev, teoria do Grande Filtro de Robin Hanson, hipótese da Floresta Negra e James Webb.
3. `singularidade-tecnologica-agi-inteligencia-artificial.html` — *O Que Acontece Quando a IA Superar a Mente Humana? A Corrida Rumo à AGI e a Singularidade Tecnológica* (5 min • 💻 Tecnologia)
   - *Foco:* Diferenças entre ANI, AGI e ASI, Lei dos Retornos Acelerados de Kurzweil, explosão de inteligência de I.J. Good e o problema do alinhamento.
4. `verdade-biblioteca-alexandria-destruicao.html` — *O Que Realmente Aconteceu com a Biblioteca de Alexandria? A Verdade Histórica por Trás do Mito* (5 min • 📜 História)
   - *Foco:* Desmistificação do incêndio de Júlio César, cerco de Aureliano, queda do Serapeu com Teodósio, mito da queima em 642 e preservação do saber antigo.
5. `fossa-das-marianas-abismo-challenger-profundeza.html` — *O Que Existe no Fundo da Fossa das Marianas? Os Segredos do Ponto Mais Profundo do Planeta* (5 min • 🌍 Mundo)
   - *Foco:* Abismo Challenger, 1.086 bar de pressão, peixe-caracol-das-marianas, xenofióforos gigantes, batiscafo Trieste (1960), James Cameron (2012) e impacto de microplásticos.
