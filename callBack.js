//Explain what a callback function is and provide a simple example? 

const Worker=(callback)=>{
    setTimeout(()=>{
     console.log("Work done");
     callback();
    }, 2000)
}

let callbackFunction=()=>{
    console.log("callbackFunction Executed");
}

Worker(callbackFunction);