let chooseProduct = {
    id: '',
    movieName: '',
    nation: '',
    time: '',
    resolution: '',
    view: '',
    author: '',
    actor: '',
    img: '',
    description: '',
    category: '',
}

const logoNode = document.querySelector('.logo');
logoNode.addEventListener('click', () => {
    window.location = `index.html`;
})


object = JSON.parse(localStorage.getItem('chooseProduct'));
listAdd = JSON.parse(localStorage.getItem('listAdd'));
const contentPage = document.querySelector('.content-page-later')
listAdd.map((item,i) => {
    const element = document.createElement('div');
    element.classList.add('element-added');
    contentPage.appendChild(element)
    element.innerHTML = `
    <div class="img-element">
        <img src="${item.img}">
        <div class="watch-now">
            <div class="shadow-watch-now"></div>
            <div class="click-watch-now">
                <div class="watch">Watch now</div>
                <div class="delete-element">Delete</div>
            </div>
        </div>
    </div>
    <div class="content-film">
        <h2 class="name-movie-added">${item.movieName}</h2>
    <div class="info-details-film">
        <div class="item-details">
            <div class="weight">Director:</div>
            <div>${item.author}</div>
        </div>
        <div class="item-details">
            <div class="weight">Nation:</div>
            <div>${item.nation}</div>
        </div>
        <div class="item-details">
            <div class="weight">Year of manufacture:</div>
            <div>2019</div>
        </div>
        <div class="item-details">
            <div class="weight">Performer:</div>
            <div>${item.actor}</div>
        </div>
        <div class="item-details">
            <div class="weight">Time:</div>
            <div>${item.time}</div>
        </div>
        <div class="item-details">
            <div class="weight">Resolution:</div>
            <div>${item.resolution}</div>
        </div>
        <div class="item-details">
            <div class="weight">Category:</div>
            <div>${item.category}</div>
        </div>
        <div class="item-details">
            <div class="weight">View:</div>
            <div>${item.view}</div>
        </div>
        <div class="description">
            <div class="weight">Describe:</div>
            <div>${item.description}</div>
        </div>
</div>
</div> 
    `; 
    const watchNow = document.querySelectorAll('.watch');
    watchNow.forEach(function(element, index) {
        if(i === index) {
            element.addEventListener('click', () => {
                const id = item.id;
                const movieName = item.movieName;
                const nation = item.nation;
                const time = item.time;
                const resolution = item.resolution;
                const view = item.view;
                const author = item.author;
                const actor = item.actor;
                const img = item.img;
                const description = item.description;
                const category = item.category;
                chooseProduct.id = id;
                chooseProduct.movieName = movieName;
                chooseProduct.nation = nation;
                chooseProduct.time = time;
                chooseProduct.resolution = resolution;
                chooseProduct.view = view;
                chooseProduct.author = author;
                chooseProduct.actor = actor;
                chooseProduct.img = img;
                chooseProduct.description = description;
                chooseProduct.category = category;
                localStorage.setItem('chooseProduct',JSON.stringify(chooseProduct));
                window.location = `title.html`
            })
        }
    })

    const deleteElementNode = document.querySelectorAll('.delete-element');
    deleteElementNode.forEach(function(element, index) {
        if(i === index) {
            element.addEventListener('click', () => {
               listAdd = listAdd.filter(temp => temp !== item)
               localStorage.setItem('listAdd',JSON.stringify(listAdd));
               window.location.reload()
            })
        }
    })
    
})


