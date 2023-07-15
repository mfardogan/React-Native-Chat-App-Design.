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

  directs: Array(10)
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

  chat: {
    date: faker.date.past(),
    receiver: faker.image.avatarLegacy(),
    messages: Array(10)
      .fill(null)
      .map((v) => ({
        isme: faker.datatype.boolean(),
        text: faker.lorem.sentences(),
      })),
  },
  profiles: Array(10)
    .fill(null)
    .map((i) => ({
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      avatar: faker.image.avatarLegacy(),
      location: faker.location.country(),
      followers: faker.number.int() % 1000,
      follows: faker.number.int() % 500,

      posts: Array(50)
        .fill(null)
        .map((e) => ({
          id: faker.string.uuid(),
          date: faker.date.past(),
          image: faker.image.urlPicsumPhotos(),
          likes: faker.number.int() % 400,
          comments: faker.number.int() % 20,
        })),

      higlights: Array(15)
        .fill(null)
        .map((e) => ({
          id: faker.string.uuid(),
          image: faker.image.urlPicsumPhotos(),
          text: faker.location.country().substring(0, 5),
        })),
    })),
};
