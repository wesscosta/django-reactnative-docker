from rest_framework import viewsets
from api.models.cidade import Cidade
from api.serializers.cidade import CidadeSerializer

class CidadeViewSet (viewsets.ModelViewSet):
  queryset = Cidade.objects.all()
  serializer_class = CidadeSerializer
