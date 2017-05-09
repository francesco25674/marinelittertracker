//------------------------------ english ------------------------------->>
var lang_en = {

    msg_app_act_ok: 'App activated',
    msg_app_act_fail: 'App activation fail!<br /> Please try again.',
    msg_app_act_mail_error_ok: 'Something wrong!<br /> Please try again.',
    msg_app_act_mail_error_fail: 'Something wrong!<br /> Check your data connection and try again.',

    msg_gps_timeout: 'Time out expired for retrieve position,<br /> Check your device settings.',
    msg_gps_fail: 'GPS not available, check your device<br /> and restart the app',

    msg_network_error: 'No data connection,<br /> Try later ... gundun!',
    msg_network_connection: 'Data connection: ',

    msg_compass_error: 'No compass detected,<br /> verify you have compass on your device.',

    msg_user_name_invalid: 'Invalid or empty username',
    msg_user_password_invalid: 'Invalid or empty password',
    msg_user_confirmPass_invalid: 'No matching or empty confirm password',
    msg_user_email_invalid: 'Invalid or empty email',
    msg_user_exist: 'You already have an account!<br /> You can login now',
    msg_user_failure: 'Failure in sign in process.<br /> Try again',
    msg_user_mail_sent: 'Confirmation mail sent.<br /> Please check your email',
    msg_user_mail_fail: 'Confirmation e-mail fail.<br /> Please use valid email',
    msg_user_not_set: 'No user logged-in.<br /> Data upload will not be possible',
    msg_user_not_active: 'No user activated.<br /> Please check your email ',


    msg_user_form_access_button_submit: 'access',
    msg_user_form_signUp_button_submit: 'sign up',
    msg_user_form_signUp_message: 'or log in',
    msg_user_form_logIn_button_submit: 'log in',
    msg_user_form_logOut_button_submit: 'log out',


    msg_upload_button_default: 'upload as ',
    msg_upload_button_anonymous: 'upload as anonymous',
    msg_upload_user_msg: 'or sign up',
    msg_upload_user_warning: '<b>Attention!</b><br /> slow data connection may cause time-out, so try when good connection is available',

    msg_logIn_ok: 'Log-in OK.<br /> You can upload your data now',
    msg_logIn_fail: 'Log-in fail.<br /> Please check your entry',
    msg_logOut_ok: 'Log out OK.<br /> You can still use the application as Anonymous User',

    msg_tracking_start: 'Start tracking boat route',
    msg_tracking_start_form: 'Start tracking',
    msg_tracking_stop: 'Stop tracking boat route',
    msg_tracking_stop_form: 'Stop tracking ',
    msg_track_no_track: 'No track to show',
    msg_track_freq_fail: 'Please stop tracking<br />before change frequency',
    msg_track_view: 'view on map',
    msg_track_freq_3sec: 'Hi tracking frequency can generate useless extra data difficult to upload.<br /> Consider to set 30 sec. or lower frequency to improve performance and prevent upload fail',

    msg_litter_note_default: 'no note',
    msg_litter_no_litter: 'No litter to show',

    msg_data_send_ok: 'Data uploaded.<br /> Thanks for sharing!',
    msg_data_send_fail: 'Data upload fail.<br /> Please try later',

    msg_info: '<h1><img src = "css/svg/navigation-2-w.svg"> Navigation Info:</h1>' +
    '<p> - Compass.<br>' +
    '- Heading.<br>' +
    '- Current GPS position (update every 30 sec.), You can change format in settings <img src = "css/svg/settings-5-w.svg">.<br>' +
    '- Date and Local Time.<br>' +
    '- Records track <img id = "trackSwitch_id" src = "css/svg/record-1.svg"> With this button you can record the route you are taking.</P> ' +

    '<h1><img src = "css/svg/flag-3.1-w.svg"> Selector floating litters.</h1>' +
    '<p>Just click on litter icon you find and automatically the App will record time and position in a local database.<br>' +
    'Data connection and internet are not required, then the measurements can also be made in deep sea navigation.<br>' +
    'The data collected will be available in online map  at: <a href="https://www.marinelittertracker.org"> www.marinelittertracker.org</a></P>' +

    '<h1><img src = "css/svg/map-w.svg"> Map (online)</h1>' +
    '<p>This is NOT a navigation map and does not replace the mandatory instruments of navigation.<br>' +
    '- Displays sea marks provided by OpenSeaMap service (lights, buoys, etc.).<br>' +
    '- Allows geolocation by pressing the button: <img src = "css/svg/target-1.svg"><br>' +
    '- The menu <img src = "css/svg/layers-2.svg"> allows you to choose between the following basic maps:' +
    ' - OpenStreetMap.<br>' +
    ' - Google Satellite.<br>' +
    'And layers:' +
    ' - Lanterns and buoys provided by OpenSeaMap.<br>' +
    ' - Floating debris detected "Litters" (under construction).<br>' +
    'The map is available only with data connection.</P>' +

    '<h1><img src = "css/svg/menu-5-w.svg"> Side Menu</h1>' +
    '<p>Provides access to the following sub-features:</P>' +

    '<h1><img src = "css/svg/route-2-w.svg"> tracked list</h1>' +
    '<p>Displays the list of recorded tracks  and (in progress) by clicking on the arrow (<img src = "css/svg/arrow-d-w.svg">) allows you to view the route on the map.</P> ' +

    '<h1><img class = "pageIcon" src = "css/svg/list-1-w.svg"> Litters list</h1>' +
    '<p>List of detected debris, clicking on the arrow (<img src = "css/svg/arrow-d-w.svg">) you can see detailed info</P> ' +

    '<h1> <img src = "css/svg/user-3-w.svg"> User Login (online)</h1>' +
    '<p>It provides the functions of Registration, Login, Logout and user info</P> ' +

    '<h1><img src = "css/svg/cloud-w.svg"> Upload (online)</h1>' +
    '<p>Allows to upload data collected to the website: www.marinelittertracker.org and join community active in preserve the sea.</P> ' +

    '<h1><img src = "css/svg/settings-5-w.svg">Preferences</h1>' +
    '<p>Allows to set:</P>' +
    '<p> - GPS format: DDD° MM\' SS.S or DDD.DDDDD°</P>' +
    '<p> - Language: English, Italian, French.</P>' +

    '<h1><img src = "css/svg/compass-w.svg">Compass detail</h1>' +
    '<p>It provides the detail of the gyroscopic sensor of your device.</P>' +

    '<h1><img src = "css/svg/satellite-w.svg"> Gps detail</h1>' +
    '<p>Shows details of the GPS sensor of your device.</P>' +

    '<h1><img src = "css/svg/wifi-w.svg"> Connection detail</h1>' +
    '<p>Provides detailed data connection is available.</P>' +

    '<h1><img src = "css/svg/info-w.svg"> info</h1>' +
    '<p>This page.</P> ' +

    '<h1><img src = "css/svg/notebook-5-w.svg"> License</h1>' +
    '<p>User license of this App, and copyright information.</P>' +

    '<h1>Known Issues:</h1>' +
    '<p> - The "navigation information" does not detect the loss or acquisition of GPS satellites as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> - The "Upload" does not detect the loss or acquisition of data connection as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> - The detail GPS does not detect the loss or acquisition of GPS satellites as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> - The detail data connection does not detect the loss or acquisition of data connection as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> You can report bugs or problems writing to: <a href="mailto:bug@marinelittertracker.org">bug@marinelittertracker.org</a></P>' +

    '<p>Thanks for Having downloaded MARINE<b>LITTER</b>TRACKER</P>',

    msg_licence: '<h1>User Licence </h1>' +
    '<p>By downloading and use of this application you explicitly agree to the following rules:</p>' +
    '<p> - This is NOT a navigation tool nor a navigation aid. Therefore it must NOT used as such.</p>' +
    '<p> - Reliability of the information provided by the map and/or compass and/or GPS cannot be guaranteed and therefore NOT be considered reliable for the purpose of navigation.</p>' +
    '<p> - No damage caused to the device on which it is installed is due to Application itself and / or its developers.</p>' +
    '<p> - No damage caused by use of this Application is due to Application itself and / or its developers.</p>' +
    '<p> - Performing Sign in and Log in, the User agree to the information provided will be used for the purposes and aims of  Application and web site www.marinelittertracker.org connected.</p>' +
    '<p> - The Application transmits recorded data to www.marinelittertracker.org website, its use implies explicit agreement of use these data by the site itself. </p>' +
    '<p> - No damage caused by the publication of the data provided can be attributed to the Application itself and / or its developers.</p>' +
    '<h1>Disclaimer of Warranty</h1>' +
    '<p>Covered Software is provided under this License on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.</p>' +
    '<h1>Limitation of Liability</h1>' +
    '<p>Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.</p>' +
    '<p>© ' + new Date().getFullYear() + ' marinelittertracker.org<br></p>' +
    '<h1>Credits</h1>' +
    '<p>Most Icons and Graphics are designed by Madebyoliver from Flaticon</p>',

    msg_connection_error: 'No connection available<br /> Please try later',
    msg_connection_timeout: 'Connection Timeout.<br /> Please try later'

};


//------------------------------ italiano ------------------------------->>
var lang_it = {

    msg_app_act_ok: 'App attivata',
    msg_app_act_fail: 'App activation fail!<br /> Please try again.',
    msg_app_act_mail_error_ok: 'Something wrong!<br /> Please try again.',
    msg_app_act_mail_error_fail: 'Something wrong!<br /> Check your data connection and try again.',

    msg_gps_timeout: 'Il gps impiega troppo tempo per collegarsi.<br /> Verifica il tuo device.',
    msg_gps_fail: 'GPS non disponibile, verifica il tuo device <br /> e rilancia l\'App',

    msg_network_error: 'Nessuna connessione dati.<br /> Riprova più tardi ... gundun!',
    msg_network_connection: 'Connessione dati: ',

    msg_compass_error: 'Nessuna bussola rilevata,<br /> verifica il tuo device.',

    msg_user_name_invalid: 'Username non valido o vuoto',
    msg_user_password_invalid: 'Password non valida o vuota',
    msg_user_confirmPass_invalid: 'Confirm password non corrisponde o é vuoto',
    msg_user_email_invalid: 'Email non valida o vuota',
    msg_user_exist: 'Hai già un account!<br /> Ora puoi accedere',
    msg_user_failure: 'Problema in registrazione.<br /> Riprova',
    msg_user_mail_sent: 'Email di attivazione inviata.<br /> Verifica la tua posta elettronica',
    msg_user_mail_fail: 'Email di attivazione NON inviata.<br /> Inserisci una mail valida',
    msg_user_not_set: 'Nessun utente registrato.<br /> L\'upload dei dati non sarà disponibile',

    msg_user_form_access_button_submit: 'accedi',
    msg_user_form_signUp_button_submit: 'iscriviti',
    msg_user_form_signUp_message: 'oppure accedi',
    msg_user_form_logIn_button_submit: 'accedi',
    msg_user_form_logOut_button_submit: 'esci',


    msg_upload_button_default: 'upload come ',
    msg_upload_button_anonymous: 'upload come anonimo',
    msg_upload_user_msg: 'oppure iscriviti',
    msg_upload_user_warning: '<b>Attenzione!</b><br /> connessioni lente possono causare il time-out del server, ritentare in presenza di connessioni più veloci',


    msg_logIn_ok: 'Log-in ok.<br /> Benvenuto!',
    msg_logIn_fail: 'Log-in fallito.<br /> Verifica email e/o password<',
    msg_logOut_ok: 'Ti sei scollegato.<br /> Puoi ancora usarla come utente anonimo.',

    msg_tracking_start: 'Inizio a tracciare la rotta',
    msg_tracking_stop: 'Interrompo il tracciamento della rotta',
    msg_track_no_track: 'Nessun tracciato da mostrare',
    msg_track_freq_fail: 'Interrompi il tracking<br />prima di cambiare la frequenza',
    msg_track_view: 'vedi nella mappa',
    msg_track_freq_3sec: 'Una frequenza di tracking troppo alta genera spesso inutili dati extra difficili da caricare sul server. <br /> Considera di utilizzare una frequenza di 30 sec. o inferiore per migliorare le performance dell\'App e prevenire il fallimento dell\'upload dei dati.',

    msg_litter_note_default: 'nessuna nota',
    msg_litter_no_litter: 'Nessun rifiuto in elenco',


    msg_data_send_ok: 'I dati raccolti sono stati inviati.<br /> Grazie della tua collaborazione!',
    msg_data_send_fail: 'Invio dei dati fallito.<br />Riprova più tardi',

    msg_info: '<h1><img src="css/svg/navigation-2-w.svg"> Informazioni di navigazione:</h1>' +
    '<p>- Bussola<br>' +
    '- Deviazione risperto al Nord.<br>' +
    '- Posizione gps attuale (aggiornamento ogni 30sec.), è possibile cambiare il formato nelle impostazioni <img src="css/svg/settings-5-w.svg">.<br>' +
    '- Data e Ora locale.<br>' +
    '- Registra tracciato <img id="trackSwitch_id" src="css/svg/record-1.svg"> con questo pulsante è possibile registrare la rotta che si sta tenendo.</p>' +

    '<h1><img src="css/svg/flag-3.1-w.svg"> Selettore detriti galleggianti.</h1>' +
    '<p>Basta premere sull\'icona corrispondente al tipo di rifiuto galleggiante incontrato e automaticamente l\'App registrerà posizione eora di rilevamento in un database locale.<br>' +
    'Non è necessaria la connessione internet, quindi i rilevamenti possono essere fatti anche nella navigazione d\'altura.<br>' +
    'I dati raccolti saranno disponibili in una mappa online all\'indirizzo: <a href="https://www.marinelittertracker.org">www.marinelittertracker.org</a></p>' +

    '<h1><img src="css/svg/map-w.svg"> Mappa (online)</h1>' +
    '<p>NON è una Carta Nautica e NON sostituisce gli strumenti obbligatori di navigazione.<br>' +
    '- Visualizza i dati forniti dal servizio OpenSeaMap (Fanali, boe, etc).<br>' +
    '- Consente la geolocalizzazione attraverso il pulsante: <img src="css/svg/target-1.svg"><br>' +
    '- Il Menu <img src="css/svg/layers-2.svg"> permette di scegliere tra le seguenti mappe di base:<br>' +
    '  -OpenStreetMap.<br>' +
    '  -Google Satellite.<br>' +
    'e di visualizzare su di esse:<br>' +
    '  - Fanali e boe forniti da OpenSeaMap.<br>' +
    '  - Detriti galleggianti rilevati "Litters" (in lavorazione).<br>' +
    'Disponibile solo in presenza di connessione dati.</p>' +

    '<h1><img src="css/svg/menu-5-w.svg"> Menu laterale</h1>' +
    '<p>Fornisce l\'accesso alle seguenti funzionalità secondarie:</p>' +

    '<h1><img src="css/svg/route-2-w.svg"> Lista tracciati</h1>' +
    '<p>Visualizza la lista dei tracciati registrati e (in lavorazione) cliccando sulla freccia (<img src="css/svg/arrow-d-w.svg">) permette di visualizzare il tracciato sulla mappa.</p>' +

    '<h1><img class="pageIcon" src="css/svg/list-1-w.svg"> Lista dei detriti</h1>' +
    '<p>Elenco dei detriti rilevati, cliccando sulla freccia (<img src="css/svg/arrow-d-w.svg">) è possibile vedere le info di dettaglio</p>' +

    '<h1><img src="css/svg/user-3-w.svg"> Login utente (online)</h1>' +
    '<p>Fornisce le funzioni di Registrazione, Login, Logout e info utente</p>' +

    '<h1><img src="css/svg/cloud-w.svg"> Upload (online)</h1>' +
    '<p>Permette di caricare i dati raccolti sul sito web: www.marinelittertracker.org e di condividere i propri rilevamenti.</p>' +

    '<h1><img src="css/svg/settings-5-w.svg"> Preferenze</h1>' +
    '<p>Consente di settare:</p>' +
    '<p>- Formato gps: DDD° MM\' SS.S, oppure DDD.DDDDD°"</p>' +
    '<p>- Lingua: Inglese, Italiano, Francese.</p>' +

    '<h1><img src="css/svg/compass-w.svg"> Dettaglio bussola</h1>' +
    '<p>Fornisce il dettaglio del rilevatore giroscopico del proprio device.</p>' +

    '<h1><img src="css/svg/satellite-w.svg"> Dettaglio gps</h1>' +
    '<p>fornisce il dettaglio del rilevatore gps del proprio device.</p>' +

    '<h1><img src="css/svg/wifi-w.svg"> Dettaglio connessione</h1>' +
    '<p>Fornisce il dettaglio della connessione dati disponibile.</p>' +

    '<h1><img src="css/svg/info-w.svg"> Info</h1>' +
    '<p>Questa pagina.</p>' +

    '<h1><img src="css/svg/notebook-5-w.svg"> Licenza</h1>' +
    '<p>Licenza d\'uso di questa App e informazioni sul copyright.</p>' +

    '<h1>Problemi Noti:</h1>' +
    '<p> - La pagina "Informazioni di navigazione" non rileva la perdita o l\'acquisizione di satelliti gps fintanto che la relativa pagina rimane aperta. Per rilevare questi cambi di stato uscire e rientrare dalla pagina.</p>' +
    '<p> - La pagina "Upload" non rileva la perdita o l\'acquisizione di connessione dati fintanto che la relativa pagina rimane aperta. Per rilevare questi cambi di stato uscire e rientrare dalla pagina.</p>' +
    '<p> - Il dettaglio gps non rileva la perdita o l\'acquisizione di satelliti gps fintanto che la relativa pagina rimane aperta. Per rilevare questi cambi di stato uscire e rientrare dalle relative pagine.</p>' +
    '<p> - Il dettaglio connessione dati non rileva la perdita o l\'acquisizione di connessione dati fintanto che la relativa pagina rimane aperta. Per rilevare questi cambi di stato uscire e rientrare dalla pagina.</p>' +
    '<p>E\' possibile segnalare bugs o problemi  scrivendo a: <a href="mailto:bug@marinelittertracker.org" >bug@marinelittertracker.org</a></p>' +

    '<p>Grazie per aver scaricato MARINE<b>LITTER</b>TRACKER !<br></p>',

    msg_licence: '<h1>licenza d\'uso</h1>' +
    '<p>Con il download e l\'utilizzo di questa Applicazione si accettano esplicitamente le seguenti clausole:</p>' +
    '<p>- Questa Applicaione NON è uno strumento di navigazione marittima ne un ausilio alla navigazione di nessun tipo. Pertanto NON può essere utilizzata come tale.</p>' +
    '<p>- L\'attendibilità delle informazioni fornite dalla mappa e/o dalla Bussola e/o dal gps NON possono essere garantite e pertanto NON vanno considerate attendibili ai fini della navigazione.</p>' +
    '<p>- Nessun danno arrecato al device su cui viene installata è attribuibile all\'Applicazione stessa e/o ai suoi sviluppatori.</p>' +
    '<p>- Nessun danno provocato dall\'utilizzo dell\'applicazione è attribuibile all\'Applicazione stessa e/o ai suoi sviluppatori.</p>' +
    '<p>- Eseguendo la Registrazione e il successivo Login, l\'utente acconsente all\'utilizzo dei dati forniti per gli scopi e le finalità dell\'Applicazione e del sito collegato www.marinelittertracker.org.</p>' +
    '<p>- L\'applicazione trasmette i dati registrati al sito web www.marinelittertracker.org, il suo utilizzo comporta l\'accettazzione esplicita dell\'utilizzo di questi dati da parte del sito stesso.</p>' +
    '<p>- Nessun danno provocato dalla pubblicazione dei dati forniti è attribuibile all\'Applicazione stessa e/o ai suoi sviluppatori.</p>' +
    '<h1>Esclusione di garanzia</h1>' +
    '<p>Il presente Software è fornito sotto questa licenza "così com\'è", senza garanzie di alcun tipo, sia espresse, implicite o di legge, comprese, senza limitazione, le garanzie che il software sia privo di difetti, vendibile, creato per un particolare scopo, non violi. L\'intero rischio per quanto riguarda la qualità e le prestazioni del software ricade sull\'utente. Qualora il software si rivelasse difettoso, Nessun conseguente danno può essere ascritto agli sviluppatori. Questa esclusione di garanzia costituisce una parte essenziale di questa licenza. Nessun uso di qualsiasi software coperto è autorizzata sotto questa licenza tranne che in questo disclaimer.</p>' +
    '<h1>Limitazione di responsabilità</h1>' +
    '<p>In nessun caso e sotto nessuna teoria legale, alcuna colpa (inclusa la negligenza), contratto, o in altro modo, sono ascrivibili agli sviluppatori, o chiunque distribuisce il presente software, ne essere responsabili per qualsiasi danno diretto, indiretto, speciale, incidentale, o consequenziali di qualsiasi carattere tra cui, senza limitazione, i danni per perdita di profitti, perdita di avviamento, interruzione del lavoro, guasti o malfunzionamento del device su cui è installato, o di qualsiasi altro danno commerciale o perdite, anche se tale parte è essere stato informato della possibilità di tale danni. Alcune giurisdizioni non consentono l\'esclusione o la limitazione dei danni incidentali o consequenziali.</p>' +
    '<p>© ' + new Date().getFullYear() + ' marinelittertracker.org<br></p>' +
    '<h1>Credits</h1>' +
    '<p>Most Icons and Graphics are designed by Madebyoliver from Flaticon</p>',

    msg_connection_error: 'Errore di connessione al server.<br /> Riprova più tardi',
    msg_connection_timeout: 'Il server impiega troppo tempo per rispondere.<br /> Riprova più tardi'
};


//------------------------------ français (TODO verify corrispondence and translation) ------------------------------->>
var lang_fr = {

    msg_app_act_ok: 'Application activée',
    msg_app_act_fail: 'L\'activation de l\'application échoue! <br /> Veuillez réessayer.',
    msg_app_act_mail_error_ok: 'Quelque chose ne va pas! <br /> Veuillez réessayer.',
    msg_app_act_mail_error_fail: 'Quelque chose ne va pas! <br /> Vérifiez votre connexion de données et réessayez.',

    msg_gps_timeout: 'Temporisation expirée pour la récupération, <br /> Vérifiez les paramètres de votre appareil.',
    msg_gps_fail: 'GPS non disponible, vérifiez votre appareil <br /> et redémarrez l\'application',

    msg_network_error: 'Pas de connexion.<br /> Essayez plus tard ... gundun!',
    msg_network_connection: 'Connexion de données: ',

    msg_compass_error: 'Aucune boussole détectée, <br /> vérifiez que vous avez une boussole sur votre appareil.',

    msg_user_name_invalid: 'Nom d\'utilisateur non valide ou vide',
    msg_user_password_invalid: 'Mot de passe non valide ou vide',
    msg_user_confirmPass_invalid: 'Aucun mot de passe correspondant ou vide ',
    msg_user_email_invalid: 'E-mail non valide ou vide',
    msg_user_exist: 'Avez vous déjà un compte.<br /> Vous pouvez vous connecter maintenant',
    msg_user_failure: 'Échec dans le processus de connexion.<br /> Réessayer',
    msg_user_mail_sent: 'E-ail de confirmation envoyé.<br /> Merci de consulter vos emails',
    msg_user_mail_fail: 'E-mail de confirmation échoue.<br /> Veuillez utiliser un courriel valide',
    msg_user_not_set: 'Aucun utilisateur connecté.<br /> Le téléchargement des données ne sera pas possible',

    msg_user_form_access_button_submit: 'connecter',
    msg_user_form_signUp_button_submit: 'inscrivez-vous',
    msg_user_form_signUp_message: 'ou se connecter',
    msg_user_form_logIn_button_submit: 'se connecter',
    msg_user_form_logOut_button_submit: 'déconnecter',

    msg_upload_button_default: 'télécharger comme ',
    msg_upload_button_anonymous: 'télécharger comme anonyme',
    msg_upload_user_msg: 'ou inscrivez-vous',
    msg_upload_user_warning: '<b>Attention!</b><br /> Une connexion lente des données peut provoquer un délai d\'attente, alors essayez quand une bonne connexion est disponible',

    msg_logIn_ok: 'Vous êtes connectée.<br /> Vous pouvez télécharger vos données maintenant',
    msg_logIn_fail: 'Échec de connexion.<br /> Veuillez vérifier votre entrée',
    msg_logOut_ok: 'Log out OK.<br /> You can still use the application as Anonymous User',

    msg_tracking_start: 'Suivre la route du bateau',
    msg_tracking_stop: 'Arrêter de suivre la route du bateau',
    msg_track_no_track: 'Pas de piste dans la liste',
    msg_track_freq_fail: 'Arrêter de suivre la route du bateau<br />avant de modifier la frequence',
    msg_track_view: 'voir sur la carte',
    msg_track_freq_3sec: 'La fréquence de suivi élevée peut générer des données supplémentaires inutiles et difficiles à télécharger. <br /> considérez de définir 30 sec. ou une fréquence inférieure pour améliorer les performances et empêcher l\'échec du téléchargement',


    msg_litter_note_default: 'pas de note',
    msg_litter_no_litter: 'Pas de débris dans la liste',

    msg_data_send_ok: 'Données téléchargées.<br /> Merci d\'avoir partagé!',
    msg_data_send_fail: 'Échec de la transmission des données. <br /> Veuillez essayer plus tard',

    msg_info: '<h1><img src = "css/svg/navigation-2-w.svg"> Navigation Info:</h1>' +
    '<p> - Compass.<br>' +
    '- Heading.<br>' +
    '- Current GPS position (update every 30 sec.), You can change format in settings <img src = "css/svg/settings-5-w.svg">.<br>' +
    '- Date and Local Time.<br>' +
    '- Records track <img id = "trackSwitch_id" src = "css/svg/record-1.svg"> With this button you can record the route you are taking.</P> ' +

    '<h1><img src = "css/svg/flag-3.1-w.svg"> Selector floating litters.</h1>' +
    '<p>Just click on litter icon you find and automatically the App will record time and position in a local database.<br>' +
    'Data connection and internet are not required, then the measurements can also be made in deep sea navigation.<br>' +
    'The data collected will be available in online map  at: <a href="https://www.marinelittertracker.org"> www.marinelittertracker.org</a></P>' +

    '<h1><img src = "css/svg/map-w.svg"> Map (online)</h1>' +
    '<p>This is NOT a navigation map and does not replace the mandatory instruments of navigation.<br>' +
    '- Displays sea marks provided by OpenSeaMap service (lights, buoys, etc.).<br>' +
    '- Allows geolocation by pressing the button: <img src = "css/svg/target-1.svg"><br>' +
    '- The menu <img src = "css/svg/layers-2.svg"> allows you to choose between the following basic maps:' +
    ' - OpenStreetMap.<br>' +
    ' - Google Satellite.<br>' +
    'And layers:' +
    ' - Lanterns and buoys provided by OpenSeaMap.<br>' +
    ' - Floating debris detected "Litters" (under construction).<br>' +
    'The map is available only with data connection.</P>' +

    '<h1><img src = "css/svg/menu-5-w.svg"> Side Menu</h1>' +
    '<p>Provides access to the following sub-features:</P>' +

    '<h1><img src = "css/svg/route-2-w.svg"> tracked list</h1>' +
    '<p>Displays the list of recorded tracks  and (in progress) by clicking on the arrow (<img src = "css/svg/arrow-d-w.svg">) allows you to view the route on the map.</P> ' +

    '<h1><img class = "pageIcon" src = "css/svg/list-1-w.svg"> Litters list</h1>' +
    '<p>List of detected debris, clicking on the arrow (<img src = "css/svg/arrow-d-w.svg">) you can see detailed info</P> ' +

    '<h1> <img src = "css/svg/user-3-w.svg"> User Login (online)</h1>' +
    '<p>It provides the functions of Registration, Login, Logout and user info</P> ' +

    '<h1><img src = "css/svg/cloud-w.svg"> Upload (online)</h1>' +
    '<p>Allows to upload data collected to the website: www.marinelittertracker.org and join community active in preserve the sea.</P> ' +

    '<h1><img src = "css/svg/settings-5-w.svg">Preferences</h1>' +
    '<p>Allows to set:</P>' +
    '<p> - GPS format: DDD° MM\' SS.S or DDD.DDDDD°</P>' +
    '<p> - Language: English, Italian, French.</P>' +

    '<h1><img src = "css/svg/compass-w.svg">Compass detail</h1>' +
    '<p>It provides the detail of the gyroscopic sensor of your device.</P>' +

    '<h1><img src = "css/svg/satellite-w.svg"> Gps detail</h1>' +
    '<p>Shows details of the GPS sensor of your device.</P>' +

    '<h1><img src = "css/svg/wifi-w.svg"> Connection detail</h1>' +
    '<p>Provides detailed data connection is available.</P>' +

    '<h1><img src = "css/svg/info-w.svg"> info</h1>' +
    '<p>This page.</P> ' +

    '<h1><img src = "css/svg/notebook-5-w.svg"> License</h1>' +
    '<p>User license of this App, and copyright information.</P>' +

    '<h1>Known Issues:</h1>' +
    '<p> - The "navigation information" does not detect the loss or acquisition of GPS satellites as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> - The "Upload" does not detect the loss or acquisition of data connection as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> - The detail GPS does not detect the loss or acquisition of GPS satellites as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> - The detail data connection does not detect the loss or acquisition of data connection as long as its page remains open. To detect these changes go out and come back into the page.</P>' +
    '<p> You can report bugs or problems writing to: <a href="mailto:bug@marinelittertracker.org">bug@marinelittertracker.org</a></P>' +

    '<p>Thanks for Having downloaded MARINE<b>LITTER</b>TRACKER</P>',

    msg_licence: '<h1>User Licence </h1>' +
    '<p>By downloading and use of this application you explicitly agree to the following rules:</p>' +
    '<p> - This is NOT a navigation tool nor a navigation aid. Therefore it must NOT used as such.</p>' +
    '<p> - Reliability of the information provided by the map and/or compass and/or GPS cannot be guaranteed and therefore NOT be considered reliable for the purpose of navigation.</p>' +
    '<p> - No damage caused to the device on which it is installed is due to Application itself and / or its developers.</p>' +
    '<p> - No damage caused by use of this Application is due to Application itself and / or its developers.</p>' +
    '<p> - Performing Sign up and Log in, the User agree to the informations provided will be used for the purposes and aims of  Application and web site www.marinelittertracker.org connected.</p>' +
    '<p> - The Application transmits recorded data to www.marinelittertracker.org website, its use implies explicit agreement of use these data by the site itself. </p>' +
    '<p> - No damage caused by the publication of the data provided can be attributed to the Application itself and / or its developers.</p>' +
    '<h1>Disclaimer of Warranty</h1>' +
    '<p>Covered Software is provided under this License on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.</p>' +
    '<h1>Limitation of Liability</h1>' +
    '<p>Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.</p>' +
    '<p>© ' + new Date().getFullYear() + ' marinelittertracker.org<br></p>' +
    '<h1>Credits</h1>' +
    '<p>Most Icons and Graphics are designed by Madebyoliver from Flaticon</p>',

    msg_connection_error: 'Pas de connexion.<br /> Essayez plus tard ',
    msg_connection_timeout: 'Connexion expirée.<br /> Essayez plus tard'
};





