Ext.define('RaceRecord.view.LapsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.lapslist',
    
    store: 'RecentLaps',
    title: 'Wyniki przejazdow',
    hideHeaders: false,
    
    initComponent: function() {
        this.columns = [{
            dataIndex: 'lap_nr',
            flex: 1
        },{
            dataIndex: 'time',
            flex: 2
        }];
        
        this.callParent();
    }
});