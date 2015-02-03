Ext.application({
    name: 'UserApp',
	controllers: ['User', 'TreeController', 'obrazovanie', 'city'],
	stores: ['User', 'TreeStore', 'obrazovanie', 'city'],
	models: ['User', 'TreeModel', 'obrazovanie', 'city'],
    appFolder: 'app',

    launch: function() {
	
	
	
	 Ext.create('Ext.container.Viewport', {
        layout: 'border',
        renderTo: Ext.getBody(),
        items: [ {
            region: 'west',
            collapsible: true,
			title: 'Навигация',
            width: 320,
			items: 
				{
					//style: 'margin-top: 50px; float: left; margin-left: 5% ',
					floating: false,
                    xtype: 'TreeView'
                }
        }, 
		
		{
            region: 'center',
			items: [
				{
                    width: 700,
                    height: 600,
					style: 'margin-top: 42px; float: left; margin-left: 15%',
					floating: false,
                    xtype: 'userList',
					autoDestroy: true,
                },
				
				{
                    width: 500,
                    height: 600,
					style: 'margin-top: 42px; float: left; position:absolute; margin-left: 15%',
					floating: false,
					hidden: true,
                    xtype: 'obrazovanie'
                },
				
				{
                    width: 500,
                    height: 600,
					style: 'margin-top: 42px; float: left; position:absolute; margin-left: 15%',
					floating: false,
					hidden: true,
                    xtype: 'city'
                }
			]
        }
		]
    });
	
	
	
	
	
	
       /* Ext.create('Ext.container.Viewport', {
            renderTo: 'tree',
             items: [
                
				{
					style: 'margin-top: 50px; float: left; margin-left: 5% ',
					floating: false,
                    xtype: 'TreeView'
                },
				
				{
                    width: 700,
                    height: 600,
					style: 'margin-top: 50px; float: left; margin-left: 10px',
					floating: false,
                    xtype: 'userList'
                },
				
				{
                    width: 500,
                    height: 600,
					style: 'margin-top: 50px; float: left; margin-left: 10px',
					floating: false,
					hidden: true,
                    xtype: 'obrazovanie'
                },
				
				{
                    width: 500,
                    height: 600,
					style: 'margin-top: 50px; float: left; margin-left: 10px',
					floating: false,
					hidden: true,
                    xtype: 'city'
                }

            ]
        }); */
    }   
});
