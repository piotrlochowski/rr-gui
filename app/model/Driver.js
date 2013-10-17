Ext.define('RaceRecord.model.Driver', {
    extend: 'Ext.data.Model',
    
    //requires:[
     //   'RaceRecord.model.TrialResult'          /* rule 2 */
    //],
     
    fields: ['first_name', 'last_name'],
    
    //proxy: {
    //    type: 'rest',
    //    url: '/py/api/v1/driver/?format=json',
    //    reader: {
    //        type: 'json',
    //        root: 'laps'
    //    }
    //}
    hasMany: 'RaceRecord.model.TrialResult'
});