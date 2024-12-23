# Generated by Django 5.1.2 on 2024-11-26 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cankiet', '0007_remove_items_category_order'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='u_id',
        ),
        migrations.AlterField(
            model_name='order',
            name='o_no',
            field=models.CharField(max_length=30, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='order',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
    ]