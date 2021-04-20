{
  const $text = document.querySelector('#content');
  const $number = document.querySelector('#counter_number');
  const $counter_button = document.querySelector('#counter_button');
  const $set_button = document.querySelector('#set_button');
  const $copy_button = document.querySelector('#copy_button');
  const $alert_message = document.querySelector('#alert');
  const $result = document.querySelector('#result');




  function numberCheck() {
    let $setting_length = document.querySelector('#setting_length').value;
    if(!isNaN($setting_length)){
      // let $setting_length = document.querySelector('#setting_length').value;
      $alert_message.classList.add('show');
      $alert_message.textContent = $setting_length + '文字に設定しました。';
    } else if($setting_length === ''){
      return;
    }
  }

  $set_button.addEventListener('click', () =>{
    numberCheck();
  })


  function count() {
    $text.value= $text.value.replace(/\r\n/g, '');
    $text.value = $text.value.replace(/\n/g, '');
    $text.value = $text.value.replace(/\s+/g, '');
    let $length = $text.value.length;
    $number.textContent = $length;
    let $setting_length = document.querySelector('#setting_length').value;



   if($setting_length - $length < 0){
      $alert_message.textContent = $length-$setting_length + "文字オーバーしています。";
    }
    else if($setting_length - $length === 0){
      $alert_message.textContent = 'ちょうど'+ $setting_length + '文字です。';
    }else{
      $alert_message.textContent = $setting_length - $length + '文字足りません。';
    }

    $alert_message.classList.add('show');
  }
  
  $counter_button.addEventListener('click', () =>{
    count();
  })


  function copy() {
    let textTarget = document.querySelector('#content');
    textTarget.select();
    document.execCommand('Copy');

    $result.classList.add('show');

    setTimeout(() => {
    $result.classList.remove('show');
    },6000);
  
  }
  


  $copy_button.addEventListener('click', () => {
  copy();
  })
}