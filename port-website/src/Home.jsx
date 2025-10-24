import React from "react";
import bgImage from "./assets/background1.png";
import cartoon from './assets/cartoon.png';

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-end justify-end px-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img src={cartoon} alt="Cartoon" className="w-170 h-170 rounded-full" />
    </div>
  );
}

export default Home;
