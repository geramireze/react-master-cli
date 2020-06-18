import React, { Component } from 'react';
import Equipo from './Equipo';
import './style.css';

class App extends Component {
    state = {
        corinthians: 0,
        santos: 0,
    };

    aumente = (equipo) => {
        this.setState((prevState) => ({
            [equipo]: prevState[equipo] + 1,
        }));
    };

    disminuya = (equipo) => {
        if (this.state[equipo] >= 1) {
            this.setState((prevState) => ({
                [equipo]: prevState[equipo] - 1,
            }));
        }
    };

    render() {
        return (
            <dl>
                <Equipo
                    name="corinthians"
                    marcador={this.state.corinthians}
                    disminuya={this.disminuya}
                    aumente={this.aumente}
                />
                <img src="/ball.png" alt="soccer ball" />
                <Equipo
                    name="santos"
                    marcador={this.state.santos}
                    disminuya={this.disminuya}
                    aumente={this.aumente}
                />
            </dl>
        );
    }
}

export default App;
