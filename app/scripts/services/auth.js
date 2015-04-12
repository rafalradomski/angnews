/* global app:true */
/* global Firebase:true */
/*jshint camelcase: false */
/* exported app */
'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope, $firebase) {
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseSimpleLogin(ref);
	
	var Auth = {
		
		// Register
		register: function (user) {
			return auth.$createUser(user.email,user.password);
		},
		// Create profile
		createProfile: function (user) {
		  var profile = {
			username: user.username,
			md5_hash: user.md5_hash
		  };

		  var profileRef = $firebase(ref.child('profile'));
		  return profileRef.$set(user.uid, profile);
		},
		// Login
		login: function (user) {
			return auth.$login('password', user);
		},		
		// Logout
		logout: function () {
			auth.$logout();
		},
		// Resolve
		resolveUser: function () {
			return auth.$getCurrentUser();
		},
		// Signedin
		signedIn: function () {
			return !!Auth.user.provider;
		},
		user: {}
	};
	
	// LOGIN
	$rootScope.$on('$firebaseSimpleLogin:login', function (e, user) {
	  angular.copy(user, Auth.user);
	  Auth.user.profile = $firebase(ref.child('profile').child(Auth.user.uid)).$asObject();

	  // console.log(Auth.user);
	});
	
	// LOGOUT
	$rootScope.$on('$firebaseSimpleLogin:logout', function() {
	  // console.log('logged out');

	  if(Auth.user && Auth.user.profile) {
		Auth.user.profile.$destroy();
	  }
	  angular.copy({}, Auth.user);
	});
	
	return Auth;
});