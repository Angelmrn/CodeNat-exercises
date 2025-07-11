// Check if the Notification API is supported in the browser
if ('Notification' in window) {
  // Request permission to send notifications
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') { 
      // Create and show a notification
      const notification = new Notification('Hello!', {
        body: 'This is your desktop notification.'
      });

      // Add a click event listener to the notification
      notification.onclick = () => {
        alert('Notification clicked!');
      };
    } else {
      alert('Notification permission denied.');
    }
  });
} else {
  console.error('Notifications are not supported in this browser.');
}
