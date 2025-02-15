import React from 'react';
import favicon1 from '../assets/favicon1.ico';
import facebook from '../assets/facebook.ico';
import reddit from '../assets/reddit.ico';
import twitter from '../assets/twitter.ico';
import wikipedia from '../assets/wikipedia.ico';
import instagram from '../assets/instagram.ico';


const icons = () => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="row w-50 mt-3 row-cols-3">
                    <div className='col-md-2 d-flex flex-column justify-content-center align-items-center p-2 rounded-3 '>
                        <button className="btn" type="button">
                            <img src={favicon1} alt="simple image" className="img-fluid " />
                        </button>
                        <p className="text-white mt-2 ">Youtube</p>
                    </div>


                    <div className='col-md-2 d-flex flex-column justify-content-center align-items-center p-2 rounded-3'>
                        <button className="btn " type="button">
                            <img src={facebook} alt="simple image" className="img-fluid " />
                        </button>
                        <p className="text-white mt-2">Facebook</p>
                    </div>

                    <div className='col-md-2 d-flex flex-column justify-content-center align-items-center p-2 rounded-3'>
                        <button className="btn " type="button">
                            <img src={wikipedia} alt="simple image" className="img-fluid " />
                        </button>
                        <p className="text-white mt-2">Wikipedia</p>
                    </div>

                    <div className='col-md-2 d-flex flex-column justify-content-center align-items-center p-2 rounded-3'>
                        <button className="btn " type="button">
                            <img src={reddit} alt="simple image" className="img-fluid " />
                        </button>
                        <p className="text-white mt-2">Reddit</p>
                    </div>


                    <div className='col-md-2 d-flex flex-column justify-content-center align-items-center p-2 rounded-3'>
                        <button className="btn " type="button">
                            <img src={twitter} alt="simple image" className="img-fluid " />
                        </button>
                        <p className="text-white mt-2">Twitter</p>
                    </div>

                    <div className='col-md-2 d-flex flex-column justify-content-center align-items-center p-2 rounded-3'>
                        <button className="btn " type="button">
                            <img src={instagram} alt="simple image" className="img-fluid " />
                        </button>
                        <p className="text-white mt-2">Instagram</p>
                    </div>

                </div>
            </div>



        </>
    );
}

export default icons;