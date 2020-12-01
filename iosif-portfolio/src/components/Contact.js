import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(null);


   const handleChange = (e) => {
      e.preventDefault();
      // this.setState({ [e.target.contactName]: e.target.value })
      if (e.target.id === "name") {
         setName(e.target.value);
      }
      else if (e.target.id === "email") {
         setEmail(e.target.value);
      }
      else if (e.target.id === "subject") {
         setSubject(e.target.value)
      } else {
         setMessage(e.target.value);
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      let data = {
         name,
         email,
         subject,
         message,
      }
      console.log("Data: ", data);

      axios.post("/api/send", data)
         .then(response => {
            console.log(response);
            setLoading(response.data);
            resetForm();
         })
         .catch(() => {
            setLoading({
               success: false,
               message: 'Something went wrong. Try again later'
            });
         })
   };

   const resetForm = () => {

   }

   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

               <p className="lead">For more information about me, please fill out the form and I'll reach to you as soon as possible. Thank you!</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={handleSubmit}>
                  <fieldset>

                     <div>
                        <label htmlFor="name">Name <span className="required">*</span></label>
                        <input type="text" size="35" id="name" name="name" value={name}
                           onChange={handleChange} />
                     </div>

                     <div>
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" size="35" id="email" name="email" value={email}
                           onChange={handleChange} />
                     </div>

                     <div>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" size="35" id="subject" name="subject" value={subject}
                           onChange={handleChange} />
                     </div>

                     <div>
                        <label htmlFor="sessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="sessage" name="sessage" value={message}
                           onChange={handleChange}></textarea>
                     </div>

                     <div>
                        <button type="submit" className="submit" onSubmit={() => handleSubmit()}>Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>
               <div style={{ color: "red" }}>
                  {loading && (
                     <p className={`${loading.success ? 'success' : 'error'}`}>
                        {loading.message}
                     </p>
                  )}
                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Address and Phone</h4>
                  <p className="address">
                     Iosif B. Dobos<br />
						   Cedarwood Rise <br />
						   Glasnevin, Dublin 11<br />
                     <span>+353894199005</span>
                  </p>
               </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                           This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                           Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                           <a href="#loreispum">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#day">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis et quasi
                           <a href="#loreispum">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#day">3 Days Ago</a></b>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
      </section>
   );
};

export default Contact;