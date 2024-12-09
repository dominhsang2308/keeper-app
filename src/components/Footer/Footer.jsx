import './footer.css'

const currentYear = new Date().getFullYear();

function Footer(){
    return(
        <footer className='footer'>
            <p className='footer-para'>Copyright ⓒ {currentYear}</p>
        </footer>
    )
}

export default Footer