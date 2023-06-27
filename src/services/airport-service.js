const CrudService = require('./crud-services');
const { AirportRepository } = require('../repositry/index');
class AirportService extends CrudService{

    constructor(){
        const airportRepository = new AirportRepository();

        super(airportRepository);
    }
}

module.exports = AirportService;