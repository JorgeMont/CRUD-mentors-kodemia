const postData = async(api, mentor) => {
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(mentor),
      });
  
      console.log(response)
      const result = await response.json();
      if(result){
        console.log(result.tests)
      }
    } catch(error) {
      console.log(error)
  
    }
  };

  export default postData;