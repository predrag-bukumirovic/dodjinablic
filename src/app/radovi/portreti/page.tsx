import type { Metadata } from "next";
import { collections } from "@/data/content";
import CollectionView from "@/components/sections/CollectionView";

const collection = collections[0];

export const metadata: Metadata = {
  title: "Portreti",
  description: collection.description,
};

export default function PortretiPage() {
  return <CollectionView collection={collection} />;
}
