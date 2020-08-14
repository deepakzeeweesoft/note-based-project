console.log("welcome to javascripts notes projects");
console.log("Its a final project");
showNotes()

// if user add a note, add it to the localstorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle=document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
      let myObj={
          title: addtitle.value,
          text: addTxt.value
      }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value="";
    console.log(notesObj);
    showNotes();
});

// function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                   
<div class="noteCard my-4 mx-4 card" style="width: 18rem;">
            <div class="card-body">
 <h5 class="card-title">${element.title}</h5>
 <p class="card-text">${element.text}</p>
         
<button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
        </div>`;

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! "add a Note" section above to add notes.`;
    }
}

// function to delete a note
function deleteNote(index) {
    console.log('I am deleting',index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
      notesObj.splice(index,1);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      showNotes();
}



    let search=document.getElementById('searchTxt');
     search.addEventListener("Input",function(){

        let inputVal=search.value.toLowerCase();
        console.log('input event fired!',inputVal);
         let noteCard=document.getElementsByClassName('noteCard');
         Array.form(noteCard).forEach(function(element){
             let cardTxt=element.getElementByTagName("p")[0].innerText;
            // console.log(cardTxt)

            if(cardTxt.include(inputVal))
               {
                   elements.style.display="block";
               }
                    else
                      {
                          element.style.display="none";
                      }
         })

    })
