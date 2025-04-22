from rest_framework import viewsets
from api.models.avaliacao import Avaliacao
from api.serializers.avaliacao import AvaliacaoSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class AvaliacaoViewSet (viewsets.ModelViewSet):
  permission_classes = [IsAuthenticated]
  authentication_classes = [TokenAuthentication]
  queryset = Avaliacao.objects.all()
  serializer_class = AvaliacaoSerializer
