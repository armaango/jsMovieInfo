$(document).ready(()=>{
    $('#searchForm').on('submit',(e)=>{
        let searchText = $('#searchText').val();
        e.preventDefault();
    });
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com?s='+searchText)
        .then((res)=>{
            let movies = res.data.Search;
            let output = '';
            $.each(movies, (index,movie)=>{
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}" >
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                `;
            });
            $('#movies').html(output);
        })
        .catch((err)=>{
            console.log(err)
        });
}