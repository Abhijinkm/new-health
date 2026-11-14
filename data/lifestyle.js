/**
 * HEALTHCARE FOR YOU - Category A: Lifestyle Diseases
 */
module.exports = [
  {
    id: "type-1-diabetes",
    name: "Type 1 Diabetes",
    name_ml: "ടൈപ്പ് 1 പ്രമേഹം",
    name_hi: "टाइप 1 मधुमेह",
    name_ar: "داء السكري من النوع 1",
    category: "lifestyle",
    badge: "Autoimmune Condition",
    icon: "droplet",
    shortDesc: "An autoimmune disease where the immune system destroys insulin-producing beta cells in the pancreas.",
    whatIsIt: "Type 1 diabetes is a chronic autoimmune condition in which the pancreas produces little or no insulin. Insulin is a critical hormone that allows glucose to enter cells to produce energy. Unlike Type 2 diabetes, Type 1 is not caused by diet or lifestyle habits, though lifestyle management is vital to prevent severe complications.",
    causes: [
      "Autoimmune destruction of pancreatic beta cells by self-reactive T-lymphocytes",
      "Genetic susceptibility (HLA-DR3, HLA-DR4 alleles)",
      "Environmental triggers such as enterovirus infections in genetically predisposed individuals",
      "Idiopathic triggers triggering sudden onset in children and young adults"
    ],
    symptoms: [
      "Severe unquenchable thirst (Polydipsia)",
      "Frequent heavy urination, including new bedwetting in children (Polyuria)",
      "Rapid unintentional weight loss despite ravenous appetite (Polyphagia)",
      "Extreme exhaustion, weakness, and mood irritability",
      "Fruity breath odor (acetone scent) indicating ketone buildup",
      "Blurred vision and frequent fungal/yeast infections"
    ],
    warningSigns: [
      "Diabetic Ketoacidosis (DKA): Deep rapid breathing (Kussmaul breathing), nausea, vomiting, abdominal pain",
      "Confusion, lethargy, or loss of consciousness",
      "Blood glucose reading over 300 mg/dL with high urine ketones"
    ],
    riskFactors: [
      "Family history: Parent or sibling with Type 1 Diabetes",
      "Genetics: Presence of specific high-risk HLA genes",
      "Geography: Higher incidence further from the equator (Northern Europe)",
      "Age: Peaks in early childhood (ages 4-7) and early adolescence (ages 10-14)"
    ],
    bodyImpact: "Without insulin, glucose remains trapped in circulation while cells starve. The body breaks down fat and muscle for energy, producing toxic acidic ketones. Chronic hyperglycemia damages capillaries in the retina (retinopathy), kidney glomeruli (nephropathy), peripheral nerves (neuropathy), and accelerates cardiovascular atherosclerosis.",
    diagnosis: [
      "Fasting Plasma Glucose (FPG) >= 126 mg/dL (7.0 mmol/L)",
      "Glycated Hemoglobin (HbA1c) >= 6.5%",
      "Random Plasma Glucose >= 200 mg/dL with classic hyperglycemic symptoms",
      "Autoantibody Testing: GAD65, IA-2, ZnT8, and Islet Cell Antibodies (ICA)",
      "Low or undetectable C-peptide levels confirming lack of endogenous insulin"
    ],
    treatments: [
      "Lifelong exogenous insulin therapy via multiple daily injections (MDI) or Continuous Subcutaneous Insulin Infusion (Insulin Pump)",
      "Continuous Glucose Monitoring (CGM) systems for real-time interstitial glucose tracking",
      "Carbohydrate counting and insulin-to-carbohydrate ratio dosing",
      "Emergency Glucagon rescue kits for severe hypoglycemia"
    ],
    prevention: "Currently, Type 1 diabetes cannot be prevented. However, secondary prevention focuses on strict glycemic control (HbA1c < 7.0%) to prevent microvascular and macrovascular complications through daily monitoring, balanced diet, and structured physical activity.",
    safeFoods: [
      "Non-starchy vegetables (spinach, broccoli, cauliflower, cucumbers)",
      "Lean protein sources (skinless poultry, tofu, eggs, fish, lentils)",
      "Low glycemic complex carbohydrates (quinoa, steel-cut oats, wild rice)",
      "Healthy plant fats (avocados, extra virgin olive oil, walnuts, chia seeds)",
      "High fiber berries (blueberries, strawberries, raspberries)"
    ],
    avoidFoods: [
      "Refined sugary beverages (sodas, sweetened iced teas, fruit nectars)",
      "Ultra-processed packaged snacks and trans-fat baked goods",
      "Simple high-fructose syrups and candy",
      "Unmeasured excessive refined carbohydrates that cause sharp glycemic spikes"
    ],
    exercises: [
      "Brisk walking (30 minutes daily, checking blood sugar before and after)",
      "Light resistance and bodyweight training to increase insulin sensitivity",
      "Swimming and cycling with accessible fast-acting glucose tablets on hand",
      "Gentle yoga and breathing exercises for stress and cortisol regulation"
    ],
    lifestyle: [
      "Check glucose before driving, exercising, and before bedtime",
      "Always carry rapid-acting glucose (glucose tablets or juice) for hypoglycemia",
      "Wear medical identification jewelry indicating Type 1 Diabetes",
      "Inspect feet daily for cuts, blisters, or skin breaks"
    ],
    whenToConsult: "Seek EMERGENCY CARE immediately if experiencing nausea, vomiting with abdominal pain, acetone breath, blood sugar over 250 mg/dL with positive ketones, or hypoglycemia unresponsive to oral glucose.",
    faqs: [
      {
        q: "Can Type 1 diabetes be cured with diet or herbs?",
        a: "No. Type 1 diabetes is an autoimmune destruction of insulin-producing cells. Insulin replacement is essential for life and cannot be replaced by herbs or dietary changes alone."
      },
      {
        q: "Can a person with Type 1 diabetes exercise safely?",
        a: "Yes, regular exercise is encouraged. Blood sugar should be monitored before and after exercise, and insulin or carb intake adjusted to prevent hypoglycemia."
      }
    ],
    references: [
      "American Diabetes Association (ADA) Standards of Medical Care in Diabetes 2024",
      "International Society for Pediatric and Adolescent Diabetes (ISPAD) Clinical Practice Consensus Guidelines",
      "World Health Organization (WHO) Diabetes Factsheets"
    ]
  },
  {
    id: "type-2-diabetes",
    name: "Type 2 Diabetes",
    name_ml: "ടൈപ്പ് 2 പ്രമേഹം",
    name_hi: "टाइप 2 मधुमेह",
    name_ar: "داء السكري من النوع 2",
    category: "lifestyle",
    badge: "High Prevalence",
    icon: "droplet",
    shortDesc: "A metabolic disorder characterized by chronic hyperglycemia resulting from progressive insulin resistance and beta-cell dysfunction.",
    whatIsIt: "Type 2 diabetes is a chronic medical condition where the pancreas produces insulin, but the body's cells fail to respond effectively to it (insulin resistance). Over time, glucose accumulates in the bloodstream, damaging blood vessels, nerves, kidneys, and eyes if left unmanaged.",
    causes: [
      "Progressive cellular insulin resistance combined with insufficient compensatory insulin secretion",
      "Excess visceral and abdominal adiposity that releases inflammatory cytokines",
      "Genetic predisposition and strong family history",
      "Sedentary lifestyle and lack of regular muscular contraction",
      "Diet high in ultra-processed carbohydrates and refined sugars"
    ],
    symptoms: [
      "Frequent urination (Polyuria), especially at night",
      "Persistent excessive thirst (Polydipsia)",
      "Unexplained fatigue and lethargy",
      "Blurred or fluctuating vision",
      "Slow-healing cuts, bruises, or recurring infections",
      "Numbness, tingling, or burning in hands and feet (Peripheral Neuropathy)"
    ],
    warningSigns: [
      "Hyperosmolar Hyperglycemic State (HHS): Blood sugar > 600 mg/dL with severe dehydration and confusion",
      "Sudden chest pain, shortness of breath, or silent heart attack signs",
      "Non-healing diabetic foot ulcer with signs of infection"
    ],
    riskFactors: [
      "Body Mass Index (BMI) >= 25 kg/m2 (or >= 23 kg/m2 in Asian populations)",
      "Age 45 or older, though increasingly diagnosed in young adults",
      "History of Gestational Diabetes or giving birth to a baby > 9 lbs",
      "Polycystic Ovary Syndrome (PCOS)",
      "High blood pressure (>= 140/90 mmHg) or high triglycerides"
    ],
    bodyImpact: "High circulating glucose causes systemic endothelial dysfunction, stiffens arteries, causes microvascular ischemia leading to diabetic retinopathy, nephropathy, peripheral neuropathy, and increases heart attack and stroke risk by 2 to 4 fold.",
    diagnosis: [
      "Fasting Blood Glucose >= 126 mg/dL (7.0 mmol/L) on two separate occasions",
      "Hemoglobin A1c (HbA1c) >= 6.5%",
      "Oral Glucose Tolerance Test (OGTT) 2-hour blood sugar >= 200 mg/dL",
      "Random blood sugar >= 200 mg/dL with classic hyperglycemia symptoms"
    ],
    treatments: [
      "First-line pharmacotherapy: Metformin (reduces hepatic glucose production)",
      "SGLT2 inhibitors (promote urinary glucose excretion and renal protection)",
      "GLP-1 receptor agonists (enhance incretin effect, delay gastric emptying, reduce weight)",
      "DPP-4 inhibitors, Sulfonylureas, or Basal Insulin when indicated",
      "Intensive lifestyle therapy: Medical Nutrition Therapy (MNT) and structured exercise"
    ],
    prevention: "Type 2 diabetes is up to 80% preventable through sustained weight loss of 5-7% of initial body weight, 150 minutes of weekly moderate exercise, replacing refined grains with whole grains, and eliminating sugary beverages.",
    safeFoods: [
      "High soluble fiber foods (oats, barley, psyllium, lentils, chickpeas)",
      "Non-starchy cruciferous vegetables (spinach, fenugreek/methi, broccoli, bitter gourd)",
      "Lean protein sources (fish, legumes, skinless chicken breast, Greek yogurt)",
      "Nuts and seeds (walnuts, almonds, flaxseeds, chia seeds)",
      "Cinnamon, apple cider vinegar, and green leafy greens"
    ],
    avoidFoods: [
      "Sugar-sweetened beverages, sodas, and canned fruit juices",
      "Refined carbohydrates (white bread, white rice, pastries, maida)",
      "Deep-fried fast foods containing industrial trans fats",
      "High-sugar desserts, confectioneries, and sweet packaged breakfast cereals"
    ],
    exercises: [
      "Brisk walking (45 minutes, 5 days per week, especially 15 minutes after meals)",
      "Resistance training (squats, resistance bands, lunges 2-3 times weekly)",
      "Stationary cycling or water aerobics for joint-friendly cardio",
      "Post-meal light strolls to blunt postprandial glucose surges"
    ],
    lifestyle: [
      "Self-monitor blood glucose as recommended by physician",
      "Perform annual dilated eye examinations and comprehensive diabetic foot checks",
      "Aim for 7 to 8 hours of restorative sleep to prevent cortisol-driven insulin spikes",
      "Cease all tobacco use immediately"
    ],
    whenToConsult: "Consult your doctor if your blood sugar is consistently > 200 mg/dL, if you notice numbness or a sore on your foot, or experience sudden visual changes.",
    faqs: [
      {
        q: "Can Type 2 diabetes be put into remission?",
        a: "Yes. Clinical trials like the DiRECT study show that significant weight loss (10-15 kg) through structured calorie-controlled nutrition can lead to normal glucose levels without medications in many newly diagnosed individuals."
      },
      {
        q: "Does eating sugar directly cause diabetes?",
        a: "Sugar alone does not directly cause diabetes, but excessive caloric intake from added sugars leads to visceral weight gain, liver fat accumulation, and insulin resistance."
      }
    ],
    references: [
      "American Diabetes Association (ADA) Standards of Care in Diabetes 2024",
      "World Health Organization (WHO) Global Report on Diabetes",
      "Lancet Diabetes & Endocrinology DiRECT Study on Diabetes Remission"
    ]
  },
  {
    id: "hypertension",
    name: "High Blood Pressure (Hypertension)",
    name_ml: "ഉയർന്ന രക്തസമ്മർദ്ദം (ഹൈപ്പർടെൻഷൻ)",
    name_hi: "उच्च रक्तचाप (हाइपरटेंशन)",
    name_ar: "ارتفاع ضغط الدم",
    category: "lifestyle",
    badge: "Silent Killer",
    icon: "activity",
    shortDesc: "A chronic cardiovascular condition where the pressure of blood pushing against the arterial walls is persistently elevated.",
    whatIsIt: "Hypertension, commonly known as high blood pressure, occurs when systemic arterial pressure remains chronically elevated (>= 130/80 mmHg). Because it rarely presents noticeable symptoms in early stages, it is termed the 'silent killer', quietly damaging blood vessels, kidneys, brain, and heart.",
    causes: [
      "Excessive dietary sodium consumption (> 2,300 mg/day)",
      "Arterial stiffness and loss of elastic recoil due to aging and vascular inflammation",
      "Overactive sympathetic nervous system and renin-angiotensin-aldosterone system (RAAS)",
      "Chronic emotional stress and elevated circulating catecholamines",
      "Sedentary lifestyle and obesity"
    ],
    symptoms: [
      "Often entirely asymptomatic ('silent killer')",
      "Occipital morning headaches in severe cases",
      "Dizziness, lightheadedness, or slight vertigo",
      "Shortness of breath during mild exertion",
      "Pulsatile tinnitus (whooshing sound in ears)",
      "Frequent unexplained nosebleeds (Epistaxis) in acute spikes"
    ],
    warningSigns: [
      "Hypertensive Crisis: Blood pressure > 180/120 mmHg",
      "Severe chest pain, crushing sensation, or shortness of breath",
      "Sudden neurological deficits: facial droop, arm weakness, slurred speech (Stroke warning)"
    ],
    riskFactors: [
      "Diet high in sodium and low in dietary potassium",
      "Chronic alcohol consumption and tobacco use",
      "Family history of early cardiovascular disease",
      "Obstructive Sleep Apnea (OSA)",
      "Chronic kidney disease and diabetes"
    ],
    bodyImpact: "Chronic hypertension forces the left ventricle to pump against higher resistance, causing Left Ventricular Hypertrophy (LVH), heart failure, accelerates coronary atherosclerosis, causes renal nephrosclerosis, and dramatically raises risk of ischemic stroke and cerebral hemorrhage.",
    diagnosis: [
      "Multiple resting blood pressure measurements on at least 2 separate occasions",
      "Classification according to AHA/ACC guidelines: Normal (< 120/80), Elevated (120-129/<80), Stage 1 (130-139/80-89), Stage 2 (>= 140/90 mmHg)",
      "24-hour Ambulatory Blood Pressure Monitoring (ABPM) to rule out white-coat hypertension",
      "Serum electrolytes, creatinine, lipid profile, and urine albumin-to-creatinine ratio",
      "Electrocardiogram (ECG) to assess cardiac hypertrophy"
    ],
    treatments: [
      "DASH (Dietary Approaches to Stop Hypertension) dietary therapy",
      "ACE Inhibitors (e.g., Lisinopril, Ramipril) or ARBs (e.g., Losartan, Telmisartan)",
      "Calcium Channel Blockers (e.g., Amlodipine)",
      "Thiazide-like Diuretics (e.g., Chlorthalidone, Hydrochlorothiazide)",
      "Regular home blood pressure monitoring"
    ],
    prevention: "Hypertension can be prevented and managed by limiting daily sodium to < 1,500 mg, eating potassium-rich whole foods, maintaining normal body weight (BMI 18.5 - 24.9), exercising 150 minutes weekly, and practicing daily stress-reduction techniques.",
    safeFoods: [
      "Potassium-rich foods: Bananas, spinach, sweet potatoes, coconut water, white beans",
      "Magnesium-rich foods: Pumpkin seeds, almonds, dark leafy greens",
      "Garlic and onions (natural vasodilatory organosulfur compounds)",
      "Beetroots and beetroot juice (dietary nitrates that convert to nitric oxide)",
      "Hibiscus tea and low-fat dairy products"
    ],
    avoidFoods: [
      "Processed canned meats, cured bacon, sausages, and salted pickles",
      "High-sodium fast foods, packaged ramen, and salty snacks",
      "Excessive licorice root (contains glycyrrhizin which raises BP)",
      "Excessive alcohol intake and heavy energy drinks with synthetic caffeine"
    ],
    exercises: [
      "Aerobic exercise: Brisk walking, swimming, light jogging 30-40 minutes daily",
      "Isometric handgrip training (proven to lower resting systolic BP by 5-10 mmHg)",
      "Deep diaphragmatic breathing exercises (6 breaths per minute for 5 minutes twice daily)",
      "Gentle stretching and mobility work"
    ],
    lifestyle: [
      "Measure blood pressure at the same time each morning while seated calmly",
      "Restrict daily sodium intake by avoiding table salt shaker",
      "Screen for sleep apnea if loud snoring or daytime somnolence is present",
      "Limit caffeine intake to moderate levels"
    ],
    whenToConsult: "Call emergency services if BP exceeds 180/120 mmHg, or if high BP is accompanied by severe chest pressure, sudden severe headache, or numbness/speech difficulty.",
    faqs: [
      {
        q: "If I feel completely fine, do I still need to take blood pressure medication?",
        a: "Yes. High blood pressure is notoriously silent. The absence of symptoms does not mean blood vessels and kidneys are protected. Never stop antihypertensives without consulting your physician."
      },
      {
        q: "How fast can lifestyle changes reduce blood pressure?",
        a: "Adopting the DASH diet, reducing sodium, and walking daily can lower systolic blood pressure by 8 to 14 mmHg within 2 to 4 weeks."
      }
    ],
    references: [
      "AHA/ACC Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults",
      "World Health Organization (WHO) Hypertension Factsheet 2023",
      "European Society of Cardiology (ESC) / ESH Hypertension Guidelines"
    ]
  },
  {
    id: "heart-disease",
    name: "Heart Disease (Cardiovascular Disease)",
    name_ml: "ഹൃദ്രോഗം (കാർഡിയോവാസ്കുലർ അസുഖങ്ങൾ)",
    name_hi: "हृदय रोग (कार्डियोवास्कुलर बीमारी)",
    name_ar: "أمراض القلب والأوعية الدموية",
    category: "lifestyle",
    badge: "Global #1 Killer",
    icon: "heart",
    shortDesc: "A broad spectrum of conditions affecting heart structure and blood vessels, leading to heart attacks and heart failure.",
    whatIsIt: "Heart disease encompasses disorders affecting the cardiac muscle, valves, electrical conduction system, and coronary arteries. Atherosclerotic coronary heart disease—the buildup of fatty plaques that restrict blood flow to heart muscle—is the leading cause of mortality worldwide.",
    causes: [
      "Atherosclerosis: Progressive accumulation of oxidized LDL cholesterol and calcium in coronary walls",
      "Endothelial injury caused by smoking toxins, hypertension, and advanced glycation end-products",
      "Chronic systemic inflammation indicated by elevated high-sensitivity CRP",
      "Genetic hypercholesterolemia and lipoprotein(a) elevations"
    ],
    symptoms: [
      "Angina pectoris: Pressure, squeezing, fullness, or pain in the center of the chest",
      "Pain or discomfort radiating to one or both arms, neck, jaw, shoulder, or upper stomach",
      "Shortness of breath with minimal exertion or when lying flat (orthopnea)",
      "Cold sweats, unexpected dizziness, or lightheadedness",
      "Unusual fatigue, particularly noticed in women as an atypical warning sign"
    ],
    warningSigns: [
      "ACUTE MYOCARDIAL INFARCTION (Heart Attack): Crushing chest pain lasting > 5 minutes, nausea, diaphoresis",
      "Cardiac arrest: Sudden collapse, unresponsiveness, loss of normal breathing",
      "Acute pulmonary edema: Sudden extreme breathlessness with pink frothy sputum"
    ],
    riskFactors: [
      "Elevated ApoB and LDL cholesterol (> 100 mg/dL or > 70 mg/dL in high risk)",
      "Cigarette smoking and exposure to secondhand smoke",
      "Uncontrolled diabetes mellitus and insulin resistance",
      "Physical inactivity and chronic psychological distress",
      "Premature family history of coronary heart disease (< 55 in men, < 65 in women)"
    ],
    bodyImpact: "Myocardial ischemia damages cardiac myocytes, leading to scar tissue formation, reduced ejection fraction, congestive heart failure, lethal arrhythmias (ventricular fibrillation), and sudden cardiac death.",
    diagnosis: [
      "12-Lead Electrocardiogram (ECG) for ischemic ST changes or prior infarction",
      "High-sensitivity cardiac troponin I/T blood markers",
      "Coronary Artery Calcium (CAC) CT scan for asymptomatic risk stratification",
      "Echocardiography to measure ejection fraction and wall motion abnormalities",
      "Coronary Angiography (Cardiac Catheterization) for definitive plaque localization"
    ],
    treatments: [
      "Emergency Percutaneous Coronary Intervention (PCI) with drug-eluting stents",
      "Coronary Artery Bypass Graft (CABG) surgery",
      "Lipid-lowering therapy: High-intensity Statins, Ezetimibe, PCSK9 inhibitors",
      "Antiplatelet therapy: Aspirin, Clopidogrel, Ticagrelor",
      "Beta-blockers, ACE inhibitors, and structured Cardiac Rehabilitation programs"
    ],
    prevention: "Primary prevention relies on the Mediterranean diet, maintaining healthy blood pressure, achieving LDL < 70-100 mg/dL, zero tobacco use, 150 minutes of weekly aerobic exercise, and maintaining healthy body weight.",
    safeFoods: [
      "Fatty cold-water fish rich in Omega-3 EPA/DHA (salmon, mackerel, sardines)",
      "Extra virgin olive oil as the primary dietary fat",
      "A variety of colorful vegetables, berries, and legumes",
      "Raw tree nuts (walnuts, almonds) and whole grains (oats, brown rice)",
      "Garlic, green tea, and dark chocolate (> 70% cocoa in moderation)"
    ],
    avoidFoods: [
      "Commercial baked goods with partially hydrogenated oils (trans fats)",
      "Deep-fried fast foods and processed charcuterie (sausages, hot dogs)",
      "Refined sugar, sugary sodas, and candy",
      "Heavy intake of fatty red meats and tropical oils (palm oil)"
    ],
    exercises: [
      "Gradual aerobic conditioning: 30 minutes brisk walking or cycling most days",
      "Supervised cardiac rehabilitation protocols for post-event recovery",
      "Low-impact resistance band exercises",
      "Avoid sudden heavy isometric straining if severe coronary disease is present"
    ],
    lifestyle: [
      "Completely quit smoking and avoid all e-cigarettes/vaping",
      "Maintain a sleep schedule of 7 to 8 hours nightly",
      "Practice daily stress moderation through mindfulness or hobbies",
      "Know your cardiovascular ABCs: A1c, Blood pressure, Cholesterol"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY for new or worsening chest pressure, pain spreading to the arm or jaw, or unexplained sudden breathlessness. Every minute counts.",
    faqs: [
      {
        q: "Do women experience different heart attack symptoms than men?",
        a: "Yes. While chest pressure remains common, women are more likely to experience atypical symptoms including shortness of breath, profound fatigue, nausea, back or jaw pain without classic crushing chest discomfort."
      },
      {
        q: "Can heart disease be reversed once plaques form?",
        a: "Intensive lifestyle therapy combined with lipid-lowering medications can stabilize vulnerable plaques, reduce arterial inflammation, and promote regression of coronary stenosis as shown in modern clinical imaging trials."
      }
    ],
    references: [
      "American Heart Association (AHA) Primary Prevention Guidelines 2023",
      "European Society of Cardiology (ESC) Guidelines on Cardiovascular Disease Prevention",
      "World Heart Federation Global Heart Disease Statistics"
    ]
  },
  {
    id: "cad",
    name: "Coronary Artery Disease (CAD)",
    name_ml: "കൊറോണറി ആർട്ടറി രോഗം (സി.എ.ഡി)",
    name_hi: "कोरोनरी धमनी रोग (सीएडी)",
    name_ar: "مرض الشريان التاجي",
    category: "lifestyle",
    badge: "Ischemic Heart Disease",
    icon: "heart",
    shortDesc: "Narrowing or blockage of the coronary arteries caused by atheromatous plaque buildup, starving heart muscle of oxygen.",
    whatIsIt: "Coronary Artery Disease (CAD) is the most common type of heart disease. It develops when the major blood vessels that supply the heart muscle with blood, oxygen, and nutrients become narrowed or hardened by cholesterol-containing deposits (plaques) and chronic arterial inflammation.",
    causes: [
      "Atherosclerotic plaque accumulation in coronary arterial walls",
      "Endothelial dysfunction from smoking, hypertension, and oxidative stress",
      "High levels of low-density lipoprotein (LDL) and triglycerides",
      "Elevated inflammatory biomarkers including hs-CRP and homocysteine"
    ],
    symptoms: [
      "Stable angina: Predictable chest discomfort during physical exertion relieved by rest",
      "Shortness of breath on mild climbing or brisk walking",
      "Sensation of tightness, burning, or heaviness across the chest",
      "Pain in left arm, neck, or lower jaw",
      "Fatigue and reduced exercise tolerance"
    ],
    warningSigns: [
      "Unstable Angina: Chest pain occurring at rest or escalating in frequency and severity",
      "Acute coronary syndrome: Diaphoresis, nausea, dizziness with intense chest pressure",
      "Syncope (fainting) during exertion"
    ],
    riskFactors: [
      "Elevated LDL cholesterol and low HDL cholesterol",
      "High systolic and diastolic blood pressure",
      "Diabetes mellitus and metabolic syndrome",
      "Tobacco use and sedentary lifestyle",
      "Family history of premature CAD"
    ],
    bodyImpact: "CAD starves the myocardium of oxygenated blood. If a plaque ruptures, a blood clot forms instantaneously, occluding the artery and causing acute myocardial infarction, irreversible tissue necrosis, and life-threatening ventricular arrhythmias.",
    diagnosis: [
      "Coronary CT Angiography (CCTA) to visualize lumen narrowing",
      "Exercise or Pharmacological Stress Testing with ECG/Nuclear imaging",
      "Coronary Calcium Score (CAC) indicating plaque burden",
      "Invasive Coronary Angiogram",
      "Fractional Flow Reserve (FFR) during catheterization"
    ],
    treatments: [
      "Percutaneous Coronary Intervention (PCI) with drug-eluting stents",
      "Coronary Artery Bypass Grafting (CABG) for multi-vessel disease",
      "Dual antiplatelet therapy (Aspirin + P2Y12 inhibitor)",
      "Statins, Ezetimibe, and PCSK9 inhibitors to drive LDL < 55 mg/dL",
      "Beta-blockers and Nitroglycerin for angina relief"
    ],
    prevention: "Adhere to a strict Mediterranean diet, achieve an LDL cholesterol target below 70 mg/dL, keep blood pressure under 130/80 mmHg, maintain daily physical movement, and completely avoid all nicotine products.",
    safeFoods: [
      "Cold-water fatty fish (salmon, tuna, sardines) twice weekly",
      "Oat bran, chia seeds, and legumes rich in soluble beta-glucans",
      "Extra virgin olive oil, walnuts, and flaxseeds",
      "Cruciferous vegetables and berries loaded with polyphenols",
      "Plant sterol-fortified foods and leafy greens"
    ],
    avoidFoods: [
      "Commercial trans-fat margarine and fried bakery foods",
      "High-sodium processed meats and sausages",
      "Refined flour goods, added sugar syrups, and sweet sodas",
      "Fatty cuts of beef and pork with visible saturated fat"
    ],
    exercises: [
      "30 to 45 minutes of moderate-intensity continuous aerobic walking 5 days per week",
      "Low-impact cycling or elliptical training",
      "Supervised cardiac rehabilitation exercise protocols",
      "Gentle stretching and mobility routines"
    ],
    lifestyle: [
      "Carry sublingual nitroglycerin if prescribed for acute angina",
      "Stop smoking immediately and avoid all secondhand tobacco vapor",
      "Manage emotional stress and avoid explosive temper outbursts",
      "Weigh yourself regularly and monitor resting pulse"
    ],
    whenToConsult: "Seek IMMEDIATE emergency care if you have chest pain that does not resolve within 5 minutes of rest or after taking prescribed nitroglycerin.",
    faqs: [
      {
        q: "What is the difference between CAD and a heart attack?",
        a: "CAD is the long-term underlying disease where arteries become narrow and stiff. A heart attack is the acute event that happens when a narrowed artery gets completely blocked by a blood clot."
      },
      {
        q: "Can stents cure coronary artery disease?",
        a: "No. A stent opens an acute blockage at one specific spot, but does not stop CAD from developing elsewhere. Long-term medication and lifestyle changes are essential to prevent new blockages."
      }
    ],
    references: [
      "ACC/AHA Guidelines for the Diagnosis and Management of Patients with Stable Ischemic Heart Disease",
      "ESC Clinical Practice Guidelines for Chronic Coronary Syndromes 2024",
      "Mayo Clinic Cardiovascular Clinical Review"
    ]
  },
  {
    id: "obesity",
    name: "Obesity & Visceral Adiposity",
    name_ml: "അമിതവണ്ണവും പൊണ്ണത്തടിയും",
    name_hi: "मोटापा और अत्यधिक चर्बी",
    name_ar: "السمنة وزيادة الوزن",
    category: "lifestyle",
    badge: "Metabolic Risk",
    icon: "user-x",
    shortDesc: "A complex chronic disease characterized by excessive fat accumulation that impairs physiological function and metabolic health.",
    whatIsIt: "Obesity is a complex, multifactorial, relapsing chronic disease defined by abnormal or excessive adiposity, particularly visceral fat stored inside the abdominal cavity around vital organs. Visceral fat acts as an active endocrine organ, releasing inflammatory adipokines that drive cardiovascular and metabolic diseases.",
    causes: [
      "Chronic positive energy balance (hyper-palatable ultra-processed foods combined with low activity)",
      "Neuroendocrine disruption of appetite regulation (leptin resistance, ghrelin dysregulation)",
      "Genetic variations affecting metabolic rate and satiety signaling",
      "Sleep deprivation and chronic high cortisol leading to central fat deposition",
      "Side effects of certain medications (antipsychotics, steroids, beta-blockers)"
    ],
    symptoms: [
      "Elevated Body Mass Index (BMI >= 30 kg/m2, or >= 27.5 kg/m2 for Asian populations)",
      "High waist circumference (> 40 inches in men, > 35 inches in women)",
      "Exertional shortness of breath and decreased stamina",
      "Loud snoring, daytime sleepiness, and Obstructive Sleep Apnea",
      "Joint pain in knees, hips, and lower back due to excessive mechanical loading",
      "Acanthosis nigricans (velvety dark skin patches around neck and armpits)"
    ],
    warningSigns: [
      "Severe sleep apnea with nocturnal oxygen desaturation",
      "Development of non-alcoholic steatohepatitis (NASH) or metabolic liver fibrosis",
      "Severe exertional chest pain indicating occult coronary disease"
    ],
    riskFactors: [
      "Ultra-processed food environment and high intake of liquid calories",
      "Desk-bound sedentary occupations and excessive screen time",
      "Socioeconomic barriers to fresh nutrient-dense foods",
      "Depression, anxiety, and emotional comfort eating habits"
    ],
    bodyImpact: "Adipose tissue hypertrophy promotes macrophage infiltration and systemic low-grade inflammation. This accelerates atherogenesis, causes hepatic steatosis, drives insulin resistance, increases risk of 13 types of cancer, and damages weight-bearing cartilage.",
    diagnosis: [
      "BMI calculation (weight in kg divided by height in meters squared)",
      "Waist-to-Hip Ratio (WHR) and Waist Circumference measurement",
      "DEXA scan or Bioelectrical Impedance Analysis for body fat percentage",
      "Comprehensive metabolic panel: Fasting lipids, HbA1c, liver transaminases",
      "High-sensitivity C-reactive protein (hs-CRP)"
    ],
    treatments: [
      "Medical Nutrition Therapy (caloric deficit with high protein and micronutrient density)",
      "Modern Anti-Obesity Medications (GLP-1 receptor agonists e.g. Semaglutide, Tirzepatide)",
      "Bariatric / Metabolic Surgery (Sleeve gastrectomy, Gastric bypass) for BMI >= 40 or >= 35 with co-morbidities",
      "Behavioral lifestyle counseling and cognitive behavioral therapy for emotional eating",
      "Structured progressive physical activity plans"
    ],
    prevention: "Cultivate lifelong habits of eating whole unprocessed foods, eliminating sugary beverages, engaging in at least 200 minutes of weekly physical activity, limiting recreational screen time, and prioritizing 7-8 hours of sleep.",
    safeFoods: [
      "Lean protein sources (egg whites, poultry, Greek yogurt, legumes, tofu)",
      "High-volume, low-calorie cruciferous vegetables and green salads",
      "Whole fruits in moderate portions (apples, berries, citrus)",
      "Whole oats, quinoa, and high-fiber beans that enhance satiety",
      "Ample plain water, sparkling water with lemon, and unsweetened green tea"
    ],
    avoidFoods: [
      "High-fructose corn syrup sodas, milkshakes, and energy drinks",
      "Ultra-processed convenience foods, chips, and packaged bakery goods",
      "Deep-fried battered foods and heavy restaurant sauces",
      "Excessive alcohol calories and high-fat confectioneries"
    ],
    exercises: [
      "Low-impact cardiovascular exercise: Brisk walking, water aerobics, recumbent biking",
      "Full-body resistance training to preserve lean muscle mass during weight loss",
      "Daily NEAT (Non-Exercise Activity Thermogenesis): Standing desk, stairs, pacing",
      "Joint-friendly stretching and mobility exercises"
    ],
    lifestyle: [
      "Eat mindfully without screens and chew food slowly to perceive satiety signals",
      "Keep food logs or photo journals to raise dietary awareness",
      "Weigh yourself once a week under consistent conditions",
      "Build a supportive social environment for healthy cooking and walking"
    ],
    whenToConsult: "Consult a healthcare professional or bariatric physician if lifestyle attempts fail to prevent progressive weight gain, or if you develop snoring, chronic joint pain, or prediabetes.",
    faqs: [
      {
        q: "Is obesity just a matter of willpower?",
        a: "No. Modern neurobiology proves that obesity is a complex biological disease involving strong hormonal feedback loops in the brain (hypothalamus) that resist weight loss by increasing hunger and reducing metabolic rate."
      },
      {
        q: "How much weight loss is needed to see health improvements?",
        a: "Losing just 5% to 10% of total body weight produces dramatic clinical improvements in blood pressure, blood glucose, cholesterol levels, and liver fat."
      }
    ],
    references: [
      "World Health Organization (WHO) Obesity and Overweight Factsheet",
      "The Lancet Commission on Obesity 2023",
      "American Association of Clinical Endocrinology (AACE) Comprehensive Obesity Guidelines"
    ]
  },
  {
    id: "high-cholesterol",
    name: "High Cholesterol (Hyperlipidemia)",
    name_ml: "അമിത കൊളസ്ട്രോൾ (ഹൈപ്പർലിപിഡീമിയ)",
    name_hi: "उच्च कोलेस्ट्रॉल (हाइपरलिपिडिमिया)",
    name_ar: "ارتفاع الكوليسترول في الدم",
    category: "lifestyle",
    badge: "Atherogenic Danger",
    icon: "activity",
    shortDesc: "Elevated levels of low-density lipoprotein (LDL) cholesterol and triglycerides that build plaque in blood vessels.",
    whatIsIt: "High cholesterol is a metabolic disorder where excessive concentrations of atherogenic lipids—particularly Low-Density Lipoprotein (LDL-C) and Apolipoprotein B (ApoB)—circulate in the blood. These particles penetrate arterial endothelial walls, oxidize, and initiate inflammatory plaque deposits.",
    causes: [
      "High dietary intake of saturated and industrial trans fats",
      "Hepatic overproduction of VLDL cholesterol and impaired LDL receptor clearance",
      "Familial Hypercholesterolemia (monogenic mutation in LDLR, APOB, or PCSK9 genes)",
      "Physical inactivity and visceral obesity",
      "Secondary causes: Hypothyroidism, nephrotic syndrome, and chronic kidney disease"
    ],
    symptoms: [
      "Typically completely symptom-free until an acute cardiovascular event occurs",
      "Xanthelasma: Yellowish cholesterol deposits on inner eyelids in severe cases",
      "Tendon xanthomas: Firm nodules over Achilles tendons or knuckle tendons",
      "Arcus senilis: Grayish-white ring around the cornea in younger adults",
      "Claudication: Leg cramping during walking due to peripheral artery disease"
    ],
    warningSigns: [
      "Sudden angina chest pain during exertion",
      "Transient Ischemic Attack (mini-stroke): Temporary vision loss or limb weakness",
      "Severe acute pancreatitis triggered by extreme hypertriglyceridemia (> 500 mg/dL)"
    ],
    riskFactors: [
      "Diet heavy in red meat, full-fat dairy, palm oil, and processed bakery goods",
      "Lack of regular vigorous or moderate aerobic physical exercise",
      "Tobacco smoking (which lowers protective HDL and oxidizes LDL)",
      "Excessive alcohol intake (which dramatically elevates blood triglycerides)",
      "Strong family history of early heart attacks"
    ],
    bodyImpact: "Circulating atherogenic lipoproteins infiltrate the arterial intima, trigger macrophage foam cell formation, generate fibrous caps, calcify arterial walls, restrict blood flow, and set the stage for thrombosis upon plaque rupture.",
    diagnosis: [
      "Fasting Lipid Profile: Total Cholesterol, LDL-C, HDL-C, and Triglycerides",
      "Apolipoprotein B (ApoB) blood test (the most direct particle-count measure of atherogenicity)",
      "Lipoprotein(a) [Lp(a)] test (a powerful independent genetic risk marker)",
      "High-sensitivity C-Reactive Protein (hs-CRP) for vascular inflammation",
      "Coronary Calcium Score (CAC) via low-dose CT"
    ],
    treatments: [
      "Therapeutic Lifestyle Changes (TLC diet: high soluble fiber, low saturated fat)",
      "HMG-CoA Reductase Inhibitors (Statins e.g. Atorvastatin, Rosuvastatin)",
      "Cholesterol absorption inhibitor (Ezetimibe)",
      "PCSK9 monoclonal antibodies (Evolocumab, Alirocumab) or Inclisiran siRNA",
      "Prescription Omega-3 icosapent ethyl for severe hypertriglyceridemia"
    ],
    prevention: "Replace saturated fats with monounsaturated and polyunsaturated fats, consume at least 30 grams of fiber daily, engage in 150 minutes of weekly cardio, maintain healthy body fat percentage, and test lipid levels every 3-5 years starting in young adulthood.",
    safeFoods: [
      "Soluble fiber powerhouses: Oats, barley, psyllium husk, kidney beans, lentils",
      "Plant sterol and stanol enriched foods and soy products",
      "Fatty fish high in Omega-3 (salmon, mackerel, sardines)",
      "Tree nuts (almonds, walnuts) and seeds (chia, ground flaxseeds)",
      "Avocados, cold-pressed olive oil, and garlic"
    ],
    avoidFoods: [
      "Commercial fried snacks containing partially hydrogenated vegetable oils",
      "Fatty cuts of meat, sausages, cured meats, and organ meats",
      "Full-fat dairy, heavy whipping creams, butter, and ghee in excess",
      "Packaged cookies, pastries, and confectionery made with palm kernel oil"
    ],
    exercises: [
      "Moderate to high-intensity aerobic exercise (brisk walking, jogging, cycling, rowing)",
      "High-Intensity Interval Training (HIIT) to boost cardiopulmonary fitness",
      "Resistance training 2-3 times per week to improve metabolic clearance",
      "Daily brisk 10-minute walks after major meals"
    ],
    lifestyle: [
      "Quit smoking completely (HDL cholesterol rebounds within weeks of cessation)",
      "Strictly limit alcohol consumption to reduce hepatic triglyceride synthesis",
      "Get baseline blood lipid panels tested annually",
      "Maintain a consistent Mediterranean-style whole-food regimen"
    ],
    whenToConsult: "Schedule a medical consultation if your total cholesterol is > 200 mg/dL, LDL > 130 mg/dL (or > 70 mg/dL if diabetic/hypertensive), or triglycerides > 150 mg/dL.",
    faqs: [
      {
        q: "What is the difference between 'good' HDL and 'bad' LDL cholesterol?",
        a: "LDL carries cholesterol to tissues and can deposit it into arterial walls to form plaques. HDL carries excess cholesterol away from tissues back to the liver for excretion."
      },
      {
        q: "Do eggs drastically raise blood cholesterol?",
        a: "For most people, dietary cholesterol from eggs has minimal impact on blood LDL levels compared to saturated fats. However, moderation (1 egg per day) is recommended for people with diabetes or familial hypercholesterolemia."
      }
    ],
    references: [
      "AHA/ACC Multisociety Guideline on the Management of Blood Cholesterol",
      "National Heart, Lung, and Blood Institute (NHLBI) High Blood Cholesterol Guidelines",
      "European Atherosclerosis Society (EAS) Consensus Statements"
    ]
  },
  {
    id: "stroke",
    name: "Stroke (Cerebrovascular Accident)",
    name_ml: "പക്ഷാഘാതം (സ്ട്രോക്ക്)",
    name_hi: "स्ट्रोक (लकवा)",
    name_ar: "السكتة الدماغية",
    category: "lifestyle",
    badge: "Medical Emergency",
    icon: "alert-octagon",
    shortDesc: "A critical neurological emergency where blood supply to part of the brain is interrupted or reduced, depriving brain tissue of oxygen.",
    whatIsIt: "A stroke occurs when the blood flow to an area of the brain is cut off. Brain cells, deprived of oxygen and essential glucose, begin dying within minutes. The two primary types are Ischemic Stroke (caused by a blood clot occluding a cerebral artery, ~87% of cases) and Hemorrhagic Stroke (caused by a ruptured blood vessel leaking blood into cerebral tissue).",
    causes: [
      "Thrombosis or embolism: Blood clot formed locally or originating from the heart (Atrial Fibrillation)",
      "Cerebral vessel rupture due to long-standing severe uncontrolled hypertension",
      "Cerebral amyloid angiopathy or ruptured berry aneurysms / arteriovenous malformations (AVMs)",
      "Carotid artery atherosclerosis and plaque embolization"
    ],
    symptoms: [
      "F - FACE: One side of the face droops or is numb when trying to smile",
      "A - ARMS: One arm is weak or numb, drifting downward when both arms are raised",
      "S - SPEECH: Slurred speech, inability to speak, or difficulty comprehending speech",
      "T - TIME: Time to call emergency medical services immediately",
      "Sudden severe 'thunderclap' headache with no known cause",
      "Sudden loss of balance, vertigo, or sudden blindness/dimness in one eye"
    ],
    warningSigns: [
      "Transient Ischemic Attack (TIA): Temporary 'mini-stroke' symptoms lasting minutes to an hour that resolve completely — a major predictor of impending full stroke",
      "Sudden facial numbness, unilateral limb paralysis, acute confusion"
    ],
    riskFactors: [
      "Chronic uncontrolled high blood pressure (the single greatest modifiable risk factor)",
      "Atrial Fibrillation (cardiac arrhythmia causing intracardiac blood stasis)",
      "Diabetes mellitus and cigarette smoking",
      "High LDL cholesterol and carotid artery stenosis",
      "Obesity, sleep apnea, and heavy binge drinking"
    ],
    bodyImpact: "Ischemic brain cells die rapidly, resulting in focal neurological deficits depending on the affected vascular territory: contralateral hemiplegia, aphasia, cognitive impairment, emotional dysregulation, dysphagia, or death if brainstem centers are compromised.",
    diagnosis: [
      "Emergency Non-Contrast Head CT scan to rapidly differentiate Ischemic from Hemorrhagic stroke",
      "Brain MRI (Diffusion-Weighted Imaging) showing acute infarct core within minutes",
      "CT Angiography / MR Angiography of head and neck vessels",
      "Echocardiogram and Holter monitor to detect Atrial Fibrillation or cardiac source of emboli",
      "NIH Stroke Scale (NIHSS) neurological assessment"
    ],
    treatments: [
      "Emergency intravenous thrombolysis (IV Alteplase or Tenecteplase) within 4.5 hours of symptom onset for ischemic stroke",
      "Endovascular Mechanical Thrombectomy (clot retrieval catheter) up to 24 hours in selected large-vessel occlusions",
      "Surgical clipping or coiling for ruptured cerebral aneurysms",
      "Blood pressure lowering and reversal of anticoagulation for hemorrhagic stroke",
      "Comprehensive inpatient neurological, speech, and physical rehabilitation"
    ],
    prevention: "Up to 80% of strokes are preventable. Keep blood pressure below 130/80 mmHg, treat Atrial Fibrillation with anticoagulation, manage diabetes, quit smoking, maintain active physical fitness, and consume a low-sodium, high-potassium diet.",
    safeFoods: [
      "Potassium-rich vegetables and fruits (spinach, bananas, avocados, sweet potatoes)",
      "Whole grain oats, quinoa, brown rice providing steady sustained energy",
      "Cold-water fish providing neuroprotective Omega-3 fatty acids",
      "Berries rich in flavonoids (blueberries, blackberries)",
      "Extra virgin olive oil and green tea"
    ],
    avoidFoods: [
      "High-sodium cured meats, salted snacks, and canned soups that drive hypertension",
      "Trans fats and heavily deep-fried foods",
      "Heavy alcohol binge drinking (dramatically spikes hemorrhagic stroke risk)",
      "High-sugar desserts and sweetened beverages"
    ],
    exercises: [
      "Post-stroke physical therapy: Gait retraining, motor task practice, balance drills",
      "Preventive aerobic exercise: 30 minutes brisk walking 5 days a week",
      "Light resistance training to maintain neuromuscular coordination",
      "Gentle stretching and Tai Chi to prevent fall injuries"
    ],
    lifestyle: [
      "Memorize the B.E. F.A.S.T. stroke warning protocol (Balance, Eyes, Face, Arms, Speech, Time)",
      "Monitor blood pressure at home every morning",
      "Completely quit smoking and avoid tobacco smoke exposure",
      "Take prescribed anticoagulant or antiplatelet medications consistently"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES (911/112/999) IMMEDIATELY if anyone exhibits sudden face drooping, arm weakness, slurred speech, or sudden loss of balance. Do not wait for symptoms to improve.",
    faqs: [
      {
        q: "What does 'Time is Brain' mean during a stroke?",
        a: "During an acute ischemic stroke, approximately 1.9 million brain neurons die every minute the blood supply is blocked. Getting to an emergency stroke center within the first 3 to 4.5 hours allows clot-busting treatments that can reverse permanent paralysis."
      },
      {
        q: "Can a young, fit person have a stroke?",
        a: "Yes. While strokes are more common in older adults, 10-15% of strokes occur in people under 50, often due to carotid artery dissections, congenital heart defects (PFO), clotting disorders, or extreme hypertension."
      }
    ],
    references: [
      "American Heart Association / American Stroke Association (AHA/ASA) Stroke Guidelines",
      "World Stroke Organization (WSO) Global Stroke Factsheet 2023",
      "Lancet Neurology Commission on Stroke Prevention and Care"
    ]
  },
  {
    id: "fatty-liver",
    name: "Fatty Liver Disease (NAFLD / MASLD)",
    name_ml: "ഫാറ്റി ലിവർ രോഗം",
    name_hi: "फैटी लिवर रोग",
    name_ar: "مرض الكبد الدهني",
    category: "lifestyle",
    badge: "Metabolic Liver Disease",
    icon: "disc",
    shortDesc: "Abnormal accumulation of neutral lipids (triglycerides) within hepatocytes, progressing to inflammation and cirrhosis.",
    whatIsIt: "Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD, formerly NAFLD) occurs when excess fat builds up in liver cells exceeding 5% of liver weight, in the absence of heavy alcohol use. It ranges from simple steatosis to Metabolic Dysfunction-Associated Steatohepatitis (MASH), which involves active cellular injury, chronic inflammation, and fibrosis.",
    causes: [
      "Severe systemic insulin resistance that impairs hepatic fatty acid oxidation",
      "Excess dietary intake of high-fructose corn syrup and refined carbohydrates",
      "Visceral adiposity and elevated free fatty acid influx into portal circulation",
      "Genetic polymorphisms such as PNPLA3 (patatin-like phospholipase domain 3)"
    ],
    symptoms: [
      "Frequently asymptomatic in early simple steatosis stages",
      "Dull ache or discomfort in the right upper quadrant of the abdomen",
      "Persistent unexplained physical fatigue and brain fog",
      "Hepatomegaly (enlarged liver detectable on palpation)",
      "Advanced signs: Jaundice, spider angiomas, abdominal swelling (ascites)"
    ],
    warningSigns: [
      "Signs of decompensated liver cirrhosis: Jaundice, confusion (hepatic encephalopathy), vomiting blood (esophageal varices)",
      "Unexplained rapid abdominal distension (fluid ascites)"
    ],
    riskFactors: [
      "Metabolic syndrome, Type 2 diabetes, or prediabetes",
      "Elevated BMI and central abdominal obesity",
      "High blood triglycerides and low HDL cholesterol",
      "Sedentary lifestyle and high consumption of sugar-sweetened sodas"
    ],
    bodyImpact: "Excess lipid overload causes lipotoxicity, oxidative stress, and mitochondrial injury in hepatocytes. Activated hepatic stellate cells produce dense collagen scar tissue, progressing from steatosis to fibrosis, cirrhosis, and hepatocellular carcinoma (liver cancer).",
    diagnosis: [
      "Abdominal Ultrasound showing hepatic hyperechogenicity ('bright liver')",
      "Elevated serum Alanine Aminotransferase (ALT) and Aspartate Aminotransferase (AST)",
      "Transient Elastography (FibroScan) to quantify liver stiffness and steatosis (CAP score)",
      "FIB-4 Index (age, AST, ALT, platelet count) for fibrosis risk stratification",
      "Liver Biopsy (gold standard for diagnosing NASH/MASH and staging fibrosis)"
    ],
    treatments: [
      "Lifestyle intervention targeting 7-10% total body weight reduction",
      "Resmetirom (FDA-approved thyroid hormone receptor-beta agonist for MASH with fibrosis)",
      "GLP-1 receptor agonists (e.g., Semaglutide) to improve glycemic control and reduce liver fat",
      "High-dose Vitamin E (800 IU/day) in non-diabetic adults with biopsy-proven MASH",
      "Optimal management of co-existing dyslipidemia and diabetes"
    ],
    prevention: "Fatty liver is highly reversible in early stages. Eliminate all sugary sodas and high-fructose syrups, limit alcohol, consume a Mediterranean diet rich in antioxidants, and perform at least 150-200 minutes of weekly aerobic and resistance exercises.",
    safeFoods: [
      "Black coffee (2 to 3 cups daily has proven anti-fibrotic hepatoprotective properties)",
      "Leafy cruciferous greens (spinach, kale, broccoli, cabbage)",
      "Cold-pressed extra virgin olive oil and avocados",
      "Fatty fish high in Omega-3 fatty acids",
      "Walnuts, sunflower seeds, and whole unsweetened soy"
    ],
    avoidFoods: [
      "High-fructose corn syrup, sweetened juices, and soft drinks (fructose directly converts to liver fat)",
      "Refined bakery carbs, white bread, and maida-based sweets",
      "Alcohol in any form if steatohepatitis or elevated enzymes are present",
      "Excessive red meat, processed meats, and saturated cooking fats"
    ],
    exercises: [
      "Combined aerobic and resistance training 4 to 5 times weekly (decreases intrahepatic fat independently of weight loss)",
      "Brisk uphill walking, swimming, or stationary cycling",
      "Bodyweight squats, push-ups, and resistance bands",
      "Post-meal 15-minute walks to enhance peripheral glucose disposal"
    ],
    lifestyle: [
      "Avoid all unregulated over-the-counter herbal supplements that can cause toxic liver injury",
      "Get vaccinated against Hepatitis A and Hepatitis B to protect liver health",
      "Get annual liver enzyme checks and non-invasive fibrosis scores (FIB-4)",
      "Prioritize 7-8 hours of nighttime sleep"
    ],
    whenToConsult: "Consult a hepatologist or gastroenterologist if your routine blood tests show persistently elevated ALT/AST, if ultrasound reveals fatty infiltration, or if you develop abdominal pain or yellowing of the eyes.",
    faqs: [
      {
        q: "Can fatty liver disease be completely reversed?",
        a: "Yes. Early-stage fatty liver (simple steatosis) and mild inflammation can be completely reversed by losing 7% to 10% of body weight, cutting out added fructose, and exercising regularly."
      },
      {
        q: "Why is black coffee recommended for fatty liver?",
        a: "Multiple large clinical studies show that regular black coffee consumption reduces liver stiffness, stimulates autophagy in hepatocytes, and protects against the progression of fibrosis."
      }
    ],
    references: [
      "AASLD Practice Guidance on the Clinical Assessment and Management of NAFLD/MASLD",
      "EASL-EASD-EASO Clinical Practice Guidelines for the Management of Non-Alcoholic Fatty Liver Disease",
      "New England Journal of Medicine Review on Steatohepatitis"
    ]
  },
  {
    id: "metabolic-syndrome",
    name: "Metabolic Syndrome",
    name_ml: "മെറ്റബോളിക് സിൻഡ്രോം",
    name_hi: "मेटाबोलिक सिंड्रोम",
    name_ar: "متلازمة التمثيل الغذائي",
    category: "lifestyle",
    badge: "Syndrome X",
    icon: "layers",
    shortDesc: "A dangerous cluster of metabolic abnormalities that multiply risk for heart disease, stroke, and type 2 diabetes.",
    whatIsIt: "Metabolic syndrome is not a single disease, but a cluster of five interconnected clinical conditions: central abdominal obesity, elevated fasting blood glucose, high blood triglycerides, low HDL cholesterol, and high blood pressure. Having three or more of these criteria diagnoses metabolic syndrome.",
    causes: [
      "Underlying systemic cellular insulin resistance",
      "Excess accumulation of dysfunctional visceral abdominal adiposity",
      "Chronic low-grade inflammatory signaling from ectopic fat depots",
      "Genetic susceptibility coupled with a modern obesogenic, ultra-processed diet",
      "Disrupted circadian rhythms and chronic physical inactivity"
    ],
    symptoms: [
      "Often causes no overt physical symptoms in initial years",
      "Prominent abdominal bulge / 'apple-shaped' body profile",
      "Post-meal extreme fatigue, lethargy, and mental clouding",
      "Acanthosis nigricans (dark velvety skin patches on neck and groin)",
      "Mild shortness of breath during routine walking"
    ],
    warningSigns: [
      "Blood pressure spiking above 140/90 mmHg",
      "Fasting blood glucose crossing 126 mg/dL into overt diabetes range",
      "Chest pressure or shortness of breath during exertion"
    ],
    riskFactors: [
      "Waist circumference > 40 inches in men, > 35 inches in women",
      "Sedentary lifestyle with more than 6-8 hours daily sitting",
      "High intake of refined starches, trans fats, and sweetened beverages",
      "Advancing age and family history of metabolic disorders",
      "Polycystic Ovary Syndrome (PCOS) and non-alcoholic fatty liver"
    ],
    bodyImpact: "Metabolic syndrome creates an aggressive pro-thrombotic and pro-inflammatory environment. It accelerates atherosclerosis throughout the arterial tree, damages kidney microvessels, and increases the lifetime risk of cardiovascular death by threefold.",
    diagnosis: [
      "Diagnosis requires at least 3 of the following 5 criteria (NCEP ATP III / AHA criteria):",
      "1. Large waist circumference (>= 40 in / 102 cm for men; >= 35 in / 88 cm for women)",
      "2. Elevated triglycerides (>= 150 mg/dL or on drug treatment)",
      "3. Reduced HDL cholesterol (< 40 mg/dL for men; < 50 mg/dL for women)",
      "4. Elevated blood pressure (>= 130/85 mmHg or on antihypertensive therapy)",
      "5. Elevated fasting glucose (>= 100 mg/dL or on drug treatment for elevated glucose)"
    ],
    treatments: [
      "Targeted lifestyle transformation: 7-10% weight loss through Mediterranean or low-carb diet",
      "150-300 minutes of weekly moderate aerobic and strength exercises",
      "Metformin for patients with high risk of progressing to overt Type 2 diabetes",
      "Lipid-lowering medications (Statins, Fibrates) to normalize lipid ratios",
      "ACE inhibitors or ARBs for blood pressure control"
    ],
    prevention: "Metabolic syndrome is highly preventable through daily physical activity, avoiding liquid calories and refined starches, maintaining a healthy waist-to-height ratio (< 0.5), getting quality sleep, and managing chronic stress.",
    safeFoods: [
      "Non-starchy vegetables (spinach, cauliflower, peppers, zucchini)",
      "High-fiber legumes and beans (lentils, black beans, edamame)",
      "Healthy monounsaturated fats (extra virgin olive oil, avocados, almonds)",
      "Fatty fish high in Omega-3 (salmon, mackerel, sardines)",
      "Green tea and unsweetened black coffee"
    ],
    avoidFoods: [
      "Sweetened carbonated beverages, energy drinks, and flavored coffees",
      "Refined grain products (white bread, white rice, breakfast pastries)",
      "Processed meats and deep-fried convenience meals",
      "Trans fats and hydrogenated cooking oils"
    ],
    exercises: [
      "Brisk walking 40-50 minutes daily (promotes non-insulin-mediated glucose uptake)",
      "Progressive resistance training 3 days weekly to build metabolically active muscle",
      "Interval cycling or rowing sessions",
      "Daily stretching and balance routines"
    ],
    lifestyle: [
      "Measure waist circumference at the belly button once a month",
      "Avoid eating heavy meals late at night close to bedtime",
      "Maintain consistent sleep-wake cycles (7-8 hours per night)",
      "Stop smoking and limit alcohol intake strictly"
    ],
    whenToConsult: "Consult your doctor if you meet any 2 of the risk criteria (e.g., high waistline and high BP) to establish a comprehensive preventive care plan before irreversible arterial damage occurs.",
    faqs: [
      {
        q: "Is metabolic syndrome the same as diabetes?",
        a: "No. Metabolic syndrome is a cluster of risk factors that includes elevated blood sugar. People with metabolic syndrome are at very high risk of developing full Type 2 diabetes if lifestyle changes are not made."
      },
      {
        q: "Can metabolic syndrome be completely cured?",
        a: "Yes. By reversing the individual components—losing abdominal fat, improving diet, and exercising—many patients resolve the criteria and completely normalize their metabolic markers."
      }
    ],
    references: [
      "AHA/NHLBI Scientific Statement: Diagnosis and Management of the Metabolic Syndrome",
      "IDF (International Diabetes Federation) Consensus Worldwide Definition of the Metabolic Syndrome",
      "World Health Organization Consultation on Metabolic Syndrome"
    ]
  },
  {
    id: "chronic-kidney-disease",
    name: "Chronic Kidney Disease (CKD)",
    name_ml: "വൃക്കരോഗം (സി.കെ.ഡി)",
    name_hi: "क्रोनिक किडनी रोग (सीकेडी)",
    name_ar: "مرض الكلى المزمن",
    category: "lifestyle",
    badge: "Renal Function",
    icon: "shield",
    shortDesc: "Gradual, progressive loss of renal filtration function, resulting in fluid retention, electrolyte imbalances, and toxin accumulation.",
    whatIsIt: "Chronic Kidney Disease (CKD) is characterized by gradual, permanent loss of kidney function over months to years. Healthy kidneys filter extra water and metabolic waste products from the blood, which are excreted in urine. As CKD progresses, dangerous levels of fluid, electrolytes, and uremic waste accumulate in the body.",
    causes: [
      "Diabetic Nephropathy: Chronic high blood glucose damages delicate renal glomeruli (~40% of cases)",
      "Hypertensive Nephrosclerosis: Chronic high blood pressure hardens renal arterioles (~30% of cases)",
      "Chronic Glomerulonephritis: Inflammation of the filtering units",
      "Polycystic Kidney Disease (PKD): Genetic formation of renal cysts",
      "Recurrent kidney infections (Pyelonephritis) or chronic obstruction (kidney stones, enlarged prostate)",
      "Long-term overuse of Non-Steroidal Anti-Inflammatory Drugs (NSAIDs e.g. Ibuprofen)"
    ],
    symptoms: [
      "Usually symptomless in early stages (Stages 1-3)",
      "Edema: Swelling in ankles, feet, legs, and puffiness around the eyes",
      "Fatigue, persistent lethargy, and anemia-induced weakness",
      "Changes in urination: Foamy/bubbly urine (proteinuria) or increased nocturnal urination",
      "Loss of appetite, metallic taste in the mouth, and persistent nausea",
      "Intractable generalized skin itching (Uremic Pruritus)"
    ],
    warningSigns: [
      "Uremic Emergency: Severe confusion, asterixis (flapping hand tremor), pericardial friction rub",
      "Severe fluid overload: Inability to lie flat due to pulmonary edema",
      "Hyperkalemia: Serum potassium > 6.0 mEq/L leading to cardiac arrhythmias"
    ],
    riskFactors: [
      "Long-standing diabetes mellitus and uncontrolled hypertension",
      "Family history of chronic kidney disease or kidney failure",
      "Age over 60 years",
      "Cardiovascular disease and smoking",
      "Frequent, unmonitored use of painkiller medications (NSAIDs)"
    ],
    bodyImpact: "Declining glomerular filtration leads to uremic toxin retention, secondary hyperparathyroidism, renal osteodystrophy (weakened bones), severe anemia due to lack of erythropoietin, refractory fluid overload, and end-stage renal disease (ESRD) requiring dialysis or kidney transplant.",
    diagnosis: [
      "Estimated Glomerular Filtration Rate (eGFR) calculated from serum creatinine (eGFR < 60 mL/min/1.73m2 for > 3 months confirms CKD)",
      "Urine Albumin-to-Creatinine Ratio (uACR) to detect early glomerular leakage",
      "Serum electrolytes (Sodium, Potassium, Phosphorus, Calcium, Bicarbonate)",
      "Renal Ultrasound to evaluate kidney size, cortical thinning, and rule out obstruction",
      "Staging: Stage 1 (eGFR >= 90 with kidney damage) to Stage 5 (eGFR < 15, Kidney Failure)"
    ],
    treatments: [
      "Strict blood pressure management targeting < 120-130 mmHg",
      "Renoprotective medications: SGLT2 inhibitors and ACE inhibitors or ARBs (slow CKD progression)",
      "Non-steroidal mineralocorticoid receptor antagonists (Finerenone)",
      "Phosphate binders, active Vitamin D analogs, and Erythropoietin-Stimulating Agents (ESAs) for anemia",
      "Renal Replacement Therapy: Hemodialysis, Peritoneal Dialysis, or Kidney Transplantation for Stage 5 ESRD"
    ],
    prevention: "Manage blood pressure and blood sugar strictly, limit dietary sodium to < 2,000 mg/day, avoid chronic use of NSAID painkillers without medical oversight, stay adequately hydrated, and get annual urine albumin tests if diabetic or hypertensive.",
    safeFoods: [
      "Low-potassium vegetables (cabbage, cauliflower, cucumbers, bell peppers) in moderation",
      "Apples, berries, and red grapes (kidney-friendly low-potassium fruits)",
      "Controlled high-biological-value protein sources (egg whites, skinless poultry, fish) as guided by renal dietitian",
      "Healthy plant oils (olive oil)",
      "Water as primary fluid (unless fluid-restricted by nephrologist in advanced stages)"
    ],
    avoidFoods: [
      "High-sodium processed meats, canned soups, and salty seasonings",
      "High-potassium foods in advanced CKD (bananas, oranges, potatoes, tomatoes) as directed by doctor",
      "High-phosphorus foods (cola drinks, processed cheeses, organ meats, dark colas)",
      "Starfruit (Carambola contains a neurotoxin that failing kidneys cannot excrete)"
    ],
    exercises: [
      "Low to moderate intensity walking (20-30 minutes, 4-5 days a week)",
      "Stationary cycling or light aquatic exercise",
      "Gentle stretching and mobility routines to prevent muscle cramping",
      "Avoid exhaustive, dehydrating endurance workouts in hot climates"
    ],
    lifestyle: [
      "Never take NSAID painkillers (Ibuprofen, Naproxen, Diclofenac) without nephrologist consent",
      "Monitor blood pressure and blood glucose daily",
      "Weigh yourself daily if prescribed to monitor fluid retention",
      "Adhere strictly to medications and dietary fluid limits"
    ],
    whenToConsult: "Consult a nephrologist promptly if urine turns persistently foamy, if you develop leg swelling, or if eGFR drops below 60 mL/min. Seek immediate emergency care for shortness of breath or extreme confusion.",
    faqs: [
      {
        q: "Can damaged kidneys heal or regain lost function?",
        a: "In chronic kidney disease, scarred nephrons cannot regenerate. However, early detection and modern renoprotective medications (like SGLT2 inhibitors) can dramatically slow or halt further progression."
      },
      {
        q: "Why is starfruit toxic to people with kidney disease?",
        a: "Starfruit contains caramboxin, a neurotoxin. Healthy kidneys easily excrete it, but in kidney disease, it accumulates in the bloodstream and brain, causing hiccups, mental confusion, seizures, and even death."
      }
    ],
    references: [
      "KDIGO (Kidney Disease: Improving Global Outcomes) Clinical Practice Guidelines",
      "National Kidney Foundation (NKF) KDOQI Guidelines",
      "World Health Organization (WHO) Chronic Kidney Disease Review"
    ]
  }
];
