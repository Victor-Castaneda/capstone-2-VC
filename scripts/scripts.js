document.addEventListener('DOMContentLoaded', () => {
    const locationSelect = document.getElementById('locationSelect');
    const parkTypeSelect = document.getElementById('parkTypeSelect');
    const cardsContainer = document.getElementById('cards-container');

    function createCard(park) {
        // Check if the park data contains meaningful information
        if (!park.Image && !park.LocationName && !park.Address && !park.City && !park.State && !park.ZipCode && !park.Phone && !park.Fax && !park.Visit) {
            return null; // Return null if the park data is empty
        }
    
        const card = document.createElement('div');
        card.className = 'card';
    
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        if (park.Image) {
            const img = document.createElement('img');
            img.src = park.Image;
            img.alt = park.LocationName || 'Park Image';
            img.className = 'card-img-top';
            card.appendChild(img);
        }
    
        if (park.LocationName) {
            const cardTitle = document.createElement('h3');
            cardTitle.className = 'card-title';
            cardTitle.textContent = park.LocationName;
            cardBody.appendChild(cardTitle);
        }
    
        if (park.Address || park.City || park.State || park.ZipCode) {
            const address = document.createElement('p');
            address.className = 'card-text';
            address.innerHTML = `<strong>Address:</strong> ${park.Address || ''}, ${park.City || ''}, ${park.State || ''}, ${park.ZipCode || ''}`;
            cardBody.appendChild(address);
        }
    
        if (park.Phone) {
            const phone = document.createElement('p');
            phone.className = 'card-text';
            phone.innerHTML = `<strong>Phone:</strong> ${park.Phone}`;
            cardBody.appendChild(phone);
        }
    
        if (park.Fax) {
            const fax = document.createElement('p');
            fax.className = 'card-text';
            fax.innerHTML = `<strong>Fax:</strong> ${park.Fax}`;
            cardBody.appendChild(fax);
        }
    
        card.appendChild(cardBody);
    
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
    
    function displayCards(dataArray) {
        cardsContainer.innerHTML = '';
        dataArray.forEach(park => {
            const card = createCard(park);
            cardsContainer.appendChild(card);
        });
    }

    function filterData() {
        const selectedLocation = locationSelect.value;
        const selectedParkType = parkTypeSelect.value;
    
        let filteredData = [];
    
        if (selectedParkType === 'Mountain') {
            // Filter only mountains if selected
            filteredData = mountainsArray.filter(mountain => selectedLocation === '' || selectedLocation === 'New England');
        } else if (selectedParkType !== '') {
            // Filter by selected park type
            filteredData = nationalParksArray.filter(park => 
                (selectedLocation === '' || park.State === selectedLocation) &&
                park.ParkType === selectedParkType
            );
        } else {
            // No park type selected, show all
            filteredData = nationalParksArray.filter(park => selectedLocation === '' || park.State === selectedLocation);
        }
    
        displayCards(filteredData);
    }
    locationSelect.addEventListener('change', filterData);
    parkTypeSelect.addEventListener('change', filterData);

    // Populate location and park type dropdowns
    populateLocationSelect();
    populateParkTypeSelect();

    // Initial display of cards with all data
    displayCards([...nationalParksArray, ...mountainsArray]);
});

// Function to populate location dropdown
function populateLocationSelect() {
    const states = new Set([...nationalParksArray.map(park => park.State), 'New England']);
    const locationSelect = document.getElementById('locationSelect');
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        locationSelect.appendChild(option);
    });
}

// Function to populate park type dropdown
function populateParkTypeSelect() {
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
    ];
    const parkTypeSelect = document.getElementById('parkTypeSelect');
    parkTypesArray.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        parkTypeSelect.appendChild(option);
    });
    const mountainOption = document.createElement('option');
    mountainOption.value = "Mountain";
    mountainOption.textContent = "Mountain";
    parkTypeSelect.appendChild(mountainOption);
}