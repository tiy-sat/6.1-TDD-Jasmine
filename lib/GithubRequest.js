function GithubRequest(){
  var githubRequest = this;
  // Create an AJAX Request
  // Parse response of Request
  // Return object with 6 pieces of data
  githubRequest.returnObject = {
    name: "jason vanderslice",
    url: "http://something.com",
    avatar_url: "",
    number_of_repos: "",
    something: "",
    something_else: ""
  }

  githubRequest.getData = function(){
    
  }
}

module.exports = GithubRequest;
