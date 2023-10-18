function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const total = pricePerDroid * orderedQuantity + deliveryFee;
  const message = `You ordered droids worth ${total} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  // Change code above this line
  return message
}
