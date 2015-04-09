GitHub Profiles - AngularJS
=======================

This is similar to my [GitHub profile loader using Ajax](https://github.com/guspowell/GitHub-profiles), but here I use AngularJS. This is a single page app where the user can search for GitHub profiles.

##Screenshot
![screenshot](/public/images/screenshot.png)

## Technologies Used

- Javascript
- AngularJS
- HTML & CSS
- Karma

## Job List

- [x] Single page app
- [x] Loads profiles based on a user search
- [x] Search should be automated so no return or click is necessary

## Installation and Testing
Clone the repository and change into the directory:
```
$ git clone git@github.com:guspowell/gitHub_profiles_angular.git
$ cd gitHub_profiles_angular

```
Install the requirements:
```
$ npm install
$ bower install
```
Open in the browser:
```
$ open views/index.html
```
Run the tests:
```
$ karma start test/karma.conf.js
```

## Favourite Code Snippet

~~~javascript
var searchResource = $resource('https://api.github.com/search/users');

$scope.doSearch = function() {
  $scope.searchResult = searchResource.get(
    { q: $scope.searchTerm }
  );
};
~~~
