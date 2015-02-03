Ext.define('UserApp.store.obrazovanie', {
    extend: 'Ext.data.Store',
    model: 'UserApp.model.obrazovanie',
    autoLoad: true,
	autoSync: true,
    pageSize: 50, // numero de registros por Grid
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/readObrazovanie.php',
            update: 'data/updateObrazovanie.php',
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            root: 'data',
            encode: true
        }
    }
});