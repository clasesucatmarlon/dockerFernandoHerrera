### Mostrar container/image/volume/network
docker container/image/volume/network ls
docker container/image/volume/network ls -a

### Eliminar containers
docker container rm -f ""containers" 
docker container prune 


### mariaDB
docker container run \
-dp 3306:3306 \
--name world-db \
--env MARIADB_USER=example-user \
--env  MARIADB_PASSWORD=user-password \
--env MARIADB_ROOT_PASSWORD=root-secret-password \
--env MARIADB_DATABASE=world-db \
--volume world-db:/var/lib/mysql \
--network app-world \
mariadb:jammy


### phpmyadmin
docker container run \
--name phpmyadmin \
-d \
-e PMA_ARBITRARY=1 \
-p 8080:80 \
--network app-world \
phpmyadmin:5.2.1-apache


https://docs.docker.com/engine/tutorials/networkingcontainers/
### Crear red para comunicar la bd con phpmyadmin
docker network create "name red"
ej: 
    docker network create app-world


### Conectar contenedores a una red
docker network connect "name network" "container"
ej:
    docker network connect app-world 6e0
    docker network connect app-world f3b


### Ver contenedores de una red
docker network inspect "name network"
ej:
    docker network inspect app-world