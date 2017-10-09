myApp.controller('HomeController', function (GithubService, ViewsService, $location, $anchorScroll) {
  console.log('HomeController loaded.');
  var vm = this;

  // github user data
  vm.user = GithubService.user;
  // github repo data
  vm.repos = GithubService.repos;

  vm.aboutMe = false;
  // toggles aboutMe to show bio
  vm.showAboutMe = function() {
    console.log('in showAboutMe');
    vm.aboutMe = !vm.aboutMe;
    $location.hash('bio');
    $anchorScroll();
  }; // end showAboutMe



  // get profile and repo info on load
  GithubService.githubProfile();
  GithubService.githubRepos();
}); // end controller
