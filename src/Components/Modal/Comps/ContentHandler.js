import React from "react";
import { AddAssetProvider } from "./AddAsset/AddAsset.Context";
import AddAssetModal from "./AddAsset/AddAssetModal";
export default function ContentHandler({ content, params }) {
  switch (content) {
    case "addasset":
      console.log("Addasset");
      return (
        <AddAssetProvider>
          <AddAssetModal />
        </AddAssetProvider>
      );
    default:
      <div>deflt</div>;
  }
}
