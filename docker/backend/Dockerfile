FROM python:3.12-slim

# Define diretório de trabalho
WORKDIR /app

# Evita criação de arquivos .pyc e mantém logs no terminal
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Instala dependências
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante da aplicação
COPY . .

# Expõe a porta do Django
EXPOSE 8000
