/**
 * Events that only occur at specific times. Launched manually.
 **/
Events.Setpieces = {
	"哨站": { /* Friendly Outpost */
		title: '一個前哨戰(友善)',
		scenes: {
			'start': {
				text: [
					'一個庇護所'
				],
				notification: '一個野外的庇護所',
				loot: {
					'醃肉': {
						min: 5,
						max: 10,
						chance: 1
					}
				},
				onLoad: function() {
					World.useOutpost();
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"沼澤": { /* Swamp */
		title: '一個煙霧迷茫的沼澤',
		scenes: {
			'start': {
				text: [
					'腐爛的蘆葦漂浮在沼澤上',
					'一個孤單的青蛙靜靜的蹲坐在淤泥上'
				],
				notification: '污濁潰爛的氣息彌漫在空氣中',
				buttons: {
					'enter': {
						text: '進入',
						nextScene: {1: 'cabin'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'cabin': {
				text: [
					'沼澤深處有一個覆滿苔蘚的小屋',
					'一個年老的流浪漢在裡面, 看似精神恍惚'
				],
				buttons: {
					'talk': {
						cost: {'護身符': 1},
						text: '對話',
						nextScene: {1: 'talk'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'talk': {
				text: [
					'流浪者點頭拿過了護身符',
					'他說有一次帶領著一個大團隊抵達了一個新世界',
					'但是未知事物帶來的破壞毀滅了那個團隊, 剩余的人忍飢挨餓痛苦異常',
					'現在輪到他了, 流落在這裡深深的懺悔...'
				],
				onLoad: function() {
					$SM.addPerk('九陽神功');
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"洞穴": { /* Cave */
		title: '一個潮濕的洞穴',
		scenes: {
			'start': {
				text: [
					'洞穴的入口寬而深',
					"無法看清內部的清醒"
				],
				notification: '這裡的地面到處都是裂痕, 就好像一條條古老的大地傷痕',
				buttons: {
					'enter': {	
						text: '進入一探',
						cost: { '火炬': 1 }, //tim mark in case of bug
						nextScene: {0.3: 'a1', 0.6: 'a2', 1: 'a3'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			
			'a1': {
				combat: true,
				enemy: '野獸',
				chara: 'B',
				damage: 1,
				hit: 0.8,
				attackDelay: 1,
				health: 5,
				notification: '一頭受驚的野獸正要捍衛自己的巢穴',
				loot: {
					'毛皮': {
						min: 1,
						max: 10,
						chance: 1
					},
					'牙齒': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'b1', 1: 'b2'}
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'a2': {
				text: [
					'洞穴已經小的沒有落腳之地了',
					"牆壁很潮濕並覆滿了苔蘚"
				],
				buttons: {
					'continue': {	
						text: '擠進去',
						nextScene: {0.5: 'b2', 1: 'b3'}
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'a3': {
				text: [
					'一個老舊的營地呈現在你面前',
					'灰黑的睡袋被褥都撕裂開了, 布滿了灰塵'
				],
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 1
					},
					'火炬': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'皮革': {
						min: 1,
						max: 5,
						chance: 0.3
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'b3', 1: 'b4'}
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'b1': {
				text: [
					'一個流浪者的屍體躺在一個小穴裡面',
					"屍體高度腐爛, 一些肢體已經不見了",
					"鬼知道還剩下些甚麼有用東西"
				],
				loot: {
					'鐵劍': {
						min: 1,
						max: 1,
						chance: 1
					},
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'火炬': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'醫療藥劑': {
						min: 1,
						max: 2,
						chance: 0.1
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: { 1: 'c1' }
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'b2': {
				text: [
					'火炬熄滅在潮濕的空氣中',
					'黑暗再度來襲'
				],
				notification: '火炬熄滅了',
				buttons: {
					'continue': {	
						text: '繼續前進',
						cost: {'火炬': 1},
						nextScene: { 1: 'c1' }
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'b3': {
				combat: true,
				enemy: '野獸',
				chara: 'B',
				damage: 1,
				hit: 0.8,
				attackDelay: 1,
				health: 5,
				notification: '一個受驚的野獸正要保護它的巢穴',
				loot: {
					'毛皮': {
						min: 1,
						max: 3,
						chance: 1
					},
					'牙齒': {
						min: 1,
						max: 2,
						chance: 0.8
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'c2'}
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'b4': {
				combat: true,
				enemy: '洞穴蜥蜴',
				chara: 'L',
				damage: 3,
				hit: 0.8,
				attackDelay: 2,
				health: 6,
				notification: '一頭洞穴蜥蜴向你攻擊',
				loot: {
					'鱗片': {
						min: 1,
						max: 3,
						chance: 1
					},
					'牙齒': {
						min: 1,
						max: 2,
						chance: 0.8
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'c2'}
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'c1': {
				combat: true,
				enemy: '野獸',
				chara: 'B',
				damage: 3,
				hit: 0.8,
				attackDelay: 2,
				health: 10,
				notification: '一頭巨大的野獸衝出黑暗',
				loot: {
					'毛皮': {
						min: 1,
						max: 3,
						chance: 1
					},
					'牙齒': {
						min: 1,
						max: 3,
						chance: 1
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'end1', 1: 'end2'}
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'c2': {
				combat: true,
				enemy: '蜥蜴',
				chara: 'L',
				damage: 4,
				hit: 0.8,
				attackDelay: 2,
				health: 10,
				notification: '一隻巨大的蜥蜴躺在地上',
				loot: {
					'鱗片': {
						min: 1,
						max: 3,
						chance: 1
					},
					'牙齒': {
						min: 1,
						max: 3,
						chance: 1
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.7: 'end2', 1: 'end3'}
					},
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'end1': {
				text: [
					'一隻大型動物的巢穴就在洞穴的後方'
				],
				onLoad: function() {
					World.clearDungeon();
				},
				loot: {
					'肉': {
						min: 5,
						max: 10,
						chance: 1
					},
					'毛皮': {
						min: 5,
						max: 10,
						chance: 1
					},
					'鱗片': {
						min: 5,
						max: 10,
						chance: 1
					},
					'牙齒': {
						min: 5,
						max: 10,
						chance: 1
					},
					'布匹': {
						min: 5,
						max: 10,
						chance: 0.5
					}
				},
				buttons: {
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'end2': {
				text: [
					'一個小型供給點隱藏在洞穴後方'
				],
				loot: {
					'布匹': {
						min: 5,
						max: 10,
						chance: 1
					},
					'皮革': {
						min: 5,
						max: 10,
						chance: 1
					},
					'鐵': {
						min: 5,
						max: 10,
						chance: 1
					},
					'醃肉': {
						min: 5,
						max: 10,
						chance: 1
					},
					'鋼': {
						min: 5,
						max: 10,
						chance: 0.5
					},
					'鏈球': {
						min: 1,
						max: 3,
						chance: 0.3
					},
					'醫療藥劑': {
						min: 1,
						max: 4,
						chance: 0.15
					}
				},
				onLoad: function() {
					World.clearDungeon();
				},
				buttons: {
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			},
			'end3': {
				text: [
					'一個老舊的包裹嵌在石頭後方, 滿布灰塵'
				],
				loot: {
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 1
					},
					'鏈球': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'醫療藥劑': {
						min: 1,
						max: 3,
						chance: 0.3
					}
				},
				onLoad: function() {
					World.clearDungeon();
				},
				buttons: {
					'leave': {
						text: '離開洞穴',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"小鎮": { /* Town */
		title: '一個沙漠小鎮',
		scenes: {
			'start': {
				text: [
					'一個小型社區座落在前方, 房子都燒焦殘破了',
					"路燈都破爛鏽跡斑斑, 這個地方失去光明很舊了"
				],
				notification: "小鎮廢棄在前方, 裡面的居民已經死了很久了",
				buttons: {
					'enter': {	
						text: '探索',
						nextScene: {0.3: 'a1', 0.7: 'a3', 1: 'a2'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			
			'a1': {
				text: [
					"學校房屋的玻璃窗都沒有碎掉, 但是都被熏黑了",
					'大門吱吱不停的搖曳在殘風中'
				],
				buttons: {
					'enter': {
						text: '進入',
						nextScene: {0.5: 'b1', 1: 'b2'},
						cost: {'火炬': 1}	//tim tag in case of bug
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			
			'a2': {
				combat: true,
				enemy: '暴徒',
				chara: 'T',
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
				'醃肉': {
					min: 1,
					max: 5,
					chance: 0.5
				}
				},
				notification: '街頭有埋伏',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'b3', 1: 'b4'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'a3': {
				text: [
					"前方有一座建築物",
					'在骯髒的窗子後面有一個綠十字'
				],
				buttons: {
					'enter': {
						text: '進入',
						nextScene: {0.5: 'b5', 1: 'end5'},
						cost: {'火炬': 1} //tim mark, in case of bug
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'b1': {
				text: [
					'生鏽的鎖櫃裡面有一些供給品'
				],
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 1
					},
					'火炬': {
						min: 1,
						max: 3,
						chance: 0.8
					},
					'子彈': {
						min: 1,
						max: 5,
						chance: 0.3
					},
					'醫療藥劑': {
						min: 1,
						max: 3,
						chance: 0.05
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'c1', 1: 'c2'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'b2': {
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
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.5
					}
				},
				notification: '一個清道夫就在門裡面',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'c2', 1: 'c3'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'b3': {
				combat: true,
				enemy: '野獸',
				chara: 'B',
				damage: 3,
				hit: 0.8,
				attackDelay: 1,
				health: 25,
				loot: {
					'牙齒': {
						min: 1,
						max: 5,
						chance: 1
					},
					'毛皮': {
						min: 5,
						max: 10,
						chance: 1
					}
				},
				notification: '有一頭野獸坐在雜草叢生的公園內',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'c4', 1: 'c5'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'b4': {
				text: [
					'一個撞翻的大篷車中的物件灑落在整個街道',
					"拾荒者已經掃蕩過一遍了, 但是應該還找得到一些有用的東西"
				],
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'火炬': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'子彈': {
						min: 1,
						max: 5,
						chance: 0.3
					},
					'醫療藥劑': {
						min: 1,
						max: 3,
						chance: 0.1
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'c5', 1: 'c6' }
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'b5': {
				combat: true,
				enemy: '瘋徒',
				chara: 'M',
				damage: 6,
				hit: 0.3,
				attackDelay: 1,
				health: 10,
				loot: {
					'布匹': {
						min: 2,
						max: 4,
						chance: 0.3
					},
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.9
					},
					'醫療藥劑': {
						min: 1,
						max: 2,
						chance: 0.4
					}
				},
				notification: '一個瘋子尖叫著攻擊你',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.3: 'end5', 1: 'end6'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'c1': {
				combat: true,
				enemy: '暴徒',
				chara: 'T',
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
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.5
					}
				},
				notification: '一個暴徒走出了陰影',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'd1'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'c2': {
				combat: true,
				enemy: '野獸',
				chara: 'B',
				damage: 3,
				hit: 0.8,
				attackDelay: 1,
				health: 25,
				loot: {
					'牙齒': {
						min: 1,
						max: 5,
						chance: 1
					},
					'毛皮': {
						min: 5,
						max: 10,
						chance: 1
					}
				},
				notification: '一頭野獸衝突了已經空蕩蕩的教室',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'd1'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'c3': {
				text: [
				'在通過體育館大門的時候, 腳步聲清晰可聞',
				'火炬照亮了走廊',
				'腳步聲停了下來'
			],
			buttons: {
				'continue': {
						text: '進入',
						nextScene: {1: 'd1'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
			}
			},
			'c4': {
				combat: true,
				enemy: '野獸',
				chara: 'B',
				damage: 4,
				hit: 0.8,
				attackDelay: 1,
				health: 25,
				loot: {
					'牙齒': {
						min: 1,
						max: 5,
						chance: 1
					},
					'毛皮': {
						min: 5,
						max: 10,
						chance: 1
					}
				},
				notification: '通過噪聲可以感覺到另外一頭野獸, 在樹林裡面',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'd2'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'c5': {
				text: [
					"有甚麼事情在下邊的路上引起了騷動",
					"可能是戰鬥"
				],
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'd2'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'c6': {
				text: [
					'一個裝滿食物的小籃子隱藏在公園的長椅下, 上面還有個紙條',
					"看不懂寫的甚麼"
				],
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 1
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'd2'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'd1': {
				combat: true,
				enemy: '清道夫',
				chara: 'S',
				damage: 5,
				hit: 0.8,
				attackDelay: 2,
				health: 30,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 1
					},
					'皮革': {
						min: 5,
						max: 10,
						chance: 0.8
					},
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 0.5
					}
				},
				notification: '一個驚慌的清道夫尖叫著闖過了大門',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'end1', 1: 'end2'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'd2': {
				combat: true,
				enemy: '警員',
				chara: 'V',
				damage: 6,
				hit: 0.8,
				attackDelay: 2,
				health: 30,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 1
					},
					'皮革': {
						min: 5,
						max: 10,
						chance: 0.8
					},
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 0.5
					}
				},
				notification: "一個男人站在死去的流浪漢邊上, 意識到他不是唯一的人類",
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'end3', 1: 'end4'}
					},
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'end1': {
				text: [
					'清道夫有一個小營地在學校裡面',
					'收集的各種垃圾散落在地面上, 就好像是從天上下下來的'
				],
				onLoad: function() {
					World.clearDungeon();
				},
				loot: {
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 1
					},
					'鋼': {
						min: 5,
						max: 10,
						chance: 1
					},
					'醃肉': {
						min: 5,
						max: 10,
						chance: 1
					},
					'鏈球': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'醫療藥劑': {
						min: 1,
						max: 2,
						chance: 0.3
					}
				},
				buttons: {
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'end2': {
				text: [
					"清道夫似乎一直在尋找各種物資",
					"不好意思, 我笑納了"
				],
				onLoad: function() {
					World.clearDungeon();
				},
				loot: {
					'煤': {
						min: 5,
						max: 10,
						chance: 1
					},
					'醃肉': {
						min: 5,
						max: 10,
						chance: 1
					},
					'皮革': {
						min: 5,
						max: 10,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'end3': {
				text: [
					"流浪漢身體下有一些東西, 手上也抓著很多, 閃閃發光",
					"真值得一殺"
				],
				onLoad: function() {
					World.clearDungeon();
				},
				loot: {
					'步槍': {
						min: 1,
						max: 1,
						chance: 1
					},
					'子彈': {
						min: 1,
						max: 5,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'end4': {
				text: [
					"以牙還牙相當公平",
					"無往而不利",
					"骨頭撿起來之後發現了一些小東西"
				],
				onLoad: function() {
					World.clearDungeon();
				},
				loot: {
					'醃肉': {
						min: 5,
						max: 10,
						chance: 1
					},
					'鐵': {
						min: 5,
						max: 10,
						chance: 1
					},
					'火炬': {
						min: 1,
						max: 5,
						chance: 1
					},
					'鏈球': {
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
				buttons: {
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'end5': {
				text: [
					'抽屜裡面有一些治療藥劑'
				],
				onLoad: function() {
					World.clearDungeon();
				},
				loot: {
					'醫療藥劑': {
						min: 2,
						max: 5,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			},
			'end6': {
				text: [
					'診所已經被洗劫一空',
					'只有污濁的塵土依舊'
				],
				onLoad: function() {
					World.clearDungeon();
				},
				buttons: {
					'leave': {
						text: '離開小鎮',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"城鎮": { /* City */
		title: '一座詛咒之城',
		scenes: {
			'start': {
				text: [
					'一個可憐的高速公路標志座落在這座曾經的大城市的入口',
					"曾經壯觀的高塔就好比是野獸的身體突出部位一般詭異",
					'可能有一些有用的東西在裡面'
				],
				notification: "一個破損的高塔指向天際",
				buttons: {
					'enter': {	
						text: '探索',
						nextScene: {0.2: 'a1', 0.5: 'a2', 0.8: 'a3', 1: 'a4'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'a1': {
				text:[
					'街道都是空的',
					'空氣飄滿了灰塵, 任憑風吹雨打'
				],
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'b1', 1: 'b2'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'a2': {
				text:[
					'橙色的交通警示標記平方在街道上, 不過都破爛得不行了',
					'燈光閃爍在建築的縫隙中'
				],
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'b3', 1: 'b4'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'a3': {
				text: [
					'一直巨大的棚屋延綿穿過了街區',
					'一張張灰黑布滿血跡的臉從小破屋裡面伸出來'
				],
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'b5', 1: 'b6'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'a4': {
				text: [
					'一個廢棄的醫院座落在前方'
				],
				buttons: {
					'enter': {
						text: '進入',
						cost: { '火炬': 1 },
						nextScene: {0.5: 'b7', 1: 'b8'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b1': {
				text: [
					'塔的內部似乎保存完整',
					'燒爛的汽車殼子擋住了入口',
					'大多數的落地窗戶被搗毀了'
				],
				buttons: {
					'enter': {	
						text: '進入',
						nextScene: {0.5: 'c1', 1: 'c2'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b2': {
				combat: true,
				notification: '一個巨大的蜥蜴打破了老地鐵站的寧靜',
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
				buttons: {
					'descend': {	
						text: '拜訪',
						nextScene: {0.5: 'c2', 1: 'c3'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b3': {
				notification: '槍響在街道上產生回聲',
				combat: true,
				enemy: '狙擊手',
				chara: 'S',
				damage: 15,
				hit: 0.8,
				attackDelay: 4,
				health: 30,
				ranged: true,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
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
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'c4', 1: 'c5'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b4': {
				notification: '士兵在建築之間戰鬥, 奔跑和射擊',
				combat: true,
				enemy: '士兵',
				ranged: true,
				chara: 'D',
				damage: 8,
				hit: 0.8,
				attackDelay: 2,
				health: 50,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
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
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'c5', 1: 'c6'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b5': {
				notification: '一個看上去挺斯文的人擋住去路並挑舋',
				combat: true,
				enemy: '斯文禽獸',
				chara: 'M',
				damage: 1,
				hit: 0.8,
				attackDelay: 2,
				health: 10,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'皮革': {
						min: 1,
						max: 1,
						chance: 0.2
					},
					'醫療藥劑': {
						min: 1,
						max: 3,
						chance: 0.05
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'c7', 1: 'c8'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b6': {
				text: [
					'除了低垂的眼簾',
					'這個人很舊以前就被殺死了'
				],
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'c8', 1: 'c9'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b7': {
				text: [
					'空蕩的走廊',
					'清道夫已經把這搜刮乾淨了'
				],
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.3: 'c12', 0.7: 'c10', 1: 'c11'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'b8': {
				notification: '一個老人揮舞著手術刀衝了過來',
				combat: true,
				enemy: '老傢伙',
				chara: 'M',
				damage: 3,
				hit: 0.5,
				attackDelay: 2,
				health: 10,
				loot: {
					'醃肉': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'醫療藥劑': {
						min: 1,
						max: 2,
						chance: 0.5
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.3: 'c13', 0.7: 'c11', 1: 'end15'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			'c1': {
				notification: '一個暴徒等在另外一邊牆那',
				combat: true,
				enemy: '暴徒',
				chara: 'T',
				damage: 3,
				hit: 0.8,
				attackDelay: 2,
				health: 30,
				loot: {
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 0.5
					},
					'醃肉': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'd1', 1: 'd2'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c2': {
				notification: '一頭咆哮著的野獸從車後面跳出來',
				combat: true,
				enemy: '野獸',
				chara: 'B',
				damage: 2,
				hit: 0.8,
				attackDelay: 1,
				health: 30,
				loot: {
					'肉': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'毛皮': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'牙齒': {
						min: 1,
						max: 5,
						chance: 0.5
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {1: 'd2'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c3': {
				text: [
					'地鐵站上方的街道已經被摧毀了',
					'一些光線照射到陰霾的塵土中',
					'前方傳來一些聲響'
				],
				buttons: {
					'enter': {	
						text: '調查',
						cost: { '火炬': 1 },
						nextScene: {0.5: 'd2', 1: 'd3'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c4': {
				text: [
					'好像前方有一個營地',
					'生鏽的鏈條東拉西扯的',
					'大火災庭院前燃燒'
				],
				buttons: {
					'enter': {	
						text: '繼續前進',
						nextScene: {0.5: 'd4', 1: 'd5'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c5': {
				text: [
					'前方傳來更多的聲響',
					'肯定有甚麼事情發生了'
				],
				buttons: {
					'enter': {	
						text: '繼續前進',
						nextScene: {1: 'd5'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c6': {
				text: [
					'風中傳來槍響',
					'前方街道閃光連連'
				],
				buttons: {
					'enter': {	
						text: '繼續前進',
						nextScene: {0.5: 'd5', 1: 'd6'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c7': {
				text: [
					'越來越多的人擠過來了',
					'有人扔出一塊石頭'
				],
				buttons: {
					'enter': {	
						text: '繼續前進',
						nextScene: {0.5: 'd7', 1: 'd8'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c8': {
				text: [
					'一個簡易車間被安置在路邊',
					'店主堅強的站在邊上'
				],
				loot: {
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 0.8
					},
					'步槍': {
						min: 1,
						max: 1,
						chance: 0.5
					},
					'子彈': {
						min: 1,
						max: 8,
						chance: 0.25
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.01
					},
					'醫療藥劑': {
						min: 1,
						max: 4,
						chance: 0.5
					}
				},
				buttons: {
					'enter': {	
						text: '繼續前進',
						nextScene: {1: 'd8'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c9': {
				text: [
					'很多肉條曬在路邊',
					'人們紛紛後退, 躲閃著眼光'
				],
				loot: {
					'醃肉': {
						min: 5,
						max: 10,
						chance: 1
					}
				},
				buttons: {
					'enter': {	
						text: '繼續前進',
						nextScene: {0.5: 'd8', 1: 'd9'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
						}
			}
			},
			
			'c10': {
				text: [
					'有人反鎖了手術室的門'
				],
				buttons: {
					'enter': {	
						text: '繼續前進',
						nextScene: {0.2: 'end12', 0.6: 'd10', 1: 'd11'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c11': {
				notification: '老人們的蝸居就在這間病房',
				combat: true,
				enemy: '一群難民',
				plural: true,
				chara: 'SSS',
				damage: 2,
				hit: 0.7,
				attackDelay: 0.5,
				health: 40,
				loot: {
					'醃肉': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'布匹': {
						min: 3,
						max: 8,
						chance: 0.8
					},
					'醫療藥劑': {
						min: 1,
						max: 3,
						chance: 0.3
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'end10' }
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c12': {
				notification: '一群蜥蜴在角落裡',
				combat: true,
				enemy: '一群蜥蜴',
				plural: true,
				chara: 'LLL',
				damage: 4,
				hit: 0.7,
				attackDelay: 0.7,
				health: 30,
				loot: {
					'肉': {
						min: 3,
						max: 8,
						chance: 1
					},
					'牙齒': {
						min: 2,
						max: 4,
						chance: 1
					},
					'鱗片': {
						min: 3,
						max: 5,
						chance: 1
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'end10' }
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'c13': {
				text: [
					'肉條掛在房間裡面風乾'
				],
				loot: {
					'醃肉': {
						min: 3,
						max: 10,
						chance: 1
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 0.5: 'end10', 1: 'end11' }
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
						
			'd1': {
				notification: '樓梯盡頭有一個巨大的鳥巢',
				combat: true,
				enemy: '怪鳥',
				chara: 'B',
				damage: 5,
				hit: 0.7,
				attackDelay: 1,
				health: 45,
				loot: {
					'肉': {
						min: 5,
						max: 10,
						chance: 0.8
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'end1', 1: 'end2'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd2': {
				text: [
					"這裡碎片密佈",
					"可能在碎片中會有一些有用的東西"
				],
				loot: {
					'子彈': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'鋼': {
						min: 1,
						max: 10,
						chance: 0.8
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.01
					},
					'布匹': {
						min: 1,
						max: 10,
						chance: 1
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {1: 'end2'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd3': {
				notification: '一大群老鼠衝入隧道',
				combat: true,
				enemy: '一群老鼠',
				plural: true,
				chara: 'RRR',
				damage: 1,
				hit: 0.8,
				attackDelay: 0.25,
				health: 60,
				loot: {
					'毛皮': {
						min: 5,
						max: 10,
						chance: 0.8
					},
					'牙齒': {
						min: 5,
						max: 10,
						chance: 0.5
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {0.5: 'end2', 1: 'end3'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd4': {
				notification: '一個高大的男人揮舞著刺刀進行攻擊',
				combat: true,
				enemy: '老兵',
				chara: 'V',
				damage: 3,
				hit: 0.8,
				attackDelay: 2,
				health: 45,
				loot: {
					'刺刀': {
						min: 1,
						max: 1,
						chance: 0.5
					},
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'end4', 1: 'end5'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd5': {
				notification: '第二個士兵開火了',
				combat: true,
				enemy: '士兵',
				ranged: true,
				chara: 'D',
				damage: 8,
				hit: 0.8,
				attackDelay: 2,
				health: 50,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
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
					}
				},
				buttons: {
					'continue': {	
						text: '繼續前進',
						nextScene: {1: 'end5'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd6': {
				notification: '一個蒙面士兵持槍站在角落',
				combat: true,
				enemy: '民兵',
				chara: 'C',
				ranged: true,
				damage: 3,
				hit: 0.9,
				attackDelay: 2,
				health: 55,
				loot: {
					'步槍': {
						min: 1,
						max: 1,
						chance: 0.5
					},
					'子彈': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'end5', 1: 'end6'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd7': {
				notification: '人群湧動',
				combat: true,
				enemy: '一群難民',
				plural: true,
				chara: 'SSS',
				damage: 2,
				hit: 0.7,
				attackDelay: 0.5,
				health: 40,
				loot: {
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'牙齒': {
						min: 1,
						max: 5,
						chance: 0.5
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'end7', 1: 'end8'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd8': {
				notification: '小年輕拿了根樹枝就跳出來了',
				combat: true,
				enemy: '洗剪吹',
				chara: 'Y',
				damage: 2,
				hit: 0.7,
				attackDelay: 1,
				health: 45,
				loot: {
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'牙齒': {
						min: 1,
						max: 5,
						chance: 0.5
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'end8'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd9': {
				notification: '有個人堅守在小木屋的門口',
				combat: true,
				enemy: '難民',
				chara: 'S',
				damage: 3,
				hit: 0.8,
				attackDelay: 2,
				health: 20,
				loot: {
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'牙齒': {
						min: 1,
						max: 5,
						chance: 0.5
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {0.5: 'end8', 1: 'end9'}
					},
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'd10': {
				notification: '在門後的一個畸形人進行攻擊',
				combat: true,
				enemy: '畸形人',
				chara: 'D',
				damage: 8,
				hit: 0.6,
				attackDelay: 2,
				health: 40,
				loot: {
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'牙齒': {
						min: 2,
						max: 2,
						chance: 1
					},
					'鋼': {
						min: 1,
						max: 3,
						chance: 0.6
					},
					'鱗片': {
						min: 2,
						max: 3,
						chance: 0.1
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'end14'}
					}
				}
			},
			
			'd11': {
				notification: '門隻要開了一點, 幾百個觸手就湧過來',
				combat: true,
				enemy: '滿天觸手',
				plural: true,
				chara: 'TTT',
				damage: 2,
				hit: 0.6,
				attackDelay: 0.5,
				health: 60,
				loot: {
					'肉': {
						min: 10,
						max: 20,
						chance: 1
					}
				},
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: {1: 'end13'}
					}
				}
			},
		
			'end1': {
				text: [
					'鳥兒都喜歡閃亮的東西',
					'它們的巢裡面經常有好東西'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'子彈': {
						min: 5,
						max: 10,
						chance: 0.8
					},
					'鏈球': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.5
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end2': {
				text: [
					'沒甚麼東西了',
					'清道夫已經來過這裡了'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'火炬': {	//tim mark, incase of bug
						min: 1,
						max: 5,
						chance: 0.8
					},
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.5
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end3': {
				text: [
					'隧道通向一個平台',
					'殘破的牆壁',
					'肢體和供給散落在牆壁兩旁'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'步槍': {
						min: 1,
						max: 1,
						chance: 0.8
					},
					'子彈': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'鐳射槍': {
						min: 1,
						max: 1,
						chance: 0.3
					},
					'燃料電池': {
						min: 1,
						max: 5,
						chance: 0.3
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.3
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			
			'end4': {
				text: [
					'小型軍事哨站補給充分',
					'武器彈藥整理的排列在儲藏室的地上',
					'跟以往一樣的致命'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'步槍': {
						min: 1,
						max: 1,
						chance: 1
					},
					'子彈': {
						min: 1,
						max: 10,
						chance: 1
					},
					'手雷': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end5': {
				text: [
					'搜索屍體會得到一些物資',
					'路上會遇到更多的屍體的',
					'該離開了'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'步槍': {
						min: 1,
						max: 1,
						chance: 1
					},
					'子彈': {
						min: 1,
						max: 10,
						chance: 1
					},
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'醫療藥劑': {
						min: 1,
						max: 4,
						chance: 0.1
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end6': {
				text: [
					'小型定居點已經燒了一陣子了',
					'透過火焰仍可看到在燃燒的屍體',
					"還有時間取得一些物資"
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'鐳射槍': {
						min: 1,
						max: 1,
						chance: 0.5
					},
					'燃料電池': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'醃肉': {
						min: 1,
						max: 10,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			
			'end7': {
				text: [
					'剩下的居民四處逃逸, 他們的物資都被拋下了',
					"還能找到一些有用的東西, 雖然不多"
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 0.8
					},
					'燃料電池': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'醃肉': {
						min: 1,
						max: 10,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end8': {
				text: [
					'那個年輕的居民背著的是帆布包',
					"裡面有一些旅行用品和幾個裝飾品",
					"沒別的了"
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'鋼劍': {
						min: 1,
						max: 1,
						chance: 0.8
					},
					'鏈球': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'醃肉': {
						min: 1,
						max: 10,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end9': {
				text: [
					'小木屋內, 一個孩子在哭',
					"有幾個行李靠在牆邊",
					"沒有東西了"
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'步槍': {
						min: 1,
						max: 1,
						chance: 0.8
					},
					'子彈': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'鏈球': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.2
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end10': {
				text: [
					'腐爛和死亡的氣息彌漫在手術室',
					"有一些東西散落在地上",
					'沒有其他東西了'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'燃料電池': {
						min: 1,
						max: 1,
						chance: 0.3
					},
					'醫療藥劑': {
						min: 1,
						max: 5,
						chance: 0.3
					},
					'牙齒': {
						min: 3,
						max: 8,
						chance: 1
					},
					'鱗片': {
						min: 4,
						max: 7,
						chance: 0.9
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end11': {
				text: [
					'一個樸素的藥箱在走廊盡頭',
					"醫院裡面已經沒甚麼了"
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'燃料電池': {
						min: 1,
						max: 1,
						chance: 0.2
					},
					'醫療藥劑': {
						min: 3,
						max: 10,
						chance: 1
					},
					'牙齒': {
						min: 1,
						max: 2,
						chance: 0.2
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end12': {
				text: [
					'肯定有人一直儲備東西在這裡'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'燃料電池': {
						min: 1,
						max: 3,
						chance: 0.2
					},
					'醫療藥劑': {
						min: 3,
						max: 10,
						chance: 0.5
					},
					'子彈': {
						min: 2,
						max: 8,
						chance: 1
					},
					'火炬': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'手雷': {
						min: 1,
						max: 1,
						chance: 0.5
					},
					'外星合金': {
						min: 1,
						max: 2,
						chance: 0.8
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end13': {
				text: [
					'恐怖觸手被幾百了',
					'裡面到處都是遇難者的屍體'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'鋼劍': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'步槍': {
						min: 1,
						max: 2,
						chance: 0.3
					},
					'牙齒': {
						min: 2,
						max: 8,
						chance: 1
					},
					'布匹': {
						min: 3,
						max: 6,
						chance: 0.5
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.1
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end14': {
				text: [
					'扭曲的男人死了',
					'手術室有很多奇怪的設備'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'燃料電池': {
						min: 2,
						max: 5,
						chance: 0.8
					},
					'醫療藥劑': {
						min: 3,
						max: 12,
						chance: 1
					},
					'布匹': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'鋼': {
						min: 2,
						max: 3,
						chance: 0.3
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.3
					}
				},
				buttons: {
					'leave': {
						text: '離開城市',
						nextScene: 'end'
					}
				}
			},
			
			'end15': {
				text: [
					'這個老人有一些有趣的小收藏'
				],
				onLoad: function() {
					World.clearDungeon();
					$SM.set('game.cityCleared', true);
				},
				loot: {
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.8
					},
					'醫療藥劑': {
						min: 1,
						max: 4,
						chance: 1
					},
					'醃肉': {
						min: 3,
						max: 7,
						chance: 1
					},
					'鏈球': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'毛皮': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				buttons: {
				'leave': {
					text: '離開城市',
					nextScene: 'end'
				}
			}
			}
		}	
	},
	"廢屋": { /* Abandoned House */
		title: '一所老房子',
		scenes: {
			'start': {
				text: [
					'一所老房子依舊留存著, 白色的外牆泛黃脫落',
					'門開著'
				],
				notification: '老房子好比是一座對時代的紀念碑一般',
				buttons: {
					'enter': {
						text: '進入一探',
						nextScene: { 0.25: 'medicine', 0.5: 'supplies', 1: 'occupied' }
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'supplies': {
				text: [
					'房子雖然被廢棄了, 但是還有一些東西',
					'水井裡面依舊有水'
				],
				onLoad: function() {
					World.markVisited(World.curPos[0], World.curPos[1]);
					World.setWater(World.getMaxWater());
					Notifications.notify(null, '水滿了');
				},
				loot: {
 					'醃肉': {
 						min: 1,
 						max: 10,
 						chance: 0.8
 					},
					'皮革': {
						min: 1,
						max: 10,
						chance: 0.2
					},
					'布匹': {
						min: 1,
						max: 10,
						chance: 0.5
					}
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'medicine': {
				text: [
					'房子已經被洗劫一空了',
					'但是地板下面還有一些醫療用品'
				],
				onLoad: function() {
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				loot: {
					'醫療藥劑': {
						min: 2,
						max: 5,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'occupied': {
				combat: true,
				enemy: '難民',
				chara: 'S',
				damage: 3,
				hit: 0.8,
				attackDelay: 2,
				health: 10,
				notification: '一個男人佔據著大廳, 手持大刀',
				onLoad: function() {
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				loot: {
 					'醃肉': {
 						min: 1,
 						max: 10,
 						chance: 0.8
 					},
					'皮革': {
						min: 1,
						max: 10,
						chance: 0.2
					},
					'布匹': {
						min: 1,
						max: 10,
						chance: 0.5
					}
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"戰場": { /* Discovering an old battlefield */
		title: '遺落戰場',
		scenes: {
			'start': {
				text: [
					'很久以前的大戰',
					'雙方的高科技造成了如此壯觀的景象'
				],
				onLoad: function() {
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				loot: {
					'步槍': {
						min: 1,
						max: 3,
						chance: 0.5
					},
					'子彈': {
						min: 5,
						max: 20,
						chance: 0.8
					},
					'鐳射槍': {
						min: 1,
						max: 3,
						chance: 0.3
					},
					'燃料電池': {
						min: 5,
						max: 10,
						chance: 0.5
					},
					'手雷': {
						min: 1,
						max: 5,
						chance: 0.5
					},
					'外星合金': {
						min: 1,
						max: 1,
						chance: 0.3
					}
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"巨坑": { /* Admiring a huge borehole */
		title: '一個巨坑',
		scenes: {
			'start': {
				text: [
					'一個巨大的深坑切入地表',
					'他們拿走所需, 拍拍屁股',
					'通過懸崖邊依舊能看清龐大的廢棄場'
				],
				onLoad: function() {
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				loot: {
					'外星合金': {
						min: 1,
						max: 3,
						chance: 1
					}
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"飛船": { /* Finding a way off this rock */
		title: '破損的飛船',
		scenes: {
			'start': {
				onLoad: function() {
					World.markVisited(World.curPos[0], World.curPos[1]);
					World.drawRoad();
					World.state.ship = true;
				},
				text: [
					'塵土和灰燼之下流露出熟悉的各種曲線. ',
					"很幸運當地人不會機械",
					'飛船可以被修復'
				],
				buttons: {
					'leavel': {
						text: '打撈',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"硫磺礦": { /* Clearing the Sulphur Mine */
		title: '一座硫磺礦',
		scenes: {
			'start': {
				text: [
					"軍隊已經駐扎在礦井入口了",
					'巡邏兵挎著步槍'
				],
				notification: '軍隊已經駐扎在礦井入口了',
				buttons: {
					'attack': {	
						text: '攻擊',
						nextScene: {1: 'a1'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'a1': {
				combat: true,
				enemy: '士兵',
				ranged: true,
				chara: 'D',
				damage: 8,
				hit: 0.8,
				attackDelay: 2,
				health: 50,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
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
					}
				},
				notification: '一個士兵發現並開火了',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'a2' }
					},
					'run': {
						text: '逃跑',
						nextScene: 'end'
					}
				}
			},
			'a2': {
				combat: true,
				enemy: '士兵',
				ranged: true,
				chara: 'D',
				damage: 8,
				hit: 0.8,
				attackDelay: 2,
				health: 50,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
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
					}
				},
				notification: '第二個士兵加入戰鬥',
 				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'a3' }
					},
					'run': {
						text: '逃跑',
						nextScene: 'end'
					}
				}
			},
			'a3': {
				combat: true,
				enemy: '老兵',
				chara: 'V',
				damage: 10,
				hit: 0.8,
				attackDelay: 2,
				health: 65,
				loot: {
					'刺刀': {
						min: 1,
						max: 1,
						chance: 0.5
					},
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				notification: '一個頭發花白的士兵加入戰鬥, 揮舞著刺刀',
 				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'cleared' }
					}
				}
			},
			'cleared': {
				text: [
					'軍隊已經被清除',
					'礦坑現在可以工作了'
				],
				notification: '硫磺礦解除危險了',
				onLoad: function() {
					World.drawRoad();
					World.state.sulphurmine = true;
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"煤礦": { /* Clearing the Coal Mine */
		title: '一座煤礦',
		scenes: {
			'start': {
				text: [
					'礦坑入口篝火很旺',
					'有人帶著武器駐守在那'
				],
				notification: '這座老礦坑沒有被遺棄',
				buttons: {
					'attack': {	
						text: '攻擊',
						nextScene: {1: 'a1'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'a1': {
				combat: true,
				enemy: '壯漢',
				chara: 'M',
				damage: 3,
				hit: 0.8,
				attackDelay: 2,
				health: 10,
				loot: {
					'醃肉': {
						min: 1,
						max: 5,
						chance: 0.8
					},
					'布匹': {
						min: 1,
						max: 5,
						chance: 0.8
					}
				},
				notification: '一個人加入戰鬥攻擊',
				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'a2' }
					},
					'run': {
						text: '逃跑',
						nextScene: 'end'
					}
				}
			},
			'a2': {
				combat: true,
 				enemy: '壯漢',
 				chara: 'M',
 				damage: 3,
 				hit: 0.8,
 				attackDelay: 2,
 				health: 10,
 				loot: {
					'醃肉': {
						min: 1,
 						max: 5,
						chance: 0.8
					},
					'布匹': {
						min: 1,
 						max: 5,
						chance: 0.8
					}
 				},
 				notification: '一個人加入戰鬥',
 				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'a3' }
					},
					'run': {
						text: '逃跑',
						nextScene: 'end'
					}
				}
			},
			'a3': {
				combat: true,
 				enemy: 'chief',
 				chara: 'C',
 				damage: 5,
 				hit: 0.8,
 				attackDelay: 2,
 				health: 20,
 				loot: {
					'醃肉': {
						min: 5,
 						max: 10,
						chance: 1
					},
					'布匹': {
						min: 5,
 						max: 10,
						chance: 0.8
					},
					'鐵': {
						min: 1,
						max: 5,
						chance: 0.8
					}
 				},
 				notification: '只有老大還在',
 				buttons: {
					'continue': {
						text: '繼續前進',
						nextScene: { 1: 'cleared' }
					}
				}
			},
			'cleared': {
				text: [
					'營地依舊, 還有火焰燃燒的聲音',
					'礦坑安全了'
				],
				notification: '礦坑解除危險了',
				onLoad: function() {
					World.drawRoad();
					World.state.coalmine = true;
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	},
	"鐵礦": { /* Clearing the Iron Mine */
		title: '一個鐵礦',
 		scenes: {
			'start': {
				text: [
					'一個老礦坑在那, 生鏽的工具被亂丟',
					'各種白骨散落一地, 上面還有深深的齒痕',
					'黑暗中傳來野性的咆哮'
				],
				notification: '通向礦坑的小路',
				buttons: {
					'enter': {
						text: '進入一探',
						nextScene: { 1: 'enter' },
						cost: { '火炬': 1 }
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
 			'enter': {
 				combat: true,
 				enemy: '獸女',
 				chara: 'M',
 				damage: 4,
 				hit: 0.8,
 				attackDelay: 2,
 				health: 10,
 				loot: {
 					'牙齒': {
 						min: 5,
 						max: 10,
 						chance: 1
 					},
					'鱗片': {
						min: 5,
 						max: 10,
						chance: 0.8
					},
					'布匹': {
						min: 5,
 						max: 10,
						chance: 0.5
					}
 				},
 				notification: '一個巨大的生物出現, 肌肉大到爆',
 				buttons: {
					'leave': {
						text: '離開',
						nextScene: { 1: 'cleared' }
					}
				}
 			},
			'cleared': {
				text: [
					'野獸死了',
					'礦坑安全了'
				],
				notification: '礦坑解除危險了',
				onLoad: function() {
					World.drawRoad();
					World.state.ironmine = true;
					World.markVisited(World.curPos[0], World.curPos[1]);
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
 		}
	},
	
	"臨時": { /* Cache - contains some of supplies from previous game */
		title: '一個毀滅的村庄',
		scenes: {
			'start': {
				text: [
					'毀滅的村子到處都是灰塵',
					'破爛的屍體到處都是'
				],
				notification: '被燒焦的屍體掛在空中',
				buttons: {
					'enter': {
						text: '進入',
						nextScene: {1: 'underground'}
					},
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'underground': {
				text: [
					'一個木屋處理在村子中心',
					'裡面還有一些物資'
				],
				buttons: {
					'take': {
						text: '拿走',
						nextScene: {1: 'exit'}
					}
				}
			},
			'exit': {
				text: [
					'前代人的痕跡就在這裡了',
					'是時候採摘果實了'
				],
				onLoad: function() {
					World.markVisited(World.curPos[0], World.curPos[1]);
					Prestige.collectStores();
				},
				buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			}
		}
	}
};
