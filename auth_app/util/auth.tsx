import axios from "axios";

const API_KEY = "AIzaSyDopcnO8VIUHNuUg5vUOnyfEFvaDm3GYng";

async function authenticate(mode: string, email: any, password: any) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function createUser(email: string, password: string) {
  await authenticate("signUp", email, password);
}

export async function login(email: any, password: any) {
  await authenticate("signInWithPassword", email, password);
}
