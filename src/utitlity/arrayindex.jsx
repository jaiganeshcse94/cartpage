export const findIndex=((array,id)=>{
    for (let i=0;i<array.length;i++){
        console.log(array[i],i)
        if(id==array[i].id){
            return i;
        }
    }
    return -1
})