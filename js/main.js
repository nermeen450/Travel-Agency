const account = document.querySelector(".profile");
console.log(account);
const accountDropmenue = document.querySelector(".account-dropmenue");
console.log(accountDropmenue);

account.addEventListener("click", ()=>{
    accountDropmenue.classList.toggle("show");
})
