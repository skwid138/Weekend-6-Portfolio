myApp.controller('UserController', function (GithubService) {
  console.log('UserController loaded.');
  var vm = this;

  // github user data
  vm.user = GithubService.user;

  // github repo data
  vm.repos = GithubService.repos;



  // get profile and repo info on load
  GithubService.githubProfile();
  GithubService.githubRepos();
}); // end controller
