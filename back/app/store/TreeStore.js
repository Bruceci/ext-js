Ext.define('UserApp.store.TreeStore', {
    extend: 'Ext.data.TreeStore',
    model: 'UserApp.model.TreeModel',
    autoLoad: true,
    proxy: {
            type: 'ajax',
            url: 'data/ReadTree.php'
        },
	root: {
			id: 'id',
			expanded: true
		}	
    });
