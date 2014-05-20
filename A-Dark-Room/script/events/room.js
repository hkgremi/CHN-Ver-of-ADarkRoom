/**
 * Events that can occur when the Room module is active
 **/
Events.Room = [
	{ /* The Nomad  --  Merchant */
		title: '游牧帳篷',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('stores.毛皮', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					'一個游牧貿易團進入了視野，他們攜帶了很多粗糙的麻線袋, 裝滿了貨物',
					"他們沒有說他們從那裡來，顯然也不會一直呆在這裡"
				],
				notification: '一個游牧帳篷抵達並尋求貿易',
				buttons: {
					'buyScales': {
						text: '購買 鱗片',
						cost: { '毛皮': 100 },
						reward: { '鱗片': 1 }
					},
					'buyTeeth': {
						text: '購買 牙齒',
						cost: { '毛皮': 200 },
						reward: { '牙齒': 1 }
					},
					'buyBait': {
						text: '購買 誘餌',
						cost: { '毛皮': 5 },
						reward: { '誘餌': 1 },
						notification: '帶誘餌的陷阱更有效'
					},
					'buyCompass': {
						available: function() {
							return $SM.get('stores["指南針"]', true) < 1;
						},
						text: '購買 指南針',
						cost: { '毛皮': 300, '鱗片': 15, '牙齒': 5 },
						reward: { '指南針': 1 },
						notification: '指南針看上去很舊，佈滿了灰塵，但是依舊工作良好',
						onChoose: Path.openPath
					}, 
					'goodbye': {
						text: '再見',
						nextScene: 'end'
					}
				}
			}
		}
	}, { /* Noises Outside  --  gain wood/fur */
		title: '噪音',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('stores["木頭"]');
		},
		scenes: {
			'start': {
				text: [
					'嘈雜聲穿牆入耳',
					"不知道發生了什麼事"
				],
				notification: '怪的聲音穿牆而來',
				buttons: {
					'investigate': {
						text: '調查',
						nextScene: { 0.3: 'stuff', 1: 'nothing' }
					},
					'ignore': {
						text: '無視',
						nextScene: 'end'
					}
				}
			},
			'nothing': {
				text: [
					'模糊的身影移動著進入了黑暗',
					'噪音消失了'
				],
				buttons: {
					'backinside': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'stuff': {
				reward: { '木頭': 100, '毛皮': 10 },
				text: [
					'一大捆用毛皮綁著的木頭躺在門檻上',
					'黑夜再次趨於寧靜'
				],
				buttons: {
					'backinside': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	{ /* Noises Inside  --  trade wood for better good */
		title: '噪音',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('stores["木頭"]');
		},
		scenes: {
			start: {
				text: [
			       '摩擦聲從儲藏室內傳來',
			       '一定有什麼東西在那'
				],
				notification: '有東西在儲藏室',
				buttons: {
					'investigate': {
						text: '調查',
						nextScene: { 0.5: '鱗片', 0.8: '牙齒', 1: '布匹' }
					},
					'ignore': {
						text: '忽略',
						nextScene: 'end'
					}
				}
			},
			'鱗片': {
				text: [
			       '一些木頭不見了',
			       '地上有很多細小的鱗片'
			    ],
			    onLoad: function() {
			    	var numWood = $SM.get('stores["木頭"]', true);
			    	numWood = Math.floor(numWood * 0.1);
			    	if(numWood == 0) numWood = 1;
			    	var numScales = Math.floor(numWood / 5);
			    	if(numScales == 0) numScales = 1;
			    	$SM.addM('stores', {'木頭': -numWood, '鱗片': numScales});
			    },
			    buttons: {
			    	'leave': {
			    		text: '離開',
			    		nextScene: 'end'
			    	}
			    }
			},
			'牙齒': {
				text: [
			       '一些木頭丟失了',
			       '地面流下了一些破碎的牙齒'
			    ],
			    onLoad: function() {
			    	var numWood = $SM.get('stores["木頭"]', true);
			    	numWood = Math.floor(numWood * 0.1);
			    	if(numWood == 0) numWood = 1;
			    	var numTeeth = Math.floor(numWood / 5);
			    	if(numTeeth == 0) numTeeth = 1;
			    	$SM.addM('stores', {'木頭': -numWood, '牙齒': numTeeth});
			    },
			    buttons: {
			    	'leave': {
			    		text: '離開',
			    		nextScene: 'end'
			    	}
			    }
			},
			'布匹': {
				text: [
			       '丟失了一些木頭',
			       '地上有很多碎步屑'
			    ],
			    onLoad: function() {
			    	var numWood = $SM.get('stores["木頭"]', true);
			    	numWood = Math.floor(numWood * 0.1);
			    	if(numWood == 0) numWood = 1;
			    	var numCloth = Math.floor(numWood / 5);
			    	if(numCloth == 0) numCloth = 1;
			    	$SM.addM('stores', {'木頭': -numWood, '布匹': numCloth});
			    },
			    buttons: {
			    	'leave': {
			    		text: 'nextScene',
			    		nextScene: 'end'
			    	}
			    }
			}
		}
	},
	{ /* The Beggar  --  trade fur for better good */
		title: '乞丐',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('stores["毛皮"]');
		},
		scenes: {
			start: {
				text: [
			       '來了一個乞丐',
			       '乞求能給他一點暖和身子的皮毛'
				],
				notification: '來了一個乞丐',
				buttons: {
					'50furs': {
						text: '給 50',
						cost: {'毛皮': 50},
						nextScene: { 0.5: '鱗片', 0.8: '牙齒', 1: '布匹' }
					},
					'100furs': {
						text: '給 100',
						cost: {'毛皮': 100},
						nextScene: { 0.5: '牙齒', 0.8: '鱗片', 1: '布匹' }
					},
					'deny': {
						text: '攆走他',
						nextScene: 'end'
					}
				}
			},
			'鱗片': {
				reward: { '鳞片': 20 },
				text: [
			       '乞丐感激異常',
			       '留下一堆20的鱗片'
			    ],
			    buttons: {
			    	'leave': {
			    		text: '再見',
			    		nextScene: 'end'
			    	}
			    }
			},
			'牙齒': {
				reward: { '牙齒': 20 },
				text: [
			       '乞丐感激異常',
			       '留下一堆20的牙齒'
			    ],
			    buttons: {
			    	'leave': {
			    		text: '再見',
			    		nextScene: 'end'
			    	}
			    }
			},
			'布匹': {
				reward: { '布匹': 20 },
				text: [
			       '乞丐感激異常',
			       '留下一堆20的布料'
			    ],
			    buttons: {
			    	'leave': {
			    		text: '再見',
			    		nextScene: 'end'
			    	}
			    }
			}
		}
	},
	
	{ /* Mysterious Wanderer  --  wood gambling */
		title: '神秘流浪者',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('stores["木頭"]');
		},
		scenes: {
			start: {
				text: [
			       '一個流浪漢帶著一個空筐子來到了木屋，說如果能給她一些木頭帶走，他之後會帶來更多',
			       "工人不知道他是否值得信任"
				],
				notification: '一個神秘的流浪漢抵達',
				buttons: {
					'100wood': {
						text: '給 100',
						cost: {'木頭': 100},
						nextScene: { 1: '100wood'}
					},
					'500wood': {
						text: '給 500',
						cost: {'木頭': 500},
						nextScene: { 1: '500wood' }
					},
					'deny': {
						text: '攆走他',
						nextScene: 'end'
					}
				}
			},
			'100wood': {
				text: [
			       '流浪漢離開了，筐子滿載木頭'
			    ],
			    onLoad: function() {
			    	if(Math.random() < 0.5) {
			    		setTimeout(function() {
			    			$SM.add('stores["木頭"]', 300);
			    			Notifications.notify(Room, '流浪女回來了，帶回來了300的木頭');
			    		}, 60 * 1000);
			    	}
			    },
			    buttons: {
			    	'leave': {
			    		text: '再見',
			    		nextScene: 'end'
			    	}
			    }
			},
			'500wood': {
				text: [
				       '流浪漢離開了，筐子滿載木頭'
			    ],
			    onLoad: function() {
			    	if(Math.random() < 0.3) {
			    		setTimeout(function() {
			    			$SM.add('stores["木頭"]', 1500);
			    			Notifications.notify(Room, '流浪女回來了，帶回來了1500的木頭');
			    		}, 60 * 1000);
			    	}
			    },
			    buttons: {
			    	'leave': {
			    		text: '再見',
			    		nextScene: 'end'
			    	}
			    }
			}
		}
	},
	
	{ /* Mysterious Wanderer  --  fur gambling */
		title: '神秘流浪者',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('stores["毛皮"]');
		},
		scenes: {
			start: {
				text: [
			       '一個流浪女帶著一個空筐子來到了木屋，說如果能給她一些皮毛帶走，她之後會帶來更多',
			       "工人不知道她是否值得信任"
				],
				notification: '一個神秘的流浪女抵達',
				buttons: {
					'100fur': {
						text: '給 100',
						cost: {'毛皮': 100},
						nextScene: { 1: '100fur'}
					},
					'500fur': {
						text: '給 500',
						cost: {'毛皮': 500},
						nextScene: { 1: '500fur' }
					},
					'deny': {
						text: '攆走她',
						nextScene: 'end'
					}
				}
			},
			'100fur': {
				text: [
			       '流浪女離開了，筐子滿載皮毛'
			    ],
			    onLoad: function() {
			    	if(Math.random() < 0.5) {
			    		setTimeout(function() {
			    			$SM.add('stores["毛皮"]', 300);
			    			Notifications.notify(Room, '流浪女回來了，帶回來了300的皮毛');
			    		}, 60 * 1000);
			    	}
			    },
			    buttons: {
			    	'leave': {
			    		text: '再見',
			    		nextScene: 'end'
			    	}
			    }
			},
			'500fur': {
				text: [
				       '流浪女離開了，筐子滿載皮毛'
			    ],
			    onLoad: function() {
			    	if(Math.random() < 0.3) {
			    		setTimeout(function() {
			    			$SM.add('stores["毛皮"]', 1500);
			    			Notifications.notify(Room, '流浪女回來了，帶回來了1500的皮毛');
			    		}, 60 * 1000);
			    	}
			    },
			    buttons: {
			    	'leave': {
			    		text: '再見',
			    		nextScene: 'end'
			    	}
			    }
			}
		}
	},
	
	{ /* The Scout  --  Map Merchant */
		title: '偵察兵',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('features.location.world');
		},
		scenes: {
			'start': {
				text: [
					"這個偵察兵說她已經去過所有的地圖了",
					"她願意談談地圖，當然不是免費的"
				],
				notification: '一個偵察兵在夜幕中到來',
				buttons: {
					'buyMap': {
						text: '購買地圖',
						cost: { '毛皮': 200, '鱗片': 10 },
						notification: '地圖包含大地圖的一角',
						onChoose: World.applyMap
					},
					'learn': {
						text: '學習偵察',
						cost: { '毛皮': 1000, '鱗片': 50, '牙齒': 20 },
						available: function() {
							return !$SM.hasPerk('千里眼');
						},
						onChoose: function() {
							$SM.addPerk('千里眼');
						}
					},
					'leave': {
			    		text: '離開',
			    		nextScene: 'end'
			    	}
				}
			}
		}
	},
	
	{ /* The Wandering Master */
		title: '大師',
		isAvailable: function() {
			return Engine.activeModule == Room && $SM.get('features.location.world');
		},
		scenes: {
			'start': {
				text: [
					'一個年老的流浪漢出現了',
					'他微笑著青請求寄宿過夜'
				],
				notification: '一個年老的流浪漢出現了',
				buttons: {
					'agree': {
						text: '同意',
						cost: {
							'醃肉': 100,
							'毛皮': 100,
							'火炬': 1
						},
						nextScene: {1: 'agree'}
					},
					'deny': {
						text: '攆走他',
						nextScene: 'end'
					}
				}
			},
			'agree': {
				text: [
			       '作為交換，老流浪漢分享了他的智慧'
		        ],
		        buttons: {
		        	'evasion': {
		        		text: '逃脫術',
		        		available: function() {
		        			return !$SM.hasPerk('凌波微步');
		        		},
		        		onChoose: function() {
		        			$SM.addPerk('凌波微步');
		        		},
		        		nextScene: 'end'
		        	},
		        	'precision': {
		        		text: '精準術',
		        		available: function() {
		        			return !$SM.hasPerk('蘭花佛穴手');
		        		},
		        		onChoose: function() {
		        			$SM.addPerk('蘭花佛穴手');
		        		},
		        		nextScene: 'end'
		        	},
		        	'force': {
		        		text: '力量大師',
		        		available: function() {
		        			return !$SM.hasPerk('降龍十八掌');
		        		},
		        		onChoose: function() {
		        			$SM.addPerk('降龍十八掌');
		        		},
		        		nextScene: 'end'
		        	},
		        	'nothing': {
		        		text: '無視',
		        		nextScene: 'end'
		        	}
		        }
			}
		}
	},
		
	{ /* The Sick Man */
  		title: '病人',
  		isAvailable: function() {
  			return Engine.activeModule == Room && $SM.get('stores["醫療藥劑"]', true) > 0;
  		},
  		scenes: {
  			'start': {
  				text: [
  					"一個男人躬著身，咳嗽",
  					"他乞求一些治療藥劑"
  				],
  				notification: '一個病人蹣跚而至',
  				buttons: {
  					'help': {
  						text: '給 1 治療藥劑',
  						cost: { '醫療藥劑': 1 },
  						notification: '這個男人狼吞虎咽喝掉了治療藥劑',
  						nextScene: { 0.1: 'alloy', 0.3: 'cells', 0.5: '鳞片', 1.0: 'nothing' }
  					},
  					'ignore': {
  						text: '攆他走',
  						nextScene: 'end'
  					}
  				}
  			},
  			'alloy': {
  				text: [
  					"這個男人很感激",
  					'他留下了他的反饋',
  					'在他旅行中獲得的一些奇怪的金屬'
  				],
  				onLoad: function() {
  					$SM.add('stores["外星合金"]', 1);
			    },
  				buttons: {
  					'bye': {
  						text: '再見',
  						nextScene: 'end'
  					}
  				}
  			},
  			'cells': {
  				text: [
  					"這個男人很感激",
  					'他留下了他的反饋',
  					'在他旅行中獲得的一些奇怪的發光盒子'
  				],
  				onLoad: function() {
  					$SM.add('stores["燃料電池"]', 3);
			    },
  				buttons: {
  					'bye': {
  						text: '再見',
  						nextScene: 'end'
  					}
  				}
  			},
  			'鳞片': {
  				text: [
  					"這個男人很感激",
  					'他留下了他的反饋',
  					'在他旅行中獲得的一些鱗片'
  				],
  				onLoad: function() {
  					$SM.add('stores["鱗片"]', 5);
			    },
  				buttons: {
  					'bye': {
  						text: '再見',
  						nextScene: 'end'
  					}
  				}
  			},
  			'nothing': {
  				text: [
  					"這個男人感謝異常，揮手告別，留下一根毛"
  				],
  				buttons: {
  					'bye': {
  						text: '再見',
  						nextScene: 'end'
  					}
  				}
  		  }
  	}
	}
];
