from rest_framework import serializers

from apps.groups.models import Group
from apps.groups.serializers import GroupSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    group_names = serializers.SlugRelatedField(
        source="group", queryset=Group.objects.all(), many=True, slug_field="name"
    )

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "created",
            "group_names",
            
        )
