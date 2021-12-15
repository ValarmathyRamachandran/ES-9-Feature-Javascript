async function* load(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
 }

 async function test(){
    for await (const val of load()){
       console.log(val)
    }
 }
 test();
 console.log('end of script') // end of script 1 2 3
 // -- Example 2 as Array --
 async function fntest(){
    for await (const val of [10,20,30,40]){
       console.log(val)
    }
 }
 fntest();
 console.log('end of script') 
//  end of script
//  10
//  20
//  30
//  40





