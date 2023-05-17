import { Box } from "@mui/material"
import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContext";
import dayjs from "dayjs";

const ComfirmAndReview = () => {
    const {bookingDate,time,updateData,user}=useContext(PassportAppContext)
    return (
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Confirm And review</h1>
            <h2>Date:{dayjs(bookingDate).format("DD/MM/YYYY")}</h2>
            <h2>Time:{time}</h2>
            <h2>Name:{ user?.name}</h2>
            <h2>NRCNumber:{ user?.nrcNumber}</h2>
            <h2>Email:  { user?.email}</h2>
        </Box>
    )
}
export default ComfirmAndReview;