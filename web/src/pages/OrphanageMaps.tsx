import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapMakerImg from '../images/map-marker.svg'
import '../styles/pages/orphanages-map.css'


import mapIcon from '../utils/mapIcons'

function OrphanageMaps() {
    return (
        <div id="page-map">
            <div id="aside">
                <header>
                    <img src={mapMakerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Sobral</strong>
                    <span>Ceará</span>
                </footer>
            </div>

            <Map
                center={[-3.6791855, -40.3599327]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />

                <Marker
                    icon={mapIcon}
                    position={[-3.6791855, -40.3599327]} >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup"> 
                        Lar das meninas
                        <Link to="/orphanages/1" >
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanageMaps