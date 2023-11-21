const {Op} = require('sequelize');

const {City} = require('../models/index');

class CityRepository{
   
    async createCity(data){
        try{
            console.log(data);
            const city = await City.create(data);
            return city;
        }catch(error){
            console.log("Something went wrong in repository layer1");
            throw {error};
        }
    }

    async deleteCity(city_id){
        try{
            
            await City.destroy({
                where:{
                    id:city_id
                }
            });

            return true;

        }catch(error){
            console.log("Something went wrong in repository layer2");
            throw {error};
        }
    }

    async updateCity(city_id , data){
        try{
            
            const city = await City.update(data , {
                where:{
                    id:city_id
                }
            });
            /*
            const city = await City.findByPk(city_id);
            city.name = data.name;
            await city.save();*/
            
            return city;
        }catch(error){
            console.log("Something went wrong in repository layer3");
            throw {error};
        }
    }

    async getCity(city_id){
        try{
           
            const city = await City.findByPk(city_id);
            return city;

        }catch(error){
            console.log("Something went wrong in repository layer4");
            throw {error};
        }
    }

    async getAllCities(filter){
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;

        }catch(error){
            console.log("Something went wrong in repository layer4");
            throw {error};
        }
    }
}

module.exports = CityRepository;
