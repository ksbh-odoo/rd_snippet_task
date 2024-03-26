
from odoo import http
from odoo.http import request


class SaleSnippet(http.Controller):


    @http.route(['/sale_order_snippet'], type="json", auth="public")
    def sale_order_snippet(self):
        sale_orders = request.env['sale.order'].sudo().search_read([],['name','partner_id','state'])
        return sale_orders
    

    @http.route(['/sale_order_confirm'], type="json", auth="public")
    def sale_order_confirm(self):
        confirm_orders = request.env['sale.order'].sudo().search_read([('state','=','sale')],['name','partner_id','state','id'])
        return confirm_orders