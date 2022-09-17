const binanceAPI = 'https://api.binance.com/'
const endpointPrices = 'https://api.binance.com/api/v3/ticker/price'
const endpointPriceChange = ''
const dataBody = document.querySelector('#data')


fetch(endpointPrices)
    .then( response => response.json())
    .then( data => renderData(data))
    .catch( error => console.log(error))


function renderData(_data) {
    let row = ''
    _data.forEach( e => {
        row += `<tr>
            <td class=".border-bottom">${e.symbol}</td>
            <td class=".border-bottom">${e.price}</td>
            </tr>`
    });
    dataBody.innerHTML = row
}