import React, { useEffect, useState } from 'react';
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
} from '@ionic/react';

interface MessageType {
  id: number;
  valeur_message: string;
  date: string;
  user: {
    id: number;
    username: string;
  };
  boite: string;
}

const Message: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    // 🔹 Adapter l'URL à ton environnement
    // Si tu es sur émulateur Android : http://10.0.2.2:8000/api/messages/
    fetch('http://127.0.0.1:8000/api/messages/')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error('Erreur lors du fetch des messages :', err));
  }, []);

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
              <IonAvatar slot="start">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${msg.user.username}`}
                  alt="avatar"
                />
              </IonAvatar>
              <IonLabel>
                <h2>{msg.user.username}</h2>
                <p>{msg.valeur_message}</p>
                <small>{new Date(msg.date).toLocaleString()}</small>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Message;
