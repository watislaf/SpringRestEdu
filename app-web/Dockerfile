FROM node:13.12.0-alpine

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# added libs here
RUN npm install bootstrap
RUN npm install axios
# added libs here

# add app
COPY . ./

# start app
CMD ["npm", "start"]
