import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            Home
            <Link to={'page1'}>Page1</Link>
            <Link to={'page2'}>Page2</Link>
            <Link to={'page3'}>Page3</Link>
            <Link to={'page4'}>Page4</Link>
        </div>
    )
}

export default Home
