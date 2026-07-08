const BASE_URL = "https://hospital-backend-cvoz.onrender.com/api";

export async function getDepartments() {
  const response = await fetch(`${BASE_URL}/departments/`);

  if (!response.ok) {
    throw new Error("Failed to fetch departments");
  }

  return response.json();
}

export async function getDoctors() {
  const response = await fetch(`${BASE_URL}/doctors/`);

  if (!response.ok) {
    throw new Error("Failed to fetch doctors");
  }

  return response.json();
}

export async function createAppointment(data) {
  const response = await fetch(`${BASE_URL}/appointments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create appointment");
  }

  return response.json();
}

export async function createContact(data) {
  const response = await fetch(`${BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}