const shopList = [
    {
        name: "яблуко",
        quantity: 3,
        isBought: false,
        price: 5,
        sum: function () {return this.quantity * this.price},
    },

    {
        name: 'лимон',
        quantity: 2,
        isBought: true,
        price: 7,
        sum: function () {return this.quantity * this.price},
    },

    {
        name: 'апельсин',
        quantity: 5,
        isBought: false,
        price: 4,
        sum: function () {return this.quantity * this.price},
    },

    {
        name: 'банан',
        quantity: 7,
        isBought: true,
        price: 9,
        sum: function () {return this.quantity * this.price},
    }
]




const userProduct = prompt('Що бажаєте купити?', 'яблуко')
const userQuantity = +prompt('Скільки штук бажаєте купити?', 3)


function buyProduct(userProduct, userQuantity){
    for (let i = 0; i < shopList.length; i++){
        if (shopList[i].name === userProduct){
            shopList[i].isBought = true
            shopList[i].quantity += userQuantity
            console.log(shopList[i])
            return
        }
    }
    alert(`Товар під назвою ${userProduct} не знайдено в списку товарів`)
}



function getSortedList(arr){
    arr.sort(function(a, b){
        return a.isBought - b.isBought
    })
}

function deleteProduct (arr, product) {
    const result = arr.filter(element => element.name !== product)
    console.log(result)
}

function getTotalSum (arr) {
    let result = 0
    for(let i = 0; i < arr.length; i++){
        result += arr[i].sum()
    }
    console.log(result)
}

function getSumOfRemaining (arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
        if (!arr[i].isBought){
            result += arr[i].sum()
        }
    }
    console.log(result)
}


// buyProduct(userProduct, userQuantity)
// getSortedList(shopList)
// deleteProduct(shopList, 'лимон')
// getTotalSum(shopList)
// getSumOfRemaining(shopList)
console.log(shopList)