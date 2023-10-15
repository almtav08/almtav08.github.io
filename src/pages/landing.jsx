import Typed from 'react-typed'
import './landing.css'

function Landing() {
    return (
        <div className='landing-page'>
            <div className='info'>
                <h1 className='name'>Alex Martínez Martínez</h1>
                <h2 className='roles'><Typed strings={['Software Engineer', 'Ph.D. in Artificial Intelligence']} typeSpeed={80} loop /></h2>
            </div>
        </div>
    )
}

export default Landing