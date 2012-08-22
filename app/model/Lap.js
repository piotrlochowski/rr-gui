Ext.define('RaceRecord.model.Lap', {
    extend: 'Ext.data.Model',
    fields: ['lap_nr', 'time'],
    
    proxy: {
        type: 'rest',
        url: '/py/api/v1/lap/?format=json',
        reader: {
            type: 'json',
            root: 'laps'
        }
    }
});