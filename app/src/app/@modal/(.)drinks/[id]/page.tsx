import cocktailService from "@/lib/services/cocktail.service";
import { Modal } from "./modal";
import React from "react";
import mapRawDrink from "@/lib/utils/format";

const fetchDrink = async (id: string) => {
  const res = await cocktailService.findDrinkById(id);
  if (!res) {
    return null;
  }
  return mapRawDrink(res);
};

export default async function DrinkModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const drink = await fetchDrink(id);
  return <Modal drink={drink} />;
}
