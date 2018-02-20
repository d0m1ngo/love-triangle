/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function  getLoveTrianglesCount(arr) {
  let c = 0;
  	for (let i = 0; i < arr.length; i++){
      let fr;
      let sc;
      let third;
      
  		fr = arr[i];
      
  		if (fr != 'undefined'){
  			sc = arr[fr-1];
        
  			if (sc != 'indefined'){
  				third = arr[sc-1];
  				if (sc !=i+1 && third === i+1  )
          	
            
            c++;
  			}
  		}
	}
	
 
  
  	return c/3;
}