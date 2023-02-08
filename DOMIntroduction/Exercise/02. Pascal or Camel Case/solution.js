function solve() {
  let text = Array.from(document.getElementById('text').value.toLowerCase().split(' '));
  const convention = document.getElementById('naming-convention').value
  let conventionType = -1;
  let result = '';
  if(convention === 'Camel Case'){
    conventionType = 1;
    result += text[0];
  } else if(convention === 'Pascal Case'){
    conventionType = 0
  } else{
    document.getElementById('result').innerHTML = '<p>Error!</p>';
    return;
  }
  for (let index = conventionType; index < text.length; index++) {
         result += text[index][0].toUpperCase();
         result += text[index].slice(1);
  }
  document.getElementById('result').innerHTML = `<p>${result}</p>`;
}