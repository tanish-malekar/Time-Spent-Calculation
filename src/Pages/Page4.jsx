import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';

function Page4({sendTime}) {
    useEffect(() => {
        return () => {
            sendTime();
        }
    }, [sendTime]);

    return (
        <div>
            Page 4<Link to={'page1'}>Page1</Link>
        </div>
    )
}

export default Page4
