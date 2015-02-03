Ext.define('UserApp.controller.obrazovanie', {
    extend: 'Ext.app.Controller',
    stores: ['obrazovanie'],
    views: ['obrazovanie',],
    
    init: function() {
        console.log('Инициализируем таблицу образование');
        
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'obrazovanie': {
                select: this.selectUser
            }
            
        });
    },
    
    onPanelRendered: function() {
        console.log('Панель образование загрузилась');
    },
    
    selectUser: function(selModel, selections) {
        console.log('Выбираем строку'); 
        var delBut = Ext.ComponentQuery.query('#deleteUser')[0];
        delBut.setDisabled(false);
        //list['toolbar'].('#deleteUsuario').setDisabled(selections.length === 0);
        //console.log(grid.down('#delete'));
    }
});