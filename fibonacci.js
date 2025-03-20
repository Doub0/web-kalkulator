export function fibonacci (tall) {
    if (tall===1)
        return 1
    if (tall===2)
        return 1
    return fibonacci(tall-2)+fibonacci(tall-1)
    } 