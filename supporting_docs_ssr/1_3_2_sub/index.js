// Get the 'branch' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
let branch = urlParams.get('branch') || 'civil';

// Get all the branch divs
const branches = document.querySelectorAll('.branch');
const branchDivs = document.querySelectorAll('.branch-content');
const branchH3 = document.querySelectorAll('.h3');

// Function to update the selected branch
function updateBranch() {
    // Loop through the branch divs
    branches.forEach(function(div) {
        // If this div's textContent matches the 'branch' parameter,
        // add the 'selected-branch' class to it
        if (div.textContent.toLowerCase() === branch.toLowerCase()) {
            div.classList.add('selected-branch');
        } else {
            // Otherwise, make sure it doesn't have the 'selected-branch' class
            div.classList.remove('selected-branch');
        }
    });

    branchDivs.forEach(function(div){
        if(div.classList.contains("B"+branch)){
            div.classList.add("activeBranchDiv");
        } else {
            div.classList.remove("activeBranchDiv");
        }
    });

    branchH3.forEach(function(h){
        if(h.classList.contains("H"+branch)){
            h.classList.add("activeH3");
        } else {
            h.classList.remove("activeH3");
        }
    });
}

// Update the selected branch initially
updateBranch();

// Add click event listeners to the branch divs
branches.forEach(function(div) {
    div.addEventListener('click', function() {
        // Change the 'branch' parameter to the textContent of the clicked div
        branch = div.textContent.toLowerCase();

        // Update the URL parameter
        urlParams.set('branch', branch);
        window.history.replaceState({}, '', '?' + urlParams.toString());

        // Update the selected branch
        updateBranch();
    });
});
