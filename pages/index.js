import Navleft from "../components/Navleft"
import RideList from "../components/RideList"
import styles from '../styles/home.module.css'

export default function Home({data,user}) {
  return (
    <>
       <div className={styles.navbar}>
           <div className={styles.nav_right}>
             <h1 className={styles.logo_heading}>EDVORA</h1>
           </div>
           <div>
             <Navleft user={user}/>
           </div>
       </div>
       <RideList apidata={data} userdata={user}/>
    </>
  )
}

export const getStaticProps = async () =>{
  let res = await fetch('https://assessment.api.vweb.app/rides')
  const data = await res.json()
  let response = await fetch('https://assessment.api.vweb.app/user')
  const user = await response.json()
  return {
    props : {
      data,
      user
    }
  }
}
