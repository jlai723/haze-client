let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3000';
        break;
        case 'haze-client-jjl.herokuapp.com' :
            APIURL = 'https://haze-server-jjl.herokuapp.com'
}

export default APIURL;