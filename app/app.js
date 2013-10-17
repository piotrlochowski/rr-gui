Ext.application({
    name: 'RaceRecord',
    
    autoCreateViewport: true,
    
    models: ['Location', 'Trial', 'TrialResult', 'Lap', 'Driver'],    
    stores: ['Trials', 'RecentLaps', 'LocationSearchResults', 'TrialResults'],
    controllers: ['Trial', 'Lap']
});


Ext.Loader.setConfig({enabled:true});

var interval = setInterval(function() {    var store = Ext.StoreMgr.lookup('TrialResults');
	store.load();
}, 10000);