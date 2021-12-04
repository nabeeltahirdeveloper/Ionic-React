import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Checkbox from '../components/Checkbox';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Checkbox/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
