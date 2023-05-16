/*1 task
const slider = document.querySelector('.slider');
    const thumb = document.querySelector('.thumb');
    let isDragging = false;

    thumb.addEventListener('mousedown', (event) => {
      isDragging = true;
    });

    document.addEventListener('mouseup', (event) => {
      isDragging = false;
    });

    slider.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const sliderRect = slider.getBoundingClientRect();
        const offsetX = event.clientX - sliderRect.left;
        const position = Math.max(0, Math.min(offsetX, sliderRect.width));
        thumb.style.left = position + 'px';
      }
    });
    */

/*2 task
   const images = [
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg'
      
    ];
    let currentIndex = 0;

    const imageElement = document.getElementById('image');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    function showImage(index) {
      const imageUrl = images[index];
      imageElement.src = imageUrl;
    }

    function updateButtons() {
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === images.length - 1;
    }

    showImage(currentIndex);
    updateButtons();

    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
        updateButtons();
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
        updateButtons();
      }
    }); 
    */

 /*3 task
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');
    
      header.addEventListener('click', () => {
        const isActive = accordion.classList.contains('active');
    
        accordions.forEach(item => item.classList.remove('active'));
    
        if (!isActive) {
          accordion.classList.add('active');
        }
      });
    });
    */
  
 /*4 task
 const newsArray = [
    'Anime',
    "Anime is a form of animation that originated in the early 20th century in the Far East, specifically in Japan. Surprisingly, the genre owes its name not to a Japanese word, but to the English word animation, which gained popularity due to its easy pronunciation. However, let's not rush. By exploring the simplicity and lightness of this amazing genre, you may discover more about yourself. Japanese animation has distinct qualities that set it apart from its European counterparts. It is influenced by a unique mentality and, of course, original art style. For example, in anime, it is common to encounter characters who express their emotions in a subtle manner (the Japanese are reserved and private by nature, yet polite and hospitable, although their emotional depth may not match that of Russians, so caution is advised). This, among other reasons, keeps anime fans eagerly watching new episodes, and some even gather at special festivals to celebrate their passion and participate in cosplay events. The second essential aspect of enjoying these animations is the meticulous attention to detail and, consequently, the exceptional quality of the films.",
    'Vinland saga',
    "The events originated in the 11th century in Iceland, where the mighty Vikings lived. They had faith in the gods, and therefore they were not afraid of death, but they gravitated towards conquering new lands. The son of Thors was going to continue the work of his father. Thorfinn often listened to the stories of his father's friend Leif Eriksson about battles and exploits, and decided to follow the path of the warriors. After some time, Thorfinn has to leave the house and take up the sword. The boy did his best to convince his father to take him with him, but he resisted this. Thorfinn simply entered the drakkar without asking, and the father found his son there late.",
    "Dead mountain death game",
    "In one of the worlds militant moods reigned against the background of magic and sorcery. The Calamity Destroyer has had occasion to engage in battles, and in one of such actions, his opponent turns out to be an incredibly powerful Dead God. He was a necromancer, and therefore possessed special powers that he would not hesitate to use to defeat his opponent. When the fight reaches a climax, the Dead God uses a special technique that his enemies were unaware of. At the moment when he used his special skill, a light flashed and Polka Shinoyama left the world he was familiar with.",
    "Tales of demons and gods",
    "In the world once existed not only people, but also demons with gods. In the camp of demons, there was the same hierarchy as in human society. Enough in the world and squabbles involving demons. So, in one of the conflicts that arose between Nie Li, who was a demon caster and the Sage Emperor, a tragedy occurs. Nie Li died, only his soul did not go somewhere far beyond the earth, but incarnated on the planet, perhaps in the distant past. Now he was thirteen years old. He could live a new life and not think about what happened to him before. But he felt that it was impossible to do so."

   
   
  ];

  const newsList = document.getElementById("news-list");
  const loadingIcon = document.getElementById("loading-icon");
  
  let currentNewsIndex = 0; 
  
  function addNews() {
    if (currentNewsIndex >= newsArray.length) {
     
      loadingIcon.style.display = "none";
      return;
    }
  
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerText = newsArray[currentNewsIndex];
    newsList.appendChild(newsItem);
    
    currentNewsIndex++; 
    if (currentNewsIndex >= newsArray.length) {
        currentNewsIndex = 0; 
      }
  }
  
  function addAllNews() {
    
    newsArray.forEach(news => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");

      
      newsItem.innerText = news;
      newsList.appendChild(newsItem);

    });
  }
  
  addAllNews(); 
  
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadingIcon.style.display = "block";
      setTimeout(() => {
        addNews();
      }, 2000);
    }
  });*/

 /*5 task
  function generateCalendar() {
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const calendarContainer = document.getElementById("calendar");

    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;
    let calendarHTML = "<table>";
    calendarHTML += "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr>";

    let dayCounter = 1;
    calendarHTML += "<tr>";
    for (let i = 0; i < 7; i++) {
      if (i >= adjustedFirstDay) {
        calendarHTML += `<td>${dayCounter}</td>`;
        dayCounter++;
      } else {
        calendarHTML += "<td></td>";
      }
    }
    calendarHTML += "</tr>";

    while (dayCounter <= daysInMonth) {
      calendarHTML += "<tr>";
      for (let i = 0; i < 7; i++) {
        if (dayCounter <= daysInMonth) {
          calendarHTML += `<td>${dayCounter}</td>`;
          dayCounter++;
        } else {
          calendarHTML += "<td></td>";
        }
      }
      calendarHTML += "</tr>";
    }

    calendarHTML += "</table>";
    calendarContainer.innerHTML = calendarHTML;
    document.getElementById("month-year").innerHTML = `${getMonthName(month)} ${year}`;
  }
  function getMonthName(month) {
    const monthNames = [
      "Січень",
      "Лютий",
      "Березень",
      "Квітень",
      "Травень",
      "Червень",
      "Липень",
      "Серпень",
      "Вересень",
      "Жовтень",
      "Листопад",
      "Грудень"
    ];
    return monthNames[month - 1];
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    generateCalendar();
  });
  */

/*6 task
const links = document.querySelectorAll('#links a');
const currentHostname = window.location.hostname;

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  const url = new URL(link.href);

  if (
    (url.protocol === 'http:' || url.protocol === 'https:') &&
    url.hostname !== currentHostname
  ) {
    link.classList.add('dotted');
  } else {
    link.style.textDecoration = 'none';
    link.style.borderBottom = 'none';
  }
  
links.forEach((link) => {
  link.style.textDecoration = "none";
});
}
*/

/*7 task
const bookList = document.getElementById("bookList");
const books = bookList.getElementsByTagName("li");
let selectedBooks = [];

function selectBook(event) {
  const book = event.target;
  const ctrlKey = event.ctrlKey;
  const shiftKey = event.shiftKey;

  if (!ctrlKey && !shiftKey) {
    
    selectedBooks.forEach((selectedBook) => {
      selectedBook.classList.remove("selected");
    });
    selectedBooks = [];
  }

  if (ctrlKey) {
    
    if (selectedBooks.includes(book)) {
      book.classList.remove("selected");
      selectedBooks = selectedBooks.filter((selectedBook) => selectedBook !== book);
    } else {
      book.classList.add("selected");
      selectedBooks.push(book);
    }
  } else if (shiftKey && selectedBooks.length > 0) {
    
    const firstBook = selectedBooks[selectedBooks.length - 1];
    const startIndex = Array.from(books).indexOf(firstBook);
    const endIndex = Array.from(books).indexOf(book);
    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);
    for (let i = start; i <= end; i++) {
      const selectedBook = books[i];
      selectedBook.classList.add("selected");
      if (!selectedBooks.includes(selectedBook)) {
        selectedBooks.push(selectedBook);
      }
    }
  } else {
    if (window.getSelection) {
      const selection = window.getSelection();
      selection.removeAllRanges();
    }
    
    book.classList.add("selected");
    selectedBooks.push(book);
  }
}

for (let i = 0; i < books.length; i++) {
  books[i].addEventListener("click", selectBook);
}
  */
  
/*8 task
const textContainer = document.getElementById('textContainer');
    const textarea = document.getElementById('textarea');
    let isEditing = false;

    
    function showText() {
      textarea.classList.add('hidden');
      textContainer.innerHTML = `<p>${textarea.value}</p>`;
      textContainer.classList.remove('hidden');
      isEditing = false;
    }

    
    function editText() {
      textContainer.classList.add('hidden');
      textarea.value = textContainer.innerText.trim();
      textarea.classList.remove('hidden');
      textarea.focus();
      isEditing = true;
    }

    
    document.addEventListener('keydown', function(event) {
      const ctrlKey = event.ctrlKey || event.metaKey; 
      const key = String.fromCharCode(event.keyCode).toLowerCase(); 

      if (ctrlKey && key === 'e') {
        event.preventDefault(); 
        if (!isEditing) {
          editText();
        }
      } else if (ctrlKey && key === 's') {
        event.preventDefault(); 
        if (isEditing) {
          showText();
        }
      }
    });
    */

/*9 task
function sortTable(columnIndex) {
  const table = document.getElementById('dataTable');
  const rows = Array.from(table.tBodies[0].rows);
  const isNumeric = columnIndex === 2; 
  const isCompany = columnIndex === 3; 

  rows.sort(function(rowA, rowB) {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    if (isNumeric) {
      return parseFloat(cellA) - parseFloat(cellB);
    } else if (isCompany) {
      return cellA.localeCompare(cellB, 'en', { sensitivity: 'base' });
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach(function(row) {
    table.tBodies[0].appendChild(row);
  });
}
*/


  
    
  


    