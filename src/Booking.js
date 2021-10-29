import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createRoom } from './graphql/mutations'
import { listRooms } from './graphql/queries'
import awsExports from "./aws-exports";




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
            const rooms = roomData.data.listrooms.items
            setRooms(rooms)
        } catch (err) { console.log('error fetching actors') }
    }


    // const userName = JSON.parse(localStorage.getItem("signupData")).firstname;

    // console.log(userName)

    const handleChange = (event) => {
        console.log(event.target.value)
        const { name } = event.target;
        // console.log(e.target.value)
        udpateDetails({
            ...bookingDetails,
            [name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        console.log(bookingDetails.checkOut)
        let totaldays = datediff(parseDate(bookingDetails.checkIn), parseDate(bookingDetails.checkOut))
        udpateDetails({
            ...bookingDetails,
            totalDays: totaldays,
            showBooking: false,
            dbooking: true
        });

        event.preventDefault()
    }

    const setInput = (key, value, isNumber = false) => {
        value = (isNumber) ? parseInt(value) : value;
        udpateDetails({ ...bookingDetails, [key]: value })
    }

    const addActor = async () => {
        try {
            if (!bookingDetails.checkIn || !bookingDetails. checkOut) return
            const room = { ...bookingDetails }
            setRooms([...rooms, room])
            udpateDetails({   checkIn:"",   checkIn: "",
            checkOut: "",   totalDays: 0, })
            await API.graphql(graphqlOperation(createRoom, { input: room }))
        } catch (err) {
            console.log('error creating actor:', err)
        }
    }


    const parseDate = (str) => {
        var mdy = str.split('-');
        return new Date(mdy);
    }

    const datediff = (first, second) => {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }


    const today = new Date();
    const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

    const checkOutD = (str) => {
        let DateStr = str.split('-')
        DateStr[2] = Number(DateStr[2]) + 1
        let d = new Date(DateStr[0], DateStr[1], DateStr[2])
        let chekOutD = d.getFullYear() + '-' + ('0' + (d.getMonth())).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
        return chekOutD
    }


    const confirmBooking = () => {
        udpateDetails({
            ...bookingDetails,
            dbooking: false,
            showPayment: true,
            // totalprice: document.getElementById("totalPrice").innerHTML
        });
    }

    const confirmPayment = () => {
        udpateDetails({
            ...bookingDetails,
            dbooking: false,
            showPayment: false,
            bookingMsg: true
        });
    }

    return (
        <div>
            <section className={bookingDetails.showBooking ? "d-block" : "d-none"}>
                <form onSubmit={handleSubmit}>
                    <div>

                    <div className="input-group input-group-lg mt-5">
                            <div className="input-group-prepend">
                                <p style={{background:"none", borderStyle:"none",fontWeight:"bold"}} className="input-group-text" id="inputGroup-sizing-lg">full name</p>
                            </div>
                            <input style={{borderRadius:"0px"}}  type="text"  name="name" onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                        </div>

                        <div className="input-group input-group-lg mt-5">
                            <div className="input-group-prepend">
                                <p style={{background:"none", borderStyle:"none",fontWeight:"bold"}} className="input-group-text" id="inputGroup-sizing-lg">Check In</p>
                            </div>
                            <input style={{borderRadius:"0px"}}  type="date" min={date} name="checkIn" onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                        </div>
                        <div className="input-group input-group-lg mt-3">
                            <div className="input-group-prepend">
                                <p style={{background:"none", borderStyle:"none",fontWeight:"bold"}}  className="input-group-text" id="inputGroup-sizing-lg">Check Out</p>
                            </div>
                            <input style={{borderRadius:"0px"}} type="date" min={checkOutD(bookingDetails.checkIn)} name="checkOut" onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                        </div>

                   

                        <button style={{borderRadius:"0px", borderStyle:"none",marginLeft:"7rem", background:"black"}} 
                        type="submit" className="btn btn-lg btn-block btn-danger mt-4">Book Now</button>

                    </div>
                </form>
             </section>
            <section className={bookingDetails.dbooking ? "d-block" : "d-none"}>

                <div className="table table-borderless">
              
<h4 style={{marginBottom:"20px", fontWeight:"bold", textAlign:"center"}}> Booking Details</h4>
<form onSubmit={confirmBooking }>   
                <label  style={{marginBottom:"20px"}}> Full name :</label>
                 <input    onChange={event => setInput('name', event.target.value)} className="dateinput" type="text" value= {bookingDetails.name} readOnly="true" /><br/>
                            <label  style={{marginBottom:"20px"}}> Check In :</label> 
                    <input    onChange={event => setInput('checkIn', event.target.value)} className="dateinput" type="text" value={bookingDetails.checkIn} readOnly="true" /> <br/>
                            <label  style={{marginBottom:"20px"}}>Check Out : </label >
                             <input    onChange={event => setInput('checkOut', event.target.value)}  className="dateinput" type="text" value={bookingDetails.checkOut} readOnly="true" /> <br/>
                      <label  style={{marginBottom:"20px"}}>Total Days :</label>
                       <input   onChange={event => setInput('totalDays', event.target.value)}  className="dateinput" type="text" value= {bookingDetails.totalDays} readOnly="true" /><br/>
                        <label style={{marginBottom:"20px"}} id="totalPrice">Price : R</label>
                        <input  className="dateinput" type="text" value= {bookingDetails.totalDays*200} readOnly="true" />
                              
                            
                            </form>


                </div>
<div onClick={ confirmBooking } >
                <button className="btn btn-info btn-block rounded" onClick={ addActor}>Confirm Booking</button>
</div>

            </section>

            <section className={bookingDetails.showPayment ? "d-block" : "d-none"}>
                <div className="card text-dark" style={{ width: "24rem" }} >
                    <div className="card-header">
                        <div className="row my-0">
                            <h5 className="mt-1 font-weight-bold" >Payment Details</h5>
                            <div className="display-td" >
                                <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="card-body">

                        <label htmlFor="cardNumber">Card Number</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" id="cardNumber" placeholder="Valid card number"  aria-describedby="basic-addon2" required />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-credit-card"></i></span>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="expireDate">Expire Date </label>
                                <input type="text" id="expireDate" className="form-control" value="08/2025" placeholder="MM/YY" required />
                            </div>
                            <div className="col">
                                <label htmlFor="cardCVV">CVV</label>
                                <input type="password" value="445" id="cardCVV" className="form-control" placeholder="CVV" required />
                            </div>
                        </div>

                        <label htmlFor="AmountPay" className="mt-3">Amount to Pay</label>
                        <div className="input-group mb-2">
                            <div className="col mb-3">
                                <input type="text" value={bookingDetails.totalprice} className="form-control" placeholder="Ammout to Pay" readOnly />
                            </div>
                        </div>


                        <button href="#" className="btn btn-primary mt-3 btn-block" onClick={confirmPayment}>Confirm Payemnt</button>
                    </div>
                </div>

            </section>

            <section className={bookingDetails.bookingMsg ? "d-block" : "d-none"}>
                {/* <img src="https://i.ibb.co/sQrBnc9/b60fb214-e35f-4474-957c-6e63120e66f5-200x200.png" alt="" /> */}
                <div className="alert alert-success" role="alert">
          
                    <hr />
                    <p className="mb-0">Please note that you can make changes or cancellations of your booking. This request should be solely communicated in writing an Email to buchung@hotel-oxot.de . </p>
                    <Link to="/home"><p className="alert-link">Go to Home</p></Link>
                </div>
            </section >
        </div >
    )
}
