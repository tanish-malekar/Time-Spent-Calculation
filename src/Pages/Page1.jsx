import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function Page1({sendTime}) {
    const [state, setState] = useState(0);

    useEffect(() => {
        return () => {
            sendTime();
        }
    }, [sendTime]);

    return (
        <div>
            Page 1
            <Link to={'page2'}>Page2</Link>
            {state}
            <button onClick={()=>{state===0?setState(1):setState(0)}}>Change State</button>
        </div>
    )
}

export default Page1
