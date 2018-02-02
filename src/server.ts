import app from './app';

const port = process.env.port || 3000;

/**
 * Start Express server.
 */
const server = app.listen(port, () => {
  console.log(('  App is running at http://localhost:%d'), port);
  console.log('  Press CTRL-C to stop\n');
});

export = server;
