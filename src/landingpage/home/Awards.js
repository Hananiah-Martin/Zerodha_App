import React from 'react'
function Awards() {
    return (  
       <div className='container-fluid  mt-5'>
        <div className='row'>
            <div className='col-lg-6 col-sm-8'>
                <img src="media/largestBroker.svg" className='img-fluid'></img>
            </div>
            <div className='col-lg-6 col-sm-8 p-5'>
                <h1>Largest Stock Broker in India</h1>
                <p className='mt-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                <div className='row mt-2'>
                    <div className='col-6'>
                        <ul>
                            <li className='p-2'>
                                Futures and Options
                            </li>
                            <li className='p-2'>
                                Commodity deivatives
                            </li>
                            <li className='p-2'>
                                Current derivatives
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li className='p-2'>
                                Stocks and IPOS
                            </li>
                            <li className='p-2'>
                                Direct Mutual Funds
                            </li>
                            <li className='p-2'>
                                Bonds and Govt.Securities
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="media/pressLogos.png" className='img-fluid'></img>
            </div>
        </div>
       </div>
    );
}

export default Awards;