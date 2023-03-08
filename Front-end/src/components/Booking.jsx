import React, {useState} from 'react';
import { Button, FormLabel, TextField } from "@mui/material";
import { Box, maxWidth } from "@mui/system";


const Booking =({currentUser, currentSite, addBooking})=> {
  const [newBooking, setNewBooking] = useState({})
  const [newCamper, setNewCamper] = useState({});
  
  return (
    <form>
      <Box display="flex" flexDirection="column" justifyContent="center" maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft="auto" marginRight="auto" marinTop={40}>
      <h2>Booking A journey in {currentSite.name}</h2>
      <FormLabel>Camper's First Name</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="firstname" placeholder="First Name" onChange={(e) => {
                setNewCamper({...newCamper, firstname: e.target.value})
            }}/>
      <FormLabel>Camper's Last Name</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="lastname" placeholder="Last Name" onChange={(e) => {
                setNewCamper({...newCamper, lastname: e.target.value})
            }}/>
      <FormLabel>Camper's Email</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="email" placeholder="Email" onChange={(e) => {
                setNewCamper({...newCamper, email: e.target.value})
            }}/>
      <FormLabel>Camper's Tel Number</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="telnumber" placeholder="Tel Number" onChange={(e) => {
                setNewCamper({...newCamper, telnumber: e.target.value})
            }}/>
      <FormLabel>Check in</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="check_in" placeholder="Check in" onChange={(e) => {
                setNewBooking({...newBooking, check_in: e.target.value})
            }}/>
      <FormLabel>Duration</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="duration" placeholder="Duration" onChange={(e) => {
                setNewBooking({...newBooking, duration: e.target.value})
            }}/>
      <Button type="submit" variant="contained" onClick={() => {addBooking(newCamper, newBooking)}}>Book a Journey</Button>
      </Box>
      
    </form>
  );
}

export default Booking;
