/**
 * HEALTHCARE FOR YOU - Category C: Digestive Diseases
 */
module.exports = [
  {
    id: "gastritis",
    name: "Gastritis (Stomach Lining Inflammation)",
    name_ml: "ഗ്യാസ്ട്രൈറ്റിസ് (ആമാശയ വീക്കം)",
    name_hi: "गैस्ट्राइटिस (पेट की सूजन)",
    name_ar: "التهاب المعدة",
    category: "digestive",
    badge: "Mucosal Inflammation",
    icon: "disc",
    shortDesc: "Inflammation, irritation, or erosion of the protective mucosal lining of the stomach.",
    whatIsIt: "Gastritis is an inflammation of the gastric mucosa (the mucous lining of the stomach). Gastritis may be acute (appearing suddenly with intense burning) or chronic (developing slowly over years). The gastric mucosa normally produces mucus that shields stomach tissue from corrosive gastric acid; when this barrier is damaged or weakened, acid irritates and inflames the stomach wall.",
    causes: [
      "Helicobacter pylori (H. pylori) bacterial infection colonizing the gastric mucosa (~80% of chronic cases)",
      "Frequent or chronic use of Nonsteroidal Anti-Inflammatory Drugs (NSAIDs: Aspirin, Ibuprofen, Naproxen)",
      "Excessive alcohol consumption eroding the protective mucus layer",
      "Severe physiological stress (major surgery, severe burns, critical illness)",
      "Autoimmune gastritis: Autoantibodies attacking parietal cells and intrinsic factor"
    ],
    symptoms: [
      "Gnawing or burning ache or pain (indigestion/dyspepsia) in the upper epigastrium",
      "Feeling of fullness in the upper abdomen after eating only a small amount",
      "Nausea, recurrent vomiting, and belching",
      "Loss of appetite and abdominal bloating",
      "Hiccups and sour, acidic regurgitation"
    ],
    warningSigns: [
      "Hematemesis: Vomiting bright red blood or dark 'coffee-ground' material",
      "Melena: Passing tarry, foul-smelling, jet-black stools indicating upper GI bleeding",
      "Severe acute abdominal rigidity and peritonitis (indicating gastric perforation)"
    ],
    riskFactors: [
      "Chronic use of pain medications for arthritis or headaches",
      "Advancing age (stomach lining naturally thins with age)",
      "Heavy alcohol intake and tobacco smoking",
      "High intake of heavily spiced, highly acidic, or fried foods",
      "Unmanaged chronic emotional distress"
    ],
    bodyImpact: "Chronic unmanaged gastritis causes mucosal atrophy, intestinal metaplasia, loss of intrinsic factor leading to pernicious anemia (Vitamin B12 deficiency), peptic ulcer formation, and increased risk of gastric adenocarcinoma and MALT lymphoma.",
    diagnosis: [
      "Upper Gastrointestinal Endoscopy (Esophagogastroduodenoscopy - EGD) with mucosal biopsy",
      "H. pylori testing: Urea Breath Test (UBT), Stool Antigen Test, or rapid urease biopsy test",
      "Complete Blood Count (CBC) to screen for occult iron deficiency anemia",
      "Serum Gastrin and anti-parietal cell antibodies for autoimmune gastritis"
    ],
    treatments: [
      "Proton Pump Inhibitors (PPIs e.g., Omeprazole, Esomeprazole, Pantoprazole) to suppress acid secretion",
      "H2-Receptor Antagonists (e.g., Famotidine)",
      "H. pylori Eradication: Triple or Quadruple therapy (PPI + Clarithromycin + Amoxicillin/Metronidazole + Bismuth) for 14 days",
      "Mucosal protectants: Sucralfate and Antacids (Aluminum/Magnesium hydroxide) for symptom relief",
      "Discontinuation of offending NSAID medications"
    ],
    prevention: "Gastritis is largely preventable by avoiding unprescribed NSAIDs, moderating alcohol, practicing clean hygiene to prevent H. pylori infection, eating small frequent meals, quitting smoking, and avoiding eating right before lying down.",
    safeFoods: [
      "Bland, non-acidic cooked foods: Oatmeal, white rice, steamed sweet potatoes",
      "Probiotic-rich plain kefir and yogurt (helps suppress H. pylori colonization)",
      "Cruciferous vegetables rich in sulforaphane (broccoli sprouts)",
      "Lean skinless chicken, tofu, and white fish",
      "Chamomile tea, ginger tea, and coconut water"
    ],
    avoidFoods: [
      "NSAID painkillers (Ibuprofen, Aspirin) unless explicitly directed with gastric protection",
      "Alcohol and carbonated beverages",
      "High-acid citrus fruits (lemons, oranges, grapefruits) and tomatoes",
      "Extremely spicy chilies, black pepper, and deep-fried oily foods",
      "Caffeinated beverages (coffee, black tea, energy drinks)"
    ],
    exercises: [
      "Gentle upright walking after meals (aids gastric motility without reflux)",
      "Light yoga and stretching to reduce systemic stress hormones",
      "Avoid vigorous abdominal crunches or heavy bending immediately after eating"
    ],
    lifestyle: [
      "Eat 4-5 smaller meals a day instead of 2-3 massive feasts",
      "Do not lie down for at least 2 to 3 hours after eating",
      "Elevate the head of your bed by 6 inches",
      "Eliminate tobacco smoke which impairs gastric mucosal blood flow"
    ],
    whenToConsult: "Consult a gastroenterologist if symptoms persist for more than 2 weeks despite antacids. SEEK EMERGENCY CARE IMMEDIATELY if you vomit blood, have black tarry stools, or experience sudden severe stomach pain.",
    faqs: [
      {
        q: "Is gastritis the same as acidity or heartburn?",
        a: "Not exactly. Acidity or heartburn refers to acid splashing back up into the esophagus. Gastritis is actual inflammation and injury to the lining inside the stomach itself."
      },
      {
        q: "Can stress alone cause gastritis?",
        a: "Emotional stress alone rarely causes severe gastritis, but it dramatically increases stomach acid production, lowers pain tolerance, and exacerbates underlying H. pylori or NSAID-induced inflammation."
      }
    ],
    references: [
      "American College of Gastroenterology (ACG) Guidelines for Gastritis and Dyspepsia",
      "Maastricht VI/Florence Consensus Report on Helicobacter pylori Management",
      "Mayo Clinic Gastritis Overview and Treatment Protocols"
    ]
  },
  {
    id: "gerd",
    name: "Acid Reflux (GERD)",
    name_ml: "ഗ്യാസ്ട്രോ ഈസോഫേഷ്യൽ റിഫ്ലക്സ് (GERD)",
    name_hi: "एसिड रिफ्लक्स / जीईआरडी",
    name_ar: "ارتجاع المريء (GERD)",
    category: "digestive",
    badge: "Esophageal Reflux",
    icon: "arrow-up-circle",
    shortDesc: "A chronic digestive disorder where stomach acid repeatedly flows back up into the esophagus, irritating its lining.",
    whatIsIt: "Gastroesophageal Reflux Disease (GERD) occurs when stomach acid or bile repeatedly flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) happens when the lower esophageal sphincter (LES)—the muscular valve at the bottom of the esophagus—relaxes abnormally or weakens.",
    causes: [
      "Transient Lower Esophageal Sphincter Relaxations (TLESRs) or low resting sphincter pressure",
      "Hiatal hernia (the upper part of the stomach pushes up through the diaphragm into the chest)",
      "Delayed gastric emptying (gastroparesis) increasing intragastric pressure",
      "Obesity and increased intra-abdominal pressure",
      "Certain medications that relax the LES (calcium channel blockers, nitrates, sedatives)"
    ],
    symptoms: [
      "Heartburn (pyrosis): A burning sensation in the chest behind the breastbone, usually after eating and worse at night",
      "Regurgitation of sour, bitter liquid or partially digested food into the mouth or throat",
      "Chest pain (which can mimic cardiac angina)",
      "Dysphagia: Difficulty swallowing or sensation of food sticking in the throat (globus sensation)",
      "Chronic dry cough, hoarseness, and frequent throat clearing (Laryngopharyngeal Reflux)",
      "Worsening of asthma symptoms due to micro-aspiration of acidic vapors"
    ],
    warningSigns: [
      "Progressive dysphagia (difficulty swallowing solids, then liquids)",
      "Odynophagia (painful swallowing) or unexplained weight loss",
      "Barrett's Esophagus: Precancerous transformation of esophageal squamous epithelium to columnar mucosa"
    ],
    riskFactors: [
      "Obesity and central abdominal adiposity",
      "Pregnancy (due to hormonal relaxation of the LES and elevated abdominal pressure)",
      "Smoking and secondhand smoke inhalation",
      "Eating large meals close to bedtime",
      "Connective tissue disorders like scleroderma"
    ],
    bodyImpact: "Chronic acid exposure causes erosive esophagitis, esophageal ulcers, peptic strictures (fibrous scar narrowing making swallowing difficult), and Barrett's esophagus, which elevates the risk of developing esophageal adenocarcinoma.",
    diagnosis: [
      "Clinical diagnosis based on response to empirical PPI therapy",
      "Upper Endoscopy (EGD) to assess esophageal mucosal erosion and rule out Barrett's",
      "24-Hour Ambulatory pH Monitoring / Bravo wireless pH capsule (gold standard to quantify acid exposure)",
      "High-Resolution Esophageal Manometry (to evaluate peristalsis and LES pressure)",
      "Barium Swallow Esophagram to detect hiatal hernia or strictures"
    ],
    treatments: [
      "Lifestyle and dietary interventions (elevating head of bed, weight loss, timing of dinner)",
      "Proton Pump Inhibitors (PPIs: Omeprazole, Esomeprazole, Rabeprazole, Vonoprazan PCAB)",
      "H2-Receptor Antagonists (Famotidine) for nocturnal breakthrough acid",
      "Alginate-based antacids (Gaviscon: forms a raft barrier over gastric contents)",
      "Surgical intervention: Laparoscopic Nissen Fundoplication or LINX Magnetic Sphincter Augmentation for refractory GERD"
    ],
    prevention: "Maintain a healthy body weight, avoid eating within 3 to 4 hours of sleeping, limit trigger foods (mint, chocolate, fried items), stop smoking, and wear loose-fitting clothing around the waist.",
    safeFoods: [
      "Non-citrus fruits (melons, bananas, apples, pears)",
      "Oatmeal, brown rice, whole grain couscous",
      "Lean proteins (skinless chicken, turkey, egg whites, fish)",
      "Vegetables: Green beans, broccoli, asparagus, cucumbers, leafy greens",
      "Herbal teas (chamomile, licorice tea; avoid peppermint)"
    ],
    avoidFoods: [
      "High-fat and deep-fried foods (delay stomach emptying and relax the LES)",
      "Chocolate, peppermint, and spearmint (naturally relax the esophageal valve)",
      "Citrus fruits, tomatoes, ketchup, and tomato-based pasta sauces",
      "Carbonated sodas, coffee, caffeinated energy drinks, and alcohol",
      "Raw onions, garlic, and hot chili peppers"
    ],
    exercises: [
      "Low-impact upright cardio: Walking, stair climbing, light jogging",
      "Avoid heavy abdominal crunches, inverted yoga poses (downward dog), or heavy deadlifts immediately after eating",
      "Diaphragmatic breathing exercises to strengthen the crural diaphragm"
    ],
    lifestyle: [
      "Elevate the head of your bed by 6 to 8 inches using bed risers (extra pillows alone just bend your neck and increase pressure)",
      "Never eat a meal within 3 to 4 hours of going to sleep",
      "Sleep on your left side (anatomically keeps the gastric junction above the acid pool)",
      "Avoid tight belts, corsets, and restrictive waistbands"
    ],
    whenToConsult: "Seek prompt medical consultation if you have trouble swallowing, food feels stuck in your chest, you vomit blood, or you need antacids more than twice a week for over a month.",
    faqs: [
      {
        q: "Why does sleeping on the left side help acid reflux?",
        a: "Because of the stomach's natural anatomy, sleeping on the left side positions the gastroesophageal junction above the level of gastric acid, preventing acid from splashing into the esophagus."
      },
      {
        q: "Can acid reflux cause a heart attack?",
        a: "GERD cannot cause a heart attack, but severe acid reflux can cause chest pain that feels identical to a heart attack. Any unexplained severe chest pain should always be evaluated in an emergency room first."
      }
    ],
    references: [
      "American College of Gastroenterology (ACG) Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease",
      "World Gastroenterology Organisation (WGO) Global Guidelines on GERD",
      "Mayo Clinic GERD Diagnostic and Surgical Protocols"
    ]
  },
  {
    id: "ibs",
    name: "Irritable Bowel Syndrome (IBS)",
    name_ml: "ഇറിറ്റബിൾ ബോവൽ സിൻഡ്രോം (IBS)",
    name_hi: "इरिटेबल बाउल सिंड्रोम (आईबीएस)",
    name_ar: "متلازمة القولون العصبي",
    category: "digestive",
    badge: "Gut-Brain Disorder",
    icon: "activity",
    shortDesc: "A common disorder of gut-brain interaction characterized by recurrent abdominal pain, bloating, and altered bowel habits.",
    whatIsIt: "Irritable Bowel Syndrome (IBS) is a functional gastrointestinal disorder (disorder of gut-brain interaction) characterized by recurrent abdominal pain or cramping associated with defecation, accompanied by a change in bowel frequency or form. It is categorized into IBS-D (diarrhea-predominant), IBS-C (constipation-predominant), and IBS-M (mixed pattern).",
    causes: [
      "Visceral hypersensitivity: Hyper-reactive nerve signaling between the enteric nervous system and brain",
      "Abnormal gastrointestinal motility (too fast causing diarrhea, too slow causing constipation)",
      "Post-Infectious IBS (PI-IBS) triggered following a severe bout of gastroenteritis / food poisoning",
      "Alterations in gut microbiome composition (dysbiosis) and low-grade mucosal inflammation",
      "Psychological stress, anxiety, and early-life trauma activating the autonomic HPA axis"
    ],
    symptoms: [
      "Recurrent abdominal cramping or aching, typically relieved or worsened after passing stool",
      "Noticeable abdominal bloating, distension, and excessive gas / flatulence",
      "Frequent loose, watery stools with urgency (in IBS-D)",
      "Hard, lumpy, infrequent stools with straining and feeling of incomplete evacuation (in IBS-C)",
      "Mucus in stool (without blood)",
      "Alternating diarrhea and constipation from week to week (in IBS-M)"
    ],
    warningSigns: [
      "Alarm / 'Red Flag' symptoms that RULE OUT simple IBS and require immediate colonoscopy:",
      "Rectal bleeding or blood in stool",
      "Unintended significant weight loss",
      "Nocturnal diarrhea awakening the patient from sleep",
      "New onset of symptoms after age 50 or family history of Colorectal Cancer or IBD"
    ],
    riskFactors: [
      "Female gender (twice as common in women as in men)",
      "Age under 50 years",
      "History of anxiety, depression, or chronic psychological stress",
      "Prior severe bacterial gastroenteritis (Campylobacter, Salmonella, Shigella)",
      "Family history of functional gastrointestinal disorders"
    ],
    bodyImpact: "While IBS does not cause physical ulceration, structural bowel damage, or elevate cancer risk, it causes severe physical discomfort, chronic fatigue, anxiety, depression, and profoundly impairs social and professional quality of life.",
    diagnosis: [
      "Rome IV Diagnostic Criteria: Recurrent abdominal pain at least 1 day/week in the last 3 months, associated with 2+ of: related to defecation, change in stool frequency, change in stool form",
      "Fecal Calprotectin test (to rule out Inflammatory Bowel Disease - Crohn's / Ulcerative Colitis)",
      "Celiac Disease Serology (Anti-tTG IgA and total IgA) to rule out celiac disease",
      "Complete Blood Count and CRP to rule out occult infection or systemic inflammation",
      "Colonoscopy performed only if alarm symptoms or age > 45-50 criteria are met"
    ],
    treatments: [
      "Low-FODMAP Diet (Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols) under dietitian guidance",
      "Soluble fiber supplementation (Psyllium / Ispaghula husk) — insoluble fiber should be avoided",
      "Antispasmodics (e.g., Mebeverine, Hyoscine, Dicyclomine) for abdominal cramping",
      "IBS-D medications: Loperamide, Rifaximin (gut-directed antibiotic), Alosetron, Eluxadoline",
      "IBS-C medications: Osmotic laxatives (Polyethylene glycol), Lubiprostone, Linaclotide",
      "Neuromodulators: Low-dose Tricyclic Antidepressants (Amitriptyline) or SSRIs to dampen visceral pain signaling",
      "Gut-Directed Hypnotherapy and Cognitive Behavioral Therapy (CBT)"
    ],
    prevention: "Preventing flare-ups involves identifying personal food triggers through a systematic food diary, eating regular meals at consistent times, drinking sufficient fluids, managing mental stress, and avoiding unnecessary broad-spectrum antibiotics.",
    safeFoods: [
      "Low-FODMAP fruits: Strawberries, blueberries, oranges, grapes, kiwis",
      "Low-FODMAP vegetables: Carrots, cucumbers, spinach, zucchini, bell peppers",
      "Lactose-free dairy products, almond milk, or rice milk",
      "Lean meats, poultry, eggs, and tofu",
      "Gluten-free grains: Rice, oats, quinoa",
      "Peppermint oil capsules (natural smooth muscle antispasmodic)"
    ],
    avoidFoods: [
      "High-FODMAP foods: Onions, garlic, wheat, barley, rye, legumes/beans",
      "High-fructose fruits: Apples, pears, watermelons, mangoes, dried fruits",
      "Lactose-heavy dairy (regular cow's milk, ice cream, soft cheeses)",
      "Sugar-free candies with artificial polyol sweeteners (sorbitol, mannitol, xylitol)",
      "Carbonated beverages, excessive caffeine, and alcohol"
    ],
    exercises: [
      "Moderate aerobic exercise (30 minutes of brisk walking or gentle cycling 4-5 days a week)",
      "Yoga targeting pelvic and abdominal relaxation",
      "Diaphragmatic belly breathing for 10 minutes twice daily",
      "Gentle stretching routines"
    ],
    lifestyle: [
      "Eat meals slowly in a calm environment; chew thoroughly",
      "Maintain a 3-phase Low-FODMAP strategy: Elimination (2-6 weeks), Reintroduction, Personalization",
      "Practice daily mindfulness, meditation, or progressive muscle relaxation",
      "Establish a consistent bowel routine every morning after breakfast"
    ],
    whenToConsult: "Consult a doctor if you develop new bowel changes lasting several weeks. SEEK PROMPT EVALUATION if you notice blood in stool, lose weight without trying, or have diarrhea waking you at night.",
    faqs: [
      {
        q: "What does Low-FODMAP mean?",
        a: "FODMAPs are short-chain carbohydrates that are poorly absorbed in the small intestine. They draw water into the bowel and are fermented rapidly by gut bacteria, causing gas, pain, and diarrhea in people with sensitive guts."
      },
      {
        q: "Does IBS increase my risk of developing colon cancer?",
        a: "No. IBS is a functional disorder of nerve and muscle regulation in the bowel. It does not cause inflammation, ulcers, or structural damage, and does not increase the risk of bowel cancer."
      }
    ],
    references: [
      "American College of Gastroenterology (ACG) Clinical Guideline: Management of Irritable Bowel Syndrome",
      "Rome IV Criteria for Functional Gastrointestinal Disorders",
      "British Society of Gastroenterology Guidelines on the Management of IBS"
    ]
  },
  {
    id: "peptic-ulcer",
    name: "Peptic Ulcer Disease",
    name_ml: "പെപ്റ്റിക് അൾസർ (കുടൽപ്പുണ്ണ്)",
    name_hi: "पेप्टिक अल्सर (पेट का अल्सर)",
    name_ar: "قرحة المعدة والاثني عشر",
    category: "digestive",
    badge: "Mucosal Ulceration",
    icon: "alert-triangle",
    shortDesc: "Open sores or erosions that develop on the inside lining of your stomach (gastric ulcer) and the upper portion of your small intestine (duodenal ulcer).",
    whatIsIt: "Peptic Ulcer Disease (PUD) refers to painful open sores or breaks in the inner epithelial lining of the stomach (gastric ulcer) or the first part of the small intestine (duodenal ulcer). They occur when the thick protective layer of mucus that coats the digestive tract is eroded by harsh digestive acids and pepsin.",
    causes: [
      "Infection with Helicobacter pylori (H. pylori) bacteria (~70% of gastric, ~90% of duodenal ulcers)",
      "Regular long-term use of NSAIDs (Aspirin, Ibuprofen, Naproxen, Ketorolac, Diclofenac)",
      "Zollinger-Ellison Syndrome (rare gastrinoma tumor producing extreme gastrin and acid)",
      "Physiological stress ulcers in critically ill intensive care unit patients",
      "Cigarette smoking (reduces bicarbonate secretion and impairs mucosal healing)"
    ],
    symptoms: [
      "Burning epigastric stomach pain located between the navel and breastbone",
      "Duodenal ulcer pain: Typically occurs 2 to 3 hours after a meal or in the middle of the night, often relieved temporarily by eating food",
      "Gastric ulcer pain: Often worsened shortly after eating food",
      "Feeling of early fullness, abdominal bloating, and belching",
      "Nausea, intolerance to fatty foods, and heartburn"
    ],
    warningSigns: [
      "Perforation: Sudden, intense, knife-like abdominal pain with board-like rigidity (Surgical Emergency)",
      "Gastrointestinal Hemorrhage: Vomiting bright red blood or black 'coffee-ground' emesis",
      "Melena: Jet black, tarry, sticky stools",
      "Gastric Outlet Obstruction: Intractable recurrent vomiting of undigested food eaten hours earlier"
    ],
    riskFactors: [
      "Concurrent use of NSAIDs with oral corticosteroids, anticoagulants, or SSRIs",
      "History of prior peptic ulcers or GI bleeding",
      "Active tobacco smoking and heavy alcohol consumption",
      "Age over 60 years",
      "Untreated chronic H. pylori infection"
    ],
    bodyImpact: "Deep ulcers can erode into muscularis mucosae and penetrate major blood vessels (e.g., gastroduodenal artery), causing catastrophic internal bleeding. Full-thickness perforation leaks gastric juices into the sterile peritoneal cavity causing fatal peritonitis and septic shock.",
    diagnosis: [
      "Upper Endoscopy (Esophagogastroduodenoscopy - EGD) to visualize ulcer, measure size, and biopsy edges",
      "Biopsy for Histopathology to rule out gastric adenocarcinoma in all gastric ulcers",
      "H. pylori testing (Urea breath test, stool antigen test, or rapid endoscopic urease test)",
      "Upright Chest and Abdominal X-Ray or CT (to detect free subdiaphragmatic air in perforation)",
      "Hemoglobin / Hematocrit level to assess blood loss"
    ],
    treatments: [
      "H. pylori Eradication: 14-day Bismuth Quadruple Therapy (PPI + Bismuth Subsalicylate + Metronidazole + Tetracycline) or Triple Therapy",
      "High-dose Proton Pump Inhibitors (PPIs: Omeprazole 40mg, Pantoprazole) for 4 to 8 weeks to allow mucosal healing",
      "Potassium-Competitive Acid Blockers (PCAB: Vonoprazan)",
      "Endoscopic Hemostasis (Hemoclips, thermal coagulation, epinephrine injection) for actively bleeding ulcers",
      "Emergency Laparoscopic / Open Graham Patch repair for perforated ulcers"
    ],
    prevention: "Avoid unnecessary NSAID use; if NSAIDs are required, co-prescribe a gastroprotective PPI. Eradicate H. pylori completely, quit smoking, avoid excessive alcohol, and never mix painkillers with alcohol.",
    safeFoods: [
      "High-fiber whole grains (oatmeal, barley, brown rice)",
      "Probiotic foods (plain yogurt, kefir) which help suppress H. pylori",
      "Cruciferous vegetables rich in sulforaphane (broccoli, cauliflower)",
      "Apples, pears, and berries rich in flavonoids that inhibit H. pylori growth",
      "Soft, easily digestible cooked vegetables and lean poultry"
    ],
    avoidFoods: [
      "NSAID painkillers (Aspirin, Ibuprofen, Diclofenac) without doctor approval",
      "Alcohol and caffeinated drinks (stimulate gastric acid release)",
      "Spicy hot chili peppers, black pepper, and mustard seed",
      "Acidic tomato products and citrus fruits during active ulcer flare-ups",
      "Deep-fried foods and heavily salted cured meats"
    ],
    exercises: [
      "Low-impact walking and gentle movement to support digestion",
      "Stress-reduction yoga and deep meditation (lowers vagal gastrin stimulation)",
      "Avoid strenuous physical lifting or bearing down during acute healing"
    ],
    lifestyle: [
      "Stop smoking immediately — nicotine doubles ulcer recurrence rates and delays healing",
      "Take prescribed acid-suppressing medication for the full recommended duration, not just until pain stops",
      "Undergo repeat follow-up endoscopy after 8-12 weeks for gastric ulcers to verify complete healing and rule out malignancy",
      "Avoid eating late night snacks right before bed"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY for sudden severe knife-like abdominal pain, vomiting blood, or passing black tarry stools. Consult a doctor for stomach burning lasting over a week.",
    faqs: [
      {
        q: "Does spicy food cause stomach ulcers?",
        a: "No. Spicy foods do not cause ulcers; the primary causes are H. pylori bacteria and NSAID painkillers. However, spicy food can irritate an existing ulcer and worsen burning symptoms."
      },
      {
        q: "Why do duodenal ulcers feel better after eating?",
        a: "When food enters the stomach, the pyloric sphincter closes and the duodenum releases alkaline pancreatic bicarbonate to neutralize stomach acid, temporarily easing the pain of a duodenal ulcer."
      }
    ],
    references: [
      "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection",
      "British Society of Gastroenterology Guidelines for the Management of Peptic Ulcer Bleeding",
      "Mayo Clinic Peptic Ulcer Diagnosis and Treatment Protocols"
    ]
  },
  {
    id: "gallstones",
    name: "Gallstones (Cholelithiasis)",
    name_ml: "പിത്താശയക്കല്ലുകൾ (ഗാൾസ്റ്റോൺസ്)",
    name_hi: "पित्त की पथरी (पित्ताशय की पथरी)",
    name_ar: "حصوات المرارة",
    category: "digestive",
    badge: "Biliary Calculus",
    icon: "disc",
    shortDesc: "Hardened deposits of digestive fluid (cholesterol or bilirubin) that form inside the gallbladder.",
    whatIsIt: "Cholelithiasis is the presence of solid crystalline concretions (gallstones) within the gallbladder. Gallstones can range from the size of a grain of sand to a golf ball. The two main types are Cholesterol stones (~80%, yellowish-green, composed of hardened cholesterol) and Pigment stones (dark brown/black, composed of excess bilirubin).",
    causes: [
      "Supersaturation of bile with cholesterol exceeding the solubilizing capacity of bile salts and lecithin",
      "Gallbladder hypomotility or stasis (sluggish emptying allowing crystals to nucleate and grow)",
      "Excess bilirubin in bile due to chronic hemolytic anemias or liver cirrhosis (pigment stones)",
      "Rapid, drastic weight loss (such as after bariatric surgery) mobilizing large amounts of cholesterol"
    ],
    symptoms: [
      "Most stones (~80%) are asymptomatic ('silent gallstones')",
      "Biliary Colic: Sudden, intense, steady pain in the right upper quadrant or epigastrium lasting 1 to 5 hours",
      "Pain radiating to the right shoulder blade or upper back",
      "Pain classically triggered 30 to 90 minutes after eating a rich, fatty, or greasy meal",
      "Nausea and vomiting during acute pain attacks",
      "Abdominal bloating and indigestion"
    ],
    warningSigns: [
      "Acute Cholecystitis: Right upper quadrant pain lasting > 6 hours with high fever and Murphy's sign",
      "Choledocholithiasis: Jaundice (yellow eyes/skin), dark tea-colored urine, pale clay-colored stools",
      "Gallstone Pancreatitis: Severe epigastric pain radiating directly to the back with skyrocketing lipase/amylase",
      "Ascending Cholangitis: Charcot's triad (Fever + Jaundice + RUQ pain) — a life-threatening medical emergency"
    ],
    riskFactors: [
      "The classic '5 Fs': Female, Forty, Fat (obese), Fertile (multiparity/estrogen exposure), Fair",
      "Rapid weight loss diets and prolonged fasting",
      "Diabetes mellitus, metabolic syndrome, and hypertriglyceridemia",
      "Sedentary lifestyle and low dietary fiber",
      "Family history of gallstones"
    ],
    bodyImpact: "Impacted stones in the cystic duct cause acute gallbladder inflammation, bacterial infection, empyema, and gangrene. Stones migrating into the common bile duct cause obstructive jaundice, life-threatening suppurative cholangitis, and acute necrotizing pancreatitis.",
    diagnosis: [
      "Transabdominal Ultrasound of the Right Upper Quadrant (gold standard, > 95% sensitivity for gallstones)",
      "Liver Function Tests (Total and direct bilirubin, Alkaline Phosphatase, ALT, AST)",
      "Serum Amylase and Lipase (to screen for gallstone pancreatitis)",
      "Magnetic Resonance Cholangiopancreatography (MRCP) to visualize stones lodged in bile ducts",
      "Endoscopic Retrograde Cholangiopancreatography (ERCP) for diagnostic confirmation and stone extraction"
    ],
    treatments: [
      "Expectant management / 'Watchful waiting' for asymptomatic silent gallstones",
      "Laparoscopic Cholecystectomy (minimally invasive surgical gallbladder removal — definitive gold standard)",
      "ERCP with Endoscopic Sphincterotomy for stones lodged in the common bile duct",
      "Ursodeoxycholic Acid (UDCA) oral dissolution therapy (only for small radiolucent cholesterol stones in patients unfit for surgery)",
      "Intravenous antibiotics and analgesia for acute cholecystitis"
    ],
    prevention: "Maintain a healthy body weight and avoid rapid 'crash' starvation diets. Consume high-fiber meals, healthy unsaturated fats (nuts, olive oil), stay physically active, and take UDCA prophylactically during medically supervised rapid weight loss.",
    safeFoods: [
      "High-fiber foods: Oats, barley, lentils, beans, whole wheat",
      "Fresh fruits and vegetables (apples, pears, citrus, leafy greens)",
      "Lean protein choices: Skinless poultry breast, egg whites, fish, tofu",
      "Healthy unsaturated fats in moderation (extra virgin olive oil, almonds, walnuts)",
      "Black coffee (proven to stimulate gallbladder emptying and reduce stone risk)"
    ],
    avoidFoods: [
      "Deep-fried foods, french fries, and fried chicken (triggers intense gallbladder contractions)",
      "Fatty cuts of pork, beef, bacon, and processed sausages",
      "Full-fat dairy, heavy cream, butter, and rich cheeses",
      "Rich cream-based soups, gravies, pastries, and croissants"
    ],
    exercises: [
      "Regular brisk walking (150-200 minutes weekly lowers gallstone risk by ~30%)",
      "Moderate cycling, swimming, or aerobic workouts",
      "Resistance and strength training to maintain metabolic rate and prevent weight regain"
    ],
    lifestyle: [
      "Avoid skipping meals; prolonged fasting allows bile to sit and crystallize in the gallbladder",
      "Aim for gradual weight loss (no more than 0.5 to 1 kg per week)",
      "Drink plenty of water throughout the day",
      "Limit consumption of refined sugars and processed carbohydrates"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES OR GO TO THE ER IMMEDIATELY if you experience intense stomach pain lasting more than 2 hours, fever with chills, or yellowing of your skin or eyes.",
    faqs: [
      {
        q: "Can I live a normal life without a gallbladder?",
        a: "Yes. The gallbladder merely stores bile; the liver produces it. After cholecystectomy, bile flows continuously and directly from the liver into the small intestine. Most people digest food normally without long-term issues."
      },
      {
        q: "Can gallstones be dissolved with lemon juice or olive oil flushes?",
        a: "No. The popular 'gallbladder flush' is medically disproven. The 'stones' people pass after these flushes are merely congealed soap complexes formed from the massive dose of oil and acidic juice."
      }
    ],
    references: [
      "World Gastroenterology Organisation (WGO) Global Guidelines on Gallstones",
      "European Association for the Study of the Liver (EASL) Clinical Practice Guidelines on the Prevention, Diagnosis and Treatment of Gallstones",
      "Mayo Clinic Gallstones Overview"
    ]
  },
  {
    id: "celiac-disease",
    name: "Celiac Disease (Gluten-Sensitive Enteropathy)",
    name_ml: "സീലിയാക് രോഗം",
    name_hi: "सीलिएक रोग",
    name_ar: "مرض الداء البطني (السيلياك)",
    category: "digestive",
    badge: "Autoimmune Enteropathy",
    icon: "shield-alert",
    shortDesc: "A serious systemic autoimmune disorder triggered by consuming gluten that damages the small intestine villi.",
    whatIsIt: "Celiac disease is a chronic hereditary autoimmune disorder occurring in genetically predisposed people where ingestion of gluten (a protein found in wheat, rye, and barley) leads to immune-mediated destruction of the mucosal lining and microscopic finger-like projections (villi) of the small intestine, causing severe malabsorption.",
    causes: [
      "Autoimmune reaction triggered by dietary gluten ingestion",
      "Genetic predisposition: Mandatory presence of HLA-DQ2 or HLA-DQ8 heterodimers",
      "Tissue Transglutaminase (tTG) autoantibody generation",
      "Environmental triggers (gastrointestinal viral infections, pregnancy, surgery) triggering phenotypic onset"
    ],
    symptoms: [
      "Chronic diarrhea or pale, foul-smelling, fatty, floating stools (Steatorrhea)",
      "Abdominal bloating, cramping, and excessive flatulence",
      "Unexplained weight loss and failure to thrive / stunted growth in children",
      "Chronic refractory Iron Deficiency Anemia unresponsive to oral iron",
      "Profound chronic fatigue, brain fog, and muscle weakness",
      "Dermatitis Herpetiformis: Intensely itchy, blistering skin rash on elbows, knees, and buttocks",
      "Recurrent aphthous mouth ulcers and dental enamel defects"
    ],
    warningSigns: [
      "Celiac Crisis: Severe explosive diarrhea, hypokalemia, hypocalcemia, and shock",
      "Refractory Celiac Disease (persistent villous atrophy despite 12+ months strict gluten-free diet)",
      "Enteropathy-Associated T-Cell Lymphoma (EATL) — rare malignant transformation"
    ],
    riskFactors: [
      "First-degree relative with biopsy-proven celiac disease (10x higher risk)",
      "Type 1 Diabetes Mellitus, Autoimmune Thyroiditis (Hashimoto's), or Addison's disease",
      "Down Syndrome, Turner Syndrome, or Williams Syndrome",
      "Presence of HLA-DQ2 or HLA-DQ8 gene loci"
    ],
    bodyImpact: "Immune destruction leads to total villous atrophy (flattening of intestinal villi) and crypt hyperplasia in the duodenum and jejunum. This strips the intestine of absorptive surface area, causing severe malabsorption of iron, calcium, Vitamin D, Vitamin B12, folic acid, and fat-soluble vitamins.",
    diagnosis: [
      "Serum Anti-Tissue Transglutaminase (anti-tTG) IgA antibody test (must be performed while on a gluten-containing diet)",
      "Total Serum IgA level (to rule out selective IgA deficiency, which causes false-negative tTG)",
      "Anti-Endomysial Antibodies (EMA-IgA) for confirmatory specificity",
      "Upper Endoscopy with Duodenal Biopsies (at least 4-6 biopsies from bulb and distal duodenum showing Marsh classification villous blunting)",
      "HLA-DQ2 / HLA-DQ8 genetic testing (has 99% negative predictive value)"
    ],
    treatments: [
      "Strict, lifelong, 100% Gluten-Free Diet (GFD) — the only proven effective medical treatment",
      "Nutritional supplementation for corrected deficiencies (Iron, Calcium, Vitamin D, B12, Zinc)",
      "Consultation with a specialized registered celiac dietitian",
      "Systemic Corticosteroids or Budesonide for acute celiac crisis or Refractory Celiac Disease Type 1",
      "Regular serological monitoring of tTG-IgA levels to verify dietary compliance and mucosal healing"
    ],
    prevention: "Celiac disease cannot be prevented from developing in genetically susceptible individuals. Secondary prevention relies on strict lifelong avoidance of all trace gluten contamination to allow full villous regeneration and prevent osteoporosis and lymphoma.",
    safeFoods: [
      "Naturally gluten-free grains: Rice, quinoa, corn, certified gluten-free oats, millet, buckwheat, sorghum",
      "Fresh unprocessed meats, poultry, fish, eggs, and plain tofu",
      "All fresh fruits, vegetables, and legumes",
      "Plain milk, butter, hard cheeses, and pure vegetable oils",
      "Nuts, seeds, and certified gluten-free packaged products"
    ],
    avoidFoods: [
      "All forms of Wheat (spelt, kamut, farro, durum, semolina, couscous, maida)",
      "Barley, barley malt extract, malt vinegar, and beer",
      "Rye and triticale",
      "Commercial soy sauces (most contain wheat as primary ingredient)",
      "Canned soups, gravies, and processed meats containing wheat flour thickeners",
      "Cross-contaminated foods (shared toasters, shared deep fryers)"
    ],
    exercises: [
      "Weight-bearing resistance training and walking to rebuild bone mineral density lost to malabsorption",
      "Low to moderate cardio exercise to restore energy levels",
      "Gentle stretching and mobility routines"
    ],
    lifestyle: [
      "Dedicate separate kitchen utensils, toasters, and cutting boards to prevent gluten cross-contamination",
      "Read all food, medication, and cosmetic labels diligently for hidden gluten or wheat starch",
      "Undergo a baseline DEXA bone density scan to screen for early osteopenia or osteoporosis",
      "Join national celiac support societies for updated gluten-free product testing registries"
    ],
    whenToConsult: "Consult a gastroenterologist if you have chronic unexplained diarrhea, bloating, or iron deficiency anemia BEFORE starting a gluten-free diet, as cutting gluten early makes accurate medical diagnosis impossible.",
    faqs: [
      {
        q: "Why must I continue eating gluten before my celiac test?",
        a: "Celiac tests detect antibodies generated in response to gluten. If you eliminate gluten before testing, the immune system quiets down, antibody levels drop, and intestinal villi heal, causing false-negative test results."
      },
      {
        q: "Is celiac disease the same as a wheat allergy or gluten sensitivity?",
        a: "No. A wheat allergy is an immediate IgE allergic reaction (hives, wheezing). Non-celiac gluten sensitivity causes discomfort without autoantibodies or intestinal damage. Celiac disease is an autoimmune condition causing permanent organ damage if untreated."
      }
    ],
    references: [
      "American College of Gastroenterology (ACG) Clinical Guidelines: Diagnosis and Management of Celiac Disease",
      "ESPGHAN Guidelines for Diagnosing Coeliac Disease 2024",
      "Celiac Disease Foundation Clinical Compendium"
    ]
  }
];

