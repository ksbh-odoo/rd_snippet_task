{

    'name' : 'Sale Snippet',
    'description' : 'Dynamic Sale Snippet',


    'depends' : ['base',
                 'sale_management',
                 'website'],

    'data' : [
        'views/snippets/s_sale.xml',
        'views/snippets/snippet.xml',
    ],

    'assets' : {
        'web.assets_frontend' : [
            'sale_snippet/static/src/snippets/sale_snippet/000.js',
            'sale_snippet/static/src/snippets/sale_snippet/000.xml',
            'sale_snippet/static/src/snippets/sale_snippet/000.scss',
        ],

        'website.assets_wysiwyg':[
            'sale_snippet/static/src/snippets/sale_snippet/options.js'
        ]
    },

    'installable' : True,
    'application' : True,

     'license': 'AGPL-3'
}