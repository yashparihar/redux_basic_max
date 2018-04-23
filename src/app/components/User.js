import React from "react";
//onClick={()=>props.calculate("ADD", document.getElementById("numa").value, document.getElementById("numb").value)}>
export const User = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {props.username}</p>
                    <input type="input" id="numa" placeholder="num 1"/>
                    <input type="input" id="numb" placeholder="num 2"/>
                    <button
                        className="btn btn-primary"
                        onClick={() => props.calculate("ADD", parseInt(document.getElementById("numa").value), parseInt(document.getElementById("numb").value))}>
                        Addition of number
                    </button>

                </div>
            </div>
        </div>
    );
}
