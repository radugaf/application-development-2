# Generated by Django 3.0.8 on 2020-11-30 22:02

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0008_auto_20201130_2153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='staff',
            field=models.ManyToManyField(blank=True, related_name='restaurants_work_for', to=settings.AUTH_USER_MODEL),
        ),
    ]