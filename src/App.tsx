import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  peopleOutline,
  chatbubbleEllipsesOutline,
  personCircleOutline,
} from 'ionicons/icons';

import Home from './pages/Home';
import Message from './pages/Message';
import Profile from './pages/Profile';
import GroupDetail from './pages/GroupDetail'; // ✅ Nouvelle page à importer

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        {/* ✅ Toutes les routes sont maintenant dans le même outlet */}
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/message">
          <Message />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>

        {/* ✅ Route dynamique pour les détails d’un groupe */}
        <Route exact path="/group/:id">
          <GroupDetail />
        </Route>

        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={peopleOutline} />
          <IonLabel>Groups</IonLabel>
        </IonTabButton>

        <IonTabButton tab="message" href="/message">
          <IonIcon icon={chatbubbleEllipsesOutline} />
          <IonLabel>Messages</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
</IonApp>

);

export default App;
