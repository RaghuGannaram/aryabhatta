module.exports = {
     isPrime :num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    },
    
    isEven : num => num % 2 === 0,
    
    isOdd : num => Math.abs(num % 2) === 1,
    
    fibonacci : limit =>{
        if(limit == 1) return [0];
        else if(limit == 2) return [0,1];
        else if(limit > 2){
            let fib = [0, 1];
            for (let i = 2 ; i < Math.floor(limit) ; i++) {
                fib[i] = fib[i - 2] + fib[i - 1];
            }
            return fib ;
        } else return null
    }    
};
