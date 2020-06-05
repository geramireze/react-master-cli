import React, { Component } from 'react';
import './style.css';

const show = '/show.png';
const betty = '/betty.png';
const midnight = '/midnight-gospel.png';
const good = '/the-good-place.png';
const twilight = '/twilight-zone.png';
const programasTv = [betty, midnight, twilight, good];

// Creamos una clase usando como base React.Componente
// para tener todo el uso
class App extends Component {
    state = { on: '' };

    // Creamos un metodo en nuestra clase
    turnTvOn = () => {
        // El estado no lo debes modificar directamente
        // Usamos el metodo de los componentes "setState"
        if (this.state.on === '') {
            this.setState({ on: show });
        } else {
            this.setState({ on: '' });
        }

        // Le enviamos un objeto, con las propiedades que
        // queremos reemplazar
    };

    // metodo de cambio
    changeShow = () => {
        console.log('Este es el cambio de programa ->', Math.random());
        const numeroAleatorio = Math.floor(Math.random() * 4);
        if (this.state.on !== programasTv[numeroAleatorio] && this.state.on) {
            this.setState({ on: programasTv[numeroAleatorio] });
        }
    };

    // Aquí es donde tendremos nuestro JSX
    // este metodo ya esta pre-establecido
    // en lo qué es un componente
    render() {
        console.log('Este es el cambio del DOM->', Math.random());
        // Debemos hacer return del JSX
        return (
            <main>
                <figure>
                    <img className="show" src={this.state.on} alt="" />

                    <button type="button" onClick={this.changeShow}>
                        <img className="tv" src="/tv.png" alt="" />
                    </button>
                </figure>

                <button type="button" onClick={this.turnTvOn}>
                    {this.state.on ? 'Apagar TV' : 'Encender TV'}
                </button>
            </main>
        );
    }
}

export default App;
