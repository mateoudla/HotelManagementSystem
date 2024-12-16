
# **Ejemplos de Solicitudes y Respuestas**

A continuación, se muestran ejemplos detallados de las solicitudes y respuestas esperadas para cada funcionalidad del sistema.

---

## **1. Servicio SOAP (Verificar Disponibilidad de Habitaciones)**

### **Solicitud SOAP**
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

### **Respuesta Esperada**
```xml
<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:checkAvailabilityResponse xmlns:ns2="http://soap.hotel.com/">
            <return>&lt;availability&gt;&lt;room&gt;&lt;id&gt;101&lt;/id&gt;&lt;type&gt;Deluxe&lt;/type&gt;&lt;status&gt;Available&lt;/status&gt;&lt;/room&gt;</return>
        </ns2:checkAvailabilityResponse>
    </S:Body>
</S:Envelope>
```

---

## **2. API REST (Gestión de Reservas)**

### **Crear Reserva (POST /reservations)**

**Solicitud:**
```json
{
    "room_number": 101,
    "customer_name": "John Doe",
    "start_date": "2024-12-20",
    "end_date": "2024-12-25",
    "room_type": "Deluxe"
}
```

**Respuesta Esperada:**
```json
{
    "_id": "64a5cfc0951a4d001e8f1a1b",
    "room_number": 101,
    "customer_name": "John Doe",
    "start_date": "2024-12-20T00:00:00.000Z",
    "end_date": "2024-12-25T00:00:00.000Z",
    "status": "active",
    "__v": 0
}
```

### **Consultar Reserva (GET /reservations/{id})**

**Solicitud:**
```bash
GET /reservations/64a5cfc0951a4d001e8f1a1b
```

**Respuesta Esperada:**
```json
{
    "_id": "64a5cfc0951a4d001e8f1a1b",
    "room_number": 101,
    "customer_name": "John Doe",
    "start_date": "2024-12-20T00:00:00.000Z",
    "end_date": "2024-12-25T00:00:00.000Z",
    "status": "active",
    "__v": 0
}
```

### **Cancelar Reserva (DELETE /reservations/{id})**

**Solicitud:**
```bash
DELETE /reservations/64a5cfc0951a4d001e8f1a1b
```

**Respuesta Esperada:**
```json
{
    "message": "Reservation canceled successfully"
}
```

---

## **3. Microservicio de Inventario**

### **Registrar Habitación (POST /rooms)**

**Solicitud:**
```json
{
    "room_number": 102,
    "room_type": "Suite",
    "status": "available"
}
```

**Respuesta Esperada:**
```json
{
    "_id": "64a5d0f0951a4d001e8f1a2c",
    "room_number": 102,
    "room_type": "Suite",
    "status": "available",
    "__v": 0
}
```

### **Actualizar Estado de Habitación (PATCH /rooms/{id})**

**Solicitud:**
```json
{
    "status": "maintenance"
}
```

**Respuesta Esperada:**
```json
{
    "_id": "64a5d0f0951a4d001e8f1a2c",
    "room_number": 102,
    "room_type": "Suite",
    "status": "maintenance",
    "__v": 0
}
```

---

## **Pruebas Generales**

- Verifica las solicitudes con herramientas como Postman o cURL.
- Asegúrate de que MongoDB está corriendo correctamente.
- Revisa los logs en la consola para identificar posibles errores.

