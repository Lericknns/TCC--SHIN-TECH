import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './index.scss'



export default function Carrossel(){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };



      
    return(
        <section className='paga-carrossel'>
            <Carousel
             infinite={true}
             responsive={responsive}
             autoPlay={true}
             autoPlaySpeed={3000}
             transitionDuration={500}
            >

                <div> 
                  <img src='/assets/images/spider man game.png'/>
                   </div>
                <div>
                  <img src='/assets/images/spider man game.png'/>
                 </div>
                <div>
                  <img src='/assets/images/spider man game.png'/>
                 </div>


            </Carousel>


        </section>
    )
}