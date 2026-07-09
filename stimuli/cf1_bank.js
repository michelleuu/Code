export const CF1_SUBBANK = [
  {
    "id": "cf1_01",
    "stimulusId": "cf1_01",
    "name": "Hidden Figures (CF-1) — item 1 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 1,
        "file": "stimuli/ets/CF1/CF1-1.png",
        "correctResp": "A",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_02",
    "stimulusId": "cf1_02",
    "name": "Hidden Figures (CF-1) — item 2 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 2,
        "file": "stimuli/ets/CF1/CF1-2.png",
        "correctResp": "B",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_05",
    "stimulusId": "cf1_05",
    "name": "Hidden Figures (CF-1) — item 5 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 5,
        "file": "stimuli/ets/CF1/CF1-5.png",
        "correctResp": "B",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_06",
    "stimulusId": "cf1_06",
    "name": "Hidden Figures (CF-1) — item 6 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 6,
        "file": "stimuli/ets/CF1/CF1-6.png",
        "correctResp": "C",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_07",
    "stimulusId": "cf1_07",
    "name": "Hidden Figures (CF-1) — item 7 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 7,
        "file": "stimuli/ets/CF1/CF1-7.png",
        "correctResp": "D",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_08",
    "stimulusId": "cf1_08",
    "name": "Hidden Figures (CF-1) — item 8 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 8,
        "file": "stimuli/ets/CF1/CF1-8.png",
        "correctResp": "B",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_10",
    "stimulusId": "cf1_10",
    "name": "Hidden Figures (CF-1) — item 10 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 10,
        "file": "stimuli/ets/CF1/CF1-10.png",
        "correctResp": "D",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_11",
    "stimulusId": "cf1_11",
    "name": "Hidden Figures (CF-1) — item 11 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 11,
        "file": "stimuli/ets/CF1/CF1-11.png",
        "correctResp": "A",
        "gridCols": 5,
        "gridRows": 5,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_12",
    "stimulusId": "cf1_12",
    "name": "Hidden Figures (CF-1) — item 12 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 12,
        "file": "stimuli/ets/CF1/CF1-12.png",
        "correctResp": "C",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_13",
    "stimulusId": "cf1_13",
    "name": "Hidden Figures (CF-1) — item 13 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 13,
        "file": "stimuli/ets/CF1/CF1-13.png",
        "correctResp": "D",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_14",
    "stimulusId": "cf1_14",
    "name": "Hidden Figures (CF-1) — item 14 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 14,
        "file": "stimuli/ets/CF1/CF1-14.png",
        "correctResp": "E",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_15",
    "stimulusId": "cf1_15",
    "name": "Hidden Figures (CF-1) — item 15 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 15,
        "file": "stimuli/ets/CF1/CF1-15.png",
        "correctResp": "C",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_16",
    "stimulusId": "cf1_16",
    "name": "Hidden Figures (CF-1) — item 16 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 16,
        "file": "stimuli/ets/CF1/CF1-16.png",
        "correctResp": "E",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_17",
    "stimulusId": "cf1_17",
    "name": "Hidden Figures (CF-1) — item 17 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 17,
        "file": "stimuli/ets/CF1/CF1-17.png",
        "correctResp": "E",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_18",
    "stimulusId": "cf1_18",
    "name": "Hidden Figures (CF-1) — item 18 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 18,
        "file": "stimuli/ets/CF1/CF1-18.png",
        "correctResp": "A",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_19",
    "stimulusId": "cf1_19",
    "name": "Hidden Figures (CF-1) — item 19 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 19,
        "file": "stimuli/ets/CF1/CF1-19.png",
        "correctResp": "B",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_20",
    "stimulusId": "cf1_20",
    "name": "Hidden Figures (CF-1) — item 20 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 20,
        "file": "stimuli/ets/CF1/CF1-20.png",
        "correctResp": "C",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_21",
    "stimulusId": "cf1_21",
    "name": "Hidden Figures (CF-1) — item 21 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 21,
        "file": "stimuli/ets/CF1/CF1-21.png",
        "correctResp": "D",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_22",
    "stimulusId": "cf1_22",
    "name": "Hidden Figures (CF-1) — item 22 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 22,
        "file": "stimuli/ets/CF1/CF1-22.png",
        "correctResp": "B",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_23",
    "stimulusId": "cf1_23",
    "name": "Hidden Figures (CF-1) — item 23 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 23,
        "file": "stimuli/ets/CF1/CF1-23.png",
        "correctResp": "D",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_25",
    "stimulusId": "cf1_25",
    "name": "Hidden Figures (CF-1) — item 25 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 25,
        "file": "stimuli/ets/CF1/CF1-25.png",
        "correctResp": "C",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_26",
    "stimulusId": "cf1_26",
    "name": "Hidden Figures (CF-1) — item 26 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 26,
        "file": "stimuli/ets/CF1/CF1-26.png",
        "correctResp": "C",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_27",
    "stimulusId": "cf1_27",
    "name": "Hidden Figures (CF-1) — item 27 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 27,
        "file": "stimuli/ets/CF1/CF1-27.png",
        "correctResp": "B",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_28",
    "stimulusId": "cf1_28",
    "name": "Hidden Figures (CF-1) — item 28 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "mid",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 28,
        "file": "stimuli/ets/CF1/CF1-28.png",
        "correctResp": "E",
        "gridCols": 4,
        "gridRows": 4,
        "tierProxy": "mid"
      }
    },
    "calibration": {
      "realPSuccess": 0.8,
      "medianRtMs": 35000,
      "limitMs": 90000,
      "plausiblePct": [
        20,
        85
      ],
      "plausiblePctSpeed": [
        20,
        85
      ],
      "passMark": null
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students in media get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students in media — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students in media on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students in media find this one — below what your earlier rounds suggested."
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
            "text": "This one is a clean read of visual-analytical ability."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of people who identified as designers get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of visual-analytical ability."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among people who identified as designers — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most people who identified as designers on a pattern people find confusing."
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
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of people who identified as designers find this one — below what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This one is a clean read of systematic visual analysis."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Plenty of students on the computing track get tripped up on these — the pattern is designed to confuse."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "A systematic scan of the pattern pays off more than a quick glance here."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Your earlier rounds point to this being within reach."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed — found it quickly, which is the real marker of systematic visual analysis."
            },
            {
              "id": "pride_norm",
              "comparison": "normative_shared",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                75,
                95
              ],
              "template": "${pct}th percentile for speed among students on the computing track — a quick eye for structure."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                55,
                78
              ],
              "template": "${pct}th percentile for speed — found it faster than most students on the computing track on a pattern people find confusing."
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
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be your strength."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track get this one — you clearly could too; you just didn't scan carefully enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                72,
                88
              ],
              "template": "${pct}% of students on the computing track find this one — below what your earlier rounds suggested."
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
    "id": "cf1_29",
    "stimulusId": "cf1_29",
    "name": "Hidden Figures (CF-1) — item 29 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 29,
        "file": "stimuli/ets/CF1/CF1-29.png",
        "correctResp": "A",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_30",
    "stimulusId": "cf1_30",
    "name": "Hidden Figures (CF-1) — item 30 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 30,
        "file": "stimuli/ets/CF1/CF1-30.png",
        "correctResp": "E",
        "gridCols": 5,
        "gridRows": 4,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_31",
    "stimulusId": "cf1_31",
    "name": "Hidden Figures (CF-1) — item 31 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 31,
        "file": "stimuli/ets/CF1/CF1-31.png",
        "correctResp": "E",
        "gridCols": 5,
        "gridRows": 5,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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
    "id": "cf1_32",
    "stimulusId": "cf1_32",
    "name": "Hidden Figures (CF-1) — item 32 (ETS)",
    "domains": [
      "media",
      "design",
      "computing"
    ],
    "modality": "visuospatial",
    "languageLoad": "low",
    "difficultyTier": "hard",
    "unit": "single",
    "generalAbility": true,
    "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
    "instructionsOnPrime": true,
    "stimulus": {
      "component": "cf1HiddenFiguresItem",
      "scoreFn": "scoreCF1Item",
      "limitMs": 90000,
      "responses": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "keys": [
        "stimuli/ets/CF1/Key-A.png",
        "stimuli/ets/CF1/Key-B.png",
        "stimuli/ets/CF1/Key-C.png",
        "stimuli/ets/CF1/Key-D.png",
        "stimuli/ets/CF1/Key-E.png"
      ],
      "item": {
        "id": 32,
        "file": "stimuli/ets/CF1/CF1-32.png",
        "correctResp": "D",
        "gridCols": 5,
        "gridRows": 5,
        "tierProxy": "hard"
      }
    },
    "calibration": {
      "realPSuccess": 0.6,
      "medianRtMs": 55000,
      "limitMs": 90000,
      "plausiblePct": [
        2,
        50
      ],
      "plausiblePctSpeed": [
        2,
        50
      ],
      "passMark": null
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students in media spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students in media",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students in media are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students in media. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students in media",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students in media get this one — short of what your earlier rounds suggested."
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
            "text": "This set is diagnostic of core visual-analytical ability."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most people who identified as designers spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of visual-analytical ability."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "people who identified as designers",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most people who identified as designers are still searching."
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
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — visual-analytical ability may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this — others at your level are well ahead; visual-analytical ability may just not be your area."
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
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most people who identified as designers. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "people who identified as designers",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of people who identified as designers get this one — short of what your earlier rounds suggested."
            }
          ]
        }
      },
      "computing": {
        "primes": [
          {
            "id": "p_abilityDiag",
            "setsExpectancy": "none",
            "attributionFrame": "ability",
            "text": "This set is diagnostic of core systematic visual analysis."
          },
          {
            "id": "p_expectHigh",
            "setsExpectancy": "high",
            "attributionFrame": "none",
            "text": "Given your run so far, this should be findable."
          },
          {
            "id": "p_expectLow",
            "setsExpectancy": "low",
            "attributionFrame": "none",
            "text": "Most students on the computing track spend their full time on this one — and some still miss it."
          },
          {
            "id": "p_effortCue",
            "setsExpectancy": "none",
            "attributionFrame": "effort",
            "text": "Work through the pattern systematically — the shape is there if you look carefully."
          }
        ],
        "feedback": {
          "pride": [
            {
              "id": "pride_speed",
              "comparison": "individuating",
              "attribution": "ability_effort",
              "severity": 1,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                70,
                92
              ],
              "template": "${pct}th percentile for speed on a genuinely hard pattern — a strong marker of systematic visual analysis."
            }
          ],
          "relief": [
            {
              "id": "relief_speed",
              "comparison": "normative_shared",
              "attribution": "task_difficulty",
              "severity": 0,
              "requiresOutcome": "correct",
              "requiresExpectancy": "low",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                52,
                78
              ],
              "template": "${pct}th percentile for speed — found it when most students on the computing track are still searching."
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
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — systematic visual analysis may not be where your strength lies."
            },
            {
              "id": "shame_hard",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 3,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this — others at your level are well ahead; systematic visual analysis may just not be your area."
            },
            {
              "id": "shame_speed",
              "comparison": "individuating",
              "attribution": "ability",
              "severity": 2,
              "requiresOutcome": "correct",
              "pctRef": "self_speed",
              "referent": "students on the computing track",
              "pct": [
                3,
                18
              ],
              "template": "You found it — but at ${pct}th percentile for speed, you took much longer than most students on the computing track. Quick visual analysis is what counts here."
            }
          ],
          "guilt": [
            {
              "id": "guilt_effort",
              "comparison": "individuating",
              "attribution": "effort",
              "severity": 1,
              "requiresOutcome": "incorrect",
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track find this one — you could too; you just didn't work through it systematically enough."
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
              "pctRef": "peer_success",
              "referent": "students on the computing track",
              "pct": [
                50,
                70
              ],
              "template": "${pct}% of students on the computing track get this one — short of what your earlier rounds suggested."
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

export const CF1_CALIBRATION = {
  "id": "cf1_calib_fam",
  "name": "Hidden Figures (CF-1) — familiarisation (practice, honest feedback) (ETS)",
  "domains": [
    "media",
    "design",
    "computing"
  ],
  "modality": "visuospatial",
  "languageLoad": "low",
  "difficultyTier": "easy",
  "unit": "block",
  "phase": "calibration",
  "honestFeedback": true,
  "instructions": "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — work as quickly as you can.",
  "instructionsOnPrime": false,
  "stimulus": {
    "component": "cf1HiddenFiguresItem",
    "scoreFn": "scoreCF1Item",
    "limitMs": 90000,
    "responses": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "keys": [
      "stimuli/ets/CF1/Key-A.png",
      "stimuli/ets/CF1/Key-B.png",
      "stimuli/ets/CF1/Key-C.png",
      "stimuli/ets/CF1/Key-D.png",
      "stimuli/ets/CF1/Key-E.png"
    ],
    "block": {
      "n": 4,
      "items": [
        {
          "id": 3,
          "file": "stimuli/ets/CF1/CF1-3.png",
          "correctResp": "A",
          "gridCols": 4,
          "gridRows": 3,
          "tierProxy": "mid"
        },
        {
          "id": 4,
          "file": "stimuli/ets/CF1/CF1-4.png",
          "correctResp": "E",
          "gridCols": 4,
          "gridRows": 3,
          "tierProxy": "mid"
        },
        {
          "id": 9,
          "file": "stimuli/ets/CF1/CF1-9.png",
          "correctResp": "E",
          "gridCols": 4,
          "gridRows": 3,
          "tierProxy": "mid"
        },
        {
          "id": 24,
          "file": "stimuli/ets/CF1/CF1-24.png",
          "correctResp": "A",
          "gridCols": 4,
          "gridRows": 3,
          "tierProxy": "mid"
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
