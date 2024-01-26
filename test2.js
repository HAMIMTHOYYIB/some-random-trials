const path = require("path");

// Create a function which returns the extensions of the links in an array.
function type(link) {
    let arr = link.map((val) => {
        return val.split(".").pop()
    })
    
     console.log(arr);
}
let a = ["https://www.example.com/images/dummy_image_large.jpg","https://www.example.com/images/dummy_video_small.jpg","https://www.example.com/images/dummy_image_large.png","https://www.example.com/images/dummy_video_large.mp4"]
type(a);

// Create an array of object on the link including the extension , filename , fileType.

let b = [];
for(i=0; i<a.length-1; i++){
    let obj = {
        "extension":a[i].split(".").pop(),
        "filename":a[i].split("/").pop().split(".").shift(),
        "fileType":a[i].split("_")[1]
    }
    b.push(obj)
}
console.log(b);

// Another methods to get extension and values 
console.log(path.basename('https://www.example.com/images/dummy_image_large.jpg'));
console.log(path.extname('https://www.example.com/images/dummy_image_large.jpg'));