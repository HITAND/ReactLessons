const baseUrl = "https://641c4f4db556e431a86b2ad9.mockapi.io/users";

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasksList) =>
      tasksList.map(({ _id, ...task }) => ({
        id: _id,
        ...task,
      }))
    );
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;utc-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create a task");
    }
  });
};

export const updateTask = (taskId, updatedTask) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;utc-8",
    },
    body: JSON.stringify(updatedTask),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update a task");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete a task");
    }
  });
};
