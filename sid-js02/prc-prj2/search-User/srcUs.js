const users = [
  {
    name: "Aarav Sharma",
    pic: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "coding late nights 💻"
  },
  {
    name: "Kiara Mehta",
    pic: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "coffee and calm vibes ☕"
  },
  {
    name: "Vivaan Kapoor",
    pic: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "dreaming beyond limits 🚀"
  },
  {
    name: "Anaya Singh",
    pic: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "sunsets are therapy 🌅"
  },
  {
    name: "Kabir Verma",
    pic: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "music over everything 🎧"
  },
  {
    name: "Riya Patel",
    pic: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "smile more, stress less ✨"
  },
  {
    name: "Arjun Nair",
    pic: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "minimalist mindset 🖤"
  },
  {
    name: "Sara Khan",
    pic: "https://randomuser.me/api/portraits/women/8.jpg",
    bio: "living little moments 🌸"
  },
  {
    name: "Dhruv Joshi",
    pic: "https://randomuser.me/api/portraits/men/9.jpg",
    bio: "focus mode always 🎯"
  },
  {
    name: "Meher Arora",
    pic: "https://randomuser.me/api/portraits/women/10.jpg",
    bio: "books and rain 📚🌧️"
  },
  {
    name: "Yash Roy",
    pic: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "future entrepreneur 💸"
  },
  {
    name: "Trisha Jain",
    pic: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "soft heart strong soul 🤍"
  },
  {
    name: "Aditya Rao",
    pic: "https://randomuser.me/api/portraits/men/13.jpg",
    bio: "offline feels peaceful 📵"
  },
  {
    name: "Navya Gupta",
    pic: "https://randomuser.me/api/portraits/women/14.jpg",
    bio: "golden hour addict 🌞"
  },
  {
    name: "Reyansh Malhotra",
    pic: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "gaming all day 🎮"
  },
  {
    name: "Aisha Sheikh",
    pic: "https://randomuser.me/api/portraits/women/16.jpg",
    bio: "good vibes only 🌈"
  },
  {
    name: "Laksh Batra",
    pic: "https://randomuser.me/api/portraits/men/17.jpg",
    bio: "discipline > motivation 🔥"
  },
  {
    name: "Pihu Sharma",
    pic: "https://randomuser.me/api/portraits/women/18.jpg",
    bio: "creating memories 📸"
  },
  {
    name: "Rohan Das",
    pic: "https://randomuser.me/api/portraits/men/19.jpg",
    bio: "late night thinker 🌃"
  },
  {
    name: "Anika Bose",
    pic: "https://randomuser.me/api/portraits/women/20.jpg",
    bio: "kindness matters 🌼"
  },
  {
    name: "Vihaan Sethi",
    pic: "https://randomuser.me/api/portraits/men/21.jpg",
    bio: "building my future ⚡"
  },
  {
    name: "Sneha Pillai",
    pic: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "chaotic but cute 😵‍💫"
  },
  {
    name: "Krish Yadav",
    pic: "https://randomuser.me/api/portraits/men/23.jpg",
    bio: "hard work wins 💯"
  },
  {
    name: "Ritika Sen",
    pic: "https://randomuser.me/api/portraits/women/24.jpg",
    bio: "romanticizing life 🌷"
  },
  {
    name: "Neil Fernandes",
    pic: "https://randomuser.me/api/portraits/men/25.jpg",
    bio: "keep moving forward 🚶"
  },
  {
    name: "Tara Kapoor",
    pic: "https://randomuser.me/api/portraits/women/26.jpg",
    bio: "peace in simplicity ⚪"
  },
  {
    name: "Aryan Mehra",
    pic: "https://randomuser.me/api/portraits/men/27.jpg",
    bio: "main character energy 🎬"
  },
  {
    name: "Siya Chawla",
    pic: "https://randomuser.me/api/portraits/women/28.jpg",
    bio: "dreaming in colors 🎨"
  },
  {
    name: "Vedant Kulkarni",
    pic: "https://randomuser.me/api/portraits/men/29.jpg",
    bio: "silence speaks louder 🕶️"
  },
  {
    name: "Sana Mirza",
    pic: "https://randomuser.me/api/portraits/women/30.jpg",
    bio: "moonlight lover 🌙"
  },
  {
    name: "Manav Khurana",
    pic: "https://randomuser.me/api/portraits/men/31.jpg",
    bio: "grind now shine later ✨"
  },
  {
    name: "Rhea Thomas",
    pic: "https://randomuser.me/api/portraits/women/32.jpg",
    bio: "smiles heal everything 😊"
  },
  {
    name: "Kunal Patil",
    pic: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "energy never lies ⚡"
  },
  {
    name: "Ira Mallick",
    pic: "https://randomuser.me/api/portraits/women/34.jpg",
    bio: "lost in melodies 🎼"
  },
  {
    name: "Parth Jain",
    pic: "https://randomuser.me/api/portraits/men/35.jpg",
    bio: "mindset is key 🧠"
  },
  {
    name: "Myra Singh",
    pic: "https://randomuser.me/api/portraits/women/36.jpg",
    bio: "sparkle differently ✨"
  },
  {
    name: "Abeer Khan",
    pic: "https://randomuser.me/api/portraits/men/37.jpg",
    bio: "dark mode personality 🌑"
  },
  {
    name: "Zoya Ali",
    pic: "https://randomuser.me/api/portraits/women/38.jpg",
    bio: "wild and free 🌊"
  },
  {
    name: "Harsh Verma",
    pic: "https://randomuser.me/api/portraits/men/39.jpg",
    bio: "stay real always 💯"
  },
  {
    name: "Samaira Joshi",
    pic: "https://randomuser.me/api/portraits/women/40.jpg",
    bio: "art from chaos 🎨"
  }
];

function showUsers(arr) {
  arr.forEach(function (user) {
        const card = document.createElement("div");
    card.classList.add("card");

    
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    
    const content = document.createElement("div");
    content.classList.add("content");

    
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    
    content.appendChild(heading);
    content.appendChild(para);

   
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);

   if(!user.name.startsWith(inp.value)){
 document.querySelector("h1").style.display = "block";
 }


 
});

