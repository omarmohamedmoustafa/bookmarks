document.addEventListener('contextmenu',function(e)
{
    e.preventDefault();
});
document.addEventListener('keydown',function(e)
{
    console.log(e)
    if(e.key=='F12')
    {
        e.preventDefault();
    }
});


var visit = document.getElementById('visit');
//var visit_a =visit.querySelector('a');
var bookMarkUrl = document.getElementById('URL');
var bookMarkName = document.getElementById('NAME');

var saveBtn = document.getElementById('save-btn');

var bookMarksSection = document.getElementById('bookmarks-section');
(function OnLaunch()
{
    if(localStorage.getItem('bookmarks'))
    {
        arrOfLinks = JSON.parse(localStorage.getItem('bookmarks'));
        displayBookMark(arrOfLinks);
    }
    else
    {
        arrOfLinks=[];
    }
})();

// visit.addEventListener('click',function(e)
// {
//     visit_a.href ="https://www.facebook.com/";
// })
var Gindex;
function displayBookMark(arr)
{
    var bookmarks='';
    for(var i=0;i<arr.length;i++)
    {
        
        bookmarks+=`
        <div class="bookmarks mb-1 d-flex align-items-center justify-content-between">
            <h3>${arrOfLinks[i].name}</h3>
            <div class="website-btn">
                <button id="visit" class="btn me-4 btn-outline-success"><a  href="${"https://"+arrOfLinks[i].url}">Visit</a></button>
                <button onclick="deleteBookMark(${i})" id="delete" class="btn     btn-outline-danger">Delete</button>
            </div>
        </div>`;
    }
    bookMarksSection.innerHTML=bookmarks;
}
function addBookmark()
{
    if(bookMarkName.value && bookMarkUrl.value){
        var bookMark={
            name:bookMarkName.value,
            url:bookMarkUrl.value
        }
        arrOfLinks.push(bookMark);
        localStorage.setItem('bookmarks',JSON.stringify(arrOfLinks));
        displayBookMark(arrOfLinks);
        clearInputs();
    }
}
saveBtn.addEventListener('click',addBookmark);
function deleteBookMark(i)
{
    arrOfLinks.splice(i,1);
    localStorage.setItem('bookmarks',JSON.stringify(arrOfLinks));
    displayBookMark(arrOfLinks)
}
function clearInputs()
{
    bookMarkName.value='';
    bookMarkUrl.value='';
}