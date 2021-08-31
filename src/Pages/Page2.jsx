import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';

function Page2({sendTime}) {
    useEffect(() => {
        return () => {
            sendTime();
        }
    }, [sendTime]);

    return (
        <div>
            Page 2<Link to={'page3'}>Page3</Link>
        </div>
    )
}

export default Page2
