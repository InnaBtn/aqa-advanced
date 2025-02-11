class DelayedText {
    static timeFuction(sometext, time) {
        setTimeout(console.log, time, sometext);
    }
}

export default DelayedText;
