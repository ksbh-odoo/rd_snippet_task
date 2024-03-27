/**@odoo-module**/

import publicWidget from "@web/legacy/js/public/public_widget";
import { renderToElement } from "@web/core/utils/render";
import { useService } from "@web/core/utils/hooks";


const DynamicSnippetSale = publicWidget.Widget.extend({
    selector: ".sale_snippet",

    /**
     * @constructor
     */
    init: function () {
        this._super.apply(this, arguments);
        this.orm = this.bindService('orm');
    },

    start: async function () {

        let saleorderEl = this.el.querySelector("#saleorder_snippet");
        
        if (saleorderEl) {
            let isOrderConfirm = this.target.dataset.orderConfirm;
            let domain = isOrderConfirm ? [['state','=','sale']] : [];
            let data = [];
            let s_instanceEl;
            try
            {
                data = await this.orm.searchRead("sale.order",domain,['id','name','partner_id','state']);
                s_instanceEl = renderToElement('sale_order_snippet',{
                    sale_order : data
                });   
            }
            catch(error){
                console.error("Error fetching data:", error);
            } 
            saleorderEl.replaceChildren(s_instanceEl);
        } else {
            console.error("Element with id 'sale_snippet' not found.");
        }

    },

});

publicWidget.registry.DynamicSnippetSale = DynamicSnippetSale;

export default DynamicSnippetSale;