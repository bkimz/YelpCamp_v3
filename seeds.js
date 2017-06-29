var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
     name: "Camp Highcloud",
     image:"https://farm6.staticflickr.com/5181/5674320042_0ae9603ff6.jpg",
     description: "blah blah blah"
    },
     {
     name: "Red Bear Cliffs",
     image:"https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
     description: "blah blah blah"
    },
     {
     name: "Mountain Jungle",
     image:"https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg",
     description: "blah blah blah"
    }
    ];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }else{
            console.log("removed campgrounds!");
              //add a few campgrounds
                data.forEach(function(seed){
                    Campground.create(seed, function(err, campground){
                        if(err){
                            console.log(err);
                        }else{
                            console.log("added a campground");
                            
                              //add a few comments
                              
                              Comment.create(
                                  {
                                      text: "This place is great, especially with Duff Beer",
                                      author: "Homer Simpson"
                                  }, function(err, comment){
                                      if(err){
                                          console.log(err);
                                      }else{
                                          campground.comments.push(comment);
                                          campground.save();
                                          console.log("comment added");
                                      }
                                  }
                                  );
                        }
                    });
                });
        }
    });
  

  
    
}

module.exports = seedDB;
