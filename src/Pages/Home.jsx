import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Styles/Pages/home.css';

function Home() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <main>
                    <h1>Os melhores Filmes</h1>
                    <p> Aclamados pela crítica e usuária 10/10 da Netflix, Larisse Lima</p>
                </main>

                <Link to="/filmes" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0 , 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Home;