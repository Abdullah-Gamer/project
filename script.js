// Booking form functionality
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const guests = document.getElementById('guests').value;
    const transport = document.getElementById('transport').value;

    // Mock search results
    const resultSection = document.getElementById('search-results');
    resultSection.innerHTML = `
        <h3>Available Trips</h3>
        <p>Destination: ${destination}</p>
        <p>Dates: ${startDate} to ${endDate}</p>
        <p>Guests: ${guests}</p>
        <p>Transport: ${transport}</p>
        <p><strong>Price: $999</strong></p>
        <button onclick="alert('Trip Booked!')">Book Now</button>
    `;
});

// Modal for Newsletter subscription
function openNewsletter() {
    document.getElementById('newsletterModal').style.display = 'block';
}

function closeNewsletter() {
    document.getElementById('newsletterModal').style.display = 'none';
}

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    alert(`Subscribed with email: ${email}`);
    closeNewsletter();
});
