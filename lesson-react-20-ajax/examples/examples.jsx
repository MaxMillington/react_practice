

fetch('/v1/api/todos', {credentials: 'same-origin'})
    .then( (response ) => response.json() )
    .then( json => {} )
    .catch( err => {} );

fetch('/v1/api/todos', {
    credentials: 'same-origin',
    method: 'post',
    body: 'hello'
});


// Optionally the request above could also be done as
axios.get('/v1/api/todos', {
        params: {
            ID: 12345
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

axios.get('/v1/api/todos/12345')
    .then( response => response.data )
    .catch(function (error) {
        console.log(error);
    });
axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then( response => {} )
    .catch( err => console.log(err));
