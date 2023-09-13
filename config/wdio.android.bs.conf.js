const path = require('path');
const {config} = require('./wdio.shared.conf');

// ================
// Browserstack Credentials
// ================

config.user = 'akumarmishra_1TXJBI' ;
config.key = 'dJaz7sHnXdpcWvqxAfXD' ;

// ================
// Specs
// ================

config.specs = [
    // ToDo: define location for spec files here
    
    path.join(process.cwd(), './test/specs/android/deleteNotes_Screen*.js')
    
];

// ================
// Capabilities
// ================
//

config.capabilities = [{
    'platformName': 'Android',
    'platformVersion': '9.0',
    'deviceName': 'Google Pixel 3',
    'automationName': 'UiAutomator2',
    'app': 'bs://993a81ec967e1b987f00b7dafa25f3223d87315f',
    'autoGrantPermissions' : true 
    
}];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services= ['browserstack'];

exports.config = config;