from django.db import models

class Cidade(models.Model):
	nome = models.CharField(max_length=100)
	uf = models.CharField(max_length=2, default='PI')
	latitude = models.FloatField()
	longitude = models.FloatField()

	def __str__(self):
		return f'{self.nome} - {self.uf}'
