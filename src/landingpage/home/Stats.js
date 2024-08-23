import React from 'react'
function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <h1>Trust with confidence</h1>
                    <h3 className='mt-5'>Customer First Always</h3>
                    <p>That's why 1.3+crore customers trust Zerodha with 3.5 lakh crores worth of eqity investments</p>
                    <h3 className='mt-5'>No spam or gimmicks</h3>
                    <p>No gimmicks,spam "gamification" or annoying push notifications.High quality of apps that you use at your pace,the way you like.</p>
                    <h3 className='mt-5'>The Zerodha Universe</h3>
                    <p>Not just and app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored sevices specific to tour needs.</p>
                    <h3 className='mt-5'>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch,we don't just facilitate transactions,but actively help you do better with your money</p>
                </div>
                <div className='col-lg-6 col-sm-12' >
                    <img src="media/ecosystem.png" className='img-fluid'></img>
                    <div className='lg-mx-5 sm-px-5' >
                        <a href="" className='mx-5'>Explore our products</a>
                        <a href="">Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;