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
};
