# Generated by Django 4.1.7 on 2023-04-25 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='title',
            field=models.CharField(default='No Title', max_length=25),
            preserve_default=False,
        ),
    ]
