const courses = [
    { name: "Physics", progress: 70 },
    { name: "Space Science", progress: 40 },
    { name: "Robotics", progress: 90 },
    { name: "AI for Kids", progress: 20 }
  ];
  
  window.onload = () => {
    const container = document.querySelector(".course-list");
  
    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
  
      let buttonHTML = "";
  
      if (course.name === "Physics") {
        buttonHTML = `<a href="physics.html"><button>Continue</button></a>`;
      } else {
        buttonHTML = `<button onclick="alert('Coming soon!')">Continue</button>`;
      }
  
      card.innerHTML = `
        <h3>${course.name}</h3>
        <span class="progress-bar"><span style="width: ${course.progress}%"></span></span>
        <p>${course.progress}% completed</p>
        ${buttonHTML}
      `;
  
      container.appendChild(card);
    });
  };
  