import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Partner1Component } from './partner-1.component';

import registerServiceWorker from './../shared-app/register-service-workers';

ReactDOM.render(<Partner1Component />, document.getElementById('root'));
registerServiceWorker();
