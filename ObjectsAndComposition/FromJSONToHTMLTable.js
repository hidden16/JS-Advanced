function solve(json){
    // JSON.parse throws exception on local machine, gets validated by judge 100/100
    // JSON.stringify works perfectly fine on local machine, gets invalid answer in judge 0/100
    let arr = JSON.parse(json);
    let result = [];
    result.push('<table>');
    let stringBuilder = '';
    let objectNames = Object.getOwnPropertyNames(arr[0]);
    stringBuilder += '   <tr>';
    for(let object of objectNames){
        stringBuilder += `<th>${escapeHtml(object)}</th>`;
    }
    stringBuilder += `</tr>`;
    result.push(stringBuilder);
    for(let element of arr){
        stringBuilder = '   <tr>'
        for(let value in element){
            stringBuilder += `<td>${escapeHtml(element[value])}</td>`;
        }
        stringBuilder += '</tr>';
        result.push(stringBuilder);
    }
    result.push('</table>');
    console.log(result.join('\n'));

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
solve([{"Name":"Pesho","Score":4,"Grade":"8"},{"Name":"Gosho","Score":5,"Grade":"8"},{"Name":"Angel","Score":5.5,"Grade":"10"}]
);