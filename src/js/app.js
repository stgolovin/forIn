export default function orderByProps(obj, sortingOrder) {
    const result = [];
    const orderedProps = [];

    for (const prop in obj) {
        orderedProps.push(prop)
        if (sortingOrder.includes(prop)) {
            result.push({'key': prop, 'value': obj[prop]})
        }
    }
    orderedProps.sort()

    for (const prop of orderedProps) {
        if (!sortingOrder.includes(prop)) {
            result.push({'key': prop, 'value': obj[prop]})
        }
    }
    return result
}
