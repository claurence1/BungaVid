FROM node:alpine

RUN apk update || : && apk add python

RUN apk --no-cache add --virtual build-dependencies g++ make ca-certificates openssl &&\
    ## Fetches the source code
    wget https://github.com/P-H-C/phc-winner-argon2/archive/20161029.tar.gz -O /tmp/argon2.tar.gz &&\
    ## Untar it
    tar zxvf /tmp/argon2.tar.gz -C /tmp && rm /tmp/argon2.tar.gz &&\
    mkdir -p /usr/src && mv /tmp/phc-winner-argon2-20161029 /usr/src/argon2 &&\
    cd /usr/src/argon2 &&\
    ## make argon2 and install
    make && make bench && make test && make install &&\
    ## make bench and install
    install bench /usr/bin &&\
    ## free space from build dependencies
    apk del build-dependencies
    
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN apk add argon2
RUN npm install bcrypt

RUN npm install

COPY . /usr/src/app

# RUN cd keys
# RUN openssl ecparam -genkey -name prime256v1 -noout -out jwt_priv.pem
# RUN openssl ec -in jwt_priv.pem -pubout -out jwt_pub.pem

EXPOSE 3004

CMD [ "node", "server.js" ]