import { faker } from "@faker-js/faker";

export const Dummy = {
  stories: Array(10)
    .fill(null)
    .map((v) => ({
      id: faker.string.uuid(),
      avatar: faker.image.avatarLegacy(),
      username: faker.person.lastName(),
      seen: faker.datatype.boolean(),
    })),

  user: {
    id: faker.string.uuid(),
    avatar: faker.image.avatarLegacy(),
  },

  users: Array(10)
    .fill(null)
    .map((v) => ({
      id: faker.string.uuid(),
      avatar: faker.image.avatarLegacy(),
      email: faker.internet.email(),
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      username: faker.internet.userName(),
    })),

  directs: Array(40)
    .fill(null)
    .map((v) => ({
      id: faker.string.uuid(),
      online: faker.datatype.boolean(),
      avatar: faker.image.avatarLegacy(),
      name: faker.person.fullName(),
      date: faker.date.past(),
      news: faker.number.int() % 3,
      text: faker.lorem.sentence(),
    })),
};
