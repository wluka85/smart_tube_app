import React from 'react';
import * as serviceWorker from './serviceWorker';
import Main from "./main";

const main = new Main();

serviceWorker.unregister();
