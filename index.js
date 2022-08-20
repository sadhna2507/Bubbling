document.querySelector("#grandparent")
  .addEventListener('click', (event) => {
    console.log("Grandparent Clicked!");
    //  event.stopPropagation();
  }, true);   
//   bubbling   
//   capturing

  document.querySelector("#parent")
  .addEventListener('click', () => {
    console.log("Parent Clicked!");
  }, true);
//   capturing
// inf false=> bubbling

  document.querySelector("#child")
  .addEventListener('click', () => {
    console.log("Child Clicked!");
  }, false);
//   capturing

// e.stop propagation will stop at one place, and it help us to simply call that element