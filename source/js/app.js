export default {
	data() {
		return {
			edit: true,
			show: false,
			showSidebar: false,
			dialogOpen: false,
			backupOpen: false,
			backupName: "default",
			gems: 0,
			coins: 0,
			stones: 0,
			itemSelected: null,
			inventory: [],
			traits: [0, -1, "+1", "+2"],
			mightTrait: 0,
			deftTrait: 0,
			gritTrait: 0,
			insightTrait: 0,
			auraTrait: 0,
			callingSelected: null,
			weaponSelected: false,
			combinationWeaponSelected: false,
			armorSelected: false,
			shieldSelected: false,
			weaponCustom: false,
			armorCustom: false,
			shieldCustom: false,
			customWeaponSelected: false,
			customArmorSelected: false,
			customShieldSelected: false,
			weaponNumber: 1,
			armorNumber: 1,
			shieldNumber: 1,
			xp: 0,
			characterName: null,
			speciesSelected: null,
			nativeHumanElective: null,
			elfImmunity: null,
			homelandSelected: null,
			historySelected: null,
			languagesSelected: ["Low Speech"],
			quirkSelected: null,
			wearyHistory: null,
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
			companionSelected: null,
			followerSpecies: null,
			followerHumanCalling: null,
			followerHumanAbility: null,
			followerElfImmunity: null,
			followerDarkGift: null,
			soulCompAbility1: null,
			soulCompAbility5: null,
			companionTypes: {
				followers: {
					scamp: {
						name: "Scamp",
						description: "Youthful sidekicks who rely on pluck and enthusiasm to compensate for a lack of experience. There's no shortage of bored, naive, or desperate youth in Outer World.",
						stats: [0, 2, 6, 7, 6, 6, 6],
						abilities: [
							"Impish: All Scamps have the Young Quirk",
							"Native Human? Choose an additional Standard Elective Ability from either the Sneak or Raider"
						],
						electiveAbility: ["Sneak", "Raider"],
						inventory: [
							"Tattered Outfit",
							"Standard Weapon with the Shoddy Ability."
						],
						services: "Scamps will help you with simple tasks. For example, running errands, eavesdropping or holding your torch.",
						recruitment: "You gain a Minor Bonus (+2) if you have been generous, paternal, or protective towards your Scamp.",
						fee: 1
					},
					scholar: {
						name: "Scholar",
						description: "Scholars are ordinary folk with an unhealthy interest in a useful skill or area of knowledge. They are usually motivated by boredom, greed, or curiosity.",
						stats: [0, 2, 6, 6, 6, 7, 6],
						abilities: [
							"Specialist Subject: Scholars have a Purview pertaining to a single area of knowledge. For example, the history of ancient Akenia.",
							"They also have a Language related to this knowledge.",
							"Researcher: Scholars can perform Research on your behalf.",
							"Native Human? Choose an additional Standard Elective Ability from either the Factotum or Sage."
						],
						electiveAbility: ["Factotum", "Sage"],
						inventory: [
							"Functional Outfit",
							"Traveller's Bag",
							"Scholars with a Crafting Discipline also have a Specialist Toolkit or access to a Workshop."
						],
						services: "Scholars will provide you with facts and information about their Specialist Subject.",
						recruitment: "You gain a Minor Bonus (+2) if you have a Calling or Origin that appeals to the Scholar.",
						fee: 5
					},
					guide: {
						name: "Guide",
						description: "These folk have travelled further from home than most would consider safe. They are able to guide anyone who wants to venture beyond the city wall.",
						stats: [0, 2, 6, 6, 7, 6, 6],
						abilities: [
							"Wayfarer: These folk can act as Guides (+ p226) in the Region they are hired in. For example, the Wistful Dark or Blazing Gardens. Once Recruited, Guides can lead in new Regions if they spend one session of Downtime scouting.",
							"Native Human? Guides can choose an additional Standard Elective Ability from either the Factotum or Raider."
						],
						electiveAbility: ["Factotum","Raider"],
						inventory: [
							"Extreme Weather Outfit",
							"Traveller's Bag",
							"Guides with a Crafting Discipline also have a Specialist Toolkit or access to a Workshop."
						],
						services: "Guides will escort you to and from a location within the Region they are familiar with.",
						recruitment: "You gain a Minor Bonus (+2) if you have a Calling or Origin that appeals to the Guide.",
						fee: 5
					},
					custrel: {
						name: "Custrel",
						description: "Combat ready assistants and squires. Custrels specialize in acting as seconds or bodyguards in battle, as well as taking care of little things for their ward or master.",
						stats: [1, 2, 7, 6, 6, 6, 6],
						abilities: [
							"Weapon Proficiency: Custrels can use Light Armor and two other pieces of uncustomized combat gear of their choice. They will not be proficient in gear which would incur a penalty because of their Species Size's Combat Gear Allowance.",
							"Native Human? Custrels can choose a Standard Elective Ability from the Champion or Battle Princess."
						],
						electiveAbility: ["Champion", "Battle Princess"],
						inventory: [
							"Appealing or Authoritative Outfit",
							"Light Armor",
							"Any 2 pieces of combat gear, which they are proficient in."
						],
						services: "Custrels will fight alongside, or protect you, when exploring dangerous places.",
						recruitment: "You gain a Minor Bonus (421 16 you have a Calling or Origin that appeals to the Custrel.",
						fee: 8
					}
				},
				pets: {
					growl: {
						name: "Growl",
						description: "These furry canines are popular pets among common folk, but also the mount of choice for the tiny warror. Selective breeding has resulted in some distinct breeds but all are uniformly fierce with a keen sense of smell.",
						stats: [1, 3, 7, 7, 7, 7, 4],
						defense: 14,
						speed: "Fast",
						abilities: [
							"Tracking: Growis grant you an Edge on tracking or detecting quarry with a particular scent.",
							"Super Sense: They grow and snarl if someone unfamiliar close by is using magic of some kind, even if not visible or obvious"
						],
						inventory: [
							"6 Slots with a harness",
							"Can be Mounts for Small Species."
						],
						fighting: [
							"Claws and fangs strike like a Quick Weapon providing a +1 Defense Bonus during a Fight*."
						],
						cost: 75
					},
					buzzer: {
						name: "Buzzer",
						description: "Named after the curious humming sound they make, these large, scuttling insects have chitinous armor and a nasty nip. Vicious but loyal, Buzzers are popular with bandits and nomads due to their hardy nature.",
						stats: [1, 2, 7, 7, 7, 3, 3],
						defense: 15,
						abilities: [
							"Buzz Off: When they, or their owner, are under attack Buzzers can raise the pitch of their hum to an unpleasant level. The Battlefield Area they occupy becomes Obscured unless your ears are protected.",
							"Exoskeleton: Their tough shell boosts their Defense by +4*.",
							"Grazing: They require an environment that contains vermin or other small creatures to Graze."
						],
						inventory: [
							"6 Slots with a harness.",
							"Can be Mounts for Small Species."
						],
						fighting: [
							"Mand bles strike like a Standard Weapon."
						],
						cost: 75
					},
					pudgeGrub: {
						name: "Pudge Grub",
						description: "About the size and weight of a ripe watermelon, these bright, doughy creatures waddle harmlessly all over Outer World. They are easy prey but survive through frequent asexual division. Most commonly used as low maintenance livestock, they also have practical uses for Adventurers.",
						stats: [0, 1, 3, 3, 3, 3, 3],
						defense: 11,
						speed: "Slow",
						abilities: [
							"Directable Decoy: If urged in one direction, Pudge Grubs will trundle away until prompted to stop or go in another direction, much like a clockwork toy.",
							"Delicious Decoy: Their sweet smell and succulent appearance make Pudge Grubs irresistible to bestial predators, who must make a Grit Check to avoid stalking them.",
							"Squashy Defense: All crushing or squashing Attacks, such as fists or clubs, do 1 less Heart of Damage.",
							"Edible: If butchered they provide 3 Units of Hardy Rations.",
							"Grazing: They require an environment of lush grass, fungus, or moss to Graze."
						],
						inventory: [
							"6 Slots with a harness.",
							"Can be really, really, slow Mounts for Small Species. The distance you can cover in one day is halved!"
						],
						fighting: [
							"Nope."
						],
						cost: 20
					},
					fuzzcoil: {
						name: "Fuzzcoil",
						description: "These hairy, serpentine creatures wrap themselves around their owners, keeping out of sight; up sleeves or inside tunics. Their venom can be milked, diluted, and then sold as an anti-aging remedy. While this odd elixir does tighten the skin, the effect is only temporary.",
						stats: [1, 2, 5, 5, 5, 5, 5],
						defense: 13,
						speed: "Fast",
						abilities: [
							"Wearable: The animal will wrap around a part of your body and remain there unless forced or ordered off. Easily mistaken for a harmless pelt by casual observers.",
							"Venom: Anyone bitten must make a successful Grit Check or become Disoriented for 4 Turns. Once poisoned, the afflicted cannot be affected by Fuzzcoil venom for another 24 hours."
						],
						inventory: [
							"1 Slot in their mouth, or coiled in their tail."
						],
						fighting: [
							"Strike like a Concealed Weapon and can make a Sneaky Swipe at a target, if worn or hidden. A successful hit is also venomous."
						],
						cost: 100
					},
					skree: {
						name: "Skree",
						description: "An umbrella term for small flying creatures, covering birds, bats, and moth-like species Quick and intelligent, Skree can be trained to be aerial scouts and messengers.",
						stats: [1, 2, 4, 7, 4, 7, 4],
						defense: 13,
						speed: "Fast",
						abilities: [
							"Fast flyer: When in flight, a Skree is Fast*; when grounded its speed is reduced to Average, and its Defense Rating drops to 11.",
							"Messenger: Skrees can carry messages, or small items, to a location or character that they are familiar with. They will eventually wing their way back to you.",
							"Sky Scout: On a Journey your Skree can act as a Scout with the following differences:",
							"They get an Edge on their Stealth roll, as they are small and airborne. If detected, observers still might not think anything of it.",
							"They can not relay precise information, only indicate if the way ahead has: a serious threat a potential threat, or no threat.",
							"Grazing: They require an open area populated by tiny vermin to Graze."
						],
						inventory: [
							"1 Slot in Talons, or Beak."
						],
						fighting: [
							"Skrees cannot damage targets larger than themselves. but they can flutter and harry your foes providing an Attack Assist."
						],
						cost: 100
					},
					purr: {
						name: "Purr",
						description: "Small, capricious feline creatures that are, at best, casually attached to their owners. While they avoid a fight when possible, their sly interventions can be useful. Most Purrs are covered in colorful fur, though hairless and scaled breeds exist.",
						stats: [0, 2, 4, 8, 4, 8, 4],
						defense: 11,
						abilities: [
							"Slinky: Nimble and acrobatic, Purrs have an Edge on all roils involving climbing, getting to high places, and landing safely.",
							"Occasional Obedience: Purrs are able to understand simple commands like \"Knock that over\" or \"Catch that\", but sometimes they simply don't feel like doing it. You must make a successful Aura Check to instruct your Purr. Once per session, your GM can direct your Purr to act independently, this might prove costly or useful, You must make an Aura Check to stop them.",
							"Grazing: They require an area containing small mammals or vermin to Graze."
						],
						inventory: [
							"Purrs refuse to wear a harness or be used as a Mount. However, they can snatch and carry small items in their teeth."
						],
						fighting: [
							"Purrs cannot damage targets larger than themselves, but they can perform Combat Tricks."
						],
						cost: 75
					}
				},
				mounts: {
					jumbug: {
						name: "Jumbug",
						description: "Giant insectoids with powerful hind legs that rocket them forwards. Notoriously dangerous to ride, these beast's unusual propulsion method them helps traverse the most tortuous terrain. Jumbugs are also famed for the soft chirping sounds they make while settling down, soothing for both owner and beast.",
						stats: [0, 3, 9, 9, 4, 4, 4],
						defense: 15,
						speed: "Fast",
						abilities: [
							"Exoskeleton: Their tough shell boosts their Defense Rating by +4*.",
							"Boing: The Jumbug is capable of Supernatural Leaping. Any jumps attempted during a Fight, or similarly tense situation, require the rider to make a Deftness or Might Check to avoid falling off and being Toppled.",
							"Grazing: They require an environment with plentiful flora or fungus to Graze."
						],
						inventory: [
							"12 Slots with a harness."
						],
						fighting: [
							"Mandibles strike as a Standard Weapon."
						],
						cost: 200
					},
					mokkoDo: {
						name: "Mokko-Do",
						description: "These fluffy, flightless birds are much quicker than they appear. Their speed and reliability has made them one of the most common mounts on Outer World. This popularity has also inspired best of-breed shows, races and other novelty events capable of drawing large crowds. Pedigree specimens, with rich or attractive plumage, will cost twice the market price.",
						stats: [0, 3, 8, 8, 5, 5, 5],
						defense: 11,
						speed: "Fast",
						abilities: [
							"Useful Beak: The Mokko-Do's beak, while unsuitable for combat, is precise enough to grab and hold onto most items that a human could, though using most of them is still beyond the creature.",
							"Mokko-yolk: When Camping on a Journey, females can produce an egg a day, equivalent to 1 Ration, providing the animal is not suffering from Starvation.",
							"Grazing: They require an environment with lots of grass or coarse flora to Graze."
						],
						inventory: [
							"12 Slots with a harness."
						],
						fighting: [
							"Talons strike as Standard Weapons."
						],
						cost: 150
					},
					rokkoDo: {
						name: "Rokko-Do",
						description: "The larger and more fearsome cousin of the Mokko Do, These creatures are difficult to train and prone to bluster, but ultimately fierce and loyal mounts once tamed. Rumors of the flying Black Rokko-do persist despite no recorded sighting for hundreds of years. Highly valued steeds among noble warriors.",
						stats: [2, 4, 9, 9, 9, 5, 5],
						defense: 11,
						speed: "Fast",
						abilities: [
							"One Master: Rokko-Do will become extremely attached to you if you treat them well.",
							"An Aura Check is required to coax them into allowing another person to mount them.",
							"They will refuse to leave you behind if you fall in battle, either dragging your body to safety or standing over you to ward off attackers until help arrives.",
							"Fearlessly Loyal: Rokko-Dos automatically pass Loyalty Checks."
						],
						inventory: [
							"12 Slots with a harness."
						],
						fighting: [
							"Beak and Talons strike as Standard Weapons.",
							"Rokko-Do's are Battle Ready."
						],
						cost: 275
					},
					largzard: {
						name: "Largzard",
						description: "These irrepressible lizards are admired for their ferocity in battle, less so for their servility. The high price reflects the difficult and dangerous process of training ther The legendary flame breathing Crimson Largzard has never been caught, let alone tamed. Used by immense warriors too bulky for standard Mounts.",
						stats: [3, 5, 10, 10, 10, 4, 4],
						defense: 15,
						abilities: [
							"Ravenous: These creatures must consume 2 Units of Rations a day. Failure to do so will prompt the Largzard to attack and kill for food, usually targeting your smaller companions first.",
							"Scutes: Their thick scales provide fortification, boosting their Defense Rating by +6* but making them less nimble than other mounts.",
							"Blood Lust: Directing these violent creatures away from a Fight requires a successful Aura Check Failure means they enter the fray. often carrying you with them."
						],
						inventory: [
							"16 Slots with a harness."
						],
						fighting: [
							"Bite strikes as a Mighty Weapon.",
							"Tail strikes as an Are Weapon.",
							"Largzard's are Battle Ready."
						],
						cost: 500
					}
				},
				packBeasts: {
					shaggyBumpo: {
						name: "Shaggy Bumpo",
						description: "These humongous bovids have a fluffy, charming appearance that behes their rugged frame. Their strength, coupled with a compliant nature, make them perfect beasts of burden. The Bumpo is a paternal animal and will 'adopt unattached youth, which they will then vigorously defend.",
						stats: [0, 4, 10, 3, 10, 3, 3],
						defense: 9,
						abilities: [
							"Shaggy: A Bumpo may be shorn once a year, providing 2 Units of Bumpo Wool (Trade Goods). Their fleece is a great raw material for crafting Cold Weather Outfits.",
							"Bumpo Cream: Females can be milked once a day to produce 2 Ration's worth of cream, providing the animal is not suffering from Starvation.",
							"Grazing: They require an environment with lots of grass or coarse flora to Graze."
						],
						inventory: [
							"20 Slots with harness."
						],
						fighting: [
							"Hooves and Horns strike as if Unarmed, a gentle giant."
						],
						cost: 400
					},
					grubbish: {
						name: "Grubbish",
						description: "Enormous, multi-legged and bulbous; Grubbish are awkward but stable beasts. Having originated in the Mana Wastes, these creatures are extremely resilient, and this has made them popular with travellers and traders that operate in inhospitable locations. Most Grubbish have a simple, mask-like face, but some rare specimens look unnervingly human.",
						stats: [0, 3, 10, 4, 10, 4, 4],
						defense: 9,
						abilities: [
							"Will-less: They are rather dull creatures, and will obey their owner without question. Grubbish never need to make Loyalty Checks.",
							"Iron Guts: Grubbish can eat spoiled or even poisonous food.",
							"Filth dweller: Grubbish are immune to being Putrefied, as well as any ill effects from ingested toxic materials.",
							"Grazing: They can Graze anywhere there is something organic to eat."
						],
						inventory: [
							"20 Slots with harness."
						],
						fighting: [
							"Feelers strike as if Unarmed."
						],
						cost: 435
					}
				},
				soulCompanions: {
					guardianAnimal: {
						name: "Guardian Animal",
						description: "Your four-legged familiar appears normal in shape and size but inherits your colors, or any distinct markings or patterns you wear.",
						stats: [0,2],
						defense: 12,
						speed: "Fast",
						abilities: [
							"Languages: Bright Tongue, Low Speak. Companions will only talk to you unless otherwise requested.",
							"Range: They can exist up to 40 ft away from you. Beyond that range they vanish, only to reappear by your side.",
							"Ailments: They are immune to the direct effect of Aliments, however they suffer the symptoms of any Ailments you contract!",
							"Sustenance: They do not need to eat, breath or rest. They vanish whenever you fall asleep or are rendered unconscious. They disappear forever if you die.",
							"Advancement: When you reach Rank 5 they gain an additional Heart and a new Champion Ability.",
							"Aptitudes: Aptitudes are 2 points lower than your own."
						],
						optAbilities: {
							mount: {
								name: "Mount",
								description: "When required, they can grow in size to carry a rider.",
								mechanics: [
									"Companions are Battle Ready when in Mount form."
								]
							},
							burrower: {
								name: "Burrower",
								description: "They have claw-like digging tools for rapid excavation.",
								mechanics: [
									"They can excavate a PC-sized tunnel through a Battlefield Area's worth of soil each Turn."
								]
							},
							fighter: {
								name: "Fighter",
								description: "They grow fangs, claws or some other natural weapon.",
								mechanics: [
									"They can now Attack as if wielding a Standard Weapon.",
									"Their Attack Bonus is now half yours, rounded down."
								]
							},
							glider: {
								name: "Glider",
								description: "They sprout small, vestigial wings incapable of full flight.",
								mechanics: [
									"They gain Supernatural Leaping."
								]
							}
						},
						inventory: [
							"Inventory Slots: 6",
							"Any carried items are dropped if they vanish for any reason."
						],
						fighting: [
							"Attack: They are not powerful enough to harm foes, but can perform Attack Assists for you or your allies.",
							"Health: At 0 Hearts they puff out of existence, but will return after you've slept and rested."
						]
					},
					braveToy: {
						name: "Brave Toy",
						description: "Your small, mechanical doll is dressed like a knight or soldier. It also sports an emblem of great significance to you.",
						stats: [0,2],
						defense: 14,
						abilities: [
							"Languages: Bright Tongue, Low Speak. Companions will only talk to you unless otherwise requested.",
							"Range: They can exist up to 40 ft away from you. Beyond that range they vanish, only to reappear by your side.",
							"Ailments: They are immune to the direct effect of Aliments, however they suffer the symptoms of any Ailments you contract!",
							"Sustenance: They do not need to eat, breath or rest. They vanish whenever you fall asleep or are rendered unconscious. They disappear forever if you die.",
							"Advancement: When you reach Rank 5 they gain an additional Heart and a new Champion Ability.",
							"Aptitudes: Aptitudes are 2 points lower than your own."
						],
						optAbilities: {
							shielder: {
								name: "Shielder",
								description: "They can defend themselves and others.",
								mechanics: [
									"Once per Fight, they can Parry one Attack made against them, or any allies that in the same Battlefield Area as them, like a Shield.",
									"As if built by Magical Materials, they do not break when blocking a Magical Attack or Ability."
								]
							},
							weaponLink: {
								name: "Weapon Link",
								description: "They can transform and connect to your Heart's Blade for extra impact.",
								mechanics: [
									"Your Companion and your Heart's Blade can combine once per Session to provide either:",
									"A Minor Bonus (+2) to all Attack rolls or...",
									"Deal an additional Heart of Damage on a successful strike."
								]
							},
							booster: {
								name: "Booster",
								description: "They can convert into a jetpack, cling onto your back, and lift you to safety.",
								mechanics: [
									"You gain the power of flight at an Average Speed Rating.",
									"The boost grants enough lift you to reach one visible destination.",
									"During a Fight, your Companion loses a single Heart for each Turn this Ability is in use."
								]
							},
							toter: {
								name: "Toter",
								description: "This chunky toy has a built in backpack.",
								mechanics: [
									"They have 10 Inventory Slots.",
									"During a Fight, they can use their Turn to find and instantly present any item they are carrying."
								]
							}
						},
						inventory: [
							"Inventory Slots: 6",
							"Any carried items are dropped if they vanish for any reason."
						],
						fighting: [
							"Attack: They are not powerful enough to harm foes, but can perform Attack Assists for you or your allies.",
							"Health: At 0 Hearts they puff out of existence, but will return after you've slept and rested."
						]
					}
				}
			},
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
								"At the start of a Fight you can Glare at a single enemy at the start of your Turn.",
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
					name: "Unarmed Weapon",
					threshold: false,
					description: "Desperate situations sometimes call for adventurers to strike out with their bare hands",
					mechanics: [
						"Unarmed strikes suffer a Snag on their Attack roll when directed at armed or armored enemies."
					],
					bulk: 0,
					cost: 0
				},
				standard: {
					name: "Standard Weapon",
					description: "Standard Weapons are simple yet practical death dealing implements with no added frills.",
					threshold: 20,
					mechanics: [
						"Any Calling or Species can use Standard Weapon."
					],
					bulk: 1,
					cost: 10

				},
				concealed: {
					name: "Concealed Weapon",
					description: "Concealed Weapons are usually small so that they can be hidden about your person with ease.",
					threshold: 22,
					mechanics: [
						"Unlike other arms, Concealed Weapons are not immediately visible.",
						"During a Fight, drawing and striking with a Concealed Weapon can be performed in one Action.",
						"Weapon Ability, Sneaky Swipe: If your target isn't aware of your Concealed Weapon you may attempt to Ambush them, even when you are in plain sight.",
						"Your Target must be in the same Battlefield Area as you, but otherwise this attack works like a normal Ambush.",
						"If your Ambush is successful, others using Concealed or Thrown weapons can join in the Ambush."
					],
					bulk: 1,
					cost: 5
				},
				quick: {
					name: "Quick Weapon",
					description: "Quick Weapons are lighter arms that emphasize speed over power. Prized by those who prefer evasive fighting.",
					threshold: 22,
					mechanics: [
						"Weapon Ability, Darting Style: You gain a + 1 to your Defense Rating when using a Quick Weapon."
					],
					bulk: 1,
					cost: 15
				},
				master: {
					name: "Master Weapon",
					description: "These finely crafted weapons are often difficult to use and rather expensive, as such they are favored by the warrior elite",
					threshold: 18,
					mechanics: [
						"Weapon Ability, Perfect Strike: You gain a +1 to your Attack rolls when using a Master Weapon."
					],
					bulk: 2,
					cost: 30
				},
				mighty: {
					name: "Mighty Weapon",
					description: "These heavy weapons require both hands to use. Enjoyed by warriors who wish to quickly dispatch their enemies",
					threshold: 20,
					mechanics: [
						"When wielding one-handed you suffer a Minor Penalty (-2) on Attack rolls, Attack Stunts, & Combat Tricks.",
						"Weapon Ability, Crushing Blow: You do 2 Hearts of damage, instead of 1, on a successful Attack"
					],
					bulk: 2,
					cost: 20
				},
				arc: {
					name: "Arc Weapon",
					description: "Long weapons that allow its wielder to make wide, dangerous strokes that hit several enemies at once.",
					threshold: 20,
					mechanics: [
						"When wielding one-handed you suffer a Minor Penalty (-2) on Attack rolls, Attack Stunts, & Combat Tricks.",
						"Weapon Ability, Deadly Sweep: You can hit two enemies in the same Battlefield Area with one Attack",
						"Make a single Attack roll, and apply the result to both enemies."
					],
					bulk: 3,
					cost: 25
				},
				lash: {
					name: "Lash Weapon",
					description: "Weapons that incorporate a chain or cord, capable of reaching foes a considerable distance away.",
					threshold: 22,
					mechanics: [
						"Weapon Ability, Crack!: You can Attack an enemy up to 1 Battlefield Area away."
					],
					bulk: 1,
					cost: 30
				},
				thrown: {
					name: "Thrown Weapon",
					description: "These small, hand-held weapons are shaped and balanced specifically for throwing. Sneaks love them.",
					threshold: 22,
					mechanics: [
						"Weapon Ability, Hidden Fangs: If your target isn't aware of your Thrown Weapon you may attempt to Ambush them, even when you are in plain sight.",
						"Targets must be in Range, but otherwise this attack works like a normal Ambush.",
						"If your Ambush is successful, others using Concealed or Thrown weapons can join in the Ambush."
					],
					range: 1,
					load: "Loading Time: None, but weapon must be retrieved before reuse.",
					bulk: 1,
					cost: 2
				},
				drawn: {
					name: "Drawn Weapon",
					description: "Drawn Weapons include slingshots, bows, and other projectiles that require you to manually maintain tension.",
					threshold: 20,
					mechanics: [
						"You must use two hands while wielding a Drawn Missile Weapon."
					],
					range: 2,
					load: "Loading Time: These can be both loaded and fired in 1 Action.",
					bulk: 2,
					cost: 10
				},
				smallMissile: {
					name: "Small Mechanical Missile Weapon",
					description: "These compact marvels of engineering let you take a shot while keeping a hand free for other things.",
					threshold: 18,
					mechanics: [
						"You can fire these Weapons with one hand, but must load with two."
					],
					range: 1,
					load: "Loading Time: 1 Action.",
					bulk: 1,
					cost: 15
				},
				largeMissile: {
					name: "Large Mechanical Missile Weapon",
					description: "While more accurate than their smaller cousins, these bombastic weapons are more cumbersome to operate.",
					threshold: 18,
					mechanics: [
						"You must use two hands to load and fire these Weapons.",
						"Weapon Ability, Thunderous Shot: You gain a +2 to your Attack roll."
					],
					range: 2,
					load: "Loading Time: 1 Action",
					bulk: 2,
					cost: 25
				},
			},
			armors: {
				naked: {
					name: "Naked",
					bonus: 0,
					description: "If you are un-armored, either nude or wearing regular clothes, you are considered naked in combat.",
					bulk: 0,
					cost: 0
				},
				light: {
					name: "Light Armor",
					bonus: 2,
					description: "Armor that prioritizes speed over defensive performance, and covers only the most vital points on your body.",
					bulk: 2,
					cost: 30
				},
				medium: {
					name: "Medium Armor",
					bonus: 4,
					description: "Robust armor that provides good protection without heavily compromising your freedom of movement.",
					bulk: 3,
					cost: 60
				},
				heavy: {
					name: "Heavy Armor",
					bonus: 6,
					description: "Thick, durable armor that provides strong protection for most of your body, at the expense of combat mobility.",
					bulk: 4,
					cost: 120
				},
				superHeavy: {
					name: "Super Heavy Armor",
					bonus: 8,
					description: "A weighty protective shell that encases your entire body, but considerably restricts your maximum speed.",
					bulk: 5,
					cost: 600
				},
			},
			shields: {
				small: {
					name: "Small Shield",
					bonus: 0,
					description: "Favored by fighters who want to use equip hands, Small Shields are worn on your arm rather than held.",
					mechanics: [
						"You can Parry 1 Melee Attack per Fight.",
						"You may still use both hands when equipped with a Small Shield."
					],
					bulk: 1,
					cost: 15
				},
				medium: {
					name: "Standard Shield",
					bonus: 1,
					description: "The most common shields are sturdy pieces of wood or metal that are held in place by a grip or strap along its back side.",
					mechanics: [
						"You can Parry 1 Melee or Missile Attack per Fight. This includes spells or any special attacks that require an Attack roll.",
						"Standard Shields require one hand to use, so they affect your ability to use two-handed weapons."
					],
					bulk: 1,
					cost: 25
				},
				large: {
					name: "Large Shield",
					bonus: 2,
					description: "Enormous bulwarks that are large enough to obscure their bearer completely. Effective but large and difficult to carry.",
					mechanics: [
						"You can Parry 1 Melee or Missile Attack per Fight. This includes spells or any special attacks that require an Attack roll.",
						"Large Shields require one hand to use, so they affect your ability to use two-handed weapons",
						"Your Speed Rating is reduced by one step during a Fight."
					],
					bulk: 2,
					cost: 35
				},
			},
			customWeaponTypes: {
				combination: {
					name: "Combination",
					description: "Combination merges the benefits of two Weapon Types, making them difficult and expensive to forge.",
					mechanics: [
						"Combination Weapons inherit the properties of their two constituent weapons in the following way:",
						"The Weapon Abilities of both.",
						"The usage restrictions of both.",
						"Take up the Inventory Slots from the largest of the two weapons.",
						"The Extra Damage of the most effective weapon.",
						"For example, a Master Arc Combination Weapon would gain a +1 to Attack rolls (Master), be able to target two foes in the same area (Arc), and require both hands to use without penalty (Arc), and take up 3 Inventory Slots (Arc).",
						"If any Missile and Melee Weapon Types are combined, you must choose which mode of attack you are using for your Action (ie: Melee or Missile).",
						"These weapon's only benefit from Missile Weapon Abilities when making Missile attacks.",
						"These weapon's only benefit from Melee Weapon Abilities when making Melee attacks.",
						"The Extra Damage value used is taken from the base weapon appropriate to your chosen mode of attack.",
						"NOTE: Concealed and Thrown Weapons can only combined with each other, due to their comparably small size.",
						"NOTE: Combining two weapons that each have an inherent Weapon Ability will take you to the 3 Ability limit.",
						"NOTE: Your GM may deem some combinations impossible, common sense should be the guide."
					],
					cost: "(Price of Weapon Type 1 + Weapon Type 2) x2",
				},
				shoddy: {
					name: "Shoddy",
					description: "Hastily and carelessly made, these weapons are easy on the purse but unreliable in battle.",
					mechanics: [
						"These weapons are Sundered when you get an unmodified 1 or 2 on your Attack roll."
					],
					cost: "(Weapon Price + Custom Ability Costs, if any) / 2 (rounded up)"
				},
				disguised: {
					name: "Disguised",
					description: "The weapon appears like a walking stick, jewelry, or other harmless item until carefully inspected or used.",
					mechanics: [
						"Discerning this weapon's real function requires a mistrustful person to make a successful Insight Check."
					],
					cost: "Weapon Price + 5"
				},
				dangerous: {
					name: "Dangerous",
					description: "While all weapons are inherently harmful, these weapons are made to inflict maximum damage at the expense of the wielder's safety.",
					mechanics: [
						"NOTE: Available for Melee Weapons only.",
						"Dangerous weapons reduce the weapon's Extra Damage value by 2.",
						"You take 1 Heart of Damagewhenever you get an unmodified 1or 2 on your Attack roll.",
					],
					cost: "Weapon Price + 10"
				},
				utility: {
					name: "Utility",
					description: "This allows a weapon to also function as a simple tool. For example, a Fishing Rod Spear or a Shovel Sword.",
					mechanics: [
						"You can combine a weapon with a tool that falls under the Adventuring Gear, Common Rural Goods, Common Urban Goods, or Oddities & Luxury Items.",
						"Utility weapons take up as many Inventory Slots as the largest of its two components.",
						"Your GM may deem some combinations impossible, common sense should be the guide."
					],
					cost: "Weapon Price + Tool Price + 5"
				},
				secretCompartment: {
					name: "Secret Compartment",
					description: "A small gadget, or hidden cavity, can be incorporated into the pommel, grip or guard of a weapon.",
					mechanics: [
						"A Secret Compartment allows you to stow a small item like one dose of a consumable, a gem, or a folded treasure map.",
						"If you opt to add a gadget, it must be small enough to be incorporated into the weapon, for example a compass on the pommel of a cutlass."
					],
					cost: "Weapon Price + 5"
				},
				rapidFire: {
					name: "Rapid Fire",
					description: "Reloading Mechanical Missile weapons in the middle of combat is an onerous task. This technological advancement reduces the need to do it quite so often.",
					mechanics: [
						"NOTE: Only available for Large and Small Mechanical Missile Weapons",
						"Rapid Fire weapons may be fired 3 times before they need to be reloaded, which still takes a 1 Action."
					],
					cost: "Weapon Price x10"
				},
				specialAmmo: {
					name: "Special Ammunition",
					description: "Special Ammunition provides ranged weapons with more tactical options. They enable you to create distractions, signal for help, or simply do more harm.",
					mechanics: [
						"NOTE: lable for Missile Weapons only",
						"Fireberry Shot: These do Flame Damage instead of Mundane Damage. Your GM may also allow other types of Special Damage may also be available.",
						"Flare: Ammunition that creates a lingering and visually impressive effect, such as bright light, when shot. Ineffective as a weapon but a good signal.",
						"Heavy: A large, clumsy shot that incurs a Major Penalty (-4) on your Attack roll when used, but does an +1 Heart of Damage on a successful hit.",
						"Whistling: Ammunition that makes ear-splitting scream when fired Anyone in earshot must make a successful Insight Check or be Deafened (+ p2681 on their next Turn.",
						"NOTE: Just like regular ammunition, these variants are expended after use."
					],
					cost: "Ammo Price ×2"
				}
			},
			customArmorTypes: {
				antiHazard: {
					name: "Anti-Hazard",
					description: "This armor protects you from harmful gasses, magical radiation, or extreme environments. These suits are also hermetically sealed with systerns that purify the air and regulate temperature.",
					mechanics: [
						"You are immune to the Harmful Battlefield Condition and any other dangerous environmental effects.",
						"Also functions as Extreme Weather Clothing protecting you from both heat and cold."
					],
					cost: "Armor Price + 100"
				},
				bouyant: {
					name: "Bouyant",
					description: "Fitted with inflatable air bags, this armor prevents you from sinking in water.",
					mechanics: [
						"You are exempt from any Checks or Contests your GM might require you to make attempting to stay afloat when wearing the armor.",
						"Deliberately trying to submerge in the armor is problematic and requires a, Might Check."
					],
					cost: "Armor Price + 50"
				},
				integrated: {
					name: "Integrated",
					description: "This armor has a weapon or tool built into one of the arms.",
					mechanics: [
						"A weapon or tool can be fitted to the armor's right or left arm.",
						"Integrated items are limited to those that you could use with one hand. For example, you cannot install a Large Mechanical Missile Weapon as it requires two hands to operate.",
						"Integrated weapons do not have to be drawn, they are always ready to use.",
						"Using an integrated item does not require your hand to use, enabling you to carry an additional item. For example, an integrated lantern will allow you to still carry a shield and a sword.",
						"NOTE: An integrated item does not grant you an additional Action and you must choose to use the integrated item, if it normally requires an Action to use, or the item you are holding in your hand."
					],
					cost: "Armor Price +50"
				},
				spiked: {
					name: "Spiked",
					description: "The ostentatious spikes that cover this Armor are more than decoration. The wearer is harder to grab or swallow, endearing it to titan hunters all over the Outer World.",
					mechanics: [
						"Any creature attempting to grab, squeeze, swallow or otherwise smash against you takes 1 Heart of Damage while doing so.",
						"Your Unarmed attacks now strike as a Standard Weapon."
					],
					cost: "Armor Price +75"
				},
				cargo: {
					name: "Cargo",
					description: "This armor has a built in storage space in a chest or back cavity to protect valuable, or easily damaged, items.",
					mechanics: [
						"The armor provides you with an additional 3 Inventory Slots.",
						"Any stowed items are protected from water, fire, and other physical trauma.",
						"If the armor is destroyed whatever is stored inside will fall out."
					],
					cost: "Armor Price +15"
				},
				magnificent: {
					name: "Magnificent",
					description: "This armor is a work of art, either gilded in gems or sculpted like a fearsome beast.",
					mechanics: [
						"This armor comes with a closed helmet, that when worn, provides you gives you an Aura of 12, or 14 for more expensive versions.",
						"You can use your armor's Aura in place of your own for Checks and Contests where an impressive physical appearance is a factor."
					],
					cost: "Aura 12: Armor Price +25; Aura 14: Armor Price +50"
				},
				shadowed: {
					name: "Shadowed",
					description: "This armor is engineered to avoid noisy movement, and colored to help it blend into the shadows. Heavy duty protection need not come at the expense of stealth.",
					mechanics: [
						"This armor provides a Minor Bonus(+2) when you are:",
						"Making rolls to hide in shadow.",
						"Attempting Stealthily Movement.",
						"Attempting an Ambush."
					],
					cost: "Armor Price +15"
				},
				mechanical: {
					name: "Mechanical Motion",
					description: "A system of levers, pistons, gears, and chains allow this armor to move under it's own power. Warriors pilot these oversized suits rather than wear them.",
					mechanics: [
						"NOTE: , Only available for Heavy and Superheavy Armor.",
						"Despite size the usual restriction, Small Species can use Heavy and Superheavy Armor without penalty if fitted with Mechanical Motion.",
						"It takes an hour to adiust the armor to a pilot's measurements. It will need to be adjusted again if a different pilot wants to use it.",
						"Mechanical Motion provides:",
						"+2 to your Might Aptitude.",
						"Supernatural Might",
						"+1 to your Heart Total.",
						"The ability to use combat gear as if a Large Species.",
						"NOTE: This armor requires routine maintenance or it will lock up. Your GM will determine when maintenance is required, usually after five or so Fights or a long arduous Journey. Maintenance requires an evening and a single use of a Gadgeteer Kit by someone with the Gadeteering Crafting Discipline. Failure to do so will result in a Snag on all actions attempted while wearing the armor."
					],
					cost: "Armor Price x10"
				}
			},
			customShieldTypes: {
				assault: {
					name: "Assault",
					description: "These shields are spiked, have a sharp edge, or are otherwise weaponized.",
					mechanics: [
						"NOTE: Only available for Standard Shields",
						"During a Fight, at the beginning of your Turn, you can choose to wield this shield as a Standard Weapon. Doing so means:",
						"You will not benefit from the Shield's Defense Bonus on your opponent's next Turn.",
						"You can still use it to Parry.",
						"If you miss, you can Attack with another held weapon as if Dual-Wielding."
					],
					cost: "Shield Price +20"
				},
				barricade: {
					name: "Barricade",
					description: "Immense bulwarks that can be propped up and used as cover, Popular with wielders of ranged weapons with slow reload times.",
					mechanics: [
						"NOTE: Only available for Large Shields",
						"Thanks to a kickstand, or other stabilizing device, this Shield can stand on its own. You can set it down and take cover behind it.",
						"While behind cover:",
						"The Shield will automatically Parry all Missile attacks directed at you.",
						"You can make Missile attacks from behind the Shield and still benefit from its Defense Bonus.",
						"You cannot Parry Melee attacks.",
						"You do not receive the Shield's Defense Bonus for Melee Attacks.",
						"Setting down or picking up the Shield does not require an Action, allowing you to Move and take Actions normally on your Turn."
					],
					cost: "Shield Price ×20"
				}
			},
			quirks: {
				spirit: {
					unhinged: {
						name: "Unhinged",
						description: "Inflicting grievous harm on others doesn't seem to bother you, in fact you quite enjoy it. Perhaps it was your unaffectionate mother or traumatic past event that is to blame for this unrelenting bloodlust.",
						advantages: [
							"You gain +2 to your Attack Bonus, you are vigorously violent."
						],
						disadvantages: [
							"Your suffer a -1 to your Defense Rating, your enthusiastic commitment to causing harm leaves you vulnerable to attack."
						]
					},
					jumpy: {
						name: "Jumpy",
						description: "You are jittery, skittish or paranoid. This means that while you spot potential dangers sooner than most, your nervous outbursts can telegraph your approach to enemies",
						advantages: [
							"Your Team gains an Edge on all Insight rolls related to checking for danger."
						],
						disadvantages: [
							"Your Team suffers a Snag on Deftness rolls when it is attempting an Ambush."
						]
					},
					pedantic: {
						name: "Pedantic",
						description: "You are well read, and you make sure everyone knows it. While your extensive knowledge and attention to detail comes in handy, it can be grating for those around you. Woe betide those that fail to heed your advice, as they will suffer a healthy dose of 'I told you so'",
						advantages: [
							"You gain an Edge on Insight rolls when attempting to research or recall information."
						],
						disadvantages: [
							"You suffer a Snag when making Aura rolls when trying to Negotiate or impress someone."
						]
					},
					clearIntent: {
						name: "Clear Intent",
						description: "Despite attempts to hide it, your true intentions are always apparent because of your revealing body language and tone of voice. This is great when getting your point across, but it makes you a terrible liar.",
						advantages: [
							"You can communicate simple, one sentence ideas or commands without the need to speak Helpful when you need to keep silent or are interacting with someone who doesn't speak your language"
						],
						disadvantages: [
							"You have a Snag when attempting to lie to someone. You are betrayed by your expressions and gestures."
						]
					},
					boring: {
						name: "Boring",
						description: "You are unremarkable. You're difficult to notice and easy to forget, and while you may not be recognized for you successes, at least you avoid being defined by your failures",
						advantages: [
							"An insight Check is required when someone is trying to recall if you were present at event or situation. unless you were the only one there!"
						],
						disadvantages: [
							"If you are placed at the scene, your actions will be attributed to another, including any positive or heroic deeds you performed."
						]
					},
					curious: {
						name: "Curious",
						description: "The world is a dangerous yet wondrous place and you want to see it all. Unless restrained or strenuously cautioned, you will inadvertently explore your surroundings, haphazardly poking around",
						advantages: [
							"Whenever entering a new room or small area. you can opt to use this Quirk to immediately discover a single hidden thing, if it exists. For example, a secret door or treasure."
						],
						disadvantages: [
							"Using this Quirk while exploring a room with a trap, or other triggered event, means you set it off without a chance to avoid or stop it."
						]
					},
					alwaysPrepared: {
						name: "Always Prepared",
						description: "You carry a plethora of unusual items with you. While everyone you travel with is pleased when you got just the right tool to hand, your vast collection can sometimes spill out at exactly the wrong moment",
						advantages: [
							"Once per game Session, you may 'have' any single item you require. The item must be worth less than 45 Coins and be no larger than a single inventory Slot."
						],
						disadvantages: [
							"Whenever you roll an unmodified 20 on a Deftness Check random assorted junk spills everywhere and complicates the situation. Your GM will decide exactly how!"
						]
					},
					stylish: {
						name: "Stylish",
						description: "Your innate sense of style and panache means you are always on the cutting edge of fashion. Whether your attire is practical or for a special occasion, you always dress to impress",
						advantages: [
							"You gain an Edge on Aura rolls where your appearance is a factor."
						],
						disadvantages: [
							"You always buy the best. You must spend at least 50% more on any clothing, armor, or other accessories... or lose your style advantage",
							"NOTE: If you want to wear something you've been given, or found, you'll still need to spend the additional money to get it adorned, gilded, or modified to suit your demanding aesthetic requirements"
						]
					},
					miser: {
						name: "Miser",
						description: "The draw of material wealth is almost overwhelming for you. Precious metals gems, works of art. and even fine clothes; you love it all. Find it, grab it, hoard it",
						advantages: [
							"You are supernaturally aware of any concentration of valuables. Temptations range from a stockpile of gold to a walk in closet filled with exquisite garments",
							"The valuables must have a net worth of 5 Gems and be within 300 feet for you to detect their presence.",
							"You are able to sense the direction in which the valuables are located."
						],
						disadvantages: [
							"If you are close enough to a qualifying treasure horde, you must make an Aura Check to resist the urge to find and plunder from it."
						]
					},
					soulLink: {
						name: "Soul Link",
						description: "You are able to connect your heart and mind with another. However, when not linked to another, your supernatural empathy crowds your mind with a cacophony of ambient emotions.",
						advantages: [
							"You may choose a single, willing person to Link with.",
							"You must be close enough to touch someone in order to establish a Link with them.",
							"Once Linked, you can share thoughts and feelings with each other no matter how much distance comes between you.",
							"You may terminate, or switch, who you are Linked to at any time."
						],
						disadvantages: [
							"When not Linked to another, all Checks and Contest rolls suffer a Minor Penalty (+2]. Your receptive mind is distracted by the stream of other's thoughts."
						]
					},
				},
				physical: {
					girthsome: {
						name: "Girthsome",
						description: "You're a robust specimen; muscular, fat, or bulky in some way. Your ample body can soak up more punishment than most, but it also slows you down.",
						advantages: [
							"You gain +1 to your Hearts Total",
							"You gain + 1 to your Grit."
						],
						disadvantages: [
							"Your Speed Rating is reduced by a single step."
						]
					},
					nearsighted: {
						name: "Nearsighted",
						description: "Years of staring at old books in dim light has strained your eyes As a result you are extremely well read but now you require a pair of spectacles to see properly.",
						advantages: [
							"You start with a pair of spectacles, these do not take up one of your Inventory Slots.",
							"You gain +1 to your insight.",
							"You gain 2 additional Bonus Languages of your choice"
						],
						disadvantages: [
							"Without your glasses you suffer a Snag on all rolis that are dependent on sight."
						]
					},
					adorable: {
						name: "Adorable",
						description: "You are childlike, cute, or otherwise innocent looking. This makes you incredibly disarming and easy to agree with, but also considerably less threatening.",
						advantages: [
							"You gain an Edge on Aura rolis when attempting to charm, or convince others of your relative harmlessness."
						],
						disadvantages: [
							"You incur a Snag on Aura rolls when attempting to intimidate or impress."
						]
					},
					darkDemeanor: {
						name: "Dark Demeanor",
						description: "You carry yourself in a way that suggests nefarious intent, even if you don't harbor such thoughts. You have shifty looking eyes and probably dress in black.",
						advantages: [
							"At first glance, wicked creatures will presume you are a potential ally."
						],
						disadvantages: [
							"Conversely, those favoring law and order will distrust you, and are quick to blame you for ill deeds.",
							"NOTE: Your demeanor will be dispelled if others witness you perform good deeds or others provide substantial evidence of your true nature."
						]
					},
					angelicCountenance: {
						name: "Angelic Countenance",
						description: "A guileless smile and soothing voice project an aura of heavenly innocence. Your saintly air persists even when you harbor ill intent.",
						advantages: [
							"At first glance, benevolent individuals will assume you are trustworthy and pass you over for blame. They are also willing to accept your more believable lies"
						],
						disadvantages: [
							"Villainous types will assume you're out to get them. Maybe they should get rid of you before you cause any trouble for them.",
							"NOTE: The effect is negated if you are witnessed acting contrary to your angelic appearance."
						]
					},
					bigEater: {
						name: "Big Eater",
						description: "A fast metabolism, or a lifetime of plenty. has increased your appetite exponentially. While your grocery bill is high, your love of eating invigorates you.",
						advantages: [
							"During a Fight you can use your Action to inhale a day's worth of Rations to restore 1 lost Heart.",
						],
						disadvantages: [
							"You need to eat double the amount of required Rations for each day spent on a Journey."
						]
					},
					waifish: {
						name: "Waifish",
						description: "You are lean, scrawny, or otherwise lacking in substance. While this has made you extremely light on your feet it has, unfortunately, also made you prone to injury.",
						advantages: [
							"Your Speed Rating is increased by a single step.",
							"You gain +1 to your Deftness."
						],
						disadvantages: [
							"Your suffer -1 to your Hearts Total"
						]
					},
					magitechGraft: {
						name: "Magitech Graft",
						description: "Severe injury usually results in hardship for survivors, but you have been fitted with a Prosthetic Replacement. Once commonplace in the 3rd Aeon, these magitech grafts are now extremely rare... lucky you!",
						advantages: [
							"Change to one of the following Robotic Quirks:",
							"Utility Servo",
							"Sproing Sprockets",
							"Nox-Vision"
						],
						disadvantages: [
							"Any Injuries to your graft will not heal naturally and will require Bio-Mechanoid Treatment"
						]
					},
					winged: {
						name: "Winged",
						description: "You have large, feathered wings. While you cannot soar, you can glide or get extra lift when you jump. Some think you may be the spawn of a Deva, others the target of a wizard's practical joke.",
						advantages: [
							"You gain Supernatural Leaping",
							"You can glide safely down to earth from great heights without risk.",
							"If falling. or knocked from the sky. you can avoid an Impact Injury with a successful Deftness Check to slow your decent."
						],
						disadvantages: [
							"Your suffer -1 to your Hearts Total, you have pneumatized bones.",
							"You suffer - 1 to your Grit Aptitude, carrying wings is tiresome",
							"NOTE: If you receive an Injury that targets your arms you can choose to have it affect your wings instead.",
							"NOTE: You can't benefit from your wings if: • They are Injured or Restrained. • You are Overburdened. • You are wearing Heavy or Superheavy Armor."
						]
					},
					graspingTresses: {
						name: "Grasping Tresses",
						description: "Your hair is extremely long and writhes like a living creature. Your prehensile locks mostly cooperate with you, but occasionally exhibit a will of their own.",
						advantages: [
							"Your hair may act as an additional set of arms that can grab, manipulate, and attack. During a Fight your hair can:",
							"Hold on to things to create an advantage, For example, holding a lamp in addition to your sword and shield or clinging to a ledge while you fire your bow.",
							"Be used to perform Actions and Attacks instead, not as well as, your arms. Your hair can perform any task your regular arms could"
						],
						disadvantages: [
							"You have a Snag on any Deftness rolls involving the use of your legs.",
							"NOTE: You can cut your hair, but it grows back within minutes in a restless and irritable mood."
						]
					},
				},
				fate: {
					survivor: {
						name: "Survivor",
						description: "You've suffered many trials and ordeals in the past and lived to tell the tale. You know the punishment your body can take and no longer fear physical injury as much as you should, knowing you'll be able to bounce back in no time.",
						advantages: [
							"You heal 2 Injuries, instead of the usual 1, when you choose to Heal an injury during Downtime."
						],
						disadvantages: [
							"You suffer a Snag on all Deftness rolls related to avoiding injury, why get out of harm's way when you mend so quickly?"
						]
					},
					mageBreaker: {
						name: "Mage Breaker",
						description: "Every fibre of your soul seems to lash out and reject the magical or supernatural. This is great when shielding you from curses, but less desirable when negating blessings.",
						advantages: [
							"Any magical Ability directed at you is nullified if you make an Aura Check, or win an Aura Contest if you're targeted by a spellcaster."
						],
						disadvantages: [
							"You might nullify all magic that target's you, even those intended to help you and your own spells!",
							"Magical Artifacts you attempt to use might also be nullified.",
							"NOTE: This ability does not stop you from using your own magic on others.",
							"Persistent magic effects or Artifact Abilities resume once you leave the area of effect."
						]
					},
					young: {
						name: "Young",
						description: "You are significantly younger than the average adventurer, barely in your teens. You've not had your growth spurt yet, but that's not gonna stop you!",
						advantages: [
							"If you are a Medium or Large Species your size is reduced by one step",
							"If you are a Small Species you gain the Adorable Quirk.",
							"NOTE: Should you survive to adulthood, the Quirk is removed."
						]
					},
					pastInjury: {
						name: "Past Injury",
						description: "A traumatic incident has left you with a distinctive gash on your chest, a missing eye, or similar indelible scar. This nagging injury reminds you to be cautious.",
						advantages: [
							"You gain +1 to your Defense Rating due to your caution",
							"NOTE: This benefit is lost if you aren't aware of the Attack."
						],
						disadvantages: [
							"You suffer - 1 to an Aptitude related to an injury of your choice. For example, a leg wound might reduce you Deftness.",
							"NOTE: If your Injury is removed your Quirk is also removed."
						]
					},
					wearyScarred: {
						name: "Weary (Scarred Soul)",
						description: "You are much older than your peers, or simply worn down thanks to years of struggle or hardship. While no longer in your physical prime, your experience is useful.",
						advantages: [
							"A scarred soul: You gain +1 to your Attack Bonus",
							"You also possess a trusty weapon. This weapon can be of any Type, except for Combination or imbued",
							"Walker of two paths: You choose, or roll, for an additional History from your Homeland."
						],
						disadvantages: [
							"Your suffer -1 Might and -1 Grit."
						]
					},
					wearyWalker: {
						name: "Weary (Walker of Two Paths)",
						description: "You are much older than your peers, or simply worn down thanks to years of struggle or hardship. While no longer in your physical prime, your experience is useful.",
						advantages: [
							"Walker of two paths: You choose, or roll, for an additional History from your Homeland."
						],
						disadvantages: [
							"Your suffer -1 Might and -1 Grit."
						]
					},
					destined: {
						name: "Destined",
						description: "You are the plaything of whimsical cosmic forces. Sometimes these forces intervene to help you, other times they seek to hinder.",
						advantages: [
							"You can grant yourself an Edge for any single roll once per game Session."
						],
						disadvantages: [
							"Your GM can give you a Snag for a single roll once per game Session, but cannot use it to counter a roll you've already chosen to grant an Edge to."
						]
					},
					dreadOrator: {
						name: "Dread Orator",
						description: "Once per day you can place your hand on a corpse that's less than a day old, and ask it two questions which it will answer truthfully.",
						advantages: [
							"Once per day you can place your hand on a corpse that's less than a day old, and ask it two questions which it will answer truthfully."
						],
						disadvantages: [
							"If you fail an Aura Check the spirit of the corpse remains with you for a week and a day. During this period, it speaks to you in your sleep and you suffer the effects of Fatigue (+ p269). However, the spirt may continue to impart useful information to you during it's protracted stay"
						]
					},
					beastTongue: {
						name: "Beast Tongue",
						description: "You've been able to speak with animals since you were small. Though the wildlife tends to be a bit simple minded, they can be a useful source of information.",
						advantages: [
							"You can talk with one of the following creature categories; bird, mammal, reptile, insect, or aquatic.",
							"Animals give simple responses and do not understand complicated concepts or vocabulary."
						],
						disadvantages: [
							"You cannot be unduly cruel to animals, or eat animal flesh of any kind, doing so will remove the Quirk",
							"NOTE: The Ability can be regained by completing a task designated to you by the ruler of the offended animal's kingdom."
						]
					},
					guardian: {
						name: "Guardian",
						description: "You are an overly protective type and must defend another, it could be someone you've grown up with or a random person you've latched on to. Regardless, your devotion is unequivocal.",
						advantages: [
							"You must choose a member of your Team to be your ward, a character you've become overly protective of.",
							"You can sense when your ward is in any kind of mortal peril.",
							"You know what direction to go in order to find them, regardless of how much distance separates you."
						],
						disadvantages: [
							"You are incapable of abandoning your ward while they are alive.",
							"If your ward is in desperate danger you must seek them out or you will be so worried you will not be able to sleep and suffer Fatigue.",
							"NOTE: If this character dies your Quirk becomes inactive. You may reactivate this Quirk by choosing another character you have Social Bond with to become your ward."
						]
					},
					crowned: {
						name: "Crowned",
						description: "As a child you assisted a kindly Fairy, who bestowed upon you a grand title. While this prestige is entirely unrecognized among conventional nobility, and may even invite ridicule, immortals treat you with due respect. Titles include, but are not limited to: Queen of Unfinished Songs, Prince of Grass, Our Lady of Chocolate, and Eari of Lost Buttons.",
						advantages: [
							"Your status is honored by Asura Devas, Unshaped, Elves, and other immortal entities. Usually this means little more than polite hospitality and invitations to private functions, but your GM can extend your influence beyond this."
						],
						disadvantages: [
							"Mortals aware of your 'noble' status find it hard to take you seriously. You suffer a Snag on any Aura Checks or Contests when attempting to impress, intimidate, or persuade someone who knows."
						]
					},
				},
				eldritch: {
					dreamer: {
						name: "Dreamer",
						description: "Your mind is often in places that do not properly exist. thinking of things that could be instead of what is. To you reality seems more flexible.",
						advantages: [
							"Once per game Session you can propose and agree with your GM an event that gets you out of a tricky predicament. For exampie, an unexpected rock fall that cuts off your pursuers."
						],
						disadvantages: [
							"In a game Session where you have invoked this Quirk your GM can have your adversaries benefit from a similar improbable event to negate an advantage you possess."
						]
					},
					lyrical: {
						name: "Lyrical",
						description: "You speak in rhymes or verse when there is no reason to. Strangely, when your choice of words flows smoothly success seems more likely, yet stumble and ill fortune awaits.",
						advantages: [
							"When you describe your Actions in rhyme, you gain an Edge on any required rolls, but...",
							"You cannot repeat a rhyme you have already used and must not delay the game longer than 30 seconds when creating a rhyme."
						],
						disadvantages: [
							"If you cannot word your Actions in rhyme, you suffer a Snag on any required rolls.",
							"NOTE: At the start of a game Session you can opt to have a day off, and ignore the Quirk until you are feeling more poetic."
						]
					},
					infested: {
						name: "Infested",
						description: "You are crawling with insects, the residue of a slain Asura, or something equally terrible. The infestation has a vested interest in your survival and employs strange methods to ensure it.",
						advantages: [
							"When you choose to Heal an Injury during Downtime, your 'Friends' can repair a single Injury you've sustained, including the regeneration of destroyed limbs or other mutilated body parts."
						],
						disadvantages: [
							"You must consume twice as much food as normal to satisfy your own hunger and that of the infestation.",
							"When Starving, the creatures are visible beneath your skin, which can be unsettling to those that notice."
						]
					},
					peculiarTaste: {
						name: "Peculiar Taste",
						description: "You have acquired, or were born with, an unusual source of nourishment. While you only need to consume a tiny portion of 'food' to survive, you'll starve just the same if you don't eat.",
						advantages: [
							"You must choose an alternative source of nourishment. This could be a specific type of object, such as coins or buttons, or something organic but not normally eaten, like a hair or teeth.",
							"You any need to eat a single piece. of your peculiar food per day to sustain you."
						],
						disadvantages: [
							"You are unable to stomach Rations and other regular food, but can drink water, alcohol, and potions with no ill effect.",
							"NOTE: You suffer Starvation if deprived of your peculiar food."
						]
					},
					kinToFire: {
						name: "Kin to Fire",
						description: "The spirits within the flames speak to you in whispers that no one else can hear. You can talk back, though this makes the water spirits grow jealous and spiteful.",
						advantages: [
							"You can converse with burning flame. Fires are not smart, but are observant.",
							"With a successful Aura Check you can prompt flames to perform simple favors. For example, reluctantly dim or set fire to something within reach; but they won't do anything that risks them being extinguished."
						],
						disadvantages: [
							"Water is less fond of you. You can hold your breath underwater for only a quarter, rather than the usual half your Grit Aptitude (rounded down) before Suffocating.",
							"You suffer a Snag on all rolls when attemping to swim, sail, or otherwise traverse a body of water."
						]
					},
					fairyCap: {
						name: "Fairy Cap",
						description: "You have a wonderful little hat, but can't quite remember where you got it. Others think it looks a bit strange, but you like it just the way it is. You never want to take it off... ever!",
						advantages: [
							"Most of the time your Cap sticks strangely to your head. but... occasionally, at your GM's discretion, you might need to make a Deftness Check to keep it in place!",
							"If the Cap is dislodged fate makes sure you are able to reclaim it; but it may require a little time and effort.",
							"You gain +1 to your Defense Rating when wearing your Cap, it makes the world feel a bit safer."
						],
						disadvantages: [
							"Your lose an extra Heart every time you take Damage from an Attack or other ill effect when not wearing your Cap, you feel weak and afraid."
						]
					},
					sneezles: {
						name: "Sneezles",
						description: "You have a non-conventional allergy that never fails to cause a brief, albeit violent sneezing fit. It's like a sort of early warning system.",
						advantages: [
							"You can choose what causes your sneezing fits, it could be a type of creature or substance. Discuss and agree your allergen with your GM.",
							"If you within a hundred and fifty feet of your chosen allergen, you sneeze loudly a few times and then abruptly stop."
						],
						disadvantages: [
							"The sneezing fits are alarmingly loud and will alert anyone within earshot to your presence."
						]
					},
					masked: {
						name: "Masked",
						description: "You can change your physical appearance at will. Over the years you've taken many form, if you ever had a 'true' face, you've long forgotten it.",
						advantages: [
							"You can alter your facial features, skin, hair, build, and sex in an instant.",
							"You must maintain something close to your current height and weight and cannot mimic other species"
						],
						disadvantages: [
							"You suffer a Snag on Checks and Contests when resisting effects that alter your body, such as the Petrification, Ballooned, or Jellyfied Ailments. Your malleable form is vulnerable to forced change."
						]
					},
					ferrous: {
						name: "Ferrous",
						description: "Your skin has an iron-like quality, weapons clang and spark when they strike you. Your heart is just as cold and hard. You are physical and emotional fortress",
						advantages: [
							"Your naked Defense Rating is 14"
						],
						disadvantages: [
							"The Armor you can wear without penalty is limited to Light Armor.",
							"You suffer a Snag when attempting to do anything where excessive body mass is a limiting factor.",
							"Your suffer a Minor Penalty (+2) on all Aura rolls related to charm or persuasion, due to your hard heart."
						]
					},
					figmentFollower: {
						name: "Figment Follower",
						description: "Sometimes, when you wake up. you are accompanied by your imaginary pet. Strangely this pet seems just as real to others as it does to you.",
						advantages: [
							"You can choose any Pet to be your Figment Follower.",
							"Your Pet has an ethereal shimmer and speaks one of your languages",
							"Every time you wake up you roll to see if your Pet has manifested",
							"Your Pet will vanish if you sleep, fall unconscious or die",
							"Even if killed, captured, or lost your Pet may reappear after a good sleep."
						],
						disadvantages: [
							"Your Pet is not always there.",
							"Roll to see if your Pet appears today:",
							"(1-14) Pet appears in good health",
							"(15-20) No Pet, try again tomarrow"
						]
					}
				},
				robotic: {
					industrialFrame: {
						name: "Industrial Frame",
						description: "Your robotic skeleton is made of super dense alloy, this increases your durability and strength without increasing your size, However, the extra weight does slow you.",
						advantages: [
							"You gain +1 to your Hearts Total.",
							"You gain + 1 to your Might."
						],
						disadvantages: [
							"Your Speed Rating reduced by a single step.",
							"You suffer a Snag when attempting to do anything where excessive body mass is a limiting factor."
						]
					},
					utilityServo: {
						name: "Utility Servo",
						description: "Your left arm has been modified to accommodate an array of specialist tools. You've also been programmed to use them with aplomb",
						advantages: [
							"Your left arm contains a Specialist Kit of your choice.",
							"The Utility Servo works the same as a manual Specialist Kit, except: It does not require replenishing, and it does not take up one of your Inventory Slots.",
							"You can use the Servo without the Ability normally required, except. you must have a Crafting Discipline to Craft items"
						],
						disadvantages: [
							"You suffer a Snag on all Deftness rolls requiring fine motor skills when using your clunky Servo arm"
						]
					},
					sproingSprockets: {
						name: "Sproing Sprockets",
						description: "Your thick legs house giant springs that and in large metal boots. Your incredible leaps are accompanied by a loud and distinctive 'sproing!' sound.",
						advantages: [
							"You gain Supernatural Leaping"
						],
						disadvantages: [
							"You suffer a Snag when attempting stealthy actions thanks to your noisy steps."
						]
					},
					translatorModule: {
						name: "Translator Module",
						description: "Advanced audio receptors and other forgotten linguistic technologies enable you to comprehend any spoken language. However, your mechanical speech patterns make conversations awkward.",
						advantages: [
							"You are able to understand any audible language, including those used by beasts and ones that originate from beyond Outer World."
						],
						disadvantages: [
							"You suffer a Snag on all Aura rolls that involve verbal communication, your robotic syntax can be difficult to follow for native speakers."
						]
					},
					battleScanner: {
						name: "Battle Scanner",
						description: "With a quick glance you can assess the potential threat of any opponent you engage with. However, you're wired for combat which makes processing other things suboptimal.",
						advantages: [
							"On a successful Insight Check you can ask your GM for two of the following data points about a target: Attack Bonus, Hearts Total, Defense Rating, Speed Rating, combat Abilities, tactics, or if they have any inherent weaknesses.",
							"During a Fight, you must use your Action to perform a scan."
						],
						disadvantages: [
							"You incur a Snag on all Insight Checks that are unrelated to combat or assessing risK."
						]
					},
					busterArm: {
						name: "Buster Arm",
						description: "One of your arms is equipped with a powerful, long range energy weapon. It draws its power from your internal energy reserves, so you need to be careful how much you use it.",
						advantages: [
							"Your right arm has an energy canon, it is fitted in such a way that it does not inhibit your dexterity.",
							"The canon functions like a Mechanical Missile Weapon, except: it does Bright Damage and it does not require reloading."
						],
						disadvantages: [
							"You can fire the canon once per Fight without penalty, but..",
							"If discharged again during the same Fight, your suffer 1 Heart of Damage for every shot you take.",
							"If you have 0 Hearts you the weapon cannot be used, it just gives out a sad bleep."
						]
					},
					mascotChassis: {
						name: "Mascot Chassis",
						description: "Your are small and aesthetically pleasing. You were created to stand out rather than to fulfil any practical objective. You probably represented a popular brand that was prominent in Gleysian society during the 3rd Aeon.",
						advantages: [
							"You are a Small Species",
							"You gain the Adorable Quirk"
						],
						disadvantages: [
							""
						]
					},
					nanotechMaintenance: {
						name: "Nanotech Maintenance",
						description: "Unlike other Mechanoids, your body contains a unit of tiny mechanical cells that repair and maintain you. Unfortunately, these artificial cells won't allow you to benefit from any outside assistance.",
						advantages: [
							"You recover from Injury in the same way as organic characters."
						],
						disadvantages: [
							"You cannot be conventionally repaired, with the exception of reinstating lost limbs or other replacement parts."
						]
					},
					bioskin: {
						name: "Bioskin",
						description: "An organic shell surrounds and disguises, your mechanical exoskeleton. You superficially appear like a living creature, but your thoughts are undeniably synthetic.",
						advantages: [
							"You must choose which species your Bioskin replicates: Human, Tenebrate, or Elf.",
							"You pass for an organic creature, unless exposed to close scrutiny.",
						],
						disadvantages: [
							"While you can't starve, you must eat to maintain your synthetic skin and hair.",
							"Your Bioskin will completely decay after three days without food, revealing your metal skeleton.",
							"The Bioskin will grow back in three days if food is consumed regularly."
						]
					},
					noxVision: {
						name: "Nox-Vision",
						description: "You have two types of visual sensor, one that works in daylight and another which is ideal for low light or total darkness. Switching between these sensors can take a little while.",
						advantages: [
							"During a Fight, it requires the use of your Action to switch between regular vision and Nox-Mode.",
							"Nox-Mode makes you Immune to the Obscured Battlefield Condition if caused by darkness, smoke, or other visual obstruction. However, making out fine details can be difficult."
						],
						disadvantages: [
							"While in Nox-Mode, you are Blinded by regular light."
						]
					}
				}
			},
			items: {
				melee: {
					standard: {
						name: "Standard Weapon",
						cost: 10.2,
						inventory: 1,
						number: 1
					},
					concealed: {
						name: "Concealed Weapon",
						cost: 5.0,
						inventory: 1,
						number: 1
					},
					quick: {
						name: "Quick Weapon",
						cost: 15.0,
						inventory: 1,
						number: 1
					},
					master: {
						name: "Master Weapon",
						cost: 30.0,
						inventory: 2,
						number: 1
					},
					mighty: {
						name: "Mighty Weapon",
						cost: 20.0,
						inventory: 2,
						number: 1
					},
					arc: {
						name: "Arc Weapon",
						cost: 25.0,
						inventory: 3,
						number: 1
					},
					lash: {
						name: "Lash Weapon",
						cost: 30.0,
						inventory: 1,
						number: 1
					}
				},
				missile: {
					thrown: {
						name: "Thrown Weapon",
						cost: 2.0,
						inventory: 1,
						number: 1
					},
					drawn: {
						name: "Drawn Weapon",
						cost: 10.0,
						inventory: 2,
						number: 1
					},
					drawnAmmo: {
						name: "Drawn Ammunition (x5)",
						cost: 1.0,
						inventory: 0.5,
						number: 1
					},
					smallMechanical: {
						name: "Small Mechanical Missile Weapon",
						cost: 15.0,
						inventory: 1.0,
						number: 1
					},
					smallMechanicalAmmo: {
						name: "Small Mechanical Ammo (x3)",
						cost: 1,
						inventory: 0.1,
						number: 1
					},
					largeMechanical: {
						name: "Large Mechanical Missile Weapon",
						cost: 25.0,
						inventory: 2,
						number: 1
					},
					largeMechanicalAmmo: {
						name: "Large Mechanical Ammo (x3)",
						cost: 1,
						inventory: 0.1,
						number: 1
					}
				},
				armor: {
					light: {
						name: "Light Armor",
						cost: 30.0,
						inventory: 2,
						number: 1
					},
					medium: {
						name: "Medium Armor",
						cost: 60.0,
						inventory: 3,
						number: 1
					},
					heavy: {
						name: "Heavy Armor",
						cost: 120.0,
						inventory: 4,
						number: 1
					},
					superHeavy: {
						name: "Super Heavy Armor",
						cost: 600.0,
						inventory: 5,
						number: 1
					}
				},
				shields: {
					small: {
						name: "Small Shield",
						cost: 15,
						inventory: 1,
						number: 1
					},
					standard: {
						name: "Standard Shield",
						cost: 25,
						inventory: 1,
						number: 1
					},
					large: {
						name: "Large Shield",
						cost: 35,
						inventory: 2,
						number: 1
					}
				},
				outfits: {
					functional: {
						name: "Functional Outfit",
						cost: 0.5,
						inventory: 2,
						number: 1
					},
					tattered: {
						name: "Tattered Outfit",
						cost: 0,
						inventory: 1,
						number: 1
					},
					costume: {
						name: "Costume",
						cost: 1.5,
						inventory: 2,
						number: 1
					},
					artisansOutfit: {
						name: "Artisan's Outfit",
						cost: 8,
						inventory: 2,
						number: 1
					},
					coldOutfit: {
						name: "Extreme Cold Outfit",
						cost: 12,
						inventory: 2,
						number: 1
					},
					heatOutfit: {
						name: "Extreme Heat Outfit",
						cost: 8,
						inventory: 2,
						number: 1
					},
					appealingOutfit: {
						name: "Appealing Outfit",
						cost: 2,
						inventory: 2,
						number: 1
					},
					authoritativeOutfit: {
						name: "Authoritative Outfit",
						cost: 2,
						inventory: 2,
						number: 1
					}
				},
				wearableAccessories: {
					backpack: {
						name: "Backpack",
						cost: 5,
						inventory: -4,
						number: 1
					},
					travelBag: {
						name: "Traveler's Bag",
						cost: 3,
						inventory: -2,
						number: 1
					},
					pouch: {
						name: "Pouch",
						cost: 0.3,
						inventory: 0,
						number: 1
					},
					rebreather: {
						name: "Rebreather",
						cost: 15,
						inventory: 1,
						number: 1
					},
					blackoutGoggles: {
						name: "Blackout Goggles",
						cost: 2,
						inventory: 1,
						number: 1
					},
					factotumBackpack: {
						name: "Factotum Pack",
						cost: 5,
						inventory: -7,
						number: 1
					},
				},
				wayfinding: {
					local: {
						name: "Local Map",
						cost: 0.5,
						inventory: 0.1,
						number: 1
					},
					kingdom: {
						name: "Kingdom Map",
						cost: 2,
						inventory: 0.1,
						number: 1
					},
					region: {
						name: "Regional Map",
						cost: 20,
						inventory: 1,
						number: 1
					},
					world: {
						name: "World Map",
						cost: 200,
						inventory: 2,
						number: 1
					},
					compass: {
						name: "Compass",
						cost: 20,
						inventory: 1,
						number: 1
					}
				},
				illumination: {
					torch: {
						name: "Torch",
						cost: 0.4,
						inventory: 1,
						number: 1
					},
					lantern: {
						name: "Lantern",
						cost: 5,
						inventory: 1,
						number: 1
					},
					slimeLantern: {
						name: "Lumi-Slime Lantern",
						cost: 20,
						inventory: 1,
						number: 1
					}
				},
				specialist: {
					physician: {
						name: "Physician's Kit",
						cost: 50,
						inventory: 2,
						number: 1
					},
					dungeoneer: {
						name: "Dungeoneer's Kit",
						cost: 50,
						inventory: 2,
						number: 1
					},
					alchemist: {
						name: "Alchemist's Kit",
						cost: 50,
						inventory: 2,
						number: 1
					},
					mender: {
						name: "Mender's Kit",
						cost: 50,
						inventory: 2,
						number: 1
					},
					gedgeteer: {
						name: "Gadgeteer's Kit",
						cost: 50,
						inventory: 2,
						number: 1
					},
					Refill: {
						name: "Refill a Kit",
						cost: 25,
						inventory: 0,
						number: 1
					},
				},
				tomes: {
					beginner: {
						name: "Beginner's Tome (Insight 12)",
						cost: 6,
						inventory: 1,
						number: 1
					},
					journeyman: {
						name: "Journeyman's Tome (Insight 14)",
						cost: 12,
						inventory: 1,
						number: 1
					},
					master: {
						name: "Master's Tome (Insight 16)",
						cost: 18,
						inventory: 2,
						number: 1
					},
					forgotten: {
						name: "Forgotten Lore (Insight 18)",
						cost: 24,
						inventory: 2,
						number: 1
					},
					translation: {
						name: "Translation Journal",
						cost: 20,
						inventory: 1,
						number: 1
					}
				},
				consumables: {
					rations: {
						name: "Rations",
						cost: 0.1,
						inventory: 0.1,
						number: 1
					},
					hardy: {
						name: "Hardy Rations",
						cost: 0.3,
						inventory: 0.1,
						number: 1
					},
					treat: {
						name: "Treats",
						cost: 0.3,
						inventory: 0.1,
						number: 1
					},
					potion: {
						name: "Basic Potion",
						cost: 10,
						inventory: 1,
						number: 1
					},
					cake: {
						name: "Booster Cakes",
						cost: 15,
						inventory: 0.1,
						number: 1
					}
				},
				chemicals: {
					oil: {
						name: "Oil / Fuel",
						cost: 10,
						inventory: 1,
						number: 1
					},
					solvent: {
						name: "Solvent",
						cost: 20,
						inventory: 1,
						number: 1
					},
					grenade: {
						name: "Grenade",
						cost: 20,
						inventory: 1,
						number: 1
					},
					bomb: {
						name: "Bomb",
						cost: 45,
						inventory: 3,
						number: 1
					}
				},
				miscellaneous: {
					adventuring: {
						name: "Adventuring Gear",
						cost: 8,
						inventory: 1,
						number: 1
					},
					adventuringL: {
						name: "Adventuring Gear (Large)",
						cost: 8,
						inventory: 2,
						number: 1
					},
					rural: {
						name: "Common Rural Goods",
						cost: 0.8,
						inventory: 1,
						number: 1
					},
					ruralL: {
						name: "Common Rural Goods (Large)",
						cost: 0.8,
						inventory: 2,
						number: 1
					},
					urban: {
						name: "Common Urban Goods",
						cost: 1.2,
						inventory: 1,
						number: 1
					},
					urbanL: {
						name: "Common Urban Goods (Large)",
						cost: 1.2,
						inventory: 2,
						number: 1
					},
					oddity: {
						name: "Oddity / Luxury Item",
						cost: 16,
						inventory: 1,
						number: 1
					},
					oddityL: {
						name: "Oddity / Luxury Item (Large)",
						cost: 16,
						inventory: 2,
						number: 1
					},
					trade: {
						name: "Trade Goods",
						cost: 25,
						inventory: 3,
						number: 1
					}
				},
				artifacts: {
					holyIcon: {
						name: "Holy Icon",
						cost: 75,
						inventory: 1,
						number: 1
					},
					starGem: {
						name: "Star Gem",
						cost: 300,
						inventory: 0.1,
						number: 1
					},
					shadowStone: {
						name: "Shadow Stone",
						cost: 500,
						inventory: 0.1,
						number: 1
					},
					grabber: {
						name: "Long Grabber",
						cost: 45,
						inventory: 2,
						number: 1
					},
					scanner: {
						name: "Scanner",
						cost: 100,
						inventory: 1,
						number: 1
					},
					smallSpellEngine: {
						name: "Small Spell Engine",
						cost: 200,
						inventory: 1,
						number: 1
					},
					largeSpellEngine: {
						name: "Large Spell Engine",
						cost: 400,
						inventory: 2,
						number: 1
					}
				},
				other: {
					sidearm: {
						name: "Other World Sidearm",
						cost: 0,
						inventory: 1,
						number: 1
					},
					device: {
						name: "Other World Pocket Device",
						cost: 0,
						inventory: 1,
						number: 1
					}
				}
			}
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
		getNextLevel() {
			switch (true) {
				case this.xp < 6:
					return 6;
				case this.xp < 12:
					return 12;
				case this.xp < 24:
					return 24;
				case this.xp < 36:
					return 36;
				case this.xp < 48:
					return 48;
				case this.xp < 72:
					return 72;
				case this.xp < 96:
					return 96;
				case this.xp < 132:
					return 132;
				case this.xp < 168:
					return 168;
				default:
					return 0;
			}
		},
		getMight() {
			let calcMight = 10;
			if (this.callingSelected) {
				switch (this.callingSelected.name) {
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
			}
			switch (this.getSize) {
				case "Small":
					calcMight--;
					break;
				case "Large":
					calcMight++;
					break;
			}
			switch (this.quirkSelected) {
				case "Weary (Scarred Soul)":
				case "Weary (Walker of Two Paths)":
				case "Weary":
					calcMight--;
					break;
				case "Industrial Frame":
					calcMight++;
					break;
			}
			return calcMight;
		},
		getDeft() {
			let calcDeft = 10;
			if (this.callingSelected) {
				switch (this.callingSelected.name) {
					case "Battle Princess":
						calcDeft = this.callings.battlePrincess.stats[this.getLevel - 1][3];
						break;
					case "Champion":
						calcDeft = this.callings.champion.stats[this.getLevel - 1][3];
						break;
					case "Factotum":
						calcDeft = this.callings.factotum.stats[this.getLevel - 1][3];
						break;
					case "Heretic":
						calcDeft = this.callings.heretic.stats[this.getLevel - 1][3];
						break;
					case "Murder Princess":
						calcDeft = this.callings.murderPrincess.stats[this.getLevel - 1][3];
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
			}
			switch (this.getSize) {
				case "Small":
					calcDeft++;
					break;
			}
			switch (this.quirkSelected) {
				case "Waifish":
					calcDeft++;
					break;
			}
			return calcDeft;
		},
		getGrit() {
			let calcGrit = 0
			if (this.callingSelected) {
				switch (this.callingSelected.name) {
					case "Battle Princess":
						calcGrit = this.callings.battlePrincess.stats[this.getLevel - 1][4];
						break;
					case "Champion":
						calcGrit = this.callings.champion.stats[this.getLevel - 1][4];
						break;
					case "Factotum":
						calcGrit = this.callings.factotum.stats[this.getLevel - 1][4];
						break;
					case "Heretic":
						calcGrit = this.callings.heretic.stats[this.getLevel - 1][4];
						break;
					case "Murder Princess":
						calcGrit = this.callings.murderPrincess.stats[this.getLevel - 1][4];
						break;
					case "Raider":
						calcGrit = this.callings.raider.stats[this.getLevel - 1][4];
						break;
					case "Sage":
						calcGrit = this.callings.sage.stats[this.getLevel - 1][4];
						break;
					case "Sneak":
						calcGrit = this.callings.sneak.stats[this.getLevel - 1][4];
						break;
					default:
						calcGrit = 10;
				}
			}
			switch (this.quirkSelected) {
				case "Girthsome":
					calcGrit++;
					break;
				case "Winged":
					calcGrit--;
					break;
				case "Weary (Walker of Two Paths)":
				case "Weary (Scarred Soul)":
				case "Weary":
					calcGrit--;
					break;
			}
			return calcGrit;
		},
		getInsight() {
			let calcInsight = 0;
			if (this.callingSelected) {
				switch (this.callingSelected.name) {
					case "Battle Princess":
						calcInsight = this.callings.battlePrincess.stats[this.getLevel - 1][5];
						break;
					case "Champion":
						calcInsight = this.callings.champion.stats[this.getLevel - 1][5];
						break;
					case "Factotum":
						calcInsight = this.callings.factotum.stats[this.getLevel - 1][5];
						break;
					case "Heretic":
						calcInsight = this.callings.heretic.stats[this.getLevel - 1][5];
						break;
					case "Murder Princess":
						calcInsight = this.callings.murderPrincess.stats[this.getLevel - 1][5];
						break;
					case "Raider":
						calcInsight = this.callings.raider.stats[this.getLevel - 1][5];
						break;
					case "Sage":
						calcInsight = this.callings.sage.stats[this.getLevel - 1][5];
						break;
					case "Sneak":
						calcInsight = this.callings.sneak.stats[this.getLevel - 1][5];
						break;
					default:
						calcInsight = 10;
				}
			}
			switch (this.quirkSelected) {
				case "Nearsighted":
					calcInsight++;
			}
			return calcInsight;
		},
		getAura() {
			if (this.callingSelected) {
				switch (this.callingSelected.name) {
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
			}
		},
		getHearts() {
			let calcHearts = 2;
			if (this.callingSelected) {
				switch (this.callingSelected.name) {
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
			}
			if (this.speciesSelected) {
				if (this.speciesSelected == "Gruun") {
					calcHearts++;
				}
			}
			switch (this.quirkSelected) {
				case "Girthsome":
					calcHearts++;
					break;
				case "Waifish":
					calcHearts--;
					break;
				case "Winged":
					calcHearts--;
					break;
				case "Industial Frame":
					calcHearts++;
					break;
			}
			return calcHearts;
		},
		getAttack() {
			let calcAttack = 0;
			if (this.callingSelected) {
				switch (this.callingSelected.name) {
					case "Battle Princess":
						calcAttack = this.callings.battlePrincess.stats[this.getLevel - 1][0];
						break;
					case "Champion":
						calcAttack = this.callings.champion.stats[this.getLevel - 1][0];
						break;
					case "Factotum":
						calcAttack = this.callings.factotum.stats[this.getLevel - 1][0];
						break;
					case "Heretic":
						calcAttack = this.callings.heretic.stats[this.getLevel - 1][0];
						break;
					case "Murder Princess":
						calcAttack = this.callings.murderPrincess.stats[this.getLevel - 1][0];
						break;
					case "Raider":
						calcAttack = this.callings.raider.stats[this.getLevel - 1][0];
						break;
					case "Sage":
						calcAttack = this.callings.sage.stats[this.getLevel - 1][0];
						break;
					case "Sneak":
						calcAttack = this.callings.sneak.stats[this.getLevel - 1][0];
						break;
					default:
						calcAttack = 0;
				}
			}
			return calcAttack;
		},
		getAttackBonus() {
			let calcAttackBonus = 0;
			switch (this.weaponSelected) {
				case "Master":
					calcAttackBonus = 1;
				case "Large Mechanical Missile":
					calcAttackBonus = 2;
				default:
					calcAttackBonus = 0;
			}
			switch(this.quirkSelected) {
				case "Unhinged": 
					calcAttackBonus += 2;
				case "Weary (Scarred Soul)":
				case "Weary": 
					calcAttackBonus++;
			}
			return calcAttackBonus;
		},
		getDefense() {
			let calcDefense = 10;
			switch (true) {
				case (this.quirkSelected == "Ferrous"):
					calcDefense = 14;
			}
			if (this.armorSelected) {
				switch (this.armorSelected.name) {
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
			}
			if (this.shieldSelected) {
				switch (this.shieldSelected.name) {
					case "Medium Shield":
						calcDefense++;
						break;
					case "Large Shield":
						calcDefense += 2;
						break;
				}
			}
			switch (this.getSize) {
				case "Small":
					calcDefense++;
					break;
				case "Large":
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
			switch (this.quirkSelected) {
				case "Unhinged":
					calcDefense--;
					break;
				case "Fairy Cap":
					calcDefense++;
			}
			return calcDefense;
		},
		getSpeed() {
			let calcSpeed = 1;
			if (this.callingSelected) {
				if (this.callingSelected.name == 'Raider') {
					calcSpeed++;
				}
			}
			switch (true) {
				case this.hasAbility("The Better Part of Valor"):
				case this.hasAbility("Relentless Pursuer"):
				case this.hasAbility("Blistering Pace"):
				case this.hasAbility("Desperate Scurry"):
					calcSpeed++;
			}
			switch (this.quirkSelected) {
				case "Girthsome":
					calcSpeed--;
					break;
				case "Waifish":
					calcSpeed++;
					break;
				case "Industrial Frame":
					calcSpeed--;
					break;
			}
			if (this.armorSelected){
				switch (this.armorSelected.name) {
					case "Medium Armor":
						calcSpeed = calcSpeed > 2 ? 2 : calcSpeed;
						break;
					case "Heavy Armor":
						calcSpeed = calcSpeed > 1 ? 1 : calcSpeed;
						break;
					case "Super Heavy Armor":
						calcSpeed = 0;
				}
			}
			if (this.shieldSelected) {
				if (this.shieldSelected.name == "Large Shield" && calcSpeed > 0) {
					calcSpeed--;
				}
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
		getSize() {
			let calcSize = 1;
			if (this.speciesSelected) {
				switch(this.speciesSelected) {
					case "Chib":
					case "Goblin":
						calcSize--;
						break;
					case "Promethean":
					case "Gruun":
						calcSize++;
						break;					
				}
			}
			switch(this.quirkSelected) {
				case "Young":
					if (calcSize > 0) calcSize--;
					break;
				case "Mascot Chassis":
					calcSize = 0;
					break;
			}
			switch(true) {
				case (calcSize < 1):
					return "Small";
				case (calcSize > 1):
					return "Large";
				default:
					return "Medium";
			}
		},
		getWeight() {
			let calcWeight = 0.0;
			this.inventory.forEach(item => {
				calcWeight += (item.inventory * item.number)
			});
			if (this.weaponSelected) {
				if (this.combinationWeaponSelected) {
					calcWeight += (this.weaponSelected.bulk > this.combinationWeaponSelected.bulk ? this.weaponSelected.bulk : this.combinationWeaponSelected.bulk) * this.weaponNumber;
				} else {
					calcWeight += this.weaponSelected.bulk * this.weaponNumber
				}
			}
			if (this.armorSelected) {
				calcWeight += this.armorSelected.bulk * this.armorNumber;
			}
			if (this.shieldSelected) {
				calcWeight += this.shieldSelected.bulk * this.shieldNumber;
			}
			if (calcWeight > 0) {
				return (calcWeight).toFixed(1);
			} else {
				return 0
			}
		},
		getBurden() {
			if (this.getWeight > 10) {
				return true;
			} else {
				return false;
			}
		},
		getTotalValue() {
			let calcValue = 0.0;
			this.inventory.forEach(item => {
				calcValue += (item.cost * item.number);
			});
			if (this.weaponSelected) {
				if (this.customWeaponSelected) {
					calcValue += this.getCustomWeaponCost * this.weaponNumber;
				} else {
					calcValue += this.weaponSelected.cost * this.weaponNumber;
				}
			}
			if (this.armorSelected) {
				if (this.customArmorSelected) {
					calcValue += this.getCustomArmorCost * this.armorNumber;
				} else {
					calcValue += this.armorSelected.cost * this.armorNumber;
				}
			}
			if (this.shieldSelected) {
				if (this.customShieldSelected) {
					calcValue += this.getCustomShieldCost * this.shieldNumber;
				} else {
					calcValue += this.shieldSelected.cost * this.shieldNumber;
				}
			}
			return this.writeDenomination(calcValue);
		},
		getBackupDataString() {
			return JSON.stringify({
				gems: this.gems,
				coins: this.coins,
				stones: this.stones,
				itemSelected: this.itemSelected,
				inventory: this.inventory,
				mightTrait: this.mightTrait,
				deftTrait: this.deftTrait,
				gritTrait: this.gritTrait,
				insightTrait: this.insightTrait,
				auraTrait: this.auraTrait,
				callingSelected: this.callingSelected,
				weaponSelected: this.weaponSelected,
				armorSelected: this.armorSelected,
				shieldSelected: this.shieldSelected,
				xp: this.xp,
				characterName: this.characterName,
				speciesSelected: this.speciesSelected,
				homelandSelected: this.homelandSelected,
				historySelected: this.historySelected,
				languagesSelected: this.languagesSelected,
				quirkSelected: this.quirkSelected,
				currentHearts: this.currentHearts,
				brightPoints: this.brightPoints,
				darkPoints: this.darkPoints,
				elective1: this.elective1,
				elective2: this.elective2,
				elective4: this.elective4,
				elective6: this.elective6,
				elective8: this.elective8,
				elective10: this.elective10,
				brightGifts: this.brightGifts,
				darkGifts: this.darkGifts,
				tenebrateGift: this.tenebrateGift,
				combinationWeaponSelected: this.combinationWeaponSelected,
				weaponCustom: this.weaponCustom,
				armorCustom: this.armorCustom,
				shieldCustom: this.shieldCustom,
				customWeaponSelected: this.customWeaponSelected,
				customArmorSelected: this.customArmorSelected,
				customShieldSelected: this.customShieldSelected,
				weaponNumber: this.weaponNumber,
				armorNumber: this.armorNumber,
				shieldNumber: this.shieldNumber,
			});
		},
		getCustomWeaponCost() {
			if ( this.weaponSelected && this.customWeaponSelected) {
				switch (this.customWeaponSelected.name) {
					case "Combination": 
						if (this.combinationWeaponSelected) {
							return (this.weaponSelected.cost + this.combinationWeaponSelected.cost) * 2;
						} else {
							return this.weaponSelected.cost * 2;
						}
					case "Shoddy":
						return this.weaponSelected.cost / 2;
					case "Disguised":
					case "Secret Compartment":
						return this.weaponSelected.cost + 5;
					case "Dangerous":
						return this.weaponSelected.cost + 10;
					case "Utility": 
						return (this.weaponSelected.cost + 5);
					case "Rapid Fire":
						return this.weaponSelected.cost * 10;
					case "Special Ammunition":
						return this.weaponSelected.cost;
				}
			}
		},
		getCustomArmorCost() {
			if (this.armorSelected && this.customArmorSelected) {
				switch (this.customArmorSelected.name) {
					case "Anti-Hazard":
						return this.armorSelected.cost + 100;
					case "Buoyant":
					case "Integrated":
						return this.armorSelected.cost + 50;
					case "Spiked":
						return this.armorSelected.cost + 75;
					case "Cargo":
					case "Shadowed":
						return this.armorSelected.cost + 15;
					case "Magnificent":
						return this.armorSelected.cost + 25;
					case "Resplendent":
						return this.armorSelected.cost + 50;
					case "Mechanical Motion":
						return this.armorSelected.cost * 10;
				}
			}
		},
		getCustomShieldCost() {
			if (this.shieldSelected && this.customShieldSelected) {
				switch (this.customShieldSelected.name) {
					case "Assault":
						return this.shieldSelected.cost + 20;
					case "Barricade":
						return this.shieldSelected.cost * 20;

				}
			}
		},
		getBrightPoints() {
			let calcBright = 0;
			if (this.speciesSelected) {
				if (this.speciesSelected.name == 'Promethean') calcBright++;
			}
			if (this.callingSelected){
				if (this.callingSelected.name == 'Battle Princess') {
					if (this.hasAbility('Glittering Machine')) calcBright++
					if (this.hasAbility("Passion's Fire")) calcBright++;
					if (this.hasAbility('Cry of the Heart')) calcBright++;
					if (this.hasAbility('Spirit Wings')) calcBright++;
					if (this.hasAbility('Opened Hearts')) calcBright++;
					if (this.hasAbility('Radiant Blade')) calcBright++;
					if (this.hasAbility("Heart's Aegis")) calcBright++;
				}
				else if (this.callingSelected.name == 'Sage') {
					if (this.hasAbility('Glowing Ink')) calcBright++;
					if (this.hasAbility('Very Useful Cloud')) calcBright++;
					if (this.hasAbility('Eldritch Explosives')) calcBright++;
					if (this.hasAbility('Mana Crush')) calcBright++;
					if (this.hasAbility('Harmonious Geomancy')) calcBright++;
					if (this.hasAbility('Momentary Fortress')) calcBright++;
				}
				else if (this.callingSelected.name == 'Heretic') {
					if (this.hasAbility('Yogi Tulpa')) calcBright++;
					if (this.hasAbility('Wretched Jarah')) calcBright++;
					if (this.hasAbility('Altgrave Ultima')) calcBright++;
					if (this.hasAbility('Imperatrix Delilah')) calcBright++;
					if (this.hasAbility('Queen Amhika')) calcDark++;
				}
			}
			if (this.inventory.includes(this.items.artifacts.starGem)) calcBright++;
			return calcBright;

		},
		getDarkPoints() {
			let calcDark = 0;
			if (this.speciesSelected) {
				if (this.speciesSelected.name == 'Tenebrate') calcDark++;
			}
			if (this.callingSelected){
				if (this.callingSelected.name == 'Murder Princess') {
					if (this.hasAbility('Frost Blade')) calcDark++;
					if (this.hasAbility('Wrath Bolt')) calcDark++;
					if (this.hasAbility('Barbed Justice')) calcDark++;
					if (this.hasAbility('Caustic Truth')) calcDark++;
					if (this.hasAbility('Blade of Darkness')) calcDark++;
					if (this.hasAbility('Red Petal Revenge')) calcDark++;
				}
				else if (this.callingSelected.name == 'Heretic') {
					if (this.hasAbility('The Widow Prisma')) calcDark++;
					if (this.hasAbility('Deacon Galrave')) calcDark++;
					if (this.hasAbility('Bushi Miyabi')) calcDark++;
					if (this.hasAbility('Seer Kasnah')) calcDark++;
					if (this.hasAbility('Messenger Kaila')) calcDark++;
					if (this.hasAbility('Count Paris')) calcDark++;
					if (this.hasAbility('Prince Justiniaus')) calcDark++;
					if (this.hasAbility('Dowager Collette')) calcDark++;
					if (this.hasAbility('Servant Pazuu')) calcDark++;
					if (this.hasAbility('Umbra Draconis')) calcDark++;
					if (this.hasAbility('Egomet')) calcDark++;
				}
				else if (this.callingSelected.name== 'Sage') {
					if (this.hasAbility('Hocus Pox')) calcDark++;
					if (this.hasAbility('Murky Mask')) calcDark++;
					if (this.hasAbility('Cloak of Obscurity')) calcDark++;
					if (this.hasAbility('Shadow Puppet')) calcDark++;
					if (this.hasAbility('Soothing Darkness')) calcDark++;
					if (this.hasAbility('Mortifying Bloat')) calcDark++;
				}
			}
			if (this.inventory.includes(this.items.artifacts.shadowStone)) calcDark++;
			return calcDark;
		},
		getAlignment() {
			let brightness = (Number(this.getBrightPoints) + Number(this.brightPoints));
			let darkness = (Number(this.getDarkPoints) + Number(this.darkPoints));

			if (brightness + darkness > 1){
				if (brightness > darkness + 1) {
					return 'Bright Aligned';
				}
				else if (darkness > brightness + 1) {
					return 'Dark Aligned';
				}
				else {
					return 'Twilight Aligned';
				}
			} 
			else {
				return 'Unaligned';
			}
		}
	},
	methods: {
		backup() {
			var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(this.getBackupDataString);
			var dlAnchorElem = document.getElementById('downloadAnchorElem');
			dlAnchorElem.setAttribute("href",     dataStr     );
			dlAnchorElem.setAttribute("download", this.backupName + ".json");
			dlAnchorElem.click();
		},
		restore() {
			var vm = this;
			var importedFile = document.getElementById('import-file').files[0];
			//console.log("importedFile: " + importedFile);
			var reader = new FileReader();
			reader.onload = function() {
				var fileContent = JSON.parse(reader.result);
				//console.log("fileContent: " + fileContent);
				vm.gems = fileContent.gems;
				//console.log("gems: " + fileContent.gems)
				vm.coins = fileContent.coins;
				vm.stones = fileContent.stones;
				vm.itemSelected = fileContent.itemSelected;
				vm.inventory = fileContent.inventory;
				vm.mightTrait = fileContent.mightTrait;
				vm.deftTrait = fileContent.deftTrait;
				vm.gritTrait = fileContent.gritTrait;
				vm.insightTrait = fileContent.insightTrait;
				vm.auraTrait = fileContent.auraTrait;
				vm.callingSelected = fileContent.callingSelected;
				vm.weaponSelected = fileContent.weaponSelected;
				vm.armorSelected = fileContent.armorSelected;
				vm.shieldSelected = fileContent.shieldSelected;
				vm.xp = fileContent.xp;
				vm.characterName = fileContent.characterName;
				vm.speciesSelected = fileContent.speciesSelected;
				vm.homelandSelected = fileContent.homelandSelected;
				vm.historySelected = fileContent.historySelected;
				vm.languagesSelected = fileContent.languagesSelected;
				vm.quirkSelected = fileContent.quirkSelected;
				vm.currentHearts = fileContent.currentHearts;
				vm.brightPoints = fileContent.brightPoints;
				vm.darkPoints = fileContent.darkPoints;
				vm.elective1 = fileContent.elective1;
				vm.elective2 = fileContent.elective2;
				vm.elective4 = fileContent.elective4;
				vm.elective6 = fileContent.elective6;
				vm.elective8 = fileContent.elective8;
				vm.elective10 = fileContent.elective10;
				vm.brightGifts = fileContent.brightGifts;
				vm.darkGifts = fileContent.darkGifts;
				vm.tenebrateGift = fileContent.tenebrateGift;
				vm.combinationWeaponSelected = fileContent.combinationWeaponSelected;
				vm.weaponCustom = fileContent.weaponCustom;
				vm.armorCustom = fileContent.armorCustom;
				vm.shieldCustom = fileContent.shieldCustom;
				vm.customWeaponSelected = fileContent.customWeaponSelected;
				vm.customArmorSelected = fileContent.customArmorSelected;
				vm.customShieldSelected = fileContent.customShieldSelected;
				vm.weaponNumber = fileContent.weaponNumber;
				vm.armorNumber = fileContent.armorNumber;
				vm.shieldNumber = fileContent.shieldNumber;
			};
			reader.readAsText(importedFile); 
		},
		hasAbility(ability) {
			if (this.speciesSelected) {
				if (this.speciesSelected.name == 'Human (Native)' && this.nativeHumanElective) {
					if (this.nativeHumanElective == ability) return true;
				}
			}
			if (
				this.elective1 == ability ||
				this.elective2 == ability ||
				this.elective4 == ability ||
				this.elective6 == ability ||
				this.elective8 == ability ||
				this.elective10 == ability
			) {
				return true;
			} else {
				return false;
			}
		},
		printDiv(divId) {
			let mywindow = window.open("", "PRINT");

			mywindow.document.write('<html><head>');
			mywindow.document.write("<style> @font-face {font-family: 'Nunito';font-style: normal;font-weight: 300;src: url(data:font/woff2;base64,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) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face {font-family: 'Nunito';font-style: normal;font-weight: 400;src: url(data:font/woff2;base64,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) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face {font-family: 'Nunito';font-style: normal;font-weight: 700;src: url(data:font/woff2;base64,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) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>")
			mywindow.document.write('<style>*{font-family:Nunito,"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}.page1{height:100vh;width:100vw;display:grid;grid-template-columns:.75in 1fr}.page2{height:100vh;width:100vw;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:1fr repeat(5,minmax(0,2fr)) 1fr 2fr 1fr 2fr;grid-auto-flow:column;grid-gap:1em;page-break-before:always;margin:.25in}.page3{page-break-before:always;margin:.25in;columns:2}.primary{height:100vh;width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:1fr repeat(5,minmax(0,2fr)) 1fr repeat(2,minmax(0,2fr));grid-auto-flow:column;grid-gap:1em;padding:.25in}.draft{height:100%;width:100%}.bio{grid-row:auto/span 5;display:grid;grid-template-rows:2fr 2fr 1fr 1fr}.spread{grid-column:auto/span 2}.grey{background-color:#dcdcdc}.border-top{border-top:.5px solid #000}border-bottom{border-bottom:.5px solid #000}.border-right{border-right:.5px solid #000}.right-round{border-radius:0 .5em .5em 0}.light{font-weight:300}.center-text{text-align:center}label,li,p{margin-left:1em;font-size:12px}p strong{font-size:16px;}strong{font-weight: 700;}article{border:1px solid #000;border-radius:.5em;padding:.5em;margin-bottom:1em;break-inside:avoid}article ul{list-style-position:inside;padding:0}.card-divider{border-radius:0 .5em .5em 0;width:100%;background-color:#dcdcdc;break-inside:avoid;break-after:avoid;text-indent:.5em;margin-block-start:0}.progress{padding:1px;width:90%;border:1px solid #000;height:3px}.progress .progress__bar{height:100%;background-color:#000}[type=checkbox],[type=radio],[type=range],progress{accent-color:#000}</style></head><body><main>')
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
		addItem(item) {
			if (this.inventory.includes(item)) return;
			if (this.weaponSelected && !this.customWeaponSelected) {
				if (this.weaponSelected.name == item.name) return;
			}
			if (this.armorSelected && !this.customArmorSelected) {
				if (this.armorSelected.name == item.name) return;
			}
			if (this.shieldSelected && !this.customShieldSelected) {
				if (this.shieldSelected.name == item.name) return;
			}
			this.inventory.push(item);
		},
		remove(item) {
			this.inventory = this.inventory.filter((t) => t !== item);
		},
		writeDenomination(num) {
			let answer = "";
			num >= 100 ?
				answer += (Math.floor(num / 100) + "G ") : null;
			(num % 100) >= 1 ?
				answer += (Math.floor((num % 100) / 1) + "C ") : null;
			((num % 100) % 1) >= 0.1 ?
				answer += (Math.round(((num % 100) % 1) / 0.1) + "s") : null;
			return answer != "" ? answer : "N/A"
		},
		getSoulCompStat(stat) {
			switch (stat) {
				case 'Might':
					return this.getMight - 2;
				case 'Deft':
					return this.getDeft - 2;
				case 'Grit':
					return this.getGrit - 2;
				case 'Insight':
					return this.getInsight - 2;
				case 'Aura':
					return this.getAura - 2;
			}
		}
	},
};
