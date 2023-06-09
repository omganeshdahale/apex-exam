# Generated by Django 3.2.5 on 2023-04-12 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_auto_20230412_0203'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='accuracy',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=3),
        ),
        migrations.AddField(
            model_name='answer',
            name='evaluated_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='answer',
            name='explanation',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
