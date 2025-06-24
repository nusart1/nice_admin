import React, { useState } from 'react';
import './FormLayouts.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FormLayouts = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const selectValue = (index, value) => {
    setSelectedValues({ ...selectedValues, [index]: value });
    setOpenDropdownIndex(null);
  };

  const renderDropdown = (index, options) => {
    return (
      <div className='click_ochypl'>
        <div className='hbaro' onClick={() => toggleDropdown(index)}>
          <input
            type="text"
            value={selectedValues[index] || 'Choose...'}
            readOnly
          />
          <i
            className={`bi bi-chevron-down ${openDropdownIndex === index ? 'rotate' : ''}`}
          ></i>
        </div>
        {openDropdownIndex === index && (
          <ul className='ochlypl'>
            {options.map((opt, i) => (
              <li key={i} onClick={() => selectValue(index, opt)}>
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className='FormLa'>
      <div className='hflayo'>
        <h2>Form Layouts</h2>
        <span>Home / Forms / <strong>Layouts</strong></span>
      </div>
      <div className='hofve'>
        <div className='hofve-left'>
          <div className='hfv_card'>
            <h2>Horizontal Form</h2>
            <ul>
              <li><span>Your Name</span><input type="text" /></li>
              <li><span>Email</span><input type="email" /></li>
              <li><span>Password</span><input type="password" /></li>
              <li>
                <span>Radios</span>
                <div className='collumn_div'>
                  <ul>
                    <li><input type="radio" /><span>First radio</span></li>
                    <li><input type="radio" /><span>Second radio</span></li>
                    <li className='disablet_li'>
                      <input type="radio" disabled /><span>Third disabled radio</span>
                    </li>
                  </ul>
                  <div className='dflex_div'>
                    <input type="checkbox" />
                    <span>Example checkbox</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className='btn_div'>
              <button>Submit</button>
              <button>Reset</button>
            </div>
          </div>

          <div className='hfv_card'>
            <h2>Multi Columns Form</h2>
            <ul>
              <li><span>Your Name</span><input type="text" /></li>
              <li className='dflex_li'>
                <ul>
                  <li><span>Email</span><input type="email" /></li>
                  <li><span>Password</span><input type="password" /></li>
                </ul>
              </li>
              <li><span>Address</span><input defaultValue="1234 Main St" type="text" /></li>
              <li><span>Address 2</span><input defaultValue="Apartment, studio, or floor" type="text" /></li>
              <li className='dflex_li'>
                <ul>
                  <li><span>City</span><input type="text" /></li>
                  <li><span>State</span>{renderDropdown(0, ['New York', 'Oregon', 'DC'])}</li>
                  <li><span>Zip</span><input type="text" /></li>
                </ul>
              </li>
            </ul>
            <div className='btn_div'>
              <button>Submit</button>
              <button>Reset</button>
            </div>
          </div>
        </div>

        <div className='hofve-right'>
          <div className='hfv_card'>
            <h2>Vertical Form</h2>
            <ul>
              <li><span>Your Name</span><input type="text" /></li>
              <li><span>Email</span><input type="email" /></li>
              <li><span>Password</span><input type="password" /></li>
              <li><span>Address</span><input placeholder='1234 Main St' type="text" /></li>
            </ul>
            <div className='btn_div'>
              <button>Submit</button>
              <button>Reset</button>
            </div>
          </div>

          <div className='hfv_card'>
            <h2>No Labels / Placeholders as labels Form</h2>
            <ul>
              <li><input placeholder='Your name' type="text" /></li>
              <li className='dflex_li'>
                <ul>
                  <li><input placeholder='Email' type="email" /></li>
                  <li><input placeholder='Password' type="password" /></li>
                </ul>
              </li>
              <li><input placeholder='Address' type="text" /></li>
              <li className='dflex_li'>
                <ul>
                  <li><input placeholder='City' type="text" /></li>
                  <li>{renderDropdown(1, ['Tashkent', 'Samarkand', 'Bukhara'])}</li>
                  <li><input placeholder='Zip' type="text" /></li>
                </ul>
              </li>
            </ul>
            <div className='btn_div'>
              <button>Submit</button>
              <button>Reset</button>
            </div>
          </div>

          <div className='hfv_card'>
            <h2>Floating labels Form</h2>
            <ul>
              <li><input placeholder='Your name' type="text" /></li>
              <li className='dflex_li'>
                <ul>
                  <li><input placeholder='Email' type="email" /></li>
                  <li><input placeholder='Password' type="password" /></li>
                </ul>
              </li>
              <li><textarea placeholder='Address'></textarea></li>
              <li className='dflex_li'>
                <ul>
                  <li><input placeholder='City' type="text" /></li>
                  <li>{renderDropdown(2, ['California', 'Nevada', 'Texas'])}</li>
                  <li><input placeholder='Zip' type="text" /></li>
                </ul>
              </li>
            </ul>
            <div className='btn_div'>
              <button>Submit</button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLayouts;
