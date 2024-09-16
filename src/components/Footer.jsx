import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div className=''>
            <MDBFooter className='text-center text-white bg-black ' >
                <MDBContainer className='p-2'></MDBContainer>

                <div className='text-center p-3 bg-black' >
                    © 2024 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        Guardians-Gate.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer