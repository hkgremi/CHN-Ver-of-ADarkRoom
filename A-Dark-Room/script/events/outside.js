/**
 * Events that can occur when the Outside module is active
 **/
Events.Outside = [
    { /* Ruined traps */
    	title: '破損的陷阱',
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.buildings["陷阱"]', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					'一些陷阱已經嚴重損毀',
					'巨大的足印導向森林'
				],
				onLoad: function() {
					var numWrecked = Math.floor(Math.random() * $SM.get('game.buildings["陷阱"]', true)) + 1;
					$SM.add('game.buildings["陷阱"]', -numWrecked);
					Outside.updateVillage();
					Outside.updateTrapButton();
				},
				notification: '一些陷阱損壞了',
				buttons: {
					'track': {
						text: '追踪足跡',
						nextScene: {0.5: 'nothing', 1: 'catch'}
					},
					'ignore': {
						text: '忽略',
						nextScene: 'end'
					}
				}
			},
			'nothing': {
				text: [
					'踪跡消失了...',
					'森林再次歸於寧靜'
				],
				buttons: {
					'end': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'catch': {
				text: [
			       '在離開村子的不遠處發現了一隻巨大的野獸，它的皮毛覆滿了暗淡的血液',
			       '在武器面前，它已經沒什麼抵抗力了'
		        ],
				reward: {
					'毛皮': 100,
					'肉': 100,
					'牙齒': 10
				},
				buttons: {
					'end': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
    },
    
    { /* Sickness */
    	title: '疾病',
  		isAvailable: function() {
  			return Engine.activeModule == Outside && 
  				$SM.get('game.population', true) > 10 && 
  				$SM.get('game.population', true) < 50 && 
  				$SM.get('stores["醫療藥劑"]', true) > 0;
  		},
  		scenes: {
  			'start': {
  				text: [
  			    '疾病在村子裡面傳播',
  			    '急需醫療藥劑'
  		    ],
  		    buttons: {
  		      'heal': {
  		        text: '1 醫療藥劑',
  		        cost: { '醫療藥劑' : 1 },
  		        nextScene: {1: 'healed'}
  		      },
  					'ignore': {
  						text: '置之不理',
  						nextScene: {1: 'death'}
  					}
  				}
  			},
  			'healed': {
  				text: [
  			    '疾病被即時控制了'
  		    ],
  		    buttons: {
  					'end': {
  						text: '離開',
  						nextScene: 'end'
  					}
  				}
  			},
  			'death': {
  				text: [
  			    '疾病蔓延在整個村莊',
  			    '天天都有人死去',
  			    '黑夜總是伴隨著驚聲尖叫'
  		    ],
  		    onLoad: function() {
				    var numKilled = Math.floor(Math.random() * 20) + 1;
    				Outside.killVillagers(numKilled);
    			},
  		    buttons: {
  					'end': {
  						text: '離開',
  						nextScene: 'end'
  					}
  				}
  			}
  		}
    },
    
    { /* Plague */
    	title: '瘟疫',
  		isAvailable: function() {
  			return Engine.activeModule == Outside && $SM.get('game.population', true) > 50 && $SM.get('stores["醫療藥劑"]', true) > 0;
  		},
  		scenes: {
  			'start': {
  				text: [
  			    '一場可怕的瘟疫在村子裡面迅速蔓延開',
  			    '急需治療藥劑'
  		    ],
  		    buttons: {
  		      'heal': {
  		        text: '5 治療藥劑',
  		        cost: { '醫療藥劑' : 5 },
  		        nextScene: {1: 'healed'}
  		      },
  					'ignore': {
  						text: '置之不理',
  						nextScene: {1: 'death'}
  					}
  				}
  			},
  			'healed': {
  				text: [
  			    '瘟疫不制止了',
  			    '我們只失去了幾個人',
  			    '我們埋葬了這些死者'
  		    ],
  		    onLoad: function() {
				    var numKilled = Math.floor(Math.random() * 5) + 2;
    				Outside.killVillagers(numKilled);
    			},
  		    buttons: {
  					'end': {
  						text: '離開',
  						nextScene: 'end'
  					}
  				}
  			},
  			'death': {
  				text: [
  			    '瘟疫席捲了整個村莊',
  			    '尖叫恐懼聲響徹了整個黑夜',
  			    '死亡也許是更好的歸宿'
  		    ],
  		    onLoad: function() {
				    var numKilled = Math.floor(Math.random() * 80) + 10;
    				Outside.killVillagers(numKilled);
    			},
  		    buttons: {
  					'end': {
  						text: '離開',
  						nextScene: 'end'
  					}
  				}
  			}
  		}
    },
    
    { /* Beast attack */
    	title: '猛獸襲擊',
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 0;
		},
		scenes: {
			'start': {
				text: [
			       '一群野獸衝出了森林奔向村莊',
			       '戰鬥短暫而血腥，獸群最終被擊退了',
			       '村名們放棄了追擊，集體悼念了死去的人'
		        ],
		        onLoad: function() {
					var numKilled = Math.floor(Math.random() * 10) + 1;
					Outside.killVillagers(numKilled);
				},
		        reward: {
		        	'毛皮': 100,
		        	'肉': 100,
		        	'牙齒': 10
		        },
		        buttons: {
					'end': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
    },
    
    { /* Soldier attack */
    	title: '武裝衝突',
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 0 && $SM.get('game.cityCleared');;
		},
		scenes: {
			'start': {
				text: [
			       '一聲槍響穿透樹林',
			       '武裝精良的士兵衝突森林，向我們的人開火',
			       '在衝突後，幾個村名死亡，隨即武裝人員就離開了'
		        ],
		        onLoad: function() {
					var numKilled = Math.floor(Math.random() * 40) + 1;
					Outside.killVillagers(numKilled);
				},
		        reward: {
		        	'子彈': 10,
		        	'醃肉': 50
		        },
		        buttons: {
					'end': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
    }
];
	
