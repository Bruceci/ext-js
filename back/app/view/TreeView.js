Ext.define('UserApp.view.TreeView', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.TreeView',
    store: 'TreeStore',
    rootVisible: false,
    renderTo: 'tree',
    width: 300,
    height: 350,
	style: 'margin-top: 5px; margin-left: 1%'
});