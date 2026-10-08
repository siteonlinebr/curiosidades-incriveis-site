# CHANGELOG — Curiosidades Incríveis

Todas as alterações notáveis deste projeto são registradas neste documento histórico de versões.

---

## [v3.3.16] - 2026-10-08 (Versão Atual)
### ⭐ Botão de Exploração Cósmica na Navbar (Opção 1):
- **Botão com Ícone de Estrela no Cabeçalho:** Adicionado botão de exploração circular (`.nav-explore-trigger`) posicionado exatamente à esquerda da lupa de pesquisa, mantendo a consistência visual idêntica aos botões da lupa e alternador de tema.
- **Menu Suspenso (Dropdown) com Efeito Vidro:** Ao clicar no botão, abre um menu elegante posicionado logo abaixo (`top: calc(100% + 12px)`), com backdrop-filter blur de 28px, borda refinada e sombra suave, contendo as três seções fundamentais de exploração:
  - 🔥 **Em Alta** (Destaques e tendências)
  - ⏱️ **Recentes** (Últimas publicações)
  - 🗂️ **Categorias** (Explore por assunto)
- **Navegação Inteligente e Acessibilidade:** Na Home, o clique realiza rolagem suave diretamente para a seção correspondente e fecha o menu; nas demais páginas, direciona para a âncora na Home. Suporta fechamento automático ao clicar fora, ao pressionar `Escape` ou ao abrir a pesquisa.
- **Navbar Desktop Minimalista:** A navegação permanente do Desktop foi despoluída, mantendo "Início" e "Artigos", enquanto "Em Alta", "Recentes" e "Categorias" foram unificados no botão de exploração.
- **Blindagem Total do Restante do Site:** A pílula lateral flutuante de redes sociais (com o blur de 42px), o botão de voltar ao topo, tema claro/escuro, artigos e todos os elementos existentes permanecem 100% intactos e preservados.

---

## [v3.3.15] - 2026-10-06
### 💎 Blur Intenso & Efeito Vidro Realçado no Background da Pílula:
- **Backdrop Blur Elevado (+31%):** Desfoque de vidro ampliado de `32px` para **`42px`** com filtro de saturação suave (`saturate(160%)`), tornando a refração do conteúdo por trás da pílula muito mais viva e elegante.
- **Transparência Calibrada:** Opacidade do fundo reduzida sutilmente (`rgba(11, 19, 36, 0.62)` no tema escuro e `rgba(255, 255, 255, 0.68)` no tema claro), permitindo que o blur atue com profundidade real sem perder a legibilidade dos ícones ou da tag de `"SEGUIR"`.
- **Blindagem do Código:** Ícones, botões, bordas, botão de voltar ao topo e todas as demais páginas permanecem 100% trancados e intactos.

---

## [v3.3.14] - 2026-10-06
### 🐛 Correção Definitiva de Posição no Canto Inferior Direito:
- **Ancoragem Segura no Rodapé da Janela (`bottom`):** Substituído o cálculo rígido de `top` por posicionamento nativo ancorado na parte inferior (`bottom: 28px` no desktop, `bottom: 22px` no tablet e `bottom: 18px` no celular), eliminando qualquer risco de corte em telas com alturas menores.
- **Margens Equilibradas:** Distância da borda direita calibrada (`right: 20px` no desktop, `right: 14px` no tablet e `right: 10px` no celular) com harmonia perfeita em relação ao botão de voltar ao topo na esquerda.
- **Blindagem do Código:** Todas as outras seções do site continuam rigorosamente trancadas.

---

## [v3.3.13] - 2026-10-06
### 🎯 Calibração Fina da Pílula Flutuante:
- **Desktop (PC) Revertido para Escala Leve:** Os botões voltaram aos confortáveis `46px` com ícones de `23px`, badge de `"SEGUIR"` proporcional e padding enxuto (`12px 10px 18px`), mantendo a elegância minimalista no monitor.
- **Mobile e Tablet Mantidos Ampliados:** Celulares e tablets preservam a área de clique ampliada (`42px` no mobile com ícones de `22px` e `48px` no tablet), garantindo excelente ergonomia de toque na ponta dos dedos.
- **Bloqueio Total do Restante do Site:** Estrutura, botão voltar ao topo, cabeçalho e artigos 100% blindados.

---

## [v3.3.12] - 2026-10-06
### 💎 Pílula de Redes Sociais Ampliada Globalmente (+35% a 40%):
- **Desktop (PC):** Botões ampliados para `58px` com ícones nítidos de `30px`, badge `"SEGUIR"` com tipografia encorpada e padding generoso (`16px 14px 22px`).
- **Tablet:** Botões aumentados para `48px` com ícones de `24px` e espaçamentos proporcionais.
- **Mobile (Celular):** Botões ampliados para `42px` com ícones de `22px` (área de toque tátil confortável sem cobrir texto de leitura).
- **Trancamento do Restante do Site:** O botão de voltar ao topo, cabeçalho, artigos, ticker e todo o restante da estrutura continuam rigorosamente bloqueados e intocados.

---

## [v3.3.11] - 2026-10-05
### 🐛 Correção de Legibilidade no Botão "🎲 Surpreenda-me" (Navbar):
- **Contraste de Hover no Menu:** Corrigida a regra de estilo `.nav-surprise-btn:hover` com prioridade explícita (`color: #030a16 !important;`). Anteriormente, a regra genérica de links `.main-nav a:hover` forçava a cor azul sobre o fundo azul, tornando o texto invisível ao passar o mouse. Agora o texto permanece nítido e perfeitamente legível em alto contraste.

---

## [v3.3.10] - 2026-10-05
### 🚀 Botão "Voltar ao Topo" Sincronizado no Lado Esquerdo:
- **Exclusivo para Páginas de Conteúdo:** O botão circular suave de voltar ao topo foi reimplementado exclusivamente no catálogo (`artigos.html`) e nos artigos internos (nunca na Home `index.html`).
- **Posicionamento no Canto Esquerdo:** Fixado em `bottom: 24px; left: 24px;` (com adaptação para tablet e celular), garantindo total harmonia com a pílula de redes sociais que fica na direita.
- **Sincronização 100% Idêntica:** Compartilha exatamente o mesmo gatilho de 30% de rolagem da página (mínimo de 450px) dentro de um único motor de eventos. Quando o "SEGUIR" aparece na direita, o "Voltar ao Topo" surge instantaneamente na esquerda.

---

## [v3.3.9] - 2026-10-05
### 💎 Pílula de Redes Sociais com Presença Reforçada e Blur Cósmico Intenso:
- **Tamanho Ampliado no Desktop (PC):** Botões expandidos para `46px` com ícones nítidos de `23px` e badge de `"SEGUIR"` alongada (`10px 6px`), conferindo um visual sofisticado e marcante.
- **Posição Rebaixada nos 3 Modos:** Altura ajustada para `top: 340px` no desktop, `top: 290px` no tablet e `top: 240px` no celular, encaixando-se naturalmente na área central-lateral de leitura.
- **Blur Mais Forte e Vidro Translúcido:** Backdrop blur elevado para **`32px`** com opacidade calibrada (`rgba(11, 19, 36, 0.78)` no dark e `rgba(255, 255, 255, 0.85)` no light) em todos os dispositivos.
- **Integridade Mobile e Tablet Preservada:** Dimensões originais intocadas para celulares e tablets, garantindo leveza e conforto sem obstrução visual.

---

## [v3.3.8] - 2026-10-05
### 🎯 Calibração de Posição & Gatilho de 30% na Cápsula de Redes Sociais:
- **Posição Rebaixada e Equilibrada:** A cápsula foi descida na lateral para `top: 260px` no desktop, `top: 220px` no tablet e `top: 180px` no mobile, ficando em perfeita harmonia com o fluxo de leitura dos artigos.
- **Atraso de Rolagem de 30%:** O gatilho de exibição agora aguarda o usuário rolar aproximadamente 30% da página (mínimo de 450px), garantindo que ela não apareça imediatamente no topo e surja somente quando o visitante já está engajado com o conteúdo.

---

## [v3.3.7] - 2026-10-05
### 🚀 Implementação Exclusiva da Cápsula Lateral Flutuante de Redes Sociais:
- **Posição no Topo da Lateral Direita:** Fixada no canto direito superior (`top: 140px; right: 20px;`), iniciando exatamente onde a leitura começa, sem descer para o meio da tela.
- **Acabamento Visual Imponente no Desktop:** Cápsula espaçosa com vidro escuro cósmico, blur aprimorado (`24px`), borda translúcida e tag vertical *"SEGUIR"*, acompanhada de tooltips no hover para Facebook e Instagram.
- **Suporte Total a Tablet & Celular:** Ajuste responsivo calibrado (escala 0.92 em tablets e 0.84 em celulares), com padding compacto encostado na borda direita.
- **Detecção de Rolagem Universal:** Disparo a partir de 280px de rolagem ouvindo eventos de `scroll` e `touchmove` tanto no `window` quanto no `document`, garantindo ativação imediata e consistente em qualquer aparelho.

---

## [v3.3.6] - 2026-10-05
### 🧹 Limpeza de Elementos Flutuantes & Navbar Enxuta:
- **Remoção Completa de Elementos Flutuantes:** Removidos do código JavaScript e CSS tanto o botão *"Voltar ao Topo"* quanto a cápsula lateral flutuante de redes sociais (*floating-social-pill*), eliminando qualquer divergência ou bug de rolagem em celulares, tablets e computadores.
- **Navbar Desafogada Mantida:** O cabeçalho superior permanece sem o botão do Instagram, mantendo a logo, menu, busca e botão de alternância de tema limpos e bem distribuídos.

---

## [v3.3.5] - 2026-10-05
### 🚀 Navbar Desafogada & Cápsula Lateral Flutuante de Redes Sociais:
- **Navbar Desafogada:** Remoção do botão de Instagram no cabeçalho superior (`.header-actions`), liberando espaço visual limpo para o menu, busca e alternador de tema. O acesso ao Instagram no drawer mobile e no rodapé permanece intacto.
- **Cápsula Flutuante de Redes Sociais (`floating-social-pill`):** Nova barra lateral flutuante em formato de pílula vertical no canto direito inspirada no padrão editorial do *Fatos Desconhecidos*, contendo a tag vertical *"SEGUIR"* e os ícones minimalistas de **Facebook** e **Instagram**.
- **Gatilho de Rolagem Inteligente:** A cápsula lateral surge suavemente somente após uma rolagem substancial (~30% da página ou 480px), não invadindo o primeiro contato do visitante com o topo do site.
- **Micro-interações de Hover no Desktop:** Ao passar o mouse sobre cada ícone, surge um balão lateral suave com o nome da rede social (*Facebook* / *Instagram*).
- **Adaptação Mobile Compacta:** No celular, a cápsula adota escala compacta (escala 0.85) encostada na borda para não sobrepor textos de leitura.
- **Reorganização de Ações Flutuantes:** O botão *"Voltar ao Topo"* foi reposicionado discretamente no canto inferior esquerdo (`left: 24px`), evitando qualquer conflito com a cápsula lateral de redes sociais na direita.

---

## [v3.3.4] - 2026-09-29
### 💡 Ticker "Você Sabia?" Aprimorado (Tooltip Desktop & Bottom Sheet Mobile):
- **Desktop (Mouse Hover):** Ao passar o mouse sobre qualquer fato na fita "Você Sabia?", surge um balão flutuante suave (*tooltip card*) centralizado com borda cósmica azul, exibindo o fato integral sem nenhum corte e com o link de acesso direto à matéria correspondente.
- **Mobile (Toque Interativo):** No celular, tocar no fato abre uma folha de rodapé instantânea (*bottom sheet*) moderna e deslizante, com alça de arraste, categoria, texto completo e botão de leitura direta. Permite ler o fato na íntegra sem deformar ou empurrar o layout do Hero.
- **Transparência de Layout:** A fita permanece enxuta em 1 única linha no Hero, preservando a harmonia visual da página inicial.

---

## [v3.3.3] - 2026-09-28
### 🐛 Correção Responsiva no Destaque de `artigos.html`:
- **Eliminação de Limite Rígido de Altura:** Removido o `max-height: 420px;` e `overflow: hidden;` que causava o corte abrupto do título e da descrição do artigo principal.
- **Tipografia Fluida e Padding Proporcional:** Ajustado o título para `clamp(1.65rem, 2.5vw, 2.45rem)` com padding dinâmico e flexibilidade natural. Agora o texto, subtítulo, meta e botão de leitura são exibidos 100% íntegros e legíveis no Desktop, Tablet e Mobile.

---

## [v3.3.2] - 2026-09-28
### 🚀 Melhorias de Usabilidade, Contador & Catálogo:
- **Botão Inteligente "Voltar ao Topo" (Scroll to Top):** Botão flutuante suave circular adicionado nas páginas de leitura e catálogo de artigos (`artigos.html` e matérias internas). O botão permanece invisível na Home e só surge após rolagem substancial (>420px), com retorno suave animado.
- **Card de Destaque Calibrado no Desktop (`artigos.html`):** Altura do artigo principal *"O universo está cheio de coisas que parecem impossíveis"* reduzida em ~18% (de 460px para 380px), permitindo visualizar a grade de matérias logo abaixo com muito menos rolagem de mouse.
- **Contador do Instagram Atualizado (+59.000):** Base ajustada para 59.000 seguidores com frequência de pulso mais ágil (intervalos de 4 a 9 segundos), acompanhando o ritmo do perfil.
- **Emojis Universais no "Você Sabia?":** Substituição de glifos Unicode recentes que causavam quadrados em alguns celulares antigos (água-viva por onda marinha `🌊` e capacete por escudo `🛡️`), garantindo 100% de compatibilidade em qualquer dispositivo.

---

## [v3.3.1] - 2026-09-28
### 🐛 Correção de Layout Mobile no Modal de Contato:
- **Card de E-mail Responsivo:** Ajustada a regra `.contact-card-box` com `flex-wrap: wrap;` e quebra de palavras segura (`word-break: break-all;`) no endereço de e-mail. Agora o botão *"📋 Copiar e-mail"* nunca mais transborda para fora da tela no celular, acomodando-se perfeitamente dentro do cartão.
- **E-mail Oficial Atualizado:** Substituído o endereço temporário pelo e-mail definitivo oficial: `contatocuriosidadesincriveis6@gmail.com` em todos os modais, rodapés e rotinas de cópia de 1 clique.

---

## [v3.3.0] - 2026-09-28
### 🐾 Segundo Artigo Editorial Integrado ao Instagram (Interação Animal & Etologia):
- **Novo Artigo Publicado:** *"Eles Sentem o Que Sentimos? A ciência real por trás dos animais que se aproximam de nós"* (`artigos/animais-humanos-aproximacao.html`).
- **Categoria:** Animais (`animais`).
- **Tempo de Leitura:** 5 min de leitura (Nível 2 — Médio).
- **Arte Original:** Ilustração de alta fidelidade cinematográfica retratando o encontro pacífico entre mergulhador e leão-marinho em águas cristalinas (`images/artigo-animais-humanos.jpg`).
- **Precisão Etológica & Estrutura de Retenção:**
  - Desmistificação do antropomorfismo com respeito à riqueza emocional e cognitiva animal.
  - Explicação do fenômeno de *mud-puddling* (busca de sais minerais no suor por certos insetos) sem generalizações indevidas.
  - Abordagem cuidadosa sobre a neofilia e o comportamento lúdico em mamíferos inteligentes (pinípedes, golfinhos).
  - Distinção didática crucial entre habituação pacífica e condicionamento alimentar de risco.
  - Inclusão dos blocos interativos (💡 Puddling e Sais Minerais e ✨ Regra do Polegar na Conservação).
- **Indexação & Catálogo:** Artigo adicionado ao sitemap (`sitemap.xml`), buscador ao vivo, filtro dinâmico de Animais e catálogo de `artigos.html`.

---

## [v3.2.0] - 2026-09-27
### 🦖 Primeiro Artigo do Canal Editorial Integrado ao Instagram:
- **Novo Artigo Publicado:** *"Os Dinossauros Não Foram Extintos: Como as aves modernas guardam o legado dos gigantes pré-históricos"* (`artigos/dinossauros-aves-evolucao.html`).
- **Categoria:** Ciência (`ciencia`).
- **Arte Original:** Ilustração de alta fidelidade cinematográfica retratando o paralelo evolutivo entre dinossauros terópodes e aves modernas (`images/artigo-dinossauros-aves.jpg`).
- **Rigor Científico Calibrado & Revisão Fina:**
  - Inclusão prudente sobre o impacto K-Pg (poeira, fuligem, aerossóis de enxofre e debate sobre extensão dos incêndios).
  - Sobrevivência das aves tratada com multiplicidade de fatores (tamanho, dieta generalista e hipótese das sementes).
  - Evolução convergente focada na busca por folhagens altas, contextualizando hipóteses secundárias.
  - Contextualização do estudo do moa (2012) para a meia-vida do DNA, evitando afirmações absolutas.
  - Distinção precisa entre as penas aerodinâmicas do *Microraptor* e as penas simétricas não voadoras do *Caudipteryx*.
  - Uso de termos anatômicos corretos (homologia de membros posteriores em vez de "idênticos").
  - Calibração temporal dos estudos de colágeno fóssil de *T. rex* (2007-2008) como evidência complementar à osteologia.
- **Indexação & Catálogo:** Artigo integrado ao buscador em tempo real, grid da categoria Ciência, listagem de artigos e mapeado no `sitemap.xml`.

---

## [v3.1.1] - 2026-09-27
### ⚡ Filtro Instantâneo em Artigos (Sem Recarregamento de Página):
- **Navegação Dinâmica no Catálogo:** Clicar nas categorias em `artigos.html` agora filtra instantaneamente os cards no próprio lugar em tempo real, sem recarregar a tela, sem salto para o topo e mantendo a URL atualizada via History API.

### 📐 Hero & Decoração de Interrogação [?] no Catálogo:
- **Alinhamento Lateral no PC:** Restaurado o alinhamento lado a lado (`flex-direction: row; justify-content: space-between;`) no desktop, mantendo o bloco com o ponto de interrogação `[?]` à direita do título principal.
- **Mobile Preservado:** Mantido oculto no mobile (`display: none;`) para não ocupar espaço vertical excessivo no celular, conforme solicitado.

### 🚀 Novos Recursos Não Invasivos Aprovados:
- **Barra de Progresso de Leitura:** Indicador sutil de rolagem no topo da tela com gradiente cósmico (azul/ouro) para enriquecer a experiência de leitura.
- **Selo de Autoridade Editorial:** Inclusão discreta de *"✦ Fatos Verificados"* no rodapé.
- **Página 404 Personalizada Cósmica (`404.html`):** Tratamento de links inexistentes com tema espacial imersivo e botão para retorno ao início.

---

## [v3.1.0] - 2026-09-27
### 🔍 Buscador com Recomendações & Resultados ao Vivo:
- **Chips de Sugestão:** Inclusão de tópicos em alta e tags temáticas diretas dentro do modal de pesquisa (Polvo, Universo, IA, Krakatoa, Ponto Nemo, Alexandria).
- **Resultados Instantâneos na Busca:** Digitar exibe imediatamente os cards de artigos compatíveis com capa, categoria e link direto sem necessidade de fechar a busca.

### 📚 Seção "Em Alta" Dinâmica:
- **Expansão para 8 Artigos em "Todas":** A grade inicial agora exibe 8 grandes artigos em destaque.
- **5 Artigos por Categoria:** Ao filtrar por Animais, Ciência, Tecnologia, História ou Mundo, o catálogo exibe os 5 artigos da respectiva categoria, mantendo a home ágil e equilibrada.

### 📬 Rodapé Profissional (Contato & Privacidade):
- **Modal de Contato Interativo:** Substituição do protocolo `mailto:` por um modal visual com e-mail oficial, botão "📋 Copiar e-mail" com feedback instantâneo e botão direto para o Instagram Direct.
- **Modal de Política de Privacidade (LGPD):** Termos completos sobre cookies anônimos do Google Analytics, armazenamento seguro de preferências e garantia de não comercialização de dados.

---

## [v3.0.3] - 2026-09-27
### 🖥️ Lapidação do Layout Responsivo:
- **Respiro no Modo Tablet:** Correção do container do Hero abaixo de 900px, eliminando colagem na borda esquerda.
- **Posicionamento do Contador no PC:** Âncora restaurada no canto inferior direito (`right: 0; bottom: 0`).
- **Harmonia do Destaque:** Aumento do respiro superior e redução sutil dos espaçamentos entre título e subtítulo.

---

## [v3.0.2] - 2026-09-25 (Versão Atual)
### 📱 Correção de Layout Mobile & Lapidação do Hero:
- **Alinhamento Vertical Natural do Hero:**
  - Corrigido o fluxo de exibição para que cada elemento fique estritamente um abaixo do outro na vertical: `[— EM DESTAQUE]` ➔ `[Título Principal H1]` ➔ `[Subtítulo / Descrição]` ➔ `[Botões de Ação]`.
  - Botões `Ler agora →` e `Ver todos os artigos` agora se adaptam com quebra responsiva limpa e 100% visíveis em qualquer celular, sem truncamento.
- **Cor Oficial do Eyebrow:**
  - A palavra e o traço `— EM DESTAQUE` agora utilizam exatamente o azul cósmico oficial da paleta (`var(--blue)` / `#169eff`), exatamente como na referência visual do design.
- **Imagem de Fundo e Desfoque Preservados:**
  - O desfoque cósmico (`blur(2.6px)`), iluminação e camadas da arte de fundo permanecem intocados e perfeitos tanto no desktop quanto no mobile.

---

## [v3.0.1] - 2026-09-25
### 📈 Ajustes & Calibração da Comunidade:
- **Calibração de Base do Instagram:**
  - Ajustado o número base para **55.940 seguidores**, permitindo que o efeito orgânico ao vivo continue subindo e ultrapasse naturalmente a barreira dos 56.000 seguidores em perfeita harmonia com o crescimento real da página.
  - Atualizadas as menções de copy para "+55 mil seguidores / mentes curiosas".

---

## [v3.0.0] - 2026-09-25
### 🚀 Destaques Principais:
- **Contador Vivo de Comunidade (Instagram):**
  - Implementado contador de seguidores dinâmico com animação fluida (smooth easing), indicador pulsante verde de status "Ao Vivo" e link direto para o Instagram oficial `@curiosidades.incriveis6`.
  - Configuração centralizada para atualização do número base de seguidores com micro-incrementos dinâmicos.
- **Catálogo Expandido com 25 Artigos Oficiais:**
  - Inclusão dos 18 novos artigos completos distribuídos pelas 5 categorias oficiais (Animais, Ciência, Tecnologia, História, Mundo).
  - Geração de 25 imagens fotográficas e conceituais exclusivas (100% de unicidade nos hashes visuais).
- **Rastreamento de Tráfego Global:**
  - Instalação e propagação da tag oficial do Google Analytics (`gtag.js` - `G-QEP986Z15Q`) em todas as páginas, índice e catálogo.
- **Lapidação & Performance:**
  - Remoção de qualquer dependência ou arquivo de imagem duplicado.
  - Sincronização entre template estático HTML/JS puro e a aplicação interativa.

---

## [v2.0.0] - 2026-09-24
### ✨ Novidades e Melhorias:
- **Painel de Artigos e Categorização:**
  - Criação da página `artigos.html` com filtros interativos em tempo real por categoria e barra de pesquisa inteligente.
  - Implementação da mecânica "🎲 Curiosidade Aleatória" (Surpreenda-me) na home e no drawer móvel.
- **Ticker Cósmico:**
  - Criação do ticker animado "💡 VOCÊ SABIA?" com botão para alternar fatos rápidos.
- **Melhorias Visuais e Responsividade:**
  - Ajustes de tipografia em Space Grotesk e Plus Jakarta Sans.
  - Header fixo com efeito de vidro (backdrop-blur) e drawer para dispositivos móveis.

---

## [v1.0.0] - 2026-09-23
### 🌟 Lançamento Inicial:
- Estrutura base da plataforma Curiosidades Incríveis.
- Layout escuro cósmico, estética refinada em tons azul-profundo e dourado.
- Primeiros 7 artigos de lançamento e links para redes sociais.
