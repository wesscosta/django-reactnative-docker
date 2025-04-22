from rest_framework import serializers
from api.models.ponto import PontoTuristico

class PontoTuristicoSerializer(serializers.ModelSerializer):
  class Meta:
    model = PontoTuristico
    fields = '__all__'
