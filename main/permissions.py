from rest_framework.permissions import BasePermission


class ForAll(BasePermission):
    """
    Allows access only to project members(agents).
    """
    message = 'All'

    def has_permission(self, request, view):
        return True
