const {FlightRepository, AirplaneRepository} = require('../repositry/index');

class FlightService {

    constructor() {
        this.airplaneRespository = new AirplaneRepository();
        this.flightrespository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            
            const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
            const flight = await this.flightrespository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            console.log("not",flight);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer ram");
            throw {error};
        }
    }

    
    
    
}

module.exports = FlightService;

/**
 * {
 *   flightNumber,
 *  airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */