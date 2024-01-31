const answer="secret";
const S= document.querySelector("#S");
const R= document.querySelector("#R");
const T= document.querySelector("#T");
const C= document.querySelector("#C");
const E= document.querySelector("#E");
let ans=document.querySelector(".ans");
const non=document.querySelectorAll(".none");
const img2=document.querySelector("#i2");
const img=document.querySelector("#i3");
const img3=document.querySelector("#i4");
const img4=document.querySelector("#i5");
const img5=document.querySelector("#i6");
const img6=document.querySelector("#i7");
const reset=document.querySelector("#reset");
let c=0;
let ans1=["_","_","_","_","_","_"];
non.forEach((none)=>{
     none.addEventListener("click", () =>{
        if(c===5){
            img6.style.visibility="visible";
            ans.innerText="You Lose! Try again";
        }
        if(c===4){
            img5.style.visibility="visible";
        }
        if(c===3){
            img4.style.visibility="visible";
        }
        if(c===2){
            img3.style.visibility="visible";
          }
        if(c===1){
            img.style.visibility="visible";
          }
          img2.style.visibility="visible";
          c++;
          none.style.backgroundColor="red";
     });
});

S.addEventListener("click", () => {
    ans1[0]="S";
    ans.innerHTML = ans1.join(" ");
});
E.addEventListener("click", () => {
    ans1[1]="E";
    ans1[4]="E";
    ans.innerHTML = ans1.join(" ");
});
C.addEventListener("click", () => {
    ans1[2]="C";
    ans.innerHTML = ans1.join(" ");
});
R.addEventListener("click", () => {
    ans1[3]="R";
    ans.innerHTML = ans1.join(" ");
});
T.addEventListener("click", () => {
    ans1[5]="T";
    ans.innerHTML = ans1.join(" ");
});

reset.addEventListener("click", () =>{
    c=0;
    ans1=["_","_","_","_","_","_"];
    ans.innerHTML = ans1.join(" ");
    img2.style.visibility="hidden";
    img.style.visibility="hidden";
    img3.style.visibility="hidden";
    img4.style.visibility="hidden";
    img5.style.visibility="hidden";
    img6.style.visibility="hidden";
    non.forEach((none)=>{
    none.style.backgroundColor="white";});
});
