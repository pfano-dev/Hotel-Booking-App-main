import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Contact = () => {
    document.title = "About";
    return (
        <div>
            <h2 style={{textAlign:"center"}}> contact us</h2>


            <div style={{display:"flex", justifyContent:'space-evenly'}}>

<div className="divs">
<h4><LocationOnIcon />Address</h4>
Bronkhorstspruit Rd,<br/> 
Willow Park Manor,<br/>
 Pretoria,  <br/>
 0054

</div>
<div className="divs">
<h4>Drew hotel</h4>
<p><FacebookOutlinedIcon/>facebook</p>
<p><TwitterIcon/>Twitter</p>
<p><InstagramIcon/>instagram</p>

</div>
<div className="divs">

<h4>contact</h4>

<p><CallIcon/>0796495495</p>
<p><MailOutlineIcon/>Drew@hotel.com</p>
<p><ChatBubbleOutlineIcon/>0646184512</p>


</div>

</div>

            <GoogleMap />

          


        </div>
    );
}

export default Contact;