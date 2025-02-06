function showCarDetails(carId) {
    document.getElementById('car-details-section').style.display = "block";
    document.querySelectorAll('.car-details').forEach(detail => detail.style.display = "none");
    document.getElementById(`details-${carId}`).style.display = "block";

    // Scroll to the car details section
    document.getElementById(`details-${carId}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function goHome() {
    document.getElementById('car-details-section').style.display = "none";
}