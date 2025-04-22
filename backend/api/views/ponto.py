from rest_framework import viewsets
from api.models.ponto import PontoTuristico
from api.serializers.ponto import PontoTuristicoSerializer

class PontoTuristicoViewSet (viewsets.ModelViewSet):
  queryset = PontoTuristico.objects.all()
  serializer_class = PontoTuristicoSerializer
