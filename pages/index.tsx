import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'
import Link from 'next/link'
import Dash_card_service from './Dash_card_service'
import Dash_activities from './Dash_activities'
import Dash_connect from './Dash_connect'
import Dash_profile from './Dash_profile'
import Dash_mobileApp from './Dash_mobileApp'
import Dash_getConn from './Dash_getConn'
import NavBar from '../Components/Nav/index'
import NavbarGG from '../Components/Nav/NavbarGG'
import UserStart from './UserStart'

const Home: NextPage = () => {
  return (
    <div  className={styles.container}>
      <UserStart />
            {/* <NavbarGG/>
             */}
      {/* <div className="page ">
        <div className="row mt-5">
          <div className="col-lg-9">
            <Dashboard />
          </div>
          <div className="col-lg-3">
            <Dash_getConn />
          </div>
        </div>
        <div className="row g-5 g-xxl-12">
          <div className="col-lg-4">
            <Dash_activities />
          </div>
          <div className="col-lg-4">
            <Dash_profile />
          </div>
          <div className="col-lg-4">
            <Dash_card_service />
          </div>

          <div className="col-lg-8 col-sm-4">
            <Dash_connect />
          </div>
          <div className="col-lg-4">
            <Dash_mobileApp />
          </div>

        </div>
      
      </div> */}

      {/* <footer className={styles.footer}>  
          <span className={styles.logo}>
          </span>
      </footer> */}
    </div>
  )
}

export default Home
