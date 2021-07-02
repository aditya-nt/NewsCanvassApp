// import Header from "./header";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";



const content = [
    {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
            "PECULIARY DESIGNED AND WELL CURATED NOTES THAT YOU COULD RELY ON.",
        button: "Read More",
        image: "https://firebasestorage.googleapis.com/v0/b/newscanvassapp.appspot.com/o/SRCImages%2FSlider.png?alt=media&token=2585e906-29bc-410f-a8ce-d8bf6640a1fe",
        user: "",
        userProfile: "https://firebasestorage.googleapis.com/v0/b/newscanvassapp.appspot.com/o/SRCImages%2Fnotepad.png?alt=media&token=1995e1f4-b13b-4905-8b35-9720ec7943d5"
    },
    {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
            "CUSTOMISED STUDY PLAN ALONG WITH CONTINUOUS COUNSELLING IS THE KEY.",
        button: "Discover",
        image: "https://firebasestorage.googleapis.com/v0/b/newscanvassapp.appspot.com/o/SRCImages%2FSlider.png?alt=media&token=2585e906-29bc-410f-a8ce-d8bf6640a1fe",
        user: "Erich Behrens",
        userProfile: "https://firebasestorage.googleapis.com/v0/b/newscanvassapp.appspot.com/o/SRCImages%2Fhourglass.png?alt=media&token=2f35de04-6f91-46f4-be15-81ed48dca5e0"
    },
    {
        title: "Phasellus volutpat metus",
        description: "ONLY DEDICATED GK PROVIDERS FOR CLAT EXAMS"

        ,
        button: "Buy now",
        image: "https://firebasestorage.googleapis.com/v0/b/newscanvassapp.appspot.com/o/SRCImages%2FSlider.png?alt=media&token=2585e906-29bc-410f-a8ce-d8bf6640a1fe",
        user: "Bruno Vizovskyy",
        userProfile: "https://firebasestorage.googleapis.com/v0/b/newscanvassapp.appspot.com/o/SRCImages%2Fgraduation.png?alt=media&token=4672f394-0dda-4d50-aaff-898bbbfa106b"
    }
];

const AnimatedSlider = () => (
    <div>
        {/* <Header /> */}
        {/* <div className="wrapper">
      <h1>react-animated-slider</h1>
      <p>
        <a
          href="https://www.npmjs.com/package/react-animated-slider"
          target="_blank"
        >
          <img
            src="https://img.shields.io/npm/v/react-animated-slider.svg"
            alt="version"
          />
        </a>
        <a
          href="https://www.npmjs.com/package/react-animated-slider"
          target="_blank"
        >
          <img
            src="https://img.shields.io/npm/dt/react-animated-slider.svg"
            alt="downloads"
          />
        </a>
        <a
          href="https://www.npmjs.com/package/react-animated-slider"
          target="_blank"
        >
          <img
            src="https://img.shields.io/npm/dw/react-animated-slider.svg"
            alt="downloads"
          />
        </a>
        <a
          href="https://github.com/erichbehrens/react-animated-slider"
          target="_blank"
        >
          <img src="https://img.shields.io/github/stars/erichbehrens/react-animated-slider.svg?style=social&amp;label=Stars" />
        </a>
        <a
          href="https://bundlephobia.com/result?p=react-animated-slider@latest"
          target="_blank"
        >
          <img
            src="https://badgen.net/bundlephobia/minzip/react-animated-slider@latest"
            alt="minified + gzipped size"
          />
        </a>
      </p>
    </div> */}
        <Slider className="slider-wrapper" autoplay={1000} >
            {content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `  url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">

                        <div className="row">
                            <div className="col"></div>

                            <div className="col-xs-12 col-md-5" style={{ maxHeight : '200px' ,marginBottom : '10px' }}>
                                
                                <p style={{ fontSize: 'calc( 0.9 * 2vw  + 2vmin )', fontWeight: 'bold', fontFamily: 'sans-serif'}}>{item.description}</p>

                            </div>
                            <div className="col"></div>
                            <div className="col-xs-12 col-md-6 my-div" style={{justifyContent : 'center'}} >
                             
                                <img className=""  src={item.userProfile} alt={item.user} style={{  maxHeight:'100%' , maxWidth: '100%' , objectFit: 'contain' }}/>

                               
                            </div>
                            <div className="col"></div>


                        </div>





                        {/* <button>{item.button}</button> */}
                    </div>
                    <section>
                        {/* <img src={item.userProfile} alt={item.user} /> */}
                        {/* <span>
              Posted by <strong>{item.user}</strong>
            </span> */}
                    </section>
                </div>
            ))}
        </Slider>
    </div>
);

export default AnimatedSlider;