
import React, { useState } from 'react';

import { motion } from 'framer-motion';

const Index = (data) => {
    //state for button go top
    const [goTop, setGoTop] = useState(false);
    //capturing vertical scroll
    window.onscroll = function () {
        var y = window.scrollY;
        if (y > 55) {
            setGoTop(true)
        } else {
            setGoTop(false)
        }
    };
    //function go top
    const top = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    //objecto to array for maping
    const toArray = Object.values(data);





    return (
        <div id='index' className='p-3 '>
            {/* button go top */}
            {goTop &&
             <motion.div
             animate={{ opacity: 1 }}
             transition={{ ease: "easeIn", duration: 0.3 }}
             style={{ opacity: "0" }} 
             className='goTop'>
                    <button
                        onClick={() => top()}
                        className='btn btn btn-outline-info '>Go top</button>
                </motion.div>
            }

              <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          style={{ opacity: "0" }}  
          className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-n4">
                <h2 className='col-lg-12 col-12 col-md-12 mb-4'>Task Two</h2>

                {
                    toArray[0]?.getSellerPublications.map((value, index) => {
                        return (
                            <div className="col mb-4 " key={index}  >
                                <div className="card h-100 shadow">
                                    <img src={value?.product.images} className="rounded-3 card-img-top alt mx-auto p-2" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title title mt-n4">{value?.product.itemName}</h5>

                                    </div>



                                    <div className='row mt-n4 card-text mb-3'>

                                        <span className='col-6 '>Precio:&nbsp;<span className='font-weight-bold'>{value.price}</span></span><span className='col-6'>Stock:&nbsp;<span 
                                        className='font-weight-bold'>{value.stock}</span></span>

                                    </div>


                                </div>
                            </div>

                        )
                    })
                }

        </motion.div>
        </div>
    )
}

export default Index
