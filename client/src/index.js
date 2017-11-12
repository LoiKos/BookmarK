import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import Bookmark from './Bookmark';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Bookmark />, document.getElementById('root'));
registerServiceWorker();
