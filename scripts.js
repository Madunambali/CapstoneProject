document.getElementById('search-bar').addEventListener('input', function () {
    // Filter function for molecular library search
    const query = this.value.toLowerCase();
    const molecules = document.querySelectorAll('.molecular-card');
    molecules.forEach((molecule) => {
        molecule.style.display = molecule.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
});