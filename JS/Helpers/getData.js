const getData = async(api, handleFunction) => {
    try{
        const response = await fetch(api);
        const data = await response.json();
        handleFunction(data);
    }
    catch(error){
        return(error);
    }
}

export default getData;