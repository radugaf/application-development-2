from django.contrib import admin

from edesia_main.products.models import *

# Register your models here.

admin.site.register(Restaurant)
admin.site.register(StaffDetail)
admin.site.register(SupplierDetail)
admin.site.register(Product)
admin.site.register(Variation)
admin.site.register(ProductVariation)
admin.site.register(Cart)
admin.site.register(Address)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Enquiry)