Ext.define('RaceRecord.controller.Event', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'eventInfo',
        selector: 'trialinfo'
    }, {
        ref: 'recentlyPlayedScroller',
        selector: 'recentlyplayedscroller'
    }],

    stores: ['EventSearchResults'],
    
    init: function() {
        this.control({
            'recentlyplayedscroller': {
                selectionchange: this.onEventSelect
            }
        });

        // Listen for an application wide event
        this.application.on({
            trialstarts: this.onTrialStarts,
            scope: this
        });
    },
    
    onTrialStarts: function(station) {
        console.log('The station was started', selection[0].get('id'));
        var store = this.getEventSearchResultsStore();

        store.load({
            callback: this.onRecentEventsLoad,
            params: {
                event: station.get('id')
            },            
            scope: this
        });
    },

    onEventSelect: function(selModel, selection) {
        Ext.Msg.alert('Debug','onEventSelect ');

        this.getEventInfo().update(selection[0]);
    }
});
