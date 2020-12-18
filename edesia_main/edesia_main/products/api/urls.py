 
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import *

app_name='products-api'

urlpatterns = [
    path('restaurant/<int:id>', RestaurantCreateReadAPIView.as_view(), name='restaurant'),
    path('restaurant-list/', RestaurantListUpdateAPIView.as_view(), name='restaurant-list'),
    path('restaurant-create/', RestaurantCreateReadAPIView.as_view(), name='restaurant-create'),
    path('restaurant-update/<int:id>', RestaurantListUpdateAPIView.as_view(), name='restaurant-update'),
    path('restaurant-delete/', RestaurantDeleteAPIView.as_view(), name='restaurant-delete'),

    path('staffdetail/', StaffDetailCreateReadAPIView.as_view(), name='staffdetail'),
    path('staffdetail-list/', StaffDetailListUpdateAPIView.as_view(), name='staffdetail-list'),
    path('staffdetail-create/', StaffDetailCreateReadAPIView.as_view(), name='staffdetail-create'),
    path('staffdetail-update/', StaffDetailListUpdateAPIView.as_view(), name='staffdetail-update'),
    path('staffdetail-delete/', StaffDetailDeleteAPIView.as_view(), name='staffdetail-delete'),

    path('supplierdetail/', SupplierDetailCreateReadAPIView.as_view(), name='supplierdetail'),
    path('supplierdetail-list/', SupplierDetailListUpdateAPIView.as_view(), name='supplierdetail-list'),
    path('supplierdetail-create/', SupplierDetailCreateReadAPIView.as_view(), name='supplierdetail-create'),
    path('supplierdetail-update/', SupplierDetailListUpdateAPIView.as_view(), name='supplierdetail-update'),
    path('supplierdetail-delete/', SupplierDetailDeleteAPIView.as_view(), name='supplierdetail-delete'),

    path('product/', ProductCreateReadAPIView.as_view(), name='product'),
    path('product-list/', ProductListUpdateAPIView.as_view(), name='product-list'),
    path('product-create/', ProductCreateReadAPIView.as_view(), name='product-create'),
    path('product-update/', ProductListUpdateAPIView.as_view(), name='product-update'),
    path('product-delete/', ProductDeleteAPIView.as_view(), name='product-delete'),

    path('product-item-details/<int:product_item_id>/', ProductItemDetailsAPIView.as_view(), name='product-item-details'),
    path('product-list-in-cart/', ProductListInCartAPIView.as_view(), name='product-list-in-cart'),
    path('add-product-in-cart/', AddProductInCartAPIView.as_view(), name='add-product-in-cart'),
    path('update-product-in-cart/', UpdateProductInCartAPIView.as_view(), name='update-product-in-cart'),
    path('remove-product-in-cart/', RemoveProductFromCartAPIView.as_view(), name='remove-product-in-cart'),

    path('add-items-in-enquiry/', AddItemsInEnquiry.as_view(), name='add-items-in-enquiry'),
    path('enquiry-list/', EnquiryListAPIView.as_view(), name='enquiry-list'),
    path('decline-enquiry-request/', DeclineEnquiryRequestAPIView.as_view(), name='decline-enquiry-request'),
    path('update-enquiry-request/', UpdatePriceQuantityInEnquiryAPIVIew.as_view(), name='update-enquiry-request'),

    path('place-order/', PlaceOrderAPIView.as_view(), name='place-order'),
    path('restaurant-ordered-product-list/', RestaurantOrderedProductListAPIView.as_view(), name='restaurant-ordered-product-list'),
    path('supplier-pending-product-list/', SupplierPendingProductListAPIView.as_view(), name='supplier-pending-product-list'),
    path('mark-orders-as-delivered/', MarkOrdersAsDeliveredAPIView.as_view(), name='mark-orders-as-delivered'),

    # path('variation/', VariationCreateReadAPIView.as_view(), name='variation'),
    # path('variation-list/', VariationListUpdateAPIView.as_view(), name='variation-list'),
    # path('variation-create/', VariationCreateReadAPIView.as_view(), name='variation-create'),
    # path('variation-update/', VariationListUpdateAPIView.as_view(), name='variation-update'),
    # path('variation-delete/', VariationDeleteAPIView.as_view(), name='variation-delete'),

    # path('product-variation/', ProductVariationCreateReadAPIView.as_view(), name='product-variation'),
    # path('product-variation-list/', ProductVariationListUpdateAPIView.as_view(), name='product-variation-list'),
    # path('product-variation-create/', ProductVariationCreateReadAPIView.as_view(), name='product-variation-create'),
    # path('product-variation-update/', ProductVariationListUpdateAPIView.as_view(), name='product-variation-update'),
    # path('product-variation-delete/', ProductVariationDeleteAPIView.as_view(), name='product-variation-delete'),

    # path('cart/', CartCreateReadAPIView.as_view(), name='cart'),
    # path('cart-list/', CartListUpdateAPIView.as_view(), name='cart-list'),
    # path('cart-create/', CartCreateReadAPIView.as_view(), name='cart-create'),
    # path('cart-update/', CartListUpdateAPIView.as_view(), name='cart-update'),
    # path('cart-delete/', CartDeleteAPIView.as_view(), name='cart-delete'),

    path('address/', AddressCreateReadAPIView.as_view(), name='address'),
    path('address-list/', AddressListUpdateAPIView.as_view(), name='address-list'),
    path('address-create/', AddressCreateReadAPIView.as_view(), name='address-create'),
    path('address-update/', AddressListUpdateAPIView.as_view(), name='address-update'),
    path('address-delete/', AddressDeleteAPIView.as_view(), name='address-delete'),

    path('order/', OrderCreateReadAPIView.as_view(), name='order'),
    path('order-list/', OrderListUpdateAPIView.as_view(), name='order-list'),
    path('order-create/', OrderCreateReadAPIView.as_view(), name='order-create'),
    path('order-update/', OrderListUpdateAPIView.as_view(), name='order-update'),
    path('order-delete/', OrderDeleteAPIView.as_view(), name='order-delete'),

]