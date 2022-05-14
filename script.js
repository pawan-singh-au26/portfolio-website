var form=document.querySelector('form');
form.addEventListener('submit',function(e){
    var feet=document.querySelector('#feet');
    var result=document.querySelector('#result');
    e.preventDefault();
    feet=parseInt(feet.value);

    if(isNaN(feet)){
        result.textContent="pls enter a valid number !";
    }
    else if (feet<=0){
        result.textContent="pls enter a feet value>0";

    }
    else{
        var converted_value=feet*30.48;
        result.textContent=`${converted_value}cm`;
        document.querySelector('#feet').value='';
        document.querySelector('#inches').value='';

    }
})