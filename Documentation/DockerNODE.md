### NODE
docker container run \
--name nest-app \
-w /app \
-p 80:3000 \
-v "$(pwd)":/app \
node:16-alpine3.17 \
sh -c "yarn install && yarn start:dev"

docker container run \
--name frontend-app \
-w /app \
-p 8080:3080 \
-v "$(pwd)":/app \
node:16-alpine3.17 \
sh -c "yarn install && yarn dev"



------------------------------------------------------
-w: working directory (cd)
-p: puerto 80 (local) / 3000 (exponer)
-v: bind volumes / -v "$(pwd)":/app \ se enlaza la carpeta donde me encuentro con la carpeta que se encuentra dentro del contenedor de linus llamada app
-sh -c: Ejecutar shell comandos