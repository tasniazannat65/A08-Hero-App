import React from 'react';
import Banner from '../Components/Banner';
import AppStatus from '../Components/AppStatus';
import Container from '../Container/Container';

const Home = () => {
    return (
        <div>
            <Container>
             <Banner></Banner>
            </Container>
            
            <AppStatus></AppStatus>
        </div>
    );
};

export default Home;