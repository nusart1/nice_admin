import './Blank.css';

const Blank = () => {

    return(
        <div className='Blank'>
            <div>
                <h2>Blank Page</h2>
                <span>Home / Pages / <strong>Blank</strong></span>
            </div>
            <div className='excard'>
                <div className='excard-left'>
                    <h3>Example Card</h3>
                    <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                </div>
                <div className='excard-right'>
                    <h3>Example Card</h3>
                    <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                </div>
            </div>
        </div>
    );
};

export default Blank;