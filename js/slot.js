import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    get,
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlE-47ICJy-WBoia8cZZKMXu77j_uLwz0",
    authDomain: "vehicleparking-2605a.firebaseapp.com",
    projectId: "vehicleparking-2605a",
    storageBucket: "vehicleparking-2605a.appspot.com",
    messagingSenderId: "851913236223",
    appId: "1:851913236223:web:3ca5e5aa91b6e4a75db6ca",
    measurementId: "G-VYK9JHCKCQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to your database
  var database = firebase.database();

  document.addEventListener("DOMContentLoaded", function () {
    // Reference to the database node for two-wheeler slots
    var twoWheelerSlotsRef = database.ref('twoWheelerSlots');

    // Reference to the database node for four-wheeler slots
    var fourWheelerSlotsRef = database.ref('fourWheelerSlots');

    // Function to handle slot click
    function handleSlotClick(slotElement, vehicleType) {
        // Your slot click logic here
        console.log("Slot clicked: ", slotElement.innerText);
    }

    // Function to update slot colors based on data
    function updateSlotColors(slotContainerId, slotsRef) {
        var slotContainer = document.getElementById(slotContainerId);

        slotsRef.once('value').then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var slotNumber = childSnapshot.key;
                var isBooked = childSnapshot.val().booked;

                var slotElement = document.getElementById(slotContainerId + "-slot-" + slotNumber);

                if (isBooked) {
                    // Slot is booked, set color to red
                    slotElement.style.backgroundColor = 'red';
                } else {
                    // Slot is empty, set color to green
                    slotElement.style.backgroundColor = 'green';
                }

                // Attach click event to handleSlotClick function
                slotElement.onclick = function () {
                    handleSlotClick(slotElement, vehicleType);
                };
            });
        }).catch(function(error) {
            console.error("Error fetching data: ", error);
        });
    }

    // Update colors for two-wheeler slots
    updateSlotColors("2-wheeler-rectangular-container", twoWheelerSlotsRef);

    // Update colors for four-wheeler slots
    updateSlotColors("4-wheeler-rectangular-container", fourWheelerSlotsRef);
});

  