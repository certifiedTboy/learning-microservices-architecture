import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

it("fectches the order", async () => {
  const ticket = Ticket.build({
    title: "concert",
    price: 20,
  });
  await ticket.save();

  const cookie = await (global as any).signin();
  const { body: order } = await request(app)
    .post("/api/orders")
    .set("Cookie", cookie)
    .send({ ticketId: ticket.id })
    .expect(201);

  const { body: fetchedOrder } = await request(app)
    .get(`/api/orders/${order.id}`)
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(fetchedOrder.id).toEqual(order.id);
});
