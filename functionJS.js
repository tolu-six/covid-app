exports.percentageCalc = (dataValue, total) => {
    if (dataValue === 0) return 0
    let perc =  Math.round((dataValue * 100) / total);
    return `+${dataValue} (${perc}%)`
}