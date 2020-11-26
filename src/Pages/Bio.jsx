import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Styles/Pages/bio.css';

function Bio() {
  return (
    <div id="bio">
      <div className="content-wrapper">
        <main>
          <aside>
            <Link to="/" className="enter-home">
              <FiArrowLeft size={26} color="#110707" />
            </Link>
          </aside>
          <h1>Larisse Lima</h1>
          <a href="https://www.linkedin.com/in/larisselima/" className="enter-app-redes"
            target="blank">
            <AiFillLinkedin size={28} color=" #d00000" />
          </a>
          <a href="https://github.com/LarisseLima" className="enter-app-redes-g"
            target="blank">
            <AiFillGithub size={28} color=" #d00000" />
          </a>
          <a href="mailto:larisse.lima2@gmail.com" className="enter-app-redes-e"
            target="blank">
            <MdEmail size={28} color="#d00000" />
          </a>
          <p> Oi sou a Larisse, Apaixonada por tecnologia e unicórnios 🦄, Moro em Recife, amo criar telas bonitas e funcionais. Já fui voluntária em um projeto acadêmico, onde ensinava informática a comunidade carente.
           </p>
        </main>
      </div>
    </div>
  );
}

export default Bio;