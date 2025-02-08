async function dataCollector(){
        const url="./data.json";
        try {
                const response=await fetch(url);
                if(!response.ok){
                        throw new Error(`response status: ${response.status}`);
                }
                const json=await response.json();
                console.log(json[3]);
        } catch (error) {
                console.log(error.message);
        }
}
dataCollector();