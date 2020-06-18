import React from 'react';

const Equipo = (props) => (
    <div className={props.name}>
        <dd>{props.marcador}</dd>
        <dt>{props.name}</dt>
        <button type="button" onClick={() => props.disminuya(props.name)}>
            -
        </button>
        <button type="button" onClick={() => props.aumente(props.name)}>
            +
        </button>
    </div>
);

export default Equipo;
