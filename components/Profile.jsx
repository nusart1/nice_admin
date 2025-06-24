import React, { useState } from 'react';
import './Profile.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import my_log from './assets/загрузка.jpeg';

const Profile = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    accountChanges: true,
    newProducts: true,
    marketing: false,
  });

  const [activeSection, setActiveSection] = useState('overview');

  const handleCheckboxChange = (name) => {
    setEmailNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className='Profile'>
      <div className='puh'>
        <h2 className="profile-title">Profile</h2>
        <span className="breadcrumb">Home / Users / <strong>Profile</strong></span>
      </div>

      <div className='wedow'>
        <div className='wed-left'>
          <div className="profile-info">
            <div className="profile-image-wrapper">
              <img className="profile-image" src={my_log} alt="my logo" />
            </div>
            <h2 className="profile-name">To'ychi Mavlonqulov</h2>
            <span className="profile-role">Web Designer</span>
            <ul className='social-icons'>
              <li className="social-icon"><i className="bi bi-twitter"></i></li>
              <li className="social-icon"><i className="bi bi-facebook"></i></li>
              <li className="social-icon"><i className="bi bi-instagram"></i></li>
              <li className="social-icon"><i className="bi bi-linkedin"></i></li>
            </ul>
          </div>
        </div>

        <div className='wed-right'>
          <div className="tab-menu">
            <button
              className={`tab-btn ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeSection === 'edit' ? 'active' : ''}`}
              onClick={() => setActiveSection('edit')}
            >
              Edit Profile
            </button>
            <button
              className={`tab-btn ${activeSection === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveSection('settings')}
            >
              Settings
            </button>
            <button
              className={`tab-btn ${activeSection === 'password' ? 'active' : ''}`}
              onClick={() => setActiveSection('password')}
            >
              Change Password
            </button>
          </div>

          <ul className="tab-content">
            {activeSection === 'overview' && (
              <li className='overw'>
                <h2 className="section-title">Overview</h2>
                <div className="overview-content">
                  <h2 className="sub-title">About</h2>
                  <p className="about-text">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>
                  <div className="profile-details-wrapper">
                    <h2 className="sub-title">Profile Details</h2>
                    <ul className='profile-details'>
                      <li className="profile-detail-item"><strong>Full Name</strong><span>Kevin Anderson</span></li>
                      <li className="profile-detail-item"><strong>Company</strong><span>Lueilwitz, Wisoky and Leuschke</span></li>
                      <li className="profile-detail-item"><strong>Job</strong><span>Web Designer</span></li>
                      <li className="profile-detail-item"><strong>Country</strong><span>USA</span></li>
                      <li className="profile-detail-item"><strong>Address</strong><span>A108 Adam Street, New York, NY 535022</span></li>
                      <li className="profile-detail-item"><strong>Phone</strong><span>(436) 486-3538 x29071</span></li>
                      <li className="profile-detail-item"><strong>Email</strong><span>k.anderson@example.com</span></li>
                    </ul>
                  </div>
                </div>
              </li>
            )}

            {activeSection === 'edit' && (
              <li className='edpr'>
                <h2 className="section-title">Edit Profile</h2>
                <div className='edit-profile'>
                  <ul className="edit-profile-list">
                    <li className="edit-profile-item">
                      <strong>Profile Image</strong>
                      <div className='profile-image-box'>
                        <div className="edit-image-wrapper"><img src={my_log} alt="" className="edit-profile-image"/></div>
                        <ul className='image-actions'>
                          <li className="image-action"><i className="bi bi-upload"></i></li>
                          <li className="image-action"><i className="bi bi-trash"></i></li>
                        </ul>
                      </div>
                    </li>
                    <li className="edit-profile-item"><strong>Full Name</strong><input className="input-text" type="text" defaultValue="To'ychi Mavlonqulov" /></li>
                    <li className="edit-profile-item"><strong>About</strong><textarea className="textarea" defaultValue="Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."></textarea></li>
                    <li className="edit-profile-item"><strong>Company</strong><input className="input-text" type="text" defaultValue="Lueilwitz, Wisoky and Leuschke" /></li>
                    <li className="edit-profile-item"><strong>Job</strong><input className="input-text" type="text" defaultValue="Web Designer" /></li>
                    <li className="edit-profile-item"><strong>Country</strong><input className="input-text" type="text" defaultValue="USA" /></li>
                    <li className="edit-profile-item"><strong>Address</strong><input className="input-text" type="text" defaultValue="A108 Adam Street, New York, NY 535022" /></li>
                    <li className="edit-profile-item"><strong>Phone</strong><input className="input-text" type="text" defaultValue="(99)593-49-56" /></li>
                    <li className="edit-profile-item"><strong>Email</strong><input className="input-text" type="text" defaultValue="toychimavlonqulov@gmail.com" /></li>
                    <li className="edit-profile-item"><strong>Twitter Profile</strong><input className="input-text" type="text" defaultValue="https://twitter.com/#" /></li>
                    <li className="edit-profile-item"><strong>Facebook Profile</strong><input className="input-text" type="text" defaultValue="https://facebook.com/#" /></li>
                    <li className="edit-profile-item"><strong>Instagram Profile</strong><input className="input-text" type="text" defaultValue="https://instagram.com/#" /></li>
                    <li className="edit-profile-item"><strong>Linkedin Profile</strong><input className="input-text" type="text" defaultValue="https://linkedin.com/#" /></li>
                  </ul>
                  <button className="btn-save">Save Changes</button>
                </div>
              </li>
            )}

            {activeSection === 'settings' && (
              <li className='setng'>
                <h2 className="section-title">Settings</h2>
                <div className='settings'>
                    <div>
                        <strong className="settings-title">Email Notifications</strong>
                        <ul className="settings-list">
                            <li className="settings-item">
                            <input
                                type="checkbox"
                                checked={emailNotifications.accountChanges}
                                onChange={() => handleCheckboxChange('accountChanges')}
                            />
                            Changes made to your account
                            </li>
                            <li className="settings-item">
                            <input
                                type="checkbox"
                                checked={emailNotifications.newProducts}
                                onChange={() => handleCheckboxChange('newProducts')}
                            />
                            Information on new products and services
                            </li>
                            <li className="settings-item">
                            <input
                                type="checkbox"
                                checked={emailNotifications.marketing}
                                onChange={() => handleCheckboxChange('marketing')}
                            />
                            Marketing and promo offers
                            </li>
                            <li className="settings-item">
                            <input type="checkbox" disabled checked />
                            Security alerts
                            </li>
                        </ul>
                    </div>
                  <button className="btn-save">Save Changes</button>
                </div>
              </li>
            )}

            {activeSection === 'password' && (
              <li className='chpasd'>
                <h2 className="section-title">Change Password</h2>
                <div className='change-password'>
                  <ul className="change-password-list">
                    <li className="change-password-item"><strong>Current Password</strong><input className="input-text" type="password" /></li>
                    <li className="change-password-item"><strong>New Password</strong><input className="input-text" type="password" /></li>
                    <li className="change-password-item"><strong>Re-enter New Password</strong><input className="input-text" type="password" /></li>
                  </ul>
                  <button className="btn-save">Change Password</button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;




