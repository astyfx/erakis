from django.contrib import admin

from main.models import Dicer, User


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', )


class DicerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'grade', 'dice_type', 'charge_type', 'attack_type', 'image_thumbnail')


admin.site.register(User, UserAdmin)
admin.site.register(Dicer, DicerAdmin)
