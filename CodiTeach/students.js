const students = [
    { name: "Айдана", course: "Физика", progress: 76 },
    { name: "Ернар", course: "Космос", progress: 55 },
    { name: "Мади", course: "Робототехника", progress: 89 }
  ];
  
  window.onload = () => {
    const container = document.getElementById("studentList");
  
    students.forEach(student => {
      const card = document.createElement("div");
      card.className = "student-card";
  
      card.innerHTML = `
        <h3>${student.name}</h3>
        <p>Курс: ${student.course}</p>
        <div class="progress">
          <span style="width: ${student.progress}%"></span>
        </div>
        <p>Прогресс: ${student.progress}%</p>
      `;
  
      container.appendChild(card);
    });
  };
  