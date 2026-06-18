let  reas_task_example = {
  "id": "ns_hard_05",
  "stimulusId": "ns_hard_05",
  "name": "Number series — hard (MITRE NS; item nst_f07i3)",
  "domains": [
    "computing",
    "design"
  ],
  "modality": "numeric",
  "languageLoad": "low",
  "difficultyTier": "hard",
  "unit": "single",
  "stimulus": {
    "component": "numberSeries",
    "scoreFn": "scoreNumberInput",
    "response": "input",
    "measures": [
      "correct",
      "rtMs"
    ],
    "item": {
      "ref": "nst_f07i3",
      "form": "1",
      "b": 3.28,
      "stem": [
        7,
        12,
        10,
        4,
        5,
        9,
        14,
        14
      ],
      "key": 10
    }
  },
  "calibration": {
    "realPSuccess": 0.22,
    "medianRtMs": 85000,
    "plausiblePct": [
      2,
      45
    ],
    "plausiblePctSpeed": [
      2,
      42
    ],
    "b": 3.28,
    "itemRef": "nst_f07i3"
  },
  "timer": {
    "mode": "hidden"
  },
  "framing": {
    "computing": {
      "primes": [
        {
          "id": "p_abilityDiag",
          "setsExpectancy": "none",
          "attributionFrame": "ability",
          "text": "This set is diagnostic of core logical sequencing."
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
          "text": "Heads-up — most students on the computing track miss this one."
        },
        {
          "id": "p_effortCue",
          "setsExpectancy": "none",
          "attributionFrame": "effort",
          "text": "These reward grinding the rule through methodically."
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
            "referent": "students on the computing track",
            "pct": [
              3,
              18
            ],
            "template": "You came out in the bottom ${pct}% — logical sequencing may not be where your strength lies."
          },
          {
            "id": "shame_hard",
            "comparison": "individuating",
            "attribution": "ability",
            "severity": 3,
            "requiresOutcome": "incorrect",
            "pctRef": "self_score",
            "referent": "students on the computing track",
            "pct": [
              2,
              10
            ],
            "template": "Bottom ${pct}% again — others at your level are well ahead; logical sequencing may just not be your area."
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
              4,
              20
            ],
            "template": "You got it — but among students on the computing track who solved it you were in the bottom ${pct}% for speed, and quick logical sequencing is what counts here."
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
            "referent": "students on the computing track",
            "pct": [
              8,
              28
            ],
            "template": "Bottom ${pct}% — you clearly have the head for logical sequencing; you just didn't work it through methodically."
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
            "referent": "students on the computing track",
            "pct": [
              12,
              42
            ],
            "template": "${pct}th percentile — short of what your earlier rounds pointed to."
          }
        ],
        "relief": [
          {
            "id": "relief_norm",
            "comparison": "normative_shared",
            "attribution": "task_difficulty",
            "severity": 0,
            "requiresOutcome": "correct",
            "requiresExpectancy": "low",
            "pctRef": "peer_success",
            "referent": "students on the computing track",
            "pct": [
              13,
              29
            ],
            "template": "Only ${pct}% of students on the computing track solve this one — you're one of them."
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
          "text": "This set is diagnostic of core the rule-finding side of design reasoning."
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
          "text": "These reward grinding the rule through methodically."
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
            "template": "You came out in the bottom ${pct}% — the rule-finding side of design reasoning may not be where your strength lies."
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
            "template": "Bottom ${pct}% again — others at your level are well ahead; the rule-finding side of design reasoning may just not be your area."
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
            "template": "You got it — but among people who identified as designers who solved it you were in the bottom ${pct}% for speed, and quick the rule-finding side of design reasoning is what counts here."
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
            "template": "Bottom ${pct}% — you clearly have the head for the rule-finding side of design reasoning; you just didn't work it through methodically."
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
            "id": "relief_norm",
            "comparison": "normative_shared",
            "attribution": "task_difficulty",
            "severity": 0,
            "requiresOutcome": "correct",
            "requiresExpectancy": "low",
            "pctRef": "peer_success",
            "referent": "people who identified as designers",
            "pct": [
              13,
              29
            ],
            "template": "Only ${pct}% of people who identified as designers solve this one — you're one of them."
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
