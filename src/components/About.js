import React from 'react';

const About = () => {
    document.title = "About";
    return (
        <div>

            <div className="about">
            </div>
         <h2 style={{textAlign:"center" , marginTop:"10px"}}>About us</h2> 
<div style={{display:"flex", justifyContent:'space-evenly'}}>

<div className="divs">
<h4>MISSION</h4>
Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, 
    corporis! Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!

</div>
<div className="divs">
<h4>VISION</h4>
Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, 
    corporis! Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!
 
</div>
<div className="divs">

<h4>SERVIESES </h4>
Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, 
    corporis! Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!




</div>

</div>


        </div>
    );
}

export default About;