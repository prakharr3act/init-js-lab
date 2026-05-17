const users = [
  {
    name: "Amisha Rathore",
    pic: "https://i.pravatar.cc/400?img=1",
    bio: "silent chaos in a loud world 🌑🖤"
  },
  {
    name: "Kiara Mehta",
    pic: "https://i.pravatar.cc/400?img=2",
    bio: "coffee > everything ☕✨"
  },
  {
    name: "Isha Oberoi",
    pic: "https://i.pravatar.cc/400?img=3",
    bio: "walking through dreams ☁️"
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pravatar.cc/400?img=4",
    bio: "too glam to give a damn 💅"
  },
  {
    name: "Riya Sharma",
    pic: "https://i.pravatar.cc/400?img=5",
    bio: "moonlight & melodies 🌙🎧"
  },
  {
    name: "Arjun Verma",
    pic: "https://i.pravatar.cc/400?img=6",
    bio: "building ideas into reality 🚀"
  },
  {
    name: "Kabir Khan",
    pic: "https://i.pravatar.cc/400?img=7",
    bio: "lost in pixels 🎮"
  },
  {
    name: "Sara Ali",
    pic: "https://i.pravatar.cc/400?img=8",
    bio: "pretty mind, savage soul 🖤"
  },
  {
    name: "Dev Malhotra",
    pic: "https://i.pravatar.cc/400?img=9",
    bio: "late night thinker 🌃"
  },
  {
    name: "Anaya Kapoor",
    pic: "https://i.pravatar.cc/400?img=10",
    bio: "sunsets heal everything 🌅"
  },
  {
    name: "Vihaan Roy",
    pic: "https://i.pravatar.cc/400?img=11",
    bio: "coding & chill 💻"
  },
  {
    name: "Myra Singh",
    pic: "https://i.pravatar.cc/400?img=12",
    bio: "soft heart, sharp mind ✨"
  },
  {
    name: "Aarav Joshi",
    pic: "https://i.pravatar.cc/400?img=13",
    bio: "dream big, stay humble 🌍"
  },
  {
    name: "Tara Nair",
    pic: "https://i.pravatar.cc/400?img=14",
    bio: "chaotic but cute 😵‍💫"
  },
  {
    name: "Reyansh Sethi",
    pic: "https://i.pravatar.cc/400?img=15",
    bio: "music keeps me alive 🎵"
  },
  {
    name: "Aisha Khan",
    pic: "https://i.pravatar.cc/400?img=16",
    bio: "living in aesthetic mode 📸"
  },
  {
    name: "Rohan Das",
    pic: "https://i.pravatar.cc/400?img=17",
    bio: "sleep? never heard of it 😴"
  },
  {
    name: "Nitya Jain",
    pic: "https://i.pravatar.cc/400?img=18",
    bio: "books and rainy vibes 📚🌧️"
  },
  {
    name: "Yash Patil",
    pic: "https://i.pravatar.cc/400?img=19",
    bio: "creating my own story ✍️"
  },
  {
    name: "Meher Arora",
    pic: "https://i.pravatar.cc/400?img=20",
    bio: "kindness is power 🤍"
  },
  {
    name: "Aditya Rao",
    pic: "https://i.pravatar.cc/400?img=21",
    bio: "404 feelings not found 🤖"
  },
  {
    name: "Zoya Mirza",
    pic: "https://i.pravatar.cc/400?img=22",
    bio: "wild spirit 🌊"
  },
  {
    name: "Dhruv Kapoor",
    pic: "https://i.pravatar.cc/400?img=23",
    bio: "future billionaire 💸"
  },
  {
    name: "Pihu Sharma",
    pic: "https://i.pravatar.cc/400?img=24",
    bio: "tiny human, big dreams 🌸"
  },
  {
    name: "Neil Fernandes",
    pic: "https://i.pravatar.cc/400?img=25",
    bio: "vibing through life 🎶"
  },
  {
    name: "Ritika Sen",
    pic: "https://i.pravatar.cc/400?img=26",
    bio: "not everyone deserves access 🔒"
  },
  {
    name: "Aryan Mehra",
    pic: "https://i.pravatar.cc/400?img=27",
    bio: "just another main character 🎬"
  },
  {
    name: "Siya Gupta",
    pic: "https://i.pravatar.cc/400?img=28",
    bio: "healing and growing 🌱"
  },
  {
    name: "Krish Batra",
    pic: "https://i.pravatar.cc/400?img=29",
    bio: "energy never lies ⚡"
  },
  {
    name: "Aditi Roy",
    pic: "https://i.pravatar.cc/400?img=30",
    bio: "collecting memories 📷"
  },
  {
    name: "Harsh Vardhan",
    pic: "https://i.pravatar.cc/400?img=31",
    bio: "silence speaks louder 🕶️"
  },
  {
    name: "Tanvi Chawla",
    pic: "https://i.pravatar.cc/400?img=32",
    bio: "golden hour addict 🌞"
  },
  {
    name: "Kunal Yadav",
    pic: "https://i.pravatar.cc/400?img=33",
    bio: "grind now, shine later 🔥"
  },
  {
    name: "Sneha Pillai",
    pic: "https://i.pravatar.cc/400?img=34",
    bio: "good vibes only 🌈"
  },
  {
    name: "Rudra Sen",
    pic: "https://i.pravatar.cc/400?img=35",
    bio: "gaming all night 🎮"
  },
  {
    name: "Ira Mallick",
    pic: "https://i.pravatar.cc/400?img=36",
    bio: "soft music & deep thoughts 🎼"
  },
  {
    name: "Vedant Kulkarni",
    pic: "https://i.pravatar.cc/400?img=37",
    bio: "minimalist soul 🖤"
  },
  {
    name: "Navya Reddy",
    pic: "https://i.pravatar.cc/400?img=38",
    bio: "sparkle differently ✨"
  },
  {
    name: "Manav Khurana",
    pic: "https://i.pravatar.cc/400?img=39",
    bio: "work hard stay real 💯"
  },
  {
    name: "Esha Kapoor",
    pic: "https://i.pravatar.cc/400?img=40",
    bio: "chaos with confidence 👑"
  },
  {
    name: "Vivaan Arora",
    pic: "https://i.pravatar.cc/400?img=41",
    bio: "offline is peace 📵"
  },
  {
    name: "Sana Sheikh",
    pic: "https://i.pravatar.cc/400?img=42",
    bio: "romanticizing life 🌷"
  },
  {
    name: "Laksh Sharma",
    pic: "https://i.pravatar.cc/400?img=43",
    bio: "focused on bigger things 🎯"
  },
  {
    name: "Anika Bose",
    pic: "https://i.pravatar.cc/400?img=44",
    bio: "living for little moments 🌼"
  },
  {
    name: "Parth Jain",
    pic: "https://i.pravatar.cc/400?img=45",
    bio: "mindset is everything 🧠"
  },
  {
    name: "Trisha Anand",
    pic: "https://i.pravatar.cc/400?img=46",
    bio: "floating through feelings ☁️"
  },
  {
    name: "Abeer Khan",
    pic: "https://i.pravatar.cc/400?img=47",
    bio: "dark mode personality 🌑"
  },
  {
    name: "Rhea Thomas",
    pic: "https://i.pravatar.cc/400?img=48",
    bio: "happiness looks good on me 😊"
  },
  {
    name: "Ivaan Gill",
    pic: "https://i.pravatar.cc/400?img=49",
    bio: "keep it simple ⚪"
  },
  {
    name: "Samaira Joshi",
    pic: "https://i.pravatar.cc/400?img=50",
    bio: "creating art from chaos 🎨"
  }
];


function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body or any container
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
});