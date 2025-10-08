import React from 'react';
import Banner from '../Components/Banner';
import AppStatus from '../Components/AppStatus';
import Container from '../Container/Container';
import useApps from '../Hook/useApps';
import AppCardContainer from '../Components/AppCardContainer';

const Home = () => {
    const {apps} = useApps();
   const featuredApps = apps.slice(0,8);
    return (
        <div>
            <Container>
             <Banner></Banner>
            </Container>
            
            <AppStatus></AppStatus>
         <AppCardContainer featuredApps={featuredApps}></AppCardContainer>
         
        </div>
    );
};

export default Home;