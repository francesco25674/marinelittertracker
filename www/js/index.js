var dbFunction = new dbFunction;
var tracking = 0;
var track = '';
var track_dt = '';
var jsonTrack = '';
var littersJson = '';
var gpsFormat = 0;
var lat = 0;
var lon = 0;
var newMarker = '';
var lang = 0;
var trackFreq = 0;
var user_id = 0;
var user_detail = '';
var map = null;
// var db = openDatabase("marineLitterDb", "1.0", "marineLitter DB", 2 * 1024 * 1024); // Open SQLite Database
var db = null;
document.addEventListener('deviceready', function () {
    db = window.sqlitePlugin.openDatabase({name: 'marineLitter.db', location: 1});
});

function onDeviceReady() {
    getPosition();
    getDirection();
    getDate();
    initDatabase();
    showPage('page1');
    document.getElementById('trackSwitch').value = lang.msg_tracking_start_form;
}

//---------------------------------- initDatabase ------------------------------>>

function initDatabase() {
    try {
        if (!window.openDatabase) // Check browser is supported SQLite or not.
        // if (!window.sqlitePlugin.openDatabase) // Check browser is supported SQLite or not.
        {
            alert('Databases are not supported in this browser.');
        } else {
            dbFunction.createTableTrack();
            dbFunction.createTableMarker();
            dbFunction.createTableLitter();
            dbFunction.createTableSetting();
            dbFunction.createTableUser();
        }
    } catch (e) {
        if (e == 2) {
            // Version number mismatch.
            console.log("Invalid database version.");
        } else {
            console.log("Unknown error " + e + ".");
        }

    }
}

//---------------------------------- test compass ------------------------------>>

function testCompass() {
    function onSuccess(heading) {
        var compass_detail = 'Heading: ' + heading.magneticHeading + '<br>' +
            'True Heading: ' + heading.trueHeading + '<br>' +
            'Heading Accuracy: ' + heading.headingAccuracy + '<br>' +
            'Timestamp: ' + heading.timestamp + '<br>';

        document.getElementById('compass_detail').innerHTML = compass_detail;
    }

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }

    navigator.compass.getCurrentHeading(onSuccess, onError);
}

//---------------------------------- testGPS ------------------------------>>

function testGPS() {
    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    function onSuccess(position) {

        var gps_detail = 'Latitude: ' + position.coords.latitude + '<br>' +
            'Longitude: ' + position.coords.longitude + '<br>' +
            'Altitude: ' + position.coords.altitude + '<br>' +
            'Accuracy: ' + Math.round(position.coords.accuracy * 100000) / 100000 + '<br>' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br>' +
            'Heading: ' + position.coords.heading + '<br>' +
            'Speed: ' + position.coords.speed + '<br>' +
            'Timestamp: ' + position.timestamp + '<br>';

        document.getElementById('gps_detail').innerHTML = gps_detail;
    }

    function onError(error) {
        openAlert(lang.msg_gps_timeout);
        console.log('code: ' + error.code + ' - ' + 'message: ' + error.message);
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        maximumAge: 3000, // 3 sec
        timeout: 10000, // 10 sec
        enableHighAccuracy: true
    });

}

//---------------------------------- test Network ------------------------------>>

function testNetwork() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI] = 'WiFi';
    states[Connection.CELL_2G] = 'Cell 2G';
    states[Connection.CELL_3G] = 'Cell 3G';
    states[Connection.CELL_4G] = 'Cell 4G';
    states[Connection.CELL] = 'Cell generic';
    states[Connection.NONE] = 'No network';

    return states[networkState];

}

function showNetworkStatus() {
    testNetwork();
    if (testNetwork() == 'No network') {
        document.getElementById('network_icon').innerHTML = '<img class="pageIcon" src="css/svg/wifi-1-no-w.svg">';
        document.getElementById('network_detail').innerHTML = lang.msg_network_connection + testNetwork();
        return false;
    } else {
        document.getElementById('network_icon').innerHTML = '<img class="pageIcon" src="css/svg/wifi-1-w.svg">';
        document.getElementById('network_detail').innerHTML = lang.msg_network_connection + testNetwork();
    }
}

//---------------------------------- alert ----------------------------->>

function openAlert(msg) {
    var msg = msg;
    var alert = document.getElementById("alert");
    var curtain = document.getElementById("curtain");
    alert.style.display = 'block';
    curtain.style.display = 'block';
    alert.innerHTML = msg;
    setTimeout(closeAlert, 10000);

}

function closeAlert() {
    var alert = document.getElementById("alert");
    var curtain = document.getElementById("curtain");
    alert.style.display = 'none';
    curtain.style.display = 'none';
    alert.innerHTML = '';
}

//---------------------------------- navbar ----------------------------->>

function openNav() {
    document.getElementById("mySidenav").style.width = "100px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//---------------------------------- swipe ------------------------------>>

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    true;
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}
function handleTouchMove(evt) {
    true;
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) + Math.abs(yDiff) > 150) { //to deal with to short swipes

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {/* left swipe */
                closeNav();
            } else {/* right swipe */

            }
        } else {
            if (yDiff > 0) {/* up swipe */

            } else { /* down swipe */

            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}
//---------------------------------- getDate ------------------------------>>

function getDate() {
    var today = new Date();
    var y = today.getFullYear();
    var n = today.getMonth() + 1;
    var d = today.getDay() + 1;
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //var z = today.getTimezoneOffset();
    n = checkTime(n);
    d = checkTime(d);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =
        y + "-" + n + "-" + d + " " + h + ":" + m + ":" + s;
    var t = setTimeout(getDate, 500);

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
          // add zero in front of numbers < 10
        return i;
    }
}

//---------------------------------- getPosition ------------------------------>>

function getPosition() {

    /* OPTIONS:

     - enableHighAccuracy: Provides a hint that the application needs the best possible results.
     By default, the device attempts to retrieve a Position using network-based methods.
     Setting this property to true tells the framework to use more accurate methods, such as satellite positioning. (Boolean).

     - timeout: The maximum length of time (milliseconds) that is allowed
     to pass from the call to navigator.geolocation.getCurrentPosition or geolocation.watchPosition
     until the corresponding geolocationSuccess callback executes.
     If the geolocationSuccess callback is not invoked within this time,
     the geolocationError callback is passed a PositionError.TIMEOUT error code.
     (Note that when used in conjunction with geolocation.watchPosition,
     the geolocationError callback could be called on an interval every timeout milliseconds!) (Number).

     - maximumAge: Accept a cached position whose age is no greater than the specified time in milliseconds. (Number).*/

    //navigator.geolocation.getCurrentPosition(showPosition, onError, {maximumAge:60000, timeout:5000, enableHighAccuracy: true});

    function onSuccess(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        if (gpsFormat == 1) {
            document.getElementById('geolocation').innerHTML = ddToDms(lat, lon);
        } else {
            document.getElementById('geolocation').innerHTML = dd(lat, lon);
        }
    }

    function onError(error) {
        openAlert(lang.msg_gps_timeout);
        // console.log('code: ' + error.code + ' - ' + 'message: ' + error.message  );
        document.getElementById('geolocation').innerHTML = '<a href="javascript:void(0)" class="" onclick="getPosition()"><span id="getPosFailMsg"></span><img src="css/svg/arrow-d-w.svg"></a>';
        document.getElementById('getPosFailMsg').innerHTML = lang.msg_gps_fail;
    }

    options = {
        maximumAge: 3000,
        timeout: 10000, // 10 sec
        enableHighAccuracy: true
    };


    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

    return watchID;
}

//---------------------------------- getDirection ------------------------------>>

function getDirection() {
    function onSuccess(heading) {
        document.getElementById('heading').innerHTML = Math.floor(heading.magneticHeading) + "º";
        rotateArrow(heading);
    }

    function onError(compassError) {
        // stopCompass();
        document.getElementById('heading').innerHTML = lang.msg_compass_error;
        // alert('Compass error: ' + compassError.code);
    }

    var watchID = navigator.compass.watchHeading(onSuccess, onError, {frequency: 100});
    return watchID;
}

function rotateArrow(heading) {
    var rotation = 360 - heading.magneticHeading;
    document.getElementById('compass_arrow').style.WebkitTransform = "rotate(" + rotation + "deg)";
}

function stopCompass() {
    navigator.compass.clearWatch(watchID);
}

//---------------------------------- gps format convert DD to DMS ------------------------------>>

function ddToDms(lat, lon) {
    var lat = lat;
    var lon = lon;
    var latResult, lonResult, dmsResult;
    lat = parseFloat(lat);
    lon = parseFloat(lon);
    latResult = (lat >= 0) ? 'N ' : 'S ';
    latResult += getDms(lat) + '<br>';
    lonResult = (lon >= 0) ? 'E ' : 'W ';
    lonResult += getDms(lon);
    dmsResult = latResult + ' ' + lonResult;
    return dmsResult;

}

function getDms(val) {
    var valDeg, valMin, valSec, result;
    val = Math.abs(val);
    valDeg = Math.floor(val);
    result = valDeg + "º ";
    valMin = Math.floor((val - valDeg) * 60);
    result += valMin + "' ";
    valSec = Math.round((val - valDeg - valMin / 60) * 3600 * 1000) / 1000;
    result += valSec + '"';
    return result;
}

//---------------------------- gps format DD ---------------------------------->>

function dd(lat, lon) {
    var lat = lat;
    var lon = lon;
    var latResult, lonResult, dmsResult;
    latResult = (lat >= 0) ? 'N ' : 'S ';
    latResult += getDd(lat) + '<br>';
    lonResult = (lon >= 0) ? 'E ' : 'W ';
    lonResult += getDd(lon);
    dmsResult = latResult + ' ' + lonResult;
    return dmsResult;
}

function getDd(val) {
    val = Math.abs(val);
    return val;
}

//---------------------------------- showPage ------------------------------>>

function showPage(elementID) {
    // try to find the requested page and alert if it's not found
    var ele = document.getElementById(elementID);
    if (!ele) {
        openAlert("no such element");
        return;
    }

    // get all pages, loop through them and hide them
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    ele.style.display = 'block';

    switch (elementID) {
        case 'page3':
            testNetworkAndLoadMap();
            break;
        case 'compassDetail':
            testCompass();
            break;
        case 'gpsDetail':
            testGPS();
            break;
        case 'networkDetail':
            showNetworkStatus();
            break;
        case 'tracksList':
            dbFunction.listTracks();
            break;
        case 'trackDetail':
            break;
        case 'littersList':
            dbFunction.listLiters();
            break;
        case 'litterDetail':
            break;
        case 'setting':
            dbFunction.getSettings();
            break;
        case 'settingGpsFormat':
            dbFunction.getSettings();
            break;
        case 'userDetail':
            dbFunction.getUserDetail();
            break;
        case 'signUp':
            document.getElementById('signUpSubmit').value = lang.msg_user_form_signUp_button_submit;
            document.getElementById('signUpMessage').innerHTML = lang.msg_user_form_signUp_message;
            break;
        case 'logIn':
            document.getElementById('logInSubmit').value = lang.msg_user_form_logIn_button_submit;
            break;
        case 'uploadData':
            uploadPrepare();
            break;
        case 'info':
            getInfo();
            break;
        case 'licence':
            getlicence();
            break;
        default:
        // DO NOTHING
    }
}

//---------------------------------- tracking ------------------------------>>

function startNewTrack() {
    tracking = 1 - tracking;
    if (tracking === 0) {
        // document.getElementById('trackSwitch').innerHTML = '<img src="css/svg/record-1.svg">';
        document.getElementById('trackSwitch').value = lang.msg_tracking_start_form;
        // openAlert(lang.msg_tracking_stop);
        tracking = 0;
        clearInterval(newMarker);
    } else {
        dbFunction.newTrack();
        // document.getElementById('trackSwitch').innerHTML = '<img src="css/svg/record-2.svg">';
        document.getElementById('trackSwitch').value = lang.msg_tracking_stop_form;
        // openAlert(lang.msg_tracking_start);
        newMarker = setInterval(dbFunction.newMarker, trackFreq);
    }
}

//---------------------------------- litters ------------------------------>>

function trackLitter(litter) {

    function onSuccess(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var note = lang.msg_litter_note_default;
        dbFunction.newLitter(litter, lat, lon, note);
    }

    function onError(error) {
        openAlert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge: 30000, enableHighAccuracy: true});
}

//---------------------------------- map ------------------------------>>

function testNetworkAndLoadMap() {
    testNetwork();
    if (testNetwork() === 'No network') {
        document.getElementById('uploadIcon').style.display = "inline";
        document.getElementById('uploadNetworkMessage').style.display = "inline";
        document.getElementById('map_icon_no_network').innerHTML = '<img class="pageIcon" src="css/svg/cloud-w-error.svg">';
        document.getElementById('map_message_no_network').innerHTML = lang.msg_network_error;
        return false;
    } else {
        document.getElementById('uploadIcon').style.display = "none";
        document.getElementById('uploadNetworkMessage').style.display = "none";
        loadMap();
    }
}

function loadMap() {

    var litterIcon = L.Icon.extend({
        options: {
            iconSize: [20, 20],
            iconAnchor: [10, 20],
            popupAnchor: [0, -20]
        }
    });

    function chooseIcon(feature) {
        switch (feature['litter']) {
            case 'plastic bottle':
                return 'plastic_bottle.svg';
                break;
            case 'plastic leaf':
                return 'plastic_leaf.svg';
                break;
            case 'can':
                return 'can.svg';
                break;
            case 'glass':
                return 'glass.svg';
                break;
            case 'vegetable':
                return 'vegetable.svg';
                break;
            case 'fish':
                return 'fish.svg';
                break;
            case 'net':
                return 'net.svg';
                break;
            case 'boulter':
                return 'boulter.svg';
                break;
            case 'fender':
                return 'fender.svg';
                break;
            case 'wood':
                return 'wood.svg';
                break;
            case 'tree':
                return 'tree.svg';
                break;
            case 'container':
                return 'container.svg';
                break;
        }
    }

    function buildPopup(marker) {

        var markerText = '';
        var feature = marker['properties'];

        markerText += '<img src="css/svg/litters-b/' + chooseIcon(feature) + '" />';

        if (feature ['date_time'] !== '')
            markerText += '<p><b>date_time =</b> ' + new Date(feature['date_time']).toLocaleString() + '<br/>';

        markerText += '<b>position =</b> lat ' + feature ['latitude'] + ', lon ' + feature ['longitude'] + '<br/>';

        if (feature ['id'] !== '')
            markerText += '<b>id =</b> ' + feature['id'] + '<br/>';

        if (feature ['litter'] !== '')
            markerText += '<b>litter =</b> ' + feature['litter'] + '<br/>';

        if (feature ['note'] !== '')
            markerText += '<b>note =</b> ' + feature['note'] + '<br/>';

        markerText += '<a href="javascript:void(0)" class="" onclick="dbFunction.detailLitter('
            + feature['id']
            + '); ">delete</a>';


        return markerText;
    }

    function showTrack() {
        if (jsonTrack !== '') {
            var trackJson = L.geoJson(JSON.parse(jsonTrack), {
                "color": "red",
                "weight": 5,
                "opacity": 1
            }).addTo(map);
            // layerControl.addOverlay(trackJson, "track");
            map.fitBounds(trackJson.getBounds(), {'padding': [20, 20]});
            jsonTrack = '';
        }
    }

    function showLitters() {
        if (littersJson !== '') {
            var geojson = L.geoJson(JSON.parse(littersJson), {
                pointToLayer: function (feature, latlng) {
                    var icon = 'css/svg/litters-w/' + chooseIcon(feature['properties']);
                    var marker = L.marker(latlng, {icon: new litterIcon({iconUrl: icon})});
                    var markerText = buildPopup(feature, true, latlng);
                    marker.bindPopup(markerText);
                    return marker;
                }
            });
            geojson.addTo(map);
            // layerControl.addOverlay(geojson, "litters");
            // map.fitBounds(geojson.getBounds(), {'padding': [10,10]});
        }
    }

    if (map !== null) {

        showTrack();
        showLitters();

    } else if (map === null || map === 'undefined') {

        map = new L.map('map', {
            zoomControl: false,
            maxZoom: 19,
            unloadInvisibleTiles: false,
            detectRetina: false,
            reuseTiles: true,
            minZoom: 2,
            bounceAtZoomLimits: false
        }).setView([44.390290, 8.938975], 13); // .fitWorld();

        var follow = 0;

        var locateControl = L.Control.extend({

            options: {
                position: 'bottomright'
            },

            onAdd: function (map) {
                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

                container.style.backgroundColor = 'none';
                container.style.border = 'none';
                container.style.boxShadow = 'none';
                container.style.backgroundImage = "url(css/svg/target-1.svg)";
                container.style.backgroundSize = "40px 40px";
                container.style.width = '40px';
                container.style.height = '40px';

                container.onclick = function () {
                    follow = 1 - follow;
                    if (follow === 1) {
                        watch();
                        container.style.backgroundImage = "url(css/svg/target-2.svg)";
                    } else {
                        unWatch();
                        container.style.backgroundImage = "url(css/svg/target-1.svg)";
                    }
                };
                return container;
            }
        });

        var Icon = L.icon({
            iconUrl: 'css/svg/map-pointer.svg',
            //shadowUrl: 'leaf-shadow.png',
            iconSize: [10, 10], // size of the icon
            shadowSize: [0, 0], // size of the shadow
            iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
            shadowAnchor: [0, 0],  // the same for the shadow
            popupAnchor: [-0, -20] // point from which the popup should open relative to the iconAnchor
        });

        var osmTile = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            unloadInvisibleTiles: false,
            detectRetina: false,
            reuseTiles: true,
            minZoom: 2,
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // var Thunderforest_Landscape = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
        //     unloadInvisibleTiles: true,
        //     detectRetina: true,
        //     reuseTiles: true,
        //     attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // });

        var googleSat = L.tileLayer('https://mts{s}.google.com/vt/lyrs=s@186112443&hl=x-local&src=app&x={x}&y={y}&z={z}&s=Galile', {
            subdomains: '0123',
            maxZoom: 19,
            unloadInvisibleTiles: false,
            detectRetina: false,
            reuseTiles: true,
            minZoom: 2,
            attribution: '&copy; Google Maps'
        });

        var openseamap = new L.TileLayer('http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
            maxZoom: 19,
            unloadInvisibleTiles: false,
            detectRetina: false,
            reuseTiles: true,
        }).addTo(map);

        // var obm = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
        //     unloadInvisibleTiles: true,
        //     detectRetina: true,
        //     reuseTiles: true,
        //     attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
        // });

        var baseMaps = {
            "OpenStreetMap": osmTile,
            // "landscape": Thunderforest_Landscape,
            "Google Satellite": googleSat,
            // "obm": obm,
        };

        var overlayMaps = {
            'sea marks': openseamap,
        };

        var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

        map.addControl(new locateControl());

        showTrack();
        showLitters();

        var scale = L.control.scale().addTo(map);

        // placeholders for the L.marker and L.circle representing user's current position and accuracy
        var current_position, current_accuracy;

        function onLocationFound(e) {
            // if position defined, then remove the existing position marker and accuracy circle from the map
            if (current_position) {
                map.removeLayer(current_position);
                map.removeLayer(current_accuracy);
            }
            var radius = Math.round(e.accuracy / 2);
            current_position = L.marker(e.latlng, {
                icon: Icon,
                bounceAtZoomLimits: false
            }).addTo(map)/*.bindPopup("You are within " + radius + " meters from this point").openPopup()*/;
            current_accuracy = L.circle(e.latlng, radius).addTo(map);
        }

        function onLocationError(e) {
            openAlert(e.message);
        }

        // locate();

        function locate() {
            map.locate({setView: true});
        }

        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);

        function watch() {
            map.locate({
                setView: true,
                maximumAge: 3000,
                watch: false,
                enableHighAccuracy: true,
                maxZoom: 16,
                timeout: 10000
            });
        }

        function unWatch() {
            map.stopLocate();
            map.removeLayer(current_position);
            map.removeLayer(current_accuracy);
        }

    }
}


// ---------------------------------- user ---------------------------->>

function validateSignUpForm(username, password, confirmPass, email) {
    var msg = '';
    if (username === "") msg += lang.msg_user_name_invalid;
    if (password === "") msg += lang.msg_user_password_invalid;
    if (confirmPass === "" || confirmPass !== password) msg += lang.msg_user_confirmPass_invalid;
    if (email === "") msg += lang.msg_user_email_invalid;

    if (msg !== '') {
        openAlert(msg);
        msg = '';
        //document.getElementById("validateMessage").innerHTML = msg;
        return false;

    }

    connectToServerRegistration(username, password, email, user_id);
}

function validateloginForm(email, password) {
    var msg = '';
    if (password === "") msg += lang.msg_user_password_invalid;
    if (email === "") msg += lang.msg_user_email_invalid;

    if (msg !== '') {
        openAlert(msg);
        msg = '';
        // document.getElementById("validateMessage").innerHTML = msg;
        return false;

    }
    connectToServerLogin(email, password);
}

function connectToServerRegistration(username, password, email, user_id) {

    var dataToSend = 'user_id=' + user_id + '&username=' + username + '&password=' + password + '&email=' + email + '&signup=';
    var xhttp;
    if (!window.XMLHttpRequest) {
        openAlert(lang.msg_connection_error);
        return false;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("curtain").style.display = "block";
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("spinner").style.display = "none";
            document.getElementById("curtain").style.display = "none";
            switch (this.responseText) {
                case 'exist':
                    openAlert(lang.msg_user_exist);
                    break;
                case 'failure':
                    openAlert(lang.msg_user_failure);
                    break;
                case 'conf_mail_ok':
                    openAlert(lang.msg_user_mail_sent);
                    break;
                case 'conf_mail_fail':
                    openAlert(lang.msg_user_mail_fail);
                    break;
                default :
                    console.log(this.responseText);
            }
        }
    };

    xhttp.open('POST', 'https://www.marinelittertracker.org/user/function.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.timeout = 8000; // Set timeout to 8 seconds (8000 milliseconds)
    xhttp.ontimeout = function () {
        openAlert(lang.msg_connection_timeout);
        xhttp.abort();
        document.getElementById("spinner").style.display = "none";
    };
    xhttp.send(dataToSend);
}

function connectToServerLogin(email, password) {

    var dataToSend = 'email=' + email + '&password=' + password + '&login=';
    var xhttp;

    if (!window.XMLHttpRequest) {
        openAlert(lang.msg_connection_error);
        return false;
    }

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("curtain").style.display = "block";
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("spinner").style.display = "none";
            document.getElementById("curtain").style.display = "none";
            switch (this.responseText) {
                case 'login fail':
                    openAlert(lang.msg_logIn_fail);
                    break;
                case 'user not active':
                    openAlert(lang.msg_user_not_active);
                    break;
                default :
                    dbFunction.logInApp(this.responseText); // alert(this.responseText);
            }
        }
    };

    xhttp.open('POST', 'https://www.marinelittertracker.org/user/function.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.timeout = 8000; // Set timeout to 8 seconds (8000 milliseconds)
    xhttp.ontimeout = function () {
        openAlert(lang.msg_connection_timeout);
        xhttp.abort();
        document.getElementById("spinner").style.display = "none";
    };
    xhttp.send(dataToSend);
}

function signUp() {
    var username = document.forms['signUpForm']['username'].value;
    var password = document.forms['signUpForm']['password'].value;
    var confirmPass = document.forms['signUpForm']['confirmPass'].value;
    var email = document.forms['signUpForm']['email'].value;

    testNetwork();
    if (testNetwork() === 'No network') {
        openAlert(lang.msg_network_error);
        return false;
    }
    validateSignUpForm(username, password, confirmPass, email);

}

function logIn() {
    var email = document.forms['logInForm']['logInEmail'].value;
    var password = document.forms['logInForm']['logInPassword'].value;
    testNetwork();
    if (testNetwork() === 'No network') {
        openAlert(lang.msg_network_error);
        return false;
    }
    validateloginForm(email, password);

}

// ---------------------------------- app activation ---------------------------->>

function generateAnonymousUser() {
    console.log('anonimous');
    var username = 'MarineLitterTracker';
    var password = 'automatic';
    var email = 'mail@marinelittertracker.org';
    var deviceData = [];
    deviceData.push(device.model);
    deviceData.push(device.platform);
    deviceData.push(device.uuid);
    deviceData.push(device.version);
    deviceData.push(device.manufacturer);
    deviceData.push(device.isVirtual);
    deviceData.push(device.serial);
    // var deviceData = JSON.stringify(deviceData);

    testNetwork();
    if (testNetwork() === 'No network') {
        openAlert(lang.msg_network_error);
        return false;
    }
    connectToServerAnonymous(username, password, email, deviceData);
}

function connectToServerAnonymous(username, password, email, deviceData) {

    var dataToSend = 'username=' + username + '&password=' + password + '&email=' + email + '&deviceData=' + deviceData + '&anonymous=';
    var xhttp;
    if (!window.XMLHttpRequest) {
        openAlert(lang.msg_connection_error);
        return false;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("curtain").style.display = "block";
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("spinner").style.display = "none";
            document.getElementById("curtain").style.display = "none";
            switch (this.responseText) {
                case 'app_act_fail':
                    openAlert(lang.msg_app_act_fail);
                    break;
                case 'app_act_mail_error_ok':
                    openAlert(lang.msg_app_act_mail_error_ok);
                    break;
                case 'app_act_mail_error_fail':
                    openAlert(lang.msg_app_act_mail_error_fail);
                default :
                    dbFunction.setDefaultUser(this.responseText);
            }
        }
    };
    xhttp.open('POST', 'https://www.marinelittertracker.org/user/function.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.timeout = 8000; // Set timeout to 8 seconds (8000 milliseconds)
    xhttp.ontimeout = function () {
        openAlert(lang.msg_connection_timeout);
        xhttp.abort();
        document.getElementById("spinner").style.display = "none";
    };
    xhttp.send(dataToSend);
}

// ---------------------------------- upload ---------------------------->>

function uploadPrepare() {
    testNetwork();
    if (testNetwork() === 'No network') {
        document.getElementById('uploadIcon').innerHTML = '<img class="pageIcon" src="css/svg/cloud-w-error.svg">';
        document.getElementById('uploadNetworkMessage').innerHTML = lang.msg_network_error;
        document.getElementById('uploadButton').type = 'hidden';
        return false;
    } else {
        document.getElementById('uploadIcon').innerHTML = '<img class="pageIcon" src="css/svg/cloud-w.svg">';
        document.getElementById('uploadNetworkMessage').innerHTML = lang.msg_network_connection + testNetwork();
        document.getElementById('uploadButton').type = 'button';
        dbFunction.checkUserUpload();
        document.getElementById('uploadUserWarning').innerHTML = lang.msg_upload_user_warning;
    }
}

function connectToUploadData(dataToUpload) {


    var dataToSend = 'data= ' + dataToUpload;
    var xhttp;

    if (!window.XMLHttpRequest) {
        openAlert(lang.msg_connection_error);
        return false;
    }

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("curtain").style.display = "block";
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("spinner").style.display = "none";
            document.getElementById("curtain").style.display = "none";
            switch (this.responseText) {
                case 'server db updated':
                    openAlert(lang.msg_data_send_ok);
                    break;
                default :
                    console.log(this.responseText); // openAlert(this.responseText);
                    openAlert(lang.msg_data_send_fail);
            }
        }
    };

    xhttp.open('POST', 'https://www.marinelittertracker.org/data/dataUp.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.timeout = 60000; // Set timeout to 60 seconds (60000 milliseconds)
    xhttp.ontimeout = function () {
        openAlert(lang.msg_connection_timeout);
        xhttp.abort();
        document.getElementById("spinner").style.display = "none";
    };
    xhttp.send(dataToSend);

}

function uploadData() {
    dbFunction.getDataToUpload();
}

// ---------------------------------- info & licence page ---------------------------->>

function getInfo() {
    document.getElementById('info_content').innerHTML = lang.msg_info;
}

function getlicence() {
    document.getElementById('licence_content').innerHTML = lang.msg_licence;
}
