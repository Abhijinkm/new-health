/**
 * HEALTHCARE FOR YOU - Complete Health & Disease Prevention Platform
 * Authoritative Medical & Lifestyle Education Repository
 * Medically referenced from WHO, CDC, NHS, and Mayo Clinic Guidelines.
 * Generated: 2026-11-16T10:51:25.789Z
 */

const HEALTH_DATA = {
  "categories": [
    {
      "id": "lifestyle",
      "name": "Lifestyle Diseases",
      "name_ml": "ജീവിതശൈലി രോഗങ്ങൾ",
      "name_hi": "जीवनशैली से जुड़े रोग",
      "name_ar": "أمراض نمط الحياة",
      "icon": "activity",
      "color": "blue",
      "desc": "Chronic metabolic and cardiovascular conditions primarily driven by daily habits, diet, physical inactivity, and environment."
    },
    {
      "id": "respiratory",
      "name": "Respiratory Diseases",
      "name_ml": "ശ്വാസകോശ രോഗങ്ങൾ",
      "name_hi": "श्वसन रोग",
      "name_ar": "أمراض الجهاز التنفسي",
      "icon": "wind",
      "color": "teal",
      "desc": "Ailments affecting the lungs, airways, bronchial passages, and pulmonary gas exchange."
    },
    {
      "id": "digestive",
      "name": "Digestive Diseases",
      "name_ml": "ദഹനവ്യവസ്ഥ രോഗങ്ങൾ",
      "name_hi": "पाचन संबंधी रोग",
      "name_ar": "أمراض الجهاز الهضمي",
      "icon": "disc",
      "color": "emerald",
      "desc": "Disorders of the gastrointestinal tract, stomach lining, liver, gallbladder, and bowels."
    },
    {
      "id": "neurological",
      "name": "Neurological Diseases",
      "name_ml": "നാഡീവ്യവസ്ഥ രോഗങ്ങൾ",
      "name_hi": "न्यूरोलॉजिकल रोग",
      "name_ar": "الأمراض العصبية",
      "icon": "zap",
      "color": "indigo",
      "desc": "Conditions affecting the brain, spinal cord, peripheral nerves, and neuromuscular coordination."
    },
    {
      "id": "mental_health",
      "name": "Mental Health Conditions",
      "name_ml": "മാനസികാരോഗ്യം",
      "name_hi": "मानसिक स्वास्थ्य स्थितियाँ",
      "name_ar": "حالات الصحة النفسية",
      "icon": "smile",
      "color": "purple",
      "desc": "Disorders impacting mood, cognitive resilience, stress coping mechanisms, sleep, and emotional health."
    },
    {
      "id": "bone_joint",
      "name": "Bone & Joint Diseases",
      "name_ml": "എല്ല് & സന്ധി രോഗങ്ങൾ",
      "name_hi": "हड्डी और जोड़ों के रोग",
      "name_ar": "أمراض العظام والمفاصل",
      "icon": "shield",
      "color": "amber",
      "desc": "Ailments affecting skeletal bone density, articular cartilage wear, spine, and traumatic fractures."
    },
    {
      "id": "infectious",
      "name": "Infectious Diseases",
      "name_ml": "പകർച്ചവ്യാധികൾ",
      "name_hi": "संक्रामक रोग",
      "name_ar": "الأمراض المعدية",
      "icon": "alert-triangle",
      "color": "red",
      "desc": "Illnesses caused by pathogenic microorganisms including viruses, bacteria, protozoa, and acute fevers."
    },
    {
      "id": "cancer",
      "name": "Cancer Awareness",
      "name_ml": "കാൻസർ ബോധവൽക്കരണം",
      "name_hi": "कैंसर जागरूकता",
      "name_ar": "التوعية بالسرطان",
      "icon": "ribbon",
      "color": "rose",
      "desc": "Education on evidence-based screening, early signs, cellular oncogenesis, prevention, and treatments."
    },
    {
      "id": "other",
      "name": "Other Health Conditions",
      "name_ml": "മറ്റ് ആരോഗ്യ അവസ്ഥകൾ",
      "name_hi": "अन्य स्वास्थ्य स्थितियाँ",
      "name_ar": "حالات صحية أخرى",
      "icon": "layers",
      "color": "cyan",
      "desc": "Endocrine, hormonal, nutritional deficiencies, and gynecological conditions like PCOS and Anemia."
    }
  ],
  "diseases": [
    {
      "id": "type-1-diabetes",
      "name": "Type 1 Diabetes",
      "name_ml": "ടൈപ്പ് 1 പ്രമേഹം",
      "name_hi": "टाइप 1 मधुमेह",
      "name_ar": "داء السكري من النوع 1",
      "category": "lifestyle",
      "badge": "Autoimmune Condition",
      "icon": "droplet",
      "shortDesc": "An autoimmune disease where the immune system destroys insulin-producing beta cells in the pancreas.",
      "whatIsIt": "Type 1 diabetes is a chronic autoimmune condition in which the pancreas produces little or no insulin. Insulin is a critical hormone that allows glucose to enter cells to produce energy. Unlike Type 2 diabetes, Type 1 is not caused by diet or lifestyle habits, though lifestyle management is vital to prevent severe complications.",
      "causes": [
        "Autoimmune destruction of pancreatic beta cells by self-reactive T-lymphocytes",
        "Genetic susceptibility (HLA-DR3, HLA-DR4 alleles)",
        "Environmental triggers such as enterovirus infections in genetically predisposed individuals",
        "Idiopathic triggers triggering sudden onset in children and young adults"
      ],
      "symptoms": [
        "Severe unquenchable thirst (Polydipsia)",
        "Frequent heavy urination, including new bedwetting in children (Polyuria)",
        "Rapid unintentional weight loss despite ravenous appetite (Polyphagia)",
        "Extreme exhaustion, weakness, and mood irritability",
        "Fruity breath odor (acetone scent) indicating ketone buildup",
        "Blurred vision and frequent fungal/yeast infections"
      ],
      "warningSigns": [
        "Diabetic Ketoacidosis (DKA): Deep rapid breathing (Kussmaul breathing), nausea, vomiting, abdominal pain",
        "Confusion, lethargy, or loss of consciousness",
        "Blood glucose reading over 300 mg/dL with high urine ketones"
      ],
      "riskFactors": [
        "Family history: Parent or sibling with Type 1 Diabetes",
        "Genetics: Presence of specific high-risk HLA genes",
        "Geography: Higher incidence further from the equator (Northern Europe)",
        "Age: Peaks in early childhood (ages 4-7) and early adolescence (ages 10-14)"
      ],
      "bodyImpact": "Without insulin, glucose remains trapped in circulation while cells starve. The body breaks down fat and muscle for energy, producing toxic acidic ketones. Chronic hyperglycemia damages capillaries in the retina (retinopathy), kidney glomeruli (nephropathy), peripheral nerves (neuropathy), and accelerates cardiovascular atherosclerosis.",
      "diagnosis": [
        "Fasting Plasma Glucose (FPG) >= 126 mg/dL (7.0 mmol/L)",
        "Glycated Hemoglobin (HbA1c) >= 6.5%",
        "Random Plasma Glucose >= 200 mg/dL with classic hyperglycemic symptoms",
        "Autoantibody Testing: GAD65, IA-2, ZnT8, and Islet Cell Antibodies (ICA)",
        "Low or undetectable C-peptide levels confirming lack of endogenous insulin"
      ],
      "treatments": [
        "Lifelong exogenous insulin therapy via multiple daily injections (MDI) or Continuous Subcutaneous Insulin Infusion (Insulin Pump)",
        "Continuous Glucose Monitoring (CGM) systems for real-time interstitial glucose tracking",
        "Carbohydrate counting and insulin-to-carbohydrate ratio dosing",
        "Emergency Glucagon rescue kits for severe hypoglycemia"
      ],
      "prevention": "Currently, Type 1 diabetes cannot be prevented. However, secondary prevention focuses on strict glycemic control (HbA1c < 7.0%) to prevent microvascular and macrovascular complications through daily monitoring, balanced diet, and structured physical activity.",
      "safeFoods": [
        "Non-starchy vegetables (spinach, broccoli, cauliflower, cucumbers)",
        "Lean protein sources (skinless poultry, tofu, eggs, fish, lentils)",
        "Low glycemic complex carbohydrates (quinoa, steel-cut oats, wild rice)",
        "Healthy plant fats (avocados, extra virgin olive oil, walnuts, chia seeds)",
        "High fiber berries (blueberries, strawberries, raspberries)"
      ],
      "avoidFoods": [
        "Refined sugary beverages (sodas, sweetened iced teas, fruit nectars)",
        "Ultra-processed packaged snacks and trans-fat baked goods",
        "Simple high-fructose syrups and candy",
        "Unmeasured excessive refined carbohydrates that cause sharp glycemic spikes"
      ],
      "exercises": [
        "Brisk walking (30 minutes daily, checking blood sugar before and after)",
        "Light resistance and bodyweight training to increase insulin sensitivity",
        "Swimming and cycling with accessible fast-acting glucose tablets on hand",
        "Gentle yoga and breathing exercises for stress and cortisol regulation"
      ],
      "lifestyle": [
        "Check glucose before driving, exercising, and before bedtime",
        "Always carry rapid-acting glucose (glucose tablets or juice) for hypoglycemia",
        "Wear medical identification jewelry indicating Type 1 Diabetes",
        "Inspect feet daily for cuts, blisters, or skin breaks"
      ],
      "whenToConsult": "Seek EMERGENCY CARE immediately if experiencing nausea, vomiting with abdominal pain, acetone breath, blood sugar over 250 mg/dL with positive ketones, or hypoglycemia unresponsive to oral glucose.",
      "faqs": [
        {
          "q": "Can Type 1 diabetes be cured with diet or herbs?",
          "a": "No. Type 1 diabetes is an autoimmune destruction of insulin-producing cells. Insulin replacement is essential for life and cannot be replaced by herbs or dietary changes alone."
        },
        {
          "q": "Can a person with Type 1 diabetes exercise safely?",
          "a": "Yes, regular exercise is encouraged. Blood sugar should be monitored before and after exercise, and insulin or carb intake adjusted to prevent hypoglycemia."
        }
      ],
      "references": [
        "American Diabetes Association (ADA) Standards of Medical Care in Diabetes 2024",
        "International Society for Pediatric and Adolescent Diabetes (ISPAD) Clinical Practice Consensus Guidelines",
        "World Health Organization (WHO) Diabetes Factsheets"
      ]
    },
    {
      "id": "type-2-diabetes",
      "name": "Type 2 Diabetes",
      "name_ml": "ടൈപ്പ് 2 പ്രമേഹം",
      "name_hi": "टाइप 2 मधुमेह",
      "name_ar": "داء السكري من النوع 2",
      "category": "lifestyle",
      "badge": "High Prevalence",
      "icon": "droplet",
      "shortDesc": "A metabolic disorder characterized by chronic hyperglycemia resulting from progressive insulin resistance and beta-cell dysfunction.",
      "whatIsIt": "Type 2 diabetes is a chronic medical condition where the pancreas produces insulin, but the body's cells fail to respond effectively to it (insulin resistance). Over time, glucose accumulates in the bloodstream, damaging blood vessels, nerves, kidneys, and eyes if left unmanaged.",
      "causes": [
        "Progressive cellular insulin resistance combined with insufficient compensatory insulin secretion",
        "Excess visceral and abdominal adiposity that releases inflammatory cytokines",
        "Genetic predisposition and strong family history",
        "Sedentary lifestyle and lack of regular muscular contraction",
        "Diet high in ultra-processed carbohydrates and refined sugars"
      ],
      "symptoms": [
        "Frequent urination (Polyuria), especially at night",
        "Persistent excessive thirst (Polydipsia)",
        "Unexplained fatigue and lethargy",
        "Blurred or fluctuating vision",
        "Slow-healing cuts, bruises, or recurring infections",
        "Numbness, tingling, or burning in hands and feet (Peripheral Neuropathy)"
      ],
      "warningSigns": [
        "Hyperosmolar Hyperglycemic State (HHS): Blood sugar > 600 mg/dL with severe dehydration and confusion",
        "Sudden chest pain, shortness of breath, or silent heart attack signs",
        "Non-healing diabetic foot ulcer with signs of infection"
      ],
      "riskFactors": [
        "Body Mass Index (BMI) >= 25 kg/m2 (or >= 23 kg/m2 in Asian populations)",
        "Age 45 or older, though increasingly diagnosed in young adults",
        "History of Gestational Diabetes or giving birth to a baby > 9 lbs",
        "Polycystic Ovary Syndrome (PCOS)",
        "High blood pressure (>= 140/90 mmHg) or high triglycerides"
      ],
      "bodyImpact": "High circulating glucose causes systemic endothelial dysfunction, stiffens arteries, causes microvascular ischemia leading to diabetic retinopathy, nephropathy, peripheral neuropathy, and increases heart attack and stroke risk by 2 to 4 fold.",
      "diagnosis": [
        "Fasting Blood Glucose >= 126 mg/dL (7.0 mmol/L) on two separate occasions",
        "Hemoglobin A1c (HbA1c) >= 6.5%",
        "Oral Glucose Tolerance Test (OGTT) 2-hour blood sugar >= 200 mg/dL",
        "Random blood sugar >= 200 mg/dL with classic hyperglycemia symptoms"
      ],
      "treatments": [
        "First-line pharmacotherapy: Metformin (reduces hepatic glucose production)",
        "SGLT2 inhibitors (promote urinary glucose excretion and renal protection)",
        "GLP-1 receptor agonists (enhance incretin effect, delay gastric emptying, reduce weight)",
        "DPP-4 inhibitors, Sulfonylureas, or Basal Insulin when indicated",
        "Intensive lifestyle therapy: Medical Nutrition Therapy (MNT) and structured exercise"
      ],
      "prevention": "Type 2 diabetes is up to 80% preventable through sustained weight loss of 5-7% of initial body weight, 150 minutes of weekly moderate exercise, replacing refined grains with whole grains, and eliminating sugary beverages.",
      "safeFoods": [
        "High soluble fiber foods (oats, barley, psyllium, lentils, chickpeas)",
        "Non-starchy cruciferous vegetables (spinach, fenugreek/methi, broccoli, bitter gourd)",
        "Lean protein sources (fish, legumes, skinless chicken breast, Greek yogurt)",
        "Nuts and seeds (walnuts, almonds, flaxseeds, chia seeds)",
        "Cinnamon, apple cider vinegar, and green leafy greens"
      ],
      "avoidFoods": [
        "Sugar-sweetened beverages, sodas, and canned fruit juices",
        "Refined carbohydrates (white bread, white rice, pastries, maida)",
        "Deep-fried fast foods containing industrial trans fats",
        "High-sugar desserts, confectioneries, and sweet packaged breakfast cereals"
      ],
      "exercises": [
        "Brisk walking (45 minutes, 5 days per week, especially 15 minutes after meals)",
        "Resistance training (squats, resistance bands, lunges 2-3 times weekly)",
        "Stationary cycling or water aerobics for joint-friendly cardio",
        "Post-meal light strolls to blunt postprandial glucose surges"
      ],
      "lifestyle": [
        "Self-monitor blood glucose as recommended by physician",
        "Perform annual dilated eye examinations and comprehensive diabetic foot checks",
        "Aim for 7 to 8 hours of restorative sleep to prevent cortisol-driven insulin spikes",
        "Cease all tobacco use immediately"
      ],
      "whenToConsult": "Consult your doctor if your blood sugar is consistently > 200 mg/dL, if you notice numbness or a sore on your foot, or experience sudden visual changes.",
      "faqs": [
        {
          "q": "Can Type 2 diabetes be put into remission?",
          "a": "Yes. Clinical trials like the DiRECT study show that significant weight loss (10-15 kg) through structured calorie-controlled nutrition can lead to normal glucose levels without medications in many newly diagnosed individuals."
        },
        {
          "q": "Does eating sugar directly cause diabetes?",
          "a": "Sugar alone does not directly cause diabetes, but excessive caloric intake from added sugars leads to visceral weight gain, liver fat accumulation, and insulin resistance."
        }
      ],
      "references": [
        "American Diabetes Association (ADA) Standards of Care in Diabetes 2024",
        "World Health Organization (WHO) Global Report on Diabetes",
        "Lancet Diabetes & Endocrinology DiRECT Study on Diabetes Remission"
      ]
    },
    {
      "id": "hypertension",
      "name": "High Blood Pressure (Hypertension)",
      "name_ml": "ഉയർന്ന രക്തസമ്മർദ്ദം (ഹൈപ്പർടെൻഷൻ)",
      "name_hi": "उच्च रक्तचाप (हाइपरटेंशन)",
      "name_ar": "ارتفاع ضغط الدم",
      "category": "lifestyle",
      "badge": "Silent Killer",
      "icon": "activity",
      "shortDesc": "A chronic cardiovascular condition where the pressure of blood pushing against the arterial walls is persistently elevated.",
      "whatIsIt": "Hypertension, commonly known as high blood pressure, occurs when systemic arterial pressure remains chronically elevated (>= 130/80 mmHg). Because it rarely presents noticeable symptoms in early stages, it is termed the 'silent killer', quietly damaging blood vessels, kidneys, brain, and heart.",
      "causes": [
        "Excessive dietary sodium consumption (> 2,300 mg/day)",
        "Arterial stiffness and loss of elastic recoil due to aging and vascular inflammation",
        "Overactive sympathetic nervous system and renin-angiotensin-aldosterone system (RAAS)",
        "Chronic emotional stress and elevated circulating catecholamines",
        "Sedentary lifestyle and obesity"
      ],
      "symptoms": [
        "Often entirely asymptomatic ('silent killer')",
        "Occipital morning headaches in severe cases",
        "Dizziness, lightheadedness, or slight vertigo",
        "Shortness of breath during mild exertion",
        "Pulsatile tinnitus (whooshing sound in ears)",
        "Frequent unexplained nosebleeds (Epistaxis) in acute spikes"
      ],
      "warningSigns": [
        "Hypertensive Crisis: Blood pressure > 180/120 mmHg",
        "Severe chest pain, crushing sensation, or shortness of breath",
        "Sudden neurological deficits: facial droop, arm weakness, slurred speech (Stroke warning)"
      ],
      "riskFactors": [
        "Diet high in sodium and low in dietary potassium",
        "Chronic alcohol consumption and tobacco use",
        "Family history of early cardiovascular disease",
        "Obstructive Sleep Apnea (OSA)",
        "Chronic kidney disease and diabetes"
      ],
      "bodyImpact": "Chronic hypertension forces the left ventricle to pump against higher resistance, causing Left Ventricular Hypertrophy (LVH), heart failure, accelerates coronary atherosclerosis, causes renal nephrosclerosis, and dramatically raises risk of ischemic stroke and cerebral hemorrhage.",
      "diagnosis": [
        "Multiple resting blood pressure measurements on at least 2 separate occasions",
        "Classification according to AHA/ACC guidelines: Normal (< 120/80), Elevated (120-129/<80), Stage 1 (130-139/80-89), Stage 2 (>= 140/90 mmHg)",
        "24-hour Ambulatory Blood Pressure Monitoring (ABPM) to rule out white-coat hypertension",
        "Serum electrolytes, creatinine, lipid profile, and urine albumin-to-creatinine ratio",
        "Electrocardiogram (ECG) to assess cardiac hypertrophy"
      ],
      "treatments": [
        "DASH (Dietary Approaches to Stop Hypertension) dietary therapy",
        "ACE Inhibitors (e.g., Lisinopril, Ramipril) or ARBs (e.g., Losartan, Telmisartan)",
        "Calcium Channel Blockers (e.g., Amlodipine)",
        "Thiazide-like Diuretics (e.g., Chlorthalidone, Hydrochlorothiazide)",
        "Regular home blood pressure monitoring"
      ],
      "prevention": "Hypertension can be prevented and managed by limiting daily sodium to < 1,500 mg, eating potassium-rich whole foods, maintaining normal body weight (BMI 18.5 - 24.9), exercising 150 minutes weekly, and practicing daily stress-reduction techniques.",
      "safeFoods": [
        "Potassium-rich foods: Bananas, spinach, sweet potatoes, coconut water, white beans",
        "Magnesium-rich foods: Pumpkin seeds, almonds, dark leafy greens",
        "Garlic and onions (natural vasodilatory organosulfur compounds)",
        "Beetroots and beetroot juice (dietary nitrates that convert to nitric oxide)",
        "Hibiscus tea and low-fat dairy products"
      ],
      "avoidFoods": [
        "Processed canned meats, cured bacon, sausages, and salted pickles",
        "High-sodium fast foods, packaged ramen, and salty snacks",
        "Excessive licorice root (contains glycyrrhizin which raises BP)",
        "Excessive alcohol intake and heavy energy drinks with synthetic caffeine"
      ],
      "exercises": [
        "Aerobic exercise: Brisk walking, swimming, light jogging 30-40 minutes daily",
        "Isometric handgrip training (proven to lower resting systolic BP by 5-10 mmHg)",
        "Deep diaphragmatic breathing exercises (6 breaths per minute for 5 minutes twice daily)",
        "Gentle stretching and mobility work"
      ],
      "lifestyle": [
        "Measure blood pressure at the same time each morning while seated calmly",
        "Restrict daily sodium intake by avoiding table salt shaker",
        "Screen for sleep apnea if loud snoring or daytime somnolence is present",
        "Limit caffeine intake to moderate levels"
      ],
      "whenToConsult": "Call emergency services if BP exceeds 180/120 mmHg, or if high BP is accompanied by severe chest pressure, sudden severe headache, or numbness/speech difficulty.",
      "faqs": [
        {
          "q": "If I feel completely fine, do I still need to take blood pressure medication?",
          "a": "Yes. High blood pressure is notoriously silent. The absence of symptoms does not mean blood vessels and kidneys are protected. Never stop antihypertensives without consulting your physician."
        },
        {
          "q": "How fast can lifestyle changes reduce blood pressure?",
          "a": "Adopting the DASH diet, reducing sodium, and walking daily can lower systolic blood pressure by 8 to 14 mmHg within 2 to 4 weeks."
        }
      ],
      "references": [
        "AHA/ACC Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults",
        "World Health Organization (WHO) Hypertension Factsheet 2023",
        "European Society of Cardiology (ESC) / ESH Hypertension Guidelines"
      ]
    },
    {
      "id": "heart-disease",
      "name": "Heart Disease (Cardiovascular Disease)",
      "name_ml": "ഹൃദ്രോഗം (കാർഡിയോവാസ്കുലർ അസുഖങ്ങൾ)",
      "name_hi": "हृदय रोग (कार्डियोवास्कुलर बीमारी)",
      "name_ar": "أمراض القلب والأوعية الدموية",
      "category": "lifestyle",
      "badge": "Global #1 Killer",
      "icon": "heart",
      "shortDesc": "A broad spectrum of conditions affecting heart structure and blood vessels, leading to heart attacks and heart failure.",
      "whatIsIt": "Heart disease encompasses disorders affecting the cardiac muscle, valves, electrical conduction system, and coronary arteries. Atherosclerotic coronary heart disease—the buildup of fatty plaques that restrict blood flow to heart muscle—is the leading cause of mortality worldwide.",
      "causes": [
        "Atherosclerosis: Progressive accumulation of oxidized LDL cholesterol and calcium in coronary walls",
        "Endothelial injury caused by smoking toxins, hypertension, and advanced glycation end-products",
        "Chronic systemic inflammation indicated by elevated high-sensitivity CRP",
        "Genetic hypercholesterolemia and lipoprotein(a) elevations"
      ],
      "symptoms": [
        "Angina pectoris: Pressure, squeezing, fullness, or pain in the center of the chest",
        "Pain or discomfort radiating to one or both arms, neck, jaw, shoulder, or upper stomach",
        "Shortness of breath with minimal exertion or when lying flat (orthopnea)",
        "Cold sweats, unexpected dizziness, or lightheadedness",
        "Unusual fatigue, particularly noticed in women as an atypical warning sign"
      ],
      "warningSigns": [
        "ACUTE MYOCARDIAL INFARCTION (Heart Attack): Crushing chest pain lasting > 5 minutes, nausea, diaphoresis",
        "Cardiac arrest: Sudden collapse, unresponsiveness, loss of normal breathing",
        "Acute pulmonary edema: Sudden extreme breathlessness with pink frothy sputum"
      ],
      "riskFactors": [
        "Elevated ApoB and LDL cholesterol (> 100 mg/dL or > 70 mg/dL in high risk)",
        "Cigarette smoking and exposure to secondhand smoke",
        "Uncontrolled diabetes mellitus and insulin resistance",
        "Physical inactivity and chronic psychological distress",
        "Premature family history of coronary heart disease (< 55 in men, < 65 in women)"
      ],
      "bodyImpact": "Myocardial ischemia damages cardiac myocytes, leading to scar tissue formation, reduced ejection fraction, congestive heart failure, lethal arrhythmias (ventricular fibrillation), and sudden cardiac death.",
      "diagnosis": [
        "12-Lead Electrocardiogram (ECG) for ischemic ST changes or prior infarction",
        "High-sensitivity cardiac troponin I/T blood markers",
        "Coronary Artery Calcium (CAC) CT scan for asymptomatic risk stratification",
        "Echocardiography to measure ejection fraction and wall motion abnormalities",
        "Coronary Angiography (Cardiac Catheterization) for definitive plaque localization"
      ],
      "treatments": [
        "Emergency Percutaneous Coronary Intervention (PCI) with drug-eluting stents",
        "Coronary Artery Bypass Graft (CABG) surgery",
        "Lipid-lowering therapy: High-intensity Statins, Ezetimibe, PCSK9 inhibitors",
        "Antiplatelet therapy: Aspirin, Clopidogrel, Ticagrelor",
        "Beta-blockers, ACE inhibitors, and structured Cardiac Rehabilitation programs"
      ],
      "prevention": "Primary prevention relies on the Mediterranean diet, maintaining healthy blood pressure, achieving LDL < 70-100 mg/dL, zero tobacco use, 150 minutes of weekly aerobic exercise, and maintaining healthy body weight.",
      "safeFoods": [
        "Fatty cold-water fish rich in Omega-3 EPA/DHA (salmon, mackerel, sardines)",
        "Extra virgin olive oil as the primary dietary fat",
        "A variety of colorful vegetables, berries, and legumes",
        "Raw tree nuts (walnuts, almonds) and whole grains (oats, brown rice)",
        "Garlic, green tea, and dark chocolate (> 70% cocoa in moderation)"
      ],
      "avoidFoods": [
        "Commercial baked goods with partially hydrogenated oils (trans fats)",
        "Deep-fried fast foods and processed charcuterie (sausages, hot dogs)",
        "Refined sugar, sugary sodas, and candy",
        "Heavy intake of fatty red meats and tropical oils (palm oil)"
      ],
      "exercises": [
        "Gradual aerobic conditioning: 30 minutes brisk walking or cycling most days",
        "Supervised cardiac rehabilitation protocols for post-event recovery",
        "Low-impact resistance band exercises",
        "Avoid sudden heavy isometric straining if severe coronary disease is present"
      ],
      "lifestyle": [
        "Completely quit smoking and avoid all e-cigarettes/vaping",
        "Maintain a sleep schedule of 7 to 8 hours nightly",
        "Practice daily stress moderation through mindfulness or hobbies",
        "Know your cardiovascular ABCs: A1c, Blood pressure, Cholesterol"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY for new or worsening chest pressure, pain spreading to the arm or jaw, or unexplained sudden breathlessness. Every minute counts.",
      "faqs": [
        {
          "q": "Do women experience different heart attack symptoms than men?",
          "a": "Yes. While chest pressure remains common, women are more likely to experience atypical symptoms including shortness of breath, profound fatigue, nausea, back or jaw pain without classic crushing chest discomfort."
        },
        {
          "q": "Can heart disease be reversed once plaques form?",
          "a": "Intensive lifestyle therapy combined with lipid-lowering medications can stabilize vulnerable plaques, reduce arterial inflammation, and promote regression of coronary stenosis as shown in modern clinical imaging trials."
        }
      ],
      "references": [
        "American Heart Association (AHA) Primary Prevention Guidelines 2023",
        "European Society of Cardiology (ESC) Guidelines on Cardiovascular Disease Prevention",
        "World Heart Federation Global Heart Disease Statistics"
      ]
    },
    {
      "id": "cad",
      "name": "Coronary Artery Disease (CAD)",
      "name_ml": "കൊറോണറി ആർട്ടറി രോഗം (സി.എ.ഡി)",
      "name_hi": "कोरोनरी धमनी रोग (सीएडी)",
      "name_ar": "مرض الشريان التاجي",
      "category": "lifestyle",
      "badge": "Ischemic Heart Disease",
      "icon": "heart",
      "shortDesc": "Narrowing or blockage of the coronary arteries caused by atheromatous plaque buildup, starving heart muscle of oxygen.",
      "whatIsIt": "Coronary Artery Disease (CAD) is the most common type of heart disease. It develops when the major blood vessels that supply the heart muscle with blood, oxygen, and nutrients become narrowed or hardened by cholesterol-containing deposits (plaques) and chronic arterial inflammation.",
      "causes": [
        "Atherosclerotic plaque accumulation in coronary arterial walls",
        "Endothelial dysfunction from smoking, hypertension, and oxidative stress",
        "High levels of low-density lipoprotein (LDL) and triglycerides",
        "Elevated inflammatory biomarkers including hs-CRP and homocysteine"
      ],
      "symptoms": [
        "Stable angina: Predictable chest discomfort during physical exertion relieved by rest",
        "Shortness of breath on mild climbing or brisk walking",
        "Sensation of tightness, burning, or heaviness across the chest",
        "Pain in left arm, neck, or lower jaw",
        "Fatigue and reduced exercise tolerance"
      ],
      "warningSigns": [
        "Unstable Angina: Chest pain occurring at rest or escalating in frequency and severity",
        "Acute coronary syndrome: Diaphoresis, nausea, dizziness with intense chest pressure",
        "Syncope (fainting) during exertion"
      ],
      "riskFactors": [
        "Elevated LDL cholesterol and low HDL cholesterol",
        "High systolic and diastolic blood pressure",
        "Diabetes mellitus and metabolic syndrome",
        "Tobacco use and sedentary lifestyle",
        "Family history of premature CAD"
      ],
      "bodyImpact": "CAD starves the myocardium of oxygenated blood. If a plaque ruptures, a blood clot forms instantaneously, occluding the artery and causing acute myocardial infarction, irreversible tissue necrosis, and life-threatening ventricular arrhythmias.",
      "diagnosis": [
        "Coronary CT Angiography (CCTA) to visualize lumen narrowing",
        "Exercise or Pharmacological Stress Testing with ECG/Nuclear imaging",
        "Coronary Calcium Score (CAC) indicating plaque burden",
        "Invasive Coronary Angiogram",
        "Fractional Flow Reserve (FFR) during catheterization"
      ],
      "treatments": [
        "Percutaneous Coronary Intervention (PCI) with drug-eluting stents",
        "Coronary Artery Bypass Grafting (CABG) for multi-vessel disease",
        "Dual antiplatelet therapy (Aspirin + P2Y12 inhibitor)",
        "Statins, Ezetimibe, and PCSK9 inhibitors to drive LDL < 55 mg/dL",
        "Beta-blockers and Nitroglycerin for angina relief"
      ],
      "prevention": "Adhere to a strict Mediterranean diet, achieve an LDL cholesterol target below 70 mg/dL, keep blood pressure under 130/80 mmHg, maintain daily physical movement, and completely avoid all nicotine products.",
      "safeFoods": [
        "Cold-water fatty fish (salmon, tuna, sardines) twice weekly",
        "Oat bran, chia seeds, and legumes rich in soluble beta-glucans",
        "Extra virgin olive oil, walnuts, and flaxseeds",
        "Cruciferous vegetables and berries loaded with polyphenols",
        "Plant sterol-fortified foods and leafy greens"
      ],
      "avoidFoods": [
        "Commercial trans-fat margarine and fried bakery foods",
        "High-sodium processed meats and sausages",
        "Refined flour goods, added sugar syrups, and sweet sodas",
        "Fatty cuts of beef and pork with visible saturated fat"
      ],
      "exercises": [
        "30 to 45 minutes of moderate-intensity continuous aerobic walking 5 days per week",
        "Low-impact cycling or elliptical training",
        "Supervised cardiac rehabilitation exercise protocols",
        "Gentle stretching and mobility routines"
      ],
      "lifestyle": [
        "Carry sublingual nitroglycerin if prescribed for acute angina",
        "Stop smoking immediately and avoid all secondhand tobacco vapor",
        "Manage emotional stress and avoid explosive temper outbursts",
        "Weigh yourself regularly and monitor resting pulse"
      ],
      "whenToConsult": "Seek IMMEDIATE emergency care if you have chest pain that does not resolve within 5 minutes of rest or after taking prescribed nitroglycerin.",
      "faqs": [
        {
          "q": "What is the difference between CAD and a heart attack?",
          "a": "CAD is the long-term underlying disease where arteries become narrow and stiff. A heart attack is the acute event that happens when a narrowed artery gets completely blocked by a blood clot."
        },
        {
          "q": "Can stents cure coronary artery disease?",
          "a": "No. A stent opens an acute blockage at one specific spot, but does not stop CAD from developing elsewhere. Long-term medication and lifestyle changes are essential to prevent new blockages."
        }
      ],
      "references": [
        "ACC/AHA Guidelines for the Diagnosis and Management of Patients with Stable Ischemic Heart Disease",
        "ESC Clinical Practice Guidelines for Chronic Coronary Syndromes 2024",
        "Mayo Clinic Cardiovascular Clinical Review"
      ]
    },
    {
      "id": "obesity",
      "name": "Obesity & Visceral Adiposity",
      "name_ml": "അമിതവണ്ണവും പൊണ്ണത്തടിയും",
      "name_hi": "मोटापा और अत्यधिक चर्बी",
      "name_ar": "السمنة وزيادة الوزن",
      "category": "lifestyle",
      "badge": "Metabolic Risk",
      "icon": "user-x",
      "shortDesc": "A complex chronic disease characterized by excessive fat accumulation that impairs physiological function and metabolic health.",
      "whatIsIt": "Obesity is a complex, multifactorial, relapsing chronic disease defined by abnormal or excessive adiposity, particularly visceral fat stored inside the abdominal cavity around vital organs. Visceral fat acts as an active endocrine organ, releasing inflammatory adipokines that drive cardiovascular and metabolic diseases.",
      "causes": [
        "Chronic positive energy balance (hyper-palatable ultra-processed foods combined with low activity)",
        "Neuroendocrine disruption of appetite regulation (leptin resistance, ghrelin dysregulation)",
        "Genetic variations affecting metabolic rate and satiety signaling",
        "Sleep deprivation and chronic high cortisol leading to central fat deposition",
        "Side effects of certain medications (antipsychotics, steroids, beta-blockers)"
      ],
      "symptoms": [
        "Elevated Body Mass Index (BMI >= 30 kg/m2, or >= 27.5 kg/m2 for Asian populations)",
        "High waist circumference (> 40 inches in men, > 35 inches in women)",
        "Exertional shortness of breath and decreased stamina",
        "Loud snoring, daytime sleepiness, and Obstructive Sleep Apnea",
        "Joint pain in knees, hips, and lower back due to excessive mechanical loading",
        "Acanthosis nigricans (velvety dark skin patches around neck and armpits)"
      ],
      "warningSigns": [
        "Severe sleep apnea with nocturnal oxygen desaturation",
        "Development of non-alcoholic steatohepatitis (NASH) or metabolic liver fibrosis",
        "Severe exertional chest pain indicating occult coronary disease"
      ],
      "riskFactors": [
        "Ultra-processed food environment and high intake of liquid calories",
        "Desk-bound sedentary occupations and excessive screen time",
        "Socioeconomic barriers to fresh nutrient-dense foods",
        "Depression, anxiety, and emotional comfort eating habits"
      ],
      "bodyImpact": "Adipose tissue hypertrophy promotes macrophage infiltration and systemic low-grade inflammation. This accelerates atherogenesis, causes hepatic steatosis, drives insulin resistance, increases risk of 13 types of cancer, and damages weight-bearing cartilage.",
      "diagnosis": [
        "BMI calculation (weight in kg divided by height in meters squared)",
        "Waist-to-Hip Ratio (WHR) and Waist Circumference measurement",
        "DEXA scan or Bioelectrical Impedance Analysis for body fat percentage",
        "Comprehensive metabolic panel: Fasting lipids, HbA1c, liver transaminases",
        "High-sensitivity C-reactive protein (hs-CRP)"
      ],
      "treatments": [
        "Medical Nutrition Therapy (caloric deficit with high protein and micronutrient density)",
        "Modern Anti-Obesity Medications (GLP-1 receptor agonists e.g. Semaglutide, Tirzepatide)",
        "Bariatric / Metabolic Surgery (Sleeve gastrectomy, Gastric bypass) for BMI >= 40 or >= 35 with co-morbidities",
        "Behavioral lifestyle counseling and cognitive behavioral therapy for emotional eating",
        "Structured progressive physical activity plans"
      ],
      "prevention": "Cultivate lifelong habits of eating whole unprocessed foods, eliminating sugary beverages, engaging in at least 200 minutes of weekly physical activity, limiting recreational screen time, and prioritizing 7-8 hours of sleep.",
      "safeFoods": [
        "Lean protein sources (egg whites, poultry, Greek yogurt, legumes, tofu)",
        "High-volume, low-calorie cruciferous vegetables and green salads",
        "Whole fruits in moderate portions (apples, berries, citrus)",
        "Whole oats, quinoa, and high-fiber beans that enhance satiety",
        "Ample plain water, sparkling water with lemon, and unsweetened green tea"
      ],
      "avoidFoods": [
        "High-fructose corn syrup sodas, milkshakes, and energy drinks",
        "Ultra-processed convenience foods, chips, and packaged bakery goods",
        "Deep-fried battered foods and heavy restaurant sauces",
        "Excessive alcohol calories and high-fat confectioneries"
      ],
      "exercises": [
        "Low-impact cardiovascular exercise: Brisk walking, water aerobics, recumbent biking",
        "Full-body resistance training to preserve lean muscle mass during weight loss",
        "Daily NEAT (Non-Exercise Activity Thermogenesis): Standing desk, stairs, pacing",
        "Joint-friendly stretching and mobility exercises"
      ],
      "lifestyle": [
        "Eat mindfully without screens and chew food slowly to perceive satiety signals",
        "Keep food logs or photo journals to raise dietary awareness",
        "Weigh yourself once a week under consistent conditions",
        "Build a supportive social environment for healthy cooking and walking"
      ],
      "whenToConsult": "Consult a healthcare professional or bariatric physician if lifestyle attempts fail to prevent progressive weight gain, or if you develop snoring, chronic joint pain, or prediabetes.",
      "faqs": [
        {
          "q": "Is obesity just a matter of willpower?",
          "a": "No. Modern neurobiology proves that obesity is a complex biological disease involving strong hormonal feedback loops in the brain (hypothalamus) that resist weight loss by increasing hunger and reducing metabolic rate."
        },
        {
          "q": "How much weight loss is needed to see health improvements?",
          "a": "Losing just 5% to 10% of total body weight produces dramatic clinical improvements in blood pressure, blood glucose, cholesterol levels, and liver fat."
        }
      ],
      "references": [
        "World Health Organization (WHO) Obesity and Overweight Factsheet",
        "The Lancet Commission on Obesity 2023",
        "American Association of Clinical Endocrinology (AACE) Comprehensive Obesity Guidelines"
      ]
    },
    {
      "id": "high-cholesterol",
      "name": "High Cholesterol (Hyperlipidemia)",
      "name_ml": "അമിത കൊളസ്ട്രോൾ (ഹൈപ്പർലിപിഡീമിയ)",
      "name_hi": "उच्च कोलेस्ट्रॉल (हाइपरलिपिडिमिया)",
      "name_ar": "ارتفاع الكوليسترول في الدم",
      "category": "lifestyle",
      "badge": "Atherogenic Danger",
      "icon": "activity",
      "shortDesc": "Elevated levels of low-density lipoprotein (LDL) cholesterol and triglycerides that build plaque in blood vessels.",
      "whatIsIt": "High cholesterol is a metabolic disorder where excessive concentrations of atherogenic lipids—particularly Low-Density Lipoprotein (LDL-C) and Apolipoprotein B (ApoB)—circulate in the blood. These particles penetrate arterial endothelial walls, oxidize, and initiate inflammatory plaque deposits.",
      "causes": [
        "High dietary intake of saturated and industrial trans fats",
        "Hepatic overproduction of VLDL cholesterol and impaired LDL receptor clearance",
        "Familial Hypercholesterolemia (monogenic mutation in LDLR, APOB, or PCSK9 genes)",
        "Physical inactivity and visceral obesity",
        "Secondary causes: Hypothyroidism, nephrotic syndrome, and chronic kidney disease"
      ],
      "symptoms": [
        "Typically completely symptom-free until an acute cardiovascular event occurs",
        "Xanthelasma: Yellowish cholesterol deposits on inner eyelids in severe cases",
        "Tendon xanthomas: Firm nodules over Achilles tendons or knuckle tendons",
        "Arcus senilis: Grayish-white ring around the cornea in younger adults",
        "Claudication: Leg cramping during walking due to peripheral artery disease"
      ],
      "warningSigns": [
        "Sudden angina chest pain during exertion",
        "Transient Ischemic Attack (mini-stroke): Temporary vision loss or limb weakness",
        "Severe acute pancreatitis triggered by extreme hypertriglyceridemia (> 500 mg/dL)"
      ],
      "riskFactors": [
        "Diet heavy in red meat, full-fat dairy, palm oil, and processed bakery goods",
        "Lack of regular vigorous or moderate aerobic physical exercise",
        "Tobacco smoking (which lowers protective HDL and oxidizes LDL)",
        "Excessive alcohol intake (which dramatically elevates blood triglycerides)",
        "Strong family history of early heart attacks"
      ],
      "bodyImpact": "Circulating atherogenic lipoproteins infiltrate the arterial intima, trigger macrophage foam cell formation, generate fibrous caps, calcify arterial walls, restrict blood flow, and set the stage for thrombosis upon plaque rupture.",
      "diagnosis": [
        "Fasting Lipid Profile: Total Cholesterol, LDL-C, HDL-C, and Triglycerides",
        "Apolipoprotein B (ApoB) blood test (the most direct particle-count measure of atherogenicity)",
        "Lipoprotein(a) [Lp(a)] test (a powerful independent genetic risk marker)",
        "High-sensitivity C-Reactive Protein (hs-CRP) for vascular inflammation",
        "Coronary Calcium Score (CAC) via low-dose CT"
      ],
      "treatments": [
        "Therapeutic Lifestyle Changes (TLC diet: high soluble fiber, low saturated fat)",
        "HMG-CoA Reductase Inhibitors (Statins e.g. Atorvastatin, Rosuvastatin)",
        "Cholesterol absorption inhibitor (Ezetimibe)",
        "PCSK9 monoclonal antibodies (Evolocumab, Alirocumab) or Inclisiran siRNA",
        "Prescription Omega-3 icosapent ethyl for severe hypertriglyceridemia"
      ],
      "prevention": "Replace saturated fats with monounsaturated and polyunsaturated fats, consume at least 30 grams of fiber daily, engage in 150 minutes of weekly cardio, maintain healthy body fat percentage, and test lipid levels every 3-5 years starting in young adulthood.",
      "safeFoods": [
        "Soluble fiber powerhouses: Oats, barley, psyllium husk, kidney beans, lentils",
        "Plant sterol and stanol enriched foods and soy products",
        "Fatty fish high in Omega-3 (salmon, mackerel, sardines)",
        "Tree nuts (almonds, walnuts) and seeds (chia, ground flaxseeds)",
        "Avocados, cold-pressed olive oil, and garlic"
      ],
      "avoidFoods": [
        "Commercial fried snacks containing partially hydrogenated vegetable oils",
        "Fatty cuts of meat, sausages, cured meats, and organ meats",
        "Full-fat dairy, heavy whipping creams, butter, and ghee in excess",
        "Packaged cookies, pastries, and confectionery made with palm kernel oil"
      ],
      "exercises": [
        "Moderate to high-intensity aerobic exercise (brisk walking, jogging, cycling, rowing)",
        "High-Intensity Interval Training (HIIT) to boost cardiopulmonary fitness",
        "Resistance training 2-3 times per week to improve metabolic clearance",
        "Daily brisk 10-minute walks after major meals"
      ],
      "lifestyle": [
        "Quit smoking completely (HDL cholesterol rebounds within weeks of cessation)",
        "Strictly limit alcohol consumption to reduce hepatic triglyceride synthesis",
        "Get baseline blood lipid panels tested annually",
        "Maintain a consistent Mediterranean-style whole-food regimen"
      ],
      "whenToConsult": "Schedule a medical consultation if your total cholesterol is > 200 mg/dL, LDL > 130 mg/dL (or > 70 mg/dL if diabetic/hypertensive), or triglycerides > 150 mg/dL.",
      "faqs": [
        {
          "q": "What is the difference between 'good' HDL and 'bad' LDL cholesterol?",
          "a": "LDL carries cholesterol to tissues and can deposit it into arterial walls to form plaques. HDL carries excess cholesterol away from tissues back to the liver for excretion."
        },
        {
          "q": "Do eggs drastically raise blood cholesterol?",
          "a": "For most people, dietary cholesterol from eggs has minimal impact on blood LDL levels compared to saturated fats. However, moderation (1 egg per day) is recommended for people with diabetes or familial hypercholesterolemia."
        }
      ],
      "references": [
        "AHA/ACC Multisociety Guideline on the Management of Blood Cholesterol",
        "National Heart, Lung, and Blood Institute (NHLBI) High Blood Cholesterol Guidelines",
        "European Atherosclerosis Society (EAS) Consensus Statements"
      ]
    },
    {
      "id": "stroke",
      "name": "Stroke (Cerebrovascular Accident)",
      "name_ml": "പക്ഷാഘാതം (സ്ട്രോക്ക്)",
      "name_hi": "स्ट्रोक (लकवा)",
      "name_ar": "السكتة الدماغية",
      "category": "lifestyle",
      "badge": "Medical Emergency",
      "icon": "alert-octagon",
      "shortDesc": "A critical neurological emergency where blood supply to part of the brain is interrupted or reduced, depriving brain tissue of oxygen.",
      "whatIsIt": "A stroke occurs when the blood flow to an area of the brain is cut off. Brain cells, deprived of oxygen and essential glucose, begin dying within minutes. The two primary types are Ischemic Stroke (caused by a blood clot occluding a cerebral artery, ~87% of cases) and Hemorrhagic Stroke (caused by a ruptured blood vessel leaking blood into cerebral tissue).",
      "causes": [
        "Thrombosis or embolism: Blood clot formed locally or originating from the heart (Atrial Fibrillation)",
        "Cerebral vessel rupture due to long-standing severe uncontrolled hypertension",
        "Cerebral amyloid angiopathy or ruptured berry aneurysms / arteriovenous malformations (AVMs)",
        "Carotid artery atherosclerosis and plaque embolization"
      ],
      "symptoms": [
        "F - FACE: One side of the face droops or is numb when trying to smile",
        "A - ARMS: One arm is weak or numb, drifting downward when both arms are raised",
        "S - SPEECH: Slurred speech, inability to speak, or difficulty comprehending speech",
        "T - TIME: Time to call emergency medical services immediately",
        "Sudden severe 'thunderclap' headache with no known cause",
        "Sudden loss of balance, vertigo, or sudden blindness/dimness in one eye"
      ],
      "warningSigns": [
        "Transient Ischemic Attack (TIA): Temporary 'mini-stroke' symptoms lasting minutes to an hour that resolve completely — a major predictor of impending full stroke",
        "Sudden facial numbness, unilateral limb paralysis, acute confusion"
      ],
      "riskFactors": [
        "Chronic uncontrolled high blood pressure (the single greatest modifiable risk factor)",
        "Atrial Fibrillation (cardiac arrhythmia causing intracardiac blood stasis)",
        "Diabetes mellitus and cigarette smoking",
        "High LDL cholesterol and carotid artery stenosis",
        "Obesity, sleep apnea, and heavy binge drinking"
      ],
      "bodyImpact": "Ischemic brain cells die rapidly, resulting in focal neurological deficits depending on the affected vascular territory: contralateral hemiplegia, aphasia, cognitive impairment, emotional dysregulation, dysphagia, or death if brainstem centers are compromised.",
      "diagnosis": [
        "Emergency Non-Contrast Head CT scan to rapidly differentiate Ischemic from Hemorrhagic stroke",
        "Brain MRI (Diffusion-Weighted Imaging) showing acute infarct core within minutes",
        "CT Angiography / MR Angiography of head and neck vessels",
        "Echocardiogram and Holter monitor to detect Atrial Fibrillation or cardiac source of emboli",
        "NIH Stroke Scale (NIHSS) neurological assessment"
      ],
      "treatments": [
        "Emergency intravenous thrombolysis (IV Alteplase or Tenecteplase) within 4.5 hours of symptom onset for ischemic stroke",
        "Endovascular Mechanical Thrombectomy (clot retrieval catheter) up to 24 hours in selected large-vessel occlusions",
        "Surgical clipping or coiling for ruptured cerebral aneurysms",
        "Blood pressure lowering and reversal of anticoagulation for hemorrhagic stroke",
        "Comprehensive inpatient neurological, speech, and physical rehabilitation"
      ],
      "prevention": "Up to 80% of strokes are preventable. Keep blood pressure below 130/80 mmHg, treat Atrial Fibrillation with anticoagulation, manage diabetes, quit smoking, maintain active physical fitness, and consume a low-sodium, high-potassium diet.",
      "safeFoods": [
        "Potassium-rich vegetables and fruits (spinach, bananas, avocados, sweet potatoes)",
        "Whole grain oats, quinoa, brown rice providing steady sustained energy",
        "Cold-water fish providing neuroprotective Omega-3 fatty acids",
        "Berries rich in flavonoids (blueberries, blackberries)",
        "Extra virgin olive oil and green tea"
      ],
      "avoidFoods": [
        "High-sodium cured meats, salted snacks, and canned soups that drive hypertension",
        "Trans fats and heavily deep-fried foods",
        "Heavy alcohol binge drinking (dramatically spikes hemorrhagic stroke risk)",
        "High-sugar desserts and sweetened beverages"
      ],
      "exercises": [
        "Post-stroke physical therapy: Gait retraining, motor task practice, balance drills",
        "Preventive aerobic exercise: 30 minutes brisk walking 5 days a week",
        "Light resistance training to maintain neuromuscular coordination",
        "Gentle stretching and Tai Chi to prevent fall injuries"
      ],
      "lifestyle": [
        "Memorize the B.E. F.A.S.T. stroke warning protocol (Balance, Eyes, Face, Arms, Speech, Time)",
        "Monitor blood pressure at home every morning",
        "Completely quit smoking and avoid tobacco smoke exposure",
        "Take prescribed anticoagulant or antiplatelet medications consistently"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES (911/112/999) IMMEDIATELY if anyone exhibits sudden face drooping, arm weakness, slurred speech, or sudden loss of balance. Do not wait for symptoms to improve.",
      "faqs": [
        {
          "q": "What does 'Time is Brain' mean during a stroke?",
          "a": "During an acute ischemic stroke, approximately 1.9 million brain neurons die every minute the blood supply is blocked. Getting to an emergency stroke center within the first 3 to 4.5 hours allows clot-busting treatments that can reverse permanent paralysis."
        },
        {
          "q": "Can a young, fit person have a stroke?",
          "a": "Yes. While strokes are more common in older adults, 10-15% of strokes occur in people under 50, often due to carotid artery dissections, congenital heart defects (PFO), clotting disorders, or extreme hypertension."
        }
      ],
      "references": [
        "American Heart Association / American Stroke Association (AHA/ASA) Stroke Guidelines",
        "World Stroke Organization (WSO) Global Stroke Factsheet 2023",
        "Lancet Neurology Commission on Stroke Prevention and Care"
      ]
    },
    {
      "id": "fatty-liver",
      "name": "Fatty Liver Disease (NAFLD / MASLD)",
      "name_ml": "ഫാറ്റി ലിവർ രോഗം",
      "name_hi": "फैटी लिवर रोग",
      "name_ar": "مرض الكبد الدهني",
      "category": "lifestyle",
      "badge": "Metabolic Liver Disease",
      "icon": "disc",
      "shortDesc": "Abnormal accumulation of neutral lipids (triglycerides) within hepatocytes, progressing to inflammation and cirrhosis.",
      "whatIsIt": "Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD, formerly NAFLD) occurs when excess fat builds up in liver cells exceeding 5% of liver weight, in the absence of heavy alcohol use. It ranges from simple steatosis to Metabolic Dysfunction-Associated Steatohepatitis (MASH), which involves active cellular injury, chronic inflammation, and fibrosis.",
      "causes": [
        "Severe systemic insulin resistance that impairs hepatic fatty acid oxidation",
        "Excess dietary intake of high-fructose corn syrup and refined carbohydrates",
        "Visceral adiposity and elevated free fatty acid influx into portal circulation",
        "Genetic polymorphisms such as PNPLA3 (patatin-like phospholipase domain 3)"
      ],
      "symptoms": [
        "Frequently asymptomatic in early simple steatosis stages",
        "Dull ache or discomfort in the right upper quadrant of the abdomen",
        "Persistent unexplained physical fatigue and brain fog",
        "Hepatomegaly (enlarged liver detectable on palpation)",
        "Advanced signs: Jaundice, spider angiomas, abdominal swelling (ascites)"
      ],
      "warningSigns": [
        "Signs of decompensated liver cirrhosis: Jaundice, confusion (hepatic encephalopathy), vomiting blood (esophageal varices)",
        "Unexplained rapid abdominal distension (fluid ascites)"
      ],
      "riskFactors": [
        "Metabolic syndrome, Type 2 diabetes, or prediabetes",
        "Elevated BMI and central abdominal obesity",
        "High blood triglycerides and low HDL cholesterol",
        "Sedentary lifestyle and high consumption of sugar-sweetened sodas"
      ],
      "bodyImpact": "Excess lipid overload causes lipotoxicity, oxidative stress, and mitochondrial injury in hepatocytes. Activated hepatic stellate cells produce dense collagen scar tissue, progressing from steatosis to fibrosis, cirrhosis, and hepatocellular carcinoma (liver cancer).",
      "diagnosis": [
        "Abdominal Ultrasound showing hepatic hyperechogenicity ('bright liver')",
        "Elevated serum Alanine Aminotransferase (ALT) and Aspartate Aminotransferase (AST)",
        "Transient Elastography (FibroScan) to quantify liver stiffness and steatosis (CAP score)",
        "FIB-4 Index (age, AST, ALT, platelet count) for fibrosis risk stratification",
        "Liver Biopsy (gold standard for diagnosing NASH/MASH and staging fibrosis)"
      ],
      "treatments": [
        "Lifestyle intervention targeting 7-10% total body weight reduction",
        "Resmetirom (FDA-approved thyroid hormone receptor-beta agonist for MASH with fibrosis)",
        "GLP-1 receptor agonists (e.g., Semaglutide) to improve glycemic control and reduce liver fat",
        "High-dose Vitamin E (800 IU/day) in non-diabetic adults with biopsy-proven MASH",
        "Optimal management of co-existing dyslipidemia and diabetes"
      ],
      "prevention": "Fatty liver is highly reversible in early stages. Eliminate all sugary sodas and high-fructose syrups, limit alcohol, consume a Mediterranean diet rich in antioxidants, and perform at least 150-200 minutes of weekly aerobic and resistance exercises.",
      "safeFoods": [
        "Black coffee (2 to 3 cups daily has proven anti-fibrotic hepatoprotective properties)",
        "Leafy cruciferous greens (spinach, kale, broccoli, cabbage)",
        "Cold-pressed extra virgin olive oil and avocados",
        "Fatty fish high in Omega-3 fatty acids",
        "Walnuts, sunflower seeds, and whole unsweetened soy"
      ],
      "avoidFoods": [
        "High-fructose corn syrup, sweetened juices, and soft drinks (fructose directly converts to liver fat)",
        "Refined bakery carbs, white bread, and maida-based sweets",
        "Alcohol in any form if steatohepatitis or elevated enzymes are present",
        "Excessive red meat, processed meats, and saturated cooking fats"
      ],
      "exercises": [
        "Combined aerobic and resistance training 4 to 5 times weekly (decreases intrahepatic fat independently of weight loss)",
        "Brisk uphill walking, swimming, or stationary cycling",
        "Bodyweight squats, push-ups, and resistance bands",
        "Post-meal 15-minute walks to enhance peripheral glucose disposal"
      ],
      "lifestyle": [
        "Avoid all unregulated over-the-counter herbal supplements that can cause toxic liver injury",
        "Get vaccinated against Hepatitis A and Hepatitis B to protect liver health",
        "Get annual liver enzyme checks and non-invasive fibrosis scores (FIB-4)",
        "Prioritize 7-8 hours of nighttime sleep"
      ],
      "whenToConsult": "Consult a hepatologist or gastroenterologist if your routine blood tests show persistently elevated ALT/AST, if ultrasound reveals fatty infiltration, or if you develop abdominal pain or yellowing of the eyes.",
      "faqs": [
        {
          "q": "Can fatty liver disease be completely reversed?",
          "a": "Yes. Early-stage fatty liver (simple steatosis) and mild inflammation can be completely reversed by losing 7% to 10% of body weight, cutting out added fructose, and exercising regularly."
        },
        {
          "q": "Why is black coffee recommended for fatty liver?",
          "a": "Multiple large clinical studies show that regular black coffee consumption reduces liver stiffness, stimulates autophagy in hepatocytes, and protects against the progression of fibrosis."
        }
      ],
      "references": [
        "AASLD Practice Guidance on the Clinical Assessment and Management of NAFLD/MASLD",
        "EASL-EASD-EASO Clinical Practice Guidelines for the Management of Non-Alcoholic Fatty Liver Disease",
        "New England Journal of Medicine Review on Steatohepatitis"
      ]
    },
    {
      "id": "metabolic-syndrome",
      "name": "Metabolic Syndrome",
      "name_ml": "മെറ്റബോളിക് സിൻഡ്രോം",
      "name_hi": "मेटाबोलिक सिंड्रोम",
      "name_ar": "متلازمة التمثيل الغذائي",
      "category": "lifestyle",
      "badge": "Syndrome X",
      "icon": "layers",
      "shortDesc": "A dangerous cluster of metabolic abnormalities that multiply risk for heart disease, stroke, and type 2 diabetes.",
      "whatIsIt": "Metabolic syndrome is not a single disease, but a cluster of five interconnected clinical conditions: central abdominal obesity, elevated fasting blood glucose, high blood triglycerides, low HDL cholesterol, and high blood pressure. Having three or more of these criteria diagnoses metabolic syndrome.",
      "causes": [
        "Underlying systemic cellular insulin resistance",
        "Excess accumulation of dysfunctional visceral abdominal adiposity",
        "Chronic low-grade inflammatory signaling from ectopic fat depots",
        "Genetic susceptibility coupled with a modern obesogenic, ultra-processed diet",
        "Disrupted circadian rhythms and chronic physical inactivity"
      ],
      "symptoms": [
        "Often causes no overt physical symptoms in initial years",
        "Prominent abdominal bulge / 'apple-shaped' body profile",
        "Post-meal extreme fatigue, lethargy, and mental clouding",
        "Acanthosis nigricans (dark velvety skin patches on neck and groin)",
        "Mild shortness of breath during routine walking"
      ],
      "warningSigns": [
        "Blood pressure spiking above 140/90 mmHg",
        "Fasting blood glucose crossing 126 mg/dL into overt diabetes range",
        "Chest pressure or shortness of breath during exertion"
      ],
      "riskFactors": [
        "Waist circumference > 40 inches in men, > 35 inches in women",
        "Sedentary lifestyle with more than 6-8 hours daily sitting",
        "High intake of refined starches, trans fats, and sweetened beverages",
        "Advancing age and family history of metabolic disorders",
        "Polycystic Ovary Syndrome (PCOS) and non-alcoholic fatty liver"
      ],
      "bodyImpact": "Metabolic syndrome creates an aggressive pro-thrombotic and pro-inflammatory environment. It accelerates atherosclerosis throughout the arterial tree, damages kidney microvessels, and increases the lifetime risk of cardiovascular death by threefold.",
      "diagnosis": [
        "Diagnosis requires at least 3 of the following 5 criteria (NCEP ATP III / AHA criteria):",
        "1. Large waist circumference (>= 40 in / 102 cm for men; >= 35 in / 88 cm for women)",
        "2. Elevated triglycerides (>= 150 mg/dL or on drug treatment)",
        "3. Reduced HDL cholesterol (< 40 mg/dL for men; < 50 mg/dL for women)",
        "4. Elevated blood pressure (>= 130/85 mmHg or on antihypertensive therapy)",
        "5. Elevated fasting glucose (>= 100 mg/dL or on drug treatment for elevated glucose)"
      ],
      "treatments": [
        "Targeted lifestyle transformation: 7-10% weight loss through Mediterranean or low-carb diet",
        "150-300 minutes of weekly moderate aerobic and strength exercises",
        "Metformin for patients with high risk of progressing to overt Type 2 diabetes",
        "Lipid-lowering medications (Statins, Fibrates) to normalize lipid ratios",
        "ACE inhibitors or ARBs for blood pressure control"
      ],
      "prevention": "Metabolic syndrome is highly preventable through daily physical activity, avoiding liquid calories and refined starches, maintaining a healthy waist-to-height ratio (< 0.5), getting quality sleep, and managing chronic stress.",
      "safeFoods": [
        "Non-starchy vegetables (spinach, cauliflower, peppers, zucchini)",
        "High-fiber legumes and beans (lentils, black beans, edamame)",
        "Healthy monounsaturated fats (extra virgin olive oil, avocados, almonds)",
        "Fatty fish high in Omega-3 (salmon, mackerel, sardines)",
        "Green tea and unsweetened black coffee"
      ],
      "avoidFoods": [
        "Sweetened carbonated beverages, energy drinks, and flavored coffees",
        "Refined grain products (white bread, white rice, breakfast pastries)",
        "Processed meats and deep-fried convenience meals",
        "Trans fats and hydrogenated cooking oils"
      ],
      "exercises": [
        "Brisk walking 40-50 minutes daily (promotes non-insulin-mediated glucose uptake)",
        "Progressive resistance training 3 days weekly to build metabolically active muscle",
        "Interval cycling or rowing sessions",
        "Daily stretching and balance routines"
      ],
      "lifestyle": [
        "Measure waist circumference at the belly button once a month",
        "Avoid eating heavy meals late at night close to bedtime",
        "Maintain consistent sleep-wake cycles (7-8 hours per night)",
        "Stop smoking and limit alcohol intake strictly"
      ],
      "whenToConsult": "Consult your doctor if you meet any 2 of the risk criteria (e.g., high waistline and high BP) to establish a comprehensive preventive care plan before irreversible arterial damage occurs.",
      "faqs": [
        {
          "q": "Is metabolic syndrome the same as diabetes?",
          "a": "No. Metabolic syndrome is a cluster of risk factors that includes elevated blood sugar. People with metabolic syndrome are at very high risk of developing full Type 2 diabetes if lifestyle changes are not made."
        },
        {
          "q": "Can metabolic syndrome be completely cured?",
          "a": "Yes. By reversing the individual components—losing abdominal fat, improving diet, and exercising—many patients resolve the criteria and completely normalize their metabolic markers."
        }
      ],
      "references": [
        "AHA/NHLBI Scientific Statement: Diagnosis and Management of the Metabolic Syndrome",
        "IDF (International Diabetes Federation) Consensus Worldwide Definition of the Metabolic Syndrome",
        "World Health Organization Consultation on Metabolic Syndrome"
      ]
    },
    {
      "id": "chronic-kidney-disease",
      "name": "Chronic Kidney Disease (CKD)",
      "name_ml": "വൃക്കരോഗം (സി.കെ.ഡി)",
      "name_hi": "क्रोनिक किडनी रोग (सीकेडी)",
      "name_ar": "مرض الكلى المزمن",
      "category": "lifestyle",
      "badge": "Renal Function",
      "icon": "shield",
      "shortDesc": "Gradual, progressive loss of renal filtration function, resulting in fluid retention, electrolyte imbalances, and toxin accumulation.",
      "whatIsIt": "Chronic Kidney Disease (CKD) is characterized by gradual, permanent loss of kidney function over months to years. Healthy kidneys filter extra water and metabolic waste products from the blood, which are excreted in urine. As CKD progresses, dangerous levels of fluid, electrolytes, and uremic waste accumulate in the body.",
      "causes": [
        "Diabetic Nephropathy: Chronic high blood glucose damages delicate renal glomeruli (~40% of cases)",
        "Hypertensive Nephrosclerosis: Chronic high blood pressure hardens renal arterioles (~30% of cases)",
        "Chronic Glomerulonephritis: Inflammation of the filtering units",
        "Polycystic Kidney Disease (PKD): Genetic formation of renal cysts",
        "Recurrent kidney infections (Pyelonephritis) or chronic obstruction (kidney stones, enlarged prostate)",
        "Long-term overuse of Non-Steroidal Anti-Inflammatory Drugs (NSAIDs e.g. Ibuprofen)"
      ],
      "symptoms": [
        "Usually symptomless in early stages (Stages 1-3)",
        "Edema: Swelling in ankles, feet, legs, and puffiness around the eyes",
        "Fatigue, persistent lethargy, and anemia-induced weakness",
        "Changes in urination: Foamy/bubbly urine (proteinuria) or increased nocturnal urination",
        "Loss of appetite, metallic taste in the mouth, and persistent nausea",
        "Intractable generalized skin itching (Uremic Pruritus)"
      ],
      "warningSigns": [
        "Uremic Emergency: Severe confusion, asterixis (flapping hand tremor), pericardial friction rub",
        "Severe fluid overload: Inability to lie flat due to pulmonary edema",
        "Hyperkalemia: Serum potassium > 6.0 mEq/L leading to cardiac arrhythmias"
      ],
      "riskFactors": [
        "Long-standing diabetes mellitus and uncontrolled hypertension",
        "Family history of chronic kidney disease or kidney failure",
        "Age over 60 years",
        "Cardiovascular disease and smoking",
        "Frequent, unmonitored use of painkiller medications (NSAIDs)"
      ],
      "bodyImpact": "Declining glomerular filtration leads to uremic toxin retention, secondary hyperparathyroidism, renal osteodystrophy (weakened bones), severe anemia due to lack of erythropoietin, refractory fluid overload, and end-stage renal disease (ESRD) requiring dialysis or kidney transplant.",
      "diagnosis": [
        "Estimated Glomerular Filtration Rate (eGFR) calculated from serum creatinine (eGFR < 60 mL/min/1.73m2 for > 3 months confirms CKD)",
        "Urine Albumin-to-Creatinine Ratio (uACR) to detect early glomerular leakage",
        "Serum electrolytes (Sodium, Potassium, Phosphorus, Calcium, Bicarbonate)",
        "Renal Ultrasound to evaluate kidney size, cortical thinning, and rule out obstruction",
        "Staging: Stage 1 (eGFR >= 90 with kidney damage) to Stage 5 (eGFR < 15, Kidney Failure)"
      ],
      "treatments": [
        "Strict blood pressure management targeting < 120-130 mmHg",
        "Renoprotective medications: SGLT2 inhibitors and ACE inhibitors or ARBs (slow CKD progression)",
        "Non-steroidal mineralocorticoid receptor antagonists (Finerenone)",
        "Phosphate binders, active Vitamin D analogs, and Erythropoietin-Stimulating Agents (ESAs) for anemia",
        "Renal Replacement Therapy: Hemodialysis, Peritoneal Dialysis, or Kidney Transplantation for Stage 5 ESRD"
      ],
      "prevention": "Manage blood pressure and blood sugar strictly, limit dietary sodium to < 2,000 mg/day, avoid chronic use of NSAID painkillers without medical oversight, stay adequately hydrated, and get annual urine albumin tests if diabetic or hypertensive.",
      "safeFoods": [
        "Low-potassium vegetables (cabbage, cauliflower, cucumbers, bell peppers) in moderation",
        "Apples, berries, and red grapes (kidney-friendly low-potassium fruits)",
        "Controlled high-biological-value protein sources (egg whites, skinless poultry, fish) as guided by renal dietitian",
        "Healthy plant oils (olive oil)",
        "Water as primary fluid (unless fluid-restricted by nephrologist in advanced stages)"
      ],
      "avoidFoods": [
        "High-sodium processed meats, canned soups, and salty seasonings",
        "High-potassium foods in advanced CKD (bananas, oranges, potatoes, tomatoes) as directed by doctor",
        "High-phosphorus foods (cola drinks, processed cheeses, organ meats, dark colas)",
        "Starfruit (Carambola contains a neurotoxin that failing kidneys cannot excrete)"
      ],
      "exercises": [
        "Low to moderate intensity walking (20-30 minutes, 4-5 days a week)",
        "Stationary cycling or light aquatic exercise",
        "Gentle stretching and mobility routines to prevent muscle cramping",
        "Avoid exhaustive, dehydrating endurance workouts in hot climates"
      ],
      "lifestyle": [
        "Never take NSAID painkillers (Ibuprofen, Naproxen, Diclofenac) without nephrologist consent",
        "Monitor blood pressure and blood glucose daily",
        "Weigh yourself daily if prescribed to monitor fluid retention",
        "Adhere strictly to medications and dietary fluid limits"
      ],
      "whenToConsult": "Consult a nephrologist promptly if urine turns persistently foamy, if you develop leg swelling, or if eGFR drops below 60 mL/min. Seek immediate emergency care for shortness of breath or extreme confusion.",
      "faqs": [
        {
          "q": "Can damaged kidneys heal or regain lost function?",
          "a": "In chronic kidney disease, scarred nephrons cannot regenerate. However, early detection and modern renoprotective medications (like SGLT2 inhibitors) can dramatically slow or halt further progression."
        },
        {
          "q": "Why is starfruit toxic to people with kidney disease?",
          "a": "Starfruit contains caramboxin, a neurotoxin. Healthy kidneys easily excrete it, but in kidney disease, it accumulates in the bloodstream and brain, causing hiccups, mental confusion, seizures, and even death."
        }
      ],
      "references": [
        "KDIGO (Kidney Disease: Improving Global Outcomes) Clinical Practice Guidelines",
        "National Kidney Foundation (NKF) KDOQI Guidelines",
        "World Health Organization (WHO) Chronic Kidney Disease Review"
      ]
    },
    {
      "id": "asthma",
      "name": "Asthma (Bronchial Asthma)",
      "name_ml": "ആസ്ത്മ (ശ്വാസംമുട്ടൽ)",
      "name_hi": "दमा / अस्थमा",
      "name_ar": "الربو الشعبي",
      "category": "respiratory",
      "badge": "Airway Hyperreactivity",
      "icon": "wind",
      "shortDesc": "A chronic inflammatory disorder of the airways causing reversible airflow obstruction, bronchospasm, and wheezing.",
      "whatIsIt": "Asthma is a chronic condition that causes the airways (bronchial tubes) of the lungs to become inflamed, swollen, and constricted, while producing excessive mucus. This leads to recurrent episodes of wheezing, breathlessness, chest tightness, and coughing, particularly during early mornings, nights, or following physical exertion or allergen exposure.",
      "causes": [
        "Genetic predisposition and family history of atopy (eczema, allergic rhinitis)",
        "Inhalation of airborne allergens (dust mites, pollen, mold spores, pet dander)",
        "Respiratory viral infections (Rhinovirus, RSV, influenza)",
        "Cold air, air pollution, ozone, and chemical fumes",
        "Vigorous exercise, emotional stress, and gastroesophageal reflux (GERD)"
      ],
      "symptoms": [
        "Audible high-pitched expiratory wheezing",
        "Shortness of breath and feeling unable to take a full breath",
        "Chest tightness or band-like constriction",
        "Persistent nocturnal or early-morning dry coughing",
        "Tachypnea (rapid breathing) and flaring of nostrils"
      ],
      "warningSigns": [
        "Status Asthmaticus (Severe acute exacerbation): Silent chest (absence of wheezing due to severe lack of air movement)",
        "Cyanosis: Bluish discoloration around lips and fingernails",
        "Inability to speak in full sentences without gasping",
        "Peak Expiratory Flow (PEF) < 50% of personal best with no relief from rescue inhaler"
      ],
      "riskFactors": [
        "History of allergic rhinitis, eczema, or food allergies",
        "Exposure to secondhand cigarette smoke, particularly during infancy",
        "Occupational exposure to chemical dusts, flour, latex, or industrial fumes",
        "Obesity and urban environments with high particulate matter (PM2.5)"
      ],
      "bodyImpact": "Chronic eosinophilic or neutrophilic airway inflammation leads to bronchial smooth muscle hypertrophy, subepithelial fibrosis, goblet cell hyperplasia with mucus plugging, and progressive irreversible airway remodeling over decades if uncontrolled.",
      "diagnosis": [
        "Spirometry with Pre- and Post-Bronchodilator testing (showing >= 12% and >= 200 mL improvement in FEV1)",
        "Peak Expiratory Flow (PEF) daily variability tracking",
        "Fractional Exhaled Nitric Oxide (FeNO) test for eosinophilic inflammation",
        "Methacholine Bronchial Provocation challenge if baseline spirometry is normal",
        "Allergy skin-prick testing and serum total/specific IgE levels"
      ],
      "treatments": [
        "Controller / Maintenance Therapy: Inhaled Corticosteroids (ICS e.g., Fluticasone, Budesonide) alone or with Long-Acting Beta-Agonists (LABA e.g., Formoterol, Salmeterol)",
        "Reliever / Rescue Therapy: Fast-acting bronchodilator (e.g., Albuterol/Salbutamol or ICS-Formoterol SMART protocol)",
        "Leukotriene Receptor Antagonists (Montelukast)",
        "Biologic targeted therapy for severe asthma (Omalizumab, Mepolizumab, Dupilumab)",
        "Short burst of oral corticosteroids (Prednisolone) for acute exacerbations"
      ],
      "prevention": "While asthma cannot be prevented from starting, attacks are highly preventable by adhering daily to controller inhalers, identifying and avoiding personal triggers, using dust mite mattress covers, using HEPA air purifiers, and receiving annual influenza vaccines.",
      "safeFoods": [
        "Vitamin C rich fruits (oranges, guavas, kiwi, bell peppers)",
        "Magnesium-rich foods (spinach, pumpkin seeds, black beans)",
        "Omega-3 fatty acids from fish and flaxseeds to reduce leukotriene inflammation",
        "Warm herbal teas (ginger, turmeric, licorice) to soothe airway mucosa",
        "Garlic, onions, and quercetin-rich foods"
      ],
      "avoidFoods": [
        "Sulfites in dried fruits, packaged fruit juices, and pickled products (can trigger severe bronchospasm)",
        "Artificial food colorings, benzoates, and monosodium glutamate (MSG)",
        "Excessive dairy if noticed to cause mucus thickening in sensitive individuals",
        "Cold iced drinks immediately before or during physical exercise"
      ],
      "exercises": [
        "Swimming in warm, humid air environments (excellent for lung capacity)",
        "Walking, cycling, or light jogging preceded by a 10-minute warm-up",
        "Yoga and Pranayama (deep diaphragmatic breathing exercises)",
        "Use rescue inhaler 15 minutes before strenuous exercise if Exercise-Induced Bronchospasm (EIB) occurs"
      ],
      "lifestyle": [
        "Always carry your prescribed rescue inhaler wherever you go",
        "Wash bed linens weekly in hot water (> 60°C) to kill dust mites",
        "Keep indoor humidity below 50% to prevent fungal mold colonization",
        "Never smoke or allow smoking inside your home or car"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES IMMEDIATELY if you struggle to speak, lips turn blue, ribs suck in deeply with every breath, or your rescue inhaler provides no relief within 15 minutes.",
      "faqs": [
        {
          "q": "Are inhalers addictive or habit-forming?",
          "a": "No. Inhaled corticosteroids and bronchodilators deliver microgram doses directly to lung tissue with minimal systemic absorption. They are non-addictive and prevent irreversible lung damage."
        },
        {
          "q": "Can a child outgrow asthma?",
          "a": "Many children experience remission of symptoms during adolescence as airway diameters enlarge. However, airway hyperreactivity can recur in adulthood if exposed to triggers or smoking."
        }
      ],
      "references": [
        "Global Initiative for Asthma (GINA) Global Strategy for Asthma Management and Prevention 2024",
        "British Thoracic Society (BTS) / SIGN Guideline for the Management of Asthma",
        "WHO Bronchial Asthma Factsheet"
      ]
    },
    {
      "id": "copd",
      "name": "COPD (Chronic Obstructive Pulmonary Disease)",
      "name_ml": "സി.ഒ.പി.ഡി (ശ്വാസതടസ്സ രോഗം)",
      "name_hi": "सीओपीडी (क्रोनिक ऑब्सट्रक्टिव पल्मोनरी डिजीज)",
      "name_ar": "مرض الانسداد الرئوي المزمن",
      "category": "respiratory",
      "badge": "Progressive Airflow Limitation",
      "icon": "wind",
      "shortDesc": "A progressive, life-threatening lung disease characterized by persistent respiratory symptoms and airflow limitation due to airway and alveolar abnormalities.",
      "whatIsIt": "COPD is an umbrella term encompassing Emphysema (destruction and enlargement of the lung alveoli) and Chronic Bronchitis (chronic inflammation and narrowing of the bronchial tubes with persistent sputum production). Unlike asthma, airflow limitation in COPD is largely irreversible and progressively worsens over time.",
      "causes": [
        "Tobacco smoking (the cause of > 80% of cases in developed nations)",
        "Long-term exposure to indoor biomass smoke (cooking fires with wood/coal in poorly ventilated kitchens)",
        "Occupational dusts and chemical vapors (mining, foundry work, textile fibers)",
        "Alpha-1 Antitrypsin Deficiency (AATD: genetic deficiency predisposing to early emphysema)",
        "Severe childhood respiratory infections"
      ],
      "symptoms": [
        "Progressive exertional dyspnea (shortness of breath during basic daily activities)",
        "Chronic cough with persistent clear, white, or greenish mucus/sputum",
        "Frequent recurrent chest infections (bronchitis, pneumonia)",
        "Audible wheezing and chest heaviness",
        "Unintended weight loss and muscle wasting (pulmonary cachexia in late stages)",
        "Morning headaches due to nocturnal carbon dioxide retention (hypercapnia)"
      ],
      "warningSigns": [
        "Acute Exacerbation: Sudden worsening of dyspnea, increased sputum volume, and purulence",
        "Severe respiratory distress: Cyanosis (blue lips/skin), tachypnea > 30 breaths/min, altered mental state",
        "Peripheral edema (swelling in ankles and feet indicating Cor Pulmonale / right heart failure)"
      ],
      "riskFactors": [
        "Cigarette, cigar, pipe, or waterpipe (hookah) smoking",
        "Age over 40 years",
        "Occupational exposure to organic/inorganic dusts without protective respirators",
        "Low socioeconomic status and poorly ventilated living quarters",
        "Genetic Alpha-1 Antitrypsin deficiency"
      ],
      "bodyImpact": "Destruction of alveolar elastin walls eliminates surface area for gas exchange, causing air trapping and hyperinflation ('barrel chest'). Capillary beds are destroyed, raising pulmonary arterial pressure, causing right ventricular hypertrophy and Cor Pulmonale.",
      "diagnosis": [
        "Post-Bronchodilator Spirometry: FEV1/FVC ratio < 0.70 confirms persistent airflow limitation",
        "GOLD Staging based on post-bronchodilator FEV1: GOLD 1 (Mild >= 80%) to GOLD 4 (Very Severe < 30%)",
        "High-Resolution Chest CT (HRCT) to quantify emphysematous bullae and bronchial wall thickening",
        "Arterial Blood Gas (ABG) analysis to detect hypoxemia (PaO2 < 60 mmHg) and hypercapnia",
        "Serum Alpha-1 Antitrypsin testing in all young or non-smoking patients"
      ],
      "treatments": [
        "Immediate and permanent Smoking Cessation (the only intervention that slows FEV1 decline)",
        "Inhaled Long-Acting Muscarinic Antagonists (LAMA e.g., Tiotropium, Umeclidinium)",
        "Long-Acting Beta2-Agonists (LABA e.g., Olodaterol, Vilanterol)",
        "Inhaled Corticosteroids (ICS) for patients with frequent exacerbations or high eosinophils",
        "Pulmonary Rehabilitation (structured exercise training, education, and breathing techniques)",
        "Long-Term Oxygen Therapy (LTOT) for chronic resting severe hypoxemia (SpO2 <= 88%)",
        "Non-Invasive Ventilation (BiPAP) for acute hypercapnic respiratory failure"
      ],
      "prevention": "COPD is almost entirely preventable by never smoking, completely quitting tobacco, eliminating indoor cooking smoke with clean cookstoves, wearing respirators in hazardous industrial environments, and getting vaccinated against flu, pneumonia, and RSV.",
      "safeFoods": [
        "High-calorie, nutrient-dense small meals for patients with work-of-breathing weight loss",
        "Lean protein sources (eggs, poultry, fish, legumes) to prevent diaphragm muscle wasting",
        "Fresh berries, leafy greens, and citrus fruits rich in antioxidants",
        "Healthy plant fats (avocados, olive oil, nuts) which generate less CO2 during metabolism than carbs",
        "Adequate hydration to thin bronchial mucus secretions"
      ],
      "avoidFoods": [
        "Gas-forming foods (beans, carbonated drinks, cabbage) that distend the stomach and push up against the diaphragm",
        "Excessive simple refined carbohydrates that increase metabolic carbon dioxide production",
        "High-sodium processed meals that exacerbate fluid retention and ankle swelling",
        "Tobacco smoke, wood smoke, and aerosol sprays"
      ],
      "exercises": [
        "Pursed-lip breathing technique (inhale through nose for 2 counts, exhale through pursed lips for 4 counts)",
        "Diaphragmatic / belly breathing training",
        "Low-intensity interval walking on flat ground with regular rest pauses",
        "Light arm and shoulder resistance band exercises to strengthen accessory breathing muscles"
      ],
      "lifestyle": [
        "Stop smoking immediately — seek medical smoking cessation support (nicotine replacement, Varenicline)",
        "Keep home well-ventilated; avoid open wood fires and incense sticks",
        "Receive annual influenza, pneumococcal, and COVID-19 vaccinations",
        "Keep emergency antibiotics and oral steroids on hand if recommended in your COPD Action Plan"
      ],
      "whenToConsult": "Seek EMERGENCY MEDICAL ATTENTION if you cannot catch your breath while resting, lips or fingertips turn blue, you become confused, or you develop swelling in your legs with high fever.",
      "faqs": [
        {
          "q": "Is COPD curable?",
          "a": "No. Structural damage to alveoli in COPD cannot be reversed. However, quitting smoking, using proper inhalers, and pulmonary rehabilitation can significantly improve symptoms, reduce hospitalizations, and prolong life."
        },
        {
          "q": "Why do COPD patients breathe with pursed lips?",
          "a": "Pursed-lip breathing creates backpressure inside the airways during exhalation, preventing floppy airways from collapsing and allowing trapped air to escape from the lungs."
        }
      ],
      "references": [
        "Global Initiative for Chronic Obstructive Lung Disease (GOLD) Report 2024",
        "American Thoracic Society (ATS) COPD Clinical Practice Guidelines",
        "WHO Chronic Obstructive Pulmonary Disease Factsheet"
      ]
    },
    {
      "id": "pneumonia",
      "name": "Pneumonia (Lung Infection)",
      "name_ml": "ന്യുമോണിയ (ശ്വാസകോശ അണുബാധ)",
      "name_hi": "निमोनिया (फेफड़ों का संक्रमण)",
      "name_ar": "الالتهاب الرئوي",
      "category": "respiratory",
      "badge": "Acute Infection",
      "icon": "alert-circle",
      "shortDesc": "An acute microbial infection that inflames the air sacs (alveoli) in one or both lungs, filling them with pus and exudative fluid.",
      "whatIsIt": "Pneumonia is an acute inflammatory condition of the lung primarily affecting the microscopic air sacs (alveoli). When pathogens enter the alveoli, the body's immune response triggers exudation of fluid, neutrophils, and cellular debris into the alveolar space, impairing pulmonary gas exchange and causing severe oxygen desaturation.",
      "causes": [
        "Bacterial pathogens: Streptococcus pneumoniae (most common), Haemophilus influenzae, Mycoplasma pneumoniae, Legionella pneumophila",
        "Viral pathogens: Influenza A/B, SARS-CoV-2 (COVID-19), Respiratory Syncytial Virus (RSV)",
        "Fungal organisms: Pneumocystis jirovecii (in immunocompromised individuals), Histoplasma, Coccidioides",
        "Aspiration of food particles, vomit, or liquids into the trachea"
      ],
      "symptoms": [
        "High spiking fever with shaking chills and rigors",
        "Productive cough yielding thick greenish, yellow, or rust-colored sputum",
        "Pleuritic chest pain (sharp, stabbing pain worsened by deep inhalation or coughing)",
        "Rapid, shallow breathing (Tachypnea) and shortness of breath",
        "Profound fatigue, generalized body aches, and loss of appetite",
        "Confusion or altered mental status (frequently the primary symptom in elderly patients)"
      ],
      "warningSigns": [
        "Respiratory failure: Oxygen saturation (SpO2) dropping below 90% on room air",
        "Septic Shock: Systolic blood pressure < 90 mmHg, cold clammy extremities, rapid pulse",
        "Hemoptysis (coughing up frank blood)",
        "Severe confusion, stupor, or inability to stay awake"
      ],
      "riskFactors": [
        "Age extremes: Infants under 2 years and adults aged 65 and older",
        "Chronic underlying diseases: COPD, asthma, heart failure, diabetes mellitus",
        "Immunosuppression: HIV/AIDS, chemotherapy, organ transplant, chronic steroids",
        "Cigarette smoking and chronic alcohol abuse",
        "Impaired swallowing or neurological disorders predisposing to aspiration"
      ],
      "bodyImpact": "Alveolar consolidation prevents oxygen from entering the pulmonary capillaries, causing severe ventilation-perfusion mismatch and arterial hypoxemia. Bacteria may enter the bloodstream causing life-threatening sepsis, parapneumonic effusion, empyema, and Acute Respiratory Distress Syndrome (ARDS).",
      "diagnosis": [
        "Chest X-Ray demonstrating lobar or patchy airspace consolidation, infiltrates, or air bronchograms",
        "Pulse Oximetry and Arterial Blood Gas (ABG) for hypoxemia",
        "Complete Blood Count (CBC) showing leukocytosis with a left shift (high neutrophils)",
        "Sputum Gram stain and bacterial culture",
        "Blood cultures to rule out bacteremia and CURB-65 / PSI severity score calculation"
      ],
      "treatments": [
        "Targeted Antibiotics for bacterial pneumonia (e.g., Amoxicillin-Clavulanate, Azithromycin, Ceftriaxone, Levofloxacin)",
        "Antiviral therapy (e.g., Oseltamivir for Influenza, Remdesivir/Paxlovid for COVID-19)",
        "Supplemental Oxygen Therapy via nasal cannula or high-flow nasal cannula",
        "Intravenous fluid hydration and antipyretics (Acetaminophen/Paracetamol) for fever",
        "Chest physiotherapy and incentive spirometry to facilitate mucus drainage"
      ],
      "prevention": "Vaccination is the most effective prevention: Pneumococcal conjugate (PCV15/PCV20) and polysaccharide (PPSV23) vaccines, annual Influenza vaccine, and COVID-19 boosters. Practice rigorous hand hygiene and avoid smoking.",
      "safeFoods": [
        "Hydrating warm broths, clear vegetable soups, and herbal teas",
        "High-protein easily digestible foods: Steamed fish, eggs, soft lentils, yogurt",
        "Vitamin C and A rich fruits and vegetables: Oranges, papayas, carrots, cooked spinach",
        "Honey and warm ginger water to soothe coughing",
        "Adequate fluids (2 to 3 liters daily unless restricted for heart/kidney reasons)"
      ],
      "avoidFoods": [
        "Dehydrating caffeinated energy drinks and alcohol",
        "Heavy, greasy deep-fried foods that induce nausea and digestive strain",
        "Very cold drinks that can trigger throat irritation and bronchospasm",
        "Extremely sugary desserts that impair immune cell phagocytosis"
      ],
      "exercises": [
        "Strict physical rest during the acute febrile and infection stage",
        "Incentive spirometry (taking slow deep breaths through a spirometer device 10 times every hour)",
        "Gentle bedside ankle pumps and deep breathing while sitting upright in bed",
        "Gradual resumption of light walking only after fever resolves for > 48 hours"
      ],
      "lifestyle": [
        "Rest completely in bed; do not rush back to work or physical exercise",
        "Sleep with head elevated on 2 pillows to facilitate lung expansion",
        "Finish the entire prescribed course of antibiotics even if feeling better",
        "Practice strict handwashing and cough etiquette (cough into elbow)"
      ],
      "whenToConsult": "SEEK IMMEDIATE EMERGENCY MEDICAL CARE if breathing becomes difficult, chest pain is severe, lips or fingernails appear bluish, or an elderly family member becomes suddenly confused or unresponsive.",
      "faqs": [
        {
          "q": "How long does it take to recover from pneumonia?",
          "a": "Most healthy people improve within 1 to 2 weeks with antibiotics, but fatigue, mild cough, and reduced stamina can persist for 4 to 6 weeks. Chest X-rays often take up to 8 weeks to clear completely."
        },
        {
          "q": "Is pneumonia contagious?",
          "a": "The underlying bacteria and viruses (like flu, strep, or coronavirus) that cause pneumonia are contagious through airborne droplets, though not everyone who catches them will develop lung infection."
        }
      ],
      "references": [
        "Infectious Diseases Society of America (IDSA) / ATS Consensus Guidelines on Community-Acquired Pneumonia",
        "CDC Pneumonia Prevention and Treatment Guidelines",
        "WHO Pneumonia in Children and Adults Factsheet"
      ]
    },
    {
      "id": "tuberculosis",
      "name": "Tuberculosis (TB)",
      "name_ml": "ക്ഷയരോഗം (ടി.ബി)",
      "name_hi": "तपेदिक / क्षय रोग (टीबी)",
      "name_ar": "السل الرئوي (الدرن)",
      "category": "respiratory",
      "badge": "Airborne Mycobacterial",
      "icon": "shield-alert",
      "shortDesc": "A contagious airborne bacterial infection primarily affecting the lungs caused by Mycobacterium tuberculosis.",
      "whatIsIt": "Tuberculosis is an infectious disease caused by Mycobacterium tuberculosis, an acid-fast bacillus transmitted via microscopic droplet nuclei when an infected person coughs, sneezes, or talks. It exists as Latent TB Infection (asymptomatic, non-contagious, bacteria contained in granulomas) and Active TB Disease (symptomatic, infectious, causing lung destruction).",
      "causes": [
        "Inhalation of airborne droplet nuclei containing Mycobacterium tuberculosis",
        "Reactivation of latent infection due to immunocompromised state",
        "Prolonged close contact with a person having untreated active pulmonary TB",
        "Multidrug-resistant TB (MDR-TB) strains arising from incomplete or irregular treatment"
      ],
      "symptoms": [
        "Persistent productive cough lasting more than 2 to 3 weeks",
        "Hemoptysis (coughing up blood or blood-streaked sputum)",
        "Unexplained, drenching nocturnal sweats",
        "Low-grade evening fever and recurring chills",
        "Unintended significant weight loss and anorexia (historically called 'Consumption')",
        "Persistent chest pain and extreme physical exhaustion"
      ],
      "warningSigns": [
        "Massive hemoptysis (> 200-500 mL blood within 24 hours) threatening airway suffocation",
        "Disseminated / Miliary TB: Bacteria spreading to brain (TB meningitis), spine (Pott's disease), or kidneys",
        "Acute respiratory distress and pleural effusion"
      ],
      "riskFactors": [
        "HIV/AIDS infection (the strongest risk factor for progression to active disease)",
        "Malnutrition, diabetes mellitus, and chronic kidney disease",
        "Crowded, poorly ventilated living conditions (prisons, shelters)",
        "Healthcare workers and individuals from high-burden geographic regions",
        "Immunosuppressive medications (Anti-TNF therapies, organ transplant drugs)"
      ],
      "bodyImpact": "Tubercle bacilli trigger cell-mediated hypersensitivity, forming caseous granulomas. As macrophages fail to kill the bacteria, caseous centers liquefy and cavitate, destroying lung parenchyma, eroding pulmonary arterioles (causing hemoptysis), and spreading systemically via blood and lymph.",
      "diagnosis": [
        "Sputum Smear Microscopy for Acid-Fast Bacilli (AFB) using Ziehl-Neelsen stain",
        "Molecular Rapid Testing: GeneXpert MTB/RIF (detects MTB and rifampicin resistance within 2 hours)",
        "Sputum Mycobacterial Culture (gold standard on Lowenstein-Jensen or MGIT media)",
        "Chest Radiograph: Demonstrating apical/upper lobe cavitary lesions, consolidations, or miliary mottling",
        "Tuberculin Skin Test (Mantoux PPD) or Interferon-Gamma Release Assays (IGRA: QuantiFERON-TB Gold) for latent TB"
      ],
      "treatments": [
        "Standard First-Line Directly Observed Therapy Short-Course (DOTS) for 6 months:",
        "Intensive Phase (2 months): Isoniazid (H), Rifampicin (R), Pyrazinamide (Z), and Ethambutol (E)",
        "Continuation Phase (4 months): Isoniazid and Rifampicin",
        "Second-Line Anti-TB drugs for MDR-TB: Bedaquiline, Pretomanid, Linezolid, Fluoroquinolones (BPaL regimen)",
        "Pyridoxine (Vitamin B6) supplementation to prevent Isoniazid-induced peripheral neuropathy"
      ],
      "prevention": "Bacillus Calmette-Guerin (BCG) vaccine given to infants in endemic regions prevents severe childhood TB meningitis. Treatment of latent TB infection, wearing N95 respirators in clinical settings, and improving room ventilation (negative pressure isolation) prevent transmission.",
      "safeFoods": [
        "High-protein, energy-dense foods to reverse cachexia: Eggs, poultry, dairy, lentils, peanut butter",
        "Vitamin A and Zinc rich foods: Carrots, sweet potatoes, pumpkin seeds, green vegetables",
        "Citrus fruits and guava rich in Vitamin C to boost cell-mediated immunity",
        "Whole grain cereals, porridge, and healthy plant fats",
        "Clean boiled water and fresh homemade nutritious meals"
      ],
      "avoidFoods": [
        "Alcohol consumption (strictly prohibited — combines with Isoniazid/Rifampicin to cause severe hepatotoxicity)",
        "Tobacco smoking and recreational drugs",
        "Excessive refined sugars and ultra-processed convenience foods",
        "Raw unpasteurized milk and dairy products (risk of Mycobacterium bovis)"
      ],
      "exercises": [
        "Complete physical rest during the active contagious and febrile stage",
        "Gentle indoor walking once sputum becomes smear-negative and fever resolves",
        "Deep breathing exercises to promote lung re-expansion",
        "Gradual strength retraining only after completing the intensive treatment phase"
      ],
      "lifestyle": [
        "NEVER miss a single dose of anti-TB medications to prevent incurable drug-resistant strains",
        "Wear a surgical mask when around others until your doctor confirms non-contagious status",
        "Sleep in a separate, well-ventilated room with open windows during the initial 2-3 weeks of treatment",
        "Cough into disposable tissues and discard them safely in sealed bags"
      ],
      "whenToConsult": "Consult a doctor immediately if you have a cough lasting over 2 weeks with evening fever and weight loss. Go to the EMERGENCY ROOM immediately if you cough up blood or experience severe breathlessness.",
      "faqs": [
        {
          "q": "Is tuberculosis completely curable?",
          "a": "Yes. Tuberculosis is 100% curable with proper, uninterrupted adherence to the 6-month regimen of first-line anti-TB medications."
        },
        {
          "q": "Why do anti-TB medications turn urine orange or red?",
          "a": "Rifampicin, one of the primary anti-TB drugs, naturally turns urine, tears, sweat, and saliva an orange-red color. This is completely harmless and normal."
        }
      ],
      "references": [
        "World Health Organization (WHO) Consolidated Guidelines on Tuberculosis 2024",
        "CDC Tuberculosis Treatment and Prevention Guidelines",
        "International Union Against Tuberculosis and Lung Disease Guidelines"
      ]
    },
    {
      "id": "chronic-bronchitis",
      "name": "Chronic Bronchitis",
      "name_ml": "ക്രോണിക് ബ്രോങ്കൈറ്റിസ്",
      "name_hi": "क्रोनिक ब्रोंकाइटिस",
      "name_ar": "التهاب الشعب الهوائية المزمن",
      "category": "respiratory",
      "badge": "Chronic Mucus Hypersecretion",
      "icon": "wind",
      "shortDesc": "Long-standing inflammation of the bronchial mucous membrane with hypersecretion of mucus and chronic productive cough.",
      "whatIsIt": "Chronic bronchitis is defined clinically as a daily cough with sputum production for at least 3 consecutive months in 2 successive years, in the absence of other specific causes. It represents the major bronchial component of COPD and is characterized by goblet cell hyperplasia and chronic airway inflammation.",
      "causes": [
        "Chronic cigarette and tobacco smoke inhalation (> 90% of cases)",
        "Inhalation of industrial dusts (silica, grain dust, coal dust)",
        "Environmental air pollution and toxic sulfur dioxide fumes",
        "Secondhand smoke exposure and recurrent untreated bronchial infections"
      ],
      "symptoms": [
        "Chronic daily cough producing copious amounts of white, gray, or yellow mucus",
        "Progressive exertional breathlessness",
        "Chest discomfort, tightness, and audible bubbling rhonchi",
        "Frequent acute infective flare-ups during winter seasons",
        "Cyanotic appearance ('Blue Bloater' profile) due to chronic hypoxemia",
        "Fatigue, lethargy, and sleep disturbances due to nocturnal coughing"
      ],
      "warningSigns": [
        "Sputum turning thick, foul-smelling, or dark green with high fever",
        "Severe resting dyspnea and central cyanosis",
        "Bilateral lower extremity edema indicating cor pulmonale"
      ],
      "riskFactors": [
        "Active or former cigarette smoking",
        "Age greater than 40 years",
        "Occupational exposure to chemical irritants and fumes",
        "Gastroesophageal reflux disease (GERD micro-aspiration)",
        "Pre-existing bronchial asthma"
      ],
      "bodyImpact": "Chronic irritation causes hypertrophy of submucosal bronchial mucus glands (elevated Reid index), loss of ciliated airway cells, impaired mucociliary clearance, chronic colonization by bacteria, and progressive fixed airflow limitation.",
      "diagnosis": [
        "Clinical diagnostic criteria: Productive cough for 3+ months in 2+ consecutive years",
        "Spirometry: Measuring post-bronchodilator FEV1/FVC to determine degree of obstruction",
        "Chest X-Ray: Showing increased bronchovascular markings ('dirty chest')",
        "Sputum Gram stain and culture during acute exacerbations",
        "Pulse oximetry to assess arterial oxygen saturation"
      ],
      "treatments": [
        "Permanent Smoking Cessation program",
        "Inhaled Bronchodilators (LAMA e.g., Tiotropium; LABA e.g., Formoterol)",
        "Inhaled Corticosteroids for frequent exacerbations",
        "Phosphodiesterase-4 (PDE-4) Inhibitors (e.g., Roflumilast) to reduce systemic inflammation and exacerbation frequency",
        "Mucolytics (N-acetylcysteine, Carbocisteine) to decrease sputum viscosity",
        "Antibiotics (e.g., Amoxicillin-Clavulanate, Macrolides) during acute purulent flare-ups"
      ],
      "prevention": "Never smoke and avoid all forms of tobacco. Use occupational protective masks, keep indoor air clean with HEPA filtration, avoid wood smoke, and stay up to date on influenza and pneumococcal vaccines.",
      "safeFoods": [
        "Warm liquids, broths, and hot water to thin bronchial secretions",
        "Anti-inflammatory spices: Ginger, turmeric, and black pepper",
        "Vitamin C rich fruits and leafy cruciferous vegetables",
        "Lean protein sources to support respiratory muscle strength",
        "Omega-3 fatty fish to dampen airway inflammation"
      ],
      "avoidFoods": [
        "Chilled drinks and ice creams that can trigger reflex bronchoconstriction",
        "Excessive dairy products if observed to increase sputum thickness",
        "High-sodium processed snacks that worsen fluid retention",
        "Deep-fried foods containing rancid cooking oils"
      ],
      "exercises": [
        "Controlled diaphragmatic breathing and 'huff coughing' to clear mucus",
        "Low-impact daily walking (20-30 minutes)",
        "Chest physiotherapy with Flutter valve / positive expiratory pressure (PEP) devices",
        "Gentle upper body stretching and mobility work"
      ],
      "lifestyle": [
        "Completely stop smoking and avoid exposure to smoky environments",
        "Use a cool-mist room humidifier to keep bronchial airways moist",
        "Practice 'huff coughing' in the morning to clear accumulated mucus without exhausting yourself",
        "Receive annual flu, COVID-19, and pneumococcal vaccines"
      ],
      "whenToConsult": "Consult a pulmonologist if coughing produces blood, sputum becomes thick green with fever, or you experience new shortness of breath during rest or walking.",
      "faqs": [
        {
          "q": "What is the difference between acute bronchitis and chronic bronchitis?",
          "a": "Acute bronchitis is a temporary viral infection lasting 1 to 3 weeks that resolves completely. Chronic bronchitis is a permanent, progressive inflammatory condition lasting years, primarily caused by smoking."
        },
        {
          "q": "Can mucolytics cure chronic bronchitis?",
          "a": "Mucolytics help thin sticky mucus so it is easier to cough up, but they do not reverse the underlying bronchial gland enlargement. Smoking cessation is the only way to stop disease progression."
        }
      ],
      "references": [
        "American Thoracic Society / European Respiratory Society Standards for Chronic Bronchitis",
        "GOLD Global Strategy for Diagnosis, Management, and Prevention of COPD 2024",
        "Mayo Clinic Respiratory Diseases Clinical Compendium"
      ]
    },
    {
      "id": "lung-cancer",
      "name": "Lung Cancer (Bronchogenic Carcinoma)",
      "name_ml": "ശ്വാസകോശ കാൻസർ",
      "name_hi": "फेफड़ों का कैंसर",
      "name_ar": "سرطان الرئة",
      "category": "respiratory",
      "badge": "Malignant Neoplasm",
      "icon": "ribbon",
      "shortDesc": "Malignant transformation and uncontrolled proliferation of abnormal epithelial cells in lung tissue.",
      "whatIsIt": "Lung cancer originates in the tissues of the lungs, typically in the epithelial cells lining the airways. The two broad clinical categories are Non-Small Cell Lung Cancer (NSCLC, ~85% of cases, including Adenocarcinoma, Squamous Cell Carcinoma, and Large Cell Carcinoma) and Small Cell Lung Cancer (SCLC, ~15%, highly aggressive and neuroendocrine in nature).",
      "causes": [
        "Cigarette, cigar, and pipe smoking (causes > 85% of all lung cancers)",
        "Exposure to Radon gas (the leading cause of lung cancer in non-smokers)",
        "Occupational asbestos exposure (causes lung cancer and malignant pleural mesothelioma)",
        "Secondhand tobacco smoke exposure and heavy environmental air pollution (PM2.5)",
        "Genetic mutations in driver oncogenes (EGFR, ALK, ROS1, KRAS, BRAF)"
      ],
      "symptoms": [
        "A new persistent cough that does not go away or changes in character",
        "Hemoptysis: Coughing up blood, even in small flecks or rust-colored sputum",
        "Dull, persistent chest pain that worsens with deep breathing or coughing",
        "Progressive unexplained shortness of breath and wheezing",
        "Hoarseness (due to recurrent laryngeal nerve involvement)",
        "Unintended significant weight loss, loss of appetite, and profound fatigue",
        "Repeated episodes of pneumonia or bronchitis that fail to clear"
      ],
      "warningSigns": [
        "Superior Vena Cava (SVC) Syndrome: Facial swelling, neck vein distension, upper chest flushing",
        "Horner's Syndrome (from apical Pancoast tumor): Ptosis (drooping eyelid), miosis (constricted pupil), and anhidrosis",
        "Bone pain (back, ribs, hips) indicating metastatic bone lesions",
        "New neurological deficits or seizures indicating brain metastases"
      ],
      "riskFactors": [
        "Current or past history of tobacco smoking (pack-years strongly correlated)",
        "Family history of lung cancer in a first-degree relative",
        "Exposure to arsenic, chromium, nickel, beryllium, or radiation",
        "Pre-existing chronic lung diseases (COPD, pulmonary fibrosis)",
        "Older age (most commonly diagnosed between 65 and 74 years)"
      ],
      "bodyImpact": "Malignant clones invade bronchial walls, obstruct air passages causing post-obstructive atelectasis, erode blood vessels causing fatal hemoptysis, seed the pleural cavity causing malignant pleural effusions, and metastasize widely to lymph nodes, brain, bones, liver, and adrenal glands.",
      "diagnosis": [
        "Low-Dose Computed Tomography (LDCT) for screening high-risk asymptomatic smokers",
        "High-Resolution Chest CT with IV contrast demonstrating lung nodules or masses",
        "Positron Emission Tomography (PET-CT) for whole-body staging and metabolic activity",
        "Bronchoscopy with Endobronchial Ultrasound (EBUS) guided transbronchial needle aspiration",
        "CT-guided Transthoracic Core Needle Biopsy for peripheral tumors",
        "Next-Generation Sequencing (NGS) molecular testing for actionable driver mutations (EGFR, ALK, ROS1, PD-L1 expression)"
      ],
      "treatments": [
        "Surgical Resection (Lobectomy, Segmentectomy, Pneumonectomy) for early-stage NSCLC",
        "Stereotactic Body Radiation Therapy (SBRT) for medically inoperable early tumors",
        "Targeted Therapy: Tyrosine Kinase Inhibitors (Osimertinib for EGFR, Alectinib for ALK)",
        "Immune Checkpoint Inhibitors (Pembrolizumab, Nivolumab against PD-1/PD-L1)",
        "Platinum-based Chemotherapy (Cisplatin/Carboplatin + Pemetrexed or Etoposide)",
        "Multidisciplinary Palliative Care and symptom management"
      ],
      "prevention": "The most effective prevention is never starting to smoke, or stopping smoking immediately (risk drops by 50% after 10-15 years of cessation). Test homes for radon gas levels, avoid secondhand smoke, wear respirators in toxic workplaces, and eat a balanced diet rich in vegetables.",
      "safeFoods": [
        "Cruciferous vegetables rich in sulforaphane and indole-3-carbinol (broccoli, Brussels sprouts)",
        "Berries and colorful fruits packed with polyphenolic antioxidants",
        "Adequate lean proteins (fish, eggs, legumes, Greek yogurt) to prevent cancer cachexia",
        "Green tea rich in epigallocatechin gallate (EGCG)",
        "Healthy plant fats (avocado, extra virgin olive oil)"
      ],
      "avoidFoods": [
        "All forms of smoked, cured, and processed meats (nitrites and heterocyclic amines)",
        "High-dose Beta-Carotene dietary supplements in active smokers (proven to increase lung cancer risk in CARET trials)",
        "Alcohol consumption (enhances carcinogenic absorption)",
        "Deep-fried foods and burnt/charred meat products"
      ],
      "exercises": [
        "Post-operative pulmonary rehabilitation: Walking and breathing exercises",
        "Light daily walking (15-30 minutes) to combat cancer-related fatigue",
        "Gentle stretching and mobility routines to prevent shoulder stiffness post-thoracotomy",
        "Incentive spirometry and diaphragmatic breathing"
      ],
      "lifestyle": [
        "If you are aged 50-80 with a 20 pack-year smoking history, get an annual Low-Dose CT screening",
        "Quit smoking immediately — it is never too late, as cessation improves cancer treatment outcomes",
        "Test your home's basement for radioactive radon gas using a certified test kit",
        "Seek emotional support from oncology counseling and patient survivor groups"
      ],
      "whenToConsult": "Consult a doctor immediately if you cough up even small specks of blood, develop a cough that lasts over 3 weeks, or experience unexplained weight loss and shoulder/chest pain.",
      "faqs": [
        {
          "q": "Can non-smokers get lung cancer?",
          "a": "Yes. Approximately 15% to 20% of lung cancers occur in people who have never smoked. In non-smokers, causes include radon exposure, secondhand smoke, genetic mutations (like EGFR), and environmental air pollution."
        },
        {
          "q": "What is Low-Dose CT screening?",
          "a": "Low-Dose CT (LDCT) is an annual painless scan that uses very low radiation to detect tiny lung cancers years before symptoms appear, reducing lung cancer death rates by over 20%."
        }
      ],
      "references": [
        "National Comprehensive Cancer Network (NCCN) Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer",
        "American Cancer Society (ACS) Lung Cancer Early Detection Guidelines",
        "U.S. Preventive Services Task Force (USPSTF) Lung Cancer Screening Recommendation"
      ]
    },
    {
      "id": "gastritis",
      "name": "Gastritis (Stomach Lining Inflammation)",
      "name_ml": "ഗ്യാസ്ട്രൈറ്റിസ് (ആമാശയ വീക്കം)",
      "name_hi": "गैस्ट्राइटिस (पेट की सूजन)",
      "name_ar": "التهاب المعدة",
      "category": "digestive",
      "badge": "Mucosal Inflammation",
      "icon": "disc",
      "shortDesc": "Inflammation, irritation, or erosion of the protective mucosal lining of the stomach.",
      "whatIsIt": "Gastritis is an inflammation of the gastric mucosa (the mucous lining of the stomach). Gastritis may be acute (appearing suddenly with intense burning) or chronic (developing slowly over years). The gastric mucosa normally produces mucus that shields stomach tissue from corrosive gastric acid; when this barrier is damaged or weakened, acid irritates and inflames the stomach wall.",
      "causes": [
        "Helicobacter pylori (H. pylori) bacterial infection colonizing the gastric mucosa (~80% of chronic cases)",
        "Frequent or chronic use of Nonsteroidal Anti-Inflammatory Drugs (NSAIDs: Aspirin, Ibuprofen, Naproxen)",
        "Excessive alcohol consumption eroding the protective mucus layer",
        "Severe physiological stress (major surgery, severe burns, critical illness)",
        "Autoimmune gastritis: Autoantibodies attacking parietal cells and intrinsic factor"
      ],
      "symptoms": [
        "Gnawing or burning ache or pain (indigestion/dyspepsia) in the upper epigastrium",
        "Feeling of fullness in the upper abdomen after eating only a small amount",
        "Nausea, recurrent vomiting, and belching",
        "Loss of appetite and abdominal bloating",
        "Hiccups and sour, acidic regurgitation"
      ],
      "warningSigns": [
        "Hematemesis: Vomiting bright red blood or dark 'coffee-ground' material",
        "Melena: Passing tarry, foul-smelling, jet-black stools indicating upper GI bleeding",
        "Severe acute abdominal rigidity and peritonitis (indicating gastric perforation)"
      ],
      "riskFactors": [
        "Chronic use of pain medications for arthritis or headaches",
        "Advancing age (stomach lining naturally thins with age)",
        "Heavy alcohol intake and tobacco smoking",
        "High intake of heavily spiced, highly acidic, or fried foods",
        "Unmanaged chronic emotional distress"
      ],
      "bodyImpact": "Chronic unmanaged gastritis causes mucosal atrophy, intestinal metaplasia, loss of intrinsic factor leading to pernicious anemia (Vitamin B12 deficiency), peptic ulcer formation, and increased risk of gastric adenocarcinoma and MALT lymphoma.",
      "diagnosis": [
        "Upper Gastrointestinal Endoscopy (Esophagogastroduodenoscopy - EGD) with mucosal biopsy",
        "H. pylori testing: Urea Breath Test (UBT), Stool Antigen Test, or rapid urease biopsy test",
        "Complete Blood Count (CBC) to screen for occult iron deficiency anemia",
        "Serum Gastrin and anti-parietal cell antibodies for autoimmune gastritis"
      ],
      "treatments": [
        "Proton Pump Inhibitors (PPIs e.g., Omeprazole, Esomeprazole, Pantoprazole) to suppress acid secretion",
        "H2-Receptor Antagonists (e.g., Famotidine)",
        "H. pylori Eradication: Triple or Quadruple therapy (PPI + Clarithromycin + Amoxicillin/Metronidazole + Bismuth) for 14 days",
        "Mucosal protectants: Sucralfate and Antacids (Aluminum/Magnesium hydroxide) for symptom relief",
        "Discontinuation of offending NSAID medications"
      ],
      "prevention": "Gastritis is largely preventable by avoiding unprescribed NSAIDs, moderating alcohol, practicing clean hygiene to prevent H. pylori infection, eating small frequent meals, quitting smoking, and avoiding eating right before lying down.",
      "safeFoods": [
        "Bland, non-acidic cooked foods: Oatmeal, white rice, steamed sweet potatoes",
        "Probiotic-rich plain kefir and yogurt (helps suppress H. pylori colonization)",
        "Cruciferous vegetables rich in sulforaphane (broccoli sprouts)",
        "Lean skinless chicken, tofu, and white fish",
        "Chamomile tea, ginger tea, and coconut water"
      ],
      "avoidFoods": [
        "NSAID painkillers (Ibuprofen, Aspirin) unless explicitly directed with gastric protection",
        "Alcohol and carbonated beverages",
        "High-acid citrus fruits (lemons, oranges, grapefruits) and tomatoes",
        "Extremely spicy chilies, black pepper, and deep-fried oily foods",
        "Caffeinated beverages (coffee, black tea, energy drinks)"
      ],
      "exercises": [
        "Gentle upright walking after meals (aids gastric motility without reflux)",
        "Light yoga and stretching to reduce systemic stress hormones",
        "Avoid vigorous abdominal crunches or heavy bending immediately after eating"
      ],
      "lifestyle": [
        "Eat 4-5 smaller meals a day instead of 2-3 massive feasts",
        "Do not lie down for at least 2 to 3 hours after eating",
        "Elevate the head of your bed by 6 inches",
        "Eliminate tobacco smoke which impairs gastric mucosal blood flow"
      ],
      "whenToConsult": "Consult a gastroenterologist if symptoms persist for more than 2 weeks despite antacids. SEEK EMERGENCY CARE IMMEDIATELY if you vomit blood, have black tarry stools, or experience sudden severe stomach pain.",
      "faqs": [
        {
          "q": "Is gastritis the same as acidity or heartburn?",
          "a": "Not exactly. Acidity or heartburn refers to acid splashing back up into the esophagus. Gastritis is actual inflammation and injury to the lining inside the stomach itself."
        },
        {
          "q": "Can stress alone cause gastritis?",
          "a": "Emotional stress alone rarely causes severe gastritis, but it dramatically increases stomach acid production, lowers pain tolerance, and exacerbates underlying H. pylori or NSAID-induced inflammation."
        }
      ],
      "references": [
        "American College of Gastroenterology (ACG) Guidelines for Gastritis and Dyspepsia",
        "Maastricht VI/Florence Consensus Report on Helicobacter pylori Management",
        "Mayo Clinic Gastritis Overview and Treatment Protocols"
      ]
    },
    {
      "id": "gerd",
      "name": "Acid Reflux (GERD)",
      "name_ml": "ഗ്യാസ്ട്രോ ഈസോഫേഷ്യൽ റിഫ്ലക്സ് (GERD)",
      "name_hi": "एसिड रिफ्लक्स / जीईआरडी",
      "name_ar": "ارتجاع المريء (GERD)",
      "category": "digestive",
      "badge": "Esophageal Reflux",
      "icon": "arrow-up-circle",
      "shortDesc": "A chronic digestive disorder where stomach acid repeatedly flows back up into the esophagus, irritating its lining.",
      "whatIsIt": "Gastroesophageal Reflux Disease (GERD) occurs when stomach acid or bile repeatedly flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) happens when the lower esophageal sphincter (LES)—the muscular valve at the bottom of the esophagus—relaxes abnormally or weakens.",
      "causes": [
        "Transient Lower Esophageal Sphincter Relaxations (TLESRs) or low resting sphincter pressure",
        "Hiatal hernia (the upper part of the stomach pushes up through the diaphragm into the chest)",
        "Delayed gastric emptying (gastroparesis) increasing intragastric pressure",
        "Obesity and increased intra-abdominal pressure",
        "Certain medications that relax the LES (calcium channel blockers, nitrates, sedatives)"
      ],
      "symptoms": [
        "Heartburn (pyrosis): A burning sensation in the chest behind the breastbone, usually after eating and worse at night",
        "Regurgitation of sour, bitter liquid or partially digested food into the mouth or throat",
        "Chest pain (which can mimic cardiac angina)",
        "Dysphagia: Difficulty swallowing or sensation of food sticking in the throat (globus sensation)",
        "Chronic dry cough, hoarseness, and frequent throat clearing (Laryngopharyngeal Reflux)",
        "Worsening of asthma symptoms due to micro-aspiration of acidic vapors"
      ],
      "warningSigns": [
        "Progressive dysphagia (difficulty swallowing solids, then liquids)",
        "Odynophagia (painful swallowing) or unexplained weight loss",
        "Barrett's Esophagus: Precancerous transformation of esophageal squamous epithelium to columnar mucosa"
      ],
      "riskFactors": [
        "Obesity and central abdominal adiposity",
        "Pregnancy (due to hormonal relaxation of the LES and elevated abdominal pressure)",
        "Smoking and secondhand smoke inhalation",
        "Eating large meals close to bedtime",
        "Connective tissue disorders like scleroderma"
      ],
      "bodyImpact": "Chronic acid exposure causes erosive esophagitis, esophageal ulcers, peptic strictures (fibrous scar narrowing making swallowing difficult), and Barrett's esophagus, which elevates the risk of developing esophageal adenocarcinoma.",
      "diagnosis": [
        "Clinical diagnosis based on response to empirical PPI therapy",
        "Upper Endoscopy (EGD) to assess esophageal mucosal erosion and rule out Barrett's",
        "24-Hour Ambulatory pH Monitoring / Bravo wireless pH capsule (gold standard to quantify acid exposure)",
        "High-Resolution Esophageal Manometry (to evaluate peristalsis and LES pressure)",
        "Barium Swallow Esophagram to detect hiatal hernia or strictures"
      ],
      "treatments": [
        "Lifestyle and dietary interventions (elevating head of bed, weight loss, timing of dinner)",
        "Proton Pump Inhibitors (PPIs: Omeprazole, Esomeprazole, Rabeprazole, Vonoprazan PCAB)",
        "H2-Receptor Antagonists (Famotidine) for nocturnal breakthrough acid",
        "Alginate-based antacids (Gaviscon: forms a raft barrier over gastric contents)",
        "Surgical intervention: Laparoscopic Nissen Fundoplication or LINX Magnetic Sphincter Augmentation for refractory GERD"
      ],
      "prevention": "Maintain a healthy body weight, avoid eating within 3 to 4 hours of sleeping, limit trigger foods (mint, chocolate, fried items), stop smoking, and wear loose-fitting clothing around the waist.",
      "safeFoods": [
        "Non-citrus fruits (melons, bananas, apples, pears)",
        "Oatmeal, brown rice, whole grain couscous",
        "Lean proteins (skinless chicken, turkey, egg whites, fish)",
        "Vegetables: Green beans, broccoli, asparagus, cucumbers, leafy greens",
        "Herbal teas (chamomile, licorice tea; avoid peppermint)"
      ],
      "avoidFoods": [
        "High-fat and deep-fried foods (delay stomach emptying and relax the LES)",
        "Chocolate, peppermint, and spearmint (naturally relax the esophageal valve)",
        "Citrus fruits, tomatoes, ketchup, and tomato-based pasta sauces",
        "Carbonated sodas, coffee, caffeinated energy drinks, and alcohol",
        "Raw onions, garlic, and hot chili peppers"
      ],
      "exercises": [
        "Low-impact upright cardio: Walking, stair climbing, light jogging",
        "Avoid heavy abdominal crunches, inverted yoga poses (downward dog), or heavy deadlifts immediately after eating",
        "Diaphragmatic breathing exercises to strengthen the crural diaphragm"
      ],
      "lifestyle": [
        "Elevate the head of your bed by 6 to 8 inches using bed risers (extra pillows alone just bend your neck and increase pressure)",
        "Never eat a meal within 3 to 4 hours of going to sleep",
        "Sleep on your left side (anatomically keeps the gastric junction above the acid pool)",
        "Avoid tight belts, corsets, and restrictive waistbands"
      ],
      "whenToConsult": "Seek prompt medical consultation if you have trouble swallowing, food feels stuck in your chest, you vomit blood, or you need antacids more than twice a week for over a month.",
      "faqs": [
        {
          "q": "Why does sleeping on the left side help acid reflux?",
          "a": "Because of the stomach's natural anatomy, sleeping on the left side positions the gastroesophageal junction above the level of gastric acid, preventing acid from splashing into the esophagus."
        },
        {
          "q": "Can acid reflux cause a heart attack?",
          "a": "GERD cannot cause a heart attack, but severe acid reflux can cause chest pain that feels identical to a heart attack. Any unexplained severe chest pain should always be evaluated in an emergency room first."
        }
      ],
      "references": [
        "American College of Gastroenterology (ACG) Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease",
        "World Gastroenterology Organisation (WGO) Global Guidelines on GERD",
        "Mayo Clinic GERD Diagnostic and Surgical Protocols"
      ]
    },
    {
      "id": "ibs",
      "name": "Irritable Bowel Syndrome (IBS)",
      "name_ml": "ഇറിറ്റബിൾ ബോവൽ സിൻഡ്രോം (IBS)",
      "name_hi": "इरिटेबल बाउल सिंड्रोम (आईबीएस)",
      "name_ar": "متلازمة القولون العصبي",
      "category": "digestive",
      "badge": "Gut-Brain Disorder",
      "icon": "activity",
      "shortDesc": "A common disorder of gut-brain interaction characterized by recurrent abdominal pain, bloating, and altered bowel habits.",
      "whatIsIt": "Irritable Bowel Syndrome (IBS) is a functional gastrointestinal disorder (disorder of gut-brain interaction) characterized by recurrent abdominal pain or cramping associated with defecation, accompanied by a change in bowel frequency or form. It is categorized into IBS-D (diarrhea-predominant), IBS-C (constipation-predominant), and IBS-M (mixed pattern).",
      "causes": [
        "Visceral hypersensitivity: Hyper-reactive nerve signaling between the enteric nervous system and brain",
        "Abnormal gastrointestinal motility (too fast causing diarrhea, too slow causing constipation)",
        "Post-Infectious IBS (PI-IBS) triggered following a severe bout of gastroenteritis / food poisoning",
        "Alterations in gut microbiome composition (dysbiosis) and low-grade mucosal inflammation",
        "Psychological stress, anxiety, and early-life trauma activating the autonomic HPA axis"
      ],
      "symptoms": [
        "Recurrent abdominal cramping or aching, typically relieved or worsened after passing stool",
        "Noticeable abdominal bloating, distension, and excessive gas / flatulence",
        "Frequent loose, watery stools with urgency (in IBS-D)",
        "Hard, lumpy, infrequent stools with straining and feeling of incomplete evacuation (in IBS-C)",
        "Mucus in stool (without blood)",
        "Alternating diarrhea and constipation from week to week (in IBS-M)"
      ],
      "warningSigns": [
        "Alarm / 'Red Flag' symptoms that RULE OUT simple IBS and require immediate colonoscopy:",
        "Rectal bleeding or blood in stool",
        "Unintended significant weight loss",
        "Nocturnal diarrhea awakening the patient from sleep",
        "New onset of symptoms after age 50 or family history of Colorectal Cancer or IBD"
      ],
      "riskFactors": [
        "Female gender (twice as common in women as in men)",
        "Age under 50 years",
        "History of anxiety, depression, or chronic psychological stress",
        "Prior severe bacterial gastroenteritis (Campylobacter, Salmonella, Shigella)",
        "Family history of functional gastrointestinal disorders"
      ],
      "bodyImpact": "While IBS does not cause physical ulceration, structural bowel damage, or elevate cancer risk, it causes severe physical discomfort, chronic fatigue, anxiety, depression, and profoundly impairs social and professional quality of life.",
      "diagnosis": [
        "Rome IV Diagnostic Criteria: Recurrent abdominal pain at least 1 day/week in the last 3 months, associated with 2+ of: related to defecation, change in stool frequency, change in stool form",
        "Fecal Calprotectin test (to rule out Inflammatory Bowel Disease - Crohn's / Ulcerative Colitis)",
        "Celiac Disease Serology (Anti-tTG IgA and total IgA) to rule out celiac disease",
        "Complete Blood Count and CRP to rule out occult infection or systemic inflammation",
        "Colonoscopy performed only if alarm symptoms or age > 45-50 criteria are met"
      ],
      "treatments": [
        "Low-FODMAP Diet (Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols) under dietitian guidance",
        "Soluble fiber supplementation (Psyllium / Ispaghula husk) — insoluble fiber should be avoided",
        "Antispasmodics (e.g., Mebeverine, Hyoscine, Dicyclomine) for abdominal cramping",
        "IBS-D medications: Loperamide, Rifaximin (gut-directed antibiotic), Alosetron, Eluxadoline",
        "IBS-C medications: Osmotic laxatives (Polyethylene glycol), Lubiprostone, Linaclotide",
        "Neuromodulators: Low-dose Tricyclic Antidepressants (Amitriptyline) or SSRIs to dampen visceral pain signaling",
        "Gut-Directed Hypnotherapy and Cognitive Behavioral Therapy (CBT)"
      ],
      "prevention": "Preventing flare-ups involves identifying personal food triggers through a systematic food diary, eating regular meals at consistent times, drinking sufficient fluids, managing mental stress, and avoiding unnecessary broad-spectrum antibiotics.",
      "safeFoods": [
        "Low-FODMAP fruits: Strawberries, blueberries, oranges, grapes, kiwis",
        "Low-FODMAP vegetables: Carrots, cucumbers, spinach, zucchini, bell peppers",
        "Lactose-free dairy products, almond milk, or rice milk",
        "Lean meats, poultry, eggs, and tofu",
        "Gluten-free grains: Rice, oats, quinoa",
        "Peppermint oil capsules (natural smooth muscle antispasmodic)"
      ],
      "avoidFoods": [
        "High-FODMAP foods: Onions, garlic, wheat, barley, rye, legumes/beans",
        "High-fructose fruits: Apples, pears, watermelons, mangoes, dried fruits",
        "Lactose-heavy dairy (regular cow's milk, ice cream, soft cheeses)",
        "Sugar-free candies with artificial polyol sweeteners (sorbitol, mannitol, xylitol)",
        "Carbonated beverages, excessive caffeine, and alcohol"
      ],
      "exercises": [
        "Moderate aerobic exercise (30 minutes of brisk walking or gentle cycling 4-5 days a week)",
        "Yoga targeting pelvic and abdominal relaxation",
        "Diaphragmatic belly breathing for 10 minutes twice daily",
        "Gentle stretching routines"
      ],
      "lifestyle": [
        "Eat meals slowly in a calm environment; chew thoroughly",
        "Maintain a 3-phase Low-FODMAP strategy: Elimination (2-6 weeks), Reintroduction, Personalization",
        "Practice daily mindfulness, meditation, or progressive muscle relaxation",
        "Establish a consistent bowel routine every morning after breakfast"
      ],
      "whenToConsult": "Consult a doctor if you develop new bowel changes lasting several weeks. SEEK PROMPT EVALUATION if you notice blood in stool, lose weight without trying, or have diarrhea waking you at night.",
      "faqs": [
        {
          "q": "What does Low-FODMAP mean?",
          "a": "FODMAPs are short-chain carbohydrates that are poorly absorbed in the small intestine. They draw water into the bowel and are fermented rapidly by gut bacteria, causing gas, pain, and diarrhea in people with sensitive guts."
        },
        {
          "q": "Does IBS increase my risk of developing colon cancer?",
          "a": "No. IBS is a functional disorder of nerve and muscle regulation in the bowel. It does not cause inflammation, ulcers, or structural damage, and does not increase the risk of bowel cancer."
        }
      ],
      "references": [
        "American College of Gastroenterology (ACG) Clinical Guideline: Management of Irritable Bowel Syndrome",
        "Rome IV Criteria for Functional Gastrointestinal Disorders",
        "British Society of Gastroenterology Guidelines on the Management of IBS"
      ]
    },
    {
      "id": "peptic-ulcer",
      "name": "Peptic Ulcer Disease",
      "name_ml": "പെപ്റ്റിക് അൾസർ (കുടൽപ്പുണ്ണ്)",
      "name_hi": "पेप्टिक अल्सर (पेट का अल्सर)",
      "name_ar": "قرحة المعدة والاثني عشر",
      "category": "digestive",
      "badge": "Mucosal Ulceration",
      "icon": "alert-triangle",
      "shortDesc": "Open sores or erosions that develop on the inside lining of your stomach (gastric ulcer) and the upper portion of your small intestine (duodenal ulcer).",
      "whatIsIt": "Peptic Ulcer Disease (PUD) refers to painful open sores or breaks in the inner epithelial lining of the stomach (gastric ulcer) or the first part of the small intestine (duodenal ulcer). They occur when the thick protective layer of mucus that coats the digestive tract is eroded by harsh digestive acids and pepsin.",
      "causes": [
        "Infection with Helicobacter pylori (H. pylori) bacteria (~70% of gastric, ~90% of duodenal ulcers)",
        "Regular long-term use of NSAIDs (Aspirin, Ibuprofen, Naproxen, Ketorolac, Diclofenac)",
        "Zollinger-Ellison Syndrome (rare gastrinoma tumor producing extreme gastrin and acid)",
        "Physiological stress ulcers in critically ill intensive care unit patients",
        "Cigarette smoking (reduces bicarbonate secretion and impairs mucosal healing)"
      ],
      "symptoms": [
        "Burning epigastric stomach pain located between the navel and breastbone",
        "Duodenal ulcer pain: Typically occurs 2 to 3 hours after a meal or in the middle of the night, often relieved temporarily by eating food",
        "Gastric ulcer pain: Often worsened shortly after eating food",
        "Feeling of early fullness, abdominal bloating, and belching",
        "Nausea, intolerance to fatty foods, and heartburn"
      ],
      "warningSigns": [
        "Perforation: Sudden, intense, knife-like abdominal pain with board-like rigidity (Surgical Emergency)",
        "Gastrointestinal Hemorrhage: Vomiting bright red blood or black 'coffee-ground' emesis",
        "Melena: Jet black, tarry, sticky stools",
        "Gastric Outlet Obstruction: Intractable recurrent vomiting of undigested food eaten hours earlier"
      ],
      "riskFactors": [
        "Concurrent use of NSAIDs with oral corticosteroids, anticoagulants, or SSRIs",
        "History of prior peptic ulcers or GI bleeding",
        "Active tobacco smoking and heavy alcohol consumption",
        "Age over 60 years",
        "Untreated chronic H. pylori infection"
      ],
      "bodyImpact": "Deep ulcers can erode into muscularis mucosae and penetrate major blood vessels (e.g., gastroduodenal artery), causing catastrophic internal bleeding. Full-thickness perforation leaks gastric juices into the sterile peritoneal cavity causing fatal peritonitis and septic shock.",
      "diagnosis": [
        "Upper Endoscopy (Esophagogastroduodenoscopy - EGD) to visualize ulcer, measure size, and biopsy edges",
        "Biopsy for Histopathology to rule out gastric adenocarcinoma in all gastric ulcers",
        "H. pylori testing (Urea breath test, stool antigen test, or rapid endoscopic urease test)",
        "Upright Chest and Abdominal X-Ray or CT (to detect free subdiaphragmatic air in perforation)",
        "Hemoglobin / Hematocrit level to assess blood loss"
      ],
      "treatments": [
        "H. pylori Eradication: 14-day Bismuth Quadruple Therapy (PPI + Bismuth Subsalicylate + Metronidazole + Tetracycline) or Triple Therapy",
        "High-dose Proton Pump Inhibitors (PPIs: Omeprazole 40mg, Pantoprazole) for 4 to 8 weeks to allow mucosal healing",
        "Potassium-Competitive Acid Blockers (PCAB: Vonoprazan)",
        "Endoscopic Hemostasis (Hemoclips, thermal coagulation, epinephrine injection) for actively bleeding ulcers",
        "Emergency Laparoscopic / Open Graham Patch repair for perforated ulcers"
      ],
      "prevention": "Avoid unnecessary NSAID use; if NSAIDs are required, co-prescribe a gastroprotective PPI. Eradicate H. pylori completely, quit smoking, avoid excessive alcohol, and never mix painkillers with alcohol.",
      "safeFoods": [
        "High-fiber whole grains (oatmeal, barley, brown rice)",
        "Probiotic foods (plain yogurt, kefir) which help suppress H. pylori",
        "Cruciferous vegetables rich in sulforaphane (broccoli, cauliflower)",
        "Apples, pears, and berries rich in flavonoids that inhibit H. pylori growth",
        "Soft, easily digestible cooked vegetables and lean poultry"
      ],
      "avoidFoods": [
        "NSAID painkillers (Aspirin, Ibuprofen, Diclofenac) without doctor approval",
        "Alcohol and caffeinated drinks (stimulate gastric acid release)",
        "Spicy hot chili peppers, black pepper, and mustard seed",
        "Acidic tomato products and citrus fruits during active ulcer flare-ups",
        "Deep-fried foods and heavily salted cured meats"
      ],
      "exercises": [
        "Low-impact walking and gentle movement to support digestion",
        "Stress-reduction yoga and deep meditation (lowers vagal gastrin stimulation)",
        "Avoid strenuous physical lifting or bearing down during acute healing"
      ],
      "lifestyle": [
        "Stop smoking immediately — nicotine doubles ulcer recurrence rates and delays healing",
        "Take prescribed acid-suppressing medication for the full recommended duration, not just until pain stops",
        "Undergo repeat follow-up endoscopy after 8-12 weeks for gastric ulcers to verify complete healing and rule out malignancy",
        "Avoid eating late night snacks right before bed"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY for sudden severe knife-like abdominal pain, vomiting blood, or passing black tarry stools. Consult a doctor for stomach burning lasting over a week.",
      "faqs": [
        {
          "q": "Does spicy food cause stomach ulcers?",
          "a": "No. Spicy foods do not cause ulcers; the primary causes are H. pylori bacteria and NSAID painkillers. However, spicy food can irritate an existing ulcer and worsen burning symptoms."
        },
        {
          "q": "Why do duodenal ulcers feel better after eating?",
          "a": "When food enters the stomach, the pyloric sphincter closes and the duodenum releases alkaline pancreatic bicarbonate to neutralize stomach acid, temporarily easing the pain of a duodenal ulcer."
        }
      ],
      "references": [
        "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection",
        "British Society of Gastroenterology Guidelines for the Management of Peptic Ulcer Bleeding",
        "Mayo Clinic Peptic Ulcer Diagnosis and Treatment Protocols"
      ]
    },
    {
      "id": "gallstones",
      "name": "Gallstones (Cholelithiasis)",
      "name_ml": "പിത്താശയക്കല്ലുകൾ (ഗാൾസ്റ്റോൺസ്)",
      "name_hi": "पित्त की पथरी (पित्ताशय की पथरी)",
      "name_ar": "حصوات المرارة",
      "category": "digestive",
      "badge": "Biliary Calculus",
      "icon": "disc",
      "shortDesc": "Hardened deposits of digestive fluid (cholesterol or bilirubin) that form inside the gallbladder.",
      "whatIsIt": "Cholelithiasis is the presence of solid crystalline concretions (gallstones) within the gallbladder. Gallstones can range from the size of a grain of sand to a golf ball. The two main types are Cholesterol stones (~80%, yellowish-green, composed of hardened cholesterol) and Pigment stones (dark brown/black, composed of excess bilirubin).",
      "causes": [
        "Supersaturation of bile with cholesterol exceeding the solubilizing capacity of bile salts and lecithin",
        "Gallbladder hypomotility or stasis (sluggish emptying allowing crystals to nucleate and grow)",
        "Excess bilirubin in bile due to chronic hemolytic anemias or liver cirrhosis (pigment stones)",
        "Rapid, drastic weight loss (such as after bariatric surgery) mobilizing large amounts of cholesterol"
      ],
      "symptoms": [
        "Most stones (~80%) are asymptomatic ('silent gallstones')",
        "Biliary Colic: Sudden, intense, steady pain in the right upper quadrant or epigastrium lasting 1 to 5 hours",
        "Pain radiating to the right shoulder blade or upper back",
        "Pain classically triggered 30 to 90 minutes after eating a rich, fatty, or greasy meal",
        "Nausea and vomiting during acute pain attacks",
        "Abdominal bloating and indigestion"
      ],
      "warningSigns": [
        "Acute Cholecystitis: Right upper quadrant pain lasting > 6 hours with high fever and Murphy's sign",
        "Choledocholithiasis: Jaundice (yellow eyes/skin), dark tea-colored urine, pale clay-colored stools",
        "Gallstone Pancreatitis: Severe epigastric pain radiating directly to the back with skyrocketing lipase/amylase",
        "Ascending Cholangitis: Charcot's triad (Fever + Jaundice + RUQ pain) — a life-threatening medical emergency"
      ],
      "riskFactors": [
        "The classic '5 Fs': Female, Forty, Fat (obese), Fertile (multiparity/estrogen exposure), Fair",
        "Rapid weight loss diets and prolonged fasting",
        "Diabetes mellitus, metabolic syndrome, and hypertriglyceridemia",
        "Sedentary lifestyle and low dietary fiber",
        "Family history of gallstones"
      ],
      "bodyImpact": "Impacted stones in the cystic duct cause acute gallbladder inflammation, bacterial infection, empyema, and gangrene. Stones migrating into the common bile duct cause obstructive jaundice, life-threatening suppurative cholangitis, and acute necrotizing pancreatitis.",
      "diagnosis": [
        "Transabdominal Ultrasound of the Right Upper Quadrant (gold standard, > 95% sensitivity for gallstones)",
        "Liver Function Tests (Total and direct bilirubin, Alkaline Phosphatase, ALT, AST)",
        "Serum Amylase and Lipase (to screen for gallstone pancreatitis)",
        "Magnetic Resonance Cholangiopancreatography (MRCP) to visualize stones lodged in bile ducts",
        "Endoscopic Retrograde Cholangiopancreatography (ERCP) for diagnostic confirmation and stone extraction"
      ],
      "treatments": [
        "Expectant management / 'Watchful waiting' for asymptomatic silent gallstones",
        "Laparoscopic Cholecystectomy (minimally invasive surgical gallbladder removal — definitive gold standard)",
        "ERCP with Endoscopic Sphincterotomy for stones lodged in the common bile duct",
        "Ursodeoxycholic Acid (UDCA) oral dissolution therapy (only for small radiolucent cholesterol stones in patients unfit for surgery)",
        "Intravenous antibiotics and analgesia for acute cholecystitis"
      ],
      "prevention": "Maintain a healthy body weight and avoid rapid 'crash' starvation diets. Consume high-fiber meals, healthy unsaturated fats (nuts, olive oil), stay physically active, and take UDCA prophylactically during medically supervised rapid weight loss.",
      "safeFoods": [
        "High-fiber foods: Oats, barley, lentils, beans, whole wheat",
        "Fresh fruits and vegetables (apples, pears, citrus, leafy greens)",
        "Lean protein choices: Skinless poultry breast, egg whites, fish, tofu",
        "Healthy unsaturated fats in moderation (extra virgin olive oil, almonds, walnuts)",
        "Black coffee (proven to stimulate gallbladder emptying and reduce stone risk)"
      ],
      "avoidFoods": [
        "Deep-fried foods, french fries, and fried chicken (triggers intense gallbladder contractions)",
        "Fatty cuts of pork, beef, bacon, and processed sausages",
        "Full-fat dairy, heavy cream, butter, and rich cheeses",
        "Rich cream-based soups, gravies, pastries, and croissants"
      ],
      "exercises": [
        "Regular brisk walking (150-200 minutes weekly lowers gallstone risk by ~30%)",
        "Moderate cycling, swimming, or aerobic workouts",
        "Resistance and strength training to maintain metabolic rate and prevent weight regain"
      ],
      "lifestyle": [
        "Avoid skipping meals; prolonged fasting allows bile to sit and crystallize in the gallbladder",
        "Aim for gradual weight loss (no more than 0.5 to 1 kg per week)",
        "Drink plenty of water throughout the day",
        "Limit consumption of refined sugars and processed carbohydrates"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES OR GO TO THE ER IMMEDIATELY if you experience intense stomach pain lasting more than 2 hours, fever with chills, or yellowing of your skin or eyes.",
      "faqs": [
        {
          "q": "Can I live a normal life without a gallbladder?",
          "a": "Yes. The gallbladder merely stores bile; the liver produces it. After cholecystectomy, bile flows continuously and directly from the liver into the small intestine. Most people digest food normally without long-term issues."
        },
        {
          "q": "Can gallstones be dissolved with lemon juice or olive oil flushes?",
          "a": "No. The popular 'gallbladder flush' is medically disproven. The 'stones' people pass after these flushes are merely congealed soap complexes formed from the massive dose of oil and acidic juice."
        }
      ],
      "references": [
        "World Gastroenterology Organisation (WGO) Global Guidelines on Gallstones",
        "European Association for the Study of the Liver (EASL) Clinical Practice Guidelines on the Prevention, Diagnosis and Treatment of Gallstones",
        "Mayo Clinic Gallstones Overview"
      ]
    },
    {
      "id": "celiac-disease",
      "name": "Celiac Disease (Gluten-Sensitive Enteropathy)",
      "name_ml": "സീലിയാക് രോഗം",
      "name_hi": "सीलिएक रोग",
      "name_ar": "مرض الداء البطني (السيلياك)",
      "category": "digestive",
      "badge": "Autoimmune Enteropathy",
      "icon": "shield-alert",
      "shortDesc": "A serious systemic autoimmune disorder triggered by consuming gluten that damages the small intestine villi.",
      "whatIsIt": "Celiac disease is a chronic hereditary autoimmune disorder occurring in genetically predisposed people where ingestion of gluten (a protein found in wheat, rye, and barley) leads to immune-mediated destruction of the mucosal lining and microscopic finger-like projections (villi) of the small intestine, causing severe malabsorption.",
      "causes": [
        "Autoimmune reaction triggered by dietary gluten ingestion",
        "Genetic predisposition: Mandatory presence of HLA-DQ2 or HLA-DQ8 heterodimers",
        "Tissue Transglutaminase (tTG) autoantibody generation",
        "Environmental triggers (gastrointestinal viral infections, pregnancy, surgery) triggering phenotypic onset"
      ],
      "symptoms": [
        "Chronic diarrhea or pale, foul-smelling, fatty, floating stools (Steatorrhea)",
        "Abdominal bloating, cramping, and excessive flatulence",
        "Unexplained weight loss and failure to thrive / stunted growth in children",
        "Chronic refractory Iron Deficiency Anemia unresponsive to oral iron",
        "Profound chronic fatigue, brain fog, and muscle weakness",
        "Dermatitis Herpetiformis: Intensely itchy, blistering skin rash on elbows, knees, and buttocks",
        "Recurrent aphthous mouth ulcers and dental enamel defects"
      ],
      "warningSigns": [
        "Celiac Crisis: Severe explosive diarrhea, hypokalemia, hypocalcemia, and shock",
        "Refractory Celiac Disease (persistent villous atrophy despite 12+ months strict gluten-free diet)",
        "Enteropathy-Associated T-Cell Lymphoma (EATL) — rare malignant transformation"
      ],
      "riskFactors": [
        "First-degree relative with biopsy-proven celiac disease (10x higher risk)",
        "Type 1 Diabetes Mellitus, Autoimmune Thyroiditis (Hashimoto's), or Addison's disease",
        "Down Syndrome, Turner Syndrome, or Williams Syndrome",
        "Presence of HLA-DQ2 or HLA-DQ8 gene loci"
      ],
      "bodyImpact": "Immune destruction leads to total villous atrophy (flattening of intestinal villi) and crypt hyperplasia in the duodenum and jejunum. This strips the intestine of absorptive surface area, causing severe malabsorption of iron, calcium, Vitamin D, Vitamin B12, folic acid, and fat-soluble vitamins.",
      "diagnosis": [
        "Serum Anti-Tissue Transglutaminase (anti-tTG) IgA antibody test (must be performed while on a gluten-containing diet)",
        "Total Serum IgA level (to rule out selective IgA deficiency, which causes false-negative tTG)",
        "Anti-Endomysial Antibodies (EMA-IgA) for confirmatory specificity",
        "Upper Endoscopy with Duodenal Biopsies (at least 4-6 biopsies from bulb and distal duodenum showing Marsh classification villous blunting)",
        "HLA-DQ2 / HLA-DQ8 genetic testing (has 99% negative predictive value)"
      ],
      "treatments": [
        "Strict, lifelong, 100% Gluten-Free Diet (GFD) — the only proven effective medical treatment",
        "Nutritional supplementation for corrected deficiencies (Iron, Calcium, Vitamin D, B12, Zinc)",
        "Consultation with a specialized registered celiac dietitian",
        "Systemic Corticosteroids or Budesonide for acute celiac crisis or Refractory Celiac Disease Type 1",
        "Regular serological monitoring of tTG-IgA levels to verify dietary compliance and mucosal healing"
      ],
      "prevention": "Celiac disease cannot be prevented from developing in genetically susceptible individuals. Secondary prevention relies on strict lifelong avoidance of all trace gluten contamination to allow full villous regeneration and prevent osteoporosis and lymphoma.",
      "safeFoods": [
        "Naturally gluten-free grains: Rice, quinoa, corn, certified gluten-free oats, millet, buckwheat, sorghum",
        "Fresh unprocessed meats, poultry, fish, eggs, and plain tofu",
        "All fresh fruits, vegetables, and legumes",
        "Plain milk, butter, hard cheeses, and pure vegetable oils",
        "Nuts, seeds, and certified gluten-free packaged products"
      ],
      "avoidFoods": [
        "All forms of Wheat (spelt, kamut, farro, durum, semolina, couscous, maida)",
        "Barley, barley malt extract, malt vinegar, and beer",
        "Rye and triticale",
        "Commercial soy sauces (most contain wheat as primary ingredient)",
        "Canned soups, gravies, and processed meats containing wheat flour thickeners",
        "Cross-contaminated foods (shared toasters, shared deep fryers)"
      ],
      "exercises": [
        "Weight-bearing resistance training and walking to rebuild bone mineral density lost to malabsorption",
        "Low to moderate cardio exercise to restore energy levels",
        "Gentle stretching and mobility routines"
      ],
      "lifestyle": [
        "Dedicate separate kitchen utensils, toasters, and cutting boards to prevent gluten cross-contamination",
        "Read all food, medication, and cosmetic labels diligently for hidden gluten or wheat starch",
        "Undergo a baseline DEXA bone density scan to screen for early osteopenia or osteoporosis",
        "Join national celiac support societies for updated gluten-free product testing registries"
      ],
      "whenToConsult": "Consult a gastroenterologist if you have chronic unexplained diarrhea, bloating, or iron deficiency anemia BEFORE starting a gluten-free diet, as cutting gluten early makes accurate medical diagnosis impossible.",
      "faqs": [
        {
          "q": "Why must I continue eating gluten before my celiac test?",
          "a": "Celiac tests detect antibodies generated in response to gluten. If you eliminate gluten before testing, the immune system quiets down, antibody levels drop, and intestinal villi heal, causing false-negative test results."
        },
        {
          "q": "Is celiac disease the same as a wheat allergy or gluten sensitivity?",
          "a": "No. A wheat allergy is an immediate IgE allergic reaction (hives, wheezing). Non-celiac gluten sensitivity causes discomfort without autoantibodies or intestinal damage. Celiac disease is an autoimmune condition causing permanent organ damage if untreated."
        }
      ],
      "references": [
        "American College of Gastroenterology (ACG) Clinical Guidelines: Diagnosis and Management of Celiac Disease",
        "ESPGHAN Guidelines for Diagnosing Coeliac Disease 2024",
        "Celiac Disease Foundation Clinical Compendium"
      ]
    },
    {
      "id": "migraine",
      "name": "Migraine Headache Disorder",
      "name_ml": "മൈഗ്രെയ്ൻ (കൊടിഞ്ഞി)",
      "name_hi": "माइग्रेन / आधासीसी का दर्द",
      "name_ar": "الصداع النصفي (الشقيقة)",
      "category": "neurological",
      "badge": "Neurovascular Headache",
      "icon": "zap",
      "shortDesc": "A complex neurovascular disorder causing moderate to severe throbbing headache attacks, typically unilateral and accompanied by sensory sensitivities.",
      "whatIsIt": "Migraine is a chronic disabling neurological disorder characterized by recurrent attacks of moderate to severe pulsating headache pain, most often affecting one side of the head. It is accompanied by symptoms such as nausea, vomiting, and extreme sensitivity to light (photophobia), sound (phonophobia), and odors. In roughly one-third of individuals, attacks are preceded by an 'aura' (transient focal neurological visual or sensory disturbances).",
      "causes": [
        "Cortical Spreading Depression (CSD): A self-propagating wave of neuronal and glial depolarization across the cerebral cortex",
        "Activation of the Trigeminal-Vascular System releasing Calcitonin Gene-Related Peptide (CGRP), Substance P, and neurokinin A",
        "Neurogenic inflammation and cerebral vasodilation",
        "Genetic channelopathies (mutations in CACNA1A, ATP1A2 in familial hemiplegic migraine)",
        "Hormonal fluctuations in women (precipitous drops in circulating estrogen prior to menstruation)"
      ],
      "symptoms": [
        "Moderate to severe throbbing or pulsating pain, usually on one side of the head",
        "Photophobia (severe sensitivity to light) and Phonophobia (sensitivity to sound)",
        "Nausea, abdominal queasiness, and vomiting",
        "Visual Aura: Scintillating scotomas (flickering zigzag lights), fortification spectra, or blind spots",
        "Sensory Aura: Tingling or numbness marching across fingers and face",
        "Allodynia: Scalp tenderness where light touching or brushing hair feels painful",
        "Postdrome ('Migraine Hangover'): Cognitive fatigue, brain fog, and muscle exhaustion lasting 24-48 hours"
      ],
      "warningSigns": [
        "Status Migrainosus: A severe debilitating migraine attack lasting longer than 72 hours continuously",
        "Sudden thunderclap headache reaching maximum agonizing intensity in seconds (needs urgent CT to rule out Subarachnoid Hemorrhage)",
        "Headache with high fever, neck stiffness, and confusion (Meningitis warning)",
        "New focal neurological deficit that persists longer than 1 hour or occurs for the first time after age 50"
      ],
      "riskFactors": [
        "Female sex (3 times more common in women due to hormonal rhythms)",
        "Family history of migraine (strong hereditary concordance)",
        "High chronic stress levels, irregular sleep patterns, or shift work",
        "Frequent consumption of specific dietary triggers (aged cheeses, MSG, aspartame, red wine)",
        "Weather changes and barometric pressure drops"
      ],
      "bodyImpact": "Frequent migraine attacks cause central sensitization, lowering the threshold for pain across the trigeminal pathways and converting episodic migraine into chronic daily migraine (>= 15 headache days/month). It significantly increases the risk of ischemic stroke in patients experiencing migraine with aura who smoke or use estrogen contraceptives.",
      "diagnosis": [
        "International Classification of Headache Disorders (ICHD-3) clinical criteria",
        "Brain MRI with MR Angiography (to exclude structural lesions, aneurysms, or arteriovenous malformations if atypical symptoms occur)",
        "Comprehensive neurological examination to verify normal focal cranial nerve and motor status",
        "Careful headache diary tracking attack frequency, duration, severity, and triggers"
      ],
      "treatments": [
        "Acute Abortive Therapy: Triptans (Sumatriptan, Rizatriptan, Zolmitriptan) taken at earliest onset",
        "Novel CGRP Receptor Antagonists ('Gepants': Rimegepant, Ubrogepant, Zavegepant)",
        "Serotonin 5-HT1F receptor agonist (Lasmiditan) — safe for patients with cardiovascular disease",
        "Anti-emetics (Metoclopramide, Ondansetron) for nausea",
        "Preventive Therapy: Anti-CGRP Monoclonal Antibodies (Erenumab, Fremanezumab, Galcanezumab monthly subcutaneous injections)",
        "OnabotulinumtoxinA (Botox) injections every 12 weeks for Chronic Migraine",
        "Oral preventives: Beta-blockers (Propranolol), Anticonvulsants (Topiramate), TCAs (Amitriptyline)"
      ],
      "prevention": "Identify and eliminate personal lifestyle triggers using a headache diary, maintain rigid consistency in sleep and meal timings, practice daily stress reduction, stay well hydrated, and limit over-the-counter painkillers to under 10 days per month to prevent Medication-Overuse Headache (MOH).",
      "safeFoods": [
        "Fresh magnesium-rich leafy greens (spinach, Swiss chard)",
        "Raw pumpkin seeds, almonds, and sunflower seeds",
        "Cold-water fish rich in Omega-3 fatty acids",
        "Hydrating whole fruits (watermelon, cucumbers, berries)",
        "Ginger and chamomile herbal teas"
      ],
      "avoidFoods": [
        "Aged cheeses (contain tyramine: blue cheese, aged cheddar, parmesan)",
        "Processed cured meats containing nitrites (hot dogs, bacon, salami)",
        "Monosodium glutamate (MSG) and artificial sweeteners (Aspartame)",
        "Red wine, dark beers, and champagne",
        "Excessive caffeine intake or abrupt caffeine withdrawal"
      ],
      "exercises": [
        "Low to moderate aerobic exercise: 30 minutes of brisk walking, cycling, or swimming 3-4 times a week",
        "Neck and shoulder gentle stretching routines to relieve cervical muscle tension",
        "Avoid sudden heavy burst weightlifting during the aura or prodrome phase"
      ],
      "lifestyle": [
        "Retire to a dark, quiet, cool room with a cold ice pack on the forehead during an attack",
        "Maintain a strict sleep schedule — go to bed and wake up at the exact same hour every day, including weekends",
        "Never skip meals; hypoglycemia is a potent migraine trigger",
        "Limit OTC painkillers (Paracetamol, Ibuprofen) to less than 2 days per week to avoid rebound headaches"
      ],
      "whenToConsult": "Seek urgent medical attention if you experience the 'worst headache of your life' (thunderclap), headache with fever and stiff neck, or sudden vision loss. Consult a neurologist if headaches occur more than 4 days a month.",
      "faqs": [
        {
          "q": "What is a 'Medication-Overuse Headache' (MOH)?",
          "a": "Taking pain relievers (like triptans, ibuprofen, or paracetamol) more than 10 to 15 days a month causes the brain to adapt by producing more pain receptors, resulting in a daily rebound headache cycle that only breaks by stopping the medication."
        },
        {
          "q": "Why do migraines occur more frequently around menstruation?",
          "a": "A steep drop in circulating estrogen levels right before menstruation triggers the release of inflammatory CGRP and prostaglandins in the brain, causing what is known as menstrual migraine."
        }
      ],
      "references": [
        "American Headache Society (AHS) Consensus Statement on the Management of Migraine",
        "International Headache Society (IHS) The International Classification of Headache Disorders, 3rd edition (ICHD-3)",
        "Lancet Neurology Comprehensive Review on Migraine Pathophysiology and Therapeutics"
      ]
    },
    {
      "id": "epilepsy",
      "name": "Epilepsy & Seizure Disorders",
      "name_ml": "അപസ്മാരം (എപ്പിലപ്സി)",
      "name_hi": "मिर्गी / अपस्मार (एपिलेप्सी)",
      "name_ar": "الصرع واضطرابات التشنج",
      "category": "neurological",
      "badge": "Abnormal Cerebral Discharges",
      "icon": "activity",
      "shortDesc": "A chronic neurological disorder characterized by recurrent, unprovoked epileptic seizures due to abnormal hypersynchronous electrical activity in the brain.",
      "whatIsIt": "Epilepsy is a chronic brain disorder diagnosed when a person has had two or more unprovoked seizures occurring more than 24 hours apart, or one unprovoked seizure with a high probability of recurrence. Seizures are temporary disruptions in normal brain electrophysiology caused by sudden, hypersynchronous bursts of electrical discharges from cortical neurons.",
      "causes": [
        "Structural brain lesions: Traumatic Brain Injury (TBI), stroke, brain tumors, cerebral cavernous malformations",
        "Genetic factors: Mutations in voltage-gated ion channels (sodium, potassium) and GABA-A receptors",
        "Infectious etiologies: Meningitis, viral encephalitis, neurocysticercosis (tapeworm larvae), cerebral malaria",
        "Congenital / Developmental brain malformations (cortical dysplasia, lissencephaly)",
        "Perinatal hypoxia, asphyxia, or neonatal intracranial hemorrhage"
      ],
      "symptoms": [
        "Generalized Tonic-Clonic Seizure: Sudden loss of consciousness, body stiffening (tonic phase), followed by rhythmic bilateral jerking of limbs (clonic phase), tongue biting, and urinary incontinence",
        "Absence Seizure (Petit Mal): Brief (5-10 seconds) blank staring spells with sudden cessation of activity, common in children",
        "Focal Seizures with Impaired Awareness: Lip-smacking, chewing movements, fumbling hand automatisms, and disorientation",
        "Focal Aware Seizures (Aura): Sudden strange olfactory hallucinations (smelling burning rubber), dejavu, or rising epigastric sensation",
        "Postictal State: Confusion, drowsiness, headache, and amnesia lasting minutes to hours after a seizure"
      ],
      "warningSigns": [
        "STATUS EPILEPTICUS: A continuous convulsive seizure lasting longer than 5 minutes, or multiple seizures without regaining consciousness between them (Medical Emergency — can cause permanent brain damage or death)",
        "Seizure occurring in water (high risk of drowning)",
        "Seizure accompanied by severe head trauma or difficulty breathing afterward"
      ],
      "riskFactors": [
        "History of severe head injuries, concussions, or skull fractures",
        "Prior stroke, vascular malformations, or brain infections",
        "Family history of epilepsy or febrile convulsions in infancy",
        "Substance abuse, sudden alcohol withdrawal, or severe electrolyte derangements (severe hyponatremia, hypoglycemia)",
        "Dementia or Alzheimer's disease in elderly patients"
      ],
      "bodyImpact": "Prolonged seizures cause excitotoxic neuronal death through massive glutamate release and calcium influx. Chronic unmanaged epilepsy increases the risk of traumatic fractures, burns, aspiration pneumonia, cognitive decline, depression, and Sudden Unexpected Death in Epilepsy (SUDEP).",
      "diagnosis": [
        "Electroencephalogram (EEG): Resting, sleep-deprived, and ambulatory video-EEG monitoring to localize epileptiform spike-and-wave discharges",
        "High-Resolution 3T Epilepsy-Protocol Brain MRI (to detect subtle hippocampal sclerosis, focal cortical dysplasia, or cavernomas)",
        "Complete metabolic panel: Glucose, Calcium, Magnesium, Sodium, and Toxicology screen",
        "Lumbar Puncture (CSF analysis) if infectious meningoencephalitis is suspected"
      ],
      "treatments": [
        "Anti-Seizure Medications (ASMs / AEDs): Levetiracetam, Lamotrigine, Sodium Valproate, Carbamazepine, Topiramate, Lacosamide",
        "Emergency Rescue Medications: Intranasal Midazolam spray or rectal Diazepam gel for acute prolonged seizures",
        "Resective Epilepsy Surgery (Temporal lobectomy, lesionectomy) for drug-resistant focal epilepsy",
        "Neuromodulation Devices: Vagus Nerve Stimulation (VNS), Responsive Neurostimulation (RNS), Deep Brain Stimulation (DBS)",
        "Ketogenic Diet (high-fat, adequate-protein, very-low-carbohydrate diet) under medical supervision for refractory pediatric epilepsy"
      ],
      "prevention": "Wear helmets during cycling and contact sports to prevent traumatic brain injuries. Manage high blood pressure to prevent hemorrhagic strokes, ensure clean sanitation to prevent neurocysticercosis, and never abruptly stop anti-seizure medications.",
      "safeFoods": [
        "Balanced, blood-sugar stabilizing meals with moderate complex carbs and proteins",
        "Magnesium and Vitamin B6 rich foods: Spinach, bananas, almonds, avocados",
        "Omega-3 fatty acids from fish, flaxseeds, and walnuts to support neural membrane stability",
        "Medically formulated Ketogenic Diet or Modified Atkins Diet when prescribed by an epilepsy neurologist"
      ],
      "avoidFoods": [
        "Alcohol consumption and abrupt alcohol withdrawal (a major seizure precipitator)",
        "Excessive synthetic caffeine energy drinks (lowers seizure threshold)",
        "Artificial sweeteners like Aspartame in sensitive individuals",
        "Skipping meals or extreme prolonged fasting (hypoglycemia triggers seizures)"
      ],
      "exercises": [
        "Regular low-impact aerobic exercise (walking, jogging, cycling on stationary bikes) is safe and beneficial",
        "Always have a companion present when swimming; never swim alone",
        "Avoid scuba diving, rock climbing, or unsupervised sports at dangerous heights"
      ],
      "lifestyle": [
        "CRITICAL FIRST AID: Ease the person to the floor, turn them onto their side (recovery position) to keep airway clear, cushion their head, loosen tight neckwear. DO NOT hold them down, and NEVER put anything in their mouth",
        "Maintain a strict, consistent sleep routine — sleep deprivation is the most potent trigger for breakthrough seizures",
        "Take anti-seizure medication at the exact same hour every day without missing doses",
        "Wear a medical alert bracelet indicating epilepsy and emergency contact"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY if a seizure lasts longer than 5 minutes, if a second seizure occurs right away, if the person is injured, pregnant, in water, or does not regain consciousness within 10 minutes.",
      "faqs": [
        {
          "q": "Should I put a spoon or object in someone's mouth during a seizure so they don't swallow their tongue?",
          "a": "ABSOLUTELY NEVER put anything in a seizing person's mouth! It is anatomically impossible to swallow your tongue. Putting spoons or fingers in their mouth can break teeth, cause severe bleeding, or block the airway."
        },
        {
          "q": "Can a person with epilepsy drive a car?",
          "a": "In most countries, people with epilepsy can legally drive once they have been completely seizure-free on medication for a specified duration (typically 6 to 12 months) as certified by their neurologist."
        }
      ],
      "references": [
        "International League Against Epilepsy (ILAE) Classification and Guidelines for Epilepsy Management 2024",
        "American Epilepsy Society (AES) Evidence-Based Guideline for Treatment of Prolonged Seizures",
        "NICE Clinical Guidelines on Epilepsies in Children, Young People and Adults"
      ]
    },
    {
      "id": "alzheimers",
      "name": "Alzheimer's Disease",
      "name_ml": "അൽഷിമേഴ്സ് രോഗം (ഓർമ്മക്കുറവ്)",
      "name_hi": "अल्जाइमर रोग (स्मृति लोप)",
      "name_ar": "مرض ألزهايمر",
      "category": "neurological",
      "badge": "Neurodegenerative Disease",
      "icon": "brain",
      "shortDesc": "A progressive, irreversible neurodegenerative disorder that slowly destroys memory, cognition, and basic functional capabilities.",
      "whatIsIt": "Alzheimer's disease is the most common cause of dementia, accounting for 60% to 80% of all dementia cases. It is a progressive neurodegenerative disease that begins in the entorhinal cortex and hippocampus (the brain's memory centers) and eventually spreads throughout the cerebral cortex, destroying synaptic connections and brain tissue.",
      "causes": [
        "Extracellular accumulation of toxic Beta-Amyloid (Abeta-42) senile plaques",
        "Intracellular hyperphosphorylation of Tau protein forming Neurofibrillary Tangles (NFTs)",
        "Chronic neuroinflammation driven by overactive microglia and reactive astrocytes",
        "Loss of central cholinergic neurotransmission (acetylcholine deficit)",
        "Apolipoprotein E epsilon 4 (APOE-e4) genetic risk allele (strongest genetic risk factor)",
        "Rare autosomal dominant mutations in APP, PSEN1, and PSEN2 genes (Early-Onset Familial Alzheimer's)"
      ],
      "symptoms": [
        "Memory loss that disrupts daily life, particularly forgetting recently learned information or appointments",
        "Challenges in planning, problem-solving, or managing monthly financial bills",
        "Difficulty completing familiar tasks at home or work (e.g., cooking familiar recipes)",
        "Confusion with time, dates, seasons, or losing track of where one is located",
        "Trouble understanding visual images and spatial relationships",
        "New problems with words in speaking or writing (anomia: struggling to name everyday objects)",
        "Misplacing things in bizarre places (e.g., putting keys in the freezer) and inability to retrace steps",
        "Changes in mood and personality: Increasing suspicion, paranoia, withdrawal, or agitation"
      ],
      "warningSigns": [
        "Wandering and becoming lost in one's own familiar neighborhood",
        "'Sundowning': Marked agitation, confusion, and restlessness that escalates in late afternoon and evening",
        "Inability to recognize close family members or spouses",
        "Loss of basic swallowing reflex (dysphagia) and total incontinence in late stages"
      ],
      "riskFactors": [
        "Age (risk doubles every 5 years after age 65; roughly one-third of people aged 85+ have Alzheimer's)",
        "Carrying one or two copies of the APOE-e4 gene",
        "Cardiovascular risk factors: Hypertension, diabetes, obesity, smoking, and elevated homocysteine",
        "History of traumatic brain injury or repetitive head impacts",
        "Chronic social isolation, low educational attainment, and unaddressed mid-life hearing loss"
      ],
      "bodyImpact": "Progressive cortical atrophy with widening of sulci and enlargement of cerebral ventricles. Destruction of neuronal networks leads to profound amnesia, apraxia (inability to perform purposeful movements), agnosia, loss of motor control, and ultimately death from secondary complications such as aspiration pneumonia or sepsis.",
      "diagnosis": [
        "Standardized Cognitive Assessments: Mini-Mental State Examination (MMSE), Montreal Cognitive Assessment (MoCA)",
        "Brain MRI demonstrating marked bilateral hippocampal and temporal lobe volume loss",
        "Amyloid and Tau PET Neuroimaging (visualizing plaque and tangle density in vivo)",
        "Cerebrospinal Fluid (CSF) biomarkers: Low Abeta-42, elevated phosphorylated-tau (p-tau181/p-tau217)",
        "Novel plasma blood tests (p-tau217 / p-tau181) for early clinical screening"
      ],
      "treatments": [
        "Disease-Modifying Anti-Amyloid Monoclonal Antibodies: Lecanemab (Leqembi) and Donanemab (slow clinical cognitive decline in early-stage disease)",
        "Cholinesterase Inhibitors (Donepezil, Rivastigmine, Galantamine) to preserve synaptic acetylcholine",
        "NMDA Receptor Antagonist (Memantine) to protect against glutamate excitotoxicity in moderate-to-severe disease",
        "Non-pharmacological sensory and environmental modifications to manage behavioral agitation",
        "Comprehensive caregiver support and cognitive rehabilitation programs"
      ],
      "prevention": "According to the Lancet Commission on Dementia, up to 45% of dementia cases may be prevented or delayed by addressing 14 modifiable risk factors: managing blood pressure and diabetes, exercising, treating hearing loss with hearing aids, eating a MIND diet, quitting smoking, and staying socially and intellectually engaged.",
      "safeFoods": [
        "The MIND Diet (combination of Mediterranean and DASH diets shown to slash Alzheimer's risk by up to 53%):",
        "Green leafy vegetables (spinach, kale, collards) at least 6 servings per week",
        "Berries (blueberries, strawberries) at least twice a week (rich in anthocyanins)",
        "Raw nuts (walnuts, almonds) and extra virgin olive oil as the primary dietary fat",
        "Fatty cold-water fish (salmon, sardines) at least once per week",
        "Whole grains and legumes (beans, lentils)"
      ],
      "avoidFoods": [
        "Saturated fats from butter, margarine, and full-fat dairy in excess",
        "Fast fried foods and ultra-processed packaged snacks",
        "Pastries, packaged sweets, and high-fructose corn syrup beverages",
        "Excessive red meat consumption (limit to less than 4 servings a week)",
        "High alcohol consumption (causes direct neurotoxic damage)"
      ],
      "exercises": [
        "Regular aerobic exercise: 150 minutes of weekly brisk walking (stimulates BDNF — Brain-Derived Neurotrophic Factor)",
        "Dual-task training: Walking while performing verbal or arithmetic cognitive challenges",
        "Balance and strength training to prevent debilitating falls in older adults"
      ],
      "lifestyle": [
        "Engage in lifelong cognitive learning: Learn a new language, musical instrument, or challenging puzzles",
        "Correct mid-life hearing impairment early with hearing aids (hearing loss severely accelerates cognitive decline)",
        "Maintain active social connections with family, community groups, and friends",
        "Install safety locks, GPS trackers, and remove tripping hazards from the home environment"
      ],
      "whenToConsult": "Consult a neurologist or geriatrician if you or a loved one notices persistent memory changes, difficulties with everyday navigation or finances, or personality shifts. Early diagnosis enables modern disease-modifying treatments.",
      "faqs": [
        {
          "q": "Is Alzheimer's disease a normal part of aging?",
          "a": "No. While aging is the greatest risk factor, Alzheimer's is a fatal biological disease that destroys brain tissue. Normal aging may involve occasionally forgetting a name and remembering it later; Alzheimer's involves completely forgetting recent events and familiar faces."
        },
        {
          "q": "What is the difference between dementia and Alzheimer's?",
          "a": "Dementia is the general umbrella term for severe decline in memory and thinking that impairs daily function. Alzheimer's is a specific biological disease and the most common cause of dementia."
        }
      ],
      "references": [
        "Alzheimer's Association 2024 Alzheimer's Disease Facts and Figures",
        "The Lancet Commission on Dementia Prevention, Intervention, and Care 2024",
        "National Institute on Aging (NIA) Alzheimer's Disease Diagnostic Criteria"
      ]
    },
    {
      "id": "parkinsons",
      "name": "Parkinson's Disease",
      "name_ml": "പാർക്കിൻസൺസ് രോഗം",
      "name_hi": "पार्किंसन रोग (कंपकंपी का रोग)",
      "name_ar": "مرض باركنسون (الشلل الرعاش)",
      "category": "neurological",
      "badge": "Basal Ganglia Disorder",
      "icon": "activity",
      "shortDesc": "A progressive neurodegenerative disorder affecting motor and non-motor systems due to selective loss of dopaminergic neurons in the substantia nigra.",
      "whatIsIt": "Parkinson's disease is a progressive movement and neurodegenerative disorder characterized by the selective degeneration of dopamine-producing neurons in the Substantia Nigra pars compacta of the midbrain. The resulting deficit of dopamine in the basal ganglia disrupts the brain's ability to plan, initiate, and modulate smooth muscular movement.",
      "causes": [
        "Accumulation of Lewy Bodies containing misfolded Alpha-Synuclein protein aggregates in brainstem neurons",
        "Selective loss of dopaminergic neurons in the substantia nigra pars compacta",
        "Mitochondrial dysfunction, oxidative stress, and impaired autophagy",
        "Genetic mutations in LRRK2, GBA, PRKN (Parkin), PINK1, and SNCA genes",
        "Environmental pesticide exposure (Paraquat, Rotenone) and rural well-water consumption"
      ],
      "symptoms": [
        "Resting Tremor: Involuntary rhythmic shaking ('pill-rolling' tremor) at 4-6 Hz, typically beginning unilaterally in one hand while resting",
        "Bradykinesia: Slowness of voluntary movement, difficulty initiating steps (gait hesitancy), and progressive reduction in movement amplitude",
        "Rigidity: Inflexible, stiff limbs with 'cogwheel' or 'lead-pipe' resistance during passive movement",
        "Postural Instability: Loss of postural reflexes, impaired balance, and frequent backward falling (Retropulsion)",
        "Parkinsonian Gait: Shuffling small steps, stooped posture, reduced arm swing, and festination (uncontrolled speeding up of steps)",
        "Micrographia (handwriting becoming progressively tiny and cramped) and Hypomimia ('mask-like' facial expression)",
        "Non-Motor Symptoms: Loss of smell (Anosmia), chronic constipation, REM Sleep Behavior Disorder (acting out dreams), and depression"
      ],
      "warningSigns": [
        "'Freezing of Gait' (FOG): Sudden feeling of feet being glued to the ground, dramatically increasing fall risk",
        "Severe dyskinesias (involuntary writhing movements caused by long-term levodopa therapy)",
        "Orthostatic hypotension causing syncope upon standing",
        "Parkinson's Disease Dementia / visual hallucinations in advanced stages"
      ],
      "riskFactors": [
        "Advancing age (average age of onset is 60 years)",
        "Male sex (men are 1.5 times more likely to develop Parkinson's than women)",
        "Chronic occupational exposure to pesticides, herbicides, and heavy metals",
        "Carrying mutations in LRRK2 or GBA genes",
        "History of repetitive head trauma (e.g., boxing)"
      ],
      "bodyImpact": "Degeneration spreads from the brainstem to the basal ganglia and cerebral cortex. Patients lose fine and gross motor independence, experience progressive dysarthria (soft, slurred speech), dysphagia (choking hazard), severe autonomic dysregulation, and cognitive impairment.",
      "diagnosis": [
        "Clinical neurological evaluation based on UK Parkinson's Disease Society Brain Bank criteria (Bradykinesia + at least one of Tremor, Rigidity, Postural Instability)",
        "Clear, robust motor improvement in response to trial of Levodopa therapy",
        "DaTscan (Ioflupane I-123 SPECT) showing loss of dopamine transporters in the striatum",
        "Brain MRI (to rule out normal pressure hydrocephalus, multiple system atrophy, or stroke)",
        "Novel Alpha-Synuclein Seed Amplification Assays (SAAs) in cerebrospinal fluid"
      ],
      "treatments": [
        "Levodopa / Carbidopa (Sinemet) — the most potent and effective symptomatic treatment (converts to dopamine in brain)",
        "Dopamine Receptor Agonists (Pramipexole, Ropinirole, Rotigotine patch)",
        "MAO-B Inhibitors (Rasagiline, Selegiline, Safinamide) to block dopamine breakdown",
        "COMT Inhibitors (Entacapone, Opicapone) to prolong levodopa bioavailability",
        "Deep Brain Stimulation (DBS): Surgical implantation of electrodes in the Subthalamic Nucleus (STN) or Globus Pallidus internus (GPi)",
        "Lee Silverman Voice Treatment (LSVT LOUD) and specialized physical therapy (LSVT BIG)"
      ],
      "prevention": "Regular vigorous aerobic exercise throughout mid-life is the strongest protective lifestyle factor associated with lower Parkinson's risk. Moderate consumption of coffee/caffeine and green tea, avoidance of neurotoxic pesticides, and Mediterranean dietary habits are also associated with reduced incidence.",
      "safeFoods": [
        "High-fiber whole foods (prunes, chia seeds, vegetables) to treat Parkinson's-related constipation",
        "Adequate hydration (at least 2 liters of water daily to support blood pressure)",
        "Antioxidant-rich berries, leafy greens, walnuts, and green tea",
        "Timing protein intake: If taking Levodopa, consume heavy proteins at dinner rather than breakfast/lunch, as dietary amino acids compete with Levodopa for absorption across the blood-brain barrier"
      ],
      "avoidFoods": [
        "Consuming large high-protein steaks or dairy directly with Levodopa pills (delays absorption)",
        "Ultra-processed packaged foods and saturated fats",
        "Excessive alcohol (interferes with balance and motor control)",
        "Dehydrating sugary beverages"
      ],
      "exercises": [
        "Non-contact boxing (Rock Steady Boxing: builds balance, footwork, hand-eye coordination)",
        "Tandem cycling, stationary biking at high cadence (80-90 RPM)",
        "Tai Chi and tango dancing (proven to dramatically reduce falls and improve balance)",
        "Daily gait and exaggerated amplitude movement training (LSVT BIG)"
      ],
      "lifestyle": [
        "Take Levodopa on an empty stomach (30-60 minutes before meals) with a full glass of water for optimal absorption",
        "Install grab bars in bathrooms, remove loose throw rugs, and improve home lighting to prevent falls",
        "Use visual cues (laser line canes or horizontal floor tape) to step over 'freezing' episodes",
        "Maintain a sleep routine and treat REM sleep behavior disorder with medical guidance"
      ],
      "whenToConsult": "Consult a movement disorder specialist or neurologist if you notice a resting tremor in one hand, progressive stiffness, changes in handwriting, or shuffling steps.",
      "faqs": [
        {
          "q": "Why do some people with Parkinson's lose their sense of smell years before tremors start?",
          "a": "According to the Braak staging model, alpha-synuclein pathology often begins in the olfactory bulb and enteric nervous system of the gut more than a decade before it reaches the dopamine centers in the midbrain."
        },
        {
          "q": "Does Deep Brain Stimulation (DBS) cure Parkinson's disease?",
          "a": "No, DBS is not a cure, but it acts like a 'brain pacemaker' that dramatically smooths out tremors, stiffness, and medication motor fluctuations, allowing patients to regain substantial quality of life."
        }
      ],
      "references": [
        "Movement Disorder Society (MDS) Clinical Diagnostic Criteria for Parkinson's Disease",
        "American Academy of Neurology (AAN) Practice Guideline on Parkinson's Disease",
        "Lancet Neurology Parkinson's Disease Review Series"
      ]
    },
    {
      "id": "dementia",
      "name": "Vascular & Frontotemporal Dementia",
      "name_ml": "ഡിമെൻഷ്യ (വാസ്കുലർ & ഫ്രണ്ടോടെമ്പറൽ)",
      "name_hi": "डिमेंशिया (संवहनी और फ्रंटोटेम्पोरल मनोभ्रंश)",
      "name_ar": "الخرف الوعائي والجبهي الصدغي",
      "category": "neurological",
      "badge": "Cognitive Decline",
      "icon": "layers",
      "shortDesc": "Major neurocognitive syndromes characterized by progressive deterioration in executive function, behavior, language, and memory.",
      "whatIsIt": "Dementia is a clinical syndrome characterized by progressive cognitive decline that interferes with the ability to perform everyday activities independently. Beyond Alzheimer's, the two major forms are Vascular Dementia (caused by cerebral ischemia, infarcts, or small vessel disease) and Frontotemporal Dementia (FTD, caused by progressive atrophy of the frontal and temporal lobes, often striking individuals aged 45-64).",
      "causes": [
        "Vascular Dementia: Multi-infarct stroke, subcortical ischemic vascular disease (Binswanger's disease), cerebral amyloid angiopathy",
        "Frontotemporal Dementia (FTD): Abnormal accumulation of Tau or TDP-43 protein aggregates in frontal and temporal lobes",
        "Genetic mutations in MAPT, GRN, and C9orf72 genes (hereditary in ~40% of FTD cases)",
        "Uncontrolled chronic hypertension and cerebral atherosclerosis destroying microvessels"
      ],
      "symptoms": [
        "Vascular Dementia: Stepwise decline in executive function (planning, organizing, decision making) following cerebrovascular events, gait slowing",
        "Behavioral Variant FTD (bvFTD): Dramatic personality changes, loss of empathy, social disinhibition, apathy, and compulsive behaviors (e.g., hoarding, repetitive pacing)",
        "Primary Progressive Aphasia (PPA): Progressive loss of speech fluency, inability to name objects, or loss of word comprehension",
        "Emotional lability and sudden unprovoked crying or laughter (Pseudobulbar affect)",
        "Hyperoral changes: Compulsive craving for sweets, overeating, or putting non-food objects in mouth"
      ],
      "warningSigns": [
        "Extreme social disinhibition (inappropriate sexual remarks or shoplifting in public by previously law-abiding individuals)",
        "Sudden stepwise neurological drop after a silent transient ischemic stroke",
        "Severe dysphagia and aspiration risk"
      ],
      "riskFactors": [
        "For Vascular Dementia: Chronic hypertension, smoking, diabetes, hyperlipidemia, and atrial fibrillation",
        "For FTD: Strong family history of early-onset dementia or Amyotrophic Lateral Sclerosis (ALS/MND)",
        "Sedentary lifestyle and low cardiovascular fitness in mid-life"
      ],
      "bodyImpact": "Extensive white matter ischemic damage or focal frontotemporal lobar degeneration destroys neuronal pathways governing emotional regulation, executive reasoning, speech generation, and autonomic control.",
      "diagnosis": [
        "Neuropsychological battery evaluating executive functioning, word retrieval, and behavioral scales",
        "Brain MRI: Showing extensive confluent white matter hyperintensities (Fazekas scale) in Vascular Dementia, or bilateral knife-like frontal/temporal atrophy in FTD",
        "FDG-PET scan: Demonstrating characteristic hypometabolism in frontotemporal cortices",
        "Genetic testing for C9orf72, GRN, and MAPT mutations in suspected familial FTD cases"
      ],
      "treatments": [
        "For Vascular Dementia: Aggressive secondary stroke prevention (Antiplatelets e.g. Aspirin, Statins, Antihypertensives)",
        "For FTD: Selective Serotonin Reuptake Inhibitors (SSRIs e.g., Trazodone, Sertraline) to manage disinhibition, compulsions, and irritability",
        "Strict avoidance of standard Alzheimer's cholinesterase inhibitors in FTD (they frequently worsen agitation)",
        "Speech and language therapy for Primary Progressive Aphasia",
        "Structured environmental adaptations and specialized memory care support"
      ],
      "prevention": "Vascular dementia is heavily preventable through lifelong cardiovascular health: keeping blood pressure < 120/80 mmHg, zero smoking, treating sleep apnea, exercising regularly, and eating a heart-healthy diet.",
      "safeFoods": [
        "Mediterranean-DASH Diet Intervention for Neurodegenerative Delay (MIND diet)",
        "Polyphenol-rich blueberries, blackberries, and pomegranates",
        "Cold-water fatty fish providing EPA/DHA to support cerebral vessel health",
        "Cruciferous vegetables, garlic, and cold-pressed extra virgin olive oil",
        "Adequate daily water intake to prevent hemoconcentration"
      ],
      "avoidFoods": [
        "High-sodium processed meats and salted snack foods (drives small vessel hypertension)",
        "Trans fats and hydrogenated bakery oils that accelerate carotid plaque formation",
        "Excessive refined sugars that promote systemic vascular inflammation",
        "Heavy alcohol consumption (causes direct brain volume shrinkage)"
      ],
      "exercises": [
        "Aerobic exercise: 30 minutes of walking, stationary cycling, or water aerobics 4-5 days a week",
        "Supervised motor-cognitive combination activities",
        "Gentle stretching and balance drills to reduce falls caused by vascular gait changes"
      ],
      "lifestyle": [
        "Maintain rigorous control over blood pressure, LDL cholesterol, and blood glucose",
        "Create consistent, predictable daily routines to reduce behavioral anxiety and confusion",
        "Use visual signage around the home (labels on doors, simplified living areas)",
        "Engage legal and financial planning early while cognitive capacity is preserved"
      ],
      "whenToConsult": "Seek a neurology evaluation if a family member develops unexplained personality changes, social disinhibition, loss of speech fluency, or sudden decline in planning and multitasking after age 45-60.",
      "faqs": [
        {
          "q": "How does Frontotemporal Dementia differ from Alzheimer's disease?",
          "a": "Alzheimer's primarily strikes after age 65 and begins with short-term memory loss. Frontotemporal Dementia frequently strikes younger individuals (ages 45-64) and begins with dramatic personality changes, loss of social tact, or language problems, with memory relatively preserved early on."
        },
        {
          "q": "Can vascular dementia be reversed?",
          "a": "Brain tissue damaged by strokes cannot be repaired, but aggressive control of blood pressure, cholesterol, and lifestyle can prevent future strokes and stop stepwise cognitive deterioration."
        }
      ],
      "references": [
        "Alzheimer's Association Dementia Classifications and Research Summaries",
        "International Frontotemporal Dementia Consortium Diagnostic Criteria",
        "AHA/ASA Scientific Statement: Vascular Contributions to Cognitive Impairment and Dementia"
      ]
    },
    {
      "id": "multiple-sclerosis",
      "name": "Multiple Sclerosis (MS)",
      "name_ml": "മൾട്ടിപ്പിൾ സ്ക്ലിറോസിസ് (എം.എസ്)",
      "name_hi": "मल्टीपल स्केलेरोसिस (एमएस)",
      "name_ar": "التصلب المتعدد",
      "category": "neurological",
      "badge": "Autoimmune Demyelinating",
      "icon": "shield-alert",
      "shortDesc": "A chronic, immune-mediated neuroinflammatory disease of the central nervous system characterized by demyelination and axonal transection.",
      "whatIsIt": "Multiple Sclerosis is a chronic autoimmune condition in which the body's immune system mistakenly attacks and strips away the protective fatty insulation (myelin sheath) surrounding nerve fibers in the brain, spinal cord, and optic nerves. This demyelination disrupts communication along neural pathways, leaving hardened scar tissue (sclerosis) and permanent axonal damage.",
      "causes": [
        "Autoimmune attack orchestrated by autoreactive CD4+ and CD8+ T-cells and B-cells against myelin antigens (MBP, MOG)",
        "Epstein-Barr Virus (EBV) infection (proven to be a necessary trigger via molecular mimicry)",
        "Genetic predisposition involving HLA-DRB1*15:01 allele",
        "Low serum Vitamin D levels and low sunlight / UV exposure during adolescence",
        "Cigarette smoking and childhood/adolescent obesity"
      ],
      "symptoms": [
        "Optic Neuritis: Pain behind the eye with movement and acute monocular vision loss or color desaturation",
        "Lhermitte's Sign: An electric shock-like sensation radiating down the spine into the limbs when flexing the neck forward",
        "Sensory disturbances: Numbness, tingling ('pins and needles'), or burning sensations in limbs or trunk",
        "Uhthoff's Phenomenon: Temporary worsening of neurological symptoms when body temperature rises (hot shower, fever, exercise)",
        "Motor weakness, spasticity, foot drop, and loss of coordination / ataxia",
        "Neurogenic bladder dysfunction (urgency, frequency, or urinary retention)",
        "Severe chronic fatigue out of proportion to exertion and cognitive 'cog fog'"
      ],
      "warningSigns": [
        "Acute MS Relapse: Sudden emergence of new neurological deficits lasting > 24 hours in the absence of fever",
        "Progressive paraparesis (inability to walk) requiring assistive devices",
        "Severe brainstem relapse causing intractable vertigo, double vision (diplopia), and dysphagia"
      ],
      "riskFactors": [
        "Young adults: Most commonly diagnosed between ages 20 and 40",
        "Female sex (3 times more common in women than men)",
        "Temperate geographic zones (Northern Europe, North America, Southern Australia)",
        "History of infectious mononucleosis (symptomatic EBV infection)",
        "Family history of MS in a first-degree relative"
      ],
      "bodyImpact": "Focal inflammatory plaques cause conduction block along denuded axons. Over time, persistent microglial activation drives chronic smoldering neurodegeneration, brain and spinal cord atrophy, irreversible physical disability, and secondary progressive disease.",
      "diagnosis": [
        "McDonald Diagnostic Criteria 2017: Proving Dissemination in Space (DIS) and Dissemination in Time (DIT)",
        "Brain and Spinal Cord MRI with Gadolinium: Demonstrating periventricular, juxtacortical, and infratentorial ovoid demyelinating lesions ('Dawson's fingers')",
        "Lumbar Puncture (CSF analysis): Detection of CSF-specific Oligoclonal Bands (OCBs) and elevated IgG index",
        "Visual Evoked Potentials (VEP): Demonstrating delayed P100 latency in optic nerve pathways",
        "Optical Coherence Tomography (OCT) measuring retinal nerve fiber layer (RNFL) thinning"
      ],
      "treatments": [
        "Acute Relapse Treatment: High-dose intravenous Methylprednisolone (1,000 mg daily for 3-5 days) or Plasma Exchange (Plasmapheresis)",
        "Disease-Modifying Therapies (DMTs) to halt disease progression:",
        "High-Efficacy Monoclonal Antibodies: Ocrelizumab, Ofatumumab (Anti-CD20 B-cell depleters), Natalizumab (Alpha-4 integrin blocker)",
        "Oral DMTs: Fingolimod, Siponimod (S1P receptor modulators), Cladribine, Dimethyl fumarate, Teriflunomide",
        "Symptomatic management: Baclofen for spasticity, Amantadine for fatigue, Fampridine to improve walking speed",
        "Specialized neuro-physiotherapy and occupational therapy"
      ],
      "prevention": "While MS cannot be reliably prevented, maintaining optimal Vitamin D levels (blood level > 40-50 ng/mL), avoiding cigarette smoking, maintaining a healthy body weight, and receiving early high-efficacy DMTs prevents long-term permanent physical disability.",
      "safeFoods": [
        "Anti-inflammatory whole-food plant-forward diets (Mediterranean diet or Swank-style diet)",
        "Fatty cold-water fish rich in Vitamin D and Omega-3 fatty acids",
        "Fiber-rich vegetables, beans, and prebiotic foods to optimize gut microbiome diversity",
        "Berries, dark leafy greens, and cold-pressed extra virgin olive oil",
        "Adequate plain water throughout the day"
      ],
      "avoidFoods": [
        "Cigarettes and all tobacco products (smoking accelerates MS progression and brain atrophy)",
        "High-sodium processed meats and salty snacks (high salt promotes Th17 inflammatory responses)",
        "Industrial trans fats and ultra-processed convenience foods",
        "Excessive added refined sugars that promote systemic inflammation"
      ],
      "exercises": [
        "Aquatic / pool exercise in cool water (< 28°C) to prevent overheating (Uhthoff's sign)",
        "Moderate recumbent stationary cycling and low-impact walking",
        "Gentle stretching and yoga to relieve muscle spasticity and joint stiffness",
        "Resistance training with cooling vests or fans in the room"
      ],
      "lifestyle": [
        "Use air conditioning, cooling vests, and cold neck towels to avoid heat-triggered flare-ups",
        "Take daily Vitamin D3 supplements as recommended by your neurologist",
        "Completely stop smoking immediately",
        "Pace daily activities with planned rest intervals to manage chronic neurological fatigue"
      ],
      "whenToConsult": "Consult a neurologist immediately if you experience painful vision loss in one eye, numbness spreading across limbs for more than 24 hours, or electric shock sensations down your back when bending your neck.",
      "faqs": [
        {
          "q": "Does Multiple Sclerosis mean I will eventually end up in a wheelchair?",
          "a": "No. With modern high-efficacy disease-modifying therapies (DMTs) started early after diagnosis, the majority of people with MS today live active, independent, ambulatory lives without severe disability."
        },
        {
          "q": "Why do hot showers or warm weather make MS symptoms worse?",
          "a": "This is Uhthoff's phenomenon. In demyelinated nerves, a slight rise in body temperature (even 0.5°C) slows or completely blocks electrical conduction across damaged nerve segments. Symptoms resolve once the body cools down."
        }
      ],
      "references": [
        "McDonald Criteria for the Diagnosis of Multiple Sclerosis: 2017 Revisions",
        "American Academy of Neurology (AAN) Practice Guideline: Disease-Modifying Therapies for Multiple Sclerosis",
        "National Multiple Sclerosis Society Clinical Bulletins"
      ]
    },
    {
      "id": "depression",
      "name": "Major Depressive Disorder (Depression)",
      "name_ml": "വിഷാദരോഗം (ഡിപ്രഷൻ)",
      "name_hi": "अवसाद / डिप्रेशन",
      "name_ar": "اضطراب الاكتئاب الحاد",
      "category": "mental_health",
      "badge": "Mood Disorder",
      "icon": "frown",
      "shortDesc": "A common and serious medical illness that negatively affects feelings, cognition, energy, and daily functioning.",
      "whatIsIt": "Major Depressive Disorder (MDD) is a severe psychiatric mood disorder characterized by persistent feelings of sadness, emotional emptiness, and anhedonia (loss of interest or pleasure in once enjoyable activities) lasting at least two consecutive weeks. It is not a sign of personal weakness, but a biological illness involving complex neural circuitry, neuroendocrine dysregulation, and neurochemical imbalances.",
      "causes": [
        "Dysregulation of monoamine neurotransmitters (serotonin, norepinephrine, dopamine) and neuroplasticity pathways (BDNF)",
        "Chronic hyperactivity of the Hypothalamic-Pituitary-Adrenal (HPA) axis with elevated cortisol levels",
        "Genetic vulnerability with high heritability (~40%)",
        "Psychological trauma, adverse childhood experiences (ACEs), loss of a loved one, or severe life stressors",
        "Chronic systemic inflammation and medical illnesses (thyroid dysfunction, stroke, autoimmune conditions)"
      ],
      "symptoms": [
        "Persistent depressed mood, feelings of despair, sadness, or tearfulness most of the day",
        "Marked anhedonia: Total loss of interest in hobbies, socializing, and sexual intimacy",
        "Significant unintended weight loss/gain or dramatic changes in appetite",
        "Insomnia (especially early morning awakening) or Hypersomnia (sleeping excessively)",
        "Psychomotor agitation (restless pacing) or psychomotor retardation (slowed speech and body movements)",
        "Daily fatigue, loss of energy, and feeling physically weighed down",
        "Feelings of worthlessness, excessive inappropriate guilt, and helplessness",
        "Impaired ability to think, concentrate, focus at work, or make basic everyday decisions"
      ],
      "warningSigns": [
        "CRITICAL EMERGENCY: Recurrent suicidal ideation, suicide planning, or suicide attempts",
        "Giving away prized possessions, saying goodbye to friends, or expressing that 'everyone would be better off without me'",
        "Severe self-harm behaviors or psychotic depression (delusions, auditory hallucinations)",
        "Severe catatonia or total refusal of food and water"
      ],
      "riskFactors": [
        "Personal or family history of major depression, bipolar disorder, or suicide",
        "History of major trauma, emotional, physical, or sexual abuse",
        "Concurrent chronic painful physical illnesses (cancer, arthritis, fibromyalgia)",
        "Substance abuse (alcohol, opioids, sedatives)",
        "Social isolation and lack of supportive personal relationships"
      ],
      "bodyImpact": "Chronic depression causes structural remodeling in the brain, including hippocampal volume atrophy and prefrontal cortical thinning. Systemically, it causes autonomic dysregulation, elevated inflammatory cytokines (IL-6, TNF-alpha), doubles the risk of coronary heart disease, and accelerates cellular aging (telomere shortening).",
      "diagnosis": [
        "DSM-5 Diagnostic Criteria: At least 5 of 9 symptoms present nearly every day for 2 weeks, with at least one symptom being depressed mood or loss of interest/pleasure",
        "Validated Screening Scales: Patient Health Questionnaire-9 (PHQ-9 score >= 10 indicates moderate-to-severe depression), Hamilton Depression Rating Scale (HAM-D)",
        "Laboratory testing: Thyroid Panel (TSH, free T4), Complete Blood Count, Vitamin B12, and Vitamin D to rule out organic medical causes",
        "Comprehensive psychiatric clinical interview and suicide risk assessment"
      ],
      "treatments": [
        "Psychotherapy: Cognitive Behavioral Therapy (CBT), Interpersonal Psychotherapy (IPT), Acceptance and Commitment Therapy (ACT)",
        "Selective Serotonin Reuptake Inhibitors (SSRIs: Escitalopram, Sertraline, Fluoxetine)",
        "Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs: Venlafaxine, Duloxetine)",
        "Atypical Antidepressants: Bupropion (enhances dopamine/norepinephrine, zero sexual side effects), Mirtazapine (aids sleep and appetite)",
        "Novel Rapid-Acting Treatments: Intranasal Esketamine (Spravato) for Treatment-Resistant Depression",
        "Neuromodulation: Repetitive Transcranial Magnetic Stimulation (rTMS) and Electroconvulsive Therapy (ECT for severe refractory depression)"
      ],
      "prevention": "While clinical depression cannot always be prevented, proactive resilience building helps: maintaining strong social support networks, daily physical exercise, consistent 7-8 hour sleep hygiene, mindfulness-based stress reduction, and seeking professional therapy early at the first signs of emotional decline.",
      "safeFoods": [
        "Mediterranean dietary pattern rich in colorful fruits, vegetables, and legumes",
        "Fatty fish high in Omega-3 EPA/DHA (proven adjunctive mood-stabilizing effects)",
        "Fermented probiotic foods (yogurt, kefir, kimchi) to support the gut-brain axis",
        "Folate and magnesium-rich dark leafy greens (spinach, kale)",
        "Complex whole grains (oats, brown rice, quinoa) that promote steady serotonin synthesis"
      ],
      "avoidFoods": [
        "Alcohol and recreational drugs (alcohol is a direct central nervous system depressant)",
        "High-sugar confectioneries and sodas (cause rapid glycemic crashes that exacerbate depressive fatigue)",
        "Ultra-processed packaged fast foods loaded with industrial trans fats",
        "Excessive caffeine that spikes anxiety and disrupts restorative sleep"
      ],
      "exercises": [
        "Aerobic exercise: 30-45 minutes of brisk walking, jogging, or cycling 4-5 times a week (releases endorphins and elevates BDNF)",
        "Outdoor walks in green nature and morning sunlight (resets circadian rhythm and boosts mood)",
        "Resistance training 2-3 times weekly to enhance physical self-efficacy and vigor",
        "Mindful yoga combining body movement with deep diaphragmatic breathing"
      ],
      "lifestyle": [
        "Never suffer in silence — confide in a trusted physician, family member, or mental health professional",
        "Get 20-30 minutes of natural morning sunlight immediately upon waking",
        "Establish a structured daily routine with manageable small goals",
        "Stay connected socially, even when the urge is to isolate completely"
      ],
      "whenToConsult": "IF YOU OR SOMEONE YOU KNOW HAS THOUGHTS OF SELF-HARM OR SUICIDE, CALL OR TEXT 988 (USA/Canada), CALL 112 (Europe/India), OR GO TO THE NEAREST EMERGENCY ROOM IMMEDIATELY. HELP IS AVAILABLE 24/7.",
      "faqs": [
        {
          "q": "Are antidepressant medications addictive?",
          "a": "No. Antidepressants do not produce cravings, euphoria, or chemical addiction. However, they should not be stopped abruptly to avoid discontinuation syndrome, and should always be tapered under a doctor's guidance."
        },
        {
          "q": "How long does it take for antidepressants to start working?",
          "a": "Most patients begin noticing improvements in sleep and energy within 1 to 2 weeks, while full therapeutic improvement in mood, thinking, and emotional outlook typically takes 4 to 6 weeks of consistent use."
        }
      ],
      "references": [
        "American Psychiatric Association (APA) Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
        "National Institute of Mental Health (NIMH) Depression Comprehensive Bulletin",
        "World Health Organization (WHO) Depressive Disorder Factsheet 2024"
      ]
    },
    {
      "id": "anxiety",
      "name": "Generalized Anxiety Disorder (GAD)",
      "name_ml": "ഉത്കണ്ഠാ രോഗം (ആങ്സൈറ്റി)",
      "name_hi": "सामान्यीकृत चिंता विकार (एंग्जायटी)",
      "name_ar": "اضطراب القلق العام",
      "category": "mental_health",
      "badge": "Anxiety Spectrum",
      "icon": "alert-circle",
      "shortDesc": "Excessive, persistent, and uncontrollable worry about a variety of everyday life circumstances, accompanied by physical tension.",
      "whatIsIt": "Generalized Anxiety Disorder (GAD) is characterized by excessive, persistent, and unrealistic worry and apprehension about everyday activities, health, finances, work, or family, occurring on more days than not for at least 6 months. Unlike normal worry, GAD is difficult to control, disproportionate to the actual likelihood or impact of events, and interferes significantly with daily living.",
      "causes": [
        "Hyperactivity in neural fear circuitry: Hyper-responsive amygdala and impaired top-down inhibition from prefrontal cortex",
        "Dysregulation of inhibitory GABAergic, serotonergic, and noradrenergic neurotransmission",
        "Genetic predisposition and family history of anxiety or mood disorders",
        "Adverse childhood experiences, chronic environmental stress, and personality traits like neuroticism",
        "Underlying medical triggers: Hyperthyroidism, cardiac arrhythmias, or excessive stimulant use"
      ],
      "symptoms": [
        "Persistent, uncontrollable worry and catastrophic thinking ('what-if' loops)",
        "Restlessness, feeling keyed up, on edge, or inability to sit still",
        "Muscle tension: Chronic aching in neck, shoulders, and jaw (bruxism/teeth grinding)",
        "Easily fatigued and irritable",
        "Difficulty concentrating or mind going blank during tasks",
        "Sleep disturbances: Difficulty falling asleep due to racing thoughts, restless unrefreshing sleep",
        "Autonomic arousal: Rapid heart rate, palpitations, sweating, tremors, shortness of breath, and gastrointestinal distress ('butterflies in stomach')"
      ],
      "warningSigns": [
        "Panic Attacks: Sudden surges of overwhelming terror, chest tightness, dizziness, and feeling of impending doom",
        "Severe functional paralysis (inability to leave home, go to work, or drive)",
        "Co-morbid severe depression or self-medicating with alcohol or benzodiazepines"
      ],
      "riskFactors": [
        "Female sex (women are twice as likely as men to be diagnosed with GAD)",
        "Personal or family history of anxiety, depression, or panic disorder",
        "Chronic medical conditions or chronic pain syndromes",
        "High intake of caffeine, energy drinks, or prescription stimulants",
        "Exposure to chronic psychosocial trauma or bullying"
      ],
      "bodyImpact": "Chronic autonomic sympathetic hyper-arousal elevates circulating adrenaline and cortisol, resulting in sustained hypertension, endothelial damage, increased risk of cardiovascular disease, impaired immune function, and irritable bowel symptoms.",
      "diagnosis": [
        "DSM-5 Diagnostic Criteria: Excessive worry about various events for >= 6 months, difficult to control, with at least 3 of 6 somatic symptoms",
        "GAD-7 Questionnaire (score >= 10 indicates moderate-to-severe anxiety)",
        "Comprehensive medical evaluation to rule out somatic mimics: Serum TSH (hyperthyroidism), ECG (arrhythmias), toxicology screen",
        "Assessment of co-morbid major depression and substance use"
      ],
      "treatments": [
        "Cognitive Behavioral Therapy (CBT: identifying and restructuring cognitive distortions and decatastrophizing)",
        "First-Line Pharmacotherapy: SSRIs (Escitalopram, Sertraline) and SNRIs (Venlafaxine, Duloxetine)",
        "Azapirones: Buspirone (5-HT1A partial agonist, non-sedating, non-addictive)",
        "Pregabalin / Gabapentin (calcium channel alpha-2-delta ligands for anxiety)",
        "Beta-Blockers (Propranolol) for acute situational somatic symptoms (palpitations, tremors)",
        "Short-term Benzodiazepines strictly reserved for acute crises due to addiction and tolerance risks",
        "Mindfulness-Based Stress Reduction (MBSR) and biofeedback"
      ],
      "prevention": "Adopt regular stress-buffering lifestyle practices: eliminate excessive caffeine, practice daily diaphragmatic breathing, prioritize consistent sleep schedules, exercise regularly, and seek cognitive therapy early before worry patterns become deeply entrenched.",
      "safeFoods": [
        "Magnesium-rich foods (almonds, pumpkin seeds, dark chocolate, spinach) that calm neural excitability",
        "Herbal teas: Chamomile, lavender, and passionflower (have mild natural GABAergic calming effects)",
        "Complex carbohydrates (steel-cut oats, quinoa) that promote steady blood sugar without adrenaline surges",
        "Omega-3 fatty acids from wild fish and walnuts to dampen neuroinflammation",
        "Fermented prebiotic/probiotic foods to support gut serotonin production"
      ],
      "avoidFoods": [
        "High-dose caffeine (coffee, pre-workout supplements, energy drinks) — the most common trigger of anxiety spikes",
        "Alcohol (often used as a crutch, but causes severe rebound anxiety and sleep fragmentation the next morning)",
        "High-glycemic refined sugars and energy snacks that trigger reactive hypoglycemia and adrenergic surges",
        "Artificial food dyes and MSG in sensitive individuals"
      ],
      "exercises": [
        "Rhythmic aerobic exercise: 30 minutes of brisk walking, swimming, or jogging (burns excess adrenaline)",
        "Box Breathing technique: Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4 (activates vagus nerve)",
        "Progressive Muscle Relaxation (PMR): Systematically tensing and relaxing muscle groups from toes to face",
        "Restorative yoga and stretching"
      ],
      "lifestyle": [
        "Switch from high-caffeine coffee to decaf or herbal teas",
        "Dedicate a 15-minute 'worry window' earlier in the day to write down worries, leaving the rest of the day free",
        "Practice 10 minutes of daily mindfulness meditation using guided apps",
        "Turn off sensational news alerts and social media feeds that induce chronic threat states"
      ],
      "whenToConsult": "Consult a healthcare provider or licensed therapist if anxiety interferes with your ability to work, sleep, or maintain relationships, or if you experience panic attacks. Seek immediate emergency evaluation if chest pain accompanies anxiety.",
      "faqs": [
        {
          "q": "What is the physiological difference between a panic attack and a heart attack?",
          "a": "Both cause severe chest tightness, racing heart, and shortness of breath. A heart attack is caused by blocked blood flow to the heart muscle, while a panic attack is an intense sympathetic nervous system surge. Any first-time severe chest pain must be checked in the emergency room."
        },
        {
          "q": "Why does caffeine cause anxiety and jitteriness?",
          "a": "Caffeine blocks adenosine receptors in the brain (which normally promote relaxation and sleepiness) and stimulates the adrenal glands to pump out adrenaline, mimicking the body's acute fight-or-flight response."
        }
      ],
      "references": [
        "American Psychological Association (APA) Clinical Practice Guideline for the Treatment of Anxiety",
        "NICE Clinical Guidelines: Generalised Anxiety Disorder and Panic Disorder in Adults",
        "Mayo Clinic Anxiety Disorders Overview"
      ]
    },
    {
      "id": "chronic-stress",
      "name": "Chronic Stress & Burnout Syndrome",
      "name_ml": "വിട്ടുമാറാത്ത മാനസിക സമ്മർദ്ദം (സ്ട്രെസ്സ് & ബേൺഔട്ട്)",
      "name_hi": "पुराना तनाव और बर्नआउट (क्रोनिक स्ट्रेस)",
      "name_ar": "الإجهاد المزمن ومتلازمة الاحتراق النفسي",
      "category": "mental_health",
      "badge": "Systemic Exhaustion",
      "icon": "battery-charging",
      "shortDesc": "Prolonged, unrelenting emotional and physiological tension resulting in cognitive depletion, cynicism, and physical exhaustion.",
      "whatIsIt": "Chronic stress occurs when the body's physiological stress response remains persistently activated over weeks to months without adequate recovery. When chronic workplace or life stress is unsuccessfully managed, it culminates in Burnout Syndrome—a recognized occupational phenomenon defined by three dimensions: feelings of energy depletion or exhaustion, increased mental distance or negativism/cynicism toward one's job, and reduced professional efficacy.",
      "causes": [
        "Prolonged over-activation of the sympathetic nervous system and HPA axis with cortisol flattening",
        "Unreasonable workplace workload, lack of autonomy, poor workplace boundaries, and toxic environments",
        "Chronic caregiving burdens for sick or elderly relatives without respite",
        "Financial instability and socioeconomic hardship",
        "High internal perfectionism, lack of recovery time, and inability to say 'no'"
      ],
      "symptoms": [
        "Profound, unyielding physical and emotional exhaustion not relieved by sleep or weekends",
        "Cynicism, emotional detachment, irritability, and resentment toward responsibilities",
        "Cognitive deficits: Brain fog, short-term memory lapses, and severe loss of productivity",
        "Tension headaches, chronic back and neck pain",
        "Frequent gastrointestinal disturbances (reflux, nausea, alternating bowel habits)",
        "Frequent colds and respiratory infections due to stress-induced immunosuppression",
        "Loss of creativity, enthusiasm, and feelings of accomplishment"
      ],
      "warningSigns": [
        "Complete physical collapse / severe functional breakdown",
        "Severe clinical depression and emergence of suicidal ideation",
        "Alcohol or prescription drug dependency as coping mechanisms",
        "Hypertensive crises or sudden cardiac arrhythmias triggered by acute surges on top of chronic stress"
      ],
      "riskFactors": [
        "High-pressure professions: Healthcare workers, emergency responders, corporate executives, teachers",
        "Personality traits: Type A personality, perfectionism, people-pleasing tendencies",
        "Lack of social support or isolating working-from-home conditions",
        "Working more than 55 hours per week (associated with higher stroke and heart disease risk)"
      ],
      "bodyImpact": "Persistent glucocorticoid exposure causes allostatic overload, blunts glucocorticoid receptor sensitivity, causes brain-derived neurotrophic factor (BDNF) downregulation, shrinks the prefrontal cortex, accelerates vascular atherosclerosis, promotes visceral abdominal fat storage, and impairs cellular immunity.",
      "diagnosis": [
        "Clinical assessment and Maslach Burnout Inventory (MBI) evaluating Emotional Exhaustion, Depersonalization, and Personal Accomplishment",
        "Perceived Stress Scale (PSS) evaluation",
        "Comprehensive medical workup: Cortisol rhythm testing, TSH, Ferritin, Vitamin D, and CBC to exclude medical causes of exhaustion",
        "Cardiovascular screening: Resting blood pressure, ECG, and hs-CRP"
      ],
      "treatments": [
        "Structured cognitive behavioral stress management and workplace boundary coaching",
        "Mandatory restorative medical leave and temporary workload restructuring",
        "Mindfulness-Based Stress Reduction (MBSR) programs",
        "Sleep restoration protocols and circadian alignment",
        "Pharmacotherapy for co-occurring clinical anxiety or depression under psychiatric supervision"
      ],
      "prevention": "Preventing burnout requires strict psychological boundaries: taking mandatory vacations, adhering to fixed work hours, engaging in non-work creative hobbies, daily physical movement, and fostering open organizational communication about workload expectations.",
      "safeFoods": [
        "Adaptogenic and antioxidant foods: Blueberries, dark leafy greens, walnuts",
        "Magnesium-rich foods: Spinach, pumpkin seeds, black beans, avocados",
        "Complex carbohydrates providing steady serotonin production (oatmeal, sweet potatoes)",
        "Warm soothing chamomile or holy basil (Tulsi) herbal tea",
        "High-protein breakfasts that blunt morning cortisol spikes"
      ],
      "avoidFoods": [
        "Excessive cups of coffee and energy drinks (perpetuates the false adrenaline-exhaustion cycle)",
        "High-sugar convenience treats that cause sharp blood glucose spikes followed by fatigue",
        "Alcohol as an evening 'wind-down' tool (ruins REM sleep architecture)",
        "Skipping meals or eating lunch at your desk while working"
      ],
      "exercises": [
        "Gentle, restorative cardio: 30 minutes of nature walking / forest bathing (Shinrin-yoku)",
        "Gentle restorative yoga and stretching (avoids over-taxing already exhausted adrenal pathways)",
        "Diaphragmatic breathing and 4-7-8 breathing exercise to activate the parasympathetic nervous system",
        "Swimming in calm water"
      ],
      "lifestyle": [
        "Establish strict 'digital curfew': Turn off work emails and phone notifications after 7 PM",
        "Schedule non-negotiable downtime in your calendar just like a business meeting",
        "Learn to say 'No' to new commitments without justifying or over-explaining",
        "Cultivate restorative creative hobbies completely unrelated to productivity or work"
      ],
      "whenToConsult": "Consult a healthcare provider or licensed psychologist if exhaustion makes basic work or family care impossible, if you feel detached from reality, or if you develop physical symptoms like persistent chest tightness or severe insomnia.",
      "faqs": [
        {
          "q": "Is burnout recognized as an official medical condition?",
          "a": "The World Health Organization (WHO) classifies Burnout in the ICD-11 as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed, though it often co-exists with clinical depression."
        },
        {
          "q": "How long does it typically take to recover from severe burnout?",
          "a": "Recovery is not instantaneous; it typically requires 3 to 12 months of structured rest, workload adjustments, psychological counseling, and genuine lifestyle changes."
        }
      ],
      "references": [
        "World Health Organization (WHO) ICD-11 Occupational Burnout Classification",
        "American Psychological Association (APA) Stress in America Annual Reports",
        "Lancet Seminar on Burnout Syndrome and Stress-Related Disorders"
      ]
    },
    {
      "id": "insomnia",
      "name": "Insomnia & Chronic Sleep Disorders",
      "name_ml": "ഉറക്കമില്ലായ്മ (ഇൻസോംനിയ)",
      "name_hi": "अनिद्रा (इंसोमनिया)",
      "name_ar": "الأرق واضطرابات النوم المزمنة",
      "category": "mental_health",
      "badge": "Circadian Disruption",
      "icon": "moon",
      "shortDesc": "A prevalent sleep disorder characterized by persistent difficulty falling asleep, staying asleep, or experiencing non-restorative sleep.",
      "whatIsIt": "Insomnia is a sleep disorder characterized by chronic dissatisfaction with sleep quantity or quality, despite adequate opportunity for sleep. It encompasses Sleep Onset Insomnia (trouble falling asleep), Sleep Maintenance Insomnia (frequent nocturnal awakenings), and Early Morning Awakening Insomnia. Chronic insomnia is diagnosed when sleep disturbance occurs at least 3 nights per week for 3 months or longer.",
      "causes": [
        "Psychophysiological hyperarousal: Overactive sympathetic nervous system and elevated nocturnal cortisol",
        "Circadian rhythm misalignment from irregular sleep schedules, shift work, and blue light from electronic screens",
        "Psychological distress, anxiety, depression, and obsessive rumination in bed",
        "Excessive caffeine, nicotine, alcohol, or stimulant medications",
        "Co-existing medical conditions: Chronic pain, GERD, restless legs syndrome, and obstructive sleep apnea"
      ],
      "symptoms": [
        "Lying awake for 30 minutes or more struggling to fall asleep at bedtime",
        "Waking up multiple times throughout the night and struggling to return to sleep",
        "Waking up hours too early in the morning feeling unrefreshed and exhausted",
        "Daytime drowsiness, brain fog, poor concentration, and memory errors",
        "Mood irritability, anxiety, and dread regarding the upcoming night's sleep ('sleep anxiety')",
        "Tension headaches, gastrointestinal upset, and reliance on sleep aids"
      ],
      "warningSigns": [
        "Severe micro-sleep episodes while driving a motor vehicle or operating machinery",
        "Co-existing loud snoring with gasping for air (Obstructive Sleep Apnea)",
        "Severe paradoxical insomnia or dependence on high doses of sedatives/benzodiazepines"
      ],
      "riskFactors": [
        "Female sex (hormonal changes during menstruation, pregnancy, and menopause)",
        "Age over 60 years (alterations in slow-wave sleep and circadian phase advance)",
        "High-stress lifestyle and sedentary indoor occupations",
        "Irregular shift work and frequent international travel across time zones"
      ],
      "bodyImpact": "Chronic sleep deprivation disrupts the glymphatic clearance of neurotoxic waste products (including beta-amyloid) from the brain. It doubles the risk of hypertension, impairs immune natural killer cell activity, causes glucose intolerance, spikes hunger hormone ghrelin, and elevates mortality risk.",
      "diagnosis": [
        "DSM-5 and ICSD-3 clinical diagnostic criteria",
        "2-week comprehensive Sleep Diary tracking bedtime, sleep latency, awakenings, and wake time",
        "Pittsburgh Sleep Quality Index (PSQI) and Insomnia Severity Index (ISI)",
        "Overnight Polysomnography (Sleep Study - PSG) to rule out Obstructive Sleep Apnea or Periodic Limb Movement Disorder"
      ],
      "treatments": [
        "Cognitive Behavioral Therapy for Insomnia (CBT-I) — the undisputed gold standard first-line treatment (outperforms medications long-term):",
        "CBT-I components: Stimulus Control Therapy, Sleep Restriction Therapy, Sleep Hygiene, and Cognitive Restructuring",
        "Dual Orexin Receptor Antagonists (DORAs: Suvorexant, Lemborexant, Daridorexant) — modern physiological sleep modulators without dependence",
        "Melatonin Receptor Agonists (Ramelteon)",
        "Low-dose sedating antidepressants (Trazodone, Doxepin)",
        "Strict avoidance of long-term benzodiazepine sedatives (Z-drugs like Zolpidem should be limited to short-term acute use)"
      ],
      "prevention": "Maintain rock-solid sleep hygiene: keep wake-up time identical 7 days a week, expose eyes to outdoor sunlight every morning, eliminate screens 1-2 hours before bed, keep the bedroom cool, dark, and quiet, and reserve the bed exclusively for sleep and intimacy.",
      "safeFoods": [
        "Tart cherry juice (natural dietary source of bioavailable melatonin)",
        "Kiwi fruit (eating 2 kiwis one hour before bedtime has been shown to speed sleep onset)",
        "Almonds and walnuts (rich in magnesium and melatonin)",
        "Chamomile, passionflower, or valerian root herbal tea",
        "Light protein and complex carb snack (e.g., small bowl of oatmeal with warm milk) if hungry at night"
      ],
      "avoidFoods": [
        "Caffeine within 8 to 10 hours of bedtime (caffeine has an average half-life of 5-7 hours)",
        "Alcohol before bed (while it induces drowsiness, it destroys restorative REM sleep and causes 3 AM awakenings)",
        "Heavy, rich, spicy, or fatty dinners within 3 hours of sleep (triggers acid reflux and indigestion)",
        "Excessive liquids right before bed (triggers nocturnal urination/nocturia)"
      ],
      "exercises": [
        "Daily aerobic exercise (30 minutes of walking, jogging, or cycling) significantly deepens slow-wave sleep",
        "Complete vigorous workouts at least 3-4 hours before bedtime to allow body temperature to drop",
        "Gentle pre-bed yoga and progressive muscle relaxation to lower autonomic tone"
      ],
      "lifestyle": [
        "THE 20-MINUTE RULE: If you are awake in bed for more than 20 minutes, get out of bed! Go to a dimly lit room, read a boring book, and only return to bed when genuinely sleepy",
        "Make your bedroom a sleep sanctuary: 65°F / 18°C temperature, black-out curtains, and zero glowing electronics",
        "Wake up at the EXACT same time every single day, including Saturdays and Sundays",
        "Do not watch the clock if you wake up at night — turn clock displays away from view"
      ],
      "whenToConsult": "Consult a sleep specialist or physician if sleep difficulties persist for more than a month, if you fall asleep while driving, or if a partner notices you gasping or choking for breath during sleep.",
      "faqs": [
        {
          "q": "Why is alcohol bad for sleep if it makes me sleepy?",
          "a": "Alcohol is a central nervous system depressant that makes you drowsy, but as your liver metabolizes it during the night, it triggers a severe rebound effect that fragments sleep, eliminates REM sleep, and causes frequent awakenings."
        },
        {
          "q": "What is Sleep Restriction Therapy in CBT-I?",
          "a": "Sleep restriction temporarily limits time spent in bed to match the actual amount of sleep you are getting (e.g., 6 hours). This builds up powerful physiological sleep drive ('sleep pressure'), curing insomnia by making sleep consolidated and deep."
        }
      ],
      "references": [
        "American Academy of Sleep Medicine (AASM) Clinical Practice Guideline for the Pharmacologic and Non-Pharmacologic Treatment of Chronic Insomnia",
        "National Institutes of Health (NIH) Consensus Statement on Insomnia",
        "European Sleep Research Society (ESRS) Guidelines for the Diagnosis and Treatment of Insomnia"
      ]
    },
    {
      "id": "bipolar-disorder",
      "name": "Bipolar Disorder (Manic-Depressive Illness)",
      "name_ml": "ബൈപോളാർ ഡിസോർഡർ",
      "name_hi": "द्विध्रुवी विकार (बायपोलर डिसऑर्डर)",
      "name_ar": "اضطراب ثنائي القطب",
      "category": "mental_health",
      "badge": "Mood Cycling",
      "icon": "activity",
      "shortDesc": "A chronic psychiatric disorder characterized by extreme shifts in mood, energy, activity levels, and concentration.",
      "whatIsIt": "Bipolar disorder is a chronic brain disorder that causes intense, cyclical shifts in mood, energy, and activity levels. These fluctuate between periods of unusually intense emotion, hyperactivity, and grandiosity (Mania or Hypomania) and periods of profound sadness, hopelessness, and inactivity (Depression). Bipolar I involves at least one full manic episode; Bipolar II involves major depressive episodes and hypomanic episodes without full mania.",
      "causes": [
        "Complex polygenic inheritance (one of the most hereditary psychiatric conditions, ~70-85% heritability)",
        "Dysregulation of neuroplastic signaling pathways, mitochondrial bioenergetics, and intracellular second messengers (IP3/DAG)",
        "Dysfunction in fronto-limbic neural networks regulating emotional homeostasis",
        "Disruption of circadian rhythms and sleep-wake cycle regulation",
        "Environmental triggers: Severe psychological trauma, sleep deprivation, or substance use triggering first manic onset"
      ],
      "symptoms": [
        "Manic Episode: Abnormally elevated, euphoric, or intensely irritable mood lasting >= 1 week",
        "Decreased need for sleep (feeling energized and rested after only 2-3 hours of sleep)",
        "Pressured speech: Rapid, loud, unstoppable talking jumping from topic to topic",
        "Flight of ideas and racing thoughts",
        "Grandiosity: Inflated self-esteem or unrealistic beliefs about one's powers, fame, or abilities",
        "Distractibility and excessive goal-directed activity",
        "Impulsive, high-risk behaviors: Reckless spending sprees, dangerous driving, foolish business investments, or sexual indiscretions",
        "Depressive Episode: Profound fatigue, sadness, suicidal ideation, and inability to function"
      ],
      "warningSigns": [
        "Manic Psychosis: Severe delusions, paranoia, or auditory hallucinations during mania",
        "Mixed Features: Experiencing depressive despair combined with manic agitation and racing energy (highest risk of suicide)",
        "Severe financial ruin or legal arrest resulting from reckless manic behavior"
      ],
      "riskFactors": [
        "First-degree relative (parent or sibling) with bipolar disorder",
        "Onset in late adolescence or early twenties",
        "Severe chronic sleep fragmentation or shift work",
        "Use of recreational stimulants (cocaine, amphetamines) or antidepressants without mood stabilizers"
      ],
      "bodyImpact": "Recurrent affective episodes have neuroprogressive toxic effects on the brain, accelerating gray matter loss in prefrontal and temporal cortices. Bipolar disorder is associated with high rates of cardiovascular disease, metabolic syndrome, and a 20- to 30-fold elevated risk of suicide if untreated.",
      "diagnosis": [
        "DSM-5 Diagnostic Criteria for Bipolar I, Bipolar II, or Cyclothymic Disorder",
        "Mood Disorder Questionnaire (MDQ) screening tool",
        "Young Mania Rating Scale (YMRS) to quantify manic severity",
        "Careful distinction from unipolar depression (prescribing antidepressant monotherapy in bipolar depression can trigger manic switches or rapid cycling)"
      ],
      "treatments": [
        "Mood Stabilizers: Lithium Carbonate (gold standard for manic prevention, suicide reduction, and neuroprotection)",
        "Anticonvulsant Mood Stabilizers: Divalproex Sodium / Valproate, Lamotrigine (especially effective for bipolar depression maintenance), Carbamazepine",
        "Atypical Antipsychotics: Quetiapine, Lurasidone, Cariprazine, Olanzapine, Aripiprazole",
        "Interpersonal and Social Rhythm Therapy (IPSRT) to stabilize daily biological and sleep routines",
        "Psychoeducation and Cognitive Behavioral Therapy (CBT)",
        "Electroconvulsive Therapy (ECT) for severe treatment-resistant mania or psychotic depression"
      ],
      "prevention": "Episodes can be prevented by adhering strictly to mood-stabilizing medication, maintaining an unshakeable sleep schedule, avoiding recreational drugs and alcohol, tracking mood patterns daily, and identifying individual personal 'early warning signs' of mania.",
      "safeFoods": [
        "Consistent, balanced meals that maintain steady blood glucose",
        "High-Omega-3 fatty acids (EPA-rich fish oil shown to aid bipolar mood stabilization)",
        "Adequate salt and water intake if taking Lithium (dehydration or low sodium causes toxic Lithium buildup)",
        "Whole grain complex carbohydrates and antioxidant-rich vegetables",
        "Decaffeinated beverages and herbal teas"
      ],
      "avoidFoods": [
        "Alcohol and recreational stimulants (potent triggers of manic and depressive episodes)",
        "High-dose caffeine (can disrupt sleep and trigger hypomania/mania)",
        "Sudden extreme changes in dietary sodium if taking Lithium",
        "Skipping meals or extreme intermittent fasting"
      ],
      "exercises": [
        "Regular moderate aerobic exercise (brisk walking, swimming, light cycling) during stable and depressive phases",
        "Avoid intense, hyper-stimulating late-night workouts that could trigger manic sleeplessness",
        "Mindfulness meditation and gentle restorative yoga"
      ],
      "lifestyle": [
        "SLEEP IS CRITICAL: Protect your sleep at all costs. Missing even a single night of sleep can trigger a full-blown manic episode",
        "Take your prescribed mood stabilizer every single day, even when feeling fantastic",
        "Keep a daily mood and sleep diary using a mobile tracking app",
        "Establish a medical advance directive specifying who should assist you if a severe manic episode occurs"
      ],
      "whenToConsult": "Seek IMMEDIATE emergency medical care if you or a loved one expresses thoughts of suicide, begins acting recklessly, stops sleeping for days, or shows signs of psychosis. Contact your psychiatrist immediately at the earliest signs of mood shift.",
      "faqs": [
        {
          "q": "Why can't a person with bipolar depression just take standard antidepressants?",
          "a": "Standard antidepressants (SSRIs) taken without a mood stabilizer can 'flip' a bipolar patient into severe mania, rapid cycling, or dangerous mixed affective states."
        },
        {
          "q": "Can someone with bipolar disorder live a normal, successful life?",
          "a": "Yes. With proper mood-stabilizing medication, healthy sleep habits, therapy, and social rhythm stability, many people with bipolar disorder maintain successful careers, families, and deeply fulfilling lives."
        }
      ],
      "references": [
        "American Psychiatric Association (APA) Practice Guideline for the Treatment of Patients with Bipolar Disorder",
        "CANMAT and ISBD 2024 Guidelines for the Management of Patients with Bipolar Disorder",
        "National Institute of Mental Health (NIMH) Bipolar Disorder Research Reviews"
      ]
    },
    {
      "id": "eating-disorders",
      "name": "Eating Disorders (Anorexia, Bulimia, BED)",
      "name_ml": "ഈറ്റിംഗ് ഡിസോർഡേഴ്സ് (ഭക്ഷണ ക്രമക്കേടുകൾ)",
      "name_hi": "ईटिंग डिसऑर्डर (खान-पान के विकार)",
      "name_ar": "اضطرابات الأكل (فقدان الشهية والشره العصبي)",
      "category": "mental_health",
      "badge": "Psychosomatic Disorder",
      "icon": "alert-octagon",
      "shortDesc": "Severe, life-threatening psychiatric conditions characterized by severe disturbances in eating behaviors, body image, and weight preoccupation.",
      "whatIsIt": "Eating disorders are serious, complex mental health conditions characterized by persistent severe disturbances in eating behaviors and distressing thoughts and emotions surrounding food, weight, and body shape. The primary classifications include Anorexia Nervosa (severe dietary restriction and terror of weight gain), Bulimia Nervosa (cycles of binge eating followed by compensatory purging), and Binge Eating Disorder (BED - recurrent uncontrolled binge eating without purging).",
      "causes": [
        "Complex interaction of genetic vulnerability (~50-60% heritability) and neurochemical serotonin/dopamine receptor alterations",
        "Sociocultural pressures celebrating thinness, diet culture, and weight stigma",
        "Psychological traits: High perfectionism, obsessive-compulsive traits, low self-esteem, and rigid thinking",
        "Adverse childhood experiences, bullying about body weight, and major life transitions",
        "Athletic environments emphasizing low body weight (gymnastics, ballet, distance running)"
      ],
      "symptoms": [
        "Anorexia Nervosa: Severe caloric restriction, emaciation, intense terror of gaining weight, and distorted body image (seeing oneself as fat despite being severely underweight)",
        "Bulimia Nervosa: Eating abnormally large amounts of food in secret with a sense of lack of control, followed by forced vomiting, laxative abuse, fasting, or compulsive over-exercise",
        "Binge Eating Disorder (BED): Recurrent episodes of eating rapidly until uncomfortably full, accompanied by intense feelings of guilt, shame, and disgust",
        "Physical signs: Amenorrhea (loss of menstrual periods), hypothermia, lanugo (fine downy hair on body), brittle nails, and thinning hair",
        "Russell's Sign: Calluses or abrasions on the knuckles from repeated induced vomiting",
        "Severe dental enamel erosion from corrosive gastric acid during frequent vomiting"
      ],
      "warningSigns": [
        "MEDICAL EMERGENCIES IN ANOREXIA: Severe bradycardia (heart rate < 40 bpm), systolic BP < 80 mmHg, hypokalemia",
        "Cardiac arrhythmias (prolonged QTc interval) caused by severe electrolyte imbalances",
        "Esophageal tears (Boerhaave syndrome) or gastric rupture from violent purging/bingeing",
        "High rate of suicide (anorexia nervosa has the highest mortality rate of any psychiatric illness)"
      ],
      "riskFactors": [
        "Adolescence and young adulthood (most common onset between ages 12 and 25)",
        "Female sex, though rates among boys and men are frequently underdiagnosed",
        "Family history of eating disorders, depression, or substance abuse",
        "History of intensive dieting or early childhood weight-related teasing",
        "Participation in appearance- or weight-class-focused sports"
      ],
      "bodyImpact": "Severe malnutrition causes myocardial muscle atrophy, lethal ventricular arrhythmias, severe osteoporosis with irreversible bone loss, leukopenia, renal failure, gastroparesis, and multi-organ failure.",
      "diagnosis": [
        "DSM-5 Diagnostic Criteria for Anorexia Nervosa, Bulimia Nervosa, and Binge Eating Disorder",
        "Comprehensive medical evaluation: Orthostatic vital signs, ECG, serum electrolytes (Potassium, Magnesium, Phosphorus)",
        "Complete Blood Count, liver transaminases, kidney function, and serum prealbumin/albumin",
        "Eating Disorder Examination Questionnaire (EDE-Q)",
        "DEXA scan to assess bone mineral density"
      ],
      "treatments": [
        "Multidisciplinary Team Care: Psychiatrist, adolescent medicine specialist, and specialized eating disorder Registered Dietitian",
        "Medical stabilization and inpatient refeeding monitoring to avoid Refeeding Syndrome",
        "Family-Based Treatment (FBT / Maudsley approach) — the gold standard first-line therapy for adolescents with anorexia",
        "Cognitive Behavioral Therapy Enhanced (CBT-E) for bulimia nervosa and binge eating disorder",
        "Pharmacotherapy: Fluoxetine (FDA-approved for Bulimia Nervosa), Lisdexamfetamine (Vyvanse for moderate-to-severe BED)",
        "Residential or Partial Hospitalization Programs (PHP) for structured refeeding"
      ],
      "prevention": "Combat diet culture and weight stigma at home and in schools. Praise children for their character, skills, and kindness rather than their physical appearance. Never engage in 'fat talk' or restrictive dieting in front of children, and promote intuitive eating and joyful movement.",
      "safeFoods": [
        "Structured, regular meal plans guided by an eating disorder registered dietitian",
        "Gradual nutritional rehabilitation restoring balanced macronutrients (proteins, complex carbs, healthy fats)",
        "Electrolyte-balanced fluids and oral nutritional supplements when indicated",
        "Eating a wide variety of foods without classifying them into 'good' vs 'evil/forbidden' categories"
      ],
      "avoidFoods": [
        "Eliminating entire food groups or following extreme restrictive fad diets",
        "Counting calories or obsessively weighing every ounce of food on scales",
        "Over-the-counter diet pills, detox teas, and laxatives",
        "Excessive zero-calorie diet sodas and caffeine used to suppress appetite"
      ],
      "exercises": [
        "Complete cessation of exercise during acute medical malnutrition and bradycardia",
        "Gradual reintroduction of joyful, non-compulsive physical movement only after medical clearance and weight restoration",
        "Gentle stretching and mindful walking that focuses on reconnecting with the body"
      ],
      "lifestyle": [
        "Remove bathroom weight scales and stop daily self-weighing (weigh-ins should be blind and done only at doctor's office)",
        "Unfollow social media accounts that promote 'thinspiration', 'fitspiration', or restrictive dieting",
        "Establish a firm routine of 3 meals and 2-3 snacks eaten with family or supportive peers",
        "Seek support from national eating disorder helplines and peer recovery groups"
      ],
      "whenToConsult": "Seek IMMEDIATE emergency medical care if a person has fainting spells, heart palpitations, severe weakness, or vomits blood. Consult an eating disorder physician or psychologist at the very first signs of secretive food restriction or bingeing.",
      "faqs": [
        {
          "q": "What is 'Refeeding Syndrome'?",
          "a": "Refeeding syndrome is a potentially fatal medical complication that occurs when carbohydrates are reintroduced too quickly to a severely starved body. A sudden spike in insulin drives phosphorus, potassium, and magnesium into cells, causing lethal heart failure and seizures. Refeeding must always be medically monitored."
        },
        {
          "q": "Can men suffer from eating disorders?",
          "a": "Yes. Roughly 25% to 33% of people with eating disorders are male, often presenting with 'muscle dysmorphia' (obsessive drive for muscularity and low body fat) or binge eating, though they are frequently underdiagnosed due to stigma."
        }
      ],
      "references": [
        "American Psychiatric Association (APA) Practice Guideline for the Treatment of Patients with Eating Disorders 2023",
        "NICE Clinical Guideline: Eating Disorders: Recognition and Treatment",
        "National Eating Disorders Association (NEDA) Clinical Toolkit"
      ]
    },
    {
      "id": "osteoarthritis",
      "name": "Osteoarthritis (Degenerative Joint Disease)",
      "name_ml": "ഓസ്റ്റിയോ ആർത്രൈറ്റിസ് (സന്ധി തേയ്മാനം)",
      "name_hi": "ऑस्टियोआर्थराइटिस (जोड़ों का घिसना)",
      "name_ar": "التهاب المفاصل العظمي (خشونة المفاصل)",
      "category": "bone_joint",
      "badge": "Degenerative Cartilage",
      "icon": "shield",
      "shortDesc": "The most common form of arthritis, characterized by progressive breakdown of articular cartilage and underlying subchondral bone.",
      "whatIsIt": "Osteoarthritis (OA) is a chronic, progressive whole-joint disease characterized by the mechanical and biochemical degradation of articular cartilage, thickening of subchondral bone, formation of marginal bone spurs (osteophytes), and mild synovial inflammation. It most frequently affects the weight-bearing joints (knees, hips) and hands.",
      "causes": [
        "Progressive mechanical wear and tear exceeding the regenerative capacity of chondrocytes",
        "Excess mechanical loading from obesity (every extra pound of weight adds 4 pounds of pressure across knees)",
        "Prior joint trauma, intra-articular fractures, ACL tears, or meniscal injuries (Post-Traumatic OA)",
        "Repetitive occupational joint stress (prolonged kneeling, squatting, heavy lifting)",
        "Genetic predisposition and abnormal joint biomechanics (genu varum / bow-legs, genu valgum / knock-knees)"
      ],
      "symptoms": [
        "Deep, aching joint pain that worsens with weight-bearing or activity and is relieved by rest",
        "Morning joint stiffness typically lasting less than 30 minutes (gelling phenomenon)",
        "Crepitus: Grating, popping, or crunching sensation and sound during joint movement",
        "Reduced range of motion and joint flexibility",
        "Joint enlargement, bony swelling, and formation of Heberden's nodes (DIP joints) and Bouchard's nodes (PIP joints) on fingers",
        "Joint instability or feeling of the knee 'giving way'"
      ],
      "warningSigns": [
        "Severe joint effusion (sudden massive warm fluid swelling requiring aspiration)",
        "Severe angular deformity (severe bow-leg or knock-knee collapse)",
        "Total nocturnal joint pain awakening the patient from sleep"
      ],
      "riskFactors": [
        "Age: Prevalance increases dramatically after age 50",
        "Female sex (women are significantly more affected than men, particularly post-menopause)",
        "Obesity and metabolic syndrome",
        "History of joint injuries in competitive sports",
        "Occupational tasks involving deep squatting or repetitive kneeling"
      ],
      "bodyImpact": "Cartilage loss leaves denuded bone rubbing against bone, causing intense friction, microfractures, subchondral sclerosis, bone cysts, joint space collapse, severe physical immobility, muscle atrophy, and loss of independence.",
      "diagnosis": [
        "Weight-bearing Plain Radiographs (X-rays) showing classic triad: Joint space narrowing, subchondral sclerosis, and osteophytes",
        "Kellgren-Lawrence Grading Scale (Grade 0 normal to Grade 4 severe bone-on-bone)",
        "Clinical assessment (pain, stiffness < 30 mins, crepitus, bony enlargement)",
        "Synovial fluid analysis (clear, non-inflammatory fluid to rule out septic arthritis or gout)",
        "MRI only when meniscal tears or subchondral bone marrow lesions need assessment"
      ],
      "treatments": [
        "First-Line Non-Pharmacological: Weight reduction and low-impact quadriceps-strengthening exercises",
        "Topical NSAIDs (e.g., Diclofenac gel) — preferred over oral NSAIDs for knee OA due to minimal systemic toxicity",
        "Oral NSAIDs (Celecoxib, Naproxen) with gastric protection for acute flare-ups",
        "Duloxetine (SNRI) for chronic osteoarthritis pain",
        "Intra-articular Corticosteroid injections for short-term acute pain relief",
        "Total Joint Arthroplasty (Total Knee or Hip Replacement Surgery) for end-stage severe joint destruction"
      ],
      "prevention": "Maintain a healthy body weight throughout adulthood (losing 10% of body weight cuts knee arthritis pain in half), avoid high-impact joint trauma, strengthen quadriceps and hamstring muscles, and wear supportive shock-absorbing footwear.",
      "safeFoods": [
        "Anti-inflammatory Mediterranean foods rich in polyphenols (olive oil, berries, leafy greens)",
        "Fatty fish high in Omega-3 fatty acids (salmon, mackerel, sardines) to reduce joint inflammation",
        "Sulfur-rich foods (garlic, onions) and ginger/turmeric (curcumin)",
        "Bone broths, vitamin C rich fruits (guava, oranges) to support collagen synthesis",
        "Adequate calcium and Vitamin D to keep underlying bone strong"
      ],
      "avoidFoods": [
        "Deep-fried fast foods containing advanced glycation end-products (AGEs)",
        "Excessive refined sugars and sweetened sodas that stimulate inflammatory cytokines",
        "Trans fats and hydrogenated cooking oils",
        "Heavy processed meats with high preservative sodium"
      ],
      "exercises": [
        "Low-impact aerobic exercise: Swimming, water aerobics, and stationary cycling (unloads joint stress)",
        "Quadriceps strengthening: Straight leg raises, seated leg extensions, wall sits",
        "Hamstring and calf stretching to preserve full knee extension",
        "Avoid high-impact jumping, deep loaded squats, or running on hard asphalt"
      ],
      "lifestyle": [
        "Use walking assistive devices (a cane held in the hand opposite the affected knee unloads joint pressure by 30-40%)",
        "Apply moist warm heat packs for morning stiffness, and ice packs after exercise for swelling",
        "Wear cushioned running shoes with good arch support",
        "Pace daily activities to avoid over-exhausting worn joints"
      ],
      "whenToConsult": "Consult an orthopedic specialist or rheumatologist if joint pain limits your daily walking, causes nighttime awakenings, or if a joint becomes suddenly red, hot, and severely swollen.",
      "faqs": [
        {
          "q": "Do glucosamine and chondroitin supplements actually rebuild worn cartilage?",
          "a": "Large high-quality randomized clinical trials (like the NIH GAIT trial) have shown that glucosamine and chondroitin do not rebuild cartilage, though some patients report mild subjective pain relief. Weight loss and muscle strengthening are far more effective."
        },
        {
          "q": "When is the right time to get a knee replacement?",
          "a": "Joint replacement is recommended when conservative treatments (weight loss, exercise, medication, injections) no longer provide pain relief, and joint damage severely restricts basic daily activities and sleep."
        }
      ],
      "references": [
        "American College of Rheumatology (ACR) / Arthritis Foundation Guideline for the Management of Osteoarthritis",
        "OARSI Guidelines for the Non-Surgical Management of Knee, Hip, and Polyarticular Osteoarthritis 2024",
        "Mayo Clinic Osteoarthritis Comprehensive Protocols"
      ]
    },
    {
      "id": "osteoporosis",
      "name": "Osteoporosis (Bone Density Loss)",
      "name_ml": "ഓസ്റ്റിയോപൊറോസിസ് (എല്ല് തേയ്മാനം)",
      "name_hi": "ऑस्टियोपोरोसिस (हड्डियों की कमजोरी)",
      "name_ar": "هشاشة العظام",
      "category": "bone_joint",
      "badge": "Fragility Risk",
      "icon": "shield",
      "shortDesc": "A progressive skeletal disease characterized by low bone mass, microarchitectural deterioration of bone tissue, and heightened fracture risk.",
      "whatIsIt": "Osteoporosis is a systemic skeletal disorder characterized by low bone mineral density (BMD) and structural deterioration of bone microarchitecture, causing bones to become porous, brittle, and susceptible to fragility fractures from minor falls or even coughing. It is often called a 'silent disease' because bone loss occurs silently without symptoms until a fracture occurs.",
      "causes": [
        "Estrogen deficiency in postmenopausal women accelerating osteoclastic bone resorption",
        "Age-related decline in osteoblastic bone formation (senile osteoporosis)",
        "Chronic inadequate dietary intake of Calcium and Vitamin D",
        "Long-term use of systemic Corticosteroids (Prednisone for >= 3 months)",
        "Endocrine disorders: Hyperparathyroidism, hyperthyroidism, Cushing's syndrome, hypogonadism",
        "Malabsorption disorders: Celiac disease, Crohn's disease, post-bariatric surgery"
      ],
      "symptoms": [
        "Completely asymptomatic in early stages until a fracture happens",
        "Loss of height over time (loss of 1.5 inches or more)",
        "Progressive stooped posture, dorsal hump, or kyphosis ('Dowager's hump')",
        "Sudden severe acute back pain caused by a collapsed or fractured vertebral body",
        "Bone fracture occurring from a minor low-impact fall that normally would not cause injury (fragility fracture)"
      ],
      "warningSigns": [
        "Hip fracture after slipping on a flat floor (associated with 20-30% mortality in the first year in elderly adults)",
        "Vertebral compression fracture: Agonizing mid-back pain with difficulty standing straight",
        "Colles' fracture of the wrist from a minor stumble onto an outstretched hand"
      ],
      "riskFactors": [
        "Postmenopausal women, particularly of Caucasian and Asian descent",
        "Low body weight (BMI < 19 kg/m2) and small body frame",
        "Cigarette smoking and heavy alcohol consumption (> 2 units/day)",
        "Sedentary lifestyle with absence of weight-bearing physical activity",
        "Family history of osteoporosis or parental hip fracture"
      ],
      "bodyImpact": "Trabecular bone plates become thinned and disconnected, leaving large hollow marrow cavities. The spine, hips, and wrists become highly vulnerable to sudden structural collapse, leading to permanent immobility, chronic pain, and loss of functional independence.",
      "diagnosis": [
        "Dual-Energy X-ray Absorptiometry (DEXA scan) — gold standard measuring BMD at lumbar spine and hip:",
        "T-score >= -1.0: Normal",
        "T-score between -1.0 and -2.5: Osteopenia (low bone mass)",
        "T-score <= -2.5: OSTEOPOROSIS",
        "T-score <= -2.5 PLUS a fragility fracture: Severe / Established Osteoporosis",
        "FRAX Tool (Fracture Risk Assessment Tool calculating 10-year probability of hip and major osteoporotic fracture)"
      ],
      "treatments": [
        "Antiresorptive Agents: Oral Bisphosphonates (Alendronate, Risedronate) or annual IV Zoledronic acid",
        "Denosumab (Prolia): Monoclonal antibody against RANKL injected subcutaneously every 6 months",
        "Anabolic / Bone-Building Agents (for severe osteoporosis): Teriparatide / Abaloparatide (PTH analogs) and Romosozumab (Sclerostin inhibitor)",
        "Selective Estrogen Receptor Modulators (SERMs: Raloxifene)",
        "Adequate elemental Calcium (1,000-1,200 mg/day from diet/supplements) and Vitamin D3 (1,000-2,000 IU/day)"
      ],
      "prevention": "Build peak bone mass in youth through calcium-rich nutrition and weight-bearing exercise. Prevent adult bone loss through daily weight-bearing walking, resistance exercises, adequate Vitamin D sunlight exposure, zero tobacco use, and fall-proofing home environments.",
      "safeFoods": [
        "Calcium-rich foods: Milk, yogurt, hard cheeses, fortified plant milks, tofu set with calcium",
        "Dark green leafy vegetables: Collards, kale, bok choy, broccoli",
        "Canned sardines and salmon with soft edible bones (rich in calcium and Vitamin D)",
        "Prunes / dried plums (rich in polyphenols and boron shown to preserve bone density)",
        "Beans, lentils, seeds (sesame, chia), and almonds"
      ],
      "avoidFoods": [
        "Excessive caffeine and dark cola beverages (phosphoric acid in colas interferes with calcium absorption)",
        "Very high-sodium diets (high salt forces kidneys to excrete calcium in urine)",
        "Heavy alcohol consumption (suppresses osteoblast bone formation)",
        "Extreme starvation diets with inadequate dietary protein"
      ],
      "exercises": [
        "Weight-bearing aerobic exercise: Brisk walking, stair climbing, low-impact aerobics",
        "Progressive resistance training (free weights, weight machines, resistance bands 2-3 days a week)",
        "Balance and stability exercises: Tai Chi, single-leg stands, heel-to-toe walking to prevent falls",
        "Avoid vigorous spinal flexion, crunches, or heavy twisting under load"
      ],
      "lifestyle": [
        "Fall-proof your home: Remove loose rugs, install bright nightlights, keep stairways clear, use non-slip shower mats",
        "Undergo routine screening DEXA scan for all women aged 65+ (or earlier if high risk)",
        "Quit smoking immediately (nicotine directly poisons bone-building osteoblasts)",
        "Take oral bisphosphonate pills with a full glass of plain water on an empty stomach and stay upright for 30 minutes"
      ],
      "whenToConsult": "Consult an endocrinologist or rheumatologist if you have broken a bone from a minor fall, noticed significant loss of height, or are starting long-term steroid therapy.",
      "faqs": [
        {
          "q": "Can osteoporosis be reversed?",
          "a": "While lost microarchitecture is difficult to completely restore, modern anabolic medications (like Teriparatide and Romosozumab) can stimulate new bone formation, and bisphosphonates can halt further bone loss and reduce fracture risk by up to 50%."
        },
        {
          "q": "Why do bones break easily after menopause?",
          "a": "Estrogen directly inhibits osteoclasts (cells that break down bone). When estrogen levels drop precipitously after menopause, osteoclasts break down bone much faster than osteoblasts can rebuild it, causing rapid bone density loss."
        }
      ],
      "references": [
        "Endocrine Society Clinical Practice Guideline on Pharmacological Management of Osteoporosis in Postmenopausal Women",
        "National Osteoporosis Foundation (NOF) Clinician's Guide to Prevention and Treatment of Osteoporosis",
        "WHO Guidelines for Assessment of Fractures and Bone Density"
      ]
    },
    {
      "id": "back-pain",
      "name": "Chronic Back Pain & Lumbar Sciatica",
      "name_ml": "വിട്ടുമാറാത്ത നടുവേദന & സയാറ്റിക്ക",
      "name_hi": "पुराना पीठ दर्द और साइटिका (कमर दर्द)",
      "name_ar": "آلام الظهر المزمنة وعرق النسا",
      "category": "bone_joint",
      "badge": "Spinal Pathology",
      "icon": "activity",
      "shortDesc": "Persistent musculoskeletal or radicular pain arising from the lumbar spine, intervertebral discs, or compressed sciatic nerve roots.",
      "whatIsIt": "Back pain is the leading cause of global disability. It ranges from axial non-specific mechanical low back pain (involving lumbar muscles, facet joints, and sacroiliac joints) to lumbar radiculopathy (Sciatica), which occurs when a lumbar intervertebral disc herniates or spinal stenosis impinges on the L4, L5, or S1 nerve roots, radiating sharp shooting pain down the leg.",
      "causes": [
        "Lumbar disc herniation or extrusion compressing the sciatic nerve roots",
        "Lumbar facet joint arthropathy and degenerative disc disease",
        "Spinal stenosis: Narrowing of the spinal canal or neural foramina",
        "Spondylolisthesis: Slipping of one vertebra forward over the one beneath it",
        "Myofascial lumbar muscle strains caused by poor lifting mechanics or prolonged sedentary posture"
      ],
      "symptoms": [
        "Dull aching, burning, or stiffness localized across the lower back and lumbosacral junction",
        "Sciatica: Sharp, electric shock-like or shooting pain radiating through the buttock, down the posterior thigh, calf, and into the foot",
        "Numbness, tingling ('pins and needles') in the toes or lateral foot",
        "Motor weakness: Difficulty standing on heels (L5 foot drop) or toes (S1 weakness)",
        "Pain aggravated by prolonged sitting, forward bending, or coughing/sneezing (Valsalva)",
        "Difficulty standing upright or walking without leaning forward (neurogenic claudication)"
      ],
      "warningSigns": [
        "CAUDA EQUINA SYNDROME (Spinal Surgical Emergency): Sudden loss of bowel or bladder control (incontinence or urinary retention)",
        "'Saddle Anesthesia': Total loss of sensation in the groin, perineum, and inner thighs",
        "Rapidly progressive bilateral leg weakness or paralysis",
        "Back pain accompanied by unexplained high fever, weight loss, or history of cancer (Spinal infection or metastasis)"
      ],
      "riskFactors": [
        "Occupational heavy lifting, twisting, or operating vibrating heavy machinery",
        "Sedentary desk jobs with prolonged forward-slumped spinal posture",
        "Weak core abdominal muscles and tight hamstring muscles",
        "Obesity (increases mechanical anterior shear force on lumbar discs)",
        "Smoking (compromises microvascular nutrition to avascular intervertebral discs)"
      ],
      "bodyImpact": "Disc herniation causes mechanical compression and chemical radiculitis (nucleus pulposus releases inflammatory phospholipase A2). Chronic pain causes central nervous system sensitization, paraspinal muscle spasm, antalgic pelvic tilting, and profound psychological distress.",
      "diagnosis": [
        "Comprehensive Physical Exam: Straight Leg Raise (SLR / Lasegue's sign) test, slump test, tendon reflexes, sensory dermatome mapping",
        "Lumbar Spine MRI (gold standard for visualizing disc herniations, nerve root compression, and stenosis)",
        "Standing Lumbar X-rays (Flexion-Extension views to evaluate dynamic spinal instability or spondylolisthesis)",
        "Electromyography and Nerve Conduction Studies (EMG/NCS) to confirm radiculopathy"
      ],
      "treatments": [
        "First-Line: Active Physical Therapy (McKenzie method, core stabilization, McGill Big 3 exercises) — bed rest is medically contraindicated!",
        "Pharmacotherapy: First-line NSAIDs (Naproxen, Celecoxib), short-term muscle relaxants (Cyclobenzaprine)",
        "Neuropathic agents for Sciatica: Gabapentin or Pregabalin",
        "Image-Guided Lumbar Epidural Steroid Injections (TFESI) for refractory radicular pain",
        "Surgical intervention: Microdiscectomy (for persistent disc herniation with motor deficit) or Lumbar Decompression/Fusion for severe stenosis"
      ],
      "prevention": "Practice proper lifting mechanics (bend with hips and knees, keep load tight to body, never twist while lifting), maintain strong abdominal and core muscles, use ergonomic lumbar-support chairs, maintain active walking habits, and avoid prolonged unbroken sitting.",
      "safeFoods": [
        "Anti-inflammatory whole foods (turmeric, ginger, berries, dark greens)",
        "Fatty fish high in Omega-3 fatty acids to dampen neuroinflammation",
        "Adequate hydration (intervertebral discs are 80% water and require hydration)",
        "Lean protein and calcium-rich foods to maintain spinal bone and muscle support"
      ],
      "avoidFoods": [
        "Ultra-processed packaged foods with inflammatory trans fats",
        "Excessive refined sugars that promote systemic cytokine release",
        "Excessive alcohol that impairs muscle repair and disrupts restorative sleep",
        "Tobacco smoke (nicotine accelerates disc degeneration by cutting blood flow)"
      ],
      "exercises": [
        "The 'McGill Big 3' Core Exercises: Modified Curl-up, Side Plank, and Bird-Dog (stabilizes spine without flexion loading)",
        "Daily brisk flat walking (30-40 minutes encourages gentle spinal lubrication)",
        "Gentle hamstring stretches and hip flexor stretches",
        "AVOID traditional sit-ups, double leg raises, or heavy rounded-back deadlifts"
      ],
      "lifestyle": [
        "NEVER stay on strict bed rest for back pain — resting for more than 24-48 hours weakens spinal muscles and worsens outcomes",
        "Set an alarm to stand up and walk around for 2 minutes every 45 minutes of desk work",
        "Sleep on a medium-firm mattress with a pillow under knees (if on back) or between knees (if on side)",
        "Keep heavy loads close to your chest when carrying groceries or luggage"
      ],
      "whenToConsult": "GO TO THE EMERGENCY ROOM IMMEDIATELY if you lose bowel or bladder control, feel numbness in your groin/saddle area, or cannot lift your foot. Consult a spine specialist if leg pain does not improve after 4 to 6 weeks of physical therapy.",
      "faqs": [
        {
          "q": "Does a disc herniation mean I will definitely need spinal surgery?",
          "a": "No! Over 85% to 90% of lumbar disc herniations heal and resolve spontaneously within 6 to 12 weeks through conservative care (physical therapy and medications), as the immune system naturally breaks down the protruding disc material."
        },
        {
          "q": "Why is complete bed rest bad for a bad back?",
          "a": "Bed rest causes paraspinal muscles to atrophy rapidly, increases spinal stiffness, reduces blood flow to injured tissues, and doubles recovery time. Gentle walking and active movement are far superior."
        }
      ],
      "references": [
        "North American Spine Society (NASS) Evidence-Based Clinical Guidelines for Multidisciplinary Spine Care",
        "American College of Physicians (ACP) Clinical Practice Guideline on Noninvasive Treatments for Low Back Pain",
        "Lancet Low Back Pain Series and Global Clinical Recommendations"
      ]
    },
    {
      "id": "rheumatoid-arthritis",
      "name": "Rheumatoid Arthritis (RA)",
      "name_ml": "റൂമറ്റോയ്ഡ് ആർത്രൈറ്റിസ് (വാതപ്പനി)",
      "name_hi": "रुमेटीइड गठिया (गठिया)",
      "name_ar": "التهاب المفاصل الروماتويدي",
      "category": "bone_joint",
      "badge": "Autoimmune Arthropathy",
      "icon": "shield-alert",
      "shortDesc": "A chronic, systemic autoimmune inflammatory disease primarily attacking synovial joints, causing progressive bone erosions and deformity.",
      "whatIsIt": "Rheumatoid Arthritis (RA) is a systemic autoimmune disease in which the body's immune system erroneously attacks the synovium (the delicate lining that encloses joints). Unlike osteoarthritis, RA causes warm, painful, symmetrical inflammatory swelling of multiple small joints, and if left untreated, leads to irreversible cartilage destruction, bone erosion, and crippling joint deformities.",
      "causes": [
        "Autoimmune breakdown of self-tolerance with activation of autoantibodies: Rheumatoid Factor (RF) and Anti-Citrullinated Protein Antibodies (ACPA / Anti-CCP)",
        "Genetic predisposition: Strong association with HLA-DRB1 'shared epitope' alleles",
        "Environmental triggers: Tobacco smoking (drastically increases protein citrullination in lungs)",
        "Periodontal disease (Porphyromonas gingivalis bacterial infection citrullinating human peptides)",
        "Gut microbial dysbiosis"
      ],
      "symptoms": [
        "Symmetrical joint involvement: Swelling and pain affecting the same joints on both sides of the body (MCP and PIP joints of hands, wrists, MTP joints of feet)",
        "Prolonged morning stiffness lasting MORE than 60 minutes, improving only after several hours of movement",
        "Joints are tender, swollen ('boggy' synovial thickening), warm to the touch, and painful",
        "Rheumatoid nodules: Firm subcutaneous nodules over bony pressure points (elbows, knuckles)",
        "Systemic symptoms: Low-grade fever, malaise, anorexia, and profound chronic fatigue",
        "Advanced joint deformities: Swan-neck deformity, Boutonniere deformity, ulnar deviation of fingers"
      ],
      "warningSigns": [
        "Atlantoaxial Subluxation: Instability of the C1-C2 cervical vertebrae threatening spinal cord compression (requires urgent cervical imaging before any anesthesia)",
        "Rheumatoid Vasculitis: Deep cutaneous ulcers, digital gangrene, or peripheral neuropathy",
        "Interstitial Lung Disease (RA-ILD): Progressive dry cough and exertional dyspnea",
        "Scleritis: Severe painful red eye threatening ocular perforation"
      ],
      "riskFactors": [
        "Female sex (women are 2 to 3 times more likely to develop RA than men)",
        "Cigarette smoking (the single most potent environmental trigger for seropositive RA)",
        "Age of onset: Most commonly emerges between 30 and 55 years",
        "Family history of rheumatoid arthritis or other autoimmune diseases",
        "Nulliparity (women who have never given birth)"
      ],
      "bodyImpact": "Synovial hyperplasia creates a locally invasive tissue called 'pannus'. Pannus releases collagenases and cytokines (TNF-alpha, IL-6, IL-1) that erode articular cartilage and underlying subchondral bone, rupture tendons, and accelerate cardiovascular atherosclerosis (doubles myocardial infarction risk).",
      "diagnosis": [
        "2010 ACR/EULAR Classification Criteria for Rheumatoid Arthritis (joint involvement, serology, acute-phase reactants, duration >= 6 weeks)",
        "Anti-Cyclic Citrullinated Peptide (Anti-CCP / ACPA) test (highly specific, > 95% specificity)",
        "Rheumatoid Factor (RF) blood test",
        "Elevated acute-phase reactants: Erythrocyte Sedimentation Rate (ESR) and C-Reactive Protein (CRP)",
        "Ultrasound and MRI of hands/wrists showing early synovial hyperemia and marginal bone erosions before X-rays"
      ],
      "treatments": [
        "Early, aggressive Disease-Modifying Anti-Rheumatic Drugs (DMARDs) to achieve remission ('Treat-to-Target'):",
        "Conventional Synthetic DMARD: Methotrexate (anchor drug of choice, co-prescribed with Folic Acid), Leflunomide, Sulfasalazine, Hydroxychloroquine",
        "Biologic DMARDs (bDMARDs): TNF-Inhibitors (Adalimumab, Infliximab, Etanercept), IL-6 receptor antagonists (Tocilizumab), B-cell depleters (Rituximab), T-cell co-stimulation blockers (Abatacept)",
        "Targeted Synthetic DMARDs: JAK Inhibitors (Tofacitinib, Baricitinib, Upadacitinib)",
        "Short-course bridging Oral Corticosteroids (Prednisone) during acute flare-ups",
        "Occupational and physical therapy for joint protection"
      ],
      "prevention": "While RA cannot be entirely prevented, never smoking or completely quitting smoking dramatically reduces the risk of developing ACPA-positive RA in genetically susceptible individuals. Treating gum disease and adopting a Mediterranean diet also reduce autoimmune triggers.",
      "safeFoods": [
        "High-Omega-3 fatty fish (salmon, trout, sardines) — shown to lower swollen joint counts",
        "Extra virgin olive oil (contains oleocanthal, a natural anti-inflammatory compound)",
        "Colorful fruits and berries rich in anthocyanins and flavonoids",
        "Dark leafy cruciferous vegetables and green tea",
        "Whole grain oats, quinoa, and brown rice"
      ],
      "avoidFoods": [
        "Tobacco smoking (the worst lifestyle factor — directly interferes with DMARD efficacy)",
        "Ultra-processed packaged foods high in trans fats and refined sugars",
        "Excessive red meat and processed deli meats",
        "High-sodium processed snacks that amplify systemic inflammatory signaling"
      ],
      "exercises": [
        "Low-impact aerobic exercise: Swimming, water aerobics, stationary cycling",
        "Range-of-motion hand and wrist exercises to prevent joint contractures",
        "Gentle isometric strengthening to preserve peri-articular muscle mass",
        "Avoid vigorous joint-straining workouts during an acute hot synovial flare-up"
      ],
      "lifestyle": [
        "Use assistive devices: Ergonomic jar openers, wide-grip pens, and zipper pulls to spare finger joints",
        "Take prescribed Methotrexate once weekly exactly as directed, along with daily Folic acid",
        "Get routine blood work (CBC, liver transaminases, creatinine) every 8-12 weeks while on DMARDs",
        "Prioritize restful nighttime sleep to combat systemic autoimmune fatigue"
      ],
      "whenToConsult": "Consult a rheumatologist immediately if you experience morning hand stiffness lasting over an hour and symmetrical joint swelling. Early treatment within the first 12 weeks ('window of opportunity') prevents permanent joint deformities.",
      "faqs": [
        {
          "q": "What is the difference between Osteoarthritis and Rheumatoid Arthritis?",
          "a": "Osteoarthritis is degenerative 'wear and tear' of cartilage, usually affecting older adults in one or two joints with morning stiffness < 30 mins. Rheumatoid Arthritis is an autoimmune illness attacking synovium symmetrically in multiple small joints with morning stiffness lasting hours."
        },
        {
          "q": "Can Rheumatoid Arthritis affect organs other than joints?",
          "a": "Yes. RA is a systemic disease that can cause lung inflammation (interstitial lung disease), cardiovascular disease, painful eye inflammation (scleritis), rheumatoid nodules under the skin, and anemia."
        }
      ],
      "references": [
        "American College of Rheumatology (ACR) Guideline for the Treatment of Rheumatoid Arthritis 2024",
        "EULAR Recommendations for the Management of Rheumatoid Arthritis",
        "The Lancet Seminar on Rheumatoid Arthritis Pathogenesis and Targeted Therapeutics"
      ]
    },
    {
      "id": "gout",
      "name": "Gout (Uric Acid Arthritis)",
      "name_ml": "ഗൗട്ട് (യൂറിക് ആസിഡ് വാതം)",
      "name_hi": "गाउट / यूरिक एसिड गठिया",
      "name_ar": "داء النقرس (مرض الملوك)",
      "category": "bone_joint",
      "badge": "Crystal Arthropathy",
      "icon": "alert-triangle",
      "shortDesc": "An intensely painful inflammatory arthritis caused by the deposition of monosodium urate monohydrate crystals in joints and tissues.",
      "whatIsIt": "Gout is a metabolic form of inflammatory crystal arthritis triggered by chronic hyperuricemia (elevated serum uric acid > 6.8 mg/dL). When uric acid levels exceed its physiological saturation point in body fluids, needle-shaped monosodium urate crystals precipitate into synovial joint spaces, triggering explosive attacks of excruciating pain, redness, warmth, and swelling, most classically in the big toe (Podagra).",
      "causes": [
        "Impaired renal excretion of uric acid (~90% of cases due to dysfunctional renal urate transporters like URAT1, ABCG2)",
        "Overproduction of uric acid from excessive intake of purine-rich meats, seafood, and alcohol",
        "High consumption of High-Fructose Corn Syrup (fructose phosphorylation depletes hepatic ATP, generating uric acid)",
        "Diuretic medications (e.g., Thiazide and loop diuretics that stimulate renal urate reabsorption)",
        "Chronic kidney disease, obesity, and myeloproliferative disorders"
      ],
      "symptoms": [
        "Podagra: Acute, sudden, agonizing pain in the first metatarsophalangeal (MTP) joint of the big toe, frequently striking at 2-4 AM",
        "The affected joint becomes fiery red, hot to touch, swollen, and shiny",
        "Extreme allodynia: Even the weight of a light bedsheet touching the big toe causes unbearable agony",
        "Rapid onset: Reaches peak crescendo intensity within 6 to 12 hours",
        "Tophi: Visible chalky, hard, nodular deposits of urate crystals under the skin on ear helices, elbows, or fingers in chronic tophaceous gout",
        "Desquamation: Peeling and flaking of the skin over the joint as the acute attack subsides"
      ],
      "warningSigns": [
        "Septic Arthritis mimic: Need joint aspiration to rule out live bacterial joint infection",
        "Urate Nephropathy: Uric acid kidney stones causing renal colic and obstructive acute kidney injury",
        "Chronic erosive tophaceous gout destroying joint architecture"
      ],
      "riskFactors": [
        "Male sex (men are 3 to 4 times more likely to get gout; women are protected by estrogen until menopause)",
        "High intake of beer and distilled spirits",
        "Diet heavy in red meat, organ meats (liver, kidneys), and shellfish",
        "Hypertension, metabolic syndrome, and obesity",
        "Use of thiazide diuretics, low-dose aspirin, or cyclosporine"
      ],
      "bodyImpact": "Urate crystals activate the NLRP3 inflammasome inside synovial macrophages, triggering massive release of Interleukin-1beta (IL-1beta). This recruits waves of neutrophils that degranulate, causing intense inflammation, bone erosions ('rat-bite' lesions), and tophi that destroy joint integrity.",
      "diagnosis": [
        "Arthrocentesis (Joint Aspiration) — gold standard: Polarized light microscopy demonstrating needle-shaped, negatively birefringent monosodium urate crystals",
        "Serum Uric Acid level (often misleadingly normal during an acute attack because uric acid is driven into the joint; must be retested 2-4 weeks post-flare)",
        "Dual-Energy Computed Tomography (DECT) color-coding and visualizing crystal deposition",
        "Ultrasound showing the 'Double Contour Sign' on articular cartilage",
        "Plain Radiographs showing classic punched-out bony erosions with overhanging sclerotic margins in chronic gout"
      ],
      "treatments": [
        "Acute Flare-Up Therapy (Start within 24 hours):",
        "High-dose NSAIDs (e.g., Naproxen, Indomethacin, Celecoxib)",
        "Oral Colchicine (1.2 mg followed by 0.6 mg one hour later)",
        "Systemic or intra-articular Corticosteroids (Prednisone 30-40 mg daily tapered over 10 days)",
        "Long-Term Urate-Lowering Therapy (ULT — Target Serum Uric Acid < 6.0 mg/dL or < 5.0 mg/dL if tophi exist):",
        "First-Line Xanthine Oxidase Inhibitors: Allopurinol (titrated up from 100 mg) or Febuxostat",
        "Uricosuric agents: Probenecid",
        "Pegloticase (recombinant IV uricase for refractory chronic tophaceous gout)"
      ],
      "prevention": "Lower uric acid levels permanently by avoiding beer and hard liquor, eliminating high-fructose corn syrup sodas, drinking 2.5 to 3 liters of water daily, eating low-fat dairy products, and taking prescribed Allopurinol daily without interruption.",
      "safeFoods": [
        "Low-fat dairy products (milk, yogurt) — contain casein and lactalbumin that actively promote renal uric acid excretion",
        "Cherries and pure tart cherry juice (rich in anthocyanins proven to lower serum uric acid and prevent flares)",
        "Coffee (both caffeinated and decaf stimulate renal urate clearance)",
        "Vitamin C rich fruits (citrus, kiwis) which compete with uric acid for renal reabsorption",
        "Plenty of fresh water, lemon water, and herbal teas"
      ],
      "avoidFoods": [
        "Beer and ale (contains both alcohol and yeast purines — the single worst beverage for gout)",
        "High-fructose corn syrup beverages and sweet sodas",
        "Organ meats (liver, sweetbreads, kidneys, brain)",
        "Purine-rich seafood: Sardines, anchovies, mackerel, mussels, scallops, and crab",
        "Excessive red meat (beef, mutton, game meats)"
      ],
      "exercises": [
        "COMPLETE REST of the affected joint during an acute inflammatory attack (no walking on the affected foot)",
        "Low-impact exercise (swimming, stationary cycling, walking) between attacks to maintain healthy body weight",
        "Gradual weight loss (never crash diet, as rapid ketosis and starvation dramatically elevate blood uric acid)"
      ],
      "lifestyle": [
        "Drink at least 8 to 10 glasses of water daily to keep uric acid diluted and prevent kidney stones",
        "Never abruptly stop or start Allopurinol during the peak of an acute flare without bridging anti-inflammatory coverage",
        "Elevate the affected foot and apply ice packs wrapped in towels for 20 minutes at a time",
        "Wear wide, comfortable shoes with a soft toe box"
      ],
      "whenToConsult": "Seek immediate medical attention if you experience sudden excruciating big toe or joint pain. A joint that is red, hot, and swollen must always be evaluated to rule out a dangerous bacterial joint infection.",
      "faqs": [
        {
          "q": "Why do gout attacks classically strike in the middle of the night in the big toe?",
          "a": "At night, body temperature drops slightly, and peripheral extremities like the big toe are the coolest parts of the body. Uric acid crystals are significantly less soluble at lower temperatures, causing them to precipitate rapidly in the big toe overnight."
        },
        {
          "q": "Can I stop taking Allopurinol once my joint pain goes away?",
          "a": "No! Allopurinol does not treat the acute pain; it prevents future attacks by continuously lowering uric acid in the blood. Stopping it causes uric acid to spike, triggering new agonizing attacks and destructive tophi."
        }
      ],
      "references": [
        "American College of Rheumatology (ACR) Guideline for the Management of Gout 2024",
        "EULAR Evidence-Based Recommendations for the Diagnosis and Management of Gout",
        "Lancet Seminar on Gout and Hyperuricemia Pathogenesis and Therapeutics"
      ]
    },
    {
      "id": "bone-fracture",
      "name": "Bone Fracture & Trauma Care",
      "name_ml": "അസ്ഥി ഒടിവ് (ബോൺ ഫ്രാക്ചർ)",
      "name_hi": "हड्डी का टूटना / फ्रैक्चर",
      "name_ar": "كسور العظام والإصابات",
      "category": "bone_joint",
      "badge": "Traumatic Skeletal Injury",
      "icon": "shield",
      "shortDesc": "A complete or partial break in the continuity of bone structure resulting from mechanical trauma, stress, or underlying pathology.",
      "whatIsIt": "A bone fracture is a medical condition where the structural integrity and continuity of a bone is broken. Fractures occur when the physical force applied to a bone exceeds its mechanical tensile or compressive strength. Types include Closed (skin intact), Open / Compound (bone pierces skin, high osteomyelitis risk), Comminuted (bone splintered into fragments), Greenstick (incomplete bending fracture in children), and Stress fractures.",
      "causes": [
        "High-energy traumatic impact (motor vehicle accidents, falls from heights, sports collisions)",
        "Repetitive mechanical cyclic loading (stress fractures in runners, military recruits)",
        "Pathological fractures: Occurring from minimal trauma through bone weakened by osteoporosis, osteomalacia, or metastatic bone cancer"
      ],
      "symptoms": [
        "Immediate, severe, sharp pain localized at the fracture site",
        "Inability to bear weight or move the injured limb",
        "Visible anatomical deformity, abnormal angulation, shortening, or rotation of the limb",
        "Rapid swelling, extensive ecchymosis (bruising), and localized tenderness",
        "Crepitus: Grating sensation felt or heard when bone ends rub together",
        "Skin tenting or open wound with protruding bone fragments (Open fracture)"
      ],
      "warningSigns": [
        "COMPARTMENT SYNDROME (Limb Emergency): Severe pain out of proportion to injury, pain on passive stretching, pallor, pulselessness, paresthesias",
        "Open / Compound Fracture: Visible bone end protruding through broken skin (urgent surgical debridement needed within hours)",
        "Neurovascular compromise: Cold, pale, pulseless foot or hand distal to fracture",
        "Fat Embolism Syndrome (from long bone/femur fractures): Tachypnea, petechial rash on chest, confusion"
      ],
      "riskFactors": [
        "Osteoporosis and low bone mineral density (especially in elderly adults)",
        "High-impact contact sports (football, rugby, skateboarding)",
        "Nutritional deficiencies: Low dietary Calcium and Vitamin D",
        "Physical frailty and high fall risk in elderly people living alone",
        "Occupational hazards in construction and heavy industrial labor"
      ],
      "bodyImpact": "Fracture disrupts periosteal blood vessels, initiating a fracture hematoma. The natural 4-stage biological healing cascade follows: (1) Hematoma & inflammation (Days 1-5), (2) Soft fibrocartilaginous callus formation (Weeks 2-3), (3) Hard bony woven callus formation (Weeks 4-12), and (4) Secondary bone remodeling by osteoclasts and osteoblasts along lines of stress (Months to Years).",
      "diagnosis": [
        "Plain Radiographs (X-rays): Minimum of two perpendicular views (AP and Lateral) including the joint above and below the fracture",
        "Computed Tomography (CT scan) for complex intra-articular fractures (tibial plateau, pelvic ring)",
        "MRI for occult radiographically invisible fractures (scaphoid fractures, femoral neck stress fractures)",
        "Vascular Doppler ultrasound if pulses distal to fracture are diminished"
      ],
      "treatments": [
        "Emergency First Aid: Splint the limb in position found, do NOT attempt to shove protruding bone back, cover open wounds with sterile dressing",
        "Closed Reduction and Immobilization (plaster cast, fiberglass cast, splints, functional braces)",
        "Open Reduction and Internal Fixation (ORIF): Surgical anatomical realignment using titanium plates, screws, or Intramedullary (IM) nails",
        "External Fixation: Percutaneous pins connected to an external rigid scaffold for open/contaminated fractures",
        "Adequate multimodal analgesia (avoid high-dose NSAIDs in early weeks as they may impair bone healing)",
        "Physical and occupational rehabilitation to restore joint mobility and muscular strength"
      ],
      "prevention": "Wear protective gear and helmets during sports and motorcycling. Fall-proof homes for elderly relatives with non-slip flooring and bright lighting. Screen for osteoporosis with DEXA scans and maintain bone density through dietary calcium, vitamin D, and resistance exercise.",
      "safeFoods": [
        "High-calcium foods: Milk, yogurt, fortified dairy, tofu, collard greens",
        "Adequate high-quality protein (1.2 - 1.5 g/kg/day) to supply collagen amino acids for callus matrix",
        "Vitamin D3 and Vitamin K2 (activates osteocalcin to bind calcium into bone matrix)",
        "Vitamin C rich fruits (promotes collagen synthesis)",
        "Zinc and Magnesium rich nuts, seeds, and whole grains"
      ],
      "avoidFoods": [
        "Tobacco and nicotine products (nicotine severely constricts periosteal microvessels and increases non-union rate by 300%)",
        "High-dose alcohol consumption (slows osteoblast activity and impairs bone mineralization)",
        "Heavy reliance on NSAID painkillers (e.g., Ibuprofen) during first 2 weeks if physician cautions against non-union risk",
        "Excessive high-sodium processed foods"
      ],
      "exercises": [
        "Strict immobilization of the fractured bone until radiographic callus is confirmed by orthopedic surgeon",
        "Active range of motion exercises for non-immobilized adjacent joints (wiggling toes, pumping fingers)",
        "Isometric muscle contractions inside the cast to prevent disuse muscle atrophy",
        "Progressive weight-bearing and functional gait retraining under physical therapy supervision once bone union begins"
      ],
      "lifestyle": [
        "Completely stop smoking to ensure optimal bone fusion and prevent delayed union",
        "Keep cast completely dry — wrap in waterproof plastic protectors when showering",
        "Never push coat hangers or pencils inside the cast to scratch itchy skin (causes skin ulceration and infection)",
        "Adhere strictly to non-weight-bearing restrictions with crutches or walker"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY for open fractures where bone is visible, severe deformities, loss of pulse or feeling in fingers/toes, or excruciating worsening pain under a tight cast.",
      "faqs": [
        {
          "q": "How long does a broken bone take to heal?",
          "a": "In healthy children, bones heal in 4 to 6 weeks. In healthy adults, most fractures require 6 to 12 weeks for solid bony union, while large bones like the femur or tibia may take up to 6 months for complete structural remodeling."
        },
        {
          "q": "What is a 'non-union' of a fracture?",
          "a": "A non-union occurs when a broken bone fails to heal together, often caused by lack of stability, poor blood supply, infection, or smoking. It may require surgical revision, bone grafting, or bone stimulation therapy."
        }
      ],
      "references": [
        "American Academy of Orthopaedic Surgeons (AAOS) Clinical Practice Guidelines on Fractures",
        "AO Foundation Principles of Fracture Management",
        "Orthopaedic Trauma Association (OTA) Clinical Guidelines"
      ]
    },
    {
      "id": "dengue",
      "name": "Dengue Fever (Breakbone Fever)",
      "name_ml": "ഡെങ്കിപ്പനി (ഡെങ്കി ഫീവർ)",
      "name_hi": "डेंगू बुखार",
      "name_ar": "حمى الضنك",
      "category": "infectious",
      "badge": "Mosquito-Borne Flavivirus",
      "icon": "alert-triangle",
      "shortDesc": "A mosquito-borne viral infection causing high fever, severe retro-orbital headache, excruciating joint pain, and potential plasma leakage.",
      "whatIsIt": "Dengue is a tropical vector-borne viral disease caused by the Dengue Virus (DENV, an RNA virus belonging to the Flaviviridae family with 4 distinct serotypes: DENV-1, DENV-2, DENV-3, DENV-4). It is transmitted to humans through the bites of infected female Aedes mosquitoes (predominantly Aedes aegypti). Infection can range from mild febrile illness to severe life-threatening Dengue Shock Syndrome (DSS) and Dengue Hemorrhagic Fever (DHF).",
      "causes": [
        "Infection with any of the 4 Dengue virus serotypes via Aedes aegypti or Aedes albopictus mosquitoes",
        "Antibody-Dependent Enhancement (ADE): Secondary infection with a different serotype produces non-neutralizing antibodies that enhance viral entry into macrophages, triggering massive plasma leakage"
      ],
      "symptoms": [
        "Sudden high spiking fever (up to 104°F / 40°C) lasting 2 to 7 days",
        "Severe retro-orbital pain (excruciating pain located directly behind the eyes, worsened by eye movement)",
        "Severe arthralgia and myalgia (historically termed 'Breakbone fever')",
        "Flushed facial erythema followed by a generalized maculopapular measles-like rash ('islands of white in a sea of red')",
        "Mild hemorrhagic manifestations: Petechiae (pinpoint skin bleeds), epistaxis (nosebleeds), or bleeding gums",
        "Nausea, persistent vomiting, and profound physical prostration"
      ],
      "warningSigns": [
        "CRITICAL PHASE WARNING SIGNS (typically emerging during defervescence at days 3-7):",
        "Severe persistent abdominal pain or tenderness",
        "Persistent vomiting (>= 3 episodes within 24 hours)",
        "Mucosal bleeding (gums, nose, gastrointestinal bleeding / black stools)",
        "Clinical fluid accumulation (pleural effusion, ascites)",
        "Lethargy, restlessness, or sudden postural dizziness",
        "Hepatomegaly (> 2 cm liver enlargement below costal margin)",
        "Rapidly rising Hematocrit accompanied by a rapid plummeting in Platelet count (< 100,000 /uL)"
      ],
      "riskFactors": [
        "Living in or traveling to tropical and subtropical regions (Southeast Asia, Latin America, Caribbean, Western Pacific)",
        "Prior infection with a different DENV serotype (the single greatest risk factor for Severe Dengue)",
        "High density of stagnant standing water near residential areas (ideal breeding sites for day-biting Aedes mosquitoes)",
        "Young infants and elderly adults with chronic co-morbidities"
      ],
      "bodyImpact": "Severe dengue causes transient endothelial hyperpermeability driven by cytokine storms (VEGF, TNF-alpha, NS1 protein toxicity). Plasma leaks out of intravascular spaces into pleural and peritoneal cavities, causing profound hemoconcentration, hypovolemic shock, metabolic acidosis, disseminated intravascular coagulation (DIC), and multi-organ failure.",
      "diagnosis": [
        "Dengue NS1 Antigen Test (rapid detection during the first 1 to 5 days of fever)",
        "Dengue IgM and IgG ELISA Antibody tests (positive after day 5 of illness)",
        "Reverse Transcriptase-PCR (RT-PCR) for definitive viral RNA detection and serotyping",
        "Serial Complete Blood Counts (CBC): Monitoring Hematocrit (detects hemoconcentration/leakage) and Platelet count twice daily during critical phase",
        "Ultrasound of abdomen/chest to detect early gall bladder wall thickening, ascites, and pleural effusion"
      ],
      "treatments": [
        "Meticulous, monitored Intravenous Fluid Resuscitation (Isotonic crystalloids: Normal Saline or Ringer's Lactate) titrated precisely to urine output and hematocrit",
        "Antipyretic therapy: Paracetamol / Acetaminophen ONLY for fever",
        "ABSOLUTE CONTRAINDICATION: NSAIDs (Aspirin, Ibuprofen, Diclofenac) are strictly prohibited as they worsen platelet dysfunction and cause catastrophic gastric bleeding",
        "Blood product transfusions (platelet concentrates or packed red cells) strictly indicated for active life-threatening hemorrhage or refractory coagulopathy",
        "Close ICU hemodynamic monitoring during the 48-hour critical leakage phase"
      ],
      "prevention": "Eliminate mosquito breeding sites by emptying and scrubbing all standing water containers weekly. Use mosquito repellents containing DEET, Picaridin, or Oil of Lemon Eucalyptus. Install window screens, sleep under permethrin-treated bed nets, wear long sleeves during dawn and dusk, and receive the Qdenga or Dengvaxia vaccine where medically indicated.",
      "safeFoods": [
        "Abundant oral rehydration fluids: Oral Rehydration Salts (ORS) solution, tender coconut water, clear fruit broths",
        "Papaya leaf extract juice (shown in clinical trials to promote bone marrow megakaryocyte thrombopoiesis)",
        "Pomegranate juice and fresh kiwi fruit (rich in Vitamin C and antioxidants)",
        "Soft, easily digestible bland foods: Rice porridge (kanji), steamed vegetables, khichdi",
        "Adequate fluids to maintain clear pale-yellow urine"
      ],
      "avoidFoods": [
        "Aspirin, Ibuprofen, and all NSAID medications (DEADLY in Dengue — cause fatal bleeding)",
        "Dark-colored or red-colored foods (like red fruit punches or dark colas) that can make distinguishing vomit blood from food difficult",
        "Oily, greasy, and heavily spiced foods that irritate the stomach",
        "Alcohol and dehydrating sugary sodas"
      ],
      "exercises": [
        "STRICT COMPLETE BED REST during the acute and critical phases of illness",
        "Zero physical exertion while platelet counts are depressed to prevent spontaneous internal hemorrhage",
        "Gradual resumption of light walking only after full defervescence and platelet count normalization (> 150,000 /uL)"
      ],
      "lifestyle": [
        "Monitor temperature and check CBC daily during days 3 to 7 of fever (the defervescence window is the most dangerous)",
        "Apply DEET mosquito repellent during daytime hours (Aedes mosquitoes bite predominantly during the day)",
        "Inspect home once a week for hidden water reservoirs (plant saucers, discarded tires, air cooler trays)",
        "Never ignore abdominal pain or dizziness when fever starts dropping"
      ],
      "whenToConsult": "SEEK IMMEDIATE EMERGENCY HOSPITALIZATION if you develop abdominal pain, persistent vomiting, bleeding from gums/nose, black stools, extreme restlessness, or cold clammy hands as fever subsides. This marks the onset of Dengue Shock.",
      "faqs": [
        {
          "q": "Why is the period when fever goes DOWN the most dangerous in dengue?",
          "a": "Many patients assume they are recovering when their fever drops around day 4-5. However, this is precisely when the 'Critical Phase' begins, where microscopic blood vessel leaks can cause sudden blood pressure collapse and shock."
        },
        {
          "q": "Can someone catch dengue multiple times?",
          "a": "Yes. There are 4 distinct virus serotypes. Recovering from one gives lifelong immunity to that single serotype, but only temporary cross-protection against the other three. A second infection with a different serotype carries a much higher risk of Severe Dengue."
        }
      ],
      "references": [
        "World Health Organization (WHO) Guidelines for Diagnosis, Treatment, Prevention and Control of Dengue 2024",
        "CDC Dengue Clinical Management Handbook",
        "Lancet Infectious Diseases Seminar on Dengue Pathogenesis and Vaccine Development"
      ]
    },
    {
      "id": "malaria",
      "name": "Malaria (Plasmodium Infection)",
      "name_ml": "മലമ്പനി (മലേറിയ)",
      "name_hi": "मलेरिया",
      "name_ar": "الملاريا",
      "category": "infectious",
      "badge": "Protozoan Parasitic Disease",
      "icon": "alert-octagon",
      "shortDesc": "A life-threatening vector-borne parasitic disease caused by Plasmodium parasites transmitted through the bites of infected female Anopheles mosquitoes.",
      "whatIsIt": "Malaria is an acute febrile parasitic disease caused by protozoan parasites of the genus Plasmodium, transmitted through the bites of infected female Anopheles mosquitoes. Five parasite species infect humans: Plasmodium falciparum (the deadliest, dominant in Africa), P. vivax (dominant in the Americas and Asia, causes recurrent relapses from dormant liver hypnozoites), P. malariae, P. ovale, and P. knowlesi.",
      "causes": [
        "Bite of an infective female Anopheles mosquito inoculating Plasmodium sporozoites into the bloodstream",
        "Hepatic schizogony: Sporozoites travel to hepatocytes to multiply, then rupture into the circulation as merozoites",
        "Erythrocytic cycle: Merozoites invade red blood cells, multiply, and rupture erythrocytes synchronously, releasing pyrogenic toxins"
      ],
      "symptoms": [
        "The Classic Malarial Paroxysm (occurring every 48 hours in tertian or 72 hours in quartan malaria):",
        "1. Cold Stage: Shivering, intense teeth-chattering chills, and feeling freezing cold lasting 15-60 minutes",
        "2. Hot Stage: Burning fever (up to 104-106°F), severe throbbing headache, nausea, and vomiting lasting 2-6 hours",
        "3. Sweating Stage: Profuse drenching diaphoresis, rapid defervescence, and profound exhaustion lasting 2-4 hours",
        "Anemia and mild jaundice due to massive intravascular red blood cell hemolysis",
        "Splenomegaly (tender enlarged spleen detectable on abdominal exam)"
      ],
      "warningSigns": [
        "CEREBRAL MALARIA (P. falciparum emergency): Coma, seizures, delirium, or abnormal posturing",
        "Severe Malarial Anemia: Hemoglobin dropping < 5 g/dL",
        "Blackwater Fever: Massive intravascular hemolysis producing dark mahogany/black urine",
        "Acute Respiratory Distress Syndrome (ARDS) or Non-Cardiogenic Pulmonary Edema",
        "Lactic Acidosis and severe refractory hypoglycemia"
      ],
      "riskFactors": [
        "Living in or traveling to endemic zones (Sub-Saharan Africa, South Asia, Amazon basin)",
        "Young children under 5 years of age (account for ~75% of global malaria deaths)",
        "Pregnant women (parasite sequesters in placental vascular beds)",
        "Non-immune travelers entering endemic regions without chemoprophylaxis"
      ],
      "bodyImpact": "P. falciparum expresses PfEMP-1 proteins on erythrocyte surfaces, causing infected red blood cells to adhere to microvascular endothelium (cytoadherence and sequestration). This blocks blood flow to the brain, kidneys, and placenta, causing cerebral ischemia, acute tubular necrosis, and multi-organ failure.",
      "diagnosis": [
        "Giemsa-Stained Peripheral Blood Smear Microscopy (gold standard: Thick smear for detecting parasites, Thin smear for species identification and parasitemia quantification)",
        "Malaria Rapid Diagnostic Tests (RDTs: detecting HRP-2 for P. falciparum or Plasmodium Lactate Dehydrogenase pLDH)",
        "Polymerase Chain Reaction (PCR) for low parasitemia levels",
        "Blood glucose (critical to monitor for malaria- or quinine-induced hypoglycemia)"
      ],
      "treatments": [
        "Artemisinin-based Combination Therapies (ACTs) — the gold standard first-line for uncomplicated malaria:",
        "Artemether-Lumefantrine (Coartem) or Artesunate-Amodiaquine or Dihydroartemisinin-Piperaquine",
        "Intravenous Artesunate (IV Artesunate) — mandatory emergency first-line treatment for Severe Malaria",
        "Primaquine or Tafenoquine (mandatory to eradicate dormant liver hypnozoites in P. vivax and P. ovale to prevent relapses, provided G6PD enzyme testing is normal)",
        "Emergency supportive care: Correcting hypoglycemia, blood transfusions for severe anemia, and anticonvulsants"
      ],
      "prevention": "Sleep under Long-Lasting Insecticidal Nets (LLINs). Use Indoor Residual Spraying (IRS) with insecticides. Take prescription Chemoprophylaxis (Atovaquone-Proguanil, Doxycycline, or Mefloquine) when traveling to endemic zones. The novel RTS,S/AS01 and R21/Matrix-M malaria vaccines are now deployed for children in high-transmission areas.",
      "safeFoods": [
        "Nutrient-dense easily digestible meals: Lentil soups, boiled rice, mashed potatoes",
        "Hydrating electrolyte broths, fresh coconut water, and clean boiled water",
        "Iron-rich and folate-rich foods (cooked spinach, eggs, poultry) to help replenish hemolyzed erythrocytes",
        "Vitamin C rich fruits to enhance non-heme iron absorption",
        "Small, frequent meals to maintain steady blood glucose"
      ],
      "avoidFoods": [
        "Greasy, heavy, deep-fried fast foods that trigger severe nausea during febrile attacks",
        "Alcohol and unverified recreational herbs",
        "Dehydrating caffeinated beverages",
        "Unwashed raw produce washed in untreated water in endemic zones"
      ],
      "exercises": [
        "Complete physical bed rest during acute infection",
        "Avoid all heavy physical exertion or contact sports for several weeks after recovery to prevent traumatic rupture of an enlarged, fragile spleen (Splenomegaly)",
        "Gradual resumption of light walking once hemoglobin stabilizes"
      ],
      "lifestyle": [
        "Always sleep under an insecticide-treated bed net tucked firmly under the mattress",
        "Apply DEET repellent to exposed skin between dusk and dawn (Anopheles mosquitoes bite predominantly at night)",
        "Screen for G6PD deficiency before starting Primaquine or Tafenoquine to avoid acute hemolytic anemia",
        "Complete the entire prescribed ACT course without stopping early"
      ],
      "whenToConsult": "Seek IMMEDIATE emergency medical care if you develop fever after traveling to a tropical region, or if a person with malaria becomes confused, vomits repeatedly, passes dark tea-colored urine, or breathes rapidly.",
      "faqs": [
        {
          "q": "Why does P. vivax malaria keep coming back months after being treated?",
          "a": "Plasmodium vivax and P. ovale have a unique dormant stage in the liver called 'hypnozoites'. Standard blood antimalarials kill parasites in red blood cells but spare the liver hypnozoites, which wake up months later to cause relapses unless killed with Primaquine."
        },
        {
          "q": "Why is G6PD testing required before taking Primaquine?",
          "a": "People with an inherited G6PD enzyme deficiency cannot protect their red blood cells against oxidative stress. Primaquine can trigger massive, life-threatening red blood cell destruction (hemolysis) in G6PD-deficient individuals."
        }
      ],
      "references": [
        "World Health Organization (WHO) Guidelines for Malaria 2024",
        "CDC Malaria Diagnosis and Treatment Guidelines for Clinicians",
        "Lancet Infectious Diseases Malaria Eradication Review"
      ]
    },
    {
      "id": "covid-19",
      "name": "COVID-19 (SARS-CoV-2 Infection)",
      "name_ml": "കോവിഡ്-19 (കൊറോണ വൈറസ്)",
      "name_hi": "कोविड-19 (कोरोना वायरस)",
      "name_ar": "مرض فيروس كورونا (كوفيد-19)",
      "category": "infectious",
      "badge": "Airborne Coronavirus",
      "icon": "alert-triangle",
      "shortDesc": "A highly contagious respiratory and systemic illness caused by the Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2).",
      "whatIsIt": "COVID-19 is an acute infectious viral illness caused by SARS-CoV-2, an enveloped positive-sense single-stranded RNA betacoronavirus. Transmitted predominantly via respiratory aerosols and droplets, the virus enters host cells by binding its surface spike (S) glycoprotein to human Angiotensin-Converting Enzyme 2 (ACE2) receptors, which are abundantly expressed in the respiratory tract, vascular endothelium, heart, and kidneys.",
      "causes": [
        "Airborne transmission of SARS-CoV-2 aerosols generated during breathing, talking, coughing, or singing in enclosed spaces",
        "Binding to cellular ACE2 receptors facilitated by transmembrane protease serine 2 (TMPRSS2)",
        "Viral replication in nasopharyngeal and alveolar epithelial cells with down-regulation of ACE2, leading to excessive Angiotensin II accumulation and systemic endothelial inflammation"
      ],
      "symptoms": [
        "Fever or chills, dry cough, and shortness of breath",
        "Anosmia (sudden loss of smell) and Ageusia (loss of taste) — classic early neuropathic hallmarks",
        "Profound fatigue, generalized myalgias, and headache",
        "Sore throat, nasal congestion, and rhinorrhea",
        "Gastrointestinal symptoms: Nausea, vomiting, and loose diarrhea",
        "Post-COVID Conditions ('Long COVID'): Brain fog, exertional intolerance, dysautonomia/POTS, and persistent fatigue lasting months"
      ],
      "warningSigns": [
        "'Happy Hypoxia': Severely low blood oxygen saturation (SpO2 < 90%) without proportionate subjective breathlessness",
        "Acute Respiratory Distress Syndrome (ARDS): Sudden severe dyspnea, cyanosis, and respiratory exhaustion",
        "Hypercoagulability and Thrombosis: Pulmonary embolism, deep vein thrombosis, or ischemic stroke",
        "Multisystem Inflammatory Syndrome (MIS-C/A) in children and young adults"
      ],
      "riskFactors": [
        "Advanced age (risk escalates dramatically over age 65)",
        "Underlying medical co-morbidities: Obesity, hypertension, Type 2 diabetes, chronic kidney disease, and COPD",
        "Immunosuppressed states (organ transplant recipients, active cancer chemotherapy)",
        "Unvaccinated status against SARS-CoV-2"
      ],
      "bodyImpact": "Immune dysregulation triggers a hyperinflammatory 'cytokine storm' (massive elevations in IL-6, IL-1beta, ferritin, D-dimer). Diffuse alveolar damage impairs surfactant production, creates hyaline membranes, and triggers microvascular pulmonary immunothrombosis.",
      "diagnosis": [
        "Real-Time Reverse Transcription Polymerase Chain Reaction (RT-PCR) — gold standard for viral RNA detection",
        "Rapid Antigen Tests (RAT) for fast point-of-care detection during high viral load phases",
        "Pulse Oximetry monitoring (SpO2 < 94% indicates significant lower respiratory involvement)",
        "High-Resolution Chest CT: Showing bilateral, peripheral, subpleural ground-glass opacities (GGOs)",
        "Inflammatory biomarkers: Serum Ferritin, D-Dimer, hs-CRP, and Procalcitonin"
      ],
      "treatments": [
        "Oral Antivirals for mild-to-moderate high-risk outpatients within 5 days of symptom onset: Nirmatrelvir-Ritonavir (Paxlovid) or Molnupiravir",
        "Intravenous Antiviral: Remdesivir",
        "Systemic Corticosteroids: Dexamethasone (6 mg daily for up to 10 days) for hospitalized patients requiring supplemental oxygen",
        "Immunomodulators for severe cytokine storm: IL-6 receptor antagonists (Tocilizumab) or JAK inhibitors (Baricitinib)",
        "Prophylactic anticoagulation (Low-Molecular-Weight Heparin) to prevent thromboembolism",
        "High-flow nasal cannula (HFNC) and prone positioning (lying on stomach to improve dorsal alveolar ventilation)"
      ],
      "prevention": "Up-to-date mRNA and protein-subunit COVID-19 vaccinations and booster doses. Improve indoor ventilation with HEPA air filters, wear high-filtration respirators (N95/KF94) in crowded enclosed spaces, and practice proper hand hygiene.",
      "safeFoods": [
        "Warm hydrating broths, clear vegetable soups, and warm teas with honey",
        "Anti-inflammatory antioxidant foods: Berries, steamed greens, turmeric with black pepper",
        "High-protein easily digestible meals (eggs, poultry, tofu, lentils) to support tissue recovery",
        "Adequate fluids to replace insensible fever losses",
        "Vitamin D3, Zinc, and Vitamin C dietary intake"
      ],
      "avoidFoods": [
        "Dehydrating caffeinated sodas and alcohol",
        "Heavy, deep-fried fast foods that worsen gastrointestinal nausea and reflux",
        "Excessive refined sugars that impair immune neutrophil function",
        "Extremely cold iced beverages if throat irritation is present"
      ],
      "exercises": [
        "Strict physical rest during the acute infection phase",
        "Prone positioning in bed (lying on your stomach for 30-120 minutes) to recruit posterior lung alveoli and boost blood oxygenation",
        "Gentle breathing exercises (diaphragmatic breathing)",
        "Gradual return to exercise following the 4-phase graduated return protocol — avoid pushing through post-viral fatigue to prevent Long COVID crashes"
      ],
      "lifestyle": [
        "Isolate in a separate room with dedicated ventilation for at least 5 days from symptom onset",
        "Check blood oxygen levels with a pulse oximeter twice daily (room air SpO2 should stay >= 95%)",
        "Wear a well-fitted N95 mask if you must be around others",
        "Get plenty of sleep to support immune interferon production"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES IMMEDIATELY if blood oxygen (SpO2) drops below 92%, if you have persistent chest pressure or shortness of breath, or if you become confused or pale/blue around the lips.",
      "faqs": [
        {
          "q": "What is 'Silent Hypoxia' in COVID-19?",
          "a": "Silent hypoxia occurs when blood oxygen levels drop dangerously low (sometimes into the 70s or 80s) without the patient feeling breathless. This happens because the virus damages pulmonary capillaries without stiffening the lungs initially, meaning the brain does not register air hunger until sudden collapse occurs."
        },
        {
          "q": "Why is prone positioning (lying on your stomach) so helpful for lung infections?",
          "a": "The largest portion of your lung tissue lies toward your back. Lying on your back compresses this tissue under the weight of the heart and abdominal organs. Turning onto your stomach opens up these dorsal alveoli, instantly improving oxygen absorption."
        }
      ],
      "references": [
        "World Health Organization (WHO) Therapeutics and COVID-19 Living Guideline",
        "NIH COVID-19 Treatment Guidelines Panel",
        "CDC COVID-19 Clinical Management Protocols"
      ]
    },
    {
      "id": "influenza",
      "name": "Influenza (Seasonal Flu)",
      "name_ml": "ഇൻഫ്ലുവെൻസ (വൈറൽ പനി / ഫ്ലൂ)",
      "name_hi": "इन्फ्लूएंजा (फ्लू / मौसमी बुखार)",
      "name_ar": "الإنفلونزا الموسمية",
      "category": "infectious",
      "badge": "Acute Orthomyxovirus",
      "icon": "thermometer",
      "shortDesc": "An acute, highly contagious airborne viral infection of the respiratory tract caused by influenza viruses A and B.",
      "whatIsIt": "Influenza, commonly known as the flu, is an acute viral infection that attacks the respiratory system (nose, throat, bronchial tubes, and lungs). Caused by Influenza viruses A and B (members of the Orthomyxoviridae family), influenza is characterized by sudden, abrupt onset of high fever, severe body aches, and prostration, distinguishing it from the milder common cold.",
      "causes": [
        "Inhalation of airborne respiratory droplets containing Influenza A or B viruses expelled during coughing, sneezing, or talking",
        "Direct or indirect contact with contaminated fomite surfaces followed by touching mucous membranes",
        "Antigenic Drift (minor point mutations in Hemagglutinin and Neuraminidase surface glycoproteins necessitating updated annual vaccines)",
        "Antigenic Shift (major reassortment creating novel pandemic strains in Influenza A)"
      ],
      "symptoms": [
        "Sudden, abrupt onset (patients often pinpoint the exact hour symptoms began)",
        "High spiking fever (100°F to 104°F / 38°C to 40°C) with shaking chills and rigors",
        "Severe myalgia and arthralgia (intense aching across back, legs, and shoulders)",
        "Severe retro-orbital headache and photophobia",
        "Persistent dry, hacking, painful cough",
        "Sore throat, nasal congestion, and burning sensation in the chest",
        "Profound physical exhaustion and malaise lasting 1 to 2 weeks"
      ],
      "warningSigns": [
        "Secondary Bacterial Pneumonia: Fever returns several days after initial flu improvement with purulent sputum (often caused by Staphylococcus aureus or Streptococcus pneumoniae)",
        "Hypoxemia: Shortness of breath and low oxygen saturation",
        "Reye's Syndrome in children: Acute non-inflammatory encephalopathy and hepatic failure triggered by giving Aspirin during viral infections"
      ],
      "riskFactors": [
        "Adults aged 65 and older and children under 5 years",
        "Chronic medical conditions: Asthma, COPD, heart failure, diabetes, chronic kidney disease",
        "Pregnant women and women up to two weeks postpartum",
        "Residents of nursing homes and long-term care facilities",
        "Immunocompromised individuals"
      ],
      "bodyImpact": "Viral Hemagglutinin binds sialic acid receptors on ciliated respiratory epithelial cells, followed by viral replication and cell lysis. Destruction of the mucociliary escalator strips the airway of protective defenses, creating prime conditions for secondary invasive bacterial superinfections.",
      "diagnosis": [
        "Clinical diagnosis based on abrupt onset during local influenza season",
        "Rapid Influenza Diagnostic Tests (RIDTs) using nasal/throat swabs (results in 15 minutes)",
        "Rapid Molecular Assays (RT-PCR / NAAT) — high sensitivity and specificity",
        "Chest X-Ray to evaluate for secondary bacterial consolidation or viral pneumonitis"
      ],
      "treatments": [
        "Neuraminidase Inhibitors (must be initiated within 48 hours of symptom onset for maximum clinical benefit):",
        "Oseltamivir (Tamiflu: oral, 75 mg twice daily for 5 days)",
        "Zanamivir (inhalation) or Peramivir (single-dose intravenous infusion)",
        "Cap-dependent Endonuclease Inhibitor: Baloxavir Marboxil (Xofluza: single oral dose)",
        "Antipyretics and analgesics: Paracetamol / Acetaminophen or Ibuprofen (FOR ADULTS ONLY — NEVER GIVE ASPIRIN TO CHILDREN/TEENS)",
        "Hydration and complete physical bed rest"
      ],
      "prevention": "Annual Quadrivalent Influenza Vaccination (updated yearly for Northern and Southern hemispheres) is the single most effective prevention. Practice rigorous handwashing, use alcohol hand rubs, cover coughs, and stay home while symptomatic.",
      "safeFoods": [
        "Warm chicken soup or bone broth (rich in carnosine and cystine which thin airway mucus)",
        "Warm herbal teas with raw honey and lemon to soothe throat mucosa",
        "Vitamin C rich fruits (oranges, guavas, kiwis, strawberries)",
        "Soft, easily digestible foods (oatmeal, rice porridge, scrambled eggs)",
        "Ample clean fluids to replace insensible fluid losses from high fevers"
      ],
      "avoidFoods": [
        "ASPIRIN (Acetylsalicylic acid) in anyone under 19 years old (RISK OF FATAL REYE'S SYNDROME)",
        "Dehydrating alcoholic beverages and heavy caffeinated drinks",
        "Greasy, heavy, deep-fried fast foods that strain digestive energy",
        "Excessive refined sugars that impair immune phagocytosis"
      ],
      "exercises": [
        "COMPLETE PHYSICAL REST during the acute febrile illness",
        "THE 'NECK RULE': If symptoms are strictly above the neck (sniffles), light walking is acceptable; if symptoms are below the neck (fever, body aches, chest cough), NO EXERCISE whatsoever",
        "Gradual resumption of light walking only after fever has been gone for 48 hours without medications"
      ],
      "lifestyle": [
        "Stay home from work, school, and social events until fever-free for at least 24 hours without fever-reducing medicine",
        "Cough and sneeze into a disposable tissue or the crook of your elbow",
        "Use a cool-mist room humidifier to keep nasal and throat passages moist",
        "Wash hands frequently with soap and warm water for at least 20 seconds"
      ],
      "whenToConsult": "SEEK IMMEDIATE EMERGENCY CARE if you or a child experiences difficulty breathing, chest pain, blue lips, severe dizziness, seizures, or if a fever improves and then suddenly returns worse with a productive cough.",
      "faqs": [
        {
          "q": "Why do I need a flu shot every single year?",
          "a": "Influenza viruses constantly mutate their surface proteins through a process called 'Antigenic Drift'. Additionally, your body's vaccine-induced antibody immunity naturally wanes after 6 to 9 months, necessitating an updated annual booster."
        },
        {
          "q": "Can the flu shot actually give me the flu?",
          "a": "No. Injected flu vaccines contain either killed (inactivated) virus particles or recombinant proteins that cannot replicate or cause illness. Mild soreness at the injection site or a low-grade immune response is normal and proves your body is building protection."
        }
      ],
      "references": [
        "CDC Prevention and Control of Seasonal Influenza with Vaccines: Recommendations of the ACIP",
        "World Health Organization (WHO) Influenza Factsheet 2024",
        "Infectious Diseases Society of America (IDSA) Clinical Practice Guidelines for Influenza"
      ]
    },
    {
      "id": "hepatitis",
      "name": "Viral Hepatitis (Hepatitis B & C)",
      "name_ml": "വൈറൽ ഹെപ്പറ്റൈറ്റിസ് (ഹെപ്പറ്റൈറ്റിസ് ബി & സി)",
      "name_hi": "वायरल हेपेटाइटिस (हेपेटाइटिस बी और सी)",
      "name_ar": "التهاب الكبد الفيروسي (ب وج)",
      "category": "infectious",
      "badge": "Hepatotropic Viral Disease",
      "icon": "shield-alert",
      "shortDesc": "Viral infections causing inflammation and necroinflammation of liver parenchyma, leading to cirrhosis and liver cancer.",
      "whatIsIt": "Viral hepatitis refers to inflammatory liver disease caused by hepatotropic viruses. While Hepatitis A and E are water-borne acute infections, Hepatitis B Virus (HBV, a partially double-stranded DNA hepadnavirus) and Hepatitis C Virus (HCV, a positive-sense single-stranded RNA flavivirus) are blood-borne and body-fluid transmitted pathogens that frequently establish life-long chronic infections, driving liver cirrhosis and hepatocellular carcinoma.",
      "causes": [
        "HBV Transmission: Perinatal / vertical transmission (from mother to infant at birth — major global source), unprotected sexual contact, contaminated needles/syringes, and unsterilized tattooing equipment",
        "HCV Transmission: Direct blood-to-blood contact (sharing needles in injection drug use, unregulated blood transfusions prior to screening, contaminated surgical/dental instruments)",
        "Immune-mediated liver injury: Host cytotoxic CD8+ T-cells attack virus-infected hepatocytes, causing chronic inflammatory scarring"
      ],
      "symptoms": [
        "Frequently asymptomatic for decades ('the silent epidemic') until advanced cirrhosis develops",
        "Acute Phase (if present): Jaundice (yellowing of sclera and skin), dark tea-colored urine, and clay-colored stools",
        "Profound, unexplained fatigue, malaise, and low-grade fever",
        "Dull ache or fullness in the right upper quadrant over the liver",
        "Anorexia, nausea, vomiting, and joint pains (arthralgias)",
        "Late Cirrhosis signs: Ascites (fluid belly), spider angiomas, palmar erythema, confusion (hepatic encephalopathy), and caput medusae"
      ],
      "warningSigns": [
        "Decompensated Cirrhosis: Hematemesis from ruptured esophageal varices (gastrointestinal hemorrhage)",
        "Spontaneous Bacterial Peritonitis (SBP): Infected ascitic fluid with fever and abdominal tenderness",
        "Hepatocellular Carcinoma (HCC): Rapid weight loss, RUQ hard mass, and sudden rise in serum Alpha-Fetoprotein (AFP)"
      ],
      "riskFactors": [
        "Infants born to HBV-infected mothers without post-exposure prophylaxis",
        "Sharing needles, syringes, or drug paraphernalia",
        "Receiving blood transfusions or organ transplants before universal screening (pre-1992)",
        "Healthcare workers exposed to accidental needle-stick injuries",
        "Unprotected sexual contact with multiple partners or men who have sex with men"
      ],
      "bodyImpact": "Persistent viral replication drives chronic necroinflammation and fibrogenesis. Activated hepatic stellate cells lay down excess extracellular matrix collagen, distorting hepatic architecture into regenerative nodules (cirrhosis), causing portal hypertension, liver failure, and liver cancer.",
      "diagnosis": [
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
      "treatments": [
        "Hepatitis C Cure: Direct-Acting Antivirals (DAAs: Sofosbuvir-Velpatasvir, Glecaprevir-Pibrentasvir) taken orally for 8 to 12 weeks achieve a Sustained Virologic Response (SVR / complete viral cure) in > 98% of patients!",
        "Hepatitis B Long-Term Suppression: High barrier to resistance nucleoside/nucleotide reverse transcriptase inhibitors: Tenofovir (TDF / TAF) or Entecavir taken daily to suppress viral replication and prevent cirrhosis",
        "Surveillance: Serum Alpha-Fetoprotein (AFP) and hepatic ultrasound every 6 months for patients with cirrhosis",
        "Liver Transplantation for end-stage decompensated liver disease"
      ],
      "prevention": "Hepatitis B Vaccine (given within 24 hours of birth followed by 2-3 booster doses) provides > 95% lifelong protection. Screen all pregnant women for HBV and administer HBIG + vaccine to newborns within 12 hours. Never share needles or razors. Ensure sterile tattoo and medical equipment. While there is no vaccine for Hepatitis C, universal screening and DAA treatment cure infection and stop transmission.",
      "safeFoods": [
        "Fresh, whole foods rich in antioxidants: Leafy vegetables, blueberries, carrots",
        "Black coffee (2 to 3 cups daily has robust evidence showing reduced liver stiffness and lower HCC risk)",
        "Lean protein sources (fish, poultry, legumes, tofu) to prevent muscle sarcopenia in liver disease",
        "Complex carbohydrates (oats, brown rice, quinoa)",
        "Clean boiled water and sanitary fresh meals"
      ],
      "avoidFoods": [
        "ALCOHOL IN ANY QUANTITY (Alcohol dramatically accelerates viral replication, fibrosis, and liver failure)",
        "Raw or undercooked shellfish/oysters (risk of deadly Vibrio vulnificus sepsis in patients with chronic liver disease)",
        "Unverified over-the-counter herbal supplements, detox teas, and high-dose acetaminophen (paracetamol should be capped at < 2g/day in liver disease)",
        "High-sodium processed meats and salted snacks that promote ascites fluid retention"
      ],
      "exercises": [
        "Moderate aerobic physical activity: 30 minutes of brisk walking or stationary cycling 4-5 days a week",
        "Light resistance training to preserve lean skeletal muscle mass and counter liver sarcopenia",
        "Avoid exhausting contact sports if splenomegaly or thrombocytopenia is present"
      ],
      "lifestyle": [
        "Completely abstain from all alcoholic beverages",
        "Never share razors, nail clippers, toothbrushes, or needles with anyone",
        "Cover open cuts and clean blood spills with a 1:10 household bleach solution",
        "Get vaccinated against Hepatitis A and B if infected with Hepatitis C"
      ],
      "whenToConsult": "Consult a hepatologist or gastroenterologist immediately if your blood test shows positive HBsAg or HCV RNA, or if you develop yellow eyes, dark urine, or abdominal swelling.",
      "faqs": [
        {
          "q": "Can Hepatitis C really be completely cured today?",
          "a": "YES! With modern Direct-Acting Antiviral (DAA) pills taken once a day for just 8 to 12 weeks, Hepatitis C is completely cured in more than 98% of patients, with virtually no side effects."
        },
        {
          "q": "Can Hepatitis B be spread through sharing food or hugging?",
          "a": "No. Hepatitis B is not spread through casual contact, hugging, kissing, sharing eating utensils, breastfeeding, or coughing. It is transmitted only through direct contact with infected blood, semen, or vaginal fluids, and from mother to child at birth."
        }
      ],
      "references": [
        "AASLD / IDSA HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C",
        "AASLD Practice Guidance on the Management of Hepatitis B 2024",
        "World Health Organization (WHO) Global Hepatitis Report 2024"
      ]
    },
    {
      "id": "typhoid",
      "name": "Typhoid Fever (Enteric Fever)",
      "name_ml": "ടൈഫോയ്ഡ് പനി (എന്ററിക് ഫീവർ)",
      "name_hi": "टाइफाइड बुखार (मियादी बुखार)",
      "name_ar": "حمى التيفوئيد (الحمى المعوية)",
      "category": "infectious",
      "badge": "Fecal-Oral Bacterial",
      "icon": "alert-circle",
      "shortDesc": "A systemic life-threatening bacterial infection caused by Salmonella enterica serovar Typhi, spread through contaminated food and water.",
      "whatIsIt": "Typhoid fever is a life-threatening systemic infection caused by the bacterium Salmonella enterica serotype Typhi (and related Salmonella Paratyphi). Transmitted via the fecal-oral route through contaminated drinking water or food handled by an infected carrier, the bacteria penetrate the intestinal intestinal mucosa, invade regional lymph nodes, and disseminate throughout the reticuloendothelial system.",
      "causes": [
        "Ingestion of food or water contaminated with feces or urine from an acute patient or chronic asymptomatic carrier of Salmonella Typhi",
        "Poor municipal water sanitation, unhygienic sewage disposal, and lack of handwashing facilities",
        "Eating street foods or drinking beverages prepared with untreated municipal or well water",
        "Spread of Extensively Drug-Resistant (XDR) Salmonella Typhi strains"
      ],
      "symptoms": [
        "Step-ladder pattern of fever: Temperature rises gradually over the first week, reaching a sustained 103°F-104°F (39°C-40°C)",
        "Relative Bradycardia (Faget's Sign): Heart rate remains unexpectedly slow despite high spiking fever",
        "Severe frontal headache, malaise, and generalized body aches",
        "Rose Spots: Faint, transient, blanching salmon-pink macules on the trunk and abdomen (appearing in week 2)",
        "Coated tongue with red margins ('Typhoid tongue')",
        "Abdominal pain, distension, hepatosplenomegaly, and 'pea-soup' greenish diarrhea or severe constipation"
      ],
      "warningSigns": [
        "INTESTINAL PERFORATION & HEMORRHAGE (Third week emergency): Necrosis of Peyer's patches causing sudden knife-like abdominal pain, peritonitis, and septic shock",
        "Typhoid Encephalopathy ('Coma Vigil'): Extreme apathy, muttering delirium, twitching, and stupor",
        "Intractable intestinal bleeding presenting with melena or hematochezia"
      ],
      "riskFactors": [
        "Living in or traveling to low-resource areas with poor water sanitation (South Asia, Southeast Asia, Sub-Saharan Africa)",
        "Lack of access to clean chlorinated or boiled drinking water",
        "Close household contact with a chronic Salmonella Typhi carrier",
        "Children and young adults living in crowded urban settlements"
      ],
      "bodyImpact": "S. Typhi invades specialized M-cells overlying Peyer's patches in the terminal ileum. Surviving inside macrophages via Vi capsular antigen protection, they multiply in mesenteric lymph nodes, enter the thoracic duct, and cause secondary bacteremia with focal necrosis in the liver, spleen, bone marrow, and gallbladder.",
      "diagnosis": [
        "Blood Culture (gold standard during the first week of fever, 60-80% sensitivity)",
        "Bone Marrow Culture (highest diagnostic yield, > 90% sensitivity, remains positive even after antibiotics)",
        "Stool and Urine Cultures (positive during the 2nd and 3rd weeks)",
        "Widal Test (historically common serological test, but prone to frequent false positives and negatives; paired titers showing 4-fold rise required)",
        "Rapid Typhoid IgM tests (Typhidot / Tubex)"
      ],
      "treatments": [
        "Targeted Antibiotic Therapy guided by local antimicrobial susceptibility patterns:",
        "First-Line for Drug-Susceptible strains: Azithromycin or Ceftriaxone",
        "For Extensively Drug-Resistant (XDR) Typhoid: Carbapenems (Meropenem) or Azithromycin",
        "High-dose intravenous Dexamethasone for severe typhoid encephalopathy and shock",
        "Emergency surgical exploratory laparotomy and primary repair / wedge resection for ileal perforation"
      ],
      "prevention": "Typhoid Conjugate Vaccine (TCV: Typbar-TCV) provides long-lasting immunity in children and adults. Follow the universal traveler's food safety rule: 'Boil it, cook it, peel it, or forget it'. Drink only bottled or boiled water, and practice rigorous handwashing with soap.",
      "safeFoods": [
        "Piping hot, freshly cooked homemade meals",
        "Boiled, purified, or sealed commercially bottled drinking water",
        "Easily digestible high-calorie soft foods: Porridge, mashed potatoes, bananas, custards",
        "Adequate oral fluids to prevent dehydration (ORS, clear broths, tender coconut water)",
        "Fruits with thick rinds peeled personally (bananas, oranges)"
      ],
      "avoidFoods": [
        "Untreated tap water, ice cubes made from municipal water, and fountain sodas",
        "Raw street-vendor salads, cut fruit platters, and unpasteurized milk",
        "Undercooked meats, shellfish, and street food snacks",
        "Raw unpeeled fruits and leafy greens washed in contaminated local water"
      ],
      "exercises": [
        "Complete physical bed rest during active febrile illness",
        "Avoid strenuous physical lifting or abdominal straining for 3 to 4 weeks after recovery to protect fragile healing intestinal Peyer's patches from mechanical perforation"
      ],
      "lifestyle": [
        "Always wash hands vigorously with soap and water after using the toilet and before preparing food",
        "Finish the entire prescribed course of antibiotics to prevent chronic gallbladder carrier states",
        "Receive the Typhoid Conjugate Vaccine at least 2 weeks prior to traveling to endemic regions",
        "Keep home water storage tanks covered, cleaned, and disinfected regularly"
      ],
      "whenToConsult": "SEEK IMMEDIATE EMERGENCY MEDICAL CARE if a person with high fever develops sudden severe stomach pain, vomits blood, passes bloody stools, or becomes delirious. Consult a physician for any continuous high fever lasting over 3 days.",
      "faqs": [
        {
          "q": "Who was 'Typhoid Mary'?",
          "a": "Mary Mallon was an Irish-American cook in the early 1900s who was the first identified healthy chronic asymptomatic carrier of Salmonella Typhi in the US. The bacteria colonized her gallbladder, and because she worked as a cook without washing hands, she unknowingly infected over 50 people."
        },
        {
          "q": "How can someone be a 'chronic carrier' of typhoid?",
          "a": "In about 2% to 5% of infected individuals who are not fully cured with antibiotics, Salmonella Typhi bacteria colonize the gallbladder and form biofilms on gallstones, continually shedding bacteria in their stool for years without feeling sick themselves."
        }
      ],
      "references": [
        "World Health Organization (WHO) Typhoid Factsheet and Vaccine Position Paper",
        "CDC Yellow Book: Health Information for International Travel - Typhoid & Paratyphoid",
        "Lancet Infectious Diseases Seminar on Enteric Fever and Antimicrobial Resistance"
      ]
    },
    {
      "id": "hiv-aids",
      "name": "HIV / AIDS (Human Immunodeficiency Virus)",
      "name_ml": "എച്ച്.ഐ.വി / എയ്ഡ്സ് (എച്ച്.ഐ.വി അണുബാധ)",
      "name_hi": "एचआईवी / एड्स",
      "name_ar": "فيروس نقص المناعة البشرية / الإيدز",
      "category": "infectious",
      "badge": "Retroviral Immunodeficiency",
      "icon": "shield-alert",
      "shortDesc": "A retroviral infection that selectively targets and depletes CD4+ T helper cells, progressively crippling the adaptive immune system.",
      "whatIsIt": "Human Immunodeficiency Virus (HIV) is an enveloped lentivirus (subgroup of retroviruses) that attacks the human immune system by infecting and destroying CD4+ T lymphocytes, essential coordinators of adaptive immunity. Without treatment, HIV progressively depletes CD4 cells over 8 to 10 years, progressing to Acquired Immunodeficiency Syndrome (AIDS), defined by a CD4 count < 200 cells/uL or the development of specific life-threatening opportunistic infections and malignancies.",
      "causes": [
        "Unprotected sexual contact (vaginal, anal) with an infected partner who has a detectable viral load",
        "Blood-to-blood transmission (sharing needles, syringes, or drug preparation equipment)",
        "Perinatal transmission (Mother-to-Child Transmission - MTCT during pregnancy, childbirth, or breastfeeding)",
        "Transfusion of unscreened contaminated blood products (rare in modern healthcare)"
      ],
      "symptoms": [
        "Acute Retroviral Syndrome (ARS: occurs 2-4 weeks after exposure in ~70% of people): Mononucleosis-like illness with fever, diffuse maculopapular rash, sore throat, generalized lymphadenopathy, myalgias, and mouth ulcers",
        "Clinical Latency Stage: Often symptom-free for years while the virus actively replicates and depletes CD4 counts",
        "Early Symptomatic HIV: Recurrent oral thrush (Candida albicans), oral hairy leukoplakia, frequent herpes zoster (shingles) outbreaks, and unexplained weight loss",
        "AIDS Defining Conditions: Pneumocystis jirovecii Pneumonia (PCP), Kaposi's Sarcoma (HHV-8 vascular tumor), Cryptococcal Meningitis, Toxoplasmosis, Cytomegalovirus (CMV) retinitis, and severe wasting syndrome"
      ],
      "warningSigns": [
        "Pneumocystis Pneumonia: Progressive exertional breathlessness, dry cough, and desaturation with normal-appearing initial chest X-ray",
        "Cryptococcal Meningitis: Severe persistent headache, fever, and confusion",
        "Toxoplasma Encephalitis: Focal neurological deficits and multiple ring-enhancing brain lesions on MRI"
      ],
      "riskFactors": [
        "Unprotected sexual intercourse, especially receptive anal intercourse",
        "Having other Sexually Transmitted Infections (STIs like syphilis, herpes, gonorrhea) which cause genital epithelial ulceration",
        "Injection drug use and sharing contaminated needles",
        "Lack of access to Pre-Exposure Prophylaxis (PrEP) in high-risk populations"
      ],
      "bodyImpact": "HIV uses viral glycoprotein gp120/gp41 to bind CD4 and co-receptors (CCR5 or CXCR4). Viral reverse transcriptase converts viral RNA into proviral DNA, which integrates permanently into host chromosomes via integrase. Active replication and pyroptosis destroy lymphoid tissue, stripping the host of cell-mediated immunity against fungal, viral, and mycobacterial pathogens.",
      "diagnosis": [
        "4th Generation HIV-1/2 Antigen/Antibody Combination Immunoassay (detects both HIV antibodies and viral p24 antigen as early as 18-45 days post-exposure)",
        "HIV-1/HIV-2 Antibody Differentiation Immunoassay",
        "HIV-1 Qualitative/Quantitative RNA PCR (Viral Load test — detects virus as early as 10-14 days post-exposure)",
        "Baseline CD4+ T-lymphocyte count and percentage",
        "Baseline HIV Genotypic Resistance testing before starting treatment"
      ],
      "treatments": [
        "Lifelong Antiretroviral Therapy (ART) — modern regimens are typically a single daily combination tablet with minimal side effects:",
        "First-Line Integrase Strand Transfer Inhibitor (INSTI)-based regimens: Bictegravir/Tenofovir Alafenamide/Emtricitabine (Biktarvy) or Dolutegravir + 2 NRTIs",
        "Long-Acting Injectable ART: Cabotegravir + Rilpivirine (Cabenuva) injected once every 1 or 2 months for virologically suppressed patients",
        "Prophylaxis against opportunistic infections (Trimethoprim-Sulfamethoxazole for PCP when CD4 < 200)",
        "THE REVOLUTIONARY MEDICAL PRINCIPLE: U = U (Undetectable = Untransmittable). A person on ART with an undetectable viral load CANNOT sexually transmit HIV to partners!"
      ],
      "prevention": "Pre-Exposure Prophylaxis (PrEP: daily oral Emtricitabine/Tenofovir or bi-monthly injectable Cabotegravir) reduces sexual transmission risk by 99%. Post-Exposure Prophylaxis (PEP: 28-day regimen started within 72 hours of an accidental exposure). Consistent condom use, needle-exchange programs, universal treatment of pregnant women to prevent vertical transmission, and voluntary medical male circumcision.",
      "safeFoods": [
        "Wholesome, balanced, high-protein nutrition to support immune vitality and prevent muscle wasting",
        "Freshly prepared, thoroughly cooked foods to prevent foodborne opportunistic enteric infections",
        "Pasteurized dairy products and thoroughly boiled water",
        "Fresh vegetables and fruits washed thoroughly in safe, clean water",
        "Adequate daily caloric intake"
      ],
      "avoidFoods": [
        "Raw or undercooked meats, poultry, sushi, and eggs (high risk of Salmonella and Toxoplasma in low CD4 states)",
        "Unpasteurized milk, raw milk cheeses, and unpasteurized juices (risk of Listeria)",
        "Raw shellfish and raw oysters (risk of Vibrio vulnificus)",
        "Untreated, unboiled well or tap water in areas with poor municipal sanitation"
      ],
      "exercises": [
        "Regular moderate aerobic exercise (brisk walking, cycling, swimming 30 minutes 5 days a week) boosts CD4 counts and cardiovascular health",
        "Progressive resistance training (weight training) is vital to preserve lean muscle mass and prevent lipodystrophy",
        "Gentle stretching and yoga for stress reduction and mental well-being"
      ],
      "lifestyle": [
        "Take your ART tablet at the EXACT same time every single day — strict adherence prevents drug resistance",
        "Get routine blood tests (Viral Load and CD4 count) every 3 to 6 months",
        "Maintain active, open communication with your infectious disease physician",
        "Remember U=U: Achieving an undetectable viral load protects your health and protects your partners completely"
      ],
      "whenToConsult": "Seek IMMEDIATE emergency medical care if you have HIV and develop shortness of breath, severe headache, confusion, or high fever. Consult a physician within 72 hours of any potential sexual or needle exposure for PEP.",
      "faqs": [
        {
          "q": "What does 'Undetectable = Untransmittable' (U=U) mean?",
          "a": "Multiple massive global clinical trials (including the PARTNER studies) involving tens of thousands of sexual acts have proven that when a person with HIV takes ART and maintains an undetectable viral load (< 200 copies/mL) for at least 6 months, they CANNOT pass HIV to their sexual partners. Zero transmissions occurred."
        },
        {
          "q": "Is HIV still a death sentence?",
          "a": "No! With modern single-tablet antiretroviral therapy, HIV is now a manageable chronic health condition. A person diagnosed today and started on ART has the exact same life expectancy as someone without HIV."
        }
      ],
      "references": [
        "U.S. Department of Health and Human Services (HHS) Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents with HIV",
        "World Health Organization (WHO) Consolidated Guidelines on HIV Prevention, Testing, Treatment, Service Delivery and Monitoring",
        "The Lancet HIV Commission on Antiretroviral Therapy and Global Viral Suppression"
      ]
    },
    {
      "id": "fever-infection",
      "name": "Acute Fever & Viral Syndrome",
      "name_ml": "സാധാരണ വൈറൽ പനി (ഫീവർ)",
      "name_hi": "सामान्य वायरल बुखार (तीव्र संक्रमण)",
      "name_ar": "الحمى الحادة والمتلازمة الفيروسية",
      "category": "infectious",
      "badge": "Acute Febrile Response",
      "icon": "thermometer",
      "shortDesc": "A temporary elevation in body core temperature above normal range, representing a coordinated immune defense response to infection.",
      "whatIsIt": "Fever (Pyrexia) is a regulated elevation of the body's hypothalamic core temperature set-point above the normal physiological baseline (> 100.4°F / 38.0°C). Rather than being a disease in itself, fever is an ancient, highly evolved physiological defense mechanism orchestrated by the immune system to inhibit viral/bacterial replication and accelerate enzymatic immune cascades.",
      "causes": [
        "Release of endogenous pyrogens (Interleukin-1, Interleukin-6, TNF-alpha) by activated monocytes and macrophages",
        "Prostaglandin E2 (PGE2) synthesis in the organum vasculosum laminae terminalis (OVLT) resetting the hypothalamic thermostat",
        "Viral upper respiratory tract infections (Rhinovirus, Adenovirus, Parainfluenza, Enteroviruses)",
        "Acute bacterial infections (UTIs, tonsillitis, otitis media, skin cellulitis)",
        "Drug fevers, post-vaccination immune activation, and autoimmune flare-ups"
      ],
      "symptoms": [
        "Core body temperature reading > 100.4°F (38.0°C) orally or rectally",
        "Shivering, feeling cold, and goosebumps (cutis anserina) as the body raises temperature toward the new set-point",
        "Flushed, warm, radiant skin and facial redness",
        "Tachycardia (heart rate increases by roughly 10 beats per minute for every 1°C rise in temperature)",
        "Sweating, diaphoresis, and thirst as temperature breaks",
        "Headache, mild generalized muscle aches, and decreased appetite"
      ],
      "warningSigns": [
        "EMERGENCY RED FLAGS IN ADULTS: Fever with stiff neck, photophobia, and confusion (Meningitis warning)",
        "Petechial or purpuric rash that does NOT blanch (fade) under glass pressure test (Meningococcemia emergency)",
        "Severe shortness of breath, chest pain, or SpO2 < 93%",
        "FEVER IN INFANTS UNDER 3 MONTHS: Any rectal temperature >= 100.4°F requires immediate hospital evaluation for neonatal sepsis",
        "Febrile Convulsions in toddlers: Brief generalized seizure during rapid temperature spikes"
      ],
      "riskFactors": [
        "Daycare attendance, school environments, and crowded living quarters",
        "Lack of immunizations or recent exposure to sick contacts",
        "Immunocompromised states, diabetes, or chronic corticosteroid use"
      ],
      "bodyImpact": "Moderate fever enhances neutrophil phagocytosis, stimulates antibody production, and hinders temperature-sensitive viral replication. However, hyperpyrexia (> 105°F / 41°C) can cause cellular protein denaturation, central nervous system depression, extreme metabolic demand, and severe dehydration.",
      "diagnosis": [
        "Accurate core temperature measurement (Digital oral, tympanic, or rectal thermometer)",
        "Complete clinical physical exam: Throat inspection, otoscopy (ears), lung auscultation, abdominal palpation, and urine analysis",
        "Complete Blood Count (CBC) and CRP to distinguish viral from bacterial infection",
        "Rapid viral panels or blood cultures if high persistent fever lacks obvious source"
      ],
      "treatments": [
        "Hydration: Aggressive oral fluid replacement (water, electrolytes, broths) is more important than medication",
        "First-Line Antipyretics: Paracetamol / Acetaminophen (10-15 mg/kg per dose in children; 500-1000 mg in adults every 4-6 hours, maximum 3-4 grams/day)",
        "NSAIDs: Ibuprofen (10 mg/kg in children > 6 months; 400 mg in adults) — DO NOT USE if Dengue is suspected",
        "NEVER GIVE ASPIRIN to children or adolescents under age 19 due to the risk of fatal Reye's Syndrome",
        "Comfort measures: Light clothing, room temperature 68-72°F (20-22°C), tepid water sponge bathing (DO NOT use ice or rubbing alcohol!)"
      ],
      "prevention": "Practice meticulous handwashing with soap and water, keep household vaccinations up-to-date, avoid touching eyes and mouth with unwashed hands, and isolate from family members during acute contagious respiratory fevers.",
      "safeFoods": [
        "Plenty of fluids: Oral Rehydration Salts (ORS), tender coconut water, diluted fruit juices, clear soups",
        "Warm rice porridge (kanji) with a pinch of salt and ginger",
        "Soft bananas, boiled applesauce, and plain yogurt",
        "Herbal teas (tulsi, ginger, chamomile) with honey (honey only for children > 1 year)",
        "Easily digestible light meals eaten only when appetite dictates"
      ],
      "avoidFoods": [
        "Aspirin in anyone under 19 years old (Reye's syndrome risk)",
        "Dehydrating caffeinated sodas and sugary energy drinks",
        "Heavy, rich, deep-fried fast foods and spicy curries",
        "Force-feeding a child or adult who has no appetite during acute fever"
      ],
      "exercises": [
        "STRICT PHYSICAL BED REST while fever is present",
        "Do NOT attempt to 'sweat out a fever' through intense exercise or heavy blankets — this dangerously overheats core body organs",
        "Gradual resumption of light activities only after fever has remained normal for 24-48 hours without antipyretics"
      ],
      "lifestyle": [
        "Dress in a single layer of light, breathable cotton clothing — do not bundle under heavy blankets",
        "Keep the bedroom well-ventilated and pleasantly cool",
        "Measure temperature every 4 to 6 hours and record readings in a fever log",
        "Wash hands frequently and use separate drinking cups and towels"
      ],
      "whenToConsult": "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY if fever is accompanied by difficulty breathing, stiff neck, confusion, purple spots on skin, or if an infant under 3 months has a fever >= 100.4°F (38.0°C).",
      "faqs": [
        {
          "q": "Is fever dangerous and will it damage the brain?",
          "a": "Normal fevers caused by infections (under 104°F / 40°C) do not cause brain damage. In fact, moderate fever helps the body fight off the infection. Brain damage only occurs with extreme environmental hyperthermia (like heat stroke) exceeding 107°F (41.7°C)."
        },
        {
          "q": "Why should rubbing alcohol never be used for a fever sponge bath?",
          "a": "Rubbing alcohol is absorbed through a child's skin and can be inhaled into the lungs, causing acute alcohol poisoning, metabolic acidosis, and coma. Always use comfortable lukewarm (tepid) tap water only."
        }
      ],
      "references": [
        "American Academy of Pediatrics (AAP) Clinical Report: Fever and Antipyretic Use in Children",
        "NICE Clinical Guideline: Fever in Under 5s: Assessment and Initial Management",
        "CDC Clinical Guidance on Managing Viral Febrile Illnesses"
      ]
    },
    {
      "id": "breast-cancer",
      "name": "Breast Cancer (Mammary Carcinoma)",
      "name_ml": "സ്തനാർബുദം (ബ്രെസ്റ്റ് കാൻസർ)",
      "name_hi": "स्तन कैंसर (ब्रेस्ट कैंसर)",
      "name_ar": "سرطان الثدي",
      "category": "cancer",
      "badge": "Common Female Malignancy",
      "icon": "ribbon",
      "shortDesc": "Malignant cellular proliferation originating in breast tissue, primarily in the milk ducts (ductal) or lobules.",
      "whatIsIt": "Breast cancer is the most frequently diagnosed cancer in women globally. It arises from the uncontrolled clonal growth of abnormal epithelial cells lining the breast lobules (milk-producing glands) or ducts (passages draining milk to the nipple). Subtypes are determined by molecular receptor expression: Hormone Receptor-positive (ER+/PR+), Human Epidermal Growth Factor Receptor 2-positive (HER2+), and Triple-Negative Breast Cancer (TNBC).",
      "causes": [
        "Accumulation of somatic DNA mutations in breast epithelial cells",
        "High lifetime exposure to endogenous estrogens (early menarche before age 12, late menopause after 55, nulliparity, late first pregnancy after 30)",
        "Inherited germline pathogenic variants in BRCA1 and BRCA2 tumor suppressor genes (lifetime risk up to 70-80%)",
        "Other genetic mutations: PALB2, TP53, CHEK2, PTEN",
        "Postmenopausal hormone replacement therapy (HRT) and thoracic radiation exposure in youth"
      ],
      "symptoms": [
        "A new, painless, firm or hard lump or thickening in the breast or axilla (armpit) with irregular margins",
        "Change in the size, contour, or symmetry of the breast",
        "Skin dimpling, puckering, or tethering ('peau d'orange' resembling an orange peel)",
        "Nipple changes: Recent spontaneous nipple retraction, inversion, or scaling/eczematous ulceration (Paget's disease)",
        "Spontaneous clear, serous, or bloody discharge from a single duct in one nipple",
        "Persistent localized breast pain (though most breast cancers are initially painless)"
      ],
      "warningSigns": [
        "Inflammatory Breast Cancer: Rapidly progressive breast redness, swelling, warmth, and purple erythema mimicking mastitis (highly aggressive)",
        "Fixed, matted, hard lymph nodes in the supraclavicular fossa or axilla",
        "Bone pain, jaundice, shortness of breath, or neurological symptoms indicating distant metastases"
      ],
      "riskFactors": [
        "Female sex (women account for 99% of cases; men account for 1%)",
        "Advancing age (most cases diagnosed after age 50)",
        "Family history of breast or ovarian cancer in close relatives",
        "Dense breast tissue on mammography (masks tumors and independently increases risk)",
        "Postmenopausal obesity, sedentary lifestyle, and regular alcohol consumption"
      ],
      "bodyImpact": "Invasive ductal carcinoma breaches the basement membrane, invades lymphatic channels to sentinel axillary lymph nodes, and metastasizes hematogenously to bones (lytic/blastic lesions), lungs, liver, and brain.",
      "diagnosis": [
        "Screening and Diagnostic Digital Mammography (detects microcalcifications and architectural distortion years before palpable)",
        "Breast Ultrasound (distinguishes solid tumors from benign fluid cysts)",
        "Contrast-Enhanced Breast MRI (for high-risk BRCA carriers and dense breasts)",
        "Core Needle Biopsy (CNB) under ultrasound or stereotactic guidance (gold standard for histopathology)",
        "Immunohistochemistry (IHC) testing for Estrogen Receptor (ER), Progesterone Receptor (PR), HER2/neu, and Ki-67 proliferation index",
        "Next-Generation Genomic Assays (Oncotype DX, MammaPrint) to guide chemotherapy decisions"
      ],
      "treatments": [
        "Breast-Conserving Surgery (Lumpectomy) followed by whole-breast radiotherapy, or Total Mastectomy with reconstruction",
        "Sentinel Lymph Node Biopsy (SLNB) to assess axillary spread without full dissection",
        "Endocrine / Hormone Therapy for ER+ tumors: Selective Estrogen Receptor Modulators (Tamoxifen) or Aromatase Inhibitors (Anastrozole, Letrozole)",
        "HER2-Targeted Monoclonal Antibodies: Trastuzumab (Herceptin) and Pertuzumab",
        "Cytotoxic Neoadjuvant / Adjuvant Chemotherapy (Anthracyclines, Taxanes)",
        "PARP Inhibitors (Olaparib) for BRCA-mutated breast cancer; Immunotherapy (Pembrolizumab) for Triple-Negative disease"
      ],
      "prevention": "Regular screening mammograms starting between ages 40 and 50 reduce breast cancer mortality by over 25%. Maintain a healthy body weight post-menopause, engage in 150-300 minutes of weekly exercise, limit alcohol strictly, and consider prophylactic salpingo-oophorectomy / mastectomy for confirmed high-risk BRCA1/2 carriers.",
      "safeFoods": [
        "Cruciferous vegetables rich in diindolylmethane (DIM) and sulforaphane (broccoli, cauliflower, Brussels sprouts)",
        "High-fiber legumes, beans, and lentils (promote safe metabolic clearance of circulating estrogens)",
        "Colorful fruits and berries loaded with polyphenolic flavonoids",
        "Whole soy foods (edamame, tofu, tempeh) — contrary to old myths, dietary soy isoflavones are protective against breast cancer recurrence!",
        "Extra virgin olive oil and green tea"
      ],
      "avoidFoods": [
        "Alcohol consumption (even 1 drink daily measurably increases breast cancer risk by raising blood estrogen levels)",
        "Charred, grilled meats containing heterocyclic amines (HCAs)",
        "Ultra-processed packaged foods high in trans fats and industrial refined sugars",
        "Excessive high-fat red meats and processed sausages"
      ],
      "exercises": [
        "Regular aerobic exercise (brisk walking, swimming, cycling 45 minutes 4-5 times a week lowers risk of occurrence and recurrence by 20-30%)",
        "Resistance training to preserve muscle mass and counteract bone loss from aromatase inhibitors",
        "Post-operative arm mobility stretching to prevent lymphedema and shoulder frozen joint"
      ],
      "lifestyle": [
        "Perform monthly breast self-awareness checks (know how your breasts normally look and feel)",
        "Schedule annual or biennial screening mammograms beginning at age 40-50",
        "Maintain a body mass index (BMI) between 18.5 and 24.9 after menopause",
        "Breastfeed infants if possible (lactation for 12+ months significantly lowers lifetime breast cancer risk)"
      ],
      "whenToConsult": "Consult a breast surgeon or physician immediately if you feel a new breast or armpit lump, see skin dimpling, or notice spontaneous bloody nipple discharge. Over 80% of breast lumps are benign, but prompt evaluation is essential.",
      "faqs": [
        {
          "q": "Does eating soy increase the risk of breast cancer?",
          "a": "NO! This is an outdated myth. Large epidemiological studies (including the Shanghai Breast Cancer Survival Study) proved that consuming whole soy foods (tofu, edamame) does NOT increase breast cancer risk, and actually lowers the risk of cancer recurrence and mortality."
        },
        {
          "q": "Can men get breast cancer?",
          "a": "Yes. Men have breast tissue and can develop breast cancer, accounting for roughly 1% of all cases. Men who carry BRCA2 mutations, have liver cirrhosis (hyperestrogenism), or have Klinefelter syndrome are at higher risk."
        }
      ],
      "references": [
        "National Comprehensive Cancer Network (NCCN) Clinical Practice Guidelines in Oncology: Breast Cancer 2024",
        "American Cancer Society (ACS) Breast Cancer Screening Guidelines",
        "World Health Organization (WHO) Global Breast Cancer Initiative"
      ]
    },
    {
      "id": "prostate-cancer",
      "name": "Prostate Cancer (Prostatic Adenocarcinoma)",
      "name_ml": "പ്രോസ്റ്റേറ്റ് കാൻസർ",
      "name_hi": "प्रोस्टेट कैंसर (पौरुष ग्रंथि का कैंसर)",
      "name_ar": "سرطان البروستاتا",
      "category": "cancer",
      "badge": "Common Male Malignancy",
      "icon": "shield",
      "shortDesc": "Malignant transformation of glandular epithelial cells in the prostate gland of men, often slow-growing but capable of aggressive bone metastasis.",
      "whatIsIt": "Prostate cancer develops in the prostate—a walnut-sized exocrine gland situated below the bladder in front of the rectum that produces seminal fluid. It is the second most common cancer diagnosed in men worldwide. While many prostate tumors are slow-growing (indolent) and remain confined to the gland for years, others are aggressive high-grade cancers that rapidly metastasize to pelvic lymph nodes and the skeletal system.",
      "causes": [
        "Accumulation of somatic genetic alterations in prostatic glandular epithelium (TMPRSS2-ERG gene fusions, PTEN deletion)",
        "High circulating androgen (testosterone and dihydrotestosterone - DHT) signaling driving cellular proliferation",
        "Inherited germline mutations: BRCA2 (associated with aggressive early-onset disease), HOXB13, ATM, CHEK2",
        "Chronic prostatic inflammation and oxidative cellular injury"
      ],
      "symptoms": [
        "Early localized prostate cancer is almost entirely asymptomatic",
        "Urinary hesitancy, weak or interrupted urinary stream",
        "Increased frequency of urination, particularly nocturia (waking up multiple times at night to urinate)",
        "Urgent need to urinate and feeling of incomplete bladder emptying",
        "Dysuria (burning sensation during urination) or painful ejaculation",
        "Hematuria (blood in urine) or Hematospermia (blood in semen)",
        "Erectile dysfunction"
      ],
      "warningSigns": [
        "Metastatic Bone Disease: Severe, persistent, deep aching pain in the spine, hips, ribs, or pelvis",
        "Spinal Cord Compression: Sudden leg weakness, numbness in legs, or acute urinary retention (Surgical Emergency)",
        "Pathological fractures from osteoblastic bone metastases"
      ],
      "riskFactors": [
        "Advancing age (rare before 40, but > 60% of cases occur in men aged 65 and older)",
        "Race/Ethnicity: Significantly higher incidence and mortality in Black men of African descent",
        "Family history: Having a father or brother with prostate cancer doubles personal risk",
        "Diet high in saturated animal fats and low in fresh fruits and vegetables",
        "Inherited BRCA1/BRCA2 genetic mutations"
      ],
      "bodyImpact": "Aggressive adenocarcinomas breach the prostatic capsule, invade seminal vesicles, obstruct bladder neck outflow, invade periprostatic nerve plexuses, and spread through Batson's venous plexus to the lumbar spine, pelvis, and femur, producing dense osteoblastic sclerotic lesions.",
      "diagnosis": [
        "Prostate-Specific Antigen (PSA) blood test: Serum total PSA, Free PSA percentage, and PSA Velocity",
        "Digital Rectal Examination (DRE) assessing for asymmetrical firmness, induration, or nodules",
        "Multiparametric MRI (mpMRI) of the prostate using PI-RADS v2.1 scoring (Prostate Imaging-Reporting and Data System)",
        "MRI-Ultrasound Fusion Targeted Transperineal / Transrectal Core Needle Biopsy",
        "Gleason Score and ISUP Grade Groups (Grade Group 1 to 5) determined by biopsy histopathology",
        "PSMA-PET Scan (Prostate-Specific Membrane Antigen PET/CT) for precise whole-body staging"
      ],
      "treatments": [
        "Active Surveillance: Close, structured monitoring (serial PSA, repeat mpMRI, biopsies) for low-risk, indolent tumors (avoids side effects of treatment)",
        "Radical Prostatectomy: Robotic-Assisted Laparoscopic Prostatectomy (RALP) with nerve-sparing technique",
        "Radiation Therapy: External Beam Radiation Therapy (EBRT) or Brachytherapy (radioactive seed implants)",
        "Androgen Deprivation Therapy (ADT): GnRH agonists/antagonists (Leuprolide, Degarelix, Relugolix) to starve tumors of testosterone",
        "Novel Androgen Receptor Pathway Inhibitors (ARPIs: Enzalutamide, Apalutamide, Darolutamide, Abiraterone)",
        "Pluvicto (Lutetium-177 PSMA radioligand therapy) for metastatic castration-resistant prostate cancer (mCRPC)"
      ],
      "prevention": "Adopt a plant-forward Mediterranean diet, consume foods rich in lycopene (cooked tomatoes), engage in regular aerobic and strength exercise, maintain a healthy waistline, and discuss the benefits and risks of PSA screening with your physician starting at age 45-50 (or age 40 for Black men or those with family history).",
      "safeFoods": [
        "Cooked tomatoes, tomato paste, and tomato sauce (rich in lycopene, a potent antioxidant carotenoid that accumulates in prostate tissue)",
        "Cruciferous vegetables (broccoli, cauliflower, kale) containing sulforaphane",
        "Green tea (rich in epigallocatechin gallate - EGCG)",
        "Cold-water fatty fish providing Omega-3 fatty acids",
        "Legumes, lentils, and flaxseeds (rich in phytoestrogenic lignans)"
      ],
      "avoidFoods": [
        "High intake of dairy products and excessive dietary calcium (> 1,500 mg/day associated with higher advanced prostate cancer risk)",
        "Processed deli meats, bacon, and sausages containing carcinogenic nitrosamines",
        "Charred and well-done grilled meats",
        "Excessive saturated fats and fast foods"
      ],
      "exercises": [
        "Vigorous aerobic exercise: Brisk walking, jogging, cycling 30-45 minutes 4-5 times a week (slows progression in active surveillance)",
        "Progressive resistance training (crucial to counteract muscle loss, fatigue, and osteopenia caused by hormone deprivation therapy)",
        "Pelvic floor muscle exercises (Kegels) before and after surgery to accelerate urinary continence recovery"
      ],
      "lifestyle": [
        "Engage in shared decision-making regarding PSA screening starting at age 50 (or age 40-45 if high-risk)",
        "Quit smoking completely (smoking significantly increases the risk of aggressive and fatal prostate cancer)",
        "Maintain a healthy body weight and avoid visceral belly fat",
        "Practice daily pelvic floor exercises to support urinary and sexual health"
      ],
      "whenToConsult": "Consult a urologist if you experience trouble urinating, notice blood in your urine or semen, or have persistent unexplained deep back or hip pain.",
      "faqs": [
        {
          "q": "Does a high PSA level always mean I have prostate cancer?",
          "a": "No! An elevated PSA (e.g., > 4.0 ng/mL) can be caused by benign conditions like Benign Prostatic Hyperplasia (enlarged prostate), Prostatitis (infection/inflammation), recent ejaculation, or vigorous cycling. An mpMRI scan and biopsy are needed to confirm cancer."
        },
        {
          "q": "What does 'Active Surveillance' mean, and is it safe to not treat cancer immediately?",
          "a": "Active surveillance is safe and standard for low-risk, slow-growing prostate cancers. Instead of rushing to surgery (which carries risks of impotence and incontinence), doctors monitor the cancer closely with PSA tests, MRIs, and biopsies, treating only if the cancer shows signs of growth."
        }
      ],
      "references": [
        "AUA/ASTRO/SUO Guideline: Diagnosis and Management of Non-Metastatic Prostate Cancer",
        "European Association of Urology (EAU) Guidelines on Prostate Cancer 2024",
        "U.S. Preventive Services Task Force (USPSTF) Prostate Cancer Screening Recommendation"
      ]
    },
    {
      "id": "colorectal-cancer",
      "name": "Colorectal Cancer (Colon & Rectal Cancer)",
      "name_ml": "വൻകുടൽ കാൻസർ (കൊളോറെക്ടൽ കാൻസർ)",
      "name_hi": "कोलोरेक्टल कैंसर (बड़ी आंत और मलाशय का कैंसर)",
      "name_ar": "سرطان القولون والمستقيم",
      "category": "cancer",
      "badge": "Screenable Malignancy",
      "icon": "disc",
      "shortDesc": "Malignant neoplastic disease developing from the inner epithelial lining of the large intestine (colon) or rectum, typically arising from pre-cancerous adenomatous polyps.",
      "whatIsIt": "Colorectal cancer (CRC) starts in the colon or the rectum. Almost all colorectal cancers begin as small, non-cancerous clumps of cells called adenomatous polyps on the inner glandular lining (mucosa) of the large intestine. Over a period of 5 to 15 years, some of these polyps acquire cumulative genetic mutations and transform into invasive adenocarcinomas.",
      "causes": [
        "Adenoma-to-Carcinoma sequence: Sequential mutations in APC (adenomatous polyposis coli), KRAS, and TP53 tumor suppressor genes",
        "Microsatellite Instability (MSI-H) and Mismatch Repair Deficiency (dMMR)",
        "Inherited hereditary syndromes: Lynch Syndrome (HNPCC) and Familial Adenomatous Polyposis (FAP)",
        "Long-standing Inflammatory Bowel Disease (Ulcerative Colitis, Crohn's colitis)",
        "Westernized diet high in processed/red meats and low in dietary fiber"
      ],
      "symptoms": [
        "Often entirely silent in early, curable stages (which is why routine screening is essential)",
        "A persistent change in bowel habits: Diarrhea, constipation, or narrowing of stool caliber ('pencil-thin stools') lasting weeks",
        "Rectal bleeding with bright red blood, or dark/black tarry stools (melena)",
        "Persistent abdominal discomfort, cramping, fullness, or painful gas",
        "Feeling that the bowel does not empty completely after a bowel movement (Tenesmus)",
        "Unexplained iron deficiency anemia resulting in chronic fatigue and paleness",
        "Unintended significant weight loss"
      ],
      "warningSigns": [
        "Acute bowel obstruction: Severe obstipation, abdominal distension, intractable vomiting, and obstipation",
        "Large-volume lower gastrointestinal bleeding causing hemodynamic shock",
        "Bowel perforation causing generalized peritonitis"
      ],
      "riskFactors": [
        "Age: Rising steeply after age 45-50 (though alarming increases are occurring in young adults aged 20-49)",
        "Personal or family history of colorectal polyps or colorectal cancer",
        "High consumption of red meat (beef, pork) and processed charcuterie (bacon, sausages, hot dogs)",
        "Physical inactivity, abdominal obesity, and Type 2 diabetes",
        "Heavy alcohol consumption and cigarette smoking"
      ],
      "bodyImpact": "Malignant cells penetrate the muscularis mucosae into the submucosa, invade mesenteric lymphatic channels, obstruct the bowel lumen, and spread via the portal venous circulation directly to the liver (the most common distant metastatic site), as well as to lungs and peritoneum.",
      "diagnosis": [
        "Screening Colonoscopy (gold standard: allows direct visualization AND simultaneous endoscopic removal/polypectomy of pre-cancerous polyps)",
        "Fecal Immunochemical Test (FIT): Annual stool test detecting microscopic occult human hemoglobin",
        "Stool DNA-FIT Test (Cologuard: detects hemoglobin plus methylated DNA biomarkers)",
        "Contrast-Enhanced CT of Chest, Abdomen, and Pelvis for clinical staging",
        "High-Resolution Pelvic MRI for rectal cancer local staging (depth of invasion and mesorectal fascia margin)",
        "Molecular profiling: Testing for MMR/MSI status, KRAS, NRAS, BRAF V600E mutations, and HER2 amplification"
      ],
      "treatments": [
        "Endoscopic Polypectomy or Endoscopic Mucosal Resection (EMR) for early mucosal polyps",
        "Surgical Resection: Partial Colectomy (Hemicolectomy / Sigmoidectomy) with high regional lymph node dissection",
        "For Rectal Cancer: Total Mesorectal Excision (TME) preceded by neoadjuvant chemoradiation (Total Neoadjuvant Therapy - TNT)",
        "Adjuvant Chemotherapy: FOLFOX (Oxaliplatin + 5-Fluorouracil + Leucovorin) or CAPOX",
        "Targeted Biological Therapies: Anti-VEGF (Bevacizumab) or Anti-EGFR (Cetuximab/Panitumumab for KRAS-wild-type tumors)",
        "Immune Checkpoint Inhibitors (Pembrolizumab, Dostarlimab): Astonishing ~100% complete clinical response rates in dMMR/MSI-High colorectal cancers!"
      ],
      "prevention": "Screening colonoscopy starting at age 45 is the ultimate preventive tool because it detects and REMOVES precancerous polyps before they ever have the chance to become cancer. Eat at least 30-35 grams of fiber daily, limit red meat, eliminate processed meats, maintain active physical fitness, and avoid tobacco.",
      "safeFoods": [
        "High-fiber whole foods: Oats, barley, beans, lentils, chickpeas, brown rice (fermented into protective butyrate by gut bacteria)",
        "Cruciferous vegetables (broccoli, Brussels sprouts, kale)",
        "Calcium and Vitamin D rich foods (dairy, fortified plant milks) — calcium binds toxic bile acids in the colon",
        "Fresh berries, apples, pears, and garlic",
        "Adequate clean water to maintain smooth daily bowel movements"
      ],
      "avoidFoods": [
        "Processed cured meats: Bacon, hot dogs, sausages, ham, salami (classified by WHO as Group 1 known human carcinogens)",
        "Excessive red meat (beef, pork, lamb — limit to less than 350-500 grams cooked per week)",
        "Alcohol in all forms (alcohol metabolizes to carcinogenic acetaldehyde in the gut)",
        "Charred, flame-broiled meats containing polycyclic aromatic hydrocarbons (PAHs)",
        "Refined white flour products and sugary sodas that promote gut dysbiosis"
      ],
      "exercises": [
        "Regular vigorous or moderate aerobic exercise (brisk walking, jogging, cycling 30-40 minutes daily lowers colon cancer risk by up to 25-30%)",
        "Resistance and strength training to maintain metabolic insulin sensitivity",
        "Avoid prolonged unbroken sitting (sedentary desk posture slows colonic transit time)"
      ],
      "lifestyle": [
        "GET SCREENED AT AGE 45: Follow updated national guidelines to begin routine colon cancer screening at age 45 (or 40 if you have family history)",
        "Never ignore rectal bleeding by assuming it is 'just hemorrhoids' without an exam",
        "Maintain a healthy waistline and avoid visceral belly fat",
        "Quit smoking completely (smoking increases both polyp formation and cancer recurrence)"
      ],
      "whenToConsult": "Consult a gastroenterologist or doctor immediately if you notice blood in your stool, experience a change in bowel habits lasting more than 2-3 weeks, or develop unexplained fatigue and iron deficiency anemia.",
      "faqs": [
        {
          "q": "Why did the screening age for colon cancer drop from 50 to 45?",
          "a": "Major medical organizations (ACS, USPSTF) lowered the recommended screening age to 45 because colorectal cancer rates have been rising sharply in younger adults, while screening at 45 catches and removes pre-cancerous polyps before cancer develops."
        },
        {
          "q": "What makes colonoscopy different from other cancer tests?",
          "a": "Most cancer screening tests (like mammograms or PSA tests) only detect cancer after it has already formed. A colonoscopy actually PREVENTS cancer from ever developing, because the doctor identifies and snips off precancerous polyps during the procedure."
        }
      ],
      "references": [
        "U.S. Preventive Services Task Force (USPSTF) Colorectal Cancer Screening Recommendations",
        "National Comprehensive Cancer Network (NCCN) Guidelines in Oncology: Colon Cancer 2024",
        "American Cancer Society Colorectal Cancer Statistics and Guidelines"
      ]
    },
    {
      "id": "cervical-cancer",
      "name": "Cervical Cancer (Cervical Carcinoma)",
      "name_ml": "സെർവിക്കൽ കാൻസർ (ഗർഭാശയമുഖ അർബുദം)",
      "name_hi": "ग्रीवा कैंसर (सर्वाइकल कैंसर)",
      "name_ar": "سرطان عنق الرحم",
      "category": "cancer",
      "badge": "Preventable Malignancy",
      "icon": "shield-alert",
      "shortDesc": "Malignant neoplasm of the uterine cervix almost universally caused by persistent infection with high-risk Human Papillomavirus (HPV).",
      "whatIsIt": "Cervical cancer develops in the cervix (the lower part of the uterus that connects to the vagina). It is unique among cancers because virtually all cases (> 99%) are directly caused by long-standing, persistent infection with high-risk oncogenic types of the Human Papillomavirus (HPV). It is one of the most preventable and curable forms of cancer when identified early through vaccination and screening.",
      "causes": [
        "Persistent cervical infection with High-Risk oncogenic HPV types (predominantly HPV-16 and HPV-18, responsible for ~70% of cases worldwide)",
        "Viral integration: High-risk HPV oncoproteins E6 and E7 inactivate host tumor suppressor proteins p53 and pRb (retinoblastoma), disabling cell cycle arrest and apoptosis",
        "Cigarette smoking (tobacco byproducts concentrate in cervical mucus, paralyzing local Langerhans immune cells)",
        "Immunosuppression (HIV infection dramatically increases cervical cancer progression risk by 6-fold)"
      ],
      "symptoms": [
        "Early pre-cancerous changes and early-stage cervical cancer are completely symptomless",
        "Post-coital bleeding (abnormal vaginal bleeding occurring immediately after sexual intercourse)",
        "Abnormal intermenstrual bleeding (spotting between regular menstrual periods)",
        "Postmenopausal bleeding (any vaginal bleeding occurring after menopause is an abnormal alarm sign)",
        "Abnormal foul-smelling, watery, or blood-tinged vaginal discharge",
        "Pelvic pain or pain during sexual intercourse (dyspareunia)"
      ],
      "warningSigns": [
        "Severe unremitting pelvic, lower back, or flank pain (indicating tumor invasion into sciatic nerve roots or pelvic sidewall)",
        "Unilateral leg swelling / lymphedema due to pelvic lymph node obstruction",
        "Hydronephrosis and renal failure caused by tumor compressing the ureters",
        "Rectovaginal or vesicovaginal fistulas in advanced disease"
      ],
      "riskFactors": [
        "Persistent high-risk HPV infection without clearance",
        "Lack of regular Pap smear or HPV DNA screening",
        "Active tobacco smoking",
        "HIV/AIDS infection or other chronic immunosuppressive therapy",
        "Early age at first sexual intercourse and multiple sexual partners",
        "Long-term use of combined oral contraceptives (> 5 years without screening)"
      ],
      "bodyImpact": "Cervical Intraepithelial Neoplasia (CIN 1, CIN 2, CIN 3) breaches the basement membrane into invasive squamous cell carcinoma (~80%) or adenocarcinoma (~20%). It invades paracervical tissues, parametrium, vagina, bladder, rectum, and regional pelvic/para-aortic lymph nodes.",
      "diagnosis": [
        "High-Risk HPV DNA Testing (molecular screening detecting oncogenic HPV genotypes 16, 18, and 12 other high-risk types)",
        "Cervical Cytology (Pap Smear / Liquid-Based Cytology - LBC) detecting dysplastic cellular changes (LSIL, HSIL, ASCUS)",
        "Colposcopy with directed cervical biopsies and Endocervical Curettage (ECC)",
        "Loop Electrosurgical Excision Procedure (LEEP) or Cold Knife Conization for definitive histopathology",
        "Pelvic MRI and PET-CT for clinical staging according to FIGO criteria"
      ],
      "treatments": [
        "Cervical Pre-cancer (CIN 2/3): Outpatient excisional ablation (LEEP or Cold Knife Cone Biopsy)",
        "Early Invasive Stage (FIGO I): Radical Hysterectomy with pelvic lymphadenectomy, or Fertility-Sparing Radical Trachelectomy",
        "Locally Advanced Stages (FIGO IB3 to IVA): Definitive Concurrent Chemoradiotherapy (CCRT: Cisplatin given weekly alongside External Beam Radiation followed by Intracavitary Brachytherapy)",
        "Metastatic Disease: Platinum-based chemotherapy plus Anti-VEGF (Bevacizumab) and Immunotherapy (Pembrolizumab)"
      ],
      "prevention": "Cervical cancer is almost ENTIRELY ELIMINABLE as a public health problem through the WHO 90-70-90 Global Strategy: (1) 90% of girls fully vaccinated with HPV vaccine by age 15; (2) 70% of women screened with a high-performance HPV test at ages 35 and 45; and (3) 90% of women with pre-cancer/cancer treated. Practice safe sexual practices and stop smoking.",
      "safeFoods": [
        "Antioxidant-rich colorful vegetables and fruits (papayas, oranges, bell peppers)",
        "Folate-rich dark leafy greens (spinach, kale, asparagus) — adequate folate supports genomic DNA methylation",
        "Cruciferous vegetables containing indole-3-carbinol",
        "Green tea rich in polyphenols",
        "Wholesome Mediterranean dietary pattern"
      ],
      "avoidFoods": [
        "Tobacco smoking (the most important chemical cofactor — tobacco carcinogens directly damage cervical cell DNA)",
        "Excessive alcohol consumption",
        "Ultra-processed packaged foods high in trans fats and sodium",
        "Unhealthy crash starvation diets that deplete immune resistance"
      ],
      "exercises": [
        "Regular moderate physical activity (brisk walking, swimming, light cycling 30 minutes 5 days a week) optimizes immune surveillance against viral infections",
        "Pelvic floor physical therapy to regain pelvic muscle tone after cervical surgery or radiation",
        "Gentle stretching and restorative yoga"
      ],
      "lifestyle": [
        "VACCINATE: Administer the 9-valent HPV vaccine (Gardasil-9) to all boys and girls aged 9 to 14 (recommended up to age 26, and approved up to age 45)",
        "GET SCREENED: Undergo HPV DNA testing every 5 years (or Pap smear every 3 years) starting at age 21-25",
        "Completely quit smoking to enable your immune system to clear latent HPV infections",
        "Never ignore post-coital or postmenopausal bleeding"
      ],
      "whenToConsult": "Consult a gynecologist immediately if you experience bleeding after sex, bleeding between periods, any bleeding after menopause, or unusual persistent vaginal discharge.",
      "faqs": [
        {
          "q": "Can the HPV vaccine really eliminate cervical cancer?",
          "a": "YES! National health data from countries with high vaccination rates (such as Australia and the UK) show that vaccinating young girls and boys before sexual debut has reduced cervical cancer and pre-cancer rates by nearly 90%."
        },
        {
          "q": "If I already had the HPV vaccine, do I still need Pap smears or HPV tests?",
          "a": "Yes. While the 9-valent vaccine protects against the types responsible for ~90% of cervical cancers, it does not cover every single rare high-risk strain. Routine screening remains essential to catch any rare anomalies early."
        }
      ],
      "references": [
        "World Health Organization (WHO) Global Strategy to Accelerate the Elimination of Cervical Cancer",
        "American College of Obstetricians and Gynecologists (ACOG) Cervical Cancer Screening Guidelines",
        "Society of Gynecologic Oncology (SGO) Practice Guidelines"
      ]
    },
    {
      "id": "skin-cancer",
      "name": "Skin Cancer & Melanoma",
      "name_ml": "ത്വക്ക് കാൻസർ & മെലനോമ",
      "name_hi": "त्वचा का कैंसर और मेलेनोमा",
      "name_ar": "سرطان الجلد والميلانوما",
      "category": "cancer",
      "badge": "Cutaneous Malignancy",
      "icon": "sun",
      "shortDesc": "Malignant transformation of skin cells, categorized into Non-Melanoma Skin Cancer (Basal and Squamous) and highly invasive Cutaneous Melanoma.",
      "whatIsIt": "Skin cancer is the abnormal, uncontrolled growth of cutaneous cells, almost universally triggered by ultraviolet (UV) radiation from sunlight or tanning beds. The primary types are Basal Cell Carcinoma (BCC: most common, locally invasive, pearly papule), Squamous Cell Carcinoma (SCC: crusted/scaly red nodule), and Malignant Melanoma (the deadliest form, originating from pigment-producing melanocytes).",
      "causes": [
        "Ultraviolet radiation (UVB causing direct DNA pyrimidine dimers; UVA generating reactive oxygen species)",
        "History of severe, blistering sunburns, particularly during childhood and adolescence",
        "Use of indoor artificial UV tanning beds (dramatically spikes melanoma risk)",
        "Somatic driver mutations: BRAF V600E (in ~50% of melanomas), NRAS, KIT, and CDKN2A germline mutations"
      ],
      "symptoms": [
        "The ABCDE Rule for Melanoma Detection:",
        "A - ASYMMETRY: One half of the mole or spot does not match the other half",
        "B - BORDER: Irregular, scalloped, notched, or blurred borders",
        "C - COLOR: Uneven color with varying shades of brown, black, tan, red, white, or blue",
        "D - DIAMETER: Larger than 6 millimeters (about the size of a pencil eraser), though melanomas can be smaller",
        "E - EVOLVING: The most critical sign — any mole or skin spot that is changing in size, shape, color, or elevation, or that begins to bleed, itch, or crust",
        "The 'Ugly Duckling' Sign: A mole that looks distinctly different from all other moles on the patient's body",
        "Non-Melanoma signs: A pearly, translucent bump with telangiectasias (BCC), or a persistent, non-healing, scaly red sore that bleeds easily (SCC)"
      ],
      "warningSigns": [
        "Rapidly enlarging pigmented nodule with ulceration and spontaneous bleeding",
        "Nodular Melanoma: Aggressive vertical growth without a preceding flat radial phase",
        "Firm, enlarged regional lymph nodes in the groin, axilla, or neck",
        "Subungual Melanoma: A dark vertical brown/black streak under a fingernail or toenail (Hutchinson's sign)"
      ],
      "riskFactors": [
        "Fair skin, light-colored eyes (blue/green), blond or red hair, and high tendency to burn/freckle",
        "Presence of more than 50 common moles or presence of atypical / dysplastic nevi",
        "Personal or family history of melanoma or other skin cancers",
        "Organ transplant recipients on chronic immunosuppression (65-fold increased risk of SCC)",
        "Excessive lifetime cumulative sun exposure and outdoor occupations without UV protection"
      ],
      "bodyImpact": "While BCC rarely metastasizes, neglected tumors cause extensive local tissue destruction ('rodent ulcer'). Melanoma invades vertically through the dermo-epidermal junction (Breslow thickness), spreads into cutaneous lymphatic channels (satellite and in-transit metastases), and disseminates hematogenously to lungs, liver, brain, and bones.",
      "diagnosis": [
        "Full-Body Dermatological Examination using handheld Polarized Dermoscopy",
        "Excisional Biopsy with 1-3 mm margins (gold standard: complete removal allows accurate Breslow thickness measurement; superficial shave biopsy is discouraged for suspected melanoma)",
        "Histopathology: Breslow depth of invasion (measured in millimeters — the single strongest prognostic indicator), ulceration, and mitotic rate",
        "Sentinel Lymph Node Biopsy (SLNB) for melanomas >= 0.8 mm thick or thinner with ulceration",
        "Molecular testing: BRAF V600E/K mutation testing"
      ],
      "treatments": [
        "Wide Local Excision with standardized surgical margins (0.5 cm for in-situ, 1 cm for <= 1mm, 2 cm for > 2mm)",
        "Mohs Micrographic Surgery (exceptional tissue-sparing precision cure for BCC and SCC on face/ears)",
        "Adjuvant and Metastatic Immunotherapy: Dual Immune Checkpoint Blockade (Nivolumab + Ipilimumab or Pembrolizumab)",
        "Targeted Therapy: BRAF inhibitors (Dabrafenib, Encorafenib) combined with MEK inhibitors (Trametinib, Binimetinib) for BRAF-mutant melanoma",
        "Topical therapies for superficial skin cancers: Imiquimod cream, 5-Fluorouracil, or Photodynamic Therapy (PDT)"
      ],
      "prevention": "Practice rigorous sun safety: Apply broad-spectrum, water-resistant SPF 30+ sunscreen every 2 hours, seek shade between 10 AM and 4 PM, wear UV-protective clothing (UPF 50+), wide-brimmed hats, and UV400 sunglasses. NEVER use indoor tanning beds. Perform monthly head-to-toe skin self-examinations.",
      "safeFoods": [
        "Antioxidant-rich colorful produce: Carrots, sweet potatoes, and tomatoes (lycopene and carotenoids provide mild internal photo-protection against UV erythema)",
        "Cold-water fish high in Omega-3 fatty acids to dampen cutaneous inflammatory responses",
        "Green tea (contains EGCG which helps neutralize UV-generated reactive oxygen species)",
        "Nicotinamide (Vitamin B3: 500 mg twice daily has been proven in Phase 3 clinical trials to reduce new non-melanoma skin cancers by 23%)",
        "Abundant water to support skin barrier hydration"
      ],
      "avoidFoods": [
        "Relying on dietary supplements alone while skipping physical sunscreen and shade (no pill replaces sunscreen!)",
        "Alcohol consumption (alcohol intake has been correlated with increased melanoma risk due to acetaldehyde photosensitization)",
        "Ultra-processed packaged foods high in rancid trans fats and sugars"
      ],
      "exercises": [
        "Outdoor exercise: Schedule running, tennis, or cycling in the early morning before 9 AM or late afternoon after 4 PM to avoid peak UV index hours",
        "Wear lightweight long-sleeved UPF 50+ athletic shirts and UV running hats",
        "Swimming in indoor pools or using water-resistant sports sunscreen reapplied every 40-80 minutes"
      ],
      "lifestyle": [
        "Examine your skin from head to toe once a month in front of a full-length mirror with a handheld mirror for your back",
        "Look for any mole following the ABCDE rule or any new sore that fails to heal after 4 weeks",
        "Apply 1 ounce (a shot-glass full) of SPF 30+ broad-spectrum sunscreen 15 minutes before stepping outside",
        "Never allow children to get blistering sunburns"
      ],
      "whenToConsult": "Consult a dermatologist immediately if you discover a mole that is changing in size, shape, or color, has irregular jagged borders, or if you have a persistent bleeding bump that won't heal.",
      "faqs": [
        {
          "q": "Can people with dark skin get skin cancer?",
          "a": "YES. While higher melanin provides some natural protection against UV radiation, people with dark skin can and do get skin cancer. In fact, people of color are often diagnosed with Acral Lentiginous Melanoma—a dangerous melanoma that appears on sun-protected areas like the palms of the hands, soles of the feet, and under toenails."
        },
        {
          "q": "Do tanning beds cause cancer as much as natural sunlight?",
          "a": "Tanning beds are actually MORE dangerous than natural sunlight. Tanning lamps emit up to 10 to 15 times more intense UVA radiation than the midday sun. Using a tanning bed even once before age 35 increases your melanoma risk by 75%."
        }
      ],
      "references": [
        "American Academy of Dermatology (AAD) Guidelines of Care for the Management of Primary Cutaneous Melanoma",
        "NCCN Clinical Practice Guidelines in Oncology: Cutaneous Melanoma 2024",
        "Skin Cancer Foundation Clinical Prevention Protocols"
      ]
    },
    {
      "id": "thyroid-disorders",
      "name": "Thyroid Disorders (Hypo & Hyperthyroidism)",
      "name_ml": "തൈറോയ്ഡ് രോഗങ്ങൾ (ഹൈപ്പോ & ഹൈപ്പർതൈറോയിഡിസം)",
      "name_hi": "थायरॉयड विकार (हाइपो और हाइपरथायरायडिज्म)",
      "name_ar": "اضطرابات الغدة الدرقية",
      "category": "other",
      "badge": "Endocrine Dysfunction",
      "icon": "activity",
      "shortDesc": "Endocrine disorders characterized by abnormal synthesis of thyroid hormones (T3 and T4), disrupting systemic metabolic rate.",
      "whatIsIt": "The thyroid is a butterfly-shaped endocrine gland in the lower anterior neck that secretes thyroxine (T4) and triiodothyronine (T3), hormones that govern the basal metabolic rate of every cell in the human body. The two primary disorders are Hypothyroidism (underactive thyroid producing insufficient hormones, slowing metabolism) and Hyperthyroidism (overactive thyroid producing excess hormones, accelerating metabolism).",
      "causes": [
        "Hypothyroidism Causes: Hashimoto's Thyroiditis (autoimmune destruction with anti-TPO antibodies), iodine deficiency (worldwide), surgical thyroidectomy, radioactive iodine therapy, or lithium therapy",
        "Hyperthyroidism Causes: Graves' Disease (autoimmune TSH-receptor stimulating antibodies - TRAb), toxic multinodular goiter, toxic solitary adenoma, or subacute thyroiditis",
        "Pituitary dysfunction (secondary central hypothyroidism due to TSH deficiency)"
      ],
      "symptoms": [
        "Hypothyroidism Symptoms: Chronic fatigue, unexplained weight gain, extreme cold intolerance, constipation, dry coarse skin, brittle hair/alopecia, puffy face, bradycardia (slow heart rate), brain fog, memory lapses, and heavy/irregular menstrual bleeding (menorrhagia)",
        "Hyperthyroidism Symptoms: Unintentional rapid weight loss despite ravenous appetite, heat intolerance, profuse sweating, fine resting hand tremors, palpitations and tachycardia (resting heart rate > 100 bpm), anxiety, irritability, frequent bowel movements, oligomenorrhea, and Graves' Ophthalmopathy (proptosis/bulging eyes, diplopia)"
      ],
      "warningSigns": [
        "Myxedema Coma (Hypothyroid Emergency): Severe hypothermia, profound lethargy, hypoventilation, bradycardia, and coma (high mortality)",
        "Thyroid Storm (Hyperthyroid Emergency): Extreme hyperpyrexia (fever > 104°F), marked tachycardia / atrial fibrillation, delirium, agitation, and congestive heart failure",
        "Thyroid Nodule with rapid growth, hoarseness, and cervical lymphadenopathy (Thyroid Cancer alert)"
      ],
      "riskFactors": [
        "Female sex (women are 5 to 8 times more likely to develop thyroid disorders than men)",
        "Personal or family history of autoimmune diseases (Type 1 diabetes, celiac disease, vitiligo, pernicious anemia)",
        "Postpartum period (Postpartum Thyroiditis occurs in ~7% of women within 1 year of childbirth)",
        "Age over 60 years and excessive or deficient dietary iodine intake",
        "Prior radiation therapy to the neck or upper chest"
      ],
      "bodyImpact": "Thyroid hormones regulate myocardial contractility, vascular resistance, lipid turnover, bone remodeling, and thermogenesis. Untreated hypothyroidism accelerates LDL atherogenesis, heart failure, and ovulatory infertility. Untreated hyperthyroidism causes fatal high-output heart failure, atrial fibrillation, and severe osteoporosis.",
      "diagnosis": [
        "Serum Thyroid Stimulating Hormone (TSH) — the most sensitive first-line screening test (Elevated in primary hypothyroidism; suppressed < 0.01 in primary hyperthyroidism)",
        "Free Thyroxine (Free T4) and Free Triiodothyronine (Free T3)",
        "Autoantibody testing: Anti-Thyroperoxidase (Anti-TPO) and Anti-Thyroglobulin (Anti-Tg) for Hashimoto's; TSH-Receptor Antibodies (TRAb / TSI) for Graves' disease",
        "High-Resolution Thyroid Ultrasound assessing parenchyma echogenicity, nodules, and vascularity (TI-RADS scoring)",
        "Radioactive Iodine Uptake (RAIU) and scan to differentiate Graves' from thyroiditis"
      ],
      "treatments": [
        "For Hypothyroidism: Daily Levothyroxine (synthetic T4: e.g., Synthroid, Eltroxin) taken on an empty stomach with a full glass of water 30-60 minutes before breakfast; dose titrated to normalize serum TSH",
        "For Hyperthyroidism: Antithyroid Drugs (Thionamides: Methimazole or Propylthiouracil - PTU)",
        "Beta-Blockers (Propranolol, Atenolol) for rapid symptomatic control of hyperthyroid tremors, palpitations, and heat intolerance",
        "Radioactive Iodine Ablation (RAI - I-131) to ablate hyperfunctioning thyroid tissue",
        "Total or Subtotal Thyroidectomy for large compressive goiters or suspected malignancy"
      ],
      "prevention": "Ensure adequate dietary iodine intake (150 mcg daily for adults; 220-250 mcg during pregnancy) using iodized salt. In autoimmune thyroid conditions, maintain optimal selenium and Vitamin D levels, avoid smoking (which worsens Graves' eye disease), and undergo routine TSH screening during pregnancy.",
      "safeFoods": [
        "Adequately iodized table salt and seafood to ensure iodine sufficiency (for hypothyroidism)",
        "Selenium-rich Brazil nuts (1 to 2 nuts daily provide optimal selenium to support T4 to T3 enzymatic deiodinase conversion)",
        "Zinc-rich pumpkin seeds, lentils, and lean poultry",
        "Cruciferous vegetables (broccoli, cabbage) ARE SAFE when cooked thoroughly (cooking denatures goitrogens)",
        "Antioxidant-rich berries, leafy greens, and whole grains"
      ],
      "avoidFoods": [
        "Excessive raw, uncooked goitrogenic vegetables (eating massive amounts of raw kale/cassava can inhibit iodine uptake)",
        "High-dose kelp, bladderwrack, or iodine supplements (excessive iodine can paradoxically shut down thyroid hormone synthesis via the Wolff-Chaikoff effect)",
        "Taking calcium, iron, or soy supplements within 4 hours of your morning Levothyroxine pill (they bind Levothyroxine in the gut and block absorption)",
        "Excessive caffeine and stimulants in hyperthyroidism"
      ],
      "exercises": [
        "Low-impact aerobic exercise: Brisk walking, swimming, light cycling 30 minutes 4-5 days a week (boosts sluggish energy and metabolism in hypothyroidism)",
        "Avoid vigorous strenuous exercise during active uncontrolled hyperthyroidism until resting heart rate is stabilized with beta-blockers",
        "Strength training to preserve lean body mass and counter muscle weakness"
      ],
      "lifestyle": [
        "TAKE LEVOTHYROXINE PROPERLY: Take it first thing in the morning with plain water, and wait at least 30 to 60 minutes before drinking coffee, tea, or eating food",
        "Never take calcium, iron, or multivitamin tablets at the same time as thyroid hormone",
        "Get serum TSH re-tested every 6 to 12 weeks after any dose adjustment until stable, then annually",
        "Quit smoking immediately (smoking dramatically increases the risk of permanent blindness in Graves' eye disease)"
      ],
      "whenToConsult": "Consult an endocrinologist if you notice a swelling in your neck, unexplained rapid weight changes, racing heartbeat, or chronic exhaustion. Seek emergency care for high fever with confusion or extreme hypothermia with slow pulse.",
      "faqs": [
        {
          "q": "Why can't I take my thyroid pill with my morning coffee?",
          "a": "Coffee (both regular and decaf) severely interferes with the intestinal absorption of levothyroxine, cutting its bioavailability by up to 30-40%. Always wait at least 30 to 60 minutes after taking your pill before drinking coffee."
        },
        {
          "q": "Can thyroid problems cause hair loss?",
          "a": "Yes. Both severe hypothyroidism and severe hyperthyroidism can disrupt the normal hair growth cycle, causing diffuse telogen effluvium (generalized hair thinning and shedding). Hair typically regrows once hormone levels normalize on medication."
        }
      ],
      "references": [
        "American Thyroid Association (ATA) Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis",
        "ATA / AACE Clinical Practice Guidelines for Hypothyroidism in Adults",
        "European Thyroid Association (ETA) Guidelines on Graves' Orbitopathy"
      ]
    },
    {
      "id": "anemia",
      "name": "Iron Deficiency Anemia",
      "name_ml": "വിളർച്ച (അനീമിയ)",
      "name_hi": "एनीमिया / रक्तहीनता (आयरन की कमी)",
      "name_ar": "فقر الدم الناجم عن نقص الحديد (الأنيميا)",
      "category": "other",
      "badge": "Hematological Disorder",
      "icon": "droplet",
      "shortDesc": "A common hematological condition characterized by insufficient functional hemoglobin due to depleted systemic iron stores.",
      "whatIsIt": "Iron Deficiency Anemia (IDA) occurs when total body iron stores become depleted, leaving insufficient iron to synthesize hemoglobin—the critical iron-containing metalloprotein in red blood cells that binds and transports oxygen from the lungs to peripheral tissues. It is characterized as a microcytic, hypochromic anemia (small, pale red blood cells).",
      "causes": [
        "Chronic blood loss: Heavy menstrual bleeding (Menorrhagia in premenopausal women), occult gastrointestinal bleeding (peptic ulcers, colon polyps, colon cancer, hemorrhoids)",
        "Inadequate dietary iron intake (strict unsupplemented vegan/vegetarian diets without iron planning)",
        "Impaired intestinal iron absorption: Celiac disease, Helicobacter pylori infection, atrophic gastritis, bariatric bypass surgery",
        "Increased physiological demand: Pregnancy (fetal growth and blood volume expansion), lactation, rapid adolescent growth spurts",
        "Chronic hookworm infestation in tropical resource-limited settings"
      ],
      "symptoms": [
        "Extreme, debilitating fatigue, physical weakness, and listlessness",
        "Pallor: Noticeable paleness of skin, palpebral conjunctiva (inner lower eyelids), nail beds, and oral mucosa",
        "Exertional dyspnea (shortness of breath climbing stairs) and palpitations / tachycardia",
        "Headaches, dizziness, lightheadedness, and cold hands and feet",
        "Pica: Bizarre, compulsive cravings for non-nutritive substances (eating ice / pagophagia, clay, dirt, or chalk)",
        "Koilonychia: Brittle, concave, spoon-shaped fingernails",
        "Atrophic Glossitis (smooth, sore, swollen, beefy tongue) and Angular Cheilitis (painful cracks at mouth corners)",
        "Restless Legs Syndrome (RLS): Uncomfortable urge to move legs when lying down"
      ],
      "warningSigns": [
        "Severe High-Output Heart Failure: Orthopnea, peripheral edema, and angina in patients with severe anemia (Hb < 6-7 g/dL)",
        "Syncope or hemodynamic collapse upon standing",
        "NEW IRON DEFICIENCY ANEMIA IN AN ADULT MAN OR POSTMENOPAUSAL WOMAN IS AN ALARM SIGN REQUIRING IMMEDIATE ENDOSCOPY AND COLONOSCOPY TO RULE OUT OCCULT GASTROINTESTINAL CANCER!"
      ],
      "riskFactors": [
        "Women of childbearing age (due to menstrual blood loss)",
        "Pregnant women without routine prenatal iron supplementation",
        "Infants and young children consuming excessive cow's milk (> 24 oz/day which irritates gut and lacks iron)",
        "Frequent whole-blood donors",
        "Patients with chronic kidney disease or inflammatory bowel disease (Crohn's, Ulcerative Colitis)"
      ],
      "bodyImpact": "Tissue hypoxia forces compensatory increases in cardiac output (tachycardia, widened pulse pressure), causing left ventricular hypertrophy and heart failure. In children, chronic iron deficiency causes irreversible cognitive, neurodevelopmental, and motor deficits.",
      "diagnosis": [
        "Complete Blood Count (CBC): Low Hemoglobin (< 12 g/dL in women; < 13 g/dL in men), low Hematocrit, low Mean Corpuscular Volume (MCV < 80 fL: Microcytic), low MCH (Hypochromic)",
        "Serum Ferritin level (the single most accurate reflection of total body iron stores: Ferritin < 30 ng/mL is diagnostic of iron deficiency)",
        "Iron Studies Panel: Low Serum Iron, Elevated Total Iron-Binding Capacity (TIBC), and Low Transferrin Saturation (< 16-20%)",
        "Upper Endoscopy and Colonoscopy (mandatory in men and postmenopausal women with unexplained IDA to locate bleeding source)"
      ],
      "treatments": [
        "Oral Iron Replacement Therapy: Ferrous Sulfate (324 mg), Ferrous Fumarate, or Ferrous Gluconate providing 60-100 mg elemental iron, ideally dosed on ALTERNATE DAYS to reduce hepcidin suppression and optimize absorption",
        "Co-administration with Vitamin C (Ascorbic acid 250-500 mg) to enhance non-heme iron absorption",
        "Intravenous Iron Formulations (Ferric Carboxymaltose, Iron Sucrose, Ferric Derisomaltose) for severe anemia, malabsorption (celiac), intolerance to oral iron, or 2nd/3rd trimester pregnancy",
        "Investigating and treating the underlying cause of blood loss (e.g., treating ulcers, removing polyps, managing menorrhagia)",
        "Packed Red Blood Cell (PRBC) Transfusions strictly reserved for hemodynamically unstable severe anemia (Hb < 7 g/dL)"
      ],
      "prevention": "Consume iron-rich foods, pair plant-based iron with Vitamin C, avoid drinking tea or coffee directly with meals, treat heavy menstrual bleeding early with gynecological guidance, and ensure pregnant women take prescribed prenatal iron.",
      "safeFoods": [
        "Heme iron powerhouses (highly bioavailable, absorbed at 20-30% rate): Lean beef, poultry, organ meats, sardines, clams",
        "Non-heme plant iron sources: Spinach, lentils, chickpeas, kidney beans, black beans, tofu",
        "Vitamin C boosters (pair with iron meals to convert ferric to absorbable ferrous iron): Citrus fruits, bell peppers, tomatoes, strawberries",
        "Iron-fortified breakfast cereals, oats, and blackstrap molasses",
        "Pumpkin seeds, sesame seeds, and dried apricots/raisins"
      ],
      "avoidFoods": [
        "Black tea, green tea, and coffee with meals (tannins and polyphenols inhibit iron absorption by up to 70%!)",
        "Calcium supplements, milk, and high-calcium dairy taken directly with iron meals (calcium competes for intestinal DMT1 transporters)",
        "Uncooked wheat bran high in phytates (phytic acid binds iron)",
        "Excessive antacids and PPIs taken simultaneously with oral iron (iron requires an acidic gastric environment for optimal dissolution)"
      ],
      "exercises": [
        "Gentle, low-impact walking and light movement during severe anemia — do NOT attempt intense anaerobic workouts",
        "Listen to your body: Rest when breathless or lightheaded",
        "Gradual resumption of regular cardiovascular and resistance exercise once hemoglobin rises above 11-12 g/dL"
      ],
      "lifestyle": [
        "Take oral iron on an empty stomach with a glass of orange juice (Vitamin C) for maximum absorption; if nausea occurs, take with a light non-dairy snack",
        "Space tea and coffee at least 1 to 2 hours away from meals and iron pills",
        "Expect stool to turn dark green or black while taking iron pills — this is completely normal and harmless",
        "Continue iron therapy for at least 3 months AFTER hemoglobin normalizes to fully replenish bone marrow ferritin stores"
      ],
      "whenToConsult": "Consult a doctor if you experience persistent fatigue, pale skin, dizziness, or cravings for ice. SEEK IMMEDIATE EMERGENCY CARE if you experience chest pain, shortness of breath at rest, or vomit blood or pass black stools.",
      "faqs": [
        {
          "q": "Why do doctors recommend taking iron pills every other day instead of daily?",
          "a": "Taking a large dose of iron triggers the liver to produce a hormone called 'Hepcidin', which blocks iron absorption for the next 24 to 48 hours. Taking iron every other day prevents hepcidin spikes, resulting in greater overall iron absorption with far fewer stomach aches and constipation."
        },
        {
          "q": "Why does iron deficiency make some people want to chew ice?",
          "a": "This symptom is called 'pagophagia' (a form of pica). Scientists believe chewing ice triggers the mammalian dive reflex, increasing blood flow to the brain and temporarily relieving the severe mental fatigue and sluggishness caused by brain hypoxia."
        }
      ],
      "references": [
        "American Gastroenterological Association (AGA) Clinical Practice Guidelines on the Gastrointestinal Evaluation of Iron Deficiency Anemia",
        "World Health Organization (WHO) Guideline on Iron Supplementation in Women and Children",
        "British Society of Gastroenterology Guidelines for the Management of Iron Deficiency Anaemia"
      ]
    },
    {
      "id": "vitamin-d-deficiency",
      "name": "Vitamin D Deficiency & Osteomalacia",
      "name_ml": "വിറ്റാമിൻ ഡി യുടെ കുറവ്",
      "name_hi": "विटामिन डी की कमी (रिकेट्स और ऑस्टियोमलेशिया)",
      "name_ar": "نقص فيتامين د",
      "category": "other",
      "badge": "Nutritional Deficiency",
      "icon": "sun",
      "shortDesc": "Inadequate serum 25-hydroxyvitamin D levels, impairing calcium homeostasis, bone mineralization, and immune modulation.",
      "whatIsIt": "Vitamin D is not merely a vitamin; it is a seco-steroid prohormone synthesized endogenously in the skin upon exposure to solar Ultraviolet B (UVB) radiation. It undergoes hepatic 25-hydroxylation to calcifediol [25(OH)D] and renal 1-alpha-hydroxylation to the biologically active hormone calcitriol [1,25(OH)2D]. Deficiency impairs intestinal calcium and phosphorus absorption, leading to rickets in children and osteomalacia (soft bones) and secondary hyperparathyroidism in adults.",
      "causes": [
        "Inadequate solar UVB sunlight exposure (spending most hours indoors, wearing full-body covering, high latitude living)",
        "High skin melanin pigmentation (melanin acts as a natural sunscreen, requiring 3 to 5 times longer sun exposure to synthesize equivalent Vitamin D)",
        "Routine use of high-SPF sunscreens (> SPF 30 blocks 97% of UVB synthesis)",
        "Malabsorption syndromes (celiac disease, Crohn's, cystic fibrosis, bariatric bypass surgery)",
        "Chronic kidney disease or chronic liver failure impairing metabolic enzymatic activation",
        "Obesity: Vitamin D is sequestered and trapped inside excessive subcutaneous adipose tissue"
      ],
      "symptoms": [
        "Often subtle and insidious in early or moderate deficiency",
        "Deep, diffuse, symmetrical bone aching and throbbing pain, especially in the pelvis, lower back, hips, and ribs",
        "Proximal muscle weakness (difficulty standing up from a low chair or climbing stairs without arm support)",
        "Chronic generalized fatigue, listlessness, and non-specific body aches",
        "Increased susceptibility to recurrent viral upper respiratory infections",
        "Depressive mood symptoms, seasonal affective disorder (SAD), and cognitive fog",
        "In infants/children: Craniotabes, delayed fontanelle closure, delayed walking, and bowing of legs (Rickets)"
      ],
      "warningSigns": [
        "Severe Hypocalcemic Tetany: Carpopedal spasm (Trousseau's sign), facial twitching (Chvostek's sign), laryngospasm, and seizures",
        "Severe Osteomalacic pseudofractures (Looser's zones / Milkman's lines on X-ray)",
        "Severe proximal myopathy causing waddling gait and multiple fall injuries"
      ],
      "riskFactors": [
        "Individuals living at latitudes above 37 degrees North or South during winter months",
        "Office workers, shift workers, and institutionalized/elderly adults living indoors",
        "Individuals with darker skin tones living in temperate northern climates",
        "Exclusively breastfed infants without supplemental Vitamin D drops",
        "Strict vegan diet without fortified foods or supplements"
      ],
      "bodyImpact": "Without calcitriol, the gut absorbs only 10-15% of dietary calcium (compared to 30-40% when sufficient). Falling serum calcium stimulates parathyroid glands to hypersecrete PTH (Secondary Hyperparathyroidism). PTH mobilizes calcium out of bone, demineralizing the skeleton, creating unmineralized osteoid matrix, and accelerating osteoporosis.",
      "diagnosis": [
        "Serum 25-Hydroxyvitamin D [25(OH)D] total blood test (the definitive biomarker of vitamin D status):",
        "- Deficiency: < 20 ng/mL (< 50 nmol/L)",
        "- Insufficiency: 21 to 29 ng/mL (52.5 - 72.5 nmol/L)",
        "- Optimal / Sufficiency: 30 to 50 ng/mL (75 - 125 nmol/L)",
        "- Toxicity / Hypervitaminosis D: > 100-150 ng/mL",
        "Serum intact PTH (elevated in secondary hyperparathyroidism)",
        "Serum Total and Ionized Calcium, Phosphorus, and Alkaline Phosphatase (elevated bone turnover)"
      ],
      "treatments": [
        "High-Dose Repletion Regimen for Deficiency (< 20 ng/mL): Ergocalciferol (Vitamin D2) or Cholecalciferol (Vitamin D3) 50,000 IU once weekly for 8 weeks (or 6,000 IU daily for 8 weeks)",
        "Maintenance Therapy once level > 30 ng/mL: Cholecalciferol (D3) 1,000 to 2,000 IU daily (or 50,000 IU every 2-4 weeks)",
        "Ensure adequate dietary Calcium (1,000 mg/day) to prevent hungry bone hypocalcemia during remineralization",
        "Active Vitamin D analogs (Calcitriol or Paricalcitol) mandatory for patients with Stage 4/5 Chronic Kidney Disease"
      ],
      "prevention": "Obtain sensible, safe sun exposure: 10 to 20 minutes of midday sunlight on arms and legs 2-3 times weekly (without burning). Consume fortified dairy/plant milks and fatty fish, and take a daily over-the-counter Vitamin D3 supplement (800-2,000 IU/day) especially during autumn and winter.",
      "safeFoods": [
        "Wild-caught fatty cold-water fish (salmon, mackerel, sardines, trout, tuna)",
        "Cod liver oil (one teaspoon provides over 400-1,000 IU of Vitamin D)",
        "Pasture-raised egg yolks",
        "Mushrooms exposed to UV sunlight (portobello, maitake — produce Vitamin D2)",
        "Fortified foods: Fortified cow's milk, fortified almond/soy milk, fortified orange juice, and cereals"
      ],
      "avoidFoods": [
        "Excessive mega-dosing of Vitamin D without medical monitoring (> 10,000 IU daily for months can cause hypercalcemic kidney stones and vascular calcification)",
        "Relying solely on unfortified food for Vitamin D (it is virtually impossible to obtain adequate Vitamin D from standard diet alone without sun or supplements)",
        "Heavy alcohol consumption (impairs hepatic 25-hydroxylation)",
        "High-sodium diets that increase renal calcium wasting"
      ],
      "exercises": [
        "Outdoor weight-bearing exercise: Walking, jogging, gardening in morning sunlight (combines bone-stimulating mechanical impact with cutaneous Vitamin D synthesis)",
        "Progressive resistance training to strengthen proximal hip and thigh muscles affected by osteomalacia",
        "Gentle stretching and mobility work"
      ],
      "lifestyle": [
        "Take Vitamin D supplements WITH A MEAL CONTAINING HEALTHY FATS (olive oil, avocado, nuts) — as a fat-soluble vitamin, absorption increases by 30-50% with dietary fat",
        "Prefer Vitamin D3 (Cholecalciferol) over Vitamin D2 (Ergocalciferol) — D3 raises and maintains serum levels far more effectively",
        "Get blood 25(OH)D re-tested 3 months after completing high-dose repletion",
        "Ensure breastfed infants receive 400 IU Vitamin D drops daily starting in the first days of life"
      ],
      "whenToConsult": "Consult your doctor if you have persistent deep bone aching, unexplained muscle weakness, frequent fractures, or chronic fatigue. Test blood levels if you have dark skin or spend most daylight hours indoors.",
      "faqs": [
        {
          "q": "Can I get Vitamin D from sitting next to a sunny closed glass window?",
          "a": "No! Standard window glass absorbs and completely blocks virtually all Ultraviolet B (UVB) rays—the exact wavelength needed to produce Vitamin D in skin—while allowing UVA rays to pass through. You must be outdoors in direct sunlight."
        },
        {
          "q": "Why is Vitamin D3 better than Vitamin D2?",
          "a": "Vitamin D3 (Cholecalciferol) is the natural form synthesized by human skin. Clinical studies show that Vitamin D3 binds more strongly to Vitamin D-binding protein and maintains elevated blood levels for significantly longer than plant-derived Vitamin D2."
        }
      ],
      "references": [
        "Endocrine Society Clinical Practice Guideline on Vitamin D: Evaluation, Treatment, and Prevention of Vitamin D Deficiency",
        "National Institutes of Health (NIH) Office of Dietary Supplements: Vitamin D Fact Sheet for Health Professionals",
        "American Association of Clinical Endocrinology (AACE) Clinical Guidelines"
      ]
    },
    {
      "id": "vitamin-b12-deficiency",
      "name": "Vitamin B12 Deficiency & Pernicious Anemia",
      "name_ml": "വിറ്റാമിൻ ബി12 ന്റെ കുറവ്",
      "name_hi": "विटामिन बी12 की कमी (घातक रक्ताल्पता)",
      "name_ar": "نقص فيتامين ب12 والأنيميا الخبيثة",
      "category": "other",
      "badge": "Neurological & Hematological",
      "icon": "shield-alert",
      "shortDesc": "Depletion of cobalamin stores resulting in megaloblastic anemia and progressive, potentially irreversible subacute combined degeneration of the spinal cord.",
      "whatIsIt": "Vitamin B12 (Cobalamin) is an essential water-soluble vitamin required as a cofactor for two critical cellular enzymes: Methionine Synthase (vital for DNA synthesis and red blood cell production) and Methylmalonyl-CoA Mutase (vital for myelin synthesis and neurological integrity). Because humans cannot synthesize B12, deficiency leads to Megaloblastic Anemia and Subacute Combined Degeneration of the spinal cord.",
      "causes": [
        "Pernicious Anemia: Autoimmune destruction of gastric parietal cells and loss of Intrinsic Factor (IF) needed for ileal B12 absorption",
        "Strict, unsupplemented long-term Vegan or Vegetarian diets (cobalamin is synthesized exclusively by microorganisms and found naturally only in animal-derived foods)",
        "Malabsorption disorders: Terminal ileal resection, Crohn's disease, celiac disease, or bacterial overgrowth (SIBO)",
        "Long-term use of medications that impair B12 absorption: Metformin (> 3-5 years) and Proton Pump Inhibitors (PPIs e.g., Omeprazole) or H2-blockers",
        "Bariatric bypass surgery (Roux-en-Y gastric bypass eliminating gastric acid and intrinsic factor mixing)"
      ],
      "symptoms": [
        "Neurological Hallmarks (can occur even WITHOUT anemia!):",
        "- Symmetrical peripheral neuropathy: Numbness, tingling ('pins and needles') in toes, feet, and fingers",
        "- Loss of vibratory sensation and proprioception (position sense) causing sensory ataxia and unsteady, stumbling gait",
        "- Positive Romberg sign (swaying or falling when standing with feet together and eyes closed)",
        "- Cognitive decline: Memory loss, 'megaloblastic madness' (severe paranoia, depression, or psychosis)",
        "Hematological Symptoms: Severe fatigue, exertional shortness of breath, dizziness, and paleness with a lemon-yellow skin tint",
        "Oral symptoms: Beefy, red, painful, depapillated smooth tongue (Hunter's Glossitis)"
      ],
      "warningSigns": [
        "IRREVERSIBLE SPINAL CORD DAMAGE: Subacute Combined Degeneration of the Cord (SCD) causing permanent spastic paraparesis, sensory loss, and bladder incontinence if untreated",
        "Severe pancytopenia (simultaneous drop in red cells, white cells, and platelets mimicking leukemia)",
        "Severe acute delirium or acute psychosis"
      ],
      "riskFactors": [
        "Strict vegans and vegetarians who do not take B12 supplements",
        "Older adults over 65 years (high prevalence of atrophic gastritis and hypochlorhydria)",
        "Patients taking Metformin long-term for Type 2 diabetes",
        "Patients taking chronic daily PPI antacids for acid reflux",
        "Personal or family history of autoimmune diseases (Hashimoto's, vitiligo, Addison's)"
      ],
      "bodyImpact": "B12 deficiency halts methylation of homocysteine to methionine, trapping folate as 5-methyl-THF ('folate trap') and impairing nuclear DNA synthesis, producing massive, abnormal megaloblastic erythroblasts. Impaired myelin synthesis leads to spongy vacuolation and demyelination of the posterior and lateral columns of the spinal cord.",
      "diagnosis": [
        "Serum Vitamin B12 level (< 200 pg/mL is deficient; 200-300 pg/mL is borderline/indeterminate)",
        "Serum Methylmalonic Acid (MMA) and Homocysteine (highly sensitive functional metabolic biomarkers — elevated MMA confirms true tissue-level B12 deficiency even if serum B12 appears borderline)",
        "Complete Blood Count (CBC): High Mean Corpuscular Volume (MCV > 100-115 fL: Megaloblastic Macrocytic Anemia) and Hypersegmented Neutrophils on peripheral smear",
        "Anti-Intrinsic Factor Antibodies (Anti-IF) and Anti-Parietal Cell Antibodies (diagnostic of Pernicious Anemia)"
      ],
      "treatments": [
        "Intramuscular (IM) Cyanocobalamin or Hydroxocobalamin Injections (1,000 mcg daily for 1 week, then weekly for 4 weeks, followed by monthly injections for life for Pernicious Anemia or malabsorption)",
        "High-Dose Oral Cyanocobalamin (1,000 to 2,000 mcg daily) — utilizes passive intestinal diffusion (~1% absorbed independently of intrinsic factor)",
        "Sublingual B12 tablets for dietary vegans and mild deficiency",
        "CRITICAL MEDICAL RULE: NEVER treat megaloblastic anemia with Folic Acid alone without checking/treating B12 first! Folic acid corrects the anemia but allows the irreversible spinal cord demyelination to progress silently!"
      ],
      "prevention": "All strict vegans and vegetarians MUST take a daily Vitamin B12 supplement (250-500 mcg) or weekly dose (2,500 mcg). Patients on long-term Metformin or PPIs should have serum B12 tested annually, and bariatric surgery patients must receive lifelong prophylactic supplementation.",
      "safeFoods": [
        "Nutritional yeast fortified with Vitamin B12 (a staple for vegans)",
        "Cold-water fatty fish (salmon, tuna, trout, sardines) and clams/mussels",
        "Pasture-raised poultry, eggs, and dairy products (milk, yogurt, Swiss cheese)",
        "Fortified plant milks (soy, almond, oat) and fortified whole grain cereals",
        "Lean meats (beef, lamb, organ meats)"
      ],
      "avoidFoods": [
        "Relying on unproven plant sources like spirulina, nori, or fermented tempeh (these contain inactive 'pseudo-B12' analogues that do not work in humans and actually block true B12 absorption)",
        "Excessive alcohol consumption (damages gastric mucosa and blocks cobalamin absorption)",
        "Taking high-dose Folic Acid supplements without verifying normal B12 levels",
        "Skipping lifelong prescribed B12 injections if diagnosed with pernicious anemia"
      ],
      "exercises": [
        "Gait retraining and balance physical therapy to rehabilitate sensory ataxia and proprioception loss",
        "Low-impact walking with assistive devices (cane or walker) until neurological stability is restored",
        "Gentle stretching and mobility exercises to prevent muscular joint contractures"
      ],
      "lifestyle": [
        "If you follow a vegan or plant-based lifestyle, begin taking a certified Vitamin B12 supplement immediately",
        "If diagnosed with Pernicious Anemia, understand that injections are required for LIFE — the condition cannot be cured by diet because your stomach cannot absorb B12",
        "Annual blood screening for anyone on long-term Metformin or omeprazole",
        "Install nightlights and grab bars at home if experiencing foot numbness to prevent falls"
      ],
      "whenToConsult": "Consult a neurologist or physician immediately if you notice progressive numbness or tingling in your feet, difficulty walking in the dark, sudden memory decline, or unexplained exhaustion.",
      "faqs": [
        {
          "q": "Why can't vegans get Vitamin B12 from vegetables or spirulina?",
          "a": "Plants do not produce or require Vitamin B12. Algae like spirulina contain 'pseudo-vitamin B12' (cobamides) that mimic B12 on cheap tests but are biologically inert in the human body, leaving people severely deficient unless they take true B12 supplements."
        },
        {
          "q": "Can nerve damage from B12 deficiency be completely cured?",
          "a": "If treated early (within 3 to 6 months of symptom onset), neurological damage and numbness can completely reverse. However, if severe spinal cord degeneration has been present for over a year, neurological deficits may become permanent."
        }
      ],
      "references": [
        "British Society for Haematology (BSH) Guidelines for the Diagnosis and Treatment of Cobalamin and Folate Disorders",
        "CDC / NIH Office of Dietary Supplements: Vitamin B12 Fact Sheet",
        "New England Journal of Medicine Clinical Practice Review: Vitamin B12 Deficiency"
      ]
    },
    {
      "id": "pcos",
      "name": "PCOS (Polycystic Ovary Syndrome)",
      "name_ml": "പി.സി.ഒ.എസ് (പോളിസിസ്റ്റിക് ഓവറി സിൻഡ്രോം)",
      "name_hi": "पीसीओएस (पॉलीसिस्टिक ओवरी सिंड्रोम)",
      "name_ar": "متلازمة تكيس المبايض (PCOS)",
      "category": "other",
      "badge": "Neuroendocrine & Metabolic",
      "icon": "activity",
      "shortDesc": "A prevalent endocrine, metabolic, and reproductive disorder in women characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology.",
      "whatIsIt": "Polycystic Ovary Syndrome (PCOS) is the most common endocrine and reproductive disorder affecting women of reproductive age (affecting 8% to 13% globally). Rather than being merely a gynecological condition, PCOS is a systemic neuroendocrine and metabolic disorder driven by cellular insulin resistance, compensatory hyperinsulinemia, and ovarian hyperandrogenism, disrupting normal menstrual cyclicity and fertility.",
      "causes": [
        "Peripheral insulin resistance: Hyperinsulinemia stimulates theca cells in the ovary to produce excessive androgens (testosterone) and suppresses sex hormone-binding globulin (SHBG) in the liver",
        "Disrupted hypothalamic-pituitary-ovarian axis: Elevated Luteinizing Hormone (LH) pulsatility relative to Follicle-Stimulating Hormone (FSH)",
        "Arrest of follicular maturation: Immature follicles fail to mature to ovulation, accumulating along the ovarian periphery as 'pearl necklace' cysts",
        "Complex polygenic susceptibility interacting with lifestyle, diet, and visceral adiposity"
      ],
      "symptoms": [
        "Oligomenorrhea or Amenorrhea: Irregular, infrequent, or absent menstrual periods (e.g., fewer than 8 cycles per year or cycles > 35 days apart)",
        "Hirsutism: Excess coarse, dark terminal hair growth on the face (chin, upper lip), chest, lower abdomen, and inner thighs",
        "Severe, persistent cystic acne resistant to standard topical therapies",
        "Androgenic Alopecia: Male-pattern hair thinning and widening part at the crown of the scalp",
        "Weight gain and difficulty losing weight, particularly central abdominal visceral fat",
        "Acanthosis Nigricans: Velvety dark, hyperpigmented skin patches in neck creases, armpits, and groin (a visible sign of severe insulin resistance)",
        "Anovulatory Infertility: Difficulty conceiving due to lack of regular ovulation"
      ],
      "warningSigns": [
        "Endometrial Hyperplasia & Endometrial Cancer: Chronic unopposed estrogen without progesterone shedding causes thick, precancerous uterine lining",
        "Development of Type 2 Diabetes (over 50% of women with PCOS develop prediabetes or diabetes before age 40)",
        "Severe Obstructive Sleep Apnea and non-alcoholic fatty liver disease (MASLD)"
      ],
      "riskFactors": [
        "Family history of PCOS, Type 2 diabetes, or premature cardiovascular disease",
        "Obesity and central adiposity (though roughly 20-25% of women have 'Lean PCOS')",
        "Sedentary lifestyle and high-glycemic diet",
        "Early adrenarche (premature development of pubic hair in childhood)"
      ],
      "bodyImpact": "Chronic hyperinsulinemia and hyperandrogenism accelerate atherogenic dyslipidemia (high triglycerides, low HDL), increase cardiovascular disease risk, cause mood disorders (high rates of anxiety and depression), and elevate endometrial adenocarcinoma risk by 3- to 4-fold.",
      "diagnosis": [
        "Rotterdam Diagnostic Criteria 2023 (Requires at least 2 of the following 3 features after excluding other etiologies):",
        "1. Ovulatory Dysfunction (Oligo- or anovulation: irregular or absent periods)",
        "2. Clinical or Biochemical Hyperandrogenism (Hirsutism score, elevated total/free testosterone, DHEAS)",
        "3. Polycystic Ovarian Morphology on Pelvic Ultrasound (>= 20 follicles per ovary measuring 2-9 mm or ovarian volume >= 10 mL)",
        "Exclusionary testing: Serum TSH (thyroid disease), Prolactin (hyperprolactinemia), 17-Hydroxyprogesterone (to rule out late-onset Congenital Adrenal Hyperplasia)",
        "75g 2-hour Oral Glucose Tolerance Test (OGTT) and lipid profile"
      ],
      "treatments": [
        "First-Line Foundation: Lifestyle intervention targeting 5-10% body weight reduction (often restores regular spontaneous ovulation)",
        "Combined Oral Contraceptive Pills (COCPs containing anti-androgenic progestins like Drospirenone or Cyproterone) to regulate cycles and protect the endometrium",
        "Insulin-Sensitizing Agents: Metformin (reduces hyperinsulinemia, aids weight loss, improves ovulatory cyclicity)",
        "Anti-Androgens: Spironolactone (aldosterone/androgen receptor blocker) or Finasteride for persistent hirsutism and alopecia",
        "Ovulation Induction for Fertility: Letrozole (aromatase inhibitor — gold standard first-line) or Clomiphene Citrate",
        "Topical Eflornithine cream and laser hair reduction for facial hirsutism"
      ],
      "prevention": "While the underlying genetic predisposition cannot be altered, the metabolic and reproductive expression of PCOS can be prevented or put into remission by keeping visceral fat low, exercising daily to sensitize muscles to insulin, eating a low-glycemic Mediterranean diet, and avoiding sugary beverages.",
      "safeFoods": [
        "Low Glycemic Index (GI) and Low Glycemic Load foods (steel-cut oats, quinoa, lentils, chickpeas, non-starchy vegetables)",
        "High-fiber foods (at least 30-35 grams daily to slow glucose absorption and balance gut microbiome)",
        "Lean protein sources (fish, poultry, tofu, eggs, Greek yogurt) paired with every meal to blunt insulin spikes",
        "Anti-inflammatory healthy fats (avocados, extra virgin olive oil, walnuts, chia seeds)",
        "Spearmint tea (drinking 2 cups daily has been shown in clinical trials to reduce free testosterone levels)"
      ],
      "avoidFoods": [
        "Refined carbohydrates and white flour products (white bread, pastries, pasta, maida)",
        "Sugary beverages, sodas, sweetened fruit juices, and flavored coffees (trigger massive insulin surges)",
        "Ultra-processed snack foods loaded with industrial trans fats",
        "Excessive dairy if noticed to worsen inflammatory cystic acne",
        "Skipping meals or following extreme starvation crash diets that disrupt hypothalamic rhythms"
      ],
      "exercises": [
        "Progressive Resistance Training (weight lifting 3 days a week builds skeletal muscle mass, the primary sink for glucose disposal)",
        "Moderate-intensity continuous aerobic walking (30-45 minutes 5 days a week)",
        "High-Intensity Interval Training (HIIT) 1-2 times weekly to boost insulin sensitivity",
        "Yoga and stress-reduction movement to lower adrenal cortisol and DHEAS output"
      ],
      "lifestyle": [
        "Prioritize 7 to 8 hours of quality sleep (sleep deprivation immediately worsens insulin resistance)",
        "Track your menstrual cycle using an app or calendar",
        "Never allow periods to be absent for more than 3 consecutive months without progesterone withdrawal to prevent endometrial thickening",
        "Manage chronic emotional stress through mindfulness and therapy"
      ],
      "whenToConsult": "Consult a reproductive endocrinologist or gynecologist if you have irregular periods, excess facial hair growth, sudden unexplained weight gain, or if you have been trying to conceive for over 6-12 months without success.",
      "faqs": [
        {
          "q": "Can a woman with PCOS still get pregnant?",
          "a": "ABSOLUTELY YES! PCOS is one of the most treatable causes of female infertility. Through lifestyle improvements, weight management, and simple oral medications that induce ovulation (like Letrozole or Metformin), the vast majority of women with PCOS successfully conceive and have healthy babies."
        },
        {
          "q": "Do I have to be overweight to have PCOS?",
          "a": "No. Roughly 20% to 25% of women with PCOS have 'Lean PCOS'. They have a normal or low BMI, but still have high insulin resistance, elevated androgens, irregular periods, and polycystic ovaries."
        }
      ],
      "references": [
        "International Evidence-Based Guideline for the Assessment and Management of Polycystic Ovary Syndrome 2023",
        "Endocrine Society Clinical Practice Guideline on PCOS",
        "ACOG Practice Bulletin: Polycystic Ovary Syndrome"
      ]
    },
    {
      "id": "endometriosis",
      "name": "Endometriosis",
      "name_ml": "എൻഡോമെട്രിയോസിസ്",
      "name_hi": "एंडोमेट्रियोसिस (गर्भाशय की आंतरिक परत का बाहर फैलना)",
      "name_ar": "بطانة الرحم المهاجرة (الإندومتريوز)",
      "category": "other",
      "badge": "Chronic Inflammatory Gynecological",
      "icon": "shield-alert",
      "shortDesc": "A chronic, estrogen-dependent inflammatory disease where tissue resembling normal endometrium grows outside the uterine cavity.",
      "whatIsIt": "Endometriosis is a chronic, estrogen-dependent inflammatory disease characterized by the presence of endometrial-like stroma and glands growing outside the uterine cavity, most commonly on the ovaries, fallopian tubes, uterosacral ligaments, pelvic peritoneum, bowel, and bladder. Like normal uterine lining, these ectopic lesions bleed and shed during each menstrual cycle, but with no exit route, triggering chronic pelvic inflammation, fibrosis, and dense adhesions.",
      "causes": [
        "Retrograde Menstruation (Sampson's Theory): Menstrual fluid containing viable endometrial cells flows backward through fallopian tubes into the peritoneal cavity",
        "Coelomic Metaplasia: Transformation of normal peritoneal mesothelial cells into endometrial-like tissue under hormonal or inflammatory stimuli",
        "Vascular and Lymphatic Dissemination (explaining rare distant lesions in the lungs, diaphragm, or brain)",
        "Immune system dysregulation: Defective natural killer cell and peritoneal macrophage clearance failing to clear ectopic tissue",
        "Genetic predisposition and epigenetic alterations (high familial clustering)"
      ],
      "symptoms": [
        "Dysmenorrhea: Severe, debilitating menstrual cramps that do not respond to ordinary painkillers, often beginning days before bleeding and persisting throughout the cycle",
        "Deep Dyspareunia: Pain during or immediately after sexual intercourse",
        "Chronic Non-Menstrual Pelvic Pain: Aching pain present throughout the month",
        "Dyschezia: Painful bowel movements, rectal pressure, or constipation/diarrhea during menstruation",
        "Dysuria: Pain, burning, or frequency during urination, especially during menstrual periods",
        "Infertility / Subfertility: Inability to conceive (present in 30% to 50% of women with endometriosis)",
        "Heavy menstrual bleeding (menorrhagia) or abnormal premenstrual spotting",
        "Chronic profound fatigue and brain fog"
      ],
      "warningSigns": [
        "Ovarian Endometrioma ('Chocolate Cyst') Rupture: Sudden, agonizing acute peritonitis requiring emergency surgery",
        "Ureteral Obstruction: Silent compression of the ureters by deep infiltrating endometriosis causing silent hydronephrosis and kidney loss",
        "Catamenial Pneumothorax: Collapsed lung occurring synchronously with menstrual bleeding due to diaphragmatic or pleural endometriosis"
      ],
      "riskFactors": [
        "First-degree relative (mother or sister) with endometriosis (7- to 10-fold increased risk)",
        "Early age at menarche (before age 11)",
        "Short menstrual cycle lengths (< 27 days) and prolonged menstrual bleeding (> 7 days)",
        "Nulliparity (never having given birth)",
        "Congenital outflow tract obstructions (imperforate hymen, Mullerian anomalies)"
      ],
      "bodyImpact": "Cyclic bleeding of ectopic implants releases hemosiderin, prostaglandins, and inflammatory cytokines (IL-1, IL-6, TNF-alpha). This drives intense neuroangiogenesis (sensitizing pelvic nerve fibers), creates dense fibrous bands and adhesions that 'freeze' the pelvis into a solitary mass, damages ovarian reserve, and distorts fallopian tube anatomy.",
      "diagnosis": [
        "Specialized High-Resolution Transvaginal Ultrasound (TVS with bowel preparation) performed by an expert sonographer (detects endometriomas and deep infiltrating nodules)",
        "Dedicated Pelvic MRI with pelvic protocol (maps deep infiltrating endometriosis of rectovaginal septum, bowel, and ureters)",
        "Diagnostic Laparoscopy with Histopathological Biopsy (historically the absolute gold standard, now integrated with advanced imaging)",
        "Clinical physical exam: Palpable tender nodules along uterosacral ligaments or fixed retroverted uterus"
      ],
      "treatments": [
        "Medical Hormonal Suppression (aims to induce pseudo-pregnancy or pseudo-menopause to atrophy lesions):",
        "- First-Line: Progestin-only therapies (Dienogest 2 mg daily, Norethindrone, or Levonorgestrel-releasing IUD / Mirena)",
        "- Continuous Combined Oral Contraceptive Pills (taken without placebo pill breaks to stop periods entirely)",
        "- GnRH Receptor Antagonists: Oral Elagolix or Relugolix with low-dose hormone 'add-back' therapy",
        "- GnRH Agonists: Leuprolide / Goserelin depot injections",
        "Surgical Excision (Laparoscopic / Robotic Excision of all visible endometriosis implants and adhesiolysis by a specialized minimally invasive gynecologic surgeon — superior to simple superficial ablation)",
        "Multimodal pelvic floor physical therapy and specialized chronic pain management"
      ],
      "prevention": "Endometriosis cannot be definitively prevented from initiating. However, early diagnosis in teenage years, continuous hormonal contraception to suppress retrograde bleeding, avoiding endocrine-disrupting chemicals (phthalates, dioxins), and anti-inflammatory lifestyle habits prevent progression to severe deep infiltrating disease.",
      "safeFoods": [
        "Anti-inflammatory Mediterranean dietary pattern",
        "Cold-water fatty fish providing Omega-3 EPA/DHA (proven to downregulate inflammatory pelvic prostaglandins)",
        "High-fiber vegetables and beans to facilitate hepatic estrogen excretion via the bowel",
        "Cruciferous vegetables rich in Indole-3-Carbinol (promotes healthy estrogen metabolism)",
        "Turmeric (Curcumin: proven in pre-clinical studies to reduce endometriotic lesion size and inflammation)",
        "Berries, green tea, and raw walnuts"
      ],
      "avoidFoods": [
        "Excessive red meat and processed deli meats (associated with significantly higher endometriosis risk)",
        "Industrial trans fats and heavily fried foods",
        "Alcohol consumption (spikes circulating estrogen levels and worsens pelvic inflammation)",
        "Excessive caffeine and sugary sodas",
        "Gluten in sensitive individuals (many women with endometriosis report significant pain relief on a gluten-free trial)"
      ],
      "exercises": [
        "Pelvic floor physical therapy (down-training hypertonic, tight pelvic floor muscles)",
        "Low-impact aerobic exercise: Walking, swimming, gentle cycling (stimulates endorphins, the body's natural pain relievers)",
        "Restorative yoga and diaphragmatic pelvic floor stretching (Child's pose, Happy Baby pose)",
        "Avoid intense high-impact jarring workouts during days of severe pelvic flare-ups"
      ],
      "lifestyle": [
        "Apply warm heat packs or hot water bottles to the lower pelvis to relax uterine and abdominal muscle spasms",
        "Seek out an endometriosis excision specialist rather than general superficial burning (ablation)",
        "Engage pelvic floor physical therapists specialized in treating pelvic pain",
        "Keep a detailed menstrual and pain symptom diary to share with your surgical team"
      ],
      "whenToConsult": "Consult an endometriosis specialist or gynecologist immediately if menstrual cramps prevent you from attending school or work, if you experience pain during sex, or if you have painful bowel movements during your period. Painful periods should NEVER be dismissed as 'just normal cramps'.",
      "faqs": [
        {
          "q": "Is a hysterectomy a guaranteed cure for endometriosis?",
          "a": "No! A hysterectomy (removing the uterus) is NOT a guaranteed cure. Endometriosis lives outside the uterus. If ectopic lesions on the bowel, bladder, or ligaments are left behind, pelvic pain will continue even after a hysterectomy. Full surgical EXCISION of all implants is the key."
        },
        {
          "q": "Why does it take an average of 7 to 10 years to get diagnosed with endometriosis?",
          "a": "Diagnosis is historically delayed because painful periods are often dismissed as 'normal woman's pain' by society and clinicians, and early lesions are invisible on standard routine pelvic ultrasounds. Awareness and specialized imaging are closing this gap."
        }
      ],
      "references": [
        "European Society of Human Reproduction and Embryology (ESHRE) Guideline on Endometriosis 2024",
        "ACOG Practice Bulletin: Management of Endometriosis",
        "World Health Organization (WHO) Endometriosis Factsheet"
      ]
    }
  ],
  "preventionGuides": [
    {
      "id": "prevent-diabetes",
      "title": "How to Prevent Type 2 Diabetes",
      "title_ml": "ടൈപ്പ് 2 പ്രമേഹം എങ്ങനെ തടയാം?",
      "title_hi": "टाइप 2 मधुमेह से कैसे बचें?",
      "title_ar": "كيفية الوقاية من السكري من النوع 2",
      "icon": "droplet",
      "color": "blue",
      "keySummary": "Up to 80% of Type 2 diabetes cases are preventable through 5-7% sustained weight loss, 150 minutes of weekly aerobic exercise, and replacing refined carbohydrates with whole fiber.",
      "actionSteps": [
        "Target a 5% to 7% reduction in total body weight if overweight (cuts diabetes risk by up to 58% as proven in the landmark Diabetes Prevention Program trial)",
        "Engage in at least 150 minutes of moderate-intensity physical activity weekly (e.g., 30 minutes of brisk walking 5 days a week)",
        "Eliminate all liquid sugars: sodas, sweetened fruit juices, energy drinks, and sweetened teas",
        "Follow the 'Plate Method': Half plate non-starchy vegetables, one quarter plate lean protein, one quarter plate whole complex grains",
        "Incorporate 10-15 minute post-meal light strolls to facilitate non-insulin-mediated GLUT4 glucose uptake"
      ],
      "dietaryProtocol": [
        "Consume at least 30-35 grams of dietary fiber daily from legumes, chia seeds, oats, and leafy greens",
        "Switch entirely from refined grains (white bread, white rice, maida) to low-glycemic intact whole grains (quinoa, steel-cut oats, barley)",
        "Incorporate healthy monounsaturated fats (extra virgin olive oil, avocados, almonds, walnuts)",
        "Avoid all industrial trans fats and processed convenience foods"
      ],
      "biomarkersToTrack": [
        "Fasting Plasma Glucose (Normal < 100 mg/dL; Prediabetes 100-125 mg/dL)",
        "Hemoglobin A1c (HbA1c: Normal < 5.7%; Prediabetes 5.7% - 6.4%)",
        "Fasting Serum Insulin and HOMA-IR (identifies occult insulin resistance)",
        "Waist Circumference (Target < 40 inches in men; < 35 inches in women)"
      ],
      "references": [
        "Diabetes Prevention Program Research Group. Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin. N Engl J Med. 2002.",
        "ADA Standards of Medical Care in Diabetes 2024: Prevention or Delay of Type 2 Diabetes.",
        "World Health Organization (WHO) Diabetes Prevention Guidelines."
      ]
    },
    {
      "id": "prevent-hypertension",
      "title": "How to Prevent High Blood Pressure",
      "title_ml": "ഉയർന്ന രക്തസമ്മർദ്ദം എങ്ങനെ തടയാം?",
      "title_hi": "उच्च रक्तचाप (हाइपरटेंशन) से कैसे बचें?",
      "title_ar": "كيفية الوقاية من ارتفاع ضغط الدم",
      "icon": "activity",
      "color": "red",
      "keySummary": "Keep systolic pressure < 120 mmHg through sodium restriction (< 1,500-2,000 mg/day), potassium-rich whole foods, stress management, and daily physical movement.",
      "actionSteps": [
        "Restrict daily sodium intake to under 1,500 to 2,000 mg (about one level teaspoon of salt for the entire day across all foods)",
        "Adopt the DASH (Dietary Approaches to Stop Hypertension) dietary pattern, shown to lower systolic BP by up to 11 mmHg",
        "Maintain a Body Mass Index (BMI) between 18.5 and 24.9 (each 1 kg of weight loss lowers systolic BP by roughly 1 mmHg)",
        "Perform daily diaphragmatic breathing: 6 slow deep breaths per minute for 5 minutes twice daily (stimulates parasympathetic vagus nerve)",
        "Limit alcohol consumption to no more than 1 drink per day for women or 2 for men (or abstain completely)"
      ],
      "dietaryProtocol": [
        "Increase dietary potassium to 3,500-4,700 mg/day through bananas, spinach, sweet potatoes, coconut water, and white beans",
        "Increase dietary magnesium from raw pumpkin seeds, almonds, and dark leafy greens",
        "Consume garlic, onions, and beetroot juice rich in natural dietary nitrates that convert to vasodilatory nitric oxide",
        "Avoid canned soups, cured sausages, salted snacks, and table salt shakers"
      ],
      "biomarkersToTrack": [
        "Home Blood Pressure (Target < 120/80 mmHg while seated calmly)",
        "Serum Potassium and Sodium electrolytes",
        "Estimated Glomerular Filtration Rate (eGFR) and Urine Albumin-to-Creatinine Ratio (uACR)"
      ],
      "references": [
        "Whelton PK, et al. 2017 ACC/AHA High Blood Pressure Clinical Practice Guideline.",
        "Appel LJ, et al. A Clinical Trial of the Effects of Dietary Patterns on Blood Pressure (DASH Trial). N Engl J Med.",
        "European Society of Cardiology (ESC) / ESH Guidelines for the Management of Arterial Hypertension."
      ]
    },
    {
      "id": "prevent-heart-disease",
      "title": "How to Prevent Heart Disease & CAD",
      "title_ml": "ഹൃദ്രോഗവും കൊറോണറി അസുഖങ്ങളും എങ്ങനെ തടയാം?",
      "title_hi": "हृदय रोग (दिल की बीमारी) से कैसे बचें?",
      "title_ar": "كيفية الوقاية من أمراض القلب وتصلب الشرايين",
      "icon": "heart",
      "color": "rose",
      "keySummary": "Arterial plaque formation can be arrested through zero tobacco use, achieving LDL < 70-100 mg/dL, consuming Omega-3 rich cold-water fish, and daily cardio exercise.",
      "actionSteps": [
        "Completely eliminate tobacco smoking and exposure to secondhand cigarette smoke (cardiovascular risk plummets within weeks of quitting)",
        "Adhere strictly to a Mediterranean dietary pattern rich in extra virgin olive oil, cold-water fish, tree nuts, and colorful vegetables",
        "Engage in at least 150 minutes of moderate or 75 minutes of vigorous aerobic exercise weekly",
        "Get 7 to 8 hours of consistent, restorative sleep nightly (sleep apnea and insomnia double myocardial infarction risk)",
        "Know your cardiovascular risk numbers: Blood Pressure, LDL-C, ApoB, HbA1c, and Coronary Artery Calcium (CAC) score"
      ],
      "dietaryProtocol": [
        "Eat cold-water fatty fish (wild salmon, sardines, mackerel) twice weekly to supply cardioprotective EPA and DHA",
        "Use cold-pressed extra virgin olive oil as the primary dietary cooking and salad oil",
        "Consume 30 grams of raw tree nuts (walnuts, almonds) daily",
        "Completely avoid all commercial trans fats, hydrogenated margarine, and deep-fried fast foods"
      ],
      "biomarkersToTrack": [
        "Apolipoprotein B (ApoB < 80 mg/dL or < 65 mg/dL in high-risk individuals)",
        "Low-Density Lipoprotein Cholesterol (LDL-C < 70-100 mg/dL)",
        "High-Sensitivity C-Reactive Protein (hs-CRP < 1.0 mg/L)",
        "Coronary Artery Calcium (CAC) CT Scan score (target = 0)"
      ],
      "references": [
        "Arnett DK, et al. 2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease.",
        "Estruch R, et al. Primary Prevention of Cardiovascular Disease with a Mediterranean Diet (PREDIMED Trial). N Engl J Med.",
        "World Heart Federation Global Cardiovascular Prevention Roadmap."
      ]
    },
    {
      "id": "prevent-obesity",
      "title": "How to Prevent Obesity & Visceral Fat",
      "title_ml": "പൊണ്ണത്തടിയും അമിതവണ്ണവും എങ്ങനെ തടയാം?",
      "title_hi": "मोटापा और पेट की चर्बी कैसे रोकें?",
      "title_ar": "كيفية الوقاية من السمنة والدهون الحشوية",
      "icon": "user-x",
      "color": "amber",
      "keySummary": "Visceral belly fat surrounds internal organs and secretes inflammatory cytokines. Prevent it by eating whole unprocessed foods, avoiding liquid sugars, and increasing daily NEAT movement.",
      "actionSteps": [
        "Focus on whole, single-ingredient foods with high satiety index (boiled potatoes, lean poultry, eggs, fish, oats, apples)",
        "Eliminate all liquid calories: sodas, sports drinks, sugary coffee beverages, and alcohol",
        "Prioritize non-exercise activity thermogenesis (NEAT): Take stairs, use a standing desk, walk while taking phone calls",
        "Practice mindful eating: Chew slowly, sit at a table without screens, and stop eating when 80% full (Hara Hachi Bu)",
        "Get 7-8 hours of sound sleep: Sleep deprivation elevates ghrelin (hunger hormone) and lowers leptin (satiety hormone)"
      ],
      "dietaryProtocol": [
        "Aim for 25-30 grams of protein with every major meal to stimulate peptide YY and GLP-1 satiety signaling",
        "Fill half of your plate with high-volume, low-calorie fibrous vegetables (broccoli, salad greens, zucchini)",
        "Drink a large glass of water 15 minutes before meals to promote gastric stretch receptors",
        "Avoid ultra-processed hyper-palatable convenience foods that override biological fullness cues"
      ],
      "biomarkersToTrack": [
        "Waist-to-Height Ratio (Keep your waist circumference to less than half your height)",
        "Body Mass Index (BMI 18.5 - 24.9 kg/m2)",
        "Body Fat Percentage (via DEXA scan or bioimpedance)",
        "Fasting Triglyceride-to-HDL Ratio (Target < 2.0)"
      ],
      "references": [
        "Hall KD, et al. Ultra-Processed Diets Cause Excess Calorie Intake and Weight Gain. Cell Metab. 2019.",
        "The Lancet Commission on Obesity: Global Syndemic of Obesity, Undernutrition, and Climate Change.",
        "WHO Guidelines on Physical Activity and Sedentary Behaviour."
      ]
    },
    {
      "id": "prevent-cholesterol",
      "title": "How to Reduce Bad LDL Cholesterol",
      "title_ml": "ചീത്ത കൊളസ്ട്രോൾ (LDL) എങ്ങനെ കുറയ്ക്കാം?",
      "title_hi": "खराब एलडीएल (LDL) कोलेस्ट्रॉल कैसे कम करें?",
      "title_ar": "كيفية خفض الكوليسترول الضار في الدم",
      "icon": "activity",
      "color": "purple",
      "keySummary": "Lower atherogenic particles by cutting saturated animal fats, increasing soluble beta-glucan fiber (oats, psyllium, beans), and staying physically active.",
      "actionSteps": [
        "Replace saturated fats (butter, ghee, fatty meats, palm oil) with polyunsaturated and monounsaturated plant fats",
        "Consume at least 10-15 grams of viscous SOLUBLE fiber daily (binds cholesterol in bile and excretes it via the bowel)",
        "Incorporate 2 grams of plant sterols and stanols daily (competes with intestinal cholesterol absorption)",
        "Perform 30-45 minutes of aerobic cardio 4-5 times a week to increase protective HDL and reduce triglycerides",
        "Completely quit smoking: Tobacco smoking chemically oxidizes LDL, making it vastly more atherogenic and toxic to arteries"
      ],
      "dietaryProtocol": [
        "Eat 1 cup of cooked oatmeal or oat bran daily (rich in soluble beta-glucan)",
        "Add 1-2 tablespoons of psyllium husk or ground flaxseeds to morning smoothies or yogurt",
        "Eat 1 handful (30-40g) of raw almonds or walnuts daily",
        "Strictly limit full-fat dairy, heavy cream, processed sausages, and fried bakery pastries"
      ],
      "biomarkersToTrack": [
        "Apolipoprotein B (ApoB) and Non-HDL Cholesterol",
        "Direct LDL-C (< 100 mg/dL for low risk; < 70 mg/dL for high risk; < 55 mg/dL for post-heart attack)",
        "Lipoprotein(a) [Lp(a)] — test at least once in your life to identify genetic risk",
        "Serum Triglycerides (< 150 mg/dL)"
      ],
      "references": [
        "Grundy SM, et al. 2018 AHA/ACC Multisociety Guideline on the Management of Blood Cholesterol.",
        "Mach F, et al. 2019 ESC/EAS Guidelines for the Management of Dyslipidaemias. Eur Heart J. 2020.",
        "National Lipid Association (NLA) Scientific Statements on Soluble Fiber and Lipids."
      ]
    },
    {
      "id": "prevent-kidney",
      "title": "How to Protect Kidney Health",
      "title_ml": "വൃക്കകളുടെ ആരോഗ്യം എങ്ങനെ സംരക്ഷിക്കാം?",
      "title_hi": "किडनी को स्वस्थ कैसे रखें?",
      "title_ar": "كيفية حماية صحة الكلى ووظائفها",
      "icon": "shield",
      "color": "teal",
      "keySummary": "Keep renal microvessels healthy by controlling blood pressure, managing blood sugar, avoiding NSAID painkiller abuse, and drinking adequate clean water.",
      "actionSteps": [
        "Maintain tight blood pressure control (< 120-130 mmHg systolic) — hypertension is the second leading cause of kidney failure",
        "Keep blood glucose in optimal ranges (HbA1c < 6.5-7.0%) — diabetes is the number one cause of end-stage renal disease",
        "NEVER take over-the-counter NSAID painkillers (Ibuprofen, Naproxen, Diclofenac) chronically without medical supervision",
        "Stay well-hydrated with clean water throughout the day (helps flush sodium and urea from the kidneys and prevents kidney stones)",
        "Limit dietary sodium to < 2,000 mg/day to lower intraglomerular capillary hypertension"
      ],
      "dietaryProtocol": [
        "Avoid excessive mega-dose protein diets (> 2.0 g/kg/day) if pre-existing mild renal impairment exists",
        "Avoid dark colas and processed foods containing added inorganic phosphate food additives",
        "Consume plenty of fresh vegetables, berries, and plant-forward meals",
        "NEVER eat starfruit (carambola) if you have any degree of kidney dysfunction"
      ],
      "biomarkersToTrack": [
        "Estimated Glomerular Filtration Rate (eGFR >= 90 mL/min/1.73m2 is normal; < 60 indicates CKD)",
        "Urine Albumin-to-Creatinine Ratio (uACR < 30 mg/g is normal; > 30 indicates microalbuminuria)",
        "Serum Creatinine and Blood Urea Nitrogen (BUN)",
        "Serum Electrolytes (Sodium, Potassium, Phosphorus, Calcium)"
      ],
      "references": [
        "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease.",
        "National Kidney Foundation (NKF) KDOQI Guidelines.",
        "WHO Factsheet on Chronic Kidney Disease and Prevention."
      ]
    },
    {
      "id": "prevent-liver",
      "title": "How to Improve Liver Health",
      "title_ml": "കരളിന്റെ ആരോഗ്യം എങ്ങനെ മെച്ചപ്പെടുത്താം?",
      "title_hi": "लिवर को स्वस्थ और डिटॉक्स कैसे रखें?",
      "title_ar": "كيفية تحسين صحة الكبد والوقاية من تليفه",
      "icon": "disc",
      "color": "emerald",
      "keySummary": "Reverse hepatic steatosis by cutting out high-fructose corn syrup and alcohol, drinking black coffee, losing 7-10% of body weight, and exercising regularly.",
      "actionSteps": [
        "Eliminate all sugar-sweetened beverages and high-fructose corn syrups (fructose is metabolized exclusively in the liver directly into fat)",
        "Drink 2 to 3 cups of filtered black coffee daily (coffee consumption is strongly backed by hepatologists to reduce liver stiffness and lower fibrosis risk)",
        "Limit or completely eliminate alcohol intake (alcohol and obesity act synergistically to accelerate liver cirrhosis)",
        "Target a 7% to 10% weight loss if fatty liver is present (consistently leads to resolution of steatohepatitis and regression of liver fibrosis)",
        "Get vaccinated against Hepatitis A and Hepatitis B"
      ],
      "dietaryProtocol": [
        "Adopt a Mediterranean diet rich in extra virgin olive oil, cruciferous vegetables, and wild fish",
        "Incorporate garlic, turmeric, green tea, and raw walnuts",
        "Avoid all untested herbal 'detox' supplements and teas (unregulated herbs are a leading cause of drug-induced toxic liver injury)",
        "Strictly avoid raw or undercooked shellfish/oysters to prevent deadly Vibrio vulnificus sepsis"
      ],
      "biomarkersToTrack": [
        "Liver Transaminases: Alanine Aminotransferase (ALT < 30 U/L in men, < 19 U/L in women) and AST",
        "FIB-4 Index (calculated from age, AST, ALT, platelets to stage fibrosis)",
        "Abdominal Ultrasound or Transient Elastography (FibroScan CAP score)"
      ],
      "references": [
        "Rinella ME, et al. AASLD Practice Guidance on NAFLD/MASLD. Hepatology. 2023.",
        "European Association for the Study of the Liver (EASL) Clinical Practice Guidelines on Fatty Liver.",
        "New England Journal of Medicine Review: Pathogenesis and Management of Metabolic Liver Disease."
      ]
    },
    {
      "id": "prevent-mental",
      "title": "How to Improve Mental Health & Resilience",
      "title_ml": "മാനസികാരോഗ്യവും കരുത്തും എങ്ങനെ മെച്ചപ്പെടുത്താം?",
      "title_hi": "मानसिक स्वास्थ्य और मानसिक मजबूती कैसे बढ़ाएं?",
      "title_ar": "كيفية تعزيز الصحة النفسية والمرونة العقلية",
      "icon": "smile",
      "color": "indigo",
      "keySummary": "Build emotional stability and counter depression/anxiety through 150 minutes of aerobic exercise, 7-8 hours of sleep, morning sunlight, mindfulness, and strong social connections.",
      "actionSteps": [
        "Exercise daily: 30-40 minutes of aerobic movement stimulates Brain-Derived Neurotrophic Factor (BDNF) and endorphins, matching the efficacy of mild antidepressants in clinical trials",
        "Step outside into natural morning sunlight for 15-20 minutes within an hour of waking (anchors circadian rhythms and stimulates serotonin)",
        "Practice daily Box Breathing (4 seconds in, 4 hold, 4 out, 4 hold) or meditation to downregulate sympathetic hyperarousal",
        "Maintain deep, authentic human relationships: Social connection is the single greatest predictor of longevity and happiness (Harvard Study of Adult Development)",
        "Establish a strict 'digital sunset': Turn off work emails and emotionally charged news feeds at least 1-2 hours before sleep"
      ],
      "dietaryProtocol": [
        "Nourish the Gut-Brain Axis: Eat 30 different plant foods weekly (vegetables, berries, legumes, nuts, seeds)",
        "Incorporate unpasteurized fermented probiotic foods (kefir, plain yogurt, kimchi) to support neurotransmitter precursors",
        "Consume cold-water fatty fish rich in Omega-3 EPA/DHA (proven adjunctive mood stabilizer)",
        "Eliminate excessive caffeine and avoid alcohol as a sedative"
      ],
      "biomarkersToTrack": [
        "Sleep quality and REM/Deep sleep duration (via wearable or sleep diary)",
        "Heart Rate Variability (HRV — higher HRV indicates strong parasympathetic vagal tone)",
        "Validated screening scores: PHQ-9 (Depression) and GAD-7 (Anxiety) self-checkups"
      ],
      "references": [
        "American Psychological Association (APA) Stress and Resilience Guidelines.",
        "Waldinger RJ, Schulz MS. The Good Life: Lessons from the World's Longest Scientific Study of Happiness. Harvard.",
        "World Health Organization (WHO) Comprehensive Mental Health Action Plan."
      ]
    },
    {
      "id": "prevent-cancer",
      "title": "How to Reduce Cancer Risk",
      "title_ml": "കാൻസർ സാധ്യത എങ്ങനെ കുറയ്ക്കാം?",
      "title_hi": "कैंसर के खतरे को कैसे कम करें?",
      "title_ar": "كيفية تقليل مخاطر الإصابة بالسرطان",
      "icon": "ribbon",
      "color": "rose",
      "keySummary": "Over 40% of all cancers are preventable. Zero tobacco, zero tanning beds, HPV and Hepatitis B vaccinations, limiting alcohol, eating high-fiber diets, and age-based screening tests save lives.",
      "actionSteps": [
        "Never smoke or use tobacco in any form (tobacco causes at least 15 different types of cancer, not just lung cancer)",
        "Get vaccinated against cancer-causing viruses: HPV vaccine (prevents cervical, anal, and throat cancers) and Hepatitis B vaccine (prevents liver cancer)",
        "Stay up to date with routine screening tests: Colonoscopy/FIT at age 45, Mammograms at age 40-50, and Pap/HPV smears at age 21-25",
        "Practice sun safety: Apply SPF 30+ broad-spectrum sunscreen, seek shade between 10 AM and 4 PM, and NEVER use indoor UV tanning beds",
        "Limit alcohol consumption strictly (alcohol is classified by WHO as a Group 1 human carcinogen for breast, colon, esophageal, and liver cancers)"
      ],
      "dietaryProtocol": [
        "Eliminate or strictly limit processed meats (bacon, sausages, hot dogs, cold cuts) — classified as Group 1 carcinogens",
        "Limit red meat intake to less than 350-500 grams cooked per week",
        "Eat at least 35 grams of plant fiber daily (protects against colorectal cancer by binding toxins and producing butyrate)",
        "Consume cruciferous vegetables (broccoli, Brussels sprouts) rich in sulforaphane to aid DNA damage repair"
      ],
      "biomarkersToTrack": [
        "Age-appropriate screening completion (Colonoscopy every 10 years or FIT annually, Mammography biennial)",
        "Fecal Immunochemical Test (FIT) / Stool DNA",
        "Low-Dose Chest CT for high-risk smokers aged 50-80"
      ],
      "references": [
        "World Cancer Research Fund / American Institute for Cancer Research (AICR) Diet, Nutrition, Physical Activity and Cancer: A Global Perspective.",
        "American Cancer Society (ACS) Guidelines on Nutrition and Physical Activity for Cancer Prevention.",
        "World Health Organization (WHO) Global Cancer Prevention Report."
      ]
    },
    {
      "id": "prevent-immunity",
      "title": "How to Improve Immunity Naturally",
      "title_ml": "രോഗപ്രതിരോധശേഷി സ്വാഭാവികമായി എങ്ങനെ വർദ്ധിപ്പിക്കാം?",
      "title_hi": "इम्यूनिटी (रोग प्रतिरोधक क्षमता) स्वाभाविक रूप से कैसे बढ़ाएं?",
      "title_ar": "كيفية تقوية المناعة الطبيعية للجسم",
      "icon": "shield-check",
      "color": "cyan",
      "keySummary": "True immune resilience requires deep sleep, regular moderate exercise, adequate Vitamin D (30-50 ng/mL), Zinc, Vitamin C, gut microbiome diversity, and up-to-date immunizations.",
      "actionSteps": [
        "Prioritize 7 to 8 hours of restorative sleep nightly: During sleep, the immune system releases protective cytokines; chronic sleep deprivation cuts antibody responses in half",
        "Engage in regular moderate aerobic exercise (30-45 minutes brisk walking): Enhances circulation of Natural Killer (NK) cells and immunoglobulins",
        "Keep all recommended adult and childhood vaccinations up-to-date (vaccines train adaptive T and B memory cells safely)",
        "Wash hands properly with soap and warm water for 20 seconds, especially before eating and after being in crowded public areas",
        "Manage chronic emotional stress: Sustained high cortisol suppresses circulating lymphocyte counts and antibody production"
      ],
      "dietaryProtocol": [
        "Optimize Vitamin D levels: Maintain serum 25(OH)D between 30 and 50 ng/mL through safe sun and D3 supplements",
        "Eat Vitamin C rich foods daily (guavas, oranges, bell peppers, kiwis) to support epithelial barrier integrity and leukocyte chemotaxis",
        "Consume Zinc-rich foods (pumpkin seeds, lentils, shellfish, eggs) essential for T-lymphocyte development and thymic hormone function",
        "Consume garlic, ginger, and turmeric containing active antimicrobial and immunomodulatory organosulfur compounds"
      ],
      "biomarkersToTrack": [
        "Serum 25-Hydroxyvitamin D [25(OH)D] (Target 30 - 50 ng/mL)",
        "Complete Blood Count (CBC with differential: Absolute Neutrophil and Lymphocyte counts)",
        "Serum Ferritin and Zinc levels"
      ],
      "references": [
        "Calder PC, et al. Optimal Nutritional Status for a Well-Functioning Immune System is an Important Factor to Protect against Viral Infections. Nutrients. 2020.",
        "Nieman DC, Wentz LM. The Compelling Link between Physical Activity and the Body's Defense System. J Sport Health Sci. 2019.",
        "World Health Organization (WHO) Vaccines and Immunization Bulletin."
      ]
    }
  ],
  "nutrition": {
    "disclaimer": "Medical Nutrition Notice: While nutrient-dense whole foods support cellular health, reduce chronic disease risks, and aid medical management, no single food or diet is claimed to cure or replace evidence-based medical treatment. Always consult your physician or registered dietitian before making drastic dietary changes.",
    "mealIdeas": [
      {
        "id": "breakfast-1",
        "meal": "Healthy Breakfast",
        "title": "Balanced Metabolic Morning Bowl",
        "desc": "High in complex soluble fiber and bioavailable protein to blunt morning cortisol and prevent mid-morning glycemic spikes.",
        "items": [
          "1 bowl of steel-cut oats prepared with unsweetened almond milk or water",
          "1 tablespoon chia seeds and 5 crushed raw walnuts",
          "½ cup fresh wild blueberries or raspberries (polyphenol antioxidants)",
          "2 boiled pasture-raised eggs or 120g grilled spiced tofu",
          "1 cup of unsweetened green tea or warm lemon ginger infusion"
        ],
        "portionGuide": "50% fiber and berries, 25% complex slow-digesting oats, 25% high-quality protein.",
        "recipe": "Simmer oats for 10 minutes. Stir in chia seeds and cinnamon. Top with walnuts and fresh berries. Serve with eggs/tofu on the side.",
        "calories": "390 kcal",
        "protein": "24g",
        "carbs": "44g",
        "fiber": "11g",
        "fat": "14g"
      },
      {
        "id": "breakfast-2",
        "meal": "Healthy Breakfast",
        "title": "Avocado & Sprouted Grain Protein Toast",
        "desc": "Rich in monounsaturated oleic acid, micronutrients, and plant sterols to promote long-lasting satiety and endothelial health.",
        "items": [
          "2 slices of 100% sprouted whole grain bread (Ezekiel style), toasted",
          "½ ripe avocado mashed with fresh lime juice, sea salt, and red pepper flakes",
          "2 poached eggs or grilled tempeh strips",
          "1 cup of baby arugula and cherry tomatoes dressed with extra virgin olive oil",
          "1 cup of black coffee without added sugar"
        ],
        "portionGuide": "Moderate carbohydrates, rich in monounsaturated fats and essential amino acids.",
        "recipe": "Toast sprouted bread. Mash avocado with lime and spread over toast. Top with poached eggs. Serve alongside dressed arugula and tomatoes.",
        "calories": "420 kcal",
        "protein": "22g",
        "carbs": "36g",
        "fiber": "9g",
        "fat": "22g"
      },
      {
        "id": "lunch-1",
        "meal": "Healthy Lunch",
        "title": "Mediterranean Cardioprotective Plate",
        "desc": "Designed using the Gold-Standard Half-Plate rule: maximizing potassium, lutein, and healthy unsaturated lipids.",
        "items": [
          "½ Plate: Steamed broccoli, tossed baby spinach, cucumbers, and red bell peppers with olive oil and lemon",
          "¼ Plate: 120g grilled wild-caught salmon or grilled mackerel (rich in EPA/DHA Omega-3s)",
          "¼ Plate: ½ cup cooked brown basmati rice or tri-color quinoa",
          "1 small bowl of homemade lentil soup (dal or minestrone)",
          "Plain filtered water with a slice of fresh cucumber"
        ],
        "portionGuide": "Half plate fresh non-starchy vegetables, one quarter plate lean protein, one quarter plate whole complex grains.",
        "recipe": "Season salmon with dill, garlic, and lemon juice; grill for 4-5 minutes per side. Steam vegetables until tender-crisp. Serve with quinoa.",
        "calories": "480 kcal",
        "protein": "36g",
        "carbs": "46g",
        "fiber": "10g",
        "fat": "16g"
      },
      {
        "id": "lunch-2",
        "meal": "Healthy Lunch",
        "title": "Rainbow Lentil & Roasted Chickpea Power Bowl",
        "desc": "100% plant-powered lunch providing complete amino acids, gut-microbiome prebiotic fiber, and minerals.",
        "items": [
          "1 cup warm cooked beluga black lentils and quinoa base",
          "½ cup spiced oven-roasted crispy chickpeas (cumin, paprika, turmeric)",
          "Shredded purple cabbage, grated carrots, and steamed kale",
          "2 tablespoons tahini-lemon dressing",
          "1 tablespoon raw pumpkin seeds (pepitas)"
        ],
        "portionGuide": "High plant fiber, low saturated fat, packed with plant-based iron and magnesium.",
        "recipe": "Roast seasoned chickpeas at 400°F (200°C) for 20 minutes until crunchy. Assemble bowls with lentil base, raw and steamed greens, top with chickpeas and drizzle with tahini.",
        "calories": "460 kcal",
        "protein": "22g",
        "carbs": "62g",
        "fiber": "16g",
        "fat": "15g"
      },
      {
        "id": "dinner-1",
        "meal": "Healthy Dinner",
        "title": "Light Glycemic Recovery Dinner",
        "desc": "Low in heavy starches to prevent nocturnal gastroesophageal reflux and promote restful slow-wave sleep and liver glycogen recovery.",
        "items": [
          "1 large bowl of hearty vegetable broth with shredded cabbage, carrots, celery, and ginger",
          "140g baked herb-crusted skinless chicken breast or grilled firm tofu",
          "Steamed asparagus spears and roasted zucchini rounds drizzled with olive oil",
          "1 small roasted sweet potato (skin intact for fiber)",
          "1 cup of hot chamomile herbal tea 1 hour after dinner"
        ],
        "portionGuide": "Light on starchy carbs, generous in warm broths and digestible cooked vegetables.",
        "recipe": "Bake chicken or tofu with rosemary, thyme, and olive oil at 375°F (190°C) for 25 minutes. Steam asparagus for 4 minutes. Enjoy with a light bowl of vegetable soup.",
        "calories": "410 kcal",
        "protein": "38g",
        "carbs": "34g",
        "fiber": "8g",
        "fat": "12g"
      },
      {
        "id": "dinner-2",
        "meal": "Healthy Dinner",
        "title": "Steamed White Fish with Turmeric-Ginger Greens",
        "desc": "Ultra-lean, easily digested marine protein loaded with anti-inflammatory spices and bioavailable iodine.",
        "items": [
          "150g steamed cod, sea bass, or tilapia with grated fresh ginger and scallions",
          "1 large plate of sauteed bok choy, garlic, and spinach with a drop of sesame oil",
          "½ cup steamed cauliflower rice tossed with peas and cilantro",
          "Warm turmeric and black pepper golden tea"
        ],
        "portionGuide": "High-protein, low-calorie, extremely light on the digestive tract before sleep.",
        "recipe": "Place fish fillets in a steamer over boiling water infused with ginger and scallions for 8-10 minutes. Saute greens with garlic for 3 minutes. Serve immediately.",
        "calories": "340 kcal",
        "protein": "35g",
        "carbs": "18g",
        "fiber": "7g",
        "fat": "8g"
      }
    ],
    "foodCategories": [
      {
        "category": "Fruits & Vegetables",
        "badge": "Phytonutrient Powerhouses",
        "icon": "sun",
        "desc": "Rich in vitamins, minerals, water, and protective polyphenols that reduce systemic oxidative stress.",
        "examples": [
          {
            "name": "Dark Leafy Greens (Spinach, Kale, Swiss Chard)",
            "benefit": "Rich in folate, lutein, and dietary nitrates that dilate arteries and reduce blood pressure."
          },
          {
            "name": "Cruciferous Vegetables (Broccoli, Cauliflower, Brussels Sprouts)",
            "benefit": "Contains sulforaphane, supporting hepatic phase II detoxification and cellular antioxidant defenses."
          },
          {
            "name": "Berries (Blueberries, Blackberries, Strawberries)",
            "benefit": "Packed with anthocyanins shown to improve insulin sensitivity and cognitive memory."
          },
          {
            "name": "Citrus Fruits (Oranges, Lemons, Grapefruit)",
            "benefit": "High in bioavailable Vitamin C, hesperidin, and bioflavonoids for vascular endothelial health."
          }
        ]
      },
      {
        "category": "Protein-Rich Foods",
        "badge": "Tissue & Muscle Builders",
        "icon": "activity",
        "desc": "Essential building blocks for enzymes, neurotransmitters, lean muscle tissue, and immune antibodies.",
        "examples": [
          {
            "name": "Fatty Cold-Water Fish (Wild Salmon, Sardines, Mackerel)",
            "benefit": "Provides complete amino acids and potent anti-inflammatory EPA and DHA Omega-3 fatty acids."
          },
          {
            "name": "Eggs (Pasture-Raised)",
            "benefit": "Contains all 9 essential amino acids, choline for brain cell membranes, and lutein for vision."
          },
          {
            "name": "Legumes (Lentils, Chickpeas, Black Beans)",
            "benefit": "Dual powerhouse of plant protein and prebiotic soluble fiber that stabilizes blood glucose."
          },
          {
            "name": "Tofu, Tempeh, and Edamame",
            "benefit": "High-quality complete plant protein rich in isoflavones that support cardiovascular health."
          }
        ]
      },
      {
        "category": "Fiber-Rich Foods",
        "badge": "Gut Microbiome & Metabolic Fuel",
        "icon": "layers",
        "desc": "Slows digestion, binds circulating cholesterol in the gut, and fuels beneficial microbiome species.",
        "examples": [
          {
            "name": "Steel-Cut Oats and Barley",
            "benefit": "Rich in beta-glucan soluble fiber proven to lower LDL cholesterol and flatten glucose curves."
          },
          {
            "name": "Chia Seeds and Ground Flaxseeds",
            "benefit": "Contains mucilaginous fiber and ALA Omega-3s that promote smooth bowel transit."
          },
          {
            "name": "Psyllium Husk",
            "benefit": "Clinically proven soluble fiber that adds soft bulk to stool and improves both constipation and loose stools."
          },
          {
            "name": "Artichokes, Onions, and Garlic",
            "benefit": "Inulin prebiotic fibers that selectively nourish beneficial Bifidobacteria in the colon."
          }
        ]
      },
      {
        "category": "Healthy Fats",
        "badge": "Hormone & Brain Lipids",
        "icon": "heart",
        "desc": "Essential for lipid-soluble vitamin absorption, cellular membrane fluidity, and hormone synthesis.",
        "examples": [
          {
            "name": "Extra Virgin Olive Oil (Cold-Pressed)",
            "benefit": "Rich in oleic acid and oleocanthal, reducing arterial inflammation and oxidized LDL."
          },
          {
            "name": "Raw Tree Nuts (Walnuts, Almonds, Pistachios)",
            "benefit": "High in monounsaturated fats, vitamin E, and L-arginine which promotes nitric oxide vasodilation."
          },
          {
            "name": "Avocados",
            "benefit": "Loaded with potassium (more than bananas), glutathione, and monounsaturated fatty acids."
          },
          {
            "name": "Seeds (Pumpkin, Sunflower, Sesame)",
            "benefit": "Rich in zinc, magnesium, and phytosterols that compete with intestinal cholesterol absorption."
          }
        ]
      }
    ],
    "conditionSpecificFoods": [
      {
        "condition": "Foods for Heart Health",
        "condition_ml": "ഹൃദയാരോഗ്യത്തിനുള്ള ഭക്ഷണങ്ങൾ",
        "color": "rose",
        "target": "Lower LDL, reduce blood pressure, stabilize arterial plaques",
        "recommended": [
          "Wild salmon, mackerel, and sardines (Omega-3 fatty acids)",
          "Extra virgin olive oil as the primary dietary cooking oil",
          "Oatmeal, oat bran, and psyllium husk (binds bile acids)",
          "Dark berries, pomegranates, and dark chocolate (> 75% cacao in moderation)",
          "Unsalted almonds, walnuts, and flaxseeds"
        ],
        "limitAvoid": [
          "Trans fats, partially hydrogenated vegetable shortenings, and fried bakery items",
          "High-sodium processed deli meats, canned soups, and salty condiments",
          "Excessive saturated fats from fatty red meats and palm kernel oils"
        ]
      },
      {
        "condition": "Foods for Diabetes Management",
        "condition_ml": "പ്രമേഹ നിയന്ത്രണത്തിനുള്ള ഭക്ഷണങ്ങൾ",
        "color": "blue",
        "target": "Blunt postprandial glucose surges, increase insulin sensitivity, protect microvessels",
        "recommended": [
          "Non-starchy cruciferous vegetables (spinach, methi, broccoli, bitter gourd/karela)",
          "Steel-cut oats, quinoa, and brown basmati rice in measured portions",
          "Legumes, lentils, and chickpeas (resistant starch)",
          "Raw tree nuts, avocados, and cinnamon",
          "Lean proteins (fish, egg whites, tofu, skinless poultry) paired with carbs"
        ],
        "limitAvoid": [
          "Sugar-sweetened carbonated sodas, packaged fruit juices, and sweetened teas",
          "Refined white flour products (white bread, white rice, naan, maida)",
          "High-fructose corn syrups, sweets, confectioneries, and candy"
        ]
      },
      {
        "condition": "Foods for Kidney Health",
        "condition_ml": "വൃക്കയുടെ ആരോഗ്യത്തിനുള്ള ഭക്ഷണങ്ങൾ",
        "color": "teal",
        "target": "Reduce renal filtration workload, manage electrolytes and phosphorus",
        "recommended": [
          "Cauliflower, cabbage, and cucumbers (low in potassium and phosphorus)",
          "Apples, blueberries, strawberries, and red grapes (kidney-safe low-potassium fruits)",
          "Egg whites (high-biological-value protein with low phosphorus content)",
          "Olive oil and garlic (flavorful seasoning without adding table salt)",
          "Adequate pure water intake (unless on strict medical fluid restriction)"
        ],
        "limitAvoid": [
          "Starfruit (Carambola contains a potent neurotoxin that failing kidneys cannot excrete)",
          "High-phosphorus dark cola sodas, processed cheeses, and organ meats",
          "Excessive high-potassium foods (bananas, potatoes, tomatoes) in advanced CKD",
          "High-sodium salted snacks, pickles, and processed broths"
        ]
      },
      {
        "condition": "Foods for Liver Health",
        "condition_ml": "കരളിന്റെ ആരോഗ്യത്തിനുള്ള ഭക്ഷണങ്ങൾ",
        "color": "emerald",
        "target": "Reduce intrahepatic triglycerides, prevent oxidative fibrogenesis",
        "recommended": [
          "Black coffee (2 to 3 cups daily proven to reduce liver stiffness and lower fibrosis risk)",
          "Cruciferous vegetables (broccoli, Brussels sprouts, kale) rich in sulforaphane",
          "Cold-pressed extra virgin olive oil and fresh avocados",
          "Fatty fish high in Omega-3 fatty acids",
          "Green tea rich in epigallocatechin gallate (EGCG)"
        ],
        "limitAvoid": [
          "Alcohol in all forms (alcohol directly drives steatohepatitis and cirrhosis)",
          "High-fructose corn syrup, sweetened sodas, and sweet fruit nectars (fructose directly converts to liver fat)",
          "Trans fats, deep-fried fast food items, and burnt charred meats",
          "Unverified over-the-counter herbal supplements that can cause drug-induced liver injury"
        ]
      }
    ]
  },
  "articles": [
    {
      "id": "article-1",
      "title": "Understanding Insulin Resistance: The Silent Driver of Modern Chronic Disease",
      "title_ml": "ഇൻസുലിൻ റെസിസ്റ്റൻസ്: ആധുനിക ജീവിതശൈലി രോഗങ്ങളുടെ നിശബ്ദ കാരണം",
      "category": "Metabolic Health",
      "author": "Dr. Rachel Varghese, MD (Endocrinology)",
      "readTime": "7 min read",
      "date": "October 14, 2024",
      "summary": "How cellular resistance to insulin silently damages arteries, liver, and brain years before blood sugar levels cross into diabetes thresholds.",
      "content": "\nInsulin resistance is widely recognized by modern metabolic physicians as the primary unifying pathophysiological root behind Type 2 diabetes, essential hypertension, non-alcoholic fatty liver disease, and atherosclerotic cardiovascular disease.\n\n### What Really Happens at the Cellular Level?\nInsulin is an anabolic hormone secreted by pancreatic beta cells. Its classic role is to facilitate the transport of circulating glucose into skeletal muscle and adipose tissue via GLUT4 glucose transporters. When muscle and liver cells are chronically overloaded with excess dietary energy—particularly refined carbohydrates and saturated fats—cellular intracellular lipid metabolites (diacylglycerols and ceramides) accumulate. \n\nThese lipid intermediates trigger stress kinases (such as Protein Kinase C) that phosphorylate insulin receptor substrates (IRS-1) on serine rather than tyrosine residues. This molecular defect disrupts normal downstream PI3K-Akt signaling, meaning cells effectively 'lock the door' against incoming glucose.\n\n### The Compensatory Hyperinsulinemia Trap\nIn response, the pancreas attempts to compensate by pumping out ever-increasing amounts of insulin to force glucose into resistant cells. For 10 to 15 years, a patient may exhibit entirely normal fasting blood glucose levels on standard annual checkups! However, their fasting insulin level is quietly skyrocketing. \n\nThis chronic hyperinsulinemia has severe systemic consequences:\n1. **Renal Sodium Retention:** High insulin stimulates the epithelial sodium channel (ENaC) in kidney tubules, forcing the body to reabsorb sodium and water, driving up blood pressure.\n2. **Hepatic De Novo Lipogenesis:** The liver converts excess glucose into palmitate and triglycerides, packaging them into atherogenic VLDL particles and depositing fat inside hepatocytes (Fatty Liver).\n3. **Endothelial Dysfunction:** Insulin resistance blunts endothelial nitric oxide synthase (eNOS) production, causing blood vessels to remain constricted and stiff.\n\n### Evidence-Based Reversal Strategies\nClinical trials have repeatedly proven that insulin resistance is not a permanent sentence—it is highly reversible:\n- **Muscle Contraction Without Insulin:** Aerobic exercise and resistance training trigger GLUT4 translocation through the AMP-activated protein kinase (AMPK) pathway completely independently of insulin!\n- **Time-Restricted Eating:** Extending the overnight fasting window to 12-14 hours allows circulating insulin levels to drop, permitting hepatic glycogen depletion and initiating cellular autophagy.\n- **Replacing Refined Starches with Soluble Fiber:** Beta-glucans from oats and legumes slow glucose absorption into portal circulation, preventing sharp insulin surges.\n    ",
      "references": [
        "Petersen MC, Shulman GI. Mechanisms of Insulin Action and Insulin Resistance. Physiol Rev. 2018;98(4):2133-2223.",
        "American Diabetes Association (ADA) Standards of Care in Diabetes 2024.",
        "The Lancet Diabetes & Endocrinology: Pathogenesis of Type 2 Diabetes Remission."
      ]
    },
    {
      "id": "article-2",
      "title": "The Science of Blood Pressure: Why Salt, Potassium, and Arterial Elasticity Matter",
      "title_ml": "രക്തസമ്മർദ്ദത്തിന്റെ ശാസ്ത്രം: ഉപ്പ്, പൊട്ടാസ്യം, രക്തക്കുഴലുകളുടെ ഇലാസ്തികത",
      "category": "Cardiovascular Health",
      "author": "Dr. Anand Menon, MD, DM (Cardiology)",
      "readTime": "6 min read",
      "date": "November 2, 2024",
      "summary": "Why blood pressure is more than just a number: how the sodium-to-potassium ratio and vascular endothelial health protect against stroke.",
      "content": "\nHypertension is often called the 'silent killer' because persistent elevations in arterial wall tension produce zero noticeable symptoms while relentlessly stiffening large elastic conduit arteries and microvessels throughout the brain, heart, and kidneys.\n\n### The Sodium-to-Potassium Ratio\nModern nutritional science highlights that it is not merely excess sodium intake, but the imbalance between high sodium and low dietary potassium that drives hypertension:\n- **Sodium Overload:** Excess dietary sodium pulls water into the intravascular circulation, expanding plasma volume. In salt-sensitive individuals, the kidneys struggle to excrete this load without raising perfusion pressure.\n- **The Potassium Counterbalance:** Potassium acts as the body's natural diuretic and vasodilator. High dietary potassium stimulates the sodium-potassium ATPase pump in vascular smooth muscle, causing relaxation of arterial walls and promoting urinary excretion of excess sodium.\n\n### Arterial Stiffness and Pulse Wave Velocity\nIn healthy youth, the aorta and large elastic arteries stretch during ventricular systole to absorb the pulse wave, then recoil during diastole to maintain steady perfusion to coronary arteries. With chronic hypertension, aging, and smoking, the elastic fibers (elastin) in arterial walls fray and are replaced with stiff, unyielding collagen.\n\nWhen arteries become stiff, the pulse wave travels faster toward peripheral tissues and bounces back prematurely during systole rather than diastole. This creates two catastrophic problems:\n1. It drastically increases **systolic pressure** (afterload), forcing the left ventricle to work harder, causing Left Ventricular Hypertrophy (LVH).\n2. It causes a sharp drop in **diastolic pressure**, starving the coronary arteries of perfusion, which happens almost exclusively during diastole.\n\n### Practical Steps to Protect Your Arteries\n- **Adhere to the DASH Diet:** Rich in fruits, vegetables, and low-fat dairy, delivering > 4,700 mg of natural potassium daily while keeping sodium < 1,500-2,300 mg.\n- **Isometric Handgrip Training:** Clinical trials confirm that squeezing an isometric handgrip dynamometer for 2 minutes (at 30% maximum voluntary contraction) 4 times with rest intervals, 3 days a week, triggers compensatory vasodilation and lowers resting systolic BP by 8-10 mmHg!\n- **Morning Home Monitoring:** Always measure blood pressure after sitting quietly for 5 minutes, back supported, feet flat on the floor, without talking.\n    ",
      "references": [
        "Whelton PK, et al. 2017 ACC/AHA High Blood Pressure Clinical Practice Guideline. Circulation. 2018;138(17):e484-e594.",
        "World Health Organization (WHO) Hypertension Factsheet 2023.",
        "New England Journal of Medicine: Dietary Sodium and Potassium Balance in Hypertension."
      ]
    },
    {
      "id": "article-3",
      "title": "Gut Microbiome and Mental Health: The Enteric Nervous System Connection",
      "title_ml": "ദഹനവ്യവസ്ഥയും മാനസികാരോഗ്യവും: ഗട്ട്-ബ്രെയിൻ ആക്സിസ്",
      "category": "Mental Health & Neurobiology",
      "author": "Dr. Maya Nair, MD, PhD (Neuroscience & Psychiatry)",
      "readTime": "8 min read",
      "date": "November 10, 2024",
      "summary": "Exploring the bidirectional Gut-Brain Axis: how intestinal microbes produce neurotransmitters, modulate the vagus nerve, and shape mood.",
      "content": "\nDid you know that over 90% of the body's serotonin—the neurotransmitter critical for mood regulation, emotional stability, and sleep—is synthesized not in the brain, but inside the gastrointestinal tract by specialized enterochromaffin cells?\n\n### The Gut: Your 'Second Brain'\nThe Enteric Nervous System (ENS) contains over 500 million neurons embedded in the walls of the gastrointestinal tract—more than in the entire spinal cord! The gut and the central nervous system communicate continuously in a bidirectional superhighway termed the **Gut-Brain Axis**, primarily mediated through the **Vagus Nerve** (Cranial Nerve X).\n\nWhen you experience psychological stress, the brain releases cortisol and corticotropin-releasing factor (CRF). These stress hormones alter intestinal motility, increase intestinal mucosal permeability ('leaky gut'), and disrupt the microbial ecology of the microbiome.\n\n### Microbial Metabolites Shape Brain Chemistry\nTrillions of commensal bacteria residing in the colon act as an active endocrine organ:\n- **Short-Chain Fatty Acids (SCFAs):** When gut bacteria ferment prebiotic soluble dietary fibers, they produce acetate, propionate, and **butyrate**. Butyrate strengthens the blood-brain barrier, stimulates brain-derived neurotrophic factor (BDNF), and dampens microglial neuroinflammation.\n- **GABA Synthesis:** Specific probiotic strains, including *Lactobacillus rhamnosus* and *Bifidobacterium longum*, synthesize gamma-aminobutyric acid (GABA), the primary inhibitory neurotransmitter that calms anxiety and fear circuits in the amygdala.\n- **Systemic Cytokine Modulation:** Microbial dysbiosis allows bacterial lipopolysaccharide (LPS) endotoxins to leak into portal circulation, triggering systemic low-grade inflammation that crosses into the brain, causing depressive symptoms and fatigue.\n\n### Nurturing Your Microbiome for Mental Resilience\n- **Eat 30 Unique Plants Weekly:** Studies from the American Gut Project show that individuals who consume at least 30 different plant foods per week (fruits, vegetables, legumes, whole grains, nuts, seeds, and herbs) possess vastly greater microbiome diversity and lower anxiety scores.\n- **Incorporate Fermented Foods:** Daily intake of unpasteurized plain kefir, live-culture yogurt, kimchi, and fermented vegetables delivers live probiotic cultures that diversify the gut microbiota.\n- **Avoid Artificial Sweeteners and Emulsifiers:** Polysorbate 80 and carboxymethylcellulose in processed foods erode the protective mucus barrier of the gut lining.\n    ",
      "references": [
        "Cryan JF, et al. The Microbiota-Gut-Brain Axis. Physiol Rev. 2019;99(4):1877-2013.",
        "Lancet Psychiatry: Nutritional Psychiatry and the Gut Microbiome.",
        "Nature Reviews Neuroscience: Microbial Influences on Neurodevelopment and Behavior."
      ]
    },
    {
      "id": "article-4",
      "title": "Cancer Screenings by Age: A Complete Life-Course Prevention Checklist",
      "title_ml": "പ്രായത്തിനനുസരിച്ചുള്ള കാൻസർ പരിശോധനകൾ: സമ്പൂർണ്ണ മാർഗ്ഗരേഖ",
      "category": "Preventive Oncology",
      "author": "Dr. Suresh Chandran, MD (Surgical Oncology)",
      "readTime": "9 min read",
      "date": "November 18, 2024",
      "summary": "Evidence-based screening schedules for breast, cervical, colorectal, prostate, and lung cancers that save lives through early detection.",
      "content": "\nThe word 'cancer' carries profound emotional weight. Yet one of the most empowering truths in modern clinical oncology is that **over 50% of cancer deaths are entirely preventable**, and early-stage localized cancers frequently carry 5-year survival rates exceeding 90% to 95%.\n\nCancer screening is specifically designed for people who feel completely healthy and have zero symptoms. It identifies precancerous lesions (which can be removed before becoming malignant) or detects tiny localized tumors when they are easiest to cure.\n\n### In Your 20s & 30s: Cervical & Skin Awareness\n- **Cervical Cancer Screening (Ages 21-29):** Pap smear every 3 years. Starting at age 25 or 30, High-Risk HPV DNA co-testing every 5 years is the preferred standard.\n- **HPV Vaccination:** If you missed vaccination in adolescence, catch-up vaccination is recommended up to age 26, and approved up to age 45 after clinical consultation.\n- **Monthly Skin Self-Exam:** Check moles head-to-toe using the ABCDE rule (Asymmetry, Border, Color, Diameter, Evolving).\n\n### In Your 40s: Mammograms & Colon Cancer Screening\n- **Colorectal Cancer Screening (Starting at Age 45):** Standard guidelines now mandate screening starting at age 45 for all average-risk individuals. Options include a Screening Colonoscopy every 10 years, an annual Fecal Immunochemical Test (FIT), or a Stool DNA-FIT test every 3 years.\n- **Breast Cancer Screening (Starting at Age 40):** Annual or biennial screening digital mammography is recommended starting at age 40 to 50 based on personal risk discussion.\n\n### In Your 50s & Beyond: Prostate & Lung Cancer Screening\n- **Prostate Cancer (Ages 50+):** Shared decision-making regarding annual or biennial PSA blood testing (start at age 40-45 for Black men or those with strong family history).\n- **Lung Cancer (Ages 50-80 for Smokers):** Annual Low-Dose CT (LDCT) scan for adults aged 50 to 80 who have a 20 pack-year smoking history and currently smoke or have quit within the past 15 years.\n    ",
      "references": [
        "U.S. Preventive Services Task Force (USPSTF) Comprehensive Cancer Screening Recommendations.",
        "American Cancer Society (ACS) Guidelines for the Early Detection of Cancer 2024.",
        "World Health Organization (WHO) Guide to Cancer Early Diagnosis."
      ]
    },
    {
      "id": "article-5",
      "title": "Sleep Quality vs. Quantity: Why 7 Hours of Deep Sleep Protects Your Heart & Brain",
      "title_ml": "ഉറക്കത്തിന്റെ പ്രാധാന്യം: ഹൃദയത്തെയും തലച്ചോറിനെയും സംരക്ഷിക്കുന്ന ശാസ്ത്രം",
      "category": "Sleep Medicine & Longevity",
      "author": "Dr. Elizabeth Thomas, MD (Neurology & Sleep Medicine)",
      "readTime": "7 min read",
      "date": "November 25, 2024",
      "summary": "The vital mechanics of slow-wave sleep and the glymphatic system: how nightly sleep clears neurotoxic plaques and stabilizes blood pressure.",
      "content": "\nIn our fast-paced society, sleep is frequently sacrificed as a negotiable luxury. Modern neurobiology and cardiovascular research, however, prove that sleep is not a passive shutdown of the body, but an intensely active, metabolically critical biological maintenance state essential for physical survival.\n\n### The Glymphatic Brain-Washing System\nIn 2012, researchers discovered the **Glymphatic System**—a specialized brain waste-clearance pathway mediated by astroglial water channels (aquaporin-4). \n\nDuring the deepest stages of Non-REM slow-wave sleep, brain glial cells physically shrink by roughly 60%, allowing cerebrospinal fluid (CSF) to surge through brain interstitial spaces like a high-pressure dishwasher! This nightly rinse flushes out neurotoxic metabolic byproducts accumulated during waking hours, including **beta-amyloid** and **phosphorylated tau**—the very proteins that drive Alzheimer's disease.\n\n### The Cardiovascular 'Nocturnal Dip'\nDuring healthy slow-wave sleep, your sympathetic nervous system quiets down and the parasympathetic vagus nerve takes over. Heart rate slows and blood pressure naturally drops by 10% to 20%—a phenomenon cardiologists call the **'Nocturnal Dip'**.\n\nIndividuals with chronic insomnia, sleep apnea, or fragmented sleep are 'non-dippers'. Their blood pressure remains high throughout the night, bathing blood vessels and coronary arteries in damaging mechanical pressure 24 hours a day, doubling the risk of heart attacks and strokes.\n\n### 5 Evidence-Based Rules for Restorative Sleep\n1. **Unshakeable Wake-Up Time:** Wake up at the exact same hour 7 days a week, regardless of how you slept. This anchors your central circadian master clock (the suprachiasmatic nucleus).\n2. **Morning Sunlight:** Step outside into natural sunlight for 15-20 minutes within an hour of waking to stimulate daytime cortisol and set the nighttime melatonin timer.\n3. **Caffeine Curfew:** Eliminate coffee, tea, and energy drinks at least 8 to 10 hours before your planned bedtime.\n4. **Cool Bedroom Temperature:** Keep the bedroom cool (around 65°F / 18°C); a drop in core body temperature is mandatory to initiate slow-wave sleep.\n5. **No Screens in Bed:** Blue light from smartphones and tablets suppresses pineal melatonin secretion by up to 50%.\n    ",
      "references": [
        "Nedergaard M, Goldman SA. The Glymphatic System: A Beginner's Guide. Science. 2020;370(6512):50-56.",
        "American Heart Association (AHA) Life's Essential 8: Sleep Health Metric.",
        "Walker M. Why We Sleep: Unlocking the Power of Sleep and Dreams."
      ]
    }
  ],
  "i18n": {
    "en": {
      "siteTitle": "HEALTHCARE FOR YOU",
      "tagline": "Your Health. Your Future. Your Responsibility.",
      "heroSub": "Understand diseases, discover evidence-based prevention methods, and build a healthier lifestyle with trusted digital health education.",
      "btnExplore": "Explore Diseases",
      "btnStart": "Start Your Healthy Journey",
      "navHome": "Home",
      "navDiseases": "All Diseases",
      "navLifestyle": "Lifestyle Diseases",
      "navPrevention": "Prevention Centre",
      "navNutrition": "Healthy Nutrition",
      "navFitness": "Exercise & Fitness",
      "navMental": "Mental Health",
      "navSymptom": "Symptom Checker",
      "navTools": "Health Risk Tools",
      "navArticles": "Articles & Blogs",
      "navAbout": "About Us",
      "navContact": "Contact Us",
      "navDisclaimer": "Medical Disclaimer",
      "searchPlaceholder": "Search diseases, symptoms, nutrition...",
      "allCategories": "All Categories",
      "emergencyAlert": "MEDICAL EMERGENCY: If you have sudden crushing chest pain, difficulty breathing, or stroke symptoms (facial droop, arm weakness), call emergency services immediately.",
      "disclaimerNotice": "Educational Platform Only: Information provided is for health education and prevention awareness, not a substitute for professional clinical medical diagnosis or treatment.",
      "featuredDiseases": "Featured Health Conditions",
      "preventionGuides": "Evidence-Based Prevention Guides",
      "healthTools": "Interactive Health Calculators & Risk Tools",
      "latestArticles": "Latest Medically Reviewed Articles",
      "dailyHabits": "Daily Pillars of Disease Prevention",
      "statsWorldwide": "Global Health Realities",
      "closeBtn": "Close",
      "printBtn": "Print Summary",
      "viewGuide": "View Full Guide",
      "viewDisease": "Read Complete Medical Guide",
      "resultsFound": "conditions found",
      "noResults": "No conditions match your search.",
      "filterAll": "All",
      "bmiTitle": "BMI & Body Composition Calculator",
      "waterTitle": "Daily Water Intake Estimator",
      "calorieTitle": "Calorie & Energy Calculator (BMR/TDEE)",
      "stepTitle": "Daily Step Goal & Activity Tracker",
      "lifestyleTitle": "Healthy Lifestyle Assessment Score",
      "diabetesRiskTitle": "Type 2 Diabetes Risk Screener",
      "bpGuideTitle": "Blood Pressure Category Guide",
      "calculateBtn": "Calculate Now",
      "resetBtn": "Reset",
      "yourScore": "Your Assessment Result",
      "consultDoctorPrompt": "When to Consult a Physician",
      "emergencyWarningPrompt": "Emergency Red Flags",
      "faqsPrompt": "Frequently Asked Questions",
      "referencesPrompt": "Trusted Medical References",
      "contactHeading": "Contact Our Medical Education Team",
      "contactSub": "Have questions, feedback, or content suggestions? Reach out to our health education editorial board.",
      "sendMsgBtn": "Send Message",
      "footerAbout": "HEALTHCARE FOR YOU is an independent digital health education platform dedicated to chronic disease prevention, clinical literacy, and healthy lifestyle choices.",
      "copyright": "© 2026 HEALTHCARE FOR YOU. All rights reserved. Medically referenced from WHO, CDC, NHS, and Mayo Clinic guidelines."
    },
    "ml": {
      "siteTitle": "ഹെൽത്ത്‌കെയർ ഫോർ യു",
      "tagline": "നിങ്ങളുടെ ആരോഗ്യം. നിങ്ങളുടെ ഭാവി. നിങ്ങളുടെ ഉത്തരവാദിത്തം.",
      "heroSub": "രോഗങ്ങളെ മനസ്സിലാക്കുക, പ്രതിരോധ മാർഗ്ഗങ്ങൾ കണ്ടെത്തുക, വിശ്വസനീയമായ ആരോഗ്യ വിദ്യാഭ്യാസത്തിലൂടെ മികച്ച ജീവിതശൈലി രൂപപ്പെടുത്തുക.",
      "btnExplore": "രോഗങ്ങൾ പരിശോധിക്കുക",
      "btnStart": "ആരോഗ്യ യാത്ര ആരംഭിക്കുക",
      "navHome": "ഹോം",
      "navDiseases": "എല്ലാ രോഗങ്ങളും",
      "navLifestyle": "ജീവിതശൈലി രോഗങ്ങൾ",
      "navPrevention": "പ്രതിരോധ കേന്ദ്രം",
      "navNutrition": "ആരോഗ്യകരമായ ഭക്ഷണം",
      "navFitness": "വ്യായാമം & ഫിറ്റ്നസ്",
      "navMental": "മാനസികാരോഗ്യം",
      "navSymptom": "ലക്ഷണ പരിശോധന",
      "navTools": "ആരോഗ്യ കാൽക്കുലേറ്ററുകൾ",
      "navArticles": "ആരോഗ്യ ലേഖനങ്ങൾ",
      "navAbout": "ഞങ്ങളെക്കുറിച്ച്",
      "navContact": "ബന്ധപ്പെടുക",
      "navDisclaimer": "മെഡിക്കൽ നിരാകരണം",
      "searchPlaceholder": "രോഗങ്ങൾ, ലക്ഷണങ്ങൾ, ഭക്ഷണക്രമം എന്നിവ തിരയുക...",
      "allCategories": "എല്ലാ വിഭാഗങ്ങളും",
      "emergencyAlert": "അടിയന്തിര സാഹചര്യം: കടുത്ത നെഞ്ചുവേദന, ശ്വാസതടസ്സം, അല്ലെങ്കിൽ പക്ഷാഘാത ലക്ഷണങ്ങൾ കണ്ടാൽ ഉടൻ ആംബുലൻസ് വിളിക്കുക.",
      "disclaimerNotice": "വിദ്യാഭ്യാസപരമായ വിവരങ്ങൾ മാത്രം: നൽകിയിട്ടുള്ള വിവരങ്ങൾ ബോധവൽക്കരണത്തിന് വേണ്ടിയുള്ളതാണ്, ഡോക്ടറുടെ ചികിത്സയ്ക്ക് പകരമല്ല.",
      "featuredDiseases": "പ്രധാന ആരോഗ്യ പ്രശ്നങ്ങൾ",
      "preventionGuides": "രോഗപ്രതിരോധ മാർഗ്ഗരേഖകൾ",
      "healthTools": "ആരോഗ്യ കാൽക്കുലേറ്ററുകൾ",
      "latestArticles": "ഏറ്റവും പുതിയ മെഡിക്കൽ ലേഖനങ്ങൾ",
      "dailyHabits": "പ്രതിരോധത്തിനായുള്ള ദിനചര്യകൾ",
      "statsWorldwide": "ആഗോള ആരോഗ്യ സ്ഥിതിവിവരക്കണക്കുകൾ",
      "closeBtn": "അടയ്ക്കുക",
      "printBtn": "പ്രിന്റ് ചെയ്യുക",
      "viewGuide": "വിശദാംശങ്ങൾ കാണുക",
      "viewDisease": "പൂർണ്ണ വിവരങ്ങൾ വായിക്കുക",
      "resultsFound": "രോഗങ്ങൾ കണ്ടെത്തി",
      "noResults": "നിങ്ങൾ തിരഞ്ഞ വിവരങ്ങൾ ലഭ്യമായില്ല.",
      "filterAll": "എല്ലാം",
      "bmiTitle": "ബി.എം.ഐ കാൽക്കുലേറ്റർ",
      "waterTitle": "പ്രതിദിന ജല ഉപഭോഗ കണക്കുകൂട്ടൽ",
      "calorieTitle": "കലോറി ആവശ്യകത കാൽക്കുലേറ്റർ",
      "stepTitle": "സ്റ്റെപ്പ് ട്രാക്കർ & വ്യായാമം",
      "lifestyleTitle": "ജീവിതശൈലി ആരോഗ്യ സ്കോർ",
      "diabetesRiskTitle": "പ്രമേഹ സാധ്യത പരിശോധന",
      "bpGuideTitle": "രക്തസമ്മർദ്ദ വിവരണം",
      "calculateBtn": "കണക്കാക്കുക",
      "resetBtn": "പുനഃക്രമീകരിക്കുക",
      "yourScore": "നിങ്ങളുടെ ഫലം",
      "consultDoctorPrompt": "എപ്പോഴാണ് ഡോക്ടറെ കാണേണ്ടത്?",
      "emergencyWarningPrompt": "അപകടസൂചനകൾ",
      "faqsPrompt": "സാധാരണ സംശയങ്ങൾ (FAQs)",
      "referencesPrompt": "മെഡിക്കൽ റഫറൻസുകൾ",
      "contactHeading": "ഞങ്ങളുമായി ബന്ധപ്പെടുക",
      "contactSub": "സംശയങ്ങളും അഭിപ്രായങ്ങളും അറിയിക്കാൻ ഞങ്ങളുടെ മെഡിക്കൽ എഡിറ്റോറിയൽ ടീമുമായി ബന്ധപ്പെടുക.",
      "sendMsgBtn": "സന്ദേശം അയക്കുക",
      "footerAbout": "ഹെൽത്ത്‌കെയർ ഫോർ യു — രോഗപ്രതിരോധത്തിനും ശാസ്ത്രീയ ആരോഗ്യ അവബോധത്തിനുമുള്ള വിശ്വസനീയമായ പ്ലാറ്റ്‌ഫോം.",
      "copyright": "© 2026 HEALTHCARE FOR YOU. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം. WHO, CDC, NHS മാർഗ്ഗരേഖകൾ അടിസ്ഥാനമാക്കി തയ്യാറാക്കിയത്."
    },
    "hi": {
      "siteTitle": "हेल्थकेयर फॉर यू",
      "tagline": "आपका स्वास्थ्य। आपका भविष्य। आपकी जिम्मेदारी।",
      "heroSub": "बीमारियों को समझें, साक्ष्य-आधारित रोकथाम के तरीके खोजें और विश्वसनीय स्वास्थ्य शिक्षा के साथ एक स्वस्थ जीवन शैली का निर्माण करें।",
      "btnExplore": "बीमारियों को जानें",
      "btnStart": "अपनी स्वस्थ यात्रा शुरू करें",
      "navHome": "होम",
      "navDiseases": "सभी बीमारियाँ",
      "navLifestyle": "जीवनशैली रोग",
      "navPrevention": "रोकथाम केंद्र",
      "navNutrition": "स्वस्थ पोषण व आहार",
      "navFitness": "व्यायाम और फिटनेस",
      "navMental": "मानसिक स्वास्थ्य",
      "navSymptom": "लक्षण जांच (सिम्टम चेकर)",
      "navTools": "स्वास्थ्य कैलकुलेटर",
      "navArticles": "स्वास्थ्य लेख और ब्लॉग",
      "navAbout": "हमारे बारे में",
      "navContact": "संपर्क करें",
      "navDisclaimer": "चिकित्सा अस्वीकरण",
      "searchPlaceholder": "बीमारियाँ, लक्षण, या पोषण खोजें...",
      "allCategories": "सभी श्रेणियां",
      "emergencyAlert": "चिकित्सा आपातकाल: यदि आपको अचानक सीने में तेज दर्द, सांस लेने में तकलीफ या स्ट्रोक के लक्षण महसूस हों, तो तुरंत आपातकालीन सेवाओं को कॉल करें।",
      "disclaimerNotice": "केवल शैक्षणिक उद्देश्य: प्रदान की गई जानकारी स्वास्थ्य जागरूकता के लिए है और यह पेशेवर डॉक्टर के परामर्श का विकल्प नहीं है।",
      "featuredDiseases": "प्रमुख स्वास्थ्य स्थितियाँ",
      "preventionGuides": "साक्ष्य-आधारित रोकथाम मार्गदर्शिका",
      "healthTools": "स्वास्थ्य जोखिम मूल्यांकन उपकरण",
      "latestArticles": "चिकित्सकीय रूप से समीक्षित नवीनतम लेख",
      "dailyHabits": "रोग रोकथाम की दैनिक स्वस्थ आदतें",
      "statsWorldwide": "वैश्विक स्वास्थ्य आंकड़े",
      "closeBtn": "बंद करें",
      "printBtn": "प्रिंट करें",
      "viewGuide": "पूरी मार्गदर्शिका देखें",
      "viewDisease": "पूरी चिकित्सा जानकारी पढ़ें",
      "resultsFound": "बीमारियाँ मिलीं",
      "noResults": "आपकी खोज से मेल खाती कोई बीमारी नहीं मिली।",
      "filterAll": "सभी",
      "bmiTitle": "बीएमआई (BMI) कैलकुलेटर",
      "waterTitle": "दैनिक जल आवश्यकता अनुमानक",
      "calorieTitle": "दैनिक कैलोरी कैलकुलेटर (BMR/TDEE)",
      "stepTitle": "दैनिक स्टेप ट्रैकर",
      "lifestyleTitle": "स्वस्थ जीवनशैली मूल्यांकन स्कोर",
      "diabetesRiskTitle": "टाइप 2 मधुमेह जोखिम प्रश्नावली",
      "bpGuideTitle": "रक्तचाप (BP) शिक्षा गाइड",
      "calculateBtn": "गणना करें",
      "resetBtn": "रीसेट करें",
      "yourScore": "आपका परिणाम",
      "consultDoctorPrompt": "डॉक्टर से कब परामर्श करें?",
      "emergencyWarningPrompt": "आपातकालीन चेतावनी संकेत",
      "faqsPrompt": "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
      "referencesPrompt": "विश्वसनीय चिकित्सा संदर्भ",
      "contactHeading": "हमारी मेडिकल टीम से संपर्क करें",
      "contactSub": "स्वास्थ्य शिक्षा, सुझाव या प्रश्नों के लिए हमारे मेडिकल बोर्ड से संपर्क करें।",
      "sendMsgBtn": "संदेश भेजें",
      "footerAbout": "हेल्थकेयर फॉर यू एक स्वतंत्र स्वास्थ्य शिक्षा मंच है जो पुरानी बीमारियों की रोकथाम और वैज्ञानिक जीवन शैली के लिए समर्पित है।",
      "copyright": "© 2026 HEALTHCARE FOR YOU. सर्वाधिकार सुरक्षित। WHO, CDC, NHS दिशानिर्देशों पर आधारित।"
    },
    "ar": {
      "siteTitle": "الرعاية الصحية لك",
      "tagline": "صحتك. مستقبلك. مسؤوليتك.",
      "heroSub": "افهم الأمراض، واكتشف أساليب الوقاية القائمة على الأدلة، وابنِ نمط حياة أكثر صحة مع التثقيف الصحي الموثوق.",
      "btnExplore": "استكشف الأمراض",
      "btnStart": "ابدأ رحلتك الصحية",
      "navHome": "الرئيسية",
      "navDiseases": "جميع الأمراض",
      "navLifestyle": "أمراض نمط الحياة",
      "navPrevention": "مركز الوقاية",
      "navNutrition": "التغذية الصحية",
      "navFitness": "اللياقة البدنية",
      "navMental": "الصحة النفسية",
      "navSymptom": "فاحص الأعراض",
      "navTools": "حاسبات الصحة",
      "navArticles": "المقالات الطبية",
      "navAbout": "من نحن",
      "navContact": "اتصل بنا",
      "navDisclaimer": "إخلاء المسؤولية",
      "searchPlaceholder": "ابحث في الأمراض، الأعراض، أو التغذية...",
      "allCategories": "جميع الفئات",
      "emergencyAlert": "حالة طبية طارئة: إذا كنت تعاني من ألم حاد ومفاجئ في الصدر أو صعوبة في التنفس أو أعراض سكتة دماغية، اتصل بالإسعاف فوراً.",
      "disclaimerNotice": "منصة تعليمية فقط: المعلومات المقدمة للتوعية الصحية ولا تغني عن الاستشارة الطبية المتخصصة أو العلاج الطبي.",
      "featuredDiseases": "أبرز الحالات الصحية",
      "preventionGuides": "أدلة الوقاية القائمة على الأدلة",
      "healthTools": "أدوات تقييم المخاطر الصحية",
      "latestArticles": "أحدث المقالات الطبية المعتمدة",
      "dailyHabits": "عادات يومية للوقاية من الأمراض",
      "statsWorldwide": "إحصاءات صحية عالمية موثوقة",
      "closeBtn": "إغلاق",
      "printBtn": "طباعة الملخص",
      "viewGuide": "عرض الدليل بالكامل",
      "viewDisease": "قراءة الدليل الطبي الشامل",
      "resultsFound": "حالات تم العثور عليها",
      "noResults": "لم يتم العثور على نتائج مطابقة لبحثك.",
      "filterAll": "الكل",
      "bmiTitle": "حاسبة مؤشر كتلة الجسم (BMI)",
      "waterTitle": "حاسبة الاحتياج اليومي من الماء",
      "calorieTitle": "حاسبة السعرات الحرارية اليومية (BMR/TDEE)",
      "stepTitle": "متتبع الخطوات والنشاط البدني",
      "lifestyleTitle": "مقياس نمط الحياة الصحي الشامل",
      "diabetesRiskTitle": "استبيان تقييم مخاطر السكري من النوع 2",
      "bpGuideTitle": "دليل مستويات ضغط الدم",
      "calculateBtn": "احسب الآن",
      "resetBtn": "إعادة ضبط",
      "yourScore": "نتيجتك الصحية",
      "consultDoctorPrompt": "متى يجب استشارة الطبيب؟",
      "emergencyWarningPrompt": "علامات الخطر الطارئة",
      "faqsPrompt": "الأسئلة الشائعة (FAQs)",
      "referencesPrompt": "المراجع الطبية المعتمدة",
      "contactHeading": "تواصل مع فريقنا الطبي والتعليمي",
      "contactSub": "هل لديك أسئلة أو اقتراحات؟ لا تتردد في مراسلة هيئتنا التحريرية الطبية.",
      "sendMsgBtn": "إرسال الرسالة",
      "footerAbout": "الرعاية الصحية لك — منصة تثقيف صحي رقمية مستقلة مكرسة للوقاية من الأمراض المزمنة ونمط الحياة الصحي.",
      "copyright": "© 2026 HEALTHCARE FOR YOU. جميع الحقوق محفوظة. استناداً إلى إرشادات منظمة الصحة العالمية (WHO) ومراكز السيطرة على الأمراض (CDC)."
    }
  }
};

// Export for Node/CommonJS or attach to global window for browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = HEALTH_DATA;
}
if (typeof window !== "undefined") {
  window.HEALTH_DATA = HEALTH_DATA;
}
