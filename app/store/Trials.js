Ext.define('RaceRecord.store.Trials', {
    extend: 'Ext.data.Store',
    requires: 'RaceRecord.model.Trial',
    model: 'RaceRecord.model.Trial',
    proxy: {
        type: 'rest',
        url: '/py/api/v1/trial/?format=json',
        reader: {
            type: 'json',
            root: 'trials'
        }
    }
});