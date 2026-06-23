export const medicalBoundary =
  "NestMemory does not diagnose Alzheimer's disease or any medical condition. Use these materials for education and wellness tracking, and speak with a licensed medical professional about symptoms or concerns.";

export const pageContent = {
  riskFactors: {
    title: "Risk Factors",
    eyebrow: "Awareness and context",
    intro:
      "Understanding risk factors can help families plan informed conversations with clinicians and adopt supportive wellness habits.",
    sections: [
      {
        title: "Age and family history",
        body:
          "Risk increases with age, and family history may matter. These factors do not mean a person will develop Alzheimer's disease."
      },
      {
        title: "Heart and metabolic health",
        body:
          "Blood pressure, diabetes, cholesterol, smoking, and sleep may influence long-term brain health. Primary care teams can help evaluate these areas."
      },
      {
        title: "Mood, hearing, and social connection",
        body:
          "Depression, untreated hearing loss, isolation, and chronic stress can affect cognition and daily functioning."
      },
      {
        title: "Medication and health changes",
        body:
          "Some memory concerns are related to medication effects, infections, vitamin deficiencies, thyroid issues, or sleep disorders."
      }
    ]
  },
  brainHealth: {
    title: "Brain Health",
    eyebrow: "Daily support",
    intro:
      "Brain health habits are most useful when they are realistic, repeatable, and coordinated with regular preventive care.",
    sections: [
      {
        title: "Sleep consistency",
        body:
          "Aim for a steady sleep schedule and discuss snoring, insomnia, or excessive daytime sleepiness with a clinician."
      },
      {
        title: "Lifelong learning",
        body:
          "Reading, music, classes, puzzles, and meaningful hobbies can provide cognitive engagement and structure."
      },
      {
        title: "Social routines",
        body:
          "Regular conversation, group activities, volunteering, and family rituals can support mood and orientation."
      },
      {
        title: "Preventive visits",
        body:
          "Annual checkups, medication reviews, vision and hearing care, and chronic condition management all matter."
      }
    ]
  },
  nutrition: {
    title: "Nutrition",
    eyebrow: "Food patterns",
    intro:
      "No single food prevents dementia. Balanced eating patterns may support cardiovascular and cognitive wellness.",
    sections: [
      {
        title: "Plant-forward meals",
        body:
          "Vegetables, berries, beans, whole grains, nuts, and olive oil are common features of brain-health-oriented eating patterns."
      },
      {
        title: "Fish and lean proteins",
        body:
          "Fish, poultry, eggs, tofu, and legumes can help maintain protein intake. Ask a clinician about dietary restrictions."
      },
      {
        title: "Hydration and regular meals",
        body:
          "Dehydration and missed meals can worsen confusion or fatigue, especially for older adults."
      },
      {
        title: "Limit high-risk patterns",
        body:
          "Heavy alcohol use and highly processed diets may affect sleep, mood, vascular health, and daily cognition."
      }
    ]
  },
  exercise: {
    title: "Exercise",
    eyebrow: "Movement and safety",
    intro:
      "Movement can support mood, sleep, balance, cardiovascular health, and independence. Choose activities that fit ability and medical guidance.",
    sections: [
      {
        title: "Aerobic movement",
        body:
          "Walking, cycling, swimming, dancing, or low-impact classes can be adapted for many ability levels."
      },
      {
        title: "Strength and balance",
        body:
          "Gentle resistance training and balance practice can support confidence and reduce fall risk."
      },
      {
        title: "Start small",
        body:
          "Short sessions are useful when they become routine. A clinician or physical therapist can help tailor activity safely."
      },
      {
        title: "Track how it feels",
        body:
          "Record energy, sleep, mood, and memory notes after activity to spot supportive patterns over time."
      }
    ]
  }
} as const;

export const resourceLinks = [
  "Memory and aging discussion guides for primary care visits",
  "Care partner conversation checklist",
  "Medication review questions",
  "Sleep, hearing, and vision appointment prompts",
  "Community support and caregiver education directories"
];

export const faqs = [
  {
    question: "Can NestMemory diagnose Alzheimer's disease?",
    answer:
      "No. NestMemory is not a medical provider and does not diagnose Alzheimer's disease or any medical condition."
  },
  {
    question: "What should I do if I notice memory changes?",
    answer:
      "Document what changed, when it started, and how it affects daily life. Share those notes with a licensed medical professional."
  },
  {
    question: "Are memory changes always Alzheimer's disease?",
    answer:
      "No. Stress, sleep problems, medications, infections, mood disorders, hearing loss, and other conditions can affect memory."
  },
  {
    question: "Is my tracking data sent anywhere?",
    answer:
      "This demo stores entries in your browser's local storage only. Clearing browser data may remove the entries."
  }
];
