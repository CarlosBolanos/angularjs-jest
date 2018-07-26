
import './loader.component.css';

require('sharedModule')
    .component('appLoader', {
        template: require('./loader.component.html')
    })