/** @odoo-module **/

import options from "@web_editor/js/editor/snippets.options";

options.registry.SaleSnippetOptions = options.Class.extend({

    start: async function () {

        console.log("Options");

    },

});

export default {
    SaleSnippetOptions: options.registry.SaleSnippetOptions,
};

