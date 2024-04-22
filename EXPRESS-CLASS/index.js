//creating an http serveer
//express

// const express = require("express");

// const app = express();
// function sum(n) {
//     let ans = 0;
//     for(let i = 1; i<=n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get("/", function(req, res) {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi your ans  is" + ans );
// })

// app.listen(3000);

// bulid a hospital

const express = require("express");

const app = express();

const users = [{
    name: "Johan",
    kidneys: [{
        healthy: false

    }]

}];

app.use(express.json());


app.get("/", function(req, res){
    // write logic
    const johnKidneys = users[0].kidneys;
    const numberOfkidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfkidneys -numberOfHealthyKidneys;
    res.json({
         numberOfkidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/" , function(req, res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })

})

app.put("/", function(req, res){
    for(let i =0; i<users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//removing all unhealthy kidneys

app.delete("/", function(req, res){
    // you should return a 411 (if there is no unhealthy kidneys)
    const atleastOneunhealthyKidneys = false;
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i =0; i < users[0].kidneys.length; i++)
        {
            if(users[i].healthy) {
    
                newKidneys.push({
                    healthy: true
    
                })
    
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    }
    

   else{
    res.status
   }


})
function isThereAtleastOneUnhealthyKidney() {
    let atleastOneunhealthyKidneys = false;
    for(let i =0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
    atleastOneunhealthyKidneys = true;

        }
    }
    return atleastOneunhealthyKidneys
}


app.listen(3000);