# Aguarda o banco de dados estar pronto
echo "Aguardando o banco de dados..."

while ! nc -z $DB_HOST 5432; do
  sleep 1
done

echo "Banco de dados pronto!"

# Aplica as migrações e coleta os arquivos estáticos
python manage.py migrate
python manage.py collectstatic --noinput

# Inicia o servidor Django
exec python manage.py runserver 0.0.0.0:8000
