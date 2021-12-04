/* Using with useIonActionSheet Hook */

import React, {useState} from 'react';
import {
  IonButton,
  IonContent,
  IonActionSheet,
  IonPage,
  useIonActionSheet,
} from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';
import "./FabButton.css"
import iicon from "./iicon.svg"
// import { IonActionSheet, IonContent, IonButton } from '@ionic/react';


const FabButton: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();
  const [showActionSheet, setShowActionSheet] = useState(false);


  return (
      <IonContent >
        <IonButton
          expand="block"
          onClick={() =>
            present([{ text: 'Ok' }, { text: 'Cancel' }, { text: "Nabeel" }], 'Action Sheet')
          }
        >
          Show ActionSheet using params
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => {
            present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet');
            setTimeout(dismiss, 3000);
          }}
        >
          Show ActionSheet, hide after 3 seconds
        </IonButton>
        <IonButton onClick={() => setShowActionSheet(true)}>
        Show Action Sheet
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass='my-custom-class'
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          cssClass:"delete",
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: share,
          cssClass:"share",
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: caretForwardCircle,
          cssClass:"play",
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: heart,
          cssClass:"fav",
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: iicon,
          cssClass:"cancel",
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
      </IonContent>
  );
};

export default FabButton;