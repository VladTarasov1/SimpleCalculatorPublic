send.addEventListener("click",calc);
function calc(){
    let val_v = v.value;
    let val_p = p.value;
    let val_q = q.value;
    let val_result = (val_p*val_q)/val_v;
    result.innerHTML = val_result.toFixed(2);
}