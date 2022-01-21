import React from 'react';
import './Footer.css';
export const Footer = (props) => {
    let footerStyle={
        height: "100%", color:"red" ,
        // width:"50vw"
    }

    return (
        <div className='footerParent fixed-bottom mt-5 shadow'>
            <footer className='row d-flex jutify-content-centre align-content-centre border border-white' style={footerStyle}>
                <div className='col' >
                    Copyright &copy; {props.name}
                </div>
            </footer>
        </div>
    )
}
