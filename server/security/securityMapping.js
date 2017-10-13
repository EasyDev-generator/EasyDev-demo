/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/actor/$' : [],
	'DELETE - /api/actor/([^/])+$' : [],
	'GET - /api/actor/([^/])+$' : [],
	'GET - /api/actor/$' : [],
	'POST - /api/actor/([^/])+$' : [],
	'POST - /api/film/$' : [],
	'DELETE - /api/film/([^/])+$' : [],
	'GET - /api/film/findBycast/([^/])+$' : [],
	'GET - /api/film/findByfilmMaker/([^/])+$' : [],
	'GET - /api/film/([^/])+$' : [],
	'GET - /api/film/([^/])+/getcast$' : [],
	'GET - /api/film/$' : [],
	'GET - /api/film/search$' : [],
	'POST - /api/film/([^/])+$' : [],
	'POST - /api/filmmaker/$' : [],
	'DELETE - /api/filmmaker/([^/])+$' : [],
	'GET - /api/filmmaker/([^/])+$' : [],
	'GET - /api/filmmaker/$' : [],
	'POST - /api/filmmaker/([^/])+$' : [],
	

}
