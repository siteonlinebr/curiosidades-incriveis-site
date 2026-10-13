import os, json, re
from generate_news_data import news_list

# Verify count
assert len(news_list) == 18, f"Expected 18 news items, got {len(news_list)}"

# 1. GENERATE news-data.js
news_items_json = []
for item in news_list:
    news_items_json.append({
        "id": item["id"],
        "slug": item["slug"],
        "title": item["title"],
        "summary": item["summary"],
        "category": item["category"],
        "categorySlug": item["categorySlug"],
        "publishedAt": item["publishedAt"],
        "sourceDate": item["sourceDate"],
        "readingTime": item["readingTime"],
        "image": item["image"],
        "imageCredit": item["imageCredit"],
        "isFeaturedHero": item["isFeaturedHero"],
        "isLatest": item["isLatest"],
        "link": f"noticias/{item['slug']}.html"
    })

news_data_js_content = f"""// =========================================================
// CURIOSIDADES INCRÍVEIS — DADOS OFICIAIS DA ÁREA DE NOTÍCIAS
// =========================================================
// 18 Notícias Reais devidamente checadas e validadas jornalisticamente.
// Distribuição: Tecnologia (3), Games (3), Política (2), Ciência (3),
// Animais (3), Mundo (2), Entretenimento (2).
// =========================================================

function calculateRelativeTime(dateInput) {{
  const date = new Date(dateInput);
  const now = new Date("2026-10-13T16:00:00Z"); // Data de referência da publicação
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (isNaN(diffInSeconds) || diffInSeconds < 0) {{
    return 'agora há pouco';
  }}

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 1) {{
    return 'agora há pouco';
  }}
  if (diffInMinutes < 60) {{
    return `há ${{diffInMinutes}} min`;
  }}

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours === 1) {{
    return 'há 1 hora';
  }}
  if (diffInHours < 24) {{
    return `há ${{diffInHours}} horas`;
  }}

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {{
    return 'ontem';
  }}
  if (diffInDays < 7) {{
    return `há ${{diffInDays}} dias`;
  }}

  return date.toLocaleDateString('pt-BR', {{ day: '2-digit', month: 'short', year: 'numeric' }});
}}

const officialNews = {json.dumps(news_items_json, ensure_ascii=False, indent=2)};

// Exporta globalmente para uso pelo script da página
window.CI_NEWS = {{
  items: officialNews,
  calculateRelativeTime: calculateRelativeTime
}};
"""

with open('news-data.js', 'w', encoding='utf-8') as f:
    f.write(news_data_js_content)
with open('public/news-data.js', 'w', encoding='utf-8') as f:
    f.write(news_data_js_content)

print("Generated news-data.js and public/news-data.js.")

# 2. GENERATE 18 HTML INDIVIDUAL PAGES
os.makedirs('noticias', exist_ok=True)
os.makedirs('public/noticias', exist_ok=True)

def generate_recommendations(current_slug, current_cat_slug):
    pool = [n for n in news_list if n['slug'] != current_slug]
    same_cat = [n for n in pool if n['categorySlug'] == current_cat_slug]
    diff_cat = [n for n in pool if n['categorySlug'] != current_cat_slug]
    
    recs = []
    if len(same_cat) >= 2:
        recs.extend(same_cat[:2])
        if diff_cat:
            recs.append(diff_cat[0])
        elif len(same_cat) > 2:
            recs.append(same_cat[2])
    elif len(same_cat) == 1:
        recs.append(same_cat[0])
        recs.extend(diff_cat[:2])
    else:
        recs.extend(diff_cat[:3])
    
    while len(recs) < 3 and pool:
        for p in pool:
            if p not in recs:
                recs.append(p)
                if len(recs) == 3: break
    return recs[:3]

for item in news_list:
    slug = item['slug']
    title = item['title']
    summary = item['summary']
    cat = item['category']
    cat_slug = item['categorySlug']
    reading_time = item['readingTime']
    image = item['image']
    img_credit = item['imageCredit']
    paragraphs_html = "\n".join([f"          <p>{p}</p>" for p in item['paragraphs']])
    
    sources_html = "\n".join([
        f'              <li><a href="{s["url"]}" target="_blank" rel="noopener noreferrer" style="color: var(--blue); font-weight: 500;">{s["name"]} ↗</a></li>'
        for s in item['sources']
    ])
    
    # 3 recommendations
    recs = generate_recommendations(slug, cat_slug)
    recs_cards_html = []
    for r in recs:
        recs_cards_html.append(f"""            <article class="continue-card">
              <a class="continue-card-image" href="{r['slug']}.html" title="Ler: {r['title']}">
                <img src="../{r['image']}" alt="{r['title']}" loading="lazy">
                <span class="continue-card-badge">{r['category'].upper()}</span>
              </a>
              <div class="continue-card-body">
                <div class="continue-card-meta">
                  <span>{r['readingTime']}</span>
                  <span>•</span>
                  <span>{r['category']}</span>
                </div>
                <h3 class="continue-card-title">
                  <a href="{r['slug']}.html">{r['title']}</a>
                </h3>
                <p class="continue-card-excerpt">{r['summary']}</p>
                <a class="continue-card-link" href="{r['slug']}.html">
                  Ler notícia <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>""")
    recs_cards_str = "\n".join(recs_cards_html)
    
    # JSON-LD NewsArticle
    schema_json = json.dumps({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": title,
        "description": summary,
        "image": [f"https://curiosidadesincriveis.com/{image}"],
        "datePublished": item["publishedAt"],
        "dateModified": item["publishedAt"],
        "articleSection": cat,
        "author": {
            "@type": "Organization",
            "name": "Curiosidades Incríveis",
            "url": "https://curiosidadesincriveis.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Curiosidades Incríveis",
            "logo": {
                "@type": "ImageObject",
                "url": "https://curiosidadesincriveis.com/favicon.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": f"https://curiosidadesincriveis.com/noticias/{slug}.html"
        }
    }, ensure_ascii=False, indent=2)

    page_html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} • Notícias • Curiosidades Incríveis</title>
  <meta name="description" content="{summary}">
  <link rel="canonical" href="https://curiosidadesincriveis.com/noticias/{slug}.html">
  <link rel="icon" type="image/png" href="../favicon.png">

  <!-- Open Graph / Meta Compartilhamento -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{summary}">
  <meta property="og:image" content="https://curiosidadesincriveis.com/{image}">
  <meta property="og:url" content="https://curiosidadesincriveis.com/noticias/{slug}.html">
  <meta property="article:section" content="{cat}">
  <meta property="article:published_time" content="{item['publishedAt']}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{summary}">
  <meta name="twitter:image" content="https://curiosidadesincriveis.com/{image}">

  <!-- Schema.org NewsArticle (JSON-LD) -->
  <script type="application/ld+json">
{schema_json}
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../style.css?v=3.6.0">

  <script>
    (function () {{
      try {{
        var saved = localStorage.getItem("ci-theme");
        if (saved === "light") {{
          document.documentElement.dataset.theme = "light";
        }} else {{
          delete document.documentElement.dataset.theme;
        }}
      }} catch (e) {{}}
    }})();
  </script>
</head>
<body>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

  <!-- CABEÇALHO PRINCIPAL -->
  <header class="site-header">
    <div class="header-inner container">
      <a class="brand" href="../index.html" aria-label="Curiosidades Incríveis - início">
        <img class="brand-logo" src="../favicon.png" alt="">
        <span>Curiosidades <strong>Incríveis</strong></span>
      </a>

      <!-- MENU DESKTOP -->
      <nav class="main-nav" aria-label="Navegação principal">
        <a href="../index.html">Início</a>
        <a href="../artigos.html">Artigos</a>
        <a class="active" href="../noticias.html">Notícias</a>
      </nav>

      <!-- AÇÕES DO TOPO -->
      <div class="header-actions">
        <!-- BOTÃO EXPLORAR (ESTRELA) COM MENU FLUTUANTE -->
        <div class="nav-explore-wrapper">
          <button class="icon-button nav-explore-trigger" id="nav-explore-trigger" type="button" aria-label="Explorar seções" aria-expanded="false" aria-haspopup="true" title="Explorar (Em alta, Recentes, Categorias)">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
          <div class="nav-explore-menu" id="nav-explore-menu" role="menu" aria-label="Menu de exploração">
            <a class="nav-explore-item" href="../index.html#em-alta" role="menuitem">
              <span class="explore-item-icon">🔥</span>
              <span class="explore-item-content">
                <span class="explore-item-title">Em alta</span>
                <span class="explore-item-sub">Destaques e tendências</span>
              </span>
            </a>
            <a class="nav-explore-item" href="../index.html#recentes" role="menuitem">
              <span class="explore-item-icon">⏱️</span>
              <span class="explore-item-content">
                <span class="explore-item-title">Recentes</span>
                <span class="explore-item-sub">Últimas publicações</span>
              </span>
            </a>
            <a class="nav-explore-item" href="../index.html#categorias" role="menuitem">
              <span class="explore-item-icon">🗂️</span>
              <span class="explore-item-content">
                <span class="explore-item-title">Categorias</span>
                <span class="explore-item-sub">Explore por assunto</span>
              </span>
            </a>
          </div>
        </div>

        <button class="icon-button search-trigger" type="button" aria-label="Abrir pesquisa" aria-expanded="false">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"></path></svg>
        </button>

        <!-- SELETOR VISUAL DE TEMA COM PÍLULA E TEXTO -->
        <div class="theme-switch" role="group" aria-label="Controle de tema">
          <span class="theme-switch-indicator" aria-hidden="true"></span>
          <button class="theme-switch-btn" type="button" data-theme-choice="light" aria-label="Ativar modo claro">
            <span class="theme-switch-text">CLARO</span>
            <span class="theme-switch-icon" aria-hidden="true">☀️</span>
          </button>
          <button class="theme-switch-btn" type="button" data-theme-choice="dark" aria-label="Ativar modo escuro">
            <span class="theme-switch-text">ESCURO</span>
            <span class="theme-switch-icon" aria-hidden="true">🌙</span>
          </button>
        </div>

        <a class="instagram-button" href="https://www.instagram.com/curiosidades.incriveis6" target="_blank" rel="noreferrer">Instagram ↗</a>

        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- GAVETA LATERAL MOBILE (DRAWER) -->
  <div class="drawer-overlay" id="drawer-overlay"></div>
  <div class="mobile-drawer" id="mobile-drawer" aria-label="Menu móvel">
    <div class="drawer-header">
      <a class="brand" href="../index.html">
        <img class="brand-logo" src="../favicon.png" alt="">
        <span>Curiosidades <strong>Incríveis</strong></span>
      </a>
      <button class="drawer-close" id="drawer-close" type="button" aria-label="Fechar menu">✕</button>
    </div>

    <nav class="drawer-nav">
      <a href="../index.html">🏠 Início</a>
      <a href="../artigos.html">📚 Todos os Artigos</a>
      <a class="active" href="../noticias.html">📰 Notícias</a>
      <button class="nav-surprise-btn drawer-surprise-btn" type="button" style="margin: 8px 0; justify-content: center;">
        <span>🎲</span> Curiosidade Aleatória
      </button>

      <div class="drawer-section-title">Categorias</div>
      <div class="drawer-categories">
        <a href="../artigos.html?categoria=animais">🐾 Animais</a>
        <a href="../artigos.html?categoria=ciencia">🔬 Ciência</a>
        <a href="../artigos.html?categoria=tecnologia">💻 Tecnologia</a>
        <a href="../artigos.html?categoria=historia">📜 História</a>
        <a href="../artigos.html?categoria=mundo">🌍 Mundo</a>
      </div>
    </nav>

    <div class="drawer-theme-section">
      <div class="drawer-section-title">Tema do site</div>
      <div class="theme-switch drawer-theme-switch" role="group" aria-label="Controle de tema">
        <span class="theme-switch-indicator" aria-hidden="true"></span>
        <button class="theme-switch-btn" type="button" data-theme-choice="light" aria-label="Ativar modo claro">
          <span class="theme-switch-text">CLARO</span>
          <span class="theme-switch-icon" aria-hidden="true">☀️</span>
        </button>
        <button class="theme-switch-btn" type="button" data-theme-choice="dark" aria-label="Ativar modo escuro">
          <span class="theme-switch-text">ESCURO</span>
          <span class="theme-switch-icon" aria-hidden="true">🌙</span>
        </button>
      </div>
    </div>

    <div class="drawer-footer">
      <a class="instagram-button" href="https://www.instagram.com/curiosidades.incriveis6" target="_blank" rel="noreferrer" style="justify-content: center;">
        Seguir no Instagram ↗
      </a>
    </div>
  </div>

  <!-- CONTEÚDO DA NOTÍCIA -->
  <main class="container article-page" id="conteudo">
    <article class="article-page-layout">
      <!-- BREADCRUMB -->
      <div class="breadcrumb" style="margin-bottom: 18px;">
        <a href="../index.html">Início</a> <span aria-hidden="true">›</span>
        <a href="../noticias.html">Notícias</a> <span aria-hidden="true">›</span>
        <span>{cat}</span>
      </div>

      <!-- CABEÇALHO DA MATÉRIA -->
      <header class="article-header">
        <span class="eyebrow accent"><span></span> NOTÍCIAS • {cat.upper()}</span>
        <h1>{title}</h1>
        <p class="article-header-lead">
          {summary}
        </p>

        <div class="article-header-meta">
          <div class="article-meta-left">
            <img src="../favicon.png" alt="Curiosidades Incríveis" class="author-avatar">
            <div>
              <strong>Redação Curiosidades Incríveis</strong>
              <div class="card-meta">Publicado em 13 de outubro de 2026 • {reading_time} • Fatos Verificados</div>
            </div>
          </div>
        </div>
      </header>

      <!-- IMAGEM DE DESTAQUE -->
      <div class="article-banner-hero" style="position: relative;">
        <img src="../{image}" alt="{title}">
        <span class="news-credit-tag" style="position: absolute; bottom: 12px; right: 14px; background: rgba(9, 20, 38, 0.85); backdrop-filter: blur(8px); padding: 5px 12px; border-radius: 6px; font-size: 0.72rem; color: #e2e8f0; border: 1px solid rgba(255, 255, 255, 0.15);">
          {img_credit}
        </span>
      </div>

      <!-- CORPO DA MATÉRIA -->
      <div class="article-body-container">
        <div class="article-prose">
{paragraphs_html}

          <div class="article-highlight-box">
            💡 <strong>Ressalva Factual & Contexto:</strong> {item['caveat']}
          </div>
        </div>

        <!-- FONTES CONSULTADAS -->
        <div class="news-sources-box" style="margin: 40px 0 28px; padding: 22px 26px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface);">
          <h3 style="font-size: 1.05rem; margin-top: 0; margin-bottom: 12px; color: var(--text); font-family: 'Space Grotesk', sans-serif;">
            🔗 Fontes e Referências Oficiais Consultadas
          </h3>
          <ul style="padding-left: 20px; margin-bottom: 0; display: flex; flex-direction: column; gap: 8px;">
{sources_html}
          </ul>
        </div>

        <!-- AÇÕES / VOLTAR -->
        <div class="article-share-footer">
          <a class="button button-light" href="../noticias.html">← Voltar para Notícias</a>
          <a class="button button-primary" href="https://www.instagram.com/curiosidades.incriveis6" target="_blank" rel="noopener noreferrer">
            Seguir no Instagram →
          </a>
        </div>

        <!-- SEÇÃO: 🧭 OUTRAS NOTÍCIAS RECENTES -->
        <section class="continue-explorando-section" id="continue-explorando" aria-labelledby="continue-explorando-heading">
          <div class="continue-explorando-header">
            <div class="continue-explorando-badge">
              <span class="badge-dot" aria-hidden="true"></span> RECOMENDADOS PARA VOCÊ
            </div>
            <h2 class="continue-explorando-title" id="continue-explorando-heading">
              🧭 Outras Notícias Recentes
            </h2>
            <p class="continue-explorando-desc">
              Acompanhe outros acontecimentos e descobertas verificadas no portal.
            </p>
          </div>
          <div class="continue-explorando-grid">
{recs_cards_str}
          </div>
        </section>
      </div>
    </article>
  </main>

  <!-- RODAPÉ PRINCIPAL -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" href="../index.html">
          <img class="brand-logo" src="../favicon.png" alt="">
          <span>Curiosidades <strong>Incríveis</strong></span>
        </a>
        <p>Um lugar para descobrir algo novo todos os dias.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <a href="../index.html">Início</a>
        <a href="../artigos.html">Artigos</a>
        <a href="../noticias.html">Notícias</a>
        <a href="../index.html#em-alta">Em alta</a>
      </div>
      <div>
        <h3>Categorias</h3>
        <a href="../artigos.html?categoria=animais">Animais</a>
        <a href="../artigos.html?categoria=ciencia">Ciência</a>
        <a href="../artigos.html?categoria=tecnologia">Tecnologia</a>
        <a href="../artigos.html?categoria=historia">História</a>
        <a href="../artigos.html?categoria=mundo">Mundo</a>
      </div>
      <div>
        <h3>Conecte-se</h3>
        <a href="https://www.instagram.com/curiosidades.incriveis6" target="_blank" rel="noopener noreferrer">Instagram</a>
        <button type="button" class="footer-link-btn" id="footer-contact-btn">Contato</button>
        <button type="button" class="footer-link-btn" id="footer-privacy-btn">Política de privacidade</button>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 Curiosidades Incríveis • ✦ Fatos Verificados</span>
      <span>Feito para quem gosta de descobrir.</span>
    </div>
  </footer>

  <!-- MODAL DE CONTATO -->
  <div class="modal-overlay" id="contact-modal" aria-hidden="true">
    <div class="modal-box">
      <div class="modal-header">
        <h3>📬 Entre em Contato</h3>
        <button type="button" class="modal-close-btn" data-close-modal="contact-modal" aria-label="Fechar">✕</button>
      </div>
      <div class="modal-body">
        <p>Tem uma sugestão de pauta intrigante, dúvida, feedback ou proposta de parceria? Adoramos conversar com mentes curiosas!</p>
        <div class="contact-card-box">
          <div>
            <span style="font-size: 0.75rem; color: var(--muted); text-transform: uppercase; font-weight: 700; display: block;">E-mail oficial</span>
            <strong id="contact-email-text" style="font-size: 0.92rem;">contatocuriosidadesincriveis6@gmail.com</strong>
          </div>
          <button type="button" class="copy-email-btn" id="copy-email-action">📋 Copiar e-mail</button>
        </div>
        <div style="margin-top: 18px; display: flex; gap: 10px; flex-wrap: wrap;">
          <a class="button button-primary" href="https://www.instagram.com/curiosidades.incriveis6" target="_blank" rel="noreferrer" style="flex: 1; min-width: 200px; text-decoration: none;">
            Falar no Instagram Direct ↗
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL DE POLÍTICA DE PRIVACIDADE -->
  <div class="modal-overlay" id="privacy-modal" aria-hidden="true">
    <div class="modal-box">
      <div class="modal-header">
        <h3>🔒 Política de Privacidade</h3>
        <button type="button" class="modal-close-btn" data-close-modal="privacy-modal" aria-label="Fechar">✕</button>
      </div>
      <div class="modal-body">
        <p>A sua privacidade é prioridade absoluta no <strong>Curiosidades Incríveis</strong>. Nosso compromisso é com o conhecimento transparente e seguro:</p>
        <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
          <li><strong>Zero venda de dados:</strong> Nunca comercializamos, alugamos ou compartilhamos dados pessoais com terceiros.</li>
          <li><strong>Google Analytics:</strong> Utilizamos o Google Analytics (G-QEP986Z15Q) de forma agregada e anônima apenas para entender quais temas despertam mais interesse.</li>
          <li><strong>Cookies técnicos:</strong> Armazenamos apenas preferências essenciais no seu navegador (como a escolha de tema Claro/Escuro via localStorage).</li>
          <li><strong>LGPD / GDPR:</strong> Respeitamos integralmente os seus direitos de titular de dados conforme a legislação vigente.</li>
        </ul>
        <p style="font-size: 0.82rem; color: var(--muted); margin-bottom: 0;">Dúvidas sobre privacidade? Escreva para <a href="mailto:contatocuriosidadesincriveis6@gmail.com" style="color: var(--blue);">contatocuriosidadesincriveis6@gmail.com</a>.</p>
      </div>
    </div>
  </div>

  <script src="../script.js"></script>
</body>
</html>
"""

    with open(f'noticias/{slug}.html', 'w', encoding='utf-8') as f:
        f.write(page_html)
    with open(f'public/noticias/{slug}.html', 'w', encoding='utf-8') as f:
        f.write(page_html)

print("Generated all 18 HTML files in noticias/ and public/noticias/!")
