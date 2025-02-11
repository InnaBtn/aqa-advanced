class DelayedText {
    static timeFuction(sometext, time) {
        setTimeout(console.log, time, sometext);
    }
}

export default DelayedText;




// function timeFuction (sometext, time) {
//     setTimeout(console.log, time, sometext);
// }

// timeFuction("Some random text.", 2000);
