Ext.define('UserApp.model.obrazovanie', {
    extend: 'Ext.data.Model',
    idProperty: 'userID',
    fields: [{name: 'userID',   type: 'int'},'obrazov', {name: 'active',   type: 'boolean'}]
});