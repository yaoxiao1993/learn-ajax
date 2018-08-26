window.onload = function(){
    //为了js代码发执行不阻塞页面DOM的渲染，我们使用这个方法页让页面加载完成之后执行内部代码！

    axios.get('http://localhost:3000/movies')
        .then(function(response){
            let movies = response.data, str = ``;
            movies.forEach(movie => {
                let star = "★★★★★☆☆☆☆☆";
                let rate = Math.round(movie.score/2);
                console.log(star[5])
                str += `
                <li class="movieBox">
                    <div class="mPost">
                        <img src="${movie.post}" alt="{movie.title}">
                    </div>
                    <div class="mTitle">${movie.title}</div>
                    <div class="mScore">${star.slice(5-rate, 10-rate)+movie.score} 分</div>
                </li>`
                console.log(star.slice(5-rate, 10-rate))
            });
        let moviesRow = document.getElementById("moviesRow")
        moviesRow.innerHTML += str;
        
        })

        .catch(function(error){
            console.log(error);
        });
}