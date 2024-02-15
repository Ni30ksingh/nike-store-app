const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
//nitis addition
const payButton=document.querySelector(".payButton");
const sm=document.querySelector(".sm");
payButton.addEventListener("click",()=>{
  if (sm.value===""){
    alert("fill the form");
  }
  else{
    alert("order successful")
  payment.style.display = "none";}
})
let arr=[];
const Name=document.querySelector(".name");
const email=document.querySelector(".email");
const password =document.querySelector(".password ");
const number=document.querySelector(".number");
const rb=document.querySelector(".rb");
const main=document.querySelector("main");
const register=document.querySelector(".register");
const login=document.querySelector(".login");
const lb=document.querySelector(".lb");
const lemail=document.querySelector(".lemail");
const lpassword =document.querySelector(".lpassword ");
rb.addEventListener("click", () => {
  if (Name.value === "" || email.value === "" || number.value === "" || password.value === "") {
      alert("Form is empty");
  } else {
    let obj= {
      cpassword:`${password.value}`,
      cemail:`${email.value}`
    }
     arr.push(obj);
      main.style.display = "block";
      login.style.display="none";
      register.style.display = "none";
      
  }
});
lb.addEventListener("click",()=>{
  let lobj= {
    clpassword:`${lpassword.value}`,
    clemail:`${lemail.value}`}
    if (arr.some(item => item.cpassword === lobj.clpassword && item.cemail === lobj.clemail)) {
      main.style.display = "block";
      register.style.display = "none";
      login.style.display="none"
    } else {
      alert("please register")
    }
})
const r=document.querySelector(".r");
const l=document.querySelector(".l");
l.addEventListener("click",()=>{
login.style.display="flex"
register.style.display="none"
})
r.addEventListener("click",()=>{
  register.style.display="flex"
  login.style.display="none"
  })
