/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "covidBG": '#FCEFCA',
        "Blue": "#2F80ED",
        "Blue1": "#4796FF",
        "Blue2": "#2366BF",
        "Gray1": "#333333",
        "Gray2": "#4F4F4F",
        "Gray3": "#EBEBEB",
        "Gray4": "#BDBDBD",
        "Gray5": "#E0E0E0",
        "Gray6": "#F2F2F2",
        "Gray7": "#F4F4F4",
        "Gray8": "#828282",
        "Black1": "#181818",
        "Black2": "#1B1F2D",
        "bgColor": "#FFFFFF",
        "Red1": "#EB5757",
        "Green1": "#85E0AB",
        "Yellow1": "#F2C94C",
        "Yellow2": "#FFD723",
        "PopUp": "rgba(0, 0, 0, 0.2)",
        "Gradient1": "#2969BF",
        "Gradient2": "#144E9D",
        "grayGradient": "rgba(244, 244, 244, 0.5)",
        "Black3": "#1A1A1A",


      },
      fontFamily: {
        'defaultFont': ['Work Sans', 'sans-serif'],
      },
      width: {
        'w-6/6': '82.786%',
        'w-7/6': '93.55%',
        'w-100': '345px'
      },
      container: {
        padding: "1rem",
        center: true
      },
      screens: {
        sm: "640px",
        md: "768px"
      },
      margin: {
        ng: "-30px",
        ng2: "-45px",
        ng3: "-70px",
        ng4: "-3px",
        ng5: "-183px",
        ng6: "-204px",
        ng7: "-435px",
        ng8: "-1px",
        ng9: "-432px",
        ng10: "-1365px",
        m15: "59px",
        m16: "264.5px",
        m17: "1174.8px",
        m18: "635px",
        m19: "477.8px",
        m20: "392.5px",
        m21: "903px",
        m22: "33.5px",
      },
      dropShadow: {
        '3xl': '0 3px 8px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

