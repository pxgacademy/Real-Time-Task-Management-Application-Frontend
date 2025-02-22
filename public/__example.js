//
//
//

const demo = {
  email: ["john-doe@example.com", "david-johnson@example.com"],
  project: [
    {
      id: 1,
      projectName: "Web Development",
      status: "pending",
      toDo: [
        {
          id: 1,
          title: "Task 1",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "Medium",
          status: "To Do",
        },
        {
          id: 2,
          title: "Task 2",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "High",
          status: "Doing",
        },
        {
          id: 3,
          title: "Task 3",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "Low",
          status: "Done",
        },
      ],
    },
    {
      id: 2,
      projectName: "Web Design",
      status: "pending",
      toDo: [
        {
          id: 1,
          title: "Task 1",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "Medium",
          status: "To Do",
        },
        {
          id: 2,
          title: "Task 2",
          startedDate: "12-1-2015",
          dueDate: "18-1-2015",
          priority: "Low",
          status: "To Do",
        },
      ],
    },
  ],
};

export default demo;

[
  {
    index: 0,
    projectName: "Web Development",
    status: "In Progress",
    toDo: [
      {
        index: 0,
        title: "Setup project repository",
        startedDate: "2025-02-01",
        dueDate: "2025-02-05",
        priority: "High",
        status: "TODO",
      },
      {
        index: 1,
        title: "Design homepage UI",
        startedDate: "2025-02-03",
        dueDate: "2025-02-10",
        priority: "Medium",
        status: "IN_PROGRESS",
      },
    ],
    userId: "67b97f4c2d242b575fbee218",
    id: 0,
  },
  {
    index: 1,
    projectName: "Web Design",
    status: "Pending",
    toDo: [
      {
        index: 0,
        title: "Create wireframes",
        startedDate: "2025-02-05",
        dueDate: "2025-02-10",
        priority: "Medium",
        status: "TODO",
      },
      {
        index: 1,
        title: "Design landing page",
        startedDate: "2025-02-07",
        dueDate: "2025-02-14",
        priority: "High",
        status: "TODO",
      },
    ],
    userId: "67b97f4c2d242b575fbee218",
    id: 1,
  },
  {
    index: 2,
    projectName: "Marketing Campaign",
    status: "Pending",
    toDo: [
      {
        index: 0,
        title: "Create campaign strategy",
        startedDate: "2025-02-10",
        dueDate: "2025-02-18",
        priority: "High",
        status: "TODO",
      },
      {
        index: 1,
        title: "Launch social media ads",
        startedDate: "2025-02-15",
        dueDate: "2025-02-25",
        priority: "Medium",
        status: "TODO",
      },
    ],
    userId: "67b97f4c2d242b575fbee218",
    id: 2,
  },
  {
    index: 3,
    projectName: "SEO Optimization",
    status: "In Progress",
    toDo: [
      {
        index: 0,
        title: "Analyze competitors' strategies",
        startedDate: "2025-02-12",
        dueDate: "2025-02-20",
        priority: "Medium",
        status: "IN_PROGRESS",
      },
      {
        index: 1,
        title: "Optimize on-page SEO",
        startedDate: "2025-02-14",
        dueDate: "2025-02-22",
        priority: "High",
        status: "TODO",
      },
    ],
    userId: "67b97f4c2d242b575fbee218",
    id: 3,
  },
  {
    index: 0,
    projectName: "Mobile App Development",
    status: "In Progress",
    toDo: [
      {
        index: 0,
        title: "Setup React Native environment",
        startedDate: "2025-02-02",
        dueDate: "2025-02-06",
        priority: "High",
        status: "TODO",
      },
      {
        index: 1,
        title: "Implement user authentication",
        startedDate: "2025-02-07",
        dueDate: "2025-02-12",
        priority: "High",
        status: "IN_PROGRESS",
      },
    ],
    userId: "67b97f4c2d242b575fbee219",
    id: 4,
  },
  {
    index: 1,
    projectName: "E-learning Platform",
    status: "Pending",
    toDo: [
      {
        index: 0,
        title: "Plan course modules",
        startedDate: "2025-02-09",
        dueDate: "2025-02-15",
        priority: "Medium",
        status: "TODO",
      },
      {
        index: 1,
        title: "Develop video player",
        startedDate: "2025-02-12",
        dueDate: "2025-02-18",
        priority: "High",
        status: "TODO",
      },
    ],
    userId: "67b97f4c2d242b575fbee219",
    id: 5,
  },
];

const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS = [
  { id: 1, title: "Task 1", status: "TODO" },
  { id: 2, title: "Task 2", status: "IN_PROGRESS" },
  { id: 3, title: "Task 3", status: "TODO" },
  { id: 4, title: "Task 4", status: "DONE" },
  { id: 5, title: "Task 5", status: "IN_PROGRESS" },
  { id: 6, title: "Task 6", status: "TODO" },
  { id: 7, title: "Task 7", status: "DONE" },
];
