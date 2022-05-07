import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-5">
      <ul className={`footer-list mt-1 mb-2`}>
        <li className=" mr-4">
          <Link href="/am-card-memory-game">
            <span className="name-label pl-2">1. بازی کارت حافظه</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
