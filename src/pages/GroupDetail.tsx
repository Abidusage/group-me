import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // ✅ Assure-toi d'importer depuis 'react-router-dom'
import axios from 'axios';

interface Message {
  id: number;
  user: {
    id: number;
    username: string;
  };
  valeur_message: string;
  date: string;
}

const GroupDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // ✅ id peut être undefined
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!id) {
      console.warn("Aucun ID de boîte reçu depuis l'URL.");
      return;
    }

    axios.get(`http://localhost:8000/api/boites/${id}/messages/`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des messages :', error.response?.status, error.response?.data);
      });
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {messages.map((msg) => (
            <IonItem key={msg.id}>
              <IonLabel>
                <h2>{msg.user.username}</h2>
                <p>{msg.valeur_message}</p>
                <small>{msg.date}</small>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default GroupDetail;
