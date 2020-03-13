
const functions = {
    calculator:(n1, n2, op)=>{
        
        var res;
        if (op==="+"){
            res = parseInt(n1)+parseInt(n2);
        }
        if (op==="-"){
            res = parseInt(n1)-parseInt(n2);
        }
        if (op==="*"){
            res = parseInt(n1)*parseInt(n2);
        }
        if (op==="/"){
            res = parseInt(n1)/parseInt(n2);
        }
        return res;
    }
}



export default functions;