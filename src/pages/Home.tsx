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
  
  const mockGroups = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Group ${i + 1}`,
    lastMessage: `Last message from Group ${i + 1}`,
  }));
  
  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>GroupMe — Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList>
            {mockGroups.map((group) => (
              <IonItem key={group.id} button detail={true} routerLink={`/group/${group.id}`}>
                <IonAvatar slot="start">
                  <img src={`https://api.dicebear.com/7.x/icons/svg?seed=${group.name}`} alt="avatar" />
                </IonAvatar>
                <IonLabel>
                  <h2>{group.name}</h2>
                  <p>{group.lastMessage}</p>
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
  