Ext.define('RaceRecord.view.LapsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.lapslist',
    queryMode: 'remote',
    store: 'TrialDrivers',
    title: 'Wyniki przejazdow',
    hideHeaders: false,
    columns: [{
            text: 'Numer startowy',
            dataIndex: 'start_number',
            flex: 1,
            sortable: true,
            width: 100
        },{
            text: 'Czas n-1',
            dataIndex: 'time_n-1',
            sortable: true,
            width: 100
        },{
            text: 'Najlepszy czas',
            dataIndex: 'time_n',
            sortable: true,
            width: 100
        },{
            text: 'Nazwisko',
            dataIndex: 'last_name',
            width: 100
        },{
            text: 'Imię',
            dataIndex: 'first_name',
            width: 100
        },{
            text: 'Id Próby',
            dataIndex: 'trial_id',
            width: 100
        }
    ]
    
});