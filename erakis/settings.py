"""
Django settings for erakis project.

Generated by 'django-admin startproject' using Django 1.10.6.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.10/ref/settings/
"""

import os
import pymysql
import datetime

pymysql.install_as_MySQLdb()
from corsheaders.defaults import default_headers

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'kgytc5awx#x1h=@b7__0f%a#81(yr(xv!ld^9abi1az=r9(^34'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    '192.168.56.64',
    'localhost',
    'localtest.me'
]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',
    'django_extensions',
    'debug_toolbar',
    'main.apps.MainConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
]

ROOT_URLCONF = 'erakis.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'DEFAULT_RENDERER_CLASSES': (
        'main.renderers.CamelCaseJSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
}

JWT_SECRET = '+cd2e5$-!vks1h3*m$%2uy4$p+&(ry+-9zt8_^gn@+*5coqak6'
JWT_AUTH = {
  'JWT_ENCODE_HANDLER': 'main.api.authentication.jwt_encode_handler',
  'JWT_DECODE_HANDLER': 'main.api.authentication.jwt_decode_handler',
  'JWT_PAYLOAD_HANDLER': 'main.api.authentication.jwt_payload_handler',
  'JWT_PAYLOAD_GET_USER_ID_HANDLER': 'rest_framework_jwt.utils.jwt_get_user_id_from_payload_handler',
  'JWT_RESPONSE_PAYLOAD_HANDLER': 'main.api.authentication.jwt_response_payload_handler',
  'JWT_PAYLOAD_GET_USERNAME_HANDLER': 'main.api.authentication.jwt_get_username_from_payload_handler',
  'JWT_SECRET_KEY': JWT_SECRET,
  'JWT_ALGORITHM': 'HS256',
  'JWT_VERIFY': True,
  'JWT_VERIFY_EXPIRATION': True,
  'JWT_LEEWAY': 0,
  'JWT_EXPIRATION_DELTA': datetime.timedelta(seconds=94608000),
  'JWT_AUDIENCE': None,
  'JWT_ISSUER': None,

  'JWT_ALLOW_REFRESH': False,
  'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7),

  'JWT_AUTH_HEADER_PREFIX': 'JWT',
}

WSGI_APPLICATION = 'erakis.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'erakis',
        'USER': 'root',
        'PASSWORD': 'dotmxl',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Custom User models
AUTH_USER_MODEL = 'main.User'

CORS_ORIGIN_WHITELIST = (
    'localhost:8888',
)
CORS_ALLOW_HEADERS = default_headers + (
    'erakisToken',
)


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/static/'
SENDBIRD_API_URL = 'https://api.sendbird.com/'

import socket
if socket.gethostname() == 'asty':
    DEBUG = False
    STATIC_URL = '/'
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'erakis',
            'USER': 'root',
            'PASSWORD': 'dotmxl',
            'HOST': 'localhost',
            'PORT': '3306',
        }
    }
