function checkOrder (available, ordered) {
    if (ordered === 0) {
        return "Your order is empty.";
        return;
    }
   if (ordered > available) {
       return "Your order is too large, we don't have enough goods.";
       return;
   }
  return "Your order is accepted";
}
checkOrder(2, 3);
checkOrder(3, 2);
checkOrder(2, 0);



function checkOrder2 (available, ordered) {
    if (ordered === 0) {
        return "Your order is empty.";
    }
    else if (ordered > available) {
        return "Your order is too large, we don't have enough goods.";
    }
    else return "Your order is accepted";
}
checkOrder2(3, 2);
checkOrder(2, 3);
checkOrder(2, 0);