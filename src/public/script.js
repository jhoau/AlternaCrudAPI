const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable").getElementsByTagName("tbody")[0];

// Función para cargar usuarios
async function loadUsers() {
  const response = await fetch("/api/users");
  const users = await response.json();
  userTable.innerHTML = ""; // Limpiar la tabla

  users.forEach(user => {
    const row = userTable.insertRow();
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td class="actions">
        <button class="edit" onclick="editUser(${user.id})">Editar</button>
        <button class="delete" onclick="deleteUser(${user.id})">Eliminar</button>
      </td>
    `;
  });
}

// Función para agregar o actualizar un usuario
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const user = { name, email };

  if (userId) {
    // Actualizar usuario
    await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  } else {
    // Crear usuario
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  }

  userForm.reset();
  loadUsers();
});

// Función para editar un usuario
async function editUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const user = await response.json();

  document.getElementById("userId").value = user.id;
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
}

// Función para eliminar un usuario
async function deleteUser(id) {
  await fetch(`/api/users/${id}`, { method: "DELETE" });
  loadUsers();
}

// Cargar usuarios al iniciar
loadUsers();