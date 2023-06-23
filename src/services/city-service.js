const { CityRepository } = require('../repositry/index');

class CityService{

    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{

            const city = await this.cityRepository.createCity(data);
            return city;

        }catch(error){
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCity(city_id){
        try{
           
            const response = await this.cityRepository.deleteCity(city_id)
        }catch(error){
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async updateCity(){
        try{

        }catch(error){
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getCity(){
        try{

        }catch(error){
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = CityService;