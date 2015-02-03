Ext.define('UserApp.model.city', {
    extend: 'Ext.data.Model',
    idProperty: 'userID',
    fields: [{name: 'userID',   type: 'int'},'city', {name: 'active',   type: 'boolean'}]
});