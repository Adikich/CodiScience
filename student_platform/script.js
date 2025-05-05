// Пример данных ученика
const student = {
    name: "Madi",
    avatar: "https://i.pravatar.cc/150?img=12",  // можно заменить на своё фото
    level: "Junior scientist",
    points: 1240,
    progress: {
      "Robotics": 70,
      "Space Science": 40,
      "Biology Quest": 90
    }
  };
  
  // Заполнить профиль
  window.onload = function () {
    document.querySelector(".profile h2").textContent = student.name;
    document.querySelector(".avatar").src = student.avatar;
    document.querySelector(".profile p:nth-of-type(1)").innerHTML = `Level: <strong>${student.level}</strong>`;
    document.querySelector(".profile p:nth-of-type(2)").innerHTML = `Points: <strong>${student.points} ⭐</strong>`;
  
    const courses = document.querySelector(".progress-section ul");
    courses.innerHTML = "";
  
    for (let course in student.progress) {
      const percent = student.progress[course];
      const li = document.createElement("li");
      li.innerHTML = `${course}: <span class="progress-bar"><span style="width: ${percent}%"></span></span> ${percent}%`;
      courses.appendChild(li);
    }
  };

  function openEdit() {
    document.querySelector(".edit-form").style.display = "block";
    document.getElementById("edit-name").value = student.name;
    document.getElementById("edit-avatar").value = student.avatar;
  }
  
  function saveProfile() {
    const newName = document.getElementById("edit-name").value;
    const newAvatar = document.getElementById("edit-avatar").value;
  
    student.name = newName;
    student.avatar = newAvatar;
  
    // Обновить отображение
    document.querySelector(".profile h2").textContent = student.name;
    document.querySelector(".avatar").src = student.avatar;
  
    // Скрыть форму
    document.querySelector(".edit-form").style.display = "none";
  }
  
  