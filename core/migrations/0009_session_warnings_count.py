# Generated by Django 3.2.5 on 2022-12-25 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_question_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='session',
            name='warnings_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
