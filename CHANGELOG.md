# CHANGELOG — Curiosidades Incríveis

Todas as alterações notáveis deste projeto são registradas neste documento histórico de versões.

---

## [v3.1.0] - 2026-09-27 (Versão Atual)
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
