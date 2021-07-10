export default () => {
  /**
   * The Sign-In client object.
   */
  var auth2;

  /**
   * Initializes the Sign-In client.
   */
  var initClient = function () {
    window.gapi.load("auth2", function () {
      /**
       * Retrieve the singleton for the GoogleAuth library and set up the
       * client.
       */
      auth2 = window.gapi.auth2.init({
        client_id:
          "781800024357-s8jg5vtl14jdptl3v902aaql120gda25.apps.googleusercontent.com",
      });

      // Attach the click handler to the sign-in button
      auth2.attachClickHandler("signin-button", {}, onSuccess, onFailure);
    });
  };

  /**
   * Handle successful sign-ins.
   */
  var onSuccess = function (user) {
    console.log("Connected to google.");
    console.log("Signed in as " + user.getBasicProfile().getName());
  };

  /**
   * Handle sign-in failures.
   */
  var onFailure = function (error) {
    console.log(" NOt Connected to google.");
    console.log(error);
  };
  initClient();
};
