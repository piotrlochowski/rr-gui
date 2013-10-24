Ext.define('RaceRecord.model.TrialDriver', {
    extend: 'Ext.data.Model',
    fields: ['start_number', 'time_n-1', 'time_n','first_name','last_name', 'trial_id'],
    proxy: {
        type: 'rest',
        url: '/py/api/v1/trial_driver/',
        reader: {
            type: 'json',
            root: 'trial_drivers'
        }
    }
});