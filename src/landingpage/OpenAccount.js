import React from 'react'
import Button from 'react-bootstrap/Button';
function OpenAccount() {
    return (  
        <div className="container p-5 mb-5">
        <div className="row text-center">
          <h1 className="mt-5">Open a Zerodha Account</h1>
          <p>
            Modern platforms and apps,$0 investments and flat $20 intrady and F&O trades.
          </p>
          <div>
            <Button variant="primary" className='text-center lg'  style={{ width: '120px' }}>Signup Now</Button>
          </div>
        </div>
    </div>
    );
}

export default OpenAccount;