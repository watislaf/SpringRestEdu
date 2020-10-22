FROM node:latest

RUN git clone https://github.com/watislaf/SpringRestEdu.git
WORKDIR SpringRestEdu/app-react/

RUN npm install -g typescript
RUN npm install -g npm@latest
RUN npm install -g react react-dom react-scripts
RUN npm install bootstrap
RUN npm install axios
EXPOSE 3000
CMD npm start
