/**
 * Events that can occur when any module is active (Except World. It's special.)
 **/
Events.Global = [
	{ /* The Thief */
		title: '小偷',
		isAvailable: function() {
			return (Engine.activeModule == Room || Engine.activeModule == Outside) && $SM.get('game["小偷"]') == 1;
		},
		scenes: {
			'start': {
				text: [
					'村名們從儲藏室拖出了一個骯髒的傢伙',
					"他的家人偷走了一些物資",
					'他應該被絞死以示懲罰'
				],
				notification: '一個小偷被抓住了',
				buttons: {
					'kill': {
						text: '吊死他',
						nextScene: {1: 'hang'}
					},
					'spare': {
						text: '釋放他',
						nextScene: {1: 'spare'}
					}
				}
			},
			'hang': {
				text: [
			       '村名們把小偷吊死在了儲藏室前面',
			       '在強大的壓力下，丟失的物資很快就被退回來了'
		        ],
		        onLoad: function() {
		        	$SM.set('game["小偷"]', 2);
		        	$SM.remove('income["小偷"]');
		        	$SM.addM('stores', $SM.get('game.stolen'));
		        },
		        buttons: {
					'leave': {
						text: '離開',
						nextScene: 'end'
					}
				}
			},
			'spare': {
				text: [
			       "小偷感謝不殺之恩，他說再也不偷了",
			       "他在離開之前把他的那些偷偷摸摸的技巧分享給了大家"
		        ],
		        onLoad: function() {
		        	$SM.set('game["小偷"]', 2);
		        	$SM.remove('income["小偷"]');
		        	$SM.addPerk('潛行術');
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
];
