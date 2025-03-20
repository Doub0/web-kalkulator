export function fizzBuzz (tall) {
    if (tall%15===0)
        return 'Fizzbuzz'
    if (tall%3===0)
        return 'Fizz'
    if (tall%5===0)
        return 'Buzz'
    return tall.toString()
}
