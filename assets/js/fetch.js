export async function fetchReviews() {
  try {
    const response = await fetch("https://glamping-rqu9j.ondigitalocean.app/reviews/");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

export async function fetchStays() {
  try {
    const response = await fetch("https://glamping-rqu9j.ondigitalocean.app/stays/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

export async function fetchActivities() {
  try {
    const response = await fetch("https://glamping-rqu9j.ondigitalocean.app/activities/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

export async function fetchContacts() {
  try {
    const response = await fetch("https://glamping-rqu9j.ondigitalocean.app/contacts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

export async function fetchUsers() {
  try {
    const response = await fetch("https://glamping-rqu9j.ondigitalocean.app/users/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}