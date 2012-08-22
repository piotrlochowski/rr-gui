Ext.application({
    name: 'RaceRecord',
    
    autoCreateViewport: true,
    
    models: ['Location', 'Trial', 'Lap'],    
    stores: ['Trials', 'RecentLaps', 'LocationSearchResults'],
    controllers: ['Trial', 'Lap']
});


Ext.Loader.setConfig({enabled:true});

var interval = setInterval(function() {    var store = Ext.StoreMgr.lookup('RecentLaps');
	store.load();
}, 6000);