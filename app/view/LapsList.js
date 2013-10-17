Ext.define('RaceRecord.view.LapsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.lapslist',
    
    store: 'TrialResults',
    title: 'Wyniki przejazdow',
    hideHeaders: false,
    columns: [{
            text: 'Numer startowy',
            dataIndex: 'startnumber',
            flex: 1,
            sortable: true,
            width: 40
        },{
            text: 'Najlepszy czas',
            dataIndex: 'besttime',
            sortable: true,
            width: 100,
            xtype: 'datecolumn',
            format: 'm:s'
        },{
            text: 'Kierowca',
            dataIndex: 'getDriver().last_name',
            //renderer: function() {
            //    return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value.getDriver().last_name);
            //},
            width: 100
        }]
    
});