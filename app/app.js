Ext.application({
    name: 'RaceRecord',
    
    autoCreateViewport: true,
    
    models: ['Event', 'Trial', 'TrialDriver'],
    stores: ['Trials', 'RecentTrialDrivers', 'EventSearchResults', 'TrialDrivers'],
    controllers: ['Trial']
});


Ext.Loader.setConfig({enabled:true});

var interval = setInterval(function() {    var store = Ext.StoreMgr.lookup('TrialDrivers');
	store.load();
}, 10000);