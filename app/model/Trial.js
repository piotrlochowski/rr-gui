Ext.define('RaceRecord.model.Trial', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'location'],

    proxy: {
        type: 'rest',
        url: '/py/api/v1/trial/?format=json',
        reader: {
            type: 'json',
            root: 'trials'
        }
    }
});