
const topics = [
  {
    id: "python", title: "Python Programming", short: "PY",
    category: "Python & Data", level: "Beginner to Intermediate",
    duration: "8 lessons", color: "#a78bfa",
    description: "Learn Python basics, loops, functions, OOP, files and error handling.",
    intro: "Python is a readable, high-level programming language used in automation, web development, data science and AI.",
    why: "Python is beginner-friendly and has a large ecosystem of libraries for building real-world applications.",
    concepts: [
      ["Variables and data types", "Store values using names. Common types include int, float, str and bool."],
      ["Conditions and loops", "Use if/elif/else for decisions and for/while to repeat tasks."],
      ["Functions", "Create reusable blocks of code using def, parameters and return."],
      ["Collections", "Lists, tuples, sets and dictionaries organise multiple values."],
      ["OOP", "Classes and objects combine data with behaviour."]
    ],
    code: `name = "Learner"
for number in range(1, 4):
    print(number, "Hello", name)`,
    output: `1 Hello Learner
2 Hello Learner
3 Hello Learner`,
    explanation: "The loop runs for 1, 2 and 3. Each iteration prints the number and the name.",
    mistakes: "Python relies on indentation. Strings need quotes, and variable names are case-sensitive.",
    exercise: "Create a city variable and print a sentence containing its value.",
    quiz: [
      { q: "Which keyword defines a function?", options: ["function", "def", "define", "fun"], answer: 1, why: "Python uses def to define a function." },
      { q: "What is len([2, 4, 6])?", options: ["2", "4", "3", "6"], answer: 2, why: "There are three elements in the list." },
      { q: "Which symbol starts a Python comment?", options: ["//", "#", "/*", "--"], answer: 1, why: "The # symbol starts a single-line comment." }
    ]
  },
  {
    id: "numpy", title: "NumPy", short: "NP",
    category: "Python & Data", level: "Beginner",
    duration: "5 lessons", color: "#67e8f9",
    description: "Explore arrays, indexing, dimensions and numerical operations.",
    intro: "NumPy is a Python library for efficient numerical calculations. Its core structure is the ndarray.",
    why: "NumPy is widely used in scientific computing, data analysis and machine learning.",
    concepts: [
      ["Arrays", "Create arrays using np.array()."],
      ["Dimensions", "Inspect shape, ndim and size."],
      ["Indexing", "Access individual elements and slices."],
      ["Vectorisation", "Apply arithmetic to whole arrays."],
      ["Statistics", "Calculate mean, sum, minimum and maximum."]
    ],
    code: `import numpy as np

marks = np.array([70, 80, 90])
print(marks.mean())
print(marks + 5)`,
    output: `80.0
[75 85 95]`,
    explanation: "mean() calculates the average. Adding 5 applies the operation to each array element.",
    mistakes: "Import NumPy first. Check array dimensions when combining arrays.",
    exercise: "Create an array of five numbers and print its sum and maximum.",
    quiz: [
      { q: "Which function creates a NumPy array?", options: ["np.array()", "np.list()", "np.make()", "np.table()"], answer: 0, why: "np.array() creates a NumPy array." },
      { q: "What does shape describe?", options: ["Colour", "Dimensions", "File name", "Only data type"], answer: 1, why: "shape reports the size along each dimension." },
      { q: "Which function calculates an average?", options: ["np.top()", "np.mean()", "np.middle()", "np.averageall()"], answer: 1, why: "np.mean() calculates the arithmetic mean." }
    ]
  },
  {
    id: "pandas", title: "Pandas", short: "PD",
    category: "Python & Data", level: "Beginner",
    duration: "6 lessons", color: "#86efac",
    description: "Work with tables, CSV files, missing values and data cleaning.",
    intro: "Pandas is a Python library for analysing structured data. Its main structures are Series and DataFrame.",
    why: "It helps clean, transform and explore datasets before analysis or machine learning.",
    concepts: [
      ["Series and DataFrame", "Represent labelled data and tables."],
      ["Read CSV files", "Load data using pd.read_csv()."],
      ["Inspect data", "Use head(), info(), shape and describe()."],
      ["Filter rows", "Select records that match a condition."],
      ["Clean data", "Handle missing values and duplicates."]
    ],
    code: `import pandas as pd

data = {"Name": ["Asha", "Ravi"], "Marks": [85, 92]}
df = pd.DataFrame(data)
print(df["Marks"].mean())`,
    output: `88.5`,
    explanation: "The dictionary is converted into a DataFrame. The mean of 85 and 92 is 88.5.",
    mistakes: "Check column names and data types. Inspect missing values before analysing data.",
    exercise: "Create a student DataFrame and find the highest mark.",
    quiz: [
      { q: "Which Pandas object represents a table?", options: ["DataFrame", "Canvas", "ArrayList", "Loop"], answer: 0, why: "A DataFrame represents tabular data." },
      { q: "Which method reads a CSV file?", options: ["pd.open_csv()", "pd.read_csv()", "pd.load_table()", "pd.csv_read()"], answer: 1, why: "pd.read_csv() loads CSV data." },
      { q: "Which method summarises column types and non-null counts?", options: ["info()", "paint()", "launch()", "plot()"], answer: 0, why: "info() summarises the DataFrame structure." }
    ]
  },
  {
    id: "matplotlib", title: "Matplotlib & Seaborn", short: "📊",
    category: "Python & Data", level: "Beginner",
    duration: "4 lessons", color: "#fdba74",
    description: "Create line charts, bar charts, histograms and visualisations.",
    intro: "Matplotlib is a plotting library. Seaborn adds convenient statistical visualisation tools.",
    why: "Charts help identify patterns, compare values and communicate data insights.",
    concepts: [
      ["Line charts", "Show trends across ordered values."],
      ["Bar charts", "Compare categories."],
      ["Histograms", "Explore numeric distributions."],
      ["Labels", "Add titles, axis labels and legends."],
      ["Seaborn", "Create statistical charts with concise code."]
    ],
    code: `import matplotlib.pyplot as plt

days = ["Mon", "Tue", "Wed"]
visits = [12, 18, 15]

plt.plot(days, visits, marker="o")
plt.title("Daily Visits")
plt.show()`,
    output: "A line chart titled Daily Visits with three data points.",
    explanation: "plot() creates a line chart, title() adds a heading and show() displays the figure.",
    mistakes: "Label axes when useful and verify that the data matches the chart type.",
    exercise: "Create a bar chart comparing marks in three subjects.",
    quiz: [
      { q: "Which chart shows a trend over time?", options: ["Line chart", "Text box", "Database table", "Code block"], answer: 0, why: "Line charts commonly show changes across ordered values." },
      { q: "Which command displays a Matplotlib plot?", options: ["plt.run()", "plt.show()", "plt.print()", "plt.chart()"], answer: 1, why: "plt.show() displays the plot." },
      { q: "What does a histogram show?", options: ["Data distribution", "Code indentation", "File permissions", "Network speed"], answer: 0, why: "A histogram shows the frequency distribution of numeric data." }
    ]
  },
  {
    id: "html", title: "HTML", short: "HT",
    category: "Web Development", level: "Beginner",
    duration: "5 lessons", color: "#fdba74",
    description: "Build page structure using headings, links, lists, tables and forms.",
    intro: "HTML stands for HyperText Markup Language. It defines the structure and meaning of web content.",
    why: "HTML is the foundation of most websites. CSS styles pages and JavaScript adds behaviour.",
    concepts: [
      ["Document structure", "Use html, head, title and body."],
      ["Text elements", "Create headings, paragraphs and lists."],
      ["Links and images", "Connect pages and display images with useful alt text."],
      ["Semantic HTML", "Use header, nav, main, section and footer."],
      ["Forms", "Collect input using labels, fields and buttons."]
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>My first webpage.</p>
</body>
</html>`,
    output: "A page displaying the heading Hello, world! and a paragraph.",
    explanation: "The head contains metadata. The body contains the content displayed on the page.",
    mistakes: "Close elements correctly, label form fields and provide useful alt text for meaningful images.",
    exercise: "Create a profile page with a heading, skills list and email link.",
    quiz: [
      { q: "What does HTML define?", options: ["Page structure", "Only colours", "Database passwords", "CPU instructions"], answer: 0, why: "HTML describes the structure of web content." },
      { q: "Which element creates a hyperlink?", options: ["<linkto>", "<a>", "<href>", "<url>"], answer: 1, why: "The anchor element creates hyperlinks." },
      { q: "Which element represents the main page content?", options: ["<main>", "<meta>", "<title>", "<head>"], answer: 0, why: "The main element represents primary page content." }
    ]
  },
  {
    id: "css", title: "CSS & Responsive Design", short: "CS",
    category: "Web Development", level: "Beginner",
    duration: "5 lessons", color: "#67e8f9",
    description: "Learn selectors, colours, Flexbox, Grid, transitions and responsive layouts.",
    intro: "CSS stands for Cascading Style Sheets. It controls the visual presentation and layout of HTML.",
    why: "CSS helps create attractive, readable interfaces that adapt to different screens.",
    concepts: [
      ["Selectors", "Target elements using classes, IDs and element names."],
      ["Box model", "Understand content, padding, border and margin."],
      ["Flexbox", "Align items in a row or column."],
      ["Grid", "Build layouts with rows and columns."],
      ["Responsive design", "Use flexible dimensions and media queries."]
    ],
    code: `.card {
  padding: 20px;
  border-radius: 12px;
  background: #171a2a;
  color: white;
}

@media (max-width: 600px) {
  .card { padding: 12px; }
}`,
    output: "A rounded card with smaller padding on narrow screens.",
    explanation: "The .card selector applies styles to elements with that class. The media query adjusts padding on small screens.",
    mistakes: "Use a dot for class selectors and a hash for IDs. Test contrast and different viewport sizes.",
    exercise: "Style a card and add a mobile media query.",
    quiz: [
      { q: "Which selector targets class='card'?", options: ["#card", ".card", "card()", "@card"], answer: 1, why: "A dot selects a class in CSS." },
      { q: "What is Flexbox used for?", options: ["Layout and alignment", "Database storage", "Running Python", "Compressing images"], answer: 0, why: "Flexbox is a CSS layout system." },
      { q: "What does a media query help with?", options: ["Responsive styling", "SQL joins", "Compiling C++", "Creating databases"], answer: 0, why: "Media queries apply styles based on conditions such as viewport width." }
    ]
  },
  {
    id: "java", title: "Java Programming", short: "JV",
    category: "Programming", level: "Beginner",
    duration: "6 lessons", color: "#fdba74",
    description: "Learn Java syntax, loops, methods, arrays, classes and OOP.",
    intro: "Java is a general-purpose, class-based programming language. Java bytecode commonly runs on the Java Virtual Machine.",
    why: "Java is used in backend systems, enterprise applications, Android development and education.",
    concepts: [
      ["Variables and types", "Use int, double, char and String."],
      ["Control flow", "Use if/else, switch and loops."],
      ["Methods", "Organise reusable operations."],
      ["Classes and objects", "Model data and behaviour."],
      ["Exceptions", "Handle exceptional situations with try/catch."]
    ],
    code: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 3; i++) {
      System.out.println(i);
    }
  }
}`,
    output: `1
2
3`,
    explanation: "The main method is the entry point. The for loop prints values from 1 to 3.",
    mistakes: "Java is case-sensitive. Public class names should match their file names.",
    exercise: "Write a Java program that adds two integers.",
    quiz: [
      { q: "What is the standard Java entry point?", options: ["start()", "main()", "begin()", "launch()"], answer: 1, why: "Java applications commonly start in main(String[] args)." },
      { q: "Which type stores true or false?", options: ["int", "String", "boolean", "char"], answer: 2, why: "boolean stores true or false." },
      { q: "What is an object?", options: ["An instance of a class", "A loop keyword", "A file extension", "A comment"], answer: 0, why: "An object is an instance of a class." }
    ]
  },
  {
    id: "cpp", title: "C & C++ Programming", short: "C++",
    category: "Programming", level: "Beginner",
    duration: "6 lessons", color: "#67e8f9",
    description: "Explore variables, pointers, arrays, functions, classes and the C++ STL.",
    intro: "C is a procedural language used in systems programming. C++ adds features such as classes, templates and the Standard Template Library.",
    why: "Both languages help develop an understanding of memory and performance. C++ is also widely used in DSA.",
    concepts: [
      ["Syntax and types", "Understand variables, operators and statements."],
      ["Functions and arrays", "Break problems into reusable operations."],
      ["Pointers and references", "Understand addresses and references."],
      ["Classes and objects", "Use constructors, methods and encapsulation."],
      ["STL", "Explore vector, string, stack, queue and algorithms."]
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    cout << a + b << endl;
    return 0;
}`,
    output: "30",
    explanation: "The program adds two integers and prints the result using cout.",
    mistakes: "Include the correct headers, initialise variables and understand pointer usage.",
    exercise: "Write a C++ program that reads three integers and prints the largest.",
    quiz: [
      { q: "Which operator sends data to cout?", options: ["<<", ">>", ":::", "->>"], answer: 0, why: "The insertion operator << sends data to cout." },
      { q: "Which STL container is a dynamic array?", options: ["vector", "printf", "namespace", "stackframe"], answer: 0, why: "std::vector is a resizable sequence container." },
      { q: "What does a pointer store?", options: ["A memory address", "Only a sentence", "A chart", "Only a class name"], answer: 0, why: "A pointer stores an address or a null pointer value." }
    ]
  },
  {
    id: "dsa", title: "Data Structures & Algorithms", short: "DSA",
    category: "Programming", level: "Beginner to Advanced",
    duration: "8 lessons", color: "#86efac",
    description: "Study arrays, linked lists, stacks, queues, trees, graphs, searching and sorting.",
    intro: "Data structures organise information, while algorithms define steps to solve problems.",
    why: "DSA develops problem-solving skills and is important in technical interviews and efficient software design.",
    concepts: [
      ["Arrays and linked lists", "Store sequences in different memory structures."],
      ["Stacks and queues", "Understand LIFO and FIFO ordering."],
      ["Searching and sorting", "Study linear search, binary search and sorting algorithms."],
      ["Trees and graphs", "Represent hierarchies and relationships."],
      ["Complexity", "Use Big-O notation to reason about time and space."]
    ],
    code: `def binary_search(values, target):
    left, right = 0, len(values) - 1

    while left <= right:
        mid = (left + right) // 2
        if values[mid] == target:
            return mid
        if values[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

print(binary_search([2, 4, 6, 8], 6))`,
    output: "2",
    explanation: "Binary search halves the sorted search range repeatedly. It returns index 2 because Python indexing starts at zero.",
    mistakes: "Binary search requires sorted input. Check boundaries and distinguish an index from a value.",
    exercise: "Implement linear search and compare its steps with binary search.",
    quiz: [
      { q: "Which structure follows LIFO?", options: ["Queue", "Stack", "Graph", "Tree"], answer: 1, why: "A stack follows Last In, First Out." },
      { q: "What is binary search's typical time complexity?", options: ["O(n²)", "O(log n)", "O(2ⁿ)", "O(n log n) always"], answer: 1, why: "Each step halves the remaining search interval." },
      { q: "Which structure uses nodes and edges?", options: ["Graph", "String", "Variable", "Loop"], answer: 0, why: "Graphs contain vertices and edges." }
    ]
  },
  {
    id: "aiml", title: "Artificial Intelligence & ML", short: "AI",
    category: "AI & Tools", level: "Beginner",
    duration: "6 lessons", color: "#c4b5fd",
    description: "Explore AI, machine learning, model training, evaluation and neural networks.",
    intro: "AI is a broad field focused on intelligent behaviour. Machine learning is a part of AI where models learn patterns from data.",
    why: "AI and ML support applications such as recommendations, forecasting, image recognition and language processing.",
    concepts: [
      ["AI and ML", "Understand how AI, ML and deep learning relate."],
      ["Types of learning", "Explore supervised, unsupervised and reinforcement learning."],
      ["Training and testing", "Separate data to evaluate generalisation."],
      ["Evaluation metrics", "Learn accuracy, precision, recall and confusion matrices."],
      ["Neural networks", "Understand layers, weights and activation functions."]
    ],
    code: `from sklearn.tree import DecisionTreeClassifier

features = [[1], [2], [8], [9]]
labels = ["low", "low", "high", "high"]

model = DecisionTreeClassifier(random_state=0)
model.fit(features, labels)
print(model.predict([[3]])[0])`,
    output: "low (for this illustrative dataset and model)",
    explanation: "This example trains a small decision tree and predicts a label for a new value. Real projects need suitable data and evaluation.",
    mistakes: "Do not evaluate only on training data. Check for data leakage, class imbalance and suitable metrics.",
    exercise: "Describe a problem that machine learning could help solve and list possible input features.",
    quiz: [
      { q: "What does supervised learning use?", options: ["Labelled examples", "No data", "Only CSS", "Only tables"], answer: 0, why: "Supervised learning uses examples with target labels." },
      { q: "Why separate test data?", options: ["Estimate performance on unseen data", "Change colours", "Prevent every error", "Replace training"], answer: 0, why: "Test data helps evaluate generalisation." },
      { q: "Which is a classification task?", options: ["Spam or not spam", "Changing a font", "Adding constants", "Renaming files"], answer: 0, why: "Classification predicts a category." }
    ]
  },
  {
    id: "sqlgit", title: "SQL, Git & GitHub", short: "DB",
    category: "AI & Tools", level: "Beginner",
    duration: "6 lessons", color: "#86efac",
    description: "Learn SQL queries, joins, Git commits, repositories and project documentation.",
    intro: "SQL queries relational databases. Git tracks file changes, and GitHub hosts repositories and supports collaboration.",
    why: "Databases organise information. Version control makes project history and teamwork easier to manage.",
    concepts: [
      ["SQL queries", "Use SELECT, WHERE and ORDER BY."],
      ["Joins", "Combine related tables using keys."],
      ["Git commands", "Understand status, add, commit and log."],
      ["GitHub", "Store and share repositories online."],
      ["README", "Document project purpose, features and setup."]
    ],
    code: `-- SQL example
SELECT name, marks
FROM students
WHERE marks >= 80
ORDER BY marks DESC;

-- Git commands in a terminal
git status
git add .
git commit -m "Add project files"`,
    output: "SQL returns matching students in descending mark order. Git status shows changes, add stages them and commit records a snapshot.",
    explanation: "SQL queries database records. Git commits record staged changes in local repository history.",
    mistakes: "Check SQL table names. Never commit passwords, tokens or private keys.",
    exercise: "Write a SELECT query with a WHERE condition and practise committing a project change.",
    quiz: [
      { q: "Which SQL clause filters rows?", options: ["WHERE", "PAINT", "STYLE", "IMPORT"], answer: 0, why: "WHERE filters rows using a condition." },
      { q: "What does git commit do?", options: ["Records staged changes", "Deletes GitHub", "Runs Python", "Creates CSS"], answer: 0, why: "A commit records staged changes in local Git history." },
      { q: "What is GitHub commonly used for?", options: ["Hosting repositories and collaboration", "Replacing all languages", "Only editing photos", "Automatically fixing every program"], answer: 0, why: "GitHub hosts repositories and collaboration tools." }
    ]
  },
  {
    id: "genai", title: "Generative AI & Prompting", short: "GEN",
    category: "AI & Tools", level: "Beginner",
    duration: "4 lessons", color: "#f0abfc",
    description: "Learn generative AI, language models, prompt design and responsible use.",
    intro: "Generative AI can create content such as text, images, audio and code. Language models generate responses from learned patterns and provided context.",
    why: "AI literacy and prompt design help people use these tools thoughtfully for learning, brainstorming and prototyping.",
    concepts: [
      ["Generative AI", "Understand systems that produce new content."],
      ["Language models", "Explore tokens, context and generated responses."],
      ["Prompt structure", "Specify a goal, context, constraints and format."],
      ["Evaluation", "Check claims and test generated code."],
      ["Responsible use", "Protect private data and watch for inaccurate outputs."]
    ],
    code: `task = "Explain binary search"
context = "I am a beginner learning Python."
format_ = "Give an example and its output."

prompt = f"{task}. {context} {format_}"
print(prompt)`,
    output: "Explain binary search. I am a beginner learning Python. Give an example and its output.",
    explanation: "This example assembles a prompt string. It does not call an AI service by itself.",
    mistakes: "Verify important facts and avoid sharing passwords or sensitive data with online tools.",
    exercise: "Write a prompt asking for a beginner-friendly explanation with an example and three practice questions.",
    quiz: [
      { q: "What is a useful prompt ingredient?", options: ["Clear goal and context", "Unrelated text", "A password", "No task"], answer: 0, why: "A clear goal and relevant context help the model understand the task." },
      { q: "Should important AI-generated facts be checked?", options: ["Yes", "Never", "Only if short", "Only after printing"], answer: 0, why: "AI outputs can be inaccurate and should be verified when accuracy matters." },
      { q: "What is a responsible approach to private data?", options: ["Share everything", "Protect sensitive information", "Publish passwords", "Put keys in README"], answer: 1, why: "Avoid exposing sensitive information and follow privacy guidance." }
    ]
  }
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const storageKey = "codeverse-learning-progress";

let activeCategory = "All";
let currentTopic = topics[0];
let quizQuestions = [];
let quizSubmitted = false;

function getProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      completed: Array.isArray(saved?.completed) ? saved.completed : [],
      visited: Array.isArray(saved?.visited) ? saved.visited : []
    };
  } catch {
    return { completed: [], visited: [] };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // The learning interface still works if storage is unavailable.
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function topicCard(topic) {
  const progress = getProgress();
  const done = progress.completed.includes(topic.id);

  return `
    <article class="topic-card">
      <div class="topic-card-top">
        <div class="topic-icon" style="color:${topic.color};background:${topic.color}18">
          ${escapeHTML(topic.short)}
        </div>
        <span class="topic-category">${escapeHTML(topic.category)}</span>
      </div>
      <h3>${escapeHTML(topic.title)}</h3>
      <p>${escapeHTML(topic.description)}</p>
      <div class="topic-meta">
        <span>${escapeHTML(topic.level)}</span>
        <span>${done ? "✓ Completed" : escapeHTML(topic.duration)}</span>
      </div>
      <button class="topic-open" data-topic="${escapeHTML(topic.id)}">
        <span>${done ? "Review topic" : "Start learning"}</span><span>↗</span>
      </button>
    </article>`;
}

function filterTopics(category = activeCategory, search = "") {
  const query = search.trim().toLowerCase();

  return topics.filter(topic => {
    const matchesCategory = category === "All" || topic.category === category;
    const searchable = `${topic.title} ${topic.description} ${topic.category} ${topic.level}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });
}

function renderTopicGrid(selector, list) {
  const container = $(selector);
  if (!container) return;

  container.innerHTML = list.length
    ? list.map(topicCard).join("")
    : '<div class="empty-state">No topics found. Try another search.</div>';
}

function syncCategoryChips() {
  $$(".category-chip").forEach(button => {
    button.classList.toggle("active", button.dataset.category === activeCategory);
  });
}

function renderHome() {
  renderTopicGrid("#homeTopicGrid", filterTopics().slice(0, 6));

  const progress = getProgress();
  const completedCount = topics.filter(topic => progress.completed.includes(topic.id)).length;

  $("#statTopics").textContent = topics.length;
  $("#statCompleted").textContent = completedCount;
  $("#statProgress").textContent = Math.round(completedCount / topics.length * 100) + "%";

  syncCategoryChips();
}

function renderExplore() {
  const search = $("#exploreSearch")?.value || "";
  const results = filterTopics(activeCategory, search);

  renderTopicGrid("#exploreTopicGrid", results);
  $("#exploreCount").textContent = `${results.length} topic${results.length === 1 ? "" : "s"}`;
  syncCategoryChips();
}

function renderLearning() {
  const progress = getProgress();
  const completedCount = topics.filter(topic => progress.completed.includes(topic.id)).length;
  const visitedCount = topics.filter(topic => progress.visited.includes(topic.id)).length;
  const percentage = Math.round(completedCount / topics.length * 100);

  $("#learningSummary").innerHTML = `
    <article class="learning-metric">
      <span>Completed topics</span><strong>${completedCount}/${topics.length}</strong>
      <div class="progress-track"><div class="progress-fill" style="width:${percentage}%"></div></div>
    </article>
    <article class="learning-metric">
      <span>Topics explored</span><strong>${visitedCount}</strong>
      <p>Keep discovering new concepts.</p>
    </article>
    <article class="learning-metric">
      <span>Overall progress</span><strong>${percentage}%</strong>
      <p>${percentage === 100 ? "Every topic completed!" : "One topic at a time adds up."}</p>
    </article>`;

  const remaining = topics.filter(topic => !progress.completed.includes(topic.id));
  renderTopicGrid("#recentTopics", remaining.length ? remaining : topics);
}

function showView(viewName) {
  const target = $(`#${viewName}View`);
  if (!target) return;

  $$(".view").forEach(view => view.classList.add("hidden"));
  target.classList.remove("hidden");

  $$(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  const names = {
    home: "Overview",
    explore: "Explore topics",
    learn: "My learning",
    quiz: "Quick quiz",
    lesson: "Lesson"
  };

  $("#pageBreadcrumb").textContent = names[viewName] || "CodeVerse";

  if (viewName === "home") renderHome();
  if (viewName === "explore") renderExplore();
  if (viewName === "learn") renderLearning();
  if (viewName === "quiz") populateQuizSelect();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openTopic(topicId) {
  const topic = topics.find(item => item.id === topicId);
  if (!topic) return;

  currentTopic = topic;

  const progress = getProgress();
  if (!progress.visited.includes(topic.id)) progress.visited.push(topic.id);
  saveProgress(progress);

  renderLesson();
  showView("lesson");
  $("#lessonCounter").textContent = `${topic.category.toUpperCase()} / LEARNING PATH`;
}

function renderLesson() {
  const topic = currentTopic;
  const progress = getProgress();
  const done = progress.completed.includes(topic.id);

  const conceptsHTML = topic.concepts.map(([title, description]) => `
    <div class="concept-item">
      <span class="concept-mark">✦</span>
      <div><strong>${escapeHTML(title)}</strong><p>${escapeHTML(description)}</p></div>
    </div>`).join("");

  const tagsHTML = [topic.category, topic.level, topic.duration]
    .map(tag => `<span>${escapeHTML(tag)}</span>`).join("");

  $("#lessonContent").innerHTML = `
    <div class="lesson-header">
      <div class="eyebrow">YOUR NEXT STEP IN PROGRAMMING</div>
      <h1>${escapeHTML(topic.title)}</h1>
      <p>${escapeHTML(topic.intro)}</p>
      <div class="lesson-tags">${tagsHTML}</div>
    </div>

    <div class="lesson-layout">
      <div class="lesson-main">
        <article class="lesson-block">
          <h2>01. Understanding the basics</h2>
          <p>${escapeHTML(topic.intro)}</p>
          <div class="note-box"><strong>Why it matters:</strong> ${escapeHTML(topic.why)}</div>
        </article>

        <article class="lesson-block">
          <h2>02. Key concepts to know</h2>
          <div class="concept-list">${conceptsHTML}</div>
        </article>

        <article class="lesson-block">
          <h2>03. Learn through code</h2>
          <p>Study the example and try it in a suitable local environment.</p>
          <div class="code-panel">
            <div class="code-panel-head">
              <span>${escapeHTML(topic.id)} · example</span>
              <button class="copy-code" id="copyCode">Copy code</button>
            </div>
            <pre><code id="lessonCode">${escapeHTML(topic.code)}</code></pre>
          </div>
          <div class="output-box"><strong>Expected output / result</strong>${escapeHTML(topic.output)}</div>
          <p><strong>How it works:</strong> ${escapeHTML(topic.explanation)}</p>
        </article>

        <article class="lesson-block">
          <h2>04. Common mistakes</h2>
          <p>${escapeHTML(topic.mistakes)}</p>
          <div class="exercise-card">
            <strong>✦ Try it yourself</strong>
            <p>${escapeHTML(topic.exercise)}</p>
          </div>
        </article>
      </div>

      <aside class="lesson-aside">
        <div class="summary-card">
          <h3>Your lesson progress</h3>
          <div class="progress-track"><div class="progress-fill" style="width:${done ? 100 : 0}%"></div></div>
          <label class="lesson-complete">
            <input id="markComplete" type="checkbox" ${done ? "checked" : ""}>
            Mark topic completed
          </label>
          <p>Mark this topic after reviewing the concepts and trying the example.</p>
        </div>

        <div class="summary-card">
          <h3>Ready to practise?</h3>
          <p>Take a short quiz about ${escapeHTML(topic.title)}.</p>
          <button class="primary-button" id="lessonQuiz">Take the quiz →</button>
        </div>

        <div class="summary-card">
          <h3>Keep exploring</h3>
          <p>Connect ideas across different learning paths.</p>
          <button class="secondary-button" data-go="explore">Browse all topics</button>
        </div>
      </aside>
    </div>`;

  $("#copyCode").addEventListener("click", async () => {
    const button = $("#copyCode");
    try {
      await navigator.clipboard.writeText(topic.code);
      button.textContent = "Copied!";
    } catch {
      const area = document.createElement("textarea");
      area.value = topic.code;
      document.body.appendChild(area);
      area.select();
      const success = document.execCommand("copy");
      area.remove();
      button.textContent = success ? "Copied!" : "Copy unavailable";
    }

    setTimeout(() => {
      const currentButton = $("#copyCode");
      if (currentButton) currentButton.textContent = "Copy code";
    }, 1500);
  });

  $("#markComplete").addEventListener("change", event => {
    const updated = getProgress();
    updated.completed = updated.completed.filter(id => id !== topic.id);

    if (event.target.checked) updated.completed.push(topic.id);

    saveProgress(updated);
    renderLesson();
    renderHome();
  });

  $("#lessonQuiz").addEventListener("click", () => {
    showView("quiz");
    $("#quizTopic").value = topic.id;
    startQuiz();
  });
}

function populateQuizSelect() {
  const select = $("#quizTopic");
  if (!select) return;

  const previous = select.value;
  select.innerHTML = topics.map(topic =>
    `<option value="${escapeHTML(topic.id)}">${escapeHTML(topic.title)}</option>`
  ).join("");

  select.value = topics.some(topic => topic.id === previous)
    ? previous
    : currentTopic.id;
}

function startQuiz() {
  const selected = topics.find(topic => topic.id === $("#quizTopic").value) || topics[0];

  currentTopic = selected;
  quizQuestions = selected.quiz;
  quizSubmitted = false;

  $("#quizArea").innerHTML = `
    <div class="page-intro">
      <div class="eyebrow">QUICK PRACTICE</div>
      <h2>${escapeHTML(selected.title)} quiz</h2>
      <p>${quizQuestions.length} questions · Choose one answer per question.</p>
    </div>

    <form id="quizForm">
      ${quizQuestions.map((question, index) => `
        <article class="quiz-question">
          <h3>${index + 1}. ${escapeHTML(question.q)}</h3>
          ${question.options.map((option, optionIndex) => `
            <label class="quiz-option">
              <input type="radio" name="question-${index}" value="${optionIndex}" required>
              <span>${escapeHTML(option)}</span>
            </label>`).join("")}
          <div class="quiz-feedback hidden" id="feedback-${index}"></div>
        </article>`).join("")}
      <button class="primary-button" type="submit">Check my answers →</button>
    </form>
    <div id="quizResult"></div>`;

  $("#quizForm").addEventListener("submit", event => {
    event.preventDefault();
    if (quizSubmitted) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    quizSubmitted = true;
    let score = 0;

    quizQuestions.forEach((question, index) => {
      const chosen = form.querySelector(`input[name="question-${index}"]:checked`);
      const correct = Number(chosen.value) === question.answer;

      if (correct) score++;

      const feedback = $(`#feedback-${index}`);
      feedback.classList.remove("hidden");
      feedback.innerHTML = `
        <strong style="color:${correct ? "#86efac" : "#fda4af"}">
          ${correct ? "Correct!" : "Not quite."}
        </strong>
        ${escapeHTML(question.why)}`;

      form.querySelectorAll(`input[name="question-${index}"]`).forEach(input => {
        input.disabled = true;
      });
    });

    form.querySelector('button[type="submit"]').disabled = true;

    $("#quizResult").innerHTML = `
      <div class="quiz-result">
        <div class="eyebrow">YOUR RESULT</div>
        <strong>${score} / ${quizQuestions.length}</strong>
        <p>${score === quizQuestions.length
          ? "Excellent work! Every answer is correct."
          : "Good effort! Review the explanations to strengthen your understanding."}</p>
        <button class="secondary-button" id="retryQuiz" type="button">Try again</button>
      </div>`;

    $("#retryQuiz").addEventListener("click", startQuiz);
  });
}

/* One delegated handler for topic cards, categories and navigation. */
document.addEventListener("click", event => {
  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) {
    openTopic(topicButton.dataset.topic);
    return;
  }

  const goButton = event.target.closest("[data-go]");
  if (goButton) {
    if (goButton.dataset.category) {
      activeCategory = goButton.dataset.category;
    }
    showView(goButton.dataset.go);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    syncCategoryChips();
    renderHome();
    renderExplore();
    return;
  }

  const navButton = event.target.closest("[data-view]");
  if (navButton) {
    showView(navButton.dataset.view);
  }
});

$("#exploreSearch").addEventListener("input", renderExplore);
$("#startQuiz").addEventListener("click", startQuiz);

renderHome();
populateQuizSelect();
showView("home");
