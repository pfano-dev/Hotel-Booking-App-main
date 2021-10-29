import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createRoom } from './graphql/mutations'
import { listRooms } from './graphql/queries'
import awsExports from "./aws-exports";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


Amplify.configure(awsExports);

export default function Booking() {
    
   
    const [rooms, setRooms] = useState([])
    const [bookingDetails, udpateDetails] = useState({
        checkIn: "",
        checkOut: "",
        name:"",
        totalDays: 0,
        totalprice: 0,
        showBooking: true,
        dbooking: false,
        showPayment: false,
        bookingMsg: false
    })




    useEffect(() => {
        fetchRooms ()
 
    }, [])


    const fetchRooms = async () => {
        try {
            const roomData = await API.graphql(graphqlOperation(listRooms))
            const rooms = roomData.data.listRooms.items
            setRooms(rooms)
        } catch (err) { console.log('error fetching actors') }
    }



  

    return (
        <div>
           


            <TableContainer style={{width:"50em", marginLeft:"25em", marginTop:"5em"}} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight:"bold" , fontSize:"18px"}} >FirstName</TableCell>
                                <TableCell style={{fontWeight:"bold",fontSize:"18px"}} >checkIn</TableCell>
                                <TableCell style={{fontWeight:"bold", fontSize:"18px"}} align="right">checkOut</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>


                            {rooms.map((row) => (



                                <TableRow key={row?.id}>
                                    <TableCell component="th" scope="row">
                                        {row?.name}
                                    </TableCell>
                                    <TableCell >{row?.checkIn}</TableCell>
                                    <TableCell align="right">{row?.checkOut}</TableCell>
                                
                                
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>



        </div >
    )
}
