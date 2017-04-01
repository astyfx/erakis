from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist
import jwt
from rest_framework_jwt.settings import api_settings
from api import exceptions
from api.models import Application


def jwt_payload_handler(user):
  try:
    email = user.get_username()
  except AttributeError:
    email = user.email

  return {
    'user_id': user.pk,
    'email': email,
    'exp': datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA
  }


def jwt_encode_handler(payload):
  return jwt.encode(
    payload,
    api_settings.JWT_SECRET_KEY,
    api_settings.JWT_ALGORITHM
  ).decode('utf-8')


def jwt_get_username_from_payload_handler(payload):
    """
    Override this function if username is formatted differently in payload
    """
    return payload.get('email')


def jwt_decode_handler(token):
  options = {
    'verify_exp': api_settings.JWT_VERIFY_EXPIRATION,
  }

  return jwt.decode(
    token,
    api_settings.JWT_SECRET_KEY,
    api_settings.JWT_VERIFY,
    options=options,
    leeway=api_settings.JWT_LEEWAY,
    audience=api_settings.JWT_AUDIENCE,
    issuer=api_settings.JWT_ISSUER,
    algorithms=[api_settings.JWT_ALGORITHM]
  )


def jwt_response_payload_handler(token, user=None, application_id=None, request=None):
  """
  Returns the response data for both the login and refresh views.
  Override to return a custom response such as including the
  serialized representation of the User.

  Example:

  def jwt_response_payload_handler(token, user=None, request=None):
      return {
          'token': token,
          'user': UserSerializer(user).data
      }

  """

  return {
    'token': token,
    'user': {
      'email': user.email
    },
    'application_id': application_id
  }
