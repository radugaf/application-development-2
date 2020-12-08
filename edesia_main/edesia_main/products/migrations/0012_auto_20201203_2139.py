# Generated by Django 3.0.8 on 2020-12-03 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20201203_2120'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='paid',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='orderitem',
            name='custom_status',
            field=models.CharField(choices=[('NOT_CUSTOM', 'NOT_CUSTOM'), ('PENDING', 'PENDING'), ('COMPLETED', 'COMPLETED')], default='NOT_CUSTOM', max_length=255),
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(default=False, max_length=50),
            preserve_default=False,
        ),
    ]