
const URL = "http://localhost:3000/api/genres/"

async function getgenres(){
    const res = await fetch(URL);
    const data = await res.json();
    console.log("GET",data);
}

async function postgenre(name){

    const res = await fetch(URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name})
    });
    const data = await res.json();
    console.log("POST",data);
}

async function updategenre(id,newname){

    const res = await fetch('http://localhost:3000/api/genres/${id}',{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:newname})
    });

    // if(!res.ok){
    //     const text = await res.text();
    //     console.error("Error:",text);
    //     return;
    // }
    const data = await res.json();
    console.log("PUT",data);
}

(async ()=>{
    await getgenres();
    // await postgenre("Horror");
    await updategenre(4,"Fantasy");
})();