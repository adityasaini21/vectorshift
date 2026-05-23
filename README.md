# FlowForge Pipeline Builder

A modern ReactFlow-based workflow and pipeline builder with reusable node abstraction, dynamic text parsing, DAG validation, and FastAPI backend integration.

---

# 🚀 Features

## ✅ Reusable Node Architecture

* Built using a scalable `BaseNode` abstraction
* Shared styling and handle logic
* Easy creation of new node types
* Consistent UI/UX across all nodes

---

## ✅ Drag-and-Drop Workflow Builder

* Interactive ReactFlow canvas
* Draggable sidebar node panel
* Dynamic node placement
* Smooth edge connections

---

## ✅ Dynamic Text Node Logic

The Text node supports:

### Auto Resizing

* Expands dynamically as users type
* Adjusts width and height automatically
* Improves readability and editing experience

### Variable Parsing

Users can define variables using:

```text
{{variableName}}
```

Example:

```text
Hello {{name}}, your age is {{age}}
```

This dynamically creates input handles for:

* `name`
* `age`

---

## ✅ Backend Integration

The frontend communicates with a FastAPI backend.

### Backend Features

* Counts total nodes
* Counts total edges
* Validates whether the graph is a DAG (Directed Acyclic Graph)

---

## ✅ DAG Cycle Detection

Implemented using DFS-based graph traversal.

Supports:

* Valid DAG detection
* Cycle detection
* User-friendly alerts

---

# 🧩 Node Types

## Core Nodes

* Input Node
* Output Node
* LLM Node
* Text Node

## Additional Custom Nodes

* Image Node
* API Call Node
* Transform Node
* Note Node
* Timer Node

---

# 🛠️ Tech Stack

## Frontend

* React
* ReactFlow
* Zustand
* JavaScript
* CSS

## Backend

* FastAPI
* Python

---

# 📂 Project Structure

```text
project-root/
├── frontend/
│   ├── src/
│   │   ├── nodes/
│   │   ├── styles/
│   │   ├── App.js
│   │   ├── submit.js
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── main.py
│   └── ...
│
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd <project-folder>
```

---

# ▶️ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# ▶️ Backend Setup

Open a new terminal:

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

# 🧪 Testing DAG Validation

## Valid DAG Example

```text
Input → LLM → Output
```

Result:

```text
Is Valid DAG: Yes
```

---

## Invalid DAG Example

```text
LLM → Transform → LLM
```

Result:

```text
Is Valid DAG: No
```

---

# 🎨 UI Highlights

* Modern dark theme
* Responsive node design
* Interactive grid canvas
* Styled handles and controls
* Gradient headers
* Professional workflow editor layout

---

# 📌 Features Implemented

| Feature                   | Status |
| ------------------------- | ------ |
| Reusable node abstraction | ✅      |
| Additional custom nodes   | ✅      |
| Unified styling           | ✅      |
| Text node auto resize     | ✅      |
| Dynamic variable handles  | ✅      |
| Backend integration       | ✅      |
| DAG validation            | ✅      |

---

# 👨‍💻 Author

Aditya Saini