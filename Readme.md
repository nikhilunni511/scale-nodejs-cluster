## Load Testing on local host
Due to the insufficient traffic, when you run this on your local machine, you will notice that we are accessing the same worker process.

In order to perform a local test, you need to install the "loadtest" module and follow these steps.

1. To install the loadtest module, run the following command.
```shell
npm install loadtest -g
```

2. Run the following command to start the server.
```shell
node index.js
```

3. Open another terminal and run the following command to perform a load test.

```shell
loadtest -n 300 http://localhost:3000
```

Now you can see the load test results in the terminal where you started the server as below.

<img src="https://github.com/nikhilunni511/scale-nodejs-cluster/blob/main/cluster.png?raw=true" width="200" height="100">

