import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function AnaSayfaCarousel(){
    
    const images = ["/anasayfa_img_1.png",
        "ana2.jpg",
        "ana3.jpg",
        "ana4.jpg",
        "ana5.jpg",
        "ana6.jpg",
    ]
    
    return(
        <div style={{maxWidth: 500, alignSelf: "center"}}>

       
        <Carousel
            
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
        >
            {images.map((value : string, index: number) => 
                <img src={value}  style={{objectFit: "cover", height: 500, width: "100vw", borderRadius: 12, padding: 0}}/>
            )}  
        </Carousel>
        </div>
    )
}