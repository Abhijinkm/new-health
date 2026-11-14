/**
 * HEALTHCARE FOR YOU - Category B: Respiratory Diseases
 */
module.exports = [
  {
    id: "asthma",
    name: "Asthma (Bronchial Asthma)",
    name_ml: "ആസ്ത്മ (ശ്വാസംമുട്ടൽ)",
    name_hi: "दमा / अस्थमा",
    name_ar: "الربو الشعبي",
    category: "respiratory",
    badge: "Airway Hyperreactivity",
    icon: "wind",
    shortDesc: "A chronic inflammatory disorder of the airways causing reversible airflow obstruction, bronchospasm, and wheezing.",
    whatIsIt: "Asthma is a chronic condition that causes the airways (bronchial tubes) of the lungs to become inflamed, swollen, and constricted, while producing excessive mucus. This leads to recurrent episodes of wheezing, breathlessness, chest tightness, and coughing, particularly during early mornings, nights, or following physical exertion or allergen exposure.",
    causes: [
      "Genetic predisposition and family history of atopy (eczema, allergic rhinitis)",
      "Inhalation of airborne allergens (dust mites, pollen, mold spores, pet dander)",
      "Respiratory viral infections (Rhinovirus, RSV, influenza)",
      "Cold air, air pollution, ozone, and chemical fumes",
      "Vigorous exercise, emotional stress, and gastroesophageal reflux (GERD)"
    ],
    symptoms: [
      "Audible high-pitched expiratory wheezing",
      "Shortness of breath and feeling unable to take a full breath",
      "Chest tightness or band-like constriction",
      "Persistent nocturnal or early-morning dry coughing",
      "Tachypnea (rapid breathing) and flaring of nostrils"
    ],
    warningSigns: [
      "Status Asthmaticus (Severe acute exacerbation): Silent chest (absence of wheezing due to severe lack of air movement)",
      "Cyanosis: Bluish discoloration around lips and fingernails",
      "Inability to speak in full sentences without gasping",
      "Peak Expiratory Flow (PEF) < 50% of personal best with no relief from rescue inhaler"
    ],
    riskFactors: [
      "History of allergic rhinitis, eczema, or food allergies",
      "Exposure to secondhand cigarette smoke, particularly during infancy",
      "Occupational exposure to chemical dusts, flour, latex, or industrial fumes",
      "Obesity and urban environments with high particulate matter (PM2.5)"
    ],
    bodyImpact: "Chronic eosinophilic or neutrophilic airway inflammation leads to bronchial smooth muscle hypertrophy, subepithelial fibrosis, goblet cell hyperplasia with mucus plugging, and progressive irreversible airway remodeling over decades if uncontrolled.",
    diagnosis: [
      "Spirometry with Pre- and Post-Bronchodilator testing (showing >= 12% and >= 200 mL improvement in FEV1)",
      "Peak Expiratory Flow (PEF) daily variability tracking",
      "Fractional Exhaled Nitric Oxide (FeNO) test for eosinophilic inflammation",
      "Methacholine Bronchial Provocation challenge if baseline spirometry is normal",
      "Allergy skin-prick testing and serum total/specific IgE levels"
    ],
    treatments: [
      "Controller / Maintenance Therapy: Inhaled Corticosteroids (ICS e.g., Fluticasone, Budesonide) alone or with Long-Acting Beta-Agonists (LABA e.g., Formoterol, Salmeterol)",
      "Reliever / Rescue Therapy: Fast-acting bronchodilator (e.g., Albuterol/Salbutamol or ICS-Formoterol SMART protocol)",
      "Leukotriene Receptor Antagonists (Montelukast)",
      "Biologic targeted therapy for severe asthma (Omalizumab, Mepolizumab, Dupilumab)",
      "Short burst of oral corticosteroids (Prednisolone) for acute exacerbations"
    ],
    prevention: "While asthma cannot be prevented from starting, attacks are highly preventable by adhering daily to controller inhalers, identifying and avoiding personal triggers, using dust mite mattress covers, using HEPA air purifiers, and receiving annual influenza vaccines.",
    safeFoods: [
      "Vitamin C rich fruits (oranges, guavas, kiwi, bell peppers)",
      "Magnesium-rich foods (spinach, pumpkin seeds, black beans)",
      "Omega-3 fatty acids from fish and flaxseeds to reduce leukotriene inflammation",
      "Warm herbal teas (ginger, turmeric, licorice) to soothe airway mucosa",
      "Garlic, onions, and quercetin-rich foods"
    ],
    avoidFoods: [
      "Sulfites in dried fruits, packaged fruit juices, and pickled products (can trigger severe bronchospasm)",
      "Artificial food colorings, benzoates, and monosodium glutamate (MSG)",
      "Excessive dairy if noticed to cause mucus thickening in sensitive individuals",
      "Cold iced drinks immediately before or during physical exercise"
    ],
    exercises: [
      "Swimming in warm, humid air environments (excellent for lung capacity)",
      "Walking, cycling, or light jogging preceded by a 10-minute warm-up",
      "Yoga and Pranayama (deep diaphragmatic breathing exercises)",
      "Use rescue inhaler 15 minutes before strenuous exercise if Exercise-Induced Bronchospasm (EIB) occurs"
    ],
    lifestyle: [
      "Always carry your prescribed rescue inhaler wherever you go",
      "Wash bed linens weekly in hot water (> 60°C) to kill dust mites",
      "Keep indoor humidity below 50% to prevent fungal mold colonization",
      "Never smoke or allow smoking inside your home or car"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES IMMEDIATELY if you struggle to speak, lips turn blue, ribs suck in deeply with every breath, or your rescue inhaler provides no relief within 15 minutes.",
    faqs: [
      {
        q: "Are inhalers addictive or habit-forming?",
        a: "No. Inhaled corticosteroids and bronchodilators deliver microgram doses directly to lung tissue with minimal systemic absorption. They are non-addictive and prevent irreversible lung damage."
      },
      {
        q: "Can a child outgrow asthma?",
        a: "Many children experience remission of symptoms during adolescence as airway diameters enlarge. However, airway hyperreactivity can recur in adulthood if exposed to triggers or smoking."
      }
    ],
    references: [
      "Global Initiative for Asthma (GINA) Global Strategy for Asthma Management and Prevention 2024",
      "British Thoracic Society (BTS) / SIGN Guideline for the Management of Asthma",
      "WHO Bronchial Asthma Factsheet"
    ]
  },
  {
    id: "copd",
    name: "COPD (Chronic Obstructive Pulmonary Disease)",
    name_ml: "സി.ഒ.പി.ഡി (ശ്വാസതടസ്സ രോഗം)",
    name_hi: "सीओपीडी (क्रोनिक ऑब्सट्रक्टिव पल्मोनरी डिजीज)",
    name_ar: "مرض الانسداد الرئوي المزمن",
    category: "respiratory",
    badge: "Progressive Airflow Limitation",
    icon: "wind",
    shortDesc: "A progressive, life-threatening lung disease characterized by persistent respiratory symptoms and airflow limitation due to airway and alveolar abnormalities.",
    whatIsIt: "COPD is an umbrella term encompassing Emphysema (destruction and enlargement of the lung alveoli) and Chronic Bronchitis (chronic inflammation and narrowing of the bronchial tubes with persistent sputum production). Unlike asthma, airflow limitation in COPD is largely irreversible and progressively worsens over time.",
    causes: [
      "Tobacco smoking (the cause of > 80% of cases in developed nations)",
      "Long-term exposure to indoor biomass smoke (cooking fires with wood/coal in poorly ventilated kitchens)",
      "Occupational dusts and chemical vapors (mining, foundry work, textile fibers)",
      "Alpha-1 Antitrypsin Deficiency (AATD: genetic deficiency predisposing to early emphysema)",
      "Severe childhood respiratory infections"
    ],
    symptoms: [
      "Progressive exertional dyspnea (shortness of breath during basic daily activities)",
      "Chronic cough with persistent clear, white, or greenish mucus/sputum",
      "Frequent recurrent chest infections (bronchitis, pneumonia)",
      "Audible wheezing and chest heaviness",
      "Unintended weight loss and muscle wasting (pulmonary cachexia in late stages)",
      "Morning headaches due to nocturnal carbon dioxide retention (hypercapnia)"
    ],
    warningSigns: [
      "Acute Exacerbation: Sudden worsening of dyspnea, increased sputum volume, and purulence",
      "Severe respiratory distress: Cyanosis (blue lips/skin), tachypnea > 30 breaths/min, altered mental state",
      "Peripheral edema (swelling in ankles and feet indicating Cor Pulmonale / right heart failure)"
    ],
    riskFactors: [
      "Cigarette, cigar, pipe, or waterpipe (hookah) smoking",
      "Age over 40 years",
      "Occupational exposure to organic/inorganic dusts without protective respirators",
      "Low socioeconomic status and poorly ventilated living quarters",
      "Genetic Alpha-1 Antitrypsin deficiency"
    ],
    bodyImpact: "Destruction of alveolar elastin walls eliminates surface area for gas exchange, causing air trapping and hyperinflation ('barrel chest'). Capillary beds are destroyed, raising pulmonary arterial pressure, causing right ventricular hypertrophy and Cor Pulmonale.",
    diagnosis: [
      "Post-Bronchodilator Spirometry: FEV1/FVC ratio < 0.70 confirms persistent airflow limitation",
      "GOLD Staging based on post-bronchodilator FEV1: GOLD 1 (Mild >= 80%) to GOLD 4 (Very Severe < 30%)",
      "High-Resolution Chest CT (HRCT) to quantify emphysematous bullae and bronchial wall thickening",
      "Arterial Blood Gas (ABG) analysis to detect hypoxemia (PaO2 < 60 mmHg) and hypercapnia",
      "Serum Alpha-1 Antitrypsin testing in all young or non-smoking patients"
    ],
    treatments: [
      "Immediate and permanent Smoking Cessation (the only intervention that slows FEV1 decline)",
      "Inhaled Long-Acting Muscarinic Antagonists (LAMA e.g., Tiotropium, Umeclidinium)",
      "Long-Acting Beta2-Agonists (LABA e.g., Olodaterol, Vilanterol)",
      "Inhaled Corticosteroids (ICS) for patients with frequent exacerbations or high eosinophils",
      "Pulmonary Rehabilitation (structured exercise training, education, and breathing techniques)",
      "Long-Term Oxygen Therapy (LTOT) for chronic resting severe hypoxemia (SpO2 <= 88%)",
      "Non-Invasive Ventilation (BiPAP) for acute hypercapnic respiratory failure"
    ],
    prevention: "COPD is almost entirely preventable by never smoking, completely quitting tobacco, eliminating indoor cooking smoke with clean cookstoves, wearing respirators in hazardous industrial environments, and getting vaccinated against flu, pneumonia, and RSV.",
    safeFoods: [
      "High-calorie, nutrient-dense small meals for patients with work-of-breathing weight loss",
      "Lean protein sources (eggs, poultry, fish, legumes) to prevent diaphragm muscle wasting",
      "Fresh berries, leafy greens, and citrus fruits rich in antioxidants",
      "Healthy plant fats (avocados, olive oil, nuts) which generate less CO2 during metabolism than carbs",
      "Adequate hydration to thin bronchial mucus secretions"
    ],
    avoidFoods: [
      "Gas-forming foods (beans, carbonated drinks, cabbage) that distend the stomach and push up against the diaphragm",
      "Excessive simple refined carbohydrates that increase metabolic carbon dioxide production",
      "High-sodium processed meals that exacerbate fluid retention and ankle swelling",
      "Tobacco smoke, wood smoke, and aerosol sprays"
    ],
    exercises: [
      "Pursed-lip breathing technique (inhale through nose for 2 counts, exhale through pursed lips for 4 counts)",
      "Diaphragmatic / belly breathing training",
      "Low-intensity interval walking on flat ground with regular rest pauses",
      "Light arm and shoulder resistance band exercises to strengthen accessory breathing muscles"
    ],
    lifestyle: [
      "Stop smoking immediately — seek medical smoking cessation support (nicotine replacement, Varenicline)",
      "Keep home well-ventilated; avoid open wood fires and incense sticks",
      "Receive annual influenza, pneumococcal, and COVID-19 vaccinations",
      "Keep emergency antibiotics and oral steroids on hand if recommended in your COPD Action Plan"
    ],
    whenToConsult: "Seek EMERGENCY MEDICAL ATTENTION if you cannot catch your breath while resting, lips or fingertips turn blue, you become confused, or you develop swelling in your legs with high fever.",
    faqs: [
      {
        q: "Is COPD curable?",
        a: "No. Structural damage to alveoli in COPD cannot be reversed. However, quitting smoking, using proper inhalers, and pulmonary rehabilitation can significantly improve symptoms, reduce hospitalizations, and prolong life."
      },
      {
        q: "Why do COPD patients breathe with pursed lips?",
        a: "Pursed-lip breathing creates backpressure inside the airways during exhalation, preventing floppy airways from collapsing and allowing trapped air to escape from the lungs."
      }
    ],
    references: [
      "Global Initiative for Chronic Obstructive Lung Disease (GOLD) Report 2024",
      "American Thoracic Society (ATS) COPD Clinical Practice Guidelines",
      "WHO Chronic Obstructive Pulmonary Disease Factsheet"
    ]
  },
  {
    id: "pneumonia",
    name: "Pneumonia (Lung Infection)",
    name_ml: "ന്യുമോണിയ (ശ്വാസകോശ അണുബാധ)",
    name_hi: "निमोनिया (फेफड़ों का संक्रमण)",
    name_ar: "الالتهاب الرئوي",
    category: "respiratory",
    badge: "Acute Infection",
    icon: "alert-circle",
    shortDesc: "An acute microbial infection that inflames the air sacs (alveoli) in one or both lungs, filling them with pus and exudative fluid.",
    whatIsIt: "Pneumonia is an acute inflammatory condition of the lung primarily affecting the microscopic air sacs (alveoli). When pathogens enter the alveoli, the body's immune response triggers exudation of fluid, neutrophils, and cellular debris into the alveolar space, impairing pulmonary gas exchange and causing severe oxygen desaturation.",
    causes: [
      "Bacterial pathogens: Streptococcus pneumoniae (most common), Haemophilus influenzae, Mycoplasma pneumoniae, Legionella pneumophila",
      "Viral pathogens: Influenza A/B, SARS-CoV-2 (COVID-19), Respiratory Syncytial Virus (RSV)",
      "Fungal organisms: Pneumocystis jirovecii (in immunocompromised individuals), Histoplasma, Coccidioides",
      "Aspiration of food particles, vomit, or liquids into the trachea"
    ],
    symptoms: [
      "High spiking fever with shaking chills and rigors",
      "Productive cough yielding thick greenish, yellow, or rust-colored sputum",
      "Pleuritic chest pain (sharp, stabbing pain worsened by deep inhalation or coughing)",
      "Rapid, shallow breathing (Tachypnea) and shortness of breath",
      "Profound fatigue, generalized body aches, and loss of appetite",
      "Confusion or altered mental status (frequently the primary symptom in elderly patients)"
    ],
    warningSigns: [
      "Respiratory failure: Oxygen saturation (SpO2) dropping below 90% on room air",
      "Septic Shock: Systolic blood pressure < 90 mmHg, cold clammy extremities, rapid pulse",
      "Hemoptysis (coughing up frank blood)",
      "Severe confusion, stupor, or inability to stay awake"
    ],
    riskFactors: [
      "Age extremes: Infants under 2 years and adults aged 65 and older",
      "Chronic underlying diseases: COPD, asthma, heart failure, diabetes mellitus",
      "Immunosuppression: HIV/AIDS, chemotherapy, organ transplant, chronic steroids",
      "Cigarette smoking and chronic alcohol abuse",
      "Impaired swallowing or neurological disorders predisposing to aspiration"
    ],
    bodyImpact: "Alveolar consolidation prevents oxygen from entering the pulmonary capillaries, causing severe ventilation-perfusion mismatch and arterial hypoxemia. Bacteria may enter the bloodstream causing life-threatening sepsis, parapneumonic effusion, empyema, and Acute Respiratory Distress Syndrome (ARDS).",
    diagnosis: [
      "Chest X-Ray demonstrating lobar or patchy airspace consolidation, infiltrates, or air bronchograms",
      "Pulse Oximetry and Arterial Blood Gas (ABG) for hypoxemia",
      "Complete Blood Count (CBC) showing leukocytosis with a left shift (high neutrophils)",
      "Sputum Gram stain and bacterial culture",
      "Blood cultures to rule out bacteremia and CURB-65 / PSI severity score calculation"
    ],
    treatments: [
      "Targeted Antibiotics for bacterial pneumonia (e.g., Amoxicillin-Clavulanate, Azithromycin, Ceftriaxone, Levofloxacin)",
      "Antiviral therapy (e.g., Oseltamivir for Influenza, Remdesivir/Paxlovid for COVID-19)",
      "Supplemental Oxygen Therapy via nasal cannula or high-flow nasal cannula",
      "Intravenous fluid hydration and antipyretics (Acetaminophen/Paracetamol) for fever",
      "Chest physiotherapy and incentive spirometry to facilitate mucus drainage"
    ],
    prevention: "Vaccination is the most effective prevention: Pneumococcal conjugate (PCV15/PCV20) and polysaccharide (PPSV23) vaccines, annual Influenza vaccine, and COVID-19 boosters. Practice rigorous hand hygiene and avoid smoking.",
    safeFoods: [
      "Hydrating warm broths, clear vegetable soups, and herbal teas",
      "High-protein easily digestible foods: Steamed fish, eggs, soft lentils, yogurt",
      "Vitamin C and A rich fruits and vegetables: Oranges, papayas, carrots, cooked spinach",
      "Honey and warm ginger water to soothe coughing",
      "Adequate fluids (2 to 3 liters daily unless restricted for heart/kidney reasons)"
    ],
    avoidFoods: [
      "Dehydrating caffeinated energy drinks and alcohol",
      "Heavy, greasy deep-fried foods that induce nausea and digestive strain",
      "Very cold drinks that can trigger throat irritation and bronchospasm",
      "Extremely sugary desserts that impair immune cell phagocytosis"
    ],
    exercises: [
      "Strict physical rest during the acute febrile and infection stage",
      "Incentive spirometry (taking slow deep breaths through a spirometer device 10 times every hour)",
      "Gentle bedside ankle pumps and deep breathing while sitting upright in bed",
      "Gradual resumption of light walking only after fever resolves for > 48 hours"
    ],
    lifestyle: [
      "Rest completely in bed; do not rush back to work or physical exercise",
      "Sleep with head elevated on 2 pillows to facilitate lung expansion",
      "Finish the entire prescribed course of antibiotics even if feeling better",
      "Practice strict handwashing and cough etiquette (cough into elbow)"
    ],
    whenToConsult: "SEEK IMMEDIATE EMERGENCY MEDICAL CARE if breathing becomes difficult, chest pain is severe, lips or fingernails appear bluish, or an elderly family member becomes suddenly confused or unresponsive.",
    faqs: [
      {
        q: "How long does it take to recover from pneumonia?",
        a: "Most healthy people improve within 1 to 2 weeks with antibiotics, but fatigue, mild cough, and reduced stamina can persist for 4 to 6 weeks. Chest X-rays often take up to 8 weeks to clear completely."
      },
      {
        q: "Is pneumonia contagious?",
        a: "The underlying bacteria and viruses (like flu, strep, or coronavirus) that cause pneumonia are contagious through airborne droplets, though not everyone who catches them will develop lung infection."
      }
    ],
    references: [
      "Infectious Diseases Society of America (IDSA) / ATS Consensus Guidelines on Community-Acquired Pneumonia",
      "CDC Pneumonia Prevention and Treatment Guidelines",
      "WHO Pneumonia in Children and Adults Factsheet"
    ]
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB)",
    name_ml: "ക്ഷയരോഗം (ടി.ബി)",
    name_hi: "तपेदिक / क्षय रोग (टीबी)",
    name_ar: "السل الرئوي (الدرن)",
    category: "respiratory",
    badge: "Airborne Mycobacterial",
    icon: "shield-alert",
    shortDesc: "A contagious airborne bacterial infection primarily affecting the lungs caused by Mycobacterium tuberculosis.",
    whatIsIt: "Tuberculosis is an infectious disease caused by Mycobacterium tuberculosis, an acid-fast bacillus transmitted via microscopic droplet nuclei when an infected person coughs, sneezes, or talks. It exists as Latent TB Infection (asymptomatic, non-contagious, bacteria contained in granulomas) and Active TB Disease (symptomatic, infectious, causing lung destruction).",
    causes: [
      "Inhalation of airborne droplet nuclei containing Mycobacterium tuberculosis",
      "Reactivation of latent infection due to immunocompromised state",
      "Prolonged close contact with a person having untreated active pulmonary TB",
      "Multidrug-resistant TB (MDR-TB) strains arising from incomplete or irregular treatment"
    ],
    symptoms: [
      "Persistent productive cough lasting more than 2 to 3 weeks",
      "Hemoptysis (coughing up blood or blood-streaked sputum)",
      "Unexplained, drenching nocturnal sweats",
      "Low-grade evening fever and recurring chills",
      "Unintended significant weight loss and anorexia (historically called 'Consumption')",
      "Persistent chest pain and extreme physical exhaustion"
    ],
    warningSigns: [
      "Massive hemoptysis (> 200-500 mL blood within 24 hours) threatening airway suffocation",
      "Disseminated / Miliary TB: Bacteria spreading to brain (TB meningitis), spine (Pott's disease), or kidneys",
      "Acute respiratory distress and pleural effusion"
    ],
    riskFactors: [
      "HIV/AIDS infection (the strongest risk factor for progression to active disease)",
      "Malnutrition, diabetes mellitus, and chronic kidney disease",
      "Crowded, poorly ventilated living conditions (prisons, shelters)",
      "Healthcare workers and individuals from high-burden geographic regions",
      "Immunosuppressive medications (Anti-TNF therapies, organ transplant drugs)"
    ],
    bodyImpact: "Tubercle bacilli trigger cell-mediated hypersensitivity, forming caseous granulomas. As macrophages fail to kill the bacteria, caseous centers liquefy and cavitate, destroying lung parenchyma, eroding pulmonary arterioles (causing hemoptysis), and spreading systemically via blood and lymph.",
    diagnosis: [
      "Sputum Smear Microscopy for Acid-Fast Bacilli (AFB) using Ziehl-Neelsen stain",
      "Molecular Rapid Testing: GeneXpert MTB/RIF (detects MTB and rifampicin resistance within 2 hours)",
      "Sputum Mycobacterial Culture (gold standard on Lowenstein-Jensen or MGIT media)",
      "Chest Radiograph: Demonstrating apical/upper lobe cavitary lesions, consolidations, or miliary mottling",
      "Tuberculin Skin Test (Mantoux PPD) or Interferon-Gamma Release Assays (IGRA: QuantiFERON-TB Gold) for latent TB"
    ],
    treatments: [
      "Standard First-Line Directly Observed Therapy Short-Course (DOTS) for 6 months:",
      "Intensive Phase (2 months): Isoniazid (H), Rifampicin (R), Pyrazinamide (Z), and Ethambutol (E)",
      "Continuation Phase (4 months): Isoniazid and Rifampicin",
      "Second-Line Anti-TB drugs for MDR-TB: Bedaquiline, Pretomanid, Linezolid, Fluoroquinolones (BPaL regimen)",
      "Pyridoxine (Vitamin B6) supplementation to prevent Isoniazid-induced peripheral neuropathy"
    ],
    prevention: "Bacillus Calmette-Guerin (BCG) vaccine given to infants in endemic regions prevents severe childhood TB meningitis. Treatment of latent TB infection, wearing N95 respirators in clinical settings, and improving room ventilation (negative pressure isolation) prevent transmission.",
    safeFoods: [
      "High-protein, energy-dense foods to reverse cachexia: Eggs, poultry, dairy, lentils, peanut butter",
      "Vitamin A and Zinc rich foods: Carrots, sweet potatoes, pumpkin seeds, green vegetables",
      "Citrus fruits and guava rich in Vitamin C to boost cell-mediated immunity",
      "Whole grain cereals, porridge, and healthy plant fats",
      "Clean boiled water and fresh homemade nutritious meals"
    ],
    avoidFoods: [
      "Alcohol consumption (strictly prohibited — combines with Isoniazid/Rifampicin to cause severe hepatotoxicity)",
      "Tobacco smoking and recreational drugs",
      "Excessive refined sugars and ultra-processed convenience foods",
      "Raw unpasteurized milk and dairy products (risk of Mycobacterium bovis)"
    ],
    exercises: [
      "Complete physical rest during the active contagious and febrile stage",
      "Gentle indoor walking once sputum becomes smear-negative and fever resolves",
      "Deep breathing exercises to promote lung re-expansion",
      "Gradual strength retraining only after completing the intensive treatment phase"
    ],
    lifestyle: [
      "NEVER miss a single dose of anti-TB medications to prevent incurable drug-resistant strains",
      "Wear a surgical mask when around others until your doctor confirms non-contagious status",
      "Sleep in a separate, well-ventilated room with open windows during the initial 2-3 weeks of treatment",
      "Cough into disposable tissues and discard them safely in sealed bags"
    ],
    whenToConsult: "Consult a doctor immediately if you have a cough lasting over 2 weeks with evening fever and weight loss. Go to the EMERGENCY ROOM immediately if you cough up blood or experience severe breathlessness.",
    faqs: [
      {
        q: "Is tuberculosis completely curable?",
        a: "Yes. Tuberculosis is 100% curable with proper, uninterrupted adherence to the 6-month regimen of first-line anti-TB medications."
      },
      {
        q: "Why do anti-TB medications turn urine orange or red?",
        a: "Rifampicin, one of the primary anti-TB drugs, naturally turns urine, tears, sweat, and saliva an orange-red color. This is completely harmless and normal."
      }
    ],
    references: [
      "World Health Organization (WHO) Consolidated Guidelines on Tuberculosis 2024",
      "CDC Tuberculosis Treatment and Prevention Guidelines",
      "International Union Against Tuberculosis and Lung Disease Guidelines"
    ]
  },
  {
    id: "chronic-bronchitis",
    name: "Chronic Bronchitis",
    name_ml: "ക്രോണിക് ബ്രോങ്കൈറ്റിസ്",
    name_hi: "क्रोनिक ब्रोंकाइटिस",
    name_ar: "التهاب الشعب الهوائية المزمن",
    category: "respiratory",
    badge: "Chronic Mucus Hypersecretion",
    icon: "wind",
    shortDesc: "Long-standing inflammation of the bronchial mucous membrane with hypersecretion of mucus and chronic productive cough.",
    whatIsIt: "Chronic bronchitis is defined clinically as a daily cough with sputum production for at least 3 consecutive months in 2 successive years, in the absence of other specific causes. It represents the major bronchial component of COPD and is characterized by goblet cell hyperplasia and chronic airway inflammation.",
    causes: [
      "Chronic cigarette and tobacco smoke inhalation (> 90% of cases)",
      "Inhalation of industrial dusts (silica, grain dust, coal dust)",
      "Environmental air pollution and toxic sulfur dioxide fumes",
      "Secondhand smoke exposure and recurrent untreated bronchial infections"
    ],
    symptoms: [
      "Chronic daily cough producing copious amounts of white, gray, or yellow mucus",
      "Progressive exertional breathlessness",
      "Chest discomfort, tightness, and audible bubbling rhonchi",
      "Frequent acute infective flare-ups during winter seasons",
      "Cyanotic appearance ('Blue Bloater' profile) due to chronic hypoxemia",
      "Fatigue, lethargy, and sleep disturbances due to nocturnal coughing"
    ],
    warningSigns: [
      "Sputum turning thick, foul-smelling, or dark green with high fever",
      "Severe resting dyspnea and central cyanosis",
      "Bilateral lower extremity edema indicating cor pulmonale"
    ],
    riskFactors: [
      "Active or former cigarette smoking",
      "Age greater than 40 years",
      "Occupational exposure to chemical irritants and fumes",
      "Gastroesophageal reflux disease (GERD micro-aspiration)",
      "Pre-existing bronchial asthma"
    ],
    bodyImpact: "Chronic irritation causes hypertrophy of submucosal bronchial mucus glands (elevated Reid index), loss of ciliated airway cells, impaired mucociliary clearance, chronic colonization by bacteria, and progressive fixed airflow limitation.",
    diagnosis: [
      "Clinical diagnostic criteria: Productive cough for 3+ months in 2+ consecutive years",
      "Spirometry: Measuring post-bronchodilator FEV1/FVC to determine degree of obstruction",
      "Chest X-Ray: Showing increased bronchovascular markings ('dirty chest')",
      "Sputum Gram stain and culture during acute exacerbations",
      "Pulse oximetry to assess arterial oxygen saturation"
    ],
    treatments: [
      "Permanent Smoking Cessation program",
      "Inhaled Bronchodilators (LAMA e.g., Tiotropium; LABA e.g., Formoterol)",
      "Inhaled Corticosteroids for frequent exacerbations",
      "Phosphodiesterase-4 (PDE-4) Inhibitors (e.g., Roflumilast) to reduce systemic inflammation and exacerbation frequency",
      "Mucolytics (N-acetylcysteine, Carbocisteine) to decrease sputum viscosity",
      "Antibiotics (e.g., Amoxicillin-Clavulanate, Macrolides) during acute purulent flare-ups"
    ],
    prevention: "Never smoke and avoid all forms of tobacco. Use occupational protective masks, keep indoor air clean with HEPA filtration, avoid wood smoke, and stay up to date on influenza and pneumococcal vaccines.",
    safeFoods: [
      "Warm liquids, broths, and hot water to thin bronchial secretions",
      "Anti-inflammatory spices: Ginger, turmeric, and black pepper",
      "Vitamin C rich fruits and leafy cruciferous vegetables",
      "Lean protein sources to support respiratory muscle strength",
      "Omega-3 fatty fish to dampen airway inflammation"
    ],
    avoidFoods: [
      "Chilled drinks and ice creams that can trigger reflex bronchoconstriction",
      "Excessive dairy products if observed to increase sputum thickness",
      "High-sodium processed snacks that worsen fluid retention",
      "Deep-fried foods containing rancid cooking oils"
    ],
    exercises: [
      "Controlled diaphragmatic breathing and 'huff coughing' to clear mucus",
      "Low-impact daily walking (20-30 minutes)",
      "Chest physiotherapy with Flutter valve / positive expiratory pressure (PEP) devices",
      "Gentle upper body stretching and mobility work"
    ],
    lifestyle: [
      "Completely stop smoking and avoid exposure to smoky environments",
      "Use a cool-mist room humidifier to keep bronchial airways moist",
      "Practice 'huff coughing' in the morning to clear accumulated mucus without exhausting yourself",
      "Receive annual flu, COVID-19, and pneumococcal vaccines"
    ],
    whenToConsult: "Consult a pulmonologist if coughing produces blood, sputum becomes thick green with fever, or you experience new shortness of breath during rest or walking.",
    faqs: [
      {
        q: "What is the difference between acute bronchitis and chronic bronchitis?",
        a: "Acute bronchitis is a temporary viral infection lasting 1 to 3 weeks that resolves completely. Chronic bronchitis is a permanent, progressive inflammatory condition lasting years, primarily caused by smoking."
      },
      {
        q: "Can mucolytics cure chronic bronchitis?",
        a: "Mucolytics help thin sticky mucus so it is easier to cough up, but they do not reverse the underlying bronchial gland enlargement. Smoking cessation is the only way to stop disease progression."
      }
    ],
    references: [
      "American Thoracic Society / European Respiratory Society Standards for Chronic Bronchitis",
      "GOLD Global Strategy for Diagnosis, Management, and Prevention of COPD 2024",
      "Mayo Clinic Respiratory Diseases Clinical Compendium"
    ]
  },
  {
    id: "lung-cancer",
    name: "Lung Cancer (Bronchogenic Carcinoma)",
    name_ml: "ശ്വാസകോശ കാൻസർ",
    name_hi: "फेफड़ों का कैंसर",
    name_ar: "سرطان الرئة",
    category: "respiratory",
    badge: "Malignant Neoplasm",
    icon: "ribbon",
    shortDesc: "Malignant transformation and uncontrolled proliferation of abnormal epithelial cells in lung tissue.",
    whatIsIt: "Lung cancer originates in the tissues of the lungs, typically in the epithelial cells lining the airways. The two broad clinical categories are Non-Small Cell Lung Cancer (NSCLC, ~85% of cases, including Adenocarcinoma, Squamous Cell Carcinoma, and Large Cell Carcinoma) and Small Cell Lung Cancer (SCLC, ~15%, highly aggressive and neuroendocrine in nature).",
    causes: [
      "Cigarette, cigar, and pipe smoking (causes > 85% of all lung cancers)",
      "Exposure to Radon gas (the leading cause of lung cancer in non-smokers)",
      "Occupational asbestos exposure (causes lung cancer and malignant pleural mesothelioma)",
      "Secondhand tobacco smoke exposure and heavy environmental air pollution (PM2.5)",
      "Genetic mutations in driver oncogenes (EGFR, ALK, ROS1, KRAS, BRAF)"
    ],
    symptoms: [
      "A new persistent cough that does not go away or changes in character",
      "Hemoptysis: Coughing up blood, even in small flecks or rust-colored sputum",
      "Dull, persistent chest pain that worsens with deep breathing or coughing",
      "Progressive unexplained shortness of breath and wheezing",
      "Hoarseness (due to recurrent laryngeal nerve involvement)",
      "Unintended significant weight loss, loss of appetite, and profound fatigue",
      "Repeated episodes of pneumonia or bronchitis that fail to clear"
    ],
    warningSigns: [
      "Superior Vena Cava (SVC) Syndrome: Facial swelling, neck vein distension, upper chest flushing",
      "Horner's Syndrome (from apical Pancoast tumor): Ptosis (drooping eyelid), miosis (constricted pupil), and anhidrosis",
      "Bone pain (back, ribs, hips) indicating metastatic bone lesions",
      "New neurological deficits or seizures indicating brain metastases"
    ],
    riskFactors: [
      "Current or past history of tobacco smoking (pack-years strongly correlated)",
      "Family history of lung cancer in a first-degree relative",
      "Exposure to arsenic, chromium, nickel, beryllium, or radiation",
      "Pre-existing chronic lung diseases (COPD, pulmonary fibrosis)",
      "Older age (most commonly diagnosed between 65 and 74 years)"
    ],
    bodyImpact: "Malignant clones invade bronchial walls, obstruct air passages causing post-obstructive atelectasis, erode blood vessels causing fatal hemoptysis, seed the pleural cavity causing malignant pleural effusions, and metastasize widely to lymph nodes, brain, bones, liver, and adrenal glands.",
    diagnosis: [
      "Low-Dose Computed Tomography (LDCT) for screening high-risk asymptomatic smokers",
      "High-Resolution Chest CT with IV contrast demonstrating lung nodules or masses",
      "Positron Emission Tomography (PET-CT) for whole-body staging and metabolic activity",
      "Bronchoscopy with Endobronchial Ultrasound (EBUS) guided transbronchial needle aspiration",
      "CT-guided Transthoracic Core Needle Biopsy for peripheral tumors",
      "Next-Generation Sequencing (NGS) molecular testing for actionable driver mutations (EGFR, ALK, ROS1, PD-L1 expression)"
    ],
    treatments: [
      "Surgical Resection (Lobectomy, Segmentectomy, Pneumonectomy) for early-stage NSCLC",
      "Stereotactic Body Radiation Therapy (SBRT) for medically inoperable early tumors",
      "Targeted Therapy: Tyrosine Kinase Inhibitors (Osimertinib for EGFR, Alectinib for ALK)",
      "Immune Checkpoint Inhibitors (Pembrolizumab, Nivolumab against PD-1/PD-L1)",
      "Platinum-based Chemotherapy (Cisplatin/Carboplatin + Pemetrexed or Etoposide)",
      "Multidisciplinary Palliative Care and symptom management"
    ],
    prevention: "The most effective prevention is never starting to smoke, or stopping smoking immediately (risk drops by 50% after 10-15 years of cessation). Test homes for radon gas levels, avoid secondhand smoke, wear respirators in toxic workplaces, and eat a balanced diet rich in vegetables.",
    safeFoods: [
      "Cruciferous vegetables rich in sulforaphane and indole-3-carbinol (broccoli, Brussels sprouts)",
      "Berries and colorful fruits packed with polyphenolic antioxidants",
      "Adequate lean proteins (fish, eggs, legumes, Greek yogurt) to prevent cancer cachexia",
      "Green tea rich in epigallocatechin gallate (EGCG)",
      "Healthy plant fats (avocado, extra virgin olive oil)"
    ],
    avoidFoods: [
      "All forms of smoked, cured, and processed meats (nitrites and heterocyclic amines)",
      "High-dose Beta-Carotene dietary supplements in active smokers (proven to increase lung cancer risk in CARET trials)",
      "Alcohol consumption (enhances carcinogenic absorption)",
      "Deep-fried foods and burnt/charred meat products"
    ],
    exercises: [
      "Post-operative pulmonary rehabilitation: Walking and breathing exercises",
      "Light daily walking (15-30 minutes) to combat cancer-related fatigue",
      "Gentle stretching and mobility routines to prevent shoulder stiffness post-thoracotomy",
      "Incentive spirometry and diaphragmatic breathing"
    ],
    lifestyle: [
      "If you are aged 50-80 with a 20 pack-year smoking history, get an annual Low-Dose CT screening",
      "Quit smoking immediately — it is never too late, as cessation improves cancer treatment outcomes",
      "Test your home's basement for radioactive radon gas using a certified test kit",
      "Seek emotional support from oncology counseling and patient survivor groups"
    ],
    whenToConsult: "Consult a doctor immediately if you cough up even small specks of blood, develop a cough that lasts over 3 weeks, or experience unexplained weight loss and shoulder/chest pain.",
    faqs: [
      {
        q: "Can non-smokers get lung cancer?",
        a: "Yes. Approximately 15% to 20% of lung cancers occur in people who have never smoked. In non-smokers, causes include radon exposure, secondhand smoke, genetic mutations (like EGFR), and environmental air pollution."
      },
      {
        q: "What is Low-Dose CT screening?",
        a: "Low-Dose CT (LDCT) is an annual painless scan that uses very low radiation to detect tiny lung cancers years before symptoms appear, reducing lung cancer death rates by over 20%."
      }
    ],
    references: [
      "National Comprehensive Cancer Network (NCCN) Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer",
      "American Cancer Society (ACS) Lung Cancer Early Detection Guidelines",
      "U.S. Preventive Services Task Force (USPSTF) Lung Cancer Screening Recommendation"
    ]
  }
];
