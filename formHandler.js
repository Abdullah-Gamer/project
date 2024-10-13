document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh after form submission

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const country = document.getElementById('country').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const termsAccepted = document.getElementById('terms').checked;

    // Create an object to store form data
    const formData = {
        firstName: firstName,
        lastName: lastName,
        country: country,
        dateOfBirth: dob,
        email: email,
        phone: phone,
        termsAccepted: termsAccepted
    };

    // Convert form data to CSV format
    const formDataCsv = `First Name,Last Name,Country,Date of Birth,Email,Phone Number,Terms Accepted\n${firstName},${lastName},${country},${dob},${email},${phone},${termsAccepted}`;

    // Create and download the CSV file
    const blobCsv = new Blob([formDataCsv], { type: 'text/csv' });
    const linkCsv = document.createElement('a');
    linkCsv.href = URL.createObjectURL(blobCsv);
    linkCsv.download = 'formData.csv'; // The file name
    linkCsv.click();

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Clear the form after submission
    document.getElementById('contactForm').reset();
});
