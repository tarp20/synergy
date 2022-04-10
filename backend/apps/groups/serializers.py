from rest_framework import serializers

from .models import Group

class GroupSerializer(serializers.ModelSerializer):
    
    empty = serializers.BooleanField(read_only=True)
    class Meta:
        model = Group
        fields = ("id", "name", "description", "empty")
        
    