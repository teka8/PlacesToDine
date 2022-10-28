import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResult = results.map((restuarant) => {
    restuarant.photos = restuarant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restuarant,
      isOpenNow: restuarant.opening_hours && restuarant.opening_hours.open_now,
      isClosedTemporarily: restuarant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};
