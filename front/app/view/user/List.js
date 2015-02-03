var panel = Ext.define('UserApp.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userList',
    id:'userID',
    store: 'User',
    title : 'Список фамилий',
    dockedItems: {
        xtype: 'pagingtoolbar',
        store: 'User',   // mismo que el store GridPanel
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
            {header: 'ФИО',  dataIndex: 'fio',  flex: 1},
            {header: 'Образование',  dataIndex: 'obrazov',  flex: 1, editor: {xtype: 'textfield'}},
            {header: 'Город', dataIndex: 'city', flex: 1},
        ];

        this.callParent(arguments);
    }
});