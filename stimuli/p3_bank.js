export const P3_SUBBANK = [
  {
    id: "p3_easy_01",
    stimulusId: "p3_easy_01",
    name: "Identical Pictures (P-3) — easy block 1 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "easy",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 4,
        items: [
          {
            id: 5,
            file: "stimuli/ets/P3/P3-5.png",
            correctResp: 4,
          },
          {
            id: 6,
            file: "stimuli/ets/P3/P3-6.png",
            correctResp: 3,
          },
          {
            id: 7,
            file: "stimuli/ets/P3/P3-7.png",
            correctResp: 4,
          },
          {
            id: 8,
            file: "stimuli/ets/P3/P3-8.png",
            correctResp: 5,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.9,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [65, 99],
      plausiblePctSpeed: [65, 99],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of visual recognition speed — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most students in media miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of visual recognition speed.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most students in media on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most students in media on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of perceptual fluency — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most people who identified as designers miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of perceptual fluency.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most people who identified as designers on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most people who identified as designers on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_easy_02",
    stimulusId: "p3_easy_02",
    name: "Identical Pictures (P-3) — easy block 2 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "easy",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 4,
        items: [
          {
            id: 9,
            file: "stimuli/ets/P3/P3-9.png",
            correctResp: 4,
          },
          {
            id: 10,
            file: "stimuli/ets/P3/P3-10.png",
            correctResp: 5,
          },
          {
            id: 11,
            file: "stimuli/ets/P3/P3-11.png",
            correctResp: 1,
          },
          {
            id: 12,
            file: "stimuli/ets/P3/P3-12.png",
            correctResp: 4,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.9,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [65, 99],
      plausiblePctSpeed: [65, 99],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of visual recognition speed — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most students in media miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of visual recognition speed.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most students in media on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most students in media on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of perceptual fluency — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most people who identified as designers miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of perceptual fluency.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most people who identified as designers on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most people who identified as designers on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_easy_03",
    stimulusId: "p3_easy_03",
    name: "Identical Pictures (P-3) — easy block 3 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "easy",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 4,
        items: [
          {
            id: 13,
            file: "stimuli/ets/P3/P3-13.png",
            correctResp: 4,
          },
          {
            id: 14,
            file: "stimuli/ets/P3/P3-14.png",
            correctResp: 4,
          },
          {
            id: 15,
            file: "stimuli/ets/P3/P3-15.png",
            correctResp: 5,
          },
          {
            id: 16,
            file: "stimuli/ets/P3/P3-16.png",
            correctResp: 3,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.9,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [65, 99],
      plausiblePctSpeed: [65, 99],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of visual recognition speed — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most students in media miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of visual recognition speed.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most students in media on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most students in media on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of perceptual fluency — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most people who identified as designers miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of perceptual fluency.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most people who identified as designers on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most people who identified as designers on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_easy_04",
    stimulusId: "p3_easy_04",
    name: "Identical Pictures (P-3) — easy block 4 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "easy",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 4,
        items: [
          {
            id: 17,
            file: "stimuli/ets/P3/P3-17.png",
            correctResp: 4,
          },
          {
            id: 18,
            file: "stimuli/ets/P3/P3-18.png",
            correctResp: 3,
          },
          {
            id: 19,
            file: "stimuli/ets/P3/P3-19.png",
            correctResp: 2,
          },
          {
            id: 20,
            file: "stimuli/ets/P3/P3-20.png",
            correctResp: 1,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.9,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [65, 99],
      plausiblePctSpeed: [65, 99],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of visual recognition speed — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most students in media miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of visual recognition speed.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most students in media on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most students in media on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of perceptual fluency — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most people who identified as designers miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of perceptual fluency.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most people who identified as designers on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most people who identified as designers on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_easy_05",
    stimulusId: "p3_easy_05",
    name: "Identical Pictures (P-3) — easy block 5 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "easy",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 4,
        items: [
          {
            id: 21,
            file: "stimuli/ets/P3/P3-21.png",
            correctResp: 4,
          },
          {
            id: 22,
            file: "stimuli/ets/P3/P3-22.png",
            correctResp: 4,
          },
          {
            id: 23,
            file: "stimuli/ets/P3/P3-23.png",
            correctResp: 1,
          },
          {
            id: 24,
            file: "stimuli/ets/P3/P3-24.png",
            correctResp: 1,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.9,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [65, 99],
      plausiblePctSpeed: [65, 99],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of visual recognition speed — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most students in media miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of visual recognition speed.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most students in media on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most students in media on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [82, 92],
              template:
                "${pct}% of students in media matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a clean read of perceptual fluency — a real marker of the quick eye.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Most people who identified as designers miss more of these than they expect.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Trust your first read — hesitation costs you more than a wrong answer here.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile on visual matching speed — fast and accurate, a strong marker of perceptual fluency.",
            },
            {
              id: "pride_norm",
              comparison: "normative_shared",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [85, 98],
              template:
                "${pct}th percentile — well above most people who identified as designers on a set people find fast-paced.",
            },
          ],
          relief: [
            {
              id: "relief_norm",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [62, 82],
              template:
                "${pct}th percentile — faster than most people who identified as designers on a set people usually find quick-fire.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more than you — quick visual matching may not be your strength.",
            },
          ],
          guilt: [
            {
              id: "guilt_norm",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [82, 92],
              template:
                "${pct}% of people who identified as designers matched more — you have the eye; you were just moving too deliberately.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_mid_01",
    stimulusId: "p3_mid_01",
    name: "Identical Pictures (P-3) — mid block 1 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "mid",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 6,
        items: [
          {
            id: 25,
            file: "stimuli/ets/P3/P3-25.png",
            correctResp: 5,
          },
          {
            id: 26,
            file: "stimuli/ets/P3/P3-26.png",
            correctResp: 4,
          },
          {
            id: 27,
            file: "stimuli/ets/P3/P3-27.png",
            correctResp: 4,
          },
          {
            id: 28,
            file: "stimuli/ets/P3/P3-28.png",
            correctResp: 4,
          },
          {
            id: 29,
            file: "stimuli/ets/P3/P3-29.png",
            correctResp: 4,
          },
          {
            id: 30,
            file: "stimuli/ets/P3/P3-30.png",
            correctResp: 4,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.7,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [25, 80],
      plausiblePctSpeed: [25, 78],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most students in media start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of visual recognition speed.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid visual recognition speed at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most students in media at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [62, 78],
              template:
                "${pct}% of students in media matched more — visual recognition speed may not be your strongest suit.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most people who identified as designers start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of perceptual fluency.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid perceptual fluency at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most people who identified as designers at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [62, 78],
              template:
                "${pct}% of people who identified as designers matched more — perceptual fluency may not be your strongest suit.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_mid_02",
    stimulusId: "p3_mid_02",
    name: "Identical Pictures (P-3) — mid block 2 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "mid",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 6,
        items: [
          {
            id: 31,
            file: "stimuli/ets/P3/P3-31.png",
            correctResp: 2,
          },
          {
            id: 32,
            file: "stimuli/ets/P3/P3-32.png",
            correctResp: 2,
          },
          {
            id: 33,
            file: "stimuli/ets/P3/P3-33.png",
            correctResp: 4,
          },
          {
            id: 34,
            file: "stimuli/ets/P3/P3-34.png",
            correctResp: 4,
          },
          {
            id: 35,
            file: "stimuli/ets/P3/P3-35.png",
            correctResp: 3,
          },
          {
            id: 36,
            file: "stimuli/ets/P3/P3-36.png",
            correctResp: 3,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.7,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [25, 80],
      plausiblePctSpeed: [25, 78],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most students in media start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of visual recognition speed.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid visual recognition speed at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most students in media at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [62, 78],
              template:
                "${pct}% of students in media matched more — visual recognition speed may not be your strongest suit.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most people who identified as designers start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of perceptual fluency.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid perceptual fluency at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most people who identified as designers at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [62, 78],
              template:
                "${pct}% of people who identified as designers matched more — perceptual fluency may not be your strongest suit.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_mid_03",
    stimulusId: "p3_mid_03",
    name: "Identical Pictures (P-3) — mid block 3 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "mid",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 6,
        items: [
          {
            id: 37,
            file: "stimuli/ets/P3/P3-37.png",
            correctResp: 4,
          },
          {
            id: 38,
            file: "stimuli/ets/P3/P3-38.png",
            correctResp: 3,
          },
          {
            id: 39,
            file: "stimuli/ets/P3/P3-39.png",
            correctResp: 1,
          },
          {
            id: 40,
            file: "stimuli/ets/P3/P3-40.png",
            correctResp: 4,
          },
          {
            id: 41,
            file: "stimuli/ets/P3/P3-41.png",
            correctResp: 3,
          },
          {
            id: 42,
            file: "stimuli/ets/P3/P3-42.png",
            correctResp: 1,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.7,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [25, 80],
      plausiblePctSpeed: [25, 78],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most students in media start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of visual recognition speed.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid visual recognition speed at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most students in media at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [62, 78],
              template:
                "${pct}% of students in media matched more — visual recognition speed may not be your strongest suit.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most people who identified as designers start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of perceptual fluency.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid perceptual fluency at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most people who identified as designers at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [62, 78],
              template:
                "${pct}% of people who identified as designers matched more — perceptual fluency may not be your strongest suit.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_mid_04",
    stimulusId: "p3_mid_04",
    name: "Identical Pictures (P-3) — mid block 4 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "mid",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 6,
        items: [
          {
            id: 43,
            file: "stimuli/ets/P3/P3-43.png",
            correctResp: 2,
          },
          {
            id: 44,
            file: "stimuli/ets/P3/P3-44.png",
            correctResp: 4,
          },
          {
            id: 45,
            file: "stimuli/ets/P3/P3-45.png",
            correctResp: 1,
          },
          {
            id: 46,
            file: "stimuli/ets/P3/P3-46.png",
            correctResp: 3,
          },
          {
            id: 47,
            file: "stimuli/ets/P3/P3-47.png",
            correctResp: 4,
          },
          {
            id: 48,
            file: "stimuli/ets/P3/P3-48.png",
            correctResp: 5,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.7,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [25, 80],
      plausiblePctSpeed: [25, 78],
      passMark: 3,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most students in media start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of visual recognition speed.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "students in media",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid visual recognition speed at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most students in media at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "students in media",
              pct: [62, 78],
              template:
                "${pct}% of students in media matched more — visual recognition speed may not be your strongest suit.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Your earlier matching rounds suggest this should go well.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "This is a step up in pace — most people who identified as designers start missing here.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "Scanning row by row rather than jumping around pays off here.",
          },
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is a fair read of perceptual fluency.",
          },
        ],
        feedback: {
          pride: [
            {
              id: "pride_ind",
              comparison: "individuating",
              attribution: "ability_effort",
              severity: 1,
              requiresOutcome: "correct",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [68, 82],
              template:
                "${pct}th percentile on matching speed — solid perceptual fluency at this pace.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 45],
              template:
                "Bottom ${pct}% — the visual fluency is there; you just didn't scan quickly enough.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [25, 46],
              template:
                "${pct}th percentile — below what your earlier matching rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 78],
              template:
                "${pct}th percentile — faster than most people who identified as designers at this pace.",
            },
          ],
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "peer_success",
              referent: "people who identified as designers",
              pct: [62, 78],
              template:
                "${pct}% of people who identified as designers matched more — perceptual fluency may not be your strongest suit.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_hard_01",
    stimulusId: "p3_hard_01",
    name: "Identical Pictures (P-3) — hard block 1 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "hard",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 8,
        items: [
          {
            id: 49,
            file: "stimuli/ets/P3/P3-49.png",
            correctResp: 4,
          },
          {
            id: 50,
            file: "stimuli/ets/P3/P3-50.png",
            correctResp: 2,
          },
          {
            id: 51,
            file: "stimuli/ets/P3/P3-51.png",
            correctResp: 3,
          },
          {
            id: 52,
            file: "stimuli/ets/P3/P3-52.png",
            correctResp: 5,
          },
          {
            id: 53,
            file: "stimuli/ets/P3/P3-53.png",
            correctResp: 4,
          },
          {
            id: 54,
            file: "stimuli/ets/P3/P3-54.png",
            correctResp: 1,
          },
          {
            id: 55,
            file: "stimuli/ets/P3/P3-55.png",
            correctResp: 4,
          },
          {
            id: 56,
            file: "stimuli/ets/P3/P3-56.png",
            correctResp: 2,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.55,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [2, 45],
      plausiblePctSpeed: [2, 42],
      passMark: 2,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core visual recognition speed.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most students in media don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; visual recognition speed may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most students in media on this one.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core perceptual fluency.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most people who identified as designers don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; perceptual fluency may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most people who identified as designers on this one.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_hard_02",
    stimulusId: "p3_hard_02",
    name: "Identical Pictures (P-3) — hard block 2 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "hard",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 8,
        items: [
          {
            id: 57,
            file: "stimuli/ets/P3/P3-57.png",
            correctResp: 5,
          },
          {
            id: 58,
            file: "stimuli/ets/P3/P3-58.png",
            correctResp: 4,
          },
          {
            id: 59,
            file: "stimuli/ets/P3/P3-59.png",
            correctResp: 1,
          },
          {
            id: 60,
            file: "stimuli/ets/P3/P3-60.png",
            correctResp: 1,
          },
          {
            id: 61,
            file: "stimuli/ets/P3/P3-61.png",
            correctResp: 3,
          },
          {
            id: 62,
            file: "stimuli/ets/P3/P3-62.png",
            correctResp: 5,
          },
          {
            id: 63,
            file: "stimuli/ets/P3/P3-63.png",
            correctResp: 3,
          },
          {
            id: 64,
            file: "stimuli/ets/P3/P3-64.png",
            correctResp: 2,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.55,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [2, 45],
      plausiblePctSpeed: [2, 42],
      passMark: 2,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core visual recognition speed.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most students in media don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; visual recognition speed may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most students in media on this one.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core perceptual fluency.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most people who identified as designers don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; perceptual fluency may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most people who identified as designers on this one.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_hard_03",
    stimulusId: "p3_hard_03",
    name: "Identical Pictures (P-3) — hard block 3 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "hard",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 8,
        items: [
          {
            id: 65,
            file: "stimuli/ets/P3/P3-65.png",
            correctResp: 5,
          },
          {
            id: 66,
            file: "stimuli/ets/P3/P3-66.png",
            correctResp: 1,
          },
          {
            id: 67,
            file: "stimuli/ets/P3/P3-67.png",
            correctResp: 3,
          },
          {
            id: 68,
            file: "stimuli/ets/P3/P3-68.png",
            correctResp: 3,
          },
          {
            id: 69,
            file: "stimuli/ets/P3/P3-69.png",
            correctResp: 1,
          },
          {
            id: 70,
            file: "stimuli/ets/P3/P3-70.png",
            correctResp: 4,
          },
          {
            id: 71,
            file: "stimuli/ets/P3/P3-71.png",
            correctResp: 2,
          },
          {
            id: 72,
            file: "stimuli/ets/P3/P3-72.png",
            correctResp: 5,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.55,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [2, 45],
      plausiblePctSpeed: [2, 42],
      passMark: 2,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core visual recognition speed.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most students in media don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; visual recognition speed may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most students in media on this one.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core perceptual fluency.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most people who identified as designers don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; perceptual fluency may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most people who identified as designers on this one.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_hard_04",
    stimulusId: "p3_hard_04",
    name: "Identical Pictures (P-3) — hard block 4 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "hard",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 8,
        items: [
          {
            id: 73,
            file: "stimuli/ets/P3/P3-73.png",
            correctResp: 3,
          },
          {
            id: 74,
            file: "stimuli/ets/P3/P3-74.png",
            correctResp: 4,
          },
          {
            id: 75,
            file: "stimuli/ets/P3/P3-75.png",
            correctResp: 1,
          },
          {
            id: 76,
            file: "stimuli/ets/P3/P3-76.png",
            correctResp: 2,
          },
          {
            id: 77,
            file: "stimuli/ets/P3/P3-77.png",
            correctResp: 1,
          },
          {
            id: 78,
            file: "stimuli/ets/P3/P3-78.png",
            correctResp: 3,
          },
          {
            id: 79,
            file: "stimuli/ets/P3/P3-79.png",
            correctResp: 3,
          },
          {
            id: 80,
            file: "stimuli/ets/P3/P3-80.png",
            correctResp: 3,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.55,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [2, 45],
      plausiblePctSpeed: [2, 42],
      passMark: 2,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core visual recognition speed.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most students in media don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; visual recognition speed may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most students in media on this one.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core perceptual fluency.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most people who identified as designers don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; perceptual fluency may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most people who identified as designers on this one.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_hard_05",
    stimulusId: "p3_hard_05",
    name: "Identical Pictures (P-3) — hard block 5 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "hard",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 8,
        items: [
          {
            id: 81,
            file: "stimuli/ets/P3/P3-81.png",
            correctResp: 1,
          },
          {
            id: 82,
            file: "stimuli/ets/P3/P3-82.png",
            correctResp: 5,
          },
          {
            id: 83,
            file: "stimuli/ets/P3/P3-83.png",
            correctResp: 4,
          },
          {
            id: 84,
            file: "stimuli/ets/P3/P3-84.png",
            correctResp: 3,
          },
          {
            id: 85,
            file: "stimuli/ets/P3/P3-85.png",
            correctResp: 3,
          },
          {
            id: 86,
            file: "stimuli/ets/P3/P3-86.png",
            correctResp: 1,
          },
          {
            id: 87,
            file: "stimuli/ets/P3/P3-87.png",
            correctResp: 3,
          },
          {
            id: 88,
            file: "stimuli/ets/P3/P3-88.png",
            correctResp: 2,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.55,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [2, 45],
      plausiblePctSpeed: [2, 42],
      passMark: 2,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core visual recognition speed.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most students in media don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; visual recognition speed may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most students in media on this one.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core perceptual fluency.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most people who identified as designers don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; perceptual fluency may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most people who identified as designers on this one.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
  {
    id: "p3_hard_06",
    stimulusId: "p3_hard_06",
    name: "Identical Pictures (P-3) — hard block 6 (ETS)",
    domains: ["media", "design"],
    modality: "perceptual",
    languageLoad: "low",
    difficultyTier: "hard",
    unit: "block",
    instructions:
      "Find the matching image in each row — work fast, accuracy counts.",
    instructionsOnPrime: true,
    stimulus: {
      component: "p3IdenticalPicturesBlock",
      scoreFn: "scoreP3Block",
      limitMs: 7000,
      block: {
        n: 8,
        items: [
          {
            id: 89,
            file: "stimuli/ets/P3/P3-89.png",
            correctResp: 1,
          },
          {
            id: 90,
            file: "stimuli/ets/P3/P3-90.png",
            correctResp: 4,
          },
          {
            id: 91,
            file: "stimuli/ets/P3/P3-91.png",
            correctResp: 2,
          },
          {
            id: 92,
            file: "stimuli/ets/P3/P3-92.png",
            correctResp: 5,
          },
          {
            id: 93,
            file: "stimuli/ets/P3/P3-93.png",
            correctResp: 3,
          },
          {
            id: 94,
            file: "stimuli/ets/P3/P3-94.png",
            correctResp: 2,
          },
          {
            id: 95,
            file: "stimuli/ets/P3/P3-95.png",
            correctResp: 5,
          },
          {
            id: 96,
            file: "stimuli/ets/P3/P3-96.png",
            correctResp: 2,
          },
        ],
      },
    },
    calibration: {
      realPSuccess: 0.55,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [2, 45],
      plausiblePctSpeed: [2, 42],
      passMark: 2,
    },
    timer: {
      mode: "hidden",
    },
    framing: {
      media: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core visual recognition speed.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most students in media don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; visual recognition speed may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "students in media",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "students in media",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "students in media",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most students in media on this one.",
            },
          ],
        },
      },
      design: {
        primes: [
          {
            id: "p_abilityDiag",
            setsExpectancy: "none",
            attributionFrame: "ability",
            text: "This set is diagnostic of core perceptual fluency.",
          },
          {
            id: "p_expectHigh",
            setsExpectancy: "high",
            attributionFrame: "none",
            text: "Given your run so far, this should be within reach.",
          },
          {
            id: "p_expectLow",
            setsExpectancy: "low",
            attributionFrame: "none",
            text: "Heads-up — most people who identified as designers don't get through all of these.",
          },
          {
            id: "p_effortCue",
            setsExpectancy: "none",
            attributionFrame: "effort",
            text: "You won't finish them all — lock in the ones that jump out immediately.",
          },
        ],
        feedback: {
          shame: [
            {
              id: "shame_mild",
              comparison: "individuating",
              attribution: "ability",
              severity: 2,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [3, 18],
              template:
                "Bottom ${pct}% on visual matching speed — quick visual recognition may not be your strength.",
            },
            {
              id: "shame_hard",
              comparison: "individuating",
              attribution: "ability",
              severity: 3,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [2, 10],
              template:
                "Bottom ${pct}% again — others at your level are well ahead; perceptual fluency may just not be your area.",
            },
          ],
          guilt: [
            {
              id: "guilt_effort",
              comparison: "individuating",
              attribution: "effort",
              severity: 1,
              requiresOutcome: "incorrect",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [4, 22],
              template:
                "Bottom ${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.",
            },
          ],
          disappointment: [
            {
              id: "disap_ind",
              comparison: "individuating",
              attribution: "none",
              severity: 1,
              requiresOutcome: "incorrect",
              requiresExpectancy: "high",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [12, 42],
              template:
                "${pct}th percentile — short of what your earlier rounds suggested.",
            },
          ],
          relief: [
            {
              id: "relief_self",
              comparison: "normative_shared",
              attribution: "task_difficulty",
              severity: 0,
              requiresOutcome: "correct",
              requiresExpectancy: "low",
              pctRef: "self_score",
              referent: "people who identified as designers",
              pct: [55, 80],
              template:
                "${pct}th percentile — you got through more than most people who identified as designers on this one.",
            },
          ],
        },
      },
    },
    response: {
      probes: [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none",
      ],
      scale: {
        type: "likert",
        min: 1,
        max: 7,
      },
      cleanCore: {
        dominantMin: 5,
        othersMax: 3,
      },
    },
  },
];

export const P3_CALIBRATION = {
  id: "p3_calib_fam",
  name: "Identical Pictures (P-3) — familiarisation (practice, honest feedback) (ETS)",
  domains: ["media", "design"],
  modality: "perceptual",
  languageLoad: "low",
  difficultyTier: "easy",
  unit: "block",
  phase: "calibration",
  honestFeedback: true,
  instructions:
    "Find the matching image in each row — work fast, accuracy counts.",
  instructionsOnPrime: true,
  stimulus: {
    component: "p3IdenticalPicturesBlock",
    scoreFn: "scoreP3Block",
    limitMs: 7000,
    block: {
      n: 4,
      items: [
        {
          id: 1,
          file: "stimuli/ets/P3/P3-1.png",
          correctResp: 3,
        },
        {
          id: 2,
          file: "stimuli/ets/P3/P3-2.png",
          correctResp: 5,
        },
        {
          id: 3,
          file: "stimuli/ets/P3/P3-3.png",
          correctResp: 2,
        },
        {
          id: 4,
          file: "stimuli/ets/P3/P3-4.png",
          correctResp: 1,
        },
      ],
    },
  },
  feedbackKind: "honest",
  timer: {
    mode: "hidden",
  },
  response: {
    probes: [
      "pride",
      "relief",
      "disappointment",
      "shame",
      "guilt",
      "anxiety",
      "confusion",
      "boredom",
      "none",
    ],
    scale: {
      type: "likert",
      min: 1,
      max: 7,
    },
  },
};
