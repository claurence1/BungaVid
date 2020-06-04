FROM python:buster

# Install node prereqs, nodejs and yarn
# Ref: https://deb.nodesource.com/setup_12.x
# Ref: https://yarnpkg.com/en/docs/install
RUN \
  echo "deb https://deb.nodesource.com/node_12.x buster main" > /etc/apt/sources.list.d/nodesource.list && \
  wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
  wget -qO- https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  apt-get update && \
  apt-get install -yqq nodejs yarn && \
  pip install -U pip && pip install pipenv && \
  npm i -g npm@^6 && \
  rm -rf /var/lib/apt/lists/* && \
  npm install bcrypt

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install


COPY package*.json ./

COPY . /usr/src/app

RUN cd keys
RUN openssl ecparam -genkey -name prime256v1 -noout -out jwt_priv.pem
RUN openssl ec -in jwt_priv.pem -pubout -out jwt_pub.pem

EXPOSE 3004

CMD [ "npm", "start" ]