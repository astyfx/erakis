import coreapi
from django.utils.datastructures import MultiValueDictKeyError
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import list_route
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from main.models import Dicer

from main.serializers import DicerSerializer
from main.permissions import ForAll


class LodexViewSet(viewsets.GenericViewSet):
    queryset = Dicer.objects.all()
    lookup_field = 'id'
    serialier_class = DicerSerializer

    api_content = {
        'list': coreapi.Link(
            url='/api/lodex/',
            action='get',
            fields=[
                coreapi.Field(name='limit', required=True, location='query', description='pagination limit', ),
                coreapi.Field(name='offset', required=False, location='query', description='pagination offset', ),
            ],
            description="Get Dicers",
        ),
    }

    def get_permissions(self):
        self.permission_classes = (ForAll, )
        return super(LodexViewSet, self).get_permissions()

    # @list_route()
    def list(self, request, *args, **kwargs):
        try:
            request.GET['limit']
        except MultiValueDictKeyError:
            raise ValidationError({'detail': 'Missing parameters.'})

        dicers = Dicer.objects.all()
        page = self.paginate_queryset(dicers)
        serializer = DicerSerializer(page, many=True)
        return self.get_paginated_response(serializer.data)
