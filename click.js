let numberOfClicks = 0;

function click()
{
    numberOfClicks++;
    return numberOfClicks;
}

function totalClicks()
{
    let finalCount = click();
    return finalCount;
}

function printClicks()
{
    let finalCount = totalClicks() ;
    alert("You Clicked " + (finalCount-1) + " times")
    numberOfClicks = 0;
}