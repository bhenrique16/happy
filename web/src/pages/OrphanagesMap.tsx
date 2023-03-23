import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import { Map } from 'react-leaflet'


import mapMarkerImg from '../images/map-maker.svg'
import '../styles/pages/orphanages-map.css'
function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
        <header>
          <img src={mapMarkerImg} alt="Logo Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Sobradinho</strong>
          <span>Brasilia</span>
        </footer>
      </aside>
            
            <Map 
            center={[-15.6417041,-47.8131106]}
            zoom={15}
           
            />

            <Link to="" className="create-orphanage" >
                <FiPlus size={32} color="#FFF" /> 
            </Link>
        </div>
    )
}

export default OrphanagesMap