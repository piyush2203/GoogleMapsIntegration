let map, directionsService, directionsRenderer;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 28.6139, lng: 77.2090 }, // Default center: New Delhi
      });

      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      // Add autocomplete to inputs
      const originInput = new google.maps.places.Autocomplete(
        document.getElementById("origin")
      );
      const destinationInput = new google.maps.places.Autocomplete(
        document.getElementById("destination")
      );
    }

    function calculateRoute() {
      const origin = document.getElementById("origin").value;
      const destination = document.getElementById("destination").value;

      if (!origin || !destination) {
        alert("Please enter both origin and destination.");
        return;
      }

      const request = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        } else {
          alert("Directions request failed due to " + status);
        }
      });
    }

    window.onload = initMap;