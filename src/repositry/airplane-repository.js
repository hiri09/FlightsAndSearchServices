const {Airplane} = require('../models/index');

class AirplaneRepository{

    async getAirplanes(id){
        try{
            
            const airplanes = await Airplane.findByPk(id);
            console.log(airplanes);
            return airplanes;

        }catch(error){
            console.log("Something went wrong in repository layer1");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;