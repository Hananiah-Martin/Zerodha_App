import React from 'react'
function Education() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src='media/education.svg' className='img-fluid'></img>
                </div>
                <div className='col-lg-6 col-sm-12 mt-5'>
                    <h2 className='mt-3'>Free and Open Market Education</h2>
                    <p className='mt-5'>Varsity,the largest online stock market education book in the world covering everything from the basics to avanced trading.</p>
                    <a href=''>Varsity<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-3'>Trading Q&A, the most active trading and investment comminity in India for all your market related queries.</p>
                    <a href=''>Trading Q&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education