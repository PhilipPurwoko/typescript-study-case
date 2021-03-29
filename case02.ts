class Calculator {
    factorial(number: number): number {
        if (number > 1) {
            return number * this.factorial(number - 1)
        } else {
            return 1
        }
    }

    handshake(people: number): number {
        return 1 / 2 * people * (people - 1)
    }
}

class StatisticSupport {
    getSum(array: number[]): number {
        let sum = 0
        array.forEach(a => {
            sum += a
        })
        return sum
    }

    getDistance(mean: number, num: number): number {
        return num - mean
    }
}

class Statistic extends StatisticSupport {
    mean(array: number[]): number {
        return this.getSum(array) / array.length
    }

    median(array: number[]): number {
        const meOdd = (sortedArray: number[]): number => {
            return sortedArray[(sortedArray.length + 1) / 2 - 1]
        }
        const meEven = (sortedArray: number[]): number => {
            return sortedArray[1 / 2 * (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 + 1]) - 1]
        }
        const isEven: boolean = array.length % 2 == 0 ? true : false
        const sorted: number[] = array.sort()
        return isEven ? meEven(sorted) : meOdd(sorted)
    }

    mode(array: number[]): number | number[] {
        const modes: { [key: number]: number } = {}
        array.forEach((num: number) => {
            num in modes ? modes[num] += 1 : modes[num] = 1
        })

        let topNum: any
        let topF = 0
        for (const key in modes) {
            if (modes[key] > topF) {
                topF = modes[key]
                topNum = Number(key)
            }
        }

        for (const key in modes) {
            if (key != topNum) {
                if (modes[key] == topF) {
                    try {
                        topNum.push(Number(key))
                    } catch (error) {
                        topNum = [topNum, Number(key)]
                    }
                }
            }
        }
        return topNum
    }

    variance(array: number[]): number {
        const mean: number = this.mean(array)

        const distances: number[] = []
        for (let index = 0; index < array.length; index++) {
            distances.push(this.getDistance(mean, array[index]) ** 2)
        }
        return this.getSum(distances) / array.length
    }

    standardDeviation(array: number[]): number {
        return this.variance(array) ** (1 / 2)
    }
}

// Class instanciate
const calculator: Calculator = new Calculator()
const statistic: Statistic = new Statistic()

// Create new array of number
const data: number[] = [600, 470, 170, 430, 300]
const data2: number[] = [1, 2, 3, 4, 4, 5, 5, 6, 6]

// Run the algorithm
console.log(`Factorial of 3 : ${calculator.factorial(3)}`)
console.log(`Handshake of 10 peoples : ${calculator.handshake(10)}`)

console.log(`Mean of ${data} : ${statistic.mean(data)}`)
console.log(`Median of ${data.sort()} : ${statistic.median(data)}`)
console.log(`Modes of ${data2} : ${statistic.mode(data2)}`)
console.log(`Variance of ${data} : ${statistic.variance(data)}`)
console.log(`Standard Deviation of ${data} : ${statistic.standardDeviation(data)}`)