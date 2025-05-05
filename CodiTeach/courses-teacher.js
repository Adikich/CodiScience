const courses = [
    { title: "Физика", students: 18 },
    { title: "Космос для детей", students: 12 },
    { title: "Робототехника", students: 22 }
  ];
  
  window.onload = () => {
    const list = document.getElementById("courseList");
  
    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
  
      card.innerHTML = `
        <h3>${course.title}</h3>
        <p>Учеников: ${course.students}</p>
        <button onclick="alert('Редактирование в разработке')">✏️ Редактировать</button>
      `;
  
      list.appendChild(card);
    });
  };
  
  function addCourse() {
    alert("Функция добавления курса пока в разработке.");
  }
  