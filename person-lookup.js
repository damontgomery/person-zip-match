// Uses https://github.com/davglass/zipcodes
// To compile, run `browserify person-lookup.js -o zipcodes.js`

var zipcodes = require('zipcodes');

$( document ).ready(function() {
  var personList = [];
  var results = $('table.results');

  $.getJSON("person-list.json", function(data) {
    personList = data;

    $.each(personList, function(i, person) {

      // console.log('personList', personList);

      var closest = {
        matches: [],
        distance: 99999999999999999999
      };

      $.each(personList, function(j, target){
        // Do not match against yourself.
        if (i === j) {return;}

        var distance = zipcodes.distance(person.zip, target.zip); //In Miles
        // console.log(person);
        // console.log(target);
        // console.log(distance);

        if (distance < closest.distance) {
          closest.matches = [target];
          closest.distance = distance;
        }
        else if (distance === closest.distance) {
          closest.matches.push(target);
        }
      });

      // console.log('closest', closest);

      // Create the row.
      var result = $('<tr></tr>');

      // Append the person information.
      result.append('<td class="name">' + person.name + '</td>');
      result.append('<td class="zip">' + person.zip + '</td>');

      // Create the data for the matches.
      var matches = $('<td class="matches"></td>');

      $.each(closest.matches, function(i, match){
        // console.log('match', match);
        matches.append('<div class="match">' + match.name + ": " + closest.distance + ' miles</div>');
      });

      result.append(matches);

      // Add the results row.
      $('tbody', results).append(result);

    });
  });
});
