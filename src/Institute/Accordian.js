import React, { useState } from 'react'
import './Accordian.css'

const Accordian = () => {
    const [show, setShow] = useState(false)
    const handleOpen = () => {
        setShow(!show)
    }
    return (
        <div className='app'>
            <h2>Accordian</h2>
            <div className='accordian'>
                <div className='acc-head' onClick={handleOpen}>
                    Accordian head
                    <div className='symbol'>
                        {show ? '-' : '+'}
                    </div>
                </div>
                {(show &&
                    <div className='acc-body'>
                        fghfhgjhkhkhvtrdrdyfjghkh
                        gtrgdfjgujjgjgj
                        jhfftfyjgjgjuj
                        hfhfhfjfjfjfjfj
                    </div>
                )}
            </div>
            <div className='accordian'>
                <div className='acc-head' onClick={handleOpen}>
                    Accordian head
                    <div className='symbol'>
                        {show ? '-' : '+'}
                    </div>
                </div>
                {(show &&
                    <div className='acc-body'>
                        fghfhgjhkhkhvtrdrdyfjghkh
                        gtrgdfjgujjgjgj
                        jhfftfyjgjgjuj
                        hfhfhfjfjfjfjfj
                    </div>
                )}
            </div>
        </div>
    )
}

export default Accordian;