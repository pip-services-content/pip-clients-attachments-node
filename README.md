# Attachments Microservice Client SDK for Node.js

This is a Node.js client SDK for [pip-services-attachments](https://github.com/pip-services-infrastructure/pip-services-attachments-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP/REST client
* Seneca client (see http://www.senecajs.org)
* Direct client for monolythic deployments
* Null client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-attachments-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('pip-clients-attachments-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8003
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.AttachmentsHttpClientV1(config);

// Connect to the microservice
client.open(null, function(err) {
    if (err) {
        console.error('Connection to the microservice failed');
        console.error(err);
        return;
    }
    
    // Work with the microservice
    ...
});
```

Now the client is ready to perform operations
```javascript
// Add attachments to a document
client.addAttachments(
    null,
    { 
        id: '123',
        type: 'document',
        name: 'My document'
    },
    ['1', '2', '3'],
    function (err, attachments) {
        ...
    }
);
```

```javascript
var now = new Date();

// Get specific attachment
client.getAttachmentById(
    null,
    '1',
    function(err, attachment) {
    ...    
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

