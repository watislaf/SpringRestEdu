
// WEB
sudo apt update

git clone https://github.com/watislaf/SpringRestEdu.git
cd SpringRestEdu/
sudo apt install nginx -y
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable

RUN sudo systemctl start nginx

sudo apt install npm --Yes
cd app-react/

sudo rm package-lock.json

sudo npm install
sudo npm install --save react react-dom react-scripts
sudo npm install bootstrap

docker run -it -p 3000:3000 webapp



// DB
sudo -u postgres createuser --interactive  RomaVlad -s


TODO psql,ngix settings . string , gradle. Make settings inside github, git actions


/// RUNNED ON SERVER NOT IN DOCKER
// Docker
// sudo apt-get remove docker docker-engine docker.io containerd runc
// sudo apt-get install apt-transport-https ca-certificates gnupg-agent software-properties-common --Yes
// sudo apt-key fingerprint 0EBFCD88
// sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
// sudo apt-get update
// sudo apt-get install docker-ce docker-ce-cli containerd.io --Yes
// apt install docker-compose -y

// COMPOSE
// https://medium.com/analytics-vidhya/getting-started-with-postgresql-using-docker-compose-34d6b808c47c
// docker-compose run myapp bash

// docker-compose up -d
// docker-compose down

// docker-compose run database bash
// psql -h psql -p 5432 -d database -U postgres // connect to db psql (pass req)
