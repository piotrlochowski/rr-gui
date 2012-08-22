Ext.define('RaceRecord.controller.Location', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'locationInfo',
        selector: 'trialinfo'
    }, {
        ref: 'recentlyPlayedScroller',
        selector: 'recentlyplayedscroller'
    }],

    stores: ['LocationSearchResults'],
    
    init: function() {
        this.control({
            'recentlyplayedscroller': {
                selectionchange: this.onLocationSelect
            }
        });

        // Listen for an application wide event
        this.application.on({
            trialstarts: this.onTrialStarts,
            scope: this
        });
    },
    
    onTrialStarts: function(station) {
        var store = this.getLocationSearchResultsStore();

        store.load({
            callback: this.onRecentLocationsLoad,
            params: {
                location: station.get('id')
            },            
            scope: this
        });
    },
    
    onRecentLocationsLoad: function(songs, request) {
        var store = this.getLocationSearchResultsStore(),
            selModel = this.getRecentlyPlayedScroller().getSelectionModel();

        // The data should already be filtered on the serverside but since we
        // are loading static data we need to do this after we loaded all the data
        //store.clearFilter();
        //store.filter('station', request.params.station);
        //store.sort('played_date', 'ASC');        

        selModel.select(store.last());
    },
    
    onLocationSelect: function(selModel, selection) {
        this.getLocationInfo().update(selection[0]);
    }
});
