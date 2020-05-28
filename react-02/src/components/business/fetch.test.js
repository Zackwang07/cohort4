import dataFunctions from './fetch.js';

global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.

    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

const url = 'http://localhost:5000/';

test('test that the fetch works?', async () => {

    const clients = [
        {key:1, name:"Zack"},
        {key:2, name:"Xiaohui"},
    ]

    // Check that the server is running and clear any data
    let data = await dataFunctions.postData(url + 'clear');

    data = await dataFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await dataFunctions.postData(url + 'add', clients[0]);
    expect(data.status).toEqual(200);

    data = await dataFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Zack");

    // add a second with the same key which should be an error
    data = await dataFunctions.postData(url + 'add', clients[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await dataFunctions.postData(url + 'add', clients[1]);
    expect(data.status).toEqual(200);

    data = await dataFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Xiaohui");

    data = await dataFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Zack");

    data = await dataFunctions.postData(url + 'update', {key:1, name:"George"});
    expect(data.status).toEqual(200);

    data = await dataFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("George");

    data = await dataFunctions.postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);

    data = await dataFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);

    data = await dataFunctions.postData(url + 'clear')
});

