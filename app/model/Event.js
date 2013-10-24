Ext.define('RaceRecord.model.Event', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    
    proxy: {
        type: 'rest',
        url: '/py/api/v1/event/?format=json',
        reader: {
            type: 'json',
            root: 'events'
        }
    }
});