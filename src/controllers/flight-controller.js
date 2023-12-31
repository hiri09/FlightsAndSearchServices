const {FlightService} = require('../services/index');
const {ClientErrorCodes , ServerErrorCodes ,SuccessCodes} = require('../utils/error-codes');

const flightService = new FlightService();

const create = async(req , res)=>{
    try{
        const flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId ,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes. CREATED).json({
            data:flight,
            success:true,
            message:"Successfully created a flight",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to created a flight",
            err:error
        });
    }
}

const getAll = async(req , res)=>{
    try{

        
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:"Successfully fetched the flight",
            err:{}
        });
    }catch{
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the flight",
            err:error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id , req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to updated the flight',
            err: error
        });
    }
}
module.exports = {
    create,
    getAll,
    get,
    update
}

