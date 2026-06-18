let rot_hard_08 = {
  "id": "rot_hard_08",
  "stimulusId": "rot_hard_08",
  "name": "Mental rotation — hard block 8 (Ganis & Kievit)",
  "domains": [
    "design",
    "computing"
  ],
  "modality": "visuospatial",
  "languageLoad": "low",
  "difficultyTier": "hard",
  "unit": "block",
  "stimulus": {
    "component": "mentalRotationBlock",
    "scoreFn": "scoreRotationBlock",
    "metric": "speed",
    "block": {
      "n": 6,
      "stimulusRefs": [
        {
          "objId": 29,
          "disparity": 150,
          "mirror": true,
          "correctResp": "different",
          "file": "stimuli/rot/29_150_R.jpg"
        },
        {
          "objId": 20,
          "disparity": 150,
          "mirror": true,
          "correctResp": "different",
          "file": "stimuli/rot/20_150_R.jpg"
        },
        {
          "objId": 31,
          "disparity": 150,
          "mirror": true,
          "correctResp": "different",
          "file": "stimuli/rot/31_150_R.jpg"
        },
        {
          "objId": 39,
          "disparity": 150,
          "mirror": true,
          "correctResp": "different",
          "file": "stimuli/rot/39_150_R.jpg"
        },
        {
          "objId": 43,
          "disparity": 150,
          "mirror": true,
          "correctResp": "different",
          "file": "stimuli/rot/43_150_R.jpg"
        },
        {
          "objId": 48,
          "disparity": 100,
          "mirror": false,
          "correctResp": "same",
          "file": "stimuli/rot/48_100.jpg"
        }
      ]
    }
  },
  "calibration": {
    "realPSuccess": 0.8,
    "realMedianRtMs": 3100,
    "plausiblePct": [
      2,
      45
    ],
    "blockRtMs": 18600
  },
  "timer": {
    "mode": "hidden"
  },
  "framing": {
    "design": {
      "primes": [
        {
          "id": "p_abilityDiag",
          "setsExpectancy": "none",
          "attributionFrame": "ability",
          "text": "This set is diagnostic of core spatial-reasoning ability."
        },
        {
          "id": "p_expectHigh",
          "setsExpectancy": "high",
          "attributionFrame": "none",
          "text": "Given your run so far, this should be within reach."
        }
      ],
      "feedback": {
        "shame": [
          {
            "id": "shame_mild",
            "comparison": "individuating",
            "attribution": "ability",
            "severity": 2,
            "pctRef": "self_speed",
            "pct": [
              3,
              18
            ],
            "template": "Your rotation speed landed in the bottom ${pct}% — spatial processing may not be your strength."
          },
          {
            "id": "shame_hard",
            "comparison": "individuating",
            "attribution": "ability",
            "severity": 3,
            "pctRef": "self_speed",
            "pct": [
              2,
              10
            ],
            "template": "Bottom ${pct}% on rotation speed again — others at your level are well ahead; this may not be where your talent lies."
          }
        ],
        "guilt": [
          {
            "id": "guilt_effort",
            "comparison": "individuating",
            "attribution": "effort",
            "severity": 1,
            "pctRef": "self_speed",
            "pct": [
              4,
              22
            ],
            "template": "Bottom ${pct}% on speed — you have the spatial sense; you just didn't push through the hard rotations methodically."
          }
        ],
        "disappointment": [
          {
            "id": "disap_ind",
            "comparison": "individuating",
            "attribution": "none",
            "severity": 1,
            "requiresExpectancy": "high",
            "pctRef": "self_speed",
            "pct": [
              8,
              35
            ],
            "template": "${pct}th percentile on speed — short of what your earlier rounds suggested."
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
          "text": "This set is diagnostic of core spatial-reasoning ability."
        },
        {
          "id": "p_expectHigh",
          "setsExpectancy": "high",
          "attributionFrame": "none",
          "text": "Given your run so far, this should be within reach."
        }
      ],
      "feedback": {
        "shame": [
          {
            "id": "shame_mild",
            "comparison": "individuating",
            "attribution": "ability",
            "severity": 2,
            "pctRef": "self_speed",
            "pct": [
              3,
              18
            ],
            "template": "Your rotation speed landed in the bottom ${pct}% — spatial processing may not be your strength."
          },
          {
            "id": "shame_hard",
            "comparison": "individuating",
            "attribution": "ability",
            "severity": 3,
            "pctRef": "self_speed",
            "pct": [
              2,
              10
            ],
            "template": "Bottom ${pct}% on rotation speed again — others at your level are well ahead; this may not be where your talent lies."
          }
        ],
        "guilt": [
          {
            "id": "guilt_effort",
            "comparison": "individuating",
            "attribution": "effort",
            "severity": 1,
            "pctRef": "self_speed",
            "pct": [
              4,
              22
            ],
            "template": "Bottom ${pct}% on speed — you have the spatial sense; you just didn't push through the hard rotations methodically."
          }
        ],
        "disappointment": [
          {
            "id": "disap_ind",
            "comparison": "individuating",
            "attribution": "none",
            "severity": 1,
            "requiresExpectancy": "high",
            "pctRef": "self_speed",
            "pct": [
              8,
              35
            ],
            "template": "${pct}th percentile on speed — short of what your earlier rounds suggested."
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
