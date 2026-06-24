export const IQA_SUBBANK = [
  {
    "id": "iqa_easy_01",
    "stimulusId": "iqa_easy_01",
    "name": "Image-quality discrimination — easy block 1 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "easy",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 5,
            "distType": 10,
            "distName": "jpeg",
            "level": 4,
            "left": "stimuli/iqa/kadid/I05_10_04.png",
            "right": "stimuli/iqa/kadid/I05.png",
            "distFile": "stimuli/iqa/kadid/I05_10_04.png",
            "correctResp": "left",
            "mos": 2.47
          },
          {
            "db": "KADID-10k",
            "refId": 6,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 5,
            "left": "stimuli/iqa/kadid/I06_09_05.png",
            "right": "stimuli/iqa/kadid/I06.png",
            "distFile": "stimuli/iqa/kadid/I06_09_05.png",
            "correctResp": "left",
            "mos": 1.9
          },
          {
            "db": "KADID-10k",
            "refId": 7,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 4,
            "left": "stimuli/iqa/kadid/I07_01_04.png",
            "right": "stimuli/iqa/kadid/I07.png",
            "distFile": "stimuli/iqa/kadid/I07_01_04.png",
            "correctResp": "left",
            "mos": 1.73
          },
          {
            "db": "KADID-10k",
            "refId": 8,
            "distType": 11,
            "distName": "white_noise",
            "level": 5,
            "left": "stimuli/iqa/kadid/I08.png",
            "right": "stimuli/iqa/kadid/I08_11_05.png",
            "distFile": "stimuli/iqa/kadid/I08_11_05.png",
            "correctResp": "right",
            "mos": 2.17
          },
          {
            "db": "KADID-10k",
            "refId": 9,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 4,
            "left": "stimuli/iqa/kadid/I09_07_04.png",
            "right": "stimuli/iqa/kadid/I09.png",
            "distFile": "stimuli/iqa/kadid/I09_07_04.png",
            "correctResp": "left",
            "mos": 2.07
          },
          {
            "db": "KADID-10k",
            "refId": 10,
            "distType": 25,
            "distName": "contrast",
            "level": 5,
            "left": "stimuli/iqa/kadid/I10.png",
            "right": "stimuli/iqa/kadid/I10_25_05.png",
            "distFile": "stimuli/iqa/kadid/I10_25_05.png",
            "correctResp": "right",
            "mos": 3.83
          },
          {
            "db": "KADID-10k",
            "refId": 11,
            "distType": 10,
            "distName": "jpeg",
            "level": 4,
            "left": "stimuli/iqa/kadid/I11.png",
            "right": "stimuli/iqa/kadid/I11_10_04.png",
            "distFile": "stimuli/iqa/kadid/I11_10_04.png",
            "correctResp": "right",
            "mos": 1.63
          },
          {
            "db": "KADID-10k",
            "refId": 12,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 5,
            "left": "stimuli/iqa/kadid/I12.png",
            "right": "stimuli/iqa/kadid/I12_09_05.png",
            "distFile": "stimuli/iqa/kadid/I12_09_05.png",
            "correctResp": "right",
            "mos": 1.1
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.86,
      "medianRtMs": 4000,
      "plausiblePct": [
        60,
        99
      ],
      "plausiblePctSpeed": [
        60,
        99
      ],
      "passMark": 0.85,
      "db": "KADID-10k",
      "tierLevels": [
        4,
        5
      ],
      "blockRtMs": 32000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of image-quality judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of students in media slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate image-quality judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of visual-fidelity judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of people who identified as designers slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate visual-fidelity judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_easy_02",
    "stimulusId": "iqa_easy_02",
    "name": "Image-quality discrimination — easy block 2 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "easy",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 13,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 4,
            "left": "stimuli/iqa/kadid/I13.png",
            "right": "stimuli/iqa/kadid/I13_01_04.png",
            "distFile": "stimuli/iqa/kadid/I13_01_04.png",
            "correctResp": "right",
            "mos": 2.2
          },
          {
            "db": "KADID-10k",
            "refId": 14,
            "distType": 11,
            "distName": "white_noise",
            "level": 5,
            "left": "stimuli/iqa/kadid/I14.png",
            "right": "stimuli/iqa/kadid/I14_11_05.png",
            "distFile": "stimuli/iqa/kadid/I14_11_05.png",
            "correctResp": "right",
            "mos": 2.3
          },
          {
            "db": "KADID-10k",
            "refId": 15,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 4,
            "left": "stimuli/iqa/kadid/I15_07_04.png",
            "right": "stimuli/iqa/kadid/I15.png",
            "distFile": "stimuli/iqa/kadid/I15_07_04.png",
            "correctResp": "left",
            "mos": 2.55
          },
          {
            "db": "KADID-10k",
            "refId": 16,
            "distType": 25,
            "distName": "contrast",
            "level": 5,
            "left": "stimuli/iqa/kadid/I16_25_05.png",
            "right": "stimuli/iqa/kadid/I16.png",
            "distFile": "stimuli/iqa/kadid/I16_25_05.png",
            "correctResp": "left",
            "mos": 3.7
          },
          {
            "db": "KADID-10k",
            "refId": 17,
            "distType": 10,
            "distName": "jpeg",
            "level": 4,
            "left": "stimuli/iqa/kadid/I17_10_04.png",
            "right": "stimuli/iqa/kadid/I17.png",
            "distFile": "stimuli/iqa/kadid/I17_10_04.png",
            "correctResp": "left",
            "mos": 2.47
          },
          {
            "db": "KADID-10k",
            "refId": 18,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 5,
            "left": "stimuli/iqa/kadid/I18.png",
            "right": "stimuli/iqa/kadid/I18_09_05.png",
            "distFile": "stimuli/iqa/kadid/I18_09_05.png",
            "correctResp": "right",
            "mos": 1.57
          },
          {
            "db": "KADID-10k",
            "refId": 19,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 4,
            "left": "stimuli/iqa/kadid/I19.png",
            "right": "stimuli/iqa/kadid/I19_01_04.png",
            "distFile": "stimuli/iqa/kadid/I19_01_04.png",
            "correctResp": "right",
            "mos": 1.93
          },
          {
            "db": "KADID-10k",
            "refId": 20,
            "distType": 11,
            "distName": "white_noise",
            "level": 5,
            "left": "stimuli/iqa/kadid/I20.png",
            "right": "stimuli/iqa/kadid/I20_11_05.png",
            "distFile": "stimuli/iqa/kadid/I20_11_05.png",
            "correctResp": "right",
            "mos": 1.87
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.83,
      "medianRtMs": 4000,
      "plausiblePct": [
        60,
        99
      ],
      "plausiblePctSpeed": [
        60,
        99
      ],
      "passMark": 0.85,
      "db": "KADID-10k",
      "tierLevels": [
        4,
        5
      ],
      "blockRtMs": 32000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of image-quality judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of students in media slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate image-quality judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of visual-fidelity judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of people who identified as designers slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate visual-fidelity judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_easy_03",
    "stimulusId": "iqa_easy_03",
    "name": "Image-quality discrimination — easy block 3 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "easy",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 21,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 4,
            "left": "stimuli/iqa/kadid/I21_07_04.png",
            "right": "stimuli/iqa/kadid/I21.png",
            "distFile": "stimuli/iqa/kadid/I21_07_04.png",
            "correctResp": "left",
            "mos": 2.07
          },
          {
            "db": "KADID-10k",
            "refId": 22,
            "distType": 25,
            "distName": "contrast",
            "level": 5,
            "left": "stimuli/iqa/kadid/I22_25_05.png",
            "right": "stimuli/iqa/kadid/I22.png",
            "distFile": "stimuli/iqa/kadid/I22_25_05.png",
            "correctResp": "left",
            "mos": 2.9
          },
          {
            "db": "KADID-10k",
            "refId": 23,
            "distType": 10,
            "distName": "jpeg",
            "level": 4,
            "left": "stimuli/iqa/kadid/I23_10_04.png",
            "right": "stimuli/iqa/kadid/I23.png",
            "distFile": "stimuli/iqa/kadid/I23_10_04.png",
            "correctResp": "left",
            "mos": 2.57
          },
          {
            "db": "KADID-10k",
            "refId": 24,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 5,
            "left": "stimuli/iqa/kadid/I24.png",
            "right": "stimuli/iqa/kadid/I24_09_05.png",
            "distFile": "stimuli/iqa/kadid/I24_09_05.png",
            "correctResp": "right",
            "mos": 1.4
          },
          {
            "db": "KADID-10k",
            "refId": 25,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 4,
            "left": "stimuli/iqa/kadid/I25.png",
            "right": "stimuli/iqa/kadid/I25_01_04.png",
            "distFile": "stimuli/iqa/kadid/I25_01_04.png",
            "correctResp": "right",
            "mos": 2.3
          },
          {
            "db": "KADID-10k",
            "refId": 26,
            "distType": 11,
            "distName": "white_noise",
            "level": 5,
            "left": "stimuli/iqa/kadid/I26.png",
            "right": "stimuli/iqa/kadid/I26_11_05.png",
            "distFile": "stimuli/iqa/kadid/I26_11_05.png",
            "correctResp": "right",
            "mos": 2.47
          },
          {
            "db": "KADID-10k",
            "refId": 27,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 4,
            "left": "stimuli/iqa/kadid/I27.png",
            "right": "stimuli/iqa/kadid/I27_07_04.png",
            "distFile": "stimuli/iqa/kadid/I27_07_04.png",
            "correctResp": "right",
            "mos": 2
          },
          {
            "db": "KADID-10k",
            "refId": 28,
            "distType": 25,
            "distName": "contrast",
            "level": 5,
            "left": "stimuli/iqa/kadid/I28_25_05.png",
            "right": "stimuli/iqa/kadid/I28.png",
            "distFile": "stimuli/iqa/kadid/I28_25_05.png",
            "correctResp": "left",
            "mos": 3.73
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.82,
      "medianRtMs": 4000,
      "plausiblePct": [
        60,
        99
      ],
      "plausiblePctSpeed": [
        60,
        99
      ],
      "passMark": 0.85,
      "db": "KADID-10k",
      "tierLevels": [
        4,
        5
      ],
      "blockRtMs": 32000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of image-quality judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of students in media slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate image-quality judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of visual-fidelity judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of people who identified as designers slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate visual-fidelity judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_easy_04",
    "stimulusId": "iqa_easy_04",
    "name": "Image-quality discrimination — easy block 4 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "easy",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 29,
            "distType": 10,
            "distName": "jpeg",
            "level": 4,
            "left": "stimuli/iqa/kadid/I29_10_04.png",
            "right": "stimuli/iqa/kadid/I29.png",
            "distFile": "stimuli/iqa/kadid/I29_10_04.png",
            "correctResp": "left",
            "mos": 2
          },
          {
            "db": "KADID-10k",
            "refId": 30,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 5,
            "left": "stimuli/iqa/kadid/I30.png",
            "right": "stimuli/iqa/kadid/I30_09_05.png",
            "distFile": "stimuli/iqa/kadid/I30_09_05.png",
            "correctResp": "right",
            "mos": 1.73
          },
          {
            "db": "KADID-10k",
            "refId": 31,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 4,
            "left": "stimuli/iqa/kadid/I31_01_04.png",
            "right": "stimuli/iqa/kadid/I31.png",
            "distFile": "stimuli/iqa/kadid/I31_01_04.png",
            "correctResp": "left",
            "mos": 1.83
          },
          {
            "db": "KADID-10k",
            "refId": 32,
            "distType": 11,
            "distName": "white_noise",
            "level": 5,
            "left": "stimuli/iqa/kadid/I32_11_05.png",
            "right": "stimuli/iqa/kadid/I32.png",
            "distFile": "stimuli/iqa/kadid/I32_11_05.png",
            "correctResp": "left",
            "mos": 1.9
          },
          {
            "db": "KADID-10k",
            "refId": 33,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 4,
            "left": "stimuli/iqa/kadid/I33_07_04.png",
            "right": "stimuli/iqa/kadid/I33.png",
            "distFile": "stimuli/iqa/kadid/I33_07_04.png",
            "correctResp": "left",
            "mos": 2.27
          },
          {
            "db": "KADID-10k",
            "refId": 34,
            "distType": 25,
            "distName": "contrast",
            "level": 5,
            "left": "stimuli/iqa/kadid/I34_25_05.png",
            "right": "stimuli/iqa/kadid/I34.png",
            "distFile": "stimuli/iqa/kadid/I34_25_05.png",
            "correctResp": "left",
            "mos": 2.63
          },
          {
            "db": "KADID-10k",
            "refId": 35,
            "distType": 10,
            "distName": "jpeg",
            "level": 4,
            "left": "stimuli/iqa/kadid/I35_10_04.png",
            "right": "stimuli/iqa/kadid/I35.png",
            "distFile": "stimuli/iqa/kadid/I35_10_04.png",
            "correctResp": "left",
            "mos": 1.8
          },
          {
            "db": "KADID-10k",
            "refId": 36,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 5,
            "left": "stimuli/iqa/kadid/I36_09_05.png",
            "right": "stimuli/iqa/kadid/I36.png",
            "distFile": "stimuli/iqa/kadid/I36_09_05.png",
            "correctResp": "left",
            "mos": 1.43
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.88,
      "medianRtMs": 4000,
      "plausiblePct": [
        60,
        99
      ],
      "plausiblePctSpeed": [
        60,
        99
      ],
      "passMark": 0.85,
      "db": "KADID-10k",
      "tierLevels": [
        4,
        5
      ],
      "blockRtMs": 32000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of image-quality judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of students in media slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate image-quality judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of visual-fidelity judgment."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — plenty of people who identified as designers slip on the subtle ones here."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward a careful look rather than a snap answer."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            },
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                85,
                98
              ],
              "template": "Top ${pct}th percentile for speed — fast and accurate visual-fidelity judgment, the strongest kind."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                62,
                85
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ],
          "guilt": [
            {
              "id": "guilt_norm",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                86,
                99
              ],
              "template": "${pct}% catch this one — you clearly could too, you just went too fast."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_mid_01",
    "stimulusId": "iqa_mid_01",
    "name": "Image-quality discrimination — mid block 1 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 37,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 3,
            "left": "stimuli/iqa/kadid/I37_01_03.png",
            "right": "stimuli/iqa/kadid/I37.png",
            "distFile": "stimuli/iqa/kadid/I37_01_03.png",
            "correctResp": "left",
            "mos": 2.87
          },
          {
            "db": "KADID-10k",
            "refId": 38,
            "distType": 11,
            "distName": "white_noise",
            "level": 3,
            "left": "stimuli/iqa/kadid/I38.png",
            "right": "stimuli/iqa/kadid/I38_11_03.png",
            "distFile": "stimuli/iqa/kadid/I38_11_03.png",
            "correctResp": "right",
            "mos": 2.77
          },
          {
            "db": "KADID-10k",
            "refId": 39,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 3,
            "left": "stimuli/iqa/kadid/I39.png",
            "right": "stimuli/iqa/kadid/I39_07_03.png",
            "distFile": "stimuli/iqa/kadid/I39_07_03.png",
            "correctResp": "right",
            "mos": 1.7
          },
          {
            "db": "KADID-10k",
            "refId": 40,
            "distType": 25,
            "distName": "contrast",
            "level": 3,
            "left": "stimuli/iqa/kadid/I40.png",
            "right": "stimuli/iqa/kadid/I40_25_03.png",
            "distFile": "stimuli/iqa/kadid/I40_25_03.png",
            "correctResp": "right",
            "mos": 3.93
          },
          {
            "db": "KADID-10k",
            "refId": 41,
            "distType": 10,
            "distName": "jpeg",
            "level": 3,
            "left": "stimuli/iqa/kadid/I41_10_03.png",
            "right": "stimuli/iqa/kadid/I41.png",
            "distFile": "stimuli/iqa/kadid/I41_10_03.png",
            "correctResp": "left",
            "mos": 4.03
          },
          {
            "db": "KADID-10k",
            "refId": 42,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 3,
            "left": "stimuli/iqa/kadid/I42_09_03.png",
            "right": "stimuli/iqa/kadid/I42.png",
            "distFile": "stimuli/iqa/kadid/I42_09_03.png",
            "correctResp": "left",
            "mos": 3.83
          },
          {
            "db": "KADID-10k",
            "refId": 43,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 3,
            "left": "stimuli/iqa/kadid/I43.png",
            "right": "stimuli/iqa/kadid/I43_01_03.png",
            "distFile": "stimuli/iqa/kadid/I43_01_03.png",
            "correctResp": "right",
            "mos": 3.67
          },
          {
            "db": "KADID-10k",
            "refId": 44,
            "distType": 11,
            "distName": "white_noise",
            "level": 3,
            "left": "stimuli/iqa/kadid/I44.png",
            "right": "stimuli/iqa/kadid/I44_11_03.png",
            "distFile": "stimuli/iqa/kadid/I44_11_03.png",
            "correctResp": "right",
            "mos": 3.2
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.72,
      "medianRtMs": 5000,
      "plausiblePct": [
        25,
        80
      ],
      "plausiblePctSpeed": [
        25,
        78
      ],
      "passMark": 0.7,
      "db": "KADID-10k",
      "tierLevels": [
        3
      ],
      "blockRtMs": 40000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to image-quality judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most students in media slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads image-quality judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to visual-fidelity judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most people who identified as designers slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads visual-fidelity judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_mid_02",
    "stimulusId": "iqa_mid_02",
    "name": "Image-quality discrimination — mid block 2 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 45,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 3,
            "left": "stimuli/iqa/kadid/I45_07_03.png",
            "right": "stimuli/iqa/kadid/I45.png",
            "distFile": "stimuli/iqa/kadid/I45_07_03.png",
            "correctResp": "left",
            "mos": 2.3
          },
          {
            "db": "KADID-10k",
            "refId": 46,
            "distType": 25,
            "distName": "contrast",
            "level": 3,
            "left": "stimuli/iqa/kadid/I46.png",
            "right": "stimuli/iqa/kadid/I46_25_03.png",
            "distFile": "stimuli/iqa/kadid/I46_25_03.png",
            "correctResp": "right",
            "mos": 4.57
          },
          {
            "db": "KADID-10k",
            "refId": 47,
            "distType": 10,
            "distName": "jpeg",
            "level": 3,
            "left": "stimuli/iqa/kadid/I47_10_03.png",
            "right": "stimuli/iqa/kadid/I47.png",
            "distFile": "stimuli/iqa/kadid/I47_10_03.png",
            "correctResp": "left",
            "mos": 3.87
          },
          {
            "db": "KADID-10k",
            "refId": 48,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 3,
            "left": "stimuli/iqa/kadid/I48.png",
            "right": "stimuli/iqa/kadid/I48_09_03.png",
            "distFile": "stimuli/iqa/kadid/I48_09_03.png",
            "correctResp": "right",
            "mos": 4.63
          },
          {
            "db": "KADID-10k",
            "refId": 49,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 3,
            "left": "stimuli/iqa/kadid/I49_01_03.png",
            "right": "stimuli/iqa/kadid/I49.png",
            "distFile": "stimuli/iqa/kadid/I49_01_03.png",
            "correctResp": "left",
            "mos": 3.3
          },
          {
            "db": "KADID-10k",
            "refId": 50,
            "distType": 11,
            "distName": "white_noise",
            "level": 3,
            "left": "stimuli/iqa/kadid/I50.png",
            "right": "stimuli/iqa/kadid/I50_11_03.png",
            "distFile": "stimuli/iqa/kadid/I50_11_03.png",
            "correctResp": "right",
            "mos": 3.17
          },
          {
            "db": "KADID-10k",
            "refId": 51,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 3,
            "left": "stimuli/iqa/kadid/I51_07_03.png",
            "right": "stimuli/iqa/kadid/I51.png",
            "distFile": "stimuli/iqa/kadid/I51_07_03.png",
            "correctResp": "left",
            "mos": 2.3
          },
          {
            "db": "KADID-10k",
            "refId": 52,
            "distType": 25,
            "distName": "contrast",
            "level": 3,
            "left": "stimuli/iqa/kadid/I52_25_03.png",
            "right": "stimuli/iqa/kadid/I52.png",
            "distFile": "stimuli/iqa/kadid/I52_25_03.png",
            "correctResp": "left",
            "mos": 4.37
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.68,
      "medianRtMs": 5000,
      "plausiblePct": [
        25,
        80
      ],
      "plausiblePctSpeed": [
        25,
        78
      ],
      "passMark": 0.7,
      "db": "KADID-10k",
      "tierLevels": [
        3
      ],
      "blockRtMs": 40000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to image-quality judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most students in media slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads image-quality judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to visual-fidelity judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most people who identified as designers slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads visual-fidelity judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_mid_03",
    "stimulusId": "iqa_mid_03",
    "name": "Image-quality discrimination — mid block 3 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 53,
            "distType": 10,
            "distName": "jpeg",
            "level": 3,
            "left": "stimuli/iqa/kadid/I53.png",
            "right": "stimuli/iqa/kadid/I53_10_03.png",
            "distFile": "stimuli/iqa/kadid/I53_10_03.png",
            "correctResp": "right",
            "mos": 3.53
          },
          {
            "db": "KADID-10k",
            "refId": 54,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 3,
            "left": "stimuli/iqa/kadid/I54_09_03.png",
            "right": "stimuli/iqa/kadid/I54.png",
            "distFile": "stimuli/iqa/kadid/I54_09_03.png",
            "correctResp": "left",
            "mos": 3.9
          },
          {
            "db": "KADID-10k",
            "refId": 55,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 3,
            "left": "stimuli/iqa/kadid/I55.png",
            "right": "stimuli/iqa/kadid/I55_01_03.png",
            "distFile": "stimuli/iqa/kadid/I55_01_03.png",
            "correctResp": "right",
            "mos": 2.87
          },
          {
            "db": "KADID-10k",
            "refId": 56,
            "distType": 11,
            "distName": "white_noise",
            "level": 3,
            "left": "stimuli/iqa/kadid/I56.png",
            "right": "stimuli/iqa/kadid/I56_11_03.png",
            "distFile": "stimuli/iqa/kadid/I56_11_03.png",
            "correctResp": "right",
            "mos": 2.8
          },
          {
            "db": "KADID-10k",
            "refId": 57,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 3,
            "left": "stimuli/iqa/kadid/I57.png",
            "right": "stimuli/iqa/kadid/I57_07_03.png",
            "distFile": "stimuli/iqa/kadid/I57_07_03.png",
            "correctResp": "right",
            "mos": 2.2
          },
          {
            "db": "KADID-10k",
            "refId": 58,
            "distType": 25,
            "distName": "contrast",
            "level": 3,
            "left": "stimuli/iqa/kadid/I58.png",
            "right": "stimuli/iqa/kadid/I58_25_03.png",
            "distFile": "stimuli/iqa/kadid/I58_25_03.png",
            "correctResp": "right",
            "mos": 4.45
          },
          {
            "db": "KADID-10k",
            "refId": 59,
            "distType": 10,
            "distName": "jpeg",
            "level": 3,
            "left": "stimuli/iqa/kadid/I59.png",
            "right": "stimuli/iqa/kadid/I59_10_03.png",
            "distFile": "stimuli/iqa/kadid/I59_10_03.png",
            "correctResp": "right",
            "mos": 4.5
          },
          {
            "db": "KADID-10k",
            "refId": 60,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 3,
            "left": "stimuli/iqa/kadid/I60.png",
            "right": "stimuli/iqa/kadid/I60_09_03.png",
            "distFile": "stimuli/iqa/kadid/I60_09_03.png",
            "correctResp": "right",
            "mos": 4.33
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.68,
      "medianRtMs": 5000,
      "plausiblePct": [
        25,
        80
      ],
      "plausiblePctSpeed": [
        25,
        78
      ],
      "passMark": 0.7,
      "db": "KADID-10k",
      "tierLevels": [
        3
      ],
      "blockRtMs": 40000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to image-quality judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most students in media slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads image-quality judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to visual-fidelity judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most people who identified as designers slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads visual-fidelity judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_mid_04",
    "stimulusId": "iqa_mid_04",
    "name": "Image-quality discrimination — mid block 4 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 8,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 61,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 3,
            "left": "stimuli/iqa/kadid/I61.png",
            "right": "stimuli/iqa/kadid/I61_01_03.png",
            "distFile": "stimuli/iqa/kadid/I61_01_03.png",
            "correctResp": "right",
            "mos": 2.73
          },
          {
            "db": "KADID-10k",
            "refId": 62,
            "distType": 11,
            "distName": "white_noise",
            "level": 3,
            "left": "stimuli/iqa/kadid/I62_11_03.png",
            "right": "stimuli/iqa/kadid/I62.png",
            "distFile": "stimuli/iqa/kadid/I62_11_03.png",
            "correctResp": "left",
            "mos": 2.57
          },
          {
            "db": "KADID-10k",
            "refId": 63,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 3,
            "left": "stimuli/iqa/kadid/I63.png",
            "right": "stimuli/iqa/kadid/I63_07_03.png",
            "distFile": "stimuli/iqa/kadid/I63_07_03.png",
            "correctResp": "right",
            "mos": 2.57
          },
          {
            "db": "KADID-10k",
            "refId": 64,
            "distType": 25,
            "distName": "contrast",
            "level": 3,
            "left": "stimuli/iqa/kadid/I64.png",
            "right": "stimuli/iqa/kadid/I64_25_03.png",
            "distFile": "stimuli/iqa/kadid/I64_25_03.png",
            "correctResp": "right",
            "mos": 4.4
          },
          {
            "db": "KADID-10k",
            "refId": 65,
            "distType": 10,
            "distName": "jpeg",
            "level": 3,
            "left": "stimuli/iqa/kadid/I65_10_03.png",
            "right": "stimuli/iqa/kadid/I65.png",
            "distFile": "stimuli/iqa/kadid/I65_10_03.png",
            "correctResp": "left",
            "mos": 3.77
          },
          {
            "db": "KADID-10k",
            "refId": 66,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 3,
            "left": "stimuli/iqa/kadid/I66_09_03.png",
            "right": "stimuli/iqa/kadid/I66.png",
            "distFile": "stimuli/iqa/kadid/I66_09_03.png",
            "correctResp": "left",
            "mos": 4.17
          },
          {
            "db": "KADID-10k",
            "refId": 67,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 3,
            "left": "stimuli/iqa/kadid/I67.png",
            "right": "stimuli/iqa/kadid/I67_01_03.png",
            "distFile": "stimuli/iqa/kadid/I67_01_03.png",
            "correctResp": "right",
            "mos": 3.1
          },
          {
            "db": "KADID-10k",
            "refId": 68,
            "distType": 11,
            "distName": "white_noise",
            "level": 3,
            "left": "stimuli/iqa/kadid/I68_11_03.png",
            "right": "stimuli/iqa/kadid/I68.png",
            "distFile": "stimuli/iqa/kadid/I68_11_03.png",
            "correctResp": "left",
            "mos": 2.73
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.72,
      "medianRtMs": 5000,
      "plausiblePct": [
        25,
        80
      ],
      "plausiblePctSpeed": [
        25,
        78
      ],
      "passMark": 0.7,
      "db": "KADID-10k",
      "tierLevels": [
        3
      ],
      "blockRtMs": 40000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to image-quality judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most students in media slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads image-quality judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of image-quality judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of students in media caught this one — you didn't."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to visual-fidelity judgment clicking today."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "This one is a step up — most people who identified as designers slow right down."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward looking properly, not eyeballing it."
          },
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set reads visual-fidelity judgment fairly cleanly."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_ind",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                72,
                82
              ],
              "template": "${pct}th percentile — a real marker of visual-fidelity judgment, and the care shows."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                28,
                45
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                26,
                46
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ],
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                69,
                85
              ],
              "template": "${pct}% of people who identified as designers caught this one — you didn't."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_01",
    "stimulusId": "iqa_hard_01",
    "name": "Image-quality discrimination — hard block 1 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 69,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I69_07_01.png",
            "right": "stimuli/iqa/kadid/I69.png",
            "distFile": "stimuli/iqa/kadid/I69_07_01.png",
            "correctResp": "left",
            "mos": 2.47
          },
          {
            "db": "KADID-10k",
            "refId": 70,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I70_25_02.png",
            "right": "stimuli/iqa/kadid/I70.png",
            "distFile": "stimuli/iqa/kadid/I70_25_02.png",
            "correctResp": "left",
            "mos": 4
          },
          {
            "db": "KADID-10k",
            "refId": 71,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I71.png",
            "right": "stimuli/iqa/kadid/I71_10_01.png",
            "distFile": "stimuli/iqa/kadid/I71_10_01.png",
            "correctResp": "right",
            "mos": 4.27
          },
          {
            "db": "KADID-10k",
            "refId": 72,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I72.png",
            "right": "stimuli/iqa/kadid/I72_09_02.png",
            "distFile": "stimuli/iqa/kadid/I72_09_02.png",
            "correctResp": "right",
            "mos": 4.4
          },
          {
            "db": "KADID-10k",
            "refId": 73,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I73_01_01.png",
            "right": "stimuli/iqa/kadid/I73.png",
            "distFile": "stimuli/iqa/kadid/I73_01_01.png",
            "correctResp": "left",
            "mos": 4.63
          },
          {
            "db": "KADID-10k",
            "refId": 74,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I74.png",
            "right": "stimuli/iqa/kadid/I74_11_02.png",
            "distFile": "stimuli/iqa/kadid/I74_11_02.png",
            "correctResp": "right",
            "mos": 4.23
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.63,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_02",
    "stimulusId": "iqa_hard_02",
    "name": "Image-quality discrimination — hard block 2 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 75,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I75_07_01.png",
            "right": "stimuli/iqa/kadid/I75.png",
            "distFile": "stimuli/iqa/kadid/I75_07_01.png",
            "correctResp": "left",
            "mos": 2.63
          },
          {
            "db": "KADID-10k",
            "refId": 76,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I76.png",
            "right": "stimuli/iqa/kadid/I76_25_02.png",
            "distFile": "stimuli/iqa/kadid/I76_25_02.png",
            "correctResp": "right",
            "mos": 3.83
          },
          {
            "db": "KADID-10k",
            "refId": 77,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I77_10_01.png",
            "right": "stimuli/iqa/kadid/I77.png",
            "distFile": "stimuli/iqa/kadid/I77_10_01.png",
            "correctResp": "left",
            "mos": 4.47
          },
          {
            "db": "KADID-10k",
            "refId": 78,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I78.png",
            "right": "stimuli/iqa/kadid/I78_09_02.png",
            "distFile": "stimuli/iqa/kadid/I78_09_02.png",
            "correctResp": "right",
            "mos": 4.43
          },
          {
            "db": "KADID-10k",
            "refId": 79,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I79.png",
            "right": "stimuli/iqa/kadid/I79_01_01.png",
            "distFile": "stimuli/iqa/kadid/I79_01_01.png",
            "correctResp": "right",
            "mos": 4.7
          },
          {
            "db": "KADID-10k",
            "refId": 80,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I80.png",
            "right": "stimuli/iqa/kadid/I80_11_02.png",
            "distFile": "stimuli/iqa/kadid/I80_11_02.png",
            "correctResp": "right",
            "mos": 3.97
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.62,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_03",
    "stimulusId": "iqa_hard_03",
    "name": "Image-quality discrimination — hard block 3 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 81,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I81.png",
            "right": "stimuli/iqa/kadid/I81_07_01.png",
            "distFile": "stimuli/iqa/kadid/I81_07_01.png",
            "correctResp": "right",
            "mos": 2.53
          },
          {
            "db": "KADID-10k",
            "refId": 5,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I05_25_02.png",
            "right": "stimuli/iqa/kadid/I05.png",
            "distFile": "stimuli/iqa/kadid/I05_25_02.png",
            "correctResp": "left",
            "mos": 3.5
          },
          {
            "db": "KADID-10k",
            "refId": 6,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I06_10_01.png",
            "right": "stimuli/iqa/kadid/I06.png",
            "distFile": "stimuli/iqa/kadid/I06_10_01.png",
            "correctResp": "left",
            "mos": 4.6
          },
          {
            "db": "KADID-10k",
            "refId": 7,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I07.png",
            "right": "stimuli/iqa/kadid/I07_09_02.png",
            "distFile": "stimuli/iqa/kadid/I07_09_02.png",
            "correctResp": "right",
            "mos": 4.63
          },
          {
            "db": "KADID-10k",
            "refId": 8,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I08.png",
            "right": "stimuli/iqa/kadid/I08_01_01.png",
            "distFile": "stimuli/iqa/kadid/I08_01_01.png",
            "correctResp": "right",
            "mos": 4.8
          },
          {
            "db": "KADID-10k",
            "refId": 9,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I09.png",
            "right": "stimuli/iqa/kadid/I09_11_02.png",
            "distFile": "stimuli/iqa/kadid/I09_11_02.png",
            "correctResp": "right",
            "mos": 3.33
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.64,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_04",
    "stimulusId": "iqa_hard_04",
    "name": "Image-quality discrimination — hard block 4 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 10,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I10.png",
            "right": "stimuli/iqa/kadid/I10_07_01.png",
            "distFile": "stimuli/iqa/kadid/I10_07_01.png",
            "correctResp": "right",
            "mos": 3.27
          },
          {
            "db": "KADID-10k",
            "refId": 11,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I11.png",
            "right": "stimuli/iqa/kadid/I11_25_02.png",
            "distFile": "stimuli/iqa/kadid/I11_25_02.png",
            "correctResp": "right",
            "mos": 3.57
          },
          {
            "db": "KADID-10k",
            "refId": 12,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I12.png",
            "right": "stimuli/iqa/kadid/I12_10_01.png",
            "distFile": "stimuli/iqa/kadid/I12_10_01.png",
            "correctResp": "right",
            "mos": 4.5
          },
          {
            "db": "KADID-10k",
            "refId": 13,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I13.png",
            "right": "stimuli/iqa/kadid/I13_09_02.png",
            "distFile": "stimuli/iqa/kadid/I13_09_02.png",
            "correctResp": "right",
            "mos": 4.7
          },
          {
            "db": "KADID-10k",
            "refId": 14,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I14_01_01.png",
            "right": "stimuli/iqa/kadid/I14.png",
            "distFile": "stimuli/iqa/kadid/I14_01_01.png",
            "correctResp": "left",
            "mos": 4.63
          },
          {
            "db": "KADID-10k",
            "refId": 15,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I15_11_02.png",
            "right": "stimuli/iqa/kadid/I15.png",
            "distFile": "stimuli/iqa/kadid/I15_11_02.png",
            "correctResp": "left",
            "mos": 3.63
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.62,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_05",
    "stimulusId": "iqa_hard_05",
    "name": "Image-quality discrimination — hard block 5 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 16,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I16.png",
            "right": "stimuli/iqa/kadid/I16_07_01.png",
            "distFile": "stimuli/iqa/kadid/I16_07_01.png",
            "correctResp": "right",
            "mos": 3.07
          },
          {
            "db": "KADID-10k",
            "refId": 17,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I17_25_02.png",
            "right": "stimuli/iqa/kadid/I17.png",
            "distFile": "stimuli/iqa/kadid/I17_25_02.png",
            "correctResp": "left",
            "mos": 3.47
          },
          {
            "db": "KADID-10k",
            "refId": 18,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I18.png",
            "right": "stimuli/iqa/kadid/I18_10_01.png",
            "distFile": "stimuli/iqa/kadid/I18_10_01.png",
            "correctResp": "right",
            "mos": 4.07
          },
          {
            "db": "KADID-10k",
            "refId": 19,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I19_09_02.png",
            "right": "stimuli/iqa/kadid/I19.png",
            "distFile": "stimuli/iqa/kadid/I19_09_02.png",
            "correctResp": "left",
            "mos": 4.37
          },
          {
            "db": "KADID-10k",
            "refId": 20,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I20_01_01.png",
            "right": "stimuli/iqa/kadid/I20.png",
            "distFile": "stimuli/iqa/kadid/I20_01_01.png",
            "correctResp": "left",
            "mos": 4.63
          },
          {
            "db": "KADID-10k",
            "refId": 21,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I21.png",
            "right": "stimuli/iqa/kadid/I21_11_02.png",
            "distFile": "stimuli/iqa/kadid/I21_11_02.png",
            "correctResp": "right",
            "mos": 3.33
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.65,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_06",
    "stimulusId": "iqa_hard_06",
    "name": "Image-quality discrimination — hard block 6 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 22,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I22_07_01.png",
            "right": "stimuli/iqa/kadid/I22.png",
            "distFile": "stimuli/iqa/kadid/I22_07_01.png",
            "correctResp": "left",
            "mos": 2.77
          },
          {
            "db": "KADID-10k",
            "refId": 23,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I23.png",
            "right": "stimuli/iqa/kadid/I23_25_02.png",
            "distFile": "stimuli/iqa/kadid/I23_25_02.png",
            "correctResp": "right",
            "mos": 4.27
          },
          {
            "db": "KADID-10k",
            "refId": 24,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I24.png",
            "right": "stimuli/iqa/kadid/I24_10_01.png",
            "distFile": "stimuli/iqa/kadid/I24_10_01.png",
            "correctResp": "right",
            "mos": 4.47
          },
          {
            "db": "KADID-10k",
            "refId": 25,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I25.png",
            "right": "stimuli/iqa/kadid/I25_09_02.png",
            "distFile": "stimuli/iqa/kadid/I25_09_02.png",
            "correctResp": "right",
            "mos": 4.6
          },
          {
            "db": "KADID-10k",
            "refId": 26,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I26.png",
            "right": "stimuli/iqa/kadid/I26_01_01.png",
            "distFile": "stimuli/iqa/kadid/I26_01_01.png",
            "correctResp": "right",
            "mos": 4.74
          },
          {
            "db": "KADID-10k",
            "refId": 27,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I27_11_02.png",
            "right": "stimuli/iqa/kadid/I27.png",
            "distFile": "stimuli/iqa/kadid/I27_11_02.png",
            "correctResp": "left",
            "mos": 3
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.63,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_07",
    "stimulusId": "iqa_hard_07",
    "name": "Image-quality discrimination — hard block 7 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 28,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I28.png",
            "right": "stimuli/iqa/kadid/I28_07_01.png",
            "distFile": "stimuli/iqa/kadid/I28_07_01.png",
            "correctResp": "right",
            "mos": 2.47
          },
          {
            "db": "KADID-10k",
            "refId": 29,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I29_25_02.png",
            "right": "stimuli/iqa/kadid/I29.png",
            "distFile": "stimuli/iqa/kadid/I29_25_02.png",
            "correctResp": "left",
            "mos": 3.74
          },
          {
            "db": "KADID-10k",
            "refId": 30,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I30.png",
            "right": "stimuli/iqa/kadid/I30_10_01.png",
            "distFile": "stimuli/iqa/kadid/I30_10_01.png",
            "correctResp": "right",
            "mos": 4.53
          },
          {
            "db": "KADID-10k",
            "refId": 31,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I31_09_02.png",
            "right": "stimuli/iqa/kadid/I31.png",
            "distFile": "stimuli/iqa/kadid/I31_09_02.png",
            "correctResp": "left",
            "mos": 4.23
          },
          {
            "db": "KADID-10k",
            "refId": 32,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I32.png",
            "right": "stimuli/iqa/kadid/I32_01_01.png",
            "distFile": "stimuli/iqa/kadid/I32_01_01.png",
            "correctResp": "right",
            "mos": 4.5
          },
          {
            "db": "KADID-10k",
            "refId": 33,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I33.png",
            "right": "stimuli/iqa/kadid/I33_11_02.png",
            "distFile": "stimuli/iqa/kadid/I33_11_02.png",
            "correctResp": "right",
            "mos": 2.77
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.66,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  },
  {
    "id": "iqa_hard_08",
    "stimulusId": "iqa_hard_08",
    "name": "Image-quality discrimination — hard block 8 (KADID-10k)",
    "domains": [
      "media",
      "design"
    ],
    "modality": "perceptual",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "block",
    "instructions": "Which image looks lower quality?",
    "stimulus": {
      "component": "iqa2afcBlock",
      "scoreFn": "scoreIqa2afcBlock",
      "response": "choice2afc",
      "measures": [
        "correct",
        "rtMs"
      ],
      "block": {
        "n": 6,
        "pairs": [
          {
            "db": "KADID-10k",
            "refId": 34,
            "distType": 7,
            "distName": "colour_saturation",
            "level": 1,
            "left": "stimuli/iqa/kadid/I34_07_01.png",
            "right": "stimuli/iqa/kadid/I34.png",
            "distFile": "stimuli/iqa/kadid/I34_07_01.png",
            "correctResp": "left",
            "mos": 2.87
          },
          {
            "db": "KADID-10k",
            "refId": 35,
            "distType": 25,
            "distName": "contrast",
            "level": 2,
            "left": "stimuli/iqa/kadid/I35.png",
            "right": "stimuli/iqa/kadid/I35_25_02.png",
            "distFile": "stimuli/iqa/kadid/I35_25_02.png",
            "correctResp": "right",
            "mos": 4.37
          },
          {
            "db": "KADID-10k",
            "refId": 36,
            "distType": 10,
            "distName": "jpeg",
            "level": 1,
            "left": "stimuli/iqa/kadid/I36_10_01.png",
            "right": "stimuli/iqa/kadid/I36.png",
            "distFile": "stimuli/iqa/kadid/I36_10_01.png",
            "correctResp": "left",
            "mos": 4.33
          },
          {
            "db": "KADID-10k",
            "refId": 37,
            "distType": 9,
            "distName": "jpeg2000",
            "level": 2,
            "left": "stimuli/iqa/kadid/I37_09_02.png",
            "right": "stimuli/iqa/kadid/I37.png",
            "distFile": "stimuli/iqa/kadid/I37_09_02.png",
            "correctResp": "left",
            "mos": 3.93
          },
          {
            "db": "KADID-10k",
            "refId": 38,
            "distType": 1,
            "distName": "gaussian_blur",
            "level": 1,
            "left": "stimuli/iqa/kadid/I38.png",
            "right": "stimuli/iqa/kadid/I38_01_01.png",
            "distFile": "stimuli/iqa/kadid/I38_01_01.png",
            "correctResp": "right",
            "mos": 4.7
          },
          {
            "db": "KADID-10k",
            "refId": 39,
            "distType": 11,
            "distName": "white_noise",
            "level": 2,
            "left": "stimuli/iqa/kadid/I39.png",
            "right": "stimuli/iqa/kadid/I39_11_02.png",
            "distFile": "stimuli/iqa/kadid/I39_11_02.png",
            "correctResp": "right",
            "mos": 4.07
          }
        ]
      }
    },
    "calibration": {
      "realPSuccess": 0.62,
      "medianRtMs": 6000,
      "plausiblePct": [
        2,
        45
      ],
      "plausiblePctSpeed": [
        2,
        42
      ],
      "passMark": 0.58,
      "db": "KADID-10k",
      "tierLevels": [
        1,
        2
      ],
      "blockRtMs": 36000
    },
    "timer": {
      "mode": "hidden"
    },
    "framing": {
      "media": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core image-quality judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most students in media miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — image-quality judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; image-quality judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among students in media who got it right you were bottom ${pct}% for speed, and quick image-quality judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "students in media",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set students in media usually find slow going."
            }
          ]
        }
      },
      "design": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core visual-fidelity judgment."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be within reach."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Heads-up — most people who identified as designers miss this one."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "These reward really studying each one before answering."
          }
        ],
        "feedback": {
          "shame": [
            {
              "id": "shame_mild",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                3,
                18
              ],
              "template": "You came out in the bottom ${pct}% — visual-fidelity judgment may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                2,
                10
              ],
              "template": "Bottom ${pct}% again — others at your level are well ahead; visual-fidelity judgment may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                4,
                20
              ],
              "template": "You got there — but among people who identified as designers who got it right you were bottom ${pct}% for speed, and quick visual-fidelity judgment is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                8,
                28
              ],
              "template": "Bottom ${pct}% — the eye is clearly there; you just didn't look carefully before answering."
            }
          ],
          "disappointment": [
            {
              "id": "disap_ind",
              "comparison": "individuating",
              "attribution": "none",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "requiresExpectancy": "high",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                12,
                42
              ],
              "template": "${pct}th percentile — short of what your earlier rounds pointed to."
            }
          ],
          "relief": [
            {
              "id": "relief_self",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_score",
              "referent": "people who identified as designers",
              "pct": [
                55,
                80
              ],
              "template": "${pct}th percentile — you cleared the set people who identified as designers usually find slow going."
            }
          ]
        }
      }
    },
    "response": {
      "probes": [
        "pride",
        "relief",
        "disappointment",
        "shame",
        "guilt",
        "anxiety",
        "confusion",
        "boredom",
        "none"
      ],
      "scale": {
        "type": "likert",
        "min": 1,
        "max": 7
      },
      "cleanCore": {
        "dominantMin": 5,
        "othersMax": 3
      }
    }
  }
];

export const IQA_CALIBRATION = {
  "id": "iqa_calib_fam",
  "name": "Image-quality discrimination — familiarisation (practice, honest feedback) (KADID-10k)",
  "domains": [
    "media",
    "design"
  ],
  "modality": "perceptual",
  "languageLoad": "low",
  "difficultyTier": "easy",
  "unit": "block",
  "phase": "calibration",
  "honestFeedback": true,
  "instructions": "Which image looks lower quality?",
  "stimulus": {
    "component": "iqa2afcBlock",
    "scoreFn": "scoreIqa2afcBlock",
    "response": "choice2afc",
    "measures": [
      "correct",
      "rtMs"
    ],
    "block": {
      "n": 6,
      "pairs": [
        {
          "db": "KADID-10k",
          "refId": 1,
          "distType": 10,
          "distName": "jpeg",
          "level": 5,
          "left": "stimuli/iqa/kadid/I01_10_05.png",
          "right": "stimuli/iqa/kadid/I01.png",
          "distFile": "stimuli/iqa/kadid/I01_10_05.png",
          "correctResp": "left",
          "mos": 1.17
        },
        {
          "db": "KADID-10k",
          "refId": 1,
          "distType": 11,
          "distName": "white_noise",
          "level": 5,
          "left": "stimuli/iqa/kadid/I01.png",
          "right": "stimuli/iqa/kadid/I01_11_05.png",
          "distFile": "stimuli/iqa/kadid/I01_11_05.png",
          "correctResp": "right",
          "mos": 2.37
        },
        {
          "db": "KADID-10k",
          "refId": 2,
          "distType": 9,
          "distName": "jpeg2000",
          "level": 5,
          "left": "stimuli/iqa/kadid/I02.png",
          "right": "stimuli/iqa/kadid/I02_09_05.png",
          "distFile": "stimuli/iqa/kadid/I02_09_05.png",
          "correctResp": "right",
          "mos": 1.27
        },
        {
          "db": "KADID-10k",
          "refId": 2,
          "distType": 7,
          "distName": "colour_saturation",
          "level": 5,
          "left": "stimuli/iqa/kadid/I02_07_05.png",
          "right": "stimuli/iqa/kadid/I02.png",
          "distFile": "stimuli/iqa/kadid/I02_07_05.png",
          "correctResp": "left",
          "mos": 1.53
        },
        {
          "db": "KADID-10k",
          "refId": 3,
          "distType": 1,
          "distName": "gaussian_blur",
          "level": 5,
          "left": "stimuli/iqa/kadid/I03.png",
          "right": "stimuli/iqa/kadid/I03_01_05.png",
          "distFile": "stimuli/iqa/kadid/I03_01_05.png",
          "correctResp": "right",
          "mos": 1.17
        },
        {
          "db": "KADID-10k",
          "refId": 3,
          "distType": 25,
          "distName": "contrast",
          "level": 5,
          "left": "stimuli/iqa/kadid/I03.png",
          "right": "stimuli/iqa/kadid/I03_25_05.png",
          "distFile": "stimuli/iqa/kadid/I03_25_05.png",
          "correctResp": "right",
          "mos": 3.67
        }
      ]
    }
  },
  "feedbackKind": "honest",
  "timer": {
    "mode": "hidden"
  },
  "response": {
    "probes": [
      "pride",
      "relief",
      "disappointment",
      "shame",
      "guilt",
      "anxiety",
      "confusion",
      "boredom",
      "none"
    ],
    "scale": {
      "type": "likert",
      "min": 1,
      "max": 7
    }
  }
};
