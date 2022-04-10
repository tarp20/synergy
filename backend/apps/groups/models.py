from django.db import models


class Group(models.Model):
    name = models.CharField("Name", max_length=99, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Group"
        verbose_name_plural = "Groups"
