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
  
  const mockMessages = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    user: `User ${i + 1}`,
    message: `This is message number ${i + 1}`,
    time: `10:${(i % 60).toString().padStart(2, '0')} AM`,
  }));
  
  const Message: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Messages</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList>
            {mockMessages.map((msg) => (
              <IonItem key={msg.id}>
                <IonAvatar slot="start">
                  <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${msg.user}`} alt="avatar" />
                </IonAvatar>
                <IonLabel>
                  <h2>{msg.user}</h2>
                  <p>{msg.message}</p>
                  <small>{msg.time}</small>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Message;
  