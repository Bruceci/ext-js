Ext.define('UserApp.controller.city', {
    extend: 'Ext.app.Controller',
    stores: ['city'],
    views: ['city',],
    
    init: function() {
        console.log('Инициализируем таблицу города');
        
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'city': {
                select: this.selectUser
            }
            
        });
    },
    
    onPanelRendered: function() {
        console.log('Панель города загрузилась');
    },
    
    selectUser: function(selModel, selections) {
        console.log('Выбираем строку'); 
        var delBut = Ext.ComponentQuery.query('#deleteUser')[0];
        delBut.setDisabled(false);
        //list['toolbar'].('#deleteUsuario').setDisabled(selections.length === 0);
        //console.log(grid.down('#delete'));
    }
});