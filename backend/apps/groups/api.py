from rest_framework import viewsets, status
from rest_framework.response import Response


from .models import Group
from .serializers import GroupSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def destroy(self, request, *args, **kwargs):
        items, __ = Group.objects.filter(
            pk=self.kwargs["pk"], users_group=None
        ).delete()
        if items:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
