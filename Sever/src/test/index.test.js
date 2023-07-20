const { server } = require("../app");
const session = require("supertest");
// const agent = session(app);

describe("test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await session(server).get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const res = await session(server).get("/rickandmorty/character/1");
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("name");
      expect(res.body).toHaveProperty("species");
      expect(res.body).toHaveProperty("gender");
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("origin");
      expect(res.body).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
      await session(server).get("/rickandmorty/character/1000").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it('Responde un objeto con la propiedad "access" en true', async () => {
      const res = await session(server).get("/rickandmorty/login?email=usuario@mail.com&password=1234");
      expect(res.body).toHaveProperty("access", true);
    });

    it('Responde un objeto con la propiedad "access" en false', async () => {
      const res = await session(server).get("/rickandmorty/login?email=usuario2@mail.com&password=12345");
      expect(res.body).toHaveProperty("access", false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it('Envía objetos dentro de un arreglo', async () => {
      const res = await session(server).post('/rickandmorty/fav').send({id: 1, name: 'Rick Sanchez'});
      expect(res.body).toEqual(expect.arrayContaining([{id: 1, name: 'Rick Sanchez'}]));
    });

    it('Envía el objeto agregado anteriormente junto al nuevo objeto, los dos dentro del arreglo', async () => {
        const res = await session(server).post('/rickandmorty/fav').send({id: 2, name: 'Morty Smith'});
        expect(res.body).toEqual(expect.arrayContaining([{id: 1, name: 'Rick Sanchez'}, 
        {id: 2, name: 'Morty Smith'}]));
      });
  });

  describe( "DELETE /rickandmorty/fav/:id", () => {
    it('Si el ID enviado no pertenece a ninguno de los personajes favoritos, responder con el arreglo sin cambios', async () => {
        const res = await session(server).delete('/rickandmorty/fav/3');
        expect(res.body.length).toBe(2);
    });

    it('Si el ID enviado pertenece a alguno de los personajes favoritos, responder con el arreglo nuevo', async () => {
        const res = await session(server).delete('/rickandmorty/fav/2');
        expect(res.body.length).toBe(1);
    });
  });
});
