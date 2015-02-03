var panel = Ext.define('UserApp.view.city' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.city',
    id:'city',
    store: 'city',
    title : 'Город',
	dockedItems: {
        xtype: 'pagingtoolbar',
        store: 'city',   // mismo que el store GridPanel
        dock: 'bottom',
        displayInfo: true
    },	
	plugins: [
              Ext.create('Ext.grid.plugin.CellEditing', {
                  clicksToEdit: 1
             })       
    ],
	/*selModel: {
        selType: 'cellmodel'
    }, */
    initComponent: function() {

        this.columns = [
            {header: 'ID',  dataIndex: 'userID',  flex: 1},
            {header: 'Город',  dataIndex: 'city',  flex: 1, editor: {xtype: 'textfield'}},
			{header: 'Активно?', xtype: 'checkcolumn',dataIndex: 'active',width: 90,stopSelection: false, inputValue: true, editor: {xtype: 'checkcolumn'}}
        ];

        this.callParent(arguments);
    }
});