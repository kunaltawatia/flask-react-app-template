FROM node:18 AS web_app

WORKDIR /app

COPY web_app/package*.json ./

RUN npm install

COPY web_app/ .

RUN npm run build

FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY server ./server

COPY --from=web_app /app/build /app/server/web_app_build

EXPOSE 5000

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "server:app"]