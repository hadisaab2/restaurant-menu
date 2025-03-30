
export const convertPrice = (price, currencySymbol) => {
    let finalformat;
    if (currencySymbol == "$") {
        if (price % 1 === 0) {//if full number like 2 3 4..
            finalformat = `${price.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${currencySymbol}`;
        } else {
            finalformat = `${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${currencySymbol}`;

        }
    } else {
        finalformat = `${price.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${currencySymbol}`
    }
    return finalformat
};
