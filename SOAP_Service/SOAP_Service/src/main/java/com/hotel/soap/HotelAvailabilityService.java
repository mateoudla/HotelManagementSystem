package com.hotel.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public class HotelAvailabilityService {

    @WebMethod
    public String checkAvailability(
            @WebParam(name = "startDate") String startDate,
            @WebParam(name = "endDate") String endDate,
            @WebParam(name = "roomType") String roomType) {

        // Log para depurar
        System.out.println("StartDate: " + startDate + ", EndDate: " + endDate + ", RoomType: " + roomType);

        // Validar parámetros
        if (roomType == null || roomType.isEmpty()) {
            return "<availability>" +
                    "<room><id>101</id><type>Unknown</type><status>Unavailable</status></room>" +
                    "</availability>";
        }

        // Simular disponibilidad
        return "<availability>" +
                "<room><id>101</id><type>" + roomType + "</type><status>Available</status></room>";
    }

}

