import React from 'react';
import Logo from '../assets/logo.png';
import favicon from '../assets/favicon.ico';


const search_bar = () =>{
    return(
        <>
             <div className="row d-flex justify-content-between pt-3">
                    <div className="col-sm-2">
                      <img src={Logo} alt="sample image" className="img-fluid p-3 ms-2" />
                    </div>
            
                    <div className="col-md-9 mt-3">
                      <div className="input-group ms-3 p-3">
                        <button className="btn w-0 h-0 m-0 p-0" type="button">
                          <img src={favicon} alt="sample image" className="img-fluid w-50 rounded-circle" />
                        </button>
                        <input type="text"
                          className="form-control ms-0 ps-0"
                          placeholder="Search with Google or enter address"
                        />
                      </div>
                    </div>
                  </div>
        </>
    )
}

export default search_bar;