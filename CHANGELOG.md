# CHANGELOG — Curiosidades Incríveis

Todas as alterações notáveis deste projeto são registradas neste documento histórico de versões.

---

## [v3.3.3] - 2026-09-28 (Versão Atual)
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
