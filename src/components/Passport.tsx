import { Box, Button } from "@mui/material" 
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import { useContext, useEffect, useState } from "react"
import { PassportAppContext } from "../contexts/PassportAppContext";
import PassportStepper from "./PassportStepper";

export const PassportApp = () => {
    // //const contextvalue = useContext(PassportAppContext)
    // const [month, setMonth] = useState<number>()
    // const { updateData, ...data } = useContext(PassportAppContext)
    // console.log(data)
    // const selectedMonth =dayjs(data.bookingDate).month()
    
    // // console.log("Passport app.")
    
    // useEffect(() => {
    //     // console.log("inside useEffect..")
    //     fetchAvailability()
    // }, [selectedMonth])
    // // console.log("about to render")

    // const fetchAvailability = async () => {
    //     // const url = `http://localhost:5000/availability?month=${month}`;
    //     const url = `http://localhost:5000/availability?month=${selectedMonth}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data)
    // }
    
    return (
        <Box>
            <PassportStepper/>
        </Box>
        
        // <Box sx={{display:"flex",flexDirection:"column",mt:6,margin:"0 auto",maxWidth:300}}>
        //     <h1>Passport App</h1>
        //     {/* <h1>{contextvalue}</h1> */}
        //     <h1>{data.bookingDate}</h1>

        //      <LocalizationProvider dateAdapter={AdapterDayjs}>
        //         <DatePicker onChange={(value => {
        //             const dayjsObj = value as Dayjs
        //             setMonth(dayjsObj.month())
        //             updateData({
        //                 ...data,
        //                 bookingDate:dayjsObj.format("DD/MM/YYYY")
        //             })
        //         })} />
        //     </LocalizationProvider>
            
            
        // </Box>
    )
}



