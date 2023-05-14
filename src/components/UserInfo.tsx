import { Box, TextField } from "@mui/material"
import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContext";


const UserInfo = () => {
    const {updateData,...data}=useContext(PassportAppContext)
    return (
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <TextField
          required
          id="name"
                placeholder="Name"
                value={data.user?.name? data.user.name:""}
                sx={{mb:2}}
                onChange={(event)=>
                updateData({
                    ...data,
                    user:{...data.user,name:event.target.value}
                })}
            />

            <TextField
          required
                id="nrcNumber"
                placeholder="NRC Number"
                value={data.user?.nrcNumber?data.user.nrcNumber:""}
          sx={{mb:2}}
          onChange={(event)=>
        updateData({
            ...data,
            user:{...data.user,nrcNumber:event.target.value}
        })}
            />

            <TextField
          required
          id="email"
                placeholder="email"
                value={data.user?.email ? data.user.email:""}
          sx={{mb:2}}
          onChange={(event)=>
        updateData({
            ...data,
            user:{...data.user,email:event.target.value}
        })}
        />
        </Box>
    )
}
export default UserInfo;