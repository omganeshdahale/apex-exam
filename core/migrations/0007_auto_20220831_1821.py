# Generated by Django 3.2.5 on 2022-08-31 18:21

import core.models
import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20220831_1709'),
    ]

    operations = [
        migrations.AddField(
            model_name='session',
            name='end_time',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 31, 18, 21, 9, 867324, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='exam',
            name='active',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='exam',
            name='duration',
            field=models.DurationField(default=datetime.timedelta(seconds=3600), validators=[core.models.validate_max_duration, core.models.validate_min_duration]),
        ),
    ]
