describe("Github Request Spec", function(){
  var GithubRequest = require("../lib/GithubRequest");
  var githubRequest;

  beforeEach(function(){
    githubRequest = new GithubRequest();
  });

  it("Parses name", function(){
    // Testing code for this "it" block
    // for example: expect(someVar).toEqual(true)
    expect(githubRequest.returnObject.name).toEqual("jason vanderslice");
  });

  it("Parses url", function(){
    expect(githubRequest.returnObject.url).toEqual("http://something.com");
  });

  it("Requests data from URL", function(){
    spyOn(githubRequest, "getData");
    expect(githubRequest.getData).toHaveBeenCalledWith("https://api.github.com/users/jasonvanderslice");
  });
});
