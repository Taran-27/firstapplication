import React from 'react';
import './PStyle.css'

class Popup extends React.Component{
    render(){
        return(
            <div className = "POPUP">
                <div className='POPUP-INNER'>
                    <h3 className = "text1">{this.props.text}</h3>
                    <h1 className = "text2">{this.props.value}</h1>
                    <div className = "div">
                        <button className='button1' onClick = {this.props.closePopUp}>
                            CLOSE ME
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}
export default Popup;