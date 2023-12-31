import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context/context';
 import {SpeechProvider} from '@speechly/react-client';


ReactDOM.render(
    <SpeechProvider appId="2a74efd2-bd7c-4a1d-b649-ee641ce76654" language ="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
document.getElementById('root'));
