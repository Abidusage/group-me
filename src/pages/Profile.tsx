import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonLabel,
    IonItem,
    IonButton,
    IonCard,
    IonCardContent,
  } from '@ionic/react';
  
  const user = {
    name: 'Sage Munguakonkwa',
    email: 'sage@example.com',
    role: 'Full-stack Developer',
    bio: 'Passionate about building educational platforms for African universities. Expert in React, Django, and UI/UX design.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sage',
  };
  
  const Profile: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <IonCard>
            <IonCardContent className="ion-text-center">
              <IonAvatar style={{ margin: '0 auto', width: '100px', height: '100px' }}>
                <img src={user.avatar} alt="avatar" />
              </IonAvatar>
              <h2>{user.name}</h2>
              <p>{user.role}</p>
            </IonCardContent>
          </IonCard>
  
          <IonItem>
            <IonLabel>
              <strong>Email:</strong> {user.email}
            </IonLabel>
          </IonItem>
  
          <IonItem>
            <IonLabel>
              <strong>Bio:</strong> {user.bio}
            </IonLabel>
          </IonItem>
  
          <div className="ion-padding ion-text-center">
            <IonButton expand="block" routerLink="/edit-profile">
              Edit Profile
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profile;
  