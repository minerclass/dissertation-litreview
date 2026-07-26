/* ==========================================================================
   Pedagogical Friction & Tertiary Algorithmicity
   Structured Theoretical Content Database for Chapters 1-3
   Author: Micah J. Miner (National Louis University Ed.D.)
   ========================================================================== */

const LIT_DATA = {
  title: "Pedagogical Friction in the Age of Generative AI and Tertiary Algorithmicity",
  author: "Micah J. Miner",
  institution: "National Louis University - Ed.D. in Curriculum, Advocacy, and Policy",
  committee: "Chair: Dr. Terri Jo Smith | Members: Dr. Ruben Puentedura, Dr. Blanca Gamez-Djokic",
  
  stages: [
    {
      id: "stage-1",
      number: "Stage I",
      name: "Primary Orality",
      scholar: "Walter J. Ong (1982)",
      period: "Pre-Literate Eras",
      summary: "Knowledge is tied to voice, memory, rhythm, and formula. Co-presence and agonistic dialogue define the noetic world.",
      details: {
        noeticWorld: "Thought is additive, aggregative, conservative, and situationally grounded. Formulaic repetition prevents loss of knowledge.",
        gainAndLoss: "Sustained immediate community and existential presence, but bounded by physical memory limits.",
        ruptureStatus: "Baseline oral ecology."
      }
    },
    {
      id: "stage-2",
      number: "Stage II",
      name: "Literacy & Print Culture",
      scholar: "Ong (1982), Postman (1992)",
      period: "Chirographic & Typographic",
      summary: "Writing externalizes memory to the page, enabling analytical detachment, introspective solitude, and formal logic.",
      details: {
        noeticWorld: "Separates the knower from the known. Enables linear introspection, abstract categorizations, and formal science.",
        gainAndLoss: "Gains reflective distance and analytical rigor; loses immediate oral co-presence.",
        ruptureStatus: "Externalizes memory storage, but human consciousness remains the sole creator."
      }
    },
    {
      id: "stage-3",
      number: "Stage III",
      name: "Broadcast Secondary Orality",
      scholar: "Ong (1977, 1982), Postman (1985)",
      period: "20th Century Electronics",
      summary: "Radio, television, and mass media retrieve oral immediacy within a literate framework of broadcast schedules.",
      details: {
        noeticWorld: "Creates a renewed 'participatory mystique' in mass audiences under centralized gatekeepers.",
        gainAndLoss: "Gains instantaneous global audience reach; introduces mass media epistemologies.",
        ruptureStatus: "Broadcast schedule provides a shared informational baseline across listeners."
      }
    },
    {
      id: "stage-4",
      number: "Stage IV",
      name: "Algorithmic Secondary Orality",
      scholar: "Miner (2026b), boyd (2007), Zuboff (2019)",
      period: "Mid-2000s - Early 2020s",
      summary: "Humans produce symbolic content, but engagement-optimizing platform algorithms dictate distribution and visibility.",
      details: {
        noeticWorld: "The feed replaces the schedule. Shared public sphere fragments into personalized algorithmic loops.",
        gainAndLoss: "Gains hyper-connected participatory networks; loses shared informational baselines.",
        ruptureStatus: "Ruptures transparent distribution. Content creation remains human, but algorithms curate access."
      }
    },
    {
      id: "stage-5",
      number: "Stage V / Present",
      name: "Tertiary Algorithmicity",
      scholar: "Miner (2026b)",
      period: "Generative & Agentic AI Era",
      summary: "Algorithmic systems both curate and generate symbolic content, rendering human authorship and cognitive labor optional at scale.",
      details: {
        noeticWorld: "Synthetic discourse saturates the symbolic environment. Synthetic text presents as knowledge without human cognition.",
        gainAndLoss: "Gains instant automated artifact synthesis; risks bypassing internal schema construction and authorial accountability.",
        ruptureStatus: "Complete rupture of all three Ong assumptions: non-human content generation, opaque curation, and internal reflective loops."
      }
    }
  ],

  rupturedAssumptions: [
    {
      id: "rupture-1",
      name: "Assumption 1: Humans Create Content",
      ongBaseline: "Across primary, literate, and broadcast media, symbolic expression always originated in human consciousness.",
      tertiaryRupture: "Neural network models generate essays, code, images, and arguments without human authorship or lived experience."
    },
    {
      id: "rupture-2",
      name: "Assumption 2: Transparent Distribution",
      ongBaseline: "Distribution followed co-presence, print publishing, or broadcast schedules visible to all users.",
      tertiaryRupture: "Proprietary recommendation feeds and AI interface layers dynamically generate and customize content per prompt."
    },
    {
      id: "rupture-3",
      name: "Assumption 3: External Environment",
      ongBaseline: "Media functioned as external environments inhabited by consciousness (books, radio broadcasts).",
      tertiaryRupture: "Algorithmic systems continuously reflect and anticipate prior user behavior, closing the reflective disequilibrium loop."
    }
  ],

  mediaEcologicalPressures: [
    {
      id: "pressure-1",
      name: "Noetic Displacement",
      dimension: "Cognitive Labor",
      desc: "Offloading interpretive, analytical, and compositional labor to generative tools, returning fluent artifacts before internal schema construction occurs.",
      counterpart: "Noetic Friction (The Head)"
    },
    {
      id: "pressure-2",
      name: "Rhetorical Saturation",
      dimension: "Communication Milieu",
      desc: "Flooding communication environments with synthetic text and simulated interlocutors, eroding the signals for genuine human exchange.",
      counterpart: "Rhetorical Friction (The Room)"
    },
    {
      id: "pressure-3",
      name: "Existential Abstraction",
      dimension: "Authorial Responsibility",
      desc: "Severing claims from lived experience and personal accountability, allowing learners to submit outputs without intellectual commitment.",
      counterpart: "Existential Friction (The World)"
    },
    {
      id: "pressure-4",
      name: "Agentic AI Escalation",
      dimension: "Autonomous Action",
      desc: "Systems plan and execute multi-step tasks across turns with minimal human prompting, moving from optional authorship to optional action.",
      counterpart: "Infrastructural Friction (The System)"
    }
  ],

  theoreticalStreams: [
    {
      id: "stream-1",
      name: "Media Ecology & Ong's Developmental Account",
      scholars: "Ong (1982), McLuhan (1964), Postman (1992, 1998)",
      keyIdeas: "Technologies of communication reorganize consciousness and the noetic world. Every media transition brings gains while diminishing existing human capacities.",
      roleInDissertation: "Provides the overarching theoretical spine for understanding AI as a qualitative media shift rather than a neutral utility tool."
    },
    {
      id: "stream-2",
      name: "Critical Algorithm Studies & Digital Aesthetics",
      scholars: "Zuboff (2019), Stiegler (2010, 2012), Floridi (2020), Baudrillard (1994)",
      keyIdeas: "Surveillance capitalism, algorithmic curation, tertiary retention, and simulacra explain how platform design extracts attention and severed symbolic traces.",
      roleInDissertation: "Supplies the diagnostic lens for platform architecture, synthetic discourse, and the risks of automated symbolic production."
    },
    {
      id: "stream-3",
      name: "Learning Sciences & Desirable Difficulties",
      scholars: "Bjork & Bjork (2011), Kapur (2008, 2016), Sweller (1988), Dewey (1933)",
      keyIdeas: "Durable learning requires effortful processing (germane load, desirable difficulties, productive failure). Fluency is a poor proxy for understanding.",
      roleInDissertation: "Establishes the educational warrant for why bypassing cognitive struggle produces 'unproductive success'."
    },
    {
      id: "stream-4",
      name: "Dis/Ability Studies & Critical Equity",
      scholars: "Annamma et al. (2013), Dolmage (2017), Biesta (2014, 2017)",
      keyIdeas: "Rigor can function as institutional gatekeeping. Educators must distinguish productive cognitive struggle from exclusionary accessibility barriers.",
      roleInDissertation: "Sets the equity boundary, ensuring pedagogical friction removes exclusionary barriers while safeguarding generative cognitive work."
    }
  ],

  counterarguments: [
    {
      id: "counter-1",
      title: "Cognitive Augmentation Objection (Mollick, 2024; Riva, 2025)",
      argument: "AI functions like the calculator or writing—extending human intellect as 'co-intelligence' and scaffolding complex tasks.",
      rebuttal: "Tools extend expert cognition only after baseline schemas exist. Routine AI reliance during novice formation prevents the construction of foundational schemas required for expertise."
    },
    {
      id: "counter-2",
      title: "Technological Determinism Objection (Feenberg, 2002; Smith & Marx, 1994)",
      argument: "Claiming tertiary algorithmicity dictates outcomes ignores human agency and treats technology as autonomous destiny.",
      rebuttal: "The framework explicitly rejects determinism. Naming pedagogical friction as a deliberate instructional response asserts human agency against powerful algorithmic defaults."
    },
    {
      id: "counter-3",
      title: "Rigor as Gatekeeping Objection (Dolmage, 2017; Annamma et al., 2013)",
      argument: "Demanding struggle and friction risks preserving exclusionary barriers that penalize disabled or multilingual learners.",
      rebuttal: "The framework establishes a strict equity boundary: remove exclusionary friction (accessibility/language barriers) while intentionally preserving productive friction (schema construction)."
    }
  ],

  methodology: {
    design: "Qualitative-Dominant Convergent Mixed Methods Study (QUAL + quan)",
    tradition: "Constructivist epistemology for the research questions and primary interpretation, with pragmatism as the narrower mixed methods warrant (Creswell & Plano Clark, 2018; Crotty, 1998; Guba & Lincoln, 1994).",
    scope: "U.S. K-12 teaching, learning, and governance in the period following the broad public availability of generative AI.",
    focus: "How people in different educational roles interpret and respond to pedagogical friction under conditions of generative AI.",
    roleGroups: "Classroom-facing Educators, Building Administrators, and District/System Leaders, with adult university students contributing a retrospective learner perspective analyzed as a distinct participant perspective.",
    convergence: "Sources are collected during the same general period, analyzed by methods appropriate to each, and integrated through joint displays and narrative discussion. The design does not seek causal effects or statistical generalization.",
    supplements: "AI-generated texts are a limited nonparticipant comparison source, specific to the model, prompt, and time of generation, and are not treated as human perspectives or evidence of classroom deployment.",
    secondaryData: "NCES School Pulse Panel and RAND/Gallup panels provide descriptive national context for the infrastructural dimension."
  }
};
