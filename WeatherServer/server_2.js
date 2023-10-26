const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('Received data:', data.toString());
    });

    socket.on('end', () => {
        console.log('Connection ended');
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

const PORT = 12345; // Choose your port
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});
