import { FiArrowLeft } from "react-icons/fi"
import { GrUserFemale } from 'react-icons/gr';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../Styles/Components/sidebar.css'


export default function Side() {
  const { goBack } = useHistory()


  return (
    <aside className="app-sidebar">
      <main>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={26} color="#110707" />
        </button>
        <Link to="/bio" className="enter-app-bio">
          <GrUserFemale size={26} color="#110707" />
        </Link>
      </main>
    </aside>
  )

}