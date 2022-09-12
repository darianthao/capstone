import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark' class="position-sticky p-3 mb-2 bg-dark text-white">
            <MDBContainer className='p-4'>

                <section className=''>
                    <form action=''>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-auto'>
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter and receive weekly deals!</strong>
                                </p>
                            </div>

                            <div className='col-auto'>
                                <MDBBtn outline color='light' type='submit' className='mb-4'>
                                    Subscribe
                                </MDBBtn>
                            </div>
                        </div>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        At Best Buy, our purpose is to enrich lives through technology. We do that by leveraging our unique combination of tech expertise and human touch to meet our customers’ everyday needs, whether they come to us online, visit our stores or invite us into their homes. We have more than 1,000 stores and about 100,000 employees in the United States and Canada.
                    </p>
                </section>

            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:{' '}Darian{' '}Thao
            </div>
        </MDBFooter>
    );
}