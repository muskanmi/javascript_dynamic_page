function ShowHide(){
    document.getElementById("list-links").style.display = "block";
    document.getElementById("cross").style.display = "block";
    document.getElementById("burger").style.display = "none";
  }
  
  function Close(){
    document.getElementById("list-links").style.display = "none";
    document.getElementById("cross").style.display = "none";
    document.getElementById("burger").style.display = "block";
  }

  // API Data
let fdata = fetch("https://reqres.in/api/users");
fdata
  .then((res) => res.json())
  .then((data) => {
    const html = data.data
      .map((user) => {
        return `
       <div class="team">
       <div class="container>
                    <div class="img-data"><img src=${user.avatar} alt=""></div>
                    <div class="content-data">
                        <h4 class="team-h4">${user.first_name}</h4>
                        <h6>${user.email}</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.
                        </p>
                        <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i>
                            <span class="tweet">@nicolewest</span>
                        </a>
                    </div>
                    </div>
                </div>
       `;
      })
      .join("");
    document.querySelector(".apidata").insertAdjacentHTML('afterbegin', html)
  });
