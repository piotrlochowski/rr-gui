Ext.define('RaceRecord.controller.Trial', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'trialsList',
        selector: 'trialslist'
        },{
        ref: 'eventsList',
        selector: 'eventslist'
        }],

    stores: ['Trials', 'TrialDrivers', 'EventSearchResults'],
    
    init: function() {
        // Start listening for events on views
        this.control({
            'trialslist': {
                selectionchange: this.onTrialSelect
            },
            'eventlist': {
                select: this.onEventSelect,
                selectionchange: this.onEventSelect
            }
        });
    },
    
    onLaunch: function() {
        
        var eventsStore = this.getEventSearchResultsStore();
        eventsStore.load({
            params: {
                //event: "/py/api/v1/event/"+selection[0].get('id')+"/"
            },            
            scope: this 
        });
        
        
        //selModel = this.getEventsList().select(eventsStore.last());
        
        var trialsStore = this.getTrialsStore();
        trialsStore.load({
            callback: this.onTrialsLoad,
            params: {
                //event: "/py/api/v1/event/"+eventsStore.last()+"/"
            },            
            scope: this
        });
        
        
    },

    onTrialsLoad: function() {
        Ext.Msg.alert('Debug','onTrialsLoad ');
     
        var trialsList = this.getTrialsList();
        trialsList.getSelectionModel().select(0);
        
        
    },
    
    onTrialSelect: function(selModel, selection) {
        // Fire an application wide event
        console.log('The station was selected', selection[0].get('id'));
//        this.application.fireEvent('trialstarts', selection[0]);
        
        var trialDriversStore = this.getTrialDriversStore();
        trialDriversStore.load({
            params: {
                trial_id: selection[0].get('id')
            }
        });
//        this.getTrialsList().getStore().loadData(trialDriversStore)
    },
    
    onEventSelect: function(field, selection) {
        Ext.Msg.alert('Debug','Inside onEventSelect');
     
        var trialsStore = this.getTrialsStore();        
        trialsStore.load({
            callback: this.onTrialsLoad,
            params: {
                event: "/py/api/v1/event/"+1+"/"
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

 
});
