# version de node
FROM node:12

# creamos una carpeta como lo indica en la documentacion de node
RUN mkdir -p /usr/src/app

# definimos ese directorio como el de trabajo y nos ubicamos ahi
WORKDIR /usr/src/app

# copiamos los json para q instale las dependencias
COPY package*.json ./

# ejecutamos el comemando npm install
RUN npm install

#copiamos el directorio actual dentro del directorio de trabajo
COPY . .

# exponemos el puerto 3000
EXPOSE 4000

#  levantamos la base de datos
CMD ["npm", "run", "dev"]
