Ext.define('RaceRecord.controller.Lap', {
    extend: 'Ext.app.Controller',

    stores: ['RecentLaps'],
    
    onLaunch: function() {
        
        var lapsStore = this.getRecentLapsStore();
        
        lapsStore.load({
            scope: this
        });
        
        
    }    
});
