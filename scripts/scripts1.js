let $$ = document;
let liElemMobileMenu = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navbar");

// add event for click item navbar
for (const key of liElemMobileMenu) {
  key.addEventListener("click", function () {
    key.parentElement.parentElement.parentElement.classList.remove("show");
  });
}

window.addEventListener("scroll", checkScroll);

// add style for scroll page
function checkScroll() {
  if (window.pageYOffset > 1) {
    navbar.classList.add("scrollthis");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("p-0");
    navbar.classList.add("p-lg-1");
    navbar.classList.remove("p-lg-4");
  } else {
    navbar.classList.remove("scrollthis");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("p-0");
    navbar.classList.add("p-lg-4");
    navbar.classList.remove("p-lg-1");
  }
}
checkScroll();

// change language
let languages = [
  {
    menuItem: ["خانه", "درباره ما", "ویژگی ها", "پروژه", "ارتباط با ما"],
    homePage: [
      "اکسپلورر تیم",
      `حفاظت و نگهداری هوشمند موتورخانه و تاسیسات <br />
                حفاظت از دور...<br />
                </span>`,
    ],
    aboutPage: [
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <h2 class="about-title">درباره ما</h2>
          <br /><br />
          <p class="about-text">
            اعضای تیم ما:
            <br />
            <span>صالح عزیزی</span> و <span>امیر حسین دهقانی</span>
            <br />
            <br />
            اعضای رسمی کانون <span>رباتیک</span> دانشگاه فردوسی مشهد
            <br />
            <br />
            در این پروژه قصد داریم تا موتور خانه ها را به گونه ای هوشمند کنیم تا خسارات به حداقل برسد و همچنین در صورت
            بروز اتفاقات در کمترین زمان ممکن هشدار های مربوطه به کاربر ارسال شود.
            <br />
            <br />
            دستگاه حفاظت (دور) هوشمند را میتوان در مکان های مختلف تاسیساتی نظیر، اداره جات، مجتمع های تجاری،
            پارک های آبی، شهربازی ها و مجتمع های مسکونی مورد استفاده قرار داد
          </p>
        </body>
      </html>
      
      `,
    ],
    servicePage: [
      `<h2 class="service-title">بخشی از ویژگی های پروژه</h2>
      <br /><br /><br />
      <div class="row border-left-1 mb-5">
        <div class="col col-12 col-md-6 service-text">
          <span>
            • اتصال به موبایل از طریق نرم افزار
            <br />
            • ثبت و بایگانی تمامی رویدادها و ورودی ها
            <br />
            <hr />
            • اعلان خطر های احتمالی و امکان گزارش گیری از طریق نرم افزار
            <br />
            • کنترل جامع دستگاه های تاسیساتی
            <br />
            • ساختار ماژولار برد
            <br />
            <hr />
            • بدنه ای مستحکم با قابلیت اسمبل
            <br />
            • هزینه اقتصادی با توجه به کارایی
          </span>
        </div>
        <div class="col col-12 col-md-6 service-text border-left">
          <p>• امکان برقراری ارتباط صوتی با نرم افزار</p>
        </div>
      </div>
      `,
    ],
    skillsPage: [
      `
      <h2 class="skills-title"><span>توضیحات تکمیلی پروژه</h2>
        <br /><br />
        <div class="row border-right-1 padding-left">
          <div class="col col-12 col-md-6 skills-text">
            از قابلیت های این پروژه میتوان به تشخیص آتش، تشخیص لرزش اضافه فرو ریختگی قسمت های پوشش داده شده توسط سنسور، 
            کاهش و افزایش ولتاژ، کاهش و افزایش آمپر و تشخیص نشت آب اشاره کرد
          <br><br>
          داده های ورودی به صورت دوره ای در بانک اطلاعاتی اپلیکیشن موبایل ذخیره شده و میتوان گزارش های متعددی از این اطلاعات گرفت.
          <br>
          هدف از طراحی و ساخت این پروژه جلوگیری از آسیب های موتورخانه ای و یا برای شرح ساده تر، ایمن سازی، کنترل و آگاهی در لحظه کاربر از فضای تاسیساتی می باشد.
          <br>
          <br>
          همچنین دستگاه حفاظت دور با استفاده از اپلیکیشن موبایل به کاربر اجازه می دهد تا در هر زمان بتواند با دستگاه ارتباط آفلاین برقرار و
          کنترل همه جانبه فضا به همراه امنیت تاسیسات مورد نظر خود را زیر نظر داشته باشد.
        </div>
        </div>`,
    ],
    contactPage: [
      `<h2 class="contact-title">ارتباط با ما</h2>
              <br /><br />
              <div class="row border-right-1">
                <div class="col col-12 col-md-6 contact-text">
                  <br />
                  <span>
                    تماس: 09920810148
                    <hr />
                    ایمیل: ExplorerTeam2024@Gmail.com
                    <hr />
                    شبکه های مجازی: @ExplorerTeam
                    <hr />
                    آدرس: خراسان رضوی، مشهد، دانشگاه فردوسی، کانون رباتیک
                    <hr />
                    وبسایت: ExplorerTeam.ir
                  </span>
                  <br /><br /><br />
                </div>
                <div
                  class="col col-12 col-md-6 service-text border-right d-flex align-items-center"
                >
                  <a class="download-cart d-flex flex-column align-items-center justify-content-center" href="images/CartInfoM.png" download>
                    <img
                      class="w-50"
                      src="images/CartInfoM.png"
                      alt="Explorer Team"
                    />
                    <p class="text-center text-light">Click for download</p>
                  </a>
                </div>
              </div>
      `,
    ],
  },

  {
    menuItem: ["Home", "About me", "My service", "My skills", "Contact me"],
    homePage: [
      "Explorer Team",
      "Programmer , Web designer, <br>Graphic designer and...",
      "call: 09056249543",
    ],
    aboutPage: [
      `<h2 class="about-title">About <span>me</span></h2>
              <br /><br />
              <p class="about-text">
                My name is <span>Moein</span> <br /><br />
                I have been working in <span>web design</span> and
                <span>programming</span> for two years. <br />
                I am fluent in
                <span>Html</span>, <span>CSS</span> and
                <span>JavaScript</span> languages. <br />
                I am also proficient in other technologies such as
                <span>Bootstrap</span>, <span>Git</span>, <span>Sass</span>.
                <br />
                Proficient in <span>graphics</span> and
                <span>editing</span>.<br />

                see my

                <a
                  href="https://github.com/Moein0Mirsaeedi"
                  class="btn btn-outline-warning"
                  role="button"
                  >Github</a
                >

                <br /><br />

                My sport are <span>Calisthenics</span> and
                <span>kickboxing</span>
                <br />
                see my

                <a
                  href="https://instagram.com/moein_mirsaeedi"
                  class="btn btn-outline-warning"
                  role="button"
                  >instagram</a
                >`,
    ],
    servicePage: [
      `<h2 class="service-title"><span>My</span> service</h2>
              <br /><br /><br />
              <div class="row border-left-1 mb-5">
                <div class="col col-12 col-md-6 service-text">
                  <span>
                    Designing all types of site.
                    <br />
                    Programming projects.
                    <br />
                    <hr />
                    advertising and SEO.
                    <br />
                    Doing graphic work.
                    <br />
                    Video and photo editing.
                    <br />
                    <hr />
                    Teaching programming , web designing.
                    <br />
                    Teaching computer concepts.
                  </span>
                </div>
                <div class="col col-12 col-md-6 service-text border-left">
                  <p>Software and hardware problems.</p>
                </div>
              </div>`,
    ],
    skillsPage: [
      `
    <h2 class="skills-title"><span>My</span> skills</h2>
              <br /><br />
              <div class="row border-left-1 padding-left">
                <div class="col col-12 col-md-6 skills-text">
                  <span>
                    <span class="i">Web design</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 90%"
                      >
                        90% Complete
                      </div>
                    </div>
                    Html, Css
                    <br />
                    Bootstrap , Sass
                    <br />

                    <hr />

                    <span class="i">Programming</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 50%"
                      >
                        50% Complete
                      </div>
                    </div>

                    JavaScript
                    <br />
                    JQuery
                    <br />

                    <hr />

                    <span class="i">General skills</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 90%"
                      >
                        90% Complete
                      </div>
                    </div>

                    Git , Github
                    <br />

                    <hr />
                  </span>
                </div>
                <div
                  class="col col-12 col-md-6 skills-text border-left padding-left-1"
                >
                  <span>
                    <span class="i">Editing</span>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 50%"
                      >
                        50% Complete
                      </div>
                    </div>

                    Photoshop
                    <br />
                    Pixellab
                    <br />
                    Figma
                    <br />

                    <hr />
                  </span>
                </div>
              </div>`,
    ],
    contactPage: [
      `<h2 class="contact-title">Contact <span>me</span></h2>
              <br /><br />
              <div class="row border-left-1">
                <div class="col col-12 col-md-6 contact-text">
                  <br />
                  <span>
                    Phone: 09056249543
                    <hr />
                    Email: MoeinGIR@moeing.ir
                    <hr />
                    Social media: MoeingIR
                    <hr />
                    Github: Moein0Mirsaeedi
                    <hr />
                    Website: Moeing.ir
                  </span>
                  <br /><br /><br />
                </div>
                <div
                  class="col col-12 col-md-6 service-text border-left d-flex align-items-center"
                >
                  <a class="download-cart" href="images/CartInfoM.png" download>
                    <img
                      class="w-100"
                      src="images/CartInfoM.png"
                      alt="Moein Mirsaeedi | معین میرسعیدی"
                    />
                    <p class="text-center text-light">Click for download</p>
                  </a>
                </div>
              </div>`,
    ],
  },
];

let btnChangeLan = document.getElementsByClassName("changeLan");
let navItem = document.getElementsByClassName("nav-link");
let languageSite = "FA";

// change language for load site
// let isLanLocal = localStorage.getItem("LA");
// if (isLanLocal != null) {
//   languageSite = isLanLocal;
//   if (languageSite === "FA") {
//     changeToFA();
//   } else if (languageSite === "EN") {
//     changeToEN();
//   }
// }

// event change language for btn
// for (const key of btnChangeLan) {
//   key.addEventListener("click", function () {
//     if (languageSite === "EN") {
//       changeToFA();
//     } else if (languageSite === "FA") {
//       changeToEN();
//     }
//   });
// }

changeToFA();

// Change language to FA
function changeToFA() {
  languageSite = "FA";
  $$.querySelector(".changeLan1").innerHTML = "EN";
  $$.querySelector(".changeLan2").innerHTML = "EN";
  localStorage.setItem("LA", "FA");

  // menu change
  document.body.style.direction = "rtl";
  for (const key in navItem) {
    navItem[key].innerHTML = languages[0].menuItem[key];
  }
  $$.querySelector(".navbar-brand").classList.add("ms-4");
  $$.querySelector("#changeLan").classList.remove("ms-auto");
  $$.querySelector("#changeLan").classList.add("me-auto");
  $$.querySelector("#changeLan").classList.add("ms-2");

  // home page change
  $$.querySelector(".home-name").innerHTML = languages[0].homePage[0];
  $$.querySelector(".home-about-me").innerHTML = languages[0].homePage[1];

  // about page change
  $$.querySelector(".about-lan-site").innerHTML = languages[0].aboutPage[0];

  // service page change
  $$.querySelector(".service-lan-site").innerHTML = languages[0].servicePage[0];
  $$.querySelector(
    ".service-lan-site"
  ).children[4].children[1].classList.remove("border-left");

  $$.querySelector(".service-lan-site").children[4].children[1].classList.add(
    "border-right"
  );

  $$.querySelector(".service-lan-site").children[4].classList.remove(
    "border-left-1"
  );

  $$.querySelector(".service-lan-site").children[4].classList.add(
    "border-right-1"
  );

  // skills page change
  $$.querySelector(".skills-lan-site").innerHTML = languages[0].skillsPage[0];
  // $$.querySelector(".skills-lan-site").children[3].children[1].classList.remove(
  //   "border-left"
  // );
  // $$.querySelector(".skills-lan-site").children[3].children[1].classList.add(
  //   "border-right"
  // );
  // $$.querySelector(".skills-lan-site").children[3].classList.remove(
  //   "border-left-1"
  // );
  // $$.querySelector(".skills-lan-site").children[3].classList.add(
  //   "border-right-1"
  // );

  // contact page change
  $$.querySelector(".contact-lan-site").innerHTML = languages[0].contactPage[0];
  $$.querySelector(
    ".contact-lan-site"
  ).children[3].children[1].classList.remove("border-left");

  $$.querySelector(".contact-lan-site").children[3].children[1].classList.add(
    "border-right"
  );

  $$.querySelector(".contact-lan-site").children[3].classList.remove(
    "border-left-1"
  );

  $$.querySelector(".contact-lan-site").children[3].classList.add(
    "border-right-1"
  );
}

// Change language to EN
// function changeToEN() {
//   languageSite = "EN";
//   $$.querySelector(".changeLan1").innerHTML = "FA";
//   $$.querySelector(".changeLan2").innerHTML = "FA";
//   localStorage.setItem("LA", "EN");

//   // menu change
//   document.body.style.direction = "ltr";
//   for (const key in navItem) {
//     navItem[key].innerHTML = languages[1].menuItem[key];
//   }
//   $$.querySelector(".navbar-brand").classList.add("ms-4");
//   $$.querySelector("#changeLan").classList.add("ms-auto");
//   $$.querySelector("#changeLan").classList.remove("me-auto");
//   $$.querySelector("#changeLan").classList.remove("ms-2");

//   // home page change
//   $$.querySelector(".home-name").innerHTML = languages[1].homePage[0];
//   $$.querySelector(".home-about-me").innerHTML = languages[1].homePage[1];

//   // about page change
//   $$.querySelector(".about-lan-site").innerHTML = languages[1].aboutPage[0];

//   // service page change
//   $$.querySelector(".service-lan-site").innerHTML = languages[1].servicePage[0];

//   // skills page change
//   $$.querySelector(".skills-lan-site").innerHTML = languages[1].skillsPage[0];

//   // contact page change
//   $$.querySelector(".contact-lan-site").innerHTML = languages[1].contactPage[0];
// }
