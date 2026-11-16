/**
 * HEALTHCARE FOR YOU - Category G: Infectious Diseases
 */
module.exports = [
  {
    id: "dengue",
    name: "Dengue Fever (Breakbone Fever)",
    name_ml: "ഡെങ്കിപ്പനി (ഡെങ്കി ഫീവർ)",
    name_hi: "डेंगू बुखार",
    name_ar: "حمى الضنك",
    category: "infectious",
    badge: "Mosquito-Borne Flavivirus",
    icon: "alert-triangle",
    shortDesc: "A mosquito-borne viral infection causing high fever, severe retro-orbital headache, excruciating joint pain, and potential plasma leakage.",
    whatIsIt: "Dengue is a tropical vector-borne viral disease caused by the Dengue Virus (DENV, an RNA virus belonging to the Flaviviridae family with 4 distinct serotypes: DENV-1, DENV-2, DENV-3, DENV-4). It is transmitted to humans through the bites of infected female Aedes mosquitoes (predominantly Aedes aegypti). Infection can range from mild febrile illness to severe life-threatening Dengue Shock Syndrome (DSS) and Dengue Hemorrhagic Fever (DHF).",
    causes: [
      "Infection with any of the 4 Dengue virus serotypes via Aedes aegypti or Aedes albopictus mosquitoes",
      "Antibody-Dependent Enhancement (ADE): Secondary infection with a different serotype produces non-neutralizing antibodies that enhance viral entry into macrophages, triggering massive plasma leakage"
    ],
    symptoms: [
      "Sudden high spiking fever (up to 104°F / 40°C) lasting 2 to 7 days",
      "Severe retro-orbital pain (excruciating pain located directly behind the eyes, worsened by eye movement)",
      "Severe arthralgia and myalgia (historically termed 'Breakbone fever')",
      "Flushed facial erythema followed by a generalized maculopapular measles-like rash ('islands of white in a sea of red')",
      "Mild hemorrhagic manifestations: Petechiae (pinpoint skin bleeds), epistaxis (nosebleeds), or bleeding gums",
      "Nausea, persistent vomiting, and profound physical prostration"
    ],
    warningSigns: [
      "CRITICAL PHASE WARNING SIGNS (typically emerging during defervescence at days 3-7):",
      "Severe persistent abdominal pain or tenderness",
      "Persistent vomiting (>= 3 episodes within 24 hours)",
      "Mucosal bleeding (gums, nose, gastrointestinal bleeding / black stools)",
      "Clinical fluid accumulation (pleural effusion, ascites)",
      "Lethargy, restlessness, or sudden postural dizziness",
      "Hepatomegaly (> 2 cm liver enlargement below costal margin)",
      "Rapidly rising Hematocrit accompanied by a rapid plummeting in Platelet count (< 100,000 /uL)"
    ],
    riskFactors: [
      "Living in or traveling to tropical and subtropical regions (Southeast Asia, Latin America, Caribbean, Western Pacific)",
      "Prior infection with a different DENV serotype (the single greatest risk factor for Severe Dengue)",
      "High density of stagnant standing water near residential areas (ideal breeding sites for day-biting Aedes mosquitoes)",
      "Young infants and elderly adults with chronic co-morbidities"
    ],
    bodyImpact: "Severe dengue causes transient endothelial hyperpermeability driven by cytokine storms (VEGF, TNF-alpha, NS1 protein toxicity). Plasma leaks out of intravascular spaces into pleural and peritoneal cavities, causing profound hemoconcentration, hypovolemic shock, metabolic acidosis, disseminated intravascular coagulation (DIC), and multi-organ failure.",
    diagnosis: [
      "Dengue NS1 Antigen Test (rapid detection during the first 1 to 5 days of fever)",
      "Dengue IgM and IgG ELISA Antibody tests (positive after day 5 of illness)",
      "Reverse Transcriptase-PCR (RT-PCR) for definitive viral RNA detection and serotyping",
      "Serial Complete Blood Counts (CBC): Monitoring Hematocrit (detects hemoconcentration/leakage) and Platelet count twice daily during critical phase",
      "Ultrasound of abdomen/chest to detect early gall bladder wall thickening, ascites, and pleural effusion"
    ],
    treatments: [
      "Meticulous, monitored Intravenous Fluid Resuscitation (Isotonic crystalloids: Normal Saline or Ringer's Lactate) titrated precisely to urine output and hematocrit",
      "Antipyretic therapy: Paracetamol / Acetaminophen ONLY for fever",
      "ABSOLUTE CONTRAINDICATION: NSAIDs (Aspirin, Ibuprofen, Diclofenac) are strictly prohibited as they worsen platelet dysfunction and cause catastrophic gastric bleeding",
      "Blood product transfusions (platelet concentrates or packed red cells) strictly indicated for active life-threatening hemorrhage or refractory coagulopathy",
      "Close ICU hemodynamic monitoring during the 48-hour critical leakage phase"
    ],
    prevention: "Eliminate mosquito breeding sites by emptying and scrubbing all standing water containers weekly. Use mosquito repellents containing DEET, Picaridin, or Oil of Lemon Eucalyptus. Install window screens, sleep under permethrin-treated bed nets, wear long sleeves during dawn and dusk, and receive the Qdenga or Dengvaxia vaccine where medically indicated.",
    safeFoods: [
      "Abundant oral rehydration fluids: Oral Rehydration Salts (ORS) solution, tender coconut water, clear fruit broths",
      "Papaya leaf extract juice (shown in clinical trials to promote bone marrow megakaryocyte thrombopoiesis)",
      "Pomegranate juice and fresh kiwi fruit (rich in Vitamin C and antioxidants)",
      "Soft, easily digestible bland foods: Rice porridge (kanji), steamed vegetables, khichdi",
      "Adequate fluids to maintain clear pale-yellow urine"
    ],
    avoidFoods: [
      "Aspirin, Ibuprofen, and all NSAID medications (DEADLY in Dengue — cause fatal bleeding)",
      "Dark-colored or red-colored foods (like red fruit punches or dark colas) that can make distinguishing vomit blood from food difficult",
      "Oily, greasy, and heavily spiced foods that irritate the stomach",
      "Alcohol and dehydrating sugary sodas"
    ],
    exercises: [
      "STRICT COMPLETE BED REST during the acute and critical phases of illness",
      "Zero physical exertion while platelet counts are depressed to prevent spontaneous internal hemorrhage",
      "Gradual resumption of light walking only after full defervescence and platelet count normalization (> 150,000 /uL)"
    ],
    lifestyle: [
      "Monitor temperature and check CBC daily during days 3 to 7 of fever (the defervescence window is the most dangerous)",
      "Apply DEET mosquito repellent during daytime hours (Aedes mosquitoes bite predominantly during the day)",
      "Inspect home once a week for hidden water reservoirs (plant saucers, discarded tires, air cooler trays)",
      "Never ignore abdominal pain or dizziness when fever starts dropping"
    ],
    whenToConsult: "SEEK IMMEDIATE EMERGENCY HOSPITALIZATION if you develop abdominal pain, persistent vomiting, bleeding from gums/nose, black stools, extreme restlessness, or cold clammy hands as fever subsides. This marks the onset of Dengue Shock.",
    faqs: [
      {
        q: "Why is the period when fever goes DOWN the most dangerous in dengue?",
        a: "Many patients assume they are recovering when their fever drops around day 4-5. However, this is precisely when the 'Critical Phase' begins, where microscopic blood vessel leaks can cause sudden blood pressure collapse and shock."
      },
      {
        q: "Can someone catch dengue multiple times?",
        a: "Yes. There are 4 distinct virus serotypes. Recovering from one gives lifelong immunity to that single serotype, but only temporary cross-protection against the other three. A second infection with a different serotype carries a much higher risk of Severe Dengue."
      }
    ],
    references: [
      "World Health Organization (WHO) Guidelines for Diagnosis, Treatment, Prevention and Control of Dengue 2024",
      "CDC Dengue Clinical Management Handbook",
      "Lancet Infectious Diseases Seminar on Dengue Pathogenesis and Vaccine Development"
    ]
  },
  {
    id: "malaria",
    name: "Malaria (Plasmodium Infection)",
    name_ml: "മലമ്പനി (മലേറിയ)",
    name_hi: "मलेरिया",
    name_ar: "الملاريا",
    category: "infectious",
    badge: "Protozoan Parasitic Disease",
    icon: "alert-octagon",
    shortDesc: "A life-threatening vector-borne parasitic disease caused by Plasmodium parasites transmitted through the bites of infected female Anopheles mosquitoes.",
    whatIsIt: "Malaria is an acute febrile parasitic disease caused by protozoan parasites of the genus Plasmodium, transmitted through the bites of infected female Anopheles mosquitoes. Five parasite species infect humans: Plasmodium falciparum (the deadliest, dominant in Africa), P. vivax (dominant in the Americas and Asia, causes recurrent relapses from dormant liver hypnozoites), P. malariae, P. ovale, and P. knowlesi.",
    causes: [
      "Bite of an infective female Anopheles mosquito inoculating Plasmodium sporozoites into the bloodstream",
      "Hepatic schizogony: Sporozoites travel to hepatocytes to multiply, then rupture into the circulation as merozoites",
      "Erythrocytic cycle: Merozoites invade red blood cells, multiply, and rupture erythrocytes synchronously, releasing pyrogenic toxins"
    ],
    symptoms: [
      "The Classic Malarial Paroxysm (occurring every 48 hours in tertian or 72 hours in quartan malaria):",
      "1. Cold Stage: Shivering, intense teeth-chattering chills, and feeling freezing cold lasting 15-60 minutes",
      "2. Hot Stage: Burning fever (up to 104-106°F), severe throbbing headache, nausea, and vomiting lasting 2-6 hours",
      "3. Sweating Stage: Profuse drenching diaphoresis, rapid defervescence, and profound exhaustion lasting 2-4 hours",
      "Anemia and mild jaundice due to massive intravascular red blood cell hemolysis",
      "Splenomegaly (tender enlarged spleen detectable on abdominal exam)"
    ],
    warningSigns: [
      "CEREBRAL MALARIA (P. falciparum emergency): Coma, seizures, delirium, or abnormal posturing",
      "Severe Malarial Anemia: Hemoglobin dropping < 5 g/dL",
      "Blackwater Fever: Massive intravascular hemolysis producing dark mahogany/black urine",
      "Acute Respiratory Distress Syndrome (ARDS) or Non-Cardiogenic Pulmonary Edema",
      "Lactic Acidosis and severe refractory hypoglycemia"
    ],
    riskFactors: [
      "Living in or traveling to endemic zones (Sub-Saharan Africa, South Asia, Amazon basin)",
      "Young children under 5 years of age (account for ~75% of global malaria deaths)",
      "Pregnant women (parasite sequesters in placental vascular beds)",
      "Non-immune travelers entering endemic regions without chemoprophylaxis"
    ],
    bodyImpact: "P. falciparum expresses PfEMP-1 proteins on erythrocyte surfaces, causing infected red blood cells to adhere to microvascular endothelium (cytoadherence and sequestration). This blocks blood flow to the brain, kidneys, and placenta, causing cerebral ischemia, acute tubular necrosis, and multi-organ failure.",
    diagnosis: [
      "Giemsa-Stained Peripheral Blood Smear Microscopy (gold standard: Thick smear for detecting parasites, Thin smear for species identification and parasitemia quantification)",
      "Malaria Rapid Diagnostic Tests (RDTs: detecting HRP-2 for P. falciparum or Plasmodium Lactate Dehydrogenase pLDH)",
      "Polymerase Chain Reaction (PCR) for low parasitemia levels",
      "Blood glucose (critical to monitor for malaria- or quinine-induced hypoglycemia)"
    ],
    treatments: [
      "Artemisinin-based Combination Therapies (ACTs) — the gold standard first-line for uncomplicated malaria:",
      "Artemether-Lumefantrine (Coartem) or Artesunate-Amodiaquine or Dihydroartemisinin-Piperaquine",
      "Intravenous Artesunate (IV Artesunate) — mandatory emergency first-line treatment for Severe Malaria",
      "Primaquine or Tafenoquine (mandatory to eradicate dormant liver hypnozoites in P. vivax and P. ovale to prevent relapses, provided G6PD enzyme testing is normal)",
      "Emergency supportive care: Correcting hypoglycemia, blood transfusions for severe anemia, and anticonvulsants"
    ],
    prevention: "Sleep under Long-Lasting Insecticidal Nets (LLINs). Use Indoor Residual Spraying (IRS) with insecticides. Take prescription Chemoprophylaxis (Atovaquone-Proguanil, Doxycycline, or Mefloquine) when traveling to endemic zones. The novel RTS,S/AS01 and R21/Matrix-M malaria vaccines are now deployed for children in high-transmission areas.",
    safeFoods: [
      "Nutrient-dense easily digestible meals: Lentil soups, boiled rice, mashed potatoes",
      "Hydrating electrolyte broths, fresh coconut water, and clean boiled water",
      "Iron-rich and folate-rich foods (cooked spinach, eggs, poultry) to help replenish hemolyzed erythrocytes",
      "Vitamin C rich fruits to enhance non-heme iron absorption",
      "Small, frequent meals to maintain steady blood glucose"
    ],
    avoidFoods: [
      "Greasy, heavy, deep-fried fast foods that trigger severe nausea during febrile attacks",
      "Alcohol and unverified recreational herbs",
      "Dehydrating caffeinated beverages",
      "Unwashed raw produce washed in untreated water in endemic zones"
    ],
    exercises: [
      "Complete physical bed rest during acute infection",
      "Avoid all heavy physical exertion or contact sports for several weeks after recovery to prevent traumatic rupture of an enlarged, fragile spleen (Splenomegaly)",
      "Gradual resumption of light walking once hemoglobin stabilizes"
    ],
    lifestyle: [
      "Always sleep under an insecticide-treated bed net tucked firmly under the mattress",
      "Apply DEET repellent to exposed skin between dusk and dawn (Anopheles mosquitoes bite predominantly at night)",
      "Screen for G6PD deficiency before starting Primaquine or Tafenoquine to avoid acute hemolytic anemia",
      "Complete the entire prescribed ACT course without stopping early"
    ],
    whenToConsult: "Seek IMMEDIATE emergency medical care if you develop fever after traveling to a tropical region, or if a person with malaria becomes confused, vomits repeatedly, passes dark tea-colored urine, or breathes rapidly.",
    faqs: [
      {
        q: "Why does P. vivax malaria keep coming back months after being treated?",
        a: "Plasmodium vivax and P. ovale have a unique dormant stage in the liver called 'hypnozoites'. Standard blood antimalarials kill parasites in red blood cells but spare the liver hypnozoites, which wake up months later to cause relapses unless killed with Primaquine."
      },
      {
        q: "Why is G6PD testing required before taking Primaquine?",
        a: "People with an inherited G6PD enzyme deficiency cannot protect their red blood cells against oxidative stress. Primaquine can trigger massive, life-threatening red blood cell destruction (hemolysis) in G6PD-deficient individuals."
      }
    ],
    references: [
      "World Health Organization (WHO) Guidelines for Malaria 2024",
      "CDC Malaria Diagnosis and Treatment Guidelines for Clinicians",
      "Lancet Infectious Diseases Malaria Eradication Review"
    ]
  },
  {
    id: "covid-19",
    name: "COVID-19 (SARS-CoV-2 Infection)",
    name_ml: "കോവിഡ്-19 (കൊറോണ വൈറസ്)",
    name_hi: "कोविड-19 (कोरोना वायरस)",
    name_ar: "مرض فيروس كورونا (كوفيد-19)",
    category: "infectious",
    badge: "Airborne Coronavirus",
    icon: "alert-triangle",
    shortDesc: "A highly contagious respiratory and systemic illness caused by the Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2).",
    whatIsIt: "COVID-19 is an acute infectious viral illness caused by SARS-CoV-2, an enveloped positive-sense single-stranded RNA betacoronavirus. Transmitted predominantly via respiratory aerosols and droplets, the virus enters host cells by binding its surface spike (S) glycoprotein to human Angiotensin-Converting Enzyme 2 (ACE2) receptors, which are abundantly expressed in the respiratory tract, vascular endothelium, heart, and kidneys.",
    causes: [
      "Airborne transmission of SARS-CoV-2 aerosols generated during breathing, talking, coughing, or singing in enclosed spaces",
      "Binding to cellular ACE2 receptors facilitated by transmembrane protease serine 2 (TMPRSS2)",
      "Viral replication in nasopharyngeal and alveolar epithelial cells with down-regulation of ACE2, leading to excessive Angiotensin II accumulation and systemic endothelial inflammation"
    ],
    symptoms: [
      "Fever or chills, dry cough, and shortness of breath",
      "Anosmia (sudden loss of smell) and Ageusia (loss of taste) — classic early neuropathic hallmarks",
      "Profound fatigue, generalized myalgias, and headache",
      "Sore throat, nasal congestion, and rhinorrhea",
      "Gastrointestinal symptoms: Nausea, vomiting, and loose diarrhea",
      "Post-COVID Conditions ('Long COVID'): Brain fog, exertional intolerance, dysautonomia/POTS, and persistent fatigue lasting months"
    ],
    warningSigns: [
      "'Happy Hypoxia': Severely low blood oxygen saturation (SpO2 < 90%) without proportionate subjective breathlessness",
      "Acute Respiratory Distress Syndrome (ARDS): Sudden severe dyspnea, cyanosis, and respiratory exhaustion",
      "Hypercoagulability and Thrombosis: Pulmonary embolism, deep vein thrombosis, or ischemic stroke",
      "Multisystem Inflammatory Syndrome (MIS-C/A) in children and young adults"
    ],
    riskFactors: [
      "Advanced age (risk escalates dramatically over age 65)",
      "Underlying medical co-morbidities: Obesity, hypertension, Type 2 diabetes, chronic kidney disease, and COPD",
      "Immunosuppressed states (organ transplant recipients, active cancer chemotherapy)",
      "Unvaccinated status against SARS-CoV-2"
    ],
    bodyImpact: "Immune dysregulation triggers a hyperinflammatory 'cytokine storm' (massive elevations in IL-6, IL-1beta, ferritin, D-dimer). Diffuse alveolar damage impairs surfactant production, creates hyaline membranes, and triggers microvascular pulmonary immunothrombosis.",
    diagnosis: [
      "Real-Time Reverse Transcription Polymerase Chain Reaction (RT-PCR) — gold standard for viral RNA detection",
      "Rapid Antigen Tests (RAT) for fast point-of-care detection during high viral load phases",
      "Pulse Oximetry monitoring (SpO2 < 94% indicates significant lower respiratory involvement)",
      "High-Resolution Chest CT: Showing bilateral, peripheral, subpleural ground-glass opacities (GGOs)",
      "Inflammatory biomarkers: Serum Ferritin, D-Dimer, hs-CRP, and Procalcitonin"
    ],
    treatments: [
      "Oral Antivirals for mild-to-moderate high-risk outpatients within 5 days of symptom onset: Nirmatrelvir-Ritonavir (Paxlovid) or Molnupiravir",
      "Intravenous Antiviral: Remdesivir",
      "Systemic Corticosteroids: Dexamethasone (6 mg daily for up to 10 days) for hospitalized patients requiring supplemental oxygen",
      "Immunomodulators for severe cytokine storm: IL-6 receptor antagonists (Tocilizumab) or JAK inhibitors (Baricitinib)",
      "Prophylactic anticoagulation (Low-Molecular-Weight Heparin) to prevent thromboembolism",
      "High-flow nasal cannula (HFNC) and prone positioning (lying on stomach to improve dorsal alveolar ventilation)"
    ],
    prevention: "Up-to-date mRNA and protein-subunit COVID-19 vaccinations and booster doses. Improve indoor ventilation with HEPA air filters, wear high-filtration respirators (N95/KF94) in crowded enclosed spaces, and practice proper hand hygiene.",
    safeFoods: [
      "Warm hydrating broths, clear vegetable soups, and warm teas with honey",
      "Anti-inflammatory antioxidant foods: Berries, steamed greens, turmeric with black pepper",
      "High-protein easily digestible meals (eggs, poultry, tofu, lentils) to support tissue recovery",
      "Adequate fluids to replace insensible fever losses",
      "Vitamin D3, Zinc, and Vitamin C dietary intake"
    ],
    avoidFoods: [
      "Dehydrating caffeinated sodas and alcohol",
      "Heavy, deep-fried fast foods that worsen gastrointestinal nausea and reflux",
      "Excessive refined sugars that impair immune neutrophil function",
      "Extremely cold iced beverages if throat irritation is present"
    ],
    exercises: [
      "Strict physical rest during the acute infection phase",
      "Prone positioning in bed (lying on your stomach for 30-120 minutes) to recruit posterior lung alveoli and boost blood oxygenation",
      "Gentle breathing exercises (diaphragmatic breathing)",
      "Gradual return to exercise following the 4-phase graduated return protocol — avoid pushing through post-viral fatigue to prevent Long COVID crashes"
    ],
    lifestyle: [
      "Isolate in a separate room with dedicated ventilation for at least 5 days from symptom onset",
      "Check blood oxygen levels with a pulse oximeter twice daily (room air SpO2 should stay >= 95%)",
      "Wear a well-fitted N95 mask if you must be around others",
      "Get plenty of sleep to support immune interferon production"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES IMMEDIATELY if blood oxygen (SpO2) drops below 92%, if you have persistent chest pressure or shortness of breath, or if you become confused or pale/blue around the lips.",
    faqs: [
      {
        q: "What is 'Silent Hypoxia' in COVID-19?",
        a: "Silent hypoxia occurs when blood oxygen levels drop dangerously low (sometimes into the 70s or 80s) without the patient feeling breathless. This happens because the virus damages pulmonary capillaries without stiffening the lungs initially, meaning the brain does not register air hunger until sudden collapse occurs."
      },
      {
        q: "Why is prone positioning (lying on your stomach) so helpful for lung infections?",
        a: "The largest portion of your lung tissue lies toward your back. Lying on your back compresses this tissue under the weight of the heart and abdominal organs. Turning onto your stomach opens up these dorsal alveoli, instantly improving oxygen absorption."
      }
    ],
    references: [
      "World Health Organization (WHO) Therapeutics and COVID-19 Living Guideline",
      "NIH COVID-19 Treatment Guidelines Panel",
      "CDC COVID-19 Clinical Management Protocols"
    ]
  },
  {
    id: "influenza",
    name: "Influenza (Seasonal Flu)",
    name_ml: "ഇൻഫ്ലുവെൻസ (വൈറൽ പനി / ഫ്ലൂ)",
    name_hi: "इन्फ्लूएंजा (फ्लू / मौसमी बुखार)",
    name_ar: "الإنفلونزا الموسمية",
    category: "infectious",
    badge: "Acute Orthomyxovirus",
    icon: "thermometer",
    shortDesc: "An acute, highly contagious airborne viral infection of the respiratory tract caused by influenza viruses A and B.",
    whatIsIt: "Influenza, commonly known as the flu, is an acute viral infection that attacks the respiratory system (nose, throat, bronchial tubes, and lungs). Caused by Influenza viruses A and B (members of the Orthomyxoviridae family), influenza is characterized by sudden, abrupt onset of high fever, severe body aches, and prostration, distinguishing it from the milder common cold.",
    causes: [
      "Inhalation of airborne respiratory droplets containing Influenza A or B viruses expelled during coughing, sneezing, or talking",
      "Direct or indirect contact with contaminated fomite surfaces followed by touching mucous membranes",
      "Antigenic Drift (minor point mutations in Hemagglutinin and Neuraminidase surface glycoproteins necessitating updated annual vaccines)",
      "Antigenic Shift (major reassortment creating novel pandemic strains in Influenza A)"
    ],
    symptoms: [
      "Sudden, abrupt onset (patients often pinpoint the exact hour symptoms began)",
      "High spiking fever (100°F to 104°F / 38°C to 40°C) with shaking chills and rigors",
      "Severe myalgia and arthralgia (intense aching across back, legs, and shoulders)",
      "Severe retro-orbital headache and photophobia",
      "Persistent dry, hacking, painful cough",
      "Sore throat, nasal congestion, and burning sensation in the chest",
      "Profound physical exhaustion and malaise lasting 1 to 2 weeks"
    ],
    warningSigns: [
      "Secondary Bacterial Pneumonia: Fever returns several days after initial flu improvement with purulent sputum (often caused by Staphylococcus aureus or Streptococcus pneumoniae)",
      "Hypoxemia: Shortness of breath and low oxygen saturation",
      "Reye's Syndrome in children: Acute non-inflammatory encephalopathy and hepatic failure triggered by giving Aspirin during viral infections"
    ],
    riskFactors: [
      "Adults aged 65 and older and children under 5 years",
      "Chronic medical conditions: Asthma, COPD, heart failure, diabetes, chronic kidney disease",
      "Pregnant women and women up to two weeks postpartum",
      "Residents of nursing homes and long-term care facilities",
      "Immunocompromised individuals"
    ],
    bodyImpact: "Viral Hemagglutinin binds sialic acid receptors on ciliated respiratory epithelial cells, followed by viral replication and cell lysis. Destruction of the mucociliary escalator strips the airway of protective defenses, creating prime conditions for secondary invasive bacterial superinfections.",
    diagnosis: [
      "Clinical diagnosis based on abrupt onset during local influenza season",
      "Rapid Influenza Diagnostic Tests (RIDTs) using nasal/throat swabs (results in 15 minutes)",
      "Rapid Molecular Assays (RT-PCR / NAAT) — high sensitivity and specificity",
      "Chest X-Ray to evaluate for secondary bacterial consolidation or viral pneumonitis"
    ],
    treatments: [
      "Neuraminidase Inhibitors (must be initiated within 48 hours of symptom onset for maximum clinical benefit):",
      "Oseltamivir (Tamiflu: oral, 75 mg twice daily for 5 days)",
      "Zanamivir (inhalation) or Peramivir (single-dose intravenous infusion)",
      "Cap-dependent Endonuclease Inhibitor: Baloxavir Marboxil (Xofluza: single oral dose)",
      "Antipyretics and analgesics: Paracetamol / Acetaminophen or Ibuprofen (FOR ADULTS ONLY — NEVER GIVE ASPIRIN TO CHILDREN/TEENS)",
      "Hydration and complete physical bed rest"
    ],
    prevention: "Annual Quadrivalent Influenza Vaccination (updated yearly for Northern and Southern hemispheres) is the single most effective prevention. Practice rigorous handwashing, use alcohol hand rubs, cover coughs, and stay home while symptomatic.",
    safeFoods: [
      "Warm chicken soup or bone broth (rich in carnosine and cystine which thin airway mucus)",
      "Warm herbal teas with raw honey and lemon to soothe throat mucosa",
      "Vitamin C rich fruits (oranges, guavas, kiwis, strawberries)",
      "Soft, easily digestible foods (oatmeal, rice porridge, scrambled eggs)",
      "Ample clean fluids to replace insensible fluid losses from high fevers"
    ],
    avoidFoods: [
      "ASPIRIN (Acetylsalicylic acid) in anyone under 19 years old (RISK OF FATAL REYE'S SYNDROME)",
      "Dehydrating alcoholic beverages and heavy caffeinated drinks",
      "Greasy, heavy, deep-fried fast foods that strain digestive energy",
      "Excessive refined sugars that impair immune phagocytosis"
    ],
    exercises: [
      "COMPLETE PHYSICAL REST during the acute febrile illness",
      "THE 'NECK RULE': If symptoms are strictly above the neck (sniffles), light walking is acceptable; if symptoms are below the neck (fever, body aches, chest cough), NO EXERCISE whatsoever",
      "Gradual resumption of light walking only after fever has been gone for 48 hours without medications"
    ],
    lifestyle: [
      "Stay home from work, school, and social events until fever-free for at least 24 hours without fever-reducing medicine",
      "Cough and sneeze into a disposable tissue or the crook of your elbow",
      "Use a cool-mist room humidifier to keep nasal and throat passages moist",
      "Wash hands frequently with soap and warm water for at least 20 seconds"
    ],
    whenToConsult: "SEEK IMMEDIATE EMERGENCY CARE if you or a child experiences difficulty breathing, chest pain, blue lips, severe dizziness, seizures, or if a fever improves and then suddenly returns worse with a productive cough.",
    faqs: [
      {
        q: "Why do I need a flu shot every single year?",
        a: "Influenza viruses constantly mutate their surface proteins through a process called 'Antigenic Drift'. Additionally, your body's vaccine-induced antibody immunity naturally wanes after 6 to 9 months, necessitating an updated annual booster."
      },
      {
        q: "Can the flu shot actually give me the flu?",
        a: "No. Injected flu vaccines contain either killed (inactivated) virus particles or recombinant proteins that cannot replicate or cause illness. Mild soreness at the injection site or a low-grade immune response is normal and proves your body is building protection."
      }
    ],
    references: [
      "CDC Prevention and Control of Seasonal Influenza with Vaccines: Recommendations of the ACIP",
      "World Health Organization (WHO) Influenza Factsheet 2024",
      "Infectious Diseases Society of America (IDSA) Clinical Practice Guidelines for Influenza"
    ]
  },
  {
    id: "hepatitis",
    name: "Viral Hepatitis (Hepatitis B & C)",
    name_ml: "വൈറൽ ഹെപ്പറ്റൈറ്റിസ് (ഹെപ്പറ്റൈറ്റിസ് ബി & സി)",
    name_hi: "वायरल हेपेटाइटिस (हेपेटाइटिस बी और सी)",
    name_ar: "التهاب الكبد الفيروسي (ب وج)",
    category: "infectious",
    badge: "Hepatotropic Viral Disease",
    icon: "shield-alert",
    shortDesc: "Viral infections causing inflammation and necroinflammation of liver parenchyma, leading to cirrhosis and liver cancer.",
    whatIsIt: "Viral hepatitis refers to inflammatory liver disease caused by hepatotropic viruses. While Hepatitis A and E are water-borne acute infections, Hepatitis B Virus (HBV, a partially double-stranded DNA hepadnavirus) and Hepatitis C Virus (HCV, a positive-sense single-stranded RNA flavivirus) are blood-borne and body-fluid transmitted pathogens that frequently establish life-long chronic infections, driving liver cirrhosis and hepatocellular carcinoma.",
    causes: [
      "HBV Transmission: Perinatal / vertical transmission (from mother to infant at birth — major global source), unprotected sexual contact, contaminated needles/syringes, and unsterilized tattooing equipment",
      "HCV Transmission: Direct blood-to-blood contact (sharing needles in injection drug use, unregulated blood transfusions prior to screening, contaminated surgical/dental instruments)",
      "Immune-mediated liver injury: Host cytotoxic CD8+ T-cells attack virus-infected hepatocytes, causing chronic inflammatory scarring"
    ],
    symptoms: [
      "Frequently asymptomatic for decades ('the silent epidemic') until advanced cirrhosis develops",
      "Acute Phase (if present): Jaundice (yellowing of sclera and skin), dark tea-colored urine, and clay-colored stools",
      "Profound, unexplained fatigue, malaise, and low-grade fever",
      "Dull ache or fullness in the right upper quadrant over the liver",
      "Anorexia, nausea, vomiting, and joint pains (arthralgias)",
      "Late Cirrhosis signs: Ascites (fluid belly), spider angiomas, palmar erythema, confusion (hepatic encephalopathy), and caput medusae"
    ],
    warningSigns: [
      "Decompensated Cirrhosis: Hematemesis from ruptured esophageal varices (gastrointestinal hemorrhage)",
      "Spontaneous Bacterial Peritonitis (SBP): Infected ascitic fluid with fever and abdominal tenderness",
      "Hepatocellular Carcinoma (HCC): Rapid weight loss, RUQ hard mass, and sudden rise in serum Alpha-Fetoprotein (AFP)"
    ],
    riskFactors: [
      "Infants born to HBV-infected mothers without post-exposure prophylaxis",
      "Sharing needles, syringes, or drug paraphernalia",
      "Receiving blood transfusions or organ transplants before universal screening (pre-1992)",
      "Healthcare workers exposed to accidental needle-stick injuries",
      "Unprotected sexual contact with multiple partners or men who have sex with men"
    ],
    bodyImpact: "Persistent viral replication drives chronic necroinflammation and fibrogenesis. Activated hepatic stellate cells lay down excess extracellular matrix collagen, distorting hepatic architecture into regenerative nodules (cirrhosis), causing portal hypertension, liver failure, and liver cancer.",
    diagnosis: [
      "Hepatitis B Serology Panel:",
      "- HBsAg (Hepatitis B Surface Antigen): Presence indicates active infection; persistence > 6 months confirms Chronic HBV",
      "- Anti-HBs: Indicates recovery and immunity (from cleared infection or vaccination)",
      "- Anti-HBc (Total core antibody): Indicates prior or current natural infection",
      "- HBV DNA Viral Load via Quantitative PCR",
      "Hepatitis C Testing:",
      "- HCV Antibody screening test",
      "- Quantitative HCV RNA PCR (confirms active, replicating viral infection)",
      "FibroScan (Transient Elastography) to stage hepatic fibrosis (F0 to F4 Cirrhosis)",
      "Abdominal Ultrasound every 6 months for hepatocellular carcinoma surveillance"
    ],
    treatments: [
      "Hepatitis C Cure: Direct-Acting Antivirals (DAAs: Sofosbuvir-Velpatasvir, Glecaprevir-Pibrentasvir) taken orally for 8 to 12 weeks achieve a Sustained Virologic Response (SVR / complete viral cure) in > 98% of patients!",
      "Hepatitis B Long-Term Suppression: High barrier to resistance nucleoside/nucleotide reverse transcriptase inhibitors: Tenofovir (TDF / TAF) or Entecavir taken daily to suppress viral replication and prevent cirrhosis",
      "Surveillance: Serum Alpha-Fetoprotein (AFP) and hepatic ultrasound every 6 months for patients with cirrhosis",
      "Liver Transplantation for end-stage decompensated liver disease"
    ],
    prevention: "Hepatitis B Vaccine (given within 24 hours of birth followed by 2-3 booster doses) provides > 95% lifelong protection. Screen all pregnant women for HBV and administer HBIG + vaccine to newborns within 12 hours. Never share needles or razors. Ensure sterile tattoo and medical equipment. While there is no vaccine for Hepatitis C, universal screening and DAA treatment cure infection and stop transmission.",
    safeFoods: [
      "Fresh, whole foods rich in antioxidants: Leafy vegetables, blueberries, carrots",
      "Black coffee (2 to 3 cups daily has robust evidence showing reduced liver stiffness and lower HCC risk)",
      "Lean protein sources (fish, poultry, legumes, tofu) to prevent muscle sarcopenia in liver disease",
      "Complex carbohydrates (oats, brown rice, quinoa)",
      "Clean boiled water and sanitary fresh meals"
    ],
    avoidFoods: [
      "ALCOHOL IN ANY QUANTITY (Alcohol dramatically accelerates viral replication, fibrosis, and liver failure)",
      "Raw or undercooked shellfish/oysters (risk of deadly Vibrio vulnificus sepsis in patients with chronic liver disease)",
      "Unverified over-the-counter herbal supplements, detox teas, and high-dose acetaminophen (paracetamol should be capped at < 2g/day in liver disease)",
      "High-sodium processed meats and salted snacks that promote ascites fluid retention"
    ],
    exercises: [
      "Moderate aerobic physical activity: 30 minutes of brisk walking or stationary cycling 4-5 days a week",
      "Light resistance training to preserve lean skeletal muscle mass and counter liver sarcopenia",
      "Avoid exhausting contact sports if splenomegaly or thrombocytopenia is present"
    ],
    lifestyle: [
      "Completely abstain from all alcoholic beverages",
      "Never share razors, nail clippers, toothbrushes, or needles with anyone",
      "Cover open cuts and clean blood spills with a 1:10 household bleach solution",
      "Get vaccinated against Hepatitis A and B if infected with Hepatitis C"
    ],
    whenToConsult: "Consult a hepatologist or gastroenterologist immediately if your blood test shows positive HBsAg or HCV RNA, or if you develop yellow eyes, dark urine, or abdominal swelling.",
    faqs: [
      {
        q: "Can Hepatitis C really be completely cured today?",
        a: "YES! With modern Direct-Acting Antiviral (DAA) pills taken once a day for just 8 to 12 weeks, Hepatitis C is completely cured in more than 98% of patients, with virtually no side effects."
      },
      {
        q: "Can Hepatitis B be spread through sharing food or hugging?",
        a: "No. Hepatitis B is not spread through casual contact, hugging, kissing, sharing eating utensils, breastfeeding, or coughing. It is transmitted only through direct contact with infected blood, semen, or vaginal fluids, and from mother to child at birth."
      }
    ],
    references: [
      "AASLD / IDSA HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C",
      "AASLD Practice Guidance on the Management of Hepatitis B 2024",
      "World Health Organization (WHO) Global Hepatitis Report 2024"
    ]
  },
  {
    id: "typhoid",
    name: "Typhoid Fever (Enteric Fever)",
    name_ml: "ടൈഫോയ്ഡ് പനി (എന്ററിക് ഫീവർ)",
    name_hi: "टाइफाइड बुखार (मियादी बुखार)",
    name_ar: "حمى التيفوئيد (الحمى المعوية)",
    category: "infectious",
    badge: "Fecal-Oral Bacterial",
    icon: "alert-circle",
    shortDesc: "A systemic life-threatening bacterial infection caused by Salmonella enterica serovar Typhi, spread through contaminated food and water.",
    whatIsIt: "Typhoid fever is a life-threatening systemic infection caused by the bacterium Salmonella enterica serotype Typhi (and related Salmonella Paratyphi). Transmitted via the fecal-oral route through contaminated drinking water or food handled by an infected carrier, the bacteria penetrate the intestinal intestinal mucosa, invade regional lymph nodes, and disseminate throughout the reticuloendothelial system.",
    causes: [
      "Ingestion of food or water contaminated with feces or urine from an acute patient or chronic asymptomatic carrier of Salmonella Typhi",
      "Poor municipal water sanitation, unhygienic sewage disposal, and lack of handwashing facilities",
      "Eating street foods or drinking beverages prepared with untreated municipal or well water",
      "Spread of Extensively Drug-Resistant (XDR) Salmonella Typhi strains"
    ],
    symptoms: [
      "Step-ladder pattern of fever: Temperature rises gradually over the first week, reaching a sustained 103°F-104°F (39°C-40°C)",
      "Relative Bradycardia (Faget's Sign): Heart rate remains unexpectedly slow despite high spiking fever",
      "Severe frontal headache, malaise, and generalized body aches",
      "Rose Spots: Faint, transient, blanching salmon-pink macules on the trunk and abdomen (appearing in week 2)",
      "Coated tongue with red margins ('Typhoid tongue')",
      "Abdominal pain, distension, hepatosplenomegaly, and 'pea-soup' greenish diarrhea or severe constipation"
    ],
    warningSigns: [
      "INTESTINAL PERFORATION & HEMORRHAGE (Third week emergency): Necrosis of Peyer's patches causing sudden knife-like abdominal pain, peritonitis, and septic shock",
      "Typhoid Encephalopathy ('Coma Vigil'): Extreme apathy, muttering delirium, twitching, and stupor",
      "Intractable intestinal bleeding presenting with melena or hematochezia"
    ],
    riskFactors: [
      "Living in or traveling to low-resource areas with poor water sanitation (South Asia, Southeast Asia, Sub-Saharan Africa)",
      "Lack of access to clean chlorinated or boiled drinking water",
      "Close household contact with a chronic Salmonella Typhi carrier",
      "Children and young adults living in crowded urban settlements"
    ],
    bodyImpact: "S. Typhi invades specialized M-cells overlying Peyer's patches in the terminal ileum. Surviving inside macrophages via Vi capsular antigen protection, they multiply in mesenteric lymph nodes, enter the thoracic duct, and cause secondary bacteremia with focal necrosis in the liver, spleen, bone marrow, and gallbladder.",
    diagnosis: [
      "Blood Culture (gold standard during the first week of fever, 60-80% sensitivity)",
      "Bone Marrow Culture (highest diagnostic yield, > 90% sensitivity, remains positive even after antibiotics)",
      "Stool and Urine Cultures (positive during the 2nd and 3rd weeks)",
      "Widal Test (historically common serological test, but prone to frequent false positives and negatives; paired titers showing 4-fold rise required)",
      "Rapid Typhoid IgM tests (Typhidot / Tubex)"
    ],
    treatments: [
      "Targeted Antibiotic Therapy guided by local antimicrobial susceptibility patterns:",
      "First-Line for Drug-Susceptible strains: Azithromycin or Ceftriaxone",
      "For Extensively Drug-Resistant (XDR) Typhoid: Carbapenems (Meropenem) or Azithromycin",
      "High-dose intravenous Dexamethasone for severe typhoid encephalopathy and shock",
      "Emergency surgical exploratory laparotomy and primary repair / wedge resection for ileal perforation"
    ],
    prevention: "Typhoid Conjugate Vaccine (TCV: Typbar-TCV) provides long-lasting immunity in children and adults. Follow the universal traveler's food safety rule: 'Boil it, cook it, peel it, or forget it'. Drink only bottled or boiled water, and practice rigorous handwashing with soap.",
    safeFoods: [
      "Piping hot, freshly cooked homemade meals",
      "Boiled, purified, or sealed commercially bottled drinking water",
      "Easily digestible high-calorie soft foods: Porridge, mashed potatoes, bananas, custards",
      "Adequate oral fluids to prevent dehydration (ORS, clear broths, tender coconut water)",
      "Fruits with thick rinds peeled personally (bananas, oranges)"
    ],
    avoidFoods: [
      "Untreated tap water, ice cubes made from municipal water, and fountain sodas",
      "Raw street-vendor salads, cut fruit platters, and unpasteurized milk",
      "Undercooked meats, shellfish, and street food snacks",
      "Raw unpeeled fruits and leafy greens washed in contaminated local water"
    ],
    exercises: [
      "Complete physical bed rest during active febrile illness",
      "Avoid strenuous physical lifting or abdominal straining for 3 to 4 weeks after recovery to protect fragile healing intestinal Peyer's patches from mechanical perforation"
    ],
    lifestyle: [
      "Always wash hands vigorously with soap and water after using the toilet and before preparing food",
      "Finish the entire prescribed course of antibiotics to prevent chronic gallbladder carrier states",
      "Receive the Typhoid Conjugate Vaccine at least 2 weeks prior to traveling to endemic regions",
      "Keep home water storage tanks covered, cleaned, and disinfected regularly"
    ],
    whenToConsult: "SEEK IMMEDIATE EMERGENCY MEDICAL CARE if a person with high fever develops sudden severe stomach pain, vomits blood, passes bloody stools, or becomes delirious. Consult a physician for any continuous high fever lasting over 3 days.",
    faqs: [
      {
        q: "Who was 'Typhoid Mary'?",
        a: "Mary Mallon was an Irish-American cook in the early 1900s who was the first identified healthy chronic asymptomatic carrier of Salmonella Typhi in the US. The bacteria colonized her gallbladder, and because she worked as a cook without washing hands, she unknowingly infected over 50 people."
      },
      {
        q: "How can someone be a 'chronic carrier' of typhoid?",
        a: "In about 2% to 5% of infected individuals who are not fully cured with antibiotics, Salmonella Typhi bacteria colonize the gallbladder and form biofilms on gallstones, continually shedding bacteria in their stool for years without feeling sick themselves."
      }
    ],
    references: [
      "World Health Organization (WHO) Typhoid Factsheet and Vaccine Position Paper",
      "CDC Yellow Book: Health Information for International Travel - Typhoid & Paratyphoid",
      "Lancet Infectious Diseases Seminar on Enteric Fever and Antimicrobial Resistance"
    ]
  },
  {
    id: "hiv-aids",
    name: "HIV / AIDS (Human Immunodeficiency Virus)",
    name_ml: "എച്ച്.ഐ.വി / എയ്ഡ്സ് (എച്ച്.ഐ.വി അണുബാധ)",
    name_hi: "एचआईवी / एड्स",
    name_ar: "فيروس نقص المناعة البشرية / الإيدز",
    category: "infectious",
    badge: "Retroviral Immunodeficiency",
    icon: "shield-alert",
    shortDesc: "A retroviral infection that selectively targets and depletes CD4+ T helper cells, progressively crippling the adaptive immune system.",
    whatIsIt: "Human Immunodeficiency Virus (HIV) is an enveloped lentivirus (subgroup of retroviruses) that attacks the human immune system by infecting and destroying CD4+ T lymphocytes, essential coordinators of adaptive immunity. Without treatment, HIV progressively depletes CD4 cells over 8 to 10 years, progressing to Acquired Immunodeficiency Syndrome (AIDS), defined by a CD4 count < 200 cells/uL or the development of specific life-threatening opportunistic infections and malignancies.",
    causes: [
      "Unprotected sexual contact (vaginal, anal) with an infected partner who has a detectable viral load",
      "Blood-to-blood transmission (sharing needles, syringes, or drug preparation equipment)",
      "Perinatal transmission (Mother-to-Child Transmission - MTCT during pregnancy, childbirth, or breastfeeding)",
      "Transfusion of unscreened contaminated blood products (rare in modern healthcare)"
    ],
    symptoms: [
      "Acute Retroviral Syndrome (ARS: occurs 2-4 weeks after exposure in ~70% of people): Mononucleosis-like illness with fever, diffuse maculopapular rash, sore throat, generalized lymphadenopathy, myalgias, and mouth ulcers",
      "Clinical Latency Stage: Often symptom-free for years while the virus actively replicates and depletes CD4 counts",
      "Early Symptomatic HIV: Recurrent oral thrush (Candida albicans), oral hairy leukoplakia, frequent herpes zoster (shingles) outbreaks, and unexplained weight loss",
      "AIDS Defining Conditions: Pneumocystis jirovecii Pneumonia (PCP), Kaposi's Sarcoma (HHV-8 vascular tumor), Cryptococcal Meningitis, Toxoplasmosis, Cytomegalovirus (CMV) retinitis, and severe wasting syndrome"
    ],
    warningSigns: [
      "Pneumocystis Pneumonia: Progressive exertional breathlessness, dry cough, and desaturation with normal-appearing initial chest X-ray",
      "Cryptococcal Meningitis: Severe persistent headache, fever, and confusion",
      "Toxoplasma Encephalitis: Focal neurological deficits and multiple ring-enhancing brain lesions on MRI"
    ],
    riskFactors: [
      "Unprotected sexual intercourse, especially receptive anal intercourse",
      "Having other Sexually Transmitted Infections (STIs like syphilis, herpes, gonorrhea) which cause genital epithelial ulceration",
      "Injection drug use and sharing contaminated needles",
      "Lack of access to Pre-Exposure Prophylaxis (PrEP) in high-risk populations"
    ],
    bodyImpact: "HIV uses viral glycoprotein gp120/gp41 to bind CD4 and co-receptors (CCR5 or CXCR4). Viral reverse transcriptase converts viral RNA into proviral DNA, which integrates permanently into host chromosomes via integrase. Active replication and pyroptosis destroy lymphoid tissue, stripping the host of cell-mediated immunity against fungal, viral, and mycobacterial pathogens.",
    diagnosis: [
      "4th Generation HIV-1/2 Antigen/Antibody Combination Immunoassay (detects both HIV antibodies and viral p24 antigen as early as 18-45 days post-exposure)",
      "HIV-1/HIV-2 Antibody Differentiation Immunoassay",
      "HIV-1 Qualitative/Quantitative RNA PCR (Viral Load test — detects virus as early as 10-14 days post-exposure)",
      "Baseline CD4+ T-lymphocyte count and percentage",
      "Baseline HIV Genotypic Resistance testing before starting treatment"
    ],
    treatments: [
      "Lifelong Antiretroviral Therapy (ART) — modern regimens are typically a single daily combination tablet with minimal side effects:",
      "First-Line Integrase Strand Transfer Inhibitor (INSTI)-based regimens: Bictegravir/Tenofovir Alafenamide/Emtricitabine (Biktarvy) or Dolutegravir + 2 NRTIs",
      "Long-Acting Injectable ART: Cabotegravir + Rilpivirine (Cabenuva) injected once every 1 or 2 months for virologically suppressed patients",
      "Prophylaxis against opportunistic infections (Trimethoprim-Sulfamethoxazole for PCP when CD4 < 200)",
      "THE REVOLUTIONARY MEDICAL PRINCIPLE: U = U (Undetectable = Untransmittable). A person on ART with an undetectable viral load CANNOT sexually transmit HIV to partners!"
    ],
    prevention: "Pre-Exposure Prophylaxis (PrEP: daily oral Emtricitabine/Tenofovir or bi-monthly injectable Cabotegravir) reduces sexual transmission risk by 99%. Post-Exposure Prophylaxis (PEP: 28-day regimen started within 72 hours of an accidental exposure). Consistent condom use, needle-exchange programs, universal treatment of pregnant women to prevent vertical transmission, and voluntary medical male circumcision.",
    safeFoods: [
      "Wholesome, balanced, high-protein nutrition to support immune vitality and prevent muscle wasting",
      "Freshly prepared, thoroughly cooked foods to prevent foodborne opportunistic enteric infections",
      "Pasteurized dairy products and thoroughly boiled water",
      "Fresh vegetables and fruits washed thoroughly in safe, clean water",
      "Adequate daily caloric intake"
    ],
    avoidFoods: [
      "Raw or undercooked meats, poultry, sushi, and eggs (high risk of Salmonella and Toxoplasma in low CD4 states)",
      "Unpasteurized milk, raw milk cheeses, and unpasteurized juices (risk of Listeria)",
      "Raw shellfish and raw oysters (risk of Vibrio vulnificus)",
      "Untreated, unboiled well or tap water in areas with poor municipal sanitation"
    ],
    exercises: [
      "Regular moderate aerobic exercise (brisk walking, cycling, swimming 30 minutes 5 days a week) boosts CD4 counts and cardiovascular health",
      "Progressive resistance training (weight training) is vital to preserve lean muscle mass and prevent lipodystrophy",
      "Gentle stretching and yoga for stress reduction and mental well-being"
    ],
    lifestyle: [
      "Take your ART tablet at the EXACT same time every single day — strict adherence prevents drug resistance",
      "Get routine blood tests (Viral Load and CD4 count) every 3 to 6 months",
      "Maintain active, open communication with your infectious disease physician",
      "Remember U=U: Achieving an undetectable viral load protects your health and protects your partners completely"
    ],
    whenToConsult: "Seek IMMEDIATE emergency medical care if you have HIV and develop shortness of breath, severe headache, confusion, or high fever. Consult a physician within 72 hours of any potential sexual or needle exposure for PEP.",
    faqs: [
      {
        q: "What does 'Undetectable = Untransmittable' (U=U) mean?",
        a: "Multiple massive global clinical trials (including the PARTNER studies) involving tens of thousands of sexual acts have proven that when a person with HIV takes ART and maintains an undetectable viral load (< 200 copies/mL) for at least 6 months, they CANNOT pass HIV to their sexual partners. Zero transmissions occurred."
      },
      {
        q: "Is HIV still a death sentence?",
        a: "No! With modern single-tablet antiretroviral therapy, HIV is now a manageable chronic health condition. A person diagnosed today and started on ART has the exact same life expectancy as someone without HIV."
      }
    ],
    references: [
      "U.S. Department of Health and Human Services (HHS) Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents with HIV",
      "World Health Organization (WHO) Consolidated Guidelines on HIV Prevention, Testing, Treatment, Service Delivery and Monitoring",
      "The Lancet HIV Commission on Antiretroviral Therapy and Global Viral Suppression"
    ]
  },
  {
    id: "fever-infection",
    name: "Acute Fever & Viral Syndrome",
    name_ml: "സാധാരണ വൈറൽ പനി (ഫീവർ)",
    name_hi: "सामान्य वायरल बुखार (तीव्र संक्रमण)",
    name_ar: "الحمى الحادة والمتلازمة الفيروسية",
    category: "infectious",
    badge: "Acute Febrile Response",
    icon: "thermometer",
    shortDesc: "A temporary elevation in body core temperature above normal range, representing a coordinated immune defense response to infection.",
    whatIsIt: "Fever (Pyrexia) is a regulated elevation of the body's hypothalamic core temperature set-point above the normal physiological baseline (> 100.4°F / 38.0°C). Rather than being a disease in itself, fever is an ancient, highly evolved physiological defense mechanism orchestrated by the immune system to inhibit viral/bacterial replication and accelerate enzymatic immune cascades.",
    causes: [
      "Release of endogenous pyrogens (Interleukin-1, Interleukin-6, TNF-alpha) by activated monocytes and macrophages",
      "Prostaglandin E2 (PGE2) synthesis in the organum vasculosum laminae terminalis (OVLT) resetting the hypothalamic thermostat",
      "Viral upper respiratory tract infections (Rhinovirus, Adenovirus, Parainfluenza, Enteroviruses)",
      "Acute bacterial infections (UTIs, tonsillitis, otitis media, skin cellulitis)",
      "Drug fevers, post-vaccination immune activation, and autoimmune flare-ups"
    ],
    symptoms: [
      "Core body temperature reading > 100.4°F (38.0°C) orally or rectally",
      "Shivering, feeling cold, and goosebumps (cutis anserina) as the body raises temperature toward the new set-point",
      "Flushed, warm, radiant skin and facial redness",
      "Tachycardia (heart rate increases by roughly 10 beats per minute for every 1°C rise in temperature)",
      "Sweating, diaphoresis, and thirst as temperature breaks",
      "Headache, mild generalized muscle aches, and decreased appetite"
    ],
    warningSigns: [
      "EMERGENCY RED FLAGS IN ADULTS: Fever with stiff neck, photophobia, and confusion (Meningitis warning)",
      "Petechial or purpuric rash that does NOT blanch (fade) under glass pressure test (Meningococcemia emergency)",
      "Severe shortness of breath, chest pain, or SpO2 < 93%",
      "FEVER IN INFANTS UNDER 3 MONTHS: Any rectal temperature >= 100.4°F requires immediate hospital evaluation for neonatal sepsis",
      "Febrile Convulsions in toddlers: Brief generalized seizure during rapid temperature spikes"
    ],
    riskFactors: [
      "Daycare attendance, school environments, and crowded living quarters",
      "Lack of immunizations or recent exposure to sick contacts",
      "Immunocompromised states, diabetes, or chronic corticosteroid use"
    ],
    bodyImpact: "Moderate fever enhances neutrophil phagocytosis, stimulates antibody production, and hinders temperature-sensitive viral replication. However, hyperpyrexia (> 105°F / 41°C) can cause cellular protein denaturation, central nervous system depression, extreme metabolic demand, and severe dehydration.",
    diagnosis: [
      "Accurate core temperature measurement (Digital oral, tympanic, or rectal thermometer)",
      "Complete clinical physical exam: Throat inspection, otoscopy (ears), lung auscultation, abdominal palpation, and urine analysis",
      "Complete Blood Count (CBC) and CRP to distinguish viral from bacterial infection",
      "Rapid viral panels or blood cultures if high persistent fever lacks obvious source"
    ],
    treatments: [
      "Hydration: Aggressive oral fluid replacement (water, electrolytes, broths) is more important than medication",
      "First-Line Antipyretics: Paracetamol / Acetaminophen (10-15 mg/kg per dose in children; 500-1000 mg in adults every 4-6 hours, maximum 3-4 grams/day)",
      "NSAIDs: Ibuprofen (10 mg/kg in children > 6 months; 400 mg in adults) — DO NOT USE if Dengue is suspected",
      "NEVER GIVE ASPIRIN to children or adolescents under age 19 due to the risk of fatal Reye's Syndrome",
      "Comfort measures: Light clothing, room temperature 68-72°F (20-22°C), tepid water sponge bathing (DO NOT use ice or rubbing alcohol!)"
    ],
    prevention: "Practice meticulous handwashing with soap and water, keep household vaccinations up-to-date, avoid touching eyes and mouth with unwashed hands, and isolate from family members during acute contagious respiratory fevers.",
    safeFoods: [
      "Plenty of fluids: Oral Rehydration Salts (ORS), tender coconut water, diluted fruit juices, clear soups",
      "Warm rice porridge (kanji) with a pinch of salt and ginger",
      "Soft bananas, boiled applesauce, and plain yogurt",
      "Herbal teas (tulsi, ginger, chamomile) with honey (honey only for children > 1 year)",
      "Easily digestible light meals eaten only when appetite dictates"
    ],
    avoidFoods: [
      "Aspirin in anyone under 19 years old (Reye's syndrome risk)",
      "Dehydrating caffeinated sodas and sugary energy drinks",
      "Heavy, rich, deep-fried fast foods and spicy curries",
      "Force-feeding a child or adult who has no appetite during acute fever"
    ],
    exercises: [
      "STRICT PHYSICAL BED REST while fever is present",
      "Do NOT attempt to 'sweat out a fever' through intense exercise or heavy blankets — this dangerously overheats core body organs",
      "Gradual resumption of light activities only after fever has remained normal for 24-48 hours without antipyretics"
    ],
    lifestyle: [
      "Dress in a single layer of light, breathable cotton clothing — do not bundle under heavy blankets",
      "Keep the bedroom well-ventilated and pleasantly cool",
      "Measure temperature every 4 to 6 hours and record readings in a fever log",
      "Wash hands frequently and use separate drinking cups and towels"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY if fever is accompanied by difficulty breathing, stiff neck, confusion, purple spots on skin, or if an infant under 3 months has a fever >= 100.4°F (38.0°C).",
    faqs: [
      {
        q: "Is fever dangerous and will it damage the brain?",
        a: "Normal fevers caused by infections (under 104°F / 40°C) do not cause brain damage. In fact, moderate fever helps the body fight off the infection. Brain damage only occurs with extreme environmental hyperthermia (like heat stroke) exceeding 107°F (41.7°C)."
      },
      {
        q: "Why should rubbing alcohol never be used for a fever sponge bath?",
        a: "Rubbing alcohol is absorbed through a child's skin and can be inhaled into the lungs, causing acute alcohol poisoning, metabolic acidosis, and coma. Always use comfortable lukewarm (tepid) tap water only."
      }
    ],
    references: [
      "American Academy of Pediatrics (AAP) Clinical Report: Fever and Antipyretic Use in Children",
      "NICE Clinical Guideline: Fever in Under 5s: Assessment and Initial Management",
      "CDC Clinical Guidance on Managing Viral Febrile Illnesses"
    ]
  }
];

