myApp.controller('HomeController', function (GithubService, $location, $anchorScroll) {
  console.log('HomeController loaded.');
  var vm = this;

  // github user data
  vm.user = GithubService.user;
  // github repo data
  vm.repos = GithubService.repos;

  vm.aboutMe = true;
  // toggles aboutMe to show bio
  vm.showAboutMe = function() {
    console.log('in showAboutMe');
    vm.aboutMe = !vm.aboutMe;
    $location.hash('bio');
    $anchorScroll();
  }; // end showAboutMe

  vm.myRepos = false;
  // toggles repos on DOM
  vm.showRepos = function() {
    console.log('in showRepos');
    vm.myRepos = !vm.myRepos;
    $location.hash('repo');
    $anchorScroll();
  }; // end showRepos


  // get profile and repo info on load
  GithubService.githubProfile();
  GithubService.githubRepos();
}); // end controller
