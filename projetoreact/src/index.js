import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


function Relogio(props){
    return(
        <div>
            <h2>menu</h2>
            <div>
                <li><a>menu</a>
                    <ul>
                        <li><a onClick="divFormulario"style ="display :block">Formulario</a></li>
                        <li><a onClick="divRelogio"style ="display : block">Relogio</a></li>
                    </ul>
                </li>
            </div>
            <div id="divRelogio" style="display: none">
                <h2>Hora: {props.horario.toLocaleTimeString()}</h2>
            </div>
            <div id="divFormulario" style="display: none">
                <input type="text"/>

            </div>

        </div>
    );
}

// function Relogio(props){
//     return(
//         <div>
//             <h2>Hora: {props.horario.toLocaleTimeString()}</h2>
//         </div>
//     );
// }



ReactDOM.render(<Relogio horario={new Date()}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
