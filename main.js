{
  const $text = document.querySelector('#content');
  const $number = document.querySelector('#counter_number');
  const $copy_button = document.querySelector('#copy_button');


  function countUp() {
    $text.value= $text.value.replace(/\r\n/g, '');
    $text.value = $text.value.replace(/\n/g, '');
    $text.value = $text.value.replace(/\s+/g, '');
    let $length = $text.value.length;
    $number.textContent = $length;
  }

  $text.addEventListener('keyup', () =>{
    countUp();
  })


  $copy_button.addEventListener('click', () => {
    textCopy();
  })

  function textCopy() {
    let textTarget = document.querySelector('#content');
    textTarget.select();
    document.execCommand('Copy');

    alert('コピーが完了しました。');
  }


}