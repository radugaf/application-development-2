# from django.contrib import admin
# from django.contrib.auth import admin as auth_admin
# from django.contrib.auth import get_user_model

# from edesia_main.users.forms import (
#     UserChangeForm,
#     UserCreationForm,
# )

# User = get_user_model()


# @admin.register(User)
# class UserAdmin(auth_admin.UserAdmin):

#     form = UserChangeForm
#     add_form = UserCreationForm
#     fieldsets = (
#         ("User", {"fields": ("name", 'restaurant_staff')}),
#     )
#     list_display = ["username", "name", "is_superuser", 'is_staff', 'restaurant_staff', 'is_active']
#     search_fields = ["name", 'email']

 
from django.contrib import admin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth import admin as auth_admin, get_user_model

User = get_user_model()


class UserAdmin(auth_admin.UserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Contact info', {'fields': ('email',)}),
        ('User Type', {'fields': ('is_restaurant_owner', 'is_restaurant_staff', 'is_supplier', )}),
        ('Profile', {'fields': ('first_name', 'last_name')}),
        # ('Status', {'fields': ('email_confirmed',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2'),
        }),
    )
    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff')
    list_display_links = ('username',)
    actions = ('make_active', 'make_inactive', 'make_email_is_confirmed', 'make_email_is_not_confirmed')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')

    def make_active(self, request, queryset):
        queryset.update(is_active=True)

    def make_inactive(self, request, queryset):
        queryset.update(is_active=False)

    make_active.short_description = "Mark selected users as active"
    make_inactive.short_description = "Mark selected users as inactive"

    # def make_email_is_confirmed(self, request, queryset):
    #     queryset.update(email_confirmed=True)

    # def make_email_is_not_confirmed(self, request, queryset):
    #     queryset.update(email_confirmed=False)

    # make_email_is_confirmed.short_description = "Mark selected user's Email Confirmation checked"
    # make_email_is_not_confirmed.short_description = "Mark selected user's Email Confirmation unchecked"


admin.site.register(User, UserAdmin)