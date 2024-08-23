import React from 'react'
import Button from 'react-bootstrap/Button';
function Hero() {
    return (  
        <>
            <div className="container p-5 mb-5">
              <div className="row text-center">
                <img
                  src="media/homeHero.png"
                  alt="Hero Image"
                  className="mb-5"
                />
                <h1 className="mt-5">Invest in everything</h1>
                <p>
                  Online platform to invest in stocks, derivatives, mutual funds, and
                  more
                </p>
                <div>
                  <Button variant="primary" className='text-center lg'  style={{ width: '120px' }}>Signup Now</Button>
                </div>
              </div>
          </div>
        </>
    );
}

export default Hero;