Ext.define('UserApp.model.TreeModel', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id','text', {name: 'parent_id', type: 'int'}, {name: 'leaf',   type: 'boolean'}]
});
