import { Box } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import { useContext } from "react"
import { PassportAppContext } from "../contexts/PassportAppContext"
import { format } from "path"



const DateAndTime = () => {
    const { updateData, fetchAvailability, availability, ...data } = useContext(PassportAppContext)
    const shouldDisableDate = (date:Dayjs) => {
        const availableDate = availability.find(
            (item)=> item.date === date.format("DD-MM-YYYY")
        )
        if (!availableDate) return true;

        const isAvailable = availableDate.slots.some(
            (slot)=> slot.availableSlot > 0
        )

        return isAvailable ? false:true
    }

    return (
        <Box sx={{display:"flex",flexDirection:"column",mt:6,margin:"0 auto",maxWidth:300}}>
            <h1>Passport App</h1>
            {/* <h1>{contextvalue}</h1> */}
            {/* <h1>{data.bookingDate}</h1> */}

             <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    format="DD/MM/YYYY"
                    value={data.bookingDate ? dayjs(data.bookingDate) : null}
                    shouldDisableDate={shouldDisableDate}
                    onOpen={() => fetchAvailability(dayjs().month())}
                    onMonthChange={(date:Dayjs)=>fetchAvailability(date.month())}
                    onChange={(value => {
                    const dayjsObj = value as Dayjs
                    const month = dayjsObj.month()
                    updateData({
                        ...data,
                        // bookingDate:dayjsObj.format("DD/MM/YYYY")
                        bookingDate:dayjsObj.toDate()
                    })
                })} />
            </LocalizationProvider>
        </Box>
    )
}
export default DateAndTime;