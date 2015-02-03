var panel = Ext.define('UserApp.view.obrazovanie' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.obrazovanie',
    id:'obrazovanie',
    store: 'obrazovanie',
    title : 'Образование',
	dockedItems: {
        xtype: 'pagingtoolbar',
        store: 'obrazovanie',   // mismo que el store GridPanel
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
            {header: 'Образование',  dataIndex: 'obrazov',  flex: 1, editor: {xtype: 'textfield'}},
			{header: 'Активно?', xtype: 'checkcolumn',dataIndex: 'active',width: 90,stopSelection: false, inputValue: true, editor: {xtype: 'checkcolumn'}}
        ];

        this.callParent(arguments);
    }
});