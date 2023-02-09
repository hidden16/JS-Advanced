function search() {
   let towns = document.getElementsByTagName('li');
   const search = document.getElementById('searchText').value;
   let matches = 0;
   for (let index = 0; index < towns.length; index++) {
      if (towns[index].textContent.includes(search)) {
         towns[index].style.fontWeight = 'bold';
         towns[index].style.textDecoration = 'underline';
         matches++;
      }else{
         towns[index].style.fontWeight = '';
         towns[index].style.textDecoration = '';
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}
