import React from "react";
import {connect} from 'react-redux';
import {User} from '../components/User';
import {Main} from '../components/Main';

import {calc} from '../action/mathAction';
import {setName, setAge} from '../action/userAction';

class App extends React.Component {
    constructor() {
        super();
    }

    setName() {
        var nameV = document.getElementById("num");
        this.props.setName(nameV.value);
    }

    render() {
        return (
            <div className="container">
                <input type="input" id="num"/>
                <Main changeUsername={() => this.setName()}/>
                <User username={this.props.user.name} calculate={this.props.calc}/>
                <p> Sum is {this.props.math.result}</p>
            </div>
        );
    }
}

//STATE PASSED FROM REDUX AS WE WRAP THIS COMP AROUNF PROVIDER
const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    }
}
//THIS POPULATED IN THE COMPONENTS PROPS

//DISPATCH ACTION
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        calc: (op, num1, num2) => {
            dispatch(calc(op, num1, num2));
        }
    };
};

//CONNECT BOTH PROPS AND DISPATCH ACTION
export default connect(mapStateToProps, mapDispatchToProps)(App);


