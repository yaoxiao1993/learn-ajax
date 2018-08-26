window.onload=function(){
    let addButton = document.getElementById("addButton");
    const form = this.document.getElementById("addMovie");
    addButton.addEventListener('click',e=>{
        e.preventDefault();
        const movieData = getMovieData("addMovie");
        console.log(movieData)
        axios.get('http://localhost:3000/movies')
            .then(function(response){
                if(response.data){
                    alert("添加成功！");
                    form.reset();
                }
            })
            .catch(function(error){
                console.log(error);
            });
    },false);
}

function getMovieData(formId){
    const form = document.getElementById(formId);
    let tagElements = form.getElementsByTagName('input');
    let movieData = {};
    for(let item of tagElements){
        movieData[item.name] = item.value;
    }
    return movieData;
}

