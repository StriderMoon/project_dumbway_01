const testimonials = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest() 

  xhr.open("GET", "https://api.npoint.io/b2e2cc58b54d7dd1395d", true) // http method, url addres, status async.

  xhr.onload = function () {
    if(xhr.status == 200) {
      resolve(JSON.parse(xhr.response))
    } else {
      reject("Error Loading Data")
    }
  }

  xhr.onerror = function () {
    reject("Network error")
  }

  xhr.send()
})


async function showTestimonial() {
  try {
    const response = await testimonials
    // console.log(response)

    let testimonialForHtml = ""

    response.forEach(item => {
      testimonialForHtml += `
        <div class="page-profile">
          <div class="image-project">
            <img src=${item.image} alt="image">
          </div>
          <div class="project-info">
            <div>
              <h4>${item.name}</h4>
            </div>
            <div class="description">
              <p>1 weak</p>
            </div>
            <div>
              <p>${item.commnent}</p>
            </div>
            <div class="logo">
              <img src="/icon/icons8-playstore-50.png" alt="logo">
              <img src="/icon/icons8-android-50.png" alt="logo">
              <img src="/icon/icons8-java-50.png" alt="logo">
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
    })
    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
showTestimonial();

async function fillterTestimonial(rating) {
  try {
    const response = await testimonials
  let testimonialForHtml = "";

  const dataFiltered = response.filter(data => data.rating === rating)
  // console.log(dataFiltered);

    if(dataFiltered.length === 0) {
      testimonialForHtml = `<h3>data not found !</h3>`;
    } else {
      dataFiltered.forEach(item => {
        testimonialForHtml += `
          <div class="page-profile">
            <div class="image-project">
              <img src=${item.image} alt="image">
            </div>
            <div class="project-info">
              <div>
                <h4>${item.name}</h4>
              </div>
              <div class="description">
                <p>1 weak</p>
              </div>
              <div>
                <p>${item.commnent}</p>
              </div>
              <div class="logo">
                <img src="/src/assets/icon/icons8-playstore-50.png" alt="logo">
                <img src="/src/assets/icon/icons8-android-50.png" alt="logo">
                <img src="/src/assets/icon/icons8-java-50.png" alt="logo">
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
        `;
      });
    }
    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}