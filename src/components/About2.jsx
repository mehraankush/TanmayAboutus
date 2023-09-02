import "./Styles.css";

import { button11,button10,button12,button13,button14, logo3 ,Shape,line1,line2} from "../assets"


const About2 = () => {
  return (
    <div className="main">
        <div className="about_container">

        <div className="Tag-section">  
            <div className="aboutus_tag">
              <h2>About us</h2>
              <p>
                At Mena Funding we understand that trading can be challenging and
                risky endeavor. That is why we have developed a proprietary funding
                programs that allows traders to trade with our capital. While keeping
                a portion of the profits they generate. These programs are not only
                provides traders with the capital they need to trade but also helps
                them manage their risk effectively.
              </p>
            </div>
    

            <div className="aboutus_small-tag">
              <h2>Our Goals</h2>
              <p>
                  To provide traders with a unique and innovative solution that allows
                  them to trade with our capital without risking their own money. We
                  believe that our programs are at the top in the industry, and we are
                  committed to helping traders achieve their trading goals.
              </p>
            </div>
   
            <div className="aboutus_small-tag marginclass">
              <h2>Our Programs</h2>
              <p>
                  Are designed to reward traders based on their skills and performance,
                  and we offer a range of account sizes and funding options to meet the
                  needs of all traders. Our programs are also suitable for both
                  experienced and new traders.
              </p>
            </div>

          </div>
      
       

        <div className="Tag-section">
            <div>
              <img className="logo"  alt="logo" src={logo3} />
              <img  className="Bigrod" alt="" src={button14} />
              <img  className="midrod1" alt="" src={button10} />
              <img  className="midrod2" alt="" src={button11} />
              <img  className="smallrod1" alt="" src={button13} />
              <img  className="smallrod2" alt="" src={button12} />
           </div>

          <div className="aboutus_small-tag">
                <h2>Our Believes</h2>
                <p className="tagline">“Putting our clients first”</p>
                <p>
                  That's why we offer excellent customer service and competitive funding
                  rates to help our traders improve their skills and knowledge, we are
                  dedicated to providing a safe and secure trading environment for our
                  clients. We use advanced security measures to protect our client's data
                  and funds, and we are committed to maintaining the highest standards of
                  integrity and transparency.
                </p>
            </div> 
        </div>

      </div>


      {/* Secon section  */}

      <div className="contact_section">
        <div className="location-info">
            <div className="info">
                We are proud to be based and licensed in two of the world's leading
                financial centers, UAE and Hong Kong. Our locations enable us to provide
                our clients with access to some of the best trading conditions in the
                world, including low trading costs, fast execution speeds and advanced
                trading technology.
            </div>
            
        </div>
          <div className="container-image">
               <img className="shape-image" src={Shape} alt="Shades" />
          </div>
        <div className="country_card">
            <div className="details">
                <p><b>Hong Kong</b></p>
                <p>
                  1018, 10/F, New Mandarin 
                  Plaza Tower B 14
                  Science Museum Street
                  Tsim Sha Tsui East
               </p>
            </div>

            <div className="details details2">
                <p ><b>United Arab Emirates</b></p>
                <p>
                  B2607, Latifa Tower
                  Trade Centre,
                  Sheikh Zayed Road Dubai
                </p>
            </div>
        </div>
        

        <div className="submit_section">
            <div className="contact_tagline">
              <p className="title">Send us a message</p> 
                <p>
                    Whether you have a question, feedback, or just want to say hello, feel
                    free to send us a message using the form below.
                </p>
            </div>
   
          <div className="contact_box">
            <div className="topline">
              <img  src={line2} />
              <img  src={line1} />
            </div>
             <div className="back2"></div>

              <div className="input_fields">
                    <div className="contact_box-input-fields">
                        <div className="contact_box-input">
                            <div>
                                <div >
                                    <p>First name *</p>
                                    <input className="input-field" type="text" />
                                </div>
                                <div>
                                    <p>Email*</p>
                                    <input className="input-field" type="text" />
                                </div>
                            </div>

                            <div>
                                <p>Message*</p>
                                <textarea className="input_text-field" name="message"  cols="30" rows="10"></textarea>
                            </div>
                            <button className="small">Send</button> 
                        </div>
                       <div className="btnbg">
                          <button className="large">Send</button> 
                        </div> 
                      </div>
              </div>
            <div className="back3"></div>
            <div className="bottomline">
              <img  src={line2} />
              <img  src={line1} />
            </div>
          </div>
          

        </div>            

      </div>

    </div>
  )
}

export default About2