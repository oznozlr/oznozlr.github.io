async function getNews(){
    await fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=LXrtuvhtVz6hJQ9Z1QbkJqDKRO4clQAk')
    .then(d => d.json())
    .then(response => {
        console.log(response.results);
        for(var i = 0; i < 2; i++){
            const output = document.getElementById('output');
            
            try{
                output.innerHTML += `

                
                
                <div class="post">
                    <a class="post-img" href="blog-post.html"><img src="${response.results[i]['multimedia'][0].url}" alt="${response.results[i]['multimedia'][0].caption}"></a>
                    <div class="post-body">
                            <div class="postUp">
                                <a  href="category.html">${response.results[i].section}</a>
                                <span class="post-date">${response.results[i].created_date}</span>

                            </div>
                           
                        
                        <h3 class="post-title">
                        <button id="getDetail">${response.results[i].title}</button>
                        <a id="getDetail" >${response.results[i].title}</a>
                        </h3>
                    </div>
                </div>
                
                
                `
                console.log(response.results[i]['media'][0].caption);
            }
            catch(err){
                console.log(err);
            }
            // console.log(response.results[i].title);
            // console.log(i);
        }
        document.getElementById('copyright').innerHTML = response.copyright;
    })
}
getNews();

/*   --  <!-- Demo code sample. Not indended for production use. -->

<button onclick="execute()">Execute</button>

<script>

// WARNING: fetch is not supported in IE, so it may need a polyfill

function execute() {
  const url = "https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=f3JZAAyDjcQOLyf32JLz2QW2Q3UnhGVc";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  fetch(url, options).then(
    response => {
      if (response.ok) {
        return response.text();
      }
      return response.text().then(err => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}

</script>
*/


async function getCarNews(){
    await fetch('https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=f3JZAAyDjcQOLyf32JLz2QW2Q3UnhGVc')
    .then(d => d.json())
    .then(response => {
        console.log(response.results);
        for(var i = 0; i < 6; i++){
            const output = document.getElementById('outputcars');
            
            try{
                output.innerHTML += `

                <div class="recent">
                <a href="recentImg" href="#"><img src="${response.results[i]['multimedia'][0].url}" alt="${response.results[i]['multimedia'][0].caption}"></a>
                <div class="recent-body">
                    <div class="recentUp">
                        <a href="category.html">${response.results[i].section}</a>
                        <span class="recentPostDate">${response.results[i].created_date}</span>
                    </div>
                    <h3><a href="${response.results[i].short_url}">${response.results[i].title}</a></h3>
                </div>
            </div>




                
                
                
                `
                console.log(response.results[i]['media'][0].caption);
            }
            catch(err){
                console.log(err);
            }
            // console.log(response.results[i].title);
            // console.log(i);
        }
        document.getElementById('copyright').innerHTML = response.copyright;
    })
}
getCarNews();



async function getScienceNews(){
  await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=UCDpLC6Nr43JiO4AGMe5KuTXKUQ6UeF0')
  .then(d => d.json())
  .then(response => {
      console.log(response.results);
      for(var i = 0; i < 9; i++){
          const output = document.getElementById('outputScience');
          
          try{
              output.innerHTML += `
              <div class="science">
                <a href="scienceImg" href="#"><img src="${response.results[i]['multimedia'][0].url}" alt="${response.results[i]['multimedia'][0].caption}"></a>
                <div class="science-body">
                    <div class="scienceUp">
                        <a href="category.html">${response.results[i].section}</a>
                        <span class="sciencePostDate">${response.results[i].created_date}</span>
                    </div>
                    <h3><a href="blog-post.html">${response.results[i].title}</a></h3>
                    <p>${response.results[i].title}<a class="moreLink" href="blog-post.html">load more</a></p>
                </div>
            </div>
              
              `
              console.log(response.results[i]['media'][0].caption);
          }
          catch(err){
              console.log(err);
          }
          // console.log(response.results[i].title);
          // console.log(i);
      }
      document.getElementById('copyright').innerHTML = response.copyright;
  })
}
getScienceNews();

/*
<!-- Demo code sample. Not indended for production use. -->

<button onclick="execute()">Execute</button>

<script>

// WARNING: fetch is not supported in IE, so it may need a polyfill

function execute() {
  const url = "https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=[YOUR_API_KEY]";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  fetch(url, options).then(
    response => {
      if (response.ok) {
        return response.text();
      }
      return response.text().then(err => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}

</script>


*/

async function getIdeaNews(){
  await fetch('https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=uPNI5EgFuREjYFP876HxZumBGcX1gWid')
  .then(d => d.json())
  .then(response => {
      console.log(response.results);
      for(var i = 0; i < 3; i++){
          const output = document.getElementById('outputIdea');
          
          try{
              output.innerHTML += `

              <div class="view">
                
                    <a  href="blog-post.html"><img src="${response.results[i]['multimedia'][0].url}" alt="${response.results[i]['multimedia'][0].caption}"></a>
                    <div class="viewBody">
                        <div class="viewBodyUp" >
                            <a class="category"  href="category.html">${response.results[i].section}</a>
                            <span >${response.results[i].created_date}</span>
                        </div>
                        <h4><a href="blog-post.html">${response.results[i].title}</a></h4>
                    </div>
                
            </div>
              
              `
              console.log(response.results[i]['media'][0].caption);
          }
          catch(err){
              console.log(err);
          }
          // console.log(response.results[i].title);
          // console.log(i);
      }
      document.getElementById('copyright').innerHTML = response.copyright;
  })
}
getIdeaNews();







