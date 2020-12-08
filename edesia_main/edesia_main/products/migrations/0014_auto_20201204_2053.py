# Generated by Django 3.0.8 on 2020-12-04 20:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0013_orderitem_quantity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='quantity',
        ),
        migrations.AddField(
            model_name='orderitem',
            name='final_price',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='final_quantity',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='orderitem',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orderitem', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='product',
            name='total_stock',
            field=models.IntegerField(default=100),
            preserve_default=False,
        ),
    ]