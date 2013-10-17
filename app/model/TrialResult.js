Ext.define('RaceRecord.model.TrialResult', {
    extend: 'Ext.data.Model',
    
    //requires:[
    //    'RaceRecord.model.Driver'/* rule 2 */
    //],
     fields: [
        {name: 'startnumber',   type : 'int'},
        {name: 'besttime',      type: 'time'}
    ],
    //sorters: ['name', 'phone'],
    belongsTo: [{name: 'driver',
                model: 'RaceRecord.model.Driver'
    }], /* Generates a getDriver method on every Trial instance */
    hasMany: 'RaceRecord.model.Lap',       /* Generates a laps() method on every Trial instance */
    proxy: {
        type: 'rest',
        url: '/py/api/v1/trial_result/?format=json',
        reader: {
            type: 'json',
            root: 'trial_results'
        }
    }
});