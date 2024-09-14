export async function api(url) {
  console.log(url);
  try {
    // Fetch data from your API (adjust URL as necessary)
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log("Fetched data:", data.products);
    if (data.length === 0) {
      return "No data found";
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
