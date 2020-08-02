import React,{ Component } from 'react';
import './css/Contact.css';

class Contact extends Component {
  
render() {
  return (
    <div class="container contact-form">
            <div class="contact-image">
                <img src='/images/gary.jpg' alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Leave Gary a message</h3>
               <div class="row">
                    <div data-aos="fade-left" class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                    </div>
                    <div data-aos="flip-up" class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" rows="6" columns="30"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                </div>
            </form>
</div>
  );
}
}

export default Contact;