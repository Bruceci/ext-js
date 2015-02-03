Ext.define('UserApp.view.user.Create', {
    extend: 'Ext.window.Window',
    alias : 'widget.userCreate',

    title : 'Добавить пользователя',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Имя'
                    },
                    {
                        xtype: 'textfield',
                        name : 'lastname',
                        fieldLabel: 'Фамилия'
                    },
                    {
                        xtype: 'textfield',
                        name: 'patronymic',
                        fieldLabel: 'Отчество',
                        
                    },
					
					{
                        xtype: 'textfield',
                        name: 'obrazov',
                        fieldLabel: 'Образование',
                        
                    },
					
					{
                        xtype: 'textfield',
                        name: 'city',
                        fieldLabel: 'Город',
                        
                    },
					
					{
                         xtype: 'checkboxfield',
                        name: 'active',
                        boxLabel: 'Активно?',
						inputValue: true,
						checked: true  // выбрано
                        
                    }
					
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