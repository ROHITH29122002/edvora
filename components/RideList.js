import React,{useState , useEffect } from 'react'
import Image from 'next/image'
import FilterList from './FilterList'
import filter from '../public/images/filter.png'
import styles from '../styles/ridelist.module.css'
import Ride from './Ride'

function RideList({apidata ,userdata}) {
    const [state,setstate] = useState([])
    const [show,setshow] = useState(true)
    let statedata
    useEffect(()=>{
        apidata.map( item => {
            let minimumdistance = item.station_path[0] - userdata.station_code
            let distance;
            for(let i=0 ; i < item.station_path.length ; i++){
                distance= item.station_path[i] - userdata.station_code
                if(distance<=minimumdistance){
                    if(distance<0){
                        minimumdistance= -1*distance
                    }
                    else{
                        minimumdistance = distance
                    }
                }
            }
            item.distance = minimumdistance
        })
        const sortedstate = state.sort((a,b)=>{
            return a.distance - b.distance
        })
        setstate(sortedstate)
    },[state])
  return (
    <div className={styles.header_container}>
        <div className={styles.header}>
            <div className={styles.header_left}>
                <button  
                className={styles.header_btn}
                >Nearest rides
                </button>
                <button className={styles.header_btn}>Upcoming rides</button>
                <button className={styles.header_btn}>Past rides</button>
            </div>
            <div className={styles.header_right}>
                <div
                onClick={()=>{
                    show ? document.querySelector('#dropdown').style.display='grid' : document.querySelector('#dropdown').style.display='none'
                    setshow(!show)
                }}
                className={styles.filter_container}
                >
                    <Image src={filter} className={styles.filter_img}/>
                    <button
                    className={styles.filter_btn}
                    >
                        Filters
                    </button>
                </div>
                <div
                id='dropdown'
                className={styles.filter_dropdown_container}
                >
                    <h2 className={styles.filter_label}>State</h2>
                    <select className={styles.state_filter} onChange={ e => {
                        statedata = apidata.filter( dataitem => dataitem.state===e.target.value)
                    }}>
                        {apidata.map( dataitem => {
                            return (
                                <FilterList key={dataitem.id} statename={dataitem.state}/>
                            )
                        })}
                    </select>
                    <button
                    onClick={()=>{
                        show ? document.querySelector('#dropdown').style.display='grid' : document.querySelector('#dropdown').style.display='none'
                        setstate(statedata)
                        setshow(!show)
                    }}
                    className={styles.filter_btn}
                    >
                        Apply Changes
                    </button>
                </div>
            </div>
        </div>
        <div>
            {state.length !==0 ?  state.map( ride => {
                return (
                    <Ride key={ride.id} ridedata={ride}/>
                )
            }) : <h1 className={styles.selectstate}>Select a State in Filters To See Available Rides</h1>}
        </div>
    </div>
  )
}

export default RideList