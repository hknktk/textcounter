{
  const $text = document.querySelector('#content');
  const $number = document.querySelector('#counter_number');
  const $button = document.querySelector('#button');



  $button.addEventListener('click' , () =>{
    $text.value= $text.value.replace(/\r\n/g, '');
    $text.value = $text.value.replace(/\n/g, '');
    $text.value = $text.value.replace(/\s+/g, '');
    let $length = $text.value.length;
    $number.textContent = $length;
  })

}