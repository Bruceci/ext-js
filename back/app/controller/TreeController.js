Ext.define('UserApp.controller.TreeController', {
            extend : 'Ext.app.Controller',
 
            //define the stores
            stores : ['TreeStore'],
            //define the models
            models : ['TreeModel'],
            //define the views
            views : ['TreeView'],
			refs: [{
                    ref: 'myCountryTree',
                    selector: 'countryTree'
                    }
            ],  
			
            
            init : function() {
			console.log('Инициализация дерева.');
                this.control({
                    
                    'viewport' : {
                        render : this.onPanelRendered
                    },
					'TreeView': {
						select: this.showPanel
					},
                });
            },
 
            onPanelRendered : function() {
                //just a console log to show when the panel si rendered
                console.log('Дерево загрузилось');
            },
    
			showPanel: function(view, record) {
				console.log("Кликаем по ноду: " + record.get('id') );

				if(record.get('id')=='1') {
				Ext.getCmp('userID').show();
				Ext.getCmp('city').hide();
				Ext.getCmp('obrazovanie').hide();					
				//if (typeof Ext.getCmp('userID') != 'undefined') {Ext.getCmp('userID').destroy();}		
						
										}
										
				if(record.get('id')=='2') {
				Ext.getCmp('userID').hide();
				Ext.getCmp('city').hide();
				Ext.getCmp('obrazovanie').show();	
										}
										
				if(record.get('id')=='3') {
				Ext.getCmp('userID').hide();
				Ext.getCmp('city').show();
				Ext.getCmp('obrazovanie').hide();
										}
      
			}       
    });
