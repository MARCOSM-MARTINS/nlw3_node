import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'
import mapMakerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

import 'leaflet/dist/leaflet.css'

function OrphanageMaps() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Sobral</strong>
                    <span>Ceará</span>
                </footer>
            </aside>
          
            <Map 
                center={[-3.6791855,-40.3599327]}
                zoom={15}    
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    )
}

export default OrphanageMaps