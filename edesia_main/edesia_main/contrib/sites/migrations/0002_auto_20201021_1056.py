# Generated by Django 3.0.8 on 2020-10-21 17:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='site',
            options={'ordering': ('domain',), 'verbose_name': 'site', 'verbose_name_plural': 'sites'},
        ),
    ]
