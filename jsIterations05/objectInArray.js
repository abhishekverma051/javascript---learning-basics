const arr =  [
    {
        languageName:"javascript",
        extensionName: ".js"
    },
    {
        languageName:"python",
        extensionName: ".py"
    },
    {
        languageName:"swift",
        extensionName: ".sw"
    },
    {
        languageName:"c++",
        extensionName: ".cpp"
    },
]
arr.forEach((item) => {
     console.log(item.languageName);
});
arr.forEach((item) => {
     console.log(item.extensionName );
});