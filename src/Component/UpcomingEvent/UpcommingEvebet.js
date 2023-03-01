import React from 'react';

const UpcommingEvebet = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-10'>
            <h1 className='text-xl text-center text-blue-700 my-5 font-bold'>Upcomming Event</h1>
           <div className='md:flex justify-center gap-4'>
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    <p>Math dept farewell will be start on 28 february.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm">
        View
      </button>
    </div>
  </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    <p>CSTE 15 batch students will go to cox's bazar on 5 march.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm">
        View
      </button>
    </div>
  </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    <p>CSTE cricket tournament will start next week</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm">
        View
      </button>
    </div>
  </div>
            </div>
           </div>
        </div>
    );
};

export default UpcommingEvebet;