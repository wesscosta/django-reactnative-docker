from django.contrib import admin
from .models import avaliacao, categoria, cidade, ponto

admin.site.register(avaliacao.Avaliacao)
admin.site.register(categoria.Categoria)
admin.site.register(cidade.Cidade)
admin.site.register(ponto.PontoTuristico)

