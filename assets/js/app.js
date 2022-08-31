AOS.init();

const form = document.querySelector(".locationInput");
const input = document.getElementById("flex-item1")
const state = document.querySelector(".state")
const details = document.querySelector(".details") 

const lat = 0 
const lng = 0

const getDateAndTime = async (lat, lng) => {
    const url = `https://api.ipgeolocation.io/timezone?apiKey=7aaf48fab4184fe6b82537b38157da2f&lat=${lat}&long=${lng}`
    console.log(url)  
    try {
        const response = await axios.get(url);
        state.innerText = response.data.timezone
        details.innerText = response.data.date_time_txt
        console.log(response.data)
    } catch (error) {
        console.error(error);
    }
}

const submitHandler = (event) => {
    event.preventDefault();    
    getDateAndTime(lat, lng);
};
form.addEventListener("submit", submitHandler);

