import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc() {
        const authData = { data: "Auth on my site" };
        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
                console.log( auth ); //displaying the result on the console
                this.setState({
                    isAuth: true,
                    address: auth.address
                    });
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("To Auth WavesKeeper should be installed.");
        }
    }
    render() {
        const {isAuth, address} = this.state;
        return (
            <div className="container">
                {!isAuth 
                    ?
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
                    :
                <div>You Auth <u>{address}</u>!</div>
                }
    	    </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}
