FROM python:3.9.10-alpine

ENV PYTHONUNBUFFERED 1


WORKDIR /app/backend
COPY requirements.txt /app/backend
RUN pip install --upgrade pip
RUN apk add --update --no-cache postgresql-client
RUN apk add --update --no-cache --virtual .tmp-build-deps \
      gcc libc-dev linux-headers postgresql-dev
RUN pip install -r requirements.txt
RUN apk del .tmp-build-deps 

EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]