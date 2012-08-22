Ext.define('RaceRecord.model.Location', {
    extend: 'Ext.data.Model',
    fields: ['id', 'city'],
    
    proxy: {
        type: 'rest',
        url: '/py/api/v1/location/?format=json',
        reader: {
            type: 'json',
            root: 'locations'
        }
    }
});