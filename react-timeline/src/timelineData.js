const data = [
    {
      "text": "Wrote my first blog post ever on Medium",
      "date": "March 03 2017",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        "text": "Read more"
      }
    },
    {
      "text": "Created my blog and wrote my first blog post on it",
      "date": "August 20 2017",
      "category": {
        "tag": "blog",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "url": "https://florin-pop.com/blog/2017/08/hello-world/",
        "text": "Read more"
      }
    },
    {
      "text": "Started working on the app-ideas repository",
      "date": "February 25 2019",
      "category": {
        "tag": "app-ideas",
        "color": "rgb(255, 219, 20)"
      },
      "link": {
        "url": "https://github.com/florinpop17/app-ideas",
        "text": "Check it out on GitHub"
      }
    },
    {
      "text": "Jim joined as a main contributor on the app-ideas repository",
      "date": "March 01 2019",
      "category": {
        "tag": "app-ideas",
        "color": "rgb(255, 219, 20)"
      },
      "link": {
        "url": "https://github.com/florinpop17/app-ideas",
        "text": "Check the project out on GitHub"
      }
    },
    {
      "text": "Started the Weekly Coding Challenge program. Wrote week #1 post about a \"Double Slider Sign in/up Form\"",
      "date": "March 04 2019",
      "category": {
        "tag": "blog",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "url": "https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/",
        "text": "Check it out here"
      }
    },
    {
      "text": "First time seeing 20+ people on my blog at the same time",
      "date": "March 05 2019",
      "category": {
        "tag": "blog",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "text": ""
      }
    },
    {
      "text": "Wrote the Weekly Coding Challenge Complete Guide",
      "date": "March 06 2019",
      "category": {
        "tag": "blog",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "url": "https://florin-pop/blog/2019/03/weekly-coding-challenge/",
        "text": "Check it out here"
      }
    },
    {
      "text": "1.000 followers on Twitter",
      "date": "March 07 2019",
      "category": {
        "tag": "twitter",
        "color": "rgb(29, 161, 242)"
      },
      "link": {
        "url": "https://twitter.com/florinpop1705",
        "text": "See profile"
      }
    },
    {
      "text": "100 email subscribers in a day",
      "date": "March 07 2019",
      "category": {
        "tag": "blog",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "text": ""
      }
    },
    {
      "text": "Wrote my first blog post on Dev.to",
      "date": "March 13 2019",
      "category": {
        "tag": "dev.to",
        "color": "rgb(10, 10, 10)"
      },
      "link": {
        "url": "https://dev.to/florinpop17/weekly-coding-challenge---the-complete-guide-25om",
        "text": "Check it out here"
      }
    },
    {
      "text": "A publication offered to pay me to write a blog post on their website for the first time",
      "date": "March 17 2019",
      "category": {
        "tag": "other",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "text": ""
      }
    },
    {
      "text": "I published my first article in the FreeCodeCamp Medium Publication",
      "date": "March 18 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34",
        "text": "Check it out here"
      }
    },
    {
      "text": "Over 1.000 views in a single day on my Medium posts",
      "date": "March 19 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705",
        "text": "See profile"
      }
    },
    {
      "text": "Over 2.000 views in a single day on my Medium posts",
      "date": "March 22 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705",
        "text": "See profile"
      }
    },
    {
      "text": "Adrian made a Youtube video in which he showcased my \"Double Slider Sign in/up Form\" project",
      "date": "March 22 2019",
      "category": {
        "tag": "other",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "url": "https://www.youtube.com/watch?v=4dcSTPPk4YM",
        "text": "Check out the video"
      }
    },
    {
      "text": "Had a skype call with someone and I prepared him for a React job interview",
      "date": "March 25 2019",
      "category": {
        "tag": "other",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "text": ""
      }
    },
    {
      "text": "Over 3.000 views in a single day on my Medium posts",
      "date": "March 28 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705",
        "text": "See profile"
      }
    },
    {
      "text": "1.000 followers on dev.to",
      "date": "March 29 2019",
      "category": {
        "tag": "dev.to",
        "color": "rgb(10, 10, 10)"
      },
      "link": {
        "url": "https://dev.to/florinpop17",
        "text": "See profile"
      }
    },
    {
      "text": "Published post: \"Here are some app ideas you can build to level up your coding skills\" on FCC Medium Publication. This post was received very well by the community!",
      "date": "April 04 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.freecodecamp.org/here-are-some-app-ideas-you-can-build-to-level-up-your-coding-skills-39618291f672",
        "text": "Read article"
      }
    },
    {
      "text": "Over 12.000 views in a single day on my Medium posts",
      "date": "April 05 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705",
        "text": "See profile"
      }
    },
    {
      "text": "Gained 1.000 stars on app-ideas repository",
      "date": "April 07 2019",
      "category": {
        "tag": "app-ideas",
        "color": "rgb(255, 219, 20)"
      },
      "link": {
        "url": "https://github.com/florinpop17/app-ideas",
        "text": "Check it out on GitHub"
      }
    },
    {
      "text": "2.000 followers on Twitter",
      "date": "April 09 2019",
      "category": {
        "tag": "twitter",
        "color": "rgb(29, 161, 242)"
      },
      "link": {
        "url": "https://twitter.com/florinpop1705",
        "text": "See profile"
      }
    },
    {
      "text": "Gained 2.000 stars on app-ideas repository",
      "date": "April 09 2019",
      "category": {
        "tag": "app-ideas",
        "color": "rgb(255, 219, 20)"
      },
      "link": {
        "url": "https://github.com/florinpop17/app-ideas",
        "text": "Check it out on GitHub"
      }
    },
    {
      "text": "1.000 followers on Medium",
      "date": "April 15 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705",
        "text": "See profile"
      }
    },
    {
      "text": "Added a total of 50 projects in the app-ideas repository",
      "date": "April 15 2019",
      "category": {
        "tag": "app-ideas",
        "color": "rgb(255, 219, 20)"
      },
      "link": {
        "url": "https://github.com/florinpop17/app-ideas",
        "text": "Check it out on GitHub"
      }
    },
    {
      "text": "50.000 total views on: \"Here are some app ideas you can build to level up your coding skills\"",
      "date": "April 15 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.freecodecamp.org/here-are-some-app-ideas-you-can-build-to-level-up-your-coding-skills-39618291f672",
        "text": "Check out the article"
      }
    },
    {
      "text": "100.000 total views on Medium over the last 30 days (first time)",
      "date": "April 16 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705",
        "text": "See profile"
      }
    },
    {
      "text": "Brad Traversy posted a video on Youtube about the Sign in/up form",
      "date": "April 17 2019",
      "category": {
        "tag": "other",
        "color": "rgb(225, 123, 119)"
      },
      "link": {
        "url": "https://www.youtube.com/watch?v=mUdo6w87rh4",
        "text": "Check the video"
      }
    },
    {
      "text": "Gained 3.000 stars on app-ideas repository",
      "date": "April 18 2019",
      "category": {
        "tag": "app-ideas",
        "color": "rgb(255, 219, 20)"
      },
      "link": {
        "url": "https://github.com/florinpop17/app-ideas",
        "text": "Check it out on GitHub"
      }
    },
    {
      "text": "2.000 followers on dev.to",
      "date": "April 22 2019",
      "category": {
        "tag": "dev.to",
        "color": "rgb(10, 10, 10)"
      },
      "link": {
        "url": "https://dev.to/florinpop17",
        "text": "See profile"
      }
    },
    {
      "text": "Became a Top Writer in Technology on Medium",
      "date": "April 27 2019",
      "category": {
        "tag": "medium",
        "color": "rgb(1, 143, 105)"
      },
      "link": {
        "url": "https://medium.com/@popflorin1705",
        "text": "See profile"
      }
    }
  ];
  
export default data