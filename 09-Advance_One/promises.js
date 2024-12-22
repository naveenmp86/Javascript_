const promiseOne = new Promise(function (resolve, reject) {
  //Do an asyn task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

/*************************************/

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

/****************************************/

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Naveen", email: "naveen@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});


/******************************************/

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error) {
      resolve({username : 'Naveen' ,password:"1234" })
    }else {
      reject(' ERROR : Something Went Wrong')
    }
  },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
  console.log(username);
}).catch(function(error){
  console.log(error)
}).finally(function(){
  console.log("The Promise is either resolved or rejected")
})


/*******************************************/

const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error) {
      resolve({username : 'JavaScript' ,password:"1234" })
    }else {
      reject(' ERROR : JS Went Wrong')
    }
  },1000)
});


async function consumePromiseFive(){
  // const response = await promiseFive
  // console.log(respnose);
  try{
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()


/********************************************/

// async function getAllUsers(){
//   try{
//       const response = await fetch("https://api.github.com/users/naveenmp86");
//       //console.log(response);
//       const data = await response.json();
//       console.log(data);
//   } catch (error) {
//     console.log("E:",error);
//   }
  
// }

// getAllUsers()


fetch('https://api.github.com/users/naveenmp86')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))