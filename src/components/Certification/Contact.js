
import background   from '../../assets/images/backgrounds/cta-four-bg.png'
import { Link } from 'react-router-dom'


function Contact(){

    return(
        <section class="cta-four">
        <div class="container">
            <div class="cta-four__inner">
                <div class="cta-four__bg float-bob-x"  style={{ backgroundImage: `url(${background})` }}>
                </div>
                <h3 class="cta-four__title">Make an appointment at <br/> Prettau Dental Lab </h3>
                <div class="cta-four__btn-box">
                    <Link to="/contact" class="cta-four__btn thm-btn">Let's Together Quotes</Link>
                </div>
            </div>
        </div>
    </section>
    )



}
export default Contact