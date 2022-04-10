from rest_framework import serializers

from .models import Group

class GroupSerializer(serializers.ModelSerializer):
    
    empty = serializers.BooleanField()
    class Meta:
        model = Group
        fields = ("id", "name", "description", "empty")
        
    