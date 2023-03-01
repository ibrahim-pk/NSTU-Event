import React from 'react';
import Caro from '../CarouselSection/Caro';
import DeptEvent from '../DeptEvent/DeptEvent';
import Search from '../SearchSection/Search';
import UpcommingEvebet from '../UpcomingEvent/UpcommingEvebet';

const Home = () => {
    return (
        <div>
       <Caro></Caro>
       <Search />
       <UpcommingEvebet></UpcommingEvebet>
       <DeptEvent></DeptEvent>
    </div>
    );
};

export default Home;