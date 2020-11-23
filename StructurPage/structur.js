let countOfImageCard = document.getElementsByClassName('card').length;
console.log(document.getElementById("container").lastElementChild);
if (((countOfImageCard - 1 ) % 3) ===0) {
    document.getElementById('container').lastElementChild.className += " lastItemCenterChecker";
}
else
{

}

