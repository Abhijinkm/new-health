/**
 * HEALTHCARE FOR YOU - Category E: Mental Health Conditions
 */
module.exports = [
  {
    id: "depression",
    name: "Major Depressive Disorder (Depression)",
    name_ml: "വിഷാദരോഗം (ഡിപ്രഷൻ)",
    name_hi: "अवसाद / डिप्रेशन",
    name_ar: "اضطراب الاكتئاب الحاد",
    category: "mental_health",
    badge: "Mood Disorder",
    icon: "frown",
    shortDesc: "A common and serious medical illness that negatively affects feelings, cognition, energy, and daily functioning.",
    whatIsIt: "Major Depressive Disorder (MDD) is a severe psychiatric mood disorder characterized by persistent feelings of sadness, emotional emptiness, and anhedonia (loss of interest or pleasure in once enjoyable activities) lasting at least two consecutive weeks. It is not a sign of personal weakness, but a biological illness involving complex neural circuitry, neuroendocrine dysregulation, and neurochemical imbalances.",
    causes: [
      "Dysregulation of monoamine neurotransmitters (serotonin, norepinephrine, dopamine) and neuroplasticity pathways (BDNF)",
      "Chronic hyperactivity of the Hypothalamic-Pituitary-Adrenal (HPA) axis with elevated cortisol levels",
      "Genetic vulnerability with high heritability (~40%)",
      "Psychological trauma, adverse childhood experiences (ACEs), loss of a loved one, or severe life stressors",
      "Chronic systemic inflammation and medical illnesses (thyroid dysfunction, stroke, autoimmune conditions)"
    ],
    symptoms: [
      "Persistent depressed mood, feelings of despair, sadness, or tearfulness most of the day",
      "Marked anhedonia: Total loss of interest in hobbies, socializing, and sexual intimacy",
      "Significant unintended weight loss/gain or dramatic changes in appetite",
      "Insomnia (especially early morning awakening) or Hypersomnia (sleeping excessively)",
      "Psychomotor agitation (restless pacing) or psychomotor retardation (slowed speech and body movements)",
      "Daily fatigue, loss of energy, and feeling physically weighed down",
      "Feelings of worthlessness, excessive inappropriate guilt, and helplessness",
      "Impaired ability to think, concentrate, focus at work, or make basic everyday decisions"
    ],
    warningSigns: [
      "CRITICAL EMERGENCY: Recurrent suicidal ideation, suicide planning, or suicide attempts",
      "Giving away prized possessions, saying goodbye to friends, or expressing that 'everyone would be better off without me'",
      "Severe self-harm behaviors or psychotic depression (delusions, auditory hallucinations)",
      "Severe catatonia or total refusal of food and water"
    ],
    riskFactors: [
      "Personal or family history of major depression, bipolar disorder, or suicide",
      "History of major trauma, emotional, physical, or sexual abuse",
      "Concurrent chronic painful physical illnesses (cancer, arthritis, fibromyalgia)",
      "Substance abuse (alcohol, opioids, sedatives)",
      "Social isolation and lack of supportive personal relationships"
    ],
    bodyImpact: "Chronic depression causes structural remodeling in the brain, including hippocampal volume atrophy and prefrontal cortical thinning. Systemically, it causes autonomic dysregulation, elevated inflammatory cytokines (IL-6, TNF-alpha), doubles the risk of coronary heart disease, and accelerates cellular aging (telomere shortening).",
    diagnosis: [
      "DSM-5 Diagnostic Criteria: At least 5 of 9 symptoms present nearly every day for 2 weeks, with at least one symptom being depressed mood or loss of interest/pleasure",
      "Validated Screening Scales: Patient Health Questionnaire-9 (PHQ-9 score >= 10 indicates moderate-to-severe depression), Hamilton Depression Rating Scale (HAM-D)",
      "Laboratory testing: Thyroid Panel (TSH, free T4), Complete Blood Count, Vitamin B12, and Vitamin D to rule out organic medical causes",
      "Comprehensive psychiatric clinical interview and suicide risk assessment"
    ],
    treatments: [
      "Psychotherapy: Cognitive Behavioral Therapy (CBT), Interpersonal Psychotherapy (IPT), Acceptance and Commitment Therapy (ACT)",
      "Selective Serotonin Reuptake Inhibitors (SSRIs: Escitalopram, Sertraline, Fluoxetine)",
      "Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs: Venlafaxine, Duloxetine)",
      "Atypical Antidepressants: Bupropion (enhances dopamine/norepinephrine, zero sexual side effects), Mirtazapine (aids sleep and appetite)",
      "Novel Rapid-Acting Treatments: Intranasal Esketamine (Spravato) for Treatment-Resistant Depression",
      "Neuromodulation: Repetitive Transcranial Magnetic Stimulation (rTMS) and Electroconvulsive Therapy (ECT for severe refractory depression)"
    ],
    prevention: "While clinical depression cannot always be prevented, proactive resilience building helps: maintaining strong social support networks, daily physical exercise, consistent 7-8 hour sleep hygiene, mindfulness-based stress reduction, and seeking professional therapy early at the first signs of emotional decline.",
    safeFoods: [
      "Mediterranean dietary pattern rich in colorful fruits, vegetables, and legumes",
      "Fatty fish high in Omega-3 EPA/DHA (proven adjunctive mood-stabilizing effects)",
      "Fermented probiotic foods (yogurt, kefir, kimchi) to support the gut-brain axis",
      "Folate and magnesium-rich dark leafy greens (spinach, kale)",
      "Complex whole grains (oats, brown rice, quinoa) that promote steady serotonin synthesis"
    ],
    avoidFoods: [
      "Alcohol and recreational drugs (alcohol is a direct central nervous system depressant)",
      "High-sugar confectioneries and sodas (cause rapid glycemic crashes that exacerbate depressive fatigue)",
      "Ultra-processed packaged fast foods loaded with industrial trans fats",
      "Excessive caffeine that spikes anxiety and disrupts restorative sleep"
    ],
    exercises: [
      "Aerobic exercise: 30-45 minutes of brisk walking, jogging, or cycling 4-5 times a week (releases endorphins and elevates BDNF)",
      "Outdoor walks in green nature and morning sunlight (resets circadian rhythm and boosts mood)",
      "Resistance training 2-3 times weekly to enhance physical self-efficacy and vigor",
      "Mindful yoga combining body movement with deep diaphragmatic breathing"
    ],
    lifestyle: [
      "Never suffer in silence — confide in a trusted physician, family member, or mental health professional",
      "Get 20-30 minutes of natural morning sunlight immediately upon waking",
      "Establish a structured daily routine with manageable small goals",
      "Stay connected socially, even when the urge is to isolate completely"
    ],
    whenToConsult: "IF YOU OR SOMEONE YOU KNOW HAS THOUGHTS OF SELF-HARM OR SUICIDE, CALL OR TEXT 988 (USA/Canada), CALL 112 (Europe/India), OR GO TO THE NEAREST EMERGENCY ROOM IMMEDIATELY. HELP IS AVAILABLE 24/7.",
    faqs: [
      {
        q: "Are antidepressant medications addictive?",
        a: "No. Antidepressants do not produce cravings, euphoria, or chemical addiction. However, they should not be stopped abruptly to avoid discontinuation syndrome, and should always be tapered under a doctor's guidance."
      },
      {
        q: "How long does it take for antidepressants to start working?",
        a: "Most patients begin noticing improvements in sleep and energy within 1 to 2 weeks, while full therapeutic improvement in mood, thinking, and emotional outlook typically takes 4 to 6 weeks of consistent use."
      }
    ],
    references: [
      "American Psychiatric Association (APA) Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
      "National Institute of Mental Health (NIMH) Depression Comprehensive Bulletin",
      "World Health Organization (WHO) Depressive Disorder Factsheet 2024"
    ]
  },
  {
    id: "anxiety",
    name: "Generalized Anxiety Disorder (GAD)",
    name_ml: "ഉത്കണ്ഠാ രോഗം (ആങ്സൈറ്റി)",
    name_hi: "सामान्यीकृत चिंता विकार (एंग्जायटी)",
    name_ar: "اضطراب القلق العام",
    category: "mental_health",
    badge: "Anxiety Spectrum",
    icon: "alert-circle",
    shortDesc: "Excessive, persistent, and uncontrollable worry about a variety of everyday life circumstances, accompanied by physical tension.",
    whatIsIt: "Generalized Anxiety Disorder (GAD) is characterized by excessive, persistent, and unrealistic worry and apprehension about everyday activities, health, finances, work, or family, occurring on more days than not for at least 6 months. Unlike normal worry, GAD is difficult to control, disproportionate to the actual likelihood or impact of events, and interferes significantly with daily living.",
    causes: [
      "Hyperactivity in neural fear circuitry: Hyper-responsive amygdala and impaired top-down inhibition from prefrontal cortex",
      "Dysregulation of inhibitory GABAergic, serotonergic, and noradrenergic neurotransmission",
      "Genetic predisposition and family history of anxiety or mood disorders",
      "Adverse childhood experiences, chronic environmental stress, and personality traits like neuroticism",
      "Underlying medical triggers: Hyperthyroidism, cardiac arrhythmias, or excessive stimulant use"
    ],
    symptoms: [
      "Persistent, uncontrollable worry and catastrophic thinking ('what-if' loops)",
      "Restlessness, feeling keyed up, on edge, or inability to sit still",
      "Muscle tension: Chronic aching in neck, shoulders, and jaw (bruxism/teeth grinding)",
      "Easily fatigued and irritable",
      "Difficulty concentrating or mind going blank during tasks",
      "Sleep disturbances: Difficulty falling asleep due to racing thoughts, restless unrefreshing sleep",
      "Autonomic arousal: Rapid heart rate, palpitations, sweating, tremors, shortness of breath, and gastrointestinal distress ('butterflies in stomach')"
    ],
    warningSigns: [
      "Panic Attacks: Sudden surges of overwhelming terror, chest tightness, dizziness, and feeling of impending doom",
      "Severe functional paralysis (inability to leave home, go to work, or drive)",
      "Co-morbid severe depression or self-medicating with alcohol or benzodiazepines"
    ],
    riskFactors: [
      "Female sex (women are twice as likely as men to be diagnosed with GAD)",
      "Personal or family history of anxiety, depression, or panic disorder",
      "Chronic medical conditions or chronic pain syndromes",
      "High intake of caffeine, energy drinks, or prescription stimulants",
      "Exposure to chronic psychosocial trauma or bullying"
    ],
    bodyImpact: "Chronic autonomic sympathetic hyper-arousal elevates circulating adrenaline and cortisol, resulting in sustained hypertension, endothelial damage, increased risk of cardiovascular disease, impaired immune function, and irritable bowel symptoms.",
    diagnosis: [
      "DSM-5 Diagnostic Criteria: Excessive worry about various events for >= 6 months, difficult to control, with at least 3 of 6 somatic symptoms",
      "GAD-7 Questionnaire (score >= 10 indicates moderate-to-severe anxiety)",
      "Comprehensive medical evaluation to rule out somatic mimics: Serum TSH (hyperthyroidism), ECG (arrhythmias), toxicology screen",
      "Assessment of co-morbid major depression and substance use"
    ],
    treatments: [
      "Cognitive Behavioral Therapy (CBT: identifying and restructuring cognitive distortions and decatastrophizing)",
      "First-Line Pharmacotherapy: SSRIs (Escitalopram, Sertraline) and SNRIs (Venlafaxine, Duloxetine)",
      "Azapirones: Buspirone (5-HT1A partial agonist, non-sedating, non-addictive)",
      "Pregabalin / Gabapentin (calcium channel alpha-2-delta ligands for anxiety)",
      "Beta-Blockers (Propranolol) for acute situational somatic symptoms (palpitations, tremors)",
      "Short-term Benzodiazepines strictly reserved for acute crises due to addiction and tolerance risks",
      "Mindfulness-Based Stress Reduction (MBSR) and biofeedback"
    ],
    prevention: "Adopt regular stress-buffering lifestyle practices: eliminate excessive caffeine, practice daily diaphragmatic breathing, prioritize consistent sleep schedules, exercise regularly, and seek cognitive therapy early before worry patterns become deeply entrenched.",
    safeFoods: [
      "Magnesium-rich foods (almonds, pumpkin seeds, dark chocolate, spinach) that calm neural excitability",
      "Herbal teas: Chamomile, lavender, and passionflower (have mild natural GABAergic calming effects)",
      "Complex carbohydrates (steel-cut oats, quinoa) that promote steady blood sugar without adrenaline surges",
      "Omega-3 fatty acids from wild fish and walnuts to dampen neuroinflammation",
      "Fermented prebiotic/probiotic foods to support gut serotonin production"
    ],
    avoidFoods: [
      "High-dose caffeine (coffee, pre-workout supplements, energy drinks) — the most common trigger of anxiety spikes",
      "Alcohol (often used as a crutch, but causes severe rebound anxiety and sleep fragmentation the next morning)",
      "High-glycemic refined sugars and energy snacks that trigger reactive hypoglycemia and adrenergic surges",
      "Artificial food dyes and MSG in sensitive individuals"
    ],
    exercises: [
      "Rhythmic aerobic exercise: 30 minutes of brisk walking, swimming, or jogging (burns excess adrenaline)",
      "Box Breathing technique: Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4 (activates vagus nerve)",
      "Progressive Muscle Relaxation (PMR): Systematically tensing and relaxing muscle groups from toes to face",
      "Restorative yoga and stretching"
    ],
    lifestyle: [
      "Switch from high-caffeine coffee to decaf or herbal teas",
      "Dedicate a 15-minute 'worry window' earlier in the day to write down worries, leaving the rest of the day free",
      "Practice 10 minutes of daily mindfulness meditation using guided apps",
      "Turn off sensational news alerts and social media feeds that induce chronic threat states"
    ],
    whenToConsult: "Consult a healthcare provider or licensed therapist if anxiety interferes with your ability to work, sleep, or maintain relationships, or if you experience panic attacks. Seek immediate emergency evaluation if chest pain accompanies anxiety.",
    faqs: [
      {
        q: "What is the physiological difference between a panic attack and a heart attack?",
        a: "Both cause severe chest tightness, racing heart, and shortness of breath. A heart attack is caused by blocked blood flow to the heart muscle, while a panic attack is an intense sympathetic nervous system surge. Any first-time severe chest pain must be checked in the emergency room."
      },
      {
        q: "Why does caffeine cause anxiety and jitteriness?",
        a: "Caffeine blocks adenosine receptors in the brain (which normally promote relaxation and sleepiness) and stimulates the adrenal glands to pump out adrenaline, mimicking the body's acute fight-or-flight response."
      }
    ],
    references: [
      "American Psychological Association (APA) Clinical Practice Guideline for the Treatment of Anxiety",
      "NICE Clinical Guidelines: Generalised Anxiety Disorder and Panic Disorder in Adults",
      "Mayo Clinic Anxiety Disorders Overview"
    ]
  },
  {
    id: "chronic-stress",
    name: "Chronic Stress & Burnout Syndrome",
    name_ml: "വിട്ടുമാറാത്ത മാനസിക സമ്മർദ്ദം (സ്ട്രെസ്സ് & ബേൺഔട്ട്)",
    name_hi: "पुराना तनाव और बर्नआउट (क्रोनिक स्ट्रेस)",
    name_ar: "الإجهاد المزمن ومتلازمة الاحتراق النفسي",
    category: "mental_health",
    badge: "Systemic Exhaustion",
    icon: "battery-charging",
    shortDesc: "Prolonged, unrelenting emotional and physiological tension resulting in cognitive depletion, cynicism, and physical exhaustion.",
    whatIsIt: "Chronic stress occurs when the body's physiological stress response remains persistently activated over weeks to months without adequate recovery. When chronic workplace or life stress is unsuccessfully managed, it culminates in Burnout Syndrome—a recognized occupational phenomenon defined by three dimensions: feelings of energy depletion or exhaustion, increased mental distance or negativism/cynicism toward one's job, and reduced professional efficacy.",
    causes: [
      "Prolonged over-activation of the sympathetic nervous system and HPA axis with cortisol flattening",
      "Unreasonable workplace workload, lack of autonomy, poor workplace boundaries, and toxic environments",
      "Chronic caregiving burdens for sick or elderly relatives without respite",
      "Financial instability and socioeconomic hardship",
      "High internal perfectionism, lack of recovery time, and inability to say 'no'"
    ],
    symptoms: [
      "Profound, unyielding physical and emotional exhaustion not relieved by sleep or weekends",
      "Cynicism, emotional detachment, irritability, and resentment toward responsibilities",
      "Cognitive deficits: Brain fog, short-term memory lapses, and severe loss of productivity",
      "Tension headaches, chronic back and neck pain",
      "Frequent gastrointestinal disturbances (reflux, nausea, alternating bowel habits)",
      "Frequent colds and respiratory infections due to stress-induced immunosuppression",
      "Loss of creativity, enthusiasm, and feelings of accomplishment"
    ],
    warningSigns: [
      "Complete physical collapse / severe functional breakdown",
      "Severe clinical depression and emergence of suicidal ideation",
      "Alcohol or prescription drug dependency as coping mechanisms",
      "Hypertensive crises or sudden cardiac arrhythmias triggered by acute surges on top of chronic stress"
    ],
    riskFactors: [
      "High-pressure professions: Healthcare workers, emergency responders, corporate executives, teachers",
      "Personality traits: Type A personality, perfectionism, people-pleasing tendencies",
      "Lack of social support or isolating working-from-home conditions",
      "Working more than 55 hours per week (associated with higher stroke and heart disease risk)"
    ],
    bodyImpact: "Persistent glucocorticoid exposure causes allostatic overload, blunts glucocorticoid receptor sensitivity, causes brain-derived neurotrophic factor (BDNF) downregulation, shrinks the prefrontal cortex, accelerates vascular atherosclerosis, promotes visceral abdominal fat storage, and impairs cellular immunity.",
    diagnosis: [
      "Clinical assessment and Maslach Burnout Inventory (MBI) evaluating Emotional Exhaustion, Depersonalization, and Personal Accomplishment",
      "Perceived Stress Scale (PSS) evaluation",
      "Comprehensive medical workup: Cortisol rhythm testing, TSH, Ferritin, Vitamin D, and CBC to exclude medical causes of exhaustion",
      "Cardiovascular screening: Resting blood pressure, ECG, and hs-CRP"
    ],
    treatments: [
      "Structured cognitive behavioral stress management and workplace boundary coaching",
      "Mandatory restorative medical leave and temporary workload restructuring",
      "Mindfulness-Based Stress Reduction (MBSR) programs",
      "Sleep restoration protocols and circadian alignment",
      "Pharmacotherapy for co-occurring clinical anxiety or depression under psychiatric supervision"
    ],
    prevention: "Preventing burnout requires strict psychological boundaries: taking mandatory vacations, adhering to fixed work hours, engaging in non-work creative hobbies, daily physical movement, and fostering open organizational communication about workload expectations.",
    safeFoods: [
      "Adaptogenic and antioxidant foods: Blueberries, dark leafy greens, walnuts",
      "Magnesium-rich foods: Spinach, pumpkin seeds, black beans, avocados",
      "Complex carbohydrates providing steady serotonin production (oatmeal, sweet potatoes)",
      "Warm soothing chamomile or holy basil (Tulsi) herbal tea",
      "High-protein breakfasts that blunt morning cortisol spikes"
    ],
    avoidFoods: [
      "Excessive cups of coffee and energy drinks (perpetuates the false adrenaline-exhaustion cycle)",
      "High-sugar convenience treats that cause sharp blood glucose spikes followed by fatigue",
      "Alcohol as an evening 'wind-down' tool (ruins REM sleep architecture)",
      "Skipping meals or eating lunch at your desk while working"
    ],
    exercises: [
      "Gentle, restorative cardio: 30 minutes of nature walking / forest bathing (Shinrin-yoku)",
      "Gentle restorative yoga and stretching (avoids over-taxing already exhausted adrenal pathways)",
      "Diaphragmatic breathing and 4-7-8 breathing exercise to activate the parasympathetic nervous system",
      "Swimming in calm water"
    ],
    lifestyle: [
      "Establish strict 'digital curfew': Turn off work emails and phone notifications after 7 PM",
      "Schedule non-negotiable downtime in your calendar just like a business meeting",
      "Learn to say 'No' to new commitments without justifying or over-explaining",
      "Cultivate restorative creative hobbies completely unrelated to productivity or work"
    ],
    whenToConsult: "Consult a healthcare provider or licensed psychologist if exhaustion makes basic work or family care impossible, if you feel detached from reality, or if you develop physical symptoms like persistent chest tightness or severe insomnia.",
    faqs: [
      {
        q: "Is burnout recognized as an official medical condition?",
        a: "The World Health Organization (WHO) classifies Burnout in the ICD-11 as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed, though it often co-exists with clinical depression."
      },
      {
        q: "How long does it typically take to recover from severe burnout?",
        a: "Recovery is not instantaneous; it typically requires 3 to 12 months of structured rest, workload adjustments, psychological counseling, and genuine lifestyle changes."
      }
    ],
    references: [
      "World Health Organization (WHO) ICD-11 Occupational Burnout Classification",
      "American Psychological Association (APA) Stress in America Annual Reports",
      "Lancet Seminar on Burnout Syndrome and Stress-Related Disorders"
    ]
  },
  {
    id: "insomnia",
    name: "Insomnia & Chronic Sleep Disorders",
    name_ml: "ഉറക്കമില്ലായ്മ (ഇൻസോംനിയ)",
    name_hi: "अनिद्रा (इंसोमनिया)",
    name_ar: "الأرق واضطرابات النوم المزمنة",
    category: "mental_health",
    badge: "Circadian Disruption",
    icon: "moon",
    shortDesc: "A prevalent sleep disorder characterized by persistent difficulty falling asleep, staying asleep, or experiencing non-restorative sleep.",
    whatIsIt: "Insomnia is a sleep disorder characterized by chronic dissatisfaction with sleep quantity or quality, despite adequate opportunity for sleep. It encompasses Sleep Onset Insomnia (trouble falling asleep), Sleep Maintenance Insomnia (frequent nocturnal awakenings), and Early Morning Awakening Insomnia. Chronic insomnia is diagnosed when sleep disturbance occurs at least 3 nights per week for 3 months or longer.",
    causes: [
      "Psychophysiological hyperarousal: Overactive sympathetic nervous system and elevated nocturnal cortisol",
      "Circadian rhythm misalignment from irregular sleep schedules, shift work, and blue light from electronic screens",
      "Psychological distress, anxiety, depression, and obsessive rumination in bed",
      "Excessive caffeine, nicotine, alcohol, or stimulant medications",
      "Co-existing medical conditions: Chronic pain, GERD, restless legs syndrome, and obstructive sleep apnea"
    ],
    symptoms: [
      "Lying awake for 30 minutes or more struggling to fall asleep at bedtime",
      "Waking up multiple times throughout the night and struggling to return to sleep",
      "Waking up hours too early in the morning feeling unrefreshed and exhausted",
      "Daytime drowsiness, brain fog, poor concentration, and memory errors",
      "Mood irritability, anxiety, and dread regarding the upcoming night's sleep ('sleep anxiety')",
      "Tension headaches, gastrointestinal upset, and reliance on sleep aids"
    ],
    warningSigns: [
      "Severe micro-sleep episodes while driving a motor vehicle or operating machinery",
      "Co-existing loud snoring with gasping for air (Obstructive Sleep Apnea)",
      "Severe paradoxical insomnia or dependence on high doses of sedatives/benzodiazepines"
    ],
    riskFactors: [
      "Female sex (hormonal changes during menstruation, pregnancy, and menopause)",
      "Age over 60 years (alterations in slow-wave sleep and circadian phase advance)",
      "High-stress lifestyle and sedentary indoor occupations",
      "Irregular shift work and frequent international travel across time zones"
    ],
    bodyImpact: "Chronic sleep deprivation disrupts the glymphatic clearance of neurotoxic waste products (including beta-amyloid) from the brain. It doubles the risk of hypertension, impairs immune natural killer cell activity, causes glucose intolerance, spikes hunger hormone ghrelin, and elevates mortality risk.",
    diagnosis: [
      "DSM-5 and ICSD-3 clinical diagnostic criteria",
      "2-week comprehensive Sleep Diary tracking bedtime, sleep latency, awakenings, and wake time",
      "Pittsburgh Sleep Quality Index (PSQI) and Insomnia Severity Index (ISI)",
      "Overnight Polysomnography (Sleep Study - PSG) to rule out Obstructive Sleep Apnea or Periodic Limb Movement Disorder"
    ],
    treatments: [
      "Cognitive Behavioral Therapy for Insomnia (CBT-I) — the undisputed gold standard first-line treatment (outperforms medications long-term):",
      "CBT-I components: Stimulus Control Therapy, Sleep Restriction Therapy, Sleep Hygiene, and Cognitive Restructuring",
      "Dual Orexin Receptor Antagonists (DORAs: Suvorexant, Lemborexant, Daridorexant) — modern physiological sleep modulators without dependence",
      "Melatonin Receptor Agonists (Ramelteon)",
      "Low-dose sedating antidepressants (Trazodone, Doxepin)",
      "Strict avoidance of long-term benzodiazepine sedatives (Z-drugs like Zolpidem should be limited to short-term acute use)"
    ],
    prevention: "Maintain rock-solid sleep hygiene: keep wake-up time identical 7 days a week, expose eyes to outdoor sunlight every morning, eliminate screens 1-2 hours before bed, keep the bedroom cool, dark, and quiet, and reserve the bed exclusively for sleep and intimacy.",
    safeFoods: [
      "Tart cherry juice (natural dietary source of bioavailable melatonin)",
      "Kiwi fruit (eating 2 kiwis one hour before bedtime has been shown to speed sleep onset)",
      "Almonds and walnuts (rich in magnesium and melatonin)",
      "Chamomile, passionflower, or valerian root herbal tea",
      "Light protein and complex carb snack (e.g., small bowl of oatmeal with warm milk) if hungry at night"
    ],
    avoidFoods: [
      "Caffeine within 8 to 10 hours of bedtime (caffeine has an average half-life of 5-7 hours)",
      "Alcohol before bed (while it induces drowsiness, it destroys restorative REM sleep and causes 3 AM awakenings)",
      "Heavy, rich, spicy, or fatty dinners within 3 hours of sleep (triggers acid reflux and indigestion)",
      "Excessive liquids right before bed (triggers nocturnal urination/nocturia)"
    ],
    exercises: [
      "Daily aerobic exercise (30 minutes of walking, jogging, or cycling) significantly deepens slow-wave sleep",
      "Complete vigorous workouts at least 3-4 hours before bedtime to allow body temperature to drop",
      "Gentle pre-bed yoga and progressive muscle relaxation to lower autonomic tone"
    ],
    lifestyle: [
      "THE 20-MINUTE RULE: If you are awake in bed for more than 20 minutes, get out of bed! Go to a dimly lit room, read a boring book, and only return to bed when genuinely sleepy",
      "Make your bedroom a sleep sanctuary: 65°F / 18°C temperature, black-out curtains, and zero glowing electronics",
      "Wake up at the EXACT same time every single day, including Saturdays and Sundays",
      "Do not watch the clock if you wake up at night — turn clock displays away from view"
    ],
    whenToConsult: "Consult a sleep specialist or physician if sleep difficulties persist for more than a month, if you fall asleep while driving, or if a partner notices you gasping or choking for breath during sleep.",
    faqs: [
      {
        q: "Why is alcohol bad for sleep if it makes me sleepy?",
        a: "Alcohol is a central nervous system depressant that makes you drowsy, but as your liver metabolizes it during the night, it triggers a severe rebound effect that fragments sleep, eliminates REM sleep, and causes frequent awakenings."
      },
      {
        q: "What is Sleep Restriction Therapy in CBT-I?",
        a: "Sleep restriction temporarily limits time spent in bed to match the actual amount of sleep you are getting (e.g., 6 hours). This builds up powerful physiological sleep drive ('sleep pressure'), curing insomnia by making sleep consolidated and deep."
      }
    ],
    references: [
      "American Academy of Sleep Medicine (AASM) Clinical Practice Guideline for the Pharmacologic and Non-Pharmacologic Treatment of Chronic Insomnia",
      "National Institutes of Health (NIH) Consensus Statement on Insomnia",
      "European Sleep Research Society (ESRS) Guidelines for the Diagnosis and Treatment of Insomnia"
    ]
  },
  {
    id: "bipolar-disorder",
    name: "Bipolar Disorder (Manic-Depressive Illness)",
    name_ml: "ബൈപോളാർ ഡിസോർഡർ",
    name_hi: "द्विध्रुवी विकार (बायपोलर डिसऑर्डर)",
    name_ar: "اضطراب ثنائي القطب",
    category: "mental_health",
    badge: "Mood Cycling",
    icon: "activity",
    shortDesc: "A chronic psychiatric disorder characterized by extreme shifts in mood, energy, activity levels, and concentration.",
    whatIsIt: "Bipolar disorder is a chronic brain disorder that causes intense, cyclical shifts in mood, energy, and activity levels. These fluctuate between periods of unusually intense emotion, hyperactivity, and grandiosity (Mania or Hypomania) and periods of profound sadness, hopelessness, and inactivity (Depression). Bipolar I involves at least one full manic episode; Bipolar II involves major depressive episodes and hypomanic episodes without full mania.",
    causes: [
      "Complex polygenic inheritance (one of the most hereditary psychiatric conditions, ~70-85% heritability)",
      "Dysregulation of neuroplastic signaling pathways, mitochondrial bioenergetics, and intracellular second messengers (IP3/DAG)",
      "Dysfunction in fronto-limbic neural networks regulating emotional homeostasis",
      "Disruption of circadian rhythms and sleep-wake cycle regulation",
      "Environmental triggers: Severe psychological trauma, sleep deprivation, or substance use triggering first manic onset"
    ],
    symptoms: [
      "Manic Episode: Abnormally elevated, euphoric, or intensely irritable mood lasting >= 1 week",
      "Decreased need for sleep (feeling energized and rested after only 2-3 hours of sleep)",
      "Pressured speech: Rapid, loud, unstoppable talking jumping from topic to topic",
      "Flight of ideas and racing thoughts",
      "Grandiosity: Inflated self-esteem or unrealistic beliefs about one's powers, fame, or abilities",
      "Distractibility and excessive goal-directed activity",
      "Impulsive, high-risk behaviors: Reckless spending sprees, dangerous driving, foolish business investments, or sexual indiscretions",
      "Depressive Episode: Profound fatigue, sadness, suicidal ideation, and inability to function"
    ],
    warningSigns: [
      "Manic Psychosis: Severe delusions, paranoia, or auditory hallucinations during mania",
      "Mixed Features: Experiencing depressive despair combined with manic agitation and racing energy (highest risk of suicide)",
      "Severe financial ruin or legal arrest resulting from reckless manic behavior"
    ],
    riskFactors: [
      "First-degree relative (parent or sibling) with bipolar disorder",
      "Onset in late adolescence or early twenties",
      "Severe chronic sleep fragmentation or shift work",
      "Use of recreational stimulants (cocaine, amphetamines) or antidepressants without mood stabilizers"
    ],
    bodyImpact: "Recurrent affective episodes have neuroprogressive toxic effects on the brain, accelerating gray matter loss in prefrontal and temporal cortices. Bipolar disorder is associated with high rates of cardiovascular disease, metabolic syndrome, and a 20- to 30-fold elevated risk of suicide if untreated.",
    diagnosis: [
      "DSM-5 Diagnostic Criteria for Bipolar I, Bipolar II, or Cyclothymic Disorder",
      "Mood Disorder Questionnaire (MDQ) screening tool",
      "Young Mania Rating Scale (YMRS) to quantify manic severity",
      "Careful distinction from unipolar depression (prescribing antidepressant monotherapy in bipolar depression can trigger manic switches or rapid cycling)"
    ],
    treatments: [
      "Mood Stabilizers: Lithium Carbonate (gold standard for manic prevention, suicide reduction, and neuroprotection)",
      "Anticonvulsant Mood Stabilizers: Divalproex Sodium / Valproate, Lamotrigine (especially effective for bipolar depression maintenance), Carbamazepine",
      "Atypical Antipsychotics: Quetiapine, Lurasidone, Cariprazine, Olanzapine, Aripiprazole",
      "Interpersonal and Social Rhythm Therapy (IPSRT) to stabilize daily biological and sleep routines",
      "Psychoeducation and Cognitive Behavioral Therapy (CBT)",
      "Electroconvulsive Therapy (ECT) for severe treatment-resistant mania or psychotic depression"
    ],
    prevention: "Episodes can be prevented by adhering strictly to mood-stabilizing medication, maintaining an unshakeable sleep schedule, avoiding recreational drugs and alcohol, tracking mood patterns daily, and identifying individual personal 'early warning signs' of mania.",
    safeFoods: [
      "Consistent, balanced meals that maintain steady blood glucose",
      "High-Omega-3 fatty acids (EPA-rich fish oil shown to aid bipolar mood stabilization)",
      "Adequate salt and water intake if taking Lithium (dehydration or low sodium causes toxic Lithium buildup)",
      "Whole grain complex carbohydrates and antioxidant-rich vegetables",
      "Decaffeinated beverages and herbal teas"
    ],
    avoidFoods: [
      "Alcohol and recreational stimulants (potent triggers of manic and depressive episodes)",
      "High-dose caffeine (can disrupt sleep and trigger hypomania/mania)",
      "Sudden extreme changes in dietary sodium if taking Lithium",
      "Skipping meals or extreme intermittent fasting"
    ],
    exercises: [
      "Regular moderate aerobic exercise (brisk walking, swimming, light cycling) during stable and depressive phases",
      "Avoid intense, hyper-stimulating late-night workouts that could trigger manic sleeplessness",
      "Mindfulness meditation and gentle restorative yoga"
    ],
    lifestyle: [
      "SLEEP IS CRITICAL: Protect your sleep at all costs. Missing even a single night of sleep can trigger a full-blown manic episode",
      "Take your prescribed mood stabilizer every single day, even when feeling fantastic",
      "Keep a daily mood and sleep diary using a mobile tracking app",
      "Establish a medical advance directive specifying who should assist you if a severe manic episode occurs"
    ],
    whenToConsult: "Seek IMMEDIATE emergency medical care if you or a loved one expresses thoughts of suicide, begins acting recklessly, stops sleeping for days, or shows signs of psychosis. Contact your psychiatrist immediately at the earliest signs of mood shift.",
    faqs: [
      {
        q: "Why can't a person with bipolar depression just take standard antidepressants?",
        a: "Standard antidepressants (SSRIs) taken without a mood stabilizer can 'flip' a bipolar patient into severe mania, rapid cycling, or dangerous mixed affective states."
      },
      {
        q: "Can someone with bipolar disorder live a normal, successful life?",
        a: "Yes. With proper mood-stabilizing medication, healthy sleep habits, therapy, and social rhythm stability, many people with bipolar disorder maintain successful careers, families, and deeply fulfilling lives."
      }
    ],
    references: [
      "American Psychiatric Association (APA) Practice Guideline for the Treatment of Patients with Bipolar Disorder",
      "CANMAT and ISBD 2024 Guidelines for the Management of Patients with Bipolar Disorder",
      "National Institute of Mental Health (NIMH) Bipolar Disorder Research Reviews"
    ]
  },
  {
    id: "eating-disorders",
    name: "Eating Disorders (Anorexia, Bulimia, BED)",
    name_ml: "ഈറ്റിംഗ് ഡിസോർഡേഴ്സ് (ഭക്ഷണ ക്രമക്കേടുകൾ)",
    name_hi: "ईटिंग डिसऑर्डर (खान-पान के विकार)",
    name_ar: "اضطرابات الأكل (فقدان الشهية والشره العصبي)",
    category: "mental_health",
    badge: "Psychosomatic Disorder",
    icon: "alert-octagon",
    shortDesc: "Severe, life-threatening psychiatric conditions characterized by severe disturbances in eating behaviors, body image, and weight preoccupation.",
    whatIsIt: "Eating disorders are serious, complex mental health conditions characterized by persistent severe disturbances in eating behaviors and distressing thoughts and emotions surrounding food, weight, and body shape. The primary classifications include Anorexia Nervosa (severe dietary restriction and terror of weight gain), Bulimia Nervosa (cycles of binge eating followed by compensatory purging), and Binge Eating Disorder (BED - recurrent uncontrolled binge eating without purging).",
    causes: [
      "Complex interaction of genetic vulnerability (~50-60% heritability) and neurochemical serotonin/dopamine receptor alterations",
      "Sociocultural pressures celebrating thinness, diet culture, and weight stigma",
      "Psychological traits: High perfectionism, obsessive-compulsive traits, low self-esteem, and rigid thinking",
      "Adverse childhood experiences, bullying about body weight, and major life transitions",
      "Athletic environments emphasizing low body weight (gymnastics, ballet, distance running)"
    ],
    symptoms: [
      "Anorexia Nervosa: Severe caloric restriction, emaciation, intense terror of gaining weight, and distorted body image (seeing oneself as fat despite being severely underweight)",
      "Bulimia Nervosa: Eating abnormally large amounts of food in secret with a sense of lack of control, followed by forced vomiting, laxative abuse, fasting, or compulsive over-exercise",
      "Binge Eating Disorder (BED): Recurrent episodes of eating rapidly until uncomfortably full, accompanied by intense feelings of guilt, shame, and disgust",
      "Physical signs: Amenorrhea (loss of menstrual periods), hypothermia, lanugo (fine downy hair on body), brittle nails, and thinning hair",
      "Russell's Sign: Calluses or abrasions on the knuckles from repeated induced vomiting",
      "Severe dental enamel erosion from corrosive gastric acid during frequent vomiting"
    ],
    warningSigns: [
      "MEDICAL EMERGENCIES IN ANOREXIA: Severe bradycardia (heart rate < 40 bpm), systolic BP < 80 mmHg, hypokalemia",
      "Cardiac arrhythmias (prolonged QTc interval) caused by severe electrolyte imbalances",
      "Esophageal tears (Boerhaave syndrome) or gastric rupture from violent purging/bingeing",
      "High rate of suicide (anorexia nervosa has the highest mortality rate of any psychiatric illness)"
    ],
    riskFactors: [
      "Adolescence and young adulthood (most common onset between ages 12 and 25)",
      "Female sex, though rates among boys and men are frequently underdiagnosed",
      "Family history of eating disorders, depression, or substance abuse",
      "History of intensive dieting or early childhood weight-related teasing",
      "Participation in appearance- or weight-class-focused sports"
    ],
    bodyImpact: "Severe malnutrition causes myocardial muscle atrophy, lethal ventricular arrhythmias, severe osteoporosis with irreversible bone loss, leukopenia, renal failure, gastroparesis, and multi-organ failure.",
    diagnosis: [
      "DSM-5 Diagnostic Criteria for Anorexia Nervosa, Bulimia Nervosa, and Binge Eating Disorder",
      "Comprehensive medical evaluation: Orthostatic vital signs, ECG, serum electrolytes (Potassium, Magnesium, Phosphorus)",
      "Complete Blood Count, liver transaminases, kidney function, and serum prealbumin/albumin",
      "Eating Disorder Examination Questionnaire (EDE-Q)",
      "DEXA scan to assess bone mineral density"
    ],
    treatments: [
      "Multidisciplinary Team Care: Psychiatrist, adolescent medicine specialist, and specialized eating disorder Registered Dietitian",
      "Medical stabilization and inpatient refeeding monitoring to avoid Refeeding Syndrome",
      "Family-Based Treatment (FBT / Maudsley approach) — the gold standard first-line therapy for adolescents with anorexia",
      "Cognitive Behavioral Therapy Enhanced (CBT-E) for bulimia nervosa and binge eating disorder",
      "Pharmacotherapy: Fluoxetine (FDA-approved for Bulimia Nervosa), Lisdexamfetamine (Vyvanse for moderate-to-severe BED)",
      "Residential or Partial Hospitalization Programs (PHP) for structured refeeding"
    ],
    prevention: "Combat diet culture and weight stigma at home and in schools. Praise children for their character, skills, and kindness rather than their physical appearance. Never engage in 'fat talk' or restrictive dieting in front of children, and promote intuitive eating and joyful movement.",
    safeFoods: [
      "Structured, regular meal plans guided by an eating disorder registered dietitian",
      "Gradual nutritional rehabilitation restoring balanced macronutrients (proteins, complex carbs, healthy fats)",
      "Electrolyte-balanced fluids and oral nutritional supplements when indicated",
      "Eating a wide variety of foods without classifying them into 'good' vs 'evil/forbidden' categories"
    ],
    avoidFoods: [
      "Eliminating entire food groups or following extreme restrictive fad diets",
      "Counting calories or obsessively weighing every ounce of food on scales",
      "Over-the-counter diet pills, detox teas, and laxatives",
      "Excessive zero-calorie diet sodas and caffeine used to suppress appetite"
    ],
    exercises: [
      "Complete cessation of exercise during acute medical malnutrition and bradycardia",
      "Gradual reintroduction of joyful, non-compulsive physical movement only after medical clearance and weight restoration",
      "Gentle stretching and mindful walking that focuses on reconnecting with the body"
    ],
    lifestyle: [
      "Remove bathroom weight scales and stop daily self-weighing (weigh-ins should be blind and done only at doctor's office)",
      "Unfollow social media accounts that promote 'thinspiration', 'fitspiration', or restrictive dieting",
      "Establish a firm routine of 3 meals and 2-3 snacks eaten with family or supportive peers",
      "Seek support from national eating disorder helplines and peer recovery groups"
    ],
    whenToConsult: "Seek IMMEDIATE emergency medical care if a person has fainting spells, heart palpitations, severe weakness, or vomits blood. Consult an eating disorder physician or psychologist at the very first signs of secretive food restriction or bingeing.",
    faqs: [
      {
        q: "What is 'Refeeding Syndrome'?",
        a: "Refeeding syndrome is a potentially fatal medical complication that occurs when carbohydrates are reintroduced too quickly to a severely starved body. A sudden spike in insulin drives phosphorus, potassium, and magnesium into cells, causing lethal heart failure and seizures. Refeeding must always be medically monitored."
      },
      {
        q: "Can men suffer from eating disorders?",
        a: "Yes. Roughly 25% to 33% of people with eating disorders are male, often presenting with 'muscle dysmorphia' (obsessive drive for muscularity and low body fat) or binge eating, though they are frequently underdiagnosed due to stigma."
      }
    ],
    references: [
      "American Psychiatric Association (APA) Practice Guideline for the Treatment of Patients with Eating Disorders 2023",
      "NICE Clinical Guideline: Eating Disorders: Recognition and Treatment",
      "National Eating Disorders Association (NEDA) Clinical Toolkit"
    ]
  }
];

