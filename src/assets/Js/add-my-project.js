let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("Project-name-input").value;
  let start_date = document.getElementById("start-date-input").value;
  let end_date = document.getElementById("end-date-input").value;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);

  let blog = {
    title, 
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
      <div class="page-profile">
        <div class="image-project">
          <img src="${dataBlog[index].image}" alt="image">
        </div>
        <div class="project-info">
          <div>
            <h4>${dataBlog[index].title}</h4>
          </div>
          <div class="description">
          ${getDistanceTime(dataBlog[index].postAt)}
          </div>
          <div>
            new page 
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
    `;
  }
}

function getFullTime(time) {
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthName[4]);

  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthName[monthIndex]);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  // 4 Oct 2023 09:30 WIB
  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  console.log(distance);

  let milisecond = 1000; // 1000 milisecond = 1 detik
  let secondInHours = 3600; // 3600 detik = 1 jam
  let hoursInDays = 24; // 24 jam = 1 hari

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hour ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minute ago`;
  } else {
    return `${distanceSeconds} second ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 3000);
// 1000 = 1 detik