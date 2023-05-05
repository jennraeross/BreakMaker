export default {
	data() {
		return {
			show: false,
			traits: [0, -2, -1, "+1", "+2"],
			mightTrait: 0,
			deftTrait: 0,
			gritTrait: 0,
			insightTrait: 0,
			auraTrait: 0,
			callingSelected: null,
			weaponSelected: null,
			armorSelected: null,
			shieldSelected: null,
			xp: 0,
			characterName: null,
			speciesSelected: null,
			homelandSelected: null,
			historySelected: null,
			languagesSelected: null,
			quirkSelected: null,
			currentHearts: null,
			brightPoints: 0,
			darkPoints: 0,
			elective1: null,
			elective2: null,
			elective4: null,
			elective6: null,
			elective8: null,
			elective10: null,
			brightGifts: [],
			darkGifts: [],
			tenebrateGift: null,
			gifts: {
				bright: {
					luminescentTattoos: {
						name: "Luminescent Tattoos",
						description:
							"Faintly glowing lines have appeared across your body, forming patterns.",
					},
					serpentEyes: {
						name: "Serpent Eyes",
						description:
							"Your eyes never shut, you don't blink, you even stare in your sleep.",
					},
					halo: {
						name: "Halo",
						description:
							"An arc of softly glowing light crowns your head, but can be covered by a hood.",
					},
					resonantVoice: {
						name: "Resonant Voice",
						description:
							"Your voice has developed an authoritative, ethereal echo.",
					},
					feathers: {
						name: "Feathers",
						description:
							"You've sprouted long, radiant feathers across your shoulders.",
					},
					aestheticConsistency: {
						name: "Aesthetic Consistency",
						description:
							"Your appearance has become unsettlingly symmetrical.",
					},
					scaledJoints: {
						name: "Scaled Joints",
						description:
							"Patches of glistening scales have replaced the skin around your joints.",
					},
					prismaticHair: {
						name: "Prismatic Hair",
						description:
							"Your hair has become extremely long and shimmers different colors.",
					},
					elongation: {
						name: "Elongation",
						description:
							"Your fingers, limbs, face, and torso are lengthened just enough to be noticed.",
					},
					thirdEyeGem: {
						name: "Third Eye Gem",
						description:
							"A jewel, of your favorite color, has emerged in the center of your forehead.",
					},
				},
				dark: {
					horns: {
						name: "Horns",
						description:
							"Horns, or antlers, protrude from your temples or forehead.",
					},
					opaqueEyes: {
						name: "Opaque Eyes",
						description:
							"Your eyes have clouded over and become a single flat color.",
					},
					devilsTail: {
						name: "Devil's Tail",
						description:
							"You've grown a small, non-useful tail that whips back and forth.",
					},
					fangs: {
						name: "Fangs",
						description:
							"Some of your teeth have sharpened and have grown more prominent.",
					},
					melodiousVoice: {
						name: "Melodious Voice",
						description:
							"Your voice can now make even harsh words sound soothing.",
					},
					wintersEmbrace: {
						name: "Winter's Embrace",
						description:
							"Your body has become cool to the touch, and the air around you is chilled.",
					},
					boneSpikes: {
						name: "Bone Spikes",
						description:
							"Small, bony protrusions have broken through your skin in small patches.",
					},
					bestialMane: {
						name: "Bestial Mane",
						description:
							"Your hair has become long, thick, and magnificently unruly.",
					},
					raptorsTalons: {
						name: "Raptor's Talons",
						description:
							"The nails on your hands and feet have hardened into sharp curved points.",
					},
					shadowMark: {
						name: "Shadow Mark",
						description:
							"A symbolic inky scar appears on your cheek or forehead.",
					},
				},
			},
			callings: {
				battlePrincess: {
					name: "Battle Princess",
					stats: [
						[1, 3, 8, 8, 9, 7, 10],
						[2, 3, 8, 8, 9, 7, 10],
						[3, 4, 9, 9, 10, 8, 11],
						[3, 4, 9, 9, 10, 8, 11],
						[4, 5, 10, 10, 11, 9, 12],
						[4, 5, 10, 10, 11, 9, 12],
						[5, 6, 11, 11, 12, 10, 13],
						[5, 6, 11, 11, 12, 10, 13],
						[6, 7, 12, 12, 13, 11, 14],
						[7, 7, 12, 12, 13, 11, 14],
					],
					classAbilities: {
						heartsBlade: {
							name: "Heart's Blade",
							description:
								"You can call forth a weapon forged from the wishes in your heart. These magically manifested weapons are of the finest quality and grow in power and possibility as you do.",
							mechanics: [
								"Creating your Heart's Blade",
								"Your Heart’s Blade grows in power as you rise in Rank. Add the new properties to your Heart’s Blade when you reach the required Rank.",
								"Rank 1: Select your weapon’s primary form and what it is made of.",
								"Choose a Weapon Type: Quick, Master, Mighty, Arc, Lash, Drawn or Mechanical Missile (􏰀 p152).",
								"Choose a Magical Material: Sun Gold, Ash Bronze, or Sky Steel (􏰀 p289).",
								"Rank 3: Your Heart’s Blade gains one of the following properties:",
								"Glittering: +1 on Attack rolls.",
								"Righteous: The weapon’s Extra Damage Threshold is reduced by 2 (􏰀 p152).",
								"Sheltering: The weapon can Parry once per combat in the same manner as a Standard Shield (􏰀 169).",
								"Rank 6: Your Heart’s Blade can now transform into a secondary form, pick from the Weapon Types listed above.",
								"Your Heart’s Blade gains the Combination Weapon Ability allowing a hybrid weapon form (􏰀 p160).",
								"----",
								"Using your Heart's Blade",
								"You can call this weapon into existence through force of will.",
								"Melee Weapons are formed instantly and can be used on the same Turn they are called.",
								"Drawn and Mechanical Missile weapons take a Turn to fully form and appear with 4 Units of ammunition included.",
								"Your your Heart’s Blade (and any ammunition) will vanish instantly on command.",
								"Only a single form of the Heart’s Blade may be summoned at any one time. Either the primary, secondary, or combination form.",
								"If the weapon is Sundered or lost during combat, you can will it away and summon a new Blade.",
							],
						},
						shieldOfLove: {
							name: "Shield of Love",
							description:
								"Your compassion can manifest itself as a protective force for your allies. This might take the form of an iridescent aura or a heart-shaped crystal shield.",
							mechanics: [
								"Once per Fight you bestow an ally, within your sight, a force field that can absorb 1 Heart of Damage; after which it is disappears.",
								"You can perform this Ability in addition to any other Actions permitted on your Turn.",
								"Rank 1: You can Shield 1 person.",
								"Rank 4: You can Shield 2 people.",
								"Rank 8: You can Shield 3 people.",
								"If you can protect more that one person, you can allocate your Shields in one go, or as required.",
							],
						},
						soulCompanion: {
							name: "Soul Companion",
							description:
								"Just as your heart has the power to summon mighty weapons, so it can muster a loyal companion. This devoted sidekick never leaves your side and will even return, in due time, if struck down.",
							mechanics: [
								"You begin your adventures with a magical Companion.",
								"This Companion does not count against your normal allowance of Companions (􏰀 p183).",
								"Create your Soul Companion following the steps listed at the end of this Calling. (􏰀 p47).",
							],
						},
					},
					standardAbilities: {
						gemlight: {
							name: "Gemlight",
							description:
								"A glowing crystal, of your favorite color, forms on the back of your hand.",
							mechanics: [
								"You can make your hand gem glow at will. It provides light equivalent to a Torch (􏰀 p175).",
								"You can use the gem to transfer a single Injury from a victim to yourself with a gentle touch.",
							],
						},
						glitteringMachine: {
							name: "Glittering Machine",
							description:
								"When not in battle, you are able to channel your powers to summon a helpful tool or device, instead of your mighty Heart’s Blade.",
							mechanics: [
								"You can summon a tool made of the same Magical Material chosen for your Heart’s Blade.",
								"Rank 1: You can summon any simple tool, such as a grappling hook or lock pick.",
								"Rank 5: You can summon a simple Techno-Relic or Gadget you are familiar with. Unlike the real things, your glittering version does not require fuel or an additional power source to work.",
								"The summoned tool remains, until:",
								"You swap it for another tool. OR",
								"You call for your Heart’s Blade. OR",
								"You invoke Spirit Wings (􏰀 p45).",
								"----",
								"GAIN: 1 Bright Allegiance Point",
							],
						},
						loveLoveChef: {
							name: "Love-Love Chef",
							description:
								"You’re a passionate cook, you pour your heart and soul into the food you make.",
							mechanics: [
								"You gain the Crafting Discipline Cooking (􏰀 p283).",
								"For specific rules on creating items refer to Craft (􏰀 280).",
								"You use Aura for Crafting rolls.",
							],
						},
						compassionCure: {
							name: "Compassion Cure",
							description:
								"Your kind attention is so sincere that it can dispel ill effects: your hug can lift a dispirited companion, your tears can thaw a petrified ally.",
							mechanics: [
								"With a touch, you can attempt to remove a psychological, physical, or magical Ailment (􏰀 p268) from someone you care about.",
								"Attempting this Ability during a Fight requires you to spend your Action.",
								"Note: This Ability cannot be used for situational Ailments: Toppled, Restrained and Overburdened.",
								"----",
								"CHECK: Aura",
								"SUCCESS: The Ailment is removed",
								"FAILURE: The Ailment remains, you cannot make any further attempts to cure it",
							],
						},
						passionsFire: {
							name: "Passion's Fire",
							description:
								"When you so desire, a brilliant flame flickers around your Heart’s Blade, making it all the more deadly.",
							mechanics: [
								"Blazing Desire: Your Heart’s Blade is ablaze and now does Flame Damage (􏰀 p259) instead of Normal Damage.",
								"Yearning Embrace: After a successful Attack, the fire can be discharged to engulf your target to cause an additional Heart of Damage. This exhausts the Ability.",
								"NOTE: Passion’s Fire can only be used once per Fight.",
								"----",
								"GAIN: 1 Bright Allegiance Point",
							],
						},
						cryOfTheHeart: {
							name: "Cry of the Heart",
							description:
								"A strange sort of empathic magic allows you to understand what lies in the hearts of all those you speak to.",
							mechanics: [
								"You can target this Ability on anyone you have spoken to for a few moments.",
								"After this time you are able to discern the primary emotional motivation that is driving their current actions and discourse (love, greed, fear, etc.)",
								"If applicable, information gleaned from this Ability can used as an Influencing Factor (􏰀 p241) when Negotiating with the individual in the future.",
								"This Ability is mostly inconspicuous, although you may appear to be staring uncomfortably deep into your target’s eyes.",
								"----",
								"GAIN: 1 Bright Allegiance Point",
							],
						},
						battleDance: {
							name: "Battle Dance",
							description:
								"Your animated and tuneful battle commands grant those listening a coordinated, rhythmic, combat flare.",
							mechanics: [
								"You can attempt to coordinate your allies during a Fight, granting all participants a Minor Bonus (+2) to a single roll on their Turn.",
								"This Ability can be used in conjunction with your other permitted Actions, but you must declare the use of this Ability at the beginning of your Turn.",
								"----",
								"CHECK: Aura",
								"SUCCESS: 3 - 2 - 1 - Go! Your Battle Dance begins...",
								"You can apply a Minor Bonus (+2) to a single roll made on your Turn.",
								"Once you have started a Dance, allies in the same Battlefield Area can choose to join in. To do so they must make an Aura Check at the start of your team’s Turn.",
								"ALLY SUCCESS: Your ally jumps into the groove gaining a Minor Bonus (+2) for a roll made on their Turn.",
								"ALLY FAILURE: Your ally makes a misstep, disrupting the Dance. All Dancers, lose their bonus this Turn. An ally can attempt to re-join the dance on the next Turn.",
								"Each Turn Dancers must make a successful Aura Check for the Dance to continue.",
								"FAILURE: You stumble or stutter, and must apply a Minor Penalty (-2) to a roll of your choice made this Turn.",
								"----",
								"After staring a Dance, you can not use this Ability again for 24 hours.",
								"With your GM’s approval, you can use Ability in Linked Contests, like a chase sequence (􏰀 p220).",
							],
						},
						battleBonds: {
							name: "Battle Bonds",
							description:
								"You have a merciful nature that can be felt in even your fiercest attacks. Your clemency does not go unnoticed and, in the midst of battle, you can make friends out of enemies.",
							mechanics: [
								"Whenever you reduce a foe to 0 Hearts or less, and choose to spare their lives, you can attempt to soften their resolve.",
								"----",
								"CHECK: Aura",
								"SUCCESS: You form a Social Bond (􏰀 p279) with the beaten opponent. Discuss and agree with your GM an appropriate Bond. For example, ‘a begrudging admiration’.",
								"A Bonded opponent is less inclined to target you for attack in the future, and will avoid dealing you a finishing blow unless absolutely necessary.",
							],
						},
					},
					advancedAbilities: {
						atYourSide: {
							name: "At Your Side",
							description:
								"Your strikes can create opportunities for your comrades-at-arms to exploit.",
							mechanics: [
								"If one of your Attacks is successful it also counts as an Attack Assist (􏰀 p256) for the next ally attacking the same opponent.",
							],
						},
						spiritWings: {
							name: "Spirit Wings",
							description:
								"The wishes in your heart allow you to soar... literally!",
							mechanics: [
								"You sprout glowing wings, and now you can fly at your normal Speed Rating.",
								"Your wings remain until:",
								"You call for you Heart’s Blade. OR",
								"You invoke the Glittering Machine Ability.",
								"----",
								"GAIN: 1 Brightness Allegiance Point",
							],
						},
						shiningResolve: {
							name: "Shining Resolve",
							description:
								"Your spirit is indomitable and will always remain so.",
							mechanics: ["You gain Supernatural Will (􏰀 p107)."],
						},
						openedHearts: {
							name: "Opened Hearts",
							description:
								"Powerful Bright Magic lies within you, it can wash away all falsehoods leaving nothing but the naked truth, dark secrets, and honest wishes.",
							mechanics: [
								"You can activate this Ability whenever you are speaking to another individual, or at the start of a Negotiation.",
								"----",
								"CONTEST: Your Aura vs. the Grit of anyone in earshot.",
								"Anyone who loses the Contest is unable to lie, deceive, or mislead you for a 24 hour period. Although they can still refuse to answer your questions.",
								"Unfortunately, you are also subject to the effects of this Ability for the same 24 hour period.",
								"----",
								"GAIN: 1 Bright Allegiance Point",
							],
						},
						radiantBlade: {
							name: "Radiant Blade",
							description:
								"You soul burns so brightly that your Heart’s Blade transcends its material form to become a shard of devastating light.",
							mechanics: [
								"You can activate this Ability at will upon summoning your Heart’s Blade.",
								"Slice of light: Your Heart’s Blade is now a glowing shaft of light that does an extra Heart of Bright Damage (􏰀 p259), in addition to the weapon’s Normal Damage.",
								"Purifying Flare: After a successful strike with the Heart’s Blade, the light can be discharged to irradiate your target causing an additional Heart of Bright Damage; which dispels the Ability.",
								"NOTE: Using Purifying Flare prevents you from using this Ability again for another 24 hours.",
								"----",
								"GAIN: 1 Bright Allegiance Point",
							],
						},
						legendInYourOwnTime: {
							name: "Legend in Your Own Time",
							description:
								"Whether it’s your heroic deeds or your legendary tenderness, you have become a source of inspiration for public works of art and epic tavern tales. Your reputation proceeds you... sometimes.",
							mechanics: [
								"Whenever you enter a new Settlement you can attempt Reputation Management (􏰀 p275).",
								"----",
								"CHECK: Aura",
								"SUCCESS: You’ve already established a positive Reputation in this locale. If possible, the Reputation should be based on heroic efforts made in a previous Session. For example, ‘Savior of Homble Village’ or ‘Slayer of the Ooze Beast’.",
								"FAILURE: The locals have never heard of you, or your ‘daring’ exploits.",
							],
						},
						neverStandAlone: {
							name: "Never Stand Alone",
							description:
								"Those touched by your kindness often come to help you in your darkest hour.",
							mechanics: [
								"If you’re in mortal peril, maybe your alone and outnumbered or stranded without hope, you can use this Ability to summon help.",
								"Once activated, your GM will choose a character you have a Social Bond (􏰀 p279) with to come to your assistance. This could even be a spared foe you’ve formed a Battle Bond (􏰀 p44) with.",
								"The chosen character will miraculously appear just in time to offer you required assistance. For example, they might arrive with reinforcements or a convenient escape craft.",
								"NOTE: This Ability cannot be used again until you have had the time to participate in a Downtime Activity (􏰀p273).",
							],
						},
						heartsAegis: {
							name: "Heart's Aegis",
							description:
								"Your Soul Companion is able to transmute into a magical suit of Armor that wraps around you in battle. This armor retains traces of your Companion’s aesthetics.",
							mechanics: [
								"Your can turn your Companion into armor for a specific task or Fight.",
								"The magic armor has the following specifications: Superheavy Armor, Anti-Hazard Abilities, Mechanical Motion",
								"No one other than you can wear the armor.",
								"The armor lasts until:",
								"The task it was activated for is completed OR",
								"You have been reduced to 0 Hearts or less.",
								"NOTE: You cannot use this Ability again for 24 hours.",
								"----",
								"GAIN: 1 Bright Allegiance Point",
							],
						},
					},
				},
				champion: {
					name: "Champion",
					stats: [
						[1, 3, 10, 8, 9, 7, 8],
						[2, 3, 10, 8, 9, 7, 8],
						[3, 4, 11, 9, 10, 8, 9],
						[4, 4, 11, 9, 10, 8, 9],
						[5, 5, 12, 10, 11, 9, 10],
						[6, 5, 12, 10, 11, 9, 10],
						[7, 6, 13, 11, 12, 10, 11],
						[8, 6, 13, 11, 12, 10, 11],
						[9, 7, 14, 12, 13, 11, 12],
						[10, 7, 14, 12, 13, 11, 12],
					],
					classAbilities: {
						combatMomentum: {
							name: "Combat Momentum",
							description:
								"You are a master of cutting a destructive path through swarms of enemies.",
							mechanics: [
								"If you land a finishing blow against an opponent in melee, you gain a Chain Attack against another foe in the same area.",
								"Rank 1: You have on Chain Attack per round, which...",
								"Has a minor bonus (+2) on the attack roll.",
								"Does an extra Heart of Damage if you land a successful Strike.",
								"Rank 5: You gain a second Chain Attack, if the previous one also finishes it's opponent.",
							],
						},
						favoredWeapon: {
							name: "Favored Weapon",
							description:
								"You are intimate with all weapons, and tend to them like a good parent would their children. But, like all parents, you harbor a secret favorite.",
							mechanics: [
								"You gain +1 to your Attack Bonus when using your favored weapon.",
								"Rank 1: Select a Weapon Type to favor: Standard, Concealed, Quick, Master, Mighty, Arc, etc.",
								"Rank 5: Select a second favored Weapon Type.",
								"This bonus is applied to Combination weapons that include one of your favored types. If a weapon combines both favored types, the bonus increases to +2.",
							],
						},
						intoTheFray: {
							name: "Into the Fray",
							description: "You are able to vary your fighting style to suit the battle, applying caution, flair or precision when and where it is required.",
							mechanics: [
								"Each Round during a Fight, you can choose between the following",
								"Daring: Perform an Attack Stunt(p255) without making a wager.",
								"Tooth and Nail: Use a mundane (non-magical) Attack to harm a creature that is normally immune to them.",
								"Whirlwind Defense: Temporarily increase your Defense Rating:",
								"Rank 1: +1 to Defense Rating.",
								"Rank 5: +2 to Defense Rating",
								"All bonuses last until the start of your next Turn."
							],
						},
					},
					standardAbilities: {
						valiant: {
							name: "Valiant",
							description: "While all Champions possess great courage, you can laugh in the face of incomprehensible terror.",
							mechanics: [
								"You have immunity to the Terrified Ailment(p271).",
								"You can help allies defend against the Ailment by shouting encouraging words. Those within earshot gain an Edge on their roll to resist, or remove, the Ailment."
							],
						},
						opportunisticButcher: {
							name: "Opportunistic Butcher",
							description:
								"Monster slaying is often such a wasteful business, but you see your next kill as your next meal. As you always say, every beast is a potential feast.",
							mechanics: [
								"You can attempt to create Rations from slain creatures.",
								"----",
								"REQUIRES: A Grit Check.",
								"SUCCESS: Dinner is served.",
								"A small or Medium sized creature will yield 3 days worth of Rations.",
								"A Large or Massive creature will yield 6 days worth of Rations.",
								"A Tiny creature might only provide a satisfying snack.",
								"Colossal creatures might feed an entire village, but who's got time to carve it up!",
								"Harvest: You can also remove one useful body part from the creature during the preparation process.",
								"NOTE: This ability can not be used on inedible creatures, such as Undead or Mechanoids.",
							],
						},
						vagrantBlade: {
							name: "Vagrant Blade",
							description:
								"Much wandering in search of your next battle has provided you with a natural sense of direction and an affinity with the townsfold you meet on your travels.",
							mechanics: [
								"You can act as a Guide when on a Journey.",
								"You can attempt to get free Room & Board for up to a week.",
								"----",
								"REQUIRES: An Aura Check",
								"SUCCESS: You stay for free.",
							],
						},
						masterTactician: {
							name: "Master Tactitian",
							description:
								"A working knowledge of combined warfare, and the ability to organise the troops, is all you need to turn the tide of a battle.",
							mechanics: [
								"You can grant an ally you have a Social Bond with an additional Action on their Turn during a Fight.",
								"This Ability can be used in addition to any other Actions you're allowed to perform on your Turn.",
								"NOTE: This can be used once per Fight.",
							],
						},
						brazenDefense: {
							name: "Brazen Defense",
							description:
								"You have such contempt for your opponents that it's all the armor you need.",
							mechanics: [
								"You get a +4 to your Naked Defense rating.",
								"This bonus is applied instead of, not in addition to any bonus related to the Armor you wear.",
								"When you wear Armor you can choose whether to use the bonus from Brazen Defense or the one provided by your armor.",
							],
						},
						brute: {
							name: "Brute",
							description:
								"The quickest path between two places is often right through whatever is in the way.",
							mechanics: [
								"You get an edge on any Attack rolls dedicated Sundering something.",
								"Any non-magical shield used to Parry your physical Attacks are immediately Sundered, due to the crushing power of your blows.",
								"NOTE: This Ability cannot be used in conjunction with an Attack Stunt.",
							],
						},
						brawler: {
							name: "Brawler",
							description:
								"Sometimes you just need to puch someone, really hard.",
							mechanics: [
								"You strike as if wielding a Standard Weapon when fighting Unarmed.",
								"If using both hands treat Attacks as if Dual Wielding(p254).",
							],
						},
						giantKiller: {
							name: "Giant Killer",
							description:
								"The bigger they are, the harder you hit.",
							mechanics: [
								"You do an additional Heart of Damage on a successful Attack against Massive or Colossal Creatures.",
								"You get an Edge on any rolls needed to move between, scale, or remain on a Colossal Creature's Strike Points.",
							],
						},
					},
					advancedAbilities: {
						berserker: {
							name: "Berserker",
							description:
								"When the heat of the battle is upon you the red mist descends and your rage takes control. This is very bad news for your foes... but your allies should be careful too.",
							mechanics: [
								"You can enter Berserk Mode while fighting or participating in a Check or Contest that calls for brute force.",
								"While Berserk the following applies:",
								"+2 on Attack rolls.",
								"-1 to Defense Rating.",
								"+2 Might and Grit.",
								"You are unable to communicate or participate in any coordinated actions or team efforts.",
								"After you've dispatched a foe, or completed the objective of your Check or Contest you will:",
								"Attack the closest individual in the same Battlefield Area as you, whether it's friend or foe...",
								"And continue to find and Attack targets until none are left.",
								"You can attempt to exit Berserk Mode at the end of your Turn.",
								"----",
								"CHECK: Ending Berserk Mode requires an Aura Check",
								"SUCCESS: You regain control.",
								"FAILURE: You must wait until the end of the next Round before you can make another attempt to exit Berserk Mode."
							],
						},
						sentinel: {
							name: "Sentinel",
							description: "Being the toughest among your companions means you're happy to soak up hits for them when you can.",
							mechanics: [
								"You can redirect any successful physical Attack on an ally, occupying the same Battlefield Area as you, onto yourself.",
								"The original Attack roll must now beat your Defense Rating to do you harm.",
								"NOTE: This ability can't be used against area effects like harmful smoke."
							],
						},
						galvanizer: {
							name: "Galvanizer",
							description:
								"Bravery, or recklessness, can be contagious. Your battle scarred body lends credibility to your bellowing voice, 'I say kill the beast!'",
							mechanics: [
								"You gain an Ede on all Aura rolls when attempting to Inspire or Negotiate with a crowd.",
								"Any Companions have an Edge on Loyalty Checks.",
							],
						},
						overbearingAntagonist: {
							name: "Overbearing Antagonist",
							description:
								"your mere presence is overwhelming. A shout, smirk, or simple glare can unsettle even a worthy opponent.",
							mechanics: [
								"During a Fight, you can use your Action to attempt to intimidate an opponent up to 2 Battlefield Areas away.",
								"----",
								"CONTEST: Your Aura vs. the target's Grit",
								"SUCCESS: you lock eyes. Your target is rendered temporarily inactive, missing their next Turn.",
								"NOTE: This ability will only work once on the same target every 24 hours.",
								"Creatures that are incapable of fear (such as unthinking machines, mindless undead, or colossus) are immune to such intimidation.",
							],
						},
						uncannyStrategist: {
							name: "Uncanny Strategist",
							description:
								"Tacticins live in the moment. Strategists live two steps ahead. Your foes will learn the difference once it's too late!",
							mechanics: [
								"You can take a single Action during an enemy's Turn to perform a countermeasure to an adversary's intended action.",
								"If yout intervention renders the foe's declared action impossible, they are forced to choose a new course of action or lose their turn.",
								"NOTE: Using this Ability means that you cannot act on your next Turn.",
							],
						},
						bounder: {
							name: "Bounder",
							description:
								"Taking up a more advantageous position is much easier when you jump.",
							mechanics: ["You gain Supernatural Leaping."],
						},
						roaringSpirit: {
							name: "Roaring Spirit",
							description:
								"Even when calm and still, your soul crackles with an energy. A mere look can send this force outwords, sapping the fighting spirit and blood lust from lesser wariors in your presence.",
							mechanics: [
								"You can attempt to subdue opponents of lower Rank with a menacing glower.",
								"----",
								"CHECK: Aura",
								"Success: All adversaries within shouting distance step back and won't engage you, or your allies, unless you strike first.",
								"NOTE: This ability has no effect on adversaries with a Rank equal to or higher than yours.",
								"NOTE: This Ability may only be used once a game Session."
							],
						},
					},
				},
				factotum: {
					name: "Factotum",
					stats: [
						[0, 2, 7, 9, 8, 9, 9],
						[1, 2, 7, 9, 8, 9, 9],
						[1, 2, 8, 10, 9, 10, 10],
						[2, 3, 8, 10, 9, 10, 10],
						[2, 3, 9, 11, 10, 11, 11],
						[3, 4, 9, 11, 10, 11, 11],
						[3, 4, 10, 12, 11, 12, 12],
						[4, 4, 10, 12, 11, 12, 12],
						[4, 5, 11, 13, 12, 13, 13],
						[5, 5, 11, 13, 12, 13, 13],
					],
					classAbilities: {
						secondToNone: {
							name: "Second to None",
							description:
								"While now leading a life of high adventure, you rely on the little skills that have always served you well in the past.",
							mechanics: [
								"You have an Edge whenever you roll for a Check or Contest convered by one of your Purviews.",
								"NOTE: This replaces the Minor Bonus you normally receive on rolls related to your Purview.",
							],
						},
						factotumPack: {
							name: "Factotum Pack",
							description:
								"You carry your oversized backpack about effortlessly and, despite being crammed full, you are able to produce the required item from it almost instantly.",
							mechanics: [
								"You start with a giant backpack that takes up 1 of your Inventory Slots, it is worn instead of a Traveller's Bag or Backpack.",
								"The Pack provides 8 additional Inventory Slots before you become Overburdened, and can hold anything that doesn't exceed the available Slots, including a 'rider'.",
								"You can retrieve and use any item stored in the pack in 1 Turn, rather than the usual 2.",
								"If lost or destroyed, you can make a new Factotum Pack by spending an evening modifying a regular Backpack.",
								"NOTE: You Pack functions like a normal Backpack if used by anyone else.",
							],
						},
						dontMindMe: {
							name: "Don't Mind Me",
							description:
								"You have a distaste for direct combat, your mind is often looking for a way to help without going toe to toe.",
							mechanics: [
								"During a Fight, your opponents will not target you for Attack in any Turn where you are not intending to perform an offensive action, or doing something that will obviously cause them harm or spoil their plans. For example, healing a friend would go unchecked but setting up a bomb would not.",
							],
						},
					},
					standardAbilities: {
						craftingProdigy: {
							name: "Crafting Prodigy",
							description:
								"You have a passion and flare for making things, with the right materials and a little time you can create wonders.",
							mechanics: [
								"Select a Crafting Discipline to specialise in: Forging, Gadgeteering, Tailoring, Artificing, Alchemy, or Cooking. (For specific rules on creating items, refer to Craft(p280))",
								"You can use either your Insight or Deftness for your Crafting rolls.",
								"You can identify items related to your Craft with an Insight Check.",
								"You can select this Ability more than once, to gain a new Craft.",
							],
						},
						folklorist: {
							name: "Folklorist",
							description: "You've heard the old tales that say even the scariest monsters can be subdued with a pinch of spice or deterred by a drop of moon-plum juice. Is there something to them or are they just stories?",
							mechanics: [
								"You may choose a consumable material (such as lantern oil or a treat) to act as a deterrent to an Unearthly Adversary.",
								"Unearthy Adversaries include Asura, Devas, Demons, Undead, Unshaped, or any creature with 4 or more Allegiance points.",
								"----",
								"CONTEST: Your Insight vs. the Adversary's Aura. In addition:",
								"You must expend 1 Unit of the chosen consumable material.",
								"If a rare, or appropriate, consumable is selected your GM may offer you a Minor Bonus (+2). For example, Bright Water against a Dark Aligned enemy.",
								"SUCCESS: You can choose between one of two outcomes:",
								"Ability loss: The Adversary loses the use of an Ability of your choice.",
								"Protective circle: The Adversary cannot enter a circle made from the protective consumable. 1 Unit can create a circle for a single PC more Units can be used to create larger circles on this basis.",
								"The effect lasts for 24 hours",
								"Failure: You've wasted your consumable and look rather silly!",
								"----",
								"NOTE: Use of this Ability is subject to the rule of Diminishing Returns"
							],
						},
						healersHands: {
							name: "Healer's Hands",
							description:
								"You have trained as a physician or medic and are able to administer a raft of field surgery procedures.",
							mechanics: [
								"Rank 1",
								"Heal: After a Fight, you can remove a single Injury from a patient.",
								"Harvest: You can remove two useful body parts froma dead, or inert, creature without spoiling them.",
								"Rank 5",
								"Graft: You can now attack a Prosthetic Replacement to a patient",
								"----",
								"REQUIRES: A Deftness Check",
								"A Physician's Kit and a clean space are also required.",
								"----",
								"An individual can only benefit from this Ability once a week.",
							],
						},
						combatCoordinated: {
							name: "Combat Coordinated",
							description: "You can organize a team offensive.",
							mechanics: [
								"When you perform an Attack Assist, you target an enemy instead of an ally.",
								"Rank 1: Any Attack rolls made on the chosen enemy during that Turn recieve a Minor Bonus (+2)",
								"Rank 5: Any Attack rolls on your target now recieve an Edge, instead of the Minor Bonus.",
							],
						},
						silverTongue: {
							name: "Silver Tongue",
							description:
								"A seductive accent or eloquent phrasing makes your argument more convincing.",
							mechanics: [
								"You have an Edge on all Negotiation rolls as long as you are given a chance to speak.",
							],
						},
						socialLearner: {
							name: "Social Learner",
							description:
								"Good friends share a lot of things without even realizing it. If you listen you can learn.",
							mechanics: [
								"You gain a Purview of your choice from an Character you form a Social Bond with.",
								"If the Character is a GM Controlled, you should ask your GM what Purviews are available.",
							],
						},
						cuttingWit: {
							name: "Cutting Wit",
							description:
								"Words may not break their bones, but they can still cut deep.",
							mechanics: [
								"In a Fight, you can attempt to unsettle an enemy by directing inflammatory words at them.",
								"----",
								"CONTEST: Your Aura vs. your target's Grit.",
								"SUCCESS: Your target must either:",
								"Immediately attempt to Attack you on thier next turn, OR",
								"Lose 1 Heart.",
								"If they have no Hearts left, they must try and Attack you.",
							],
						},
						stalwartNavigator: {
							name: "Stalwart Navigator",
							description:
								"Whether it's thanks to wanderlust, a natural sense of direction, or an encyclopedic knowledge of the world, you always seem to be able to find your way around.",
							mechanics: [
								"Guide: You are able to act as a Guide when going on a Journey.",
								"Cartography: You can attempt to make a Map good enough to be used by others or sold.",
								"Rank 1: You can create a Local Map of any area you have Journeyed through.",
								"If you have enough Local Maps, you can combine them into a Kingdom Map.",
								"Rank 5: You are now able to create Region Maps from the appropriate Kingdom Maps.",
								"If you have maps of the four main surface Regions, you can combine them into a World Map.",
								"----",
								"CHECK: Insight",
								"SUCCESS: You created a usable map.",
								"FAILURE: You need 24 hours to reset your compass before trying again.",
							],
						},
					},
					advancedAbilities: {
						boonCompanion: {
							name: "Boon Companion",
							description:
								"Sometimes a trusted pet suddenly begins to talk. This is a phenomena that is often appreciated, occassionally lamented, but never questioned.",
							mechanics: [
								"An Animal Companion, of your choice, gains the power of reason and speech.",
								"Your Companion can speak the same languages as you.",
								"Your Companion will remain loyal to you, even if mistreated or coerced.",
								"Your Companion's personality and vocal ticks will be true to their animalistic nature. For example, a Rokko-Do would be proud and aloof, but a Slime might be easy going and relaxed.",
								"If the Boon Companion dies, you can select a new Companion to assign this ability to, although this Companion must be in your service for at least a week before being eligible.",
							],
						},
						troubleshooter: {
							name: "Troubleshooter",
							description: "When the proper tools aren't at hand, you can make do with the next best thing.",
							mechanics: [
								"You can attempt an Ability Check that requires a specific tool with an improvised alternative. For example, instead of requiring a Physician's Kit to perform Healer's Hands, you might use a ripped cloak as substitute bandage.",
								"Any Checks performed with an inferior substitute incur a Minor Penalty (-2).",
								"Your GM decides whether a proposed substitute is acceptable. Is an Immortal dandruff just as good as Arcane Powder? Ask your GM."
							],
						},
						multiTasker: {
							name: "Multi-Tasker",
							description: "You make the most of you spare time with good scheduling and enthusiasm",
							mechanics: [
								"You can perform two Activities during Downtime, instead of one.",
								"NOTE: Exception! You cannot Multi-Task if you have chosen Healing an Injury."
							],
						},
						packTactics: {
							name: "Pack Tactics",
							description: "A few extra spikes here a metal plate or two there, and your bulky Factotum's Pack is now combat ready! Cower behind it or swing at your foes,",
							mechanics: [
								"On your combat Turn, you can use your Pack as either: a Mighty Weapon, or a Large Shield.",
								"NOTE: Gear Allowance Restrictions don't apply when using your Pack as a piece of Combat Gear."
							],
						},
						masterOfSpectacle: {
							name: "Master of Spectacle",
							description: "Your showmanship can draw a crowd.",
							mechanics: [
								"You may attempt to gain the full attention of anyone within earshot.",
								"If uninterrupted, they can make the spectacle last for about 10 minutes.",
								"----",
								"CONTEST: Your Aura vs. the observer's Grit.",
								"GM Characters roll individually.",
								"Your GM can choose to make a single roll for groups or crowds.",
							],
						},
						betterPartOfValor: {
							name: "The Better Part of Valor",
							description:
								"Running away can't grant you an extra life, but it can preserve the one you've got.",
							mechanics: [
								"Your Speed Rating increases by a single level.",
								"If running for your life, you have Supernatural Leaping.",
							],
						},
						trickyCombatant: {
							name: "Tricky Combatant",
							description:
								"You're better at out-smarting your foe than you are going toe to toe.",
							mechanics: [
								"You recieve a Minor Bonus (+2) when attempting a combat trick.",
							],
						},
						fortunesFool: {
							name: "Fortune's Fool",
							description:
								"Why rely on skill when you can cheat fate itself. Just by careful fate doesn't catch you trying to pull a fast one!",
							mechanics: [
								"You can request any roll be re-rolled if the outcome would have some sort of effect on you.",
								"You can only use this Ability once per game Session and you must accept the new outcome... Even if it's worse!",
							],
						},
					},
				},
				heretic: {
					name: "Heretic",
					stats: [
						[0, 2, 7, 7, 10, 7, 9],
						[0, 2, 7, 7, 10, 7, 9],
						[1, 3, 8, 8, 11, 8, 10],
						[1, 3, 8, 8, 11, 8, 11],
						[2, 4, 9, 9, 12, 9, 12],
						[1, 4, 9, 9, 12, 9, 12],
						[3, 4, 10, 10, 13, 10, 13],
						[3, 4, 10, 10, 13, 10, 13],
						[4, 4, 11, 11, 14, 11, 14],
						[4, 5, 11, 11, 14, 11, 14],
					],
					classAbilities: {
						fitfulSleep: {
							name: "Fitful Sleep",
							description:
								"Sleep is not a peaceful haven. While your body is refeshed your mind is plagued with incoherent and disturbing images brought to you by the Sealed Names. Sometimes you understand the significance of these visions.",
							mechanics: [
								"Once per game Session you can ask your GM for a clue on anything puzzling you about your adventure. For example, the location of a nemesis or the answer to a perplexing riddle.",
								"This secret, or clue, is chosen by your GM, and emerges as a fully formed thought in your mind.",
							],
						},
						dreadful: {
							name: "Dreadful",
							description:
								"Extended contact with the Sealed Names has altered your appearance and mannerisms, making you deeply unsettling to be around. You have also developed a twisted empathy that enables you to sense the fears and weaknesses of others.",
							mechanics: [
								"You have an Edge on rolls that involve intimidating, frightening, or repulsing someone.",
								"After a short period of observation or 1 Turn during a fight, you can attempt to detect what someone fears the most.",
								"CHECK: Aura,",
								"SUCCESS: You learn one thing that upsets, scares, or disgusts your target. The weakness revealed could be emotional or physical.",
							],
						},
						squireMarlow: {
							name: "Squire Marlow",
							description:
								"Marlow, Whom All Chosen Know, is to make sure all your needs are attended to. This genteel and unfailingly polite figure is a great deal more forgiving than the other Sealed Names.",
							mechanics: [
								"Speak his name calmly and Marlow, a servant-like spirit, emerges from the shadow to do your bidding.",
								"Summoning takes 1 Action",
								"CHECK: Grit.",
								"SUCCESS: Marlow will appear and carry out a single task you set him",
								"The task must be something that Marlow can complete in a few minutes. He will attempt to accomplish his task ith competence and endeavour.",
								"In a fight, Marlow performs as a Custrel equipped with a Quick Weapon.",
								"Marlow vanishes upon the completion of his task, or if he is reduced to 0 Hearts.",
								"He must be summoned again if you wish to make further use of his services.",
								"FAILURE: Marlow gently refuses your request, and promptly vanishes.",
								"NOTE: After a failed summoning, Marlow can't be called again for 24 hours.",
							],
						},
					},
					standardAbilities: {
						widowPrisma: {
							name: "The Widow Prisma",
							description:
								"Prisma, The Crystal Martyr suffers for the chosen, though her curious moans while doing so suggest she recieves some strange pleasure from her sacrifice",
							mechanics: [
								"With a cry for help, The Widow Prisma will immediately crystalize in front of you and absorb any inbound attack.",
								"Summoning is instantaneous.",
								"Prisma suffers any Damage, Ailment, or detrimental effect directed at you... then dies.",
								"Her dramatic death throes last a Turn, until she shatters into fragments and disappears.",
								"NOTE: Prisma can only be summoned once every 24 hours.",
								"----",
								"GAIN: 1 Dark Allegiance Point",
							],
						},
						deaconGalrave: {
							name: "Deacon Galrave",
							description:
								"Galrave, Cloaked in Fear, is a broad and imposing figure. His terrible smile is frightening enough, but his laugh is blood-curdling.",
							mechanics: [
								"Throw your hands in the air and shout his full name and Galrave, a fearsome spirit, swirls into being.",
								"Summoning requires 1 Action.",
								"CHECK: Grit",
								"SUCCESS: Galrave's laugh echoes loudly, instilling doubt and panic in anyone you consider an enemy",
								"Hostiles within 1 Battlefield Area of you must make a successful Grit Check or be Terrified of you for 24 hours.",
								"FAILURE: Galrave honors you with his grim regards then vanishes. You shudder for a moment, and miss your next Turn.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						bushiMiyabi: {
							name: "Bushi Miyabi",
							description:
								"Miyabi, Apparition of Borrowed Wrath, is a raging spirit contained within elaborate armor. Her hand grasps a broken blade, which she swings with a vengeful fury.",
							mechanics: [
								"Point at an enemy, yell her name, and Miyabi will materialize and appear next to your chosen foe.",
								"Summoning requires 1 Action.",
								"CHECK: Grit",
								"SUCCESS: Miyabi manifests next to your chosen target and engages them in combat.",
								"You can set Miyabi on a foe up to 2 Battlefield Areas away from you.",
								"She strikes with a standard weapon.",
								"Her attack Bonus is always the same as her target's",
								"She has Defense Rating 12.",
								"Her Speed Rating is Fast.",
								"She evaporates if struck or when her target has been killed, but once summoned she cannot be called off or dismissed.",
								"FAILURE: Miyabi manifasts to take a single swipe at your for your impertinence, then vanishes.",
								"When striking you, her Attack Bonus is +2 and does 1 Heart of Damage.",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						seerKasnah: {
							name: "Seer Kasnah",
							description:
								"Kasnah, Lady of the Orb, looked too often into her divining ball and was absorbed by it. Now she is a small smooth sphere with an unblinking stare. She is willing to show you what she sees.",
							mechanics: [
								"Whisper her name and Kasnah, a floating eye, can be drawn forth from the folds of your clothes.",
								"Summoning requires 1 Action.",
								"CHECK: Grit",
								"You see whatever Kasnah sees from her vantage point in the sky.",
								"Kasnah can be directed to any point within shouting distance, enabling you to get unique views of a location or scout ahead.",
								"She has a Defense Rating of 12",
								"Her Speed Rating is Average.",
								"She vanishes if struck.",
								"FAILURE: Fickle Kasnah does not appear but instead you are Blinded for 1 turn.",
								"NOTE: She ignores further summoning requests for 1 hour.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						yogiTulpa: {
							name: "Yogi Tulpa",
							description:
								"Call on Tulpa, First and Most Patient, when you seek answers. this wizened figure is said to have studied all things. Though whether he actually remembers any of it is another thing altogether.",
							mechanics: [
								"When standing in a quiet area politely state his name and Tulpa will emerge from the ground and attempt to answer a single question you ask him.",
								"Your question cannot be spoken, but written on something soft, like parchment or cloth.",
								"Summoning is instantaneous.",
								"CHECK: Grit",
								"SUCCESS: Tulpa emerges from the ground with a yawn and a stretch, taking the prepared question and swallowing it. After some thoughtful chewing he answers the question then returns to his immortal slumber.",
								"NOTE: You suffer a Snag on your Grit Check if you attempt to summon Tulpa again within 24 hours.",
								"FAILURE: Tulpa coughs and chokes on the question. He then lectures you on the failures of this aeon's youth before vanishing.",
								"NOTE: No further attampt to summon Tulpa can be made for 24 hours.",
								"----",
								"GAIN: 1 Bright Allegiance Point.",
							],
						},
						messengerKaila: {
							name: "Messenger Kaila",
							description: "Kaila, Whisper most Pleasant, is a sultry figure in a flowing dress and decorated mask. Her voice is quiet but authoritive. When she speaks, her message is always heard by those for whom it was meant for.",
							mechanics: [
								"Say her name and Kaila, appears ready to deliver a message for you.",
								"Summoning requires 1 Action.",
								"Kaila drapes herself over your shoulders, and will commit a message of no more than 50 words to memory, then vanishes.",
								"Your message can be delivered to a single recipient you are at least briefly familiar with. Kalia appears behind the recipient and whispers into their ear, so only they can hear... then vanishes.",
								"Kalia is amused by attempts to harm her spectral form.",
								"NOTE: Kalia may only be called upon once every 24 hours.",
								"----",
								"GAIN 1 Dark Allegiance Point."
							],
						},
						wretchedJarah: {
							name: "Wretched Jarah",
							description:
								"Jarah, That Gasps Endlessly, was so frightened that he shriveled into a small, rasping insectoid. Those willing to endure his revolting appearance may drink of his desperate breaths.",
							mechanics: [
								"Cry his name in desperation and Jarah will instantly appear. Gripping your face with his spindly limbs he'll place his body across your face to form a grotesque mask.",
								"Summoning Time: Instantaneous.",
								"You are immune to Suffocation when Jarah is attached, enabling you to breathe in water or toxic fumes.",
								"You are unable to speak while wearing this insectoid mask.",
								"Jarah remains for an hour, or until he is cast off in disgust.",
								"NOTE: Jarah may only be called upon once every 24 hours.",
								"----",
								"GAIN: 1 Bright Allegiance Point.",
							],
						},
						countParis: {
							name: "Count Paris",
							description:
								"The Count, With Heart Most Cold, is a loveless and noble figure. His joyless gaze petrifies those that lock eyes with him.",
							mechanics: [
								"Turn dispassionately towards a target, up to 2 Battlefield Areas away, and Paris will materialise by your side to stare them down.",
								"Summoning requires one action.",
								"CONTEST: Your Grit vs. the target's Deftness.",
								"SUCCESS: Paris levels his icy glare at your enemy.",
								"Your target is encased in ice and is Petrified.",
								"The target can be freed if anyone spends a Turn to break the ice. This requires a successful Might Check.",
								"FAILURE: Paris scoffs then freezes your legs and vanishes. You cannot move from your current position.",
								"Paris won't return unless you are freed from the ice. This requires you, or an assisting ally, to use an Action and make a Might Check.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
					},
					advancedAbilities: {
						altgraveUltima: {
							name: "Altgrave Ultima",
							description:
								"Ultima, Whose Fist is Just, is a massive warrior in ultra heavy armor who is keen to mete out justice on your behalf.",
							mechanics: [
								"Throw your arms wide open and shout his name dramatically and Ultime appears to smite a foe.",
								"Summoning requires 1 Action.",
								"CHECK: Grit",
								"SUCCESS:  Ultima thunders towards a target of your choice. He shouts their greatest sin aloud (For example: Pride!, Indolence!, or Chicanery!) and hammers them with his enormous righteous fist.",
								"You can target any foe up to 1 battlefield away from you.",
								"The target takes 1 Heart of Damage and must make a Might Check.",
								" > SUCCESS: They partially deflect the blow and avoid further damage.",
								" > FAILURE: They have been smashed to the ground, taking an additional Heart of Damage and are now Toppled.",
								"Failure: Ultima appears behind you and swats you to the ground before vanishing. You are Toppled.",
								"----",
								"GAIN: 1 Bright Allegiance Point.",
							],
						},
						princeJustiniaus: {
							name: "Prince Justiniaus",
							description:
								"Justiniaus, The Prince in Chains, is bound to his throne with barbed shackles. A wicked grin graces his torn face when he inflicts suffering upon others.",
							mechanics: [
								"Kneel and whisper his name and Justiniaus will appear to ensnare your enemies.",
								"Summoning requires 1 action.",
								"CHECK: Grit",
								"SUCCESS: Barbed chains erupt around your chosen target.",
								"You can target a foe up to 2 Battlefield Areas away from you.",
								"All your target's limbs are Restrained as the chains circle and constrict around them.",
								"The target can be freed if anyone spends a Turn to break the chains. This requires a Might Check. The target loses 1 Heart every time this Check is attempted, successfully or not.",
								"The chains will vanish in an hour, or when you attempt to summon Justinious again.",
								"FAILURE: A single chain, accompanied by a sinister cackle, erupts from the ground and binds your dominant arm to your body. Your arm is Restrained.",
								"You, or an assisting ally, must use an Action to attempt to cut the chains. This requires a Might Check. You lose 1 Heart every time this is attempted, successfully or not.",
								"NOTE: You cannot summon Justiniaus again until you are freed.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						imperatrixDelilah: {
							name: "Imperatrix Delilah",
							description: "Delilah, Who Rules Absolutely, is the light. She floods the senses with hope to bring the peace of dominion to all who would receive her.",
							mechanics: [
								"Call out her name and Deliah shines forth, taking control of a mind that means you harm.",
								"Summoning requires 1 Action.",
								"----",
								"CONTEST: Your Grit vs your target's Aura",
								"SUCCESS: Delilah forms around your target like a halo.",
								"You can target a foe up to 1 Battlefield Area away from you.",
								"You can control your target for next Turn. For example, you can make them speak, drop a powerful item, or attack an ally.",
								"Delilah vanishes after your target performs the controlled action.",
								"FAILURE: Delilah (played by your GM) decides your next Turn. Then vanishes with a lingering laugh.",
								"Delilah would never cause you to directly harm yourself, though she might have you throw an important item aside or shout at enemies you're hiding from.",
								"----",
								"GAIN: 1 Bright Allegiance Point."
							],
						},
						dowagerCollette: {
							name: "Dowager Collette",
							description:
								"Collette, Our Maiden of Toxicity, is haggard and pale. Her mouth, full of rotted teeth, spews poisonous breath.",
							mechanics: [
								"The Dowager is called upon by covering your mouth in mock revulsion. She spasms into existence to belch toxic gas.",
								"Summoning requires 1 action.",
								"CHECK: Grit",
								"SUCCESS: The Dowager appears above a Battlefield Area of your choice. She cackles before spewing out a poisonous mist over the area below, making it Harmful until the end of the fight.",
								"Failure: You begin to choke and cough on noxious fumes. This prevents you from speaking, and calling other Sealed Names, until the end of your next Turn.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						servantPazuu: {
							name: "Servant Pazuu",
							description:
								"Pazuu, Of Many Wings, is able to carry even the largest of the Chosen into the air despite his withered form.",
							mechanics: [
								"Relax your limbs and whisper his name and Pazuu appears to lift you into the air.",
								"Summoning requires 1 Turn.",
								"CHECK: Grit",
								"SUCCESS: Pazuu will immediately fly you to a spot of your choosing, no greater than 1 mile away.",
								"FAILURE: Your squirming annoys Pazuu, who drops you 20 ft. above your chosen spot. You suffer the effects of the Impact Table.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						umbraDraconis: {
							name: "Umbra Draconis",
							description:
								"Draconis, The Silhoette Worm, is the creature of legend who broke the Sun Machine and battled with Emperor Regulus. He is now but a shadow, though his flames still burn real enough.",
							mechanics: [
								"To call Umbra Draconis you must fall to your knees and shout his name at the top of your lungs. The great dragon emerges, ready to scorch your enemies.",
								"Summoning requires 1 Turn.",
								"CHECK: Grit",
								"SUCCESS: Draconis breaths dark flames on the Battlefield Area you occupy, then vanishes. The flames to not harm you, but everyone else takes 3 Hearts of Flame Damage.",
								"Draconis flames will also Sunder combustible objects.",
								"If the Battlefield Area contains flammable structures or surfaces your GM can choose to set them alight, adding the Harmful Condition to the Area.",
								"FAILURE: The effects are identical to Success, except you are also harmed by Draconis' dark flames.",
								"NOTE: You cannot use this ability again for 24 hours.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						egomet: {
							name: "Egomet",
							description:
								"Egomet, Who Never Came To Be, is the embodiment of lost potential. He sees the other paths you could have taken and allows you to follow them, albeit temporarily.",
							mechanics: [
								"Speak your name backwards before sleeping and awake as your Other Self.",
								"Summoning requires 1 full night's sleep.",
								"Your Other Self lets you become another Calling until you sleep again, or until you decide to revert back to your true self.",
								"NOTE: After summoning Egomet, you may not call on him again until you've had the opportunity for Downtime.",
								"----",
								"Creating your Other Self:",
								"Your Other Self retains your Species, Traits, and Quirks.",
								"Your Other Self can be a Calling of your choice but is 2 Ranks lower than your current Rank.",
								"In addition to the Calling's Starting Abilities, you can choose any Elective Abilities available to your Other Self's Rank.",
								"You can only have one Other Self.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						queenAmhika: {
							name: "Queen Amhika",
							description:
								"Queen Amhika, Dweller in Our Hearts, is pleasant and obliging. Her soothing and kind embrace will transport you to a place of safety.",
							mechanics: [
								"With an earnest desire Queen Amhika will appear ready to remove you from harms way.",
								"Summoning is instantaneous.",
								"Queen Amhika will envelope you, and up to 5 allies, in her enormous cape. You drift off into a peaceful sleep. When you awake you are in the place where you always felt most safe.",
								"You should choose your safe place before play and inform your GM. This could be your waterfall retreat, a relaxing meadow, or your childhood home.",
								"Once Amihika has deposited you safely she cannot be summoned again until you have spent one day actually relaxing.",
								"----",
								"GAIN: 1 Bright Allegiance Point."
							],
						},
					},
				},
				murderPrincess: {
					name: "Murder Princess",
					stats: [
						[1, 3, 8, 7, 10, 8, 9],
						[2, 3, 8, 7, 10, 8, 9],
						[3, 4, 9, 8, 11, 9, 10],
						[3, 4, 9, 8, 11, 9, 10],
						[4, 5, 10, 9, 12, 10, 11],
						[4, 5, 10, 9, 12, 10, 11],
						[5, 6, 11, 10, 13, 11, 12],
						[5, 6, 11, 10, 13, 11, 12],
						[6, 7, 12, 11, 14, 12, 13],
						[7, 7, 12, 11, 14, 12, 13],
					],
					classAbilities: {
						wrathsBlade: {
							name: "Wrath's Blade",
							description:
								"You can call upon a weapon forged from your righteous anger or untempered fury. The weapon's appearance reflects the magnificence of you volatile and unyielding psyche.",
							mechanics: [
								"Creating a Wrath's Blade",
								"Your Wrath's Blade grows in power as you rise in Rank. Add the new properties to your Wrath's Blade when you reach the required Rank.",
								"Rank 1: Select your weapon's primary form and what it is made of.",
								"Choose a Weapon Type: Quick, Master, Mighty, Arc, Lash, Drawn or Mechanical Missile(p152).",
								"Choose a Magical Material: Shade Iron, Dew Silver, or Warp Wood(p289).",
								"Rank 3: Your Wrath's Blade gains one of the following properties:",
								"Glistening: +1 to Attack rolls.",
								"Retributive: The weapon's Extra Damage Threshold is reduced by 2(p152).",
								"Denying: The weapon can Parry once per combat in the same manner as a Standard Shield",
								"Rank 6: Your Wrath's Blade can now transform into a secondary form from the Weapon Types listed above.",
								"Your Wrath's Blade gains the Combination Weapon Ability allowing a hybrid weapon form.",
								"----",
								"Using your Wrath's Blade",
								"You can call this weapon into existence through force of will.",
								"Melee Weapons are formed instantly and may be used on the same Turn they are called.",
								"Drawn and Mechanical Missile weapons take a Turn to fully form and appear with 4 units of ammunition included.",
								"Your Wrath's Blade (and any ammunition) will vanish instantly on command.",
								"Only a single form of the Wrath's Blade may be summoned at any one time. Either the primary, secondary or combination form.",
								"If the weapon is Sundered or lost during combat, you can will it away and summon a new Blade."
							],
						},
						witheringGlare: {
							name: "Withering Glare",
							description:
								"Your eyes are a window to your darkened soul. A mere glance can weaken the resolve of your enemies.",
							mechanics: [
								"During a fight you can Glare at a single enemy at the start of your Turn.",
								"Rank 1: The target of your glare loses a single heart.",
								"Rank 5: Your target must now also participate in a Contest with you. Their Grit vs. your Aura.",
								"SUCCESS: Your enemy is unnerved and incurs a Snag on all Attack rolls against you.",
								"If this Ability reduces an adversary to 0 Hearts or lower, they flee from the battle or surrender on the spot.",
							],
						},
						tenacity: {
							name: "Tenacity",
							description: "",
							mechanics: [
								"During a Fight, or other perilous encounter, you can expend a single Heart to re-roll any failed Attacks, Stunts, or Might and Grit Checks (and Contests).",
								"The outcome of the second roll must be accepted regardless of whether the result is beneficial or not.",
								"NOTE: if you are out of Hearts when invoking this Ability, you must roll on the Injury Table.",
							],
						},
					},
					standardAbilities: {
						couturier: {
							name: "Couturier",
							description:
								"Clothes are a statement of intent and you are always dressed to kill.",
							mechanics: [
								"You gain the Crafting Discipline Tailoring.",
								"For specific rules on creating items refer to Craft (p280).",
								"You use Grit for Crafting rolls.",
							],
						},
						frostBlade: {
							name: "Frost Blade",
							description:
								"Your Wrath's Blade does not always burn with rage, sometimes it is chillingly dispassionate.",
							mechanics: [
								"Frost Damage: Your Wrath's Blade has iced over and now does Frost Damage.",
								"Freezing Blow: After a successful Attack, the ice can be discharged to freeze one of your opponent's limbs. The chosen limb is Restrained until your opponent, or someone trying to assist them, makes a successful Might Check to break free. This exhausts the Ability.",
								"NOTE: Frost Blade can only be used once per fight.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						wrathBolt: {
							name: "Wrath Bolt",
							description:
								"You are able to fill your hand with dark crackling energy. This charged mana can be hurled at your enemies or used to envelop your Wrath's Blade.",
							mechanics: [
								"Wrath Bolts: You are able to fire Wrath Bolts at enemies up to one Battlefield Area away.",
								"Bolts stike as Thrown Missile Weapons.",
								"Bolts do 1 Heart of Dark Damage on a successful Attack.",
								"Wrath Blade: If you envelop your Wrath's Blade with this Ability it now deals Dark Damage instead of Normal Damage.",
								"----",
								"GAIN: 1 Dark Allegiance Point",
							],
						},
						bulwarkOfDisdain: {
							name: "Bulwark of Disdain",
							description:
								"Your utter contempt for those that oppose you is armor enough.",
							mechanics: [
								"You get a +4 to your Naked Defense Rating.",
								"This bonus is applied instead of, not in addition to, any bonus related to the Armor you wear.",
								"When you wear Armor you can choose whether to use the bonus from Bulwark of Disdain or the one provided by your Armor.",
							],
						},
						theHardWay: {
							name: "The Hard Way",
							description:
								"If more level headed attempts at reasoning fail, you are always willing to step in and use your unwavering presence to remind everyone that you're terrifyingly committed to having your way.",
							mechanics: [
								"You get an Edge on all Negotiation attempts that use Physical Intimidation or similarly threatening strategy.",
							],
						},
						desperateFriendship: {
							name: "Desperate Friendship",
							description:
								"You do not make friends readily, but when you commit, you take the responsibility seriously.",
							mechanics: [
								"You are now subconsciously connected to anyone you have a Social Bond(p279) with and if separated:",
								"You know which direction to go in order find them.",
								"You can sense if any of them are in mortal danger."
							],
						},
						barbedJustice: {
							name: "Barbed Justice",
							description: "",
							mechanics: [
								"You inflict an extra Heart of Damage on a successful Attack but lose 2 of your own.",
								"If you drop below 0 Hearts when using this ability, you must roll on the Injury Table after each successful Attack.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
						causticTruth: {
							name: "Caustic Truth",
							description:
								"When physical force fails you resort to psychological assault. By ridiculing your opponent's deeply held beliefs, or competence, you can send your foe into an unbalancing rage.",
							mechanics: [
								"Once per Fight, you can to attempt to enrage your opponent with a disparaging or spiteful truth.",
								"Targets for this Ability must:",
								"Be engaged in a Fight with you for a Turn or more.",
								"Be able to understand you.",
								"Be capable of feeling emotions.",
								"CONTEST: Your Grit vs. your target's Aura",
								"Success: Your comment unsettles your opponent:",
								"Their rage now provides them with an Edge on all Attack rolls, and Abitities, aimed at you, but...",
								"This leaves them open to attack. All Attack rolls made against the enraged foe benefit from an Edge.",
								"Their rage ends if you die, are no longer visible, or when the current Fight ends.",
								"NOTE: This Ability may only on one target per Fight, whether it is successful or not.",
								"----",
								"GAIN: 1 Dark Allegiance Point."
							],
						},
					},
					advancedAbilities: {
						swordStorm: {
							name: "Sword Storm",
							description:
								"With a cry of defiance you can summon a blizzard of magical blades that tear through anyone nearby.",
							mechanics: [
								"It takes you 1 Turn to summon a Storm, as it requires protracted shouting and gesticulation.",
								"The next Turn, clones of your Wrath's Blade (or ammunition if it's a Missile weapon) appear over the Battlefield and rain down upon anyone surrounding you.",
								"You make a single Attack roll.",
								"The result is used as an Attack roll against everyone in the same Battlefield Area as you.",
								"A hit does 2 Hearts of Damage",
								"Characters who have a Social Bond with the Princess are exempt from the Attack.",
								"After the Storm, the summoned weapons disintegrate.",
								"NOTE: You can use Sword Storm once every 24 hours without penalty. Using a Sword Storm in excess of this means you have to roll on the Injury Table after use.",
							],
						},
						iconoclast: {
							name: "Iconoclast",
							description:
								"You have a reputation for avenging the oppressed... even if you have only done so inadvertantly. The downtrodden that know of your deeds will assist you in whichever humble way they can.",
							mechanics: [
								"You can attempt to enlist the help of any poor, enslaved, or otherwise disenfranchised local residents.",
								"REQUIRES: An Aura Check.",
								"SUCCESS: The rabble have heard of you. Assuming they are friendly, or at least non-hostile, they will agree to any reasonable requests you make of them.",
								"For example, a street urchin will direct you into a side alley to hide from the town guard, or a crowd might deliberately divert or obstruct pursuers.",
								"NOTE: Helpers will not be prepared to put themselves in real danger, or be able to muster courage beyond their normal capacity.",
							],
						},
						overwhelmingMight: {
							name: "Overwhelming Might",
							description:
								"You have a hidden strength powered by hatred deep within your soul.",
							mechanics: [
								"You have attained Supernatural Might.",
							],
						},
						relentlessPursuer: {
							name: "Relentless Pursuer",
							description:
								"Chasing down cowardly foes has done wonders for your athletic Prowess!",
							mechanics: [
								"Your Speed Rating increases by a single level.",
							],
						},
						bladeOfDarkness: {
							name: "Blade of Darkness",
							description:
								"You can summon a Wrath's Blade composed of pure dark energy. It's capable of wounding the soul.",
							mechanics: [
								"You can activate this Ability at will upon summoning your Wrath's Blade.",
								"Dark Strike: Your Wrath's Blade a cosmic void that now drains an additional Heart of Dark Damage (> p259) in addition to the weapon's Mundane Damage.",
								"Wrapped in Darkness: After a strike with the Wrath's Blade, the energy can be discharged to engulf your target and cause an additional Heart of Dark Damage, which dispels the Ability.",
								"NOTE: Using Wrapped in Darkness prevents you from using this Ability again for another 24 hours.",
								"----",
								"GAIN: 1 Dark Allegiance Point."
							],
						},
						redPetalRevenge: {
							name: "Red Petal Revenge",
							description: "Picking a rose in haste can prick your fingers, and so those that wish to d0 harm will suffer the consequences.",
							mechanics: [
								"If you are hit in a Fight, or suffer an Ailment caused by an enemy Ability, you can attempt to get revenge on your aggressor.",
								"----",
								"CONTEST: Your Grit vs. the attacker's Grit",
								"SUCCESS: Your attacker suffers the same Damage, or Ailment, that they inflicted on you.",
								"If an Ailment can not be applied your attacker, they take a Heart Damage instead.",
								"NOTE: Red Petal Revenge may only be used once every 24 hours.",
								"----",
								"GAIN: 1 Dark Allegiance Point."
							],
						},
						vexedDispel: {
							name: "Vexed Dispel",
							description:
								"Your patience with hostile magic is thin, and your mere annoyance can unravel even the most carefully crafted spell.",
							mechanics: [
								"You can attempt to nullify a single persistent magical effect that is irritating you, or any of your allies that are located in the same Battlefield Area as you. For example, you can try to dispel a magically inflicted Ailment or a sorcerous barrier.",
								"REQUIRES: A Grit Check.",
								"SUCCESS: The magic will be suppressed so long as you are in the same Battlefield Area and still subject to the annoying effect. For example, the caster would regain the use of their suppressed Ability or the sorcerous barrier would return once you have passed or been pacified.",
							],
						},
						spiritedSlaughter: {
							name: "Spirited Slaughter",
							description:
								"Fresh from the kill, you have a twinkle in your eye and a spring in your step.",
							mechanics: [
								"If you slay an opponent during a Fight, you can immediately take another Action afterwards, as long as it continues or accelerates further violence.",
							],
						},
					},
				},
				raider: {
					name: "Raider",
					stats: [
						[1, 3, 9, 9, 9, 8, 7],
						[2, 3, 9, 9, 9, 8, 7],
						[3, 4, 10, 10, 10, 9, 8],
						[4, 4, 10, 10, 10, 9, 8],
						[5, 5, 11, 11, 11, 10, 9],
						[6, 5, 11, 11, 11, 10, 9],
						[7, 6, 12, 12, 12, 11, 10],
						[8, 6, 12, 12, 12, 11, 10],
						[9, 7, 13, 13, 13, 12, 11],
						[10, 7, 13, 13, 13, 12, 11],
					],
					classAbilities: {
						likeTheWind: {
							name: "Like the Wind",
							description:
								"You train long and hard to ensure you move with effortless swiftness and grace.",
							mechanics: [
								"You start with a Speed Rating of Fast.",
							],
						},
						huntersFocus: {
							name: "Hunter's Focus",
							description:
								"The chaos and clamor of battle do not muddy your predatory instinct. Once your gaze has singled out a target, all distraction melts away, only your prey remains.",
							mechanics: [
								"Once per Fight, you can choose a target for your Hunter's Focus at any time during a Fight.",
								"Your Focus can be an opponent, but could also be an object you wish to destroy.",
								"You are unable to change your Focus after your original target has been defeated or pacified.",
								"You gain an Edge on all Attack rolls made against your Focus.",
								"your GM can grant you an Edge on Checks and Contests that get you closer to dispatching your Focus. For example, leaping over a chasm to get within striking distance.",
							],
						},
						sidestep: {
							name: "Sidestep",
							description:
								"Anyone trying to strike you finds it trickier than it ought to be. You are an elusive opponent, able to twist away from a devastating strike at the very last moment.",
							mechanics: [
								"Once per Fight you can Sidestep an Attack, or Ability, that would normally have hit you.",
								"You can Sidestep any Attack that could be feasibly avoided with a last second manoeuvre. For example, avoiding a sword thrust with nonchalant turn of your head or shielding your eyes from a mesmerising gaze.",
								"The Sidestep prevents an Attack from connecting or affecting you.",
								"NOTE: You'll need freedom to move and adequate space to execute your Sidestep."
							],
						},
					},
					standardAbilities: {
						dashingAttacker: {
							name: "Dashing Attacker",
							description:
								"You zip through the battlefield, darting back and forth while landing blow after blow on enemies too slow to keep up.",
							mechanics: [
								"You can Move through an additional Battlefield area on your Turn during a Fight.",
							],
						},
						silentStrider: {
							name: "Silent Strider",
							description:
								"You can be quiet and unassuming when you need to be, passing udetected by your foes until it's too late.",
							mechanics: [
								"You gain an Edge when making rolls to avoid detection by sight or sound.",
								"You have an Edge on Stealth rolls while acting as a Scout while on a Journey or Exploring.",
							],
						},
						trustedComrade: {
							name: "Trusted Comrade",
							description:
								"Most folks can't be trusted, and you prefer the company of animals. You embrace their code: protect the pack, show no fear, survive another day. In return you are accepted as one of their own.",
							mechanics: [
								"You can forge a special bond with an Animal Companion that has spent a week or more with you.",
								"Your Trusted Comrades seem to understand your words, and you are able to sense what they are thinking or feeling.",
								"You and your Trusted Comrades are able to sense each other's presence and, if separated, know which direction to go in order to find one another.",
								"Trusted Comrades will never abandon you, and never have to make Loyalty Checks.",
								"NOTE: This Ability can extend to Tamed Monsters with your GM's Approval."
							],
						},
						freeRunner: {
							name: "Free Runner",
							description:
								"A sure-footed and decisive stride enables you to navigate a safe path over hazardous ground, run up sheer surfaces, and speed along narrown walls.",
							mechanics: [
								"You can move through Isolated or Precarious Battlefield Areas without Penalty.",
								"The Ability can be used inventively to perform otherwise impossible Attack Stunts, Attack Assists, and Combat Tricks.",
								"You must end your Turn on a stable surface, like the top of a wall or ledge. If not you will fall and be subject to Falling Injury.",
							],
						},
						rushingFistStyle: {
							name: "Rushing Fist Style",
							description:
								"You are a master of a swift and fluid martial art, able to protect yourself and strike fatal blows even without a weapon.",
							mechanics: [
								"You make Unarmed attacks as if wielding a Quick Weapon.",
							],
						},
						ranger: {
							name: "Ranger",
							description:
								"Nature is your friend, it reveals to you the true path through dense bush and yields nourishment from barren landscapes.",
							mechanics: [
								"You can act as a Guide when on a Journey.",
								"You get an Edge on your Hunting/Foraging roll when Camping.",
							],
						},
						faithInTheWind: {
							name: "Faith in the Wind",
							description:
								"Your mental clarity and steady hand makes an impossible long shot a reality.",
							mechanics: [
								"The range of any Missile Weapon you use is extended by 1 Battlefield Area.",
							],
						},
						artisanSmithy: {
							name: "Artisan Smithy",
							description:
								"You seek intimacy with the weapons you wield. To make them is to know them.",
							mechanics: [
								"You gain the Crafting Discipline Forging.",
								"For specific rules on creating items refer to Craft(p280)",
								"You use Deftness for your Crafting rolls.",
							],
						},
					},
					advancedAbilities: {
						flashStep: {
							name: "Flash Step",
							description:
								"You levelled up your Sidestep. Now your enemies find themselves striking thin air, as you take up a more advantageous position.",
							mechanics: [
								"You can now move to an adjacent Battlefield Area, or a more strategic place in the same Area, whenever you use your Sidestep.",
								"All other Sidestep restrictions apply.",
								"NOTE: This Ability does not allow you to move to an Area you could not normally enter."
							],
						},
						blisteringPace: {
							name: "Blistering Pace",
							description:
								"Already fast, you can now attain almost inhuman speeds.",
							mechanics: [
								"Your Speed Rating increases by a single level.",
							],
						},
						counterFang: {
							name: "Counter Fang",
							description: "When surrounded by lesser warriors you enter Counter Fang stance. From this meditative state you visualise the flow of the fight then, when engaged by predictable foes, you lay waste to them with choreographed efficiency.",
							mechanics: [
								"During a Fight you can choose to enter the Counter Fang stance instead of making an Attack or taking another Action.",
								"While in the Counter Fang stance, any opponent that fails their Attack roll on you is subject to a retaliatory Attack, Attack Stunt, or Combat Trick.",
								"The benefit of this Ability lasts until the start of your next Turn when you can move and re-enter the Counter-Fang stance if desired."
							],
						},
						windWearsAwayStone: {
							name: "Wind Wears Away Stone",
							description: "You're a true hunter, able to find a path through any built-up defense.",
							mechanics: [
								"You can attempt to find a weak spot on an opponent that is the target of your Hunter's Focus",
								"----",
								"CHECK: Insight",
								"SUCCESS: You can ignore the Target's Defense Bonus from worn Armor and Speed Rating."
							],
						},
						mindfulness: {
							name: "Mindfulness",
							description:
								"While your enemies struggle to focus in chaotic conditions, you are able to filter out distractions to gain a precious battlefield advantage.",
							mechanics: [
								"You cannot be Ambushed. Even if the rest of the group are caught off guard, you can Move and take your Action as normal.",
								"You are immune to the Obscured Battlefield Condition.",
								"You are immune to the Blinded/Deafened Ailment.",
							],
						},
						spellCutter: {
							name: "Spell Cutter",
							description:
								"While imperceptible to regular folk, your eyes can distinguish the tiny distortions in the air created by coalescing man. A well placed swipe can sometimes disrupt a spell's formation.",
							mechanics: [
								"You can attempt to nullify a Magic Ability that has targeted you, or an ally in the same Battlefield Area.",
								"----",
								"CONTEST: Your Deftness vs. the Aptitude related to the magical Ability's use.",
								"If no Aptitude is specified, then use the caster's Aura.",
								"SUCCESS: The spell is shattered and does not effect its intended targets.",
								"----",
								"NOTE: Successful or not. You cannot act during your next Turn."
							],
						},
						lightningAndThunder: {
							name: "Lightning and Thunder",
							description:
								"Diligent training and discipline allow you to pacify your enemy with a flurry of blows.",
							mechanics: [
								"Once per Turn, you can take a follow-up Action after a successful Attack roll.",
								"The follow-up Action must be an Attack, Attack Stunt, Attack Assist, or Combat Trick.",
								"Making this follow-up Action is physically demanding, and you lose a Heart after performing the technique.",
								"If you've run out of Hearts, you will roll on the Injury Table.",
							],
						},
						sureKillStrike: {
							name: "Sure Kill Strike",
							description: "To you, execution is an art form.",
							mechanics: [
								"To attempt a Sure Kill Strike you must first declare a target at the beginning of your Turn.",
								"Next, you must make an Attack roll against your chosen target. if successful...",
								"----",
								"MAKE: An Execution roll",
								"If your initial Attack roll was over the Extra Damage threshold, +2 to the result.",
								"Next, Divide the end result by 2 (rounding up).",
								"To succeed. the result must be higher than your target's remaining Hearts.",
								"SUCCESS: Your target loses all their remaining Hearts and dies. If it's a PC, they are forced to roll on the Injury Table.",
								"FAILURE: Your hit is resolved like a standard Attack.",
								"NOTE: Sure Kill can only be attempted once every 24 hours."
							],
						},
					},
				},
				sage: {
					name: "Sage",
					stats: [
						[0, 2, 6, 8, 8, 10, 8],
						[0, 2, 6, 8, 8, 10, 8],
						[1, 3, 7, 9, 9, 11, 9],
						[1, 3, 7, 9, 9, 11, 9],
						[2, 4, 8, 10, 10, 12, 10],
						[2, 4, 8, 10, 10, 12, 10],
						[3, 4, 9, 11, 11, 13, 11],
						[3, 4, 9, 11, 11, 13, 11],
						[4, 4, 10, 12, 12, 14, 12],
						[4, 5, 10, 12, 12, 14, 12],
					],
					classAbilities: {
						grandGrimoire: {
							name: "Grand Grimoire",
							description:
								"Knowledge is your passion. Your Grimoire, a strange tome that's always at hand, is filled to the brim with notes of your discoveries and experiences.",
							mechanics: [
								"Your Grand Grimoire is a large, personalized book that is always in your hands when needed, but nowhere to be found when you have no use for it.",
								"Only you can write in the Grimoire, but it is quite capable of filling it's own pages! It can magically sketch pictures of things your stare at for a few minutes and record messages you speak into it's pages.",
								"If you fail an Insight Check when attempting to recall a piece of information, you may consult your Grimoire for clues. Stuffed full of factual tidbits, the tome will allow the GM to reveal a hint to where the exclusive piece of information can be found.",
								"If you die, your Grimoire manifests permanently. The tomes of great Sages are extremely valuable!",
							],
						},
						sagesStaff: {
							name: "Sage's Staff",
							description:
								"Staves are an iconic part of any Sage's inventory. Your elegant wand, or gnarled walking stick, carries your personal sigil and is the primary conduit for your magic.",
							mechanics: [
								"Spell Push: With a dramatic gesture and a shout, you can use your staff to magically shove things about.",
								"The Push can effect things up to 15 ft away.",
								"The Push exerts the same amount of force as an adult human.",
								"The Push is always executed with full power and can not be used with any delicacy.",
								"If the Push is used in a Check or Contest, the spell's Might is the same as your Insight. This might include attempting to shove against a monster, or moving a heavy stone.",
								"If the Push is used as an Attack. it is treated as an Unarmed strike, and can strike at a target up to 1 Battlefield Area away.",
								"----",
								"Magelight: Your Staff can glow with a radiance equivalent to a Torch(p175).",
								"This light can be turned on and off by lightly tapping the staff.",
								"The light remains in effect as long as you are holding your staff and are conscious.",
								"----",
								"Long, heavy staffs can be used as a Standard Weapon, shorter wands double as Concealed Weapons.",
								"While you may only have one Staff at any time, creating a new one is as simple as carving your personal sigil on to your chosen piece."
							],
						},
						prestidigitonium: {
							name: "Prestidigitonium",
							description:
								"One of the earliest tricks you learned was how to animate objects using the mana left behind by another living creature's touch. With this you can breath wondrous life into simple tools and children's toys.",
							mechanics: [
								"With some singing, or gentle coaxing, you can can attempt to make a single object spring to life and perform the function it was originally designed for.",
								"An object needs to have been used, within the last 3 months to retain the residual mana required for the spell.",
								"CHECK: Insight.",
								"SUCCESS: Your chosen object begins to move. A door knob will rotate and the door click open, a toy soldier will march, and a Physician's kit will perform surgery.",
								"The object will perform long enough to complete a single task, then the mana is expended.",
								"If a Check of Contest is required, your Insight is used.",
							],
						},
					},
					standardAbilities: {
						everydayDivination: {
							name: "Everyday Divination",
							description:
								"Divination is such a popular Wizardry skill that Sages have gained a reputation for being rather nosy.",
							mechanics: [
								"You can tap a reflective surface once, and politely request to see a particular person or object.",
								"The surface must be larger than your hand but no taller than yourself. Mirrors, windows, and even puddles can be used.",
								"REQUIRES: An Insight Check/Contest. Attempting to see a person or creature triggers a contest, your Insight vs. your target's Aura.",
								"SUCCESS: You can see and hear your chosen target and the immediate area around them.",
								"The divination lasts for a few minutes.",
								"If you share a Social Bond with the target, you may talk to each other, although only you will be able to hear their words.",
								"FAILURE: The view is clouded. A second try at Divination cannot be attempted for another 24 hours.",
								"NOTE: An individual surface may only be used once every 24 hours.",
							],
						},
						mortifyingBloat: {
							name: "Mortifying Bloat",
							description:
								"You can agitate the ambient mana inside another creature, causing it to swell and expand. Performing the spell requires you to make en exaggerated gesture; exhaling a deep breath into your own thumb. Huufff!",
							mechanics: [
								"You can attempt to inflate a single enemy up to 1 Battlefield Area away.",
								"CONTEST: Your Insight vs. your target's Grit.",
								"SUCCESS: your target begins to bloat, by the start of their next Turn they will be affected by the Ballooned Ailment.",
								"Only one creature may be affected by this Ability at any time. If you target another individual the previous target will return to normal size. Otherwise, the affliction wears off after an hour or if you will it away.",
								"----",
								"COST: 1 Dark Allegiance Point.",
							],
						},
						arcaneArtificing: {
							name: "Arcane Artificing",
							description: "You have whittled away many hours tinkering with magical devices. Whether a passion or a hobby, you have learned enough to repair, maintain and even create such devices in your spare time",
							mechanics: [
								"You gain the Crafting Discipline Artificing(p282).",
								"For specific rules on creating things refer to Craft(p280).",
								"You can identify Oddities, Artifacts, and Gadgets related to your craft with an Insight Check.",
								"You use Insight for your Crafting rolls."
							],
						},
						glowingInk: {
							name: "Glowing Ink",
							description:
								"You can wring out a special luminescent ink from your staff drawing on it's magelight ability. Now you can leave a glowing crumb trail or honor the tavern toilet wall with your sigil.",
							mechanics: [
								"You can use your Mage Staff as if it were a giant pen or paintbrush as long as the Magelight Ability is active.",
								"The ink glows as brightly as a torch, but vanishes after a day.",
								"You can squirt ink on an enemy up to 1 Battlefield Area away with a successful Attack roll.",
								"The ink does no damage, but prevents enemies from hiding in the shadows.",
								"Targets that are vulnerable to light may suffer other ill affects. This is at your GMs discretion.",
								"----",
								"GAIN: 1 Brightness Point."
							],
						},
						hocusPox: {
							name: "Hocus Pox",
							description:
								"You can use malicious mana to infect your foes with a debilitating disease. Symptoms include purple spots, mana vulnerability, and utter exhaustion.",
							mechanics: [
								"You can attempt to infect someone up to 15 ft. or 1 Battlefield Area away with Hocus Pox.",
								"CONTEST: Your Insight vs. your target's Grit.",
								"SUCCESS: Your target contracts Hocus Pox and they break out in purple spots.",
								"Victims have a Snag when making rolls to resist other Magical Abilities.",
								"Victims are afflicted with the Putrefied Ailment.",
								"When a victim is reduced to 0 Hearts by this Ailment, they collapse and are helplessly exhausted. This will pass with a week's worth of rest, but the purple spots remain for another week.",
							],
						},
						murkyMask: {
							name: "Murky Mask",
							description:
								"By coating yourself with malleable mana, you can mould your features into an incredibly convincing disguise.",
							mechanics: [
								"You can moderately alter your build, coloring, face and height, but cannot exactly mimic another.",
								"Drastic changes in mass are not possible. You can transform into Species of a similar size to you. For example, a human could imitate an Elf or Tenebrate, but not a tiny Chib or bulky Promethean.",
								"Your Mask lasts for an hour, unless:",
								"You are caught lying.",
								"You lose a Heart, suffer an Injury, or are affected by some other harmful effect.",
								"You will the Mask away.",
								"NOTE: After use, you must wait an hour before using the Mask again.",
								"----",
								"COST: 1 Dark Allegiance Point.",
							],
						},
						veryUsefulCloud: {
							name: "Very Useful Cloud",
							description:
								"You can coalesce the moisture in the air into a small cloud. This odd little being floats along next to you and has some very useful applications.",
							mechanics: [
								"Your Cloud is oddly sturdy, despite it's gaseous nature, and is about eh size of a large cushion.",
								"Summoning a Cloud requires moisture in the air.",
								"During a Fight, it requires a Turn's worth of gesticulation.",
								"The Cloud has two key functions:",
								"Carrier: The Cloud can hold 6 Inventory Slots",
								"Messenger: The cloud can find and deliver a message of no more than 40 words, to anyone you are familiar with.",
								"The Cloud's basic capabilities:",
								"Aptitudes: The Cloud's Aptitudes are the same as yours.",
								"Combat Values: Hearts 2, Defense Rating 12, and Speed Rating Average.",
								"Range: It can exist up to a mile away from your current location.",
								"Flight: It cannot float more than 20 feet off the ground.",
								"You can dissipate the cloud at will, which will result in any items it carries dropping to the ground.",
								"Anyone mean enough to Attack the cloud will cause it to dissipate when it is reduced to 0 hearts.",
								"You can only summon and control one cloud at a time.",
								"NOTE: A new cloud cannot be summoned for 24 hours after the last one has been destroyed or dismissed.",
								"----",
								"COST: 1 Bright Allegiance Point.",
							],
						},
						eldritchExplosives: {
							name: "Eldritch Explosives",
							description:
								"Nothing clears a room like a mana Kaboom! You make magical explosives.",
							mechanics: [
								"Once per Fight, you can conjure a Mana Grenade, a non-lethal weapon designed to subdue.",
								"Mana Grenades work like regular Grenades except...",
								"They do Twilight Magic Damage.",
								"Targets reduced to 0 Hearts, or less, are knocked unconscious (or fall inert if they are Mechanoids or Undead) for an hour.",
								"Rank 5: Once every 24 hours, you can conjure a Mana Bomb, a more violent and deadly variant of the Mana Grenade.",
								"Mana Bombs work like standard Bombs, except they do Twilight Magic Damage.",
								"----",
								"COST 1 Bright Allegiance Point.",
							],
						},
					},
					advancedAbilities: {
						cloakOfObscurity: {
							name: "Cloak of Obscurity",
							description: "You can slip behind a mantle of subtle darkness and become a shadow. While you're not invisible, you are definitely more difficult to notice for those not expecting you.",
							mechanics: [
								"When covered by the Cloak you use your Insight, rather than Deftness, when making your Stealth rolls.",
								"When your Team is Exploring using Stealthy Movement(p234), you make an independent Stealth roll.",
								"When Cloaked, even if your Team is Exploring using Cautious or Hasty Movement you also benefit from effects of Stealthy Movement.",
								"If you are Cloaked when discovered by a Map or Site Encounter, you make can make a Stealth roll to remain hidden."
							],
						},
						demiystify: {
							name: "Demystify",
							description:
								"Just as you can weave a web of mana, so to can you unravel it. Deep knowledge of mana manipulation allows you to undo others' spells. The performance of this counter magic is usually accompanied by a rude or condescending gesture toward the opposing spell caster.",
							mechanics: [
								"You can attempt to end a single persistent magical effect. This might be a curse, arcane barrier, or the enchantments on an Artifact or Imbued item.",
								"In a Fight, Demystify requires the use of your Action to cast.",
								"CONTEST: Your Insight vs. the Aptitude required to cast the opposing Magical Ability. If no Aptitude is specified, then use Aura.",
								"SUCCESS: The spell is unravelled.",
								"FAILURE: You cannot dispel the effect, and cannot try to dispell the effect again for 24 hours.",
								"NOTE: This ability only causes Artifacts or Imbued items to lose their enchantments for 24 hours.",
							],
						},
						manaCrush: {
							name: "Mana Crush",
							description:
								"Sometimes even the patience of the wise can be tested. By clenching your fist you can solidify the mana emanating from another creature and use it to crush lice a vice.",
							mechanics: [
								"You can target an opponent up to 15 ft., or 1 Battlefield Area away.",
								"During a Fight, Mana Crush requires the use of your Action to cast.",
								"CONTEST: Your Insight vs. your target's Deftness",
								"SUCCESS: The target is crushed within a cocoon of mana, taking 3 hearts of damage.",
								"FAILURE: The target aboids the brunt of the assault and only takes 1 Heart of Damage.",
								"NOTE: This spell is physically taxing to cast and may only safely be used once per Fight. Attempting the spell in the same Fight, or within a few minutes of the last attempt, means you must roll on the Injury Table after the contest.",
								"COST: 1 Bright Allegiance Point.",
							],
						},
						practicalFlight: {
							name: "Practical Flight",
							description:
								"Powerful Sages are able to defy gravity to float and flutter about. While you look incredibly elegant, you're not terribly fast.",
							mechanics: [
								"You have two modes of flight at your disposal...",
								"Drift: A slow and graceful form of levitation.",
								"Speed Rating while flying is Slow.",
								"Lasts until you decide to stop it.",
								"Thrust: A short, sharp surge of speed. You may want to sit astride your staff for balance.",
								"Speed Rating while flying is Fast.",
								"Thrust lasts for 3 rounds during a fight, or approximately 30 seconds.",
								"Using Thrust means that you cannot use flight again for 24 hours.",
								"NOTE: You cannot fly if Overburdened.",
							],
						},
						harmoniousGeomancy: {
							name: "Harmonious Geomancy",
							description:
								"You politely request cooperation from ambient mana. With some clear spoken instructions and a bow, or curtsy, you can re-arrange a cluttered room, or quickly assemble a barricade in front of an approaching enemy.",
							mechanics: [
								"You can attempt to persuade the local mana to manipulate objects in your immediate surroundings.",
								"CHECK: Insight.",
								"SUCCESS: The local mana swirls and twists to do your bidding.",
								"You can perform a simple task that would normally require several creatures acting together to accomplish.",
								"For example, Smashing all the breakable pots in a shed at once, alphabetizing a room full of books, or stacking loose stones into a makeshift set of stairs.",
								"The area of effect should by no larger than a small house.",
								"During a fight, you can manipulate a single Battlefield Area to:",
								"Add the Precarious or Sheltered condition to a Battlefield Area, providing there are enough suitable objects.",
								"Remove an existing Condition from a Battlefield Area, if you can agree with your GM how this ability could do it. For example, pushing away a choking mist.",
								"NOTE: Successful or not, any object moved or disrupted by this spell has it's ambient mana burnt away and cannot by affected by this Ability or Prestidigitonium for another 24 hours.",
								"----",
								"GAIN: 1 Brightness Point",
							],
						},
						shadowPuppet: {
							name: "Shadow Puppet",
							description:
								"You can seize another's shadow and, by proxy, their physical agency. While you make menacing gestures, resembling those of a puppeteer, your victim dances to your desire.",
							mechanics: [
								"You can use this Ability on any creature that casts a shadow and is roughly 10 feet, or 1 Battlefield Area, away.",
								"----",
								"CONTEST: Your Insight vs. your target's Aura",
								"SUCCESS: You can control your target for the next 10 seconds, or their Turn during a Fight. For example, you can make them speak, shout, or even attack themselves (which still requires an Attack roll!)",
								"You must repeat, and win, the Contest each Turn to retain control of your target.",
								"NOTE: You can only control one Puppet at a time.",
								"FAILURE: The target breaks free of your mana strings and you cannot target them with this Ability again for 24 hours.",
								"----",
								"GAIN: 1 Dark Allegiance Point."
							],
						},
						momentaryFortress: {
							name: "Momentary Fortress",
							description:
								"You can create a protective pyramid, sphere, or cube of light around you that is able to repel physical and magical attacks.",
							mechanics: [
								"During a fight, you can use the Fortress to attempt to block one inbound physical or magical Attack against you each Turn.",
								"If the Attack targets a Battlefield Area (like a magic blast) everyone in the same Area as you benefits from the Fortress... including foes!",
								"If cast outside of combat, the Fortress can be used to block harmful environmental effects. For example, Impact Damage from falling rocks, or Burn Damage from caustic gas.",
								"The Fortress is only visible when struck or resisting a harmful effect.",
								"The Fortress can be erected during your enemy's Turn, but this means you cannot take an Action on your next Turn.",
								"CONTEST: Your Insight vs. the Aptitude related to the type of Attack (see below)",
								"Magic Attacks: The opposing Aptitude used should be the one required to cast the offensive spell. If none is specified, use the caster's Grit for directed attacks, or Aura for harmful radiating attacks (or anything else!)",
								"Strength Attacks: The opposing Aptitude for Melee Weapons, and other brute force attacks, should be the Attacker's Might.",
								"Skill Attacks: The opposing Aptitude for Missile Weapons, and other attacks that utilist finesse, should be the Attacker's finesse.",
								"SUCCESS: The Attack is blocked, or dissipated, by a wall of impenetrable light.",
								"If successful, the Fortress remains intact and you benefit from it's protection in the next Turn.",
								"FAILURE: The panel of light shatters like glass, and the Fortress cannot be used again for 24 hours.",
								"----",
								"GAIN: 1 Bright Allegiance Point",
							],
						},
						soothingDarkness: {
							name: "Soothing Darkness",
							description:
								"You can bring forth a blanket of darkness to temporarily alleviate pain, though it's sweet caress cannot heal.",
							mechanics: [
								"You can attempt to Soothe someone with an Injury, including yourself, within 15 ft. or in the same Battlefield Area as you.",
								"If your target has multiple Injuries, you must choose one to Soothe.",
								"CHECK: Insight.",
								"SUCCESS: The effects of the Soothed Injury subside temporarily while the Ability is in effect. For example, a shadow binds a Broken Arm or a ghost limb materialises to replace a Severed one.",
								"NOTE: The Soothing effect lasts until you use the Ability again, or willingly cancel the effect.",
								"FAILURE: The Injury remains and you cannot attempt to Soothe the same Injury again.",
								"----",
								"GAIN: 1 Dark Allegiance Point.",
							],
						},
					},
				},
				sneak: {
					name: "Sneak",
					stats: [
						[0, 2, 7, 10, 7, 10, 8],
						[1, 2, 7, 10, 7, 10, 8],
						[1, 2, 8, 11, 8, 11, 9],
						[2, 3, 8, 11, 8, 11, 9],
						[2, 3, 9, 12, 9, 12, 10],
						[3, 4, 9, 12, 9, 12, 10],
						[3, 4, 10, 13, 10, 13, 11],
						[4, 4, 10, 13, 10, 13, 11],
						[4, 5, 11, 14, 11, 14, 12],
						[5, 5, 11, 14, 11, 15, 12],
					],
					classAbilities: {
						lightFooted: {
							name: "Light Footed",
							description: "As one might expect, you are especially nimble. You can move through terrain that impedes others and scale surfaces with a deceptive sure- footedness", 
							mechanics: [
								"You are unaffected by Isolated(p250) and Precarious(p251) Battlefield Conditions.",
								"You are able to climb vertical surfaces with the slightest of foot holds without being slowed down or requiring a Check."
							],
						},
						furtive: {
							name: "Furtive",
							description: "You are so used to skulking around in the shadows that you conduct yourself with a habitual stealth.",
							mechanics: [
								"You always gain the benefit of Stealthy Movement(p234) while Exploring, even if your Team is using a different Movement Type.",
								"You have an Edge on Stealth rolls while acting as a Scout while on a Journey(p228) or Exploring."
							],
						},
						stickyFingers: {
							name: "Sticky Fingers",
							description: "While you would prefer the term 'Treasure Hunter' to Thief, you're skilled in relieving others of their possessions- even in the midst of battle.",
							mechanics: [
								"You can attempt to take an item from an individual in the same Battlefield Area as you after perform a successful Attack, Attack Stunt, or Combat Trick on them.",
								"The item you can acquire is limited by the following:",
								"It cannot be armor, an outfit or something currently being held by the target.",
								"It must be something within your reach. A worn locket or ring would count, something sealed away in backpack would not.",
								"It cannot occupy more than 2 Inventory Slots.",
								"----",
								"CHECK: Deftness",
								"SUCCESS: You snatched it."
							],
						},
					},
					standardAbilities: {
						manyMasks: {
							name: "Many Masks",
							description: "You able to alter your voice and mannerisms to conceal your true identity. Very handy when you're cornered and there is no obvious escape route.",
							mechanics: [
								"You have an Edge on all rolls involving acting out different personas to fool others, you might even be able to trick people you know if your face is covered.",
								"You have an Edge when attempting to create Alter-Egos during Reputation Management"
							]
						},
						kawarimi: {
							name: "Kawarimi",
							description: "This technique allows you to nullify an attack via a misdirection. Your opponent strikes convinced their blow has reached its target... only to discover they've hit a log wearing your hat!",
							mechanics: [
								"If you've been hit by an Attack, you can attempt to avoid taking any Damage with Kawarimi",
								"----",
								"CHECK: Deftness",
								"SUCCESS: You manage to completely dodge the blow by slipping out of something you were wearing. For example, a cloak, a hat, or even by tearing off a sleeve.",
								"Normal Outfits used with this Ability are only partially removed, becoming a Tattered Outfit(p172).",
								"Already Tattered Outfits are simply destroyed. Embarrassing!",
								"Armor or Outfits of Magical Materials are discarded but otherwise undamaged",
								"FAILURE: You take the Damage.",
								"----",
								"NOTE: This Ability will not work if you have nothing left to slip out of!",
								"NOTE: This Ability may only be used once per Fight."
							]
						},
						meticulousDungeoneer: {
							name: "Meticulous Dungeoneer",
							description: "You have become rather good at gathering information with a mere glance even when you're in the most dangerous of places.",
							mechanics: [
								"You able to perform the Inspect Location Action (+ p235) without prompting a roll on the Adventure Site's Encounter Table."
							]
						},
						twitchy: {
							name: "Twitchy",
							description: "You are wired for self-preservation and have developed an almost supernatural sense of danger.",
							mechanics: [
								"You have an odd reaction that warns you that you are about to do something dangerous without realizing it. Perhaps you sneeze before opening a trapped door, or maybe your palms itch before you sip from a poisoned goblet."
							]
						},
						suddenStrikes: {
							name: "Sudden Strikes",
							description: "Thanks to some lessons from a choice tutor, The Ninja of the Seven Holy Isles or your sucker punching sibling, you have become pretty good at catching others off guard with your fists.",
							mechanics: [
								"You are able to make Unarmed Attacks as if wielding a Concealed Weapon(p152)."
							]
						},
						ableAlchemist: {
							name: "Able Alchemist",
							description: "Alchemy allows you to create a of number of useful concoctions that greatly benefit practitioners of chicanery or skulduggery.",
							mechanics: [
								"You gain the Crafting Discipline Alchemy(p282).",
								"For specific rules on creating items refer to Craft (p280).",
								"You can identify potions and poisons related to your craft with an Insight Check.",
								"You use Deftness for your Crafting rolls."
							]
						},
						legerdemain: {
							name: "Legerdemain",
							description: "Developing quick fingers is something that happens naturally in your line of work, and you're happy to use them to fool or entertain.",
							mechanics: [
								"You have an Edge on all Deftness rolls that involve:",
								"Removing or attaching an item to someone's person without them noticing",
								"Picking a lock or tampering with a mechanical device.",
								"Performing card tricks, shell games and other forms of sleight of hand."
							]
						},
						flanker: {
							name: "Flanker",
							description: "While a one on-one fights are not an attractive proposition to you, ganging up on someone certainly is.",
							mechanics: [
								"During a Fight, you gain a Minor Bonus (+2) on your Attack rolls against opponents who are being attacked by another character in the same Turn."
							]
						},
						combatOpportunist: {
							name: "Combat Opportunist",
							description: "You aren't the best shot or the biggest hitter - but sometimes it's all about timing.",
							mechanics: [
								"You have an Edge on all Attack rolls made while if you've chosen to React(p258)."
							]
						}
					},
					advancedAbilities: {
						stowing: {
							name: "Stowing",
							description: "Knowing one day you'll get caught and patted down, you've found an intimate place to conceal a small object (in your hair, mouth or.. other place). This little trick guarantees that you will never be stripped of that secret something.",
							mechanics: [
								"You may hide a single item, no larger than 1 Inventory Slot, somewhere on your person... even if naked!",
								"The stowed item does not take up one of your Inventory Slots.",
								"The stowed item cannot be found via conventional search methods.",
								"it takes a Turn to retrieve a stowed item from it's hiding place."
							]
						},
						innerDramatics: {
							name: "Inner Dramatics",
							description: "Your overactive imagination is constantly scheming and assessing the odds. If Plan A looks like it ain't gonna happen, then you've already got Plan B all figured out.",
							mechanics: [
								"You may cancel an Action you have made if you are dissatisfied with the results... it turns out you were only playing it out in your mind.",
								"You can now choose a new Action, but it must be different from the cancelled Action.",
								"NOTE: This Ability may only be used once a game Session, so you are stuck with however your second choice works out."
							]
						},
						borrowedBlade: {
							name: "Borrowed Blade",
							description: "Like a rat, you are most deadly when cornered. When you find yourself encircled, by the town guard or an angry mob, you have a few manoeuvres to tip the balance back in your favor.",
							mechanics: [
								"You can attempt to redirect a failed Attack roll against you onto another target, if they are in offending weapon's Range.",
								"CHECK: Deftness",
								"SUCCESS: You redirect the attack towards your chosen target.",
								"If the original Attack roll exceeds your chosen target's Defense Rating they suffer the consequences."
							]
						},
						charmingGrifter: {
							name: "Charming Grifter",
							description: "You have learned that an innocent smile and a touch of false sincerity can hide even your most outlandish fabrications.",
							mechanics: [
								"During Negotiation you add an Edge to the Primary Negotiator's Aura Check If they are using the Honeyed Words/Outright Deceit Tactic(p240).",
								"If your team is using another Negotiation Tactic you can offer 'total lies' as an Influencing Factor, granting a Minor Bonus (+2)."
							]
						},
						hideInPlainSight: {
							name: "Hide in Plain Sight",
							description: "You can lose pursuers even when they right on top of you, it's like you just vanished into thin air.",
							mechanics: [
								"You can attempt to hide while being observed, assuming there is room to move, somewhere to hide and/or something to provide a distraction.",
								"NOTE: This Ability can not be used if you are being Restrained, or in an empty and well lit room.",
								"----",
								"CONTEST: Your Deftness vs. the observer's Insight",
								"Success: You have 'disappeared'. You remain hidden until you Move or take another Action. Any foe must spend a Turn to re-enter the Contest to detect you."
							]
						},
						catsEyes: {
							name: "Cat's Eyes",
							description: "Darkness is your ally in all things.",
							mechanics: [
								"You able to see, or at least sense, in total darkness without suffering a penalty."
							]
						},
						desperateScurry: {
							name: "Desperate Scurry",
							description: "Your quick feet are jokingly referred to as your 'Ultimate Technique'",
							mechanics: [
								"Your Speed Rating increases by a single level."
							]
						}
					},
				},
			},
			species: {
				native: {
					name: "Human (Native)",
					size: "Medium",
					innateAbilities: {
						prodigy: {
							name: "Prodigy",
							description:
								"You define yourself through your craft, and seek to master your Calling as quickly as you can.",
							mechanics: [
								"You start play with an additional Elective Ability chosen from your Calling's Standard Ability list.",
							],
						},
					},
					maturativeAbilities: {
						unyielding: {
							name: "Unyielding",
							description:
								"Even the immortal and cosmically mighty will buckle in the face of your resolve.",
							mechanics: [
								"You are gifted with Supernatural Will.",
							],
						},
					},
				},
				stray: {
					name: "Human (Dimensional Stray)",
					size: "Medium",
					innateAbilities: {
						leisurelyFocus: {
							name: "Leisurely Focus",
							description:
								"Back in Otehr World, time was abundant. You could spend your evenings and luch breaks doing whatever you pleased: working out, studying, or socializing.",
							mechanics: [
								"You have a +1 bonus to an Aptitude of your choice.",
								"The bonus can only be applied to an Aptitude that has not been modified by your Traits.",
							],
						},
					},
					maturativeAbilities: {
						obstinate: {
							name: "Obstinate",
							description:
								"You can be very rude! You won't show the proper respect to the divine, obey magical commands, and even insist that fate is silly.",
							mechanics: [
								"You are gifted with Supernatural Will.",
							],
						},
					},
				},
				chib: {
					name: "Chib",
					size: "Small",
					innateAbilities: {
						easilyOverlooked: {
							name: "Easily Overlooked",
							description:
								"Small and innocuous, you often go unnoticed.",
							mechanics: [
								"Unless making a conscious effort to be seen, a would-be observer is required to make an Insight Check to notice you.",
							],
						},
					},
					maturativeAbilities: {
						alwaysBet: {
							name: "Always Bet on the Little Ones",
							description:
								"While it seems like the world is out to get you wee ones, fortune often seems to favor you.",
							mechanics: [
								"Your wondrous luck allows you to add a Special Bonus to the result of one of your die rolls.",
								"You can choose to add this bonus after you roll enabling you to turn failure into success. When this happens, the previous outcome comedically unravels by some absurd fortune.",
								"This bonus can be stacke on top of other bonuses, and is exempt from the 1 bonus per roll restriction.",
								"NOTE: This Ability cannot be used again until you have been able to engage in a Downtime Activity.",
							],
						},
					},
				},
				tenebrate: {
					name: "Tenebrate",
					size: "Medium",
					innateAbilities: {
						nightBorn: {
							name: "Night Born",
							description:
								"You are marked by darkness from birth.",
							mechanics: [
								"You begin play with 1 Dark Allegiance Point and must roll on the Dark Gifts Table.",
							],
						},
						shadowSight: {
							name: "Shadow Sight",
							description:
								"The shadows hold no secrets from you.",
							mechanics: [
								"You can see in the dark, and do not need to rely on a Torch.",
								"You are immune to the Obscured Battlefield Condition if caused by darkness.",
								"NOTE: Unlike Underdwellers, you don't suffer a penalty in daylight.",
							],
						},
					},
					maturativeAbilities: {
						monarchHomunculi: {
							name: "Monarch Homunculi",
							description:
								"You are able to reach into your blood and claim an authority long forgotten to exert your will on others.",
							mechanics: [
								"You can attempt to command a creature that has at least 1 Dark Allegiance Point.",
								"During a Fight, issuing a command requires the use of your Action.",
								"----",
								"CONTEST: Your Aura vs. your target's Grit",
								"SUCCESS: Your command is obeyed.",
								"Your command must be something the target can easily perform in the next minute, or 1 Turn during a Fight. For example ‘Drop your sword’, ‘Attack the person next to you’, or ‘Kneel before me’.",
								"The target must obey to the best of their ability, albeit reluctantly.",
								"Once the command is obeyed, the target regains self-control, unless re-targeted on the next Turn.",
								"FAILURE: Your target is forever immune to your commands.",
							],
						},
					},
				},
				neko: {
					name: "Rai-Neko",
					size: "Medium",
					innateAbilities: {
						oldtechProficiency: {
							name: "Oldtech Proficiency",
							description:
								"Unlike most folk living on the Outer World, Rai-Neko are educated from a young age in advanced technology.",
							mechanics: [
								"You get a bonus Purview: Understanding the function of gadgets, magitech, and other curious technology.",
							],
						},
						huntersBlood: {
							name: "Hunter's Blood",
							description:
								"While civilized now, your kind were feral predators. Your heightened senses hark back to that more primal time.",
							mechanics: [
								"You get an Edge on all Insight rolls related to the five physical senses: sight sound, touch, taste, smell.",
							],
						},
					},
					maturativeAbilities: {
						pantherCondidtioning: {
							name: "Panther Conditioning",
							description:
								"You embrace your animal qualities through rigorous training and meditation. Your hair is wilder, your fur unkempt.",
							mechanics: [
								"You have an Edge on all Deftness Checks and Contests.",
								"You make Unarmed attacks as if wielding a Concealed Weapon.",
							],
						},
					},
				},
				promethean: {
					name: "Promethean",
					size: "Large",
					innateAbilities: {
						crypticHeritage: {
							name: "Cryptic Heritage",
							description:
								"An odd truth is revealed about your origins when you recover from grievous injury or trauma.",
							mechanics: [
								"You can grow back body parts that have been severed in battle, or otherwise lost or removed.",
								"To regenerate a limb you must use a session of Downtime to Heal an Injury.",
								"NOTE: Regenerated body parts look Reptilian, skin is scaled and brightly colored.",
							],
						},
						bornOfTheSun: {
							name: "Born of the Sun",
							description:
								"You take the title 'Chosen of the Sun' seriously, embracing The Bright without question or pause.",
							mechanics: [
								"You begin play with 1 Bright Allegiance Point.",
							],
						},
					},
					maturativeAbilities: {
						solInvictus: {
							name: "Sol Invictus",
							description:
								"Thanks to intense training and dedication, your strength is unparalleled.",
							mechanics: [
								"You have attained Supernatural Might.",
							],
						},
					},
				},
				gruun: {
					name: "Gruun",
					size: "Large",
					innateAbilities: {
						asToughAsYouLook: {
							name: "As Tough As You Look",
							description:
								"You were created to endure physical hardship and easily shrug off trauma that would leave others broken.",
							mechanics: [
								"You always have 1 Heart more the the Hearts Total stated for your Calling and Rank.",
							],
						},
					},
					maturativeAbilities: {
						chainBreaker: {
							name: "Chain Breaker",
							description:
								"It is said that the first Gruun were so strong that they could shatter bindings with their bare hands.",
							mechanics: [
								"You have attained Supernatural Might.",
							],
						},
					},
				},
				goblin: {
					name: "Goblin",
					size: "Small",
					innateAbilities: {
						underDweller: {
							name: "Under Dweller",
							description:
								"You thrive in the dark, but struggle to cope with the sunlight.",
							mechanics: [
								"You can see in the dark, and do not need to rely on a Torch.",
								"You are immune to the Obscured Battlefield Condition if caused by Darkness.",
								"You have a Snag while doing anything in bright light, unless your eyes are shaded in some way.",
							],
						},
						gobboWerks: {
							name: "Gobbo Werks",
							description:
								"You tell people you are a master inventor with a deep understanding of ancient technology. This is a lie. You are able to invent and hastily make tools and machines that only sound plausible to another goblin. For example, a grappling hook utilizing a monster's sticky tongue or glue made from jam and spit.",
							mechanics: [
								"Your Gobbo Werks are:",
								"Limited to mechanical devices that move, propel, or contain.",
								"Made from scraps scavenged from the immediate surroundings.",
								"Assembled in under an hour without need for specialist tools.",
								"Can produce fire, or even explosions, if a suitable fuel or combustible is available.",
								"Ugly and noisy.",
								"----",
								"CHECK: Aura",
								"SUCCESS: Imagination and will have triumphed over physics.",
								"The exact time taken to construct your Werk is decided by your (???)",
								"Your creation will work as intended save for one critical flaw... it falls apart as soon as you start paying attention to anything else. Your neglect allows reality to re-establish it's uncaring hold.",
								"A Werk cannot be repaired.",
								"NOTE: If you later learn a 'proper' Crafting Discipline, you cannot combine it with your Goblin know-how. They are two separate arts.",
							],
						},
					},
					maturativeAbilities: {
						spore: {
							name: "Spore",
							description:
								"At some unpredictable moment during your life, you will sprout another Goblin.",
							mechanics: [
								"You release a spore which rapidly evolves into a new Goblin in under an hour.",
								"The new Goblin has no memories and is your Follower.",
								"They function like a Goblin Scamp.",
								"NOTE: This Goblin does not count towards the two Companions per PC restriction.",
							],
						},
					},
				},
				dwarf: {
					name: "Dwarf",
					size: "Medium",
					innateAbilities: {
						underDweller: {
							name: "Under Dweller",
							description:
								"You thrive in the dark, but struggle to cope with the sunlight.",
							mechanics: [
								"You can see in the dark, and do not need to rely on a Torch.",
								"You are immune to the Obscured Battlefield Condition if caused by Darkness.",
								"You have a Snag while doing anything in bright light, unless your eyes are shaded in some way.",
							],
						},
						sturdy: {
							name: "Sturdy",
							description: "",
							mechanics: [
								"You gain 2 Base Inventory Slots.",
								"You are immune to the Overburdened Ailment.",
							],
						},
					},
					maturativeAbilities: {
						stoneSong: {
							name: "Stone Song",
							description: "",
							mechanics: [],
						},
					},
				},
				elf: {
					name: "Elf",
					size: "Medium",
					innateAbilities: {
						ageless: {
							name: "Ageless",
							description:
								"While no longer truly immortal, you are not subject to the ravages of time.",
							mechanics: [
								"You never age beyond your physical prime, and are immune to effects that force aging.",
							],
						},
						immortalEgo: {
							name: "Immortal Ego",
							description:
								"While your dreams can no longer affect the reality of others, your disillusions can prevent certain physical of psychological conditions from affecting you, simply because you don't think they should.",
							mechanics: [
								"You are immune to an ailment of your choice, with the exception of Overburdened.",
							],
						},
					},
					maturativeAbilities: {
						twilightFlux: {
							name: "Twilight Flux",
							description:
								"Those elves that recall being Unshaped are able to restore a small part of the balance between the Invincible Brightness and Profound Darkness.",
							mechanics: [
								"You can shift your Allegiance Points between Bright and Dark at will, which affects your creatures and relics interact with you.",
								"During a Fight, you need to use your Action to use this Ability.",
								"NOTE: Gifts are awarded based on your underlying Allegiance, accrued through Ability selections, not by any shifts of Allegiance.",
							],
						},
					},
				},
				mechanoid: {
					name: "Bio-Mechanoid",
					size: "Medium",
					innateAbilities: {
						notFleshAndBlood: {
							name: "Not of Flesh and Blood",
							description:
								"You have a synthetic body. You do not eat or breathe and need maintenance rather than rest to heal.",
							mechanics: [
								"You can suffer different effects when you roll on the Injury Table, and must be healed with Bio-Mechanical Treatment.",
								"For better or worse, you are immune to things that target organic life. For example, neither healing potions or poisons affect you.",
								"You do not need to eat, and are immune to Starvation.",
								"You must go offline periodically to recharge. This is the mechanical equivalent of sleep, if missed or skipped you suffer Fatigue.",
							],
						},
						personalAnalytics: {
							name: "Personal Analytics",
							description:
								"Your heads-up-display affords greater perceptive range than organic beings.",
							mechanics: [
								"If you focus, you can detect the general distance and direction of any living creatures, and Sources of great energy, such as imbued items, powerful undead, or other mechanoid.",
								"Your scan has a 50 ft. range.",
								"During a Fight, this Ability requires the use of your Action.",
							],
						},
					},
					maturativeAbilities: {
						bitStream: {
							name: "Bit Stream",
							description: "",
							mechanics: [],
						},
					},
				},
			},
			homelands: {
				blazingGarden: {
					name: "Blazing Garden",
				},
				buriedKingdom: {
					name: "Buried Kingdom",
				},
				twilightMeridian: {
					name: "Twilight Meridian",
				},
				wistfulDark: {
					name: "Wistful Dark",
				},
				other: {
					name: "Other World",
				},
			},
			histories: {
				blazingGarden: {
					kinlessVagrant: {
						name: "Kinless Vagrant",
						description: "You are from the continent of Taaga, but you have no home there. Exiled or orphaned from family and purpose, your existence is a hard and ruthless one.",
						purviews: [
							"Finding what you need to survive",
							"Moving with quiet certainty",
							"Efficient analysis of a situation."
						],
						gear: [
							"Arc Weapon, old spear",
							"Extreme Weather Outfit: Hot, prickle poncho",
							"Oil/Fuel Units x10, iron eater's blood",
							"Pet: Purr, feral but loya"
						]
					},
					monsterSlayer: {
						name: "Monster Slayer",
						description: "The gigantic beasts of your homeland leave a wake of destruction behind them. You've sworn to stop them. When you're ready you will return to honor your oath.",
						purviews: [
							"The lore of beasts",
							"Staying a step ahead of danger",
							"Finding a weak point"
						],
						gear: [
							"Mighty Weapon, slayer axe",
							"Medium Armor, beast hide",
							"Beginner's Tome: Colossal Creatures, Crow's Guide",
							"Rural Goods, rope 30 ft"
						]
					},
					streetRat: {
						name: "Street Rat",
						description: "You've survived in the gutters of the glittering city, taking your chances and evading the law. Maybe bigger and better opportunities await outside the city's walls.",
						purviews: [
							"Keeping quiet and staying hidden.",
							"Death-defying acrobatics.",
							"Chicanery and general mischief."
						],
						gear: [
							"Gem x1, not exactly yours",
							"Concealed Weapon, trusty knife",
							"Solvent Units x2, largzard spittle",
							"Adventuring Gear, grappling hook"
						]
					},
					thundaClan: {
						name: "Thunda Clan Barbarian",
						description: "Named after the deadly desert they call home, the Clan are a diverse group of nomads who'll accept anyone who pulls their weight. They've been your family up until now.",
						purviews: [
							"Getting on with odd individuals",
							"Enduring the harshest conditions",
							"Making yourself heard"
						],
						gear: [
							"Master Weapon, your mother's axe",
							"Light Armor, breastplate",
							"Traveller's Bag, animal skin sack",
							"Oddity, old telescope"
						]
					},
					beastHandler: {
						name: "Beast Handler",
						description: "You grew up on a ranch or farm, were you trained and domesticated large creatures. To succeed you had to become just as stubborn as the beasts you reared.",
						purviews: [
							"Handling things larger than you.",
							"Keeping track of a large group",
							"Wearing down opposition."
						],
						gear: [
							"Hardy Rations x10, monster feed",
							"Rural Item, wool shears",
							"Rural item, rancher bell",
							"Pack Beast: Stubbly Bumpo, sturdy but flatulent"
						]
					},
					villageRunner: {
						name: "Village Runner",
						description: "Smaller villages do not afford the magical communication systems of prosperous cities. They depend on runners like you to relay messages.",
						purviews: [
							"Pacing yourself to go the distance",
							"Noticing the small things that may trip you up.",
							"Remembering the important stuff."
						],
						gear: [
							"Thrown Missile Weapon x10, skipping stones",
							"Backpack, courier's pack",
							"Basic Potion ×2, sunberry mixture",
							"Rural Goods, gourd canteen"
						]
					},
					jubilantPerformer: {
						name: "Jubilant Performer",
						description: "You used to dance, sing or play an instrument for the wealthy inhabitants of a busy city. You tire of the current culture and yearn to discover the forgotten songs",
						purviews: [
							"Ballads both ancient and new",
							"Keeping everyone smiling",
							"Putting on a good show."
						],
						gear: [
							"Lash Weapon, ribbon blade",
							"Light Armor, leathers",
							"Appealing Outfit, dancer's costume",
							"Luxury Item, musical instrument"
						]
					},
					cityScrivener: {
						name: "City Scrivener",
						description: "Big cities need official records, and you kept the books for a respected philosopher, general, or treasurer. You've left the post, but haven't forgotten the importance of note-taking",
						purviews: [
							"Absorbing a torrent of information",
							"Making precise notes and sketches.",
							"Remembering important details"
						],
						gear: [
							"Authoritative Outfit, scribe's uniform",
							"Translation Guide: Fadesong",
							"Urban Goods, pad & pen",
							"Follower: Scamp, assistant page"
						]
					},
					emissaryOfSol: {
						name: "Emissary of Sol",
						description: "You preach the enlightened thinking of the revered masters of the Sol Alliance. You've now been given the duty to spread these teachings across the Outer World",
						purviews: [
							"The lore of the Invincible Bright.",
							"Grandiose speaking and mannerisms",
							"Recognizing and chastising the duplicitous and unrighteous"
						],
						gear: [
							"Light Armor, plated vestments",
							"Holy Icon, sol medallion",
							"Follower: Custrel, acolyte attendant",
							"Vial of Bright Water ×3"
						]
					},
					wyrmBlooded: {
						name: "Wyrm Blooded",
						description: "You are one Taaga's Lost Dragon Chosen, born on an auspicious date. Your kin met all your needs and the ritual marks on your face remind you of their hopes and expectations",
						purviews: [
							"Bearing the weight of responsibility.",
							"Noting and understanding hierarchies of all kinds.",
							"Respecting rituals and tradition"
						],
						gear: [
							"Gem x1, a parting gift",
							"Arc Weapon, wing spear",
							"Medium Armor, largzard hide",
							"Compass, destiny charm"
						]
					},
					hinterlandNoble: {
						name: "Hinterland Noble",
						description: "No-Folk's Land is a contested area, dotted with petty warning settlements. As a child of this fringe nobility, you learned from the ruthless example of despots.",
						purviews: [
							"Radiating quiet menace",
							"Rough but efficient leadership",
							"Being athletic when necessary"
						],
						gear: [
							"Drawn Weapon & Arrows ×10, hunting bow",
							"Authoritative Outfit, emblematic clothing",
							"Compass, a keepsake from your tutor",
							"Riding Mount: Jumbug"
						]
					},
					startechAdept: {
						name: "Startech Adept",
						description: "Nyanko is the legacy of the Rai-Neko and the technologies they bought to Outer World. You are among the chosen expected to study and maintain these aging devices.",
						purviews: [
							"Working with any technology.",
							"Analysis and troubleshooting.",
							"Providing a reason for anything"
						],
						gear: [
							"Large Mechanical Missile Weapon & Ammo x5, Rai-Neko rifle",
							"Artisan's Outfit, adept's coat",
							"Scanner, startech monitor",
							"Small Spell Engine, startech battery"
						]
					}
				},
				buriedKingdom: {
					tunnelCrawler: {
						name: "Tunnel Crawler",
						description: "You have wandered alone in the dark corridors and dank caves of the Buried Kingdoms for some time. The unusual habits you've developed can unsettle regular folk.",
						purviews: [
							"Feeling your way through darkness.",
							"Surviving with what's available",
							"Empathy with oddness."
						],
						gear: [
							"Concealed Weapon, improvised shiv",
							"Tattered Outfit, dusty rags",
							"Bomb x1, unexploded mine",
							"Star Gem, hope in the dark"
						]
					},
					ruinScavenger: {
						name: "Ruin Scavenger",
						description: "The sunken cities and abandoned fortresses of the Underland are filled with valuable treasure. Valuable enough that you've risked your life in order to claim it.",
						purviews: [
							"Things left over from aeons past.",
							"Moving through cramped areas.",
							"Noticing traps and other dangers."
						],
						gear: [
							"Light Armor, crawling pads",
							"Standard Shield, old soldier's bulwark",
							"Traveller's Bag. a big sack",
							"Lumi-Slime Lantern, you called your slime Hue-bert"
						]
					},
					warDeserter: {
						name: "War Deserter",
						description: "You once fought in the war between New Ore and Old Iron, but you've lost faith in the cause. You felt risking your life was more wisely gambled on personal gain.",
						purviews: [
							"Departing without notice",
							"Picking away to reveal a weakness.",
							"Knowing when it's time to go"
						],
						gear: [
							"Mighty Weapon, rusty war maul",
							"Medium Armor, assault mail",
							"Tattered Outfit, old uniform",
							"Flame Grenades ×2, tunnel clearers"
						]
					},
					mossScraper: {
						name: "Moss Scraper",
						description: "While not particularly hospitable, the Sea of Sludge coastline is relatively peaceful. You grew up among the resilient folk that carved out a simple existence there.",
						purviews: [
							"Making even the repugnant palatable.",
							"Rationing what you need.",
							"Keeping quiet and unnoticed"
						],
						gear: [
							"Extreme Weather Outfit: Cold, worm skin cloak",
							"Rebreather Mask, creeper shell mask",
							"Hardy Rations ×10, shrooms",
							"Oddity, scraping knife"
						]
					},
					underlandSoldier: {
						name: "Underland Soldier",
						description: "You fought in the esteemed ranks of the Old Iron Guard, or the admired Liberation Army of New Ore, enduring the propaganda and danger that came with it.",
						purviews: [
							"Rank and file conduct.",
							"Keeping your gear maintained",
							"Staring down the enemy."
						],
						gear: [
							"Large Mechanical Missile Weapon & Ammo x5, underland rifle",
							"Light Armor, infantry armor",
							"Authoritative Outfit, Old Iron or New Ore military uniform",
							"Basic Potion ×2, jolt juice"
						]
					},
					honoredLaborer: {
						name: "Honored Laborer",
						description: "You were employed in one of New Ore's communes digging tunnels, repairing railways, or maintaining war machines; whatever was needed.",
						purviews: [
							"Performing back-breaking labor.",
							"Knowing the right tool for the job",
							"Keeping everyone going no matter how grim it gets."
						],
						gear: [
							"Black-out Goggles, New Ore issue",
							"Lantern & Oil/Fuel Unit x1, ring-handle lantern",
							"Common Rural Item, mattock",
							"Pet: Skree, leather wing"
						]
					},
					forgeHand: {
						name: "Forge Hand",
						description: "Of the crafters of Old Iron, none are more honored than those who work with the very metal the nation is named after. You were an apprentice to such a master craftsman",
						purviews: [
							"Digging in and finishing your task.",
							"Metal working tools and weaponry",
							"Proper procedure and safety"
						],
						gear: [
							"Standard Weapon with Utility Ability, forge hammer",
							"Light Armor, protective gear",
							"Standard Shield, your latest project",
							"Artisan's Outfit, smith's apron"
						]
					},
					fieldSapper: {
						name: "Field Sapper",
						description: "War in the Buried Kingdoms is often fought between mechanized infantry and fortified tunnels. Your job was to undermine the enemies gun emplacements, or thwart the advance of their death machines.",
						purviews: [
							"The workings of war machines.",
							"Getting behind enemy lines",
							"Spotting a structural weakness."
						],
						gear: [
							"Small Mechanical Missile Weapon crank pistol",
							"Backpack, rucksack",
							"Bomb x1, demolitions kit",
							"Common Rural Item, spade"
						]
					},
					recordEtcher: {
						name: "Record Etcher",
						description: "The history of Old Iron is not kept on the delicate paper of the surface world! You etched important information onto iron sheets to ensure it for future generations.",
						purviews: [
							"Keeping track of every little thing.",
							"Making good on a grudge",
							"A steady, steady hand"
						],
						gear: [
							"Traveller's Bag, courier bag",
							"Precise Dabber & Solvent x1 Unit, etching tools",
							"Oddity, multi-lens magnification goggles",
							"Oddity, metal etching sheet"
						]
					},
					comradeAgitator: {
						name: "Comrade Agitator",
						description: "When the citizens of New Ore strayed from their daily duties it was your job to loudly remind them of the collective goals. When called for you'd exploit their guilt, fears, or anger.",
						purviews: [
							"Working the crowd.",
							"Making anything sound bad",
							"Reading the mood of the masses"
						],
						gear: [
							"Light Armor, Strategically placed metal plates",
							"Appealing Outfit, New Ore counter-fashion",
							"Basic Potion ×2, jolt juice",
							"Grenades ×2, havoc crackers"
						]
					},
					resoluteOverseer: {
						name: "Resolute Overseer",
						description: "The nation of Old Iron is, built on a foundation of hard graft. You were an overseer, an almost religious figure, called on to 'encourage' flagging spirits or believers.",
						purviews: [
							"Finding the nail that needs to be hammered down.",
							"A stern, intimidating glare",
							"Identifying the most useful member of a group."
						],
						gear: [
							"Lash Weapon, spur cord",
							"Medium Armor, big pauldrons",
							"Authoritative Outfit, robes",
							"Holy Icon, Creator's glyph"
						]
					},
					apprenticeThinker: {
						name: "Apprentice Thinker",
						description: "Your unorthodox thoughts were recognized by one of the Thinkers of New Ore, who took you in as a student. You learned radical new ideas, and ways to make them sound useful,",
						purviews: [
							"Making words sound profound",
							"Convoluted, but useful, planning.",
							"Rude and incessant interruption."
						],
						gear: [
							"Concealed Weapon, dagger",
							"Blackout Goggles, for research trips to the surface",
							"Beginner's Tome: Buried Kingdom History",
							"Booster Cakes ×2: Insight, clever candies"
						]
					}
				},
				twilightMeridian: {
					disgracedScion: {
						name: "Disgraced Scion",
						description: "You were the heir to a premiere merchant family, but your familys fortune was lost or you were disowned. Now you survive on nothing but your bitter memories.",
						purviews: [
							"Cunning trickery and deceit.",
							"Desperate and dramatic escape.",
							"Damaging rumors and cruel gossip."
						],
						gear: [
							"Concealed Weapon, tarnished knife",
							"Tattered Outfit, once fine coat",
							"Regional Map, Twilight Meridian",
							"Luxury Item, old party mask"
						]
					},
					shadowSeaPirate: {
						name: "Shadow Sea Pirate",
						description: "Hailing from the strange isle of Night Haven, you robbed the rich merchants navigating the Shadow Sea. A series of misfortunes has left you without a ship or crew.",
						purviews: [
							"Keeping your head above water.",
							"Navigating the unfamiliar.",
							"Daring to be foolish."
						],
						gear: [
							"Quick Weapon, cutlass",
							"Compass, ship's memento",
							"Grenades ×2, deck busters",
							"Rural Goods, rope 30 ft"
						]
					},
					orphanedShinobi: {
						name: "Orphaned Shinobi",
						description: "The Ninja Clan of the Seven Holy Isles are ruthless and secretive. You were betrayed and your clan was eliminated by the Shogun's forces. You are the soul survivor.",
						purviews: [
							"Remaining unnoticed.",
							"Old and strange secrets.",
							"Paranoid awareness."
						],
						gear: [
							"Thrown Weapon x10, your last shuriken",
							"Costume, folorful fop",
							"Dungeoneer's Kit, dragon tooth picks",
							"Adventuring Gear, climbing claws"
						]
					},
					oldtechJunker: {
						name: "Oldtech Junker",
						description: "You're love of Oldtech has matured into practical knowledge. The salvage yards of Stahlfeld are your playground; where others see trash you see treasure.",
						purviews: [
							"Picking your way through a mess.",
							"Side-stepping catastrophe.",
							"Tinkering and tooling about."
						],
						gear: [
							"Small Mechanical Missile Weapon, old machine pistol",
							"Light Armor, padded duster",
							"Lumi-Slime Lantern, slime included",
							"Scanner, Gleysian model"
						]
					},
					twilightSilkTailor: {
						name: "Twilight Silk Tailor",
						description: "The Galvanus Peninsula is well known for it's enchanted silks, and you used to weave it. You were surprised to find your skills were transferable to a life of adventure.",
						purviews: [
							"Understanding patterns.",
							"Extremely delicate handiwork.",
							"An eye for color."
						],
						gear: [
							"Concealed Weapon with Utility Ability, scissor knife",
							"Trade Goods ×2 Units, twilight silk",
							"Artisan's Outfit, tailor's apron",
							"Urban Goods, silk measuring tape"
						]
					},
					medicinePeddler: {
						name: "Medicine Peddler",
						description: "You were a student of medicine on the Holy Isle. You travelled from place to place peddling remedies. Sales were slow and adventuring seemed a more lucrative vocation.",
						purviews: [
							"Practical herbology.",
							"Treating all kinds of wounds.",
							"Getting attention discreetly,"
						],
						gear: [
							"Appealing Outfit, kimono",
							"Traveller's Bag, medicine case",
							"Basic Potion x2, teacher's recipe",
							"Arcane Powder ×2 Units"
						]
					},
					shiningSeaFisherman: {
						name: "Shining Sea Fisherman",
						description: "You were raised in one of the many coastal villages of the Twilight Meridian. Here you were taught to read the oceans and reap its plentiful bounty",
						purviews: [
							"Even headed patience",
							"Knowing when the tide is turning",
							"Using the right bait for the job"
						],
						gear: [
							"Arc Weapon, trident",
							"Hardy Rations ×5, bubbler fish jerky",
							"Rural Goods, fishing rod",
							"Coracle"
						]
					},
					portianUniversity: {
						name: "Portian University Graduate",
						description: "The famed school of the Galvanus Peninsula has a focused and demanding curriculum. Many students resort to cheating due to the competitive ethos.",
						purviews: [
							"Rushing at the last possible minute",
							"Practical know how",
							"Working just enough."
						],
						gear: [
							"Backpack, book bag",
							"Beginner's Tome: Economics & Trade, classmate's notes",
							"Booster Cakes 2: Insight, mental muffins",
							"Urban Goods, quill & ink"
						]
					},
					merchantScion: {
						name: "Merchant Scion",
						description: "You were born to one of the Galvanus Peninsula's aristocratic families, enjoying a life of plenty You have the means to seek opportunity in far off places.",
						purviews: [
							"Getting the deal you want",
							"Levelling a critical eye",
							"Remaining unfazed"
						],
						gear: [
							"Quick Weapon, ornate kalis",
							"Appealing Outfit, fashionable baro",
							"Pouch & 50 Coins, family stipend",
							"Oddity, oldtech pocket watch"
						]
					},
					holyIsleSamurai: {
						name: "Holy Isle Samurai",
						description: "As a member of the ruling class you were expected to be a custodian of society Your kind are elite warriors, diplomats, and philosophers.",
						purviews: [
							"Maintaining proper etiquette.",
							"Judging merit in another.",
							"Respecting ritual and tradition."
						],
						gear: [
							"Master Weapon, katana",
							"Light Armor, tatami cuirass",
							"Authoritative Outfit, dark kamishimo",
							"Luxury Item, calligraphy set"
						]
					},
					archiveResearcher: {
						name: "Archive Researcher",
						description: "You were trained, and are currently employed by, Stahlfeld's Helical Archive. You are a field agent sent to find and return ancient technology to the Archive's laboratories",
						purviews: [
							"Investigation and analysis",
							"Spotting the unusual",
							"A working knowledge of ancient tech"
						],
						gear: [
							"Large Mechanical Missile Wespon & Ammo x5, machine rifle",
							"Traveller's Bag, field satchel",
							"Lantern, Oil/Fuel Units ×2, guide light",
							"Paw Post Membership, Helical Archive account"
						]
					},
					blackGloveCavalier: {
						name: "Black Glove Cavalier",
						description: "You are an aspiring member of Night Haven's Black Glove order, an aristocratic organization dedicated to the Profound Darkness. You have had dealings with dark creatures and powers.",
						purviews: [
							"All matters concerning the Profound Darkness.",
							"Knowing things you shouldn't",
							"Deeply unsettling mannerisms"
						],
						gear: [
							"Lash Weapon, duelist's chain",
							"Medium Armor, plated coat",
							"Holy Icon, darkfire circlet",
							"Shadow Stone, your precious"
						]
					}
				},
				wistfulDark: {
					forsakenWanderer: {
						name: "Forsaken Wanderer",
						description:
							"You are an orphaned vagabond and have spent most of your life crawling in the darkness. This is where you developed your survival strategies.",
						purviews: [
							"Staying unseen and unheard.",
							"Bending so you don’t break.",
							"Succeeding in desperate times.",
						],
						gear: [
							"Master Weapon, forgotten sword",
							"Tattered Outfit, rags",
							"Compass, cracked but functional",
							"Star Gem, hope in the dark",
						],
					},
					blightRaider: {
						name: "Blight Raider",
						description:
							"You were a bandit in the Mana Blight, ruthlessly taking what you needed, and perhaps a bit more. You’ve left that life behind, but the poisoned land has hardened your soul.",
						purviews: [
							"Swift and ruthless action.",
							"Getting out of tricky situations.",
							"Taking what isn’t yours.",
						],
						gear: [
							"Arc Weapon, bandit spear",
							"Light Armor, bandit leathers",
							"Rebreather, raider’s maw",
							"Grenades x2, fireberries",
						],
					},
					shadowLandsNomad: {
						name: "Shadow Lands Nomad",
						description:
							"You lived among a small troupe, wandering from place to place to avoid demons and scrounge for food. It was a hard life, but you were not alone, and you valued that.",
						purviews: [
							"Sticking together at all costs",
							"Caring for those important to you",
							"Pulling your weight",
						],
						gear: [
							"Extreme Weather Outfit: Cold, wanderer’s cloak",
							"Backpack, nomad’s pack",
							"Lantern & Oil Units x2, a guiding light",
							"Hardy Rations x5, journey loaf",
						],
					},
					murkDweller: {
						name: "Murk Dweller",
						description:
							"You were one of the few shaped inhabitants of the Murk, and spent your time quietly living among strange and belligerent creatures. You are not easily phased.",
						purviews: [
							"Dealing with the odd and arcane.",
							"A working knowledge of magic.",
							"Keeping calm in odd situations.",
						],
						gear: [
							"Quick Weapon, grass blade",
							"Appealing Outfit, petal pixie clothes",
							"Booster Cakes x2, moon drop candy",
							"Solvent x2 Units, ash elm sap",
						],
					},
					nightwallYeoman: {
						name: "Nightwall Yeoman",
						description:
							"Your lived on the edge of a Star Shard’s glow. From there you observed the Shadowed Lands and learned to defend yourself from what emerged from the dark.",
						purviews: [
							"Spotting what hides in the darkness.",
							"Staying focused, even while rushing.",
							"Finding a weak point.",
						],
						gear: [
							"Drawn Weapon & 10 Arrows, yeoman’s bow",
							"Light Armor, cuirass",
							"Traveller’s Bag, sling pack",
							"Companion: Growlhund, a trusty friend",
						],
					},
					starlightFarmer: {
						name: "Starlight Farmer",
						description:
							"You toiled in the fields that flourished in the light of the Star Shards, harvesting food for yourself and the wealthier residents of the realm.",
						purviews: [
							"Sorting the good soil from the bad.",
							"Persevering when you ought to.",
							"Empathy for all living creatures",
						],
						gear: [
							"Treat x10, mama’s cookies",
							"Trade Goods, star plums",
							"Rural Goods, your family’s best shovel",
							"Pudge Grub, blue ribbon winner",
						],
					},
					guildAgent: {
						name: "Guild Agent",
						description:
							"Raised and trained as an artisan, shopkeeper, or tavern worker you are well versed in the hustle and bustle of Shard’s cities. You joined the regional guild to travel the world",
						purviews: [
							"Making and spotting a good deal.",
							"Working at a brisk pace.",
							"Keeping others satisfied.",
						],
						gear: [
							"Artisan’s Outfit, apron",
							"Kingdom Map, Shard trade route guide",
							"Packbeast, Shaggy Bumpo, a stubborn thing",
							"Follower: Scamp, assistant",
						],
					},
					townGuard: {
						name: "Town Guard",
						description:
							"You’ve worked for local constabulary. The job was a taxing one: chasing down miscreants, fending off stray monsters, and interrogating any suspicious travellers.",
						purviews: [
							"Seeing the truth of a situation.",
							"Throwing your weight around.",
							"Powering through obstacles.",
						],
						gear: [
							"Medium Armor, city guard’s uniform",
							"Large Shield, riot bulwark",
							"Authoritative Outfit, captain’s hat & sash",
							"Lantern, night watch’s companion",
						],
					},
					celebratedArtist: {
						name: "Celebrated Artist",
						description:
							"You are a dabbler in several mediums, but talent was not enough to guarantee your success. You’ve also mastered the art of shameless self- promotion.",
						purviews: [
							"Creative Expression!",
							"Making yourself seen and heard.",
							"Appreciating the artistic or symbolic.",
						],
						gear: [
							"Concealed Weapon, ornamental dagger",
							"Appealing Outfit, fine robes",
							"Urban Goods, stylus & parchment",
							"Luxury Item, starlight lyre",
						],
					},
					magiaUniversityGraduate: {
						name: "Magia University Graduate",
						description:
							"You are an academic, studying one of the University of Magia’s numerous programs. It’s been demanding so you’ve decided to take a gap year.",
						purviews: [
							"Research and close study.",
							"Pushing yourself to stay focused.",
							"Recalling useful facts and trivia.",
						],
						gear: [
							"Traveller’s Bag, satchel",
							"Master’s Tome, on a subject of your choice!",
							"Translation Journal, Bright Speech",
							"Booster Cakes x2: Insight, cram cookies",
						],
					},
					knightErrant: {
						name: "Knight Errant",
						description:
							"You have been knighted as the result of a grand and noteworthy deed, but now you have strayed from your order to go on quests that you deem worthy.",
						purviews: [
							"Forthright communication.",
							"Knowledge of vanquished evils.",
							"Finding your courage.",
						],
						gear: [
							"Medium Armor, questing plate",
							"Standard Shield, heraldic heater",
							"Holy Icon, sacred chain",
							"Mount, Mokko-Do",
						],
					},
					shardStatePatrician: {
						name: "Shard State Patrician",
						description:
							"You were born into one of Shard’s noble families. Your privileged life is a prison of duty and expectation. You seek adventure and are in search of some much needed excitement.",
						purviews: [
							"Demanding the proper respect.",
							"Knowledge of political practice.",
							"Stubborn, competitive pride.",
						],
						gear: [
							"Small Mechanical Weapon & Bolts x10, hand crossbow",
							"Medium Armor, traveller’s mail",
							"Appealing Outfit, fine attire",
							"Follower: Custrel, dedicated butler or maid",
						],
					},
				},
				otherWorld: {
					transient: {
						name: "Transient",
						description: "You never really stayed in once place for long. This strange new world doesn't feel much like home, but then again the old one didn't either. Nothin' new, huh?",
						purviews: [
							"Scrounging for what you need",
							"Enduring harsh conditions",
							"Communicating in code"
						],
						gear: [
							"Tattered Outfit, no shoes and a ripped trench coat",
							"Backpack, trusty kit bag",
							"Treat x5, candy from a child",
							"Pet: Growl, brave mongrel."
						]
					},
					neet: {
						name: "NEET",
						description: "Not in Education, Employment, or Training. You're young and have your whole life ahead of you, you just aren't sure what your supposed to do with it yet.",
						purviews: [
							"Trivia related to important persona",
							"Finding the path of least resistance",
							"Sharp, cynical judgement."
						],
						gear: [
							"Beginner's Tome: Adventure Sites, Akenia Adventure!! guide",
							"Basic Potion x2, energy drinks",
							"Holy Icon, collectible plush",
							"Other World Pocket Device, Game Gal Advance"
						]
					},
					retail: {
						name: "Retail / Service",
						description: "You used to wait tables or work a cash register The new place is filled with some pretty odd characters, but it's nothing compared to the strange types you had to serve back home.",
						purviews: [
							"Dealing with the unreasonable.",
							"Keeping calm when in a rush",
							"Remembering the particulars."
						],
						gear: [
							"Artisan's Outfit, sales apron",
							"Rations x10, box of nuggets",
							"Urban Goods, company branded pad & pen",
							"Other World Pocket Device, smart phone"
						]
					},
					blueCollar: {
						name: "Blue Collar",
						description: "You worked with your hands, doing jobs that were often unappreciated back home. Your strong work ethic and practical nature will put you in good stead here",
						purviews: [
							"Putting your back into it.",
							"Knowing your limits and pacing yourself.",
							"Seeing through pretension."
						],
						gear: [
							"Mighty Weapon with Utility Ability, sledgehammer",
							"Light Armor, hard hat & protective overalls",
							"Traveller's Bag, tool belt",
							"Basic Potion x2, coffee flask"
						]
					},
					whiteCollar: {
						name: "White Collar",
						description: "Up until recently, your days were spent behind a desk. You worked a comfy, if a little dull, 9.5 routine and day dreamed about taking more risks.",
						purviews: [
							"Keeping a deadline.",
							"Effective multi-tasking.",
							"Saying just about anything while retaining a polite tone."
						],
						gear: [
							"Authoritative Outfit, suit & tie",
							"Treat x2 & Hardy Rations ×2, packed lunch",
							"Oddity, red stapler",
							"Other World Pocket Device, synth tablet"
						]
					},
					domestic: {
						name: "Domestic",
						description: "You cooked and cleaned as a servant. chef or stay-at home spouse. But now, without warning, you've been transported to this strange new world. You think you left the oven on!",
						purviews: [
							"Noticing something out of place",
							"Making others comfortable.",
							"Working with edible things."
						],
						gear: [
							"Standard Weapon with Utility Ability, iron frying pan",
							"Traveller's Bag. cute tote",
							"Beginner's Tome: Outer World Legends, children's book",
							"Treats x10, perfect cookies"
						]
					},
					miltaryLawEnforcement: {
						name: "Military / Law Enforcement",
						description: "Unlike most Other Worlders, you are armed and trained for combat. Yet nothing could have prepared you for the strange critters you're up against here.",
						purviews: [
							"Quick but rigorous investigation",
							"Practical athletics.",
							"Reading a situation"
						],
						gear: [
							"Light Armor, anti-stab vest",
							"Authoritative Outfit, uniform",
							"Grenades ×2, frags",
							"Other World Side Arm & Ammo x10 trusty shooter"
						]
					},
					educationFaculty: {
						name: "Education (Faculty)",
						description: "Wait a minute, you're the teacher... isn't it supposed to be the kids who end up on a silly mystical adventure!? Still. it beats grading papers",
						purviews: [
							"Explaining complicated ideas",
							"Critical assessment against criteria",
							"Managing stress."
						],
						gear: [
							"Backpack, teacher's satchel",
							"Urban Goods, pack of chalk",
							"Oddity, hand puppet for educational use",
							"Oddity, three-hole puncher"
						]
					},
					educationStudent: {
						name: "Education (Student)",
						description: "This is the sort of thing that happens in lazy, fantasy fiction. How are you going to get to class now? Still it's less stressful than preparing for those end of semester papers.",
						purviews: [
							"Rushing at the very last minute.",
							"Dedication to learning",
							"Expressing yourself loudly"
						],
						gear: [
							"Master Weapon, aluminium baseball bat",
							"Backpack, book bag",
							"Appealing Outfit, school uniform",
							"Other World Pocket Device, smart phone with charm"
						]
					},
					idleRich: {
						name: "Idle Rich",
						description: "Thanks to wealthy parents or inheritance, you've lead a luxurious lifestyle and had everything handed to you on a silver plate. So much for that.",
						purviews: [
							"Keeping all eyes on you.",
							"Maintaining an air of superiority, deserved or not.",
							"Getting what you want."
						],
						gear: [
							"Gem x1, assorted bling",
							"Appealing Outfit, strong look",
							"Blackout Goggles, shades",
							"Other World Pocket Device, Pear Pad DX"
						]
					}
				}
			},
			languages: {
				lowSpeech: {
					name: "Low Speech",
					known: true,
				},
				highAkenian: {
					name: "High Akenian",
					known: false,
				},
				darkTongue: {
					name: "Dark Tongue",
					known: false,
				},
				dreamCall: {
					name: "Dream Call",
					known: false,
				},
				fadeSong: {
					name: "Fade Song",
					known: false,
				},
				gleysianCode: {
					name: "Gleysian Code",
					known: false,
				},
				brightSpeech: {
					name: "Bright Speech",
					known: false,
				},
				hoshiBan: {
					name: "Hoshi-Ban",
					known: false,
				},
				underWarble: {
					name: "Under Warble",
					known: false,
				},
				creatorsScript: {
					name: "Creator's Script",
					known: false,
				},
				otherWording: {
					name: "Other Wording",
					known: false,
				},
			},
			weapons: {
				unarmed: {
					name: "Unarmed",
				},
				standard: {
					name: "Standard",
				},
				concealed: {
					name: "Concealed",
				},
				quick: {
					name: "Quick",
				},
				master: {
					name: "Master",
				},
				mighty: {
					name: "Mighty",
				},
				arc: {
					name: "Arc",
				},
				lash: {
					name: "Lash",
				},
				thrown: {
					name: "Thrown",
				},
				drawn: {
					name: "Drawn",
				},
				smallMissile: {
					name: "Small Mechanical Missile",
				},
				largeMissile: {
					name: "Large Mechanical Missile",
				},
			},
			armors: {
				naked: {
					name: "Naked",
					bonus: 0,
				},
				light: {
					name: "Light Armor",
					bonus: 2,
				},
				medium: {
					name: "Medium Armor",
					bonus: 4,
				},
				heavy: {
					name: "Heavy Armor",
					bonus: 6,
				},
				superHeavy: {
					name: "Super Heavy Armor",
					bonus: 8,
				},
			},
			shields: {
				small: {
					name: "Small Shield",
					bonus: 0,
				},
				medium: {
					name: "Medium Shield",
					bonus: 1,
				},
				large: {
					name: "Large Shield",
					bonus: 2,
				},
			},
			quirks: {
				unhinged: {
					name: "Unhinged",
				},
				jumpy: {
					name: "Jumpy",
				},
				pedantic: {
					name: "Pedantic",
				},
				clearIntent: {
					name: "Clear Intent",
				},
				boring: {
					name: "Boring",
				},
				curious: {
					name: "Curious",
				},
				alwaysPrepared: {
					name: "Always Prepared",
				},
				stylish: {
					name: "Stylish",
				},
				miser: {
					name: "Miser",
				},
				soulLink: {
					name: "Soul Link",
				},
				girthsome: {
					name: "Girthsome",
				},
				nearsighted: {
					name: "Nearsighted",
				},
				adorable: {
					name: "Adorable",
				},
				darkDemeanor: {
					name: "Dark Demeanor",
				},
				angelicCountenance: {
					name: "Angelic Countenance",
				},
				bigEater: {
					name: "Big Eater",
				},
				waifish: {
					name: "Waifish",
				},
				magitechGraft: {
					name: "Magitech Graft",
				},
				winged: {
					name: "Winged",
				},
				graspingTresses: {
					name: "Grasping Tresses",
				},
				survivor: {
					name: "Survivor",
				},
				mageBreaker: {
					name: "Mage Breaker",
				},
				young: {
					name: "Young",
				},
			},
		};
	},
	computed: {
		getLevel() {
			switch (true) {
				case this.xp < 6:
					return 1;
				case this.xp < 12:
					return 2;
				case this.xp < 24:
					return 3;
				case this.xp < 36:
					return 4;
				case this.xp < 48:
					return 5;
				case this.xp < 72:
					return 6;
				case this.xp < 96:
					return 7;
				case this.xp < 132:
					return 8;
				case this.xp < 168:
					return 9;
				default:
					return 10;
			}
		},
		getMight() {
			let calcMight = 10;
			switch (this.callingSelected) {
				case "Battle Princess":
					calcMight =
						this.callings.battlePrincess.stats[
							this.getLevel - 1
						][2];
					break;
				case "Champion":
					calcMight =
						this.callings.champion.stats[this.getLevel - 1][2];
					break;
				case "Factotum":
					calcMight =
						this.callings.factotum.stats[this.getLevel - 1][2];
					break;
				case "Heretic":
					calcMight =
						this.callings.heretic.stats[this.getLevel - 1][2];
					break;
				case "Murder Princess":
					calcMight =
						this.callings.murderPrincess.stats[
							this.getLevel - 1
						][2];
					break;
				case "Raider":
					calcMight =
						this.callings.raider.stats[this.getLevel - 1][2];
					break;
				case "Sage":
					calcMight = this.callings.sage.stats[this.getLevel - 1][2];
					break;
				case "Sneak":
					calcMight = this.callings.sneak.stats[this.getLevel - 1][2];
					break;
			}
			switch (this.speciesSelected) {
				case "Chib":
				case "Goblin":
					calcMight--;
					break;
				case "Gruun":
				case "Promethean":
					calcMight++;
					break;
			}
			return calcMight;
		},
		getDeft() {
			let calcDeft = 10;
			switch (this.callingSelected) {
				case "Battle Princess":
					calcDeft =
						this.callings.battlePrincess.stats[
							this.getLevel - 1
						][3];
					break;
				case "Champion":
					calcDeft =
						this.callings.champion.stats[this.getLevel - 1][3];
					break;
				case "Factotum":
					calcDeft =
						this.callings.factotum.stats[this.getLevel - 1][3];
					break;
				case "Heretic":
					calcDeft =
						this.callings.heretic.stats[this.getLevel - 1][3];
					break;
				case "Murder Princess":
					calcDeft =
						this.callings.murderPrincess.stats[
							this.getLevel - 1
						][3];
					break;
				case "Raider":
					calcDeft = this.callings.raider.stats[this.getLevel - 1][3];
					break;
				case "Sage":
					calcDeft = this.callings.sage.stats[this.getLevel - 1][3];
					break;
				case "Sneak":
					calcDeft = this.callings.sneak.stats[this.getLevel - 1][3];
					break;
			}
			switch (this.speciesSelected) {
				case "Chib":
				case "Goblin":
					calcDeft++;
					break;
			}
			return calcDeft;
		},
		getGrit() {
			switch (this.callingSelected) {
				case "Battle Princess":
					return this.callings.battlePrincess.stats[
						this.getLevel - 1
					][4];
					break;
				case "Champion":
					return this.callings.champion.stats[this.getLevel - 1][4];
					break;
				case "Factotum":
					return this.callings.factotum.stats[this.getLevel - 1][4];
					break;
				case "Heretic":
					return this.callings.heretic.stats[this.getLevel - 1][4];
					break;
				case "Murder Princess":
					return this.callings.murderPrincess.stats[
						this.getLevel - 1
					][4];
					break;
				case "Raider":
					return this.callings.raider.stats[this.getLevel - 1][4];
					break;
				case "Sage":
					return this.callings.sage.stats[this.getLevel - 1][4];
					break;
				case "Sneak":
					return this.callings.sneak.stats[this.getLevel - 1][4];
					break;
				default:
					return 10;
			}
		},
		getInsight() {
			switch (this.callingSelected) {
				case "Battle Princess":
					return this.callings.battlePrincess.stats[
						this.getLevel - 1
					][5];
					break;
				case "Champion":
					return this.callings.champion.stats[this.getLevel - 1][5];
					break;
				case "Factotum":
					return this.callings.factotum.stats[this.getLevel - 1][5];
					break;
				case "Heretic":
					return this.callings.heretic.stats[this.getLevel - 1][5];
					break;
				case "Murder Princess":
					return this.callings.murderPrincess.stats[
						this.getLevel - 1
					][5];
					break;
				case "Raider":
					return this.callings.raider.stats[this.getLevel - 1][5];
					break;
				case "Sage":
					return this.callings.sage.stats[this.getLevel - 1][5];
					break;
				case "Sneak":
					return this.callings.sneak.stats[this.getLevel - 1][5];
					break;
				default:
					return 10;
			}
		},
		getAura() {
			switch (this.callingSelected) {
				case "Battle Princess":
					return this.callings.battlePrincess.stats[
						this.getLevel - 1
					][6];
					break;
				case "Champion":
					return this.callings.champion.stats[this.getLevel - 1][6];
					break;
				case "Factotum":
					return this.callings.factotum.stats[this.getLevel - 1][6];
					break;
				case "Heretic":
					return this.callings.heretic.stats[this.getLevel - 1][6];
					break;
				case "Murder Princess":
					return this.callings.murderPrincess.stats[
						this.getLevel - 1
					][6];
					break;
				case "Raider":
					return this.callings.raider.stats[this.getLevel - 1][6];
					break;
				case "Sage":
					return this.callings.sage.stats[this.getLevel - 1][6];
					break;
				case "Sneak":
					return this.callings.sneak.stats[this.getLevel - 1][6];
					break;
				default:
					return 10;
			}
		},
		getHearts() {
			let calcHearts = 2;
			switch (this.callingSelected) {
				case "Battle Princess":
					calcHearts =
						this.callings.battlePrincess.stats[
							this.getLevel - 1
						][1];
					break;
				case "Champion":
					calcHearts =
						this.callings.champion.stats[this.getLevel - 1][1];
					break;
				case "Factotum":
					calcHearts =
						this.callings.factotum.stats[this.getLevel - 1][1];
					break;
				case "Heretic":
					calcHearts =
						this.callings.heretic.stats[this.getLevel - 1][1];
					break;
				case "Murder Princess":
					calcHearts =
						this.callings.murderPrincess.stats[
							this.getLevel - 1
						][1];
					break;
				case "Raider":
					calcHearts =
						this.callings.raider.stats[this.getLevel - 1][1];
					break;
				case "Sage":
					calcHearts = this.callings.sage.stats[this.getLevel - 1][1];
					break;
				case "Sneak":
					calcHearts =
						this.callings.sneak.stats[this.getLevel - 1][1];
					break;
			}
			if (this.speciesSelected == "Gruun") {
				calcHearts++;
			}
			return calcHearts;
		},
		getAttack() {
			switch (this.callingSelected) {
				case "Battle Princess":
					return this.callings.battlePrincess.stats[
						this.getLevel - 1
					][0];
					break;
				case "Champion":
					return this.callings.champion.stats[this.getLevel - 1][0];
					break;
				case "Factotum":
					return this.callings.factotum.stats[this.getLevel - 1][0];
					break;
				case "Heretic":
					return this.callings.heretic.stats[this.getLevel - 1][0];
					break;
				case "Murder Princess":
					return this.callings.murderPrincess.stats[
						this.getLevel - 1
					][0];
					break;
				case "Raider":
					return this.callings.raider.stats[this.getLevel - 1][0];
					break;
				case "Sage":
					return this.callings.sage.stats[this.getLevel - 1][0];
					break;
				case "Sneak":
					return this.callings.sneak.stats[this.getLevel - 1][0];
					break;
				default:
					return 0;
			}
		},
		getAttackBonus() {
			switch (this.weaponSelected) {
				case "Master":
					return 1;
				case "Large Mechanical Missile":
					return 2;
				default:
					return 0;
			}
		},
		getDefense() {
			let calcDefense = 10;
			switch (this.armorSelected) {
				case "Light Armor":
					calcDefense = 12;
					break;
				case "Medium Armor":
					calcDefense = 14;
					break;
				case "Heavy Armor":
					calcDefense = 16;
					break;
				case "Super Heavy Armor":
					calcDefense = 18;
					break;
			}
			switch (this.shieldSelected) {
				case "Medium Shield":
					calcDefense++;
					break;
				case "Large Shield":
					calcDefense += 2;
					break;
			}
			switch (this.speciesSelected) {
				case "Chib":
				case "Goblin":
					calcDefense++;
					break;
				case "Gruun":
				case "Promethean":
					calcDefense--;
					break;
			}
			switch (this.getSpeed) {
				case 2:
					calcDefense += 2;
					break;
				case 3:
				case 4: 
					calcDefense += 4;
			}
			return calcDefense;
		},
		getSpeed() {
			let calcSpeed = 1;
			if (this.callingSelected == 'Raider') {
				calcSpeed++;
			}
			switch (true) {
				case this.hasAbility("The Better Part of Valor"):
				case this.hasAbility("Relentless Pursuer"):
				case this.hasAbility("Blistering Pace"):
					calcSpeed++;
			}
			switch (this.armorSelected) {
				case "Medium Armor":
					calcSpeed = calcSpeed > 2 ? 2 : calcSpeed;
					break;
				case "Heavy Armor":
					calcSpeed = calcSpeed > 1 ? 1 : calcSpeed;
					break;
				case "Super Heavy Armor":
					calcSpeed = 0;
			}
			if (this.shieldSelected == "Large Shield" && calcSpeed > 0) {
				calcSpeed--;
			}
			return calcSpeed;
		},
		getSpeedRating() {
			switch (this.getSpeed) {
				case 1:
					return "Average";
					break;
				case 2:
					return "Fast";
					break;
				case 3:
				case 4:
					return "Very Fast";
					break;
				case 0:
					return "Slow";
					break;
				default:
					return "Average";
			}
		},
	},
	methods: {
		hasAbility(ability) {
			if (
				this.elective1 == ability ||
				this.elective2 == ability ||
				this.elective4 == ability ||
				this.elective6 == ability ||
				this.elective10 == ability
			) {
				return true;
			} else {
				return false;
			}
		},
		printDiv(divId) {
			let mywindow = window.open("", "PRINT");

			mywindow.document.write(
				`<html><head><title>Character Sheet</title>`
			);
			mywindow.document.write(
				'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">'
			);
			mywindow.document.write(
				'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
			);
			mywindow.document.write(
				"<style>.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.align-center{align-items:center}.flex-1{flex-grow:1}.flex-2{flex-grow:2}.printColumn{columns:2}@media print{.progress{background-color:#f5f5f5!important;border-radius:4px!important;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1)!important}.progress-bar{background-color:#428bca!important;box-shadow:inset 0-1px 0 rgba(0,0,0,.15)!important}}</style>"
			);
			mywindow.document.write('</head><body><main class="container">');
			mywindow.document.write(document.getElementById(divId).innerHTML);
			mywindow.document.write("</main></body></html>");

			mywindow.document.close(); // necessary for IE >= 10
			mywindow.focus(); // necessary for IE >= 10*/
			mywindow.addEventListener("load", function () {
				mywindow.print();
				//mywindow.close();
			});
			mywindow.addEventListener("afterprint", function () {
				mywindow.close();
			});

			return true;
		},
	},
};