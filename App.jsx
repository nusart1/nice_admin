import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Fixed from './components/Fixed';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Chart_js from './components/Chart_js';
import ApexCharts from './components/ApexCharts';
import EChart from './components/Echart';
import Datatables from './components/DataTables';
import GeneralTables from './components/GeneralTables';
import Profile from './components/Profile';
import FormEl from './components/FormElements';
import FormLayouts from './components/FormLayouts';
import Blank from './components/Blank';
import Error_404 from './components/Error_404';
import Register from './components/Register';
import Login from './components/Login';
import F_A_Q from './components/F_A_Q';
import Contact from './components/Contact';

function App() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // fullscreen rejim uchun shart
  const isFullScreen = ['Register', 'Login', 'Error_404'].includes(activeComponent);

  return (
    <div className="App">
      <Header setSidebarVisible={setSidebarVisible} sidebarVisible={sidebarVisible} />
      <div>
        {!isFullScreen && sidebarVisible && <Fixed setActiveComponent={setActiveComponent} />}
        <div
          className={
            isFullScreen
              ? 'full-screen'
              : sidebarVisible
              ? 'left with-sidebar'
              : 'left no-sidebar'
          }
        >
          {activeComponent === 'Dashboard' && <Dashboard />}
          {activeComponent === 'FormEl' && <FormEl />}
          {activeComponent === 'FormLayouts' && <FormLayouts />}
          {activeComponent === 'GeneralTables' && <GeneralTables />}
          {activeComponent === 'Datatables' && <Datatables />}
          {activeComponent === 'Chart_js' && <Chart_js />}
          {activeComponent === 'ApexCharts' && <ApexCharts />}
          {activeComponent === 'EChart' && <EChart />}
          {activeComponent === 'Profile' && <Profile />}
          {activeComponent === 'F_A_Q' && <F_A_Q />}
          {activeComponent === 'Contact' && <Contact />}
          {activeComponent === 'Register' && (
            <Register setActiveComponent={setActiveComponent} />
          )}
          {activeComponent === 'Login' && <Login setActiveComponent={setActiveComponent} />}
          {activeComponent === 'Error_404' && <Error_404 setActiveComponent={setActiveComponent} />}
          {activeComponent === 'Blank' && <Blank />}
          {!isFullScreen && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default App;
