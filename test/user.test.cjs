const request = require('supertest');
const app = require('../src/app.js');
const requester = request(app); 

async function importChai() {
  return await import('chai');
}

describe("Testeamos la App Tienda de ropas", function(){
 describe("Testeamos los usuarios", function (){
    it("Endpoint POST /api/user que debe crear una nuevo usuario", async () => {

        const userMock = {
          first_name:"Jose",
          last_name:"Barrone",
          email:"josele@gmail.com",
          password:"1234"
        }
        const {statusCode, ok, _body} = await requester.post(app).send(userMock);
        console.log(statusCode);
        console.log(ok);
        console.log(_body);

        expect(_body.payload).to.have.property("_id"); 

    })
 })
})