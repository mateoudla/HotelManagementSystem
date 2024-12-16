# Usa una imagen de OpenJDK
FROM openjdk:11-jdk-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el código fuente y el pom.xml
COPY . .

# Construir el proyecto con Maven
RUN apt-get update && apt-get install -y maven
RUN mvn clean package

# Exponer el puerto donde se publica el servicio SOAP
EXPOSE 9090

# Ejecutar el servicio
CMD ["java", "-jar", "target/SOAP_HotelAvailabilityService-1.0-SNAPSHOT.jar"]