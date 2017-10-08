myApp.controller('HomeController', function (GithubService) {
  console.log('HomeController loaded.');
  var vm = this;

  // github user data
  vm.user = GithubService.user;

  // github repo data
  vm.repos = GithubService.repos;



  // get profile and repo info on load
  GithubService.githubProfile();
  GithubService.githubRepos();
}); // end controller
