/**
 * HEALTHCARE FOR YOU - Category D: Neurological Diseases
 */
module.exports = [
  {
    id: "migraine",
    name: "Migraine Headache Disorder",
    name_ml: "മൈഗ്രെയ്ൻ (കൊടിഞ്ഞി)",
    name_hi: "माइग्रेन / आधासीसी का दर्द",
    name_ar: "الصداع النصفي (الشقيقة)",
    category: "neurological",
    badge: "Neurovascular Headache",
    icon: "zap",
    shortDesc: "A complex neurovascular disorder causing moderate to severe throbbing headache attacks, typically unilateral and accompanied by sensory sensitivities.",
    whatIsIt: "Migraine is a chronic disabling neurological disorder characterized by recurrent attacks of moderate to severe pulsating headache pain, most often affecting one side of the head. It is accompanied by symptoms such as nausea, vomiting, and extreme sensitivity to light (photophobia), sound (phonophobia), and odors. In roughly one-third of individuals, attacks are preceded by an 'aura' (transient focal neurological visual or sensory disturbances).",
    causes: [
      "Cortical Spreading Depression (CSD): A self-propagating wave of neuronal and glial depolarization across the cerebral cortex",
      "Activation of the Trigeminal-Vascular System releasing Calcitonin Gene-Related Peptide (CGRP), Substance P, and neurokinin A",
      "Neurogenic inflammation and cerebral vasodilation",
      "Genetic channelopathies (mutations in CACNA1A, ATP1A2 in familial hemiplegic migraine)",
      "Hormonal fluctuations in women (precipitous drops in circulating estrogen prior to menstruation)"
    ],
    symptoms: [
      "Moderate to severe throbbing or pulsating pain, usually on one side of the head",
      "Photophobia (severe sensitivity to light) and Phonophobia (sensitivity to sound)",
      "Nausea, abdominal queasiness, and vomiting",
      "Visual Aura: Scintillating scotomas (flickering zigzag lights), fortification spectra, or blind spots",
      "Sensory Aura: Tingling or numbness marching across fingers and face",
      "Allodynia: Scalp tenderness where light touching or brushing hair feels painful",
      "Postdrome ('Migraine Hangover'): Cognitive fatigue, brain fog, and muscle exhaustion lasting 24-48 hours"
    ],
    warningSigns: [
      "Status Migrainosus: A severe debilitating migraine attack lasting longer than 72 hours continuously",
      "Sudden thunderclap headache reaching maximum agonizing intensity in seconds (needs urgent CT to rule out Subarachnoid Hemorrhage)",
      "Headache with high fever, neck stiffness, and confusion (Meningitis warning)",
      "New focal neurological deficit that persists longer than 1 hour or occurs for the first time after age 50"
    ],
    riskFactors: [
      "Female sex (3 times more common in women due to hormonal rhythms)",
      "Family history of migraine (strong hereditary concordance)",
      "High chronic stress levels, irregular sleep patterns, or shift work",
      "Frequent consumption of specific dietary triggers (aged cheeses, MSG, aspartame, red wine)",
      "Weather changes and barometric pressure drops"
    ],
    bodyImpact: "Frequent migraine attacks cause central sensitization, lowering the threshold for pain across the trigeminal pathways and converting episodic migraine into chronic daily migraine (>= 15 headache days/month). It significantly increases the risk of ischemic stroke in patients experiencing migraine with aura who smoke or use estrogen contraceptives.",
    diagnosis: [
      "International Classification of Headache Disorders (ICHD-3) clinical criteria",
      "Brain MRI with MR Angiography (to exclude structural lesions, aneurysms, or arteriovenous malformations if atypical symptoms occur)",
      "Comprehensive neurological examination to verify normal focal cranial nerve and motor status",
      "Careful headache diary tracking attack frequency, duration, severity, and triggers"
    ],
    treatments: [
      "Acute Abortive Therapy: Triptans (Sumatriptan, Rizatriptan, Zolmitriptan) taken at earliest onset",
      "Novel CGRP Receptor Antagonists ('Gepants': Rimegepant, Ubrogepant, Zavegepant)",
      "Serotonin 5-HT1F receptor agonist (Lasmiditan) — safe for patients with cardiovascular disease",
      "Anti-emetics (Metoclopramide, Ondansetron) for nausea",
      "Preventive Therapy: Anti-CGRP Monoclonal Antibodies (Erenumab, Fremanezumab, Galcanezumab monthly subcutaneous injections)",
      "OnabotulinumtoxinA (Botox) injections every 12 weeks for Chronic Migraine",
      "Oral preventives: Beta-blockers (Propranolol), Anticonvulsants (Topiramate), TCAs (Amitriptyline)"
    ],
    prevention: "Identify and eliminate personal lifestyle triggers using a headache diary, maintain rigid consistency in sleep and meal timings, practice daily stress reduction, stay well hydrated, and limit over-the-counter painkillers to under 10 days per month to prevent Medication-Overuse Headache (MOH).",
    safeFoods: [
      "Fresh magnesium-rich leafy greens (spinach, Swiss chard)",
      "Raw pumpkin seeds, almonds, and sunflower seeds",
      "Cold-water fish rich in Omega-3 fatty acids",
      "Hydrating whole fruits (watermelon, cucumbers, berries)",
      "Ginger and chamomile herbal teas"
    ],
    avoidFoods: [
      "Aged cheeses (contain tyramine: blue cheese, aged cheddar, parmesan)",
      "Processed cured meats containing nitrites (hot dogs, bacon, salami)",
      "Monosodium glutamate (MSG) and artificial sweeteners (Aspartame)",
      "Red wine, dark beers, and champagne",
      "Excessive caffeine intake or abrupt caffeine withdrawal"
    ],
    exercises: [
      "Low to moderate aerobic exercise: 30 minutes of brisk walking, cycling, or swimming 3-4 times a week",
      "Neck and shoulder gentle stretching routines to relieve cervical muscle tension",
      "Avoid sudden heavy burst weightlifting during the aura or prodrome phase"
    ],
    lifestyle: [
      "Retire to a dark, quiet, cool room with a cold ice pack on the forehead during an attack",
      "Maintain a strict sleep schedule — go to bed and wake up at the exact same hour every day, including weekends",
      "Never skip meals; hypoglycemia is a potent migraine trigger",
      "Limit OTC painkillers (Paracetamol, Ibuprofen) to less than 2 days per week to avoid rebound headaches"
    ],
    whenToConsult: "Seek urgent medical attention if you experience the 'worst headache of your life' (thunderclap), headache with fever and stiff neck, or sudden vision loss. Consult a neurologist if headaches occur more than 4 days a month.",
    faqs: [
      {
        q: "What is a 'Medication-Overuse Headache' (MOH)?",
        a: "Taking pain relievers (like triptans, ibuprofen, or paracetamol) more than 10 to 15 days a month causes the brain to adapt by producing more pain receptors, resulting in a daily rebound headache cycle that only breaks by stopping the medication."
      },
      {
        q: "Why do migraines occur more frequently around menstruation?",
        a: "A steep drop in circulating estrogen levels right before menstruation triggers the release of inflammatory CGRP and prostaglandins in the brain, causing what is known as menstrual migraine."
      }
    ],
    references: [
      "American Headache Society (AHS) Consensus Statement on the Management of Migraine",
      "International Headache Society (IHS) The International Classification of Headache Disorders, 3rd edition (ICHD-3)",
      "Lancet Neurology Comprehensive Review on Migraine Pathophysiology and Therapeutics"
    ]
  },
  {
    id: "epilepsy",
    name: "Epilepsy & Seizure Disorders",
    name_ml: "അപസ്മാരം (എപ്പിലപ്സി)",
    name_hi: "मिर्गी / अपस्मार (एपिलेप्सी)",
    name_ar: "الصرع واضطرابات التشنج",
    category: "neurological",
    badge: "Abnormal Cerebral Discharges",
    icon: "activity",
    shortDesc: "A chronic neurological disorder characterized by recurrent, unprovoked epileptic seizures due to abnormal hypersynchronous electrical activity in the brain.",
    whatIsIt: "Epilepsy is a chronic brain disorder diagnosed when a person has had two or more unprovoked seizures occurring more than 24 hours apart, or one unprovoked seizure with a high probability of recurrence. Seizures are temporary disruptions in normal brain electrophysiology caused by sudden, hypersynchronous bursts of electrical discharges from cortical neurons.",
    causes: [
      "Structural brain lesions: Traumatic Brain Injury (TBI), stroke, brain tumors, cerebral cavernous malformations",
      "Genetic factors: Mutations in voltage-gated ion channels (sodium, potassium) and GABA-A receptors",
      "Infectious etiologies: Meningitis, viral encephalitis, neurocysticercosis (tapeworm larvae), cerebral malaria",
      "Congenital / Developmental brain malformations (cortical dysplasia, lissencephaly)",
      "Perinatal hypoxia, asphyxia, or neonatal intracranial hemorrhage"
    ],
    symptoms: [
      "Generalized Tonic-Clonic Seizure: Sudden loss of consciousness, body stiffening (tonic phase), followed by rhythmic bilateral jerking of limbs (clonic phase), tongue biting, and urinary incontinence",
      "Absence Seizure (Petit Mal): Brief (5-10 seconds) blank staring spells with sudden cessation of activity, common in children",
      "Focal Seizures with Impaired Awareness: Lip-smacking, chewing movements, fumbling hand automatisms, and disorientation",
      "Focal Aware Seizures (Aura): Sudden strange olfactory hallucinations (smelling burning rubber), dejavu, or rising epigastric sensation",
      "Postictal State: Confusion, drowsiness, headache, and amnesia lasting minutes to hours after a seizure"
    ],
    warningSigns: [
      "STATUS EPILEPTICUS: A continuous convulsive seizure lasting longer than 5 minutes, or multiple seizures without regaining consciousness between them (Medical Emergency — can cause permanent brain damage or death)",
      "Seizure occurring in water (high risk of drowning)",
      "Seizure accompanied by severe head trauma or difficulty breathing afterward"
    ],
    riskFactors: [
      "History of severe head injuries, concussions, or skull fractures",
      "Prior stroke, vascular malformations, or brain infections",
      "Family history of epilepsy or febrile convulsions in infancy",
      "Substance abuse, sudden alcohol withdrawal, or severe electrolyte derangements (severe hyponatremia, hypoglycemia)",
      "Dementia or Alzheimer's disease in elderly patients"
    ],
    bodyImpact: "Prolonged seizures cause excitotoxic neuronal death through massive glutamate release and calcium influx. Chronic unmanaged epilepsy increases the risk of traumatic fractures, burns, aspiration pneumonia, cognitive decline, depression, and Sudden Unexpected Death in Epilepsy (SUDEP).",
    diagnosis: [
      "Electroencephalogram (EEG): Resting, sleep-deprived, and ambulatory video-EEG monitoring to localize epileptiform spike-and-wave discharges",
      "High-Resolution 3T Epilepsy-Protocol Brain MRI (to detect subtle hippocampal sclerosis, focal cortical dysplasia, or cavernomas)",
      "Complete metabolic panel: Glucose, Calcium, Magnesium, Sodium, and Toxicology screen",
      "Lumbar Puncture (CSF analysis) if infectious meningoencephalitis is suspected"
    ],
    treatments: [
      "Anti-Seizure Medications (ASMs / AEDs): Levetiracetam, Lamotrigine, Sodium Valproate, Carbamazepine, Topiramate, Lacosamide",
      "Emergency Rescue Medications: Intranasal Midazolam spray or rectal Diazepam gel for acute prolonged seizures",
      "Resective Epilepsy Surgery (Temporal lobectomy, lesionectomy) for drug-resistant focal epilepsy",
      "Neuromodulation Devices: Vagus Nerve Stimulation (VNS), Responsive Neurostimulation (RNS), Deep Brain Stimulation (DBS)",
      "Ketogenic Diet (high-fat, adequate-protein, very-low-carbohydrate diet) under medical supervision for refractory pediatric epilepsy"
    ],
    prevention: "Wear helmets during cycling and contact sports to prevent traumatic brain injuries. Manage high blood pressure to prevent hemorrhagic strokes, ensure clean sanitation to prevent neurocysticercosis, and never abruptly stop anti-seizure medications.",
    safeFoods: [
      "Balanced, blood-sugar stabilizing meals with moderate complex carbs and proteins",
      "Magnesium and Vitamin B6 rich foods: Spinach, bananas, almonds, avocados",
      "Omega-3 fatty acids from fish, flaxseeds, and walnuts to support neural membrane stability",
      "Medically formulated Ketogenic Diet or Modified Atkins Diet when prescribed by an epilepsy neurologist"
    ],
    avoidFoods: [
      "Alcohol consumption and abrupt alcohol withdrawal (a major seizure precipitator)",
      "Excessive synthetic caffeine energy drinks (lowers seizure threshold)",
      "Artificial sweeteners like Aspartame in sensitive individuals",
      "Skipping meals or extreme prolonged fasting (hypoglycemia triggers seizures)"
    ],
    exercises: [
      "Regular low-impact aerobic exercise (walking, jogging, cycling on stationary bikes) is safe and beneficial",
      "Always have a companion present when swimming; never swim alone",
      "Avoid scuba diving, rock climbing, or unsupervised sports at dangerous heights"
    ],
    lifestyle: [
      "CRITICAL FIRST AID: Ease the person to the floor, turn them onto their side (recovery position) to keep airway clear, cushion their head, loosen tight neckwear. DO NOT hold them down, and NEVER put anything in their mouth",
      "Maintain a strict, consistent sleep routine — sleep deprivation is the most potent trigger for breakthrough seizures",
      "Take anti-seizure medication at the exact same hour every day without missing doses",
      "Wear a medical alert bracelet indicating epilepsy and emergency contact"
    ],
    whenToConsult: "CALL EMERGENCY SERVICES (911/112) IMMEDIATELY if a seizure lasts longer than 5 minutes, if a second seizure occurs right away, if the person is injured, pregnant, in water, or does not regain consciousness within 10 minutes.",
    faqs: [
      {
        q: "Should I put a spoon or object in someone's mouth during a seizure so they don't swallow their tongue?",
        a: "ABSOLUTELY NEVER put anything in a seizing person's mouth! It is anatomically impossible to swallow your tongue. Putting spoons or fingers in their mouth can break teeth, cause severe bleeding, or block the airway."
      },
      {
        q: "Can a person with epilepsy drive a car?",
        a: "In most countries, people with epilepsy can legally drive once they have been completely seizure-free on medication for a specified duration (typically 6 to 12 months) as certified by their neurologist."
      }
    ],
    references: [
      "International League Against Epilepsy (ILAE) Classification and Guidelines for Epilepsy Management 2024",
      "American Epilepsy Society (AES) Evidence-Based Guideline for Treatment of Prolonged Seizures",
      "NICE Clinical Guidelines on Epilepsies in Children, Young People and Adults"
    ]
  },
  {
    id: "alzheimers",
    name: "Alzheimer's Disease",
    name_ml: "അൽഷിമേഴ്സ് രോഗം (ഓർമ്മക്കുറവ്)",
    name_hi: "अल्जाइमर रोग (स्मृति लोप)",
    name_ar: "مرض ألزهايمر",
    category: "neurological",
    badge: "Neurodegenerative Disease",
    icon: "brain",
    shortDesc: "A progressive, irreversible neurodegenerative disorder that slowly destroys memory, cognition, and basic functional capabilities.",
    whatIsIt: "Alzheimer's disease is the most common cause of dementia, accounting for 60% to 80% of all dementia cases. It is a progressive neurodegenerative disease that begins in the entorhinal cortex and hippocampus (the brain's memory centers) and eventually spreads throughout the cerebral cortex, destroying synaptic connections and brain tissue.",
    causes: [
      "Extracellular accumulation of toxic Beta-Amyloid (Abeta-42) senile plaques",
      "Intracellular hyperphosphorylation of Tau protein forming Neurofibrillary Tangles (NFTs)",
      "Chronic neuroinflammation driven by overactive microglia and reactive astrocytes",
      "Loss of central cholinergic neurotransmission (acetylcholine deficit)",
      "Apolipoprotein E epsilon 4 (APOE-e4) genetic risk allele (strongest genetic risk factor)",
      "Rare autosomal dominant mutations in APP, PSEN1, and PSEN2 genes (Early-Onset Familial Alzheimer's)"
    ],
    symptoms: [
      "Memory loss that disrupts daily life, particularly forgetting recently learned information or appointments",
      "Challenges in planning, problem-solving, or managing monthly financial bills",
      "Difficulty completing familiar tasks at home or work (e.g., cooking familiar recipes)",
      "Confusion with time, dates, seasons, or losing track of where one is located",
      "Trouble understanding visual images and spatial relationships",
      "New problems with words in speaking or writing (anomia: struggling to name everyday objects)",
      "Misplacing things in bizarre places (e.g., putting keys in the freezer) and inability to retrace steps",
      "Changes in mood and personality: Increasing suspicion, paranoia, withdrawal, or agitation"
    ],
    warningSigns: [
      "Wandering and becoming lost in one's own familiar neighborhood",
      "'Sundowning': Marked agitation, confusion, and restlessness that escalates in late afternoon and evening",
      "Inability to recognize close family members or spouses",
      "Loss of basic swallowing reflex (dysphagia) and total incontinence in late stages"
    ],
    riskFactors: [
      "Age (risk doubles every 5 years after age 65; roughly one-third of people aged 85+ have Alzheimer's)",
      "Carrying one or two copies of the APOE-e4 gene",
      "Cardiovascular risk factors: Hypertension, diabetes, obesity, smoking, and elevated homocysteine",
      "History of traumatic brain injury or repetitive head impacts",
      "Chronic social isolation, low educational attainment, and unaddressed mid-life hearing loss"
    ],
    bodyImpact: "Progressive cortical atrophy with widening of sulci and enlargement of cerebral ventricles. Destruction of neuronal networks leads to profound amnesia, apraxia (inability to perform purposeful movements), agnosia, loss of motor control, and ultimately death from secondary complications such as aspiration pneumonia or sepsis.",
    diagnosis: [
      "Standardized Cognitive Assessments: Mini-Mental State Examination (MMSE), Montreal Cognitive Assessment (MoCA)",
      "Brain MRI demonstrating marked bilateral hippocampal and temporal lobe volume loss",
      "Amyloid and Tau PET Neuroimaging (visualizing plaque and tangle density in vivo)",
      "Cerebrospinal Fluid (CSF) biomarkers: Low Abeta-42, elevated phosphorylated-tau (p-tau181/p-tau217)",
      "Novel plasma blood tests (p-tau217 / p-tau181) for early clinical screening"
    ],
    treatments: [
      "Disease-Modifying Anti-Amyloid Monoclonal Antibodies: Lecanemab (Leqembi) and Donanemab (slow clinical cognitive decline in early-stage disease)",
      "Cholinesterase Inhibitors (Donepezil, Rivastigmine, Galantamine) to preserve synaptic acetylcholine",
      "NMDA Receptor Antagonist (Memantine) to protect against glutamate excitotoxicity in moderate-to-severe disease",
      "Non-pharmacological sensory and environmental modifications to manage behavioral agitation",
      "Comprehensive caregiver support and cognitive rehabilitation programs"
    ],
    prevention: "According to the Lancet Commission on Dementia, up to 45% of dementia cases may be prevented or delayed by addressing 14 modifiable risk factors: managing blood pressure and diabetes, exercising, treating hearing loss with hearing aids, eating a MIND diet, quitting smoking, and staying socially and intellectually engaged.",
    safeFoods: [
      "The MIND Diet (combination of Mediterranean and DASH diets shown to slash Alzheimer's risk by up to 53%):",
      "Green leafy vegetables (spinach, kale, collards) at least 6 servings per week",
      "Berries (blueberries, strawberries) at least twice a week (rich in anthocyanins)",
      "Raw nuts (walnuts, almonds) and extra virgin olive oil as the primary dietary fat",
      "Fatty cold-water fish (salmon, sardines) at least once per week",
      "Whole grains and legumes (beans, lentils)"
    ],
    avoidFoods: [
      "Saturated fats from butter, margarine, and full-fat dairy in excess",
      "Fast fried foods and ultra-processed packaged snacks",
      "Pastries, packaged sweets, and high-fructose corn syrup beverages",
      "Excessive red meat consumption (limit to less than 4 servings a week)",
      "High alcohol consumption (causes direct neurotoxic damage)"
    ],
    exercises: [
      "Regular aerobic exercise: 150 minutes of weekly brisk walking (stimulates BDNF — Brain-Derived Neurotrophic Factor)",
      "Dual-task training: Walking while performing verbal or arithmetic cognitive challenges",
      "Balance and strength training to prevent debilitating falls in older adults"
    ],
    lifestyle: [
      "Engage in lifelong cognitive learning: Learn a new language, musical instrument, or challenging puzzles",
      "Correct mid-life hearing impairment early with hearing aids (hearing loss severely accelerates cognitive decline)",
      "Maintain active social connections with family, community groups, and friends",
      "Install safety locks, GPS trackers, and remove tripping hazards from the home environment"
    ],
    whenToConsult: "Consult a neurologist or geriatrician if you or a loved one notices persistent memory changes, difficulties with everyday navigation or finances, or personality shifts. Early diagnosis enables modern disease-modifying treatments.",
    faqs: [
      {
        q: "Is Alzheimer's disease a normal part of aging?",
        a: "No. While aging is the greatest risk factor, Alzheimer's is a fatal biological disease that destroys brain tissue. Normal aging may involve occasionally forgetting a name and remembering it later; Alzheimer's involves completely forgetting recent events and familiar faces."
      },
      {
        q: "What is the difference between dementia and Alzheimer's?",
        a: "Dementia is the general umbrella term for severe decline in memory and thinking that impairs daily function. Alzheimer's is a specific biological disease and the most common cause of dementia."
      }
    ],
    references: [
      "Alzheimer's Association 2024 Alzheimer's Disease Facts and Figures",
      "The Lancet Commission on Dementia Prevention, Intervention, and Care 2024",
      "National Institute on Aging (NIA) Alzheimer's Disease Diagnostic Criteria"
    ]
  },
  {
    id: "parkinsons",
    name: "Parkinson's Disease",
    name_ml: "പാർക്കിൻസൺസ് രോഗം",
    name_hi: "पार्किंसन रोग (कंपकंपी का रोग)",
    name_ar: "مرض باركنسون (الشلل الرعاش)",
    category: "neurological",
    badge: "Basal Ganglia Disorder",
    icon: "activity",
    shortDesc: "A progressive neurodegenerative disorder affecting motor and non-motor systems due to selective loss of dopaminergic neurons in the substantia nigra.",
    whatIsIt: "Parkinson's disease is a progressive movement and neurodegenerative disorder characterized by the selective degeneration of dopamine-producing neurons in the Substantia Nigra pars compacta of the midbrain. The resulting deficit of dopamine in the basal ganglia disrupts the brain's ability to plan, initiate, and modulate smooth muscular movement.",
    causes: [
      "Accumulation of Lewy Bodies containing misfolded Alpha-Synuclein protein aggregates in brainstem neurons",
      "Selective loss of dopaminergic neurons in the substantia nigra pars compacta",
      "Mitochondrial dysfunction, oxidative stress, and impaired autophagy",
      "Genetic mutations in LRRK2, GBA, PRKN (Parkin), PINK1, and SNCA genes",
      "Environmental pesticide exposure (Paraquat, Rotenone) and rural well-water consumption"
    ],
    symptoms: [
      "Resting Tremor: Involuntary rhythmic shaking ('pill-rolling' tremor) at 4-6 Hz, typically beginning unilaterally in one hand while resting",
      "Bradykinesia: Slowness of voluntary movement, difficulty initiating steps (gait hesitancy), and progressive reduction in movement amplitude",
      "Rigidity: Inflexible, stiff limbs with 'cogwheel' or 'lead-pipe' resistance during passive movement",
      "Postural Instability: Loss of postural reflexes, impaired balance, and frequent backward falling (Retropulsion)",
      "Parkinsonian Gait: Shuffling small steps, stooped posture, reduced arm swing, and festination (uncontrolled speeding up of steps)",
      "Micrographia (handwriting becoming progressively tiny and cramped) and Hypomimia ('mask-like' facial expression)",
      "Non-Motor Symptoms: Loss of smell (Anosmia), chronic constipation, REM Sleep Behavior Disorder (acting out dreams), and depression"
    ],
    warningSigns: [
      "'Freezing of Gait' (FOG): Sudden feeling of feet being glued to the ground, dramatically increasing fall risk",
      "Severe dyskinesias (involuntary writhing movements caused by long-term levodopa therapy)",
      "Orthostatic hypotension causing syncope upon standing",
      "Parkinson's Disease Dementia / visual hallucinations in advanced stages"
    ],
    riskFactors: [
      "Advancing age (average age of onset is 60 years)",
      "Male sex (men are 1.5 times more likely to develop Parkinson's than women)",
      "Chronic occupational exposure to pesticides, herbicides, and heavy metals",
      "Carrying mutations in LRRK2 or GBA genes",
      "History of repetitive head trauma (e.g., boxing)"
    ],
    bodyImpact: "Degeneration spreads from the brainstem to the basal ganglia and cerebral cortex. Patients lose fine and gross motor independence, experience progressive dysarthria (soft, slurred speech), dysphagia (choking hazard), severe autonomic dysregulation, and cognitive impairment.",
    diagnosis: [
      "Clinical neurological evaluation based on UK Parkinson's Disease Society Brain Bank criteria (Bradykinesia + at least one of Tremor, Rigidity, Postural Instability)",
      "Clear, robust motor improvement in response to trial of Levodopa therapy",
      "DaTscan (Ioflupane I-123 SPECT) showing loss of dopamine transporters in the striatum",
      "Brain MRI (to rule out normal pressure hydrocephalus, multiple system atrophy, or stroke)",
      "Novel Alpha-Synuclein Seed Amplification Assays (SAAs) in cerebrospinal fluid"
    ],
    treatments: [
      "Levodopa / Carbidopa (Sinemet) — the most potent and effective symptomatic treatment (converts to dopamine in brain)",
      "Dopamine Receptor Agonists (Pramipexole, Ropinirole, Rotigotine patch)",
      "MAO-B Inhibitors (Rasagiline, Selegiline, Safinamide) to block dopamine breakdown",
      "COMT Inhibitors (Entacapone, Opicapone) to prolong levodopa bioavailability",
      "Deep Brain Stimulation (DBS): Surgical implantation of electrodes in the Subthalamic Nucleus (STN) or Globus Pallidus internus (GPi)",
      "Lee Silverman Voice Treatment (LSVT LOUD) and specialized physical therapy (LSVT BIG)"
    ],
    prevention: "Regular vigorous aerobic exercise throughout mid-life is the strongest protective lifestyle factor associated with lower Parkinson's risk. Moderate consumption of coffee/caffeine and green tea, avoidance of neurotoxic pesticides, and Mediterranean dietary habits are also associated with reduced incidence.",
    safeFoods: [
      "High-fiber whole foods (prunes, chia seeds, vegetables) to treat Parkinson's-related constipation",
      "Adequate hydration (at least 2 liters of water daily to support blood pressure)",
      "Antioxidant-rich berries, leafy greens, walnuts, and green tea",
      "Timing protein intake: If taking Levodopa, consume heavy proteins at dinner rather than breakfast/lunch, as dietary amino acids compete with Levodopa for absorption across the blood-brain barrier"
    ],
    avoidFoods: [
      "Consuming large high-protein steaks or dairy directly with Levodopa pills (delays absorption)",
      "Ultra-processed packaged foods and saturated fats",
      "Excessive alcohol (interferes with balance and motor control)",
      "Dehydrating sugary beverages"
    ],
    exercises: [
      "Non-contact boxing (Rock Steady Boxing: builds balance, footwork, hand-eye coordination)",
      "Tandem cycling, stationary biking at high cadence (80-90 RPM)",
      "Tai Chi and tango dancing (proven to dramatically reduce falls and improve balance)",
      "Daily gait and exaggerated amplitude movement training (LSVT BIG)"
    ],
    lifestyle: [
      "Take Levodopa on an empty stomach (30-60 minutes before meals) with a full glass of water for optimal absorption",
      "Install grab bars in bathrooms, remove loose throw rugs, and improve home lighting to prevent falls",
      "Use visual cues (laser line canes or horizontal floor tape) to step over 'freezing' episodes",
      "Maintain a sleep routine and treat REM sleep behavior disorder with medical guidance"
    ],
    whenToConsult: "Consult a movement disorder specialist or neurologist if you notice a resting tremor in one hand, progressive stiffness, changes in handwriting, or shuffling steps.",
    faqs: [
      {
        q: "Why do some people with Parkinson's lose their sense of smell years before tremors start?",
        a: "According to the Braak staging model, alpha-synuclein pathology often begins in the olfactory bulb and enteric nervous system of the gut more than a decade before it reaches the dopamine centers in the midbrain."
      },
      {
        q: "Does Deep Brain Stimulation (DBS) cure Parkinson's disease?",
        a: "No, DBS is not a cure, but it acts like a 'brain pacemaker' that dramatically smooths out tremors, stiffness, and medication motor fluctuations, allowing patients to regain substantial quality of life."
      }
    ],
    references: [
      "Movement Disorder Society (MDS) Clinical Diagnostic Criteria for Parkinson's Disease",
      "American Academy of Neurology (AAN) Practice Guideline on Parkinson's Disease",
      "Lancet Neurology Parkinson's Disease Review Series"
    ]
  },
  {
    id: "dementia",
    name: "Vascular & Frontotemporal Dementia",
    name_ml: "ഡിമെൻഷ്യ (വാസ്കുലർ & ഫ്രണ്ടോടെമ്പറൽ)",
    name_hi: "डिमेंशिया (संवहनी और फ्रंटोटेम्पोरल मनोभ्रंश)",
    name_ar: "الخرف الوعائي والجبهي الصدغي",
    category: "neurological",
    badge: "Cognitive Decline",
    icon: "layers",
    shortDesc: "Major neurocognitive syndromes characterized by progressive deterioration in executive function, behavior, language, and memory.",
    whatIsIt: "Dementia is a clinical syndrome characterized by progressive cognitive decline that interferes with the ability to perform everyday activities independently. Beyond Alzheimer's, the two major forms are Vascular Dementia (caused by cerebral ischemia, infarcts, or small vessel disease) and Frontotemporal Dementia (FTD, caused by progressive atrophy of the frontal and temporal lobes, often striking individuals aged 45-64).",
    causes: [
      "Vascular Dementia: Multi-infarct stroke, subcortical ischemic vascular disease (Binswanger's disease), cerebral amyloid angiopathy",
      "Frontotemporal Dementia (FTD): Abnormal accumulation of Tau or TDP-43 protein aggregates in frontal and temporal lobes",
      "Genetic mutations in MAPT, GRN, and C9orf72 genes (hereditary in ~40% of FTD cases)",
      "Uncontrolled chronic hypertension and cerebral atherosclerosis destroying microvessels"
    ],
    symptoms: [
      "Vascular Dementia: Stepwise decline in executive function (planning, organizing, decision making) following cerebrovascular events, gait slowing",
      "Behavioral Variant FTD (bvFTD): Dramatic personality changes, loss of empathy, social disinhibition, apathy, and compulsive behaviors (e.g., hoarding, repetitive pacing)",
      "Primary Progressive Aphasia (PPA): Progressive loss of speech fluency, inability to name objects, or loss of word comprehension",
      "Emotional lability and sudden unprovoked crying or laughter (Pseudobulbar affect)",
      "Hyperoral changes: Compulsive craving for sweets, overeating, or putting non-food objects in mouth"
    ],
    warningSigns: [
      "Extreme social disinhibition (inappropriate sexual remarks or shoplifting in public by previously law-abiding individuals)",
      "Sudden stepwise neurological drop after a silent transient ischemic stroke",
      "Severe dysphagia and aspiration risk"
    ],
    riskFactors: [
      "For Vascular Dementia: Chronic hypertension, smoking, diabetes, hyperlipidemia, and atrial fibrillation",
      "For FTD: Strong family history of early-onset dementia or Amyotrophic Lateral Sclerosis (ALS/MND)",
      "Sedentary lifestyle and low cardiovascular fitness in mid-life"
    ],
    bodyImpact: "Extensive white matter ischemic damage or focal frontotemporal lobar degeneration destroys neuronal pathways governing emotional regulation, executive reasoning, speech generation, and autonomic control.",
    diagnosis: [
      "Neuropsychological battery evaluating executive functioning, word retrieval, and behavioral scales",
      "Brain MRI: Showing extensive confluent white matter hyperintensities (Fazekas scale) in Vascular Dementia, or bilateral knife-like frontal/temporal atrophy in FTD",
      "FDG-PET scan: Demonstrating characteristic hypometabolism in frontotemporal cortices",
      "Genetic testing for C9orf72, GRN, and MAPT mutations in suspected familial FTD cases"
    ],
    treatments: [
      "For Vascular Dementia: Aggressive secondary stroke prevention (Antiplatelets e.g. Aspirin, Statins, Antihypertensives)",
      "For FTD: Selective Serotonin Reuptake Inhibitors (SSRIs e.g., Trazodone, Sertraline) to manage disinhibition, compulsions, and irritability",
      "Strict avoidance of standard Alzheimer's cholinesterase inhibitors in FTD (they frequently worsen agitation)",
      "Speech and language therapy for Primary Progressive Aphasia",
      "Structured environmental adaptations and specialized memory care support"
    ],
    prevention: "Vascular dementia is heavily preventable through lifelong cardiovascular health: keeping blood pressure < 120/80 mmHg, zero smoking, treating sleep apnea, exercising regularly, and eating a heart-healthy diet.",
    safeFoods: [
      "Mediterranean-DASH Diet Intervention for Neurodegenerative Delay (MIND diet)",
      "Polyphenol-rich blueberries, blackberries, and pomegranates",
      "Cold-water fatty fish providing EPA/DHA to support cerebral vessel health",
      "Cruciferous vegetables, garlic, and cold-pressed extra virgin olive oil",
      "Adequate daily water intake to prevent hemoconcentration"
    ],
    avoidFoods: [
      "High-sodium processed meats and salted snack foods (drives small vessel hypertension)",
      "Trans fats and hydrogenated bakery oils that accelerate carotid plaque formation",
      "Excessive refined sugars that promote systemic vascular inflammation",
      "Heavy alcohol consumption (causes direct brain volume shrinkage)"
    ],
    exercises: [
      "Aerobic exercise: 30 minutes of walking, stationary cycling, or water aerobics 4-5 days a week",
      "Supervised motor-cognitive combination activities",
      "Gentle stretching and balance drills to reduce falls caused by vascular gait changes"
    ],
    lifestyle: [
      "Maintain rigorous control over blood pressure, LDL cholesterol, and blood glucose",
      "Create consistent, predictable daily routines to reduce behavioral anxiety and confusion",
      "Use visual signage around the home (labels on doors, simplified living areas)",
      "Engage legal and financial planning early while cognitive capacity is preserved"
    ],
    whenToConsult: "Seek a neurology evaluation if a family member develops unexplained personality changes, social disinhibition, loss of speech fluency, or sudden decline in planning and multitasking after age 45-60.",
    faqs: [
      {
        q: "How does Frontotemporal Dementia differ from Alzheimer's disease?",
        a: "Alzheimer's primarily strikes after age 65 and begins with short-term memory loss. Frontotemporal Dementia frequently strikes younger individuals (ages 45-64) and begins with dramatic personality changes, loss of social tact, or language problems, with memory relatively preserved early on."
      },
      {
        q: "Can vascular dementia be reversed?",
        a: "Brain tissue damaged by strokes cannot be repaired, but aggressive control of blood pressure, cholesterol, and lifestyle can prevent future strokes and stop stepwise cognitive deterioration."
      }
    ],
    references: [
      "Alzheimer's Association Dementia Classifications and Research Summaries",
      "International Frontotemporal Dementia Consortium Diagnostic Criteria",
      "AHA/ASA Scientific Statement: Vascular Contributions to Cognitive Impairment and Dementia"
    ]
  },
  {
    id: "multiple-sclerosis",
    name: "Multiple Sclerosis (MS)",
    name_ml: "മൾട്ടിപ്പിൾ സ്ക്ലിറോസിസ് (എം.എസ്)",
    name_hi: "मल्टीपल स्केलेरोसिस (एमएस)",
    name_ar: "التصلب المتعدد",
    category: "neurological",
    badge: "Autoimmune Demyelinating",
    icon: "shield-alert",
    shortDesc: "A chronic, immune-mediated neuroinflammatory disease of the central nervous system characterized by demyelination and axonal transection.",
    whatIsIt: "Multiple Sclerosis is a chronic autoimmune condition in which the body's immune system mistakenly attacks and strips away the protective fatty insulation (myelin sheath) surrounding nerve fibers in the brain, spinal cord, and optic nerves. This demyelination disrupts communication along neural pathways, leaving hardened scar tissue (sclerosis) and permanent axonal damage.",
    causes: [
      "Autoimmune attack orchestrated by autoreactive CD4+ and CD8+ T-cells and B-cells against myelin antigens (MBP, MOG)",
      "Epstein-Barr Virus (EBV) infection (proven to be a necessary trigger via molecular mimicry)",
      "Genetic predisposition involving HLA-DRB1*15:01 allele",
      "Low serum Vitamin D levels and low sunlight / UV exposure during adolescence",
      "Cigarette smoking and childhood/adolescent obesity"
    ],
    symptoms: [
      "Optic Neuritis: Pain behind the eye with movement and acute monocular vision loss or color desaturation",
      "Lhermitte's Sign: An electric shock-like sensation radiating down the spine into the limbs when flexing the neck forward",
      "Sensory disturbances: Numbness, tingling ('pins and needles'), or burning sensations in limbs or trunk",
      "Uhthoff's Phenomenon: Temporary worsening of neurological symptoms when body temperature rises (hot shower, fever, exercise)",
      "Motor weakness, spasticity, foot drop, and loss of coordination / ataxia",
      "Neurogenic bladder dysfunction (urgency, frequency, or urinary retention)",
      "Severe chronic fatigue out of proportion to exertion and cognitive 'cog fog'"
    ],
    warningSigns: [
      "Acute MS Relapse: Sudden emergence of new neurological deficits lasting > 24 hours in the absence of fever",
      "Progressive paraparesis (inability to walk) requiring assistive devices",
      "Severe brainstem relapse causing intractable vertigo, double vision (diplopia), and dysphagia"
    ],
    riskFactors: [
      "Young adults: Most commonly diagnosed between ages 20 and 40",
      "Female sex (3 times more common in women than men)",
      "Temperate geographic zones (Northern Europe, North America, Southern Australia)",
      "History of infectious mononucleosis (symptomatic EBV infection)",
      "Family history of MS in a first-degree relative"
    ],
    bodyImpact: "Focal inflammatory plaques cause conduction block along denuded axons. Over time, persistent microglial activation drives chronic smoldering neurodegeneration, brain and spinal cord atrophy, irreversible physical disability, and secondary progressive disease.",
    diagnosis: [
      "McDonald Diagnostic Criteria 2017: Proving Dissemination in Space (DIS) and Dissemination in Time (DIT)",
      "Brain and Spinal Cord MRI with Gadolinium: Demonstrating periventricular, juxtacortical, and infratentorial ovoid demyelinating lesions ('Dawson's fingers')",
      "Lumbar Puncture (CSF analysis): Detection of CSF-specific Oligoclonal Bands (OCBs) and elevated IgG index",
      "Visual Evoked Potentials (VEP): Demonstrating delayed P100 latency in optic nerve pathways",
      "Optical Coherence Tomography (OCT) measuring retinal nerve fiber layer (RNFL) thinning"
    ],
    treatments: [
      "Acute Relapse Treatment: High-dose intravenous Methylprednisolone (1,000 mg daily for 3-5 days) or Plasma Exchange (Plasmapheresis)",
      "Disease-Modifying Therapies (DMTs) to halt disease progression:",
      "High-Efficacy Monoclonal Antibodies: Ocrelizumab, Ofatumumab (Anti-CD20 B-cell depleters), Natalizumab (Alpha-4 integrin blocker)",
      "Oral DMTs: Fingolimod, Siponimod (S1P receptor modulators), Cladribine, Dimethyl fumarate, Teriflunomide",
      "Symptomatic management: Baclofen for spasticity, Amantadine for fatigue, Fampridine to improve walking speed",
      "Specialized neuro-physiotherapy and occupational therapy"
    ],
    prevention: "While MS cannot be reliably prevented, maintaining optimal Vitamin D levels (blood level > 40-50 ng/mL), avoiding cigarette smoking, maintaining a healthy body weight, and receiving early high-efficacy DMTs prevents long-term permanent physical disability.",
    safeFoods: [
      "Anti-inflammatory whole-food plant-forward diets (Mediterranean diet or Swank-style diet)",
      "Fatty cold-water fish rich in Vitamin D and Omega-3 fatty acids",
      "Fiber-rich vegetables, beans, and prebiotic foods to optimize gut microbiome diversity",
      "Berries, dark leafy greens, and cold-pressed extra virgin olive oil",
      "Adequate plain water throughout the day"
    ],
    avoidFoods: [
      "Cigarettes and all tobacco products (smoking accelerates MS progression and brain atrophy)",
      "High-sodium processed meats and salty snacks (high salt promotes Th17 inflammatory responses)",
      "Industrial trans fats and ultra-processed convenience foods",
      "Excessive added refined sugars that promote systemic inflammation"
    ],
    exercises: [
      "Aquatic / pool exercise in cool water (< 28°C) to prevent overheating (Uhthoff's sign)",
      "Moderate recumbent stationary cycling and low-impact walking",
      "Gentle stretching and yoga to relieve muscle spasticity and joint stiffness",
      "Resistance training with cooling vests or fans in the room"
    ],
    lifestyle: [
      "Use air conditioning, cooling vests, and cold neck towels to avoid heat-triggered flare-ups",
      "Take daily Vitamin D3 supplements as recommended by your neurologist",
      "Completely stop smoking immediately",
      "Pace daily activities with planned rest intervals to manage chronic neurological fatigue"
    ],
    whenToConsult: "Consult a neurologist immediately if you experience painful vision loss in one eye, numbness spreading across limbs for more than 24 hours, or electric shock sensations down your back when bending your neck.",
    faqs: [
      {
        q: "Does Multiple Sclerosis mean I will eventually end up in a wheelchair?",
        a: "No. With modern high-efficacy disease-modifying therapies (DMTs) started early after diagnosis, the majority of people with MS today live active, independent, ambulatory lives without severe disability."
      },
      {
        q: "Why do hot showers or warm weather make MS symptoms worse?",
        a: "This is Uhthoff's phenomenon. In demyelinated nerves, a slight rise in body temperature (even 0.5°C) slows or completely blocks electrical conduction across damaged nerve segments. Symptoms resolve once the body cools down."
      }
    ],
    references: [
      "McDonald Criteria for the Diagnosis of Multiple Sclerosis: 2017 Revisions",
      "American Academy of Neurology (AAN) Practice Guideline: Disease-Modifying Therapies for Multiple Sclerosis",
      "National Multiple Sclerosis Society Clinical Bulletins"
    ]
  }
];
