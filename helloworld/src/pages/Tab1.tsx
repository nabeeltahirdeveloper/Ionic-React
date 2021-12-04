import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ActionSheet from '../components/ActionSheet';
import Alert from '../components/Alert';
import Boota from '../components/Boot';
import ExploreContainer from '../components/ExploreContainer';
import FabButton from '../components/FabButton';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle  >Bootstrap</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <Boota/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
