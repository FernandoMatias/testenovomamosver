Ext.define('Touch2Demo.view.Configuracoes', {
    extend: 'Ext.form.Panel',
    alias: 'widget.configuracoes',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Configura��es'
	    },
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			text: 'Menu Iniciar'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'ip',
			label: 'Ip para a Sincroniza��o',
			id: 'ip'
		    }
		    
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarIP',
		ui: 'action',
		text: 'Salvar IP'
	    }
	]
    }
});
