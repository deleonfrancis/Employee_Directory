import React from "react";
import SortBtn from "./SortBtn";

export default function Jumboton() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Employee Directory</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <SortBtn />
      </div>
    </div>
  );
}
