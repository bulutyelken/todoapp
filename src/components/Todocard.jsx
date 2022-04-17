import {CgCloseO} from 'react-icons/cg'
import React from 'react'

function Todocard(props){
    function closeBtnOver(event){
        event.target.firstChild.style.color = "orange"
    }

    function closeBtnOut(event){
        event.target.firstChild.style.color = "black"
    }

    return <div className="tododiv">
            <div className="tododivtop">
                <h2>{props.topic}</h2>
                <button id='closebtn' name={props.id} onMouseOut={closeBtnOut} onMouseOver={closeBtnOver} onClick={() => {props.removeCard(props.id)}}>
                    <CgCloseO size={24} color="black" pointerEvents="none"/>
                </button>
            </div>
            <div className="paragdiv">
                <p>{props.todo}</p>
            </div>
        </div>;
};

export default Todocard;