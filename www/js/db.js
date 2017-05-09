function dbFunction() {

    var Track_createTable = "CREATE TABLE IF NOT EXISTS Track (id integer primary key autoincrement, user_id integer, date_time integer, label text, note text, continue integer)";
    var Track_selectAll = "SELECT * FROM Track";
    var Track_selectOne = "SELECT * FROM Track WHERE id=?";
    var Track_insert = "INSERT INTO Track (user_id, date_time, label, note, continue) VALUES (?,?,?,?,?)";
    var Track_update = "UPDATE Track SET user_id=?, date_time=?, label = ?, note = ?, continue = ? WHERE id=?";
    var Track_delete = "DELETE FROM Track WHERE date_time=?";
    var Track_dropTable = "DROP TABLE IF EXISTS Track";

    var Marker_createTable = "CREATE TABLE IF NOT EXISTS Marker (id integer primary key autoincrement, track_dt integer, user_id integer, date_time integer, latitude real, longitude real)";
    var Marker_selectAll = "SELECT * FROM Marker";
    var Marker_selectTrack = "SELECT * FROM Marker WHERE track_dt=?";
    var Marker_insert = "INSERT INTO Marker (track_dt, user_id, date_time, latitude, longitude) VALUES (?,?,?,?,?)";
    var Marker_update = "UPDATE Marker SET track_dt = ?, user_id = ?, datetime = ?, latitude = ?, longitude = ?";
    var Marker_delete = "DELETE FROM Marker WHERE track_dt = ?";
    var Marker_dropTable = "DROP TABLE IF EXISTS Marker";

    var Litter_createTable = "CREATE TABLE IF NOT EXISTS Litter (id integer primary key autoincrement, user_id integer, litter text, date_time integer, latitude real, longitude real, note text)";
    var Litter_selectAll = "SELECT * FROM Litter";
    var Litter_selectOne = "SELECT * FROM Litter WHERE id=?";
    var Litter_insert = "INSERT INTO Litter (user_id, litter, date_time, latitude, longitude, note) VALUES (?,?,?,?,?,?)";
    var Litter_update = "UPDATE Litter SET litter = ?, datetime = ?, latitude = ?, longitude = ? note = ?";
    var Litter_delete = "DELETE FROM Litter WHERE id = ?";
    var Litter_dropTable = "DROP TABLE IF EXISTS Litter";

    var Setting_createTable = "CREATE TABLE IF NOT EXISTS Setting (id integer primary key autoincrement, label text, value integer)";
    var Setting_selectAll = "SELECT * FROM Setting";
    var Setting_selectOne = "SELECT * FROM Setting WHERE id=?";
    var Setting_insert = "INSERT INTO Setting (label, value) VALUES (?,?)";
    var Setting_update = "UPDATE Setting SET value = ? WHERE id=?";
    var Setting_delete = "DELETE FROM Setting WHERE id = ?";
    var Setting_dropTable = "DROP TABLE IF EXISTS Setting";

    var User_createTable = "CREATE TABLE IF NOT EXISTS User (id integer, username text, password text, hash text, email text, reg_date integer, last_login integer, active integer)";
    var User_selectAll = "SELECT * FROM User";
    var User_selectOne = "SELECT * FROM User WHERE id=?";
    var User_insert = "INSERT INTO User (id, username, password, hash, email, reg_date, last_login, active) VALUES (?,?,?,?,?,?,?,?)";
    var User_update_password = "UPDATE User SET password = ?, last_login = ? WHERE id=?";
    var User_update_all = "UPDATE User SET username = ?, password = ?, email = ? WHERE id=?";
    var User_delete = "DELETE FROM User WHERE id = ?";
    var User_dropTable = "DROP TABLE IF EXISTS User";

    var dataset;
    var DataType;

    function onSuccess(msg) {
        console.log('Success: ' + msg);
    }

    function onError(tx, error) {
        console.log(error.message);
    }

//--------------------------------------------- create tables ---------------------------------

    this.createTableTrack = function () {
        // db.transaction(function (tx) {
        //     tx.executeSql(Track_dropTable, [], onSuccess('track table dropped'), onError);
        // });
        db.transaction(function (tx) {
            tx.executeSql(Track_createTable, [], onSuccess('track table created'), onError);
        });
    };

    this.createTableMarker = function () {
        // db.transaction(function (tx) {
        //     tx.executeSql(Marker_dropTable, [], onSuccess('marker table dropped'), onError);
        // });
        db.transaction(function (tx) {
            tx.executeSql(Marker_createTable, [], onSuccess('marker table created'), onError);
        });
    };

    this.createTableLitter = function () {
        // db.transaction(function (tx) {
        //     tx.executeSql(Litter_dropTable, [], onSuccess('litter table dropped'), onError);
        // });
        db.transaction(function (tx) {
            tx.executeSql(Litter_createTable, [], function () {
                onSuccess('litter table created');
                dbFunction.getLittersToMap();
            }, onError);
        });
    };

    this.createTableSetting = function () {
        // db.transaction(function (tx) {
        //     tx.executeSql(Setting_dropTable, [], onSuccess('setting table dropped'), onError);
        // });
        db.transaction(function (tx) {
            tx.executeSql(Setting_createTable, [], function () {
                dbFunction.setDefaultSettings();
                onSuccess('setting table created');
            }, onError);
        });
    };

    this.createTableUser = function () {
        // db.transaction(function (tx) {
        //     tx.executeSql(User_dropTable, [], onSuccess('user table dropped'), onError);
        // });
        db.transaction(function (tx) {
            tx.executeSql(User_createTable, [], function () {
                onSuccess('user table created');
                dbFunction.checkUserOnStartUp();
            }, onError);
        });
    };

//--------------------------------------------- drop tables ---------------------------------

    this.dropTableTrack = function () {
        db.transaction(function (tx) {
            tx.executeSql(Track_dropTable, [], onSuccess('track table dropped'), onError);
        });
    };

    this.dropTableMarker = function () {
        db.transaction(function (tx) {
            tx.executeSql(Marker_dropTable, [], onSuccess('marker table dropped'), onError);
        });
    };

    this.dropTableLitter = function () {
        db.transaction(function (tx) {
            tx.executeSql(Litter_dropTable, [], onSuccess('litter table dropped'), onError);
        });
    };

    this.dropTableSetting = function () {
        db.transaction(function (tx) {
            tx.executeSql(Setting_dropTable, [], onSuccess('setting table dropped'), onError);
        });
    };

    this.dropTableUser = function () {
        db.transaction(function (tx) {
            tx.executeSql(User_dropTable, [], onSuccess('user table dropped'), onError);
        });
    };

//--------------------------------------------- tracking functions --------------------------

    this.newTrack = function () {
        db.transaction(function (tx) {
            tx.executeSql("SELECT id FROM User", [], function (tx, results) {
                var _date_time = new Date().getTime();
                var _label = 'track';
                var _note = 'some note';
                var _continue = 1;
                if (results.rows.length !== 0) user_id = results.rows.item(0).id;
                tx.executeSql(Track_insert, [user_id, _date_time, _label, _note, _continue], function (tx, result) {
                    if (result.insertId !== 0) {
                        track = result.insertId;
                        track_dt = _date_time;
                        tracking = 1;
                    }
                }, onError);
            }, onError);
        });
    };

    this.listTracks = function () {
        document.getElementById("tracksListUl").innerHTML = '';
        db.transaction(function (tx) {
            tx.executeSql(Track_selectAll, [], function (tx, results) {
                var length = results.rows.length;
                if (length === 0) {
                    dbFunction.dropTableTrack();
                    dbFunction.createTableTrack();
                    dbFunction.dropTableMarker();
                    dbFunction.createTableMarker();
                    document.getElementById("tracksListUl").innerHTML = lang.msg_track_no_track;
                    // openAlert(lang.msg_track_no_track);
                    return false;
                }
                var items = '';
                for (var i = 0; i < length; i++) {
                    items += '<li>' + results.rows.item(i).label + '-' + results.rows.item(i).id
                        + '<a href="javascript:void(0)" class="" onclick="dbFunction.trackDetail('
                        + results.rows.item(i).id + ');"><img src="css/svg/arrow-d-w.svg"></a></li>'
                }
                document.getElementById("tracksListUl").innerHTML = items;
            }, onError);
        });
    };

    this.trackDetail = function (trackId) {
        document.getElementById("trackDetailUl").innerHTML = '';
        db.transaction(function (tx) {
            tx.executeSql(Track_selectOne, [trackId], function (tx, results) {
                var row = results.rows.item(0);
                var item = '<li><a href="javascript:void(0)" class="" onclick="showPage(\'tracksList\'); closeNav();"><img src="css/svg/arrow-l-w.svg"></a></li>';
                for (var key in row) {
                    // if (key === 'date_time') {
                    //     item += '<li><b>'+key+': </b>'+ new Date(row[key]).toLocaleString()+'</li>';
                    // } else {
                    //     item += '<li><b>'+key+': </b>'+row[key]+'</li>';
                    // }
                    item += '<li><b>' + key + ': </b>' + row[key] + '</li>';
                }
                var track_dt = row['date_time'];
                tx.executeSql(Marker_selectTrack, [track_dt], function (tx, results) {
                    var length = results.rows.length;
                    item += '<li><b> total points: </b>' + length + '</li>';
                    item += '<li><a href="javascript:void(0)" class="" onclick="dbFunction.getTrackToView(' + track_dt + ');">' + lang.msg_track_view + ' <img src="css/svg/map-w.svg"></a></li>';
                    item += '<fieldset><input type="button" class="button" value="delete" onclick="dbFunction.deleteTrack(' + track_dt + ')"></fieldset>';
                    trackId = '';
                    document.getElementById("trackDetailUl").innerHTML = item;
                    showPage('trackDetail');
                }, onError);
            }, onError);
        });
    };

    this.deleteTrack = function (track_dt) {
        db.transaction(function (tx) {
            tx.executeSql(Track_delete, [track_dt], function (tx) {
                    tx.executeSql(Marker_delete, [track_dt], function () {
                        showPage('tracksList');
                    }, onError);
                }
                , onError);
        }, onError);
    };

    this.newMarker = function () {
        db.transaction(function (tx) {
            //var track_dt = this.newTrack();
            var _user = user_id;
            var _track_dt = track_dt;
            var _date_time = new Date().getTime();
            var _lat = lat;
            var _lon = lon;
            tx.executeSql(Marker_insert, [_track_dt, _user, _date_time, _lat, _lon], function () {
            }, onError);
        });
    };

    this.getTrackToView = function (track_dt) {
        db.transaction(function (tx) {
            // tx.executeSql("SELECT * FROM Marker WHERE track_dt=?", [trackToView], function (tx, results) {
            tx.executeSql(Marker_selectTrack, [track_dt], function (tx, results) {
                var length = results.rows.length;
                var geoj = {"type": "LineString", "coordinates": {}};
                var ft = [];
                for (var i = 0; i < length; i++) {
                    ft[i] = [results.rows.item(i)['longitude'], results.rows.item(i)['latitude']];
                }
                geoj['coordinates'] = ft;
                jsonTrack = JSON.stringify(geoj);
                showPage('page3');
            }, onError);
        });
    };

//--------------------------------------------- litters functions ---------------------------------

    this.newLitter = function (litter, lat, lon, note) {
        db.transaction(function (tx) {
            tx.executeSql("SELECT id FROM User", [], function (tx, results) {
                var _litter = litter;
                var _date_time = new Date().getTime();
                var _lat = lat;
                var _lon = lon;
                var _note = note;
                if (results.rows.length !== 0) {
                    user_id = results.rows.item(0).id;
                } else {
                    user_id = 0;
                }
                tx.executeSql(Litter_insert, [user_id, _litter, _date_time, _lat, _lon, _note], function (result) {
                }, onError);
            }, onError);
        });
    };

    this.listLiters = function () {
        db.transaction(function (tx) {
            tx.executeSql(Litter_selectAll, [], function (tx, results) {
                var length = results.rows.length;

                if (length === 0) {
                    document.getElementById("littersListUl").innerHTML = lang.msg_litter_no_litter;
                    // openAlert(lang.msg_litter_no_litter);
                    return false;
                }
                var items = '<tr><th>Id</th><th>Litter</th><th>date</th><th> </th></tr>';
                for (var i = 0; i < length; i++) {
                    var date = new Date(results.rows.item(i).date_time).toUTCString().split(' ');
                    date = date[1] + ' ' + date[2] + ' ' + date[3];
                    items += '<tr><td>' + results.rows.item(i).id + '</td><td>'
                        + results.rows.item(i).litter + '</td><td>'
                        + date + '</td><td>'
                        + '<a href="javascript:void(0)" class="" onclick="dbFunction.detailLitter('
                        + results.rows.item(i).id
                        + '); "><img src="css/svg/arrow-d-w.svg"></a></td></tr>';
                }
                document.getElementById("littersListUl").innerHTML = items;
            }, onError);
        });
    };

    this.detailLitter = function (litter_id) {
        dbFunction.litterIcon(litter_id);
        dbFunction.litterDetailList(litter_id);
        showPage('litterDetail');
    };

    this.litterDetailList = function (litter_id) {
        document.getElementById("littersDetailUl").innerHTML = '';
        db.transaction(function (tx) {
            tx.executeSql(Litter_selectOne, [litter_id], function (tx, results) {
                var row = results.rows.item(0);
                var item = '<li><a href="javascript:void(0)" class="" onclick="showPage(\'littersList\'); closeNav();"><img src="css/svg/arrow-l-w.svg"></a></li>';
                for (var key in row) {
                    // if (key === 'date_time') {
                    //     item += '<li><b>'+key+': </b>'+ new Date(row[key]).toLocaleString()+'</li>';
                    // } else {
                    //     item += '<li><b>'+key+': </b>'+row[key]+'</li>';
                    // }
                    item += '<li><b>' + key + ': </b>' + row[key] + '</li>';
                }
                item += '<fieldset><input type="button" class="button" value="delete" onclick="dbFunction.deleteLitter(' + litter_id + ')"></fieldset>';
                litter_id = '';
                document.getElementById("littersDetailUl").innerHTML = item;
            }, onError);
        });
    };

    this.deleteLitter = function (litter_id) {
        db.transaction(function (tx) {
            tx.executeSql(Litter_delete, [litter_id], function () {
                showPage('littersList');
            }, onError);
        }, onError);
    };

    this.litterIcon = function (litter_id) {
        document.getElementById("littersDetailIcon").innerHTML = '';
        db.transaction(function (tx) {
            tx.executeSql(Litter_selectOne, [litter_id], function (tx, results) {
                var row = results.rows.item(0);
                switch (row['litter']) {
                    case 'plastic bottle':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/plastic_bottle.svg">';
                        break;
                    case 'plastic leaf':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/plastic_leaf.svg">';
                        break;
                    case 'can':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/can.svg">';
                        break;
                    case 'glass':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/glass.svg">';
                        break;
                    case 'vegetable':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/vegetable.svg">';
                        break;
                    case 'fish':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/fish.svg">';
                        break;
                    case 'net':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/net.svg">';
                        break;
                    case 'boulter':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/boulter.svg">';
                        break;
                    case 'fender':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/fender.svg">';
                        break;
                    case 'wood':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/wood.svg">';
                        break;
                    case 'tree':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/tree.svg">';
                        break;
                    case 'container':
                        document.getElementById("littersDetailIcon").innerHTML = '<img src="css/svg/litters-w/container.svg">';
                        break;
                    default:
                }
            }, onError);
        });
    };

    this.getLittersToMap = function () {
        db.transaction(function (tx) {
            tx.executeSql(Litter_selectAll, [], function (tx, results) {
                var length = results.rows.length;
                if (length !== 0) {
                    var geoj = {"type": "FeatureCollection", "features": {}};
                    var ft = [];
                    for (var i = 0; i < length; i++) {
                        var feat = {
                            "type": "Feature",
                            "properties": [],
                            "geometry": {
                                "type": "Point",
                                "coordinates": []
                            }
                        };
                        feat["geometry"]["coordinates"] = [results.rows.item(i)['longitude'], results.rows.item(i)['latitude']];
                        feat["properties"] = results.rows.item(i);
                        ft[i] = feat;
                    }
                    geoj['features'] = ft;
                    littersJson = JSON.stringify(geoj);
                }
            }, onError);
        });
    };

//--------------------------------------------- collect data to upload  ---------------------------------

    this.getDataToUpload = function () {
        db.transaction(function (tx) {
            tx.executeSql(Litter_selectAll, [], function (tx, results) {
                var data = {litters: [], tracks: [], markers: []};
                var length = results.rows.length;
                if (length !== 0) {
                    for (var i = 0; i < length; i++) {
                        data.litters.push(results.rows.item(i));
                    }
                }
                tx.executeSql(Track_selectAll, [], function (tx, results) {
                    var length = results.rows.length;
                    if (length !== 0) {
                        for (var i = 0; i < length; i++) {
                            data.tracks.push(results.rows.item(i));
                        }
                        tx.executeSql(Marker_selectAll, [], function (tx, results) {
                            var length = results.rows.length;
                            if (length !== 0) {
                                for (var i = 0; i < length; i++) {
                                    data.markers.push(results.rows.item(i));
                                }
                            }
                            var dataToUpload = JSON.stringify(data);
                            connectToUploadData(dataToUpload);
                        }, onError);
                    }
                }, onError);
            }, onError);
        });
    };

//--------------------------------------------- setting functions ---------------------------------

    this.setDefaultSettings = function () {
        db.transaction(function (tx) {
            tx.executeSql(Setting_selectAll, [], function (tx, results) {
                if (results.rows.length === 0) {
                    tx.executeSql(Setting_insert, ['gpsFormat', 0], function (result) {
                    }, onError); // 0=dd, 1=dms
                    gpsFormat = 0;
                    tx.executeSql(Setting_insert, ['lang', 0], function (result) {
                    }, onError); // 0=lang_en, 1=lang_it, 2=lang_fr
                    lang = lang_en;
                    tx.executeSql(Setting_insert, ['trackFreq', 30000], function (result) {
                    }, onError); // 3000 (3sec), 30000 (30sec), 60000 (1min), 180000 (3min)
                    trackFreq = 3000;
                    console.log('default setting ok');
                } else {
                    console.log('no changes in settings');
                }
            }, onError);
        });
        dbFunction.getSettings();
    };

    this.getSettings = function () {
        db.transaction(function (tx) {
            tx.executeSql(Setting_selectAll, [], function (tx, results) {
                var length = results.rows.length;
                var items = '<tr><th>setting</th><th width="144px">value</th><th>set</th></tr>';
                for (var i = 0; i < length; i++) {
                    var label = results.rows.item(i).label;
                    var value = results.rows.item(i).value;
                    var showVal = '';
                    switch (label) {
                        case 'gpsFormat':
                            if (value === 0) {
                                showVal = 'Decimal Deg';
                            } else if (value === 1) {
                                showVal = 'Deg Min Sec';
                            }
                            gpsFormat = value;
                            items += '<tr><td>GPS Format:</td><td>'
                                + showVal + '</td><td>'
                                + '<a href="javascript:void(0)" class="" onclick="dbFunction.setGpsFormat('
                                + results.rows.item(i).id
                                + '); "><img src="css/svg/arrow-d-w.svg"></a></td></tr>';
                            break;
                        case 'lang':
                            if (value === 0) {
                                showVal = 'English';
                                lang = lang_en;
                            }
                            if (value === 1) {
                                showVal = 'Italiano';
                                lang = lang_it;
                            }
                            if (value === 2) {
                                showVal = 'Français';
                                lang = lang_fr;
                            }
                            items += '<tr><td>Language:</td><td>'
                                + showVal + '</td><td>'
                                + '<a href="javascript:void(0)" class="" onclick="dbFunction.setlang('
                                + results.rows.item(i).id
                                + '); "><img src="css/svg/arrow-d-w.svg"></a></td></tr>';
                            break;
                        case 'trackFreq':
                            if (value === 3000) {
                                showVal = '3 sec.';
                                openAlert(lang.msg_track_freq_3sec);
                            }
                            if (value === 30000) {
                                showVal = '30 sec.';
                            }
                            if (value === 60000) {
                                showVal = '1 min.';
                            }
                            if (value === 180000) {
                                showVal = '3 min.';
                            }
                            trackFreq = value;
                            items += '<tr><td>Tracking freq:</td><td>'
                                + showVal + '</td><td>'
                                + '<a href="javascript:void(0)" class="" onclick="dbFunction.setTrackFrequency('
                                + results.rows.item(i).id
                                + '); "><img src="css/svg/arrow-d-w.svg"></a></td></tr>';
                            break;
                        default:
                    }
                }
                document.getElementById("settingListUl").innerHTML = items;
            }, onError);
        });
    };

    this.setGpsFormat = function (id) {
        gpsFormat = 1 - gpsFormat;
        db.transaction(function (tx) {
            tx.executeSql(Setting_update, [gpsFormat, id], function (result) {
            }, function (error) {
                console.log('Setting update error: ' + error.message);
            });
        });
        dbFunction.getSettings();
        // getPosition(); active if max age and timeout of getGps will increase
    };

    this.setlang = function (id) {
        var lang_name = '';
        switch (lang) {
            case lang_en:
                lang_name = 1;
                lang = lang_it;
                break;
            case lang_it:
                lang_name = 2;
                lang = lang_fr;
                break;
            case lang_fr:
                lang_name = 0;
                lang = lang_en;
        }
        db.transaction(function (tx) {
            tx.executeSql(Setting_update, [lang_name, id], function (result) {
            }, function (error) {
                console.log('Setting update error: ' + error.message);
            });
        });
        dbFunction.getSettings();
    };

    this.setTrackFrequency = function (id) {
        if (tracking === 1) {
            openAlert(lang.msg_track_freq_fail);
            return false;
        }
        var frequency = '';
        switch (trackFreq) {
            case 3000:
                frequency = 30000;
                break;
            case 30000:
                frequency = 60000;
                break;
            case 60000:
                frequency = 180000;
                break;
            case 180000:
                frequency = 3000;
        }
        db.transaction(function (tx) {
            tx.executeSql(Setting_update, [frequency, id], function (result) {
            }, function (error) {
                console.log('Setting update error: ' + error.message);
            });
        });
        dbFunction.getSettings();
    };

//--------------------------------------------- user and login functions ---------------------------------

    this.setDefaultUser = function (defaultData) {
        if (defaultData === 'login fail') {
            openAlert(lang.msg_logIn_fail);
            return false;
        }
        var userData = JSON.parse(defaultData);
        var user_id = userData['user_id'];
        var username = userData['username'];
        var password = userData['password'];
        var hash = userData['hash'];
        var email = userData['email'];
        var reg_date = userData['reg_date'];
        var last_login = userData['last_login'];
        var active = userData['active'];
        db.transaction(function (tx) { // inserisce i dati utente nel db locale
            tx.executeSql(User_insert, [user_id, username, password, hash, email, reg_date, last_login, active], function () {
                // openAlert(lang.msg_app_act_ok);
                dbFunction.checkUserOnStartUp();
            }, onError);
        });
    };

    this.logInApp = function (userData) {
        var user_id = JSON.parse(userData).user_id;
        var username = JSON.parse(userData).username;
        var password = JSON.parse(userData).password;
        var hash = JSON.parse(userData).hash;
        var email = JSON.parse(userData).email;
        var reg_date = JSON.parse(userData).reg_date;
        var last_login = JSON.parse(userData).last_login;
        var active = JSON.parse(userData).active;

        db.transaction(function (tx) {
            tx.executeSql(User_selectAll, [], function (tx, results) { // controlla se c'è già un utente nel db locale
                var length = results.rows.length;
                if (length !== 0) {// elimina l'eventuale utente del db locale
                    dbFunction.dropTableUser();
                    dbFunction.createTableUser();
                }
                db.transaction(function (tx) { // inserisce i dati utente nel db locale
                    tx.executeSql(User_insert, [user_id, username, password, hash, email, reg_date, last_login, active], function () {
                        openAlert(lang.msg_logIn_ok);
                        showPage('userDetail');
                    }, onError);
                });
            }, onError);
        });
    };

    this.logOutApp = function () {
        var username = 'MarineLitterTracker';
        var password = 'automatic';
        var email = 'mail@marinelittertracker.org';
        db.transaction(function (tx) {
            tx.executeSql(User_update_all, [username, password, email, user_id], function () {
                showPage('signUp');
            }, onError);
        });

        // dbFunction.dropTableUser();
        // dbFunction.createTableUser();

    };

    this.getUserDetail = function () {
        document.getElementById("userData").innerHTML = '';
        db.transaction(function (tx) {
            tx.executeSql(User_selectAll, [], function (tx, results) {
                var length = results.rows.length;
                if (length === 0) {
                    openAlert(lang.msg_user_not_set);
                    showPage('signUp');
                    return false;
                }
                var items = '';
                for (var i = 0; i < length; i++) {
                    user_id = results.rows.item(i).id;
                    // items += '<p>id: ' + user_id + '</p>';
                    items += '<p><span class="label">username:</span><br>' + results.rows.item(i).username + '</p>';
                    items += '<p><span class="label">email:</span><br>' + results.rows.item(i).email + '</p>';
                    // items += '<p>registration date:<br>'+results.rows.item(i).reg_date +'</p>';
                    if (results.rows.item(i).username === 'MarineLitterTracker') {
                        items += '<fieldset><input type="button" class="button" value="' + lang.msg_user_form_access_button_submit + '" onclick="showPage(\'signUp\')"></fieldset>';
                    } else {
                        items += '<fieldset><input type="button" class="button" value="' + lang.msg_user_form_logOut_button_submit + '" onclick="dbFunction.logOutApp()"></fieldset>';
                    }
                }
                document.getElementById("userData").innerHTML = items;
            }, onError);
        });
    };

    this.checkUserUpload = function () {
        db.transaction(function (tx) {
            tx.executeSql(User_selectAll, [], function (tx, results) {
                var length = results.rows.length;
                if (length === 0) {
                    // non funziona più così ora bisogna verificare NON la presenza dell'id che c'è sempre ma se l'user name è !== MarineLitterTracker e la mail !== da........
                    document.getElementById('uploadButton').value = lang.msg_upload_button_anonymous;
                    document.getElementById('uploadUserMessage').innerHTML = '<a href="javascript:void(0)" class="" onclick="showPage(\'signUp\');">' + lang.msg_upload_user_msg + ' <img src="css/svg/arrow-d-w.svg"></a>';
                    document.getElementById('uploadUserMessage').style.display = "inline";
                } else {
                    for (var i = 0; i < length; i++) {
                        var user_name = results.rows.item(i).username;
                    }
                    document.getElementById('uploadButton').value = lang.msg_upload_button_default + user_name;
                    document.getElementById('uploadUserMessage').style.display = "none";
                }
            }, onError);
        });
    };

    this.checkUserOnStartUp = function () {
        db.transaction(function (tx) {
            tx.executeSql(User_selectAll, [], function (tx, results) {
                var length = results.rows.length;
                if (length === 0) {
                    generateAnonymousUser();
                } else {
                    user_detail = JSON.stringify(results.rows);
                    for (var i = 0; i < length; i++) {
                        user_id = results.rows.item(i).id;
                    }
                }
            }, function (tx, error) {
            });
        });
    }


// end of class.... bye bye!
}
