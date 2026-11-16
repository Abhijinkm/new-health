/**
 * HEALTHCARE FOR YOU - Category I: Other Health Conditions
 */
module.exports = [
  {
    id: "thyroid-disorders",
    name: "Thyroid Disorders (Hypo & Hyperthyroidism)",
    name_ml: "തൈറോയ്ഡ് രോഗങ്ങൾ (ഹൈപ്പോ & ഹൈപ്പർതൈറോയിഡിസം)",
    name_hi: "थायरॉयड विकार (हाइपो और हाइपरथायरायडिज्म)",
    name_ar: "اضطرابات الغدة الدرقية",
    category: "other",
    badge: "Endocrine Dysfunction",
    icon: "activity",
    shortDesc: "Endocrine disorders characterized by abnormal synthesis of thyroid hormones (T3 and T4), disrupting systemic metabolic rate.",
    whatIsIt: "The thyroid is a butterfly-shaped endocrine gland in the lower anterior neck that secretes thyroxine (T4) and triiodothyronine (T3), hormones that govern the basal metabolic rate of every cell in the human body. The two primary disorders are Hypothyroidism (underactive thyroid producing insufficient hormones, slowing metabolism) and Hyperthyroidism (overactive thyroid producing excess hormones, accelerating metabolism).",
    causes: [
      "Hypothyroidism Causes: Hashimoto's Thyroiditis (autoimmune destruction with anti-TPO antibodies), iodine deficiency (worldwide), surgical thyroidectomy, radioactive iodine therapy, or lithium therapy",
      "Hyperthyroidism Causes: Graves' Disease (autoimmune TSH-receptor stimulating antibodies - TRAb), toxic multinodular goiter, toxic solitary adenoma, or subacute thyroiditis",
      "Pituitary dysfunction (secondary central hypothyroidism due to TSH deficiency)"
    ],
    symptoms: [
      "Hypothyroidism Symptoms: Chronic fatigue, unexplained weight gain, extreme cold intolerance, constipation, dry coarse skin, brittle hair/alopecia, puffy face, bradycardia (slow heart rate), brain fog, memory lapses, and heavy/irregular menstrual bleeding (menorrhagia)",
      "Hyperthyroidism Symptoms: Unintentional rapid weight loss despite ravenous appetite, heat intolerance, profuse sweating, fine resting hand tremors, palpitations and tachycardia (resting heart rate > 100 bpm), anxiety, irritability, frequent bowel movements, oligomenorrhea, and Graves' Ophthalmopathy (proptosis/bulging eyes, diplopia)"
    ],
    warningSigns: [
      "Myxedema Coma (Hypothyroid Emergency): Severe hypothermia, profound lethargy, hypoventilation, bradycardia, and coma (high mortality)",
      "Thyroid Storm (Hyperthyroid Emergency): Extreme hyperpyrexia (fever > 104°F), marked tachycardia / atrial fibrillation, delirium, agitation, and congestive heart failure",
      "Thyroid Nodule with rapid growth, hoarseness, and cervical lymphadenopathy (Thyroid Cancer alert)"
    ],
    riskFactors: [
      "Female sex (women are 5 to 8 times more likely to develop thyroid disorders than men)",
      "Personal or family history of autoimmune diseases (Type 1 diabetes, celiac disease, vitiligo, pernicious anemia)",
      "Postpartum period (Postpartum Thyroiditis occurs in ~7% of women within 1 year of childbirth)",
      "Age over 60 years and excessive or deficient dietary iodine intake",
      "Prior radiation therapy to the neck or upper chest"
    ],
    bodyImpact: "Thyroid hormones regulate myocardial contractility, vascular resistance, lipid turnover, bone remodeling, and thermogenesis. Untreated hypothyroidism accelerates LDL atherogenesis, heart failure, and ovulatory infertility. Untreated hyperthyroidism causes fatal high-output heart failure, atrial fibrillation, and severe osteoporosis.",
    diagnosis: [
      "Serum Thyroid Stimulating Hormone (TSH) — the most sensitive first-line screening test (Elevated in primary hypothyroidism; suppressed < 0.01 in primary hyperthyroidism)",
      "Free Thyroxine (Free T4) and Free Triiodothyronine (Free T3)",
      "Autoantibody testing: Anti-Thyroperoxidase (Anti-TPO) and Anti-Thyroglobulin (Anti-Tg) for Hashimoto's; TSH-Receptor Antibodies (TRAb / TSI) for Graves' disease",
      "High-Resolution Thyroid Ultrasound assessing parenchyma echogenicity, nodules, and vascularity (TI-RADS scoring)",
      "Radioactive Iodine Uptake (RAIU) and scan to differentiate Graves' from thyroiditis"
    ],
    treatments: [
      "For Hypothyroidism: Daily Levothyroxine (synthetic T4: e.g., Synthroid, Eltroxin) taken on an empty stomach with a full glass of water 30-60 minutes before breakfast; dose titrated to normalize serum TSH",
      "For Hyperthyroidism: Antithyroid Drugs (Thionamides: Methimazole or Propylthiouracil - PTU)",
      "Beta-Blockers (Propranolol, Atenolol) for rapid symptomatic control of hyperthyroid tremors, palpitations, and heat intolerance",
      "Radioactive Iodine Ablation (RAI - I-131) to ablate hyperfunctioning thyroid tissue",
      "Total or Subtotal Thyroidectomy for large compressive goiters or suspected malignancy"
    ],
    prevention: "Ensure adequate dietary iodine intake (150 mcg daily for adults; 220-250 mcg during pregnancy) using iodized salt. In autoimmune thyroid conditions, maintain optimal selenium and Vitamin D levels, avoid smoking (which worsens Graves' eye disease), and undergo routine TSH screening during pregnancy.",
    safeFoods: [
      "Adequately iodized table salt and seafood to ensure iodine sufficiency (for hypothyroidism)",
      "Selenium-rich Brazil nuts (1 to 2 nuts daily provide optimal selenium to support T4 to T3 enzymatic deiodinase conversion)",
      "Zinc-rich pumpkin seeds, lentils, and lean poultry",
      "Cruciferous vegetables (broccoli, cabbage) ARE SAFE when cooked thoroughly (cooking denatures goitrogens)",
      "Antioxidant-rich berries, leafy greens, and whole grains"
    ],
    avoidFoods: [
      "Excessive raw, uncooked goitrogenic vegetables (eating massive amounts of raw kale/cassava can inhibit iodine uptake)",
      "High-dose kelp, bladderwrack, or iodine supplements (excessive iodine can paradoxically shut down thyroid hormone synthesis via the Wolff-Chaikoff effect)",
      "Taking calcium, iron, or soy supplements within 4 hours of your morning Levothyroxine pill (they bind Levothyroxine in the gut and block absorption)",
      "Excessive caffeine and stimulants in hyperthyroidism"
    ],
    exercises: [
      "Low-impact aerobic exercise: Brisk walking, swimming, light cycling 30 minutes 4-5 days a week (boosts sluggish energy and metabolism in hypothyroidism)",
      "Avoid vigorous strenuous exercise during active uncontrolled hyperthyroidism until resting heart rate is stabilized with beta-blockers",
      "Strength training to preserve lean body mass and counter muscle weakness"
    ],
    lifestyle: [
      "TAKE LEVOTHYROXINE PROPERLY: Take it first thing in the morning with plain water, and wait at least 30 to 60 minutes before drinking coffee, tea, or eating food",
      "Never take calcium, iron, or multivitamin tablets at the same time as thyroid hormone",
      "Get serum TSH re-tested every 6 to 12 weeks after any dose adjustment until stable, then annually",
      "Quit smoking immediately (smoking dramatically increases the risk of permanent blindness in Graves' eye disease)"
    ],
    whenToConsult: "Consult an endocrinologist if you notice a swelling in your neck, unexplained rapid weight changes, racing heartbeat, or chronic exhaustion. Seek emergency care for high fever with confusion or extreme hypothermia with slow pulse.",
    faqs: [
      {
        q: "Why can't I take my thyroid pill with my morning coffee?",
        a: "Coffee (both regular and decaf) severely interferes with the intestinal absorption of levothyroxine, cutting its bioavailability by up to 30-40%. Always wait at least 30 to 60 minutes after taking your pill before drinking coffee."
      },
      {
        q: "Can thyroid problems cause hair loss?",
        a: "Yes. Both severe hypothyroidism and severe hyperthyroidism can disrupt the normal hair growth cycle, causing diffuse telogen effluvium (generalized hair thinning and shedding). Hair typically regrows once hormone levels normalize on medication."
      }
    ],
    references: [
      "American Thyroid Association (ATA) Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis",
      "ATA / AACE Clinical Practice Guidelines for Hypothyroidism in Adults",
      "European Thyroid Association (ETA) Guidelines on Graves' Orbitopathy"
    ]
  },
  {
    id: "anemia",
    name: "Iron Deficiency Anemia",
    name_ml: "വിളർച്ച (അനീമിയ)",
    name_hi: "एनीमिया / रक्तहीनता (आयरन की कमी)",
    name_ar: "فقر الدم الناجم عن نقص الحديد (الأنيميا)",
    category: "other",
    badge: "Hematological Disorder",
    icon: "droplet",
    shortDesc: "A common hematological condition characterized by insufficient functional hemoglobin due to depleted systemic iron stores.",
    whatIsIt: "Iron Deficiency Anemia (IDA) occurs when total body iron stores become depleted, leaving insufficient iron to synthesize hemoglobin—the critical iron-containing metalloprotein in red blood cells that binds and transports oxygen from the lungs to peripheral tissues. It is characterized as a microcytic, hypochromic anemia (small, pale red blood cells).",
    causes: [
      "Chronic blood loss: Heavy menstrual bleeding (Menorrhagia in premenopausal women), occult gastrointestinal bleeding (peptic ulcers, colon polyps, colon cancer, hemorrhoids)",
      "Inadequate dietary iron intake (strict unsupplemented vegan/vegetarian diets without iron planning)",
      "Impaired intestinal iron absorption: Celiac disease, Helicobacter pylori infection, atrophic gastritis, bariatric bypass surgery",
      "Increased physiological demand: Pregnancy (fetal growth and blood volume expansion), lactation, rapid adolescent growth spurts",
      "Chronic hookworm infestation in tropical resource-limited settings"
    ],
    symptoms: [
      "Extreme, debilitating fatigue, physical weakness, and listlessness",
      "Pallor: Noticeable paleness of skin, palpebral conjunctiva (inner lower eyelids), nail beds, and oral mucosa",
      "Exertional dyspnea (shortness of breath climbing stairs) and palpitations / tachycardia",
      "Headaches, dizziness, lightheadedness, and cold hands and feet",
      "Pica: Bizarre, compulsive cravings for non-nutritive substances (eating ice / pagophagia, clay, dirt, or chalk)",
      "Koilonychia: Brittle, concave, spoon-shaped fingernails",
      "Atrophic Glossitis (smooth, sore, swollen, beefy tongue) and Angular Cheilitis (painful cracks at mouth corners)",
      "Restless Legs Syndrome (RLS): Uncomfortable urge to move legs when lying down"
    ],
    warningSigns: [
      "Severe High-Output Heart Failure: Orthopnea, peripheral edema, and angina in patients with severe anemia (Hb < 6-7 g/dL)",
      "Syncope or hemodynamic collapse upon standing",
      "NEW IRON DEFICIENCY ANEMIA IN AN ADULT MAN OR POSTMENOPAUSAL WOMAN IS AN ALARM SIGN REQUIRING IMMEDIATE ENDOSCOPY AND COLONOSCOPY TO RULE OUT OCCULT GASTROINTESTINAL CANCER!"
    ],
    riskFactors: [
      "Women of childbearing age (due to menstrual blood loss)",
      "Pregnant women without routine prenatal iron supplementation",
      "Infants and young children consuming excessive cow's milk (> 24 oz/day which irritates gut and lacks iron)",
      "Frequent whole-blood donors",
      "Patients with chronic kidney disease or inflammatory bowel disease (Crohn's, Ulcerative Colitis)"
    ],
    bodyImpact: "Tissue hypoxia forces compensatory increases in cardiac output (tachycardia, widened pulse pressure), causing left ventricular hypertrophy and heart failure. In children, chronic iron deficiency causes irreversible cognitive, neurodevelopmental, and motor deficits.",
    diagnosis: [
      "Complete Blood Count (CBC): Low Hemoglobin (< 12 g/dL in women; < 13 g/dL in men), low Hematocrit, low Mean Corpuscular Volume (MCV < 80 fL: Microcytic), low MCH (Hypochromic)",
      "Serum Ferritin level (the single most accurate reflection of total body iron stores: Ferritin < 30 ng/mL is diagnostic of iron deficiency)",
      "Iron Studies Panel: Low Serum Iron, Elevated Total Iron-Binding Capacity (TIBC), and Low Transferrin Saturation (< 16-20%)",
      "Upper Endoscopy and Colonoscopy (mandatory in men and postmenopausal women with unexplained IDA to locate bleeding source)"
    ],
    treatments: [
      "Oral Iron Replacement Therapy: Ferrous Sulfate (324 mg), Ferrous Fumarate, or Ferrous Gluconate providing 60-100 mg elemental iron, ideally dosed on ALTERNATE DAYS to reduce hepcidin suppression and optimize absorption",
      "Co-administration with Vitamin C (Ascorbic acid 250-500 mg) to enhance non-heme iron absorption",
      "Intravenous Iron Formulations (Ferric Carboxymaltose, Iron Sucrose, Ferric Derisomaltose) for severe anemia, malabsorption (celiac), intolerance to oral iron, or 2nd/3rd trimester pregnancy",
      "Investigating and treating the underlying cause of blood loss (e.g., treating ulcers, removing polyps, managing menorrhagia)",
      "Packed Red Blood Cell (PRBC) Transfusions strictly reserved for hemodynamically unstable severe anemia (Hb < 7 g/dL)"
    ],
    prevention: "Consume iron-rich foods, pair plant-based iron with Vitamin C, avoid drinking tea or coffee directly with meals, treat heavy menstrual bleeding early with gynecological guidance, and ensure pregnant women take prescribed prenatal iron.",
    safeFoods: [
      "Heme iron powerhouses (highly bioavailable, absorbed at 20-30% rate): Lean beef, poultry, organ meats, sardines, clams",
      "Non-heme plant iron sources: Spinach, lentils, chickpeas, kidney beans, black beans, tofu",
      "Vitamin C boosters (pair with iron meals to convert ferric to absorbable ferrous iron): Citrus fruits, bell peppers, tomatoes, strawberries",
      "Iron-fortified breakfast cereals, oats, and blackstrap molasses",
      "Pumpkin seeds, sesame seeds, and dried apricots/raisins"
    ],
    avoidFoods: [
      "Black tea, green tea, and coffee with meals (tannins and polyphenols inhibit iron absorption by up to 70%!)",
      "Calcium supplements, milk, and high-calcium dairy taken directly with iron meals (calcium competes for intestinal DMT1 transporters)",
      "Uncooked wheat bran high in phytates (phytic acid binds iron)",
      "Excessive antacids and PPIs taken simultaneously with oral iron (iron requires an acidic gastric environment for optimal dissolution)"
    ],
    exercises: [
      "Gentle, low-impact walking and light movement during severe anemia — do NOT attempt intense anaerobic workouts",
      "Listen to your body: Rest when breathless or lightheaded",
      "Gradual resumption of regular cardiovascular and resistance exercise once hemoglobin rises above 11-12 g/dL"
    ],
    lifestyle: [
      "Take oral iron on an empty stomach with a glass of orange juice (Vitamin C) for maximum absorption; if nausea occurs, take with a light non-dairy snack",
      "Space tea and coffee at least 1 to 2 hours away from meals and iron pills",
      "Expect stool to turn dark green or black while taking iron pills — this is completely normal and harmless",
      "Continue iron therapy for at least 3 months AFTER hemoglobin normalizes to fully replenish bone marrow ferritin stores"
    ],
    whenToConsult: "Consult a doctor if you experience persistent fatigue, pale skin, dizziness, or cravings for ice. SEEK IMMEDIATE EMERGENCY CARE if you experience chest pain, shortness of breath at rest, or vomit blood or pass black stools.",
    faqs: [
      {
        q: "Why do doctors recommend taking iron pills every other day instead of daily?",
        a: "Taking a large dose of iron triggers the liver to produce a hormone called 'Hepcidin', which blocks iron absorption for the next 24 to 48 hours. Taking iron every other day prevents hepcidin spikes, resulting in greater overall iron absorption with far fewer stomach aches and constipation."
      },
      {
        q: "Why does iron deficiency make some people want to chew ice?",
        a: "This symptom is called 'pagophagia' (a form of pica). Scientists believe chewing ice triggers the mammalian dive reflex, increasing blood flow to the brain and temporarily relieving the severe mental fatigue and sluggishness caused by brain hypoxia."
      }
    ],
    references: [
      "American Gastroenterological Association (AGA) Clinical Practice Guidelines on the Gastrointestinal Evaluation of Iron Deficiency Anemia",
      "World Health Organization (WHO) Guideline on Iron Supplementation in Women and Children",
      "British Society of Gastroenterology Guidelines for the Management of Iron Deficiency Anaemia"
    ]
  },
  {
    id: "vitamin-d-deficiency",
    name: "Vitamin D Deficiency & Osteomalacia",
    name_ml: "വിറ്റാമിൻ ഡി യുടെ കുറവ്",
    name_hi: "विटामिन डी की कमी (रिकेट्स और ऑस्टियोमलेशिया)",
    name_ar: "نقص فيتامين د",
    category: "other",
    badge: "Nutritional Deficiency",
    icon: "sun",
    shortDesc: "Inadequate serum 25-hydroxyvitamin D levels, impairing calcium homeostasis, bone mineralization, and immune modulation.",
    whatIsIt: "Vitamin D is not merely a vitamin; it is a seco-steroid prohormone synthesized endogenously in the skin upon exposure to solar Ultraviolet B (UVB) radiation. It undergoes hepatic 25-hydroxylation to calcifediol [25(OH)D] and renal 1-alpha-hydroxylation to the biologically active hormone calcitriol [1,25(OH)2D]. Deficiency impairs intestinal calcium and phosphorus absorption, leading to rickets in children and osteomalacia (soft bones) and secondary hyperparathyroidism in adults.",
    causes: [
      "Inadequate solar UVB sunlight exposure (spending most hours indoors, wearing full-body covering, high latitude living)",
      "High skin melanin pigmentation (melanin acts as a natural sunscreen, requiring 3 to 5 times longer sun exposure to synthesize equivalent Vitamin D)",
      "Routine use of high-SPF sunscreens (> SPF 30 blocks 97% of UVB synthesis)",
      "Malabsorption syndromes (celiac disease, Crohn's, cystic fibrosis, bariatric bypass surgery)",
      "Chronic kidney disease or chronic liver failure impairing metabolic enzymatic activation",
      "Obesity: Vitamin D is sequestered and trapped inside excessive subcutaneous adipose tissue"
    ],
    symptoms: [
      "Often subtle and insidious in early or moderate deficiency",
      "Deep, diffuse, symmetrical bone aching and throbbing pain, especially in the pelvis, lower back, hips, and ribs",
      "Proximal muscle weakness (difficulty standing up from a low chair or climbing stairs without arm support)",
      "Chronic generalized fatigue, listlessness, and non-specific body aches",
      "Increased susceptibility to recurrent viral upper respiratory infections",
      "Depressive mood symptoms, seasonal affective disorder (SAD), and cognitive fog",
      "In infants/children: Craniotabes, delayed fontanelle closure, delayed walking, and bowing of legs (Rickets)"
    ],
    warningSigns: [
      "Severe Hypocalcemic Tetany: Carpopedal spasm (Trousseau's sign), facial twitching (Chvostek's sign), laryngospasm, and seizures",
      "Severe Osteomalacic pseudofractures (Looser's zones / Milkman's lines on X-ray)",
      "Severe proximal myopathy causing waddling gait and multiple fall injuries"
    ],
    riskFactors: [
      "Individuals living at latitudes above 37 degrees North or South during winter months",
      "Office workers, shift workers, and institutionalized/elderly adults living indoors",
      "Individuals with darker skin tones living in temperate northern climates",
      "Exclusively breastfed infants without supplemental Vitamin D drops",
      "Strict vegan diet without fortified foods or supplements"
    ],
    bodyImpact: "Without calcitriol, the gut absorbs only 10-15% of dietary calcium (compared to 30-40% when sufficient). Falling serum calcium stimulates parathyroid glands to hypersecrete PTH (Secondary Hyperparathyroidism). PTH mobilizes calcium out of bone, demineralizing the skeleton, creating unmineralized osteoid matrix, and accelerating osteoporosis.",
    diagnosis: [
      "Serum 25-Hydroxyvitamin D [25(OH)D] total blood test (the definitive biomarker of vitamin D status):",
      "- Deficiency: < 20 ng/mL (< 50 nmol/L)",
      "- Insufficiency: 21 to 29 ng/mL (52.5 - 72.5 nmol/L)",
      "- Optimal / Sufficiency: 30 to 50 ng/mL (75 - 125 nmol/L)",
      "- Toxicity / Hypervitaminosis D: > 100-150 ng/mL",
      "Serum intact PTH (elevated in secondary hyperparathyroidism)",
      "Serum Total and Ionized Calcium, Phosphorus, and Alkaline Phosphatase (elevated bone turnover)"
    ],
    treatments: [
      "High-Dose Repletion Regimen for Deficiency (< 20 ng/mL): Ergocalciferol (Vitamin D2) or Cholecalciferol (Vitamin D3) 50,000 IU once weekly for 8 weeks (or 6,000 IU daily for 8 weeks)",
      "Maintenance Therapy once level > 30 ng/mL: Cholecalciferol (D3) 1,000 to 2,000 IU daily (or 50,000 IU every 2-4 weeks)",
      "Ensure adequate dietary Calcium (1,000 mg/day) to prevent hungry bone hypocalcemia during remineralization",
      "Active Vitamin D analogs (Calcitriol or Paricalcitol) mandatory for patients with Stage 4/5 Chronic Kidney Disease"
    ],
    prevention: "Obtain sensible, safe sun exposure: 10 to 20 minutes of midday sunlight on arms and legs 2-3 times weekly (without burning). Consume fortified dairy/plant milks and fatty fish, and take a daily over-the-counter Vitamin D3 supplement (800-2,000 IU/day) especially during autumn and winter.",
    safeFoods: [
      "Wild-caught fatty cold-water fish (salmon, mackerel, sardines, trout, tuna)",
      "Cod liver oil (one teaspoon provides over 400-1,000 IU of Vitamin D)",
      "Pasture-raised egg yolks",
      "Mushrooms exposed to UV sunlight (portobello, maitake — produce Vitamin D2)",
      "Fortified foods: Fortified cow's milk, fortified almond/soy milk, fortified orange juice, and cereals"
    ],
    avoidFoods: [
      "Excessive mega-dosing of Vitamin D without medical monitoring (> 10,000 IU daily for months can cause hypercalcemic kidney stones and vascular calcification)",
      "Relying solely on unfortified food for Vitamin D (it is virtually impossible to obtain adequate Vitamin D from standard diet alone without sun or supplements)",
      "Heavy alcohol consumption (impairs hepatic 25-hydroxylation)",
      "High-sodium diets that increase renal calcium wasting"
    ],
    exercises: [
      "Outdoor weight-bearing exercise: Walking, jogging, gardening in morning sunlight (combines bone-stimulating mechanical impact with cutaneous Vitamin D synthesis)",
      "Progressive resistance training to strengthen proximal hip and thigh muscles affected by osteomalacia",
      "Gentle stretching and mobility work"
    ],
    lifestyle: [
      "Take Vitamin D supplements WITH A MEAL CONTAINING HEALTHY FATS (olive oil, avocado, nuts) — as a fat-soluble vitamin, absorption increases by 30-50% with dietary fat",
      "Prefer Vitamin D3 (Cholecalciferol) over Vitamin D2 (Ergocalciferol) — D3 raises and maintains serum levels far more effectively",
      "Get blood 25(OH)D re-tested 3 months after completing high-dose repletion",
      "Ensure breastfed infants receive 400 IU Vitamin D drops daily starting in the first days of life"
    ],
    whenToConsult: "Consult your doctor if you have persistent deep bone aching, unexplained muscle weakness, frequent fractures, or chronic fatigue. Test blood levels if you have dark skin or spend most daylight hours indoors.",
    faqs: [
      {
        q: "Can I get Vitamin D from sitting next to a sunny closed glass window?",
        a: "No! Standard window glass absorbs and completely blocks virtually all Ultraviolet B (UVB) rays—the exact wavelength needed to produce Vitamin D in skin—while allowing UVA rays to pass through. You must be outdoors in direct sunlight."
      },
      {
        q: "Why is Vitamin D3 better than Vitamin D2?",
        a: "Vitamin D3 (Cholecalciferol) is the natural form synthesized by human skin. Clinical studies show that Vitamin D3 binds more strongly to Vitamin D-binding protein and maintains elevated blood levels for significantly longer than plant-derived Vitamin D2."
      }
    ],
    references: [
      "Endocrine Society Clinical Practice Guideline on Vitamin D: Evaluation, Treatment, and Prevention of Vitamin D Deficiency",
      "National Institutes of Health (NIH) Office of Dietary Supplements: Vitamin D Fact Sheet for Health Professionals",
      "American Association of Clinical Endocrinology (AACE) Clinical Guidelines"
    ]
  },
  {
    id: "vitamin-b12-deficiency",
    name: "Vitamin B12 Deficiency & Pernicious Anemia",
    name_ml: "വിറ്റാമിൻ ബി12 ന്റെ കുറവ്",
    name_hi: "विटामिन बी12 की कमी (घातक रक्ताल्पता)",
    name_ar: "نقص فيتامين ب12 والأنيميا الخبيثة",
    category: "other",
    badge: "Neurological & Hematological",
    icon: "shield-alert",
    shortDesc: "Depletion of cobalamin stores resulting in megaloblastic anemia and progressive, potentially irreversible subacute combined degeneration of the spinal cord.",
    whatIsIt: "Vitamin B12 (Cobalamin) is an essential water-soluble vitamin required as a cofactor for two critical cellular enzymes: Methionine Synthase (vital for DNA synthesis and red blood cell production) and Methylmalonyl-CoA Mutase (vital for myelin synthesis and neurological integrity). Because humans cannot synthesize B12, deficiency leads to Megaloblastic Anemia and Subacute Combined Degeneration of the spinal cord.",
    causes: [
      "Pernicious Anemia: Autoimmune destruction of gastric parietal cells and loss of Intrinsic Factor (IF) needed for ileal B12 absorption",
      "Strict, unsupplemented long-term Vegan or Vegetarian diets (cobalamin is synthesized exclusively by microorganisms and found naturally only in animal-derived foods)",
      "Malabsorption disorders: Terminal ileal resection, Crohn's disease, celiac disease, or bacterial overgrowth (SIBO)",
      "Long-term use of medications that impair B12 absorption: Metformin (> 3-5 years) and Proton Pump Inhibitors (PPIs e.g., Omeprazole) or H2-blockers",
      "Bariatric bypass surgery (Roux-en-Y gastric bypass eliminating gastric acid and intrinsic factor mixing)"
    ],
    symptoms: [
      "Neurological Hallmarks (can occur even WITHOUT anemia!):",
      "- Symmetrical peripheral neuropathy: Numbness, tingling ('pins and needles') in toes, feet, and fingers",
      "- Loss of vibratory sensation and proprioception (position sense) causing sensory ataxia and unsteady, stumbling gait",
      "- Positive Romberg sign (swaying or falling when standing with feet together and eyes closed)",
      "- Cognitive decline: Memory loss, 'megaloblastic madness' (severe paranoia, depression, or psychosis)",
      "Hematological Symptoms: Severe fatigue, exertional shortness of breath, dizziness, and paleness with a lemon-yellow skin tint",
      "Oral symptoms: Beefy, red, painful, depapillated smooth tongue (Hunter's Glossitis)"
    ],
    warningSigns: [
      "IRREVERSIBLE SPINAL CORD DAMAGE: Subacute Combined Degeneration of the Cord (SCD) causing permanent spastic paraparesis, sensory loss, and bladder incontinence if untreated",
      "Severe pancytopenia (simultaneous drop in red cells, white cells, and platelets mimicking leukemia)",
      "Severe acute delirium or acute psychosis"
    ],
    riskFactors: [
      "Strict vegans and vegetarians who do not take B12 supplements",
      "Older adults over 65 years (high prevalence of atrophic gastritis and hypochlorhydria)",
      "Patients taking Metformin long-term for Type 2 diabetes",
      "Patients taking chronic daily PPI antacids for acid reflux",
      "Personal or family history of autoimmune diseases (Hashimoto's, vitiligo, Addison's)"
    ],
    bodyImpact: "B12 deficiency halts methylation of homocysteine to methionine, trapping folate as 5-methyl-THF ('folate trap') and impairing nuclear DNA synthesis, producing massive, abnormal megaloblastic erythroblasts. Impaired myelin synthesis leads to spongy vacuolation and demyelination of the posterior and lateral columns of the spinal cord.",
    diagnosis: [
      "Serum Vitamin B12 level (< 200 pg/mL is deficient; 200-300 pg/mL is borderline/indeterminate)",
      "Serum Methylmalonic Acid (MMA) and Homocysteine (highly sensitive functional metabolic biomarkers — elevated MMA confirms true tissue-level B12 deficiency even if serum B12 appears borderline)",
      "Complete Blood Count (CBC): High Mean Corpuscular Volume (MCV > 100-115 fL: Megaloblastic Macrocytic Anemia) and Hypersegmented Neutrophils on peripheral smear",
      "Anti-Intrinsic Factor Antibodies (Anti-IF) and Anti-Parietal Cell Antibodies (diagnostic of Pernicious Anemia)"
    ],
    treatments: [
      "Intramuscular (IM) Cyanocobalamin or Hydroxocobalamin Injections (1,000 mcg daily for 1 week, then weekly for 4 weeks, followed by monthly injections for life for Pernicious Anemia or malabsorption)",
      "High-Dose Oral Cyanocobalamin (1,000 to 2,000 mcg daily) — utilizes passive intestinal diffusion (~1% absorbed independently of intrinsic factor)",
      "Sublingual B12 tablets for dietary vegans and mild deficiency",
      "CRITICAL MEDICAL RULE: NEVER treat megaloblastic anemia with Folic Acid alone without checking/treating B12 first! Folic acid corrects the anemia but allows the irreversible spinal cord demyelination to progress silently!"
    ],
    prevention: "All strict vegans and vegetarians MUST take a daily Vitamin B12 supplement (250-500 mcg) or weekly dose (2,500 mcg). Patients on long-term Metformin or PPIs should have serum B12 tested annually, and bariatric surgery patients must receive lifelong prophylactic supplementation.",
    safeFoods: [
      "Nutritional yeast fortified with Vitamin B12 (a staple for vegans)",
      "Cold-water fatty fish (salmon, tuna, trout, sardines) and clams/mussels",
      "Pasture-raised poultry, eggs, and dairy products (milk, yogurt, Swiss cheese)",
      "Fortified plant milks (soy, almond, oat) and fortified whole grain cereals",
      "Lean meats (beef, lamb, organ meats)"
    ],
    avoidFoods: [
      "Relying on unproven plant sources like spirulina, nori, or fermented tempeh (these contain inactive 'pseudo-B12' analogues that do not work in humans and actually block true B12 absorption)",
      "Excessive alcohol consumption (damages gastric mucosa and blocks cobalamin absorption)",
      "Taking high-dose Folic Acid supplements without verifying normal B12 levels",
      "Skipping lifelong prescribed B12 injections if diagnosed with pernicious anemia"
    ],
    exercises: [
      "Gait retraining and balance physical therapy to rehabilitate sensory ataxia and proprioception loss",
      "Low-impact walking with assistive devices (cane or walker) until neurological stability is restored",
      "Gentle stretching and mobility exercises to prevent muscular joint contractures"
    ],
    lifestyle: [
      "If you follow a vegan or plant-based lifestyle, begin taking a certified Vitamin B12 supplement immediately",
      "If diagnosed with Pernicious Anemia, understand that injections are required for LIFE — the condition cannot be cured by diet because your stomach cannot absorb B12",
      "Annual blood screening for anyone on long-term Metformin or omeprazole",
      "Install nightlights and grab bars at home if experiencing foot numbness to prevent falls"
    ],
    whenToConsult: "Consult a neurologist or physician immediately if you notice progressive numbness or tingling in your feet, difficulty walking in the dark, sudden memory decline, or unexplained exhaustion.",
    faqs: [
      {
        q: "Why can't vegans get Vitamin B12 from vegetables or spirulina?",
        a: "Plants do not produce or require Vitamin B12. Algae like spirulina contain 'pseudo-vitamin B12' (cobamides) that mimic B12 on cheap tests but are biologically inert in the human body, leaving people severely deficient unless they take true B12 supplements."
      },
      {
        q: "Can nerve damage from B12 deficiency be completely cured?",
        a: "If treated early (within 3 to 6 months of symptom onset), neurological damage and numbness can completely reverse. However, if severe spinal cord degeneration has been present for over a year, neurological deficits may become permanent."
      }
    ],
    references: [
      "British Society for Haematology (BSH) Guidelines for the Diagnosis and Treatment of Cobalamin and Folate Disorders",
      "CDC / NIH Office of Dietary Supplements: Vitamin B12 Fact Sheet",
      "New England Journal of Medicine Clinical Practice Review: Vitamin B12 Deficiency"
    ]
  },
  {
    id: "pcos",
    name: "PCOS (Polycystic Ovary Syndrome)",
    name_ml: "പി.സി.ഒ.എസ് (പോളിസിസ്റ്റിക് ഓവറി സിൻഡ്രോം)",
    name_hi: "पीसीओएस (पॉलीसिस्टिक ओवरी सिंड्रोम)",
    name_ar: "متلازمة تكيس المبايض (PCOS)",
    category: "other",
    badge: "Neuroendocrine & Metabolic",
    icon: "activity",
    shortDesc: "A prevalent endocrine, metabolic, and reproductive disorder in women characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology.",
    whatIsIt: "Polycystic Ovary Syndrome (PCOS) is the most common endocrine and reproductive disorder affecting women of reproductive age (affecting 8% to 13% globally). Rather than being merely a gynecological condition, PCOS is a systemic neuroendocrine and metabolic disorder driven by cellular insulin resistance, compensatory hyperinsulinemia, and ovarian hyperandrogenism, disrupting normal menstrual cyclicity and fertility.",
    causes: [
      "Peripheral insulin resistance: Hyperinsulinemia stimulates theca cells in the ovary to produce excessive androgens (testosterone) and suppresses sex hormone-binding globulin (SHBG) in the liver",
      "Disrupted hypothalamic-pituitary-ovarian axis: Elevated Luteinizing Hormone (LH) pulsatility relative to Follicle-Stimulating Hormone (FSH)",
      "Arrest of follicular maturation: Immature follicles fail to mature to ovulation, accumulating along the ovarian periphery as 'pearl necklace' cysts",
      "Complex polygenic susceptibility interacting with lifestyle, diet, and visceral adiposity"
    ],
    symptoms: [
      "Oligomenorrhea or Amenorrhea: Irregular, infrequent, or absent menstrual periods (e.g., fewer than 8 cycles per year or cycles > 35 days apart)",
      "Hirsutism: Excess coarse, dark terminal hair growth on the face (chin, upper lip), chest, lower abdomen, and inner thighs",
      "Severe, persistent cystic acne resistant to standard topical therapies",
      "Androgenic Alopecia: Male-pattern hair thinning and widening part at the crown of the scalp",
      "Weight gain and difficulty losing weight, particularly central abdominal visceral fat",
      "Acanthosis Nigricans: Velvety dark, hyperpigmented skin patches in neck creases, armpits, and groin (a visible sign of severe insulin resistance)",
      "Anovulatory Infertility: Difficulty conceiving due to lack of regular ovulation"
    ],
    warningSigns: [
      "Endometrial Hyperplasia & Endometrial Cancer: Chronic unopposed estrogen without progesterone shedding causes thick, precancerous uterine lining",
      "Development of Type 2 Diabetes (over 50% of women with PCOS develop prediabetes or diabetes before age 40)",
      "Severe Obstructive Sleep Apnea and non-alcoholic fatty liver disease (MASLD)"
    ],
    riskFactors: [
      "Family history of PCOS, Type 2 diabetes, or premature cardiovascular disease",
      "Obesity and central adiposity (though roughly 20-25% of women have 'Lean PCOS')",
      "Sedentary lifestyle and high-glycemic diet",
      "Early adrenarche (premature development of pubic hair in childhood)"
    ],
    bodyImpact: "Chronic hyperinsulinemia and hyperandrogenism accelerate atherogenic dyslipidemia (high triglycerides, low HDL), increase cardiovascular disease risk, cause mood disorders (high rates of anxiety and depression), and elevate endometrial adenocarcinoma risk by 3- to 4-fold.",
    diagnosis: [
      "Rotterdam Diagnostic Criteria 2023 (Requires at least 2 of the following 3 features after excluding other etiologies):",
      "1. Ovulatory Dysfunction (Oligo- or anovulation: irregular or absent periods)",
      "2. Clinical or Biochemical Hyperandrogenism (Hirsutism score, elevated total/free testosterone, DHEAS)",
      "3. Polycystic Ovarian Morphology on Pelvic Ultrasound (>= 20 follicles per ovary measuring 2-9 mm or ovarian volume >= 10 mL)",
      "Exclusionary testing: Serum TSH (thyroid disease), Prolactin (hyperprolactinemia), 17-Hydroxyprogesterone (to rule out late-onset Congenital Adrenal Hyperplasia)",
      "75g 2-hour Oral Glucose Tolerance Test (OGTT) and lipid profile"
    ],
    treatments: [
      "First-Line Foundation: Lifestyle intervention targeting 5-10% body weight reduction (often restores regular spontaneous ovulation)",
      "Combined Oral Contraceptive Pills (COCPs containing anti-androgenic progestins like Drospirenone or Cyproterone) to regulate cycles and protect the endometrium",
      "Insulin-Sensitizing Agents: Metformin (reduces hyperinsulinemia, aids weight loss, improves ovulatory cyclicity)",
      "Anti-Androgens: Spironolactone (aldosterone/androgen receptor blocker) or Finasteride for persistent hirsutism and alopecia",
      "Ovulation Induction for Fertility: Letrozole (aromatase inhibitor — gold standard first-line) or Clomiphene Citrate",
      "Topical Eflornithine cream and laser hair reduction for facial hirsutism"
    ],
    prevention: "While the underlying genetic predisposition cannot be altered, the metabolic and reproductive expression of PCOS can be prevented or put into remission by keeping visceral fat low, exercising daily to sensitize muscles to insulin, eating a low-glycemic Mediterranean diet, and avoiding sugary beverages.",
    safeFoods: [
      "Low Glycemic Index (GI) and Low Glycemic Load foods (steel-cut oats, quinoa, lentils, chickpeas, non-starchy vegetables)",
      "High-fiber foods (at least 30-35 grams daily to slow glucose absorption and balance gut microbiome)",
      "Lean protein sources (fish, poultry, tofu, eggs, Greek yogurt) paired with every meal to blunt insulin spikes",
      "Anti-inflammatory healthy fats (avocados, extra virgin olive oil, walnuts, chia seeds)",
      "Spearmint tea (drinking 2 cups daily has been shown in clinical trials to reduce free testosterone levels)"
    ],
    avoidFoods: [
      "Refined carbohydrates and white flour products (white bread, pastries, pasta, maida)",
      "Sugary beverages, sodas, sweetened fruit juices, and flavored coffees (trigger massive insulin surges)",
      "Ultra-processed snack foods loaded with industrial trans fats",
      "Excessive dairy if noticed to worsen inflammatory cystic acne",
      "Skipping meals or following extreme starvation crash diets that disrupt hypothalamic rhythms"
    ],
    exercises: [
      "Progressive Resistance Training (weight lifting 3 days a week builds skeletal muscle mass, the primary sink for glucose disposal)",
      "Moderate-intensity continuous aerobic walking (30-45 minutes 5 days a week)",
      "High-Intensity Interval Training (HIIT) 1-2 times weekly to boost insulin sensitivity",
      "Yoga and stress-reduction movement to lower adrenal cortisol and DHEAS output"
    ],
    lifestyle: [
      "Prioritize 7 to 8 hours of quality sleep (sleep deprivation immediately worsens insulin resistance)",
      "Track your menstrual cycle using an app or calendar",
      "Never allow periods to be absent for more than 3 consecutive months without progesterone withdrawal to prevent endometrial thickening",
      "Manage chronic emotional stress through mindfulness and therapy"
    ],
    whenToConsult: "Consult a reproductive endocrinologist or gynecologist if you have irregular periods, excess facial hair growth, sudden unexplained weight gain, or if you have been trying to conceive for over 6-12 months without success.",
    faqs: [
      {
        q: "Can a woman with PCOS still get pregnant?",
        a: "ABSOLUTELY YES! PCOS is one of the most treatable causes of female infertility. Through lifestyle improvements, weight management, and simple oral medications that induce ovulation (like Letrozole or Metformin), the vast majority of women with PCOS successfully conceive and have healthy babies."
      },
      {
        q: "Do I have to be overweight to have PCOS?",
        a: "No. Roughly 20% to 25% of women with PCOS have 'Lean PCOS'. They have a normal or low BMI, but still have high insulin resistance, elevated androgens, irregular periods, and polycystic ovaries."
      }
    ],
    references: [
      "International Evidence-Based Guideline for the Assessment and Management of Polycystic Ovary Syndrome 2023",
      "Endocrine Society Clinical Practice Guideline on PCOS",
      "ACOG Practice Bulletin: Polycystic Ovary Syndrome"
    ]
  },
  {
    id: "endometriosis",
    name: "Endometriosis",
    name_ml: "എൻഡോമെട്രിയോസിസ്",
    name_hi: "एंडोमेट्रियोसिस (गर्भाशय की आंतरिक परत का बाहर फैलना)",
    name_ar: "بطانة الرحم المهاجرة (الإندومتريوز)",
    category: "other",
    badge: "Chronic Inflammatory Gynecological",
    icon: "shield-alert",
    shortDesc: "A chronic, estrogen-dependent inflammatory disease where tissue resembling normal endometrium grows outside the uterine cavity.",
    whatIsIt: "Endometriosis is a chronic, estrogen-dependent inflammatory disease characterized by the presence of endometrial-like stroma and glands growing outside the uterine cavity, most commonly on the ovaries, fallopian tubes, uterosacral ligaments, pelvic peritoneum, bowel, and bladder. Like normal uterine lining, these ectopic lesions bleed and shed during each menstrual cycle, but with no exit route, triggering chronic pelvic inflammation, fibrosis, and dense adhesions.",
    causes: [
      "Retrograde Menstruation (Sampson's Theory): Menstrual fluid containing viable endometrial cells flows backward through fallopian tubes into the peritoneal cavity",
      "Coelomic Metaplasia: Transformation of normal peritoneal mesothelial cells into endometrial-like tissue under hormonal or inflammatory stimuli",
      "Vascular and Lymphatic Dissemination (explaining rare distant lesions in the lungs, diaphragm, or brain)",
      "Immune system dysregulation: Defective natural killer cell and peritoneal macrophage clearance failing to clear ectopic tissue",
      "Genetic predisposition and epigenetic alterations (high familial clustering)"
    ],
    symptoms: [
      "Dysmenorrhea: Severe, debilitating menstrual cramps that do not respond to ordinary painkillers, often beginning days before bleeding and persisting throughout the cycle",
      "Deep Dyspareunia: Pain during or immediately after sexual intercourse",
      "Chronic Non-Menstrual Pelvic Pain: Aching pain present throughout the month",
      "Dyschezia: Painful bowel movements, rectal pressure, or constipation/diarrhea during menstruation",
      "Dysuria: Pain, burning, or frequency during urination, especially during menstrual periods",
      "Infertility / Subfertility: Inability to conceive (present in 30% to 50% of women with endometriosis)",
      "Heavy menstrual bleeding (menorrhagia) or abnormal premenstrual spotting",
      "Chronic profound fatigue and brain fog"
    ],
    warningSigns: [
      "Ovarian Endometrioma ('Chocolate Cyst') Rupture: Sudden, agonizing acute peritonitis requiring emergency surgery",
      "Ureteral Obstruction: Silent compression of the ureters by deep infiltrating endometriosis causing silent hydronephrosis and kidney loss",
      "Catamenial Pneumothorax: Collapsed lung occurring synchronously with menstrual bleeding due to diaphragmatic or pleural endometriosis"
    ],
    riskFactors: [
      "First-degree relative (mother or sister) with endometriosis (7- to 10-fold increased risk)",
      "Early age at menarche (before age 11)",
      "Short menstrual cycle lengths (< 27 days) and prolonged menstrual bleeding (> 7 days)",
      "Nulliparity (never having given birth)",
      "Congenital outflow tract obstructions (imperforate hymen, Mullerian anomalies)"
    ],
    bodyImpact: "Cyclic bleeding of ectopic implants releases hemosiderin, prostaglandins, and inflammatory cytokines (IL-1, IL-6, TNF-alpha). This drives intense neuroangiogenesis (sensitizing pelvic nerve fibers), creates dense fibrous bands and adhesions that 'freeze' the pelvis into a solitary mass, damages ovarian reserve, and distorts fallopian tube anatomy.",
    diagnosis: [
      "Specialized High-Resolution Transvaginal Ultrasound (TVS with bowel preparation) performed by an expert sonographer (detects endometriomas and deep infiltrating nodules)",
      "Dedicated Pelvic MRI with pelvic protocol (maps deep infiltrating endometriosis of rectovaginal septum, bowel, and ureters)",
      "Diagnostic Laparoscopy with Histopathological Biopsy (historically the absolute gold standard, now integrated with advanced imaging)",
      "Clinical physical exam: Palpable tender nodules along uterosacral ligaments or fixed retroverted uterus"
    ],
    treatments: [
      "Medical Hormonal Suppression (aims to induce pseudo-pregnancy or pseudo-menopause to atrophy lesions):",
      "- First-Line: Progestin-only therapies (Dienogest 2 mg daily, Norethindrone, or Levonorgestrel-releasing IUD / Mirena)",
      "- Continuous Combined Oral Contraceptive Pills (taken without placebo pill breaks to stop periods entirely)",
      "- GnRH Receptor Antagonists: Oral Elagolix or Relugolix with low-dose hormone 'add-back' therapy",
      "- GnRH Agonists: Leuprolide / Goserelin depot injections",
      "Surgical Excision (Laparoscopic / Robotic Excision of all visible endometriosis implants and adhesiolysis by a specialized minimally invasive gynecologic surgeon — superior to simple superficial ablation)",
      "Multimodal pelvic floor physical therapy and specialized chronic pain management"
    ],
    prevention: "Endometriosis cannot be definitively prevented from initiating. However, early diagnosis in teenage years, continuous hormonal contraception to suppress retrograde bleeding, avoiding endocrine-disrupting chemicals (phthalates, dioxins), and anti-inflammatory lifestyle habits prevent progression to severe deep infiltrating disease.",
    safeFoods: [
      "Anti-inflammatory Mediterranean dietary pattern",
      "Cold-water fatty fish providing Omega-3 EPA/DHA (proven to downregulate inflammatory pelvic prostaglandins)",
      "High-fiber vegetables and beans to facilitate hepatic estrogen excretion via the bowel",
      "Cruciferous vegetables rich in Indole-3-Carbinol (promotes healthy estrogen metabolism)",
      "Turmeric (Curcumin: proven in pre-clinical studies to reduce endometriotic lesion size and inflammation)",
      "Berries, green tea, and raw walnuts"
    ],
    avoidFoods: [
      "Excessive red meat and processed deli meats (associated with significantly higher endometriosis risk)",
      "Industrial trans fats and heavily fried foods",
      "Alcohol consumption (spikes circulating estrogen levels and worsens pelvic inflammation)",
      "Excessive caffeine and sugary sodas",
      "Gluten in sensitive individuals (many women with endometriosis report significant pain relief on a gluten-free trial)"
    ],
    exercises: [
      "Pelvic floor physical therapy (down-training hypertonic, tight pelvic floor muscles)",
      "Low-impact aerobic exercise: Walking, swimming, gentle cycling (stimulates endorphins, the body's natural pain relievers)",
      "Restorative yoga and diaphragmatic pelvic floor stretching (Child's pose, Happy Baby pose)",
      "Avoid intense high-impact jarring workouts during days of severe pelvic flare-ups"
    ],
    lifestyle: [
      "Apply warm heat packs or hot water bottles to the lower pelvis to relax uterine and abdominal muscle spasms",
      "Seek out an endometriosis excision specialist rather than general superficial burning (ablation)",
      "Engage pelvic floor physical therapists specialized in treating pelvic pain",
      "Keep a detailed menstrual and pain symptom diary to share with your surgical team"
    ],
    whenToConsult: "Consult an endometriosis specialist or gynecologist immediately if menstrual cramps prevent you from attending school or work, if you experience pain during sex, or if you have painful bowel movements during your period. Painful periods should NEVER be dismissed as 'just normal cramps'.",
    faqs: [
      {
        q: "Is a hysterectomy a guaranteed cure for endometriosis?",
        a: "No! A hysterectomy (removing the uterus) is NOT a guaranteed cure. Endometriosis lives outside the uterus. If ectopic lesions on the bowel, bladder, or ligaments are left behind, pelvic pain will continue even after a hysterectomy. Full surgical EXCISION of all implants is the key."
      },
      {
        q: "Why does it take an average of 7 to 10 years to get diagnosed with endometriosis?",
        a: "Diagnosis is historically delayed because painful periods are often dismissed as 'normal woman's pain' by society and clinicians, and early lesions are invisible on standard routine pelvic ultrasounds. Awareness and specialized imaging are closing this gap."
      }
    ],
    references: [
      "European Society of Human Reproduction and Embryology (ESHRE) Guideline on Endometriosis 2024",
      "ACOG Practice Bulletin: Management of Endometriosis",
      "World Health Organization (WHO) Endometriosis Factsheet"
    ]
  }
];

