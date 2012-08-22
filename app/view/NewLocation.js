Ext.define('RaceRecord.view.NewLocation', {
    extend: 'Ext.form.field.ComboBox',
    emptyText: 'Search location',
    alias: 'widget.eventlocation',
    store: 'LocationSearchResults',
    queryMode: 'local',
    displayField: 'city',
    valueField: 'id'
});