import request from "supertest";
import { app } from "../../app";

it("has a route handler listening to /api/tickets for post requests", async () => {
  const response = await request(app).post("/api/tickets").send({});
  expect(response.status).not.toEqual(404);
});

it("can only be accessed if the user is signed in", async () => {
  await request(app).post("/api/tickets").send({}).expect(401);
});

// it("returns a status other than 401 if the user is signed in", async () => {
//   const cookie = await (global as any).signin();

//   const response = await request(app)
//     .post("/api/tickets")
//     .set("Cookie", cookie[0])
//     .send({});

//   expect(response.status).not.toEqual(401);
// });

it("reuturns an error if an title is provided", async () => {});

it("it returns an error if an invalid price is provided", async () => {});

it("creates a ticket with valid inputs", async () => {});
