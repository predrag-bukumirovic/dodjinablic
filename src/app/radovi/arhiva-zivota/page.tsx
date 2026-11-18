import type { Metadata } from "next";
import { collections } from "@/data/content";
import CollectionView from "@/components/sections/CollectionView";

const collection = collections[2];

export const metadata: Metadata = {
  title: "Arhiva života",
  description: collection.description,
};

export default function ArhivaPage() {
  return <CollectionView collection={collection} />;
}
