/**
 * TASK 1: Add an event listener to the `<button class="rte-italics">`.
 *
 *         When user clicks, it should toggle the `fontStyle` property
 *         value of the `<p class="textbox"></p>` to «italic».
 */



var text2Format = document.querySelector('.textbox');
var btnit = document.querySelector('.rte-italics');
var btnbold = document.querySelector('.rte-bold');


  btnit.addEventListener('click', function(event){
    // var defStyle = window.getComputedStyle(text2Format)
    text2Format.style.fontStyle = "italic"
  });

/**
 * TASK 2: Add an event listener to the `<button class="rte-bold"></button>`.
 *
 *         When user clicks, it should toggle the `fontWeight` property
 *         value of the `<p class="textbox"></p>` to 700.
 */

 btnbold.addEventListener('click', function(event){
   // var defStyle = window.getComputedStyle(text2Format)
   text2Format.style.fontWeight = "bold"
 });

/**
 * TASK 3:
 * Add event listeners to the `<button class="rte-fontsize"></button>` elements.
 *
 *         When user clicks, it should change the `fontSize` property of the
 *         `<p class="textbox"></p>` to the value of the button that was clicked.
 */

 var btnTextSize = document.querySelectorAll('.rte-box button');

 btnTextSize.forEach(function (button) {
   button.addEventListener('click', function(event){
     var btn = event.target;
     var newSize = btn.textContent;

     text2Format.style.fontSize = newSize;
   })
 })

/**
 * TASK 4:
 * Add event listener to the `<button class="rte-fontcolor"></button>` elements.
 *
 *         When user clicks, it should take the value from the `data-color`
 *         attribute and set the `color` property of the `<p class="textbox"></p>`
 *
 *         To access data-* attributes
 *         https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

 var btnColor = document.querySelectorAll('.color-palette button');

 btnColor.forEach(function (button) {
   button.addEventListener('click', function(event){

     var colorToOvrwrite = event.target.dataset.color; //gets the color from the color button
     text2Format.style.color= colorToOvrwrite;
     //var extractColor = event

   })
 })
