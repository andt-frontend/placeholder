import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Link } from 'gatsby'
import SlideShow from '../components/SlideShow';

var settings = {
    images: [
        { url: require('../assets/images/bg01.jpg'), position: 'center' },
        { url: require('../assets/images/bg02.jpg'), position: 'center' },
        { url: require('../assets/images/bg03.jpg'), position: 'center' },
    ],
    // Delay.
    delay: 6000,
};

const Success = () => (
    <Layout>
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            <h1 style={{
                fontSize: '96px',
                color: 'lightgreen',
            }}>Thank you !</h1>
        </div>
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}>
            <Link to='/'>
                <i style={{
                    fontSize: "29px",
                    marginRight: "1vw"
                }}>&larr;</i>
                back to home page</Link>
        </div>
        <Footer />
        <SlideShow settings={settings} />
    </Layout>
);

export default Success;
