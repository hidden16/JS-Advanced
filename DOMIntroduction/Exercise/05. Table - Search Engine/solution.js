function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let text = document.getElementsByTagName('tr');
      const searchBy = document.getElementById('searchField').value;
      for (let i = 1; i < text.length; i++) {
         if(text[i].textContent.includes(searchBy)){
               text[i].className = 'select'
         }else{
            text[i].className = '';
         }
      }
   }
}