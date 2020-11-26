import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { GrUserFemale } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import '../Styles/Pages/home.css';

function Home() {
  return (
    <div id="home">
      <div className="content-wrapper">
        <main>
          <h1>Os melhores Filmes</h1>
          <p> Aclamados pela crítica e usuária 10/10 da Netflix, Larisse Lima</p>
        </main>

        <Link to="/movies" className="enter-app">
          <BiCameraMovie size={26} color="#110707" />
        </Link>
        <Link to="/bio" className="enter-app-bio">
          <GrUserFemale size={26} color="#110707" />
        </Link>

      </div>
    </div>
  );
}

export default Home;