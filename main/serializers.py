from rest_framework import serializers

from main.models import User, Dicer


class DicerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dicer
        fields = ('id', 'name', 'grade', 'attack_type', 'dice_type', 'charge_type')
