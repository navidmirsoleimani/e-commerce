export const CalculateDiscount = (current , previous) => {
    return Math.floor(100 - ((current / previous) * 100))
}