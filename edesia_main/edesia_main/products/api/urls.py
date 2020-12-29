 
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
    path('restaurant-delete/<int:id>', RestaurantDeleteAPIView.as_view(), name='restaurant-delete'),
    
    path('company/<int:id>',CompanyCreateReadAPIView.as_view(), name='company'),
    path('company-list/',CompanyListUpdateAPIView.as_view(), name='company-list'),
    path('company-create/',CompanyCreateReadAPIView.as_view(), name='company-create'),
    path('company-update/<int:id>',CompanyListUpdateAPIView.as_view(), name='company-update'),
    path('company-delete/<int:id>',CompanyDeleteAPIView.as_view(), name='company-delete'),

    path('get-user-detail/', UserDetailReadUpdateAPIView.as_view(), name="get-user-detail"),
    path('get-user-update/', UserDetailReadUpdateAPIView.as_view(), name="get-user-update"),

    path('product/<int:id>', ProductCreateReadAPIView.as_view(), name='product'),
    path('restaurant-product-list/', RestaurantProductListAPIView.as_view(), name='restaurant-product-list'),
    path('supplier-product-list/', SupplierProductListUpdateAPIView.as_view(), name='supplier-product-list'),
    path('product-create/', ProductCreateReadAPIView.as_view(), name='product-create'),
    path('product-update/<int:id>', SupplierProductListUpdateAPIView.as_view(), name='product-update'),
    path('product-delete/<int:id>', ProductDeleteAPIView.as_view(), name='product-delete'),

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
    path('restaurant-shipped-product-list/', RestaurantShippedProductListAPIView.as_view(), name='restaurant-shipped-product-list'),
    path('supplier-pending-product-list/', SupplierPendingProductListAPIView.as_view(), name='supplier-pending-product-list'),
    path('supplier-awaiting-product-list/', SupplierAwaitingProductListAPIView.as_view(), name='supplier-awaiting-product-list'),
    path('supplier-awaiting-product-update/<int:id>', UpdateAwaitingProductItemAPIView.as_view(), name='supplier-awaiting-product-update'),
    path('mark-orders-as-shipped/', MarkOrdersAsShippedAPIView.as_view(), name='mark-orders-as-shipped'),
    path('mark-orders-as-delivered/', MarkOrdersAsDeliveredAPIView.as_view(), name='mark-orders-as-delivered'),
    path('invoice-list/', InvoiceListAPIView.as_view(), name='invoice-list'),

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