
# **Hotel Management System**

Este proyecto es un sistema de gestión para reservas de hoteles. Incluye tres servicios independientes que trabajan en conjunto para manejar reservas, inventario de habitaciones y la verificación de disponibilidad.

## **Estructura del Proyecto**

```plaintext
HotelManagementSystem/
├── SOAP_Service/           # Servicio SOAP para verificar disponibilidad de habitaciones
├── REST_API/               # API REST para gestionar reservas
├── Inventory_Service/      # Microservicio para gestionar el inventario de habitaciones
├── docker-compose.yml      # Configuración para ejecutar todos los servicios con Docker
└── README.md               # Documentación del proyecto
```

---

## **Servicios**

### **1. Servicio SOAP (Disponibilidad de Habitaciones)**

- **Descripción**: Permite verificar la disponibilidad de habitaciones según tipo y fechas.
- **URL del WSDL**:  
  ```bash
  http://localhost:9090/soap/availability?wsdl
  ```
- **Ejemplo de Solicitud SOAP**:
  ```xml
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hot="http://soap.hotel.com/">
     <soapenv:Header/>
     <soapenv:Body>
        <hot:checkAvailability>
           <startDate>2024-12-20</startDate>
           <endDate>2024-12-25</endDate>
           <roomType>Deluxe</roomType>
        </hot:checkAvailability>
     </soapenv:Body>
  </soapenv:Envelope>
  ```
- **Respuesta Ejemplo**:
  ```xml
  <availability>
     <room>
        <id>101</id>
        <type>Deluxe</type>
        <status>Available</status>
     </room>
  </availability>
  ```

---

### **2. API REST (Gestión de Reservas)**

- **Descripción**: Permite crear, consultar y cancelar reservas.
- **Base URL**:  
  ```bash
  http://localhost:3000/reservations
  ```
- **Endpoints**:
  - **Crear Reserva (POST)**:  
    ```json
    POST /reservations
    {
        "room_number": 101,
        "customer_name": "John Doe",
        "start_date": "2024-12-20",
        "end_date": "2024-12-25",
        "room_type": "Deluxe"
    }
    ```
  - **Consultar Reserva (GET)**:  
    ```bash
    GET /reservations/{id}
    ```
  - **Cancelar Reserva (DELETE)**:  
    ```bash
    DELETE /reservations/{id}
    ```

---

### **3. Microservicio de Inventario**

- **Descripción**: Gestiona las habitaciones del hotel, incluyendo su registro y actualización.
- **Base URL**:  
  ```bash
  http://localhost:4000/rooms
  ```
- **Endpoints**:
  - **Registrar Habitación (POST)**:  
    ```json
    POST /rooms
    {
        "room_number": 101,
        "room_type": "Deluxe",
        "status": "available"
    }
    ```
  - **Actualizar Estado de Habitación (PATCH)**:  
    ```json
    PATCH /rooms/{id}
    {
        "status": "maintenance"
    }
    ```

---

## **Requisitos del Sistema**

- Docker y Docker Compose instalados.
- Node.js (v18 o superior) para desarrollo local.
- MongoDB (se ejecuta en contenedor Docker).

---

## **Cómo ejecutar el proyecto**

### **1. Usando Docker Compose**
1. Asegúrate de que Docker esté corriendo.
2. Ejecuta el siguiente comando desde la carpeta raíz:
   ```bash
   docker-compose up --build
   ```
3. Todos los servicios estarán disponibles en sus respectivos puertos:
   - Servicio SOAP: `http://localhost:9090`
   - API REST: `http://localhost:3000`
   - Microservicio de Inventario: `http://localhost:4000`

### **2. Desarrollo local**
Si prefieres ejecutarlo sin Docker:
1. Configura y ejecuta MongoDB localmente.
2. En cada servicio, instala las dependencias y ejecuta el servidor:
   ```bash
   npm install
   node app.js
   ```

---

## **Pruebas**

### **Prueba del Servicio SOAP**
- Usa herramientas como Postman o SOAP UI.
- Carga el WSDL:  
  ```bash
  http://localhost:9090/soap/availability?wsdl
  ```

### **Prueba de la API REST**
- Usa herramientas como Postman.
- Realiza solicitudes a `http://localhost:3000/reservations`.

### **Prueba del Microservicio de Inventario**
- Usa herramientas como Postman.
- Realiza solicitudes a `http://localhost:4000/rooms`.

---

## **Notas Adicionales**

### **1. Integración entre servicios**
- La API REST llama al servicio SOAP para verificar disponibilidad.
- El microservicio de inventario es independiente y gestiona datos sobre habitaciones.

### **2. Base de datos**
- Cada servicio usa su propia colección en MongoDB:
  - API REST: `reservations`
  - Microservicio de Inventario: `rooms`

---

## **Autores**
- **Desarrollador Principal**: Mateo Ávila
- **Fecha de Desarrollo**: Diciembre 2024