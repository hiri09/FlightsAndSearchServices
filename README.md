## DB Design 
 - Airplane Table
 - Flights
 - Airport
 - City

 - A flight belongs to an airplane can be used in multiple flights
 - A city has many airports but one airport belongs to a city
 - one airport can have many flights but a flight belong to one airport


## Tables

## city : id , name , created_at , updated_at
## Airpot : id , address , created_at , updated_at , name , city_id
   - npx sequelize model:generate --name Airport --attributes name:string,address:string,cityId:integer
   ## Relationship : city can have multiple aiport but single ariport belongs to single city (one to many) 
     


