import React, { useContext } from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Deals from '../components/deals/deals';
import AuthContext from '../utils/authContext'

function Home() {
  const auth = useContext(AuthContext)
  return (
    <div>
     < Header/>
   < Deals/>
   <Footer/>  
   
    </div>
   
  );
}

export default Home;
