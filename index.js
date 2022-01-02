class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        return this.array.reduce(add, 0)
    }
}

function add(accumulator, a) {
    return accumulator + a;
  }

  class Triangle extends Polygon{
    get isValid(){
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        if(a+b <= c || b+c <= a || c+a <= b){
            console.log("t")
            return false
        }
        console.log('fa')
        return true
    }
  }

  class Square extends Polygon{
      get isValid(){
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        let d = this.array[3]

        if(a === b && b === c && c === d){
            return true
        } return false
      }
      get area(){
          return Math.pow(this.array[0], 2)
      }
  }