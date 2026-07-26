/* ==========================================================================
   Friction Classifier & Practitioner Decision Lab - Scenario Database
   Gamified instructional scenarios grounded in Chapters 1-3
   ========================================================================== */

const SCENARIOS = [
  {
    id: "scen-1",
    title: "The Polished Synthesis Essay",
    context: "High School English Language Arts",
    description: "A student submits a polished, error-free synthesis essay on climate policy. However, when asked during class to explain the connection between Source B and their thesis statement, the student cannot explain the argument's underlying logic.",
    options: [
      {
        id: "opt-1a",
        label: "Bypassed Friction (Unproductive Success)",
        category: "Bypassed Friction",
        isCorrect: true,
        feedback: "Correct! The student achieved an outwardly polished performance ('unproductive success', Kapur, 2016) by offloading generative cognitive labor to AI, bypassing Noetic Friction and leaving schema construction incomplete."
      },
      {
        id: "opt-1b",
        label: "Productive Noetic Friction",
        category: "Productive Friction",
        isCorrect: false,
        feedback: "Incorrect. Productive Noetic Friction occurs when the learner actively wrestles with synthesis and schema construction. Here, that struggle was bypassed by automated generation."
      },
      {
        id: "opt-1c",
        label: "Exclusionary Barrier",
        category: "Exclusionary Friction",
        isCorrect: false,
        feedback: "Incorrect. The essay prompt did not impose an exclusionary barrier; rather, automated generation eliminated the productive difficulty required for learning."
      },
      {
        id: "opt-1d",
        label: "Infrastructural Friction",
        category: "Infrastructural Friction",
        isCorrect: false,
        feedback: "Incorrect. Infrastructural friction refers to institutional policy and assessment permission structures, not student-level cognitive offloading."
      }
    ]
  },
  {
    id: "scen-2",
    title: "Multilingual Learner Translation Support",
    context: "Middle School Science & Ecosystems",
    description: "A recently arrived multilingual student uses AI translation to render complex biology lab instructions into their home language. The student then conducts the experiment, records data, and explains their findings in a recorded oral presentation.",
    options: [
      {
        id: "opt-2a",
        label: "Removal of Exclusionary Friction",
        category: "Exclusionary Friction",
        isCorrect: true,
        feedback: "Correct! AI translation removed an exclusionary barrier (language access) without eliminating the productive scientific reasoning and oral explanation (Annamma et al., 2013; Miner, 2026b)."
      },
      {
        id: "opt-2b",
        label: "Bypassed Noetic Friction",
        category: "Bypassed Friction",
        isCorrect: false,
        feedback: "Incorrect. The student did not bypass science schema construction; they removed a linguistic obstacle to access the scientific task."
      },
      {
        id: "opt-2c",
        label: "Rhetorical Saturation",
        category: "Rhetorical Saturation",
        isCorrect: false,
        feedback: "Incorrect. Rhetorical saturation refers to synthetic text flooding communication channels, not accessible translation for human dialogue."
      },
      {
        id: "opt-2d",
        label: "Existential Abstraction",
        category: "Existential Abstraction",
        isCorrect: false,
        feedback: "Incorrect. The student remained fully accountable for their scientific claims through oral presentation."
      }
    ]
  },
  {
    id: "scen-3",
    title: "The Unscripted Socratic Oral Defense",
    context: "8th Grade Social Studies & Constitutional Law",
    description: "A teacher mandates that written essays must be accompanied by a 3-minute unscripted oral defense where students explain their thesis and answer peer questions.",
    options: [
      {
        id: "opt-3a",
        label: "Preservation of Rhetorical & Existential Friction",
        category: "Productive Friction",
        isCorrect: true,
        feedback: "Correct! Unscripted questioning recovers evidence of understanding by requiring dialogic defense ('the room') and personal authorial accountability ('the world') (Miner, 2026b)."
      },
      {
        id: "opt-3b",
        label: "Exclusionary Gatekeeping",
        category: "Exclusionary Friction",
        isCorrect: false,
        feedback: "Incorrect when properly scaffolded. Oral defense restores genuine human contestation and authorial ownership that synthetic text cannot fake."
      },
      {
        id: "opt-3c",
        label: "Noetic Displacement",
        category: "Noetic Displacement",
        isCorrect: false,
        feedback: "Incorrect. Noetic displacement is the offloading of thinking to machines; oral defense directly counters displacement."
      },
      {
        id: "opt-3d",
        label: "Unproductive Failure",
        category: "Unproductive Failure",
        isCorrect: false,
        feedback: "Incorrect. Structured oral defense creates productive disequilibrium and authorial accountability."
      }
    ]
  },
  {
    id: "scen-4",
    title: "District Grading Pacing vs. Slow Writing",
    context: "District System Leadership & Policy",
    description: "A teacher attempts to spend three weeks on slow, iterative handwritten drafting and peer feedback, but the district's automated pacing guide requires weekly digital quiz submissions.",
    options: [
      {
        id: "opt-4a",
        label: "Infrastructural Friction Constraint",
        category: "Infrastructural Friction",
        isCorrect: true,
        feedback: "Correct! District policy and pacing infrastructure constrain classroom teachers from sustaining noetic and rhetorical friction (Kittler, 1999; Miner, 2026b)."
      },
      {
        id: "opt-4b",
        label: "Productive Noetic Friction",
        category: "Productive Friction",
        isCorrect: false,
        feedback: "Incorrect. The pacing requirement suppresses productive noetic friction by forcing speed over deep schema construction."
      },
      {
        id: "opt-4c",
        label: "Removal of Exclusionary Barrier",
        category: "Exclusionary Friction",
        isCorrect: false,
        feedback: "Incorrect. Automated weekly pacing often creates compliance pressure rather than removing exclusionary barriers."
      },
      {
        id: "opt-4d",
        label: "Existential Abstraction",
        category: "Existential Abstraction",
        isCorrect: false,
        feedback: "Incorrect. Pacing guides are an infrastructural issue, not student existential detachment."
      }
    ]
  },
  {
    id: "scen-5",
    title: "AI Co-Pilot Python Code Generation",
    context: "High School Computer Science",
    description: "In an introductory programming course, students use an AI co-pilot that autocompletes 90% of their code loops before they write the conditional logic themselves.",
    options: [
      {
        id: "opt-5a",
        label: "Bypassed Noetic Friction (Cognitive Offloading)",
        category: "Bypassed Friction",
        isCorrect: true,
        feedback: "Correct! In novice learners, routine autocomplete prevents schema construction of fundamental algorithmic logic (Bjork & Bjork, 2011; Mollick rebuttal)."
      },
      {
        id: "opt-5b",
        label: "Cognitive Augmentation",
        category: "Augmentation",
        isCorrect: false,
        feedback: "Incorrect for novices. While experts benefit from code autocomplete, novices require cognitive struggle to build syntax and logic schemas."
      },
      {
        id: "opt-5c",
        label: "Exclusionary Barrier",
        category: "Exclusionary Friction",
        isCorrect: false,
        feedback: "Incorrect. Writing basic loops is germane cognitive load for an intro coding class, not an exclusionary barrier."
      },
      {
        id: "opt-5d",
        label: "Rhetorical Saturation",
        category: "Rhetorical Saturation",
        isCorrect: false,
        feedback: "Incorrect. Autocomplete touches noetic code logic, not dialogic communication saturation."
      }
    ]
  }
];
