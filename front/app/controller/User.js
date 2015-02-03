Ext.define('UserApp.controller.User', {
    extend: 'Ext.app.Controller',
    stores: ['User'],
    views: ['user.List'],
    
    init: function() {
        console.log('Инициализируем таблицу пользователей');
        
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'userList': {
                select: this.selectUser
            },
            
        });
    },
    
    onPanelRendered: function() {
        console.log('Панель пользователей загрузилась');
    },
    
    selectUser: function(selModel, selections) {
        console.log('Выбираем строку'); 
    }

});