Ext.define('UserApp.store.city', {
    extend: 'Ext.data.Store',
    model: 'UserApp.model.city',
    autoLoad: true,
	autoSync: true,
    pageSize: 50, // numero de registros por Grid
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/readCity.php',
            update: 'data/updateCity.php',
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