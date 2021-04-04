function initialize()
{
    timer = 7;
    guess = "";
    code = "";
    timerDiv = document.getElementById("timer");
    guessDiv = document.getElementById("guess");
    logDiv = document.getElementById("log");
    getRandomCode();
}
function getRandomCode()
{
    for (i = 0; i < 3; i++)
    {
        code += String(parseInt(Math.random() * 3 + 1))
    }
    console.log(code)
}
function addGuess(num)
{
    guess += String(num);
    guessDiv.innerHTML = guess;
}
function clearGuess()
{
    timer = 7;
    guess = "";
    code = "";
    timerDiv.innerHTML = "";
    guessDiv.innerHTML = "";
    logDiv.innerHTML = "";
}