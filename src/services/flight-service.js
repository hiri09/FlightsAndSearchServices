const {FlightRepository , AirplaneRepository } = require('../repositry/index');

class FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){

        try {
            const airplane = await this.airplaneRepository.getAirplanes(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data , tottalSeats : airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer ok" , data);
            throw {error};
        }
    }
}

module.exports = FlightService;


/*
flightNumber,
 *  airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 */