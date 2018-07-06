// require purchase.js in init 
// since it defines purchaseProduct()

// ["purchase"] - file extension is omitted 
// since requireJS only considers .js files


require(["purchase"],function(purchase){
  purchase.purchaseProduct();
});