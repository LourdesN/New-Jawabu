function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//Smooth scrolling
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) 
{ // relitere 
    item.addEventListener('click', (e)=> 
    {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView(
    {
      behavior: 'smooth'
    })
    history.pushState(null, null, hashval)
    e.preventDefault()
  })
}

//Statistics responsiveness
// select the element
const counters = document.querySelectorAll('.counter');

// iterate through all the counter elements
counters.forEach(counter => 
    {
    // function to increment the counter
    function updateCount() 
    {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerHTML;

        const inc = Math.floor((target - count) / 100);

        if (count < target && inc > 0) 
        {
            counter.innerHTML = (count + inc);
            // repeat the function
            setTimeout(updateCount, 1);
        }
        // if the count not equal to target, then add remaining count
        else 
        {
        counter.innerHTML = target;
        }
    }
   updateCount();
});