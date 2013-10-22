Ext.define('RaceRecord.controller.Trial', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'trialsList',
        selector: 'trialslist'
        },{
        ref: 'locationsList',
        selector: 'eventlocation'
        }],

    stores: ['Trials', 'LocationSearchResults'],
    
    init: function() {
        // Start listening for events on views
        this.control({
            'trialslist': {
                selectionchange: this.onTrialSelect
            },
            'eventlocation': {
                select: this.onEventLocationSelect,
                selectionchange: this.onEventLocationSelect
            }
        });
    },
    
    onLaunch: function() {
        
        var locationsStore = this.getLocationSearchResultsStore();
        locationsStore.load({
            callback: this.onEventLocationsLoad,
            params: {
                //location: "/py/api/v1/location/"+selection[0].get('id')+"/"
            },            
            scope: this 
        });
        
        
        //selModel = this.getLocationsList().select(locationsStore.last());
        
        var trialsStore = this.getTrialsStore();        
        trialsStore.load({
            callback: this.onTrialsLoad,
            params: {
                //location: "/py/api/v1/location/"+locationsStore.last()+"/"
            },            
            scope: this
        });
        
        
    },

    onTrialsLoad: function() {
//        Ext.Msg.alert('Debug','onTrialsLoad ');
     
        var trialsList = this.getTrialsList();
        trialsList.getSelectionModel().select(0);
        
        
    },
    
    onTrialSelect: function(selModel, selection) {
        // Fire an application wide event
        console.log('The station was selected');
        //this.application.fireEvent('trialstarts', selection[0]);
        
        Ext.Msg.alert('Debug','Inside onTrailSelected');
     
        
        
        var locationsStore = this.getLocationSearchResultsStore();
        locationsStore.load({
            //callback: this.onEventLocationsLoad,
            params: {
                //location: "/py/api/v1/location/"+selection[0].get('id')+"/"
            },            
            scope: this 
        });
    },
    
    onEventLocationSelect: function(field, selection) {
        Ext.Msg.alert('Debug','Inside onEventLocationSelect');
     
        var trialsStore = this.getTrialsStore();        
        trialsStore.load({
            callback: this.onTrialsLoad,
            params: {
                location: "/py/api/v1/location/"+locationsStore.last()+"/"
            },            
            scope: this
        });
    
    //    var selected = selection[0],
    //        store = this.getTrialsStore(),
    //        list = this.getTrialsList();
    //        
    //    if (selected && !store.getById(selected.get('id'))) {
    //        store.add(selected);
    //    }
    //    list.getSelectionModel().select(selected);
    },
    
    onEventLocationsLoad: function(songs, request) {
    }
 
});
