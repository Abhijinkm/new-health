/**
 * HEALTHCARE FOR YOU - Simplified, High-Performance Controller
 * Evidence-Based Digital Health Education & Prevention Platform
 */

(function () {
  'use strict';

  // Application State
  const state = {
    currentLang: 'ml', // Default to Malayalam as requested
    currentRoute: 'home',
    selectedCategory: 'all',
    selectedLetter: 'all',
    searchQuery: '',
    currentDisease: null,
    activeModalTab: 'overview'
  };

  // Safe Access to Data
  function getData() {
    return window.HEALTH_DATA || {
      categories: [],
      diseases: [],
      preventionGuides: [],
      nutrition: {},
      articles: [],
      i18n: {}
    };
  }

  // Localized Strings Dictionary for Simplified UI
  const UI_TEXT = {
    ml: {
      siteTitle: 'HEALTHCARE FOR YOU',
      headerTag: 'ലളിതമായ ആരോഗ്യ സഹായി',
      topNotice: '🌿 നിങ്ങളുടെ ആരോഗ്യം, ലളിതമായി മനസ്സിലാക്കാം. സൗജന്യ രോഗവിവരങ്ങളും പരിഹാരങ്ങളും.',
      heroChip: '✨ വിശ്വസനീയമായ സൗജന്യ ആരോഗ്യ ഗൈഡ്',
      heroTitle: 'നിങ്ങളുടെ ആരോഗ്യം, <span class="highlight-green">ലളിതമായി മനസ്സിലാക്കാം.</span>',
      heroDesc: 'പനി മുതൽ എല്ല് പൊട്ടൽ വരെയും, പ്രമേഹം മുതൽ കൊളസ്ട്രോൾ വരെയുമുള്ള എല്ലാ രോഗങ്ങളെക്കുറിച്ചും ലളിതമായി അറിയൂ. എന്ത് ഭക്ഷണം കഴിക്കണം, ഒഴിവാക്കണം, എന്ത് വ്യായാമവും പരിഹാരങ്ങളും ചെയ്യണമെന്ന് എളുപ്പത്തിൽ കണ്ടെത്താം.',
      searchPlaceholder: 'ഏത് രോഗവും തിരയുക (ഉദാ: പനി, പ്രമേഹം, ബി.പി, എല്ല് പൊട്ടൽ, വാതം, കൊളസ്ട്രോൾ)...',
      searchBtn: 'തിരയുക',
      quickLabel: 'പെട്ടെന്ന് കാണാം:',
      viewSolutionsBtn: 'പരിഹാരം കാണുക →',
      allDiseasesTitle: 'രോഗങ്ങളും പരിഹാരങ്ങളും (All Diseases)',
      allDiseasesDesc: '60+ രോഗങ്ങളെക്കുറിച്ച് ലളിതമായി അറിയൂ. ലക്ഷണങ്ങൾ, കാരണങ്ങൾ, ഭക്ഷണക്രമം, വ്യായാമം, ചികിത്സാ പരിഹാരങ്ങൾ എന്നിവ താഴെ നൽകിയിരിക്കുന്നു.',
      nutritionTitle: 'ഭക്ഷണവും ആരോഗ്യവും (Healthy Diet)',
      nutritionDesc: 'ശരിയായ ഭക്ഷണക്രമത്തിലൂടെ രോഗങ്ങളെ നിയന്ത്രിക്കാം. പ്രഭാതഭക്ഷണം, ഉച്ചഭക്ഷണം, അത്താഴം എന്നിവയുടെ കൃത്യമായ രീതികളും വിവിധ രോഗങ്ങൾക്ക് കഴിക്കേണ്ടതും ഒഴിവാക്കേണ്ടതുമായ ഭക്ഷണങ്ങളും.',
      preventionTitle: 'രോഗങ്ങൾ വരാതിരിക്കാൻ (Disease Prevention)',
      preventionDesc: 'രോഗങ്ങൾ വന്ന ശേഷം ചികിത്സിക്കുന്നതിനേക്കാൾ നല്ലത് വരാതെ നോക്കുന്നതാണ്. പ്രമേഹം, രക്തസമ്മർദ്ദം, ഹൃദ്രോഗം, ഫാറ്റി ലിവർ തുടങ്ങിയവ തടയാൻ ലളിതമായ വഴികൾ.',
      toolsTitle: 'ആരോഗ്യ പരിശോധനാ കാൽക്കുലേറ്ററുകൾ',
      toolsDesc: 'നിങ്ങളുടെ ഉയരം, തൂക്കം, രക്തസമ്മർദ്ദം തുടങ്ങിയവ നൽകി ആരോഗ്യം എളുപ്പത്തിൽ കണക്കാക്കാം. (വിദ്യാഭ്യാസ ആവശ്യങ്ങൾക്ക് മാത്രം)',
      helpTitle: 'സഹായം & അടിയന്തിര നിർദ്ദേശങ്ങൾ',
      helpDesc: 'ഈ വെബ്‌സൈറ്റിന്റെ ഉപയോഗവും അടിയന്തിര ഘട്ടങ്ങളിൽ ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങളും.',
      footerDesc: 'എല്ലാവർക്കും മനസ്സിലാകുന്ന ലളിതമായ ആരോഗ്യ വിവരങ്ങളും രോഗപ്രതിരോധ മാർഗ്ഗങ്ങളും.',
      eatListHeading: '🟢 കഴിക്കേണ്ടവ (What to Eat)',
      avoidListHeading: '🔴 ഒഴിവാക്കേണ്ടവ (Foods to Avoid)',
      noResults: 'ക്ഷമിക്കണം, രോഗങ്ങൾ ഒന്നും കണ്ടെത്താനായില്ല. ദയവായി മറ്റൊരു പേര് നൽകി തിരയുക.'
    },
    en: {
      siteTitle: 'HEALTHCARE FOR YOU',
      headerTag: 'Simple Health Guide',
      topNotice: '🌿 Understand your health in simple words. Free medical information & solutions.',
      heroChip: '✨ Trusted Free Health Education Guide',
      heroTitle: 'Your Health. <span class="highlight-green">Simply Explained.</span>',
      heroDesc: 'From common fever to broken bones, diabetes to high cholesterol — learn everything easily. Discover what to eat, what to avoid, exercises, and proven solutions.',
      searchPlaceholder: 'Search any disease (e.g. Fever, Diabetes, BP, Fracture, Gout, Cholesterol)...',
      searchBtn: 'Search',
      quickLabel: 'Quick view:',
      viewSolutionsBtn: 'View Solutions →',
      allDiseasesTitle: 'Diseases & Solutions (A to Z Library)',
      allDiseasesDesc: 'Understand 60+ health conditions easily. Discover symptoms, causes, diet plans, exercises, and reliable treatment options.',
      nutritionTitle: 'Healthy Food & Nutrition Guide',
      nutritionDesc: 'Manage and prevent diseases through food. Healthy breakfast, lunch, dinner ideas, and clear What to Eat vs What to Avoid lists.',
      preventionTitle: 'Disease Prevention Centre',
      preventionDesc: 'Prevention is better than cure. Learn evidence-based daily habits to prevent diabetes, hypertension, heart disease, and fatty liver.',
      toolsTitle: 'Interactive Health Calculators',
      toolsDesc: 'Calculate your BMI, daily water needs, blood pressure status, and diabetes risk in seconds. (Educational estimates only).',
      helpTitle: 'Help & Emergency Guidance',
      helpDesc: 'Emergency warning signs, helpline numbers, and medical disclaimer.',
      footerDesc: 'Simple, trusted healthcare education and disease prevention for everyone.',
      eatListHeading: '🟢 What to Eat',
      avoidListHeading: '🔴 Foods to Avoid',
      noResults: 'No diseases found matching your search. Please try a different name or category.'
    },
    hi: {
      siteTitle: 'HEALTHCARE FOR YOU',
      headerTag: 'सरल स्वास्थ्य साथी',
      topNotice: '🌿 अपने स्वास्थ्य को सरल भाषा में समझें। निःशुल्क बीमारी की जानकारी और उपाय।',
      heroChip: '✨ विश्वसनीय निःशुल्क स्वास्थ्य गाइड',
      heroTitle: 'आपका स्वास्थ्य, <span class="highlight-green">सरलता से समझें।</span>',
      heroDesc: 'बुखार से लेकर हड्डी टूटने तक, मधुमेह से लेकर कोलेस्ट्रॉल तक — हर बीमारी को आसानी से समझें। क्या खाएं, क्या न खाएं, व्यायाम और समाधान जानें।',
      searchPlaceholder: 'बीमारी खोजें (जैसे बुखार, शुगर, बीपी, हड्डी टूटना, यूरिक एसिड)...',
      searchBtn: 'खोजें',
      quickLabel: 'तुरंत देखें:',
      viewSolutionsBtn: 'समाधान देखें →',
      allDiseasesTitle: 'बीमारियाँ और समाधान (All Diseases)',
      allDiseasesDesc: '60+ बीमारियों के लक्षण, कारण, खान-पान, व्यायाम और उपचार के सरल समाधान।',
      nutritionTitle: 'आहार और पोषण (Healthy Diet)',
      nutritionDesc: 'संतुलित आहार से रोगों को नियंत्रित करें। नाश्ता, दोपहर का खाना और रात के खाने की स्वस्थ विधियाँ।',
      preventionTitle: 'रोग रोकथाम केंद्र (Prevention)',
      preventionDesc: 'बीमार होने से पहले सावधानी बेहतर है। मधुमेह, बीपी और हृदय रोग से बचने की आदतें।',
      toolsTitle: 'स्वास्थ्य कैलकुलेटर (Health Tools)',
      toolsDesc: 'अपना बीएमआई, पानी की आवश्यकता और बीपी आसानी से जांचें।',
      helpTitle: 'सहायता एवं आपातकालीन निर्देश',
      helpDesc: 'आपातकालीन लक्षण और जरूरी हेल्पलाइन नंबर।',
      footerDesc: 'सभी के लिए सरल और विश्वसनीय स्वास्थ्य शिक्षा मंच।',
      eatListHeading: '🟢 क्या खाएं',
      avoidListHeading: '🔴 क्या न खाएं',
      noResults: 'कोई बीमारी नहीं मिली। कृपया पुनः प्रयास करें।'
    },
    ar: {
      siteTitle: 'HEALTHCARE FOR YOU',
      headerTag: 'دليلك الصحي البسيط',
      topNotice: '🌿 افهم صحتك بلغة بسيطة وسهلة. معلومات طبية وحلول مجانية.',
      heroChip: '✨ دليل التثقيف الصحي الموثوق والمجاني',
      heroTitle: 'صحتك، <span class="highlight-green">بكل بساطة ووضوح.</span>',
      heroDesc: 'من الحمى إلى كسور العظام، ومن السكري إلى الكوليسترول — تعرّف على الأطعمة المناسبة، والممنوعة، والتمارين، والحلول الطبية المعتمدة.',
      searchPlaceholder: 'ابحث عن أي مرض (مثل الحمى، السكري، ضغط الدم، الكسور)...',
      searchBtn: 'بحث',
      quickLabel: 'عرض سريع:',
      viewSolutionsBtn: 'عرض الحلول →',
      allDiseasesTitle: 'الأمراض والحلول الطبية (All Diseases)',
      allDiseasesDesc: 'تعرف على أكثر من 60 مرضاً وأعراضها وأسبابها، مع جداول التغذية والتمارين والوقاية.',
      nutritionTitle: 'الغذاء والتغذية الصحية (Healthy Diet)',
      nutritionDesc: 'تحكم بالأمراض من خلال التغذية السليمة. وجبات إفطار وغداء وعشاء صحية مع قوائم المسموح والممنوع.',
      preventionTitle: 'مركز الوقاية من الأمراض (Prevention)',
      preventionDesc: 'الوقاية خير من العلاج. عادات يومية قائمة على الأدلة للوقاية من السكري وارتفاع الضغط.',
      toolsTitle: 'حاسبات الفحص الصحي (Health Tools)',
      toolsDesc: 'احسب مؤشر كتلة الجسم، واحتياجك من الماء، وضغط الدم في ثوانٍ معدودة.',
      helpTitle: 'المساعدة وإرشادات الطوارئ',
      helpDesc: 'العلامات التحذيرية وأرقام الطوارئ وإخلاء المسؤولية الطبية.',
      footerDesc: 'منصة تعليمية صحية بسيطة وموثوقة للجميع.',
      eatListHeading: '🟢 ما يجب تناوله',
      avoidListHeading: '🔴 الأطعمة التي يجب تجنبها',
      noResults: 'لم يتم العثور على أي مرض مطابق. يرجى البحث بكلمة أخرى.'
    }
  };

  /**
   * Helper: Get localized disease name
   */
  function getDiseaseName(d) {
    if (!d) return '';
    if (state.currentLang === 'ml' && d.name_ml) return d.name_ml;
    if (state.currentLang === 'hi' && d.name_hi) return d.name_hi;
    if (state.currentLang === 'ar' && d.name_ar) return d.name_ar;
    return d.name || '';
  }

  /**
   * Helper: Get localized category name
   */
  function getCategoryName(catId) {
    const data = getData();
    const cat = data.categories.find(c => c.id === catId);
    if (!cat) return catId;
    if (state.currentLang === 'ml' && cat.name_ml) return cat.name_ml;
    if (state.currentLang === 'hi' && cat.name_hi) return cat.name_hi;
    if (state.currentLang === 'ar' && cat.name_ar) return cat.name_ar;
    return cat.name || catId;
  }

  /**
   * Router: Hash-based single page app
   */
  function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  function handleRoute() {
    const hash = window.location.hash.replace('#', '').trim();
    const validRoutes = ['home', 'diseases', 'nutrition', 'prevention', 'tools', 'help'];
    let target = 'home';
    if (validRoutes.includes(hash)) {
      target = hash;
    }

    state.currentRoute = target;

    // Toggle views
    document.querySelectorAll('.app-view').forEach(view => {
      view.classList.remove('active');
    });

    const activeView = document.getElementById(`view-${target}`);
    if (activeView) {
      activeView.classList.add('active');
    }

    // Toggle desktop nav
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.dataset.page === target) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Toggle mobile drawer nav
    document.querySelectorAll('.m-link').forEach(link => {
      if (link.dataset.page === target) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close drawer
    const drawer = document.getElementById('mobileDrawer');
    if (drawer) drawer.classList.remove('open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  /**
   * Mobile Drawer Setup
   */
  function initMobileDrawer() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('closeDrawerBtn');
    const drawer = document.getElementById('mobileDrawer');

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', () => {
        drawer.classList.add('open');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (drawer && drawer.classList.contains('open')) {
        if (!drawer.contains(e.target) && !mobileBtn.contains(e.target)) {
          drawer.classList.remove('open');
        }
      }
    });
  }

  /**
   * Language Switcher
   */
  function initLanguage() {
    const langSelect = document.getElementById('langSelector');
    if (langSelect) {
      langSelect.value = state.currentLang;
      langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        setLanguage(lang);
      });
    }
    applyStaticLanguageText();
  }

  function setLanguage(lang) {
    state.currentLang = lang;
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    applyStaticLanguageText();
    renderCommonDiseasesHome();
    renderDiseasesLibrary();
    renderNutritionView();
    renderPreventionView();

    if (state.currentDisease) {
      openDiseaseModal(state.currentDisease.id);
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function applyStaticLanguageText() {
    const t = UI_TEXT[state.currentLang] || UI_TEXT.ml;

    const elTopNotice = document.getElementById('txtTopNotice');
    if (elTopNotice) elTopNotice.textContent = t.topNotice;

    const elHeaderTag = document.getElementById('txtHeaderTag');
    if (elHeaderTag) elHeaderTag.textContent = t.headerTag;

    const elHeroChip = document.getElementById('txtHeroChip');
    if (elHeroChip) elHeroChip.textContent = t.heroChip;

    const elHeroTitle = document.getElementById('txtHeroTitle');
    if (elHeroTitle) elHeroTitle.innerHTML = t.heroTitle;

    const elHeroDesc = document.getElementById('txtHeroDesc');
    if (elHeroDesc) elHeroDesc.textContent = t.heroDesc;

    const elMainSearch = document.getElementById('homeMainSearch');
    if (elMainSearch) elMainSearch.placeholder = t.searchPlaceholder;

    const elSearchGo = document.getElementById('btnHomeSearchGo');
    if (elSearchGo) elSearchGo.textContent = t.searchBtn;

    const elQuickSearch = document.getElementById('txtQuickSearch');
    if (elQuickSearch) elQuickSearch.textContent = t.quickLabel;

    // Pages titles & desc
    const elDisTitle = document.getElementById('txtDiseasesPageTitle');
    if (elDisTitle) elDisTitle.textContent = t.allDiseasesTitle;
    const elDisDesc = document.getElementById('txtDiseasesPageDesc');
    if (elDisDesc) elDisDesc.textContent = t.allDiseasesDesc;

    const elNutTitle = document.getElementById('txtNutritionPageTitle');
    if (elNutTitle) elNutTitle.textContent = t.nutritionTitle;
    const elNutDesc = document.getElementById('txtNutritionPageDesc');
    if (elNutDesc) elNutDesc.textContent = t.nutritionDesc;

    const elPrevTitle = document.getElementById('txtPreventionPageTitle');
    if (elPrevTitle) elPrevTitle.textContent = t.preventionTitle;
    const elPrevDesc = document.getElementById('txtPreventionPageDesc');
    if (elPrevDesc) elPrevDesc.textContent = t.preventionDesc;

    const elToolsTitle = document.getElementById('txtToolsPageTitle');
    if (elToolsTitle) elToolsTitle.textContent = t.toolsTitle;
    const elToolsDesc = document.getElementById('txtToolsPageDesc');
    if (elToolsDesc) elToolsDesc.textContent = t.toolsDesc;

    const elHelpTitle = document.getElementById('txtHelpPageTitle');
    if (elHelpTitle) elHelpTitle.textContent = t.helpTitle;
    const elHelpDesc = document.getElementById('txtHelpPageDesc');
    if (elHelpDesc) elHelpDesc.textContent = t.helpDesc;

    const elFootDesc = document.getElementById('txtFooterDesc');
    if (elFootDesc) elFootDesc.textContent = t.footerDesc;
  }

  /**
   * Home Page: Common Diseases & Quick Search
   */
  function initHomeView() {
    renderCommonDiseasesHome();

    // Quick disease shortcut pills
    document.querySelectorAll('.quick-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const diseaseId = pill.dataset.disease;
        if (diseaseId) {
          openDiseaseModal(diseaseId);
        }
      });
    });

    // Big search box
    const searchInput = document.getElementById('homeMainSearch');
    const searchBtn = document.getElementById('btnHomeSearchGo');

    function performHomeSearch() {
      const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
      if (!q) return;

      const data = getData();
      // Look for direct match
      const directMatch = data.diseases.find(d => {
        const nEn = (d.name || '').toLowerCase();
        const nMl = (d.name_ml || '').toLowerCase();
        const nHi = (d.name_hi || '').toLowerCase();
        const nAr = (d.name_ar || '').toLowerCase();
        return nEn.includes(q) || nMl.includes(q) || nHi.includes(q) || nAr.includes(q) || d.id === q;
      });

      if (directMatch) {
        openDiseaseModal(directMatch.id);
        return;
      }

      // Otherwise navigate to #diseases with query
      window.location.hash = '#diseases';
      const libraryInput = document.getElementById('diseaseSearchInput');
      if (libraryInput) {
        libraryInput.value = q;
        state.searchQuery = q;
        renderDiseasesLibrary();
      }
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', performHomeSearch);
    }
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          performHomeSearch();
        }
      });
    }

    // Quick 1-minute BMI on Home
    const btnQuickBMI = document.getElementById('btnQuickBMICalc');
    if (btnQuickBMI) {
      btnQuickBMI.addEventListener('click', () => {
        const hInput = document.getElementById('quickHeight');
        const wInput = document.getElementById('quickWeight');
        const resDiv = document.getElementById('quickBMIResult');

        const h = parseFloat(hInput ? hInput.value : 0);
        const w = parseFloat(wInput ? wInput.value : 0);

        if (!h || !w || h <= 0 || w <= 0) {
          if (resDiv) {
            resDiv.classList.remove('hidden');
            resDiv.innerHTML = '<span style="color:#fecaca;">⚠️ ദയവായി ശരിയായ ഉയരവും തൂക്കവും നൽകുക (Please enter valid height & weight).</span>';
          }
          return;
        }

        const hm = h / 100;
        const bmi = (w / (hm * hm)).toFixed(1);

        let category = '';
        let color = '';
        let advice = '';

        if (bmi < 18.5) {
          category = 'തൂക്കക്കുറവ് (Underweight)';
          color = '#38bdf8';
          advice = 'പോഷകസമ്പുഷ്ടമായ ഭക്ഷണങ്ങൾ കഴിക്കുക. മുട്ട, പാൽ, നട്സ്, പയറുവർഗ്ഗങ്ങൾ ഭക്ഷണത്തിൽ ഉൾപ്പെടുത്തുക.';
        } else if (bmi <= 24.9) {
          category = 'ആരോഗ്യകരമായ തൂക്കം (Healthy Weight)';
          color = '#34d399';
          advice = 'അഭിനന്ദനങ്ങൾ! നിങ്ങളുടെ തൂക്കം കൃത്യമാണ്. ഇതേ രീതിയിലുള്ള വ്യായാമവും ഭക്ഷണക്രമവും തുടരുക.';
        } else if (bmi <= 29.9) {
          category = 'അല്പം കൂടുതൽ (Overweight)';
          color = '#fb923c';
          advice = 'എണ്ണയും പഞ്ചസാരയും കുറയ്ക്കുക. ദിവസവും 30-45 മിനിറ്റ് നടത്തം ശീലമാക്കുക.';
        } else {
          category = 'അമിതവണ്ണം (Obese)';
          color = '#f87171';
          advice = 'പ്രമേഹവും ബി.പിയും വരാതിരിക്കാൻ ഭക്ഷണ നിയന്ത്രണവും ചിട്ടയായ വ്യായാമവും ആരംഭിക്കുക. ഒരു ഡോക്ടറുടെ നിർദ്ദേശം തേടുന്നത് നല്ലതാണ്.';
        }

        if (resDiv) {
          resDiv.classList.remove('hidden');
          resDiv.innerHTML = `
            <div style="font-size:1.15rem; font-weight:800; color:${color}; margin-bottom:0.25rem;">
              നിങ്ങളുടെ ബി.എം.ഐ: ${bmi} (${category})
            </div>
            <div style="font-size:0.875rem; color:#e0f2fe;">${advice}</div>
          `;
        }
      });
    }
  }

  function renderCommonDiseasesHome() {
    const grid = document.getElementById('commonDiseasesGrid');
    if (!grid) return;

    const data = getData();
    // Common 8 diseases of high interest
    const topIds = [
      'fever-infection',
      'type-2-diabetes',
      'hypertension',
      'high-cholesterol',
      'bone-fracture',
      'gout',
      'gastritis',
      'migraine'
    ];

    let diseasesToShow = topIds.map(id => data.diseases.find(d => d.id === id)).filter(Boolean);
    if (diseasesToShow.length === 0) {
      diseasesToShow = data.diseases.slice(0, 8);
    }

    const t = UI_TEXT[state.currentLang] || UI_TEXT.ml;

    grid.innerHTML = diseasesToShow.map(d => {
      const name = getDiseaseName(d);
      const catName = getCategoryName(d.category);
      const engName = d.name || '';
      const shortDesc = d.shortDesc || '';
      const tags = (d.symptoms || []).slice(0, 3);

      return `
        <div class="simple-card" data-id="${d.id}">
          <div class="simple-card-badge-row">
            <span class="simple-card-cat">${catName}</span>
            <span style="font-size:1.25rem;">${d.icon === 'bone' ? '🦴' : d.icon === 'thermometer' ? '🌡️' : '🩺'}</span>
          </div>
          <h3 class="simple-card-title">${name}</h3>
          <div class="simple-card-eng">${engName}</div>
          <p class="simple-card-desc">${shortDesc}</p>
          <div class="simple-card-tags">
            ${tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <button class="btn-card-sol">
            <span>${t.viewSolutionsBtn}</span>
          </button>
        </div>
      `;
    }).join('');

    // Attach click listeners to cards
    grid.querySelectorAll('.simple-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        openDiseaseModal(id);
      });
    });
  }

  /**
   * Diseases Library (A to Z and Categories)
   */
  function initDiseasesLibrary() {
    const catSelect = document.getElementById('categorySelect');
    const searchInput = document.getElementById('diseaseSearchInput');
    const clearBtn = document.getElementById('btnClearDiseaseSearch');
    const aZStrip = document.getElementById('alphabetStrip');

    // Populate category dropdown
    const data = getData();
    if (catSelect && data.categories) {
      catSelect.innerHTML = `<option value="all">എല്ലാ വിഭാഗങ്ങളും (All Categories)</option>` + 
        data.categories.map(c => {
          const cName = getCategoryName(c.id);
          return `<option value="${c.id}">${cName}</option>`;
        }).join('');

      catSelect.addEventListener('change', (e) => {
        state.selectedCategory = e.target.value;
        renderDiseasesLibrary();
      });
    }

    // Populate A to Z Strip
    if (aZStrip) {
      const letters = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
      aZStrip.innerHTML = letters.map(letter => `
        <button class="a-z-btn ${letter === 'ALL' ? 'active' : ''}" data-letter="${letter.toLowerCase()}">
          ${letter}
        </button>
      `).join('');

      aZStrip.querySelectorAll('.a-z-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          aZStrip.querySelectorAll('.a-z-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.selectedLetter = btn.dataset.letter;
          renderDiseasesLibrary();
        });
      });
    }

    // Search input listener
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        if (clearBtn) {
          if (state.searchQuery.length > 0) {
            clearBtn.classList.add('show');
          } else {
            clearBtn.classList.remove('show');
          }
        }
        renderDiseasesLibrary();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.classList.remove('show');
        renderDiseasesLibrary();
      });
    }

    renderDiseasesLibrary();
  }

  function renderDiseasesLibrary() {
    const grid = document.getElementById('allDiseasesGrid');
    const countEl = document.getElementById('diseaseCountText');
    if (!grid) return;

    const data = getData();
    const q = state.searchQuery;
    const cat = state.selectedCategory;
    const letter = state.selectedLetter;

    const filtered = data.diseases.filter(d => {
      // Category filter
      if (cat !== 'all' && d.category !== cat) return false;

      // Letter filter (by English name)
      if (letter !== 'all') {
        const firstChar = (d.name || '').trim().charAt(0).toLowerCase();
        if (firstChar !== letter) return false;
      }

      // Search query filter
      if (q) {
        const nEn = (d.name || '').toLowerCase();
        const nMl = (d.name_ml || '').toLowerCase();
        const nHi = (d.name_hi || '').toLowerCase();
        const nAr = (d.name_ar || '').toLowerCase();
        const sDesc = (d.shortDesc || '').toLowerCase();
        const sSymptoms = (d.symptoms || []).join(' ').toLowerCase();
        const sCauses = (d.causes || []).join(' ').toLowerCase();

        const match = nEn.includes(q) || nMl.includes(q) || nHi.includes(q) || nAr.includes(q) ||
          sDesc.includes(q) || sSymptoms.includes(q) || sCauses.includes(q) || d.id.includes(q);

        if (!match) return false;
      }

      return true;
    });

    const t = UI_TEXT[state.currentLang] || UI_TEXT.ml;

    if (countEl) {
      countEl.textContent = `${filtered.length} രോഗങ്ങൾ ലഭ്യമാണ് (${filtered.length} conditions)`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #ffffff; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;">🔍</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">${t.noResults}</h3>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(d => {
      const name = getDiseaseName(d);
      const catName = getCategoryName(d.category);
      const engName = d.name || '';
      const shortDesc = d.shortDesc || '';
      const tags = (d.symptoms || []).slice(0, 3);

      return `
        <div class="simple-card" data-id="${d.id}">
          <div class="simple-card-badge-row">
            <span class="simple-card-cat">${catName}</span>
            <span style="font-size: 1.15rem;">🩺</span>
          </div>
          <h3 class="simple-card-title">${name}</h3>
          <div class="simple-card-eng">${engName}</div>
          <p class="simple-card-desc">${shortDesc}</p>
          <div class="simple-card-tags">
            ${tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
          </div>
          <button class="btn-card-sol">
            <span>${t.viewSolutionsBtn}</span>
          </button>
        </div>
      `;
    }).join('');

    // Attach click listeners
    grid.querySelectorAll('.simple-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        openDiseaseModal(id);
      });
    });
  }

  /**
   * Simplified Disease Modal Controller
   */
  function initDiseaseModal() {
    const overlay = document.getElementById('diseaseModalOverlay');
    const closeBtn = document.getElementById('btnCloseDiseaseModal');
    const closeBottomBtn = document.getElementById('btnModalCloseBottom');
    const printBtn = document.getElementById('btnModalPrint');

    if (closeBtn) closeBtn.addEventListener('click', closeDiseaseModal);
    if (closeBottomBtn) closeBottomBtn.addEventListener('click', closeDiseaseModal);

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Close on backdrop click
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeDiseaseModal();
        }
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
        closeDiseaseModal();
      }
    });

    // Modal Tabs Navigation
    const tabsNav = document.getElementById('modalTabsNav');
    if (tabsNav) {
      tabsNav.querySelectorAll('.d-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          tabsNav.querySelectorAll('.d-tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const tabName = btn.dataset.tab;
          state.activeModalTab = tabName;

          document.querySelectorAll('.d-tab-panel').forEach(panel => {
            panel.classList.remove('active');
          });

          const activePanel = document.getElementById(`tab-${tabName}`);
          if (activePanel) {
            activePanel.classList.add('active');
          }
        });
      });
    }
  }

  function openDiseaseModal(diseaseId) {
    const data = getData();
    const disease = data.diseases.find(d => d.id === diseaseId);
    if (!disease) return;

    state.currentDisease = disease;

    // Header info
    const titleEl = document.getElementById('mDiseaseTitle');
    const engEl = document.getElementById('mDiseaseEngName');
    const catEl = document.getElementById('mBadgeCategory');
    const sevEl = document.getElementById('mBadgeSeverity');

    if (titleEl) titleEl.textContent = getDiseaseName(disease);
    if (engEl) engEl.textContent = disease.name || '';
    if (catEl) catEl.textContent = getCategoryName(disease.category);
    if (sevEl) sevEl.textContent = disease.badge || 'ആരോഗ്യ ഗൈഡ്';

    // Tab 1: Overview
    const shortDescEl = document.getElementById('mShortDesc');
    const whatIsItEl = document.getElementById('mWhatIsIt');
    const causesListEl = document.getElementById('mCausesList');

    if (shortDescEl) shortDescEl.textContent = disease.shortDesc || '';
    if (whatIsItEl) whatIsItEl.textContent = disease.whatIsIt || disease.shortDesc || '';
    if (causesListEl) {
      causesListEl.innerHTML = (disease.causes || []).map(c => `<li>${c}</li>`).join('');
    }

    // Tab 2: Symptoms & Warning Signs
    const symListEl = document.getElementById('mSymptomsList');
    const warnListEl = document.getElementById('mWarningSignsList');

    if (symListEl) {
      symListEl.innerHTML = (disease.symptoms || []).map(s => `<li>${s}</li>`).join('');
    }
    if (warnListEl) {
      warnListEl.innerHTML = (disease.warningSigns || []).map(w => `<li>${w}</li>`).join('');
    }

    // Tab 3: Diet & Nutrition (Green & Red Boxes)
    const safeFoodsEl = document.getElementById('mSafeFoodsList');
    const avoidFoodsEl = document.getElementById('mAvoidFoodsList');

    if (safeFoodsEl) {
      safeFoodsEl.innerHTML = (disease.safeFoods || []).map(f => `<li>${f}</li>`).join('');
    }
    if (avoidFoodsEl) {
      avoidFoodsEl.innerHTML = (disease.avoidFoods || []).map(f => `<li>${f}</li>`).join('');
    }

    // Tab 4: Habits & Exercises
    const exListEl = document.getElementById('mExercisesList');
    const lifeListEl = document.getElementById('mLifestyleList');

    if (exListEl) {
      exListEl.innerHTML = (disease.exercises || []).map(e => `<li>${e}</li>`).join('');
    }
    if (lifeListEl) {
      lifeListEl.innerHTML = (disease.lifestyle || []).map(l => `<li>${l}</li>`).join('');
    }

    // Tab 5: Treatment & Solutions
    const treatListEl = document.getElementById('mTreatmentsList');
    const prevTextEl = document.getElementById('mPreventionText');
    const faqsContainerEl = document.getElementById('mFaqsContainer');

    if (treatListEl) {
      treatListEl.innerHTML = (disease.treatments || []).map(t => `<li>${t}</li>`).join('');
    }
    if (prevTextEl) {
      prevTextEl.textContent = disease.prevention || 'പതിവായി ആരോഗ്യകരമായ ഭക്ഷണം കഴിക്കുകയും കൃത്യമായി വ്യായാമം ചെയ്യുകയും ചെയ്യുക.';
    }
    if (faqsContainerEl) {
      if (disease.faqs && disease.faqs.length > 0) {
        faqsContainerEl.innerHTML = `
          <h4 style="margin-top:1.5rem; margin-bottom:0.75rem;">പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ (FAQs):</h4>
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            ${disease.faqs.map(faq => `
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.85rem;">
                <div style="font-weight:700; color:#0f172a; margin-bottom:0.35rem;">❓ ${faq.q}</div>
                <div style="font-size:0.9rem; color:#475569;">${faq.a}</div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        faqsContainerEl.innerHTML = '';
      }
    }

    // Tab 6: Doctor Advice & References
    const consultEl = document.getElementById('mWhenToConsult');
    const refListEl = document.getElementById('mReferencesList');

    if (consultEl) {
      consultEl.innerHTML = `<strong>🩺 ഡോക്ടറെ കാണേണ്ട സന്ദർഭങ്ങൾ:</strong><br>${disease.whenToConsult || 'ലക്ഷണങ്ങൾ നീണ്ടുനിൽക്കുകയോ കഠിനമാവുകയോ ചെയ്താൽ ഉടൻ അടുത്തുള്ള ഡോക്ടറെ കാണുക.'}`;
    }
    if (refListEl) {
      refListEl.innerHTML = (disease.references || ['World Health Organization (WHO)', 'Centers for Disease Control and Prevention (CDC)', 'National Health Service (NHS)']).map(r => `<li>${r}</li>`).join('');
    }

    // Reset to overview tab
    const tabsNav = document.getElementById('modalTabsNav');
    if (tabsNav) {
      tabsNav.querySelectorAll('.d-tab-btn').forEach((b, idx) => {
        if (idx === 0) b.classList.add('active');
        else b.classList.remove('active');
      });
    }
    document.querySelectorAll('.d-tab-panel').forEach((p, idx) => {
      if (idx === 0) p.classList.add('active');
      else p.classList.remove('active');
    });

    // Open Modal
    const overlay = document.getElementById('diseaseModalOverlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeDiseaseModal() {
    const overlay = document.getElementById('diseaseModalOverlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    state.currentDisease = null;
  }

  /**
   * Nutrition View
   */
  function renderNutritionView() {
    const data = getData();
    const condGrid = document.getElementById('conditionFoodsGrid');
    const mealGrid = document.getElementById('mealIdeasGrid');

    // 1. Condition Foods Grid
    if (condGrid && data.nutrition && data.nutrition.conditionSpecificFoods) {
      condGrid.innerHTML = data.nutrition.conditionSpecificFoods.map(item => {
        const title = (state.currentLang === 'ml' && item.condition_ml) ? item.condition_ml : item.condition;
        return `
          <div class="food-condition-card">
            <h3>${title}</h3>
            <div class="food-condition-target">${item.target}</div>
            <div class="diet-split-container">
              <div class="diet-box-green">
                <h4>🟢 കഴിക്കേണ്ടവ (Safe Foods):</h4>
                <ul class="green-bullets">
                  ${(item.recommended || []).map(r => `<li>${r}</li>`).join('')}
                </ul>
              </div>
              <div class="diet-box-red">
                <h4>🔴 ഒഴിവാക്കേണ്ടവ (Limit / Avoid):</h4>
                <ul class="red-bullets">
                  ${(item.limitAvoid || []).map(a => `<li>${a}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 2. Meal Ideas Grid
    if (mealGrid && data.nutrition && data.nutrition.mealIdeas) {
      mealGrid.innerHTML = data.nutrition.mealIdeas.map(m => {
        return `
          <div class="meal-card">
            <span class="meal-badge">${m.meal}</span>
            <h3>${m.title}</h3>
            <p class="meal-desc">${m.desc}</p>
            <ul class="meal-items-list">
              ${(m.items || []).map(it => `<li>${it}</li>`).join('')}
            </ul>
            <div class="meal-nutrition-strip">
              <span>🔥 ${m.calories}</span>
              <span>🍗 ${m.protein} Prot</span>
              <span>🌾 ${m.fiber} Fiber</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  /**
   * Prevention View
   */
  function renderPreventionView() {
    const grid = document.getElementById('preventionCardsGrid');
    const data = getData();
    if (!grid || !data.preventionGuides) return;

    grid.innerHTML = data.preventionGuides.map(guide => {
      const title = (state.currentLang === 'ml' && guide.title_ml) ? guide.title_ml : guide.title;
      return `
        <div class="prevention-card">
          <span class="prev-badge">🛡️ രോഗപ്രതിരോധം</span>
          <h3>${title}</h3>
          <p class="prev-summary">${guide.summary || ''}</p>
          <ul class="prev-bullets">
            ${(guide.actionPoints || []).map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');
  }

  /**
   * Health Tools & Calculators View
   */
  function initToolsView() {
    // 1. BMI Full Calculator
    const btnBmi = document.getElementById('btnRunBmiCalc');
    if (btnBmi) {
      btnBmi.addEventListener('click', () => {
        const h = parseFloat(document.getElementById('calcBmiHeight').value);
        const w = parseFloat(document.getElementById('calcBmiWeight').value);
        const res = document.getElementById('resultBmiCard');
        if (!h || !w || h <= 0 || w <= 0) {
          res.className = 'calc-result-display res-red';
          res.classList.remove('hidden');
          res.innerHTML = '⚠️ ദയവായി സാധുവായ ഉയരവും തൂക്കവും നൽകുക.';
          return;
        }

        const hm = h / 100;
        const bmi = (w / (hm * hm)).toFixed(1);
        const minHealthyW = (18.5 * hm * hm).toFixed(1);
        const maxHealthyW = (24.9 * hm * hm).toFixed(1);

        let cls = 'res-green';
        let status = 'സാധാരണ ആരോഗ്യകരമായ തൂക്കം (Healthy Weight)';
        let tip = 'നിങ്ങളുടെ തൂക്കം അനുയോജ്യമാണ്. ആരോഗ്യകരമായ ഈ രീതി നിലനിർത്തുക.';

        if (bmi < 18.5) {
          cls = 'res-blue';
          status = 'തൂക്കക്കുറവ് (Underweight)';
          tip = 'പോഷകാഹാരങ്ങൾ, പാൽ, മുട്ട, പയറുവർഗ്ഗങ്ങൾ എന്നിവ കൂടുതലായി ഭക്ഷണത്തിൽ ഉൾപ്പെടുത്തുക.';
        } else if (bmi >= 25 && bmi < 30) {
          cls = 'res-amber';
          status = 'അല്പം കൂടുതൽ (Overweight)';
          tip = 'പഞ്ചസാരയും എണ്ണയും കുറയ്ക്കുക, ദിവസവും 30 മിനിറ്റ് നടത്തം ശീലമാക്കുക.';
        } else if (bmi >= 30) {
          cls = 'res-red';
          status = 'അമിതവണ്ണം (Obese)';
          tip = 'പ്രമേഹവും ബി.പിയും വരാതിരിക്കാൻ ഡോക്ടറുടെയും ഡയറ്റീഷ്യന്റെയും സഹായത്തോടെ ചിട്ടയായ ഭാരക്കുറവ് പ്ലാൻ ചെയ്യുക.';
        }

        res.className = `calc-result-display ${cls}`;
        res.classList.remove('hidden');
        res.innerHTML = `
          <div style="font-size:1.15rem; font-weight:800; margin-bottom:0.35rem;">ബി.എം.ഐ: ${bmi} (${status})</div>
          <div style="margin-bottom:0.5rem;">നിങ്ങളുടെ ഉയരത്തിന് അനുയോജ്യമായ ആരോഗ്യകരമായ തൂക്കം: <strong>${minHealthyW} kg – ${maxHealthyW} kg</strong></div>
          <div style="font-size:0.875rem;">${tip}</div>
        `;
      });
    }

    // 2. Water Intake Calculator
    const btnWater = document.getElementById('btnRunWaterCalc');
    if (btnWater) {
      btnWater.addEventListener('click', () => {
        const w = parseFloat(document.getElementById('calcWaterWeight').value);
        const act = document.getElementById('calcWaterActivity').value;
        const res = document.getElementById('resultWaterCard');

        if (!w || w <= 0) {
          res.className = 'calc-result-display res-red';
          res.classList.remove('hidden');
          res.innerHTML = '⚠️ ദയവായി നിങ്ങളുടെ തൂക്കം നൽകുക.';
          return;
        }

        let baseLiters = w * 0.033; // 33ml per kg
        if (act === 'moderate') baseLiters += 0.5;
        if (act === 'heavy') baseLiters += 1.0;

        const liters = baseLiters.toFixed(1);
        const glasses = Math.round(liters / 0.25); // 250ml per glass

        res.className = 'calc-result-display res-blue';
        res.classList.remove('hidden');
        res.innerHTML = `
          <div style="font-size:1.15rem; font-weight:800; margin-bottom:0.35rem;">ദിവസേന ശുപാർശ ചെയ്യുന്ന അളവ്: ${liters} ലിറ്റർ</div>
          <div style="font-size:0.95rem; margin-bottom:0.35rem;">ഏകദേശം <strong>${glasses} ഗ്ലാസ്സ്</strong> വെള്ളം കുടിക്കേണ്ടതുണ്ട്.</div>
          <div style="font-size:0.85rem;">💡 ഒരുമിച്ച് കുടിക്കാതെ ദിവസം മുഴുവൻ കൃത്യമായ ഇടവേളകളിൽ കുടിക്കുക. വൃക്കകൾക്കും ചർമ്മത്തിനും ദഹനത്തിനും ഉത്തമം.</div>
        `;
      });
    }

    // 3. Blood Pressure Checker
    const btnBp = document.getElementById('btnRunBpCalc');
    if (btnBp) {
      btnBp.addEventListener('click', () => {
        const sys = parseInt(document.getElementById('calcBpSys').value, 10);
        const dia = parseInt(document.getElementById('calcBpDia').value, 10);
        const res = document.getElementById('resultBpCard');

        if (!sys || !dia || sys <= 40 || dia <= 30) {
          res.className = 'calc-result-display res-red';
          res.classList.remove('hidden');
          res.innerHTML = '⚠️ ദയവായി ശരിയായ സിസ്റ്റോളിക്, ഡയസ്റ്റോളിക് സംഖ്യകൾ നൽകുക.';
          return;
        }

        let cls = 'res-green';
        let title = 'സാധാരണ രക്തസമ്മർദ്ദം (Normal BP)';
        let desc = 'നിങ്ങളുടെ രക്തസമ്മർദ്ദം നോർമൽ ആണ് (120/80 ൽ താഴെ). ഉപ്പും എണ്ണയും കുറച്ച് ഈ ആരോഗ്യം നിലനിർത്തുക.';

        if (sys >= 180 || dia >= 120) {
          cls = 'res-red';
          title = '🚨 അതീവ അപകടാവസ്ഥ (Hypertensive Crisis)';
          desc = 'രക്തസമ്മർദ്ദം വളരെ കൂടുതലാണ്! ഉടൻ തന്നെ അടുത്തുള്ള ഡോക്ടറെയോ ആശുപത്രി അടിയന്തിര വിഭാഗത്തെയോ കാണിക്കുക.';
        } else if (sys >= 140 || dia >= 90) {
          cls = 'res-red';
          title = 'ഉയർന്ന രക്തസമ്മർദ്ദം - സ്റ്റേജ് 2 (Stage 2 Hypertension)';
          desc = 'നിങ്ങൾക്ക് പ്രഷർ കൂടുതലാണ്. ഒരു ഡോക്ടറെ കണ്ട് പരിശോധന നടത്തുകയും ഭക്ഷണത്തിൽ ഉപ്പ് കർശനമായി കുറയ്ക്കുകയും ചെയ്യുക.';
        } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
          cls = 'res-amber';
          title = 'ഉയർന്ന രക്തസമ്മർദ്ദം - സ്റ്റേജ് 1 (Stage 1 Hypertension)';
          desc = 'പ്രഷർ അല്പം കൂടുതലാണ്. ദിവസവും 30 മിനിറ്റ് വേഗത്തിൽ നടക്കുക, ഭക്ഷണത്തിൽ ഉപ്പും വറുത്ത പലഹാരങ്ങളും കുറയ്ക്കുക.';
        } else if (sys >= 120 && sys <= 129 && dia < 80) {
          cls = 'res-amber';
          title = 'കൂടിയ അളവിലേക്ക് (Elevated BP)';
          desc = 'സാധാരണയേക്കാൾ അല്പം കൂടുതലാണ്. ജീവിതശൈലി മാറ്റങ്ങളിലൂടെ ഇത് നോർമൽ ആക്കി മാറ്റാം.';
        }

        res.className = `calc-result-display ${cls}`;
        res.classList.remove('hidden');
        res.innerHTML = `
          <div style="font-size:1.15rem; font-weight:800; margin-bottom:0.35rem;">${sys}/${dia} mmHg – ${title}</div>
          <div style="font-size:0.9rem;">${desc}</div>
        `;
      });
    }

    // 4. Diabetes Risk Check
    const qContainer = document.getElementById('diabetesMiniQuestions');
    if (qContainer) {
      qContainer.innerHTML = `
        <div class="mini-q-row">
          <span>1. നിങ്ങളുടെ പ്രായം:</span>
          <select id="qAge">
            <option value="0">40 വയസ്സിൽ താഴെ</option>
            <option value="2">40 മുതൽ 50 വരെ</option>
            <option value="3">50 ന് മുകളിൽ</option>
          </select>
        </div>
        <div class="mini-q-row">
          <span>2. കുടുംബത്തിൽ ആർക്കെങ്കിലും പ്രമേഹമുണ്ടോ?</span>
          <select id="qFamily">
            <option value="0">ഇല്ല (No)</option>
            <option value="2">അമ്മ/അച്ഛൻ/സഹോദരങ്ങൾക്ക് ഉണ്ട് (Yes)</option>
          </select>
        </div>
        <div class="mini-q-row">
          <span>3. ദിവസവും വ്യായാമം ചെയ്യാറുണ്ടോ?</span>
          <select id="qExercise">
            <option value="0">ഉണ്ട്, ദിവസവും 30 മിനിറ്റ് നടക്കാറുണ്ട്</option>
            <option value="2">ഇല്ല, ഇരിപ്പ് ജോലിയാണ്</option>
          </select>
        </div>
        <div class="mini-q-row">
          <span>4. വയറിന് ചുറ്റും കൊഴുപ്പ് / അമിതവണ്ണമുണ്ടോ?</span>
          <select id="qBelly">
            <option value="0">ഇല്ല, സാധാരണ ശരീരഭാരം</option>
            <option value="3">ഉണ്ട്, അമിതവണ്ണമുണ്ട്</option>
          </select>
        </div>
      `;
    }

    const btnDiaRisk = document.getElementById('btnRunDiabetesRisk');
    if (btnDiaRisk) {
      btnDiaRisk.addEventListener('click', () => {
        const sAge = parseInt(document.getElementById('qAge').value, 10);
        const sFam = parseInt(document.getElementById('qFamily').value, 10);
        const sExe = parseInt(document.getElementById('qExercise').value, 10);
        const sBel = parseInt(document.getElementById('qBelly').value, 10);

        const score = sAge + sFam + sExe + sBel;
        const res = document.getElementById('resultDiabetesRiskCard');

        let cls = 'res-green';
        let status = 'കുറഞ്ഞ സാധ്യത (Low Risk)';
        let advice = 'നിങ്ങൾക്ക് നിലവിൽ പ്രമേഹം വരാനുള്ള സാധ്യത കുറവാണ്. നല്ല ഭക്ഷണശീലങ്ങളും വ്യായാമവും തുടരുക.';

        if (score >= 6) {
          cls = 'res-red';
          status = 'കൂടിയ സാധ്യത (High Risk)';
          advice = 'നിങ്ങൾക്ക് ഭാവിയിൽ പ്രമേഹം വരാൻ സാധ്യത കൂടുതലാണ്. 6 മാസത്തിലൊരിക്കൽ ഫാസ്റ്റിംഗ് ബ്ലഡ് ഷുഗർ (HbA1c) പരിശോധിക്കുക. മധുരവും അന്നജവും കുറയ്ക്കുക.';
        } else if (score >= 3) {
          cls = 'res-amber';
          status = 'മിതമായ സാധ്യത (Moderate Risk)';
          advice = 'ശ്രദ്ധിക്കുക! ദിവസവും നടത്തം ശീലമാക്കുകയും പഞ്ചസാരയും വറുത്ത ഭക്ഷണങ്ങളും കുറയ്ക്കുകയും ചെയ്താൽ പ്രമേഹം വരുന്നത് തടയാം.';
        }

        res.className = `calc-result-display ${cls}`;
        res.classList.remove('hidden');
        res.innerHTML = `
          <div style="font-size:1.15rem; font-weight:800; margin-bottom:0.35rem;">പ്രമേഹ സാധ്യത: ${status} (Score: ${score}/10)</div>
          <div style="font-size:0.9rem;">${advice}</div>
        `;
      });
    }
  }

  /**
   * Contact Form Handler
   */
  function initContactForm() {
    const form = document.getElementById('simpleContactForm');
    const toast = document.getElementById('simpleContactToast');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sContactName').value;
        if (toast) {
          toast.classList.remove('hidden');
          toast.innerHTML = `നന്ദി <strong>${name}</strong>, നിങ്ങളുടെ സന്ദേശം ലഭിച്ചു. ഞങ്ങളുടെ ഹെൽത്ത് ടീം ഉടൻ മറുപടി നൽകുന്നതാണ്.`;
        }
        form.reset();
        setTimeout(() => {
          if (toast) toast.classList.add('hidden');
        }, 6000);
      });
    }
  }

  /**
   * Application Bootstrapper
   */
  function initApp() {
    initRouter();
    initMobileDrawer();
    initLanguage();
    initHomeView();
    initDiseasesLibrary();
    initDiseaseModal();
    renderNutritionView();
    renderPreventionView();
    initToolsView();
    initContactForm();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
