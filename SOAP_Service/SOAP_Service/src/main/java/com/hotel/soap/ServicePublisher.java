package com.hotel.soap;

import javax.xml.ws.Endpoint;

public class ServicePublisher {

    public static void main(String[] args) {
        // Publicar el servicio SOAP en una URL local
        Endpoint.publish("http://localhost:9090/soap/availability", new HotelAvailabilityService());
        System.out.println("SOAP Service is running at http://localhost:9090/soap/availability?wsdl");
    }
}

