import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './Menu';

import Tabs from './pages/Tabs';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const AppShell = Component => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonSplitPane contentId="main"> */}
        {/* <Menu /> */}
        <IonRouterOutlet id="main">
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/signin" render={() => <SignIn />} />

          {/* <Route exact path="/" render={() => <Redirect to="/tabs" />} /> */}
        </IonRouterOutlet>
        {/* </IonSplitPane> */}
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
