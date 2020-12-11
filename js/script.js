// CONSEGNA
// Aggiungere Header e Footer con VueJs creando una struttura dati che consenta di inserire i link nelle navbar.
// Su questo non ci sono API da interrogare, ma create i dati a mano nel vostro js.


// Istanza Vue js
var app = new Vue({
  el: '#app',
  data: {
    logo: "img/avada-movers-logo.png",
    cta: "FREE QUOTE",

    // HEADER

    callUs: [
      { tel: "fas fa-phone",
        contact: "Call us for a Free Quote: 1.800.555.6789"
      }
    ],

    social: [
      {
        name: "fab fa-facebook",
        link: "index.html"
      },

      {
        name: "fab fa-twitter",
        link: "index.html"
      },

      {
        name: "fab fa-instagram",
        link: "index.html"
      },

      {
        name: "fab fa-youtube",
        link: "index.html"
      }
    ],

    menuList: [
      {
        label: "Home",
        link: "index.html"
      },

      {
        label: "Rates",
        link: "index.html"
      },

      {
        label: "Testimonials",
        link: "index.html"
      },

      {
        label: "FAQ",
        link: "index.html"
      },

      {
        label: "Blog",
        link: "index.html"
      },

      {
        label: "Contact",
        link: "index.html"
      }
    ],

    // FOOTER

    footer: [
      {
      title: "ABOUT",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
      title: "AVADA MOVERS",
      list: [
        {
          label: "> Home",
          link: "index.html"
        },

        {
          label: "> Rates",
          link: "index.html"
        },

        {
          label: "> Testimonials",
          link: "index.html"
        },

        {
          label: "> FAQ",
          link: "index.html"
        },

        {
          label: "> Blog",
          link: "index.html"
        },

        {
          label: "> Contact",
          link: "index.html"
        },

        {
          label: "> Free Quote",
          link: "index.html"
        }
      ]
    },
    {
      title: "RECENT POST",
      postlist: [
        {
          label: "> Heading Out To College?",
          link: "index.html"
        },

        {
          label: "> Moving Your Business?",
          link: "index.html"
        },

        {
          label: "> Outstanding Quality",
          link: "index.html"
        },

        {
          label: "> Cost of Moving",
          link: "index.html"
        },

        {
          label: "> Best Moving Tips",
          link: "index.html"
        }
      ]
    }
  ],

  credits: [
    "©Copyright 2012 - 2020" + " | ",
    "Avada Theme by ThemeFusion" + " | ",
    "All Rights Reserved" + " | ",
    "Powered by WordPress"
    ],
  }
})
