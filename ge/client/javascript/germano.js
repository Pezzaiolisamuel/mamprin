$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#front');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('#nav').css('background-color', '#1D3557dd');
           $('#nav').css('boxShadow', '3px 0px 7px #E63946');
        } else {
           $('#nav').css('background-color', 'transparent');
           $('#nav').css('boxShadow', '0px 0px 0px transparent');
        }
    });
 });


 var typed = new Typed('.typed-words', {
    strings: [  "ESPERIENZA",
                "COMPETENZA",
                "PROFESSIONALITÁ",
                "EFFICENZA",
                "PASSIONE",
                "QUALITÁ",
            ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    startDelay: 250,
    loop: true,
    showCursor: false
});

$(".copyMe").on('click', function(){
   let copyText = this;
   $('.tooltiptext').show();
   let index = copyText.textContent.indexOf(" C");
   console.log(index);
   let text = copyText.innerText.slice(0, index );
   let textArea  = document.createElement('textarea');
   textArea.width  = "1px"; 
   textArea.height = "1px";
   textArea.background =  "transparents" ;
   textArea.value = text;
   document.body.append(textArea);
   textArea.select();
   textArea.setSelectionRange(0, 99999)
   document.execCommand('copy');
   $('.tooltiptext').text("Copiato!");
   setTimeout(
      function() {
         $('.tooltiptext').hide();
         $('.tooltiptext').text(" CLICCA PER COPIARE");
         textArea.parentNode.removeChild(textArea);
      }, 2000);
})

$('#carouselExampleIndicators').carousel({
   interval:2000,
   keyboard: true,
})


