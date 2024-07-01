// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้

inventory.apple.quantity = 200;
inventory.orange={};
inventory.orange.price = 20;
inventory.orange.quantity = 300;

//console.log(inventory)

let totalInventoryValue = 0;

for (let index in inventory) {
    totalInventoryValue = totalInventoryValue+(inventory[index].price*inventory[index].quantity);
}

console.log(`Total inventory value: ${totalInventoryValue.toLocaleString()} baht`)