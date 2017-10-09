myApp.controller('HomeController', function (GithubService, ViewsService) {
  console.log('HomeController loaded.');
  var vm = this;

  // for ng-include
  vm.aboutUrl = '';
  vm.setAboutUrl = function() {
    console.log('in setAboutUrl');
    
    vm.aboutUrl = '/views/about.html';
  }; // end aboutUrl
  

    // for ng-include
  vm.code = { name: 'code',
      url: '/views/portfolio.html'
    }; // end vm.code

  // github user data
  vm.user = GithubService.user;

  // github repo data
  vm.repos = GithubService.repos;



  // get profile and repo info on load
  GithubService.githubProfile();
  GithubService.githubRepos();
}); // end controller
