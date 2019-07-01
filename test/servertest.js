const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('test for homePage for satusCode 200 ', (t)=>{
    supertest(router)
    .get('/')
    .expect(200)
    .expect("content-type",/html/)
    .end((error ,response)=>{
        if(error) t.error(error);
        t.equal(response.statusCode, 200, 'should return 200');
        t.end();
    })
});

test('test for homePage for satusCode 200 ', (t) => {
    supertest(router)
        .get('/')
        .expect(200)
        .expect("content-type", /html/)
        .end((error, response) => {
            if(error) t.error(error);
            t.equal(response.text.includes('<title>YUMMY</title>'), true, 'title included');
            t.end();
        })
});

test('test css file ', (t) => {
    supertest(router)
        .get('/public/css/style.css')
        .expect(200)
        .expect("content-type", /css/)
        .end((error, response) => {
            if (error) t.error(error);
            t.equal(response.text.includes('padding: 0;'), true, 'margin included');
            t.end();
        })
});

test('test for pagenotfoud: 404', (t) => {
    supertest(router)
        .get('/israa')
        .expect(404)
        .expect("content-type", /html/)
        .end((error, response) => {
            if(error) t.error(error);
            t.end();
        })
});

test('test for drink route',(t)=>{
    supertest(router)
    .get('/drink')
    .expect(200)
    .expect("content-type", /json/)
    .end((err ,response)=>{
        if(err) t.error(err);
        t.equal(response.body[0].name, 'orange juice', 'expected orange juice');
        t.end();
    });

});

test('test for food route', (t) => {
    supertest(router)
        .get('/food')
        .expect(200)
        .expect("content-type", /json/)
        .end((err, response) => {
            if (err) t.error(err);
            t.equal(response.body[1].price, 12, 'expected 12');
            t.end();
        })
});

