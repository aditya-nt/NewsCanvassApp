import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./styles.css"
import Footer from '../../Footer';
import Navigation from '../../Navigation';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ContactUs() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <React.Fragment>
    <Navigation/>

    <div className="container px-5">
    <div className="container mt-4 " style={{display : 'flex', justifyContent: 'center'}}>

    <Card style ={{   width: '100vh'}}>
        
    <div className="contact-container ">
        <div className="left-col col-md-5 col-xs-0">
          <img className="logo" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png" />
        </div>
        
        <div className="col-md-5 p-3" style={{display : 'flex' , alignItems: 'center' , height : 'fit-content'  , paddingLeft: '100px' } }>
        {/* <h1>Contact us</h1> */}
           <form id="contact-form" method="post">
               <br/>
               <br/>
               <h2>Send Us A Message</h2>
               <br/>
             <label htmlFor="name">Full name</label>
             <input type="text" id="name" name="name" placeholder="Your Full Name" required />
             <label htmlFor="email">Email Address</label>
             <input type="email" id="email" name="email" placeholder="Your Email Address" required />
             <label htmlFor="message">Message</label>
             <textarea rows={6} placeholder="Your Message" id="message" name="message" required defaultValue={""} />
             <button className="btn-primary-color" type="submit" id="submit" name="submit" style={{ backgroundColor : '##05a296', marginBottom:'10px'}}>Send</button>{/*</a>*/}
           </form>
         </div>
          
      </div>

        
      
    </Card>

    </div>
    </div>

    <Footer />
        </React.Fragment>
  );
}


// import React from 'react';
// import "./styles.css"

// function ContactUs(props) {
//     return (
//         <div>
           
//       <div className="contact-container">
//         <div className="left-col">
//           <img className="logo" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png" />
//         </div>
//         <div className="right-col">
//           <div className="theme-switch-wrapper">
//             <label className="theme-switch" htmlFor="checkbox">
//               <input type="checkbox" id="checkbox" />
//             </label>
//             <div className="description">Dark Mode</div>
//           </div>
//           <h1>Contact us</h1>
//           <p>Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>
//           <form id="contact-form" method="post">
//             <label htmlFor="name">Full name</label>
//             <input type="text" id="name" name="name" placeholder="Your Full Name" required />
//             <label htmlFor="email">Email Address</label>
//             <input type="email" id="email" name="email" placeholder="Your Email Address" required />
//             <label htmlFor="message">Message</label>
//             <textarea rows={6} placeholder="Your Message" id="message" name="message" required defaultValue={""} />
//             {/*<a href="javascript:void(0)">*/}<button type="submit" id="submit" name="submit">Send</button>{/*</a>*/}
//           </form>
//           <div id="error" />
//           <div id="success-msg" />
//         </div>
//       </div>
//         </div>
//     );
// }

// export default ContactUs;





// <h1>Contact us</h1>
//           {/* <p>Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p> */}
//           <form id="contact-form" method="post">
//             <label htmlFor="name">Full name</label>
//             <input type="text" id="name" name="name" placeholder="Your Full Name" required />
//             <label htmlFor="email">Email Address</label>
//             <input type="email" id="email" name="email" placeholder="Your Email Address" required />
//             <label htmlFor="message">Message</label>
//             <textarea rows={6} placeholder="Your Message" id="message" name="message" required defaultValue={""} />
//             <button className="btn-primary" type="submit" id="submit" name="submit">Send</button>{/*</a>*/}
//           </form>
//         </div>