package com.hotel.soap;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class HotelAvailabilityService {

    @WebMethod
    public String checkAvailability(String startDate, String endDate, String roomType) {
        // Lógica simple para simular disponibilidad de habitaciones
        return "<availability>" +
                "<room><id>101</id><type>" + roomType + "</type><status>Available</status></room>" +
                "</availability>";
    }
}

