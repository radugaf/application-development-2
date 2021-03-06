# Generated by Django 3.0.8 on 2020-12-27 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_product_last_updated_by'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='paid',
            new_name='is_paid',
        ),
        migrations.AddField(
            model_name='orderitem',
            name='is_shipped',
            field=models.BooleanField(default=False),
        ),
    ]
