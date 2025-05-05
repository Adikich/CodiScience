const lessons = [
    { title: "Lesson 1: Introduction to Kinematics", completed: false },
    { title: "Lesson 2: Motion and Forces", completed: true },
    { title: "Lesson 3: Energy and Work", completed: false },
    { title: "Lesson 4: Electricity Basics", completed: false }
  ];
  
  window.onload = () => {
    const container = document.querySelector(".lesson-list");
  
    lessons.forEach((lesson, index) => {
        const card = document.createElement("div");
        card.className = "lesson-card";
      
        const button = index === 0
          ? `<a href="lesson1.html"><button>${lesson.completed ? "Review" : "Start Lesson"}</button></a>`
          : `<button onclick="startLesson(${index})">${lesson.completed ? "Review" : "Start Lesson"}</button>`;
      
        card.innerHTML = `
          <h3>${lesson.title}</h3>
          <p>Status: ${lesson.completed ? "✅ Completed" : "❌ Not completed"}</p>
          ${button}
        `;
      
        container.appendChild(card);
      });
      
  
  function startLesson(index) {
    alert(`Opening ${lessons[index].title}... (future feature)`);
  } 
}
  