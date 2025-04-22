# Turistando

## :computer: Start

1. Faça o clone do repositório do github
```bash
  # https
  git clone https://github.com/wesscosta/turistando-django-reactnative-docker

```
2. Subir os containers
```bash
  # run in background
  docker compose up --build -d # usando docker (recomendado) 
  docker-compose up --build -d # usando docker-compose
```

```bash
  # encerrar os container
  docker compose down 
```


3. Para visualizar o nome dos containers rodando
```bash
  docker ps
```
4. Entra no container web
```bash
  docker exec -it CONTAINER_NAME bash
```
5. Rodar as migrations
```bash
  python manage.py migrate
```
6. Coletar os statics files
```bash
  python manage.py collectstatic
```
7. Criar o superuser
```bash
  python manage.py createsuperuser
```
8. Acesso: [http://127.0.0.1:8000/admin](http://127.0.0.1:8000) or [http://localhost:8000/admin](http://localhost:8000)

