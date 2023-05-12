// class Circle {
//     constructor(radius){
//         this.radius = radius
//     }

//     get cirqleRadius() {
//         return this.radius
//     }

//     get diametr() {
//         return this.radius * 2
//     }

//     get area() {
//         return Math.PI * Math.pow(this.radius, 2)
//     }

//     get length() {
//         return this.diametr * Math.PI
//     }
// }

// const circle = new Circle(5)

// console.log(`
//     Радіус кола: ${circle.cirqleRadius}
//     Діаметр кола: ${circle.diametr}
//     Площа кола: ${circle.area.toFixed(2)}
//     Довжина кола: ${circle.length.toFixed(2)}
// `)


class Marker {
    constructor(color, ink){
        this.color = color
        this.ink = ink
    }

    write(text) {
        let writtenText = ''
        let result = document.createElement('h2')
        result.style.color = this.color
        
        for (let i = 0; i < text.length; i++){
            if (text[i] !== ' ' && this.ink > 0){
                writtenText += text[i]
                this.ink -= 0.5
            } else if (this.ink <= 0){
                break
            } else {
                writtenText += " "
            }
        }

        result.innerText = writtenText
        console.log(result);
        return document.body.appendChild(result)
    }
}

class RefillebleMarker extends Marker{
    constructor(color, ink, capacity) {
        super(color, ink)
        this.capacity = capacity
    }

    refill(inkAmount) {
        if (inkAmount + this.ink > this.capacity){
            this.ink = this.capacity
        } else {
            this.ink += inkAmount
        }
    }
}

const marker = new Marker('red', 10)
marker.write("I am Groot! We are Groot! You are not Groot!")

const refillMarker = new RefillebleMarker('green', 0, 17)
refillMarker.refill(20)
refillMarker.write("I am Groot! We are Groot! You are not Groot!")