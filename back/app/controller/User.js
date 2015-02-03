Ext.define('UserApp.controller.User', {
    extend: 'Ext.app.Controller',
    stores: ['User'],
    views: [
        'user.List',
        'user.Create'
    ],
    
    init: function() {
        console.log('Инициализируем таблицу пользователей');
        
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'userList': {
                select: this.selectUser
            },
            
            'userList button[action=addUser]': {
                click: this.newUser
            },
            
            'userList button[action=delete]': {
                click: this.deleteUserClick
            },
            
            'userCreate button[action=save]': {
                click: this.createUser
            }
        });
    },
    
    onPanelRendered: function() {
        console.log('Панель пользователей загрузилась');
    },
    
    selectUser: function(selModel, selections) {
        console.log('Выбираем строку'); 
        var delBut = Ext.ComponentQuery.query('#deleteUser')[0];
        delBut.setDisabled(false);
        //list['toolbar'].('#deleteUsuario').setDisabled(selections.length === 0);
        //console.log(grid.down('#delete'));
    },
    
    
    newUser: function(button) {
        console.log('Создаем пользователя');
        var view = Ext.widget('userCreate');
        view.down('form');
    },
    
    
    createUser: function(button) {
        console.log('Кликаем по кнопке сохранить');
            var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        //record.set(values);
        console.log(values);
        this.getUserStore().add(values);
        win.close();
        
        //this.getUserStore().sync();
    },
    
    deleteUserClick: function(selModel, selections) {
       // console.log('clicked Delete');
        var viewList = Ext.ComponentQuery.query('#userID')[0];
       // console.log(viewList.getSelectionModel().getSelection()[0]);
        var selection=viewList.getSelectionModel().getSelection()[0];
        if(selection)
        {
            this.getUserStore().remove(selection);
        }
        
    }
});