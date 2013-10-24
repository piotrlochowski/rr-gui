Ext.define('RaceRecord.view.NewEvent', {
    extend: 'Ext.form.field.ComboBox',
    emptyText: 'Search event',
    alias: 'widget.eventslist',
    store: 'EventSearchResults',
    queryMode: 'remote',
    displayField: 'name',
    valueField: 'id'
});