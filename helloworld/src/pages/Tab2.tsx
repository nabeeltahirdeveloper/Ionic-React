import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Alert from '../components/Alert';
import Card from '../components/card';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <Card/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
