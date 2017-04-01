import ujson as json
from datetime import datetime

from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.db import models
from pytz import utc

class BaseModel(models.Model):
  created_at = models.DateTimeField(default=timezone.now())
  updated_at = models.DateTimeField(null=True)

  class Meta:
    abstract = True

  def save(self, *args, **kwargs):
    ''' On save, update timestamps '''
    self.updated_at = timezone.now()
    super(BaseModel, self).save(*args, **kwargs)


class Guild(BaseModel):
    name = models.CharField(max_length=255, null=False, blank=False)


class User(AbstractUser):
    ROLE_ADMIN = 'ADMIN'
    ROLE_USER = 'USER'
    ROLE_CHOICES = (
        (ROLE_ADMIN, 'admin'),
        (ROLE_USER, 'user'),
    )

    sendbird_id = models.CharField(max_length=100, null=False, blank=False)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default=ROLE_USER)
    guild = models.ForeignKey(Guild, null=True)


#
# class MasterSkill(models.Model):
#     code =
#     description = ''


class Dicer(BaseModel):
    ATTACK_TYPE_MAGIC = 'MAGIC'
    ATTACK_TYPE_MELEE = 'MELEE'
    ATTACK_TYPE_WHIRLWIND = 'WHIRLWIND'
    ATTACK_TYPE_SPEAR = 'SPEAR'
    ATTACK_TYPE_BOMBER = 'BOMBER'
    ATTACK_TYPE_SNIPER = 'SNIPER'
    ATTACK_TYPE_CHOICES = (
        (ATTACK_TYPE_MAGIC, 'MAGIC'),
        (ATTACK_TYPE_MELEE, 'MELEE'),
        (ATTACK_TYPE_WHIRLWIND, 'WHIRLWIND'),
        (ATTACK_TYPE_SPEAR, 'SPEAR'),
        (ATTACK_TYPE_BOMBER, 'BOMBER'),
        (ATTACK_TYPE_SNIPER, 'SNIPER'),
    )

    DICE_4 = '4'
    DICE_44 = '44'
    DICE_6 = '6'
    DICE_66 = '66'
    DICE_10 = '10'
    DICE_CHOICES = (
        (DICE_4, '4'),
        (DICE_44, '44'),
        (DICE_6, '6'),
        (DICE_66, '66'),
        (DICE_10, '10'),
    )

    CHARGE_BLUE = 'BLUE'
    CHARGE_RED = 'RED'
    CHARGE_CHOICES = (
        (CHARGE_BLUE, 'Blue'),
        (CHARGE_RED, 'Red'),
    )

    name = models.CharField(max_length=255, null=False, blank=True)
    grade = models.IntegerField(null=False, blank=False, default=1)
    attack_type = models.CharField(max_length=255, null=False, blank=False, choices=ATTACK_TYPE_CHOICES, default=ATTACK_TYPE_MELEE)
    dice_type = models.CharField(max_length=255, null=False, blank=False, choices=DICE_CHOICES, default=DICE_4)
    charge_type = models.CharField(max_length=255, null=False, blank=True, choices=CHARGE_CHOICES, default=CHARGE_BLUE)
    image_thumbnail = models.CharField(max_length=255, null=False, blank=True)
    image_full = models.CharField(max_length=255, null=False, blank=True)
    image_sd = models.CharField(max_length=255, null=False, blank=True)

    # master_skill = models.ForeignKey(MasterSkill)


class DicerCard(BaseModel):
    dicer = models.ForeignKey(Dicer)
    level = models.IntegerField(default=1)
    move = models.IntegerField(null=False, blank=False, default=1)
    attack = models.IntegerField(null=False, blank=False, default=1)
    life = models.IntegerField(null=False, blank=False, default=1)

    user = models.ForeignKey(User, null=True)
