from rest_framework import serializers
from api.models.avaliacao import Avaliacao

class AvaliacaoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Avaliacao
    fields = '__all__'
