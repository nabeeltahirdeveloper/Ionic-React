import React from 'react'
import "./Tab4.css"

import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import Navbar from "../components/Navbar";
import SocialLink from "../components/SocialLink";
import Cards from "../components/Cards";
import Support from "../components/Support";
import {Qbanner} from "../components/Qbanner";
import {Application} from "../components/Application";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Checkbox from '../components/Checkbox';
import ExploreContainer from '../components/ExploreContainer';


const Tab4 = () => {
    return (
      <IonPage>
        <IonContent>
        <IonHeader>
          <IonToolbar>
        <Header/>
        </IonToolbar>
        </IonHeader>
        <Application/>
        <Qbanner/>
        <Support/>
        <div className="container">
          <center>
          <hr className="cardHr"></hr>
          </center>
        <Cards/>
        </div>
        <SocialLink/>
        <Footer/>
      </IonContent>
      </IonPage>
    )
}

export default Tab4;