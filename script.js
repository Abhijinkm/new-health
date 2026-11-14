/**
 * HEALTHCARE FOR YOU - Main Client Application Logic & Clinical Router
 * Evidence-Based Digital Health Education & Prevention Platform
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentLang: 'en',
    currentRoute: 'home',
    selectedCategory: 'all',
    selectedLetter: 'all',
    searchQuery: '',
    currentDiseaseModal: null,
    breathingTimer: null,
    breathingStep: 0,
    breathingActive: false
  };

  // DOM Elements Cache
  const dom = {
    html: document.documentElement,
    appMain: document.getElementById('appMain'),
    langSelector: document.getElementById('langSelector'),
    globalHeaderSearch: document.getElementById('globalHeaderSearch'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    closeDrawerBtn: document.getElementById('closeDrawerBtn'),
    
    // Disease Modal Elements
    diseaseModalOverlay: document.getElementById('diseaseModalOverlay'),
    btnCloseDiseaseModal: document.getElementById('btnCloseDiseaseModal'),
    btnModalCloseBottom: document.getElementById('btnModalCloseBottom'),
    btnModalPrint: document.getElementById('btnModalPrint'),
    
    // Article Modal Elements
    articleModalOverlay: document.getElementById('articleModalOverlay'),
    btnCloseArticleModal: document.getElementById('btnCloseArticleModal'),
    btnCloseArticleBottom: document.getElementById('btnCloseArticleBottom'),
    
    // Grids & Containers
    featuredDiseasesGrid: document.getElementById('featuredDiseasesGrid'),
    allDiseasesGrid: document.getElementById('allDiseasesGrid'),
    lifestyleDiseasesGrid: document.getElementById('lifestyleDiseasesGrid'),
    homePreventionGrid: document.getElementById('homePreventionGrid'),
    preventionDetailList: document.getElementById('preventionDetailList'),
    homeArticlesGrid: document.getElementById('homeArticlesGrid'),
    allArticlesGrid: document.getElementById('allArticlesGrid'),
    homeCategoryPills: document.getElementById('homeCategoryPills'),
    alphabetFilterStrip: document.getElementById('alphabetFilterStrip'),
    diseaseCategoryFilter: document.getElementById('diseaseCategoryFilter'),
    diseaseLibrarySearch: document.getElementById('diseaseLibrarySearch'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    diseaseResultsCount: document.getElementById('diseaseResultsCount'),
    
    // Nutrition
    mealIdeasContainer: document.getElementById('mealIdeasContainer'),
    conditionFoodsContainer: document.getElementById('conditionFoodsContainer'),
    foodPillarsContainer: document.getElementById('foodPillarsContainer'),

    // Contact
    contactForm: document.getElementById('contactForm'),
    contactToast: document.getElementById('contactToast')
  };

  /**
   * Safe access to HEALTH_DATA
   */
  function getData() {
    return window.HEALTH_DATA || { categories: [], diseases: [], preventionGuides: [], nutrition: {}, articles: [], i18n: {} };
  }

  /**
   * Router: Hash-based Single Page App Navigation
   */
  function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Initial load
  }

  function handleRoute() {
    const rawHash = window.location.hash.replace('#', '').trim();
    const validRoutes = [
      'home', 'diseases', 'lifestyle', 'prevention', 'nutrition', 
      'fitness', 'mental-health', 'symptom-checker', 'risk-assessment', 
      'articles', 'about', 'contact', 'disclaimer'
    ];

    let targetRoute = 'home';
    if (validRoutes.includes(rawHash)) {
      targetRoute = rawHash;
    }

    state.currentRoute = targetRoute;
    switchView(targetRoute);
    updateNavHighlight(targetRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileDrawer();
  }

  function switchView(routeId) {
    const views = document.querySelectorAll('.app-view');
    views.forEach(v => v.classList.remove('active'));

    const activeView = document.getElementById(`view-${routeId}`);
    if (activeView) {
      activeView.classList.add('active');
    }

    // Trigger icon re-render if lucide is available
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function updateNavHighlight(routeId) {
    const desktopLinks = document.querySelectorAll('.nav-item');
    desktopLinks.forEach(link => {
      if (link.dataset.page === routeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      if (link.dataset.page === routeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Multilingual (i18n) Engine
   */
  function initI18n() {
    if (dom.langSelector) {
      dom.langSelector.value = state.currentLang;
      dom.langSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }
    applyTranslations();
  }

  function setLanguage(lang) {
    const data = getData();
    if (!data.i18n || !data.i18n[lang]) return;

    state.currentLang = lang;
    dom.html.setAttribute('lang', lang);

    // Set RTL direction for Arabic
    if (lang === 'ar') {
      dom.html.setAttribute('dir', 'rtl');
    } else {
      dom.html.setAttribute('dir', 'ltr');
    }

    applyTranslations();
    renderAllDynamicContent();
  }

  function applyTranslations() {
    const data = getData();
    const t = (data.i18n && data.i18n[state.currentLang]) || {};

    // Top announcement banner
    const txtEmergency = document.getElementById('txtEmergencyBanner');
    if (txtEmergency && t.emergencyAlert) txtEmergency.innerHTML = `<strong>MEDICAL NOTICE:</strong> ${t.emergencyAlert}`;

    // Nav Brand & links
    const navBrandName = document.getElementById('navBrandName');
    if (navBrandName && t.siteTitle) navBrandName.textContent = t.siteTitle;

    const navLinkHome = document.getElementById('navLinkHome');
    if (navLinkHome && t.navHome) navLinkHome.textContent = t.navHome;
    const navLinkDiseases = document.getElementById('navLinkDiseases');
    if (navLinkDiseases && t.navDiseases) navLinkDiseases.textContent = t.navDiseases;
    const navLinkLifestyle = document.getElementById('navLinkLifestyle');
    if (navLinkLifestyle && t.navLifestyle) navLinkLifestyle.textContent = t.navLifestyle;
    const navLinkPrevention = document.getElementById('navLinkPrevention');
    if (navLinkPrevention && t.navPrevention) navLinkPrevention.textContent = t.navPrevention;
    const navLinkAbout = document.getElementById('navLinkAbout');
    if (navLinkAbout && t.navAbout) navLinkAbout.textContent = t.navAbout;
    const navLinkContact = document.getElementById('navLinkContact');
    if (navLinkContact && t.navContact) navLinkContact.textContent = t.navContact;
    const navLinkDisclaimer = document.getElementById('navLinkDisclaimer');
    if (navLinkDisclaimer && t.navDisclaimer) navLinkDisclaimer.textContent = t.navDisclaimer;

    // Search placeholders
    if (dom.globalHeaderSearch && t.searchPlaceholder) dom.globalHeaderSearch.placeholder = t.searchPlaceholder;
    if (dom.diseaseLibrarySearch && t.searchPlaceholder) dom.diseaseLibrarySearch.placeholder = t.searchPlaceholder;

    // Hero Section
    const heroHeadline = document.getElementById('heroHeadline');
    if (heroHeadline && t.tagline) {
      const parts = t.tagline.split('.');
      if (parts.length >= 3) {
        heroHeadline.innerHTML = `${parts[0]}. <br><span class="accent-gradient">${parts[1]}.</span> <br>${parts[2]}.`;
      } else {
        heroHeadline.innerHTML = `<span class="accent-gradient">${t.tagline}</span>`;
      }
    }
    const heroSub = document.getElementById('heroSubheading');
    if (heroSub && t.heroSub) heroSub.textContent = t.heroSub;
    const btnHeroExplore = document.getElementById('btnHeroExplore');
    if (btnHeroExplore && t.btnExplore) {
      btnHeroExplore.innerHTML = `<i data-lucide="book-open"></i> <span>${t.btnExplore}</span>`;
    }
    const btnHeroStart = document.getElementById('btnHeroStart');
    if (btnHeroStart && t.btnStart) {
      btnHeroStart.innerHTML = `<i data-lucide="activity"></i> <span>${t.btnStart}</span>`;
    }

    // Headings
    const headingFeatured = document.getElementById('headingFeatured');
    if (headingFeatured && t.featuredDiseases) headingFeatured.textContent = t.featuredDiseases;
    const headingPrevention = document.getElementById('headingPrevention');
    if (headingPrevention && t.preventionGuides) headingPrevention.textContent = t.preventionGuides;

    // Footer
    const txtFooterAbout = document.getElementById('txtFooterAbout');
    if (txtFooterAbout && t.footerAbout) txtFooterAbout.textContent = t.footerAbout;
    const txtFooterCopyright = document.getElementById('txtFooterCopyright');
    if (txtFooterCopyright && t.copyright) txtFooterCopyright.textContent = t.copyright;
  }

  /**
   * Helper: Get Localized Disease Name
   */
  function getLocalizedName(obj) {
    if (!obj) return '';
    if (state.currentLang === 'ml' && obj.name_ml) return obj.name_ml;
    if (state.currentLang === 'hi' && obj.name_hi) return obj.name_hi;
    if (state.currentLang === 'ar' && obj.name_ar) return obj.name_ar;
    return obj.name || '';
  }

  function getLocalizedCategoryName(cat) {
    if (!cat) return '';
    if (state.currentLang === 'ml' && cat.name_ml) return cat.name_ml;
    if (state.currentLang === 'hi' && cat.name_hi) return cat.name_hi;
    if (state.currentLang === 'ar' && cat.name_ar) return cat.name_ar;
    return cat.name || '';
  }

  /**
   * Dynamic Renderers
   */
  function renderAllDynamicContent() {
    renderCategoryFilters();
    renderAlphabetFilters();
    renderFeaturedDiseases();
    renderAllDiseases();
    renderLifestyleDiseases();
    renderPreventionGuides();
    renderArticles();
    renderNutritionContent();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function renderCategoryFilters() {
    const data = getData();
    if (!data.categories) return;

    // Home Category Pills
    if (dom.homeCategoryPills) {
      dom.homeCategoryPills.innerHTML = '';
      
      const allPill = document.createElement('button');
      allPill.className = `cat-pill ${state.selectedCategory === 'all' ? 'active' : ''}`;
      allPill.textContent = state.currentLang === 'ml' ? 'എല്ലാം' : (state.currentLang === 'hi' ? 'सभी' : (state.currentLang === 'ar' ? 'الكل' : 'All'));
      allPill.addEventListener('click', () => {
        state.selectedCategory = 'all';
        window.location.hash = '#diseases';
        if (dom.diseaseCategoryFilter) dom.diseaseCategoryFilter.value = 'all';
        renderAllDiseases();
      });
      dom.homeCategoryPills.appendChild(allPill);

      data.categories.forEach(cat => {
        const pill = document.createElement('button');
        pill.className = `cat-pill ${state.selectedCategory === cat.id ? 'active' : ''}`;
        pill.innerHTML = `<i data-lucide="${cat.icon || 'activity'}"></i> <span>${getLocalizedCategoryName(cat)}</span>`;
        pill.addEventListener('click', () => {
          state.selectedCategory = cat.id;
          window.location.hash = '#diseases';
          if (dom.diseaseCategoryFilter) dom.diseaseCategoryFilter.value = cat.id;
          renderAllDiseases();
        });
        dom.homeCategoryPills.appendChild(pill);
      });
    }

    // Disease Library Dropdown Filter
    if (dom.diseaseCategoryFilter) {
      dom.diseaseCategoryFilter.innerHTML = `<option value="all">${state.currentLang === 'ml' ? 'എല്ലാ 9 വിഭാഗങ്ങളും' : (state.currentLang === 'hi' ? 'सभी 9 श्रेणियां' : (state.currentLang === 'ar' ? 'جميع الفئات التسع' : 'All 9 Categories'))}</option>`;
      data.categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = getLocalizedCategoryName(cat);
        dom.diseaseCategoryFilter.appendChild(opt);
      });
      dom.diseaseCategoryFilter.value = state.selectedCategory;
    }
  }

  function renderAlphabetFilters() {
    if (!dom.alphabetFilterStrip) return;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    dom.alphabetFilterStrip.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `alpha-btn ${state.selectedLetter === 'all' ? 'active' : ''}`;
    allBtn.textContent = 'ALL';
    allBtn.dataset.letter = 'all';
    allBtn.addEventListener('click', () => {
      state.selectedLetter = 'all';
      updateAlphabetButtons();
      renderAllDiseases();
    });
    dom.alphabetFilterStrip.appendChild(allBtn);

    alphabet.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = `alpha-btn ${state.selectedLetter === letter ? 'active' : ''}`;
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.addEventListener('click', () => {
        state.selectedLetter = letter;
        updateAlphabetButtons();
        renderAllDiseases();
      });
      dom.alphabetFilterStrip.appendChild(btn);
    });
  }

  function updateAlphabetButtons() {
    const btns = dom.alphabetFilterStrip.querySelectorAll('.alpha-btn');
    btns.forEach(b => {
      if (b.dataset.letter === state.selectedLetter) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  function createDiseaseCard(disease) {
    const card = document.createElement('div');
    card.className = 'disease-card';
    card.addEventListener('click', () => openDiseaseModal(disease.id));

    const categoryObj = (getData().categories || []).find(c => c.id === disease.category) || {};
    const localizedTitle = getLocalizedName(disease);
    const subtitle = disease.name !== localizedTitle ? `${disease.name}` : (disease.name_ml || disease.name_hi || '');

    card.innerHTML = `
      <div class="d-card-header">
        <div class="d-card-icon">
          <i data-lucide="${disease.icon || 'activity'}"></i>
        </div>
        <span class="d-badge">${disease.badge || 'Clinical Guide'}</span>
      </div>
      <h3 class="d-card-title">${localizedTitle}</h3>
      <div class="d-card-sub-i18n">${subtitle}</div>
      <p class="d-card-desc">${disease.shortDesc || disease.whatIsIt?.slice(0, 140) + '...' || ''}</p>
      <div class="d-card-footer">
        <span class="d-category-tag">${getLocalizedCategoryName(categoryObj)}</span>
        <span class="d-read-btn">View Medical Guide <i data-lucide="arrow-right"></i></span>
      </div>
    `;

    return card;
  }

  function renderFeaturedDiseases() {
    if (!dom.featuredDiseasesGrid) return;
    const data = getData();
    const featuredIds = ['type-2-diabetes', 'hypertension', 'heart-disease', 'fatty-liver', 'asthma', 'depression', 'breast-cancer', 'osteoporosis'];
    
    dom.featuredDiseasesGrid.innerHTML = '';
    const featured = (data.diseases || []).filter(d => featuredIds.includes(d.id));
    
    featured.forEach(d => {
      dom.featuredDiseasesGrid.appendChild(createDiseaseCard(d));
    });
  }

  function renderAllDiseases() {
    if (!dom.allDiseasesGrid) return;
    const data = getData();
    let diseases = data.diseases || [];

    // Filter by Category
    if (state.selectedCategory !== 'all') {
      diseases = diseases.filter(d => d.category === state.selectedCategory);
    }

    // Filter by Alphabet
    if (state.selectedLetter !== 'all') {
      diseases = diseases.filter(d => d.name.toUpperCase().startsWith(state.selectedLetter));
    }

    // Filter by Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      diseases = diseases.filter(d => {
        return (
          d.name.toLowerCase().includes(q) ||
          (d.name_ml && d.name_ml.toLowerCase().includes(q)) ||
          (d.name_hi && d.name_hi.toLowerCase().includes(q)) ||
          (d.name_ar && d.name_ar.toLowerCase().includes(q)) ||
          (d.shortDesc && d.shortDesc.toLowerCase().includes(q)) ||
          (d.symptoms && d.symptoms.some(s => s.toLowerCase().includes(q)))
        );
      });
    }

    dom.allDiseasesGrid.innerHTML = '';
    if (dom.diseaseResultsCount) {
      dom.diseaseResultsCount.textContent = `Showing ${diseases.length} condition${diseases.length === 1 ? '' : 's'}`;
    }

    if (diseases.length === 0) {
      dom.allDiseasesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--text-light); margin-bottom: 1rem;"></i>
          <h3>No matching diseases found</h3>
          <p>Try searching for a different keyword or reset the category and letter filters.</p>
        </div>
      `;
    } else {
      diseases.forEach(d => {
        dom.allDiseasesGrid.appendChild(createDiseaseCard(d));
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function renderLifestyleDiseases() {
    if (!dom.lifestyleDiseasesGrid) return;
    const data = getData();
    const lifestyle = (data.diseases || []).filter(d => d.category === 'lifestyle');

    dom.lifestyleDiseasesGrid.innerHTML = '';
    lifestyle.forEach(d => {
      dom.lifestyleDiseasesGrid.appendChild(createDiseaseCard(d));
    });
  }

  function renderPreventionGuides() {
    const data = getData();
    const guides = data.preventionGuides || [];

    // Home 3 guides
    if (dom.homePreventionGrid) {
      dom.homePreventionGrid.innerHTML = '';
      guides.slice(0, 3).forEach(guide => {
        const card = document.createElement('div');
        card.className = 'prevention-card';
        card.innerHTML = `
          <div class="prev-icon-wrap"><i data-lucide="${guide.icon || 'shield-check'}"></i></div>
          <h3 class="prev-title">${state.currentLang === 'ml' && guide.title_ml ? guide.title_ml : guide.title}</h3>
          <p class="prev-summary">${guide.keySummary}</p>
          <ul class="prev-actions-preview">
            ${(guide.actionSteps || []).slice(0, 3).map(a => `<li>${a}</li>`).join('')}
          </ul>
          <a href="#prevention" class="btn btn-outline-sm">Read Full Protocol <i data-lucide="arrow-right"></i></a>
        `;
        dom.homePreventionGrid.appendChild(card);
      });
    }

    // Prevention Detail Page (All 10 Accordion Items)
    if (dom.preventionDetailList) {
      dom.preventionDetailList.innerHTML = '';
      guides.forEach((guide, index) => {
        const item = document.createElement('div');
        item.className = `prev-acc-item ${index === 0 ? 'open' : ''}`;

        const localizedTitle = state.currentLang === 'ml' && guide.title_ml ? guide.title_ml : 
                              (state.currentLang === 'hi' && guide.title_hi ? guide.title_hi : 
                              (state.currentLang === 'ar' && guide.title_ar ? guide.title_ar : guide.title));

        item.innerHTML = `
          <div class="prev-acc-header">
            <div class="prev-acc-left">
              <div class="prev-acc-icon"><i data-lucide="${guide.icon || 'shield-check'}"></i></div>
              <div class="prev-acc-title">${localizedTitle}</div>
            </div>
            <i data-lucide="chevron-down" class="prev-acc-chevron"></i>
          </div>
          <div class="prev-acc-body">
            <div class="prev-key-box">
              <strong>Core Evidence Summary:</strong> ${guide.keySummary}
            </div>
            <div class="prev-details-grid">
              <div class="prev-block">
                <h5><i data-lucide="check-circle-2"></i> Key Daily Action Steps</h5>
                <ul>
                  ${(guide.actionSteps || []).map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>
              <div class="prev-block">
                <h5><i data-lucide="apple"></i> Evidence-Based Dietary Protocol</h5>
                <ul>
                  ${(guide.dietaryProtocol || []).map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
              <div class="prev-block">
                <h5><i data-lucide="activity"></i> Clinical Biomarkers to Monitor</h5>
                <ul>
                  ${(guide.biomarkersToTrack || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;

        const header = item.querySelector('.prev-acc-header');
        header.addEventListener('click', () => {
          item.classList.toggle('open');
        });

        dom.preventionDetailList.appendChild(item);
      });
    }
  }

  function renderArticles() {
    const data = getData();
    const articles = data.articles || [];

    function buildArticleCard(art) {
      const card = document.createElement('div');
      card.className = 'article-card';
      card.addEventListener('click', () => openArticleModal(art.id));

      const title = state.currentLang === 'ml' && art.title_ml ? art.title_ml : art.title;

      card.innerHTML = `
        <span class="art-cat">${art.category}</span>
        <h3 class="art-title">${title}</h3>
        <p class="art-summary">${art.summary}</p>
        <div class="art-meta">
          <span>${art.author}</span>
          <span>${art.readTime}</span>
        </div>
      `;
      return card;
    }

    if (dom.homeArticlesGrid) {
      dom.homeArticlesGrid.innerHTML = '';
      articles.slice(0, 3).forEach(art => {
        dom.homeArticlesGrid.appendChild(buildArticleCard(art));
      });
    }

    if (dom.allArticlesGrid) {
      dom.allArticlesGrid.innerHTML = '';
      articles.forEach(art => {
        dom.allArticlesGrid.appendChild(buildArticleCard(art));
      });
    }
  }

  function renderNutritionContent() {
    const data = getData();
    const nutrition = data.nutrition || {};

    // 1. Meal Plans
    if (dom.mealIdeasContainer && nutrition.mealIdeas) {
      dom.mealIdeasContainer.innerHTML = '';
      nutrition.mealIdeas.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'meal-card';
        card.innerHTML = `
          <span class="meal-badge">${meal.meal}</span>
          <h4 class="meal-title">${meal.title}</h4>
          <p class="meal-desc">${meal.desc}</p>
          <ul class="meal-items-list">
            ${(meal.items || []).map(item => `<li>${item}</li>`).join('')}
          </ul>
          <div class="meal-macro-strip">
            <span>🔥 ${meal.calories}</span>
            <span>🥩 P: ${meal.protein}</span>
            <span>🌾 C: ${meal.carbs}</span>
            <span>🌿 Fib: ${meal.fiber}</span>
          </div>
        `;
        dom.mealIdeasContainer.appendChild(card);
      });
    }

    // 2. Condition-Specific Foods
    if (dom.conditionFoodsContainer && nutrition.conditionSpecificFoods) {
      dom.conditionFoodsContainer.innerHTML = '';
      nutrition.conditionSpecificFoods.forEach(c => {
        const title = state.currentLang === 'ml' && c.condition_ml ? c.condition_ml : c.condition;
        const card = document.createElement('div');
        card.className = 'cond-food-card';
        card.innerHTML = `
          <h4>${title}</h4>
          <div class="cond-food-target"><strong>Goal:</strong> ${c.target}</div>
          <strong style="font-size:0.8rem; color:var(--accent-green); display:block; margin-bottom:4px;">Recommended:</strong>
          <ul class="cond-food-list rec">
            ${(c.recommended || []).map(r => `<li>${r}</li>`).join('')}
          </ul>
          <strong style="font-size:0.8rem; color:var(--danger); display:block; margin-bottom:4px;">Limit / Avoid:</strong>
          <ul class="cond-food-list avoid">
            ${(c.limitAvoid || []).map(a => `<li>${a}</li>`).join('')}
          </ul>
        `;
        dom.conditionFoodsContainer.appendChild(card);
      });
    }

    // 3. Food Pillars
    if (dom.foodPillarsContainer && nutrition.foodCategories) {
      dom.foodPillarsContainer.innerHTML = '';
      nutrition.foodCategories.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pillar-card';
        card.innerHTML = `
          <div class="pillar-badge">${p.badge}</div>
          <h4>${p.category}</h4>
          <p class="pillar-desc">${p.desc}</p>
          <div class="pillar-examples">
            ${(p.examples || []).map(ex => `
              <div><strong>${ex.name}:</strong> ${ex.benefit}</div>
            `).join('')}
          </div>
        `;
        dom.foodPillarsContainer.appendChild(card);
      });
    }
  }

  /**
   * Disease Detail Modal Renderer (ALL 17 SECTIONS)
   */
  function openDiseaseModal(diseaseId) {
    const data = getData();
    const disease = (data.diseases || []).find(d => d.id === diseaseId);
    if (!disease) return;

    state.currentDiseaseModal = disease;

    // Header info
    const mBadgeCategory = document.getElementById('mBadgeCategory');
    const mBadgeSeverity = document.getElementById('mBadgeSeverity');
    const mDiseaseTitle = document.getElementById('mDiseaseTitle');
    const mDiseaseSubI18n = document.getElementById('mDiseaseSubI18n');

    const catObj = (data.categories || []).find(c => c.id === disease.category);
    if (mBadgeCategory) mBadgeCategory.textContent = getLocalizedCategoryName(catObj);
    if (mBadgeSeverity) mBadgeSeverity.textContent = disease.badge || 'Clinical Guide';
    if (mDiseaseTitle) mDiseaseTitle.textContent = getLocalizedName(disease);
    if (mDiseaseSubI18n) {
      mDiseaseSubI18n.textContent = `English: ${disease.name} | മലയാളം: ${disease.name_ml || '-'} | हिन्दी: ${disease.name_hi || '-'} | العربية: ${disease.name_ar || '-'}`;
    }

    // Section 1: Overview
    const mShortDesc = document.getElementById('mShortDesc');
    const mWhatIsIt = document.getElementById('mWhatIsIt');
    if (mShortDesc) mShortDesc.textContent = disease.shortDesc || '';
    if (mWhatIsIt) mWhatIsIt.textContent = disease.whatIsIt || '';

    // Section 2: Causes
    const mCausesList = document.getElementById('mCausesList');
    if (mCausesList) {
      mCausesList.innerHTML = (disease.causes || []).map(c => `<li>${c}</li>`).join('');
    }

    // Section 3: Symptoms
    const mSymptomsList = document.getElementById('mSymptomsList');
    if (mSymptomsList) {
      mSymptomsList.innerHTML = (disease.symptoms || []).map(s => `<li>${s}</li>`).join('');
    }

    // Section 4: Warning Signs (Red Flags)
    const mWarningSignsList = document.getElementById('mWarningSignsList');
    if (mWarningSignsList) {
      mWarningSignsList.innerHTML = (disease.warningSigns || []).map(w => `<li><strong>EMERGENCY:</strong> ${w}</li>`).join('');
    }

    // Section 5: Risk Factors
    const mRiskFactorsList = document.getElementById('mRiskFactorsList');
    if (mRiskFactorsList) {
      mRiskFactorsList.innerHTML = (disease.riskFactors || []).map(r => `<li>${r}</li>`).join('');
    }

    // Section 6: Body Impact
    const mBodyImpact = document.getElementById('mBodyImpact');
    if (mBodyImpact) mBodyImpact.textContent = disease.bodyImpact || '';

    // Section 7: Diagnosis
    const mDiagnosisList = document.getElementById('mDiagnosisList');
    if (mDiagnosisList) {
      mDiagnosisList.innerHTML = (disease.diagnosis || []).map(d => `<li>${d}</li>`).join('');
    }

    // Section 8: Treatments
    const mTreatmentsList = document.getElementById('mTreatmentsList');
    if (mTreatmentsList) {
      mTreatmentsList.innerHTML = (disease.treatments || []).map(t => `<li>${t}</li>`).join('');
    }

    // Section 9: Prevention
    const mPreventionText = document.getElementById('mPreventionText');
    if (mPreventionText) mPreventionText.textContent = disease.prevention || '';

    // Section 10 & 11: Safe vs Avoid Foods
    const mSafeFoodsList = document.getElementById('mSafeFoodsList');
    const mAvoidFoodsList = document.getElementById('mAvoidFoodsList');
    if (mSafeFoodsList) {
      mSafeFoodsList.innerHTML = (disease.safeFoods || []).map(f => `<li>${f}</li>`).join('');
    }
    if (mAvoidFoodsList) {
      mAvoidFoodsList.innerHTML = (disease.avoidFoods || []).map(f => `<li>${f}</li>`).join('');
    }

    // Section 12: Exercises
    const mExercisesList = document.getElementById('mExercisesList');
    if (mExercisesList) {
      mExercisesList.innerHTML = (disease.exercises || []).map(e => `<li>${e}</li>`).join('');
    }

    // Section 13: Daily Lifestyle
    const mLifestyleList = document.getElementById('mLifestyleList');
    if (mLifestyleList) {
      mLifestyleList.innerHTML = (disease.lifestyle || []).map(l => `<li>${l}</li>`).join('');
    }

    // Section 14: When to Consult
    const mWhenToConsult = document.getElementById('mWhenToConsult');
    if (mWhenToConsult) mWhenToConsult.textContent = disease.whenToConsult || '';

    // Section 15: FAQs
    const mFAQsContainer = document.getElementById('mFAQsContainer');
    if (mFAQsContainer) {
      mFAQsContainer.innerHTML = (disease.faqs || []).map(faq => `
        <div class="faq-box">
          <div class="faq-q">Q: ${faq.q}</div>
          <div class="faq-a">A: ${faq.a}</div>
        </div>
      `).join('');
    }

    // Section 16 & 17: References
    const mReferencesList = document.getElementById('mReferencesList');
    if (mReferencesList) {
      mReferencesList.innerHTML = (disease.references || []).map(ref => `<li>${ref}</li>`).join('');
    }

    if (dom.diseaseModalOverlay) {
      dom.diseaseModalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function closeDiseaseModal() {
    if (dom.diseaseModalOverlay) {
      dom.diseaseModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
      state.currentDiseaseModal = null;
    }
  }

  /**
   * Article Reader Modal
   */
  function openArticleModal(articleId) {
    const data = getData();
    const art = (data.articles || []).find(a => a.id === articleId);
    if (!art) return;

    const artModalCategory = document.getElementById('artModalCategory');
    const artModalTitle = document.getElementById('artModalTitle');
    const artModalMeta = document.getElementById('artModalMeta');
    const artModalBody = document.getElementById('artModalBody');

    if (artModalCategory) artModalCategory.textContent = art.category;
    if (artModalTitle) artModalTitle.textContent = state.currentLang === 'ml' && art.title_ml ? art.title_ml : art.title;
    if (artModalMeta) artModalMeta.textContent = `By ${art.author} | ${art.date} | ${art.readTime}`;

    if (artModalBody) {
      // Basic markdown parser for headings and paragraphs
      let html = art.content
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/\n\n/gim, '<p></p>');

      html += `
        <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-light);">
          <h4>Medical References & Citations</h4>
          <ul>
            ${(art.references || []).map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `;

      artModalBody.innerHTML = html;
    }

    if (dom.articleModalOverlay) {
      dom.articleModalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function closeArticleModal() {
    if (dom.articleModalOverlay) {
      dom.articleModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /**
   * =========================================================================
   * THE 8 CLINICAL CALCULATORS & RISK TOOLS
   * =========================================================================
   */
  function initCalculators() {
    // Tab switching
    const toolTabs = document.querySelectorAll('.tool-tab-btn');
    toolTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        toolTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const panels = document.querySelectorAll('.calc-panel');
        panels.forEach(p => p.classList.remove('active'));

        const targetPanel = document.getElementById(`calc-${tab.dataset.tool}`);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    // 1. BMI Unit toggle & Calc
    const bmiUnitSelect = document.getElementById('bmiUnitSelect');
    if (bmiUnitSelect) {
      bmiUnitSelect.addEventListener('change', (e) => {
        const isMetric = e.target.value === 'metric';
        document.getElementById('bmiMetricWeight').classList.toggle('hidden', !isMetric);
        document.getElementById('bmiMetricHeight').classList.toggle('hidden', !isMetric);
        document.getElementById('bmiImperialWeight').classList.toggle('hidden', isMetric);
        document.getElementById('bmiImperialHeight').classList.toggle('hidden', isMetric);
      });
    }

    const btnCalcBMI = document.getElementById('btnCalcBMI');
    if (btnCalcBMI) {
      btnCalcBMI.addEventListener('click', () => {
        let weightKg = 0;
        let heightM = 0;

        if (bmiUnitSelect.value === 'metric') {
          weightKg = parseFloat(document.getElementById('bmiWeightKg').value);
          const heightCm = parseFloat(document.getElementById('bmiHeightCm').value);
          if (weightKg > 0 && heightCm > 0) heightM = heightCm / 100;
        } else {
          const weightLbs = parseFloat(document.getElementById('bmiWeightLbs').value);
          const feet = parseFloat(document.getElementById('bmiHeightFeet').value) || 0;
          const inches = parseFloat(document.getElementById('bmiHeightInches').value) || 0;
          const totalInches = (feet * 12) + inches;
          if (weightLbs > 0 && totalInches > 0) {
            weightKg = weightLbs * 0.453592;
            heightM = totalInches * 0.0254;
          }
        }

        const resBox = document.getElementById('bmiResultBox');
        if (!weightKg || !heightM) {
          alert('Please enter valid positive numbers for height and weight.');
          return;
        }

        const bmi = (weightKg / (heightM * heightM)).toFixed(1);
        let category = '';
        let color = '';
        let advice = '';

        if (bmi < 18.5) {
          category = 'Underweight';
          color = '#d97706';
          advice = 'Risk of nutritional deficiencies and osteoporosis. Consider nutrient-dense whole foods and strength training.';
        } else if (bmi < 24.9) {
          category = 'Normal / Healthy Weight';
          color = '#059669';
          advice = 'Lowest statistical risk for cardiovascular diseases and Type 2 diabetes. Maintain with regular activity.';
        } else if (bmi < 29.9) {
          category = 'Overweight (Pre-Obese)';
          color = '#d97706';
          advice = 'Moderately elevated risk of insulin resistance, fatty liver, and hypertension. A 5-7% weight reduction is protective.';
        } else if (bmi < 34.9) {
          category = 'Obesity Class I';
          color = '#e11d48';
          advice = 'High risk for metabolic syndrome, sleep apnea, and osteoarthritis. Medical nutrition therapy recommended.';
        } else {
          category = 'Obesity Class II/III (Severe)';
          color = '#9f1239';
          advice = 'Significantly elevated cardiovascular risk. Consult an endocrinologist or bariatric physician.';
        }

        resBox.innerHTML = `
          <div class="res-score-badge" style="color:${color};">${bmi} <span style="font-size:1rem; color:var(--text-subtle);">kg/m²</span></div>
          <div class="res-category-name" style="color:${color};">${category}</div>
          <p class="res-feedback">${advice}</p>
          <div style="font-size:0.8rem; color:var(--text-subtle); margin-top:0.5rem;">
            <em>Note for Asian populations: Due to higher visceral fat percentages, WHO defines overweight in Asians starting at BMI >= 23.0 and obesity at >= 27.5.</em>
          </div>
        `;
        resBox.classList.remove('hidden');
      });
    }

    // 2. Water Intake
    const btnCalcWater = document.getElementById('btnCalcWater');
    if (btnCalcWater) {
      btnCalcWater.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('waterWeight').value);
        const activity = document.getElementById('waterActivity').value;
        const climate = document.getElementById('waterClimate').value;
        const resBox = document.getElementById('waterResultBox');

        if (!weight || weight <= 0) {
          alert('Please enter your weight in kg.');
          return;
        }

        // Base: 35 mL per kg
        let ml = weight * 35;
        if (activity === 'moderate') ml += 500;
        if (activity === 'active') ml += 1000;
        if (climate === 'hot') ml += 500;

        const liters = (ml / 1000).toFixed(1);
        const glasses = Math.round(ml / 250);

        resBox.innerHTML = `
          <div class="res-score-badge">${liters} Liters</div>
          <div class="res-category-name">Approximately ${glasses} Glasses (250ml each) per Day</div>
          <p class="res-feedback">Adequate hydration reduces kidney stone risks, supports glomerular filtration, and prevents false hunger cues. Drink consistently throughout the day.</p>
        `;
        resBox.classList.remove('hidden');
      });
    }

    // 3. Calorie & TDEE
    const btnCalcCalories = document.getElementById('btnCalcCalories');
    if (btnCalcCalories) {
      btnCalcCalories.addEventListener('click', () => {
        const sex = document.getElementById('calSex').value;
        const age = parseFloat(document.getElementById('calAge').value);
        const weight = parseFloat(document.getElementById('calWeight').value);
        const height = parseFloat(document.getElementById('calHeight').value);
        const activity = parseFloat(document.getElementById('calActivity').value);
        const resBox = document.getElementById('calResultBox');

        if (!age || !weight || !height) {
          alert('Please fill out all fields.');
          return;
        }

        // Mifflin-St Jeor Formula
        let bmr = (10 * weight) + (6.25 * height) - (5 * age);
        bmr = sex === 'male' ? bmr + 5 : bmr - 161;

        const tdee = Math.round(bmr * activity);
        const weightLoss = Math.round(tdee - 500);
        const proteinGrams = Math.round(weight * 1.6);

        resBox.innerHTML = `
          <div class="res-score-badge">${tdee} kcal / day</div>
          <div class="res-category-name">Estimated Total Daily Energy Expenditure (TDEE)</div>
          <p class="res-feedback">
            • <strong>Basal Metabolic Rate (BMR):</strong> ${Math.round(bmr)} kcal (energy burned at total rest)<br>
            • <strong>For Sustainable Weight Loss:</strong> ~${weightLoss} kcal/day (safe 500 kcal deficit)<br>
            • <strong>Optimal Daily Protein Target:</strong> ~${proteinGrams}g (supports lean muscle mass)
          </p>
        `;
        resBox.classList.remove('hidden');
      });
    }

    // 4. Step Goal Tracker
    const btnCalcSteps = document.getElementById('btnCalcSteps');
    if (btnCalcSteps) {
      btnCalcSteps.addEventListener('click', () => {
        const steps = parseInt(document.getElementById('stepCountInput').value, 10);
        const weight = parseFloat(document.getElementById('stepWeightInput').value) || 70;
        const resBox = document.getElementById('stepResultBox');

        if (!steps || steps < 0) {
          alert('Please enter your daily steps.');
          return;
        }

        const km = ((steps * 0.762) / 1000).toFixed(1);
        const calories = Math.round(steps * 0.04 * (weight / 70));
        let verdict = '';
        let color = '';

        if (steps < 5000) {
          verdict = 'Sedentary Baseline';
          color = '#e11d48';
        } else if (steps < 7500) {
          verdict = 'Low-Moderate Active';
          color = '#d97706';
        } else if (steps < 10000) {
          verdict = 'Somewhat Active (Cardioprotective Zone)';
          color = '#059669';
        } else {
          verdict = 'Highly Active (Optimal Longevity Zone)';
          color = '#0284c7';
        }

        resBox.innerHTML = `
          <div class="res-score-badge" style="color:${color};">${km} km</div>
          <div class="res-category-name" style="color:${color};">${verdict} (~${calories} kcal burned)</div>
          <p class="res-feedback">A landmark 2022 meta-analysis in <em>Lancet Public Health</em> found that walking 7,000 to 9,000 steps daily lowers premature all-cause mortality by 40% to 50% compared to sedentary levels.</p>
        `;
        resBox.classList.remove('hidden');
      });
    }

    // 5. Healthy Lifestyle Assessment (Score 0-100)
    initLifestyleQuiz();

    // 6. Diabetes Risk Screener (FINDRISC)
    initDiabetesQuiz();

    // 7. Blood Pressure Guide
    const btnCalcBP = document.getElementById('btnCalcBP');
    if (btnCalcBP) {
      btnCalcBP.addEventListener('click', () => {
        const sys = parseInt(document.getElementById('bpSystolic').value, 10);
        const dia = parseInt(document.getElementById('bpDiastolic').value, 10);
        const resBox = document.getElementById('bpResultBox');

        if (!sys || !dia) {
          alert('Please enter both systolic and diastolic blood pressure.');
          return;
        }

        let cat = '';
        let color = '';
        let advice = '';

        if (sys < 120 && dia < 80) {
          cat = 'Normal Blood Pressure';
          color = '#059669';
          advice = 'Optimal cardiovascular health! Continue eating potassium-rich whole foods and exercising.';
        } else if (sys <= 129 && dia < 80) {
          cat = 'Elevated Blood Pressure';
          color = '#d97706';
          advice = 'Arteries are beginning to experience increased strain. Adopt the DASH diet, reduce sodium, and increase walking.';
        } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
          cat = 'Hypertension Stage 1';
          color = '#ea580c';
          advice = 'AHA/ACC criteria for Stage 1. Consult your doctor. Intensive lifestyle therapy and medication evaluation recommended.';
        } else if ((sys >= 140 && sys < 180) || (dia >= 90 && dia < 120)) {
          cat = 'Hypertension Stage 2';
          color = '#e11d48';
          advice = 'Requires clinical physician evaluation and antihypertensive pharmacotherapy combined with sodium restriction.';
        } else if (sys >= 180 || dia >= 120) {
          cat = 'HYPERTENSIVE CRISIS (EMERGENCY)';
          color = '#9f1239';
          advice = 'DANGEROUS SPIKE! If accompanied by chest pain, shortness of breath, back pain, or vision changes, CALL EMERGENCY SERVICES (911/112) IMMEDIATELY.';
        }

        resBox.innerHTML = `
          <div class="res-score-badge" style="color:${color};">${sys} / ${dia} mmHg</div>
          <div class="res-category-name" style="color:${color};">${cat}</div>
          <p class="res-feedback">${advice}</p>
        `;
        resBox.classList.remove('hidden');
      });
    }

    // 8. Symptom Checker Wizard
    initSymptomChecker();
  }

  function initLifestyleQuiz() {
    const container = document.getElementById('lifestyleQuestions');
    if (!container) return;

    const questions = [
      { q: "How many servings of vegetables and fruits do you eat daily?", options: [{ t: "Fewer than 2 servings", pts: 0 }, { t: "2 to 4 servings", pts: 7 }, { t: "5 or more servings daily", pts: 15 }] },
      { q: "How many minutes of moderate exercise do you get per week?", options: [{ t: "Under 60 minutes / sedentary", pts: 0 }, { t: "60 to 140 minutes", pts: 8 }, { t: "150+ minutes weekly", pts: 15 }] },
      { q: "Do you consume sugary beverages (sodas, juices, energy drinks)?", options: [{ t: "Regularly (almost daily)", pts: 0 }, { t: "Occasionally (1-2 times/week)", pts: 7 }, { t: "Rarely or Never (water/tea only)", pts: 15 }] },
      { q: "How many hours of sleep do you average per night?", options: [{ t: "Less than 6 hours", pts: 0 }, { t: "6 to 7 hours", pts: 8 }, { t: "7 to 9 hours of quality sleep", pts: 15 }] },
      { q: "What is your tobacco status?", options: [{ t: "Active smoker / use tobacco", pts: 0 }, { t: "Quit within last 5 years", pts: 10 }, { t: "Never smoked or quit > 10 yrs", pts: 15 }] },
      { q: "How often do you eat ultra-processed fast foods?", options: [{ t: "3 or more times a week", pts: 0 }, { t: "1 to 2 times a week", pts: 6 }, { t: "Rarely / home-cooked meals", pts: 15 }] },
      { q: "How do you manage daily emotional stress?", options: [{ t: "Often feel overwhelmed / burnout", pts: 0 }, { t: "Moderate stress with some coping", pts: 5 }, { t: "Practice daily relaxation / mindfulness", pts: 10 }] }
    ];

    container.innerHTML = questions.map((item, idx) => `
      <div class="q-card">
        <div class="q-title">${idx + 1}. ${item.q}</div>
        <div class="q-options">
          ${item.options.map((opt, optIdx) => `
            <label class="q-option-label">
              <input type="radio" name="lifeQ${idx}" value="${opt.pts}" ${optIdx === 1 ? 'checked' : ''}>
              <span>${opt.t}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `).join('');

    const btn = document.getElementById('btnCalcLifestyle');
    if (btn) {
      btn.addEventListener('click', () => {
        let score = 0;
        questions.forEach((_, idx) => {
          const checked = document.querySelector(`input[name="lifeQ${idx}"]:checked`);
          if (checked) score += parseInt(checked.value, 10);
        });

        const resBox = document.getElementById('lifestyleResultBox');
        let cat = '';
        let color = '';
        if (score >= 80) {
          cat = 'Exceptional Preventive Health Status (Grade A)';
          color = '#059669';
        } else if (score >= 60) {
          cat = 'Good Health Foundation with Room for Growth (Grade B)';
          color = '#0284c7';
        } else if (score >= 40) {
          cat = 'Moderate Lifestyle Risk Profile (Grade C)';
          color = '#d97706';
        } else {
          cat = 'High Chronic Disease Risk Profile (Grade D)';
          color = '#e11d48';
        }

        resBox.innerHTML = `
          <div class="res-score-badge" style="color:${color};">${score} / 100</div>
          <div class="res-category-name" style="color:${color};">${cat}</div>
          <p class="res-feedback">Lifestyle habits account for more than 70% of chronic disease prevention. Target small consistent gains: swap 1 soda for water, add a 15-minute daily walk, and get 30 minutes more sleep.</p>
        `;
        resBox.classList.remove('hidden');
      });
    }
  }

  function initDiabetesQuiz() {
    const container = document.getElementById('diabetesQuestions');
    if (!container) return;

    const questions = [
      { q: "Age group", options: [{ t: "Under 45 years", pts: 0 }, { t: "45 to 54 years", pts: 2 }, { t: "55 to 64 years", pts: 3 }, { t: "65 years or older", pts: 4 }] },
      { q: "Body Mass Index (BMI)", options: [{ t: "Under 25 kg/m²", pts: 0 }, { t: "25 to 30 kg/m²", pts: 1 }, { t: "Over 30 kg/m²", pts: 3 }] },
      { q: "Waist circumference (measured at belly button)", options: [{ t: "Men < 37 in (94 cm) / Women < 31 in (80 cm)", pts: 0 }, { t: "Men 37-40 in / Women 31-35 in", pts: 3 }, { t: "Men > 40 in (102 cm) / Women > 35 in (88 cm)", pts: 4 }] },
      { q: "Do you engage in at least 30 minutes of physical activity daily?", options: [{ t: "Yes", pts: 0 }, { t: "No", pts: 2 }] },
      { q: "How often do you eat vegetables, fruit, or berries?", options: [{ t: "Every day", pts: 0 }, { t: "Not every day", pts: 1 }] },
      { q: "Have you ever taken medication for high blood pressure?", options: [{ t: "No", pts: 0 }, { t: "Yes", pts: 2 }] },
      { q: "Have any members of your immediate family been diagnosed with diabetes?", options: [{ t: "No", pts: 0 }, { t: "Grandparent, aunt, uncle, or cousin (2nd degree)", pts: 3 }, { t: "Parent, brother, sister, or own child (1st degree)", pts: 5 }] }
    ];

    container.innerHTML = questions.map((item, idx) => `
      <div class="q-card">
        <div class="q-title">${idx + 1}. ${item.q}</div>
        <div class="q-options">
          ${item.options.map((opt, optIdx) => `
            <label class="q-option-label">
              <input type="radio" name="diabQ${idx}" value="${opt.pts}" ${optIdx === 0 ? 'checked' : ''}>
              <span>${opt.t}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `).join('');

    const btn = document.getElementById('btnCalcDiabetes');
    if (btn) {
      btn.addEventListener('click', () => {
        let score = 0;
        questions.forEach((_, idx) => {
          const checked = document.querySelector(`input[name="diabQ${idx}"]:checked`);
          if (checked) score += parseInt(checked.value, 10);
        });

        const resBox = document.getElementById('diabetesResultBox');
        let risk = '';
        let color = '';
        let advice = '';

        if (score < 7) {
          risk = 'Low Risk (1 in 100 chance of developing Type 2 diabetes in 10 years)';
          color = '#059669';
          advice = 'Your risk is minimal. Continue your healthy nutrition and active routine.';
        } else if (score <= 11) {
          risk = 'Slightly Elevated Risk (1 in 25 chance)';
          color = '#0284c7';
          advice = 'Early insulin resistance may be beginning. Focus on reducing refined carbohydrates and losing 3-5% of body weight.';
        } else if (score <= 14) {
          risk = 'Moderate Risk (1 in 6 chance)';
          color = '#d97706';
          advice = 'Consider asking your physician for a Fasting Plasma Glucose and HbA1c test.';
        } else if (score <= 20) {
          risk = 'High Risk (1 in 3 chance of developing diabetes)';
          color = '#ea580c';
          advice = 'High likelihood of prediabetes or occult diabetes. Schedule an evaluation with your physician.';
        } else {
          risk = 'Very High Risk (1 in 2 chance)';
          color = '#e11d48';
          advice = 'Urgent medical consultation and metabolic evaluation recommended.';
        }

        resBox.innerHTML = `
          <div class="res-score-badge" style="color:${color};">Score: ${score} / 26</div>
          <div class="res-category-name" style="color:${color};">${risk}</div>
          <p class="res-feedback">${advice}</p>
        `;
        resBox.classList.remove('hidden');
      });
    }
  }

  function initSymptomChecker() {
    const areaButtons = document.querySelectorAll('.area-btn');
    const stepBodyArea = document.getElementById('stepBodyArea');
    const stepSymptoms = document.getElementById('stepSymptoms');
    const stepTriageResult = document.getElementById('stepTriageResult');
    const symptomsChecklist = document.getElementById('symptomsChecklist');
    const btnBackToArea = document.getElementById('btnBackToArea');
    const btnAnalyzeSymptoms = document.getElementById('btnAnalyzeSymptoms');
    const triageResultContent = document.getElementById('triageResultContent');
    const btnRestart = document.getElementById('btnRestartSymptomChecker');

    if (!areaButtons.length) return;

    let selectedArea = '';

    const areaSymptomsMap = {
      head: [
        { id: "h1", name: "Sudden worst headache of life (thunderclap)", urgent: true },
        { id: "h2", name: "One-sided facial droop or arm weakness", urgent: true },
        { id: "h3", name: "Slurred speech or trouble finding words", urgent: true },
        { id: "h4", name: "Throbbing unilateral headache with light/sound sensitivity (Migraine)", urgent: false },
        { id: "h5", name: "Dizziness, vertigo, or balance issues", urgent: false },
        { id: "h6", name: "Mild tension headache across temples", urgent: false }
      ],
      chest: [
        { id: "c1", name: "Crushing chest pressure, tightness radiating to arm or jaw", urgent: true },
        { id: "c2", name: "Sudden severe breathlessness at rest", urgent: true },
        { id: "c3", name: "Fainting spell (syncope) during physical exertion", urgent: true },
        { id: "c4", name: "Heartburn / burning sensation behind breastbone after eating", urgent: false },
        { id: "c5", name: "Occasional racing pulse or palpitations during stress", urgent: false }
      ],
      respiratory: [
        { id: "r1", name: "Inability to speak in full sentences due to gasping for air", urgent: true },
        { id: "r2", name: "Lips or fingernails turning blue (cyanosis)", urgent: true },
        { id: "r3", name: "Coughing up frank blood (hemoptysis)", urgent: true },
        { id: "r4", name: "Audible wheezing and chest tightness", urgent: false },
        { id: "r5", name: "Persistent cough lasting more than 2-3 weeks", urgent: false },
        { id: "r6", name: "Mild runny nose, sore throat, and sniffles", urgent: false }
      ],
      digestive: [
        { id: "d1", name: "Sudden intense knife-like abdominal pain with rigid belly", urgent: true },
        { id: "d2", name: "Vomiting blood or black coffee-ground material", urgent: true },
        { id: "d3", name: "Jet-black tarry stools (melena)", urgent: true },
        { id: "d4", name: "Burning epigastric stomach pain relieved by food or antacids", urgent: false },
        { id: "d5", name: "Abdominal cramping and bloating relieved by bowel movement", urgent: false },
        { id: "d6", name: "Occasional acid reflux or sour burping", urgent: false }
      ],
      joints: [
        { id: "j1", name: "Loss of sensation in groin/perineum or sudden bowel/bladder incontinence", urgent: true },
        { id: "j2", name: "Visible bone protruding through broken skin (open fracture)", urgent: true },
        { id: "j3", name: "Sudden fiery red, agonizing hot swelling in big toe or single joint", urgent: false },
        { id: "j4", name: "Morning hand joint stiffness lasting over 60 minutes", urgent: false },
        { id: "j5", name: "Aching knee pain worsening after climbing stairs", urgent: false },
        { id: "j6", name: "Dull lower back ache after prolonged desk sitting", urgent: false }
      ],
      whole: [
        { id: "w1", name: "High fever with stiff neck, photophobia, and confusion", urgent: true },
        { id: "w2", name: "Purple pinpoint rash that does not fade under glass pressure", urgent: true },
        { id: "w3", name: "Fever in an infant under 3 months of age", urgent: true },
        { id: "w4", name: "High fever with severe retro-orbital eye pain and joint aches (Dengue)", urgent: false },
        { id: "w5", name: "Fever with shaking chills occurring every other day (Malaria)", urgent: false },
        { id: "w6", name: "Low-grade fever with night sweats and weight loss (TB)", urgent: false }
      ]
    };

    areaButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        areaButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedArea = btn.dataset.area;

        const symptoms = areaSymptomsMap[selectedArea] || [];
        symptomsChecklist.innerHTML = symptoms.map(s => `
          <label class="symptom-check-label">
            <input type="checkbox" value="${s.id}" data-urgent="${s.urgent}" data-name="${s.name}">
            <span>${s.name}</span>
          </label>
        `).join('');

        stepBodyArea.classList.add('hidden');
        stepSymptoms.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      });
    });

    if (btnBackToArea) {
      btnBackToArea.addEventListener('click', () => {
        stepSymptoms.classList.add('hidden');
        stepBodyArea.classList.remove('hidden');
      });
    }

    if (btnAnalyzeSymptoms) {
      btnAnalyzeSymptoms.addEventListener('click', () => {
        const checked = symptomsChecklist.querySelectorAll('input[type="checkbox"]:checked');
        if (checked.length === 0) {
          alert('Please select at least one symptom.');
          return;
        }

        let hasUrgent = false;
        const selectedList = [];
        checked.forEach(c => {
          if (c.dataset.urgent === 'true') hasUrgent = true;
          selectedList.push(c.dataset.name);
        });

        stepSymptoms.classList.add('hidden');
        stepTriageResult.classList.remove('hidden');

        if (hasUrgent) {
          triageResultContent.innerHTML = `
            <div class="triage-output-card urgent">
              <h3>🚨 URGENT EMERGENCY MEDICAL ATTENTION REQUIRED</h3>
              <p>One or more of the symptoms you selected represents an <strong>Emergency Red Flag</strong> (such as possible heart attack, stroke, spinal cord compression, severe internal bleeding, or meningitis).</p>
              <p><strong>ACTION:</strong> Do NOT wait for an online assessment or appointment. Call emergency medical services (911 / 112 / 999) or have someone drive you to the nearest hospital emergency room immediately.</p>
            </div>
          `;
        } else {
          triageResultContent.innerHTML = `
            <div class="triage-output-card moderate">
              <h3>🩺 Non-Emergency: Outpatient Medical Evaluation Recommended</h3>
              <p>Your selected symptoms do not indicate immediate life-threatening emergency flags, but suggest a condition that warrants clinical medical evaluation.</p>
              <p><strong>ACTION:</strong> Schedule a consultation with your primary care physician or specialist within the coming days. In the meantime, rest, stay hydrated, and explore the comprehensive clinical guides in our disease library.</p>
            </div>
          `;
        }
      });
    }

    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        stepTriageResult.classList.add('hidden');
        stepSymptoms.classList.add('hidden');
        stepBodyArea.classList.remove('hidden');
        areaButtons.forEach(b => b.classList.remove('active'));
      });
    }
  }

  /**
   * Box Breathing Exercise Widget
   */
  function initBreathingWidget() {
    const btn = document.getElementById('startBreathingBtn');
    const visual = document.getElementById('breathingVisual');
    const text = document.getElementById('breathingText');
    if (!btn || !visual || !text) return;

    btn.addEventListener('click', () => {
      if (state.breathingActive) {
        clearInterval(state.breathingTimer);
        state.breathingActive = false;
        btn.textContent = 'Start 2-Minute Breathing Exercise';
        visual.className = 'breathing-visual';
        text.textContent = 'Ready';
        return;
      }

      state.breathingActive = true;
      btn.textContent = 'Stop Breathing Exercise';
      const steps = [
        { label: 'Inhale (4s)', class: 'expand' },
        { label: 'Hold (4s)', class: 'expand' },
        { label: 'Exhale (4s)', class: 'contract' },
        { label: 'Hold (4s)', class: 'contract' }
      ];

      let currentStep = 0;
      function runStep() {
        const s = steps[currentStep];
        text.textContent = s.label;
        visual.className = `breathing-visual ${s.class}`;
        currentStep = (currentStep + 1) % steps.length;
      }

      runStep();
      state.breathingTimer = setInterval(runStep, 4000);
    });
  }

  /**
   * Global Event Listeners
   */
  function initEventListeners() {
    // Mobile Drawer
    if (dom.mobileMenuBtn) {
      dom.mobileMenuBtn.addEventListener('click', () => {
        if (dom.mobileDrawer) dom.mobileDrawer.classList.add('open');
      });
    }
    if (dom.closeDrawerBtn) {
      dom.closeDrawerBtn.addEventListener('click', closeMobileDrawer);
    }

    // Modal Close Triggers
    if (dom.btnCloseDiseaseModal) dom.btnCloseDiseaseModal.addEventListener('click', closeDiseaseModal);
    if (dom.btnModalCloseBottom) dom.btnModalCloseBottom.addEventListener('click', closeDiseaseModal);
    if (dom.diseaseModalOverlay) {
      dom.diseaseModalOverlay.addEventListener('click', (e) => {
        if (e.target === dom.diseaseModalOverlay) closeDiseaseModal();
      });
    }
    if (dom.btnModalPrint) {
      dom.btnModalPrint.addEventListener('click', () => {
        window.print();
      });
    }

    // Article Modal Close
    if (dom.btnCloseArticleModal) dom.btnCloseArticleModal.addEventListener('click', closeArticleModal);
    if (dom.btnCloseArticleBottom) dom.btnCloseArticleBottom.addEventListener('click', closeArticleModal);
    if (dom.articleModalOverlay) {
      dom.articleModalOverlay.addEventListener('click', (e) => {
        if (e.target === dom.articleModalOverlay) closeArticleModal();
      });
    }

    // Global Header Search
    if (dom.globalHeaderSearch) {
      dom.globalHeaderSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        window.location.hash = '#diseases';
        if (dom.diseaseLibrarySearch) dom.diseaseLibrarySearch.value = state.searchQuery;
        renderAllDiseases();
      });
    }

    // Disease Library Search & Filters
    if (dom.diseaseLibrarySearch) {
      dom.diseaseLibrarySearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        renderAllDiseases();
      });
    }
    if (dom.clearSearchBtn) {
      dom.clearSearchBtn.addEventListener('click', () => {
        state.searchQuery = '';
        if (dom.diseaseLibrarySearch) dom.diseaseLibrarySearch.value = '';
        renderAllDiseases();
      });
    }
    if (dom.diseaseCategoryFilter) {
      dom.diseaseCategoryFilter.addEventListener('change', (e) => {
        state.selectedCategory = e.target.value;
        renderAllDiseases();
      });
    }

    // Contact Form
    if (dom.contactForm) {
      dom.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const toast = dom.contactToast;
        if (toast) {
          toast.className = 'toast-box toast-success';
          toast.innerHTML = `<strong>Thank you, ${name}!</strong> Your inquiry has been sent to our medical editorial team. We review submissions within 2 business days.`;
          toast.classList.remove('hidden');
          dom.contactForm.reset();
        }
      });
    }

    // Keyboard shortcuts (Escape key closes modals)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDiseaseModal();
        closeArticleModal();
        closeMobileDrawer();
      }
    });
  }

  function closeMobileDrawer() {
    if (dom.mobileDrawer) dom.mobileDrawer.classList.remove('open');
  }

  /**
   * Application Initialization
   */
  function initApp() {
    initRouter();
    initI18n();
    initCalculators();
    initBreathingWidget();
    initEventListeners();
    renderAllDynamicContent();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
