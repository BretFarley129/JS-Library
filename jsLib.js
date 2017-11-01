var _ = {
    map: function(arr, callback) {
      var result = [];
      for (var i = 0; i < arr.length; i++){
          result.push(callback(arr[i]));
      }
      return result;
    },
    reduce: function(arr, callback) { 
      var result = 0;
      for (var i = 0; i< arr.length; i++){
          result += callback(arr[i]);
      }
      return result;
    },
    find: function(arr, callback) {   
        for (var i = 0; i < arr.length; i ++){
            if (callback(arr[i])){
                var result = arr[i];
                return arr[i];
            }
        }
        return "No matches found"
    },
    filter: function(arr, callback) { 
        var result= [];
        for (var i = 0; i < arr.length; i++){
            if(callback(arr[i])){
                result.push(arr[i]);
            }
        }
        return result;
    },
    reject: function(arr, callback) { 
        var result = [];
        for (var i = 0; i < arr.length; i ++){
            if(!callback(arr[i])){
                result.push(arr[i])
            }
        }
        return result;
    }
  }
 // you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var bools = _.map([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(bools);

var reduction = _.reduce([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(reduction); 

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even); 

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds); 
