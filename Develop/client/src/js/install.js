const butInstall = document.getElementById('buttonInstall');

// Store the event for later use
let deferredPrompt;

// Add an event listener for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt from appearing immediately
  event.preventDefault();

  // Store the event for triggering the install prompt later
  deferredPrompt = event;

  // Unhide the install button when the event is triggered
  butInstall.style.display = 'block';

  // Optionally, log the event
  console.log('beforeinstallprompt event fired');
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);

  // Reset the deferred prompt variable
  deferredPrompt = null;

  // Hide the install button
  butInstall.style.display = 'none';
});

// Add an event listener for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA has been installed successfully!', event);
  // Optionally, hide the install button if it was still visible
  butInstall.style.display = 'none';
});
