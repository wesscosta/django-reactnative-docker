from django.db import models
from .categoria import Categoria
from .cidade import Cidade 

class PontoTuristico(models.Model):
  cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE, related_name='pontos')
  categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, related_name='pontos')
  titulo = models.CharField(max_length=200)
  imagem = models.ImageField(upload_to='pontos/')
  descricao = models.TextField()
  latitude = models.FloatField()
  longitude = models.FloatField()
  
  def __str__(self):
    return self.titulo
