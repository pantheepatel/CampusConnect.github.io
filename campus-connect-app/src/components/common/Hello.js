import img1 from "../../assets/image1.webp";
import "./hello.css";
import React from "react";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.webp";
import img4 from"../../assets/image4.webp";
function Hello() {
    return (
        <div>
            <div className="card container-fluid">
                <img src={img1} alt="Background Image" />
                <div className="card-content">
                    <h2>Campus Connect</h2>
                    <pre>It doesn't matter whether you live on or off campus,<br></br>
                        or you're a full-time or part-time student — you can <br></br>
                        join or charter a Campus Lions club.  You can serve<br></br>
                        your school, your neighborhood and communities in<br></br>
                        nearly any countrywith the support of the largest <br></br>
                        service club organization in the world.</pre>
                </div>
            </div>
            <div className="con1 row">
                <div className="image2">
                    <img src={img4} alt="Image" />
                </div>
                <div className="text">
                    <h2>Club Benefits</h2>
                    <p>
                    Gain service hours. Serve locally and globally.
                    Build your resume. Receive in-person and online training.
Network. Connect with local leaders and international organizations.
Lead the change. Plan service events and advocate for humanitarian and environmental causes.
Save money. Get a special discount with the Student Member Program.
<br></br>
<br></br>
<br></br>
 Attention Leos — Continue your service as Lions members in Campus Lions clubs while pursuing
  your education. You can even invite other students to charter or join a specialty club. 
Check out the webpage to learn about the benefits of the Leo-Lion Program.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="text">
                    <h2>Specialty Clubs</h2>
                    <p>
                    Specialty clubs offer a great way to bring students 
                    together from one or multiple schools from one 
                    community to come togetherto serve. Some students 
                    form specialty clubs to provide service that aligns
                    with their shared academic field of study, like 
                    medical program students offering healthcare support
                    in their communities. Alumni of Campus Lions clubs 
                    can stay connected by forming life-stage Specialty 
                    clubs. Graduating members are able to easily transition
                    from the Student Membership Program to traditional 
                    Lions membership, continue their connection with their
                    school community, and network with other professionals 
                    while further developing their leadership skills. Learn 
                    more about specialty clubs by visiting the Specialty
                     Lions clubs webpage.
                    </p>
                </div>
                <div className="image1">
                    <img src={img2} alt="Image" />
                </div>
            </div>
            <div className="row">
                <div className="image">
                    <img src={img3} alt="Image" />
                </div>
                <div className="text">
                    <h2>Club Options</h2>
                    <p>
                    If a school does not approve your chartered club, 
                    consider chartering a Campus Lions club that operates
                    independently from the school. In this case, the 
                    Campus Lions club is not obliged to adhere to the 
                    school's approved registered student club policies. 
                    However, this may also limit or preclude receiving 
                    endorsement benefits of using the school's proper 
                    name for the club, approval to plan and hold service
                    activities on campus, apply for funding and participate
                    in school sponsored events.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Hello