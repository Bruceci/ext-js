Ext.define('UserApp.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.userEdit',
    title : 'Редактировать пользователя',
    layout: 'fit',
    autoShow: true,
    modal: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                id:'usuariosEditF',
                items: [
                    {
                        xtype: 'displayfield',
                        name : 'userID',
                        fieldLabel: 'ID',
						style: 'margin-left: 5%'
                    },
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Имя',
						style: 'margin-left: 5%'
                    },
                    {
                        xtype: 'textfield',
                        name : 'lastname',
                        fieldLabel: 'Фамилия',
						style: 'margin-left: 5%'
                    },
                    {
                        xtype: 'textfield',
                        name: 'patronymic',
                        fieldLabel: 'Отчество',
						style: 'margin-left: 5%'
                    },
					
					{
                        xtype: 'checkboxfield',
                        name: 'active',
                        boxLabel: 'Активно?',
						inputValue: true,
						checked:false,
						style: 'margin-left: 40%'
                    },
					
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },
            {
                text: 'Отмена',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});



