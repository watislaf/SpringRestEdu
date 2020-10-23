FROM openjdk:8-jdk-alpine
EXPOSE 8095

COPY /build/libs/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]


#RUN apt-get update && \
#      apt-get -y install sudo


#RUN adduser --disabled-password --gecos '' docker
#RUN adduser docker sudo
#RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
#USER docker

# RUN sudo apt --yes install postgresql postgresql-contrib
# CMD sudo -u postgres createuser --interactive RomaVlad -s

