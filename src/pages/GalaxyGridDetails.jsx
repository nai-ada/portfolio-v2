import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


function GalaxyGridDetails() {
  return (
    <div className="">
    <Nav />
      <div className="">
        <Link to="" className="text-primary hover:opacity-80">
          ← Back to Works
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">
          Galaxy Grid 2.0
        </h1>
        
        {/* Add your project details content here */}
        
      </div>
    </div>
  );
}

export default GalaxyGridDetails;