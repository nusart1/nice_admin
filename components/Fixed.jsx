import React, { useState } from 'react'; 
import "./Fixed.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Fixed = ({ setActiveComponent }) => {
  const [openMenus, setOpenMenus] = useState({
    forms: false,
    tables: false,
    charts: false,
    icons: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="Fixed">
      <ul>
        <li className="dashboard" onClick={() => setActiveComponent('Dashboard')}>
          <div>
            <div>
              <i className="bi bi-grid"></i>
              <h2>Dashboard</h2>
            </div>
          </div>
        </li>

        <li className={openMenus.forms ? 'open' : ''}>
          <div onClick={() => toggleMenu('forms')}>
            <div>
              <i className="bi bi-journal-text"></i>
              <h2>Forms</h2>
            </div>
            <div>
              {openMenus.forms ?
                <i className="bi bi-chevron-up"></i> :
                <i className="bi bi-chevron-down"></i>
              }
            </div>
          </div>
          <ul>
            <li onClick={() => setActiveComponent('FormEl')}>Form Elements</li>
            <li onClick={() => setActiveComponent('FormLayouts')}>Form Layouts</li>
            <li onClick={() => setActiveComponent('FormEditors')}>Form Editors</li>
            <li onClick={() => setActiveComponent('FormValidation')}>Form Validation</li>
          </ul>
        </li>

        <li className={openMenus.tables ? 'open' : ''}>
          <div onClick={() => toggleMenu('tables')}>
            <div>
              <i className="bi bi-layout-text-window-reverse"></i>
              <h2>Tables</h2>
            </div>
            <div>
              {openMenus.tables ?
                <i className="bi bi-chevron-up"></i> :
                <i className="bi bi-chevron-down"></i>
              }
            </div>
          </div>
          <ul>
            <li onClick={() => setActiveComponent('GeneralTables')}>General Tables</li>
            <li onClick={() => setActiveComponent('Datatables')}>Data Tables</li>
          </ul>
        </li>

        <li className={openMenus.charts ? 'open' : ''}>
          <div onClick={() => toggleMenu('charts')}>
            <div>
              <i className="bi bi-bar-chart"></i>
              <h2>Charts</h2>
            </div>
            <div>
              {openMenus.charts ?
                <i className="bi bi-chevron-up"></i> :
                <i className="bi bi-chevron-down"></i>
              }
            </div>
          </div>
          <ul>
            <li onClick={() => setActiveComponent('Chart_js')}>Chart.js</li>
            <li onClick={() => setActiveComponent('ApexCharts')}>ApexCharts</li>
            <li onClick={() => setActiveComponent('EChart')}>ECharts</li>
          </ul>
        </li>

        <li className={openMenus.icons ? 'open' : ''}>
          <div onClick={() => toggleMenu('icons')}>
            <div>
              <i className="bi bi-gem"></i>
              <h2>Icons</h2>
            </div>
            <div>
              {openMenus.icons ?
                <i className="bi bi-chevron-up"></i> :
                <i className="bi bi-chevron-down"></i>
              }
            </div>
          </div>
          <ul>
            <li onClick={() => setActiveComponent('BootstrapIcons')}>Bootstrap Icons</li>
            <li onClick={() => setActiveComponent('RemixIcons')}>Remix Icons</li>
            <li onClick={() => setActiveComponent('Boxicons')}>Boxicons</li>
          </ul>
        </li>
      </ul>

      <div className="pages">
        <span>PAGES</span>
        <ul>
          <li onClick={() => setActiveComponent('Profile')}>Profile</li>
          <li onClick={() => setActiveComponent('F_A_Q')}>F.A.Q</li>
          <li onClick={() => setActiveComponent('Contact')}>Contact</li>
          <li onClick={() => setActiveComponent('Register')}>Register</li>
          <li onClick={() => setActiveComponent('Login')}>Login</li>
          <li onClick={() => setActiveComponent('Error_404')}>Error 404</li>
          <li onClick={() => setActiveComponent('Blank')}>Blank</li>
        </ul>
      </div>
    </div>
  );
};

export default Fixed;
