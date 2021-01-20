import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Link } from 'gatsby'
import SlideShow from '../components/SlideShow';
import styled from 'styled-components'

var settings = {
    images: [
        { url: require('../assets/images/bg01.jpg'), position: 'center' },
        { url: require('../assets/images/bg02.jpg'), position: 'center' },
        { url: require('../assets/images/bg03.jpg'), position: 'center' },
    ],
    // Delay.
    delay: 6000,
};

const Styles = styled.div`
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .successTitle{
        font-size: 96px;
        color: lightgreen;
    }
    @media screen and (max-width: 600px){
        .successTitle{
            font-size: 56px;
        }
    }
`
const Success = () => (
    <Layout>
        <Styles>
            <div className='container'>
                <h1 className='successTitle'>Thank you !</h1>
            </div>
            <div
                className='container'>
                <Link to='/'>
                    <i style={{
                        fontSize: "29px",
                        marginRight: "1vw"
                    }}>&larr;</i>
                    back to home page</Link>
            </div>
        </Styles>
        <Footer />
        <SlideShow settings={settings} />
    </Layout>
);

export default Success;
