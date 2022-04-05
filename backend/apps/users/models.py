from django.db import models
from apps.groups.models import Group


class User(models.Model):
    username = models.CharField("Username", max_length=100)
    created = models.DateTimeField("Created At", auto_now_add=True)
    group = models.ManyToManyField(
        Group, related_name="users_group", verbose_name="The User Group"
    )

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
