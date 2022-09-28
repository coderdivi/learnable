
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}

var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}

const tabItems= document.querySelectorAll('.tab-item');
const tabContentItems= document.querySelectorAll('.tab-content-item')


// select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add ('tab-border')

    // Gr'('login-form')'ab content item from DOM

    const tabContentItem= document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentItems.forEach(item=> item.classList.remove('show'))
}

// listen for tab click
tabItems.forEach(item=> item.addEventListener('click', selectItem))
