from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import avaliacao, categoria, cidade, ponto, usuario

router = DefaultRouter()
router.register(r'cidades', cidade.CidadeViewSet)
router.register(r'categorias', categoria.CategoriaViewSet)
router.register(r'pontos', ponto.PontoTuristicoViewSet)
router.register(r'avaliacoes', avaliacao.AvaliacaoViewSet)
router.register(r'usuarios', usuario.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
