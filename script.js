




                                   //    Dark Mode Script 
 

//create a variable to monitor the input checkbox
const colorSwitch = document.getElementById("input-color-switch");

//when the input is clicked verify the state of the checkbox
colorSwitch.addEventListener("click", checkMode);

//1. see which state the checkbox is in
//2. if it is checked enable the dark mode by adding the class
//3. if it is not checked remove dark mode by removing the class
function checkMode() {
  console.log("checking...");
  if (colorSwitch.checked) {
    console.log("dark on");
    darkModeOn();
  } else {
    console.log("dark off");
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark-mode");
}

function darkModeOff() {
  document.body.classList.remove("dark-mode");
}



                                   //   end  Dark Mode Script 






                                   //   head carosol Script 


                                   var collection;


                                   collection = ['https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/1184000/pexels-photo-1184000.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/290098/pexels-photo-290098.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/762064/pexels-photo-762064.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/705405/pexels-photo-705405.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/848748/pexels-photo-848748.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000'];
                                            
                                   
                                              let element_img = document.getElementById('img');
                                            element_img.setAttribute("src", collection[0]);
                                            
                                            
                                            document.getElementById('SLIDE').addEventListener('click', (event) => {
                                              collection.push(collection.shift());
                                              let element_img2 = document.getElementById('img');
                                              element_img2.setAttribute("src", collection[0]);
                                            
                                            });

                                   //   end  head carosol Script 


 //     Get To TOP button 


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


            //   end  Get To TOP button  



                                   //     close burger Script 

                                   $('.hamburger').on('click', function () {
                                    $('.menu').addClass('open');
                                  });
                                  
                                  $( '.menu a' ).on("click", function(){
                                    $('.menu').removeClass('open');
                                  });
                                   

                                   //   end  close burger Script 



                                   //     Dark Mode Script 



                                   //   end  Dark Mode Script 



                                   //     comments Script 


                                   var comments, item;
        
                                   function getNumberOrString(value) {
                                     // Convert a string value to a number if possible
                                     let number_value = Number(value);
                                     if (Number.isNaN(number_value)) {
                                       return value
                                     } else {
                                       return number_value
                                     }
                                   }
                                   
                                   
                                   comments = ['very great website. John', 'love the simple layout. Alex', 'I would like to hire you. David'];
                                   let element_list = document.getElementById('list');
                                   comments.forEach((item) => {
                                     let new_li = document.createElement('li');
                                     new_li.innerText = comments.shift();
                                   
                                     element_list.appendChild(new_li);
                                   });
                                   
                                   
                                   document.getElementById('button').addEventListener('click', (event) => {
                                     comments.unshift(getNumberOrString(document.getElementById('name-text').value));
                                     let element_list2 = document.getElementById('list');
                                     let new_li2 = document.createElement('li');
                                     new_li2.innerText = comments[0];
                                   
                                     element_list2.appendChild(new_li2);
                                   
                                   });
                           
                           

                                   //   end  comments Script 
















