import mdR from '../../css/Register.module.css';
import mdM from '../../css/cssMovements.module.css';
import Mensajes from './Mensajes';
import Register from './Register';

export default function Home({ animations = false }) {

  return (
    <>
      <header className={mdR.hr}>
        <ul className={mdR.ulh}>
          <li>
            SYSCAD
          </li>
          <li>
            Universidad Tecnologica Nacional
          </li>
          <li>
            Facultad Regional Tucumán
          </li>
        </ul>
      </header>

      <Register />

      <Mensajes />

      <div className={mdR.adiv}>
        <div className={mdM.anim}>
          <div className={mdM.bkg} >
            <div />
          </div>
        </div>
      </div>
    </>
  )
}
