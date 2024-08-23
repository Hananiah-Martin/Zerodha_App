import React from 'react'
function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>   
                <div className='col-lg-4 col-sm-12'>
                    <h2 className='mt-5'>Unbeatable Pricing</h2>
                    <p className='mt-5'>We pioneered the concept of discount booking and price transarency in India.Flat fees and no hidden charges.</p>
                    <a href=''>See Pricing  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'>

                </div>
                <div className='col-lg-6 col-sm-12 px-3'>
                    <div className='row'>
                        <div className='col mt-5 border'>
                            <h2 className='py-3'>$0</h2>
                            <p className='mt-5'>Free Equity delivery and direct mutual funds.</p>
                        </div>
                        <div className='col mt-5 border'>
                            <h2 className='py-3'>$20</h2>
                            <p className='mt-5'>Intrady and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;