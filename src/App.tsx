import React, {useEffect, useState}  from 'react';
import logo from './logo.svg';
import './App.css';

// // Import scss
// import "./assets/scss/theme.scss"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { userRoutes, authRoutes } from "./routes/allRoutes"


import 'antd/dist/antd.css';
import './index.css';
import { Breadcrumb, Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import MenuDrill  from './components/Menu';
import UserLogged from './components/UserLogged';

// import Navbar from './components/Navbar';
import Logo from './assets/images/logo.svg';

import { Amplify, Auth, Hub } from 'aws-amplify'
import { CognitoUserSession, CognitoAccessToken } from 'amazon-cognito-identity-js'
import { HubCallback } from '@aws-amplify/core/lib/Hub'
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

import { Link } from 'react-router-dom';

Amplify.configure(awsconfig)

const { Header, Content, Footer } = Layout;

interface IUser {
  username: string;
  name?: string;
  token: CognitoAccessToken;
}

async function signOut() {
  console.log('signOut')
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

const getSession = (): Promise<CognitoUserSession | null> => Auth.currentSession()

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  const authListener: HubCallback = ({ payload: { event, data } }) => {
    console.log('authListener', event, data)
    switch (event) {
      case 'signIn':
        const {attributes} = data;
        console.log('attributes', attributes);
        setUser({ username: data.username, token: data.signInUserSession.accessToken, name: attributes.name });
        break;
      case 'signOut':
        setUser(null);
        window.location.reload();
        break;
    }
  }

  const checkUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      const {attributes} = authUser;
      setUser({ username: authUser.username, token: authUser.signInUserSession.accessToken, name: attributes.name });
  }

  useEffect(() => {
      checkUser();
      console.log('useEffect', user)
  }, [])

  useEffect(() => {
    Hub.listen('auth', authListener)
    return () => Hub.remove('auth', authListener)
  }, [])

  return (
    <Router>    
      <Layout className="layout">
        <Header>
              {/* <div className="logo" /> */}
              <div>
                <img src={Logo} alt="logo" className='logo' />
              </div>
              <MenuDrill />
              <div className='avatar'>
                <UserLogged  userName={user?.name} signOut={signOut}/>
              </div>
        </Header>
        <Content
          style={{
            padding: '50px',
          }}
        >
            <div className="site-layout-content">
              <Switch>  
              {userRoutes.map((route, idx) => (
                <Route key={idx} exact path={route.path} component={route.component} />
                ))}
              </Switch>
            </div>
        </Content>
      </Layout>
    </Router>
    
  );
}

export default withAuthenticator(App);
