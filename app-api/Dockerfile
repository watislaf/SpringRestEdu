FROM openjdk:8-jdk-a
EXPOSE 8095
RUN git clone https://github.com/watislaf/SpringRestEdu.git
ARG JAR_FILE=SpringRestEdu/app-api/build/libs/app-web-0.0.1-S$
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]


#RUN apt-get update && \
#      apt-get -y install sudo


#RUN adduser --disabled-password --gecos '' docker
#RUN adduser docker sudo
#RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
#USER docker

# RUN sudo apt --yes install postgresql postgresql-contrib
# CMD sudo -u postgres createuser --interactive RomaVlad -s

