let amount=document.getElementById('amount')
let guests=document.getElementById('guests')
let quality=document.getElementById('quality')
let tipAmount=document.getElementById('tip-amount')
let btn=document.getElementById('btn')
 btn.onclick=function calculate(){
  let tip=((amount.value*quality.value)/guests.value).toFixed(2)
  amount.value=''
  guests.value=''
  quality.value=''
  if(tip==='NaN'){
    tipAmount.innerHTML="tip is $0 each"
    showTipAmount()
  }
  else {
    tipAmount.innerHTML="tip is"+tip+"each"
    showTipAmount()
  }
}
function showTipAmount(){
    tipAmount.style.visibility="visible"
    tipAmount.className="show"
    setTimeout(() => {
        tipAmount.className=tipAmount.className.replace("show", "")
    }, 3000);
}