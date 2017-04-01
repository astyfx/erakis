import coreapi
from django.utils.datastructures import MultiValueDictKeyError
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import list_route
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from main.models import User


class AuthViewSet(viewsets.GenericViewSet):
    queryset = User.objects.all()
    api_content = {
        'signup': coreapi.Link(
            url='/api/auth/signup/',
            action='post',
            fields=[
                coreapi.Field(name='email', required=True, location='form', description='email', ),
                coreapi.Field(name='password', required=True, location='form',
                              description='password', ),
            ],
            description="Signup User",
        ),
    }

    @list_route(methods=['post'])
    def signup(self, request, *args, **kwargs):
        try:
            email = request.data['email']
            password = request.data['sendbirdApiToken']
        except MultiValueDictKeyError:
            raise ValidationError({'detail': 'Missing parameters.'})

        user = User.objects.create(email=email, password=password)

        return Response(user)
