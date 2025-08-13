export default {
  // ... other configurations
  server: {
    watch: {
      // Add custom paths to watch for full page refreshes
      additionalPaths: watcher => {
        watcher.add('/src/**');
      },
    },
  },
};
