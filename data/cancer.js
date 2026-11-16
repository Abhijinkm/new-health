/**
 * HEALTHCARE FOR YOU - Category H: Cancer Awareness
 */
module.exports = [
  {
    id: "breast-cancer",
    name: "Breast Cancer (Mammary Carcinoma)",
    name_ml: "സ്തനാർബുദം (ബ്രെസ്റ്റ് കാൻസർ)",
    name_hi: "स्तन कैंसर (ब्रेस्ट कैंसर)",
    name_ar: "سرطان الثدي",
    category: "cancer",
    badge: "Common Female Malignancy",
    icon: "ribbon",
    shortDesc: "Malignant cellular proliferation originating in breast tissue, primarily in the milk ducts (ductal) or lobules.",
    whatIsIt: "Breast cancer is the most frequently diagnosed cancer in women globally. It arises from the uncontrolled clonal growth of abnormal epithelial cells lining the breast lobules (milk-producing glands) or ducts (passages draining milk to the nipple). Subtypes are determined by molecular receptor expression: Hormone Receptor-positive (ER+/PR+), Human Epidermal Growth Factor Receptor 2-positive (HER2+), and Triple-Negative Breast Cancer (TNBC).",
    causes: [
      "Accumulation of somatic DNA mutations in breast epithelial cells",
      "High lifetime exposure to endogenous estrogens (early menarche before age 12, late menopause after 55, nulliparity, late first pregnancy after 30)",
      "Inherited germline pathogenic variants in BRCA1 and BRCA2 tumor suppressor genes (lifetime risk up to 70-80%)",
      "Other genetic mutations: PALB2, TP53, CHEK2, PTEN",
      "Postmenopausal hormone replacement therapy (HRT) and thoracic radiation exposure in youth"
    ],
    symptoms: [
      "A new, painless, firm or hard lump or thickening in the breast or axilla (armpit) with irregular margins",
      "Change in the size, contour, or symmetry of the breast",
      "Skin dimpling, puckering, or tethering ('peau d'orange' resembling an orange peel)",
      "Nipple changes: Recent spontaneous nipple retraction, inversion, or scaling/eczematous ulceration (Paget's disease)",
      "Spontaneous clear, serous, or bloody discharge from a single duct in one nipple",
      "Persistent localized breast pain (though most breast cancers are initially painless)"
    ],
    warningSigns: [
      "Inflammatory Breast Cancer: Rapidly progressive breast redness, swelling, warmth, and purple erythema mimicking mastitis (highly aggressive)",
      "Fixed, matted, hard lymph nodes in the supraclavicular fossa or axilla",
      "Bone pain, jaundice, shortness of breath, or neurological symptoms indicating distant metastases"
    ],
    riskFactors: [
      "Female sex (women account for 99% of cases; men account for 1%)",
      "Advancing age (most cases diagnosed after age 50)",
      "Family history of breast or ovarian cancer in close relatives",
      "Dense breast tissue on mammography (masks tumors and independently increases risk)",
      "Postmenopausal obesity, sedentary lifestyle, and regular alcohol consumption"
    ],
    bodyImpact: "Invasive ductal carcinoma breaches the basement membrane, invades lymphatic channels to sentinel axillary lymph nodes, and metastasizes hematogenously to bones (lytic/blastic lesions), lungs, liver, and brain.",
    diagnosis: [
      "Screening and Diagnostic Digital Mammography (detects microcalcifications and architectural distortion years before palpable)",
      "Breast Ultrasound (distinguishes solid tumors from benign fluid cysts)",
      "Contrast-Enhanced Breast MRI (for high-risk BRCA carriers and dense breasts)",
      "Core Needle Biopsy (CNB) under ultrasound or stereotactic guidance (gold standard for histopathology)",
      "Immunohistochemistry (IHC) testing for Estrogen Receptor (ER), Progesterone Receptor (PR), HER2/neu, and Ki-67 proliferation index",
      "Next-Generation Genomic Assays (Oncotype DX, MammaPrint) to guide chemotherapy decisions"
    ],
    treatments: [
      "Breast-Conserving Surgery (Lumpectomy) followed by whole-breast radiotherapy, or Total Mastectomy with reconstruction",
      "Sentinel Lymph Node Biopsy (SLNB) to assess axillary spread without full dissection",
      "Endocrine / Hormone Therapy for ER+ tumors: Selective Estrogen Receptor Modulators (Tamoxifen) or Aromatase Inhibitors (Anastrozole, Letrozole)",
      "HER2-Targeted Monoclonal Antibodies: Trastuzumab (Herceptin) and Pertuzumab",
      "Cytotoxic Neoadjuvant / Adjuvant Chemotherapy (Anthracyclines, Taxanes)",
      "PARP Inhibitors (Olaparib) for BRCA-mutated breast cancer; Immunotherapy (Pembrolizumab) for Triple-Negative disease"
    ],
    prevention: "Regular screening mammograms starting between ages 40 and 50 reduce breast cancer mortality by over 25%. Maintain a healthy body weight post-menopause, engage in 150-300 minutes of weekly exercise, limit alcohol strictly, and consider prophylactic salpingo-oophorectomy / mastectomy for confirmed high-risk BRCA1/2 carriers.",
    safeFoods: [
      "Cruciferous vegetables rich in diindolylmethane (DIM) and sulforaphane (broccoli, cauliflower, Brussels sprouts)",
      "High-fiber legumes, beans, and lentils (promote safe metabolic clearance of circulating estrogens)",
      "Colorful fruits and berries loaded with polyphenolic flavonoids",
      "Whole soy foods (edamame, tofu, tempeh) — contrary to old myths, dietary soy isoflavones are protective against breast cancer recurrence!",
      "Extra virgin olive oil and green tea"
    ],
    avoidFoods: [
      "Alcohol consumption (even 1 drink daily measurably increases breast cancer risk by raising blood estrogen levels)",
      "Charred, grilled meats containing heterocyclic amines (HCAs)",
      "Ultra-processed packaged foods high in trans fats and industrial refined sugars",
      "Excessive high-fat red meats and processed sausages"
    ],
    exercises: [
      "Regular aerobic exercise (brisk walking, swimming, cycling 45 minutes 4-5 times a week lowers risk of occurrence and recurrence by 20-30%)",
      "Resistance training to preserve muscle mass and counteract bone loss from aromatase inhibitors",
      "Post-operative arm mobility stretching to prevent lymphedema and shoulder frozen joint"
    ],
    lifestyle: [
      "Perform monthly breast self-awareness checks (know how your breasts normally look and feel)",
      "Schedule annual or biennial screening mammograms beginning at age 40-50",
      "Maintain a body mass index (BMI) between 18.5 and 24.9 after menopause",
      "Breastfeed infants if possible (lactation for 12+ months significantly lowers lifetime breast cancer risk)"
    ],
    whenToConsult: "Consult a breast surgeon or physician immediately if you feel a new breast or armpit lump, see skin dimpling, or notice spontaneous bloody nipple discharge. Over 80% of breast lumps are benign, but prompt evaluation is essential.",
    faqs: [
      {
        q: "Does eating soy increase the risk of breast cancer?",
        a: "NO! This is an outdated myth. Large epidemiological studies (including the Shanghai Breast Cancer Survival Study) proved that consuming whole soy foods (tofu, edamame) does NOT increase breast cancer risk, and actually lowers the risk of cancer recurrence and mortality."
      },
      {
        q: "Can men get breast cancer?",
        a: "Yes. Men have breast tissue and can develop breast cancer, accounting for roughly 1% of all cases. Men who carry BRCA2 mutations, have liver cirrhosis (hyperestrogenism), or have Klinefelter syndrome are at higher risk."
      }
    ],
    references: [
      "National Comprehensive Cancer Network (NCCN) Clinical Practice Guidelines in Oncology: Breast Cancer 2024",
      "American Cancer Society (ACS) Breast Cancer Screening Guidelines",
      "World Health Organization (WHO) Global Breast Cancer Initiative"
    ]
  },
  {
    id: "prostate-cancer",
    name: "Prostate Cancer (Prostatic Adenocarcinoma)",
    name_ml: "പ്രോസ്റ്റേറ്റ് കാൻസർ",
    name_hi: "प्रोस्टेट कैंसर (पौरुष ग्रंथि का कैंसर)",
    name_ar: "سرطان البروستاتا",
    category: "cancer",
    badge: "Common Male Malignancy",
    icon: "shield",
    shortDesc: "Malignant transformation of glandular epithelial cells in the prostate gland of men, often slow-growing but capable of aggressive bone metastasis.",
    whatIsIt: "Prostate cancer develops in the prostate—a walnut-sized exocrine gland situated below the bladder in front of the rectum that produces seminal fluid. It is the second most common cancer diagnosed in men worldwide. While many prostate tumors are slow-growing (indolent) and remain confined to the gland for years, others are aggressive high-grade cancers that rapidly metastasize to pelvic lymph nodes and the skeletal system.",
    causes: [
      "Accumulation of somatic genetic alterations in prostatic glandular epithelium (TMPRSS2-ERG gene fusions, PTEN deletion)",
      "High circulating androgen (testosterone and dihydrotestosterone - DHT) signaling driving cellular proliferation",
      "Inherited germline mutations: BRCA2 (associated with aggressive early-onset disease), HOXB13, ATM, CHEK2",
      "Chronic prostatic inflammation and oxidative cellular injury"
    ],
    symptoms: [
      "Early localized prostate cancer is almost entirely asymptomatic",
      "Urinary hesitancy, weak or interrupted urinary stream",
      "Increased frequency of urination, particularly nocturia (waking up multiple times at night to urinate)",
      "Urgent need to urinate and feeling of incomplete bladder emptying",
      "Dysuria (burning sensation during urination) or painful ejaculation",
      "Hematuria (blood in urine) or Hematospermia (blood in semen)",
      "Erectile dysfunction"
    ],
    warningSigns: [
      "Metastatic Bone Disease: Severe, persistent, deep aching pain in the spine, hips, ribs, or pelvis",
      "Spinal Cord Compression: Sudden leg weakness, numbness in legs, or acute urinary retention (Surgical Emergency)",
      "Pathological fractures from osteoblastic bone metastases"
    ],
    riskFactors: [
      "Advancing age (rare before 40, but > 60% of cases occur in men aged 65 and older)",
      "Race/Ethnicity: Significantly higher incidence and mortality in Black men of African descent",
      "Family history: Having a father or brother with prostate cancer doubles personal risk",
      "Diet high in saturated animal fats and low in fresh fruits and vegetables",
      "Inherited BRCA1/BRCA2 genetic mutations"
    ],
    bodyImpact: "Aggressive adenocarcinomas breach the prostatic capsule, invade seminal vesicles, obstruct bladder neck outflow, invade periprostatic nerve plexuses, and spread through Batson's venous plexus to the lumbar spine, pelvis, and femur, producing dense osteoblastic sclerotic lesions.",
    diagnosis: [
      "Prostate-Specific Antigen (PSA) blood test: Serum total PSA, Free PSA percentage, and PSA Velocity",
      "Digital Rectal Examination (DRE) assessing for asymmetrical firmness, induration, or nodules",
      "Multiparametric MRI (mpMRI) of the prostate using PI-RADS v2.1 scoring (Prostate Imaging-Reporting and Data System)",
      "MRI-Ultrasound Fusion Targeted Transperineal / Transrectal Core Needle Biopsy",
      "Gleason Score and ISUP Grade Groups (Grade Group 1 to 5) determined by biopsy histopathology",
      "PSMA-PET Scan (Prostate-Specific Membrane Antigen PET/CT) for precise whole-body staging"
    ],
    treatments: [
      "Active Surveillance: Close, structured monitoring (serial PSA, repeat mpMRI, biopsies) for low-risk, indolent tumors (avoids side effects of treatment)",
      "Radical Prostatectomy: Robotic-Assisted Laparoscopic Prostatectomy (RALP) with nerve-sparing technique",
      "Radiation Therapy: External Beam Radiation Therapy (EBRT) or Brachytherapy (radioactive seed implants)",
      "Androgen Deprivation Therapy (ADT): GnRH agonists/antagonists (Leuprolide, Degarelix, Relugolix) to starve tumors of testosterone",
      "Novel Androgen Receptor Pathway Inhibitors (ARPIs: Enzalutamide, Apalutamide, Darolutamide, Abiraterone)",
      "Pluvicto (Lutetium-177 PSMA radioligand therapy) for metastatic castration-resistant prostate cancer (mCRPC)"
    ],
    prevention: "Adopt a plant-forward Mediterranean diet, consume foods rich in lycopene (cooked tomatoes), engage in regular aerobic and strength exercise, maintain a healthy waistline, and discuss the benefits and risks of PSA screening with your physician starting at age 45-50 (or age 40 for Black men or those with family history).",
    safeFoods: [
      "Cooked tomatoes, tomato paste, and tomato sauce (rich in lycopene, a potent antioxidant carotenoid that accumulates in prostate tissue)",
      "Cruciferous vegetables (broccoli, cauliflower, kale) containing sulforaphane",
      "Green tea (rich in epigallocatechin gallate - EGCG)",
      "Cold-water fatty fish providing Omega-3 fatty acids",
      "Legumes, lentils, and flaxseeds (rich in phytoestrogenic lignans)"
    ],
    avoidFoods: [
      "High intake of dairy products and excessive dietary calcium (> 1,500 mg/day associated with higher advanced prostate cancer risk)",
      "Processed deli meats, bacon, and sausages containing carcinogenic nitrosamines",
      "Charred and well-done grilled meats",
      "Excessive saturated fats and fast foods"
    ],
    exercises: [
      "Vigorous aerobic exercise: Brisk walking, jogging, cycling 30-45 minutes 4-5 times a week (slows progression in active surveillance)",
      "Progressive resistance training (crucial to counteract muscle loss, fatigue, and osteopenia caused by hormone deprivation therapy)",
      "Pelvic floor muscle exercises (Kegels) before and after surgery to accelerate urinary continence recovery"
    ],
    lifestyle: [
      "Engage in shared decision-making regarding PSA screening starting at age 50 (or age 40-45 if high-risk)",
      "Quit smoking completely (smoking significantly increases the risk of aggressive and fatal prostate cancer)",
      "Maintain a healthy body weight and avoid visceral belly fat",
      "Practice daily pelvic floor exercises to support urinary and sexual health"
    ],
    whenToConsult: "Consult a urologist if you experience trouble urinating, notice blood in your urine or semen, or have persistent unexplained deep back or hip pain.",
    faqs: [
      {
        q: "Does a high PSA level always mean I have prostate cancer?",
        a: "No! An elevated PSA (e.g., > 4.0 ng/mL) can be caused by benign conditions like Benign Prostatic Hyperplasia (enlarged prostate), Prostatitis (infection/inflammation), recent ejaculation, or vigorous cycling. An mpMRI scan and biopsy are needed to confirm cancer."
      },
      {
        q: "What does 'Active Surveillance' mean, and is it safe to not treat cancer immediately?",
        a: "Active surveillance is safe and standard for low-risk, slow-growing prostate cancers. Instead of rushing to surgery (which carries risks of impotence and incontinence), doctors monitor the cancer closely with PSA tests, MRIs, and biopsies, treating only if the cancer shows signs of growth."
      }
    ],
    references: [
      "AUA/ASTRO/SUO Guideline: Diagnosis and Management of Non-Metastatic Prostate Cancer",
      "European Association of Urology (EAU) Guidelines on Prostate Cancer 2024",
      "U.S. Preventive Services Task Force (USPSTF) Prostate Cancer Screening Recommendation"
    ]
  },
  {
    id: "colorectal-cancer",
    name: "Colorectal Cancer (Colon & Rectal Cancer)",
    name_ml: "വൻകുടൽ കാൻസർ (കൊളോറെക്ടൽ കാൻസർ)",
    name_hi: "कोलोरेक्टल कैंसर (बड़ी आंत और मलाशय का कैंसर)",
    name_ar: "سرطان القولون والمستقيم",
    category: "cancer",
    badge: "Screenable Malignancy",
    icon: "disc",
    shortDesc: "Malignant neoplastic disease developing from the inner epithelial lining of the large intestine (colon) or rectum, typically arising from pre-cancerous adenomatous polyps.",
    whatIsIt: "Colorectal cancer (CRC) starts in the colon or the rectum. Almost all colorectal cancers begin as small, non-cancerous clumps of cells called adenomatous polyps on the inner glandular lining (mucosa) of the large intestine. Over a period of 5 to 15 years, some of these polyps acquire cumulative genetic mutations and transform into invasive adenocarcinomas.",
    causes: [
      "Adenoma-to-Carcinoma sequence: Sequential mutations in APC (adenomatous polyposis coli), KRAS, and TP53 tumor suppressor genes",
      "Microsatellite Instability (MSI-H) and Mismatch Repair Deficiency (dMMR)",
      "Inherited hereditary syndromes: Lynch Syndrome (HNPCC) and Familial Adenomatous Polyposis (FAP)",
      "Long-standing Inflammatory Bowel Disease (Ulcerative Colitis, Crohn's colitis)",
      "Westernized diet high in processed/red meats and low in dietary fiber"
    ],
    symptoms: [
      "Often entirely silent in early, curable stages (which is why routine screening is essential)",
      "A persistent change in bowel habits: Diarrhea, constipation, or narrowing of stool caliber ('pencil-thin stools') lasting weeks",
      "Rectal bleeding with bright red blood, or dark/black tarry stools (melena)",
      "Persistent abdominal discomfort, cramping, fullness, or painful gas",
      "Feeling that the bowel does not empty completely after a bowel movement (Tenesmus)",
      "Unexplained iron deficiency anemia resulting in chronic fatigue and paleness",
      "Unintended significant weight loss"
    ],
    warningSigns: [
      "Acute bowel obstruction: Severe obstipation, abdominal distension, intractable vomiting, and obstipation",
      "Large-volume lower gastrointestinal bleeding causing hemodynamic shock",
      "Bowel perforation causing generalized peritonitis"
    ],
    riskFactors: [
      "Age: Rising steeply after age 45-50 (though alarming increases are occurring in young adults aged 20-49)",
      "Personal or family history of colorectal polyps or colorectal cancer",
      "High consumption of red meat (beef, pork) and processed charcuterie (bacon, sausages, hot dogs)",
      "Physical inactivity, abdominal obesity, and Type 2 diabetes",
      "Heavy alcohol consumption and cigarette smoking"
    ],
    bodyImpact: "Malignant cells penetrate the muscularis mucosae into the submucosa, invade mesenteric lymphatic channels, obstruct the bowel lumen, and spread via the portal venous circulation directly to the liver (the most common distant metastatic site), as well as to lungs and peritoneum.",
    diagnosis: [
      "Screening Colonoscopy (gold standard: allows direct visualization AND simultaneous endoscopic removal/polypectomy of pre-cancerous polyps)",
      "Fecal Immunochemical Test (FIT): Annual stool test detecting microscopic occult human hemoglobin",
      "Stool DNA-FIT Test (Cologuard: detects hemoglobin plus methylated DNA biomarkers)",
      "Contrast-Enhanced CT of Chest, Abdomen, and Pelvis for clinical staging",
      "High-Resolution Pelvic MRI for rectal cancer local staging (depth of invasion and mesorectal fascia margin)",
      "Molecular profiling: Testing for MMR/MSI status, KRAS, NRAS, BRAF V600E mutations, and HER2 amplification"
    ],
    treatments: [
      "Endoscopic Polypectomy or Endoscopic Mucosal Resection (EMR) for early mucosal polyps",
      "Surgical Resection: Partial Colectomy (Hemicolectomy / Sigmoidectomy) with high regional lymph node dissection",
      "For Rectal Cancer: Total Mesorectal Excision (TME) preceded by neoadjuvant chemoradiation (Total Neoadjuvant Therapy - TNT)",
      "Adjuvant Chemotherapy: FOLFOX (Oxaliplatin + 5-Fluorouracil + Leucovorin) or CAPOX",
      "Targeted Biological Therapies: Anti-VEGF (Bevacizumab) or Anti-EGFR (Cetuximab/Panitumumab for KRAS-wild-type tumors)",
      "Immune Checkpoint Inhibitors (Pembrolizumab, Dostarlimab): Astonishing ~100% complete clinical response rates in dMMR/MSI-High colorectal cancers!"
    ],
    prevention: "Screening colonoscopy starting at age 45 is the ultimate preventive tool because it detects and REMOVES precancerous polyps before they ever have the chance to become cancer. Eat at least 30-35 grams of fiber daily, limit red meat, eliminate processed meats, maintain active physical fitness, and avoid tobacco.",
    safeFoods: [
      "High-fiber whole foods: Oats, barley, beans, lentils, chickpeas, brown rice (fermented into protective butyrate by gut bacteria)",
      "Cruciferous vegetables (broccoli, Brussels sprouts, kale)",
      "Calcium and Vitamin D rich foods (dairy, fortified plant milks) — calcium binds toxic bile acids in the colon",
      "Fresh berries, apples, pears, and garlic",
      "Adequate clean water to maintain smooth daily bowel movements"
    ],
    avoidFoods: [
      "Processed cured meats: Bacon, hot dogs, sausages, ham, salami (classified by WHO as Group 1 known human carcinogens)",
      "Excessive red meat (beef, pork, lamb — limit to less than 350-500 grams cooked per week)",
      "Alcohol in all forms (alcohol metabolizes to carcinogenic acetaldehyde in the gut)",
      "Charred, flame-broiled meats containing polycyclic aromatic hydrocarbons (PAHs)",
      "Refined white flour products and sugary sodas that promote gut dysbiosis"
    ],
    exercises: [
      "Regular vigorous or moderate aerobic exercise (brisk walking, jogging, cycling 30-40 minutes daily lowers colon cancer risk by up to 25-30%)",
      "Resistance and strength training to maintain metabolic insulin sensitivity",
      "Avoid prolonged unbroken sitting (sedentary desk posture slows colonic transit time)"
    ],
    lifestyle: [
      "GET SCREENED AT AGE 45: Follow updated national guidelines to begin routine colon cancer screening at age 45 (or 40 if you have family history)",
      "Never ignore rectal bleeding by assuming it is 'just hemorrhoids' without an exam",
      "Maintain a healthy waistline and avoid visceral belly fat",
      "Quit smoking completely (smoking increases both polyp formation and cancer recurrence)"
    ],
    whenToConsult: "Consult a gastroenterologist or doctor immediately if you notice blood in your stool, experience a change in bowel habits lasting more than 2-3 weeks, or develop unexplained fatigue and iron deficiency anemia.",
    faqs: [
      {
        q: "Why did the screening age for colon cancer drop from 50 to 45?",
        a: "Major medical organizations (ACS, USPSTF) lowered the recommended screening age to 45 because colorectal cancer rates have been rising sharply in younger adults, while screening at 45 catches and removes pre-cancerous polyps before cancer develops."
      },
      {
        q: "What makes colonoscopy different from other cancer tests?",
        a: "Most cancer screening tests (like mammograms or PSA tests) only detect cancer after it has already formed. A colonoscopy actually PREVENTS cancer from ever developing, because the doctor identifies and snips off precancerous polyps during the procedure."
      }
    ],
    references: [
      "U.S. Preventive Services Task Force (USPSTF) Colorectal Cancer Screening Recommendations",
      "National Comprehensive Cancer Network (NCCN) Guidelines in Oncology: Colon Cancer 2024",
      "American Cancer Society Colorectal Cancer Statistics and Guidelines"
    ]
  },
  {
    id: "cervical-cancer",
    name: "Cervical Cancer (Cervical Carcinoma)",
    name_ml: "സെർവിക്കൽ കാൻസർ (ഗർഭാശയമുഖ അർബുദം)",
    name_hi: "ग्रीवा कैंसर (सर्वाइकल कैंसर)",
    name_ar: "سرطان عنق الرحم",
    category: "cancer",
    badge: "Preventable Malignancy",
    icon: "shield-alert",
    shortDesc: "Malignant neoplasm of the uterine cervix almost universally caused by persistent infection with high-risk Human Papillomavirus (HPV).",
    whatIsIt: "Cervical cancer develops in the cervix (the lower part of the uterus that connects to the vagina). It is unique among cancers because virtually all cases (> 99%) are directly caused by long-standing, persistent infection with high-risk oncogenic types of the Human Papillomavirus (HPV). It is one of the most preventable and curable forms of cancer when identified early through vaccination and screening.",
    causes: [
      "Persistent cervical infection with High-Risk oncogenic HPV types (predominantly HPV-16 and HPV-18, responsible for ~70% of cases worldwide)",
      "Viral integration: High-risk HPV oncoproteins E6 and E7 inactivate host tumor suppressor proteins p53 and pRb (retinoblastoma), disabling cell cycle arrest and apoptosis",
      "Cigarette smoking (tobacco byproducts concentrate in cervical mucus, paralyzing local Langerhans immune cells)",
      "Immunosuppression (HIV infection dramatically increases cervical cancer progression risk by 6-fold)"
    ],
    symptoms: [
      "Early pre-cancerous changes and early-stage cervical cancer are completely symptomless",
      "Post-coital bleeding (abnormal vaginal bleeding occurring immediately after sexual intercourse)",
      "Abnormal intermenstrual bleeding (spotting between regular menstrual periods)",
      "Postmenopausal bleeding (any vaginal bleeding occurring after menopause is an abnormal alarm sign)",
      "Abnormal foul-smelling, watery, or blood-tinged vaginal discharge",
      "Pelvic pain or pain during sexual intercourse (dyspareunia)"
    ],
    warningSigns: [
      "Severe unremitting pelvic, lower back, or flank pain (indicating tumor invasion into sciatic nerve roots or pelvic sidewall)",
      "Unilateral leg swelling / lymphedema due to pelvic lymph node obstruction",
      "Hydronephrosis and renal failure caused by tumor compressing the ureters",
      "Rectovaginal or vesicovaginal fistulas in advanced disease"
    ],
    riskFactors: [
      "Persistent high-risk HPV infection without clearance",
      "Lack of regular Pap smear or HPV DNA screening",
      "Active tobacco smoking",
      "HIV/AIDS infection or other chronic immunosuppressive therapy",
      "Early age at first sexual intercourse and multiple sexual partners",
      "Long-term use of combined oral contraceptives (> 5 years without screening)"
    ],
    bodyImpact: "Cervical Intraepithelial Neoplasia (CIN 1, CIN 2, CIN 3) breaches the basement membrane into invasive squamous cell carcinoma (~80%) or adenocarcinoma (~20%). It invades paracervical tissues, parametrium, vagina, bladder, rectum, and regional pelvic/para-aortic lymph nodes.",
    diagnosis: [
      "High-Risk HPV DNA Testing (molecular screening detecting oncogenic HPV genotypes 16, 18, and 12 other high-risk types)",
      "Cervical Cytology (Pap Smear / Liquid-Based Cytology - LBC) detecting dysplastic cellular changes (LSIL, HSIL, ASCUS)",
      "Colposcopy with directed cervical biopsies and Endocervical Curettage (ECC)",
      "Loop Electrosurgical Excision Procedure (LEEP) or Cold Knife Conization for definitive histopathology",
      "Pelvic MRI and PET-CT for clinical staging according to FIGO criteria"
    ],
    treatments: [
      "Cervical Pre-cancer (CIN 2/3): Outpatient excisional ablation (LEEP or Cold Knife Cone Biopsy)",
      "Early Invasive Stage (FIGO I): Radical Hysterectomy with pelvic lymphadenectomy, or Fertility-Sparing Radical Trachelectomy",
      "Locally Advanced Stages (FIGO IB3 to IVA): Definitive Concurrent Chemoradiotherapy (CCRT: Cisplatin given weekly alongside External Beam Radiation followed by Intracavitary Brachytherapy)",
      "Metastatic Disease: Platinum-based chemotherapy plus Anti-VEGF (Bevacizumab) and Immunotherapy (Pembrolizumab)"
    ],
    prevention: "Cervical cancer is almost ENTIRELY ELIMINABLE as a public health problem through the WHO 90-70-90 Global Strategy: (1) 90% of girls fully vaccinated with HPV vaccine by age 15; (2) 70% of women screened with a high-performance HPV test at ages 35 and 45; and (3) 90% of women with pre-cancer/cancer treated. Practice safe sexual practices and stop smoking.",
    safeFoods: [
      "Antioxidant-rich colorful vegetables and fruits (papayas, oranges, bell peppers)",
      "Folate-rich dark leafy greens (spinach, kale, asparagus) — adequate folate supports genomic DNA methylation",
      "Cruciferous vegetables containing indole-3-carbinol",
      "Green tea rich in polyphenols",
      "Wholesome Mediterranean dietary pattern"
    ],
    avoidFoods: [
      "Tobacco smoking (the most important chemical cofactor — tobacco carcinogens directly damage cervical cell DNA)",
      "Excessive alcohol consumption",
      "Ultra-processed packaged foods high in trans fats and sodium",
      "Unhealthy crash starvation diets that deplete immune resistance"
    ],
    exercises: [
      "Regular moderate physical activity (brisk walking, swimming, light cycling 30 minutes 5 days a week) optimizes immune surveillance against viral infections",
      "Pelvic floor physical therapy to regain pelvic muscle tone after cervical surgery or radiation",
      "Gentle stretching and restorative yoga"
    ],
    lifestyle: [
      "VACCINATE: Administer the 9-valent HPV vaccine (Gardasil-9) to all boys and girls aged 9 to 14 (recommended up to age 26, and approved up to age 45)",
      "GET SCREENED: Undergo HPV DNA testing every 5 years (or Pap smear every 3 years) starting at age 21-25",
      "Completely quit smoking to enable your immune system to clear latent HPV infections",
      "Never ignore post-coital or postmenopausal bleeding"
    ],
    whenToConsult: "Consult a gynecologist immediately if you experience bleeding after sex, bleeding between periods, any bleeding after menopause, or unusual persistent vaginal discharge.",
    faqs: [
      {
        q: "Can the HPV vaccine really eliminate cervical cancer?",
        a: "YES! National health data from countries with high vaccination rates (such as Australia and the UK) show that vaccinating young girls and boys before sexual debut has reduced cervical cancer and pre-cancer rates by nearly 90%."
      },
      {
        q: "If I already had the HPV vaccine, do I still need Pap smears or HPV tests?",
        a: "Yes. While the 9-valent vaccine protects against the types responsible for ~90% of cervical cancers, it does not cover every single rare high-risk strain. Routine screening remains essential to catch any rare anomalies early."
      }
    ],
    references: [
      "World Health Organization (WHO) Global Strategy to Accelerate the Elimination of Cervical Cancer",
      "American College of Obstetricians and Gynecologists (ACOG) Cervical Cancer Screening Guidelines",
      "Society of Gynecologic Oncology (SGO) Practice Guidelines"
    ]
  },
  {
    id: "skin-cancer",
    name: "Skin Cancer & Melanoma",
    name_ml: "ത്വക്ക് കാൻസർ & മെലനോമ",
    name_hi: "त्वचा का कैंसर और मेलेनोमा",
    name_ar: "سرطان الجلد والميلانوما",
    category: "cancer",
    badge: "Cutaneous Malignancy",
    icon: "sun",
    shortDesc: "Malignant transformation of skin cells, categorized into Non-Melanoma Skin Cancer (Basal and Squamous) and highly invasive Cutaneous Melanoma.",
    whatIsIt: "Skin cancer is the abnormal, uncontrolled growth of cutaneous cells, almost universally triggered by ultraviolet (UV) radiation from sunlight or tanning beds. The primary types are Basal Cell Carcinoma (BCC: most common, locally invasive, pearly papule), Squamous Cell Carcinoma (SCC: crusted/scaly red nodule), and Malignant Melanoma (the deadliest form, originating from pigment-producing melanocytes).",
    causes: [
      "Ultraviolet radiation (UVB causing direct DNA pyrimidine dimers; UVA generating reactive oxygen species)",
      "History of severe, blistering sunburns, particularly during childhood and adolescence",
      "Use of indoor artificial UV tanning beds (dramatically spikes melanoma risk)",
      "Somatic driver mutations: BRAF V600E (in ~50% of melanomas), NRAS, KIT, and CDKN2A germline mutations"
    ],
    symptoms: [
      "The ABCDE Rule for Melanoma Detection:",
      "A - ASYMMETRY: One half of the mole or spot does not match the other half",
      "B - BORDER: Irregular, scalloped, notched, or blurred borders",
      "C - COLOR: Uneven color with varying shades of brown, black, tan, red, white, or blue",
      "D - DIAMETER: Larger than 6 millimeters (about the size of a pencil eraser), though melanomas can be smaller",
      "E - EVOLVING: The most critical sign — any mole or skin spot that is changing in size, shape, color, or elevation, or that begins to bleed, itch, or crust",
      "The 'Ugly Duckling' Sign: A mole that looks distinctly different from all other moles on the patient's body",
      "Non-Melanoma signs: A pearly, translucent bump with telangiectasias (BCC), or a persistent, non-healing, scaly red sore that bleeds easily (SCC)"
    ],
    warningSigns: [
      "Rapidly enlarging pigmented nodule with ulceration and spontaneous bleeding",
      "Nodular Melanoma: Aggressive vertical growth without a preceding flat radial phase",
      "Firm, enlarged regional lymph nodes in the groin, axilla, or neck",
      "Subungual Melanoma: A dark vertical brown/black streak under a fingernail or toenail (Hutchinson's sign)"
    ],
    riskFactors: [
      "Fair skin, light-colored eyes (blue/green), blond or red hair, and high tendency to burn/freckle",
      "Presence of more than 50 common moles or presence of atypical / dysplastic nevi",
      "Personal or family history of melanoma or other skin cancers",
      "Organ transplant recipients on chronic immunosuppression (65-fold increased risk of SCC)",
      "Excessive lifetime cumulative sun exposure and outdoor occupations without UV protection"
    ],
    bodyImpact: "While BCC rarely metastasizes, neglected tumors cause extensive local tissue destruction ('rodent ulcer'). Melanoma invades vertically through the dermo-epidermal junction (Breslow thickness), spreads into cutaneous lymphatic channels (satellite and in-transit metastases), and disseminates hematogenously to lungs, liver, brain, and bones.",
    diagnosis: [
      "Full-Body Dermatological Examination using handheld Polarized Dermoscopy",
      "Excisional Biopsy with 1-3 mm margins (gold standard: complete removal allows accurate Breslow thickness measurement; superficial shave biopsy is discouraged for suspected melanoma)",
      "Histopathology: Breslow depth of invasion (measured in millimeters — the single strongest prognostic indicator), ulceration, and mitotic rate",
      "Sentinel Lymph Node Biopsy (SLNB) for melanomas >= 0.8 mm thick or thinner with ulceration",
      "Molecular testing: BRAF V600E/K mutation testing"
    ],
    treatments: [
      "Wide Local Excision with standardized surgical margins (0.5 cm for in-situ, 1 cm for <= 1mm, 2 cm for > 2mm)",
      "Mohs Micrographic Surgery (exceptional tissue-sparing precision cure for BCC and SCC on face/ears)",
      "Adjuvant and Metastatic Immunotherapy: Dual Immune Checkpoint Blockade (Nivolumab + Ipilimumab or Pembrolizumab)",
      "Targeted Therapy: BRAF inhibitors (Dabrafenib, Encorafenib) combined with MEK inhibitors (Trametinib, Binimetinib) for BRAF-mutant melanoma",
      "Topical therapies for superficial skin cancers: Imiquimod cream, 5-Fluorouracil, or Photodynamic Therapy (PDT)"
    ],
    prevention: "Practice rigorous sun safety: Apply broad-spectrum, water-resistant SPF 30+ sunscreen every 2 hours, seek shade between 10 AM and 4 PM, wear UV-protective clothing (UPF 50+), wide-brimmed hats, and UV400 sunglasses. NEVER use indoor tanning beds. Perform monthly head-to-toe skin self-examinations.",
    safeFoods: [
      "Antioxidant-rich colorful produce: Carrots, sweet potatoes, and tomatoes (lycopene and carotenoids provide mild internal photo-protection against UV erythema)",
      "Cold-water fish high in Omega-3 fatty acids to dampen cutaneous inflammatory responses",
      "Green tea (contains EGCG which helps neutralize UV-generated reactive oxygen species)",
      "Nicotinamide (Vitamin B3: 500 mg twice daily has been proven in Phase 3 clinical trials to reduce new non-melanoma skin cancers by 23%)",
      "Abundant water to support skin barrier hydration"
    ],
    avoidFoods: [
      "Relying on dietary supplements alone while skipping physical sunscreen and shade (no pill replaces sunscreen!)",
      "Alcohol consumption (alcohol intake has been correlated with increased melanoma risk due to acetaldehyde photosensitization)",
      "Ultra-processed packaged foods high in rancid trans fats and sugars"
    ],
    exercises: [
      "Outdoor exercise: Schedule running, tennis, or cycling in the early morning before 9 AM or late afternoon after 4 PM to avoid peak UV index hours",
      "Wear lightweight long-sleeved UPF 50+ athletic shirts and UV running hats",
      "Swimming in indoor pools or using water-resistant sports sunscreen reapplied every 40-80 minutes"
    ],
    lifestyle: [
      "Examine your skin from head to toe once a month in front of a full-length mirror with a handheld mirror for your back",
      "Look for any mole following the ABCDE rule or any new sore that fails to heal after 4 weeks",
      "Apply 1 ounce (a shot-glass full) of SPF 30+ broad-spectrum sunscreen 15 minutes before stepping outside",
      "Never allow children to get blistering sunburns"
    ],
    whenToConsult: "Consult a dermatologist immediately if you discover a mole that is changing in size, shape, or color, has irregular jagged borders, or if you have a persistent bleeding bump that won't heal.",
    faqs: [
      {
        q: "Can people with dark skin get skin cancer?",
        a: "YES. While higher melanin provides some natural protection against UV radiation, people with dark skin can and do get skin cancer. In fact, people of color are often diagnosed with Acral Lentiginous Melanoma—a dangerous melanoma that appears on sun-protected areas like the palms of the hands, soles of the feet, and under toenails."
      },
      {
        q: "Do tanning beds cause cancer as much as natural sunlight?",
        a: "Tanning beds are actually MORE dangerous than natural sunlight. Tanning lamps emit up to 10 to 15 times more intense UVA radiation than the midday sun. Using a tanning bed even once before age 35 increases your melanoma risk by 75%."
      }
    ],
    references: [
      "American Academy of Dermatology (AAD) Guidelines of Care for the Management of Primary Cutaneous Melanoma",
      "NCCN Clinical Practice Guidelines in Oncology: Cutaneous Melanoma 2024",
      "Skin Cancer Foundation Clinical Prevention Protocols"
    ]
  }
];

