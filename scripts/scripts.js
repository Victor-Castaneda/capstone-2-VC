window.onload = function() {
    const locationSelect = document.getElementById('locationSelect');
    const parkTypeSelect = document.getElementById('parkTypeSelect');
    const cardsContainer = document.getElementById('cards-container');
    
    // Function to create a card for a national park
    function createCard(park) {
        const card = document.createElement('div');
        card.className = 'card';
    
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        // Create and append image element if available
        if (park.Image) {
            const img = document.createElement('img');
            img.src = park.Image;
            img.alt = park.LocationName || 'Park Image';
            img.className = 'card-img-top';
            card.appendChild(img);
        }
    
        // Create and append title element if available
        if (park.LocationName) {
            const cardTitle = document.createElement('h3');
            cardTitle.className = 'card-title';
            cardTitle.textContent = park.LocationName;
            cardBody.appendChild(cardTitle);
        }
    
        // Create and append address element if available
        if (park.Address || park.City || park.State || park.ZipCode) {
            const address = document.createElement('p');
            address.className = 'card-text';
            address.innerHTML = `<strong>Address:</strong> ${park.Address || ''}, ${park.City || ''}, ${park.State || ''}, ${park.ZipCode || ''}`;
            cardBody.appendChild(address);
        }
    
        // Create and append phone element if available
        if (park.Phone) {
            const phone = document.createElement('p');
            phone.className = 'card-text';
            phone.innerHTML = `<strong>Phone:</strong> ${park.Phone}`;
            cardBody.appendChild(phone);
        }
    
        // Create and append fax element if available
        if (park.Fax) {
            const fax = document.createElement('p');
            fax.className = 'card-text';
            fax.innerHTML = `<strong>Fax:</strong> ${park.Fax}`;
            cardBody.appendChild(fax);
        }
    
        // Append card body to card
        card.appendChild(cardBody);
    
        // Create and append visit link if available
        if (park.Visit) {
            const cardFooter = document.createElement('div');
            cardFooter.className = 'card-footer';
            const visitLink = document.createElement('a');
            visitLink.href = park.Visit;
            visitLink.target = '_blank';
            visitLink.textContent = 'Visit Website';
            cardFooter.appendChild(visitLink);
            card.appendChild(cardFooter);
        }
    
        return card;
    }

    // Function to populate location dropdown
    function populateLocationSelect() {
        // Loop through the national parks array and populate the location dropdown
        nationalParksArray.forEach(park => {
            const option = document.createElement('option');
            option.value = park.State.toLowerCase();
            option.textContent = park.State;
            locationSelect.appendChild(option);
        });
    }

    // Function to populate park type dropdown
    function populateParkTypeSelect() {
        // Define an array of park types
        const parkTypesArray = [
            "National Park",
            "National Monument",
            "Recreation Area",
            "Scenic Trail",
            "Battlefield",
            "Historic",
            "Memorial",
            "Preserve",
            "Island",
            "River",
            "Seashore",
            "Trail",
            "Parkway",
            "Mountain"
        ];

        // Loop through the park types array and populate the park type dropdown
        parkTypesArray.forEach(type => {
            const option = document.createElement('option');
            option.value = type.toLowerCase();
            option.textContent = type;
            parkTypeSelect.appendChild(option);
        });
    }

    // Function to filter data based on selected location and park type
    function filterData() {
        const selectedLocation = locationSelect.value.toLowerCase();
        const selectedParkType = parkTypeSelect.value.toLowerCase();

        // Filter the national parks array based on the selected location and park type
        const filteredData = nationalParksArray.filter(park => {
            const locationMatches = selectedLocation === '' || park.State.toLowerCase() === selectedLocation;
            const parkTypeMatches = selectedParkType === '' || park.ParkType.toLowerCase().includes(selectedParkType);
            return locationMatches && parkTypeMatches;
        });

        // Display the filtered data on cards
        displayCards(filteredData);
    }

    // Function to display cards
    function displayCards(dataArray) {
        cardsContainer.innerHTML = ''; // Clear the cards container

        // Loop through the filtered data array and create cards for each national park
        dataArray.forEach(park => {
            const card = createCard(park);
            if (card) {
                cardsContainer.appendChild(card);
            }
        });
    }

    // Populate location and park type dropdowns
    populateLocationSelect();
    populateParkTypeSelect();
    
    function filterData() {
        const selectedLocation = locationSelect.value.toLowerCase();
        const selectedParkType = parkTypeSelect.value.toLowerCase();

        // Filter the national parks array based on the selected location and park type
        const filteredData = nationalParksArray.filter(park => {
            const locationMatches = selectedLocation === '' || park.State.toLowerCase() === selectedLocation;
            const parkTypeMatches = selectedParkType === '' || park.LocationName.toLowerCase().includes(selectedParkType);
            return locationMatches && parkTypeMatches;
        });

        // Display the filtered data on cards
        displayCards(filteredData);
    }

    // Attach event listeners to location and park type dropdowns
    locationSelect.addEventListener('change', filterData);
    parkTypeSelect.addEventListener('change', filterData);

    // Initial display of cards with all national parks
    displayCards(nationalParksArray);
};
