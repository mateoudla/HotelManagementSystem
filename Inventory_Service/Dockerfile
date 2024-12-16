# Usa Node.js como imagen base
FROM node:18

# Directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto 4000
EXPOSE 4000

# Ejecutar el servidor
CMD ["node", "app.js"]
