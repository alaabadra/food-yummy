const test = require('tape');
const getData= require('../src/query/getdata');
const run_DbBuild= require('../src/database/db_build');

test('Testing the tape', t => {
    const hello = 'hello';
    t.equal(hello, 'hello', 'tape is working');
    t.end();
});

test('Testing getData: food', assert=>{
    run_DbBuild((err, res)=>{
        if(err) assert.error(err);
        getData((err, res) => {
            if (err) assert.error(err);
            assert.deepEqual(res[0].name, 'Biryani', 'pass');
            assert.end();
        }, 1)
    });
})

test('Testing getData: drink', assert => {
    run_DbBuild((err, res) => {
        if (err) assert.error(err);
        getData((err, res) => {
            if (err) assert.error(err);
            assert.deepEqual(res[0].name, 'orange juice', 'pass');
            assert.end();
        }, 2)
    });
});
