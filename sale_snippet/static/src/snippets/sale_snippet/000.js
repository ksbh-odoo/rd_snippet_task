/**@odoo-module**/
import publicWidget from "@web/legacy/js/public/public_widget";
import { renderToElement } from "@web/core/utils/render";



const DynamicSnippetSale = publicWidget.Widget.extend({
    selector: ".sale_snippet",


    /**
     * @constructor
     */
    init: function () {
        this._super.apply(this, arguments);
        this.rpc = this.bindService("rpc");
    },

    start: async function () {

        let saleorderEl = this.el.querySelector("#saleorder_snippet");
        let isOrderConfirm = this.target.dataset.orderConfirm;

        if (saleorderEl) {
            let data = [];
            let s_instance;
            if(!isOrderConfirm){
                data = await this.rpc("/sale_order_snippet");
                s_instance = renderToElement('sale_order_snippet',{
                    sale_order : data
                });
            }
            else{
                data = await this.rpc("/sale_order_confirm");
                s_instance = renderToElement('sale_order_snippet',{
                    sale_order : data
                });
               
                
            }
            
            saleorderEl.replaceChildren(s_instance);

        } else {
            console.error("Element with id 'sale_snippet' not found.");
        }

    },

});

    

publicWidget.registry.DynamicSnippetSale = DynamicSnippetSale;

export default DynamicSnippetSale;