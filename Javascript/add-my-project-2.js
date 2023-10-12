
let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("Project-name-input").value;
  let start_date = document.getElementById("start-date-input").value;
  let end_date = document.getElementById("end-date-input").value;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);
  // console.log(image);

  let blog = {
    title,
    start_date,
    end_date,
    image
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < dataBlog.length; i++) {
    console.log(dataBlog[i])

    document.getElementById("contents").innerHTML += `
      <div class="page-profile">
        <div class="image-project">
          <img src="${dataBlog[i].image}" alt="image">
        </div>
        <div class="project-info">
          <div>
            <h4>${dataBlog[i].title}</h4>
          </div>
          <div class="description">
            <p>1 weak</p>
          </div>
          <div>
            <p>${dataBlog[i].start_date} - ${dataBlog[i].end_date}</p>
          </div>
          <div class="logo">
            <img src="icon/icons8-playstore-50.png" alt="logo">
            <img src="icon/icons8-android-50.png" alt="logo">
            <img src="icon/icons8-java-50.png" alt="logo">
          </div>
          <div class="page-blog-button">
            <button>
              Edit
            </button>
            <button>
              Delete
            </button>
          </div>
        </div>
      </div>
    `
  }
}



