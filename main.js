{
  const $text = document.querySelector('#content');
  const $minus = document.querySelector('#minus');
  const $number = document.querySelector('#counter_number');
  const $counter_button = document.querySelector('#counter_button');
  const $set_button = document.querySelector('#set_button');
  const $copy_button = document.querySelector('#copy_button');
  const $alert_message = document.querySelector('#alert');


  function countUp() {
    $text.value= $text.value.replace(/\r\n/g, '');
    $text.value = $text.value.replace(/\n/g, '');
    $text.value = $text.value.replace(/\s+/g, '');
    let $length = $text.value.length;
    $number.textContent = $length;
  }



  
  function textCopy() {
    let textTarget = document.querySelector('#content');
    textTarget.select();
    document.execCommand('Copy');
  }

  function countDown() {
    let $length = $text.value.length;
    let $setting_length = document.querySelector('#setting_length').value;
    $alert_message.textContent = $setting_length - $length + '文字足りません。';
    if($setting_length - $length < 0){
      $alert_message.textContent = $length-$setting_length + "文字オーバーしています。"
    }
  }

  function alertMessageShow(){
    $alert_message.classList.add('show');
  } 

  function numberCheck() {
    let $setting_length = document.querySelector('#setting_length').value;
    if(!isNaN($setting_length)){
      countDown();
      alertMessageShow();
    }else{
      $alert_message.textContent = '数字以外が入力されています。';
      alertMessageShow();
    }
  }


  $set_button.addEventListener('click', () =>{
    numberCheck();
  })


  $counter_button.addEventListener('click', () =>{
    countUp();
    countDown();
  })


  $copy_button.addEventListener('click', () => {
    textCopy();
    result_display();
  })


  const $result = document.querySelector('#result');
  function result_display() {
    $result.classList.add('show');

    setTimeout(() => {
    $result.classList.remove('show');
    },6000);
  }


}