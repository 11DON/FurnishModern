const API_URL = "http://localhost:5000/api";

export async function signUp(userData) {
    const res = await fetch (`${API_URL}/signup`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
         body: JSON.stringify(userData),
    });
    return res.json();
}


export async function login(userData) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
}


export async function getUsers() {
    const res = await fetch(`${API_URL}/users`);
    return res.json();
}