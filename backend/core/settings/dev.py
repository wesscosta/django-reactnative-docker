from .base import *

ALLOWED_HOSTS = ['127.0.0.1', 'localhost', '10.19.14.8']
DEBUG = True

# Segurança desativada para ambiente local
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False
SECURE_SSL_REDIRECT = False

SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'

SECURE_HSTS_SECONDS = 0
SECURE_HSTS_INCLUDE_SUBDOMAINS = False
SECURE_HSTS_PRELOAD = False

# Evite usar CSRF_TRUSTED_ORIGINS em localhost com HTTP
# Se usar HTTPS localmente, adicione com 'https://' no prefixo
