Ext.application({
    name: 'UserApp',
	controllers: ['User'],
	stores: ['User'],
	models: ['User'],
    appFolder: 'app',

    launch: function() {
	
	
	 Ext.create('Ext.container.Viewport', {
            renderTo: Ext.getBody(),
             items: 
                
				
				{
                    width: 700,
                    height: 600,
					style: 'margin-top: 50px; float: left; margin-left: 30%',
					floating: false,
                    xtype: 'userList'
                }
            
        }); 
    }   
});
