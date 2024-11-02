FROM mongo:4.4.7
RUN echo "rs.initiate();" > /docker-entrypoint-initdb.d/replica-init.js
CMD [ "--replSet", "rs" ]

# docker build ./ -t mongodb:4.7-replset   - to build the image
#  docker run --name mongodb-replset22 -p 27017:27017 -d mongodb:4.7-replset  - to run the container
#  docker start mongodb-replset22 - to start the container
#  docker ps - to check the running containers
# docker stop mongodb-replset22 - to stop the container
# docker rm mongodb-replset22 - to remove the container
