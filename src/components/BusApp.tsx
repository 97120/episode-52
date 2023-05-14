import { Autocomplete, Box, Button, TextField } from "@mui/material"
import { buses, stations } from "../utils/data"
import { useState } from "react"
import { Bus, SearchStation } from "../typings/type"

export const BusApp = () => {
    const [searchStations,setSearchStations]=useState<SearchStation>({startStation:null,endStation:null})
  const [directBus, setDirectBus] = useState<Bus[] | null>(null)
  
  const handleClick = () => {
    const busStartStation = buses.filter((bus) => 
      bus.stations.find((station)=>station.id===searchStations.startStation?.id )
    )
    const directBus = busStartStation.filter((bus) => 
       bus.stations.find((station)=>station.id===searchStations.endStation?.id)
    )
    console.log("Direct bus", directBus)
    setDirectBus(directBus)
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        mt: 5
      }}>
       
      <Box
      sx={{
          margin: " 0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection:"column",
          alignItems: "center"
        }}>
        
        <Autocomplete
      disablePortal
      id="movies"
      options={stations}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Start Station" />}
      onChange={(event,value)=>{
        value&& setSearchStations({...searchStations,startStation:value})
      }}
        />
        
      <Autocomplete
      disablePortal
      id="movies"
      options={stations}
      sx={{ width: 300 ,mt:3,mb:3 }}
      renderInput={(params) => <TextField {...params} label="End station" />}
      onChange={(event,value)=>{
        value&& setSearchStations({...searchStations,endStation:value})
      }}
       />

      <Button variant="contained" color="primary"
          sx={{ mt: 3,mb:4 }}
          onClick={handleClick}>
          Search Bus
        </Button>
         <Box>
         {searchStations.startStation&& (<h1>{ searchStations.startStation.label}</h1>)}
          {searchStations.endStation && (<h1>{searchStations.endStation.label}</h1>)}
        </Box>
        <Box>
          {directBus && directBus?.map((bus) => {
            return <h1>{ bus.name}</h1>
          })}
        </Box>

           
        
       
        <Button variant="contained" color="success"
          sx={{ mt: 3 }}
          onClick={() => {
          console.log("hello world")
        }}>Click</Button>

        

        </Box>
      
    </Box>
  );
}