import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Partner2Component } from './partner-2.component';

import registerServiceWorker from './../shared-app/register-service-workers';

ReactDOM.render(<Partner2Component />, document.getElementById('root'));
registerServiceWorker();
