# Generated by Django 3.0.8 on 2020-12-29 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0014_auto_20201229_0119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='custom_status',
            field=models.CharField(choices=[('NOT_CUSTOM', 'NOT_CUSTOM'), ('CUSTOM', 'CUSTOM'), ('CUSTOM_UPDATED', 'CUSTOM_UPDATED'), ('PENDING', 'PENDING'), ('COMPLETED', 'COMPLETED')], default='NOT_CUSTOM', max_length=255),
        ),
    ]
