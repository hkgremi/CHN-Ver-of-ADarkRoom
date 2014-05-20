/**
 * Events that can occur when wandering around the world
 **/
Events.Encounters = [
	/* Tier 1 */
	{ /* Snarling Beast */
		title: '咆哮的野獸',
 		isAvailable: function() {
 			return World.getDistance() <= 10 && World.getTerrain() == World.TILE.FOREST;
 		},
 		scenes: {
 			'start': {
 				combat: true,
 				enemy: '暴怒野獸',
 				chara: 'B',
 				damage: 1,
 				hit: 0.8,
 				attackDelay: 1,
 				health: 5,
 				loot: {
 					'毛皮': {
 						min: 1,
 						max: 3,
 						chance: 1
 					},
 					'肉': {
 						min: 1,
 						max: 3,
 						chance: 1
 					},
 					'牙齒': {
 						min: 1,
 						max: 3,
 						chance: 0.8
 					}
 				},
 				notification: '一隻咆哮的野獸從草叢中串起'
 			}
 		}
	},
	{ /* Gaunt Man */
     	title: '一個落魄的人',
  		isAvailable: function() {
  			return World.getDistance() <= 10 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: '落魄者',
  				chara: 'G',
  				damage: 2,
  				hit: 0.8,
  				attackDelay: 2,
  				health: 6,
  				loot: {
  					'布匹': {
  						min: 1,
  						max: 3,
  						chance: 0.8
  					},
  					'牙齒': {
  						min: 1,
  						max: 2,
  						chance: 0.8
  					},
  					'皮革': {
  						min: 1,
  						max: 2,
  						chance: 0.5
  					}
  				},
  				notification: '一個瘋狂的傢伙出現了'
  			}
		}
  	},
	{ /* Strange Bird */
     	title: '一隻怪鳥',
  		isAvailable: function() {
  			return World.getDistance() <= 10 && World.getTerrain() == World.TILE.FIELD;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: '怪鳥',
  				chara: 'B',
  				damage: 3,
  				hit: 0.8,
  				attackDelay: 2,
  				health: 4,
  				loot: {
  					'鱗片': {
  						min: 1,
  						max: 3,
  						chance: 0.8
  					},
  					'牙齒': {
  						min: 1,
  						max: 2,
  						chance: 0.5
  					},
  					'肉': {
  						min: 1,
  						max: 3,
  						chance: 0.8
  					}
  				},
  				notification: '一隻怪鳥略過平原'
  			}
		}
  	},
	/* Tier 2*/
	{ /* Shivering Man */
     	title: '一個瑟瑟發抖的人',
  		isAvailable: function() {
  			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: '抖人',
  				chara: 'S',
  				damage: 5,
  				hit: 0.5,
  				attackDelay: 1,
  				health: 20,
  				loot: {
  					'布匹': {
  						min: 1,
  						max: 1,
  						chance: 0.2
  					},
  					'牙齒': {
  						min: 1,
  						max: 2,
  						chance: 0.8
  					},
  					'皮革': {
  						min: 1,
  						max: 1,
  						chance: 0.2
  					},
  					'醫療藥劑': {
  					  min: 1,
  					  max: 3,
  					  chance: 0.7
  					}
  				},
  				notification: '一個瑟瑟發抖的人接近中，看上去力量無窮'
  			}
		}
  },
	{ /* Man-eater */
		title: '一個食人族',
 		isAvailable: function() {
 			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.FOREST;
 		},
 		scenes: {
 			'start': {
 				combat: true,
 				enemy: '食人族',
 				chara: 'E',
 				damage: 3,
 				hit: 0.8,
 				attackDelay: 1,
 				health: 25,
 				loot: {
 					'毛皮': {
 						min: 5,
 						max: 10,
 						chance: 1
 					},
 					'肉': {
 						min: 5,
 						max: 10,
 						chance: 1
 					},
 					'牙齒': {
 						min: 5,
 						max: 10,
 						chance: 0.8
 					}
 				},
 				notification: '一隻巨大的生物接近了，爪子上鮮血淋漓'
 			}
 		}
	},
	{ /* Scavenger */
     	title: '一個清道夫',
  		isAvailable: function() {
  			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: '清道夫',
  				chara: 'S',
  				damage: 4,
  				hit: 0.8,
  				attackDelay: 2,
  				health: 30,
  				loot: {
  					'布匹': {
  						min: 5,
  						max: 10,
  						chance: 0.8
  					},
  					'皮革': {
  						min: 5,
  						max: 10,
  						chance: 0.8
  					},
  					'鐵': {
  						min: 1,
  						max: 5,
  						chance: 0.5
  					},
  					'醫療藥劑': {
  					  min: 1,
  					  max: 2,
  					  chance: 0.1
  					}
  				},
  				notification: '一個清道夫快速接近中，想要偷襲'
  			}
		}
  	},
	{ /* Huge Lizard */
     	title: '一直飢餓的蜥蜴',
  		isAvailable: function() {
  			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.FIELD;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: '蜥蜴',
  				chara: 'L',
  				damage: 5,
  				hit: 0.8,
  				attackDelay: 2,
  				health: 20,
  				loot: {
  					'鱗片': {
  						min: 5,
  						max: 10,
  						chance: 0.8
  					},
  					'牙齒': {
  						min: 5,
  						max: 10,
  						chance: 0.5
  					},
  					'肉': {
  						min: 5,
  						max: 10,
  						chance: 0.8
  					}
  				},
  				notification: '草叢扑出一隻巨大的蜥蜴'
  			}
		}
  	},
	/* Tier 3*/
	{ /* Feral Terror */
		title: '一個恐怖生物',
 		isAvailable: function() {
 			return World.getDistance() > 20 && World.getTerrain() == World.TILE.FOREST;
 		},
 		scenes: {
 			'start': {
 				combat: true,
 				enemy: '恐怖生物',
 				chara: 'F',
 				damage: 6,
 				hit: 0.8,
 				attackDelay: 1,
 				health: 45,
 				loot: {
 					'毛皮': {
 						min: 5,
 						max: 10,
 						chance: 1
 					},
 					'肉': {
 						min: 5,
 						max: 10,
 						chance: 1
 					},
 					'牙齒': {
 						min: 5,
 						max: 10,
 						chance: 0.8
 					}
 				},
 				notification: '一隻野獸，比想像中更大更狂野'
 			}
 		}
	},
	{ /* Soldier */
     	title: '一個士兵',
  		isAvailable: function() {
  			return World.getDistance() > 20 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: '士兵',
				ranged: true,
  				chara: 'D',
  				damage: 8,
  				hit: 0.8,
  				attackDelay: 2,
  				health: 50,
  				loot: {
  					'布匹': {
  						min: 5,
  						max: 10,
  						chance: 0.8
  					},
  					'子彈': {
  						min: 1,
  						max: 5,
  						chance: 0.5
  					},
  					'步槍': {
  						min: 1,
  						max: 1,
  						chance: 0.2
  					},
  					'醫療藥劑': {
  					  min: 1,
  					  max: 2,
  					  chance: 0.1
  					}
  				},
  				notification: '一個士兵從沙漠那邊開火'
  			}
		}
  	},
	{ /* Sniper */
     	title: '一個狙擊手',
  		isAvailable: function() {
  			return World.getDistance() > 20 && World.getTerrain() == World.TILE.FIELD;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: '狙擊手',
  				chara: 'S',
  				damage: 15,
  				hit: 0.8,
  				attackDelay: 4,
  				health: 30,
				ranged: true,
  				loot: {
  					'布匹': {
  						min: 5,
  						max: 10,
  						chance: 0.8
  					},
  					'子彈': {
  						min: 1,
  						max: 5,
  						chance: 0.5
  					},
  					'步槍': {
  						min: 1,
  						max: 1,
  						chance: 0.2
  					},
  					'醫療藥劑': {
  					  min: 1,
  					  max: 2,
  					  chance: 0.1
  					}
  				},
  				notification: '一聲槍響，遠遠得傳來'
  			}
		}
  	}
];
