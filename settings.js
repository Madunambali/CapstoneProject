// Handle form submission
document.getElementById('settings-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve values from form fields
    const theme = document.getElementById('theme-select').value;
    const layout = document.getElementById('layout-select').value;
    const notifications = document.getElementById('notifications').checked;
    const defaultMolecule = document.getElementById('default-molecule').value;
    const recentActivity = document.getElementById('recent-activity').checked;

    // Save settings to local storage
    const settings = {
        theme: theme,
        layout: layout,
        notifications: notifications,
        defaultMolecule: defaultMolecule,
        recentActivity: recentActivity,
    };
    localStorage.setItem('appSettings', JSON.stringify(settings));

    // Apply the selected theme immediately
    applyTheme(theme);

    // Optionally, show a confirmation message
    alert('Settings saved successfully!');
});

// Function to apply the theme based on the selected value
function applyTheme(theme) {
    // Remove any existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'green-theme');

    // Add the selected theme class to the body
    switch (theme) {
        case 'light':
            document.body.classList.add('light-theme');
            break;
        case 'dark':
            document.body.classList.add('dark-theme');
            break;
        case 'blue':
            document.body.classList.add('blue-theme');
            break;
        case 'green':
            document.body.classList.add('green-theme');
            break;
    }
}

// Load settings from local storage when the page loads
window.addEventListener('load', function () {
    const savedSettings = JSON.parse(localStorage.getItem('appSettings'));

    if (savedSettings) {
        // Set form values based on saved settings
        document.getElementById('theme-select').value = savedSettings.theme;
        document.getElementById('layout-select').value = savedSettings.layout;
        document.getElementById('notifications').checked = savedSettings.notifications;
        document.getElementById('default-molecule').value = savedSettings.defaultMolecule;
        document.getElementById('recent-activity').checked = savedSettings.recentActivity;

        // Apply the saved theme
        applyTheme(savedSettings.theme);
    }
});