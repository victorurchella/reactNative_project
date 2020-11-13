const imgLike = (curtiu)=>{
    if(curtiu){
      return require("../../res/img/s2-checked.png")
    }else {
      return require("../../res/img/s2.png")
    }
}

const likeFoto = (curtiu, likes)=> {
    let qnt = likes
    if(curtiu){
      qnt--
    }else{
      qnt++
    }
    return [!curtiu, qnt];
}

export {imgLike, likeFoto}