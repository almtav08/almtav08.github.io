import Typed from 'react-typed'

function Landing() {
    return (
        <>
            <h1>Alex Martínez-Martínez</h1>
            <h2><Typed strings={['Software Engineer', 'Ph.D. in Artificial Intelligence']} typeSpeed={80} loop /></h2>
        </>
    )
}

export default Landing