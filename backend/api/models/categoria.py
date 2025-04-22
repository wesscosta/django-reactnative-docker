from django.db import models

class Categoria(models.Model):
  TIPO_CHOICE = [
    ('Festival' , 'Festival'),
    ('Natureza','Natureza'),
    ('Arquitetonico','Arquitetônico'),
  ]

  tipo = models.CharField(max_length=20, choices=TIPO_CHOICE, unique=True)
  
  def __str__(self):
    return self.tipo
