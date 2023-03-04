// import { color } from '@mui/system';
// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h2 className='App'>Welcome Campers</h2>
//       <h4>Choose your favorite <span>Camping Sites</span></h4>
//     </div>
//   );
// }

// export default Home; 
import React from 'react';
//import './App.css';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome Campers</h1>
        <h4>Choose your favorite <span>Camping Sites</span></h4>
      </header>

        <div className="feature">
          <img src="https://cdn.big4.com.au/getmedia/f2b92ba3-169b-4816-b055-84f3272d2040/Hero_379.jpg"  />
        </div>

       
      <section className="call-to-action">
        <h3>Ready to start camping?</h3>
        <p>Book your site today!</p>
        <button>Book Now</button>
      </section>
    </div>
  );
}

export default Home;
