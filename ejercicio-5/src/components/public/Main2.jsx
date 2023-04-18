import React, { useState } from 'react'
import { Button } from './Button'

export const Main2 = () => {

    const [clicks, setClicks] = useState(0);
    const handleClick = () => {

        setClicks(clicks + 1)

        console.log(clicks)

    }

    return (
        <div>

            <Button handleClick={handleClick}/>
            <div className='contador'>Usted ha hecho {clicks} clicks</div>

        </div>
    )
}
