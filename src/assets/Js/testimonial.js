const testimonialData = [
  {
    name: "noname 1",
    commnent: "ini adalah test yang di jalankan di testimonial 1",
    rating: 5,
    image: "/image/Doctor_pointing.jpg",
  },
  {
    name: "noname 2",
    commnent: "ini adalah test yang di jalankan di testimonial 2",
    rating: 4,
    image: "/image/Doctor_pointing.jpg",
  },
  {
    name: "noname 3",
    commnent: "ini adalah test yang di jalankan di testimonial 3",
    rating: 1,
    image: "/image/Doctor_pointing.jpg",
  },
  {
    name: "noname 4",
    commnent: "ini adalah test yang di jalankan di testimonial 4",
    rating: 2,
    image: "/image/Doctor_pointing.jpg",
  },
  {
    name: "noname 5",
    commnent: "ini adalah test yang di jalankan di testimonial 5",
    rating: 5,
    image: "/image/Doctor_pointing.jpg",
  },
];

function showTestimonial() {
  let testimonialForHtml = ""

  testimonialData.forEach(item => {
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
}
showTestimonial();

function fillterTestimonial(rating) {
  let testimonialForHtml = "";

  const dataFiltered = testimonialData.filter(data => data.rating === rating)
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
}