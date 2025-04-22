from rest_framework import viewsets
from django.contrib.auth.models import User
from api.serializers.usuario import UserSerializer

class UserViewSet (viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
