Ext.define('RaceRecord.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    
    requires: [
        'RaceRecord.view.NewLocation',
        'RaceRecord.view.SongControls',
        'RaceRecord.view.LapsList',
        'RaceRecord.view.TrialsList',
        'RaceRecord.view.RecentlyPlayedScroller',
        'RaceRecord.view.SongInfo'
    ],
    
    initComponent: function() {
        this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 80,
                items: [{
                    xtype: 'eventlocation',
                    width: 150
                //}, {
                //    xtype: 'songcontrols',
                //    flex: 1
                }, {
                    xtype: 'component',
                    html: 'RaceRecord by GaZiK<br>Live results'
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 250,
                xtype: 'panel',
                id: 'west-region',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'trialslist',
                    flex: 1
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                {
                    xtype: 'lapslist',
                    height: 250
                },
                //{
                //    xtype: 'trialinfo',
                //    flex: 1
                //}
                ]
            }]
        };
        
        this.callParent();
    }
});