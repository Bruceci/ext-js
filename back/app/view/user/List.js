var panel = Ext.define('UserApp.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userList',
    id:'userID',
    store: 'User',
    title : 'Список фамилий',
	hideMode: 'visibility',
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Добавить',
			icon: 'resources/icons/user_add.png', 
            action: 'addUser'
        }, {
            iconCls: 'user_delete',
            text: 'Удалить',
            disabled: true,
			icon: 'resources/icons/user_delete.png', 
            itemId: 'deleteUser',
            action: 'delete'
        }
		]
    },{
        xtype: 'pagingtoolbar',
        store: 'User',   // mismo que el store GridPanel
        dock: 'bottom',
        displayInfo: true
    }],
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
            {header: 'Имя',  dataIndex: 'name',  flex: 1, editor: {xtype: 'textfield'}},
            {header: 'Фамилия',  dataIndex: 'lastname',  flex: 1, editor: {xtype: 'textfield'}},
            {header: 'Отчество', dataIndex: 'patronymic', flex: 1, editor: {xtype: 'textfield'}},
			{header: 'Активно?', xtype: 'checkcolumn',dataIndex: 'active',width: 90,stopSelection: false, inputValue: true, editor: {xtype: 'checkcolumn'}}
        ];

        this.callParent(arguments);
    }
});