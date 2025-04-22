from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class Avaliacao(models.Model):
  content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
  objects_id = models.PositiveIntegerField()
  
  content_object = GenericForeignKey('content_type', 'objects_id')
  usuario = models.ForeignKey(User, on_delete=models.CASCADE)
  nota = models.IntegerField()
  comentario = models.TextField()
  
  def __str__(self):
    return f'{self.usuario.username} - {self.nota}'
  
