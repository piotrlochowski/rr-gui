Ext.define('RaceRecord.view.RecentlyPlayedScroller', {
    extend: 'Ext.view.View',
    alias: 'widget.recentlyplayedscroller',    
    store: 'RecentLaps',
    itemTpl: '<div>{startnumber}</div>'
});