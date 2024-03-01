function nameAndColor () {
    let username = prompt("What is your name? ");
    let usercolor = prompt("What is your favorite color? ");
    document.write ("Hello ");
    document.write (username);
    document.write ("! Since your favorite color is ");
    document.write (usercolor);
    document.write (", you have won a " + usercolor + " phone case!"); 
}