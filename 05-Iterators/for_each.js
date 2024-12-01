const coding = ["js","cpp","ruby","python","java"]

coding.forEach(function (val){
    //console.log(val)
})

coding.forEach( (item) => {
    //console.log(item);
})

function printMe(item){
    console.log(item)
}

//coding.forEach(printMe)


const Programs = [
    {
        language : "Javascript",
        languageFileName : "js"
    },
    {
        language : "C++",
        languageFileName : "cpp"
    },
    {
        language : "python",
        languageFileName : "py"
    },
    
]

Programs.forEach( (item) => {
    console.log(item.languageFileName)
})