from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from edesia_main.products.models import Restaurant


class User(AbstractUser):

    name = models.CharField(
        _("Name of User"), blank=True, null=True, max_length=255
    )
    bio = models.TextField("Bio", blank=True, null=True)

    is_restaurant_owner = models.BooleanField(default=False)
    is_restaurant_staff = models.BooleanField(default=False)
    is_company_owner = models.BooleanField(default=False)
    is_company_staff = models.BooleanField(default=False)

    def get_absolute_url(self):
        return reverse(
            "users:detail", kwargs={"username": self.username}
        )

    def get_restaurant(self):
        return self.restaurants_work_for.first()

    def fullname(self):
        if(self.name):
            return self.name + " - "
        else:
            return '{} {} - '.format(self.first_name, self.last_name)

    def get_company(self):
        return self.company_work_for.first()
