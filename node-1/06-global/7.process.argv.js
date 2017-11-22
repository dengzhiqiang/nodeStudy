process.argv.forEach(function(val,index,arr) {
    console.log(val);   
    console.log(index);   
    console.log(arr);   
    console.log('---------------------------------------------');
});

// process.kill(进程id); 杀掉进程