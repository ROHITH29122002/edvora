import React,{useState ,  useEffect} from 'react'
import styles from '../styles/ride.module.css'

function Ride({ridedata}) {
  return (
    <div className={styles.ride_container}>
        <img className={styles.map_img} src={ridedata.map_url}/>
        <div className={styles.details_container}>
            <h3 className={styles.details}>Ride id : {ridedata.id}</h3>
            <h3 className={styles.details}>Origin-Station : {ridedata.origin_station_code}</h3>
            <h3 className={styles.details}>Station Path : [{ridedata.station_path.toString()}]</h3>
            <h3 className={styles.details}>Date : {ridedata.date}</h3>
            <h3 className={styles.details}>Distance : {ridedata.distance}</h3>
        </div>
        <div className={styles.location_details}>
            <h3 className={styles.details}>{ridedata.city}</h3>
            <h3 className={styles.details}>{ridedata.state}</h3>
        </div>
    </div>
  )
}

export default Ride