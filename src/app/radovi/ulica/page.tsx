import type { Metadata } from "next";
import { collections } from "@/data/content";
import CollectionView from "@/components/sections/CollectionView";

const collection = collections[1];

export const metadata: Metadata = {
  title: "Ulica",
  description: collection.description,
};

export default function UlicaPage() {
  return <CollectionView collection={collection} />;
}
