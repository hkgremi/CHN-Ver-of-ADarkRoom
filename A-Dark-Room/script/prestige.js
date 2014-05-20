var Prestige = {
		
	name: 'Prestige',

	options: {},

	init: function(options) {
		this.options = $.extend(this.options, options);
	},
	
	storesMap: [
		{ store: '木頭', type: 'g' },
		{ store: '毛皮', type: 'g' },
		{ store: '肉', type: 'g' },
		{ store: '鐵', type: 'g' },
		{ store: '煤', type: 'g' },
		{ store: '硫磺', type: 'g' },
		{ store: '鋼', type: 'g' },
		{ store: '醃肉', type: 'g' },
		{ store: '鱗片', type: 'g' },
		{ store: '牙齒', type: 'g' },
		{ store: '皮革', type: 'g' },
		{ store: '誘餌', type: 'g' },
		{ store: '火炬', type: 'g' },
		{ store: '布匹', type: 'g' },
		{ store: '骨槍', type: 'w' },
		{ store: '鐵劍', type: 'w' },
		{ store: '鋼劍', type: 'w' },
		{ store: '刺刀', type: 'w' },
		{ store: '步槍', type: 'w' },
		{ store: '鐳射槍', type: 'w' },
		{ store: '子彈', type: 'a' },
		{ store: '燃料電池', type: 'a' },
		{ store: '手雷', type: 'a' },
		{ store: '鏈球', type: 'a' }
	],
	
	getStores: function(reduce) {
		var stores = [];
		
		for(var i in this.storesMap) {
			var s = this.storesMap[i];
			stores.push($SM.get('stores["' + s.store + '"]', true) / 
					(reduce ? this.randGen(s.type) : 1));
		}
		
		return stores;
	},
	
	get: function() {
		return {
			stores: $SM.get('previous.stores'),
			score: $SM.get('previous.score')
		};
	},
	
	set: function(prestige) {
		$SM.set('previous.stores', prestige.stores);
		$SM.set('previous.score', prestige.score);
	},
	
	save: function() {
		$SM.set('previous.stores', this.getStores(true));
		$SM.set('previous.score', Score.totalScore());
	},
  
	collectStores : function() {
		var prevStores = $SM.get('previous.stores');
		if(prevStores != null) {
			var toAdd = {};
			for(var i in this.storesMap) {
				var s = this.storesMap[i];
				toAdd[s.store] = prevStores[i];
			}
			$SM.addM('stores', toAdd);
			
			// Loading the stores clears em from the save
			prevStores.length = 0;
		}
	},

	randGen : function(storeType) {
		switch(storeType) {
		case 'g':
			return Math.floor(Math.random() * 10);
		case 'w':
			return Math.floor(Math.floor(Math.random() * 10) / 2);
		case 'a':
			return Math.ceil(Math.random() * 10 * Math.ceil(Math.random() * 10));
		default:
			return 1;
		}
	}

};
