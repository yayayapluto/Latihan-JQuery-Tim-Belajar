// SEMUA KODE ADA DISINI

//Bikin elemen script buat naro cdn jquery
var script = document.createElement("script");
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(script);

//Kalo script dah ke load bakal mulai
script.onload = function () {
  $(document).ready(function () {
    //function buat landing
    function home() {
      $("header").append(`<h1 id="header">Futuristic Cards</h1>
        <p>You dont see the cats dont ya</p>`);

      let loadCard = async () => {
        var settings = {
          url: "https://picsum.photos/v2/list?limit=5",
          method: "GET",
          async: false,
        };

        $.ajax(settings).done(function (response) {
          response.forEach((e) => {
            $(".cards").append(`<div class="card">
            <img src=${e.download_url} />
            <div class="card-content">
                <h2>Photo ${parseInt(e.id) + 1}</h2>
                <p>
                    You can downlaod the photo on ${e.url}
                </p>
            </div>
            <button class="close" type="button">
                Remove
            </button>
        </div>`);
          });
        });

        $("button").click(function () {
          $(this).parent().remove();
        });
      };

      loadCard();
    }

    //nge reset aja sih
    $("header").empty();
    $("section").empty();

    //manggil
    home();

    //nav home kalo di pencet bilek
    $("#HomeNav").click(function () {
      //reset terus manggil function home
      $("header").empty();
      $("section").empty();
      home();
    });

    //nav about kalo di pencet
    $("#AboutNav").click(function () {
      //reset
      $("header").empty();
      $("section").empty();

      //nambahin elemen ke header
      $("header").append(`<h1 id="header">About Page</h1>
        <p>Womp womp bogga nig</p>`);

      //JOJO REFERENCES
      let gifs = [
        "https://media.tenor.com/CWFZLQTiLDoAAAAM/jjba-jojo.gif",
        "https://media.tenor.com/HRil-Jk2DxsAAAAM/jojo-anime.gif",
        "https://media.tenor.com/HqxblUqGhM4AAAAM/jojo-all-star-battle-r-jojos-bizarre-adventure.gif",
      ];

      //foreach JOJO
      gifs.forEach((e) => {
        $(".cards").append(`<div class="card">
            <img src=${e} />
        </div>`);
      });
    });

    //dipencet
    $("#ContactNav").click(function () {
      //reset
      $("header").empty();
      $("section").empty();

      //nambahin elemen
      $("header").append(`<h1 id="header">Contact page</h1>
        <p>I AIN'T LIKE YALL!!!</p>`);

      //nambahin elemen jigaaa tapi ke cards class
      $(".cards").append(`<div class="card">
            <img src='https://media.tenor.com/pOK7zzz3NQYAAAAj/capcom-joseph-joestar.gif' />
            <div class="card-content">
                <h2>Farras</h2>
                <p>
                    Full name: Muhammad Farras Ashshiddiqi
                    Email: farras@gmail.com
                    Phone number: 12345678
                </p>
            </div>
            <button class="close" type="button">
                Remove
            </button>
        </div>`);
    });
  });
};
