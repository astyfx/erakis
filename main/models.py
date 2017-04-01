import ujson as json
from datetime import datetime

from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from pytz import utc

class User(AbstractUser):
    sendbird_id = models.CharField(max_length=100, null=False, blank=False)

#
# class MasterSkill(models.Model):
#     code =
#     description = ''


class Dicer(models.Model):
    CHARGE_BLUE = 'BLUE'
    CHARGE_RED = 'RED'
    CHARGE_CHOICES = (
        (CHARGE_BLUE, 'Blue'),
        (CHARGE_RED, 'Red'),
    )

    name = models.CharField(max_length=255, null=False, blank=True)
    grade = models.IntegerField(null=False, blank=False, default=1)
    charge_type = models.CharField(max_length=255, null=False, blank=True, choices=CHARGE_CHOICES)
    # master_skill = models.ForeignKey(MasterSkill)


class DicerCard(models.Model):
    TYPES_MAGIC = 'MAGIC'
    TYPES_MELEE = 'MELEE'
    TYPES_WHIRLWIND = 'WHIRLWIND'
    TYPES_SPEAR = 'SPEAR'
    TYPES_BOMBER = 'BOMBER'
    TYPES_SNIPER = 'SNIPER'
    TYPES_CHOICES = (
        (TYPES_MAGIC, 'MAGIC'),
        (TYPES_MELEE, 'MELEE'),
        (TYPES_WHIRLWIND, 'WHIRLWIND'),
        (TYPES_SPEAR, 'SPEAR'),
        (TYPES_BOMBER, 'BOMBER'),
        (TYPES_SNIPER, 'SNIPER'),
    )
    dicer = models.ForeignKey(Dicer)
    level = models.IntegerField(default=1)
    move = models.IntegerField(null=False, blank=False, default=1)
    attack = models.IntegerField(null=False, blank=False, default=1)
    life = models.IntegerField(null=False, blank=False, default=1)
    types = models.CharField(max_length=255, null=False, blank=False, choices=TYPES_CHOICES)
