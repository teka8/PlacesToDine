import React from "react";

import { CompactRestaurantInto } from "../../../components/restaurant/compact-restaurant-info-component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInto isMap restaurant={restaurant} />
);
