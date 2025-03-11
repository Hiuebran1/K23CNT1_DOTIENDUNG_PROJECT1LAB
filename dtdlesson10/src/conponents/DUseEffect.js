import React, { useEffect, useState } from 'react'

export default function DUseEffect() {
    const [DCount, setDCount] = useState(0);
    useEffect(() => {
        console.log('Day la useEffect mot tham so');

    });
    const DArr = [10, 12, 20, 22];
    const [DArray, setDArray] = useState(DArr);
    useEffect(() => {
        console.log('Day la useEffect 2 tham so,tham so thu 2 la mang doi so phu thuoc');



    }, [DArray]);
    
    const DHandleAddList = () => {
        setDArray([
            ...DArray,
            parseInt(Math.random() * 100),
        ])

    }
    return (
        <div className='alert alert-info'>
            <h2>Demo useEffect</h2>
            <h3>Count: {DCount}</h3>
            <button onClick={() => setDCount(DCount + 1)} >Click here</button>

            <div>
                <h3>
                    Array:{DArray.toString()}
                </h3>
                <button onClick={DHandleAddList} >Them</button>
            </div>
        </div>
    )
}
