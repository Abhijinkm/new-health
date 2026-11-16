/**
 * HEALTHCARE FOR YOU - Disease Prevention Centre Repository
 * Evidence-based guidelines for preventing major chronic and lifestyle illnesses.
 */
module.exports = [
  {
    id: "prevent-diabetes",
    title: "How to Prevent Type 2 Diabetes",
    title_ml: "ടൈപ്പ് 2 പ്രമേഹം എങ്ങനെ തടയാം?",
    title_hi: "टाइप 2 मधुमेह से कैसे बचें?",
    title_ar: "كيفية الوقاية من السكري من النوع 2",
    icon: "droplet",
    color: "blue",
    keySummary: "Up to 80% of Type 2 diabetes cases are preventable through 5-7% sustained weight loss, 150 minutes of weekly aerobic exercise, and replacing refined carbohydrates with whole fiber.",
    actionSteps: [
      "Target a 5% to 7% reduction in total body weight if overweight (cuts diabetes risk by up to 58% as proven in the landmark Diabetes Prevention Program trial)",
      "Engage in at least 150 minutes of moderate-intensity physical activity weekly (e.g., 30 minutes of brisk walking 5 days a week)",
      "Eliminate all liquid sugars: sodas, sweetened fruit juices, energy drinks, and sweetened teas",
      "Follow the 'Plate Method': Half plate non-starchy vegetables, one quarter plate lean protein, one quarter plate whole complex grains",
      "Incorporate 10-15 minute post-meal light strolls to facilitate non-insulin-mediated GLUT4 glucose uptake"
    ],
    dietaryProtocol: [
      "Consume at least 30-35 grams of dietary fiber daily from legumes, chia seeds, oats, and leafy greens",
      "Switch entirely from refined grains (white bread, white rice, maida) to low-glycemic intact whole grains (quinoa, steel-cut oats, barley)",
      "Incorporate healthy monounsaturated fats (extra virgin olive oil, avocados, almonds, walnuts)",
      "Avoid all industrial trans fats and processed convenience foods"
    ],
    biomarkersToTrack: [
      "Fasting Plasma Glucose (Normal < 100 mg/dL; Prediabetes 100-125 mg/dL)",
      "Hemoglobin A1c (HbA1c: Normal < 5.7%; Prediabetes 5.7% - 6.4%)",
      "Fasting Serum Insulin and HOMA-IR (identifies occult insulin resistance)",
      "Waist Circumference (Target < 40 inches in men; < 35 inches in women)"
    ],
    references: [
      "Diabetes Prevention Program Research Group. Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin. N Engl J Med. 2002.",
      "ADA Standards of Medical Care in Diabetes 2024: Prevention or Delay of Type 2 Diabetes.",
      "World Health Organization (WHO) Diabetes Prevention Guidelines."
    ]
  },
  {
    id: "prevent-hypertension",
    title: "How to Prevent High Blood Pressure",
    title_ml: "ഉയർന്ന രക്തസമ്മർദ്ദം എങ്ങനെ തടയാം?",
    title_hi: "उच्च रक्तचाप (हाइपरटेंशन) से कैसे बचें?",
    title_ar: "كيفية الوقاية من ارتفاع ضغط الدم",
    icon: "activity",
    color: "red",
    keySummary: "Keep systolic pressure < 120 mmHg through sodium restriction (< 1,500-2,000 mg/day), potassium-rich whole foods, stress management, and daily physical movement.",
    actionSteps: [
      "Restrict daily sodium intake to under 1,500 to 2,000 mg (about one level teaspoon of salt for the entire day across all foods)",
      "Adopt the DASH (Dietary Approaches to Stop Hypertension) dietary pattern, shown to lower systolic BP by up to 11 mmHg",
      "Maintain a Body Mass Index (BMI) between 18.5 and 24.9 (each 1 kg of weight loss lowers systolic BP by roughly 1 mmHg)",
      "Perform daily diaphragmatic breathing: 6 slow deep breaths per minute for 5 minutes twice daily (stimulates parasympathetic vagus nerve)",
      "Limit alcohol consumption to no more than 1 drink per day for women or 2 for men (or abstain completely)"
    ],
    dietaryProtocol: [
      "Increase dietary potassium to 3,500-4,700 mg/day through bananas, spinach, sweet potatoes, coconut water, and white beans",
      "Increase dietary magnesium from raw pumpkin seeds, almonds, and dark leafy greens",
      "Consume garlic, onions, and beetroot juice rich in natural dietary nitrates that convert to vasodilatory nitric oxide",
      "Avoid canned soups, cured sausages, salted snacks, and table salt shakers"
    ],
    biomarkersToTrack: [
      "Home Blood Pressure (Target < 120/80 mmHg while seated calmly)",
      "Serum Potassium and Sodium electrolytes",
      "Estimated Glomerular Filtration Rate (eGFR) and Urine Albumin-to-Creatinine Ratio (uACR)"
    ],
    references: [
      "Whelton PK, et al. 2017 ACC/AHA High Blood Pressure Clinical Practice Guideline.",
      "Appel LJ, et al. A Clinical Trial of the Effects of Dietary Patterns on Blood Pressure (DASH Trial). N Engl J Med.",
      "European Society of Cardiology (ESC) / ESH Guidelines for the Management of Arterial Hypertension."
    ]
  },
  {
    id: "prevent-heart-disease",
    title: "How to Prevent Heart Disease & CAD",
    title_ml: "ഹൃദ്രോഗവും കൊറോണറി അസുഖങ്ങളും എങ്ങനെ തടയാം?",
    title_hi: "हृदय रोग (दिल की बीमारी) से कैसे बचें?",
    title_ar: "كيفية الوقاية من أمراض القلب وتصلب الشرايين",
    icon: "heart",
    color: "rose",
    keySummary: "Arterial plaque formation can be arrested through zero tobacco use, achieving LDL < 70-100 mg/dL, consuming Omega-3 rich cold-water fish, and daily cardio exercise.",
    actionSteps: [
      "Completely eliminate tobacco smoking and exposure to secondhand cigarette smoke (cardiovascular risk plummets within weeks of quitting)",
      "Adhere strictly to a Mediterranean dietary pattern rich in extra virgin olive oil, cold-water fish, tree nuts, and colorful vegetables",
      "Engage in at least 150 minutes of moderate or 75 minutes of vigorous aerobic exercise weekly",
      "Get 7 to 8 hours of consistent, restorative sleep nightly (sleep apnea and insomnia double myocardial infarction risk)",
      "Know your cardiovascular risk numbers: Blood Pressure, LDL-C, ApoB, HbA1c, and Coronary Artery Calcium (CAC) score"
    ],
    dietaryProtocol: [
      "Eat cold-water fatty fish (wild salmon, sardines, mackerel) twice weekly to supply cardioprotective EPA and DHA",
      "Use cold-pressed extra virgin olive oil as the primary dietary cooking and salad oil",
      "Consume 30 grams of raw tree nuts (walnuts, almonds) daily",
      "Completely avoid all commercial trans fats, hydrogenated margarine, and deep-fried fast foods"
    ],
    biomarkersToTrack: [
      "Apolipoprotein B (ApoB < 80 mg/dL or < 65 mg/dL in high-risk individuals)",
      "Low-Density Lipoprotein Cholesterol (LDL-C < 70-100 mg/dL)",
      "High-Sensitivity C-Reactive Protein (hs-CRP < 1.0 mg/L)",
      "Coronary Artery Calcium (CAC) CT Scan score (target = 0)"
    ],
    references: [
      "Arnett DK, et al. 2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease.",
      "Estruch R, et al. Primary Prevention of Cardiovascular Disease with a Mediterranean Diet (PREDIMED Trial). N Engl J Med.",
      "World Heart Federation Global Cardiovascular Prevention Roadmap."
    ]
  },
  {
    id: "prevent-obesity",
    title: "How to Prevent Obesity & Visceral Fat",
    title_ml: "പൊണ്ണത്തടിയും അമിതവണ്ണവും എങ്ങനെ തടയാം?",
    title_hi: "मोटापा और पेट की चर्बी कैसे रोकें?",
    title_ar: "كيفية الوقاية من السمنة والدهون الحشوية",
    icon: "user-x",
    color: "amber",
    keySummary: "Visceral belly fat surrounds internal organs and secretes inflammatory cytokines. Prevent it by eating whole unprocessed foods, avoiding liquid sugars, and increasing daily NEAT movement.",
    actionSteps: [
      "Focus on whole, single-ingredient foods with high satiety index (boiled potatoes, lean poultry, eggs, fish, oats, apples)",
      "Eliminate all liquid calories: sodas, sports drinks, sugary coffee beverages, and alcohol",
      "Prioritize non-exercise activity thermogenesis (NEAT): Take stairs, use a standing desk, walk while taking phone calls",
      "Practice mindful eating: Chew slowly, sit at a table without screens, and stop eating when 80% full (Hara Hachi Bu)",
      "Get 7-8 hours of sound sleep: Sleep deprivation elevates ghrelin (hunger hormone) and lowers leptin (satiety hormone)"
    ],
    dietaryProtocol: [
      "Aim for 25-30 grams of protein with every major meal to stimulate peptide YY and GLP-1 satiety signaling",
      "Fill half of your plate with high-volume, low-calorie fibrous vegetables (broccoli, salad greens, zucchini)",
      "Drink a large glass of water 15 minutes before meals to promote gastric stretch receptors",
      "Avoid ultra-processed hyper-palatable convenience foods that override biological fullness cues"
    ],
    biomarkersToTrack: [
      "Waist-to-Height Ratio (Keep your waist circumference to less than half your height)",
      "Body Mass Index (BMI 18.5 - 24.9 kg/m2)",
      "Body Fat Percentage (via DEXA scan or bioimpedance)",
      "Fasting Triglyceride-to-HDL Ratio (Target < 2.0)"
    ],
    references: [
      "Hall KD, et al. Ultra-Processed Diets Cause Excess Calorie Intake and Weight Gain. Cell Metab. 2019.",
      "The Lancet Commission on Obesity: Global Syndemic of Obesity, Undernutrition, and Climate Change.",
      "WHO Guidelines on Physical Activity and Sedentary Behaviour."
    ]
  },
  {
    id: "prevent-cholesterol",
    title: "How to Reduce Bad LDL Cholesterol",
    title_ml: "ചീത്ത കൊളസ്ട്രോൾ (LDL) എങ്ങനെ കുറയ്ക്കാം?",
    title_hi: "खराब एलडीएल (LDL) कोलेस्ट्रॉल कैसे कम करें?",
    title_ar: "كيفية خفض الكوليسترول الضار في الدم",
    icon: "activity",
    color: "purple",
    keySummary: "Lower atherogenic particles by cutting saturated animal fats, increasing soluble beta-glucan fiber (oats, psyllium, beans), and staying physically active.",
    actionSteps: [
      "Replace saturated fats (butter, ghee, fatty meats, palm oil) with polyunsaturated and monounsaturated plant fats",
      "Consume at least 10-15 grams of viscous SOLUBLE fiber daily (binds cholesterol in bile and excretes it via the bowel)",
      "Incorporate 2 grams of plant sterols and stanols daily (competes with intestinal cholesterol absorption)",
      "Perform 30-45 minutes of aerobic cardio 4-5 times a week to increase protective HDL and reduce triglycerides",
      "Completely quit smoking: Tobacco smoking chemically oxidizes LDL, making it vastly more atherogenic and toxic to arteries"
    ],
    dietaryProtocol: [
      "Eat 1 cup of cooked oatmeal or oat bran daily (rich in soluble beta-glucan)",
      "Add 1-2 tablespoons of psyllium husk or ground flaxseeds to morning smoothies or yogurt",
      "Eat 1 handful (30-40g) of raw almonds or walnuts daily",
      "Strictly limit full-fat dairy, heavy cream, processed sausages, and fried bakery pastries"
    ],
    biomarkersToTrack: [
      "Apolipoprotein B (ApoB) and Non-HDL Cholesterol",
      "Direct LDL-C (< 100 mg/dL for low risk; < 70 mg/dL for high risk; < 55 mg/dL for post-heart attack)",
      "Lipoprotein(a) [Lp(a)] — test at least once in your life to identify genetic risk",
      "Serum Triglycerides (< 150 mg/dL)"
    ],
    references: [
      "Grundy SM, et al. 2018 AHA/ACC Multisociety Guideline on the Management of Blood Cholesterol.",
      "Mach F, et al. 2019 ESC/EAS Guidelines for the Management of Dyslipidaemias. Eur Heart J. 2020.",
      "National Lipid Association (NLA) Scientific Statements on Soluble Fiber and Lipids."
    ]
  },
  {
    id: "prevent-kidney",
    title: "How to Protect Kidney Health",
    title_ml: "വൃക്കകളുടെ ആരോഗ്യം എങ്ങനെ സംരക്ഷിക്കാം?",
    title_hi: "किडनी को स्वस्थ कैसे रखें?",
    title_ar: "كيفية حماية صحة الكلى ووظائفها",
    icon: "shield",
    color: "teal",
    keySummary: "Keep renal microvessels healthy by controlling blood pressure, managing blood sugar, avoiding NSAID painkiller abuse, and drinking adequate clean water.",
    actionSteps: [
      "Maintain tight blood pressure control (< 120-130 mmHg systolic) — hypertension is the second leading cause of kidney failure",
      "Keep blood glucose in optimal ranges (HbA1c < 6.5-7.0%) — diabetes is the number one cause of end-stage renal disease",
      "NEVER take over-the-counter NSAID painkillers (Ibuprofen, Naproxen, Diclofenac) chronically without medical supervision",
      "Stay well-hydrated with clean water throughout the day (helps flush sodium and urea from the kidneys and prevents kidney stones)",
      "Limit dietary sodium to < 2,000 mg/day to lower intraglomerular capillary hypertension"
    ],
    dietaryProtocol: [
      "Avoid excessive mega-dose protein diets (> 2.0 g/kg/day) if pre-existing mild renal impairment exists",
      "Avoid dark colas and processed foods containing added inorganic phosphate food additives",
      "Consume plenty of fresh vegetables, berries, and plant-forward meals",
      "NEVER eat starfruit (carambola) if you have any degree of kidney dysfunction"
    ],
    biomarkersToTrack: [
      "Estimated Glomerular Filtration Rate (eGFR >= 90 mL/min/1.73m2 is normal; < 60 indicates CKD)",
      "Urine Albumin-to-Creatinine Ratio (uACR < 30 mg/g is normal; > 30 indicates microalbuminuria)",
      "Serum Creatinine and Blood Urea Nitrogen (BUN)",
      "Serum Electrolytes (Sodium, Potassium, Phosphorus, Calcium)"
    ],
    references: [
      "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease.",
      "National Kidney Foundation (NKF) KDOQI Guidelines.",
      "WHO Factsheet on Chronic Kidney Disease and Prevention."
    ]
  },
  {
    id: "prevent-liver",
    title: "How to Improve Liver Health",
    title_ml: "കരളിന്റെ ആരോഗ്യം എങ്ങനെ മെച്ചപ്പെടുത്താം?",
    title_hi: "लिवर को स्वस्थ और डिटॉक्स कैसे रखें?",
    title_ar: "كيفية تحسين صحة الكبد والوقاية من تليفه",
    icon: "disc",
    color: "emerald",
    keySummary: "Reverse hepatic steatosis by cutting out high-fructose corn syrup and alcohol, drinking black coffee, losing 7-10% of body weight, and exercising regularly.",
    actionSteps: [
      "Eliminate all sugar-sweetened beverages and high-fructose corn syrups (fructose is metabolized exclusively in the liver directly into fat)",
      "Drink 2 to 3 cups of filtered black coffee daily (coffee consumption is strongly backed by hepatologists to reduce liver stiffness and lower fibrosis risk)",
      "Limit or completely eliminate alcohol intake (alcohol and obesity act synergistically to accelerate liver cirrhosis)",
      "Target a 7% to 10% weight loss if fatty liver is present (consistently leads to resolution of steatohepatitis and regression of liver fibrosis)",
      "Get vaccinated against Hepatitis A and Hepatitis B"
    ],
    dietaryProtocol: [
      "Adopt a Mediterranean diet rich in extra virgin olive oil, cruciferous vegetables, and wild fish",
      "Incorporate garlic, turmeric, green tea, and raw walnuts",
      "Avoid all untested herbal 'detox' supplements and teas (unregulated herbs are a leading cause of drug-induced toxic liver injury)",
      "Strictly avoid raw or undercooked shellfish/oysters to prevent deadly Vibrio vulnificus sepsis"
    ],
    biomarkersToTrack: [
      "Liver Transaminases: Alanine Aminotransferase (ALT < 30 U/L in men, < 19 U/L in women) and AST",
      "FIB-4 Index (calculated from age, AST, ALT, platelets to stage fibrosis)",
      "Abdominal Ultrasound or Transient Elastography (FibroScan CAP score)"
    ],
    references: [
      "Rinella ME, et al. AASLD Practice Guidance on NAFLD/MASLD. Hepatology. 2023.",
      "European Association for the Study of the Liver (EASL) Clinical Practice Guidelines on Fatty Liver.",
      "New England Journal of Medicine Review: Pathogenesis and Management of Metabolic Liver Disease."
    ]
  },
  {
    id: "prevent-mental",
    title: "How to Improve Mental Health & Resilience",
    title_ml: "മാനസികാരോഗ്യവും കരുത്തും എങ്ങനെ മെച്ചപ്പെടുത്താം?",
    title_hi: "मानसिक स्वास्थ्य और मानसिक मजबूती कैसे बढ़ाएं?",
    title_ar: "كيفية تعزيز الصحة النفسية والمرونة العقلية",
    icon: "smile",
    color: "indigo",
    keySummary: "Build emotional stability and counter depression/anxiety through 150 minutes of aerobic exercise, 7-8 hours of sleep, morning sunlight, mindfulness, and strong social connections.",
    actionSteps: [
      "Exercise daily: 30-40 minutes of aerobic movement stimulates Brain-Derived Neurotrophic Factor (BDNF) and endorphins, matching the efficacy of mild antidepressants in clinical trials",
      "Step outside into natural morning sunlight for 15-20 minutes within an hour of waking (anchors circadian rhythms and stimulates serotonin)",
      "Practice daily Box Breathing (4 seconds in, 4 hold, 4 out, 4 hold) or meditation to downregulate sympathetic hyperarousal",
      "Maintain deep, authentic human relationships: Social connection is the single greatest predictor of longevity and happiness (Harvard Study of Adult Development)",
      "Establish a strict 'digital sunset': Turn off work emails and emotionally charged news feeds at least 1-2 hours before sleep"
    ],
    dietaryProtocol: [
      "Nourish the Gut-Brain Axis: Eat 30 different plant foods weekly (vegetables, berries, legumes, nuts, seeds)",
      "Incorporate unpasteurized fermented probiotic foods (kefir, plain yogurt, kimchi) to support neurotransmitter precursors",
      "Consume cold-water fatty fish rich in Omega-3 EPA/DHA (proven adjunctive mood stabilizer)",
      "Eliminate excessive caffeine and avoid alcohol as a sedative"
    ],
    biomarkersToTrack: [
      "Sleep quality and REM/Deep sleep duration (via wearable or sleep diary)",
      "Heart Rate Variability (HRV — higher HRV indicates strong parasympathetic vagal tone)",
      "Validated screening scores: PHQ-9 (Depression) and GAD-7 (Anxiety) self-checkups"
    ],
    references: [
      "American Psychological Association (APA) Stress and Resilience Guidelines.",
      "Waldinger RJ, Schulz MS. The Good Life: Lessons from the World's Longest Scientific Study of Happiness. Harvard.",
      "World Health Organization (WHO) Comprehensive Mental Health Action Plan."
    ]
  },
  {
    id: "prevent-cancer",
    title: "How to Reduce Cancer Risk",
    title_ml: "കാൻസർ സാധ്യത എങ്ങനെ കുറയ്ക്കാം?",
    title_hi: "कैंसर के खतरे को कैसे कम करें?",
    title_ar: "كيفية تقليل مخاطر الإصابة بالسرطان",
    icon: "ribbon",
    color: "rose",
    keySummary: "Over 40% of all cancers are preventable. Zero tobacco, zero tanning beds, HPV and Hepatitis B vaccinations, limiting alcohol, eating high-fiber diets, and age-based screening tests save lives.",
    actionSteps: [
      "Never smoke or use tobacco in any form (tobacco causes at least 15 different types of cancer, not just lung cancer)",
      "Get vaccinated against cancer-causing viruses: HPV vaccine (prevents cervical, anal, and throat cancers) and Hepatitis B vaccine (prevents liver cancer)",
      "Stay up to date with routine screening tests: Colonoscopy/FIT at age 45, Mammograms at age 40-50, and Pap/HPV smears at age 21-25",
      "Practice sun safety: Apply SPF 30+ broad-spectrum sunscreen, seek shade between 10 AM and 4 PM, and NEVER use indoor UV tanning beds",
      "Limit alcohol consumption strictly (alcohol is classified by WHO as a Group 1 human carcinogen for breast, colon, esophageal, and liver cancers)"
    ],
    dietaryProtocol: [
      "Eliminate or strictly limit processed meats (bacon, sausages, hot dogs, cold cuts) — classified as Group 1 carcinogens",
      "Limit red meat intake to less than 350-500 grams cooked per week",
      "Eat at least 35 grams of plant fiber daily (protects against colorectal cancer by binding toxins and producing butyrate)",
      "Consume cruciferous vegetables (broccoli, Brussels sprouts) rich in sulforaphane to aid DNA damage repair"
    ],
    biomarkersToTrack: [
      "Age-appropriate screening completion (Colonoscopy every 10 years or FIT annually, Mammography biennial)",
      "Fecal Immunochemical Test (FIT) / Stool DNA",
      "Low-Dose Chest CT for high-risk smokers aged 50-80"
    ],
    references: [
      "World Cancer Research Fund / American Institute for Cancer Research (AICR) Diet, Nutrition, Physical Activity and Cancer: A Global Perspective.",
      "American Cancer Society (ACS) Guidelines on Nutrition and Physical Activity for Cancer Prevention.",
      "World Health Organization (WHO) Global Cancer Prevention Report."
    ]
  },
  {
    id: "prevent-immunity",
    title: "How to Improve Immunity Naturally",
    title_ml: "രോഗപ്രതിരോധശേഷി സ്വാഭാവികമായി എങ്ങനെ വർദ്ധിപ്പിക്കാം?",
    title_hi: "इम्यूनिटी (रोग प्रतिरोधक क्षमता) स्वाभाविक रूप से कैसे बढ़ाएं?",
    title_ar: "كيفية تقوية المناعة الطبيعية للجسم",
    icon: "shield-check",
    color: "cyan",
    keySummary: "True immune resilience requires deep sleep, regular moderate exercise, adequate Vitamin D (30-50 ng/mL), Zinc, Vitamin C, gut microbiome diversity, and up-to-date immunizations.",
    actionSteps: [
      "Prioritize 7 to 8 hours of restorative sleep nightly: During sleep, the immune system releases protective cytokines; chronic sleep deprivation cuts antibody responses in half",
      "Engage in regular moderate aerobic exercise (30-45 minutes brisk walking): Enhances circulation of Natural Killer (NK) cells and immunoglobulins",
      "Keep all recommended adult and childhood vaccinations up-to-date (vaccines train adaptive T and B memory cells safely)",
      "Wash hands properly with soap and warm water for 20 seconds, especially before eating and after being in crowded public areas",
      "Manage chronic emotional stress: Sustained high cortisol suppresses circulating lymphocyte counts and antibody production"
    ],
    dietaryProtocol: [
      "Optimize Vitamin D levels: Maintain serum 25(OH)D between 30 and 50 ng/mL through safe sun and D3 supplements",
      "Eat Vitamin C rich foods daily (guavas, oranges, bell peppers, kiwis) to support epithelial barrier integrity and leukocyte chemotaxis",
      "Consume Zinc-rich foods (pumpkin seeds, lentils, shellfish, eggs) essential for T-lymphocyte development and thymic hormone function",
      "Consume garlic, ginger, and turmeric containing active antimicrobial and immunomodulatory organosulfur compounds"
    ],
    biomarkersToTrack: [
      "Serum 25-Hydroxyvitamin D [25(OH)D] (Target 30 - 50 ng/mL)",
      "Complete Blood Count (CBC with differential: Absolute Neutrophil and Lymphocyte counts)",
      "Serum Ferritin and Zinc levels"
    ],
    references: [
      "Calder PC, et al. Optimal Nutritional Status for a Well-Functioning Immune System is an Important Factor to Protect against Viral Infections. Nutrients. 2020.",
      "Nieman DC, Wentz LM. The Compelling Link between Physical Activity and the Body's Defense System. J Sport Health Sci. 2019.",
      "World Health Organization (WHO) Vaccines and Immunization Bulletin."
    ]
  }
];

