import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';

function Page3({sendTime}) {
    useEffect(() => {
        return () => {
            sendTime();
        }
    }, [sendTime]);

    return (
        <div>
            Page 3<Link to={'page4'}>Page4</Link>
        </div>
    )
}

export default Page3
