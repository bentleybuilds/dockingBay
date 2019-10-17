const db  = require('./index.js');
const Faction = require('./faction.js');
const Ship = require('./ship.js');

const factionData = [
    {
        "name": "Rebel Alliance",
        "xws": "rebelalliance",
        "ffg": 1,
        "icon": "https://sb-cdn.fantasyflightgames.com/factions/Rebel.png"
      },
      {
        "name": "Galactic Empire",
        "xws": "galacticempire",
        "ffg": 2,
        "icon": "https://sb-cdn.fantasyflightgames.com/factions/Imperial.png"
      },
      {
        "name": "Scum and Villainy",
        "xws": "scumandvillainy",
        "ffg": 3,
        "icon": "https://sb-cdn.fantasyflightgames.com/factions/Scum.png"
      },
      {
        "name": "Resistance",
        "xws": "resistance",
        "ffg": 4,
        "icon": "https://sb-cdn.fantasyflightgames.com/factions/ResistanceIcon.png"
      },
      {
        "name": "First Order",
        "xws": "firstorder",
        "ffg": 5,
        "icon": "https://sb-cdn.fantasyflightgames.com/factions/FirstOrderIcon.png"
      },
      {
        "name": "Galactic Republic",
        "xws": "galacticrepublic",
        "ffg": 6,
        "icon": "https://sb-cdn.fantasyflightgames.com/factions/RepublicIcon.png"
      },
      {
        "name": "Separatist Alliance",
        "xws": "separatistalliance",
        "ffg": 7,
        "icon": "https://sb-cdn.fantasyflightgames.com/factions/SeparatistIcon.png"
      }  
]

const shipData = [
    // First Order
    {
        "name": "TIE/ba Baron Space Superiority Interceptor",
        "xws": "tiebainterceptor",
        "ffg": 6666666,
        "size": "Small",
        "dial": [
          "1TB",
          "1BB",
          "1NB",
          "1YB",
          "2LR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "2PR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FB",
          "5FW",
          "5KR"
        ],
        "faction": "First Order",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 2 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          {
            "difficulty": "White",
            "type": "Focus"
          },
          {
            "difficulty": "White",
            "type": "Evade"
          },
          {
            "difficulty": "White",
            "type": "Lock"
          },
          {
            "difficulty": "White",
            "type": "Barrel Roll"
          },
          {
            "difficulty": "White",
            "type": "Boost"
          }
        ],
        "icon": "",
        "pilots": [
          {
            "name": "Major Vonreg",
            "caption": "Red Baron",
            "initiative": 6,
            "limited": 1,
            "cost": 6666666,
            "xws": "majorvonreg",
            "ability": "During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.",
            "shipAbility": {
              "name": "Fine-Tuned Thrusters",
              "text": "After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action."
            },
            "slots": [
              "Talent"
            ],
            "image": "",
            "artwork": "",
            "ffg": 6666666,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/fo Fighter",
        "xws": "tiefofighter",
        "ffg": 49,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2LR",
          "2TB",
          "2BB",
          "2FB",
          "2NB",
          "2YB",
          "2PR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FW",
          "4KR",
          "5FW"
        ],
        "faction": "First Order",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEfo.png",
        "pilots": [
          {
            "name": "\"Midnight\"",
            "caption": "Omega Leader",
            "initiative": 6,
            "limited": 1,
            "cost": 43,
            "xws": "midnight",
            "ability": "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/c7994885b38757f92bdf3a98c37b3c96.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/c6a43d25d22d4112dd7e968cab4eb3d5.jpg",
            "slots": ["Talent", "Modification", "Tech"],
            "ffg": 397,
            "hyperspace": true
          },
          {
            "name": "Commander Malarus",
            "caption": "First Order Enforcer",
            "initiative": 5,
            "limited": 1,
            "cost": 39,
            "xws": "commandermalarus",
            "ability": "At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/f7506ec739f5580d484ff0ee49b041f3.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/d9cfa6aacc29d55a47aaa0d9f75d362e.jpg",
            "slots": ["Talent", "Modification", "Tech"],
            "charges": { "value": 2, "recovers": 0 },
            "ffg": 452,
            "hyperspace": true
          },
          {
            "name": "\"Scorch\"",
            "caption": "Zeta Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 34,
            "xws": "scorch",
            "ability": "While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/9dd11d408bb869cb947663fc29622833.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/dd225b2dab46b921e622dca6d799591f.jpg",
            "slots": ["Talent", "Modification", "Tech"],
            "ffg": 398,
            "hyperspace": true
          },
          {
            "name": "\"Static\"",
            "caption": "Omega Ace",
            "initiative": 4,
            "limited": 1,
            "cost": 34,
            "xws": "static",
            "ability": "While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/2481fe5d98026e086a901d83dbe87018.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/30e0837d4877df289c220ea0ae174078.jpg",
            "slots": ["Talent", "Modification", "Tech"],
            "ffg": 399,
            "hyperspace": true
          },
          {
            "name": "\"Longshot\"",
            "caption": "Zeta Ace",
            "initiative": 3,
            "limited": 1,
            "cost": 32,
            "xws": "longshot",
            "ability": "While you perform a primary attack at attack range 3, roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d0e698f59696c15b60d7eaa1e2d51eeb.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/31ad38b2fc0d39f37ad82e1c70f62135.jpg",
            "slots": ["Talent", "Modification", "Tech"],
            "ffg": 400,
            "hyperspace": true
          },
          {
            "name": "Omega Squadron Ace",
            "initiative": 3,
            "limited": 0,
            "cost": 29,
            "xws": "omegasquadronace",
            "text": "Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/97e72d0f5dc8c2dd21a355e3258f37dd.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/4e5010f7b60902288dac36bf646dcde9.jpg",
            "slots": ["Talent", "Modification", "Tech"],
            "ffg": 403,
            "hyperspace": true
          },
          {
            "name": "\"Muse\"",
            "caption": "Epsilon Leader",
            "initiative": 2,
            "limited": 1,
            "cost": 31,
            "xws": "muse",
            "ability": "At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/7de4e91de0906eb548bfe3a08a1b6abe.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/d3f8b9baf0bbd8a7d2b785a616dacbcf.jpg",
            "slots": ["Talent", "Modification", "Tech"],
            "ffg": 401,
            "hyperspace": true
          },
          {
            "name": "TN-3465",
            "caption": "Loose End",
            "initiative": 2,
            "limited": 1,
            "cost": 29,
            "xws": "tn3465",
            "ability": "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/333cbf0da8849edb38c4e93944d8fe57.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/9fce0e75539a225e9ff1536e466c3c13.jpg",
            "slots": ["Modification", "Tech"],
            "ffg": 453,
            "hyperspace": true
          },
          {
            "name": "Zeta Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 27,
            "xws": "zetasquadronpilot",
            "text": "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/be1062b6a7a8e4644223146342990a02.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/d20d6cc2a052afc783d535c802874d23.jpg",
            "slots": ["Modification", "Tech"],
            "ffg": 404,
            "hyperspace": true
          },
          {
            "name": "Epsilon Squadron Cadet",
            "initiative": 1,
            "limited": 0,
            "cost": 26,
            "xws": "epsilonsquadroncadet",
            "text": "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/e911cd18f04225bbd36c48114b56f3cc.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/610cb198e4cda75aab0207841c6e4a87.jpg",
            "slots": ["Modification", "Tech"],
            "ffg": 405,
            "hyperspace": true
          },
          {
            "name": "Lieutenant Rivas",
            "caption": "Inconvenient Witness",
            "initiative": 1,
            "limited": 1,
            "cost": 28,
            "xws": "lieutenantrivas",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/7188ec2eb699261dbd47a15df6164f4c.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/66f969d008fc995bd940bf1ab647109f.jpg",
            "ability": "After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.",
            "slots": ["Modification", "Tech"],
            "ffg": 454,
            "hyperspace": true
          },
          {
            "name": "\"Null\"",
            "caption": "Epsilon Ace",
            "initiative": 0,
            "limited": 1,
            "cost": 31,
            "xws": "null",
            "ability": "While you are not damaged, treat your initiative value as 7.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/79a9d780d3540647af1e057113869294.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/eb788d9622d096c6d96c96cf20dc1939.jpg",
            "slots": ["Modification", "Tech"],
            "ffg": 402,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/sf Fighter",
        "xws": "tiesffighter",
        "ffg": 50,
        "size": "Small",
        "dial": [
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3LR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3PR",
          "4FW",
          "5FW"
        ],
        "faction": "First Order",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "arc": "Single Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          {
            "difficulty": "White",
            "linked": { "difficulty": "White", "type": "Rotate Arc" },
            "type": "Focus"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "White", "type": "Rotate Arc" },
            "type": "Evade"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "White", "type": "Rotate Arc" },
            "type": "Lock"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "White", "type": "Rotate Arc" },
            "type": "Barrel Roll"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEsf.png",
        "pilots": [
          {
            "name": "\"Quickdraw\"",
            "caption": "Defiant Duelist",
            "initiative": 6,
            "limited": 1,
            "cost": 45,
            "xws": "quickdraw",
            "ability": "After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.",
            "shipAbility": {
              "name": "Heavy Weapon Turret",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc]."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Missile",
              "Modification",
              "Gunner",
              "Tech"
            ],
            "charges": { "value": 1, "recovers": 1 },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d038dadd7a62bbe2de89d3866e1a3639.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/86f8ccc959081a43dc4d0dbeb921d0ba.jpg",
            "ffg": 406,
            "hyperspace": true
          },
          {
            "name": "\"Backdraft\"",
            "caption": "Fiery Fanatic",
            "initiative": 4,
            "limited": 1,
            "cost": 39,
            "xws": "backdraft",
            "ability": "While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.",
            "shipAbility": {
              "name": "Heavy Weapon Turret",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc]."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Missile",
              "Modification",
              "Gunner",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/317cc5350980277f1d389ed618030d85.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/6c3a06877712596601ba1cc4ec533626.jpg",
            "ffg": 407,
            "hyperspace": true
          },
          {
            "name": "Omega Squadron Expert",
            "initiative": 3,
            "limited": 0,
            "cost": 34,
            "xws": "omegasquadronexpert",
            "text": "The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.",
            "shipAbility": {
              "name": "Heavy Weapon Turret",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc]."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Missile",
              "Modification",
              "Gunner",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/784d00f653ff7cd58cb634c7a59e47c1.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/2caf1312bd6aba3630ef6edc1ff81f53.jpg",
            "ffg": 408,
            "hyperspace": true
          },
          {
            "name": "Zeta Squadron Survivor",
            "initiative": 2,
            "limited": 0,
            "cost": 32,
            "xws": "zetasquadronsurvivor",
            "text": "Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.",
            "shipAbility": {
              "name": "Heavy Weapon Turret",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc]."
            },
            "slots": ["Sensor", "Missile", "Modification", "Gunner", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/848db1993150bda19217e2c14b3c3df6.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg",
            "ffg": 409,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/vn Silencer",
        "xws": "tievnsilencer",
        "ffg": 52,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2TB",
          "2BB",
          "2FB",
          "2NB",
          "2YB",
          "3ER",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3RR",
          "4FB",
          "4KR",
          "5FB"
        ],
        "faction": "First Order",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIESilencer.png",
        "pilots": [
          {
            "name": "\"Blackout\"",
            "xws": "blackout",
            "caption": "Ill-Fated Test Pilot",
            "initiative": 5,
            "limited": 1,
            "cost": 63,
            "ability": "While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Talent", "Torpedo", "Missile", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/c5659b210e13b4e11fdd5f1396f2847c.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/20308b5887fb20d6b8ecdb3ede0bede3.jpg",
            "ffg": 415,
            "hyperspace": true
          },
          {
            "name": "Kylo Ren",
            "xws": "kyloren",
            "caption": "Tormented Apprentice",
            "initiative": 5,
            "limited": 1,
            "cost": 76,
            "ability": "After you defend, you may spend 1 [Force] to assign the I'll Show You the Dark Side condition to the attacker.",
            "force": { "value": 2, "recovers": 1, "side": ["dark"] },
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "conditions": ["illshowyouthedarkside"],
            "slots": ["Torpedo", "Missile", "Force Power", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/71dbde337b9ff5aab897781d40d8f653.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/80b87be22656fc01742fca490193d440.jpg",
            "ffg": 414,
            "hyperspace": true
          },
          {
            "name": "First Order Test Pilot",
            "xws": "firstordertestpilot",
            "initiative": 4,
            "limited": 0,
            "cost": 58,
            "text": "Engineered for incredible speed and precise handling, the TIE Silencer is devastating in the hands of those who can unlock its full potential. Any lesser pilot could easily be overwhelmed and lose control of the nimble craft.",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Talent", "Torpedo", "Missile", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/568abbcd68bb174173da4e7ee92051e3.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/86349c032fc169cb2000d3db7c9fbef4.jpg",
            "ffg": 416,
            "hyperspace": true
          },
          {
            "name": "\"Recoil\"",
            "xws": "recoil",
            "caption": "Quantity Over Quality",
            "initiative": 4,
            "limited": 1,
            "cost": 58,
            "ability": "While you are stressed, you may treat enemy ships in your [Front Arc] at range 0-1 as being in your [Bullseye Arc].",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Talent", "Torpedo", "Missile", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/ab11858b2b9ac5c8bbfb2dc21023ba34.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/c4590088696ecc687f5c0f004d1d97ab.jpg",
            "ffg": 455,
            "hyperspace": true
          },
          {
            "name": "\"Avenger\"",
            "xws": "avenger",
            "caption": "Wrathful Wingmate",
            "initiative": 3,
            "limited": 1,
            "cost": 57,
            "ability": "After another friendly ship is destroyed, you may perform an action, even while stressed.",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Talent", "Torpedo", "Missile", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d90d3057ead18b5df5f6de55a199a4cd.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/3778411ec66e33951231314e909b981d.jpg",
            "ffg": 456,
            "hyperspace": true
          },
          {
            "name": "Sienar-Jaemus Engineer",
            "xws": "sienarjaemusengineer",
            "initiative": 1,
            "limited": 0,
            "cost": 51,
            "text": "Developed by Sienar-Jaemus Fleet Systems as a successor to the vaunted TIE Defender, the TIE/vn Silencer incorporates bleeding-edge technologies developed at research facilities hidden in the Unknown Regions.",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Tech", "Torpedo", "Missile"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/8f7c4680fbc001169baf6538ab259e9b.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/18b2a1b00b2f8c6669b6b1d1b278dcf2.jpg",
            "ffg": 417,
            "hyperspace": true
          }
        ]
      },
    { 
        "name": "Upsilon-class command shuttle",
        "xws": "upsilonclassshuttle",
        "ffg": 51,
        "size": "Large",
        "dial": [
          "0OR",
          "1TR",
          "1BW",
          "1FB",
          "1NW",
          "1YR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR"
        ],
        "faction": "First Order",
        "stats": [
          { "type": "attack", "value": 4, "arc": "Front Arc" },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 6 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Reinforce" },
          { "difficulty": "White", "type": "Coordinate" },
          { "difficulty": "White", "type": "Jam" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_UpsilonShuttle.png",
        "pilots": [
          {
            "name": "Lieutenant Dormitz",
            "caption": "Hypercomms Specialist",
            "initiative": 2,
            "limited": 1,
            "cost": 70,
            "xws": "lieutenantdormitz",
            "ability": "Setup: After you are placed, other friendly ships can be placed anywhere in the play area at range 0-2 of you.",
            "shipAbility": {
              "name": "Linked Battery",
              "text": "While you perform a [Cannon] attack, roll 1 additional die."
            },
            "slots": [
              "Sensor",
              "Cannon",
              "Crew",
              "Crew",
              "Crew",
              "Modification",
              "Tech",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/e4acd80da2c39e25d4f999cb7c314fe5.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/4505cb1930309673fe5592dbc112d733.jpg",
            "ffg": 412,
            "hyperspace": true
          },
          {
            "name": "Major Stridan",
            "caption": "Stentorian Commander",
            "initiative": 4,
            "limited": 1,
            "cost": 64,
            "xws": "majorstridan",
            "ability": "While you coordinate or resolve the effect of one of your upgrades, you may treat friendly ships at range 2-3 as being at range 0 or range 1.",
            "shipAbility": {
              "name": "Linked Battery",
              "text": "While you perform a [Cannon] attack, roll 1 additional die."
            },
            "slots": [
              "Sensor",
              "Cannon",
              "Crew",
              "Crew",
              "Crew",
              "Modification",
              "Tech",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/8420beca035dedf1596c7c99255fb2e7.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/862f9dcc1ce9809f9a394d8f0b05f268.jpg",
            "ffg": 410,
            "hyperspace": true
          },
          {
            "name": "Petty Officer Thanisson",
            "xws": "pettyofficerthanisson",
            "caption": "Alert Flight Controller",
            "initiative": 1,
            "limited": 1,
            "cost": 62,
            "charges": { "value": 1, "recovers": 1 },
            "ability": "During the Activation or Engagement Phase, after a ship in your [Front Arc] at range 0-2 gains 1 stress token, you may spend 1 [Charge]. If you do, that ship gains 1 tractor token.",
            "shipAbility": {
              "name": "Linked Battery",
              "text": "While you perform a [Cannon] attack, roll 1 additional die."
            },
            "slots": [
              "Sensor",
              "Cannon",
              "Crew",
              "Crew",
              "Crew",
              "Modification",
              "Tech",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3a2232a5238d8bf5e7538fe1d6003dbc.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/24a40f6ec1875bfae9e7531b02252993.jpg",
            "ffg": 458,
            "hyperspace": true
          },
          {
            "name": "Starkiller Base Pilot",
            "xws": "starkillerbasepilot",
            "initiative": 2,
            "limited": 0,
            "cost": 58,
            "text": "The Upsilon-class command shuttle serves as a base of operations for many of the First Order's senior officers and agents. Its powerful sensors and communications equipment allow them to orchestrate the spread of terror across the galaxy.",
            "shipAbility": {
              "name": "Linked Battery",
              "text": "While you perform a [Cannon] attack, roll 1 additional die."
            },
            "slots": [
              "Sensor",
              "Cannon",
              "Crew",
              "Crew",
              "Crew",
              "Modification",
              "Tech",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/41f6d936f14a058ed1c5e6ac12de37c2.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/1ea0266ea42691778e8ecff6a5b50e45.jpg",
            "ffg": 413,
            "hyperspace": true
          },
          {
            "name": "Lieutenant Tavson",
            "caption": "Obedient Shuttle Pilot",
            "initiative": 3,
            "limited": 1,
            "cost": 64,
            "xws": "lieutenanttavson",
            "ability": "After you suffer damage, you may spend 1 [Charge] to perform an action.",
            "charges": { "value": 2, "recovers": 1 },
            "shipAbility": {
              "name": "Linked Battery",
              "text": "While you perform a [Cannon] attack, roll 1 additional die."
            },
            "slots": [
              "Sensor",
              "Cannon",
              "Crew",
              "Crew",
              "Crew",
              "Modification",
              "Tech",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/20fbf3ed79c50d2082cdb44caac26064.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/151154b50732a6dd42b411fc312137b9.jpg",
            "ffg": 411,
            "hyperspace": true
          },
          {
            "name": "Captain Cardinal",
            "caption": "Principled Instructor",
            "initiative": 4,
            "limited": 1,
            "cost": 65,
            "xws": "captaincardinal",
            "ability": "While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack, if you have at least 1 [Charge], that ship may reroll 1 [Focus] result. After an enemy ship at range 0-3 is destroyed, lose 1 [Charge].",
            "shipAbility": {
              "name": "Linked Battery",
              "text": "While you perform a [Cannon] attack, roll 1 additional die."
            },
            "charges": { "value": 2, "recovers": 0 },
            "slots": [
              "Sensor",
              "Cannon",
              "Crew",
              "Crew",
              "Crew",
              "Modification",
              "Tech",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/be29a69f75726ad48f607eecca671e01.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/a88822cc408323e561efd9e2acb83f2a.jpg",
            "ffg": 457,
            "hyperspace": true
          }
        ]
      },
    // Galactic Empire
    {
        "name": "Alpha-class Star Wing",
        "xws": "alphaclassstarwing",
        "ffg": 14,
        "size": "Small",
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FW",
          "3NW",
          "3YW",
          "4FR"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "SLAM" },
          { "difficulty": "White", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_AlphaStarwing.png",
        "pilots": [
          {
            "name": "Lieutenant Karsabi",
            "caption": "Brash Noble",
            "initiative": 3,
            "limited": 1,
            "cost": 37,
            "xws": "lieutenantkarsabi",
            "ability": "After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token.",
            "slots": [
              "Talent",
              "Sensor",
              "Torpedo",
              "Missile",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_136.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_136.jpg",
            "ffg": 136,
            "hyperspace": false
          },
          {
            "name": "Major Vynder",
            "caption": "Pragmatic Survivor",
            "initiative": 4,
            "limited": 1,
            "cost": 41,
            "xws": "majorvynder",
            "ability": "While you defend, if you are disarmed, roll 1 additional defense die.",
            "slots": [
              "Talent",
              "Sensor",
              "Torpedo",
              "Missile",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_135.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_135.jpg",
            "ffg": 135,
            "hyperspace": false
          },
          {
            "name": "Nu Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 32,
            "xws": "nusquadronpilot",
            "text": "With a design inspired by other Cygnus Spaceworks vessels, the Alpha-class star wing is a versatile craft assigned to Imperial Navy specialist units that need a starfighter they can outfit for multiple roles.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_138.png",
            "slots": [
              "Sensor",
              "Torpedo",
              "Missile",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_138.jpg",
            "ffg": 138,
            "hyperspace": false
          },
          {
            "name": "Rho Squadron Pilot",
            "initiative": 3,
            "limited": 0,
            "cost": 35,
            "xws": "rhosquadronpilot",
            "text": "The elite pilots of Rho Squadron instill terror in the Rebellion, using both the Xg-1 assault configuration and Os-1 arsenal loadout of the Alpha-class star wing to devastating effect.",
            "slots": [
              "Talent",
              "Sensor",
              "Torpedo",
              "Missile",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_137.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_137.jpg",
            "ffg": 137,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Lambda-class T-4a Shuttle",
        "xws": "lambdaclasst4ashuttle",
        "ffg": 26,
        "size": "Large",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TR",
          "2BW",
          "2FB",
          "2NW",
          "2YR",
          "3BR",
          "3FW",
          "3NR"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "arc": "Rear Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Reinforce" },
          { "difficulty": "White", "type": "Coordinate" },
          { "difficulty": "Red", "type": "Jam" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Lambda.png",
        "pilots": [
          {
            "name": "Captain Kagi",
            "caption": "The Emperor's Shuttle Pilot",
            "initiative": 4,
            "limited": 1,
            "cost": 48,
            "xws": "captainkagi",
            "ability": "At the start of the Engagement Phase, you may choose 1 or more friendly ships at range 0-3. If you do, transfer all enemy lock tokens from the chosen ships to you.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_142.png",
            "slots": ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_142.jpg",
            "ffg": 142,
            "hyperspace": false
          },
          {
            "name": "Colonel Jendon",
            "caption": "Darth Vader's Shuttle Pilot",
            "initiative": 3,
            "limited": 1,
            "cost": 46,
            "xws": "coloneljendon",
            "ability": "At the start of the Activation Phase, you may spend 1 [Charge]. If you do, while friendly ships acquire locks this round, they must acquire locks beyond range 3 instead of at range 0-3.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_143.png",
            "charges": { "value": 2, "recovers": 0 },
            "slots": ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_143.jpg",
            "ffg": 143,
            "hyperspace": false
          },
          {
            "name": "Lieutenant Sai",
            "caption": "Death Squadron Veteran",
            "initiative": 3,
            "limited": 1,
            "cost": 47,
            "xws": "lieutenantsai",
            "ability": "After you a perform a [Coordinate] action, if the ship you chose performed an action on your action bar, you may perform that action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_144.png",
            "slots": ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_144.jpg",
            "ffg": 144,
            "hyperspace": false
          },
          {
            "name": "Omicron Group Pilot",
            "initiative": 1,
            "limited": 0,
            "cost": 43,
            "xws": "omicrongrouppilot",
            "text": "Noted for its tri-wing design and advanced sensor suite, the Lambda-class shuttle serves a critical role as a light utility craft in the Imperial Navy.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_145.png",
            "slots": ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_145.jpg",
            "ffg": 145,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "TIE Advanced v1",
        "xws": "tieadvancedv1",
        "ffg": 25,
        "size": "Small",
        "dial": [
          "1TB",
          "1BB",
          "1NB",
          "1YB",
          "2ER",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "2RR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FW",
          "4KR",
          "5FW"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 2 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Barrel Roll"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Boost"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAdvancedPrototype.png",
        "pilots": [
          {
            "name": "Baron of the Empire",
            "initiative": 3,
            "limited": 0,
            "cost": 32,
            "xws": "baronoftheempire",
            "text": "Sienar Fleet System's TIE Advanced v1 is a groundbreaking starfighter design, featuring upgraded engines, a missile launcher, and folding s-foils.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_101.png",
            "slots": ["Talent", "Sensor", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_101.jpg",
            "ffg": 101,
            "hyperspace": false
          },
          {
            "name": "Grand Inquisitor",
            "caption": "Master of the Inquisitorious",
            "initiative": 5,
            "limited": 1,
            "cost": 52,
            "xws": "grandinquisitor",
            "ability": "While you defend at attack range 1, you may spend 1 [Force] to prevent the range 1 bonus. While you perform an attack against a defender at attack range 2-3, you may spend 1 [Force] to apply the range 1 bonus.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_99.png",
            "force": { "value": 2, "recovers": 1, "side": ["dark"] },
            "slots": ["Sensor", "Missile", "Force Power"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_99.jpg",
            "ffg": 99,
            "hyperspace": false
          },
          {
            "name": "Inquisitor",
            "initiative": 3,
            "limited": 0,
            "cost": 35,
            "xws": "inquisitor",
            "text": "The fearsome Inquisitors are given a great deal of autonomy and access to the Empire's latest technology, like the prototype TIE Advanced v1.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_102.png",
            "force": { "value": 1, "recovers": 1, "side": ["dark"] },
            "slots": ["Sensor", "Missile", "Force Power"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_102.jpg",
            "ffg": 102,
            "hyperspace": false
          },
          {
            "name": "Seventh Sister",
            "caption": "Sadistic Interrogator",
            "initiative": 4,
            "limited": 1,
            "cost": 43,
            "xws": "seventhsister",
            "ability": "While you perform a primary attack, before the Neutralize Results step, you may spend 2 [Force] to cancel 1 [Evade] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_100.png",
            "force": { "value": 2, "recovers": 1, "side": ["dark"] },
            "slots": ["Sensor", "Missile", "Force Power"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_100.jpg",
            "ffg": 100,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "TIE Advanced x1",
        "xws": "tieadvancedx1",
        "ffg": 13,
        "size": "Small",
        "dial": [
          "1BB",
          "1FW",
          "1NB",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3ER",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3RR",
          "4FW",
          "4KR",
          "5FW"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Barrel Roll" },
            "type": "Focus"
          },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAdvanced.png",
        "pilots": [
          {
            "name": "Darth Vader",
            "caption": "Black Leader",
            "initiative": 6,
            "limited": 1,
            "cost": 67,
            "xws": "darthvader",
            "ability": "After you perform an action, you may spend 1 [Force] to perform an action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_93.png",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/24/0a/240a5d21-309c-4d3d-aef9-5dab25564b7b/op18xu_card_altart2.png",
                "source": "European and North American Championship 2018"
              }
            ],
            "force": { "value": 3, "recovers": 1, "side": ["dark"] },
            "shipAbility": {
              "name": "Advanced Targeting Computer",
              "text": "While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result."
            },
            "slots": ["Sensor", "Missile", "Modification", "Force Power"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_93.jpg",
            "ffg": 93,
            "hyperspace": true
          },
          {
            "name": "Maarek Stele",
            "caption": "Servant of the Empire",
            "initiative": 5,
            "limited": 1,
            "cost": 46,
            "xws": "maarekstele",
            "ability": "While you perform an attack, if the defender would be dealt a faceup damage card, instead draw 3 damage cards, choose 1, and discard the rest.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_94.png",
            "shipAbility": {
              "name": "Advanced Targeting Computer",
              "text": "While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result."
            },
            "slots": ["Talent", "Sensor", "Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_94.jpg",
            "ffg": 94,
            "hyperspace": true
          },
          {
            "name": "Storm Squadron Ace",
            "initiative": 3,
            "limited": 0,
            "cost": 40,
            "xws": "stormsquadronace",
            "text": "The TIE Advanced x1 was produced in limited quantities, but Sienar engineers incorporated many of its best qualities into their next TIE model: the TIE Interceptor.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_97.png",
            "shipAbility": {
              "name": "Advanced Targeting Computer",
              "text": "While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result."
            },
            "slots": ["Talent", "Sensor", "Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_97.jpg",
            "ffg": 97,
            "hyperspace": true
          },
          {
            "name": "Tempest Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 38,
            "xws": "tempestsquadronpilot",
            "text": "The TIE Advanced improved on the popular TIE/ln design by adding shielding, better weapons systems, curved solar panels, and a hyperdrive.",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/19/d5/19d5865e-09d1-4bad-b8ac-8e0c5124745a/op18xu_card_plastic2.png",
                "source": "European and North American Championship 2018"
              }
            ],
            "shipAbility": {
              "name": "Advanced Targeting Computer",
              "text": "While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result."
            },
            "slots": ["Sensor", "Missile", "Modification"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_98.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_98.jpg",
            "ffg": 98,
            "hyperspace": true
          },
          {
            "name": "Ved Foslo",
            "caption": "Ambitious Engineer",
            "initiative": 4,
            "limited": 1,
            "cost": 45,
            "xws": "vedfoslo",
            "ability": "While you execute a maneuver, you may execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_95.png",
            "shipAbility": {
              "name": "Advanced Targeting Computer",
              "text": "While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result."
            },
            "slots": ["Talent", "Sensor", "Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_95.jpg",
            "ffg": 95,
            "hyperspace": true
          },
          {
            "name": "Zertik Strom",
            "caption": "Pitiless Administrator",
            "initiative": 3,
            "limited": 1,
            "cost": 42,
            "xws": "zertikstrom",
            "ability": "During the End Phase, you may spend a lock you have on an enemy ship to expose 1 of that ship's damage cards.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_96.png",
            "shipAbility": {
              "name": "Advanced Targeting Computer",
              "text": "While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result."
            },
            "slots": ["Sensor", "Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_96.jpg",
            "ffg": 96,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/ag Aggressor",
        "xws": "tieagaggressor",
        "ffg": 29,
        "size": "Small",
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FW",
          "4KR"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Evade" },
            "type": "Barrel Roll"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAggressor.png",
        "pilots": [
          {
            "name": "\"Double Edge\"",
            "caption": "Contingency Planner",
            "initiative": 2,
            "limited": 1,
            "cost": 31,
            "xws": "doubleedge",
            "ability": "After you perform a [Turret] or [Missile] attack that misses, you may perform a bonus attack using a different weapon.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_128.png",
            "slots": [
              "Talent",
              "Turret",
              "Missile",
              "Missile",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_128.jpg",
            "ffg": 128,
            "hyperspace": false
          },
          {
            "name": "Lieutenant Kestal",
            "caption": "Innate Deadeye",
            "initiative": 4,
            "limited": 1,
            "cost": 33,
            "xws": "lieutenantkestal",
            "ability": "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/[Focus] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_127.png",
            "slots": [
              "Talent",
              "Turret",
              "Missile",
              "Missile",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_127.jpg",
            "ffg": 127,
            "hyperspace": false
          },
          {
            "name": "Onyx Squadron Scout",
            "initiative": 3,
            "limited": 0,
            "cost": 30,
            "xws": "onyxsquadronscout",
            "text": "Designed for extended engagements, the TIE/ag is flown primarily by elite pilots trained to leverage both its unique weapons loadout and its maneuverability to full effect.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_129.png",
            "slots": [
              "Talent",
              "Turret",
              "Missile",
              "Missile",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_129.jpg",
            "ffg": 129,
            "hyperspace": false
          },
          {
            "name": "Sienar Specialist",
            "initiative": 2,
            "limited": 0,
            "cost": 28,
            "xws": "sienarspecialist",
            "text": "During the development of the TIE aggressor, Sienar Fleet Systems valued performance and versatility over raw cost efficiency.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_130.png",
            "slots": ["Turret", "Missile", "Missile", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_130.jpg",
            "ffg": 130,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "TIE/ca Punisher",
        "xws": "tiecapunisher",
        "ffg": 20,
        "size": "Medium",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4KR"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Lock" },
            "type": "Boost"
          },
          { "difficulty": "White", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEPunisher.png",
        "pilots": [
          {
            "name": "\"Deathrain\"",
            "caption": "Dexterous Bombardier",
            "initiative": 4,
            "limited": 1,
            "cost": 44,
            "xws": "deathrain",
            "ability": "After you drop or launch a device, you may perform an action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_140.png",
            "slots": [
              "Sensor",
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_140.jpg",
            "ffg": 140,
            "hyperspace": false
          },
          {
            "name": "\"Redline\"",
            "caption": "Adrenaline Junkie",
            "initiative": 5,
            "limited": 1,
            "cost": 52,
            "xws": "redline",
            "ability": "You can maintain up to 2 locks. After you perform an action, you may acquire a lock.",
            "slots": [
              "Sensor",
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_139.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_139.jpg",
            "ffg": 139,
            "hyperspace": false
          },
          {
            "name": "Cutlass Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 38,
            "xws": "cutlasssquadronpilot",
            "text": "The TIE punisher's design builds upon the success of the TIE bomber, adding shielding, a second bomb chute, and three additional ordnance pods, each equipped with a twin ion engine.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_141.png",
            "slots": [
              "Sensor",
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_141.jpg",
            "ffg": 141,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "TIE/D Defender",
        "xws": "tieddefender",
        "ffg": 18,
        "size": "Small",
        "dial": [
          "1TR",
          "1BB",
          "1NB",
          "1YR",
          "2TR",
          "2BW",
          "2FB",
          "2NW",
          "2YR",
          "2KR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FB",
          "4KW",
          "5FB"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEDefender.png",
        "pilots": [
          {
            "name": "Colonel Vessery",
            "caption": "Contemplative Commander",
            "initiative": 4,
            "limited": 1,
            "cost": 84,
            "xws": "colonelvessery",
            "ability": "While you perform an attack against a locked ship, after you roll attack dice, you may acquire a lock on the defender.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_123.png",
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "slots": ["Talent", "Sensor", "Cannon", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_123.jpg",
            "ffg": 123,
            "hyperspace": false
          },
          {
            "name": "Countess Ryad",
            "caption": "Cutthroat Politico",
            "initiative": 4,
            "limited": 1,
            "cost": 82,
            "xws": "countessryad",
            "ability": "While you would execute a [Straight] maneuver, you may increase the difficulty of the maneuver. If you do, execute it as a [Koiogran Turn] maneuver instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_124.png",
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "slots": ["Talent", "Sensor", "Cannon", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_124.jpg",
            "ffg": 124,
            "hyperspace": false
          },
          {
            "name": "Delta Squadron Pilot",
            "initiative": 1,
            "limited": 0,
            "cost": 69,
            "xws": "deltasquadronpilot",
            "text": "In addition to its missile launchers and six wingtip laser cannons, the formidable TIE defender is equipped with deflector shields and a hyperdrive.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_126.png",
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "slots": ["Sensor", "Cannon", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_126.jpg",
            "ffg": 126,
            "hyperspace": false
          },
          {
            "name": "Onyx Squadron Ace",
            "initiative": 4,
            "limited": 0,
            "cost": 75,
            "xws": "onyxsquadronace",
            "text": "The experimental TIE defender outclasses all other contemporary starfighters, though its size, speed, and array of weapons come at a tremendous cost in credits.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_125.png",
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "slots": ["Talent", "Sensor", "Cannon", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_125.jpg",
            "ffg": 125,
            "hyperspace": false
          },
          {
            "name": "Rexler Brath",
            "caption": "Onyx Leader",
            "initiative": 5,
            "limited": 1,
            "cost": 81,
            "xws": "rexlerbrath",
            "ability": "After you perform an attack that hits, if you are evading, expose 1 of the defender's damage cards.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_122.png",
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "slots": ["Talent", "Sensor", "Cannon", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_122.jpg",
            "ffg": 122,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "TIE Interceptor",
        "xws": "tieininterceptor",
        "ffg": 41,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2TB",
          "2BB",
          "2FB",
          "2NB",
          "2YB",
          "3LR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3PR",
          "4FB",
          "4KR",
          "5FW"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEInterceptor.png",
        "pilots": [
          {
            "name": "Alpha Squadron Pilot",
            "initiative": 1,
            "limited": 0,
            "cost": 34,
            "xws": "alphasquadronpilot",
            "text": "Sienar Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, a dramatic increase in firepower over its predecessors.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_106.png",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Modification", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_106.jpg",
            "ffg": 106,
            "hyperspace": true
          },
          {
            "name": "Saber Squadron Ace",
            "initiative": 4,
            "limited": 0,
            "cost": 40,
            "xws": "sabersquadronace",
            "text": "Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire's best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_105.png",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Talent", "Modification", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_105.jpg",
            "ffg": 105,
            "hyperspace": true
          },
          {
            "name": "Soontir Fel",
            "caption": "Ace of Legend",
            "initiative": 6,
            "limited": 1,
            "cost": 53,
            "xws": "soontirfel",
            "ability": "At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain 1 focus token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_103.png",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Talent", "Modification", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_103.jpg",
            "ffg": 103,
            "hyperspace": true
          },
          {
            "name": "Turr Phennir",
            "caption": "Ambitious Ace",
            "initiative": 4,
            "limited": 1,
            "cost": 44,
            "xws": "turrphennir",
            "ability": "After you perform an attack, you may perform a [Barrel Roll] or [Boost] action, even if you are stressed.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_104.png",
            "shipAbility": {
              "name": "Autothrusters",
              "text": "After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action."
            },
            "slots": ["Talent", "Modification", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_104.jpg",
            "ffg": 104,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/ln Fighter",
        "xws": "tielnfighter",
        "ffg": 11,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3KR",
          "4FW",
          "4KR",
          "5FW"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEFighter.png",
        "pilots": [
          {
            "name": "\"Howlrunner\"",
            "caption": "Obsidian Leader",
            "initiative": 5,
            "limited": 1,
            "cost": 40,
            "xws": "howlrunner",
            "ability": "While a friendly ship at range 0-1 performs a primary attack, that ship may reroll 1 attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_81.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_81.jpg",
            "ffg": 81,
            "hyperspace": true
          },
          {
            "name": "\"Mauler\" Mithel",
            "caption": "Black Two",
            "initiative": 5,
            "limited": 1,
            "cost": 32,
            "xws": "maulermithel",
            "ability": "While you perform an attack at attack range 1, roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_80.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_80.jpg",
            "ffg": 80,
            "hyperspace": true
          },
          {
            "name": "\"Night Beast\"",
            "caption": "Obsidian Two",
            "initiative": 2,
            "limited": 1,
            "cost": 26,
            "xws": "nightbeast",
            "ability": "After you fully execute a blue maneuver, you may perform a [Focus] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_88.png",
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_88.jpg",
            "ffg": 88,
            "hyperspace": true
          },
          {
            "name": "\"Scourge\" Skutu",
            "caption": "Seasoned Veteran",
            "initiative": 5,
            "limited": 1,
            "cost": 32,
            "xws": "scourgeskutu",
            "ability": "While you perform an attack against a defender in your [Bullseye Arc], roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_82.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_82.jpg",
            "ffg": 82,
            "hyperspace": true
          },
          {
            "name": "\"Wampa\"",
            "caption": "Black Eleven",
            "initiative": 1,
            "limited": 1,
            "cost": 30,
            "xws": "wampa",
            "ability": "While you perform an attack, you may spend 1 [Charge] to roll 1 additional attack die. After defending, lose 1 [Charge].",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_89.png",
            "charges": { "value": 1, "recovers": 1 },
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_89.jpg",
            "ffg": 89,
            "hyperspace": true
          },
          {
            "name": "Academy Pilot",
            "initiative": 1,
            "limited": 0,
            "cost": 23,
            "xws": "academypilot",
            "text": "The Galactic Empire uses the fast and agile TIE/ln, developed by Sienar Fleet Systems and produced in staggering quantity, as its primary starfighter.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_92.png",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/c9/4e/c94efa45-9cf7-4167-8e41-50d27d300f12/op066-academy-pilot.png",
                "source": "X-Wing Second Edition Launch Party"
              }
            ],
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_92.jpg",
            "ffg": 92,
            "hyperspace": true
          },
          {
            "name": "Black Squadron Ace",
            "initiative": 3,
            "limited": 0,
            "cost": 26,
            "xws": "blacksquadronace",
            "text": "The elite TIE/ln pilots of Black Squadron accompanied Darth Vader on a devastating strike against the Rebel forces at the Battle of Yavin.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_90.png",
            "slots": ["Talent", "Modification"],
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/fe/2b/fe2b0b19-b983-4665-aa8a-769fc2e03f64/op086-obsidian-squadron-pilot.png",
                "source": "Gen Con Indy 2018"
              }
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_90.jpg",
            "ffg": 90,
            "hyperspace": true
          },
          {
            "name": "Del Meeko",
            "caption": "Inferno Three",
            "initiative": 4,
            "limited": 1,
            "cost": 30,
            "xws": "delmeeko",
            "ability": "While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_85.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_85.jpg",
            "ffg": 85,
            "hyperspace": true
          },
          {
            "name": "Gideon Hask",
            "caption": "Inferno Two",
            "initiative": 4,
            "limited": 1,
            "cost": 30,
            "xws": "gideonhask",
            "ability": "While you perform an attack against a damaged defender, roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_84.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_84.jpg",
            "ffg": 84,
            "hyperspace": true
          },
          {
            "name": "Iden Versio",
            "caption": "Inferno Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 40,
            "xws": "idenversio",
            "ability": "Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 [Charge]. If you do, prevent that damage.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_83.png",
            "charges": { "value": 1, "recovers": 0 },
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_83.jpg",
            "ffg": 83,
            "hyperspace": true
          },
          {
            "name": "Obsidian Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 24,
            "xws": "obsidiansquadronpilot",
            "text": "The TIE fighter's Twin Ion Engine system was designed for speed, making the TIE/ln one of the most maneuverable starships ever mass-produced.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_91.png",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/12/55/12552f53-decc-49ff-8fe2-e4285d4ff31e/op066-obsidian-squadron-pilot.png",
                "source": "X-Wing Second Edition Launch Party"
              }
            ],
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_91.jpg",
            "ffg": 91,
            "hyperspace": true
          },
          {
            "name": "Seyn Marana",
            "caption": "Inferno Four",
            "initiative": 4,
            "limited": 1,
            "cost": 30,
            "xws": "seynmarana",
            "ability": "While you perform an attack, you may spend 1 [Critical Hit] result. If you do, deal 1 facedown damage card to the defender, then cancel your remaining results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_86.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_86.jpg",
            "ffg": 86,
            "hyperspace": true
          },
          {
            "name": "Valen Rudor",
            "caption": "Braggadocious Baron",
            "initiative": 3,
            "limited": 1,
            "cost": 28,
            "xws": "valenrudor",
            "ability": "After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_87.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_87.jpg",
            "ffg": 87,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/ph Phantom",
        "xws": "tiephphantom",
        "ffg": 27,
        "size": "Small",
        "dial": [
          "1TW",
          "1BW",
          "1NW",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3KR",
          "4FW",
          "4KR"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Cloak" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEPhantom.png",
        "pilots": [
          {
            "name": "\"Echo\"",
            "caption": "Slippery Trickster",
            "initiative": 4,
            "limited": 1,
            "cost": 51,
            "xws": "echo",
            "ability": "While you decloak, you must use the [2 [Bank Left]] or [2 [Bank Right]] template instead of the [2 [Straight]] template.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_132.png",
            "shipAbility": {
              "name": "Stygium Array",
              "text": "After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token."
            },
            "slots": ["Talent", "Sensor", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_132.jpg",
            "ffg": 132,
            "hyperspace": false
          },
          {
            "name": "\"Whisper\"",
            "caption": "Soft-Spoken Slayer",
            "initiative": 5,
            "limited": 1,
            "cost": 57,
            "xws": "whisper",
            "ability": "After you perform an attack that hits, gain 1 evade token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_131.png",
            "shipAbility": {
              "name": "Stygium Array",
              "text": "After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token."
            },
            "slots": ["Talent", "Sensor", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_131.jpg",
            "ffg": 131,
            "hyperspace": false
          },
          {
            "name": "Imdaar Test Pilot",
            "initiative": 3,
            "limited": 0,
            "cost": 44,
            "xws": "imdaartestpilot",
            "text": "The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom achieves what many thought was impossible: a small starfighter equipped with an advanced cloaking device.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_134.png",
            "shipAbility": {
              "name": "Stygium Array",
              "text": "After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token."
            },
            "slots": ["Sensor", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_134.jpg",
            "ffg": 134,
            "hyperspace": false
          },
          {
            "name": "Sigma Squadron Ace",
            "initiative": 4,
            "limited": 0,
            "cost": 48,
            "xws": "sigmasquadronace",
            "text": "Featuring a hyperdrive and shields, the TIE phantom is also equipped with five laser cannons, giving it substantial firepower for an Imperial fighter.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_133.png",
            "shipAbility": {
              "name": "Stygium Array",
              "text": "After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token."
            },
            "slots": ["Talent", "Sensor", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_133.jpg",
            "ffg": 133,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "TIE Reaper",
        "xws": "tiereaper",
        "ffg": 43,
        "size": "Medium",
        "dial": [
          "0OR",
          "1LR",
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "1PR",
          "2TR",
          "2BW",
          "2FB",
          "2NW",
          "2YR",
          "3BW",
          "3FB",
          "3NW"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "Red", "type": "Coordinate" },
          { "difficulty": "White", "type": "Jam" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEReaper.png",
        "pilots": [
          {
            "name": "\"Vizier\"",
            "caption": "Ruthless Tactician",
            "initiative": 2,
            "limited": 1,
            "cost": 45,
            "xws": "vizier",
            "ability": "After you fully execute a speed 1 maneuver using your Adaptive Ailerons ship ability, you may perform a [Coordinate] action. If you do, skip your Perform Action step.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_115.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Crew", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_115.jpg",
            "ffg": 115,
            "hyperspace": true
          },
          {
            "name": "Captain Feroph",
            "caption": "Imperial Courier",
            "initiative": 3,
            "limited": 1,
            "cost": 47,
            "xws": "captainferoph",
            "ability": "While you defend, if the attacker does not have any green tokens, you may change 1 of your blank or [Focus] results to an [Evade] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_114.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Talent", "Crew", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_114.jpg",
            "ffg": 114,
            "hyperspace": true
          },
          {
            "name": "Major Vermeil",
            "caption": "Veteran of Scarif",
            "initiative": 4,
            "limited": 1,
            "cost": 49,
            "xws": "majorvermeil",
            "ability": "While you perform an attack, if the defender does not have any green tokens, you may change 1 of your blank or [Focus] results to a [Hit] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_113.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Talent", "Crew", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_113.jpg",
            "ffg": 113,
            "hyperspace": true
          },
          {
            "name": "Scarif Base Pilot",
            "initiative": 1,
            "limited": 0,
            "cost": 41,
            "xws": "scarifbasepilot",
            "text": "The TIE reaper was designed to ferry elite troops to flashpoints on the battlefield, notably carrying Director Krennic's dreaded death troopers at the Battle of Scarif.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_116.png",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/d3/22/d3220543-7735-44fc-80a8-90507ca363c8/g18x2-scarif-base-pilot-2.png",
                "source": "Season Two 2018"
              }
            ],
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Crew", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_116.jpg",
            "ffg": 116,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/sa Bomber",
        "xws": "tiesabomber",
        "ffg": 19,
        "size": "Small",
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3KR",
          "4FW",
          "5KR"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 6 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Lock" },
            "type": "Barrel Roll"
          },
          { "difficulty": "Red", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEBomber.png",
        "pilots": [
          {
            "name": "\"Deathfire\"",
            "caption": "Unflinching Diehard",
            "initiative": 2,
            "limited": 1,
            "cost": 34,
            "xws": "deathfire",
            "ability": "After you are destroyed, before you are removed, you may perform an attack and drop or launch 1 device.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_110.png",
            "shipAbility": {
              "name": "Nimble Bomber",
              "text": "If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead."
            },
            "slots": [
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_110.jpg",
            "ffg": 110,
            "hyperspace": true
          },
          {
            "name": "Captain Jonus",
            "caption": "Disciplined Instructor",
            "initiative": 4,
            "limited": 1,
            "cost": 43,
            "xws": "captainjonus",
            "ability": "While a friendly ship at range 0-1 performs a [Torpedo] or [Missile] attack, that ship may reroll up to 2 attack dice.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_108.png",
            "shipAbility": {
              "name": "Nimble Bomber",
              "text": "If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead."
            },
            "slots": [
              "Talent",
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_108.jpg",
            "ffg": 108,
            "hyperspace": true
          },
          {
            "name": "Gamma Squadron Ace",
            "initiative": 3,
            "limited": 0,
            "cost": 32,
            "xws": "gammasquadronace",
            "text": "Though it sacrifices a degree of speed and maneuverability compared to a TIE/ln, the TIE bomber's increased payload can carry enough firepower to destroy virtually any enemy target.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_111.png",
            "shipAbility": {
              "name": "Nimble Bomber",
              "text": "If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead."
            },
            "slots": [
              "Talent",
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_111.jpg",
            "ffg": 111,
            "hyperspace": true
          },
          {
            "name": "Major Rhymer",
            "caption": "Scimitar Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 38,
            "xws": "majorrhymer",
            "ability": "While you perform a [Torpedo] or [Missile] attack, you may increase or decrease the range requirement by 1, to a limit of 0-3.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_109.png",
            "shipAbility": {
              "name": "Nimble Bomber",
              "text": "If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead."
            },
            "slots": [
              "Talent",
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_109.jpg",
            "ffg": 109,
            "hyperspace": true
          },
          {
            "name": "Scimitar Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 29,
            "xws": "scimitarsquadronpilot",
            "text": "The TIE/sa is exceptionally nimble for a bomber, allowing it to pinpoint its target while avoiding excessive collateral damage to the surrounding area.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_112.png",
            "shipAbility": {
              "name": "Nimble Bomber",
              "text": "If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead."
            },
            "slots": [
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_112.jpg",
            "ffg": 112,
            "hyperspace": true
          },
          {
            "name": "Tomax Bren",
            "caption": "Brash Maverick",
            "initiative": 5,
            "limited": 1,
            "cost": 36,
            "xws": "tomaxbren",
            "ability": "After you perform a [Reload] action, you may recover 1 [Charge] token on 1 of your equipped [Talent] upgrade cards.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_107.png",
            "shipAbility": {
              "name": "Nimble Bomber",
              "text": "If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead."
            },
            "slots": [
              "Talent",
              "Torpedo",
              "Missile",
              "Missile",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_107.jpg",
            "ffg": 107,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/sk Striker",
        "xws": "tieskstriker",
        "ffg": 16,
        "size": "Small",
        "dial": [
          "1TW",
          "1BB",
          "1FB",
          "1NB",
          "1YW",
          "1KR",
          "2LR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "2PR",
          "3BW",
          "3FB",
          "3NW"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEStriker.png",
        "pilots": [
          {
            "name": "\"Countdown\"",
            "caption": "Death Defier",
            "initiative": 4,
            "limited": 1,
            "cost": 44,
            "xws": "countdown",
            "ability": "While you defend, after the Neutralize Results step, if you are not stressed, you may suffer 1 [Hit] damage and gain 1 stress token. If you do, cancel all dice results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_118.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Talent", "Device", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_118.jpg",
            "ffg": 118,
            "hyperspace": true
          },
          {
            "name": "\"Duchess\"",
            "caption": "Urbane Ace",
            "initiative": 5,
            "limited": 1,
            "cost": 42,
            "xws": "duchess",
            "ability": "You may choose not to use your Adaptive Ailerons. You may use your Adaptive Ailerons even while stressed.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_117.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Talent", "Device", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_117.jpg",
            "ffg": 117,
            "hyperspace": true
          },
          {
            "name": "\"Pure Sabacc\"",
            "caption": "Confident Gambler",
            "initiative": 4,
            "limited": 1,
            "cost": 44,
            "xws": "puresabacc",
            "ability": "While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_119.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Talent", "Device", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_119.jpg",
            "ffg": 119,
            "hyperspace": true
          },
          {
            "name": "Black Squadron Scout",
            "initiative": 3,
            "limited": 0,
            "cost": 38,
            "xws": "blacksquadronscout",
            "text": "These heavily armed atmospheric craft employ their specialized moveable wings to gain additional speed and maneuverability.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_120.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Talent", "Device", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_120.jpg",
            "ffg": 120,
            "hyperspace": true
          },
          {
            "name": "Planetary Sentinel",
            "initiative": 1,
            "limited": 0,
            "cost": 34,
            "xws": "planetarysentinel",
            "text": "To protect its many military installations, the Empire requires a swift and vigilant defense force.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_121.png",
            "shipAbility": {
              "name": "Adaptive Ailerons",
              "text": "Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver."
            },
            "slots": ["Device", "Modification", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_121.jpg",
            "ffg": 121,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "VT-49 Decimator",
        "xws": "vt49decimator",
        "ffg": 28,
        "size": "Large",
        "dial": [
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TW",
          "3BW",
          "3FW",
          "3NW",
          "3YW",
          "4FW"
        ],
        "faction": "Galactic Empire",
        "stats": [
          { "arc": "Double Turret Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 0 },
          { "type": "hull", "value": 12 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Reinforce" },
          { "difficulty": "White", "type": "Rotate Arc" },
          { "difficulty": "Red", "type": "Coordinate" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Decimator.png",
        "pilots": [
          {
            "name": "Captain Oicunn",
            "caption": "Inspired Tactician",
            "initiative": 3,
            "limited": 1,
            "cost": 74,
            "xws": "captainoicunn",
            "ability": "You can perform primary attacks at range 0.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_146.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Crew",
              "Crew",
              "Device",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_146.jpg",
            "ffg": 146,
            "hyperspace": true
          },
          {
            "name": "Patrol Leader",
            "initiative": 2,
            "limited": 0,
            "cost": 68,
            "xws": "patrolleader",
            "text": "To be granted command of a VT-49 Decimator is seen as a significant promotion for a middling officer of the Imperial Navy.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_148.png",
            "slots": [
              "Torpedo",
              "Crew",
              "Crew",
              "Crew",
              "Device",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_148.jpg",
            "ffg": 148,
            "hyperspace": true
          },
          {
            "name": "Rear Admiral Chiraneau",
            "caption": "Advisor to Admiral Piett",
            "initiative": 5,
            "limited": 1,
            "cost": 76,
            "xws": "rearadmiralchiraneau",
            "ability": "While you perform an attack, if you are reinforced and the defender is in the [Full Front Arc] or [Full Rear Arc] matching your reinforce token, you may change 1 of your [Focus] results to a [Critical Hit] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_147.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Crew",
              "Crew",
              "Device",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_147.jpg",
            "ffg": 147,
            "hyperspace": true
          }
        ]
      },
    //   Galactic Republic
    {
        "name": "ARC-170 Starfighter",
        "xws": "arc170starfighter",
        "size": "Medium",
        "ffg": 31,
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4FR",
          "4KR"
        ],
        "faction": "Galactic Republic",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "arc": "Rear Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Arc-170.png",
        "pilots": [
          {
            "name": "\"Sinker\"",
            "caption": "Wolfpack Veteran",
            "initiative": 3,
            "limited": 1,
            "xws": "sinker",
            "ability": "While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/8297fc7d58ec0a5e6068f8dabbbc00f1.png",
            "slots": ["Torpedo", "Crew", "Astromech", "Modification", "Gunner"],
            "hyperspace": true,
            "cost": 54,
            "ffg": 526,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/04b3e18c19a0843f89353949c9ffcb77.jpg"
          },
          {
            "name": "\"Jag\"",
            "xws": "jag",
            "cost": 48,
            "slots": ["Torpedo", "Crew", "Astromech", "Modification", "Gunner"],
            "ffg": 525,
            "caption": "CT-55/11-9009",
            "initiative": 3,
            "limited": 1,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/124b11dde89cf986fcd8bc8e89094cf5.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/28152f1d6ee09d27a4afd2459947dc3d.png",
            "ability": "After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.",
            "hyperspace": true
          },
          {
            "name": "\"Odd Ball\"",
            "xws": "oddball-arc170starfighter",
            "cost": 52,
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Astromech",
              "Modification",
              "Gunner"
            ],
            "ffg": 523,
            "caption": "CC-2237",
            "initiative": 5,
            "limited": 1,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/597ace7e901187c88d9ff75bb34a1301.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/b0e39e35b57982a9cdffe663ff47b2dc.png",
            "ability": "After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.",
            "hyperspace": true
          },
          {
            "name": "\"Wolffe\"",
            "xws": "wolffe",
            "cost": 50,
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Astromech",
              "Modification",
              "Gunner"
            ],
            "ffg": 524,
            "caption": "CC-3636",
            "initiative": 4,
            "limited": 1,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/933ef28f6a8fda0c5741bd6a9a5f308d.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/2a15fd003a7fc1d475b562a958c6c263.png",
            "charges": { "value": 1, "recovers": 0 },
            "ability": "While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.",
            "hyperspace": true
          },
          {
            "name": "104th Battalion Pilot",
            "xws": "104thbattalionpilot",
            "cost": 42,
            "slots": ["Torpedo", "Crew", "Astromech", "Modification", "Gunner"],
            "ffg": 528,
            "initiative": 2,
            "limited": 0,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/5081daee997a2a55de474dad2e8e4a07.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/1798ea30f603f073200326864ef9424c.png",
            "text": "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
            "hyperspace": true
          },
          {
            "name": "Squad Seven Veteran",
            "xws": "squadsevenveteran",
            "cost": 46,
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Astromech",
              "Modification",
              "Gunner"
            ],
            "ffg": 527,
            "initiative": 3,
            "limited": 0,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/3c9cad4a6c8cdb6a7749a76e1b42ec23.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/0e0fb59b2806b41214275255986965f2.png",
            "text": "Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.",
            "hyperspace": true
          }
        ]
      },
    {
        "name": "BTL-B Y-wing",
        "xws": "btlbywing",
        "size": "Small",
        "ffg": 68,
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4FR",
          "4KR"
        ],
        "faction": "Galactic Republic",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 5 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" },
          { "difficulty": "Red", "type": "Reload" }
        ],
        "pilots": [
          {
            "name": "Shadow Squadron Veteran",
            "initiative": 3,
            "limited": 0,
            "xws": "shadowsquadronveteran",
            "text": "Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png",
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "hyperspace": true,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/84e5bef1597b232a20e52e1aa28a4c7e.jpg",
            "cost": 35,
            "ffg": 602,
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ]
          },
          {
            "name": "Anakin Skywalker",
            "initiative": 6,
            "limited": 1,
            "xws": "anakinskywalker-btlbywing",
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "force": { "value": 3, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "caption": "Hero of the Republic",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/7fc9010418aceb84cd9fb48d34e39ec8.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png",
            "ability": "After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.",
            "cost": 60,
            "ffg": 596,
            "slots": [
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner",
              "Force Power"
            ]
          },
          {
            "name": "R2-D2",
            "xws": "r2d2",
            "caption": "Bucket of Bolts",
            "cost": 35,
            "ffg": 600,
            "limited": 1,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/90c3f9aac7f44e4a6a860c81f93aae99.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              { "difficulty": "Red", "type": "Barrel Roll" },
              { "difficulty": "Red", "type": "Reload" }
            ],
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "ability": "At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.",
            "hyperspace": true,
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Crew",
              "Device",
              "Modification",
              "Gunner"
            ],
            "initiative": 2
          },
          {
            "name": "\"Odd Ball\"",
            "xws": "oddball-btlbywing",
            "initiative": 5,
            "limited": 1,
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "caption": "CC-2237",
            "hyperspace": true,
            "cost": 44,
            "ffg": 597,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/5f37609150489b6d49ca659d1b1caa8a.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3b260355bd12266e08ff25ec16d278fe.png",
            "ability": "After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ]
          },
          {
            "name": "\"Matchstick\"",
            "xws": "matchstick",
            "initiative": 4,
            "limited": 1,
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "hyperspace": true,
            "caption": "Shadow Two",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/8d8b63edff7a5e9969ca61ebb4456837.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png",
            "ability": "While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.",
            "cost": 43,
            "ffg": 598,
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ]
          },
          {
            "name": "\"Broadside\"",
            "xws": "broadside",
            "initiative": 3,
            "limited": 1,
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "hyperspace": true,
            "caption": "Shadow Three",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/d34e3bcb51d765f9dd12a9fc266e7ad9.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png",
            "ability": "While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.",
            "cost": 36,
            "ffg": 599,
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ]
          },
          {
            "name": "\"Goji\"",
            "xws": "goji",
            "initiative": 2,
            "limited": 1,
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "hyperspace": true,
            "caption": "Payload Specialist",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/026f989543c030d7c8e6757a9aab7a68.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/8ac74252d260a910a7990e6e806aa612.png",
            "ability": "While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb or mine at range 0-1 of it.",
            "cost": 34,
            "ffg": 601,
            "slots": [
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ]
          },
          {
            "name": "Red Squadron Bomber",
            "xws": "redsquadronbomber",
            "initiative": 2,
            "limited": 0,
            "shipAbility": {
              "name": "Plated Hull",
              "text": "While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result."
            },
            "text": "At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.",
            "hyperspace": true,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/e91e0d3a30e85c878f7493360d1b668f.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png",
            "cost": 33,
            "ffg": 603,
            "slots": [
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ]
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_BTL-B_Ywing.png"
      },
    {
        "name": "Delta-7 Aethersprite",
        "xws": "delta7aethersprite",
        "size": "Small",
        "dial": [
          "1TW",
          "1BB",
          "1NB",
          "1YW",
          "2LR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "2PR",
          "3BW",
          "3FB",
          "3NW",
          "4FW",
          "4KR",
          "5FW",
          "5KR"
        ],
        "faction": "Galactic Republic",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "Purple", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Delta-7.png",
        "pilots": [
          {
            "name": "Jedi Knight",
            "initiative": 3,
            "limited": 0,
            "xws": "jediknight",
            "text": "When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/13d08d0d1131e7a11f6d10fd1626bff9.png",
            "force": { "value": 1, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "cost": 38,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 515,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/d3bf6f2f5482c2b68a4d3d02cd758a68.jpg"
          },
          {
            "name": "Obi-Wan Kenobi",
            "caption": "Guardian of the Republic",
            "initiative": 5,
            "limited": 1,
            "xws": "obiwankenobi",
            "ability": "After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/fcf515534a722b581bc2f85f36cb5c30.png",
            "force": { "value": 3, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "cost": 47,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 511,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/f449693ccfd6529244ea7765eed2f83f.jpg"
          },
          {
            "name": "Plo Koon",
            "caption": "Serene Mentor",
            "initiative": 5,
            "limited": 1,
            "xws": "plokoon",
            "ability": "At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/c0936c57c897ea7bacadf723cfcbd0b6.png",
            "force": { "value": 2, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "cost": 44,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 513,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/a4f58c67ecedcb9fcfa6ee45613c002e.jpg"
          },
          {
            "name": "Saesee Tiin",
            "caption": "Prophetic Pilot",
            "initiative": 4,
            "limited": 1,
            "xws": "saeseetiin",
            "ability": "After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/e0fdedf1af8fd1e5b36c2fba17b4f6b0.png",
            "force": { "value": 2, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "cost": 43,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 514,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/e36d5e616e0b0135b0faa1c9f46992a1.jpg"
          },
          {
            "name": "Mace Windu",
            "caption": "Harsh Traditionalist",
            "initiative": 4,
            "limited": 1,
            "xws": "macewindu",
            "ability": "After you fully execute a red maneuver, recover 1 [Force].",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/f0c905f162de8d77dd78c3d49cca77f1.png",
            "force": { "value": 3, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "cost": 45,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 512,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/ba6c851af3b8f650d8dcb865a05636f2.jpg"
          },
          {
            "name": "Anakin Skywalker",
            "caption": "Hero of the Republic",
            "initiative": 6,
            "limited": 1,
            "xws": "anakinskywalker",
            "ability": "After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "force": { "value": 3, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d60f4eca355471465ca3f6b99fb98e56.png",
            "cost": 62,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 507,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/dc121e1b285f30e4708bda6c0594b55f.jpg"
          },
          {
            "name": "Ahsoka Tano",
            "caption": "\"Snips\"",
            "initiative": 3,
            "limited": 1,
            "xws": "ahsokatano",
            "ability": "After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "force": { "value": 2, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/15f6bf84f63970c982dd722a5473217f.png",
            "cost": 47,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 510,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/0fc229b9b79c9f6c750a587614729293.jpg"
          },
          {
            "name": "Barriss Offee",
            "caption": "Conflicted Padawan",
            "initiative": 4,
            "limited": 1,
            "xws": "barrissoffee",
            "ability": "While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "force": { "value": 1, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/f8f58005da18d7041b1ec2374701465c.png",
            "cost": 39,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 509,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/6eb248dfda52dc29a8aa4fda7e414eab.jpg"
          },
          {
            "name": "Luminara Unduli",
            "caption": "Wise Protector",
            "initiative": 4,
            "limited": 1,
            "xws": "luminaraunduli",
            "ability": "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
            "shipAbility": {
              "name": "Fine-tuned Controls",
              "text": "After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action."
            },
            "force": { "value": 2, "recovers": 1, "side": ["light"] },
            "hyperspace": true,
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/7f87b6c12631687bedf75a18582af0b0.png",
            "cost": 43,
            "slots": ["Astromech", "Modification", "Force Power", "Configuration"],
            "ffg": 508,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/22519908330c72696863815565a2beda.jpg"
          }
        ],
        "ffg": 61
      },
    {
        "name": "Naboo Royal N-1 Starfighter",
        "xws": "nabooroyaln1starfighter",
        "size": "Small",
        "ffg": 63,
        "dial": [
          "1BW",
          "1FW",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3ER",
          "3TW",
          "3BB",
          "3FB",
          "3NB",
          "3YW",
          "3RR",
          "4FW",
          "5FW"
        ],
        "faction": "Galactic Republic",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "pilots": [
          {
            "name": "Anakin Skywalker",
            "initiative": 4,
            "limited": 1,
            "xws": "anakinskywalker-nabooroyaln1starfighter",
            "hyperspace": true,
            "cost": 41,
            "slots": ["Talent", "Sensor", "Torpedo", "Astromech"],
            "ability": "Before you reveal your maneuver, you may spend 1 [Force] to barrel roll (this is not an action).",
            "force": { "value": 1, "recovers": 1, "side": ["light"] },
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "ffg": 558,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/d9180cc98a1a4384bb2a0e11efbf1311.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/21e28ea4e8784dce5a554a33888d8be0.png",
            "caption": "Hero of Naboo"
          },
          {
            "name": "Ric Olié",
            "xws": "ricolie",
            "initiative": 5,
            "limited": 1,
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "caption": "Bravo Leader",
            "hyperspace": true,
            "cost": 42,
            "slots": ["Talent", "Sensor", "Torpedo", "Astromech"],
            "ability": "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's, roll 1 additional die.",
            "ffg": 557,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/26080de6b705112c0d7d53de48484bb0.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/87829b7b808c535eb1e2c8314b04971a.png"
          },
          {
            "name": "Padmé Amidala",
            "xws": "padmeamidala",
            "initiative": 4,
            "limited": 1,
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "caption": "Aggressive Negotiator",
            "hyperspace": true,
            "cost": 45,
            "slots": ["Talent", "Sensor", "Torpedo", "Astromech"],
            "ability": "While an enemy ship in your [Front Arc] defends or performs an attack, that ship can modify only 1 [Focus] result (other results can still be modified).",
            "ffg": 559,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/254a567fa647e783bcd3fb9c09377e3d.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3bc6bb14d0c80011145a36c132550298.png"
          },
          {
            "name": "Dineé Ellberger",
            "xws": "dineeellberger",
            "caption": "Bravo Five",
            "initiative": 3,
            "limited": 1,
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "hyperspace": true,
            "cost": 38,
            "slots": ["Talent", "Sensor", "Torpedo", "Astromech"],
            "ability": "While you defend or perform an attack, if the speed of your revealed maneuver is the same as the enemy ship's, that ship's dice cannot be modified.",
            "ffg": 560,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/3f71de47ef3b5986a433757a00f4230b.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/06e0863851b95dba4874b211e05661cc.png"
          },
          {
            "name": "Bravo Flight Officer",
            "xws": "bravoflightofficer",
            "initiative": 2,
            "limited": 0,
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "text": "The volunteer pilots of the Royal Naboo Security Force are dedicated to protecting the people and ideals of their homeworld, and trust their Queen to send them into battle only when all other options have failed.",
            "hyperspace": true,
            "cost": 34,
            "slots": ["Sensor", "Torpedo", "Astromech"],
            "ffg": 562,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/4e1a2195431b026de73c90f8ce5f7c20.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/274db1f70ed4da939b9440837a30c39a.png"
          },
          {
            "name": "Naboo Handmaiden",
            "xws": "naboohandmaiden",
            "caption": "Regal Ruse",
            "initiative": 1,
            "limited": 2,
            "shipAbility": {
              "name": "Full Throttle",
              "text": "After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action."
            },
            "hyperspace": true,
            "conditions": ["decoyed"],
            "ability": "Setup: After placing forces, assign the Decoyed condition to 1 friendly ship other than Naboo Handmaiden.",
            "cost": 44,
            "slots": ["Sensor", "Torpedo", "Astromech"],
            "ffg": 561,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/afe1521a12124eeff41ed4234e7591ac.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/4493fe57050175b6a75e3a13e7553b1e.png"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Royal_Naboo_N-1_Starfighter.png"
      },
    {
        "name": "V-19 Torrent Starfighter",
        "xws": "v19torrentstarfighter",
        "size": "Small",
        "dial": [
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2ER",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "2RR",
          "3BR",
          "3FB",
          "3NR",
          "3KR",
          "4FW"
        ],
        "faction": "Galactic Republic",
        "stats": [
          { "type": "attack", "arc": "Front Arc", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 5 }
        ],
        "actions": [
          { "type": "Focus", "difficulty": "White" },
          { "type": "Evade", "difficulty": "White" },
          { "type": "Lock", "difficulty": "White" },
          {
            "type": "Barrel Roll",
            "difficulty": "White",
            "linked": { "type": "Evade", "difficulty": "Red" }
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_V-19Torrent.png",
        "pilots": [
          {
            "name": "\"Kickback\"",
            "caption": "Blue Four",
            "xws": "kickback",
            "initiative": 4,
            "limited": 1,
            "ability": "After you perform a [Barrel Roll] action, you may perform a red [Lock] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/76c1228dd4c70dc4e56ac99284a11b0f.png",
            "hyperspace": true,
            "cost": 33,
            "slots": ["Talent", "Missile", "Modification"],
            "ffg": 517,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/50b08d380769e7127b0d3f5dbbd89d1f.jpg"
          },
          {
            "name": "\"Odd Ball\"",
            "caption": "CC-2237",
            "xws": "oddball",
            "initiative": 5,
            "limited": 1,
            "ability": "After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/9ecf7600f20da9a9eff5d3e244934ccb.png",
            "hyperspace": true,
            "cost": 35,
            "slots": ["Talent", "Missile", "Modification"],
            "ffg": 516,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/2a20c8f88cf55b75df4909f74b0221a2.jpg"
          },
          {
            "name": "\"Swoop\"",
            "caption": "Blue Six",
            "xws": "swoop",
            "initiative": 3,
            "limited": 1,
            "ability": "After a friendly small or medium ship fully executes a speed 3-4 maneuver, if it is at range 0-1, it may perform a red [Boost] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/8ae255235c0c1d3892344fb43fcab773.png",
            "hyperspace": true,
            "cost": 31,
            "slots": ["Talent", "Missile", "Modification"],
            "ffg": 519,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/c8c96604a64fce6b953a8b4dc4ff86e6.jpg"
          },
          {
            "name": "\"Axe\"",
            "caption": "Blue Two",
            "xws": "axe",
            "initiative": 3,
            "limited": 1,
            "ability": "After you defend or perform an attack, you may choose a friendly ship at range 1-2 in your [Left Arc] or [Right Arc]. If you do, transfer 1 green token to that ship.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/89ade203dec6b0fa5ed6360aae3b3022.png",
            "hyperspace": true,
            "cost": 32,
            "slots": ["Talent", "Missile", "Modification"],
            "ffg": 518,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/3129e7fc822115a91a04004c35ceda18.jpg"
          },
          {
            "name": "\"Tucker\"",
            "caption": "Blue Five",
            "xws": "tucker",
            "initiative": 2,
            "limited": 1,
            "ability": "After a friendly ship at range 1-2 performs an attack against an enemy ship in your [Front Arc], you may perform a [Focus] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/a457cc2ab3038736cb37541ad94b9b34.png",
            "hyperspace": true,
            "cost": 29,
            "slots": ["Missile", "Modification"],
            "ffg": 520,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/0b24c3261656d83b685ac59e6dfb1817.jpg"
          },
          {
            "name": "Blue Squadron Protector",
            "xws": "bluesquadronprotector",
            "initiative": 3,
            "limited": 0,
            "text": "Blue Squadron's elite clone pilots are trained to fly their V-19s in conjunction with Jedi and often support famous commanders such as Anakin Skywalker and Ahsoka Tano.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/77b2dfdca20865d8d667c41539a7356e.png",
            "hyperspace": true,
            "cost": 28,
            "slots": ["Talent", "Missile", "Modification"],
            "ffg": 521,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/74667d2878cb823d14035e91c8773816.jpg"
          },
          {
            "name": "Gold Squadron Trooper",
            "xws": "goldsquadrontrooper",
            "initiative": 2,
            "limited": 0,
            "text": "The V-19 Torrent starfighter was designed to be a light escort to nimble Delta-7 interceptors flown by Jedi Knights, and has a unique flight profile to reflect this role.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/ed881318b45485a197e514b2d13e178c.png",
            "hyperspace": true,
            "cost": 25,
            "slots": ["Missile", "Modification"],
            "ffg": 522,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/e4ba0b540259e9026142e6fa5e837685.jpg"
          }
        ],
        "ffg": 62
      },
    //   Rebel Alliance
    {
        "name": "A/SF-01 B-wing",
        "xws": "asf01bwing",
        "ffg": 17,
        "size": "Small",
        "dial": [
          "1ER",
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "1RR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "2KR",
          "3BR",
          "3FB",
          "3NR",
          "4FR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Barrel Roll" },
            "type": "Focus"
          },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_B-wing.png",
        "pilots": [
          {
            "name": "Blade Squadron Veteran",
            "initiative": 3,
            "limited": 0,
            "cost": 43,
            "xws": "bladesquadronveteran",
            "text": "A unique gyrostabilization system surrounds the B-wing's cockpit, ensuring that the pilot always remains stationary during flight.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_25.png",
            "slots": [
              "Talent",
              "Sensor",
              "Cannon",
              "Cannon",
              "Torpedo",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_25.jpg",
            "ffg": 25,
            "hyperspace": true
          },
          {
            "name": "Blue Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 41,
            "xws": "bluesquadronpilot",
            "text": "Due to its heavy weapons array and resilient shielding, the B-wing has solidified itself as the Rebel Alliance's most innovative assault fighter.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_26.png",
            "slots": ["Sensor", "Cannon", "Cannon", "Torpedo", "Modification"],
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/a4/a6/a4a6943b-6af3-4d33-9a04-bff98190d3ee/g18x3-blue-squadron-pilot-2.png",
                "source": "Season Three 2018"
              }
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_26.jpg",
            "ffg": 26,
            "hyperspace": true
          },
          {
            "name": "Braylen Stramm",
            "caption": "Blade Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 51,
            "xws": "braylenstramm",
            "ability": "While you defend or perform an attack, if you are stressed, you may reroll up to 2 of your dice.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_23.png",
            "slots": [
              "Talent",
              "Sensor",
              "Cannon",
              "Cannon",
              "Torpedo",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_23.jpg",
            "ffg": 23,
            "hyperspace": true
          },
          {
            "name": "Ten Numb",
            "caption": "Blue Five",
            "initiative": 4,
            "limited": 1,
            "cost": 48,
            "xws": "tennumb",
            "ability": "While you defend or perform an attack, you may spend 1 stress token to change all of your [Focus] results to [Evade] or [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_24.png",
            "slots": [
              "Talent",
              "Sensor",
              "Cannon",
              "Cannon",
              "Torpedo",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_24.jpg",
            "ffg": 24,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "ARC-170 Starfighter",
        "xws": "arc170starfighter",
        "ffg": 31,
        "size": "Medium",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4FR",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "arc": "Rear Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Arc-170.png",
        "pilots": [
          {
            "name": "Garven Dreis",
            "caption": "Red Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 49,
            "xws": "garvendreis",
            "ability": "After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_66.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Astromech",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_66.jpg",
            "ffg": 66,
            "hyperspace": false
          },
          {
            "name": "Ibtisam",
            "caption": "Survivor of Endor",
            "initiative": 3,
            "limited": 1,
            "cost": 48,
            "xws": "ibtisam",
            "ability": "After you fully execute a maneuver, if you are stressed, you may roll 1 attack die. On a [Hit] or [Critical Hit] result, remove 1 stress token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_68.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Astromech",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_68.jpg",
            "ffg": 68,
            "hyperspace": false
          },
          {
            "name": "Norra Wexley",
            "caption": "Gold Nine",
            "initiative": 5,
            "limited": 1,
            "cost": 55,
            "xws": "norrawexley",
            "ability": "While you defend, if there is an enemy ship at range 0-1, you may add 1 [Evade] result to your dice results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_65.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Astromech",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_65.jpg",
            "ffg": 65,
            "hyperspace": false
          },
          {
            "name": "Shara Bey",
            "caption": "Green Four",
            "initiative": 4,
            "limited": 1,
            "cost": 50,
            "xws": "sharabey",
            "ability": "While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_67.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Astromech",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_67.jpg",
            "ffg": 67,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Attack Shuttle",
        "xws": "attackshuttle",
        "ffg": 32,
        "size": "Small",
        "dial": [
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4FW",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Evade" },
            "type": "Barrel Roll"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_AttackShuttle.png",
        "pilots": [
          {
            "name": "\"Zeb\" Orrelios",
            "caption": "Spectre-4",
            "initiative": 2,
            "limited": 1,
            "cost": 34,
            "xws": "zeborrelios",
            "ability": "While you defend, [Critical Hit] results are neutralized before [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_37.png",
            "shipAbility": {
              "name": "Locked and Loaded",
              "text": "While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack."
            },
            "slots": ["Turret", "Crew", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_37.jpg",
            "ffg": 37,
            "hyperspace": false
          },
          {
            "name": "Ezra Bridger",
            "caption": "Spectre-6",
            "initiative": 3,
            "limited": 1,
            "cost": 41,
            "xws": "ezrabridger",
            "ability": "While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_36.png",
            "force": { "value": 1, "recovers": 1, "side": ["light"] },
            "shipAbility": {
              "name": "Locked and Loaded",
              "text": "While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack."
            },
            "slots": ["Turret", "Crew", "Modification", "Title", "Force Power"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_36.jpg",
            "ffg": 36,
            "hyperspace": false
          },
          {
            "name": "Hera Syndulla",
            "caption": "Spectre-2",
            "initiative": 5,
            "limited": 1,
            "cost": 39,
            "xws": "herasyndulla",
            "ability": "After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_34.png",
            "shipAbility": {
              "name": "Locked and Loaded",
              "text": "While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack."
            },
            "slots": ["Talent", "Turret", "Crew", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_34.jpg",
            "ffg": 34,
            "hyperspace": false
          },
          {
            "name": "Sabine Wren",
            "caption": "Spectre-5",
            "initiative": 3,
            "limited": 1,
            "cost": 42,
            "xws": "sabinewren",
            "ability": "Before you activate, you may perform a [Barrel Roll] or [Boost] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_35.png",
            "shipAbility": {
              "name": "Locked and Loaded",
              "text": "While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack."
            },
            "slots": ["Talent", "Turret", "Crew", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_35.jpg",
            "ffg": 35,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Auzituck Gunship",
        "xws": "auzituckgunship",
        "ffg": 6,
        "size": "Small",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FW"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Full Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Reinforce" },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Auzituck.png",
        "pilots": [
          {
            "name": "Kashyyyk Defender",
            "initiative": 1,
            "limited": 0,
            "cost": 46,
            "xws": "kashyyykdefender",
            "text": "Equipped with three wide-range Sureggi twin laser cannons, the Auzituck gunship acts as a powerful deterrent to slaver operations in the Kashyyyk system.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_33.png",
            "slots": ["Crew", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_33.jpg",
            "ffg": 33,
            "hyperspace": false
          },
          {
            "name": "Lowhhrick",
            "caption": "Escaped Gladiator",
            "initiative": 3,
            "limited": 1,
            "cost": 52,
            "xws": "lowhhrick",
            "ability": "After a friendly ship at range 0-1 becomes the defender, you may spend 1 reinforce token. If you do, that ship gains 1 evade token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_32.png",
            "slots": ["Talent", "Crew", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_32.jpg",
            "ffg": 32,
            "hyperspace": false
          },
          {
            "name": "Wullffwarro",
            "caption": "Wookiee Chief",
            "initiative": 4,
            "limited": 1,
            "cost": 56,
            "xws": "wullffwarro",
            "ability": "While you perform a primary attack, if you are damaged, you may roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_31.png",
            "slots": ["Talent", "Crew", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_31.jpg",
            "ffg": 31,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "BTL-A4 Y-wing",
        "xws": "btla4ywing",
        "ffg": 12,
        "size": "Small",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4FR",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" },
          { "difficulty": "Red", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Y-wing.png",
        "pilots": [
          {
            "name": "\"Dutch\" Vander",
            "caption": "Gold Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 40,
            "xws": "dutchvander",
            "ability": "After you perform the [Lock] action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_14.png",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_14.jpg",
            "ffg": 14,
            "hyperspace": true
          },
          {
            "name": "Evaan Verlaine",
            "caption": "Gold Three",
            "initiative": 3,
            "limited": 1,
            "cost": 35,
            "xws": "evaanverlaine",
            "ability": "At the start of the Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, that ship rolls 1 additional defense die while defending until the end of the round.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_16.png",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_16.jpg",
            "ffg": 16,
            "hyperspace": true
          },
          {
            "name": "Gold Squadron Veteran",
            "initiative": 3,
            "limited": 0,
            "cost": 33,
            "xws": "goldsquadronveteran",
            "text": "Commanded by Jon \"Dutch\" Vander, Gold Squadron played an instrumental role in the Battles of Scarif and Yavin.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_17.png",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ],
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/6e/42/6e42ac70-c222-4ca5-ad3a-dc9350988933/op086-gold-squadron-veteran.png",
                "source": "Gen Con Indy 2018"
              }
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_17.jpg",
            "ffg": 17,
            "hyperspace": true
          },
          {
            "name": "Gray Squadron Bomber",
            "initiative": 2,
            "limited": 0,
            "cost": 31,
            "xws": "graysquadronbomber",
            "text": "Long after the Y-wing was phased out by the Galactic Empire, its durability, dependability, and heavy armament help it remain a staple in the Rebel fleet.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_18.png",
            "slots": [
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_18.jpg",
            "ffg": 18,
            "hyperspace": true
          },
          {
            "name": "Horton Salm",
            "caption": "Gray Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 37,
            "xws": "hortonsalm",
            "ability": "While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_15.png",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_15.jpg",
            "ffg": 15,
            "hyperspace": true
          },
          {
            "name": "Norra Wexley",
            "caption": "Gold Nine",
            "initiative": 5,
            "limited": 1,
            "cost": 41,
            "xws": "norrawexley-btla4ywing",
            "ability": "While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_13.png",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_13.jpg",
            "ffg": 13,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "BTL-S8 K-wing",
        "xws": "btls8kwing",
        "ffg": 30,
        "size": "Medium",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3BW",
          "3FW",
          "3NW"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Double Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "SLAM" },
          { "difficulty": "White", "type": "Rotate Arc" },
          { "difficulty": "White", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_K-wing.png",
        "pilots": [
          {
            "name": "Esege Tuketu",
            "caption": "Selfless Hero",
            "initiative": 3,
            "limited": 1,
            "cost": 45,
            "xws": "esegetuketu",
            "ability": "While a friendly ship at range 0-2 defends or performs an attack, it may spend your focus tokens as if that ship has them.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_63.png",
            "slots": [
              "Torpedo",
              "Missile",
              "Missile",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_63.jpg",
            "ffg": 63,
            "hyperspace": false
          },
          {
            "name": "Miranda Doni",
            "caption": "Heavy Hitter",
            "initiative": 4,
            "limited": 1,
            "cost": 43,
            "xws": "mirandadoni",
            "ability": "While you perform a primary attack, you may either spend 1 shield to roll 1 additional attack die or, if you are not shielded, you may roll 1 fewer attack die to recover 1 shield.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_62.png",
            "slots": [
              "Torpedo",
              "Missile",
              "Missile",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_62.jpg",
            "ffg": 62,
            "hyperspace": false
          },
          {
            "name": "Warden Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 39,
            "xws": "wardensquadronpilot",
            "text": "Koensayr Manufacturing's K-wing boasts an advanced SubLight Acceleration Motor and an unprecedented 18 hard points, granting it unrivaled speed and firepower.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_64.png",
            "slots": [
              "Torpedo",
              "Missile",
              "Missile",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_64.jpg",
            "ffg": 64,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "E-wing",
        "xws": "ewing",
        "ffg": 40,
        "size": "Small",
        "dial": [
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3LR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3PR",
          "4FB",
          "4KR",
          "5FW"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Lock" },
            "type": "Barrel Roll"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Lock" },
            "type": "Boost"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_E-wing.png",
        "pilots": [
          {
            "name": "Corran Horn",
            "caption": "Tenacious Investigator",
            "initiative": 5,
            "limited": 1,
            "cost": 66,
            "xws": "corranhorn",
            "ability": "At initiative 0, you may perform a bonus primary attack against an enemy ship in your [Bullseye Arc]. If you do, at the start of the next Planning Phase, gain 1 disarm token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_50.png",
            "shipAbility": {
              "name": "Experimental Scanners",
              "text": "You can acquire locks beyond range 3. You cannot acquire locks at range 1."
            },
            "slots": ["Talent", "Sensor", "Torpedo", "Astromech", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_50.jpg",
            "ffg": 50,
            "hyperspace": false
          },
          {
            "name": "Gavin Darklighter",
            "caption": "Bold Wingman",
            "initiative": 4,
            "limited": 1,
            "cost": 61,
            "xws": "gavindarklighter",
            "ability": "While a friendly ship performs an attack, if the defender is in your [Front Arc], the attacker may change 1 [Hit] result to a [Critical Hit] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_51.png",
            "shipAbility": {
              "name": "Experimental Scanners",
              "text": "You can acquire locks beyond range 3. You cannot acquire locks at range 1."
            },
            "slots": ["Talent", "Sensor", "Torpedo", "Astromech", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_51.jpg",
            "ffg": 51,
            "hyperspace": false
          },
          {
            "name": "Knave Squadron Escort",
            "initiative": 2,
            "limited": 0,
            "cost": 52,
            "xws": "knavesquadronescort",
            "text": "Designed to combine the best features of the X-wing series with the A-wing series, the E-wing boasts superior firepower, speed, and maneuverability.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_53.png",
            "shipAbility": {
              "name": "Experimental Scanners",
              "text": "You can acquire locks beyond range 3. You cannot acquire locks at range 1."
            },
            "slots": ["Sensor", "Torpedo", "Astromech", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_53.jpg",
            "ffg": 53,
            "hyperspace": false
          },
          {
            "name": "Rogue Squadron Escort",
            "initiative": 4,
            "limited": 0,
            "cost": 54,
            "xws": "roguesquadronescort",
            "text": "The elite pilots of Rogue Squadron are among the Rebellion's very best.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_52.png",
            "shipAbility": {
              "name": "Experimental Scanners",
              "text": "You can acquire locks beyond range 3. You cannot acquire locks at range 1."
            },
            "slots": ["Talent", "Sensor", "Torpedo", "Astromech", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_52.jpg",
            "ffg": 52,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "HWK-290 Light Freighter",
        "xws": "hwk290lightfreighter",
        "ffg": 34,
        "size": "Small",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TR",
          "3BW",
          "3FB",
          "3NW",
          "3YR",
          "4FW"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Single Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Rotate Arc" },
            "type": "Focus"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Rotate Arc" },
            "type": "Lock"
          },
          { "difficulty": "Red", "type": "Boost" },
          { "difficulty": "White", "type": "Rotate Arc" },
          { "difficulty": "Red", "type": "Jam" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_HWK-290.png",
        "pilots": [
          {
            "name": "Jan Ors",
            "caption": "Espionage Expert",
            "initiative": 5,
            "limited": 1,
            "cost": 43,
            "xws": "janors",
            "ability": "While a friendly ship in your firing arc performs a primary attack, if you are not stressed, you may gain 1 stress token. If you do, that ship may roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_42.png",
            "slots": [
              "Talent",
              "Crew",
              "Device",
              "Modification",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_42.jpg",
            "ffg": 42,
            "hyperspace": false
          },
          {
            "name": "Kyle Katarn",
            "caption": "Relentless Operative",
            "initiative": 3,
            "limited": 1,
            "cost": 36,
            "xws": "kylekatarn",
            "ability": "At the start of the Engagement Phase, you may transfer 1 of your focus tokens to a friendly ship in your firing arc.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_43.png",
            "slots": [
              "Talent",
              "Crew",
              "Device",
              "Modification",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_43.jpg",
            "ffg": 43,
            "hyperspace": false
          },
          {
            "name": "Rebel Scout",
            "initiative": 2,
            "limited": 0,
            "cost": 30,
            "xws": "rebelscout",
            "text": "Designed to look like a bird in flight by the Corellian Engineering Corporation, \"hawk\" series ships are exemplary transport craft. Swift and rugged, the HWK-290 is often employed by Rebel agents as a mobile base of operations.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_45.png",
            "slots": ["Crew", "Device", "Modification", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_45.jpg",
            "ffg": 45,
            "hyperspace": false
          },
          {
            "name": "Roark Garnet",
            "caption": "Good-Hearted Smuggler",
            "initiative": 4,
            "limited": 1,
            "cost": 41,
            "xws": "roarkgarnet",
            "ability": "At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, it engages at initiative 7 instead of its standard initiative value this phase.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_44.png",
            "slots": [
              "Talent",
              "Crew",
              "Device",
              "Modification",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_44.jpg",
            "ffg": 44,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Modified YT-1300 Light Freighter",
        "xws": "modifiedyt1300lightfreighter",
        "ffg": 1,
        "size": "Large",
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3LR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3PR",
          "4FW",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Double Turret Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 8 },
          { "type": "shields", "value": 5 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Boost" },
          { "difficulty": "White", "type": "Rotate Arc" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Falcon.png",
        "pilots": [
          {
            "name": "Chewbacca",
            "caption": "The Mighty",
            "initiative": 4,
            "limited": 1,
            "cost": 73,
            "xws": "chewbacca",
            "ability": "Before you would be dealt a faceup damage card, you may spend 1 [Charge] to be dealt the card facedown instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_71.png",
            "charges": { "value": 1, "recovers": 1 },
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Crew",
              "Modification",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_71.jpg",
            "ffg": 71,
            "hyperspace": true
          },
          {
            "name": "Han Solo",
            "caption": "Scoundrel for Hire",
            "initiative": 6,
            "limited": 1,
            "cost": 82,
            "xws": "hansolo-modifiedyt1300lightfreighter",
            "ability": "After you roll dice, if you are at range 0-1 of an obstacle, you may reroll all of your dice. This does not count as rerolling for the purpose of other effects.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_69.png",
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Crew",
              "Modification",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_69.jpg",
            "ffg": 69,
            "hyperspace": true
          },
          {
            "name": "Lando Calrissian",
            "caption": "General of the Alliance",
            "initiative": 5,
            "limited": 1,
            "cost": 80,
            "xws": "landocalrissian-modifiedyt1300lightfreighter",
            "ability": "After you fully execute a blue maneuver, you may choose a friendly ship at range 0-3. That ship may perform an action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_70.png",
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Crew",
              "Modification",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_70.jpg",
            "ffg": 70,
            "hyperspace": true
          },
          {
            "name": "Outer Rim Smuggler",
            "initiative": 1,
            "limited": 0,
            "cost": 69,
            "xws": "outerrimsmuggler",
            "text": "Known for its durability and modular design, the YT-1300 is one of the most popular, widely used, and extensively customized freighters in the galaxy.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_72.png",
            "slots": [
              "Missile",
              "Crew",
              "Crew",
              "Modification",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_72.jpg",
            "ffg": 72,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "RZ-1 A-wing",
        "xws": "rz1awing",
        "ffg": 35,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2TB",
          "2BB",
          "2FB",
          "2NB",
          "2YB",
          "3LR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3PR",
          "4FB",
          "5FB",
          "5KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 2 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_A-wing.png",
        "pilots": [
          {
            "name": "Arvel Crynyd",
            "caption": "Green Leader",
            "initiative": 3,
            "limited": 1,
            "cost": 34,
            "xws": "arvelcrynyd",
            "ability": "You can perform primary attacks at range 0. If you would fail a [Boost] action by overlapping another ship, resolve it as though you were partially executing a maneuver instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_20.png",
            "shipAbility": {
              "name": "Vectored Thrusters",
              "text": "After you perform an action, you may perform a red [Boost] action."
            },
            "slots": ["Talent", "Talent", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_20.jpg",
            "ffg": 20,
            "hyperspace": true
          },
          {
            "name": "Green Squadron Pilot",
            "initiative": 3,
            "limited": 0,
            "cost": 32,
            "xws": "greensquadronpilot",
            "text": "Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_21.png",
            "shipAbility": {
              "name": "Vectored Thrusters",
              "text": "After you perform an action, you may perform a red [Boost] action."
            },
            "slots": ["Talent", "Talent", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_21.jpg",
            "ffg": 21,
            "hyperspace": true
          },
          {
            "name": "Jake Farrell",
            "caption": "Sage Instructor",
            "initiative": 4,
            "limited": 1,
            "cost": 36,
            "xws": "jakefarrell",
            "ability": "After you perform a [Barrel Roll] or [Boost] action, you may choose a friendly ship at range 0-1. That ship may perform a [Focus] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_19.png",
            "shipAbility": {
              "name": "Vectored Thrusters",
              "text": "After you perform an action, you may perform a red [Boost] action."
            },
            "slots": ["Talent", "Talent", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_19.jpg",
            "ffg": 19,
            "hyperspace": true
          },
          {
            "name": "Phoenix Squadron Pilot",
            "initiative": 1,
            "limited": 0,
            "cost": 30,
            "xws": "phoenixsquadronpilot",
            "text": "Led by Commander Jun Sato, the brave but inexperienced pilots of Phoenix Squadron face staggering odds in their battle against the Galactic Empire.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_22.png",
            "shipAbility": {
              "name": "Vectored Thrusters",
              "text": "After you perform an action, you may perform a red [Boost] action."
            },
            "slots": ["Talent", "Missile"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_22.jpg",
            "ffg": 22,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "Sheathipede-class Shuttle",
        "xws": "sheathipedeclassshuttle",
        "ffg": 8,
        "size": "Small",
        "dial": [
          "1SR",
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TR",
          "3BW",
          "3FB",
          "3NW",
          "3YR",
          "3KR",
          "4FR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "arc": "Rear Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Coordinate" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Sheathipede.png",
        "pilots": [
          {
            "name": "\"Zeb\" Orrelios",
            "caption": "Spectre-4",
            "initiative": 2,
            "limited": 1,
            "cost": 34,
            "xws": "zeborrelios-sheathipedeclassshuttle",
            "ability": "While you defend, [Critical Hit] results are neutralized before [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_40.png",
            "shipAbility": {
              "name": "Comms Shuttle",
              "text": "While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action."
            },
            "slots": ["Talent", "Crew", "Astromech", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_40.jpg",
            "ffg": 40,
            "hyperspace": false
          },
          {
            "name": "AP-5",
            "caption": "Escaped Analyst Droid",
            "initiative": 1,
            "limited": 1,
            "cost": 32,
            "xws": "ap5",
            "ability": "While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_41.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Coordinate" }
            ],
            "shipAbility": {
              "name": "Comms Shuttle",
              "text": "While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action."
            },
            "slots": ["Talent", "Crew", "Astromech", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_41.jpg",
            "ffg": 41,
            "hyperspace": false
          },
          {
            "name": "Ezra Bridger",
            "caption": "Spectre-6",
            "initiative": 3,
            "limited": 1,
            "cost": 42,
            "xws": "ezrabridger-sheathipedeclassshuttle",
            "ability": "While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade]/[Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_39.png",
            "force": { "value": 1, "recovers": 1, "side": ["light"] },
            "shipAbility": {
              "name": "Comms Shuttle",
              "text": "While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action."
            },
            "slots": ["Crew", "Astromech", "Modification", "Title", "Force Power"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_39.jpg",
            "ffg": 39,
            "hyperspace": false
          },
          {
            "name": "Fenn Rau",
            "caption": "Reluctant Rebel",
            "initiative": 6,
            "limited": 1,
            "cost": 52,
            "xws": "fennrau-sheathipedeclassshuttle",
            "ability": "After an enemy ship in your firing arc engages, if you are not stressed, you may gain 1 stress token. If you do, that ship cannot spend tokens to modify dice while it performs an attack during this phase.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_38.png",
            "shipAbility": {
              "name": "Comms Shuttle",
              "text": "While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action."
            },
            "slots": ["Talent", "Crew", "Astromech", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_38.jpg",
            "ffg": 38,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "T-65 X-wing",
        "xws": "t65xwing",
        "ffg": 33,
        "size": "Small",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3ER",
          "3TW",
          "3BW",
          "3FW",
          "3NW",
          "3YW",
          "3RR",
          "4FW",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_X-wing-T65.png",
        "pilots": [
          {
            "name": "Biggs Darklighter",
            "caption": "Red Three",
            "initiative": 3,
            "limited": 1,
            "cost": 48,
            "xws": "biggsdarklighter",
            "ability": "While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Hit] or [Critical Hit] to cancel 1 matching result.",
            "slots": ["Torpedo", "Astromech", "Modification", "Configuration"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_7.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_7.jpg",
            "ffg": 7,
            "hyperspace": true
          },
          {
            "name": "Blue Squadron Escort",
            "initiative": 2,
            "limited": 0,
            "cost": 41,
            "xws": "bluesquadronescort",
            "text": "Designed by Incom Corporation, the T-65 X-wing quickly proved to be one of the most effective and versatile military vehicles in the galaxy and a boon to the Rebellion.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_11.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_11.jpg",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/9c/1a/9c1ad7ef-dfb1-427c-b700-747d857f53fc/op066-blue-squadron-pilot.png",
                "source": "X-Wing Second Edition Launch Party"
              }
            ],
            "slots": ["Torpedo", "Astromech", "Modification", "Configuration"],
            "ffg": 11,
            "hyperspace": true
          },
          {
            "name": "Cavern Angels Zealot",
            "initiative": 1,
            "limited": 0,
            "cost": 41,
            "xws": "cavernangelszealot",
            "text": "Unlike most Rebel cells, Saw Gerrera's partisans are willing to use extreme methods to undermine the Galactic Empire's objectives in brutal battles that rage from Geonosis to Jedha.",
            "slots": [
              "Torpedo",
              "Astromech",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_12.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_12.jpg",
            "ffg": 12,
            "hyperspace": true
          },
          {
            "name": "Edrio Two Tubes",
            "caption": "Cavern Angels Veteran",
            "initiative": 2,
            "limited": 1,
            "cost": 45,
            "xws": "edriotwotubes",
            "ability": "Before you activate, if you are focused, you may perform an action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_9.png",
            "slots": [
              "Torpedo",
              "Astromech",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_9.jpg",
            "ffg": 9,
            "hyperspace": true
          },
          {
            "name": "Garven Dreis",
            "caption": "Red Leader",
            "initiative": 4,
            "limited": 1,
            "cost": 47,
            "xws": "garvendreis-t65xwing",
            "ability": "After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_4.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Astromech",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_4.jpg",
            "ffg": 4,
            "hyperspace": true
          },
          {
            "name": "Jek Porkins",
            "caption": "Red Six",
            "initiative": 4,
            "limited": 1,
            "cost": 46,
            "xws": "jekporkins",
            "ability": "After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.",
            "slots": [
              "Talent",
              "Torpedo",
              "Astromech",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_5.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_5.jpg",
            "ffg": 5,
            "hyperspace": true
          },
          {
            "name": "Kullbee Sperado",
            "caption": "Enigmatic Gunslinger",
            "initiative": 4,
            "limited": 1,
            "cost": 48,
            "xws": "kullbeesperado",
            "ability": "After you perform a [Barrel Roll] or [Boost] action, you may flip your equipped [Configuration] upgrade card.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_6.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Astromech",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_6.jpg",
            "ffg": 6,
            "hyperspace": true
          },
          {
            "name": "Leevan Tenza",
            "caption": "Rebel Alliance Defector",
            "initiative": 3,
            "limited": 1,
            "cost": 46,
            "xws": "leevantenza",
            "ability": "After you perform a [Barrel Roll] or [Boost] action, you may perform a red [Evade] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_8.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Astromech",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_8.jpg",
            "ffg": 8,
            "hyperspace": true
          },
          {
            "name": "Luke Skywalker",
            "caption": "Red Five",
            "initiative": 5,
            "limited": 1,
            "cost": 62,
            "xws": "lukeskywalker",
            "ability": "After you become the defender (before dice are rolled), you may recover 1 [Force].",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_2.png",
            "force": { "value": 2, "recovers": 1, "side": ["light"] },
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/5b/aa/5baa3742-b7b2-47d7-9bec-07f02fafaf1c/op066-luke-skywalker.png",
                "source": "X-Wing Second Edition Launch Party"
              },
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/ab/5d/ab5d5131-0043-4b74-9549-5e959aaaf47a/op086-luke-skywalker.png",
                "source": "Gen Con Indy 2018"
              }
            ],
            "slots": [
              "Torpedo",
              "Astromech",
              "Modification",
              "Force Power",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_2.jpg",
            "ffg": 2,
            "hyperspace": true
          },
          {
            "name": "Red Squadron Veteran",
            "initiative": 3,
            "limited": 0,
            "cost": 43,
            "xws": "redsquadronveteran",
            "text": "Created as an elite starfighter squad, Red Squadron includes some of the best pilots in the Rebel Alliance.",
            "slots": [
              "Talent",
              "Torpedo",
              "Astromech",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_10.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_10.jpg",
            "ffg": 10,
            "hyperspace": true
          },
          {
            "name": "Thane Kyrell",
            "caption": "Corona Four",
            "initiative": 5,
            "limited": 1,
            "cost": 48,
            "xws": "thanekyrell",
            "ability": "While you perform an attack, you may spend 1 [Focus], [Hit], or [Critical Hit] result to look at the defender's facedown damage cards, choose 1, and expose it.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_3.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Astromech",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_3.jpg",
            "ffg": 3,
            "hyperspace": true
          },
          {
            "name": "Wedge Antilles",
            "caption": "Red Two",
            "initiative": 6,
            "limited": 1,
            "cost": 55,
            "xws": "wedgeantilles",
            "ability": "While you perform an attack, the defender rolls 1 fewer defense die.",
            "slots": [
              "Talent",
              "Torpedo",
              "Astromech",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_1.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_1.jpg",
            "ffg": 1,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "TIE/ln Fighter",
        "xws": "tielnfighter",
        "ffg": 11,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3KR",
          "4FW",
          "4KR",
          "5FW"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEFighter.png",
        "pilots": [
          {
            "name": "\"Zeb\" Orrelios",
            "caption": "Spectre-4",
            "initiative": 2,
            "limited": 1,
            "cost": 26,
            "xws": "zeborrelios-tielnfighter",
            "ability": "While you defend, [Critical Hit] results are neutralized before [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_49.png",
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_49.jpg",
            "ffg": 49,
            "hyperspace": false
          },
          {
            "name": "Captain Rex",
            "caption": "Clone Wars Veteran",
            "initiative": 2,
            "limited": 1,
            "cost": 32,
            "xws": "captainrex",
            "ability": "After you perform an attack, assign the Suppressive Fire condition to the defender.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_48.png",
            "conditions": ["suppressivefire"],
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_48.jpg",
            "ffg": 48,
            "hyperspace": false
          },
          {
            "name": "Ezra Bridger",
            "caption": "Spectre-6",
            "initiative": 3,
            "limited": 1,
            "cost": 32,
            "xws": "ezrabridger-tielnfighter",
            "ability": "While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_46.png",
            "force": { "value": 1, "recovers": 1, "side": ["light"] },
            "slots": ["Modification", "Force Power"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_46.jpg",
            "ffg": 46,
            "hyperspace": false
          },
          {
            "name": "Sabine Wren",
            "caption": "Spectre-5",
            "initiative": 3,
            "limited": 1,
            "cost": 30,
            "xws": "sabinewren-tielnfighter",
            "ability": "Before you activate, you may perform a [Barrel Roll] or [Boost] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_47.png",
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_47.jpg",
            "ffg": 47,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "UT-60D U-wing",
        "xws": "ut60duwing",
        "ffg": 15,
        "size": "Medium",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3BW",
          "3FW",
          "3NW",
          "4FW"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 5 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Coordinate" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_U-wing.png",
        "pilots": [
          {
            "name": "Benthic Two Tubes",
            "caption": "Cavern Angels Marksman",
            "initiative": 2,
            "limited": 1,
            "cost": 47,
            "xws": "benthictwotubes",
            "ability": "After you perform a [Focus] action, you may transfer 1 of your focus tokens to a friendly ship at range 1-2.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_58.png",
            "slots": [
              "Sensor",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_58.jpg",
            "ffg": 58,
            "hyperspace": true
          },
          {
            "name": "Blue Squadron Scout",
            "initiative": 2,
            "limited": 0,
            "cost": 43,
            "xws": "bluesquadronscout",
            "text": "Used for deploying troops under the cover of darkness or into the heat of battle, the UT-60D U-wing fulfills the Rebellion's need for a swift and hardy troop transport.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_60.png",
            "slots": ["Sensor", "Crew", "Crew", "Modification", "Configuration"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_60.jpg",
            "ffg": 60,
            "hyperspace": true
          },
          {
            "name": "Bodhi Rook",
            "caption": "Imperial Defector",
            "initiative": 4,
            "limited": 1,
            "cost": 49,
            "xws": "bodhirook",
            "ability": "Friendly ships can acquire locks onto objects at range 0-3 of any friendly ship.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_54.png",
            "slots": [
              "Talent",
              "Sensor",
              "Crew",
              "Crew",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_54.jpg",
            "ffg": 54,
            "hyperspace": true
          },
          {
            "name": "Cassian Andor",
            "caption": "Raised by the Rebellion",
            "initiative": 3,
            "limited": 1,
            "cost": 51,
            "xws": "cassianandor",
            "ability": "At the start of the Activation Phase, you may choose 1 friendly ship at range 1-3. If you do, that ship removes 1 stress token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_56.png",
            "slots": [
              "Talent",
              "Sensor",
              "Crew",
              "Crew",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_56.jpg",
            "ffg": 56,
            "hyperspace": true
          },
          {
            "name": "Heff Tobber",
            "caption": "Blue Eight",
            "initiative": 2,
            "limited": 1,
            "cost": 45,
            "xws": "hefftobber",
            "ability": "After an enemy ship executes a maneuver, if it is at range 0, you may perform an action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_59.png",
            "slots": [
              "Talent",
              "Sensor",
              "Crew",
              "Crew",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_59.jpg",
            "ffg": 59,
            "hyperspace": true
          },
          {
            "name": "Magva Yarro",
            "caption": "Cavern Angels Spotter",
            "initiative": 3,
            "limited": 1,
            "cost": 50,
            "xws": "magvayarro",
            "ability": "While a friendly ship at range 0-2 defends, the attacker cannot reroll more than 1 attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_57.png",
            "slots": [
              "Talent",
              "Sensor",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_57.jpg",
            "ffg": 57,
            "hyperspace": true
          },
          {
            "name": "Partisan Renegade",
            "initiative": 1,
            "limited": 0,
            "cost": 43,
            "xws": "partisanrenegade",
            "text": "Saw Gerrera's partisans were first established to oppose Separatist forces on Onderon during the Clone Wars, and continued to wage war against galactic tyranny as the Empire rose to power.",
            "slots": [
              "Sensor",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_61.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_61.jpg",
            "ffg": 61,
            "hyperspace": true
          },
          {
            "name": "Saw Gerrera",
            "caption": "Obsessive Outlaw",
            "initiative": 4,
            "limited": 1,
            "cost": 52,
            "xws": "sawgerrera",
            "ability": "While a damaged friendly ship at range 0-3 performs an attack, it may reroll 1 attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_55.png",
            "slots": [
              "Talent",
              "Sensor",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/fe/0c/fe0cdda5-8529-4331-a508-bde68b627e65/g18x2-saw-gerrera-2.png",
                "source": "Season Two 2018"
              }
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_55.jpg",
            "ffg": 55,
            "hyperspace": true
          },
          {
            "name": "K-2SO",
            "caption": "Cassian Said I Had To",
            "initiative": 3,
            "limited": 1,
            "cost": 666666,
            "xws": "k2so",
            "ability": "After you gain a stress token, gain 1 calculate token.",
            "image": "",
            "slots": [
              "Talent",
              "Sensor",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Configuration"
            ],
            "artwork": "",
            "ffg": 666666,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "VCX-100 Light Freighter",
        "xws": "vcx100lightfreighter",
        "ffg": 23,
        "size": "Large",
        "dial": [
          "1TR",
          "1BW",
          "1FB",
          "1NW",
          "1YR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4FW",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 4 },
          { "type": "agility", "value": 0 },
          { "type": "hull", "value": 10 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Reinforce" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Ghost.png",
        "pilots": [
          {
            "name": "\"Chopper\"",
            "caption": "Spectre-3",
            "initiative": 2,
            "limited": 1,
            "cost": 70,
            "xws": "chopper",
            "ability": "At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_75.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              { "difficulty": "White", "type": "Reinforce" }
            ],
            "shipAbility": {
              "name": "Tail Gun",
              "text": "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value."
            },
            "slots": [
              "Sensor",
              "Turret",
              "Torpedo",
              "Crew",
              "Crew",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_75.jpg",
            "ffg": 75,
            "hyperspace": false
          },
          {
            "name": "Hera Syndulla",
            "caption": "Spectre-2",
            "initiative": 5,
            "limited": 1,
            "cost": 73,
            "xws": "herasyndulla-vcx100lightfreighter",
            "ability": "After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_73.png",
            "shipAbility": {
              "name": "Tail Gun",
              "text": "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Turret",
              "Torpedo",
              "Crew",
              "Crew",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_73.jpg",
            "ffg": 73,
            "hyperspace": false
          },
          {
            "name": "Kanan Jarrus",
            "caption": "Spectre-1",
            "initiative": 3,
            "limited": 1,
            "cost": 84,
            "xws": "kananjarrus",
            "ability": "While a friendly ship in your firing arc defends, you may spend 1 [Force]. If you do, the attacker rolls 1 fewer attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_74.png",
            "force": { "value": 2, "recovers": 1, "side": ["light"] },
            "shipAbility": {
              "name": "Tail Gun",
              "text": "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value."
            },
            "slots": [
              "Sensor",
              "Turret",
              "Torpedo",
              "Crew",
              "Crew",
              "Modification",
              "Title",
              "Gunner",
              "Force Power"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_74.jpg",
            "ffg": 74,
            "hyperspace": false
          },
          {
            "name": "Lothal Rebel",
            "initiative": 2,
            "limited": 0,
            "cost": 68,
            "xws": "lothalrebel",
            "text": "Another successful Corellian Engineering Corporation freighter design, the VCX-100 is larger than the ubiquitous YT-series, boasting more living space and customizability.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_76.png",
            "shipAbility": {
              "name": "Tail Gun",
              "text": "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value."
            },
            "slots": [
              "Sensor",
              "Turret",
              "Torpedo",
              "Crew",
              "Crew",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_76.jpg",
            "ffg": 76,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "YT-2400 Light Freighter",
        "xws": "yt2400lightfreighter",
        "ffg": 5,
        "size": "Large",
        "dial": [
          "1TW",
          "1BB",
          "1FB",
          "1NB",
          "1YW",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TW",
          "3BW",
          "3FW",
          "3NW",
          "3YW",
          "4FW",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Double Turret Arc", "type": "attack", "value": 4 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Rotate Arc" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_YT-2400.png",
        "pilots": [
          {
            "name": "\"Leebo\"",
            "caption": "Dry-Witted Droid",
            "initiative": 3,
            "limited": 1,
            "cost": 88,
            "xws": "leebo",
            "ability": "After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_78.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              { "difficulty": "Red", "type": "Barrel Roll" },
              { "difficulty": "White", "type": "Rotate Arc" }
            ],
            "shipAbility": {
              "name": "Sensor Blindspot",
              "text": "While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die."
            },
            "slots": ["Missile", "Illicit", "Modification", "Title", "Gunner"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_78.jpg",
            "ffg": 78,
            "hyperspace": false
          },
          {
            "name": "Dash Rendar",
            "caption": "Hotshot Mercenary",
            "initiative": 5,
            "limited": 1,
            "cost": 98,
            "xws": "dashrendar",
            "ability": "While you move, you ignore obstacles.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_77.png",
            "shipAbility": {
              "name": "Sensor Blindspot",
              "text": "While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die."
            },
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_77.jpg",
            "ffg": 77,
            "hyperspace": false
          },
          {
            "name": "Wild Space Fringer",
            "initiative": 1,
            "limited": 0,
            "cost": 86,
            "xws": "wildspacefringer",
            "text": "Although stock YT-2400 light freighters have plenty of room for cargo, that space is often annexed to support modified weapon systems and oversized engines.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_79.png",
            "shipAbility": {
              "name": "Sensor Blindspot",
              "text": "While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die."
            },
            "slots": [
              "Missile",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_79.jpg",
            "ffg": 79,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Z-95-AF4 Headhunter",
        "xws": "z95af4headhunter",
        "ffg": 38,
        "size": "Small",
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3KR",
          "4FW",
          "4KR"
        ],
        "faction": "Rebel Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 2 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Z-95.png",
        "pilots": [
          {
            "name": "Airen Cracken",
            "caption": "Intelligence Chief",
            "initiative": 5,
            "limited": 1,
            "cost": 36,
            "xws": "airencracken",
            "ability": "After you perform an attack, you may choose 1 friendly ship at range 1. That ship may perform an action, treating it as red.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_27.png",
            "slots": ["Talent", "Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_27.jpg",
            "ffg": 27,
            "hyperspace": false
          },
          {
            "name": "Bandit Squadron Pilot",
            "initiative": 1,
            "limited": 0,
            "cost": 23,
            "xws": "banditsquadronpilot",
            "text": "The Z-95 Headhunter was the primary inspiration for Incom Corporation's exemplary T-65 X-wing starfighter. Though it is considered outdated by modern standards, it remains a versatile and potent snub fighter.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_30.png",
            "slots": ["Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_30.jpg",
            "ffg": 30,
            "hyperspace": false
          },
          {
            "name": "Lieutenant Blount",
            "caption": "Team Player",
            "initiative": 4,
            "limited": 1,
            "cost": 30,
            "xws": "lieutenantblount",
            "ability": "While you perform a primary attack, if there is at least 1 other friendly ship at range 0-1 of the defender, you may roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_28.png",
            "slots": ["Talent", "Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_28.jpg",
            "ffg": 28,
            "hyperspace": false
          },
          {
            "name": "Tala Squadron Pilot",
            "initiative": 2,
            "limited": 0,
            "cost": 25,
            "xws": "talasquadronpilot",
            "text": "The AF4 series is the latest in a long line of Headhunter designs. Cheap and relatively durable, it is a favorite among independent outfits like the Rebellion.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_29.png",
            "slots": ["Talent", "Missile", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_29.jpg",
            "ffg": 29,
            "hyperspace": false
          }
        ]
      },
    // Resistance 
    {
        "name": "Fireball",
        "xws": "fireball",
        "ffg": 666666,
        "size": "Small",
        "dial": [
          
        ],
        "faction": "Resistance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 0 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Slam" }
        ],
        "icon": "",
        "pilots": [
          {
            "name": "Colossus Station Mechanic",
            "initiative": 2,
            "limited": 0,
            "xws": "colossusstationmechanic",
            "ability": "",
            "shipAbility": {
              "name": "Explosion With W??? Setup",
              "text": "You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token."
            },
            "image": "",
            "artwork": "",
            "cost": 666666,
            "slots": [
              "Modification"
            ],
            "ffg": 666666,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "MG-100 StarFortress",
        "xws": "mg100starfortress",
        "ffg": 55,
        "size": "Large",
        "dial": [
          "0OR",
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3BR",
          "3FW",
          "3NR"
        ],
        "faction": "Resistance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "arc": "Double Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 9 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Rotate Arc" },
          { "difficulty": "White", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_StarFortress.png",
        "pilots": [
          {
            "name": "Cobalt Squadron Bomber",
            "initiative": 1,
            "limited": 0,
            "xws": "cobaltsquadronbomber",
            "text": "Whether the ordnance silos of their StarFortresses are loaded with proton bombs or relief supplies, the heroic crews of Cobalt Squadron dedicate their lives to making a difference in the galaxy.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/6b6a3bb8049699e2d66fe09531e8bc00.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/514351d5c41a8341ea5da5673269d917.jpg",
            "cost": 56,
            "slots": [
              "Sensor",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner",
              "Gunner",
              "Tech"
            ],
            "ffg": 434,
            "hyperspace": true
          },
          {
            "name": "Cat",
            "caption": "Cobalt Wasp",
            "initiative": 1,
            "limited": 1,
            "xws": "cat",
            "ability": "While you perform a primary attack, if the defender is at range 0-1 of at least 1 friendly device, roll 1 additional die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/b386dc25736682ebc785b15551de903b.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/d927ccf08a9444340378449fe71e9f70.jpg",
            "cost": 57,
            "slots": [
              "Sensor",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner",
              "Gunner",
              "Tech"
            ],
            "ffg": 433,
            "hyperspace": true
          },
          {
            "name": "Vennie",
            "caption": "Crimson Cutter",
            "initiative": 2,
            "limited": 1,
            "xws": "vennie",
            "ability": "While you defend, if the attacker is in a friendly ship's [Single Turret Arc], you may add 1 [Focus] result to your roll.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/0d494986a24e6c55efae066a43161b0d.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/511b878f719e9fa59a50cdf980d10ead.jpg",
            "cost": 60,
            "slots": [
              "Sensor",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner",
              "Gunner",
              "Tech"
            ],
            "ffg": 448,
            "hyperspace": true
          },
          {
            "name": "Ben Teene",
            "caption": "Crimson Bolide",
            "initiative": 3,
            "limited": 1,
            "xws": "benteene",
            "ability": "After you perform an attack, if the defender is in your [Single Turret Arc], assign the Rattled condition to the defender.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/c9189c7e510b4d734d4d78c4f595010f.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/74ca7444aec38cb0034b67b04f6aaa76.jpg",
            "cost": 61,
            "conditions": ["rattled"],
            "slots": [
              "Sensor",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner",
              "Gunner",
              "Tech"
            ],
            "ffg": 432,
            "hyperspace": true
          },
          {
            "name": "Edon Kappehl",
            "caption": "Crimson Hailstorm",
            "initiative": 3,
            "limited": 1,
            "xws": "edonkappehl",
            "ability": "After you fully execute a blue or white maneuver, if you have not dropped or launched a device this round, you may drop 1 device.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/f58fe0b57dc4a9c878627f0fea9cf1ef.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/bbac51ca4ba44f26d90a53b6c5db5e2c.jpg",
            "cost": 64,
            "slots": [
              "Sensor",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner",
              "Gunner",
              "Tech"
            ],
            "ffg": 447,
            "hyperspace": true
          },
          {
            "name": "Finch Dallow",
            "caption": "Cobalt Hammer",
            "initiative": 4,
            "limited": 1,
            "xws": "finchdallow",
            "ability": "Before you would drop a bomb, you may place it in the play area touching you instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/43d9a0555f719a4cbe1ffe905fd38c46.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/dafd2937accc362f766ca0da3308ccbc.jpg",
            "cost": 64,
            "slots": [
              "Sensor",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Gunner",
              "Gunner",
              "Tech"
            ],
            "ffg": 431,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "Resistance Transport Pod",
        "xws": "resistancetransportpod",
        "size": "Small",
        "ffg": 65,
        "dial": [
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3BR",
          "3FW",
          "3NR",
          "3KR",
          "4FR"
        ],
        "faction": "Resistance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "Red", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" },
          { "difficulty": "Red", "type": "Jam" }
        ],
        "pilots": [
          {
            "name": "BB-8",
            "xws": "bb8",
            "initiative": 3,
            "limited": 1,
            "hyperspace": true,
            "cost": 26,
            "slots": ["Talent", "Tech", "Crew", "Modification"],
            "ability": "During the System Phase, you may perform a red [Barrel Roll] or [Boost] action.",
            "ffg": 573,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/bbe37aa13822e8c94d9b0950cdd9cdb0.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "Red", "type": "Lock" },
              { "difficulty": "Red", "type": "Barrel Roll" },
              { "difficulty": "Red", "type": "Jam" }
            ],
            "caption": "Full of Surprises"
          },
          {
            "name": "Rose Tico",
            "xws": "rosetico",
            "initiative": 3,
            "limited": 1,
            "caption": "Earnest Engineer",
            "hyperspace": true,
            "cost": 26,
            "slots": ["Talent", "Tech", "Crew", "Modification"],
            "ability": "While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.",
            "ffg": 574,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/40cba6527802ef9afa41e4009265873c.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png"
          },
          {
            "name": "Vi Moradi",
            "xws": "vimoradi",
            "initiative": 1,
            "limited": 1,
            "caption": "Starling",
            "hyperspace": true,
            "cost": 27,
            "slots": ["Tech", "Crew", "Modification"],
            "ability": "Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.",
            "conditions": ["compromisingintel"],
            "ffg": 576,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/f13328acfd703dc5489fa2249b9f675e.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png"
          },
          {
            "name": "Finn",
            "xws": "finn",
            "initiative": 2,
            "limited": 1,
            "caption": "Big Deal",
            "hyperspace": true,
            "cost": 29,
            "slots": ["Talent", "Tech", "Crew", "Modification"],
            "ability": "While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 focus result instead.",
            "ffg": 575,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/6e5fea21ac8a7ee345fd07f1c42cc81d.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Resistance_Transport_Cockpit_Pod.png"
      },
    {
        "name": "Resistance Transport",
        "xws": "resistancetransport",
        "size": "Small",
        "ffg": 64,
        "dial": [
          "0OR",
          "1AR",
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "1DR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3BR",
          "3FW",
          "3NR",
          "4FR"
        ],
        "faction": "Resistance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 5 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Coordinate" },
          { "difficulty": "Red", "type": "Jam" }
        ],
        "pilots": [
          {
            "name": "Cova Nell",
            "xws": "covanell",
            "initiative": 4,
            "limited": 1,
            "hyperspace": true,
            "cost": 38,
            "slots": [
              "Talent",
              "Tech",
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Astromech",
              "Modification"
            ],
            "ability": "While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.",
            "ffg": 569,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/27956dc3600e6e06bf26f9a981205410.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png",
            "caption": "Evacuation Escort"
          },
          {
            "name": "Pammich Nerro Goode",
            "xws": "pammichnerrogoode",
            "initiative": 3,
            "limited": 1,
            "caption": "D'Qar Dispatcher",
            "hyperspace": true,
            "cost": 36,
            "slots": [
              "Tech",
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Astromech",
              "Modification"
            ],
            "ability": "While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.",
            "ffg": 570,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/e5f2e692fcaf63d513cd5c7c1294283e.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png"
          },
          {
            "name": "Nodin Chavdri",
            "xws": "nodinchavdri",
            "initiative": 2,
            "limited": 1,
            "hyperspace": true,
            "cost": 36,
            "slots": [
              "Tech",
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Astromech",
              "Modification"
            ],
            "ability": "After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.",
            "ffg": 571,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/b0179494a00c2538a4467793e722db3e.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png",
            "caption": "Insubordinate Insurgent"
          },
          {
            "name": "Logistics Division Pilot",
            "xws": "logisticsdivisionpilot",
            "initiative": 1,
            "limited": 0,
            "text": "Without the support of the New Republic, members of the Resistance often pull double duty as transport pilots or mechanics, putting their skills and technical knowledge to use in the fight against the First Order.",
            "hyperspace": true,
            "cost": 32,
            "slots": [
              "Tech",
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Astromech",
              "Modification"
            ],
            "ffg": 572,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/005545edf9fc1c82464f52edad236b27.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Resistance_Transport.png"
      },
    {
        "name": "RZ-2 A-wing",
        "xws": "rz2awing",
        "ffg": 54,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2TB",
          "2BB",
          "2FB",
          "2NB",
          "2YB",
          "3LR",
          "3TW",
          "3BB",
          "3FB",
          "3NB",
          "3YW",
          "3PR",
          "4FB",
          "5FB",
          "5KR"
        ],
        "faction": "Resistance",
        "stats": [
          { "arc": "Single Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 2 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_RZ-2_A-wing.png",
        "pilots": [
          {
            "name": "L'ulo L'ampar",
            "caption": "Luminous Mentor",
            "initiative": 5,
            "limited": 1,
            "cost": 43,
            "xws": "lulolampar",
            "ability": "While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.",
            "shipAbility": {
              "name": "Refined Gyrostabilizers",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action."
            },
            "slots": ["Talent", "Talent", "Missile", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/e15d3e2a2fc082b95a64a83df0c96f7f.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/b97a025a7859f54bbc68374ff5d8116e.jpg",
            "ffg": 435,
            "hyperspace": true
          },
          {
            "name": "Tallissan Lintra",
            "caption": "Deadly Approach",
            "initiative": 5,
            "limited": 1,
            "cost": 36,
            "xws": "tallissanlintra",
            "ability": "While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.",
            "shipAbility": {
              "name": "Refined Gyrostabilizers",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/72cb6c4e50b0ad24af0bb84ce0aa53f0.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/ee8c3c26ce6432d7581c5f61392597bc.jpg",
            "charges": { "value": 1, "recovers": 1 },
            "slots": ["Talent", "Talent", "Missile", "Tech"],
            "ffg": 436,
            "hyperspace": true
          },
          {
            "name": "Zari Bangel",
            "caption": "Aerial Exhibitionist",
            "initiative": 3,
            "limited": 1,
            "cost": 35,
            "xws": "zaribangel",
            "ability": "You do not skip your Perform Action step after you partially execute a maneuver.",
            "shipAbility": {
              "name": "Refined Gyrostabilizers",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d7f37dbb86bb706dd535e9a65b69149a.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/2fe44e1e5496645c16f4d2189a1746e3.jpg",
            "slots": ["Talent", "Talent", "Missile", "Tech"],
            "ffg": 438,
            "hyperspace": true
          },
          {
            "name": "Greer Sonnel",
            "caption": "Kothan Si",
            "initiative": 4,
            "limited": 1,
            "cost": 36,
            "xws": "greersonnel",
            "ability": "After you fully execute a maneuver, you may rotate your [Single Turret Arc].",
            "shipAbility": {
              "name": "Refined Gyrostabilizers",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/7fc7b194b02ad7af6adf4ef9b79108d1.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/84bf1ce21926d4500b54e122da01b162.jpg",
            "slots": ["Talent", "Talent", "Missile", "Tech"],
            "ffg": 437,
            "hyperspace": true
          },
          {
            "name": "Green Squadron Expert",
            "initiative": 3,
            "limited": 0,
            "cost": 35,
            "xws": "greensquadronexpert",
            "text": "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
            "shipAbility": {
              "name": "Refined Gyrostabilizers",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action."
            },
            "slots": ["Talent", "Talent", "Missile", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3f7ad9efb4c5af8b4d1f5c07a3c7538b.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/8427bdfb1cf9497a9ab797e2c955ba41.jpg",
            "ffg": 439,
            "hyperspace": true
          },
          {
            "name": "Blue Squadron Recruit",
            "initiative": 1,
            "limited": 0,
            "cost": 33,
            "xws": "bluesquadronrecruit",
            "text": "Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.",
            "shipAbility": {
              "name": "Refined Gyrostabilizers",
              "text": "You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action."
            },
            "slots": ["Talent", "Missile", "Tech"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/e033b2729305ac0b678d6031ada7b2b8.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/3df643a75106a59899e5f32ef56e8a5e.jpg",
            "ffg": 440,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "Scavenged YT-1300",
        "xws": "scavengedyt1300",
        "ffg": 57,
        "size": "Large",
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3LR",
          "3TW",
          "3BW",
          "3FW",
          "3NW",
          "3YW",
          "3PR",
          "4FR"
        ],
        "faction": "Resistance",
        "stats": [
          { "arc": "Double Turret Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 8 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Boost" },
          { "difficulty": "Red", "type": "Rotate Arc" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Falcon_Resistance.png",
        "pilots": [
          {
            "name": "Resistance Sympathizer",
            "initiative": 2,
            "limited": 0,
            "xws": "resistancesympathizer",
            "text": "After witnessing the Hosnian Cataclysm, some spacers willingly aided the Resistance with whatever ships they had.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/28411b84c1b15f0bfa9928f2206e44f5.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/3e567923957881e9a4dbef46789c7fbf.jpg",
            "cost": 67,
            "slots": [
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "ffg": 430,
            "hyperspace": true
          },
          {
            "name": "Chewbacca",
            "caption": "Loyal Companion",
            "initiative": 4,
            "limited": 1,
            "xws": "chewbacca-scavengedyt1300",
            "ability": "After a friendly ship at range 0-3 is destroyed, before that ship is removed, you may perform an action. Then you may perform a bonus attack.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/209a8dece475a265aaf1b5318ba7f08a.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/c40ec30b7df138c4510b08f4f02d54b5.jpg",
            "cost": 68,
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "ffg": 429,
            "hyperspace": true
          },
          {
            "name": "Han Solo",
            "caption": "Jaded Smuggler",
            "initiative": 6,
            "limited": 1,
            "xws": "hansolo-scavengedyt1300",
            "ability": "Setup: You can be placed anywhere in the play area beyond range 3 of enemy ships.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/5816bd53c272ed50096e22ae1af2b38a.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/15263defc98e4a54d76ae9224534dacf.jpg",
            "cost": 71,
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "ffg": 427,
            "hyperspace": true
          },
          {
            "name": "Rey",
            "caption": "Resourceful Scavenger",
            "initiative": 5,
            "limited": 1,
            "xws": "rey",
            "ability": "While you defend or perform an attack, if the enemy ship is in your [Front Arc], you may spend 1 [Force] to change 1 of your blank results to an [Evade] or [Hit] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/0ee7006e6cc51d8c08b784c9b770f1b0.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/1ff06aeff0d74773e9c9f3846b38b75d.jpg",
            "force": { "value": 2, "recovers": 1, "side": ["light"] },
            "cost": 73,
            "slots": [
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner",
              "Force Power"
            ],
            "ffg": 428,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "T-70 X-wing",
        "xws": "t70xwing",
        "ffg": 53,
        "size": "Small",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3ER",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3RR",
          "4FW",
          "4KR"
        ],
        "faction": "Resistance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_X-wing-T70.png",
        "pilots": [
          {
            "name": "Poe Dameron",
            "caption": "Trigger-Happy Flyboy",
            "initiative": 6,
            "limited": 1,
            "xws": "poedameron",
            "ability": "After you perform an action, you may spend 1 [Charge] to perform a white action, treating it as red.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/14c504c0815213a66010c4013d9296ee.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/cb8efd0b723b8ceb0c35b7a64b309bf2.jpg",
            "cost": 68,
            "charges": { "value": 1, "recovers": 1 },
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "ffg": 418,
            "hyperspace": true
          },
          {
            "name": "Blue Squadron Rookie",
            "initiative": 1,
            "limited": 0,
            "xws": "bluesquadronrookie",
            "text": "The Incom-FreiTek T-70 X-Wing was designed to improve upon the tactical flexibility of the venerable T-65. The starfighter's advanced droid socket is compatible with a wide array of astromechs, and its modular weapons pods allow ground crews to tailor its payload for specific missions.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/a82a39a4c9baf883fbc6ae353abdd2ec.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/8ceeaf3d985f16da8b8d5a1ebc49ea2b.jpg",
            "cost": 45,
            "slots": ["Astromech", "Modification", "Title", "Configuration", "Tech"],
            "ffg": 426,
            "hyperspace": true
          },
          {
            "name": "Red Squadron Expert",
            "initiative": 3,
            "limited": 0,
            "xws": "redsquadronexpert",
            "text": "Although the bulk of the Resistance Starfighter Corps is made up of young volunteers from the New Republic, their ranks are bolstered by veterans of the Galactic Civil War determined to finish what they started decades ago.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/58967d94cfef285c4df2fdbb77fd0502.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/0e847453270afe089ea331316f7b7731.jpg",
            "cost": 47,
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "ffg": 425,
            "hyperspace": true
          },
          {
            "name": "Black Squadron Ace",
            "initiative": 4,
            "limited": 0,
            "xws": "blacksquadronace-t70xwing",
            "text": "During the Cold War, Poe Dameron's Black Squadron conducted daring covert operations against the First Order in defiance of treaties ratified by the New Republic Senate.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d2b6a5166b3fd985df5d1941408b58e1.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/e75228d8174f7879c51157fdd9b26e61.jpg",
            "cost": 49,
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "ffg": 451,
            "hyperspace": true
          },
          {
            "name": "Ello Asty",
            "caption": "Born to Ill",
            "initiative": 5,
            "limited": 1,
            "xws": "elloasty",
            "ability": "After you reveal a red Tallon Roll [[Tallon Roll Left] or [Tallon Roll Right]] maneuver, if you have 2 or fewer stress tokens, treat that maneuver as white.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "cost": 56,
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/f77180ae05fd919a0dff2225380246a6.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/ff73537d7ab2f063e7a510c05013269e.jpg",
            "ffg": 419,
            "hyperspace": true
          },
          {
            "name": "Joph Seastriker",
            "caption": "Reckless Bodyguard",
            "initiative": 3,
            "limited": 1,
            "xws": "jophseastriker",
            "ability": "After you lose 1 shield, gain 1 evade token.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "cost": 51,
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/df85f5b77e16363a05c8f68792440166.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/b5b43d179b039649e764e6bd4f212a29.jpg",
            "ffg": 424,
            "hyperspace": true
          },
          {
            "name": "Kare Kun",
            "caption": "Woman of Action",
            "initiative": 4,
            "limited": 1,
            "xws": "karekun",
            "ability": "While you boost, you may use the [1 [Turn Left]] or [1 [Turn Right]] template instead.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "cost": 52,
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/6edb8ed4cbf882bf6dbe7a37b5981d85.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/f121bc27f2b283258a65d348bcafe40d.jpg",
            "ffg": 421,
            "hyperspace": true
          },
          {
            "name": "Lieutenant Bastian",
            "caption": "Optimistic Analyst",
            "initiative": 2,
            "limited": 1,
            "xws": "lieutenantbastian",
            "ability": "After a ship at range 1-2 is dealt a damage card, you may acquire a lock on that ship.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3f43d6b3c6e87bde6a681e9d4421dec8.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/52f96e7e98dc51c1280052514e303704.jpg",
            "cost": 48,
            "slots": ["Astromech", "Modification", "Title", "Configuration", "Tech"],
            "ffg": 449,
            "hyperspace": true
          },
          {
            "name": "Nien Nunb",
            "caption": "Sarcastic Survivor",
            "initiative": 5,
            "limited": 1,
            "xws": "niennunb",
            "ability": "After you gain a stress token, if there is an enemy ship in your [Front Arc] at range 0-1, you may remove that stress token.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "cost": 55,
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/00a3c393a33b33168bc61e47749e1474.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/5daa441317975eb576396af36e852f74.jpg",
            "ffg": 420,
            "hyperspace": true
          },
          {
            "name": "Jaycris Tubbs",
            "caption": "Loving Father",
            "initiative": 1,
            "limited": 1,
            "xws": "jaycristubbs",
            "ability": "After you fully execute a blue maneuver, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/5f3abacb9a081f5a3ca42f7a30da0e6c.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/8874efb312a64da49889c66f96338f9c.jpg",
            "cost": 49,
            "slots": ["Astromech", "Modification", "Title", "Configuration", "Tech"],
            "ffg": 450,
            "hyperspace": true
          },
          {
            "name": "Jessika Pava",
            "caption": "The Great Destroyer",
            "initiative": 3,
            "limited": 1,
            "xws": "jessikapava",
            "ability": "While you defend or perform an attack, you may spend 1 [Charge] or 1 non-recurring [Charge] from your equipped [Astromech] upgrade to reroll up to 1 of your dice for each other friendly ship at range 0-1.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/bc26d8864f421f1362473aa4982108ba.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/05c48dc381e54c6951d3ee42d3587577.jpg",
            "cost": 51,
            "charges": { "value": 1, "recovers": 1 },
            "slots": ["Astromech", "Modification", "Title", "Configuration", "Tech"],
            "ffg": 423,
            "hyperspace": true
          },
          {
            "name": "Temmin Wexley",
            "caption": "Snap",
            "initiative": 4,
            "limited": 1,
            "xws": "temminwexley",
            "ability": "After you fully execute a speed 2-4 maneuver, you may perform a [Boost] action.",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/bb98b7ea3a580542b586a9999fd352c9.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/6acd118b12a34136d4d1df6c765a0deb.jpg",
            "cost": 54,
            "slots": [
              "Talent",
              "Astromech",
              "Modification",
              "Title",
              "Configuration",
              "Tech"
            ],
            "ffg": 422,
            "hyperspace": true
          }
        ]
      },
    // Scum and Villiany
    {
        "name": "Aggressor Assault Fighter",
        "xws": "aggressorassaultfighter",
        "ffg": 21,
        "size": "Medium",
        "dial": [
          "1TW",
          "1BB",
          "1FB",
          "1NB",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3LR",
          "3BB",
          "3FB",
          "3NB",
          "3PR",
          "4FW",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 5 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Calculate" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_IG-2000.png",
        "pilots": [
          {
            "name": "IG-88A",
            "caption": "Aggressive Automaton",
            "initiative": 4,
            "limited": 1,
            "cost": 68,
            "xws": "ig88a",
            "ability": "At the start of the Engagement Phase, you may choose 1 friendly ship with [Calculate] on its action bar at range 1-3. If you do, transfer 1 of your calculate tokens to it.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_197.png",
            "shipAbility": {
              "name": "Advanced Droid Brain",
              "text": "After you perform a [Calculate] action, gain 1 calculate token."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Cannon",
              "Cannon",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_197.jpg",
            "ffg": 197,
            "hyperspace": false
          },
          {
            "name": "IG-88B",
            "caption": "Brutal Battledroid",
            "initiative": 4,
            "limited": 1,
            "cost": 64,
            "xws": "ig88b",
            "ability": "After you perform an attack that misses, you may perform a bonus [Cannon] attack.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_198.png",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/26/e9/26e959b8-34a2-4d0d-93b1-2efad56cd573/op067_ig-88d.png",
                "source": "Coruscant Invitational 2018"
              }
            ],
            "shipAbility": {
              "name": "Advanced Droid Brain",
              "text": "After you perform a [Calculate] action, gain 1 calculate token."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Cannon",
              "Cannon",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_198.jpg",
            "ffg": 198,
            "hyperspace": false
          },
          {
            "name": "IG-88C",
            "caption": "Conniving Contraption",
            "initiative": 4,
            "limited": 1,
            "cost": 65,
            "xws": "ig88c",
            "ability": "After you perform a [Boost] action, you may perform an [Evade] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_199.png",
            "shipAbility": {
              "name": "Advanced Droid Brain",
              "text": "After you perform a [Calculate] action, gain 1 calculate token."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Cannon",
              "Cannon",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_199.jpg",
            "ffg": 199,
            "hyperspace": false
          },
          {
            "name": "IG-88D",
            "caption": "Deadly Device",
            "initiative": 4,
            "limited": 1,
            "cost": 64,
            "xws": "ig88d",
            "ability": "While you execute a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver, you may use another template of the same speed instead: either the turn ([Turn Left] or [Turn Right]) of the same direction or the straight ([Straight]) template.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_200.png",
            "shipAbility": {
              "name": "Advanced Droid Brain",
              "text": "After you perform a [Calculate] action, gain 1 calculate token."
            },
            "slots": [
              "Talent",
              "Sensor",
              "Cannon",
              "Cannon",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_200.jpg",
            "ffg": 200,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "BTL-A4 Y-wing",
        "xws": "btla4ywing",
        "ffg": 12,
        "size": "Small",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "4FR",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" },
          { "difficulty": "Red", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Y-wing.png",
        "pilots": [
          {
            "name": "Crymorah Goon",
            "initiative": 1,
            "limited": 0,
            "cost": 31,
            "xws": "crymorahgoon",
            "text": "Though far from nimble, the Y-wing's heavy hull, substantial shielding, and turret-mounted cannons make it an excellent patrol craft.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_168.png",
            "slots": [
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Illicit",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_168.jpg",
            "ffg": 168,
            "hyperspace": false
          },
          {
            "name": "Drea Renthal",
            "caption": "Pirate Lord",
            "initiative": 4,
            "limited": 1,
            "cost": 49,
            "xws": "drearenthal",
            "ability": "While a friendly non-limited ship performs an attack, if the defender is in your firing arc, the attacker may reroll 1 attack die.",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Illicit",
              "Modification",
              "Gunner"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_166.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_166.jpg",
            "ffg": 166,
            "hyperspace": false
          },
          {
            "name": "Hired Gun",
            "initiative": 2,
            "limited": 0,
            "cost": 33,
            "xws": "hiredgun",
            "text": "Just the mention of Imperial credits can bring a host of less-than-trustworthy individuals to your side.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_167.png",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Illicit",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_167.jpg",
            "ffg": 167,
            "hyperspace": false
          },
          {
            "name": "Kavil",
            "caption": "Callous Corsair",
            "initiative": 5,
            "limited": 1,
            "cost": 43,
            "xws": "kavil",
            "ability": "While you perform a non-[Front Arc] attack, roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_165.png",
            "slots": [
              "Talent",
              "Turret",
              "Torpedo",
              "Astromech",
              "Device",
              "Illicit",
              "Modification",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_165.jpg",
            "ffg": 165,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Customized YT-1300 Light Freighter",
        "xws": "customizedyt1300lightfreighter",
        "ffg": 47,
        "size": "Large",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3LR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3PR",
          "4FW",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Double Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 8 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Boost" },
          { "difficulty": "White", "type": "Rotate Arc" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_CustomizedYT-1300.png",
        "pilots": [
          {
            "name": "Freighter Captain",
            "initiative": 1,
            "limited": 0,
            "cost": 46,
            "xws": "freightercaptain",
            "text": "Many spacers make a living traveling the Outer Rim, where the difference between smuggler and legitimate merchant is often murky. On the outskirts of civilization, buyers are rarely so discerning to ask where merchandise came from, at least as long as the price is low enough.",
            "slots": [
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_225.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_225.jpg",
            "ffg": 225,
            "hyperspace": true
          },
          {
            "name": "Han Solo",
            "caption": "The Corellian Kid",
            "initiative": 6,
            "limited": 1,
            "cost": 54,
            "xws": "hansolo",
            "ability": "While you defend or perform a primary attack, if the attack is obstructed by an obstacle, you may roll 1 additional die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_222.png",
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_222.jpg",
            "ffg": 222,
            "hyperspace": true
          },
          {
            "name": "L3-37",
            "caption": "Droid Revolutionary",
            "initiative": 2,
            "limited": 1,
            "cost": 47,
            "xws": "l337",
            "ability": "If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_224.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              { "difficulty": "Red", "type": "Boost" },
              { "difficulty": "White", "type": "Rotate Arc" }
            ],
            "slots": [
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_224.jpg",
            "ffg": 224,
            "hyperspace": true
          },
          {
            "name": "Lando Calrissian",
            "caption": "Smooth-talking Gambler",
            "initiative": 4,
            "limited": 1,
            "cost": 49,
            "xws": "landocalrissian",
            "ability": "After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_223.png",
            "slots": [
              "Talent",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_223.jpg",
            "ffg": 223,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "Escape Craft",
        "xws": "escapecraft",
        "ffg": 48,
        "size": "Small",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TR",
          "2BW",
          "2FB",
          "2NW",
          "2YR",
          "3BW",
          "3FW",
          "3NW",
          "3KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 2 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Barrel Roll" },
          { "difficulty": "Red", "type": "Coordinate" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_EscapeShuttle.png",
        "pilots": [
          {
            "name": "Autopilot Drone",
            "caption": "Set to Blow",
            "initiative": 1,
            "limited": 1,
            "cost": 12,
            "xws": "autopilotdrone",
            "text": "Sometimes, manufacturer's warnings are made to be broken.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_229.png",
            "charges": { "value": 3, "recovers": 0 },
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Barrel Roll" },
              { "difficulty": "Red", "type": "Coordinate" }
            ],
            "shipAbility": {
              "name": "Rigged Energy Cells",
              "text": "During the System Phase, if you are not docked, lose 1 [Charge]. At the end of the Activation Phase, if you have 0 [Charge], you are destroyed. Before you are removed, each ship at range 0-1 suffers 1 [Critical Hit] damage."
            },
            "slots": [],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_229.jpg",
            "ffg": 229,
            "hyperspace": true
          },
          {
            "name": "L3-37",
            "caption": "Droid Revolutionary",
            "initiative": 2,
            "limited": 1,
            "cost": 26,
            "xws": "l337-escapecraft",
            "ability": "If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_228.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Barrel Roll" },
              { "difficulty": "Red", "type": "Coordinate" }
            ],
            "shipAbility": {
              "name": "Co-Pilot",
              "text": "While you are docked, your carrier ship has your pilot ability in addition to its own."
            },
            "slots": ["Talent", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_228.jpg",
            "ffg": 228,
            "hyperspace": true
          },
          {
            "name": "Lando Calrissian",
            "caption": "Smooth-talking Gambler",
            "initiative": 4,
            "limited": 1,
            "cost": 29,
            "xws": "landocalrissian-escapecraft",
            "ability": "After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results.",
            "shipAbility": {
              "name": "Co-Pilot",
              "text": "While you are docked, your carrier ship has your pilot ability in addition to its own."
            },
            "slots": ["Talent", "Crew", "Modification"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_226.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_226.jpg",
            "ffg": 226,
            "hyperspace": true
          },
          {
            "name": "Outer Rim Pioneer",
            "caption": "Skillful Outlaw",
            "initiative": 3,
            "limited": 1,
            "cost": 28,
            "xws": "outerrimpioneer",
            "ability": "Friendly ships at range 0-1 can perform attacks at range 0 of obstacles.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_227.png",
            "shipAbility": {
              "name": "Co-Pilot",
              "text": "While you are docked, your carrier ship has your pilot ability in addition to its own."
            },
            "slots": ["Talent", "Crew", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_227.jpg",
            "ffg": 227,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "Fang Fighter",
        "xws": "fangfighter",
        "ffg": 36,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2ER",
          "2TB",
          "2BB",
          "2FB",
          "2NB",
          "2YB",
          "2RR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FW",
          "4KR",
          "5FW"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Barrel Roll"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Boost"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_FangFighter.png",
        "pilots": [
          {
            "name": "Fenn Rau",
            "caption": "Skull Leader",
            "initiative": 6,
            "limited": 1,
            "cost": 68,
            "xws": "fennrau",
            "ability": "While you defend or perform an attack, if the attack range is 1, you may roll 1 additional die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_155.png",
            "shipAbility": {
              "name": "Concordia Faceoff",
              "text": "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result."
            },
            "slots": ["Talent", "Torpedo"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_155.jpg",
            "ffg": 155,
            "hyperspace": true
          },
          {
            "name": "Joy Rekkoff",
            "caption": "Skull Squadron Ace",
            "initiative": 4,
            "limited": 1,
            "cost": 52,
            "xws": "joyrekkoff",
            "ability": "While you perform an attack, you may spend 1 [Charge] from an equipped [Torpedo] upgrade. If you do, the defender rolls 1 fewer defense die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_157.png",
            "shipAbility": {
              "name": "Concordia Faceoff",
              "text": "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result."
            },
            "slots": ["Talent", "Torpedo"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_157.jpg",
            "ffg": 157,
            "hyperspace": true
          },
          {
            "name": "Kad Solus",
            "caption": "Skilled Commando",
            "initiative": 4,
            "limited": 1,
            "cost": 54,
            "xws": "kadsolus",
            "ability": "After you fully execute a red maneuver, gain 2 focus tokens.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_158.png",
            "shipAbility": {
              "name": "Concordia Faceoff",
              "text": "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result."
            },
            "slots": ["Talent", "Torpedo"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_158.jpg",
            "ffg": 158,
            "hyperspace": true
          },
          {
            "name": "Old Teroch",
            "caption": "Mandalorian Mentor",
            "initiative": 5,
            "limited": 1,
            "cost": 56,
            "xws": "oldteroch",
            "ability": "At the start of the Engagement Phase, you may choose 1 enemy ship at range 1. If you do and you are in its [Front Arc], it removes all of its green tokens.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_156.png",
            "shipAbility": {
              "name": "Concordia Faceoff",
              "text": "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result."
            },
            "slots": ["Talent", "Torpedo"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_156.jpg",
            "ffg": 156,
            "hyperspace": true
          },
          {
            "name": "Skull Squadron Pilot",
            "initiative": 4,
            "limited": 0,
            "cost": 50,
            "xws": "skullsquadronpilot",
            "text": "The aces of Skull Squadron favor an aggressive approach, using their craft's pivot wing technology to achieve unmatched agility in the pursuit of their quarry.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_159.png",
            "shipAbility": {
              "name": "Concordia Faceoff",
              "text": "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result."
            },
            "slots": ["Talent", "Torpedo"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_159.jpg",
            "ffg": 159,
            "hyperspace": true
          },
          {
            "name": "Zealous Recruit",
            "initiative": 1,
            "limited": 0,
            "cost": 44,
            "xws": "zealousrecruit",
            "text": "Mandalorian Fang fighter pilots must master the Concordia Faceoff maneuver, leveraging their ships' narrow attack profile to execute deadly head-on charges.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_160.png",
            "shipAbility": {
              "name": "Concordia Faceoff",
              "text": "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result."
            },
            "slots": ["Torpedo"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_160.jpg",
            "ffg": 160,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "Firespray-class Patrol Craft",
        "xws": "firesprayclasspatrolcraft",
        "ffg": 10,
        "size": "Medium",
        "dial": [
          "1TW",
          "1BB",
          "1FB",
          "1NB",
          "1YW",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3ER",
          "3BW",
          "3FB",
          "3NW",
          "3RR",
          "4FW",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "arc": "Rear Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Reinforce" },
          { "difficulty": "White", "type": "Boost" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_FIrespray.png",
        "pilots": [
          {
            "name": "Boba Fett",
            "caption": "Notorious Bounty Hunter",
            "initiative": 5,
            "limited": 1,
            "cost": 85,
            "xws": "bobafett",
            "ability": "While you defend or perform an attack, you may reroll 1 of your dice for each enemy ship at range 0-1.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_149.png",
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/bd/38/bd388799-287f-455e-9624-8078e676fed0/op067_boba-fett.png",
                "source": "Coruscant Invitational 2018"
              }
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_149.jpg",
            "ffg": 149,
            "hyperspace": true
          },
          {
            "name": "Bounty Hunter",
            "initiative": 2,
            "limited": 0,
            "cost": 64,
            "xws": "bountyhunter",
            "text": "The Firespray-class patrol craft is infamous for its association with the deadly bounty hunters Jango Fett and Boba Fett, who packed their craft with countless deadly armaments.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_154.png",
            "slots": [
              "Cannon",
              "Missile",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_154.jpg",
            "ffg": 154,
            "hyperspace": true
          },
          {
            "name": "Emon Azzameen",
            "caption": "Shipping Magnate",
            "initiative": 4,
            "limited": 1,
            "cost": 74,
            "xws": "emonazzameen",
            "ability": "If you would drop a device using a [1 [Straight]] template, you may use the [3 [Turn Left]], [3 [Straight]], or [3 [Turn Right]] template instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_150.png",
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_150.jpg",
            "ffg": 150,
            "hyperspace": true
          },
          {
            "name": "Kath Scarlet",
            "caption": "Captain of the Binayre Pirates",
            "initiative": 4,
            "limited": 1,
            "cost": 72,
            "xws": "kathscarlet",
            "ability": "While you perform a primary attack, if there is at least 1 friendly non-limited ship at range 0 of the defender, roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_151.png",
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_151.jpg",
            "ffg": 151,
            "hyperspace": true
          },
          {
            "name": "Koshka Frost",
            "caption": "Icy Professional",
            "initiative": 3,
            "limited": 1,
            "cost": 70,
            "xws": "koshkafrost",
            "ability": "While you defend or perform an attack, if the enemy ship is stressed, you may reroll 1 of your dice.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_152.png",
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_152.jpg",
            "ffg": 152,
            "hyperspace": true
          },
          {
            "name": "Krassis Trelix",
            "caption": "Imperial Deserter",
            "initiative": 3,
            "limited": 1,
            "cost": 68,
            "xws": "krassistrelix",
            "ability": "You can perform [Front Arc] special attacks from your [Rear Arc]. While you perform a special attack, you may reroll 1 attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_153.png",
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_153.jpg",
            "ffg": 153,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "G-1A Starfighter",
        "xws": "g1astarfighter",
        "ffg": 22,
        "size": "Medium",
        "dial": [
          "0OR",
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "2KR",
          "3BR",
          "3FW",
          "3NR",
          "4FR",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 5 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Jam" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_MistHunter.png",
        "pilots": [
          {
            "name": "4-LOM",
            "caption": "Reprogrammed Protocol Droid",
            "initiative": 3,
            "limited": 1,
            "cost": 49,
            "xws": "4lom",
            "ability": "After you fully execute a red maneuver, gain 1 calculate token. At the start of the End Phase, you may choose 1 ship at range 0-1. If you do, transfer 1 of your stress tokens to that ship.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_201.png",
            "slots": ["Talent", "Sensor", "Crew", "Illicit", "Modification", "Title"],
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              { "difficulty": "White", "type": "Jam" }
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_201.jpg",
            "ffg": 201,
            "hyperspace": false
          },
          {
            "name": "Gand Findsman",
            "initiative": 1,
            "limited": 0,
            "cost": 41,
            "xws": "gandfindsman",
            "text": "The legendary Findsmen of Gand worship the enshrouding mists of their home planet, using signs, augurs, and mystical rituals to track their quarry.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_203.png",
            "slots": ["Sensor", "Crew", "Illicit", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_203.jpg",
            "ffg": 203,
            "hyperspace": false
          },
          {
            "name": "Zuckuss",
            "caption": "Meditative Gand",
            "initiative": 3,
            "limited": 1,
            "cost": 45,
            "xws": "zuckuss",
            "ability": "While you perform a primary attack, you may roll 1 additional attack die. If you do, the defender rolls 1 additional defense die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_202.png",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/62/69/6269d549-8a5b-40f6-84cb-6ef6fa47212f/op067_zuckuss.png",
                "source": "Coruscant Invitational 2018"
              }
            ],
            "slots": ["Talent", "Sensor", "Crew", "Illicit", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_202.jpg",
            "ffg": 202,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "HWK-290 Light Freighter",
        "xws": "hwk290lightfreighter",
        "ffg": 34,
        "size": "Small",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TR",
          "3BW",
          "3FB",
          "3NW",
          "3YR",
          "4FW"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Single Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Rotate Arc" },
            "type": "Focus"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Rotate Arc" },
            "type": "Lock"
          },
          { "difficulty": "Red", "type": "Boost" },
          { "difficulty": "White", "type": "Rotate Arc" },
          { "difficulty": "Red", "type": "Jam" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_HWK-290.png",
        "pilots": [
          {
            "name": "Dace Bonearm",
            "caption": "Outer Rim Mercenary",
            "initiative": 4,
            "limited": 1,
            "cost": 34,
            "xws": "dacebonearm",
            "ability": "After an enemy ship at range 0-3 receives at least 1 ion token, you may spend 3 [Charge]. If you do, that ship gains 2 additional ion tokens.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_174.png",
            "charges": { "value": 3, "recovers": 1 },
            "slots": [
              "Talent",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_174.jpg",
            "ffg": 174,
            "hyperspace": false
          },
          {
            "name": "Palob Godalhi",
            "caption": "Tethan Resister",
            "initiative": 3,
            "limited": 1,
            "cost": 40,
            "xws": "palobgodalhi",
            "ability": "At the start of the Engagement Phase, you may choose 1 enemy ship in your firing arc at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_175.png",
            "slots": [
              "Talent",
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_175.jpg",
            "ffg": 175,
            "hyperspace": false
          },
          {
            "name": "Spice Runner",
            "initiative": 1,
            "limited": 0,
            "cost": 31,
            "xws": "spicerunner",
            "text": "Though its cargo space is limited compared to other light freighters, the small, swift HWK-290 is a favorite choice of smugglers who specialize in discreetly transporting precious goods.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_177.png",
            "slots": [
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_177.jpg",
            "ffg": 177,
            "hyperspace": false
          },
          {
            "name": "Torkil Mux",
            "caption": "Mercenary Miner",
            "initiative": 2,
            "limited": 1,
            "cost": 37,
            "xws": "torkilmux",
            "ability": "At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, that ship engages at initiative 0 instead of its normal initiative value this round.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_176.png",
            "slots": [
              "Crew",
              "Device",
              "Illicit",
              "Modification",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_176.jpg",
            "ffg": 176,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "JumpMaster 5000",
        "xws": "jumpmaster5000",
        "ffg": 45,
        "size": "Large",
        "dial": [
          "1TW",
          "1BB",
          "1FB",
          "1NW",
          "1YR",
          "2TW",
          "2BB",
          "2FB",
          "2NW",
          "2YR",
          "3LR",
          "3BB",
          "3FB",
          "3NW",
          "4FW",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Single Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Rotate Arc" },
            "type": "Focus"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Rotate Arc" },
            "type": "Lock"
          },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Jumpmaster.png",
        "pilots": [
          {
            "name": "Contracted Scout",
            "initiative": 2,
            "limited": 0,
            "cost": 44,
            "xws": "contractedscout",
            "text": "Built for long-distance reconnaissance and plotting new hyperspace routes, the lightly armed JumpMaster 5000 is often extensively retrofitted with custom upgrades.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_217.png",
            "slots": [
              "Torpedo",
              "Crew",
              "Gunner",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_217.jpg",
            "ffg": 217,
            "hyperspace": false
          },
          {
            "name": "Dengar",
            "caption": "Vengeful Corellian",
            "initiative": 6,
            "limited": 1,
            "cost": 56,
            "xws": "dengar",
            "ability": "After you defend, if the attacker is in your [Front Arc], you may spend 1 [Charge] to perform a bonus attack against the attacker.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_214.png",
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/fe/da/feda9a2c-38f4-447a-8b0c-af7e04ace137/op067_dengar.png",
                "source": "Coruscant Invitational 2018"
              }
            ],
            "charges": { "value": 1, "recovers": 1 },
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Gunner",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_214.jpg",
            "ffg": 214,
            "hyperspace": false
          },
          {
            "name": "Manaroo",
            "caption": "Graceful Aruzan",
            "initiative": 3,
            "limited": 1,
            "cost": 47,
            "xws": "manaroo",
            "ability": "At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, transfer all green tokens assigned to you to that ship.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_215.png",
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Gunner",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_215.jpg",
            "ffg": 215,
            "hyperspace": false
          },
          {
            "name": "Tel Trevura",
            "caption": "Escape Artist",
            "initiative": 4,
            "limited": 1,
            "cost": 48,
            "xws": "teltrevura",
            "ability": "If you would be destroyed, you may spend 1 [Charge]. If you do, discard all of your damage cards, suffer 5 [Hit] damage, and place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of your player edge.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_216.png",
            "charges": { "value": 1, "recovers": 0 },
            "slots": [
              "Talent",
              "Torpedo",
              "Crew",
              "Gunner",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_216.jpg",
            "ffg": 216,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Kihraxz Fighter",
        "xws": "kihraxzfighter",
        "ffg": 7,
        "size": "Small",
        "dial": [
          "1TW",
          "1BB",
          "1NB",
          "1YW",
          "2ER",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "2RR",
          "3BW",
          "3FB",
          "3NW",
          "4FW",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 5 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Kihraxz.png",
        "pilots": [
          {
            "name": "Black Sun Ace",
            "initiative": 3,
            "limited": 0,
            "cost": 41,
            "xws": "blacksunace",
            "text": "The Kihraxz assault fighter was developed specifically for the Black Sun crime syndicate, whose highly paid ace pilots demanded a nimble, powerful ship to match their skills.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_195.png",
            "slots": [
              "Talent",
              "Missile",
              "Illicit",
              "Illicit",
              "Modification",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_195.jpg",
            "ffg": 195,
            "hyperspace": false
          },
          {
            "name": "Captain Jostero",
            "caption": "Aggressive Opportunist",
            "initiative": 3,
            "limited": 1,
            "cost": 42,
            "xws": "captainjostero",
            "ability": "After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against that ship.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_194.png",
            "slots": [
              "Missile",
              "Illicit",
              "Illicit",
              "Modification",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_194.jpg",
            "ffg": 194,
            "hyperspace": false
          },
          {
            "name": "Cartel Marauder",
            "initiative": 2,
            "limited": 0,
            "cost": 38,
            "xws": "cartelmarauder",
            "text": "The versatile Kihraxz was modeled after Incom's popular X-wing starfighter, but an array of after-market modification kits ensure a wide variety of designs.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_196.png",
            "slots": [
              "Missile",
              "Illicit",
              "Illicit",
              "Modification",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_196.jpg",
            "ffg": 196,
            "hyperspace": false
          },
          {
            "name": "Graz",
            "caption": "The Hunter",
            "initiative": 4,
            "limited": 1,
            "cost": 46,
            "xws": "graz",
            "ability": "While you defend, if you are behind the attacker, roll 1 additional defense die. While you perform an attack, if you are behind the defender, roll 1 additional attack die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_192.png",
            "slots": [
              "Talent",
              "Missile",
              "Illicit",
              "Illicit",
              "Modification",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_192.jpg",
            "ffg": 192,
            "hyperspace": false
          },
          {
            "name": "Talonbane Cobra",
            "caption": "Scourge of Tansarii Point",
            "initiative": 5,
            "limited": 1,
            "cost": 50,
            "xws": "talonbanecobra",
            "ability": "While you defend at attack range 3 or perform an attack at attack range 1, roll 1 additional die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_191.png",
            "slots": [
              "Talent",
              "Missile",
              "Illicit",
              "Illicit",
              "Modification",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_191.jpg",
            "ffg": 191,
            "hyperspace": false
          },
          {
            "name": "Viktor Hel",
            "caption": "Storied Bounty Hunter",
            "initiative": 4,
            "limited": 1,
            "cost": 44,
            "xws": "viktorhel",
            "ability": "After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_193.png",
            "slots": [
              "Talent",
              "Missile",
              "Illicit",
              "Illicit",
              "Modification",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_193.jpg",
            "ffg": 193,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Lancer-class Pursuit Craft",
        "xws": "lancerclasspursuitcraft",
        "ffg": 42,
        "size": "Large",
        "dial": [
          "1BW",
          "1FW",
          "1NW",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3TB",
          "3BB",
          "3FB",
          "3NB",
          "3YB",
          "4FB",
          "5FW",
          "5KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "arc": "Single Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 8 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Rotate Arc" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_ShadowCaster.png",
        "pilots": [
          {
            "name": "Asajj Ventress",
            "caption": "Force of Her Own",
            "initiative": 4,
            "limited": 1,
            "cost": 74,
            "xws": "asajjventress",
            "ability": "At the start of the Engagement Phase, you may choose 1 enemy ship in your [Single Turret Arc] at range 0-2 and spend 1 [Force]. If you do, that ship gains 1 stress token unless it removes 1 green token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_219.png",
            "force": { "value": 2, "recovers": 1, "side": ["dark"] },
            "slots": [
              "Crew",
              "Illicit",
              "Illicit",
              "Modification",
              "Title",
              "Force Power"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_219.jpg",
            "ffg": 219,
            "hyperspace": false
          },
          {
            "name": "Ketsu Onyo",
            "caption": "Black Sun Contractor",
            "initiative": 5,
            "limited": 1,
            "cost": 70,
            "xws": "ketsuonyo",
            "ability": "At the start of the Engagement Phase, you may choose 1 ship in both your [Front Arc] and [Single Turret Arc] at range 0-1. If you do, it gains 1 tractor token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_218.png",
            "slots": [
              "Talent",
              "Crew",
              "Illicit",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_218.jpg",
            "ffg": 218,
            "hyperspace": false
          },
          {
            "name": "Sabine Wren",
            "caption": "Artistic Saboteur",
            "initiative": 3,
            "limited": 1,
            "cost": 62,
            "xws": "sabinewren-lancerclasspursuitcraft",
            "ability": "While you defend, if the attacker is in your [Single Turret Arc] at range 0-2, you may add 1 [Focus] result to your dice results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_220.png",
            "slots": [
              "Talent",
              "Crew",
              "Illicit",
              "Illicit",
              "Modification",
              "Title"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_220.jpg",
            "ffg": 220,
            "hyperspace": false
          },
          {
            "name": "Shadowport Hunter",
            "initiative": 2,
            "limited": 0,
            "cost": 58,
            "xws": "shadowporthunter",
            "text": "Crime syndicates augment the lethal skills of their loyal contractors with the best technology available, like the fast and formidable Lancer-class pursuit craft.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_221.png",
            "slots": ["Crew", "Illicit", "Illicit", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_221.jpg",
            "ffg": 221,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "M3-A Interceptor",
        "xws": "m3ainterceptor",
        "ffg": 44,
        "size": "Small",
        "dial": [
          "1TW",
          "1BB",
          "1NB",
          "1YW",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3BW",
          "3FB",
          "3NW",
          "3KR",
          "4FW",
          "5FW",
          "5KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Scyk.png",
        "pilots": [
          {
            "name": "Cartel Spacer",
            "initiative": 1,
            "limited": 0,
            "cost": 28,
            "xws": "cartelspacer",
            "text": "MandalMotors' M3-A \"Scyk\" Interceptor is purchased in large quantities by the Hutt Cartel and the Car'das smugglers due to its low cost and customizability.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_190.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_190.jpg",
            "ffg": 190,
            "hyperspace": false
          },
          {
            "name": "Genesis Red",
            "caption": "Tansarii Point Crime Lord",
            "initiative": 4,
            "limited": 1,
            "cost": 34,
            "xws": "genesisred",
            "ability": "After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_184.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_184.jpg",
            "ffg": 184,
            "hyperspace": false
          },
          {
            "name": "Inaldra",
            "caption": "Tansarii Point Boss",
            "initiative": 2,
            "limited": 1,
            "cost": 31,
            "xws": "inaldra",
            "ability": "While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_187.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_187.jpg",
            "ffg": 187,
            "hyperspace": false
          },
          {
            "name": "Laetin A'shera",
            "caption": "Car'das Enforcer",
            "initiative": 3,
            "limited": 1,
            "cost": 33,
            "xws": "laetinashera",
            "ability": "After you defend or perform an attack, if the attack missed, gain 1 evade token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_185.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_185.jpg",
            "ffg": 185,
            "hyperspace": false
          },
          {
            "name": "Quinn Jast",
            "caption": "Fortune Seeker",
            "initiative": 3,
            "limited": 1,
            "cost": 34,
            "xws": "quinnjast",
            "ability": "At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_186.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_186.jpg",
            "ffg": 186,
            "hyperspace": false
          },
          {
            "name": "Serissu",
            "caption": "Flight Instructor",
            "initiative": 5,
            "limited": 1,
            "cost": 40,
            "xws": "serissu",
            "ability": "While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_183.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_183.jpg",
            "ffg": 183,
            "hyperspace": false
          },
          {
            "name": "Sunny Bounder",
            "caption": "Incurable Optimist",
            "initiative": 1,
            "limited": 1,
            "cost": 30,
            "xws": "sunnybounder",
            "ability": "While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_188.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_188.jpg",
            "ffg": 188,
            "hyperspace": false
          },
          {
            "name": "Tansarii Point Veteran",
            "initiative": 3,
            "limited": 0,
            "cost": 32,
            "xws": "tansariipointveteran",
            "text": "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_189.png",
            "shipAbility": {
              "name": "Weapon Hardpoint",
              "text": "You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade."
            },
            "slots": ["Talent", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_189.jpg",
            "ffg": 189,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "M12-L Kimogila Fighter",
        "xws": "m12lkimogilafighter",
        "ffg": 39,
        "size": "Medium",
        "dial": [
          "1TR",
          "1BW",
          "1FB",
          "1NW",
          "1YR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 7 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" },
          { "difficulty": "White", "type": "Reload" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Kimogila.png",
        "pilots": [
          {
            "name": "Cartel Executioner",
            "initiative": 3,
            "limited": 0,
            "cost": 43,
            "xws": "cartelexecutioner",
            "text": "Many veteran pilots in the service of the Hutt kajidics and other criminal operations choose the M12-L Kimogila for its firepower and dreaded reputation alike.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_209.png",
            "shipAbility": {
              "name": "Dead to Rights",
              "text": "While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens."
            },
            "slots": [
              "Talent",
              "Torpedo",
              "Missile",
              "Astromech",
              "Illicit",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_209.jpg",
            "ffg": 209,
            "hyperspace": false
          },
          {
            "name": "Dalan Oberos",
            "caption": "Returned from the Grave",
            "initiative": 3,
            "limited": 1,
            "cost": 46,
            "xws": "dalanoberos",
            "ability": "At the start of the Engagement Phase, you may choose 1 shielded ship in your [Bullseye Arc] and spend 1 [Charge]. If you do, that ship loses 1 shield and you recover 1 shield.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_208.png",
            "charges": { "value": 2, "recovers": 0 },
            "shipAbility": {
              "name": "Dead to Rights",
              "text": "While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens."
            },
            "slots": [
              "Talent",
              "Torpedo",
              "Missile",
              "Astromech",
              "Illicit",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_208.jpg",
            "ffg": 208,
            "hyperspace": false
          },
          {
            "name": "Torani Kulda",
            "caption": "Rodian Freelancer",
            "initiative": 4,
            "limited": 1,
            "cost": 48,
            "xws": "toranikulda",
            "ability": "After you perform an attack, each enemy ship in your [Bullseye Arc] suffers 1 [Hit] damage unless it removes 1 green token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_207.png",
            "shipAbility": {
              "name": "Dead to Rights",
              "text": "While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens."
            },
            "slots": [
              "Talent",
              "Torpedo",
              "Missile",
              "Astromech",
              "Illicit",
              "Modification"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_207.jpg",
            "ffg": 207,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Modified TIE/ln Fighter",
        "xws": "modifiedtielnfighter",
        "ffg": 56,
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3KR",
          "4FW",
          "5FR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_MiningGuild_TIE.png",
        "pilots": [
          {
            "name": "Ahhav",
            "caption": "Vengeful Survivor",
            "initiative": 3,
            "limited": 1,
            "cost": 30,
            "xws": "ahhav",
            "ability": "While you defend or perform an attack, if the enemy ship is a larger size than you, roll 1 additional die.",
            "shipAbility": {
              "name": "Notched Stabilizers",
              "text": "While you move, you ignore asteroids."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d58a0696c8d85a63e90eb8a1e522a54c.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/2d162fae88ae58b9eca31f7dc0b7a9da.jpg",
            "slots": ["Talent", "Modification"],
            "ffg": 442,
            "hyperspace": true
          },
          {
            "name": "Captain Seevor",
            "caption": "Noisy Nuisance",
            "initiative": 3,
            "limited": 1,
            "cost": 30,
            "xws": "captainseevor",
            "ability": "While you defend or perform an attack, before attack dice are rolled, if you are not in the enemy ship's [Bullseye Arc], you may spend 1 [Charge]. If you do, the enemy ship gains 1 jam token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/70b64586cc2eb05d10efc7ba8dfd69d0.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/6ead4bbfa14075a19972dc57b90a34e1.jpg",
            "charges": { "value": 1, "recovers": 1 },
            "shipAbility": {
              "name": "Notched Stabilizers",
              "text": "While you move, you ignore asteroids."
            },
            "slots": ["Talent", "Modification"],
            "ffg": 443,
            "hyperspace": true
          },
          {
            "name": "Foreman Proach",
            "caption": "Slave Driver",
            "initiative": 4,
            "limited": 1,
            "cost": 32,
            "xws": "foremanproach",
            "ability": "Before you engage, you may choose 1 enemy ship in your [Bullseye Arc] at range 1-2 and gain 1 disarm token. If you do, that ship gains 1 tractor token.",
            "shipAbility": {
              "name": "Notched Stabilizers",
              "text": "While you move, you ignore asteroids."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/cfb3b5fa9d747afc3aa10f3b86f45818.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/f789aa53866112fc44fd27ed9e177993.jpg",
            "slots": ["Talent", "Modification"],
            "ffg": 441,
            "hyperspace": true
          },
          {
            "name": "Mining Guild Surveyor",
            "initiative": 2,
            "limited": 0,
            "cost": 25,
            "xws": "miningguildsurveyor",
            "text": "With Imperial construction projects consuming raw materials at an unprecedented rate, the Mining Guild ruthlessly exploits newly discovered deposits of doonium ore on worlds such as Batonn, Lothal, and Umbara.",
            "shipAbility": {
              "name": "Notched Stabilizers",
              "text": "While you move, you ignore asteroids."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3e5872dea32f2015bb6737592c21efaf.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/ad058d0b6d46f668f06bf0007207a30a.jpg",
            "slots": ["Talent", "Modification"],
            "ffg": 445,
            "hyperspace": true
          },
          {
            "name": "Overseer Yushyn",
            "caption": "Overbearing Boss",
            "initiative": 2,
            "limited": 1,
            "cost": 26,
            "xws": "overseeryushyn",
            "ability": "Before a friendly ship at range 1 would gain a disarm token, if that ship is not stressed, you may spend 1 [Charge]. If you do, that ship gains 1 stress token instead.",
            "shipAbility": {
              "name": "Notched Stabilizers",
              "text": "While you move, you ignore asteroids."
            },
            "charges": { "value": 1, "recovers": 1 },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/6c9268d3e6cc6b671d6db6ac39fcad0f.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/1f454eb7c12b572103e59a9a782c3f50.jpg",
            "slots": ["Modification"],
            "ffg": 444,
            "hyperspace": true
          },
          {
            "name": "Mining Guild Sentry",
            "initiative": 1,
            "limited": 0,
            "cost": 24,
            "xws": "miningguildsentry",
            "text": "As part of its arrangement with the Empire, the Mining Guild receives modified TIE/ln Fighters to protect its operations. These craft have solar panels removed from their stabilizers for improved visibility, and feature more extensive life support systems for the benefit of their corporate pilots.",
            "shipAbility": {
              "name": "Notched Stabilizers",
              "text": "While you move, you ignore asteroids."
            },
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/6d67112b15c3c97bd3d4acf2c8d000ed.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/09c955b8008750a30fe398c200431160.jpg",
            "slots": ["Modification"],
            "ffg": 446,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "Quadrijet Transfer Spacetug",
        "xws": "quadrijettransferspacetug",
        "ffg": 9,
        "size": "Small",
        "dial": [
          "1AR",
          "1DR",
          "1TW",
          "1BW",
          "1FW",
          "1NW",
          "1YW",
          "2SR",
          "2LR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "2PR",
          "3BW",
          "3FB",
          "3NW"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 5 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "Red", "type": "Evade" },
          { "difficulty": "White", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Quadjumper.png",
        "pilots": [
          {
            "name": "Constable Zuvio",
            "caption": "Missing Sherriff of Niima Outpost",
            "initiative": 4,
            "limited": 1,
            "cost": 35,
            "xws": "constablezuvio",
            "ability": "If you would drop a device, you may launch it using a [1 [Straight]] template instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_161.png",
            "shipAbility": {
              "name": "Spacetug Tractor Array",
              "text": "Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1."
            },
            "slots": ["Talent", "Crew", "Device", "Illicit", "Modification", "Tech"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_161.jpg",
            "ffg": 161,
            "hyperspace": false
          },
          {
            "name": "Jakku Gunrunner",
            "initiative": 1,
            "limited": 0,
            "cost": 32,
            "xws": "jakkugunrunner",
            "text": "The Quadrijet transfer spacetug, commonly called a \"Quadjumper,\" is nimble in space and atmosphere alike, making it popular among both smugglers and explorers.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_164.png",
            "shipAbility": {
              "name": "Spacetug Tractor Array",
              "text": "Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1."
            },
            "slots": ["Crew", "Device", "Illicit", "Modification", "Tech"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_164.jpg",
            "ffg": 164,
            "hyperspace": false
          },
          {
            "name": "Sarco Plank",
            "caption": "The Scavenger",
            "initiative": 2,
            "limited": 1,
            "cost": 34,
            "xws": "sarcoplank",
            "ability": "While you defend, you may treat your agility value as equal to the speed of the maneuver you executed this round.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_162.png",
            "shipAbility": {
              "name": "Spacetug Tractor Array",
              "text": "Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1."
            },
            "slots": ["Crew", "Device", "Illicit", "Modification", "Tech"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_162.jpg",
            "ffg": 162,
            "hyperspace": false
          },
          {
            "name": "Unkar Plutt",
            "caption": "Miserly Portion Master",
            "initiative": 2,
            "limited": 1,
            "cost": 33,
            "xws": "unkarplutt",
            "ability": "At the start of the Engagement Phase, if there are one or more other ships at range 0, you and each other ship at range 0 gain 1 tractor token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_163.png",
            "shipAbility": {
              "name": "Spacetug Tractor Array",
              "text": "Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1."
            },
            "slots": ["Crew", "Device", "Illicit", "Modification", "Tech"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_163.jpg",
            "ffg": 163,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Scurrg H-6 Bomber",
        "xws": "scurrgh6bomber",
        "ffg": 4,
        "size": "Medium",
        "dial": [
          "1BB",
          "1FB",
          "1NB",
          "2TW",
          "2BW",
          "2FB",
          "2NW",
          "2YW",
          "3ER",
          "3TR",
          "3BW",
          "3FW",
          "3NW",
          "3YR",
          "3RR",
          "4FR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Scurrg.png",
        "pilots": [
          {
            "name": "Captain Nym",
            "caption": "Captain of the Lok Revenants",
            "initiative": 5,
            "limited": 1,
            "cost": 48,
            "xws": "captainnym",
            "ability": "Before a friendly bomb or mine would detonate, you may spend 1 [Charge] to prevent it from detonating. While you defend against an attack obstructed by a bomb or mine, roll 1 additional defense die.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_204.png",
            "charges": { "value": 1, "recovers": 1 },
            "slots": [
              "Talent",
              "Turret",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_204.jpg",
            "ffg": 204,
            "hyperspace": false
          },
          {
            "name": "Lok Revenant",
            "initiative": 2,
            "limited": 0,
            "cost": 45,
            "xws": "lokrevenant",
            "text": "The Nubian Design Collective crafted the Scurrg H-6 Bomber with combat versatility in mind, arming it with powerful shields and a bristling array of destructive weaponry.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_206.png",
            "slots": [
              "Turret",
              "Crew",
              "Device",
              "Device",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_206.jpg",
            "ffg": 206,
            "hyperspace": false
          },
          {
            "name": "Sol Sixxa",
            "caption": "Cunning Commander",
            "initiative": 3,
            "limited": 1,
            "cost": 46,
            "xws": "solsixxa",
            "ability": "If you would drop a device using a [1 [Straight]] template, you may drop it using any speed 1 template instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_205.png",
            "slots": ["Talent", "Turret", "Crew", "Device", "Device", "Modification", "Title", "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_205.jpg",
            "ffg": 205,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "StarViper-class Attack Platform",
        "xws": "starviperclassattackplatform",
        "ffg": 3,
        "size": "Small",
        "dial": [
          "1TW",
          "1BB",
          "1FB",
          "1NB",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3LR",
          "3BW",
          "3FB",
          "3NW",
          "3PR",
          "4FW"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 4 },
          { "type": "shields", "value": 1 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Barrel Roll"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Boost"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_StarViper.png",
        "pilots": [
          {
            "name": "Black Sun Assassin",
            "initiative": 3,
            "limited": 0,
            "cost": 48,
            "xws": "blacksunassassin",
            "text": "Although assassinations can be handled with a shot in the dark or a dire substance added to a drink, a flaming shuttle tumbling from the sky sends a special kind of message.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_181.png",
            "shipAbility": {
              "name": "Microthrusters",
              "text": "While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template."
            },
            "slots": ["Talent", "Sensor", "Torpedo", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_181.jpg",
            "ffg": 181,
            "hyperspace": true
          },
          {
            "name": "Black Sun Enforcer",
            "initiative": 2,
            "limited": 0,
            "cost": 46,
            "xws": "blacksunenforcer",
            "text": "Prince Xizor himself collaborated with MandalMotors to design the StarViper-class attack platform, one of the most formidable starfighters in the galaxy.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_182.png",
            "shipAbility": {
              "name": "Microthrusters",
              "text": "While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template."
            },
            "slots": ["Sensor", "Torpedo", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_182.jpg",
            "ffg": 182,
            "hyperspace": true
          },
          {
            "name": "Dalan Oberos",
            "caption": "Elite Bounty Hunter",
            "initiative": 4,
            "limited": 1,
            "cost": 54,
            "xws": "dalanoberos-starviperclassattackplatform",
            "ability": "After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90°.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_179.png",
            "shipAbility": {
              "name": "Microthrusters",
              "text": "While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template."
            },
            "slots": ["Talent", "Sensor", "Torpedo", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_179.jpg",
            "ffg": 179,
            "hyperspace": true
          },
          {
            "name": "Guri",
            "caption": "Prince Xizor's Bodyguard",
            "initiative": 5,
            "limited": 1,
            "cost": 64,
            "xws": "guri",
            "ability": "At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_178.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              {
                "difficulty": "White",
                "linked": { "difficulty": "Red", "type": "Calculate" },
                "type": "Barrel Roll"
              },
              {
                "difficulty": "White",
                "linked": { "difficulty": "Red", "type": "Calculate" },
                "type": "Boost"
              }
            ],
            "shipAbility": {
              "name": "Microthrusters",
              "text": "While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template."
            },
            "slots": ["Talent", "Sensor", "Torpedo", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_178.jpg",
            "ffg": 178,
            "hyperspace": true
          },
          {
            "name": "Prince Xizor",
            "caption": "Black Sun Kingpin",
            "initiative": 4,
            "limited": 1,
            "cost": 54,
            "xws": "princexizor",
            "ability": "While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 [Hit] or [Critical Hit] damage. If it does, cancel 1 matching result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_180.png",
            "shipAbility": {
              "name": "Microthrusters",
              "text": "While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template."
            },
            "slots": ["Talent", "Sensor", "Torpedo", "Modification", "Title"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_180.jpg",
            "ffg": 180,
            "hyperspace": true
          }
        ]
      },
    {
        "name": "YV-666 Light Freighter",
        "xws": "yv666lightfreighter",
        "ffg": 24,
        "size": "Large",
        "dial": [
          "0OR",
          "1BB",
          "1FB",
          "1NB",
          "2TR",
          "2BW",
          "2FB",
          "2NW",
          "2YR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FW"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Full Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 9 },
          { "type": "shields", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Reinforce" },
          { "difficulty": "White", "type": "Lock" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_YV-666.png",
        "pilots": [
          {
            "name": "Bossk",
            "caption": "Fearsome Hunter",
            "initiative": 4,
            "limited": 1,
            "cost": 64,
            "xws": "bossk",
            "ability": "While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_210.png",
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "alt": [
              {
                "image": "https://images-cdn.fantasyflightgames.com/filer_public/f7/65/f765febe-2e28-4f9f-8ee0-1dbc4c013ef3/op067_bossk.png",
                "source": "Coruscant Invitational 2018"
              }
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_210.jpg",
            "ffg": 210,
            "hyperspace": false
          },
          {
            "name": "Latts Razzi",
            "caption": "Martial Artist",
            "initiative": 3,
            "limited": 1,
            "cost": 59,
            "xws": "lattsrazzi",
            "ability": "At the start of the Engagement Phase, you may choose a ship at range 1 and spend a lock you have on that ship. If you do, that ship gains 1 tractor token.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_212.png",
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_212.jpg",
            "ffg": 212,
            "hyperspace": false
          },
          {
            "name": "Moralo Eval",
            "caption": "Criminal Mastermind",
            "initiative": 4,
            "limited": 1,
            "cost": 68,
            "xws": "moraloeval",
            "ability": "If you would flee, you may spend 1 [Charge]. If you do, place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of the edge of the play area that you fled from.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_211.png",
            "charges": { "value": 2, "recovers": 0 },
            "slots": [
              "Talent",
              "Cannon",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_211.jpg",
            "ffg": 211,
            "hyperspace": false
          },
          {
            "name": "Trandoshan Slaver",
            "caption": "Fearsome Hunter",
            "initiative": 2,
            "limited": 0,
            "cost": 54,
            "xws": "trandoshanslaver",
            "text": "The spacious triple-decker design of the YV-666 makes it popular among bounty hunters and slavers, who often retrofit an entire deck for prisoner transport.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_213.png",
            "slots": [
              "Cannon",
              "Missile",
              "Crew",
              "Crew",
              "Illicit",
              "Modification",
              "Title",
              "Gunner"
            ],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_213.jpg",
            "ffg": 213,
            "hyperspace": false
          }
        ]
      },
    {
        "name": "Z-95-AF4 Headhunter",
        "xws": "z95af4headhunter",
        "ffg": 38,
        "size": "Small",
        "dial": [
          "1BW",
          "1FB",
          "1NW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "3KR",
          "4FW",
          "4KR"
        ],
        "faction": "Scum and Villainy",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 2 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Z-95.png",
        "pilots": [
          {
            "name": "Binayre Pirate",
            "initiative": 1,
            "limited": 0,
            "cost": 24,
            "xws": "binayrepirate",
            "text": "Operating from the Double Worlds, Talus and Tralus, Kath Scarlet's gang of smugglers and pirates would never be described as reputable or dependable—even by other criminals.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_173.png",
            "slots": ["Missile", "Illicit", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_173.jpg",
            "ffg": 173,
            "hyperspace": true
          },
          {
            "name": "Black Sun Soldier",
            "initiative": 3,
            "limited": 0,
            "cost": 27,
            "xws": "blacksunsoldier",
            "text": "The vast and influential Black Sun crime syndicate can always find a use for talented pilots, provided they aren't particular about how they earn their credits.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_172.png",
            "slots": ["Talent", "Missile", "Illicit", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_172.jpg",
            "ffg": 172,
            "hyperspace": true
          },
          {
            "name": "Kaa'to Leeachos",
            "caption": "Imposing Marauder",
            "initiative": 3,
            "limited": 1,
            "cost": 29,
            "xws": "kaatoleeachos",
            "ability": "At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_170.png",
            "slots": ["Talent", "Missile", "Illicit", "Modification"],
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_170.jpg",
            "ffg": 170,
            "hyperspace": true
          },
          {
            "name": "N'dru Suhlak",
            "caption": "Hunt Saboteur",
            "initiative": 4,
            "limited": 1,
            "cost": 31,
            "xws": "ndrusuhlak",
            "ability": "While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die.",
            "slots": ["Talent", "Missile", "Illicit", "Modification"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_169.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_169.jpg",
            "ffg": 169,
            "hyperspace": true
          },
          {
            "name": "Nashtah Pup",
            "caption": "Contingency Plan",
            "initiative": 0,
            "limited": 1,
            "cost": 6,
            "xws": "nashtahpup",
            "ability": "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship [Charge] of the friendly, destroyed Hound's Tooth.",
            "shipAbility": {
              "name": "Escape Craft",
              "text": "Setup: Requires the Hound's Tooth. You must begin the game docked with the Hound's Tooth."
            },
            "slots": ["Missile", "Illicit", "Modification"],
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_171.png",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_171.jpg",
            "ffg": 171,
            "hyperspace": false
          },
          {
            "name": "Bossk",
            "caption": "Fearsome Hunter",
            "initiative": 4,
            "limited": 1,
            "cost": 666666,
            "xws": "bossk-z95af4headhunter",
            "ability": "While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.",
            "shipAbility": {
              "name": "Pursuit Craft",
              "text": "After you deploy, you may acquire a lock on a ship the friendly Hound's Tooth has locked."
            },
            "slots": ["Talent","Missile", "Illicit", "Modification"],
            "image": "",
            "artwork": "",
            "ffg": 666666,
            "hyperspace": false
          }
        ]
      },
    //   Separatist Alliance
    {
        "name": "Belbullab-22 Starfighter",
        "xws": "belbullab22starfighter",
        "size": "Small",
        "dial": [
          "1TW",
          "1BW",
          "1NW",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3LR",
          "3TR",
          "3BW",
          "3FB",
          "3NW",
          "3YR",
          "3PR",
          "4FW",
          "5FW"
        ],
        "faction": "Separatist Alliance",
        "stats": [
          { "type": "attack", "value": 3, "arc": "Front Arc" },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 },
          { "type": "shields", "value": 2 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Barrel Roll"
          },
          {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Focus" },
            "type": "Boost"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Belbullab-22.png",
        "pilots": [
          {
            "name": "General Grievous",
            "caption": "Ambitious Cyborg",
            "initiative": 4,
            "limited": 1,
            "xws": "generalgrievous",
            "ability": "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/9e4a215e799a9e7ad1853d19d149dd20.png",
            "hyperspace": true,
            "cost": 44,
            "slots": ["Talent", "Modification", "Title", "Tactical Relay"],
            "ffg": 492,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/3e4dee70764ead7ebe581246a0d4b85d.jpg"
          },
          {
            "name": "Wat Tambor",
            "caption": "Techno Union Foreman",
            "initiative": 3,
            "limited": 1,
            "xws": "wattambor",
            "ability": "While you perform a primary attack, you may reroll 1 attack die for each calculating friendly ship at range 1 of the defender.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/68cbd6082683fe17778f829555f23a26.png",
            "hyperspace": true,
            "cost": 42,
            "slots": ["Talent", "Modification", "Title", "Tactical Relay"],
            "ffg": 493,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/95127fa6d286fe64f3070e742dc64a7c.jpg"
          },
          {
            "name": "Feethan Ottraw Autopilot",
            "limited": 0,
            "initiative": 1,
            "xws": "feethanottrawautopilot",
            "text": "Unlike the more disposable fighters it also built for the Separatists, Feethan Ottraw Scalable Assemblies designed the Belbullab-22 with a solid mix of firepower, durability, and speed.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/538c4833605af80b226da9e5f800e6ef.png",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              {
                "difficulty": "White",
                "linked": { "difficulty": "Red", "type": "Calculate" },
                "type": "Barrel Roll"
              },
              {
                "difficulty": "White",
                "linked": { "difficulty": "Red", "type": "Calculate" },
                "type": "Boost"
              }
            ],
            "hyperspace": true,
            "cost": 36,
            "slots": ["Modification", "Title", "Tactical Relay"],
            "ffg": 496,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/91052cb8f4ba464f5ac4572a725f757b.jpg"
          },
          {
            "name": "Captain Sear",
            "caption": "Kage Infiltrator",
            "limited": 1,
            "initiative": 2,
            "xws": "captainsear",
            "ability": "While a friendly ship at range 0-3 performs a primary attack, if the defender is in its [Bullseye Arc], before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 [Evade] result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3d3704ab454433a8b4d73ee6bff430b8.png",
            "hyperspace": true,
            "cost": 39,
            "slots": ["Modification", "Title", "Tactical Relay"],
            "ffg": 494,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/91a7a38482d28f21b2620d058800a8fe.jpg"
          },
          {
            "name": "Skakoan Ace",
            "xws": "skakoanace",
            "cost": 41,
            "slots": ["Talent", "Modification", "Title", "Tactical Relay"],
            "ffg": 495,
            "initiative": 3,
            "limited": 0,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/af0e63b7754ef598f1f36ed9a6c4b4ee.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/ceb7a3bc406ff17be5dee5de62b39195.png",
            "text": "With its powerful engines, devastating triple laser cannons, and high customizability, the Belbullab-22 is the chosen craft of several elite Separatist Alliance pilots, including the infamous General Grievous.",
            "hyperspace": true
          }
        ],
        "ffg": 58
      },
    {
        "name": "Hyena-class Droid Bomber",
        "xws": "hyenaclassdroidbomber",
        "size": "Small",
        "ffg": 66,
        "dial": [
          "1TW",
          "1BR",
          "1FW",
          "1NR",
          "1YW",
          "2ER",
          "2TB",
          "2BW",
          "2FB",
          "2NW",
          "2YB",
          "2RR",
          "2KR",
          "3TW",
          "3FB",
          "3YW",
          "4FW",
          "5FR"
        ],
        "faction": "Separatist Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 5 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Calculate" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "type": "Barrel Roll",
            "linked": { "difficulty": "Red", "type": "Lock" }
          },
          { "difficulty": "Red", "type": "Reload" }
        ],
        "pilots": [
          {
            "name": "Techno Union Bomber",
            "initiative": 1,
            "limited": 0,
            "xws": "technounionbomber",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "hyperspace": true,
            "cost": 26,
            "slots": [
              "Torpedo",
              "Missile",
              "Device",
              "Modification",
              "Configuration"
            ],
            "text": "Baktoid Armor Workshop developed the Hyena as a strike craft compatible with Trade Federation Vulture swarm tactics.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/749bdc89c3da6b8034154780959e9c34.png",
            "ffg": 568,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/38a1ea6b53a619fcc6121cc32a91024d.jpg"
          },
          {
            "name": "Bombardment Drone",
            "caption": "Time on Target",
            "limited": 3,
            "initiative": 3,
            "xws": "bombardmentdrone",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "ability": "If you would drop a device, you may launch that device instead, using the same template.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/099422de35fb5ad2c2d238237e7dfe2c.png",
            "hyperspace": true,
            "cost": 32,
            "slots": ["Sensor", "Device", "Device", "Modification", "Configuration"],
            "ffg": 565,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/bc5e862af323dbe8db28d0d6bc6be4ad.jpg"
          },
          {
            "name": "DBS-404",
            "caption": "Preservation Protocol Not Found",
            "xws": "dbs404",
            "initiative": 4,
            "limited": 1,
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "hyperspace": true,
            "cost": 30,
            "slots": [
              "Torpedo",
              "Missile",
              "Device",
              "Modification",
              "Configuration"
            ],
            "ability": "You can perform primary attacks at range 0. While you perform an attack at attack range 0-1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/3e647295c7237a5eb36b94d887eb8e56.png",
            "ffg": 563,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/fb1f119c8dcd69db43a442fecf25fceb.jpg"
          },
          {
            "name": "Baktoid Prototype",
            "caption": "Function over Form",
            "xws": "baktoidprototype",
            "initiative": 1,
            "limited": 2,
            "ability": "While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/254bc7be63cc9f4e629198f8d45f2f9b.png",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "hyperspace": true,
            "cost": 28,
            "slots": [
              "Sensor",
              "Missile",
              "Missile",
              "Modification",
              "Configuration"
            ],
            "ffg": 566,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/f1e719d3490aceee6e5d93ac5b2a6cb2.jpg"
          },
          {
            "name": "Separatist Bomber",
            "xws": "separatistbomber",
            "initiative": 3,
            "limited": 0,
            "text": "The droid armies of the Separatists are callous to the plight of civilians and make no effort to limit collateral damage.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/cf510ca885a5f85395542b9aa51fba73.png",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "hyperspace": true,
            "cost": 29,
            "slots": [
              "Torpedo",
              "Missile",
              "Device",
              "Modification",
              "Configuration"
            ],
            "ffg": 567,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/162821196c9ca9ca7ef8d1cb1acab15b.jpg"
          },
          {
            "name": "DBS-32C",
            "xws": "dbs32c",
            "caption": "Droid Control Signal Relay",
            "limited": 1,
            "initiative": 3,
            "ability": "At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/1befc5619a02e2ea8b7bfb8df93471a1.png",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              {
                "difficulty": "White",
                "type": "Barrel Roll",
                "linked": { "difficulty": "Red", "type": "Lock" }
              },
              { "difficulty": "Red", "type": "Jam" }
            ],
            "hyperspace": true,
            "cost": 42,
            "slots": ["Sensor", "Tactical Relay", "Modification", "Configuration"],
            "ffg": 564,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/f58f50898f4fa3900eb1b7d01aec4ae5.jpg"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Hyena.png"
      },
    {
        "name": "Nantex-class Starfighter",
        "xws": "nantexclassstarfighter",
        "size": "Small",
        "ffg": 67,
        "dial": [
          "1TW",
          "1BB",
          "1NB",
          "1YW",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "3LR",
          "3TW",
          "3BB",
          "3FB",
          "3NB",
          "3YW",
          "3PR",
          "4FW",
          "5FW",
          "5KR"
        ],
        "faction": "Separatist Alliance",
        "stats": [
          { "arc": "Bullseye Arc", "type": "attack", "value": 3 },
          { "arc": "Single Turret Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 3 },
          { "type": "hull", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Evade" }
        ],
        "pilots": [
          {
            "name": "Stalgasin Hive Guard",
            "initiative": 3,
            "limited": 0,
            "xws": "stalgasinhiveguard",
            "shipAbility": {
              "name": "Pinpoint Tractor Array",
              "text": "You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action."
            },
            "hyperspace": true,
            "text": "Designed for the unique physiology of Geonosian pilots, Nantex-class starfighters are capable of maneuvers that would rip most ships—and pilots—apart.",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/62c29b8b7f82e37980d58b39023a800a.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/e97a0ae22847e0b71d920a0df9dfcfab.png",
            "cost": 34,
            "ffg": 609,
            "slots": ["Talent"]
          },
          {
            "name": "Sun Fac",
            "initiative": 6,
            "limited": 1,
            "xws": "sunfac",
            "shipAbility": {
              "name": "Pinpoint Tractor Array",
              "text": "You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action."
            },
            "hyperspace": true,
            "caption": "Archduke's Enforcer",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/ace32f2bdd974de54020be34bfb85a76.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/42265df53c90026a58ac96b0acd3c1f8.png",
            "ability": "While you perform a primary attack, if the defender is tractored, roll 1 additional attack die.",
            "cost": 54,
            "ffg": 604,
            "slots": ["Talent", "Talent"]
          },
          {
            "name": "Berwer Kret",
            "xws": "berwerkret",
            "initiative": 5,
            "limited": 1,
            "shipAbility": {
              "name": "Pinpoint Tractor Array",
              "text": "You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action."
            },
            "hyperspace": true,
            "caption": "Hive Guard Captain",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/8466283eeb7d476744913f5d9d69e745.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/f1c76ce6ff266c23099686392efef565.png",
            "ability": "After you perform an attack that hits, each friendly ship with [Calculate] on its action bar and a lock on the defender may perform a red [Calculate] action.",
            "cost": 40,
            "ffg": 605,
            "slots": ["Talent", "Talent"]
          },
          {
            "name": "Chertek",
            "xws": "chertek",
            "initiative": 4,
            "limited": 1,
            "shipAbility": {
              "name": "Pinpoint Tractor Array",
              "text": "You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action."
            },
            "hyperspace": true,
            "caption": "Opportunistic Ace",
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/fc7fff6c1e6eb73ff6ae10768f5491a7.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/07504533be45d13cb82d71ea11d234f7.png",
            "ability": "While you perform a primary attack, if the defender is tractored, you may reroll up to 2 attack dice.",
            "cost": 39,
            "ffg": 606,
            "slots": ["Talent", "Talent"]
          },
          {
            "name": "Gorgol",
            "caption": "Handy Engineer",
            "cost": 36,
            "ffg": 607,
            "limited": 1,
            "initiative": 2,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/8749f3b0f17a7c517e8633cc2558792f.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d2d0764f83a2740f407082e934986ff2.png",
            "shipAbility": {
              "name": "Pinpoint Tractor Array",
              "text": "You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action."
            },
            "ability": "During the System Phase, you may gain 1 disarm token and choose a friendly ship at range 1-2. If you do, it gains 1 tractor token, then repairs 1 of its faceup Ship trait damage cards.",
            "hyperspace": true,
            "slots": ["Talent"],
            "xws": "gorgol"
          },
          {
            "name": "Petranaki Arena Ace",
            "cost": 38,
            "ffg": 608,
            "initiative": 4,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/5c32b5d481ad922be7a0ec4a3743d1d6.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/d2d62b6070fdf59b58db79aadb845d54.png",
            "shipAbility": {
              "name": "Pinpoint Tractor Array",
              "text": "You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action."
            },
            "text": "The Petranaki Arena is a massive edifice on Geonosis that was a key site in the first battle of the Clone Wars.",
            "hyperspace": true,
            "limited": 0,
            "slots": ["Talent", "Talent"],
            "xws": "petranakiarenaace"
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_Nantex_Class_Starfighter.png"
      },
    {
        "name": "Sith Infiltrator",
        "xws": "sithinfiltrator",
        "size": "Large",
        "dial": [
          "1TR",
          "1BB",
          "1FB",
          "1NB",
          "1YR",
          "2LR",
          "2TW",
          "2BB",
          "2FB",
          "2NB",
          "2YW",
          "2PR",
          "3TW",
          "3BW",
          "3FB",
          "3NW",
          "3YW",
          "4FW",
          "5KR"
        ],
        "faction": "Separatist Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 3 },
          { "type": "agility", "value": 1 },
          { "type": "hull", "value": 6 },
          { "type": "shields", "value": 4 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Focus" },
          { "difficulty": "White", "type": "Lock" },
          { "difficulty": "Red", "type": "Barrel Roll" }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_SithInfiltrator.png",
        "pilots": [
          {
            "name": "Darth Maul",
            "caption": "Sith Assassin",
            "initiative": 5,
            "limited": 1,
            "xws": "darthmaul",
            "force": { "value": 3, "recovers": 1, "side": ["dark"] },
            "ability": "After you perform an attack, you may spend 2 [Force] to perform a bonus primary attack against a different target. If your attack missed, you may perform that bonus primary attack against the same target instead.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/95428161db7de4adcea6fa8bcbf9de2f.png",
            "hyperspace": true,
            "cost": 67,
            "slots": [
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Device",
              "Modification",
              "Title",
              "Force Power",
              "Tactical Relay"
            ],
            "ffg": 503,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/04b1c1fea3735eb844455dd3278346d0.jpg"
          },
          {
            "name": "Count Dooku",
            "caption": "Darth Tyranus",
            "initiative": 3,
            "limited": 1,
            "xws": "countdooku",
            "force": { "value": 3, "recovers": 1, "side": ["dark"] },
            "ability": "After you defend, if the attacker is in your firing arc, you may spend 1 [Force] to remove 1 of your blue or red tokens. After you perform an attack that hits, you may spend 1 [Force] to perform an action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/88959087710ec5a80a16dd93573f149d.png",
            "hyperspace": true,
            "cost": 63,
            "slots": [
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Device",
              "Modification",
              "Title",
              "Force Power",
              "Tactical Relay"
            ],
            "ffg": 504,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/65eabe68c7d1ae072442d8c8808414db.jpg"
          },
          {
            "name": "Dark Courier",
            "initiative": 2,
            "limited": 0,
            "xws": "darkcourier",
            "text": "The vessel called the Scimitar was heavily modified, equipped with stealth technologies and advanced surveillance devices for infiltration and assassination missions.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/132f1957b904c890b94bf3aaf2a944ce.png",
            "hyperspace": true,
            "cost": 51,
            "slots": [
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Device",
              "Modification",
              "Title",
              "Tactical Relay"
            ],
            "ffg": 506,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/8b9c158df033daab2ea6acecd29c5c0d.jpg"
          },
          {
            "name": "0-66",
            "xws": "066",
            "cost": 52,
            "slots": [
              "Cannon",
              "Torpedo",
              "Crew",
              "Crew",
              "Device",
              "Modification",
              "Title",
              "Tactical Relay"
            ],
            "ffg": 505,
            "caption": "Sinister Automaton",
            "initiative": 3,
            "limited": 1,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/c0a65aa29f085d517d907bc7799e4146.jpg",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/9edd9bb6846e77723d8f0381bb7909aa.png",
            "ability": "After you defend, you may spend 1 calculate token to perform an action.",
            "shipActions": [
              { "difficulty": "White", "type": "Calculate" },
              { "difficulty": "White", "type": "Lock" },
              { "difficulty": "Red", "type": "Barrel Roll" }
            ],
            "hyperspace": true
          }
        ],
        "ffg": 60
      },
    {
        "name": "Vulture-class Droid Fighter",
        "xws": "vultureclassdroidfighter",
        "size": "Small",
        "dial": [
          "1TW",
          "1YW",
          "1KR",
          "2ER",
          "2TB",
          "2BW",
          "2FB",
          "2NW",
          "2YB",
          "2RR",
          "3TW",
          "3BR",
          "3FB",
          "3NR",
          "3YW",
          "4FB",
          "5FW"
        ],
        "faction": "Separatist Alliance",
        "stats": [
          { "arc": "Front Arc", "type": "attack", "value": 2 },
          { "type": "agility", "value": 2 },
          { "type": "hull", "value": 3 }
        ],
        "actions": [
          { "difficulty": "White", "type": "Calculate" },
          { "difficulty": "White", "type": "Lock" },
          {
            "difficulty": "White",
            "type": "Barrel Roll",
            "linked": { "difficulty": "Red", "type": "Calculate" }
          }
        ],
        "icon": "https://sb-cdn.fantasyflightgames.com/ship_types/I_VultureDroid.png",
        "pilots": [
          {
            "name": "Trade Federation Drone",
            "initiative": 1,
            "limited": 0,
            "xws": "tradefederationdrone",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "text": "The Trade Federation deployed countless Vulture Droids at the Battle of Naboo, and continues to use these inexpensive starfighters in the Clone Wars.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/4d8ed38f907fb4869611add738abda11.png",
            "hyperspace": true,
            "cost": 19,
            "slots": ["Missile", "Modification", "Configuration"],
            "ffg": 498,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/df075613c4c3dbe7803df6bfa5082262.jpg"
          },
          {
            "name": "Precise Hunter",
            "caption": "Pinpoint Protocols",
            "limited": 3,
            "initiative": 3,
            "xws": "precisehunter",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "ability": "While you perform an attack, if the defender is in your [Bullseye Arc], you may reroll 1 blank result.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/44cd712b4db9f34091cff73a4fda4303.png",
            "hyperspace": true,
            "cost": 23,
            "slots": ["Missile", "Modification", "Configuration"],
            "ffg": 500,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/fab82de87d230b77a5e4b2360ea9af93.jpg"
          },
          {
            "name": "Haor Chall Prototype",
            "caption": "Xi Char Offering",
            "limited": 2,
            "initiative": 1,
            "xws": "haorchallprototype",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "ability": "After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/91421be1f3bbbefd005c1b2682f0bc44.png",
            "hyperspace": true,
            "cost": 21,
            "slots": ["Missile", "Modification", "Configuration"],
            "ffg": 502,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/18cdc19a9627a38d0ec2783ccd5cb183.jpg"
          },
          {
            "name": "DFS-081",
            "xws": "dfs081",
            "initiative": 3,
            "limited": 1,
            "caption": "Preservation Programming",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "ability": "While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/808de8db6d43921b4e3124f01d5d4947.png",
            "hyperspace": true,
            "cost": 26,
            "slots": ["Missile", "Modification", "Configuration"],
            "ffg": 499,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/2d797107c628ebd2ab8e526fcbb6076d.jpg"
          },
          {
            "name": "Separatist Drone",
            "initiative": 3,
            "limited": 0,
            "xws": "separatistdrone",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "text": "As the Clone Wars escalate, the Separatist Alliance continues to develop the technology of droid starfighters, as well as the tactical droids that command them.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/64e75b9a1024ac0c909634e62e165b2e.png",
            "hyperspace": true,
            "cost": 21,
            "slots": ["Missile", "Modification", "Configuration"],
            "ffg": 497,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/df638358903b64e7b246b3a56fa68af7.jpg"
          },
          {
            "name": "DFS-311",
            "xws": "dfs311",
            "initiative": 1,
            "limited": 1,
            "caption": "Scouting Drone",
            "shipAbility": {
              "name": "Networked Calculations",
              "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
            },
            "ability": "At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.",
            "image": "https://sb-cdn.fantasyflightgames.com/card_images/en/741f05dbe0f7e56fc9918b86bdb0e3fb.png",
            "hyperspace": true,
            "cost": 23,
            "slots": ["Missile", "Modification", "Configuration"],
            "ffg": 501,
            "artwork": "https://sb-cdn.fantasyflightgames.com/card_art/5fb72145f183eeddd8d37ce1a4d114f7.jpg"
          }
        ],
        "ffg": 59
      }     
]

const insertFactions = function() {
  Faction.create(factionData)
    .then(() => db.db.close());
};

insertFactions();

const insertShips = function() {
    Ship.create(shipData)
      .then(() => db.db.close());
  };
  
  insertShips();
  
