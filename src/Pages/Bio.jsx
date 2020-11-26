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
            <AiFillLinkedin size={28} color="rgba(0, 0 , 0, 1.5)" />
          </a>
          <a href="https://github.com/LarisseLima" className="enter-app-redes-g"
            target="blank">
            <AiFillGithub size={28} color="rgba(0, 0 , 0, 1.5)" />
          </a>
          <a href="mailto:larisse.lima2@gmail.com" className="enter-app-redes-e"
            target="blank">
            <MdEmail size={28} color="rgba(0, 0 , 0, 1.5)" />
          </a>
          <p> Oi sou a Larisse, Apaixonada por tecnologia e unicórnios 🦄, Com apenas 27 anos. Moro em Recife, sou estudante de Front-end na reprograma. Trabalhei na área industrial, e com vendas. Já fui voluntária em um projeto acadêmico, onde ensinava informática a comunidade carente.
           </p>
        </main>
      </div>
    </div>
  );
}

export default Bio;