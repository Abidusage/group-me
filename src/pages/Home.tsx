import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonButton,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Boite {
  id: number;
  name: string;
  lastMessage: string;
}

const Home: React.FC = () => {
  const [boites, setBoites] = useState<Boite[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/boites/')
      .then(response => {
        setBoites(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des boîtes :', error);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Boîtes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {boites.map((boite) => (
            <IonItem key={boite.id} button detail={true} routerLink={`/group/${boite.id}`}>
              <IonAvatar slot="start">
                <img src={`https://api.dicebear.com/7.x/icons/svg?seed=${boite.name}`} alt="avatar" />
              </IonAvatar>
              <IonLabel>
                <h2>{boite.name}</h2>
                <p>{boite.lastMessage}</p>
              </IonLabel>
              <IonButton slot="end" size="small" fill="outline">
                View
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
