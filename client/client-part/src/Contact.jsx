import React from "react";
import ContactInput from "./ContactInput";
// import Bootstrap from "./"


function Contact(){
    return (
            <div className="sections contact-box">
                <div className="rows contact-style">
                    
                    <div className="contact-col">
                    <div>Want to hire or say hello?</div>
                    <img class="" src="images/contact/Hands Typing.svg" alt="contact background" ></img>
                    </div>
                    <div className="contact-col">
                        <ContactInput/>
                    </div>
                </div>
            </div>







    )
}



export default Contact;