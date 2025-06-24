import './FormElements.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const FormEl = () => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    const [floatSelectOpen, setFloatSelectOpen] = useState(false);
    const [floatSelectValue, setFloatSelectValue] = useState('');
    const [switches, setSwitches] = useState({
        s1: false,
        s2: true
    });
    const [multiSelectValue, setMultiSelectValue] = useState('Open this select menu');

    const toggleSelect = () => setSelectOpen(prev => !prev);
    const toggleFloatSelect = () => setFloatSelectOpen(prev => !prev);

    const handleSelectValue = (val) => {
        setSelectValue(val);
        setSelectOpen(false);
    };

    const handleFloatSelectValue = (val) => {
        setFloatSelectValue(val);
        setFloatSelectOpen(false);
    };

    const handleSwitchChange = (key) => {
        setSwitches(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleMultiSelectClick = (val) => {
        setMultiSelectValue(val);
    };

    return (
        <div className='FormEl'>
            <div className='hfe'>
                <h2 className="page-title">Form Elements</h2>
                <span className="breadcrumb">Home / Forms / <strong>Elements</strong></span>
            </div>
            <div className='genad'>
                <div className='gnd-left'>
                    <h2 className="section-title">General Form Elements</h2>
                    <div className="form-group">
                        <div className="form-field"><h3>Text</h3><input type="text" className="input-text" /></div>
                        <div className="form-field"><h3>Email</h3><input type="email" className="input-email" /></div>
                        <div className="form-field"><h3>Password</h3><input type="password" className="input-password" /></div>
                        <div className="form-field"><h3>Number</h3><input type="number" className="input-number" /></div>
                        <div className="form-field"><h3>File Upload</h3><input type="file" className="input-file" /></div>
                        <div className="form-field"><h3>Date</h3><input type="date" className="input-date" /></div>
                        <div className="form-field"><h3>Time</h3><input type="time" className="input-time" /></div>
                        <div className="form-field"><h3>Color Picker</h3><input type="color" className="input-color" /></div>
                        <div className="form-field"><h3>Textarea</h3><textarea className="textarea"></textarea></div>

                        <div className='rads'>
                            <h3>Radios</h3>
                            <ul className="radio-list">
                                <li><input type="radio" name="radio-group" id="radio1" /><label htmlFor="radio1">Option 1</label></li>
                                <li><input type="radio" name="radio-group" id="radio2" /><label htmlFor="radio2">Option 2</label></li>
                                <li><input type="radio" name="radio-group" id="radio3" /><label htmlFor="radio3">Option 3</label></li>
                            </ul>
                        </div>

                        <div className='checkx'>
                            <h3>Checkboxes</h3>
                            <ul className="checkbox-list">
                                <li><input type="checkbox" id="check1" /><label htmlFor="check1">Check 1</label></li>
                                <li><input type="checkbox" id="check2" /><label htmlFor="check2">Check 2</label></li>
                            </ul>
                        </div>

                        <div className="form-field">
                            <h3>Disabled</h3>
                            <input value="Read only / Disabled" type="text" disabled className="input-disabled" />
                        </div>

                        <div className='selct'>
                            <h3>Select</h3>
                            <div className='select-wrapper'>
                                <input
                                    type="search"
                                    readOnly
                                    value={selectValue}
                                    placeholder="Select..."
                                    className="select-input"
                                />
                                <div className='ud' onClick={toggleSelect}>
                                    <i className="bi bi-chevron-down"></i>
                                    <i className="bi bi-chevron-up"></i>
                                </div>
                                {selectOpen && (
                                    <ul className="select-options">
                                        {['Open this select menu', 'One', 'Two', 'Three'].map(val => (
                                            <li
                                                key={val}
                                                className={val === selectValue ? 'selected' : ''}
                                                onClick={() => handleSelectValue(val)}
                                            >
                                                {val}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className='multi-select'>
                            <h3>Multi Select</h3>
                            <ul className="multi-select-list">
                                {['Open this select menu', 'One', 'Two', 'Three'].map(val => (
                                    <li
                                        key={val}
                                        className={val === multiSelectValue ? 'multi-selected' : 'multi-unselected'}
                                        onClick={() => handleMultiSelectClick(val)}
                                    >
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="form-field">
                            <h3>Submit Button</h3>
                            <button className="submit-button">Submit Form</button>
                        </div>
                    </div>
                </div>

                <div className='gnd-right'>
                    <h2 className="section-title">Advanced Form Elements</h2>
                    <div>
                        <div className='switchs'>
                            <h3>Switches</h3>
                            <ul className="switch-list">
                                <li>
                                    <label className="switch">
                                        <input type="checkbox" checked={switches.s1} onChange={() => handleSwitchChange('s1')} />
                                        <span className="slider"></span>
                                    </label>
                                    Default switch checkbox input
                                </li>
                                <li>
                                    <label className="switch">
                                        <input type="checkbox" checked={switches.s2} onChange={() => handleSwitchChange('s2')} />
                                        <span className="slider"></span>
                                    </label>
                                    Checked switch checkbox input
                                </li>
                                <li>
                                    <label className="switch">
                                        <input type="checkbox" disabled />
                                        <span className="slider"></span>
                                    </label>
                                    Disabled switch checkbox input
                                </li>
                                <li>
                                    <label className="switch">
                                        <input type="checkbox" checked disabled />
                                        <span className="slider"></span>
                                    </label>
                                    Disabled checked switch checkbox input
                                </li>
                            </ul>
                        </div>
                        <div className='rangs'>
                            <h3>Ranges</h3>
                            <ul className="range-list">
                                <li><span>Example range</span><input type="range" className="range-input" /></li>
                                <li><span>Disabled range</span><input type="range" disabled className="range-input" /></li>
                                <li><span>Min and max with steps</span><input type="range" min="0" max="100" step="10" className="range-input" /></li>
                            </ul>
                        </div>
                        <div className='flolab'>
                            <h3>Floating labels</h3>
                            <ul className="floating-label-list">
                                <li><input placeholder="Email address" type="email" className="floating-input" /></li>
                                <li><input placeholder="Password" type="password" className="floating-input" /></li>
                                <li><textarea placeholder="Comments" className="floating-textarea"></textarea></li>
                                <li>
                                    <div className="floating-select-wrapper">
                                        <div className="floating-select-header">
                                            <span className="floating-label-text">{floatSelectValue || "Open this select menu"}</span>
                                            <div className='ud' onClick={toggleFloatSelect}>
                                                <i className="bi bi-chevron-down"></i>
                                                <i className="bi bi-chevron-up"></i>
                                            </div>
                                        </div>
                                        {floatSelectOpen && (
                                            <ul className="floating-select-options">
                                                {['Open this select menu', 'One', 'Two', 'Three'].map(val => (
                                                    <li
                                                        key={val}
                                                        className={val === floatSelectValue ? 'selected' : ''}
                                                        onClick={() => handleFloatSelectValue(val)}
                                                    >
                                                        {val}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='ingrou'>
                            <h3>Input groups</h3>
                            <ul className="input-group-list">
                                <li className="input-group">
                                    <button>@</button>
                                    <input placeholder='Username' type="text" />
                                </li>
                                <li className="input-group">
                                    <input placeholder='Recipients username' type="text" />
                                    <button>@example.com</button>
                                </li>
                                <h3>Your vanity URL</h3>
                                <li className="input-group">
                                    <button>https://example.com/users/</button>
                                    <input type="url" />
                                </li>
                                <li className="input-group">
                                    <button>$</button>
                                    <input type="text" />
                                    <button>.00</button>
                                </li>
                                <li className="input-group">
                                    <input placeholder='Username' type="text" />
                                    <button>@</button>
                                    <input placeholder='Server' type="text" />
                                </li>
                                <li className="input-group">
                                    <button>With textarea</button>
                                    <textarea></textarea>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormEl;
